// PK Bridge Service - C# .NET Minimal API
// Placeholder implementation for ScaleLibrary.dll integration

using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Enable CORS
app.UseCors("AllowAll");

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

Console.WriteLine("🔷 PK Bridge Service starting...");
Console.WriteLine("📡 Scale API: http://localhost:5000");
Console.WriteLine("❤️  Health check: http://localhost:5000/health");
Console.WriteLine("⚖️  Weight endpoint: http://localhost:5000/weight");

app.Run("http://0.0.0.0:5000");