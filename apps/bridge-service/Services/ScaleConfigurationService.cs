using System;
using System.Collections.Generic;
using System.Data;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using PK.BridgeService.Models;
using PK.BridgeService.Options;

namespace PK.BridgeService.Services;

public sealed class ScaleConfigurationService
{
    private readonly ScaleServiceOptions _options;
    private readonly ILogger<ScaleConfigurationService> _logger;

    public ScaleConfigurationService(
        ScaleServiceOptions options,
        ILogger<ScaleConfigurationService> logger)
    {
        _options = options;
        _logger = logger;
    }

    public async Task<IReadOnlyList<ScaleConfiguration>> GetActiveConfigurationsAsync(CancellationToken cancellationToken)
    {
        var configurations = new List<ScaleConfiguration>();

        const string query = @"
            SELECT ws.WorkstationName,
                   ws.ControllerID,
                   c.PortName,
                   COALESCE(c.BaudRate, @DefaultBaud) AS BaudRate,
                    COALESCE(c.DataBits, 8) AS DataBits,
                   COALESCE(c.Parity, 'None') AS Parity,
                   COALESCE(c.StopBits, 'One') AS StopBits
            FROM TFC_Weighup_WorkStations ws
            INNER JOIN TFC_Weighup_Controllers c ON c.ControllerID = ws.ControllerID
            WHERE ws.WorkstationName = @WorkstationName
        ";
        try
        {
            await using var connection = new SqlConnection(_options.BuildConnectionString());
            await connection.OpenAsync(cancellationToken);

            await using var command = new SqlCommand(query, connection)
            {
                CommandType = CommandType.Text
            };

            command.Parameters.Add(new SqlParameter("@WorkstationName", SqlDbType.NVarChar, 128)
            {
                Value = _options.ComputerName
            });

            command.Parameters.Add(new SqlParameter("@DefaultBaud", SqlDbType.Int)
            {
                Value = _options.DefaultBaudRate
            });

            await using var reader = await command.ExecuteReaderAsync(cancellationToken);
            while (await reader.ReadAsync(cancellationToken))
            {
                var controllerId = GetString(reader, "ControllerID", string.Empty);
                var portName = GetString(reader, "PortName", string.Empty);
                var workstationName = GetString(reader, "WorkstationName", _options.ComputerName);

                if (string.IsNullOrWhiteSpace(portName))
                {
                    continue;
                }

            var config = new ScaleConfiguration
            {
                ControllerId = string.IsNullOrWhiteSpace(controllerId) ? workstationName : controllerId,
                PortName = portName,
                WorkstationName = workstationName,
                ScaleId = string.IsNullOrWhiteSpace(controllerId) ? workstationName : controllerId,
                BaudRate = GetInt(reader, "BaudRate", _options.DefaultBaudRate),
                DataBits = GetInt(reader, "DataBits", 8),
                Parity = GetString(reader, "Parity", "None"),
                StopBits = GetString(reader, "StopBits", "One"),
                NativePortName = null
            };

                configurations.Add(config);
            }

            if (configurations.Count == 0)
            {
                _logger.LogWarning("No scale configuration found for workstation {WorkstationName}", _options.ComputerName);
            }
            else
            {
                _logger.LogInformation("Loaded {Count} scale configuration(s) for workstation {WorkstationName}", configurations.Count, _options.ComputerName);
            }

            return configurations;
        }
        catch (SqlException ex)
        {
            _logger.LogError(ex, "Unable to load scale configuration from {Server}:{Port}/{Database}", _options.DatabaseServer, _options.DatabasePort, _options.DatabaseName);
            return BuildManualFallback();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unexpected error loading scale configuration");
            return BuildManualFallback();
        }
    }

    private static int GetInt(SqlDataReader reader, string columnName, int fallback)
    {
        var value = reader[columnName];
        if (value is null || value == DBNull.Value)
        {
            return fallback;
        }

        return value switch
        {
            int i => i,
            short s => s,
            byte b => b,
            long l => (int)l,
            decimal d => (int)d,
            double dbl => (int)dbl,
            float f => (int)f,
            string str when int.TryParse(str, out var result) => result,
            _ => fallback
        };
    }

    private static string GetString(SqlDataReader reader, string columnName, string fallback)
    {
        var value = reader[columnName];
        if (value is null || value == DBNull.Value)
        {
            return fallback;
        }

        return value.ToString() ?? fallback;
    }

    private IReadOnlyList<ScaleConfiguration> BuildManualFallback()
    {
        if (string.IsNullOrWhiteSpace(_options.ManualPortName))
        {
            return Array.Empty<ScaleConfiguration>();
        }

        _logger.LogWarning("Using manual scale configuration for port {PortName}", _options.ManualPortName);

        var baudRate = _options.ManualBaudRate > 0 ? _options.ManualBaudRate : _options.DefaultBaudRate;

        var config = new ScaleConfiguration
        {
            ControllerId = _options.ManualScaleId,
            PortName = _options.ManualPortName!,
            WorkstationName = _options.ComputerName,
            ScaleId = _options.ManualScaleId,
            BaudRate = baudRate,
            DataBits = _options.ManualDataBits,
            Parity = _options.ManualParity,
            StopBits = _options.ManualStopBits,
            NativePortName = _options.ManualNativePortName
        };

        return new[] { config };
    }
}
