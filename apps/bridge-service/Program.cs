using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using PK.BridgeService.Options;
using PK.BridgeService.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();

static int GetInt(string? value, int fallback)
    => int.TryParse(value, out var parsed) ? parsed : fallback;

static bool GetBool(string? value, bool fallback)
    => bool.TryParse(value, out var parsed) ? parsed : fallback;

void LoadEnvironment()
{
    var candidates = new[]
    {
        Path.Combine(Environment.CurrentDirectory, ".env"),
        Path.Combine(Environment.CurrentDirectory, "..", ".env"),
        Path.Combine(Environment.CurrentDirectory, "..", "..", ".env"),
        Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", ".env")
    };

    foreach (var candidate in candidates)
    {
        var fullPath = Path.GetFullPath(candidate);
        if (File.Exists(fullPath))
        {
            LoadFile(fullPath);
            break;
        }
    }

    static void LoadFile(string filePath)
    {
        foreach (var rawLine in File.ReadAllLines(filePath))
        {
            var line = rawLine.Trim();
            if (string.IsNullOrEmpty(line) || line.StartsWith('#'))
            {
                continue;
            }

            var separatorIndex = line.IndexOf('=');
            if (separatorIndex <= 0)
            {
                continue;
            }

            var key = line[..separatorIndex].Trim();
            var value = line[(separatorIndex + 1)..].Trim();

            if (value.StartsWith('"') && value.EndsWith('"') && value.Length >= 2)
            {
                value = value[1..^1];
            }

            if (Environment.GetEnvironmentVariable(key) is null)
            {
                Environment.SetEnvironmentVariable(key, value);
            }
        }
    }
}

LoadEnvironment();

var defaultBaudRate = GetInt(Environment.GetEnvironmentVariable("DEFAULT_SCALE_BAUD_RATE"), 9600);
var manualPortName = Environment.GetEnvironmentVariable("SCALE_MANUAL_PORT");
if (string.IsNullOrWhiteSpace(manualPortName))
{
    manualPortName = "COM3";
}

var manualScaleId = Environment.GetEnvironmentVariable("SCALE_MANUAL_SCALE_ID")
    ?? (string.IsNullOrWhiteSpace(manualPortName) ? Environment.MachineName : $"manual-{manualPortName}");
var manualBaudRate = GetInt(Environment.GetEnvironmentVariable("SCALE_MANUAL_BAUD_RATE"), defaultBaudRate);
var manualDataBits = GetInt(Environment.GetEnvironmentVariable("SCALE_MANUAL_DATA_BITS"), 8);
var manualParity = Environment.GetEnvironmentVariable("SCALE_MANUAL_PARITY") ?? "None";
var manualStopBits = Environment.GetEnvironmentVariable("SCALE_MANUAL_STOP_BITS") ?? "One";

var options = new ScaleServiceOptions
{
    DatabaseServer = Environment.GetEnvironmentVariable("SCALE_DB_SERVER")
        ?? Environment.GetEnvironmentVariable("DATABASE_SERVER")
        ?? "192.168.0.86",
    DatabasePort = GetInt(Environment.GetEnvironmentVariable("SCALE_DB_PORT")
        ?? Environment.GetEnvironmentVariable("DATABASE_PORT"), 49381),
    DatabaseName = Environment.GetEnvironmentVariable("SCALE_DB_NAME")
        ?? Environment.GetEnvironmentVariable("DATABASE_NAME")
        ?? "TFCPILOT3",
    DatabaseUsername = Environment.GetEnvironmentVariable("SCALE_DB_USERNAME")
        ?? Environment.GetEnvironmentVariable("DATABASE_USERNAME")
        ?? "NSW",
    DatabasePassword = Environment.GetEnvironmentVariable("SCALE_DB_PASSWORD")
        ?? Environment.GetEnvironmentVariable("DATABASE_PASSWORD")
        ?? "B3sp0k3",
    DefaultBaudRate = defaultBaudRate,
    PollingIntervalMilliseconds = GetInt(Environment.GetEnvironmentVariable("WEIGHT_POLLING_INTERVAL_MS"), 400),
    SerialReadTimeoutMilliseconds = GetInt(Environment.GetEnvironmentVariable("SCALE_READ_TIMEOUT_MS"), 500),
    DefaultUnit = Environment.GetEnvironmentVariable("SCALE_DEFAULT_UNIT") ?? "KG",
    VerboseLogging = GetBool(Environment.GetEnvironmentVariable("VERBOSE_LOGGING"), false),
    ManualPortName = manualPortName,
    ManualScaleId = manualScaleId,
    ManualBaudRate = manualBaudRate,
    ManualDataBits = manualDataBits,
    ManualParity = manualParity,
    ManualStopBits = manualStopBits,
    ManualNativePortName = Environment.GetEnvironmentVariable("SCALE_MANUAL_NATIVE_PORT")
};

builder.Services.AddSingleton(options);
builder.Services.AddSingleton<ScaleConfigurationService>();
builder.Services.AddSingleton<ScaleBroadcastService>();
builder.Services.AddHostedService<ScalePollingHostedService>();

var app = builder.Build();

app.UseWebSockets();

app.MapGet("/", () => Results.Ok(new
{
    service = "PK Bridge Service",
    description = "ScaleLibrary.dll WebSocket bridge",
    workstation = options.ComputerName
}));

app.MapGet("/health", () => Results.Ok(new
{
    status = "ok",
    workstation = options.ComputerName,
    timestamp = DateTime.UtcNow
}));

app.MapGet("/scales", async (ScaleConfigurationService configurationService, CancellationToken cancellationToken) =>
{
    var configs = await configurationService.GetActiveConfigurationsAsync(cancellationToken);
    return Results.Ok(configs);
});

app.MapGet("/ws/scale", async (HttpContext context, ScaleBroadcastService broadcastService) =>
{
    if (!context.WebSockets.IsWebSocketRequest)
    {
        context.Response.StatusCode = StatusCodes.Status400BadRequest;
        await context.Response.WriteAsync("Expected WebSocket request");
        return;
    }

    using var webSocket = await context.WebSockets.AcceptWebSocketAsync();
    var clientId = broadcastService.Register(webSocket);

    await broadcastService.HandleClientAsync(clientId, webSocket, context.RequestAborted);
});

var serverHost = Environment.GetEnvironmentVariable("SERVER_HOST") ?? "0.0.0.0";
var bridgePort = Environment.GetEnvironmentVariable("BRIDGE_SERVICE_PORT") ?? "5000";
var bindUrl = $"http://{serverHost}:{bridgePort}";

app.Logger.LogInformation("PK Bridge Service listening on {Url}", bindUrl);

await app.RunAsync(bindUrl);
