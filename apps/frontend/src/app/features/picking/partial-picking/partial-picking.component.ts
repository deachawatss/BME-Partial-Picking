import { Component, OnInit, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

// Interface definitions matching the legacy system
interface BatchTicketPartial {
  item: string;
  batchNo: string;
  partial: number;
  weighted: number;
  balance: number;
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
}

@Component({
  selector: 'app-partial-picking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './partial-picking.component.html',
  styleUrls: ['./partial-picking.component.css']
})
export class PartialPickingComponent implements OnInit {
  partialPickingForm: FormGroup;

  // Angular 20 Signals for reactive state management
  private _isLoading = signal<boolean>(false);
  private _errorMessage = signal<string>('');
  private _partialPickingData = signal<PartialPickingData>({
    runNo: '600015',
    batchNo: '850857',
    itemKey: 'INSUGW04',
    description: 'Sugar Refine',
    fgItemKey: 'PRD10A03',
    fgDescription: 'Premix Specialty Blend-New(for TD100A03)',
    batches: 8,
    productionDate: '24/09/25',
    lotNo: '',
    binNo: '1329',
    binCapacity: '4293 KG',
    bagWeight: 0.0000,
    weight: 0.0000,
    weightRangeMin: 19.976000,
    weightRangeMax: 20.025000,
    totalNeeded: 20.0000,
    remainingQty: 20.0000
  });

  private _batchTicketPartials = signal<BatchTicketPartial[]>([
    { item: 'INFULM01', batchNo: '850857', partial: 10.0000, weighted: 10.0000, balance: 0.0000 },
    { item: 'INSUGW04', batchNo: '850858', partial: 20.0000, weighted: 20.0000, balance: 0.0000 },
    { item: 'INSUGW04', batchNo: '850859', partial: 20.0000, weighted: 20.0000, balance: 0.0000 },
    { item: 'INSUGW04', batchNo: '850860', partial: 20.0000, weighted: 20.0000, balance: 0.0000 },
    { item: 'INSUGW04', batchNo: '850861', partial: 20.0000, weighted: 20.0000, balance: 0.0000 },
    { item: 'INSUGW04', batchNo: '850862', partial: 20.0000, weighted: 20.0000, balance: 0.0000 },
    { item: 'INSUGW04', batchNo: '850863', partial: 20.0000, weighted: 20.0000, balance: 0.0000 },
    { item: 'INSUGW04', batchNo: '850864', partial: 20.0000, weighted: 20.0000, balance: 0.0000 }
  ]);

  // Public readonly signals
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly errorMessage = this._errorMessage.asReadonly();
  public readonly partialPickingData = this._partialPickingData.asReadonly();
  public readonly batchTicketPartials = this._batchTicketPartials.asReadonly();

  // Computed signals
  public readonly hasError = computed(() => this._errorMessage().length > 0);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.partialPickingForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialize form with current data
    this.updateFormValues();

    // Load initial data (in real app, this would come from backend)
    this.loadPartialPickingData();
  }

  /**
   * Create reactive form matching the legacy interface
   */
  private createForm(): FormGroup {
    return this.fb.group({
      runNo: ['', Validators.required],
      batchNo: ['', Validators.required],
      itemKey: ['', Validators.required],
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
   * Handle Fetch Weight button click
   */
  onFetchWeight(): void {
    console.log('Fetching weight from scale...');
    this._isLoading.set(true);

    // Mock weight scale fetch - in real implementation, this would call scale service
    setTimeout(() => {
      const mockWeight = 19.985 + (Math.random() * 0.05); // Random weight within range
      const currentData = this._partialPickingData();
      this._partialPickingData.set({
        ...currentData,
        weight: Number(mockWeight.toFixed(4))
      });

      this.partialPickingForm.patchValue({ weight: mockWeight });
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
   * Check if weight is within acceptable range
   */
  isWeightInRange(): boolean {
    const data = this._partialPickingData();
    const weight = this.partialPickingForm.get('weight')?.value || 0;
    return weight >= data.weightRangeMin && weight <= data.weightRangeMax;
  }

  /**
   * Get weight status class for styling
   */
  getWeightStatusClass(): string {
    if (this.isWeightInRange()) {
      return 'weight-in-range';
    }
    return 'weight-out-of-range';
  }
}