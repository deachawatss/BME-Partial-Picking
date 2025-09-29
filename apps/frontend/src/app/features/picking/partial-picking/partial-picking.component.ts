import { Component, OnInit, OnDestroy, signal, computed, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AuthService } from '../../../core/services/auth.service';
import { WeightScaleService, ScaleWeight, ConnectionState } from '../../../core/services/weight-scale.service';
import { WeightProgressBarComponent, WeightProgressConfig } from '../../../shared/components/weight-progress-bar/weight-progress-bar.component';

// Interface definitions matching the legacy system
interface BatchTicketPartial {
  item: string;
  batchNo: string;
  partial: number;
  weighted: number;
  balance: number;
  allergens?: string;
}

interface PartialPickingData {
  runNo: string;
  batchNo: string;
  itemKey: string;
  description: string;
  fgItemKey: string;
  fgDescription: string;
  batches: number;
  productionDate: string;
  lotNo: string;
  binNo: string;
  binCapacity: string;
  bagWeight: number;
  weight: number;
  weightRangeMin: number;
  weightRangeMax: number;
  totalNeeded: number;
  remainingQty: number;
  unitOfMeasure: string;
  binSOHDisplay: string;
}

@Component({
  selector: 'app-partial-picking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, WeightProgressBarComponent],
  templateUrl: './partial-picking.component.html',
  styleUrls: ['./partial-picking.component.css']
})
export class PartialPickingComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  partialPickingForm: FormGroup;

  @ViewChild(WeightProgressBarComponent) progressBar!: WeightProgressBarComponent;

  // Angular 20 Signals for reactive state management
  private _isLoading = signal<boolean>(false);
  private _errorMessage = signal<string>('');
  private _partialPickingData = signal<PartialPickingData>({
    runNo: '',
    batchNo: '',
    itemKey: '',
    description: '',
    fgItemKey: '',
    fgDescription: '',
    batches: 0,
    productionDate: '',
    lotNo: '',
    binNo: '',
    binCapacity: '',
    bagWeight: 0,
    weight: 0,
    weightRangeMin: 0,
    weightRangeMax: 0,
    totalNeeded: 0,
    remainingQty: 0,
    unitOfMeasure: '',
    binSOHDisplay: ''
  });

  private _batchTicketPartials = signal<BatchTicketPartial[]>([]);

  // Weight and scale signals
  private _currentWeight = signal<number>(0);
  private _isScaleConnected = signal<boolean>(false);
  private _isWeightStable = signal<boolean>(false);
  private _lastStableWeight = signal<number | null>(null);
  private _stableWeightTimer: ReturnType<typeof setTimeout> | null = null;

  // Public readonly signals
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly errorMessage = this._errorMessage.asReadonly();
  public readonly partialPickingData = this._partialPickingData.asReadonly();
  public readonly batchTicketPartials = this._batchTicketPartials.asReadonly();

  // Weight-related public signals
  public readonly currentWeight = this._currentWeight.asReadonly();
  public readonly isScaleConnected = this._isScaleConnected.asReadonly();
  public readonly isWeightStable = this._isWeightStable.asReadonly();

  // Computed signals
  public readonly hasError = computed(() => this._errorMessage().length > 0);
  public readonly binSohValue = computed(() => {
    const display = (this._partialPickingData().binSOHDisplay ?? '').trim();
    if (!display) {
      return '';
    }

    const parts = display.split(/\s+/).filter(Boolean);
    return parts[0] ?? '';
  });

  public readonly binSohUnit = computed(() => {
    const data = this._partialPickingData();
    const display = (data.binSOHDisplay ?? '').trim();
    if (!display) {
      return data.unitOfMeasure || '';
    }

    const parts = display.split(/\s+/).filter(Boolean);
    if (parts.length <= 1) {
      return data.unitOfMeasure || '';
    }

    return parts.slice(1).join(' ');
  });

  // Progress bar configuration computed signal
  public readonly progressConfig = computed((): WeightProgressConfig => {
    const data = this._partialPickingData();
    return {
      itemName: data.itemKey || 'Unknown Item',
      itemDescription: data.description || '',
      targetWeight: data.bagWeight || 25,
      toleranceMin: data.weightRangeMin || 19,
      toleranceMax: data.weightRangeMax || 21,
      unit: data.unitOfMeasure || 'KG',
      showPercentage: true,
      showToleranceBands: true,
      animateProgress: true
    };
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private weightScaleService: WeightScaleService
  ) {
    this.partialPickingForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialize form with current data
    this.updateFormValues();

    // Load initial data (in real app, this would come from backend)
    this.loadPartialPickingData();

    // Set up WebSocket connections and weight monitoring
    this.setupWeightScaleConnection();
    this.setupWeightStabilityMonitoring();
    this.setupAutoSave();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    // Clean up any pending timers
    if (this._stableWeightTimer) {
      clearTimeout(this._stableWeightTimer);
    }
  }

  /**
   * Create reactive form matching the legacy interface
   */
  private createForm(): FormGroup {
    return this.fb.group({
      runNo: ['', Validators.required],
      batchNo: ['', Validators.required],
      itemKey: ['', Validators.required],
      unitOfMeasure: [{ value: '', disabled: true }],
      description: [''],
      lotNo: [''],
      binNo: [''],
      bagWeight: [0, [Validators.min(0)]],
      weight: [0, [Validators.min(0)]],
      weightRangeMin: [0],
      weightRangeMax: [0],
      totalNeeded: [0],
      remainingQty: [0]
    });
  }

  /**
   * Update form values from current data
   */
  private updateFormValues(): void {
    const data = this._partialPickingData();
    this.partialPickingForm.patchValue({
      runNo: data.runNo,
      batchNo: data.batchNo,
      itemKey: data.itemKey,
      unitOfMeasure: data.unitOfMeasure,
      description: data.description,
      lotNo: data.lotNo,
      binNo: data.binNo,
      bagWeight: data.bagWeight,
      weight: data.weight,
      weightRangeMin: data.weightRangeMin,
      weightRangeMax: data.weightRangeMax,
      totalNeeded: data.totalNeeded,
      remainingQty: data.remainingQty
    });
  }

  /**
   * Load partial picking data (mock implementation)
   */
  private loadPartialPickingData(): void {
    this._isLoading.set(true);

    // Mock API call - in real implementation, this would fetch from backend
    setTimeout(() => {
      this._partialPickingData.set({
        runNo: 'PR001-2025',
        batchNo: 'B2025001',
        itemKey: 'INFULM01',
        description: 'Infused Milk Powder Premium',
        fgItemKey: 'FG-MILK-001',
        fgDescription: 'Finished Goods - Premium Milk Formula',
        batches: 5,
        productionDate: '2025-01-15',
        lotNo: 'LOT-ML-2025-001',
        binNo: 'BIN-A-001',
        binCapacity: '500.0000 KG',
        bagWeight: 25.0000,
        weight: 19.9850,
        weightRangeMin: 19.0000,
        weightRangeMax: 21.0000,
        totalNeeded: 100.0000,
        remainingQty: 75.2150,
        unitOfMeasure: 'KG',
        binSOHDisplay: '245.7500 KG'
      });

      this._batchTicketPartials.set([
        { item: 'INFULM01', batchNo: 'B2025001', partial: 25.0000, weighted: 19.9850, balance: 5.0150, allergens: 'Milk' },
        { item: 'INFULM02', batchNo: 'B2025002', partial: 30.0000, weighted: 0.0000, balance: 30.0000, allergens: 'Milk, Soy' },
        { item: 'INFULM03', batchNo: 'B2025003', partial: 45.0000, weighted: 0.0000, balance: 45.0000 },
        { item: 'SUGAR01', batchNo: 'B2025004', partial: 15.5000, weighted: 0.0000, balance: 15.5000 },
        { item: 'VITAPACK', batchNo: 'B2025005', partial: 2.5000, weighted: 0.0000, balance: 2.5000, allergens: 'None' }
      ]);

      this.updateFormValues();
      this._isLoading.set(false);
    }, 500);
  }

  /**
   * Handle search/lookup button clicks
   */
  onLookup(field: string): void {
    console.log(`Looking up ${field}...`);
    // In real implementation, this would open lookup dialogs
  }

  /**
   * Handle calculator button click for bag weight
   */
  onCalculateBagWeight(): void {
    console.log('Opening bag weight calculator...');
    // In real implementation, this would open calculator dialog
  }

  /**
   * Set up WebSocket connection to weight scale service
   */
  private setupWeightScaleConnection(): void {
    // Monitor connection status using toObservable
    toObservable(this.weightScaleService.connectionState)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: ConnectionState) => {
        this._isScaleConnected.set(state === 'connected');
      });

    // Subscribe to real-time weight updates using toObservable
    toObservable(this.weightScaleService.currentWeight)
      .pipe(takeUntil(this.destroy$))
      .subscribe((weightData: ScaleWeight | null) => {
        if (weightData) {
          this.handleWeightUpdate(weightData);
        }
      });
  }

  /**
   * Handle incoming weight updates from WebSocket
   */
  private handleWeightUpdate(weightData: ScaleWeight): void {
    const newWeight = Number(weightData.weight.toFixed(4));

    // Update current weight signal
    this._currentWeight.set(newWeight);
    this._isWeightStable.set(weightData.stable);

    // Update form field
    this.partialPickingForm.patchValue({ weight: newWeight }, { emitEvent: false });

    // Update partial picking data
    const currentData = this._partialPickingData();
    this._partialPickingData.set({
      ...currentData,
      weight: newWeight
    });

    console.log(`Weight update: ${newWeight} ${weightData.unit} (stable: ${weightData.stable})`);
  }

  /**
   * Set up weight stability monitoring with debouncing
   */
  private setupWeightStabilityMonitoring(): void {
    toObservable(this.currentWeight)
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        debounceTime(500) // Wait for 500ms of no changes
      )
      .subscribe((weight: number) => {
        this.checkWeightStability(weight);
      });
  }

  /**
   * Check if weight is stable and in acceptable range
   */
  private checkWeightStability(weight: number): void {
    const config = this.progressConfig();
    const isInRange = weight >= config.toleranceMin && weight <= config.toleranceMax;

    if (this._stableWeightTimer) {
      clearTimeout(this._stableWeightTimer);
    }

    if (isInRange && weight > 0) {
      // Start stability timer
      this._stableWeightTimer = setTimeout(() => {
        if (this.isWeightStable() && this.isWeightInRange()) {
          this._lastStableWeight.set(weight);
          console.log(`Weight stabilized at: ${weight} ${config.unit}`);
        }
      }, 2000); // 2 seconds of stability required
    }
  }

  /**
   * Set up auto-save functionality when weight is stable and in range
   */
  private setupAutoSave(): void {
    toObservable(this._lastStableWeight)
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged()
      )
      .subscribe((stableWeight: number | null) => {
        if (stableWeight !== null) {
          this.autoSaveWeight(stableWeight);
        }
      });
  }

  /**
   * Auto-save weight when it's stable and in acceptable range
   */
  private autoSaveWeight(weight: number): void {
    if (!this.isWeightInRange()) return;

    console.log(`Auto-saving stable weight: ${weight}`);

    // Trigger success animation
    if (this.progressBar) {
      this.progressBar.triggerSuccessAnimation();
    }

    // Save the weight (in real implementation, this would call API)
    this.onSave();

    // Play success sound (if available)
    this.playSuccessSound();
  }

  /**
   * Play success sound when weight is captured
   */
  private playSuccessSound(): void {
    // In a real implementation, you might play a sound
    try {
      const audio = new Audio('assets/sounds/success.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('Could not play success sound:', e));
    } catch (e) {
      console.log('Success sound not available');
    }
  }

  /**
   * Handle Fetch Weight button click (manual weight fetch)
   */
  onFetchWeight(): void {
    console.log('Manual weight fetch requested...');
    this._isLoading.set(true);

    // In real implementation, this might trigger a one-time scale read
    // For now, we'll simulate a manual scale reading
    setTimeout(() => {
      const mockWeight = 19.985 + (Math.random() * 0.05);
      this.handleWeightUpdate({
        scaleId: 'manual',
        weight: mockWeight,
        unit: 'KG',
        stable: true,
        timestamp: Date.now()
      });

      this._isLoading.set(false);
    }, 1000);
  }

  /**
   * Handle action button clicks
   */
  onAddLot(): void {
    console.log('Add Lot clicked');
    // In real implementation, this would open lot selection dialog
  }

  onViewLots(): void {
    console.log('View Lots clicked');
    // In real implementation, this would show lots management interface
  }

  onPrint(): void {
    console.log('Print clicked');
    // In real implementation, this would generate and print labels
  }

  onSave(): void {
    if (this.partialPickingForm.valid) {
      this._isLoading.set(true);
      console.log('Saving partial picking data...', this.partialPickingForm.value);

      // Mock save operation
      setTimeout(() => {
        this._isLoading.set(false);
        console.log('Data saved successfully');
      }, 1000);
    }
  }

  onExit(): void {
    // Logout and show confirmation dialog
    if (confirm('Are you sure you want to logout? Any unsaved changes will be lost.')) {
      this.authService.logout();
    }
  }

  /**
   * Handle table row selection
   */
  onSelectBatchRow(index: number): void {
    console.log(`Selected batch row ${index}`);
    // In real implementation, this would highlight the row and possibly load related data
  }

  /**
   * Get current user display name
   */
  getCurrentUser(): string {
    return this.authService.userDisplayName() || 'Unknown User';
  }

  /**
   * Format number for display
   */
  formatNumber(value: number): string {
    return value.toFixed(4);
  }

  /**
   * Check if current weight is within acceptable range
   */
  isWeightInRange(): boolean {
    const currentWeight = this._currentWeight();
    const config = this.progressConfig();
    return currentWeight >= config.toleranceMin && currentWeight <= config.toleranceMax && currentWeight > 0;
  }

  /**
   * Check if weight is in range (using form value for backward compatibility)
   */
  isFormWeightInRange(): boolean {
    const data = this._partialPickingData();
    const weight = this.partialPickingForm.get('weight')?.value || 0;
    return weight >= data.weightRangeMin && weight <= data.weightRangeMax;
  }

  /**
   * Get weight status class for styling (backward compatibility)
   */
  getWeightStatusClass(): string {
    if (this.isFormWeightInRange()) {
      return 'weight-in-range';
    }
    return 'weight-out-of-range';
  }

  /**
   * Get scale connection status for display
   */
  getConnectionStatusText(): string {
    const isConnected = this._isScaleConnected();
    const connectionState = this.weightScaleService.connectionState();

    if (isConnected) {
      return 'Scale Connected';
    } else {
      switch (connectionState) {
        case 'connecting':
          return 'Connecting to Scale...';
        case 'reconnecting':
          return 'Reconnecting...';
        case 'error':
          return 'Scale Connection Error';
        default:
          return 'Scale Disconnected';
      }
    }
  }

  /**
   * Manual reconnect to scale
   */
  onReconnectScale(): void {
    console.log('Manual scale reconnection requested');
    this.weightScaleService.reconnect();
  }

  /**
   * Tare the scale
   */
  onTareScale(): void {
    console.log('Taring scale...');
    this.weightScaleService.tare();
  }

  /**
   * Calibrate the scale
   */
  onCalibrateScale(): void {
    console.log('Calibrating scale...');
    this.weightScaleService.calibrate();
  }

  /**
   * Get current weight for display
   */
  getCurrentWeightDisplay(): string {
    const weight = this._currentWeight();
    return weight > 0 ? weight.toFixed(4) : '0.0000';
  }

  /**
   * Get weight status message for user guidance
   */
  getWeightStatusMessage(): string {
    if (!this._isScaleConnected()) {
      return 'Scale not connected. Check hardware connection.';
    }

    const weight = this._currentWeight();
    const config = this.progressConfig();

    if (weight === 0) {
      return 'Place item on scale to begin weighing.';
    }

    if (weight < config.toleranceMin) {
      const needed = config.toleranceMin - weight;
      return `Add ${needed.toFixed(3)} ${config.unit} more material.`;
    }

    if (weight > config.toleranceMax) {
      const excess = weight - config.toleranceMax;
      return `Remove ${excess.toFixed(3)} ${config.unit} excess material.`;
    }

    if (this._isWeightStable()) {
      return 'Weight captured successfully!';
    } else {
      return 'Weight in range - waiting for stability...';
    }
  }
}
