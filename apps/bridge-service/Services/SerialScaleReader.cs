using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Ports;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PK.BridgeService.Models;
using PK.BridgeService.Options;

namespace PK.BridgeService.Services;

public sealed class SerialScaleReader : IAsyncDisposable
{
    private static readonly Regex WeightRegex = new(@"(?<sign>[+-])?(?<value>\d+(?:[\.,]\d+)?)", RegexOptions.Compiled);
    private readonly ScaleConfiguration _configuration;
    private readonly ScaleServiceOptions _options;
    private readonly ILogger<SerialScaleReader> _logger;

    private SerialPort? _serialPort;
    private bool _lastConnectionStatus;
    private string? _resolvedPortName;
    private bool _portDiscoveryLogged;
    private bool _portAccessLogged;
    private bool _portUnavailableLogged;
    private bool _portMissingLogged;

    public event EventHandler<ScaleWeightSnapshot>? WeightReceived;
    public event EventHandler<ScaleStatusSnapshot>? StatusChanged;

    public SerialScaleReader(
        ScaleConfiguration configuration,
        ScaleServiceOptions options,
        ILogger<SerialScaleReader> logger)
    {
        _configuration = configuration;
        _options = options;
        _logger = logger;
    }

    public async Task RunAsync(CancellationToken cancellationToken)
    {
        while (!cancellationToken.IsCancellationRequested)
        {
            try
            {
                EnsureSerialPort();
                await PollAsync(cancellationToken);
            }
            catch (OperationCanceledException)
            {
                break;
            }
            catch (UnauthorizedAccessException ex)
            {
                if (!_portAccessLogged)
                {
                    _logger.LogError(ex,
                        "Access denied opening serial port {ResolvedPort} (configured {ConfiguredPort}). " +
                        "Ensure the device exists and that the process has permission, or set SCALE_MANUAL_NATIVE_PORT.",
                        GetDisplayPort(),
                        _configuration.PortName);
                    _portAccessLogged = true;
                }

                UpdateStatus(false, ex.Message);
                await Task.Delay(TimeSpan.FromSeconds(3), cancellationToken);
                ResetSerialPort();
            }
            catch (IOException ex)
            {
                if (!_portUnavailableLogged)
                {
                    _logger.LogError(ex,
                        "Serial port {ResolvedPort} (configured {ConfiguredPort}) is unavailable.",
                        GetDisplayPort(),
                        _configuration.PortName);
                    _portUnavailableLogged = true;
                }

                UpdateStatus(false, ex.Message);
                await Task.Delay(TimeSpan.FromSeconds(3), cancellationToken);
                ResetSerialPort();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error polling scale {ScaleId} on {Port}", _configuration.ScaleId, GetDisplayPort());
                UpdateStatus(false, ex.Message);
                await Task.Delay(TimeSpan.FromSeconds(2), cancellationToken);
                ResetSerialPort();
            }

            await Task.Delay(TimeSpan.FromMilliseconds(_options.PollingIntervalMilliseconds), cancellationToken);
        }
    }

    private void EnsureSerialPort()
    {
        if (_serialPort is { IsOpen: true })
        {
            return;
        }

        ResetSerialPort();

        var parity = ParseParity(_configuration.Parity);
        var stopBits = ParseStopBits(_configuration.StopBits);

        var portName = ResolvePortName();

        _serialPort = new SerialPort(portName)
        {
            BaudRate = _configuration.BaudRate,
            DataBits = _configuration.DataBits,
            Parity = parity,
            StopBits = stopBits,
            ReadTimeout = _options.SerialReadTimeoutMilliseconds,
            WriteTimeout = _options.SerialReadTimeoutMilliseconds,
            NewLine = "\r\n"
        };

        _serialPort.Open();
        _portAccessLogged = false;
        _portUnavailableLogged = false;
        UpdateStatus(true, null);
        _logger.LogInformation("Opened serial port {Port} (configured {ConfiguredPort}) for scale {ScaleId} (baud {Baud})",
            portName,
            _configuration.PortName,
            _configuration.ScaleId,
            _configuration.BaudRate);
    }

