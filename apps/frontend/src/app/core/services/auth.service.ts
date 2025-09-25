import { Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject, timer } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

// Authentication Response Interface
interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    username: string;
    displayName: string;
    workstationId?: string;
    roles?: string[];
  };
}

// User Interface
interface User {
  id: string;
  username: string;
  displayName: string;
  workstationId?: string;
  roles?: string[];
}

// Connection Status Type
type ConnectionStatus = 'unknown' | 'connected' | 'disconnected';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_BASE = 'http://localhost:7070/api';
  private readonly TOKEN_KEY = 'pk_auth_token';
  private readonly USER_KEY = 'pk_auth_user';
  private readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

  // Angular 20 Signals for reactive state management
  private _isAuthenticated = signal<boolean>(false);
  private _currentUser = signal<User | null>(null);
  private _connectionStatus = signal<ConnectionStatus>('unknown');
  private _sessionTimeout = signal<number | null>(null);

  // Computed signals
  public readonly isAuthenticated = this._isAuthenticated.asReadonly();
  public readonly currentUser = this._currentUser.asReadonly();
  public readonly connectionStatus = this._connectionStatus.asReadonly();

  // Computed properties
  public readonly isConnected = computed(() => this._connectionStatus() === 'connected');
  public readonly userDisplayName = computed(() => this._currentUser()?.displayName || '');
  public readonly workstationId = computed(() => this._currentUser()?.workstationId || '');

  // Session management
  private sessionTimer?: ReturnType<typeof setTimeout>;
  private lastActivity = new BehaviorSubject<Date>(new Date());

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.initializeAuth();
    this.startSessionMonitoring();
  }

  /**
   * Initialize authentication state from stored tokens
   */
  private initializeAuth(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const userJson = localStorage.getItem(this.USER_KEY);

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        this._isAuthenticated.set(true);
        this._currentUser.set(user);
        this.setupSessionTimeout();
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        this.clearAuthData();
      }
    }
  }

  /**
   * Login with username and password
   */
  login(username: string, password: string): Observable<AuthResponse> {
    const loginData = {
      username: username.trim(),
      password: password,
      workstationId: this.getWorkstationId()
    };

    return this.http.post<AuthResponse>(`${this.API_BASE}/auth/login`, loginData).pipe(
      tap(response => {
        if (response.success && response.token && response.user) {
          this.setAuthData(response.token, response.user);
          this._isAuthenticated.set(true);
          this._currentUser.set(response.user);
          this.setupSessionTimeout();
          this.updateLastActivity();
        }
      }),
      catchError(this.handleAuthError.bind(this))
    );
  }

  /**
   * Logout and clear authentication data
   */
  logout(): void {
    this.clearAuthData();
    this._isAuthenticated.set(false);
    this._currentUser.set(null);
    this.clearSessionTimeout();
    this.router.navigate(['/login']);
  }

  /**
   * Check if user is currently authenticated
   */
  isAuthenticatedSync(): boolean {
    return this._isAuthenticated();
  }

  /**
   * Get current authentication token
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Test connection to backend
   */
  testConnection(): Observable<boolean> {
    return this.http.get(`${this.API_BASE}/health`, { responseType: 'text' }).pipe(
      map(() => {
        this._connectionStatus.set('connected');
        return true;
      }),
      catchError(() => {
        this._connectionStatus.set('disconnected');
        return of(false);
      })
    );
  }

  /**
   * Refresh authentication token
   */
  refreshToken(): Observable<AuthResponse> {
    const currentToken = this.getToken();

    if (!currentToken) {
      return throwError(() => new Error('No token available for refresh'));
    }

    return this.http.post<AuthResponse>(`${this.API_BASE}/auth/refresh`, {
      token: currentToken,
      workstationId: this.getWorkstationId()
    }).pipe(
      tap(response => {
        if (response.success && response.token && response.user) {
          this.setAuthData(response.token, response.user);
          this.setupSessionTimeout();
          this.updateLastActivity();
        }
      }),
      catchError(this.handleAuthError.bind(this))
    );
  }

  /**
   * Update last activity timestamp
   */
  updateLastActivity(): void {
    this.lastActivity.next(new Date());
    this.setupSessionTimeout();
  }

  /**
   * Get workstation ID from environment or generate one
   */
  private getWorkstationId(): string {
    // Try to get from environment or browser
    return navigator.userAgent.includes('Chrome') ?
      `WS-${Date.now().toString(36)}` :
      `WS-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Store authentication data securely
   */
  private setAuthData(token: string, user: User): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /**
   * Clear all authentication data
   */
  private clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  /**
   * Setup session timeout monitoring
   */
  private setupSessionTimeout(): void {
    this.clearSessionTimeout();

    this.sessionTimer = setTimeout(() => {
      console.log('Session timeout - logging out');
      this.logout();
    }, this.SESSION_TIMEOUT);

    this._sessionTimeout.set(Date.now() + this.SESSION_TIMEOUT);
  }

  /**
   * Clear session timeout
   */
  private clearSessionTimeout(): void {
    if (this.sessionTimer) {
      clearTimeout(this.sessionTimer);
      this.sessionTimer = undefined;
    }
    this._sessionTimeout.set(null);
  }

  /**
   * Start monitoring user activity for session management
   */
  private startSessionMonitoring(): void {
    // Monitor user activity events
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

    activityEvents.forEach(event => {
      document.addEventListener(event, () => {
        if (this._isAuthenticated()) {
          this.updateLastActivity();
        }
      }, { passive: true });
    });

    // Check for session timeout every minute
    timer(0, 60000).subscribe(() => {
      if (this._isAuthenticated()) {
        const timeout = this._sessionTimeout();
        if (timeout && Date.now() > timeout) {
          console.log('Session expired due to inactivity');
          this.logout();
        }
      }
    });
  }

  /**
   * Handle authentication errors
   */
  private handleAuthError(error: HttpErrorResponse): Observable<AuthResponse> {
    let errorMessage = 'Authentication failed';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Connection error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 401:
          errorMessage = 'Invalid username or password';
          break;
        case 403:
          errorMessage = 'Access denied';
          break;
        case 404:
          errorMessage = 'Authentication service not available';
          break;
        case 500:
          errorMessage = 'Server error during authentication';
          break;
        default:
          errorMessage = `Authentication failed (${error.status})`;
      }
    }

    this._connectionStatus.set('disconnected');

    return throwError(() => ({
      success: false,
      message: errorMessage
    }));
  }

  /**
   * Get remaining session time in minutes
   */
  getRemainingSessionTime(): number {
    const timeout = this._sessionTimeout();
    if (!timeout) return 0;

    const remaining = timeout - Date.now();
    return Math.max(0, Math.floor(remaining / (60 * 1000)));
  }

  /**
   * Check if session is about to expire (within 5 minutes)
   */
  isSessionExpiringSoon(): boolean {
    return this.getRemainingSessionTime() <= 5;
  }
}