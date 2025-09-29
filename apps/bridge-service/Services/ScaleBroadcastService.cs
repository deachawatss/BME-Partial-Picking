using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PK.BridgeService.Models;

namespace PK.BridgeService.Services;

public sealed class ScaleBroadcastService
{
    private readonly ConcurrentDictionary<Guid, WebSocket> _clients = new();
    private readonly ConcurrentDictionary<string, ScaleStatusSnapshot> _lastStatuses = new(StringComparer.OrdinalIgnoreCase);
    private readonly ConcurrentDictionary<string, ScaleWeightSnapshot> _lastWeights = new(StringComparer.OrdinalIgnoreCase);
    private readonly ILogger<ScaleBroadcastService> _logger;
    private readonly JsonSerializerOptions _jsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = false
    };

    public ScaleBroadcastService(ILogger<ScaleBroadcastService> logger)
    {
        _logger = logger;
    }

    public Guid Register(WebSocket webSocket)
    {
        var id = Guid.NewGuid();
        _clients[id] = webSocket;
        _logger.LogInformation("Client {ClientId} connected. Active clients: {Count}", id, _clients.Count);
        return id;
    }

    public void Unregister(Guid clientId)
    {
        if (_clients.TryRemove(clientId, out _))
        {
            _logger.LogInformation("Client {ClientId} disconnected. Active clients: {Count}", clientId, _clients.Count);
        }
    }

    public async Task HandleClientAsync(Guid clientId, WebSocket webSocket, CancellationToken cancellationToken)
    {
        var buffer = new byte[1024];

        try
        {
            await SendInitialStateAsync(webSocket, cancellationToken);

            while (!cancellationToken.IsCancellationRequested && webSocket.State == WebSocketState.Open)
            {
                var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), cancellationToken);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    break;
                }

                // Currently we do not process inbound messages; future commands can be handled here.
            }
        }
        catch (OperationCanceledException)
        {
            // Ignored
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "WebSocket client {ClientId} failed", clientId);
        }
        finally
        {
            Unregister(clientId);
            if (webSocket.State is WebSocketState.Open or WebSocketState.CloseReceived)
            {
                await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
            }
        }
    }

    public async Task BroadcastWeightAsync(ScaleWeightSnapshot snapshot, CancellationToken cancellationToken)
    {
        _lastWeights[snapshot.ScaleId] = snapshot;
        var payload = BuildWeightPayload(snapshot);
        await BroadcastAsync(payload, cancellationToken);
    }

    public async Task BroadcastStatusAsync(ScaleStatusSnapshot status, CancellationToken cancellationToken)
    {
        _lastStatuses[status.ScaleId] = status;
        var payload = BuildStatusPayload(status);
        await BroadcastAsync(payload, cancellationToken);
    }

    public async Task SendInitialStateAsync(WebSocket socket, CancellationToken cancellationToken)
    {
        foreach (var status in _lastStatuses.Values)
        {
            await SendAsync(socket, BuildStatusPayload(status), cancellationToken);
        }

        foreach (var weight in _lastWeights.Values)
        {
            await SendAsync(socket, BuildWeightPayload(weight), cancellationToken);
        }
    }

    private async Task BroadcastAsync(object payload, CancellationToken cancellationToken)
    {
        if (_clients.IsEmpty)
        {
            return;
        }

        foreach (var (clientId, socket) in _clients.ToArray())
        {
            if (socket.State != WebSocketState.Open)
            {
                Unregister(clientId);
                continue;
            }

            try
            {
                await SendAsync(socket, payload, cancellationToken);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed broadcasting to client {ClientId}. Removing connection", clientId);
                Unregister(clientId);
            }
        }
    }

    private Task SendAsync(WebSocket socket, object payload, CancellationToken cancellationToken)
    {
        var messageBytes = JsonSerializer.SerializeToUtf8Bytes(payload, _jsonOptions);
        return socket.SendAsync(new ArraySegment<byte>(messageBytes), WebSocketMessageType.Text, true, cancellationToken);
    }

    private static object BuildWeightPayload(ScaleWeightSnapshot snapshot)
    {
        return new
        {
            type = "weight",
            data = new
            {
                scaleId = snapshot.ScaleId,
                weight = snapshot.Weight,
                unit = snapshot.Unit,
                stable = snapshot.Stable,
                timestamp = new DateTimeOffset(snapshot.TimestampUtc).ToUnixTimeMilliseconds()
            }
        };
    }

    private static object BuildStatusPayload(ScaleStatusSnapshot status)
    {
        return new
        {
            type = "status",
            data = new
            {
                scaleId = status.ScaleId,
                connected = status.Connected,
                port = status.PortName,
                error = status.Error
            }
        };
    }
}
