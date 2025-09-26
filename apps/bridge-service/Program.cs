// PK Bridge Service - C# .NET Minimal API
// Placeholder implementation for ScaleLibrary.dll integration

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Root endpoint
app.MapGet("/", () => "PK Bridge Service - C# .NET for ScaleLibrary.dll");

// Health check endpoint
app.MapGet("/health", () => Results.Ok("Bridge service is running"));

// Mock weight scale endpoints
app.MapGet("/weight", () => new
{
    weight = 19.985 + (Random.Shared.NextDouble() * 0.05), // Random weight within range
    unit = "KG",
    stable = true,
    timestamp = DateTime.UtcNow,
    scaleId = "USB-SCALE-001"
});

app.MapPost("/weight/tare", () => new
{
    success = true,
    message = "Scale tared successfully",
    timestamp = DateTime.UtcNow
});

app.MapPost("/weight/calibrate", () => new
{
    success = true,
    message = "Scale calibration started",
    timestamp = DateTime.UtcNow
});

// Scale configuration endpoints
app.MapGet("/scales", () => new[]
{
    new {
        id = "USB-SCALE-001",
        comPort = "COM1",
        baudRate = 9600,
        capacity = "30KG",
        precision = "0.001KG",
        status = "connected",
        workstation = "WS-001"
    }
});

// Get server configuration from environment - NO hardcoding
var serverHost = Environment.GetEnvironmentVariable("SERVER_HOST") ?? "0.0.0.0";
var bridgePort = Environment.GetEnvironmentVariable("BRIDGE_SERVICE_PORT") ?? "5000";
var bindUrl = $"http://{serverHost}:{bridgePort}";
var displayUrl = $"http://{serverHost}:{bridgePort}";

Console.WriteLine("🔷 PK Bridge Service starting...");
Console.WriteLine($"📡 Scale API: {displayUrl}");
Console.WriteLine($"❤️  Health check: {displayUrl}/health");
Console.WriteLine($"⚖️  Weight endpoint: {displayUrl}/weight");

app.Run(bindUrl);