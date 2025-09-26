import { Injectable, signal, computed, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject, timer } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { retryWhen, delay, takeUntil, tap, catchError, filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

// WebSocket message interfaces
export interface ScaleWeight {
  scaleId: string;
  weight: number;
  unit: string;
  stable: boolean;
  timestamp: number;
}

export interface ScaleStatus {
  connected: boolean;
  scaleId: string;
  port?: string;
  error?: string;
}

export interface ScaleCommand {
  type: 'tare' | 'calibrate' | 'reset';
  scaleId: string;
}

// Connection states
export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  RECONNECTING = 'reconnecting',
  ERROR = 'error'
}

@Injectable({
  providedIn: 'root'
})
export class WeightScaleService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private ws$?: WebSocketSubject<any>;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 10;
  private reconnectInterval = 1000; // Start with 1 second

  // Angular 20 signals for reactive state management
  private _connectionState = signal<ConnectionState>(ConnectionState.DISCONNECTED);
  private _currentWeight = signal<ScaleWeight | null>(null);
  private _scaleStatus = signal<ScaleStatus[]>([]);
  private _lastError = signal<string>('');

  // Public readonly signals
  public readonly connectionState = this._connectionState.asReadonly();
  public readonly currentWeight = this._currentWeight.asReadonly();
  public readonly scaleStatus = this._scaleStatus.asReadonly();
  public readonly lastError = this._lastError.asReadonly();

  // Computed signals
  public readonly isConnected = computed(() =>
    this._connectionState() === ConnectionState.CONNECTED
  );

  public readonly hasError = computed(() =>
    this._lastError().length > 0
  );

  public readonly primaryScale = computed(() =>
    this._scaleStatus().find(scale => scale.connected) || null
  );

  constructor() {
    this.connect();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.disconnect();
  }

  /**
   * Connect to WebSocket bridge service
   */
  private connect(): void {
    if (this._connectionState() === ConnectionState.CONNECTING ||
        this._connectionState() === ConnectionState.CONNECTED) {
      return;
    }

    this._connectionState.set(ConnectionState.CONNECTING);
    this._lastError.set('');

    // Get WebSocket URL from environment
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = environment.production ? window.location.host : 'localhost:5000';
    const wsUrl = `${protocol}//${host}/ws/scale`;

    console.log(`Connecting to scale WebSocket: ${wsUrl}`);

    this.ws$ = webSocket({
      url: wsUrl,
      openObserver: {
        next: () => {
          console.log('Scale WebSocket connected');
          this._connectionState.set(ConnectionState.CONNECTED);
          this.reconnectAttempts = 0;
          this.reconnectInterval = 1000;
        }
      },
      closeObserver: {
        next: () => {
          console.log('Scale WebSocket disconnected');
          this._connectionState.set(ConnectionState.DISCONNECTED);
          this._currentWeight.set(null);
        }
      }
    });

    // Subscribe to messages
    this.ws$.pipe(
      takeUntil(this.destroy$),
      retryWhen(errors => errors.pipe(
        tap(error => {
          console.error('Scale WebSocket error:', error);
          this._lastError.set(`Connection error: ${error.message || 'Unknown error'}`);
          this._connectionState.set(ConnectionState.RECONNECTING);
        }),
        delay(this.getReconnectDelay()),
        filter(() => this.reconnectAttempts < this.maxReconnectAttempts),
        tap(() => {
          this.reconnectAttempts++;
          console.log(`Reconnect attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);
        })
      )),
      catchError(error => {
        console.error('Scale WebSocket unrecoverable error:', error);
        this._connectionState.set(ConnectionState.ERROR);
        this._lastError.set(`Failed to connect after ${this.maxReconnectAttempts} attempts`);
        throw error;
      })
    ).subscribe({
      next: (message) => this.handleMessage(message),
      error: (error) => {
        console.error('Scale WebSocket stream error:', error);
        this._connectionState.set(ConnectionState.ERROR);
      }
    });
  }

  /**
   * Disconnect from WebSocket
   */
  private disconnect(): void {
    if (this.ws$) {
      this.ws$.complete();
      this.ws$ = undefined;
    }
    this._connectionState.set(ConnectionState.DISCONNECTED);
    this._currentWeight.set(null);
  }

  /**
   * Handle incoming WebSocket messages
   */
  private handleMessage(message: any): void {
    try {
      switch (message.type) {
        case 'weight':
          this.handleWeightMessage(message.data as ScaleWeight);
          break;
        case 'status':
          this.handleStatusMessage(message.data as ScaleStatus);
          break;
        case 'error':
          this._lastError.set(message.data.message || 'Unknown error');
          break;
        default:
          console.warn('Unknown message type:', message.type);
      }
    } catch (error) {
      console.error('Error handling WebSocket message:', error, message);
    }
  }

  /**
   * Handle weight data messages
   */
  private handleWeightMessage(weight: ScaleWeight): void {
    // Validate weight data
    if (!weight.scaleId || typeof weight.weight !== 'number') {
      console.warn('Invalid weight data:', weight);
      return;
    }

    // Update current weight
    this._currentWeight.set({
      ...weight,
      timestamp: Date.now()
    });

    // Clear any previous errors
    this._lastError.set('');
  }

  /**
   * Handle scale status messages
   */
  private handleStatusMessage(status: ScaleStatus): void {
    const currentStatus = this._scaleStatus();
    const existingIndex = currentStatus.findIndex(s => s.scaleId === status.scaleId);

    if (existingIndex >= 0) {
      // Update existing scale status
      const updatedStatus = [...currentStatus];
      updatedStatus[existingIndex] = status;
      this._scaleStatus.set(updatedStatus);
    } else {
      // Add new scale status
      this._scaleStatus.set([...currentStatus, status]);
    }
  }

  /**
   * Get reconnect delay with exponential backoff
   */
  private getReconnectDelay(): number {
    const delay = Math.min(this.reconnectInterval * Math.pow(2, this.reconnectAttempts), 30000);
    return delay;
  }

  /**
   * Send command to scale
   */
  public sendCommand(command: ScaleCommand): void {
    if (!this.isConnected() || !this.ws$) {
      console.warn('Cannot send command: WebSocket not connected');
      return;
    }

    try {
      this.ws$.next({
        type: 'command',
        data: command
      });
    } catch (error) {
      console.error('Error sending scale command:', error);
      this._lastError.set(`Command failed: ${error}`);
    }
  }

  /**
   * Tare the specified scale
   */
  public tare(scaleId: string = 'primary'): void {
    this.sendCommand({ type: 'tare', scaleId });
  }

  /**
   * Calibrate the specified scale
   */
  public calibrate(scaleId: string = 'primary'): void {
    this.sendCommand({ type: 'calibrate', scaleId });
  }

  /**
   * Reset the specified scale
   */
  public reset(scaleId: string = 'primary'): void {
    this.sendCommand({ type: 'reset', scaleId });
  }

  /**
   * Manually reconnect
   */
  public reconnect(): void {
    this.disconnect();
    this.reconnectAttempts = 0;
    setTimeout(() => this.connect(), 100);
  }

  /**
   * Get weight stream as Observable for reactive programming
   */
  public getWeightStream(): Observable<ScaleWeight> {
    return new Observable<ScaleWeight>(subscriber => {
      const subscription = timer(0, 50).subscribe(() => {
        const weight = this._currentWeight();
        if (weight) {
          subscriber.next(weight);
        }
      });

      return () => subscription.unsubscribe();
    }).pipe(
      filter((weight): weight is ScaleWeight => weight !== null),
      takeUntil(this.destroy$)
    );
  }

  /**
   * Check if weight is stable for the specified duration (ms)
   */
  public isWeightStable(toleranceKg: number = 0.001, durationMs: number = 2000): boolean {
    const weight = this._currentWeight();
    if (!weight || !weight.stable) {
      return false;
    }

    // For now, trust the scale's stability flag
    // In a real implementation, we might track weight history
    return weight.stable;
  }
}