    private async Task PollAsync(CancellationToken cancellationToken)
    {
        if (_serialPort is not { IsOpen: true } port)
        {
            return;
        }

        try
        {
            // Clear any buffered data
            port.DiscardInBuffer();

            // Many scales respond to "P" command request; fallback to requesting data by newline
            port.WriteLine("P");
        }
        catch (TimeoutException)
        {
            _logger.LogWarning("Write timeout issuing poll command to scale {ScaleId}", _configuration.ScaleId);
        }

        await Task.Delay(TimeSpan.FromMilliseconds(_options.SerialReadTimeoutMilliseconds), cancellationToken);

        string rawData;
        try
        {
            rawData = port.ReadExisting();
        }
        catch (TimeoutException)
        {
            return;
        }

        if (string.IsNullOrWhiteSpace(rawData))
        {
            return;
        }

        var snapshot = ParseWeight(rawData);
        if (snapshot is not null)
        {
            WeightReceived?.Invoke(this, snapshot);
        }
    }

    private string ResolvePortName()
    {
        if (_resolvedPortName is not null)
        {
            return _resolvedPortName;
        }

        var candidates = BuildPortCandidates();

        if (OperatingSystem.IsWindows())
        {
            _resolvedPortName = candidates.FirstOrDefault() ?? _configuration.PortName;
            return _resolvedPortName;
        }

        var availablePorts = GetAvailablePorts();

        foreach (var candidate in candidates)
        {
            foreach (var alias in ExpandPortAliases(candidate))
            {
                if (availablePorts.Contains(alias) || File.Exists(alias))
                {
                    _resolvedPortName = alias;
                    LogResolvedPort(alias, candidate);
                    return _resolvedPortName;
                }
            }
        }

        _resolvedPortName = candidates.FirstOrDefault() ?? _configuration.PortName;

        if (!_portMissingLogged)
        {
            _logger.LogWarning(
                "Unable to resolve serial device for configured port {Port}. Set SCALE_MANUAL_NATIVE_PORT to override.",
                _configuration.PortName);
            _portMissingLogged = true;
        }

        return _resolvedPortName;
    }

    private List<string> BuildPortCandidates()
    {
        var list = new List<string>();
        var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        void Add(string? value)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                return;
            }

