import { Routes } from '@angular/router';
import { AuthGuard, GuestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Default redirect to login
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  // Login route (guest only)
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(m => m.LoginComponent),
    canActivate: [GuestGuard],
    title: 'Login - PK System'
  },

  // Dashboard route (protected)
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    title: 'Dashboard - PK System'
  },

  // Main Partial Picking route (protected) - Direct post-login destination
  {
    path: 'partial-picking',
    loadComponent: () =>
      import('./features/picking/partial-picking/partial-picking.component').then(m => m.PartialPickingComponent),
    canActivate: [AuthGuard],
    title: 'Partial Picking - PK System'
  },

  // Partial picking routes (protected)
  {
    path: 'picking',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/picking/picking-list/picking-list.component').then(m => m.PickingListComponent),
        title: 'Picking Runs - PK System'
      },
      {
        path: ':runId',
        loadComponent: () =>
          import('./features/picking/picking-interface/picking-interface.component').then(m => m.PickingInterfaceComponent),
        title: 'Partial Picking - PK System'
      }
    ]
  },

  // Weight scale management (protected)
  {
    path: 'scales',
    loadComponent: () =>
      import('./features/scales/scale-management/scale-management.component').then(m => m.ScaleManagementComponent),
    canActivate: [AuthGuard],
    title: 'Scale Management - PK System'
  },

  // Catch-all route - redirect to login
  {
    path: '**',
    redirectTo: '/login'
  }
];