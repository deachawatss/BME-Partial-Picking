import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tw-min-h-screen tw-bg-brand-cream/20">
      <!-- Header -->
      <header class="tw-bg-brand-brown tw-text-brand-cream tw-p-4 tw-shadow-lg">
        <div class="tw-max-w-7xl tw-mx-auto tw-flex tw-justify-between tw-items-center">
          <div class="tw-flex tw-items-center tw-space-x-4">
            <div class="tw-w-12 tw-h-12 tw-bg-brand-cream tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <span class="tw-text-brand-brown tw-font-bold tw-text-lg">PK</span>
            </div>
            <div>
              <h1 class="tw-text-xl tw-font-bold">PK System Dashboard</h1>
              <p class="tw-text-brand-cream/80 tw-text-sm">Partial Picking Operations</p>
            </div>
          </div>

          <div class="tw-flex tw-items-center tw-space-x-4">
            <div class="tw-text-right">
              <p class="tw-font-semibold">{{ authService.userDisplayName() }}</p>
              <p class="tw-text-brand-cream/80 tw-text-sm">{{ authService.workstationId() }}</p>
            </div>
            <button
              (click)="logout()"
              class="tw-px-4 tw-py-2 tw-bg-brand-amber tw-text-brand-brown tw-rounded-lg tw-font-medium tw-transition-colors hover:tw-bg-brand-amber/90">
              Logout
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="tw-max-w-7xl tw-mx-auto tw-p-6">
        <!-- Welcome Section -->
        <div class="nwfth-card tw-p-6 tw-mb-6">
          <h2 class="tw-text-2xl tw-font-bold tw-text-brand-brown tw-mb-4">
            Welcome to PK System
          </h2>
          <p class="tw-text-muted-foreground tw-mb-4">
            Your modern warehouse partial picking solution. Select an option below to begin your operations.
          </p>

          <!-- Connection Status -->
          <div class="tw-flex tw-items-center tw-space-x-2 tw-text-sm">
            <div class="tw-w-3 tw-h-3 tw-bg-green-500 tw-rounded-full"></div>
            <span class="tw-text-green-700 tw-font-medium">System Connected</span>
            <span class="tw-text-muted-foreground">• Backend: Operational • Database: TFCPILOT3</span>
          </div>
        </div>

        <!-- Action Cards -->
        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 tw-mb-8">

          <!-- Partial Picking Card -->
          <div class="nwfth-card tw-p-6 tw-cursor-pointer tw-transition-transform hover:tw-scale-105" (click)="navigateToFeature('picking')">
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-w-12 tw-h-12 tw-bg-brand-brown tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                <span class="tw-text-brand-cream tw-text-xl">⚖️</span>
              </div>
              <h3 class="tw-text-lg tw-font-bold tw-text-brand-brown tw-ml-3">Partial Picking</h3>
            </div>
            <p class="tw-text-muted-foreground tw-text-sm tw-mb-3">
              Start partial picking operations with real-time weight scale integration
            </p>
            <div class="tw-text-brand-amber tw-font-medium tw-text-sm">
              Start Picking →
            </div>
          </div>

          <!-- Scale Management Card -->
          <div class="nwfth-card tw-p-6 tw-cursor-pointer tw-transition-transform hover:tw-scale-105" (click)="navigateToFeature('scales')">
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-w-12 tw-h-12 tw-bg-brand-brown tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                <span class="tw-text-brand-cream tw-text-xl">🔧</span>
              </div>
              <h3 class="tw-text-lg tw-font-bold tw-text-brand-brown tw-ml-3">Scale Management</h3>
            </div>
            <p class="tw-text-muted-foreground tw-text-sm tw-mb-3">
              Configure and monitor USB weight scales across workstations
            </p>
            <div class="tw-text-brand-amber tw-font-medium tw-text-sm">
              Manage Scales →
            </div>
          </div>

          <!-- Reports Card -->
          <div class="nwfth-card tw-p-6 tw-cursor-pointer tw-transition-transform hover:tw-scale-105 tw-opacity-75" (click)="showComingSoon('Reports')">
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-w-12 tw-h-12 tw-bg-gray-400 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                <span class="tw-text-white tw-text-xl">📊</span>
              </div>
              <h3 class="tw-text-lg tw-font-bold tw-text-gray-600 tw-ml-3">Reports</h3>
            </div>
            <p class="tw-text-gray-500 tw-text-sm tw-mb-3">
              View picking reports, performance metrics, and system analytics
            </p>
            <div class="tw-text-gray-400 tw-font-medium tw-text-sm">
              Coming Soon...
            </div>
          </div>

        </div>

        <!-- System Info -->
        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">

          <!-- Session Info -->
          <div class="nwfth-card tw-p-4">
            <h4 class="tw-font-semibold tw-text-brand-brown tw-mb-3">Session Information</h4>
            <div class="tw-space-y-2 tw-text-sm">
              <div class="tw-flex tw-justify-between">
                <span class="tw-text-muted-foreground">User:</span>
                <span class="tw-font-medium">{{ authService.userDisplayName() }}</span>
              </div>
              <div class="tw-flex tw-justify-between">
                <span class="tw-text-muted-foreground">Workstation:</span>
                <span class="tw-font-medium">{{ authService.workstationId() }}</span>
              </div>
              <div class="tw-flex tw-justify-between">
                <span class="tw-text-muted-foreground">Session Remaining:</span>
                <span class="tw-font-medium tw-text-green-600">{{ getSessionRemaining() }} minutes</span>
              </div>
            </div>
          </div>

          <!-- System Status -->
          <div class="nwfth-card tw-p-4">
            <h4 class="tw-font-semibold tw-text-brand-brown tw-mb-3">System Status</h4>
            <div class="tw-space-y-2 tw-text-sm">
              <div class="tw-flex tw-justify-between tw-items-center">
                <span class="tw-text-muted-foreground">Backend API:</span>
                <span class="tw-flex tw-items-center">
                  <div class="tw-w-2 tw-h-2 tw-bg-green-500 tw-rounded-full tw-mr-2"></div>
                  <span class="tw-text-green-600 tw-font-medium">Connected</span>
                </span>
              </div>
              <div class="tw-flex tw-justify-between tw-items-center">
                <span class="tw-text-muted-foreground">Database:</span>
                <span class="tw-flex tw-items-center">
                  <div class="tw-w-2 tw-h-2 tw-bg-green-500 tw-rounded-full tw-mr-2"></div>
                  <span class="tw-text-green-600 tw-font-medium">TFCPILOT3</span>
                </span>
              </div>
              <div class="tw-flex tw-justify-between tw-items-center">
                <span class="tw-text-muted-foreground">Weight Scales:</span>
                <span class="tw-flex tw-items-center">
                  <div class="tw-w-2 tw-h-2 tw-bg-yellow-500 tw-rounded-full tw-mr-2"></div>
                  <span class="tw-text-yellow-600 tw-font-medium">Checking...</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Component initialization
  }

  navigateToFeature(feature: string): void {
    this.router.navigate([`/${feature}`]);
  }

  showComingSoon(feature: string): void {
    alert(`${feature} feature is coming soon in the next release!`);
  }

  logout(): void {
    this.authService.logout();
  }

  getSessionRemaining(): number {
    return this.authService.getRemainingSessionTime();
  }
}