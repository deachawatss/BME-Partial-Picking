import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PickingItem {
  id: string;
  itemCode: string;
  itemName: string;
  targetWeight: number;
  actualWeight: number | null;
  tolerance: {
    min: number;
    max: number;
  };
  status: 'PENDING' | 'PICKING' | 'COMPLETED' | 'OVER_TOLERANCE';
  unit: string;
  lotNumber?: string;
  location?: string;
}

interface WeightReading {
  value: number;
  timestamp: Date;
  stable: boolean;
}

interface PartialRun {
  id: string;
  runNo: string;
  description: string;
  items: PickingItem[];
  status: 'NEW' | 'IN_PROGRESS' | 'COMPLETED';
}

@Component({
  selector: 'app-picking-interface',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header -->
      <div class="bg-white border-b border-border shadow-sm">
        <div class="container mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-xl font-bold text-foreground">{{ currentRun()?.runNo }}</h1>
              <p class="text-muted-foreground">{{ currentRun()?.description }}</p>
            </div>
            <div class="flex items-center gap-4">
              <!-- Connection Status -->
              <div [class]="getConnectionStatusClass()" class="px-3 py-2 rounded-lg flex items-center gap-2">
                <div [class]="getConnectionIndicatorClass()" class="w-2 h-2 rounded-full"></div>
                <span class="text-sm font-medium">{{ getConnectionStatusText() }}</span>
              </div>
              <button
                class="nwfth-button-secondary"
                (click)="goBack()"
              >
                Back to List
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 py-6">
        <!-- Progress Overview -->
        <div class="nwfth-card mb-6 p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-foreground">Progress Overview</h2>
            <span class="text-sm text-muted-foreground">
              {{ completedItems().length }} of {{ totalItems() }} items completed
            </span>
          </div>

          <div class="w-full bg-muted rounded-full h-3">
            <div
              class="bg-primary h-3 rounded-full transition-all duration-300"
              [style.width.%]="progressPercentage()"
            ></div>
          </div>
        </div>

        <!-- Weight Scale Interface -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <!-- Current Weight Display -->
          <div class="nwfth-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-4">Current Weight</h3>

            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">
                {{ formatWeight(currentWeight()) }}
              </div>
              <div class="text-sm text-muted-foreground mb-4">
                {{ isWeightStable() ? 'Stable' : 'Stabilizing...' }}
              </div>

              <!-- Weight Tolerance Indicator -->
              <div *ngIf="currentPickingItem()" class="mt-4">
                <div class="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Min: {{ formatWeight(currentPickingItem()!.tolerance.min) }}</span>
                  <span>Target: {{ formatWeight(currentPickingItem()!.targetWeight) }}</span>
                  <span>Max: {{ formatWeight(currentPickingItem()!.tolerance.max) }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div [class]="getToleranceBarClass()"
                       [style.width.%]="getTolerancePercentage()"
                       class="h-2 rounded-full transition-all duration-300">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Scale Controls -->
          <div class="nwfth-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-4">Scale Controls</h3>

            <div class="space-y-3">
              <button
                class="nwfth-button-secondary w-full"
                (click)="tareScale()"
                [disabled]="isScaleOperationInProgress()"
              >
                Tare Scale
              </button>

              <button
                class="nwfth-button-secondary w-full"
                (click)="calibrateScale()"
                [disabled]="isScaleOperationInProgress()"
              >
                Calibrate
              </button>

              <button
                [class]="isRecording() ? 'nwfth-button-primary w-full bg-red-600' : 'nwfth-button-primary w-full'"
                (click)="toggleRecording()"
                [disabled]="isScaleOperationInProgress()"
              >
                {{ isRecording() ? 'Stop Recording' : 'Start Recording' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Current Item Being Picked -->
        <div *ngIf="currentPickingItem()" class="nwfth-card mb-6 p-6 border-primary border-2">
          <h3 class="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Currently Picking
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="text-sm font-medium text-foreground">Item Code</label>
              <p class="text-lg font-mono">{{ currentPickingItem()!.itemCode }}</p>
            </div>

            <div>
              <label class="text-sm font-medium text-foreground">Item Name</label>
              <p class="text-base">{{ currentPickingItem()!.itemName }}</p>
            </div>

            <div>
              <label class="text-sm font-medium text-foreground">Target Weight</label>
              <p class="text-lg font-semibold text-primary">
                {{ formatWeight(currentPickingItem()!.targetWeight) }}
              </p>
            </div>
          </div>

          <div class="mt-6 flex justify-between items-center">
            <div class="flex items-center gap-4">
              <label class="text-sm font-medium text-foreground">Lot Number:</label>
              <input
                type="text"
                class="nwfth-input w-32"
                [(ngModel)]="lotNumberInput"
                placeholder="LOT123"
              />
            </div>

            <div class="flex gap-3">
              <button
                class="nwfth-button-secondary"
                (click)="skipCurrentItem()"
              >
                Skip Item
              </button>
              <button
                class="nwfth-button-primary"
                (click)="confirmWeight()"
                [disabled]="!canConfirmWeight()"
              >
                Confirm Weight
              </button>
            </div>
          </div>
        </div>

        <!-- Items List -->
        <div class="nwfth-card p-6">
          <h3 class="text-lg font-semibold text-foreground mb-4">Picking Items</h3>

          <div class="space-y-3">
            <div
              *ngFor="let item of pickingItems(); let i = index"
              [class]="getItemRowClass(item)"
              class="p-4 rounded-lg border transition-all"
            >
              <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <div class="font-mono text-sm">{{ item.itemCode }}</div>
                  <div class="text-xs text-muted-foreground">{{ item.itemName }}</div>
                </div>

                <div class="text-center">
                  <div class="text-sm font-medium">{{ formatWeight(item.targetWeight) }}</div>
                  <div class="text-xs text-muted-foreground">Target</div>
                </div>

                <div class="text-center">
                  <div class="text-sm font-medium">
                    {{ item.actualWeight !== null ? formatWeight(item.actualWeight) : '—' }}
                  </div>
                  <div class="text-xs text-muted-foreground">Actual</div>
                </div>

                <div class="text-center">
                  <span [class]="getStatusClass(item.status)">
                    {{ getStatusDisplayName(item.status) }}
                  </span>
                </div>

                <div class="text-center">
                  <button
                    *ngIf="item.status === 'PENDING'"
                    class="nwfth-button-secondary px-3 py-1 text-xs"
                    (click)="startPickingItem(item)"
                  >
                    Pick
                  </button>
                  <button
                    *ngIf="item.status === 'COMPLETED'"
                    class="nwfth-button-secondary px-3 py-1 text-xs"
                    (click)="editItem(item)"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Completion Actions -->
        <div *ngIf="isRunCompleted()" class="nwfth-card mt-6 p-6 bg-green-50 border-green-200">
          <div class="text-center">
            <svg class="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-green-800 mb-2">Picking Run Completed!</h3>
            <p class="text-green-700 mb-4">All items have been successfully picked.</p>

            <div class="flex justify-center gap-4">
              <button
                class="nwfth-button-secondary"
                (click)="printLabels()"
              >
                Print Labels
              </button>
              <button
                class="nwfth-button-primary"
                (click)="finalizeRun()"
              >
                Finalize Run
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .item-pending {
      @apply border-gray-200 bg-white;
    }
    .item-picking {
      @apply border-primary bg-blue-50;
    }
    .item-completed {
      @apply border-green-200 bg-green-50;
    }
    .item-over-tolerance {
      @apply border-red-200 bg-red-50;
    }
  `]
})
export class PickingInterfaceComponent implements OnInit, OnDestroy {
  // Route parameter
  private runId: string = '';

  // Form inputs
  public lotNumberInput = '';

  // Signals for reactive state management
  private _isLoading = signal<boolean>(false);
  private _currentRun = signal<PartialRun | null>(null);
  private _currentWeight = signal<number>(0);
  private _isWeightStable = signal<boolean>(false);
  private _isRecording = signal<boolean>(false);
  private _connectionStatus = signal<'connected' | 'disconnected' | 'connecting'>('connecting');
  private _currentPickingItemId = signal<string | null>(null);
  private _isScaleOperationInProgress = signal<boolean>(false);

  // Public readonly signals
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly currentRun = this._currentRun.asReadonly();
  public readonly currentWeight = this._currentWeight.asReadonly();
  public readonly isWeightStable = this._isWeightStable.asReadonly();
  public readonly isRecording = this._isRecording.asReadonly();
  public readonly connectionStatus = this._connectionStatus.asReadonly();
  public readonly isScaleOperationInProgress = this._isScaleOperationInProgress.asReadonly();

  // Computed signals
  public readonly pickingItems = computed(() => this._currentRun()?.items || []);
  public readonly totalItems = computed(() => this.pickingItems().length);
  public readonly completedItems = computed(() =>
    this.pickingItems().filter(item => item.status === 'COMPLETED')
  );
  public readonly progressPercentage = computed(() =>
    this.totalItems() > 0 ? (this.completedItems().length / this.totalItems()) * 100 : 0
  );
  public readonly currentPickingItem = computed(() =>
    this.pickingItems().find(item => item.id === this._currentPickingItemId())
  );
  public readonly isRunCompleted = computed(() =>
    this.totalItems() > 0 && this.completedItems().length === this.totalItems()
  );

  // WebSocket connection for weight updates
  private weightSocket?: WebSocket;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.runId = this.route.snapshot.paramMap.get('runId') || '';
    this.loadPickingRun();
    this.connectToWeightScale();
  }

  ngOnDestroy(): void {
    if (this.weightSocket) {
      this.weightSocket.close();
    }
  }

  /**
   * Load picking run data
   */
  loadPickingRun(): void {
    this._isLoading.set(true);

    // Mock data for now - replace with actual API call
    setTimeout(() => {
      const mockRun: PartialRun = {
        id: this.runId,
        runNo: `PR-2025-${this.runId.padStart(3, '0')}`,
        description: 'Partial picking run for production batch',
        status: 'IN_PROGRESS',
        items: [
          {
            id: '1',
            itemCode: 'ING-001',
            itemName: 'Wheat Flour',
            targetWeight: 25.50,
            actualWeight: null,
            tolerance: { min: 25.20, max: 25.80 },
            status: 'PENDING',
            unit: 'kg',
            location: 'A1-01'
          },
          {
            id: '2',
            itemCode: 'ING-002',
            itemName: 'Sugar',
            targetWeight: 10.25,
            actualWeight: null,
            tolerance: { min: 10.10, max: 10.40 },
            status: 'PENDING',
            unit: 'kg',
            location: 'B2-05'
          },
          {
            id: '3',
            itemCode: 'ING-003',
            itemName: 'Salt',
            targetWeight: 0.75,
            actualWeight: null,
            tolerance: { min: 0.70, max: 0.80 },
            status: 'PENDING',
            unit: 'kg',
            location: 'C1-12'
          }
        ]
      };

      this._currentRun.set(mockRun);
      this._isLoading.set(false);
    }, 1000);
  }

  /**
   * Connect to weight scale WebSocket
   */
  connectToWeightScale(): void {
    this._connectionStatus.set('connecting');

    // Mock WebSocket connection - replace with actual WebSocket
    setTimeout(() => {
      this._connectionStatus.set('connected');

      // Simulate weight updates
      setInterval(() => {
        const baseWeight = 15.0;
        const variation = (Math.random() - 0.5) * 2;
        this._currentWeight.set(Math.max(0, baseWeight + variation));
        this._isWeightStable.set(Math.random() > 0.3);
      }, 500);
    }, 2000);
  }

  /**
   * Start picking an item
   */
  startPickingItem(item: PickingItem): void {
    // Update item status
    const items = this.pickingItems();
    const itemIndex = items.findIndex(i => i.id === item.id);
    if (itemIndex >= 0) {
      items[itemIndex].status = 'PICKING';
      this._currentPickingItemId.set(item.id);

      // Update the run
      const run = this._currentRun();
      if (run) {
        this._currentRun.set({ ...run, items: [...items] });
      }
    }
  }

  /**
   * Confirm weight for current item
   */
  confirmWeight(): void {
    const currentItem = this.currentPickingItem();
    if (!currentItem) return;

    const weight = this._currentWeight();
    const items = this.pickingItems();
    const itemIndex = items.findIndex(i => i.id === currentItem.id);

    if (itemIndex >= 0) {
      items[itemIndex].actualWeight = weight;
      items[itemIndex].lotNumber = this.lotNumberInput || undefined;

      // Check tolerance
      const withinTolerance = weight >= currentItem.tolerance.min && weight <= currentItem.tolerance.max;
      items[itemIndex].status = withinTolerance ? 'COMPLETED' : 'OVER_TOLERANCE';

      // Clear current picking item
      this._currentPickingItemId.set(null);
      this.lotNumberInput = '';

      // Update the run
      const run = this._currentRun();
      if (run) {
        this._currentRun.set({ ...run, items: [...items] });
      }
    }
  }

  /**
   * Skip current item
   */
  skipCurrentItem(): void {
    const currentItem = this.currentPickingItem();
    if (!currentItem) return;

    const items = this.pickingItems();
    const itemIndex = items.findIndex(i => i.id === currentItem.id);

    if (itemIndex >= 0) {
      items[itemIndex].status = 'PENDING';
      this._currentPickingItemId.set(null);
      this.lotNumberInput = '';

      const run = this._currentRun();
      if (run) {
        this._currentRun.set({ ...run, items: [...items] });
      }
    }
  }

  /**
   * Can confirm weight
   */
  canConfirmWeight(): boolean {
    return this.currentPickingItem() !== null &&
           this._isWeightStable() &&
           this._connectionStatus() === 'connected';
  }

  /**
   * Tare scale
   */
  tareScale(): void {
    this._isScaleOperationInProgress.set(true);

    // Mock operation
    setTimeout(() => {
      this._currentWeight.set(0);
      this._isScaleOperationInProgress.set(false);
    }, 1500);
  }

  /**
   * Calibrate scale
   */
  calibrateScale(): void {
    this._isScaleOperationInProgress.set(true);

    // Mock operation
    setTimeout(() => {
      this._isScaleOperationInProgress.set(false);
    }, 3000);
  }

  /**
   * Toggle recording
   */
  toggleRecording(): void {
    this._isRecording.set(!this._isRecording());
  }

  /**
   * Go back to picking list
   */
  goBack(): void {
    this.router.navigate(['/picking']);
  }

  /**
   * Edit item
   */
  editItem(item: PickingItem): void {
    this.startPickingItem(item);
  }

  /**
   * Print labels
   */
  printLabels(): void {
    console.log('Printing labels for completed items...');
    // Implement label printing logic
  }

  /**
   * Finalize run
   */
  finalizeRun(): void {
    console.log('Finalizing picking run...');
    // Implement run finalization logic
    this.router.navigate(['/picking']);
  }

  // Helper methods
  formatWeight(weight: number): string {
    return `${weight.toFixed(2)} kg`;
  }

  getConnectionStatusText(): string {
    const statusMap = {
      'connected': 'Scale Connected',
      'disconnected': 'Scale Disconnected',
      'connecting': 'Connecting...'
    };
    return statusMap[this._connectionStatus()];
  }

  getConnectionStatusClass(): string {
    const classMap = {
      'connected': 'nwfth-status-connected',
      'disconnected': 'nwfth-status-disconnected',
      'connecting': 'nwfth-status-connecting'
    };
    return classMap[this._connectionStatus()];
  }

  getConnectionIndicatorClass(): string {
    const classMap = {
      'connected': 'nwfth-indicator-connected',
      'disconnected': 'nwfth-indicator-disconnected',
      'connecting': 'nwfth-indicator-connecting animate-pulse'
    };
    return classMap[this._connectionStatus()];
  }

  getItemRowClass(item: PickingItem): string {
    const classMap = {
      'PENDING': 'item-pending',
      'PICKING': 'item-picking',
      'COMPLETED': 'item-completed',
      'OVER_TOLERANCE': 'item-over-tolerance'
    };
    return classMap[item.status] || 'item-pending';
  }

  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'PENDING': 'px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800',
      'PICKING': 'px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800',
      'COMPLETED': 'px-2 py-1 rounded-full text-xs bg-green-100 text-green-800',
      'OVER_TOLERANCE': 'px-2 py-1 rounded-full text-xs bg-red-100 text-red-800'
    };
    return statusClasses[status] || 'px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800';
  }

  getStatusDisplayName(status: string): string {
    const statusMap: { [key: string]: string } = {
      'PENDING': 'Pending',
      'PICKING': 'Picking',
      'COMPLETED': 'Completed',
      'OVER_TOLERANCE': 'Over Tolerance'
    };
    return statusMap[status] || status;
  }

  getTolerancePercentage(): number {
    const item = this.currentPickingItem();
    if (!item) return 0;

    const weight = this._currentWeight();
    const range = item.tolerance.max - item.tolerance.min;
    const position = Math.max(0, Math.min(weight - item.tolerance.min, range));

    return (position / range) * 100;
  }

  getToleranceBarClass(): string {
    const item = this.currentPickingItem();
    if (!item) return 'bg-gray-300';

    const weight = this._currentWeight();

    if (weight >= item.tolerance.min && weight <= item.tolerance.max) {
      return 'bg-green-500';
    } else if (weight < item.tolerance.min) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  }
}