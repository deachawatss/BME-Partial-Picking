import { Component, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface PartialRun {
  id: string;
  runNo: string;
  description: string;
  status: 'NEW' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  itemCount: number;
  createdDate: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
}

@Component({
  selector: 'app-picking-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-6">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-foreground mb-2">Partial Picking Runs</h1>
        <p class="text-muted-foreground">Select a partial picking run to begin picking operations</p>
      </div>

      <!-- Status Filter -->
      <div class="nwfth-card mb-6 p-4">
        <h3 class="font-medium text-foreground mb-3">Filter by Status</h3>
        <div class="flex flex-wrap gap-2">
          @for (status of statusFilters(); track status) {
            <button
              [class]="getStatusFilterClass(status)"
              (click)="setStatusFilter(status)"
            >
              {{ getStatusDisplayName(status) }}
              <span class="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                {{ getStatusCount(status) }}
              </span>
            </button>
          }
        </div>
      </div>

      <!-- Loading State -->
      @if (isLoading()) {
        <div class="flex justify-center py-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }

      <!-- Error State -->
      @if (hasError()) {
        <div class="nwfth-card mb-6 p-4 border-red-200 bg-red-50">
          <div class="flex items-center text-red-800">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {{ errorMessage() }}
          </div>
          <button
            class="nwfth-button-secondary mt-3"
            (click)="loadPickingRuns()"
          >
            Retry
          </button>
        </div>
      }

      <!-- Picking Runs List -->
      @if (!isLoading() && !hasError()) {
        <div class="space-y-4">
          @for (run of filteredRuns(); track run.id) {
            <div
              class="nwfth-card p-6 cursor-pointer hover:shadow-medium transition-all"
              (click)="navigateToRun(run.id)"
            >
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="text-lg font-semibold text-foreground">{{ run.runNo }}</h3>
              <p class="text-muted-foreground mt-1">{{ run.description }}</p>
            </div>
            <div class="flex items-center gap-2">
              <span [class]="getPriorityClass(run.priority)">
                {{ run.priority }}
              </span>
              <span [class]="getStatusClass(run.status)">
                {{ getStatusDisplayName(run.status) }}
              </span>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm text-muted-foreground">
            <span>{{ run.itemCount }} items to pick</span>
            <span>Created: {{ formatDate(run.createdDate) }}</span>
          </div>

          <div class="mt-3 pt-3 border-t border-border">
            <div class="flex justify-end">
              <button
                class="nwfth-button-primary px-4 py-2"
                (click)="startPicking($event, run.id)"
              >
                Start Picking
              </button>
            </div>
          </div>
        </div>

          }

          <!-- Empty State -->
          @if (filteredRuns().length === 0) {
            <div class="text-center py-8">
              <svg class="w-16 h-16 mx-auto text-muted-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-2.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7"></path>
              </svg>
              <h3 class="text-lg font-medium text-foreground mb-2">No picking runs available</h3>
              <p class="text-muted-foreground">
                {{ selectedStatusFilter() === 'ALL' ? 'There are no partial picking runs to display.' : 'No runs match the selected status filter.' }}
              </p>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .status-filter-active {
      @apply nwfth-button-primary;
    }
    .status-filter-inactive {
      @apply nwfth-button-secondary;
    }
  `]
})
export class PickingListComponent implements OnInit {
  // Signals for reactive state management
  private _isLoading = signal<boolean>(false);
  private _errorMessage = signal<string>('');
  private _pickingRuns = signal<PartialRun[]>([]);
  private _selectedStatusFilter = signal<string>('ALL');

  // Public readonly signals
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly errorMessage = this._errorMessage.asReadonly();
  public readonly pickingRuns = this._pickingRuns.asReadonly();
  public readonly selectedStatusFilter = this._selectedStatusFilter.asReadonly();

  // Computed signals
  public readonly hasError = computed(() => this._errorMessage().length > 0);
  public readonly statusFilters = computed(() => ['ALL', 'NEW', 'IN_PROGRESS', 'COMPLETED']);

  public readonly filteredRuns = computed(() => {
    const filter = this._selectedStatusFilter();
    const runs = this._pickingRuns();

    if (filter === 'ALL') {
      return runs.filter(run => run.status !== 'CANCELLED');
    }
    return runs.filter(run => run.status === filter);
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadPickingRuns();
  }

  /**
   * Load picking runs from the backend
   */
  loadPickingRuns(): void {
    this._isLoading.set(true);
    this._errorMessage.set('');

    // Mock data for now - replace with actual API call
    setTimeout(() => {
      const mockRuns: PartialRun[] = [
        {
          id: '1',
          runNo: 'PR-2025-001',
          description: 'Morning batch - High priority ingredients',
          status: 'NEW',
          itemCount: 12,
          createdDate: '2025-01-15T08:00:00Z',
          priority: 'HIGH'
        },
        {
          id: '2',
          runNo: 'PR-2025-002',
          description: 'Afternoon production run',
          status: 'NEW',
          itemCount: 8,
          createdDate: '2025-01-15T12:30:00Z',
          priority: 'MEDIUM'
        },
        {
          id: '3',
          runNo: 'PR-2025-003',
          description: 'Evening specialty items',
          status: 'IN_PROGRESS',
          itemCount: 5,
          createdDate: '2025-01-15T16:00:00Z',
          priority: 'LOW'
        }
      ];

      this._pickingRuns.set(mockRuns);
      this._isLoading.set(false);
    }, 1000);
  }

  /**
   * Set status filter
   */
  setStatusFilter(status: string): void {
    this._selectedStatusFilter.set(status);
  }

  /**
   * Get status filter button class
   */
  getStatusFilterClass(status: string): string {
    return this._selectedStatusFilter() === status
      ? 'status-filter-active'
      : 'status-filter-inactive';
  }

  /**
   * Get count for specific status
   */
  getStatusCount(status: string): number {
    if (status === 'ALL') {
      return this._pickingRuns().filter(run => run.status !== 'CANCELLED').length;
    }
    return this._pickingRuns().filter(run => run.status === status).length;
  }

  /**
   * Navigate to picking run
   */
  navigateToRun(runId: string): void {
    this.router.navigate(['/picking', runId]);
  }

  /**
   * Start picking (prevent event bubbling)
   */
  startPicking(event: Event, runId: string): void {
    event.stopPropagation();
    this.navigateToRun(runId);
  }

  /**
   * Get status display name
   */
  getStatusDisplayName(status: string): string {
    const statusMap: { [key: string]: string } = {
      'ALL': 'All Runs',
      'NEW': 'New',
      'IN_PROGRESS': 'In Progress',
      'COMPLETED': 'Completed',
      'CANCELLED': 'Cancelled'
    };
    return statusMap[status] || status;
  }

  /**
   * Get status CSS class
   */
  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'NEW': 'px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800',
      'IN_PROGRESS': 'px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800',
      'COMPLETED': 'px-2 py-1 rounded-full text-xs bg-green-100 text-green-800',
      'CANCELLED': 'px-2 py-1 rounded-full text-xs bg-red-100 text-red-800'
    };
    return statusClasses[status] || 'px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800';
  }

  /**
   * Get priority CSS class
   */
  getPriorityClass(priority: string): string {
    const priorityClasses: { [key: string]: string } = {
      'HIGH': 'px-2 py-1 rounded-full text-xs bg-red-100 text-red-800 font-medium',
      'MEDIUM': 'px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800',
      'LOW': 'px-2 py-1 rounded-full text-xs bg-green-100 text-green-800'
    };
    return priorityClasses[priority] || 'px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800';
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}