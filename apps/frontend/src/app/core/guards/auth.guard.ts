import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // Check if user is authenticated synchronously first
    if (this.authService.isAuthenticatedSync()) {

      // Check if session is about to expire
      if (this.authService.isSessionExpiringSoon()) {
        console.log('Session expiring soon, attempting refresh');

        // Try to refresh token
        return this.authService.refreshToken().pipe(
          map(() => true),
          catchError(() => {
            // Refresh failed, redirect to login
            this.redirectToLogin(state.url);
            return of(false);
          })
        );
      }

      // User is authenticated and session is valid
      this.authService.updateLastActivity();
      return true;
    }

    // User is not authenticated, redirect to login
    this.redirectToLogin(state.url);
    return false;
  }

  /**
   * Redirect to login page with return URL
   */
  private redirectToLogin(returnUrl: string): void {
    if (returnUrl && returnUrl !== '/') {
      this.router.navigate(['/login'], { queryParams: { returnUrl } });
    } else {
      this.router.navigate(['/login']);
    }
  }
}

/**
 * Guest guard - prevents authenticated users from accessing login page
 */
@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedSync()) {
      // User is already authenticated, redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
}