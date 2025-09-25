"use strict";
(self["webpackChunkpk_frontend"] = self["webpackChunkpk_frontend"] || []).push([["src_app_features_picking_partial-picking_partial-picking_component_ts"],{

/***/ 6022:
/*!*******************************************************************************!*\
  !*** ./src/app/features/picking/partial-picking/partial-picking.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartialPickingComponent: () => (/* binding */ PartialPickingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;







const _forTrack0 = ($index, $item) => $item.batchNo;
function PartialPickingComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_For_77_Template_div_click_0_listener() {
      const ɵ$index_127_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onSelectBatchRow(ɵ$index_127_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected-row", item_r4.item === "INFULM01");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.batchNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.formatNumber(item_r4.partial));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.formatNumber(item_r4.weighted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.formatNumber(item_r4.balance));
  }
}
function PartialPickingComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 44);
  }
}
function PartialPickingComponent_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Fetch Weight ");
  }
}
function PartialPickingComponent_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Saving... ");
  }
}
function PartialPickingComponent_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Save ");
  }
}
function PartialPickingComponent_Conditional_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 62)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage(), " ");
  }
}
class PartialPickingComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    // Angular 20 Signals for reactive state management
    this._isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isLoading"
    }] : []));
    this._errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "_errorMessage"
    }] : []));
    this._partialPickingData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
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
    }, ...(ngDevMode ? [{
      debugName: "_partialPickingData"
    }] : []));
    this._batchTicketPartials = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([{
      item: 'INFULM01',
      batchNo: '850857',
      partial: 10.0000,
      weighted: 10.0000,
      balance: 0.0000
    }, {
      item: 'INSUGW04',
      batchNo: '850858',
      partial: 20.0000,
      weighted: 20.0000,
      balance: 0.0000
    }, {
      item: 'INSUGW04',
      batchNo: '850859',
      partial: 20.0000,
      weighted: 20.0000,
      balance: 0.0000
    }, {
      item: 'INSUGW04',
      batchNo: '850860',
      partial: 20.0000,
      weighted: 20.0000,
      balance: 0.0000
    }, {
      item: 'INSUGW04',
      batchNo: '850861',
      partial: 20.0000,
      weighted: 20.0000,
      balance: 0.0000
    }, {
      item: 'INSUGW04',
      batchNo: '850862',
      partial: 20.0000,
      weighted: 20.0000,
      balance: 0.0000
    }, {
      item: 'INSUGW04',
      batchNo: '850863',
      partial: 20.0000,
      weighted: 20.0000,
      balance: 0.0000
    }, {
      item: 'INSUGW04',
      batchNo: '850864',
      partial: 20.0000,
      weighted: 20.0000,
      balance: 0.0000
    }], ...(ngDevMode ? [{
      debugName: "_batchTicketPartials"
    }] : []));
    // Public readonly signals
    this.isLoading = this._isLoading.asReadonly();
    this.errorMessage = this._errorMessage.asReadonly();
    this.partialPickingData = this._partialPickingData.asReadonly();
    this.batchTicketPartials = this._batchTicketPartials.asReadonly();
    // Computed signals
    this.hasError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._errorMessage().length > 0, ...(ngDevMode ? [{
      debugName: "hasError"
    }] : []));
    this.partialPickingForm = this.createForm();
  }
  ngOnInit() {
    // Initialize form with current data
    this.updateFormValues();
    // Load initial data (in real app, this would come from backend)
    this.loadPartialPickingData();
  }
  /**
   * Create reactive form matching the legacy interface
   */
  createForm() {
    return this.fb.group({
      runNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      batchNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      itemKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: [''],
      lotNo: [''],
      binNo: [''],
      bagWeight: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      weight: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      weightRangeMin: [0],
      weightRangeMax: [0],
      totalNeeded: [0],
      remainingQty: [0]
    });
  }
  /**
   * Update form values from current data
   */
  updateFormValues() {
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
  loadPartialPickingData() {
    this._isLoading.set(true);
    // Mock API call - in real implementation, this would fetch from backend
    setTimeout(() => {
      this._isLoading.set(false);
    }, 500);
  }
  /**
   * Handle search/lookup button clicks
   */
  onLookup(field) {
    console.log(`Looking up ${field}...`);
    // In real implementation, this would open lookup dialogs
  }
  /**
   * Handle calculator button click for bag weight
   */
  onCalculateBagWeight() {
    console.log('Opening bag weight calculator...');
    // In real implementation, this would open calculator dialog
  }
  /**
   * Handle Fetch Weight button click
   */
  onFetchWeight() {
    console.log('Fetching weight from scale...');
    this._isLoading.set(true);
    // Mock weight scale fetch - in real implementation, this would call scale service
    setTimeout(() => {
      const mockWeight = 19.985 + Math.random() * 0.05; // Random weight within range
      const currentData = this._partialPickingData();
      this._partialPickingData.set({
        ...currentData,
        weight: Number(mockWeight.toFixed(4))
      });
      this.partialPickingForm.patchValue({
        weight: mockWeight
      });
      this._isLoading.set(false);
    }, 1000);
  }
  /**
   * Handle action button clicks
   */
  onAddLot() {
    console.log('Add Lot clicked');
    // In real implementation, this would open lot selection dialog
  }
  onViewLots() {
    console.log('View Lots clicked');
    // In real implementation, this would show lots management interface
  }
  onPrint() {
    console.log('Print clicked');
    // In real implementation, this would generate and print labels
  }
  onSave() {
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
  onExit() {
    // Navigate back or show confirmation dialog
    if (confirm('Are you sure you want to exit? Any unsaved changes will be lost.')) {
      this.router.navigate(['/dashboard']);
    }
  }
  /**
   * Handle table row selection
   */
  onSelectBatchRow(index) {
    console.log(`Selected batch row ${index}`);
    // In real implementation, this would highlight the row and possibly load related data
  }
  /**
   * Get current user display name
   */
  getCurrentUser() {
    return this.authService.userDisplayName() || 'Unknown User';
  }
  /**
   * Format number for display
   */
  formatNumber(value) {
    return value.toFixed(4);
  }
  /**
   * Check if weight is within acceptable range
   */
  isWeightInRange() {
    const data = this._partialPickingData();
    const weight = this.partialPickingForm.get('weight')?.value || 0;
    return weight >= data.weightRangeMin && weight <= data.weightRangeMax;
  }
  /**
   * Get weight status class for styling
   */
  getWeightStatusClass() {
    if (this.isWeightInRange()) {
      return 'weight-in-range';
    }
    return 'weight-out-of-range';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PartialPickingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PartialPickingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PartialPickingComponent,
    selectors: [["app-partial-picking"]],
    decls: 150,
    vars: 19,
    consts: [[1, "partial-picking-container"], [1, "title-bar"], [1, "title-icon"], [1, "title-text"], [1, "title-controls"], [1, "title-minimize"], [1, "title-maximize"], [1, "title-close", 3, "click"], [1, "main-content", 3, "formGroup"], [1, "top-section"], [1, "run-info-section"], [1, "field-group"], [1, "field-label"], [1, "field-with-button"], ["type", "text", "formControlName", "runNo", 1, "field-input"], [1, "lookup-button", 3, "click"], ["type", "text", "formControlName", "batchNo", 1, "field-input"], ["type", "text", "formControlName", "itemKey", 1, "field-input"], ["type", "text", "formControlName", "description", 1, "field-input", "description-input"], [1, "header-info-section"], [1, "header-field"], [1, "header-label"], [1, "header-value"], [1, "header-description"], [1, "header-details"], [1, "separator"], [1, "middle-section"], [1, "table-container"], [1, "table-header"], [1, "data-table"], [1, "table-header-row"], [1, "table-cell", "header-cell"], [1, "table-data-row", 3, "selected-row"], [1, "bottom-section"], [1, "input-fields-column"], ["type", "text", "formControlName", "lotNo", 1, "field-input"], ["type", "text", "formControlName", "binNo", 1, "field-input"], [1, "bin-capacity"], ["type", "number", "formControlName", "bagWeight", 1, "field-input", "number-input", 3, "value"], [1, "calculator-button", 3, "click"], [1, "field-group", "weight-field"], [1, "weight-input-container"], ["type", "number", "formControlName", "weight", 1, "field-input", "number-input", "weight-input", 3, "value"], [1, "fetch-weight-button", 3, "click", "disabled"], [1, "loading-spinner"], [1, "weight-range-container"], ["type", "number", "formControlName", "weightRangeMin", "readonly", "", 1, "field-input", "number-input", "range-input", 3, "value"], [1, "range-separator"], ["type", "number", "formControlName", "weightRangeMax", "readonly", "", 1, "field-input", "number-input", "range-input", 3, "value"], ["type", "number", "formControlName", "totalNeeded", "readonly", "", 1, "field-input", "number-input", 3, "value"], ["type", "number", "formControlName", "remainingQty", "readonly", "", 1, "field-input", "number-input", 3, "value"], [1, "status-column"], [1, "status-panel"], [1, "status-item"], [1, "status-label"], [1, "status-icon", "intermediate"], [1, "status-icon", "finished"], [1, "action-buttons"], [1, "action-button", "primary-action", 3, "click"], [1, "action-button", "secondary-action", 3, "click"], [1, "action-button", "primary-action", 3, "click", "disabled"], [1, "action-button", "danger-action", 3, "click"], [1, "error-message"], [1, "table-data-row", 3, "click"], [1, "table-cell", "data-cell"], [1, "table-cell", "data-cell", "number-cell"], [1, "error-icon"]],
    template: function PartialPickingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u2696\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Production Picking Pallet Assembly (Partial picking)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u2500");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u25A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_11_listener() {
          return ctx.onExit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u2715");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Run No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_21_listener() {
          return ctx.onLookup("runNo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11)(24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Batch No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_28_listener() {
          return ctx.onLookup("batchNo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 11)(31, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Item Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_35_listener() {
          return ctx.onLookup("itemKey");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 11)(38, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 19)(42, "div", 20)(43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "FG Item Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 24)(50, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Batches");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Production Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 26)(61, "div", 27)(62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Batch Ticket Partials");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 29)(65, "div", 30)(66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "BatchNo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Partial");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Weighted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](76, PartialPickingComponent_For_77_Template, 11, 7, "div", 32, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 33)(79, "div", 34)(80, "div", 11)(81, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Lot No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_85_listener() {
          return ctx.onLookup("lotNo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 11)(88, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Bin No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_92_listener() {
          return ctx.onLookup("binNo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 11)(97, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Bag Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_101_listener() {
          return ctx.onCalculateBagWeight();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "\uD83D\uDCDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 40)(104, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_108_listener() {
          return ctx.onFetchWeight();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](109, PartialPickingComponent_Conditional_109_Template, 1, 0, "span", 44)(110, PartialPickingComponent_Conditional_110_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 11)(112, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Weight Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](118, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 11)(120, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Total Needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 11)(124, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Remaining Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 51)(128, "div", 52)(129, "div", 53)(130, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "*Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 53)(135, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 57)(138, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_138_listener() {
          return ctx.onAddLot();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Add Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_140_listener() {
          return ctx.onViewLots();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "View Lots");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_142_listener() {
          return ctx.onPrint();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_144_listener() {
          return ctx.onSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](145, PartialPickingComponent_Conditional_145_Template, 2, 0)(146, PartialPickingComponent_Conditional_146_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PartialPickingComponent_Template_button_click_147_listener() {
          return ctx.onExit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](149, PartialPickingComponent_Conditional_149_Template, 4, 1, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.partialPickingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.partialPickingData().fgItemKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.partialPickingData().fgDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.partialPickingData().batches);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.partialPickingData().productionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.batchTicketPartials());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.partialPickingData().binCapacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.formatNumber(ctx.partialPickingData().bagWeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.getWeightStatusClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.formatNumber(ctx.partialPickingData().weight));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.isLoading() ? 109 : 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.formatNumber(ctx.partialPickingData().weightRangeMin));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.formatNumber(ctx.partialPickingData().weightRangeMax));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.formatNumber(ctx.partialPickingData().totalNeeded));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.formatNumber(ctx.partialPickingData().remainingQty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.isLoading() ? 145 : 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.hasError() ? 149 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["\n\n\n\n\n.partial-picking-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--color-brand-brown);\n  color: var(--color-brand-cream);\n  font-family: 'Segoe UI', Arial, sans-serif;\n  font-size: 11px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.title-bar[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #5a3528, var(--color-brand-brown));\n  border-bottom: 1px solid #3d2419;\n  padding: 4px 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 28px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.title-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 14px;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 11px;\n  font-weight: normal;\n  margin: 0;\n  color: var(--color-brand-cream);\n}\n\n.title-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n\n.title-minimize[_ngcontent-%COMP%], \n.title-maximize[_ngcontent-%COMP%], \n.title-close[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 18px;\n  background: linear-gradient(to bottom, #6b4234, #4a2c1f);\n  border: 1px solid #3d2419;\n  color: var(--color-brand-cream);\n  font-size: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.title-close[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #8b4234, #6a2c1f);\n}\n\n\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  background-color: var(--color-brand-brown);\n}\n\n\n\n.top-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  min-height: 120px;\n}\n\n.run-info-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.header-info-section[_ngcontent-%COMP%] {\n  flex: 2;\n  background: linear-gradient(to bottom, #4a2f23, #3d251a);\n  border: 1px solid #2d1b12;\n  border-radius: 3px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.header-field[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.header-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--color-brand-amber);\n  min-width: 80px;\n}\n\n.header-value[_ngcontent-%COMP%] {\n  background-color: var(--color-brand-cream);\n  color: var(--color-brand-brown);\n  padding: 2px 6px;\n  border-radius: 2px;\n  font-weight: bold;\n}\n\n.header-description[_ngcontent-%COMP%] {\n  background-color: var(--color-brand-cream);\n  color: var(--color-brand-brown);\n  padding: 4px 6px;\n  border-radius: 2px;\n  font-size: 10px;\n  margin: 4px 0;\n}\n\n.header-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  font-size: 10px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  color: var(--color-brand-amber);\n  font-weight: bold;\n}\n\n\n\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 24px;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  min-width: 80px;\n  font-weight: bold;\n  color: var(--color-brand-cream);\n  font-size: 11px;\n  text-align: left;\n}\n\n.field-input[_ngcontent-%COMP%] {\n  background-color: var(--color-brand-cream);\n  color: var(--color-brand-brown);\n  border: 1px solid #8b6914;\n  border-radius: 2px;\n  padding: 2px 4px;\n  font-size: 11px;\n  height: 18px;\n  font-family: inherit;\n}\n\n.field-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-brand-amber);\n  box-shadow: 0 0 2px var(--color-brand-amber);\n}\n\n.field-with-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.field-with-button[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.description-input[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.number-input[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: right;\n}\n\n\n\n.lookup-button[_ngcontent-%COMP%], \n.calculator-button[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: linear-gradient(to bottom, #6b4234, #4a2c1f);\n  border: 1px solid #3d2419;\n  color: var(--color-brand-cream);\n  cursor: pointer;\n  font-size: 10px;\n  margin-left: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n}\n\n.lookup-button[_ngcontent-%COMP%]:hover, \n.calculator-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #7b4c34, #5a2c1f);\n}\n\n\n\n.middle-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 200px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  height: 100%;\n  border: 1px solid #2d1b12;\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: var(--color-brand-cream);\n}\n\n.table-header[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #4a2f23, #3d251a);\n  color: var(--color-brand-cream);\n  padding: 4px 8px;\n  font-weight: bold;\n  font-size: 11px;\n  border-bottom: 1px solid #2d1b12;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  height: calc(100% - 30px);\n  overflow-y: auto;\n}\n\n.table-header-row[_ngcontent-%COMP%] {\n  background-color: #d4c5a9;\n  color: var(--color-brand-brown);\n  display: flex;\n  border-bottom: 1px solid #b8a082;\n  font-weight: bold;\n  position: sticky;\n  top: 0;\n}\n\n.table-data-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e6dcc6;\n  background-color: var(--color-brand-cream);\n  color: var(--color-brand-brown);\n  cursor: pointer;\n}\n\n.table-data-row[_ngcontent-%COMP%]:hover {\n  background-color: #f0e6d2;\n}\n\n.table-data-row.selected-row[_ngcontent-%COMP%] {\n  background-color: var(--color-brand-amber);\n  color: var(--color-brand-brown);\n  font-weight: bold;\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  font-size: 11px;\n  border-right: 1px solid #d4c5a9;\n  display: flex;\n  align-items: center;\n}\n\n.table-cell[_ngcontent-%COMP%]:first-child {\n  width: 80px;\n}\n\n.table-cell[_ngcontent-%COMP%]:nth-child(2) {\n  width: 80px;\n}\n\n.table-cell[_ngcontent-%COMP%]:nth-child(3), \n.table-cell[_ngcontent-%COMP%]:nth-child(4), \n.table-cell[_ngcontent-%COMP%]:nth-child(5) {\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.data-cell[_ngcontent-%COMP%] {\n  font-family: 'Courier New', monospace;\n}\n\n.number-cell[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n\n\n.bottom-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  min-height: 200px;\n}\n\n.input-fields-column[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.bin-capacity[_ngcontent-%COMP%] {\n  color: var(--color-brand-amber);\n  font-size: 10px;\n  margin-left: 8px;\n}\n\n\n\n.weight-field[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #4a2f23, #3d251a);\n  border: 1px solid #2d1b12;\n  border-radius: 3px;\n  padding: 6px;\n  margin: 4px 0;\n}\n\n.weight-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.weight-input[_ngcontent-%COMP%] {\n  width: 100px;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.weight-input.weight-in-range[_ngcontent-%COMP%] {\n  background-color: #d4f4d4;\n  color: #2d5a2d;\n  border-color: #4a8a4a;\n}\n\n.weight-input.weight-out-of-range[_ngcontent-%COMP%] {\n  background-color: #f4d4d4;\n  color: #5a2d2d;\n  border-color: #8a4a4a;\n}\n\n.fetch-weight-button[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, var(--color-brand-amber), #d4a017);\n  color: var(--color-brand-brown);\n  border: 1px solid #b8901a;\n  padding: 4px 12px;\n  border-radius: 3px;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 11px;\n  min-width: 90px;\n}\n\n.fetch-weight-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(to bottom, #ffcc33, var(--color-brand-amber));\n}\n\n.fetch-weight-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n.weight-range-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.range-input[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.range-separator[_ngcontent-%COMP%] {\n  color: var(--color-brand-amber);\n  font-weight: bold;\n  padding: 0 4px;\n}\n\n\n\n.status-column[_ngcontent-%COMP%] {\n  width: 120px;\n  display: flex;\n  flex-direction: column;\n}\n\n.status-panel[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #4a2f23, #3d251a);\n  border: 1px solid #2d1b12;\n  border-radius: 3px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-height: 100px;\n}\n\n.status-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n\n.status-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-brand-amber);\n  text-align: center;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.status-icon.intermediate[_ngcontent-%COMP%] {\n  background-color: var(--color-brand-amber);\n  color: var(--color-brand-brown);\n}\n\n.status-icon.finished[_ngcontent-%COMP%] {\n  background-color: #4a8a4a;\n  color: white;\n}\n\n\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 8px 0;\n  justify-content: flex-start;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid #3d2419;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: bold;\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n\n.primary-action[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #4a8a4a, #3a7a3a);\n  color: white;\n}\n\n.primary-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(to bottom, #5a9a5a, #4a8a4a);\n}\n\n.secondary-action[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #6b4234, #4a2c1f);\n  color: var(--color-brand-cream);\n}\n\n.secondary-action[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #7b4c34, #5a2c1f);\n}\n\n.danger-action[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #8a4a4a, #7a3a3a);\n  color: white;\n}\n\n.danger-action[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #9a5a5a, #8a4a4a);\n}\n\n.action-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: #8a4a4a;\n  color: white;\n  padding: 8px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n\n\n@media (max-width: 1366px) {\n  .partial-picking-container[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .field-input[_ngcontent-%COMP%] {\n    height: 20px;\n    font-size: 10px;\n  }\n\n  .table-cell[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 1024px) {\n  .top-section[_ngcontent-%COMP%], \n   .bottom-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .header-info-section[_ngcontent-%COMP%] {\n    order: -1;\n  }\n\n  .status-column[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .status-panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    width: 100%;\n  }\n}\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  .loading-spinner[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n\n\n\n.field-input[_ngcontent-%COMP%]:focus, \n.action-button[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--color-brand-amber);\n  outline-offset: 1px;\n}\n\n\n\n@media print {\n  .partial-picking-container[_ngcontent-%COMP%] {\n    background: white;\n    color: black;\n  }\n\n  .title-controls[_ngcontent-%COMP%], \n   .action-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGlja2luZy9wYXJ0aWFsLXBpY2tpbmcvcGFydGlhbC1waWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBQ2xELGtFQUFrRTs7QUFFbEU7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztFQUMxQywrQkFBK0I7RUFDL0IsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSx5RUFBeUU7RUFDekUsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7RUFDWix3REFBd0Q7RUFDeEQseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0RBQXdEO0FBQzFEOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsMENBQTBDO0FBQzVDOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsT0FBTztF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RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFdBQVc7RUFDYjtBQUNGOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBLHFCQUFxQjtBQUNyQjs7RUFFRSwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhcnRpYWwgUGlja2luZyBDb21wb25lbnQgLSBOV0ZUSCBCcm93biBUaGVtZSAqL1xuLyogUmVwbGljYXRpbmcgUGFydGlhbFBpY2tpbmdJbktHLmV4ZSBpbnRlcmZhY2Ugd2l0aCBicm93biB0aGVtZSAqL1xuXG4ucGFydGlhbC1waWNraW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtYnJvd24pO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtY3JlYW0pO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogVGl0bGUgQmFyICovXG4udGl0bGUtYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzVhMzUyOCwgdmFyKC0tY29sb3ItYnJhbmQtYnJvd24pKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDI0MTk7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnRpdGxlLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtY3JlYW0pO1xufVxuXG4udGl0bGUtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJweDtcbn1cblxuLnRpdGxlLW1pbmltaXplLFxuLnRpdGxlLW1heGltaXplLFxuLnRpdGxlLWNsb3NlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZiNDIzNCwgIzRhMmMxZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDI0MTk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1jcmVhbSk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdGxlLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhiNDIzNCwgIzZhMmMxZik7XG59XG5cbi8qIE1haW4gQ29udGVudCAqL1xuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWJyb3duKTtcbn1cblxuLyogVG9wIFNlY3Rpb24gKi9cbi50b3Atc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgbWluLWhlaWdodDogMTIwcHg7XG59XG5cbi5ydW4taW5mby1zZWN0aW9uIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5oZWFkZXItaW5mby1zZWN0aW9uIHtcbiAgZmxleDogMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRhMmYyMywgIzNkMjUxYSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDFiMTI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbn1cblxuLmhlYWRlci1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1hbWJlcik7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLmhlYWRlci12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWNyZWFtKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWJyb3duKTtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWNyZWFtKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWJyb3duKTtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogNHB4IDA7XG59XG5cbi5oZWFkZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtYW1iZXIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogRmllbGQgR3JvdXBzICovXG4uZmllbGQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLWhlaWdodDogMjRweDtcbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWNyZWFtKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZmllbGQtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1jcmVhbSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1icm93bik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YjY5MTQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4uZmllbGQtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWFtYmVyKTtcbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1jb2xvci1icmFuZC1hbWJlcik7XG59XG5cbi5maWVsZC13aXRoLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWVsZC13aXRoLWJ1dHRvbiAuZmllbGQtaW5wdXQge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5kZXNjcmlwdGlvbi1pbnB1dCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm51bWJlci1pbnB1dCB7XG4gIHdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogTG9va3VwIEJ1dHRvbnMgKi9cbi5sb29rdXAtYnV0dG9uLFxuLmNhbGN1bGF0b3ItYnV0dG9uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZiNDIzNCwgIzRhMmMxZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDI0MTk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1jcmVhbSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubG9va3VwLWJ1dHRvbjpob3Zlcixcbi5jYWxjdWxhdG9yLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3YjRjMzQsICM1YTJjMWYpO1xufVxuXG4vKiBNaWRkbGUgU2VjdGlvbiAtIFRhYmxlICovXG4ubWlkZGxlLXNlY3Rpb24ge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkMWIxMjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1jcmVhbSk7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGEyZjIzLCAjM2QyNTFhKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWNyZWFtKTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZDFiMTI7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRhYmxlLWhlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRjNWE5O1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtYnJvd24pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YTA4MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuLnRhYmxlLWRhdGEtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmRjYzY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWNyZWFtKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWJyb3duKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtZGF0YS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlNmQyO1xufVxuXG4udGFibGUtZGF0YS1yb3cuc2VsZWN0ZWQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtYW1iZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtYnJvd24pO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYmxlLWNlbGwge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNGM1YTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YWJsZS1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi50YWJsZS1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4udGFibGUtY2VsbDpudGgtY2hpbGQoMyksXG4udGFibGUtY2VsbDpudGgtY2hpbGQoNCksXG4udGFibGUtY2VsbDpudGgtY2hpbGQoNSkge1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaGVhZGVyLWNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRhdGEtY2VsbCB7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG59XG5cbi5udW1iZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiBCb3R0b20gU2VjdGlvbiAqL1xuLmJvdHRvbS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmlucHV0LWZpZWxkcy1jb2x1bW4ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLmJpbi1jYXBhY2l0eSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1hbWJlcik7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLyogV2VpZ2h0IEZpZWxkIFNwZWNpYWwgU3R5bGluZyAqL1xuLndlaWdodC1maWVsZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRhMmYyMywgIzNkMjUxYSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDFiMTI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW46IDRweCAwO1xufVxuXG4ud2VpZ2h0LWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ud2VpZ2h0LWlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2VpZ2h0LWlucHV0LndlaWdodC1pbi1yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGY0ZDQ7XG4gIGNvbG9yOiAjMmQ1YTJkO1xuICBib3JkZXItY29sb3I6ICM0YThhNGE7XG59XG5cbi53ZWlnaHQtaW5wdXQud2VpZ2h0LW91dC1vZi1yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGQ0ZDQ7XG4gIGNvbG9yOiAjNWEyZDJkO1xuICBib3JkZXItY29sb3I6ICM4YTRhNGE7XG59XG5cbi5mZXRjaC13ZWlnaHQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tY29sb3ItYnJhbmQtYW1iZXIpLCAjZDRhMDE3KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWJyb3duKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4OTAxYTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtaW4td2lkdGg6IDkwcHg7XG59XG5cbi5mZXRjaC13ZWlnaHQtYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmY2MzMywgdmFyKC0tY29sb3ItYnJhbmQtYW1iZXIpKTtcbn1cblxuLmZldGNoLXdlaWdodC1idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qIFdlaWdodCBSYW5nZSAqL1xuLndlaWdodC1yYW5nZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cblxuLnJhbmdlLWlucHV0IHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5yYW5nZS1zZXBhcmF0b3Ige1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtYW1iZXIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMCA0cHg7XG59XG5cbi8qIFN0YXR1cyBDb2x1bW4gKi9cbi5zdGF0dXMtY29sdW1uIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3RhdHVzLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRhMmYyMywgIzNkMjUxYSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDFiMTI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnN0YXR1cy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5zdGF0dXMtbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1hbWJlcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXR1cy1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnN0YXR1cy1pY29uLmludGVybWVkaWF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWFtYmVyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLWJyb3duKTtcbn1cblxuLnN0YXR1cy1pY29uLmZpbmlzaGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhOGE0YTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBBY3Rpb24gQnV0dG9ucyAqL1xuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDI0MTk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cblxuLnByaW1hcnktYWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRhOGE0YSwgIzNhN2EzYSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByaW1hcnktYWN0aW9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzVhOWE1YSwgIzRhOGE0YSk7XG59XG5cbi5zZWNvbmRhcnktYWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZiNDIzNCwgIzRhMmMxZik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1jcmVhbSk7XG59XG5cbi5zZWNvbmRhcnktYWN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzdiNGMzNCwgIzVhMmMxZik7XG59XG5cbi5kYW5nZXItYWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhhNGE0YSwgIzdhM2EzYSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhbmdlci1hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOWE1YTVhLCAjOGE0YTRhKTtcbn1cblxuLmFjdGlvbi1idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qIExvYWRpbmcgU3Bpbm5lciAqL1xuLmxvYWRpbmctc3Bpbm5lciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLyogRXJyb3IgTWVzc2FnZSAqL1xuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE0YTRhO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZXJyb3ItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gZm9yIFdhcmVob3VzZSBUYWJsZXRzICovXG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5wYXJ0aWFsLXBpY2tpbmctY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuZmllbGQtaW5wdXQge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAudGFibGUtY2VsbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnRvcC1zZWN0aW9uLFxuICAuYm90dG9tLXNlY3Rpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuaGVhZGVyLWluZm8tc2VjdGlvbiB7XG4gICAgb3JkZXI6IC0xO1xuICB9XG5cbiAgLnN0YXR1cy1jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuc3RhdHVzLXBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8qIEFjY2Vzc2liaWxpdHkgSW1wcm92ZW1lbnRzICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAubG9hZGluZy1zcGlubmVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLyogRm9jdXMgTWFuYWdlbWVudCAqL1xuLmZpZWxkLWlucHV0OmZvY3VzLFxuLmFjdGlvbi1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3ItYnJhbmQtYW1iZXIpO1xuICBvdXRsaW5lLW9mZnNldDogMXB4O1xufVxuXG4vKiBQcmludCBTdHlsZXMgKi9cbkBtZWRpYSBwcmludCB7XG4gIC5wYXJ0aWFsLXBpY2tpbmctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAudGl0bGUtY29udHJvbHMsXG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_features_picking_partial-picking_partial-picking_component_ts.js.map