            var trimmed = value.Trim();
            if (seen.Add(trimmed))
            {
                list.Add(trimmed);
            }
        }

        Add(_configuration.NativePortName);
        Add(_options.ManualNativePortName);
        Add(_configuration.PortName);

        if (TryParseComPort(_configuration.PortName, out var comNumber))
        {
            Add($"ttyS{Math.Max(0, comNumber - 1)}");
            Add($"ttyS{comNumber}");
            Add($"ttyUSB{Math.Max(0, comNumber - 1)}");
            Add($"ttyUSB{comNumber}");
            Add($"ttyACM{Math.Max(0, comNumber - 1)}");
            Add($"ttyACM{comNumber}");
        }

        return list;
    }

    private static HashSet<string> GetAvailablePorts()
    {
        var ports = SerialPort.GetPortNames();
        var set = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        foreach (var port in ports)
        {
            foreach (var alias in ExpandPortAliases(port))
            {
                set.Add(alias);
            }
        }

        return set;
    }

    private static IEnumerable<string> ExpandPortAliases(string? port)
    {
        if (string.IsNullOrWhiteSpace(port))
        {
            yield break;
        }

        yield return port;

        if (!port.Contains('/'))
        {
            yield return $"/dev/{port}";
        }
        else if (port.StartsWith("/dev/", StringComparison.OrdinalIgnoreCase))
        {
            var suffix = port[5..];
            if (!string.IsNullOrWhiteSpace(suffix))
            {
                yield return suffix;
            }
        }
    }

    private void LogResolvedPort(string resolved, string original)
    {
        if (_portDiscoveryLogged)
        {
            return;
        }

        if (!string.Equals(resolved, original, StringComparison.OrdinalIgnoreCase))
        {
            _logger.LogInformation("Resolved serial port {OriginalPort} to {ResolvedPort}", original, resolved);
        }
        else if (_options.VerboseLogging)
        {
            _logger.LogInformation("Using serial port {ResolvedPort}", resolved);
        }

        _portDiscoveryLogged = true;
    }

    private static bool TryParseComPort(string? portName, out int number)
    {
        number = default;
        if (string.IsNullOrWhiteSpace(portName))
        {
            return false;
        }

        var trimmed = portName.Trim();
        if (!trimmed.StartsWith("COM", StringComparison.OrdinalIgnoreCase))
        {
            return false;
        }

        return int.TryParse(trimmed[3..], out number) && number >= 0;
    }

    private string GetDisplayPort()
        => _resolvedPortName
           ?? _configuration.NativePortName
           ?? _options.ManualNativePortName
           ?? _configuration.PortName;

    private ScaleWeightSnapshot? ParseWeight(string rawData)
    {
        var lines = rawData.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);

        foreach (var line in lines)
        {
            var match = WeightRegex.Match(line);
            if (!match.Success)
            {
                continue;
            }

            var numericPortion = match.Groups["value"].Value.Replace(',', '.');

            if (!double.TryParse(numericPortion, NumberStyles.AllowDecimalPoint, CultureInfo.InvariantCulture, out var value))
            {
                continue;
            }

            var sign = match.Groups["sign"].Success && match.Groups["sign"].Value == "-" ? -1 : 1;
            var stable = line.Contains("ST", StringComparison.OrdinalIgnoreCase) ||
                         line.Contains("OK", StringComparison.OrdinalIgnoreCase);

            return new ScaleWeightSnapshot
            {
                ScaleId = _configuration.ScaleId ?? _configuration.ControllerId,
                Weight = Math.Round(value * sign, 4),
                Unit = DetectUnit(line) ?? _options.DefaultUnit,
                Stable = stable,
                TimestampUtc = DateTime.UtcNow
            };
        }

        if (_options.VerboseLogging)
        {
            _logger.LogDebug("Unparsed scale data from {ScaleId}: {Payload}", _configuration.ScaleId, rawData);
        }

        return null;
    }

    private static string? DetectUnit(string payload)
    {
        payload = payload.ToLowerInvariant();
        if (payload.Contains(" kg") || payload.Contains("kg"))
        {
            return "KG";
        }

        if (payload.Contains(" g") || payload.Contains("gram"))
        {
            return "G";
        }

        if (payload.Contains(" lb") || payload.Contains("lbs"))
        {
            return "LB";
        }

        return null;
    }

    private void UpdateStatus(bool connected, string? error)
    {
        if (_lastConnectionStatus == connected && string.IsNullOrEmpty(error))
        {
            return;
        }

        _lastConnectionStatus = connected;
        StatusChanged?.Invoke(this, new ScaleStatusSnapshot
        {
            ScaleId = _configuration.ScaleId ?? _configuration.ControllerId,
            Connected = connected,
            PortName = _configuration.PortName,
            Error = error
        });
    }

    private void ResetSerialPort()
    {
        if (_serialPort is null)
        {
            return;
        }

        try
        {
            if (_serialPort.IsOpen)
            {
                _serialPort.Close();
            }
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Failed closing serial port {Port}", _configuration.PortName);
        }
        finally
        {
            _serialPort.Dispose();
            _serialPort = null;
        }
    }

    private static Parity ParseParity(string? parity)
    {
        return parity?.ToLowerInvariant() switch
        {
            "even" => Parity.Even,
            "mark" => Parity.Mark,
            "odd" => Parity.Odd,
            "space" => Parity.Space,
            _ => Parity.None
        };
    }

    private static StopBits ParseStopBits(string? stopBits)
    {
        return stopBits?.ToLowerInvariant() switch
        {
            "none" => StopBits.None,
            "two" => StopBits.Two,
            "onepointfive" or "1.5" or "1,5" => StopBits.OnePointFive,
            _ => StopBits.One
        };
    }

    public async ValueTask DisposeAsync()
    {
        ResetSerialPort();
        await Task.CompletedTask;
    }
}
