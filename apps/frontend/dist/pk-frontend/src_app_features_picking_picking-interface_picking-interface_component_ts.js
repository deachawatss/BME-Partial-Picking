"use strict";
(self["webpackChunkpk_frontend"] = self["webpackChunkpk_frontend"] || []).push([["src_app_features_picking_picking-interface_picking-interface_component_ts"],{

/***/ 6614:
/*!***********************************************************************************!*\
  !*** ./src/app/features/picking/picking-interface/picking-interface.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickingInterfaceComponent: () => (/* binding */ PickingInterfaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;







function PickingInterfaceComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Min: ", ctx_r0.formatWeight(ctx_r0.currentPickingItem().tolerance.min));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Target: ", ctx_r0.formatWeight(ctx_r0.currentPickingItem().targetWeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Max: ", ctx_r0.formatWeight(ctx_r0.currentPickingItem().tolerance.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.getToleranceBarClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r0.getTolerancePercentage(), "%");
  }
}
function PickingInterfaceComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35)(1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Currently Picking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 39)(6, "div")(7, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div")(12, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div")(17, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Target Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 44)(22, "div", 6)(23, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Lot Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PickingInterfaceComponent_div_45_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.lotNumberInput, $event) || (ctx_r0.lotNumberInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 46)(27, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_div_45_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.skipCurrentItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Skip Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_div_45_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.confirmWeight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Confirm Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentPickingItem().itemCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentPickingItem().itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatWeight(ctx_r0.currentPickingItem().targetWeight), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.lotNumberInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.canConfirmWeight());
  }
}
function PickingInterfaceComponent_div_50_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_div_50_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.startPickingItem(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pick ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PickingInterfaceComponent_div_50_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_div_50_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.editItem(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PickingInterfaceComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div")(3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 21)(8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 21)(13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 21)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PickingInterfaceComponent_div_50_button_21_Template, 2, 0, "button", 52)(22, PickingInterfaceComponent_div_50_button_22_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.getItemRowClass(item_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.itemCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatWeight(item_r4.targetWeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.actualWeight !== null ? ctx_r0.formatWeight(item_r4.actualWeight) : "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.getStatusClass(item_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatusDisplayName(item_r4.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.status === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.status === "COMPLETED");
  }
}
function PickingInterfaceComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Picking Run Completed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "All items have been successfully picked.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 59)(9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_div_51_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.printLabels());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Print Labels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_div_51_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.finalizeRun());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Finalize Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
class PickingInterfaceComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    // Route parameter
    this.runId = '';
    // Form inputs
    this.lotNumberInput = '';
    // Signals for reactive state management
    this._isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isLoading"
    }] : []));
    this._currentRun = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_currentRun"
    }] : []));
    this._currentWeight = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0, ...(ngDevMode ? [{
      debugName: "_currentWeight"
    }] : []));
    this._isWeightStable = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isWeightStable"
    }] : []));
    this._isRecording = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isRecording"
    }] : []));
    this._connectionStatus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('connecting', ...(ngDevMode ? [{
      debugName: "_connectionStatus"
    }] : []));
    this._currentPickingItemId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_currentPickingItemId"
    }] : []));
    this._isScaleOperationInProgress = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isScaleOperationInProgress"
    }] : []));
    // Public readonly signals
    this.isLoading = this._isLoading.asReadonly();
    this.currentRun = this._currentRun.asReadonly();
    this.currentWeight = this._currentWeight.asReadonly();
    this.isWeightStable = this._isWeightStable.asReadonly();
    this.isRecording = this._isRecording.asReadonly();
    this.connectionStatus = this._connectionStatus.asReadonly();
    this.isScaleOperationInProgress = this._isScaleOperationInProgress.asReadonly();
    // Computed signals
    this.pickingItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._currentRun()?.items || [], ...(ngDevMode ? [{
      debugName: "pickingItems"
    }] : []));
    this.totalItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.pickingItems().length, ...(ngDevMode ? [{
      debugName: "totalItems"
    }] : []));
    this.completedItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.pickingItems().filter(item => item.status === 'COMPLETED'), ...(ngDevMode ? [{
      debugName: "completedItems"
    }] : []));
    this.progressPercentage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.totalItems() > 0 ? this.completedItems().length / this.totalItems() * 100 : 0, ...(ngDevMode ? [{
      debugName: "progressPercentage"
    }] : []));
    this.currentPickingItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.pickingItems().find(item => item.id === this._currentPickingItemId()), ...(ngDevMode ? [{
      debugName: "currentPickingItem"
    }] : []));
    this.isRunCompleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.totalItems() > 0 && this.completedItems().length === this.totalItems(), ...(ngDevMode ? [{
      debugName: "isRunCompleted"
    }] : []));
  }
  ngOnInit() {
    this.runId = this.route.snapshot.paramMap.get('runId') || '';
    this.loadPickingRun();
    this.connectToWeightScale();
  }
  ngOnDestroy() {
    if (this.weightSocket) {
      this.weightSocket.close();
    }
  }
  /**
   * Load picking run data
   */
  loadPickingRun() {
    this._isLoading.set(true);
    // Mock data for now - replace with actual API call
    setTimeout(() => {
      const mockRun = {
        id: this.runId,
        runNo: `PR-2025-${this.runId.padStart(3, '0')}`,
        description: 'Partial picking run for production batch',
        status: 'IN_PROGRESS',
        items: [{
          id: '1',
          itemCode: 'ING-001',
          itemName: 'Wheat Flour',
          targetWeight: 25.50,
          actualWeight: null,
          tolerance: {
            min: 25.20,
            max: 25.80
          },
          status: 'PENDING',
          unit: 'kg',
          location: 'A1-01'
        }, {
          id: '2',
          itemCode: 'ING-002',
          itemName: 'Sugar',
          targetWeight: 10.25,
          actualWeight: null,
          tolerance: {
            min: 10.10,
            max: 10.40
          },
          status: 'PENDING',
          unit: 'kg',
          location: 'B2-05'
        }, {
          id: '3',
          itemCode: 'ING-003',
          itemName: 'Salt',
          targetWeight: 0.75,
          actualWeight: null,
          tolerance: {
            min: 0.70,
            max: 0.80
          },
          status: 'PENDING',
          unit: 'kg',
          location: 'C1-12'
        }]
      };
      this._currentRun.set(mockRun);
      this._isLoading.set(false);
    }, 1000);
  }
  /**
   * Connect to weight scale WebSocket
   */
  connectToWeightScale() {
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
  startPickingItem(item) {
    // Update item status
    const items = this.pickingItems();
    const itemIndex = items.findIndex(i => i.id === item.id);
    if (itemIndex >= 0) {
      items[itemIndex].status = 'PICKING';
      this._currentPickingItemId.set(item.id);
      // Update the run
      const run = this._currentRun();
      if (run) {
        this._currentRun.set({
          ...run,
          items: [...items]
        });
      }
    }
  }
  /**
   * Confirm weight for current item
   */
  confirmWeight() {
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
        this._currentRun.set({
          ...run,
          items: [...items]
        });
      }
    }
  }
  /**
   * Skip current item
   */
  skipCurrentItem() {
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
        this._currentRun.set({
          ...run,
          items: [...items]
        });
      }
    }
  }
  /**
   * Can confirm weight
   */
  canConfirmWeight() {
    return this.currentPickingItem() !== null && this._isWeightStable() && this._connectionStatus() === 'connected';
  }
  /**
   * Tare scale
   */
  tareScale() {
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
  calibrateScale() {
    this._isScaleOperationInProgress.set(true);
    // Mock operation
    setTimeout(() => {
      this._isScaleOperationInProgress.set(false);
    }, 3000);
  }
  /**
   * Toggle recording
   */
  toggleRecording() {
    this._isRecording.set(!this._isRecording());
  }
  /**
   * Go back to picking list
   */
  goBack() {
    this.router.navigate(['/picking']);
  }
  /**
   * Edit item
   */
  editItem(item) {
    this.startPickingItem(item);
  }
  /**
   * Print labels
   */
  printLabels() {
    console.log('Printing labels for completed items...');
    // Implement label printing logic
  }
  /**
   * Finalize run
   */
  finalizeRun() {
    console.log('Finalizing picking run...');
    // Implement run finalization logic
    this.router.navigate(['/picking']);
  }
  // Helper methods
  formatWeight(weight) {
    return `${weight.toFixed(2)} kg`;
  }
  getConnectionStatusText() {
    const statusMap = {
      'connected': 'Scale Connected',
      'disconnected': 'Scale Disconnected',
      'connecting': 'Connecting...'
    };
    return statusMap[this._connectionStatus()];
  }
  getConnectionStatusClass() {
    const classMap = {
      'connected': 'nwfth-status-connected',
      'disconnected': 'nwfth-status-disconnected',
      'connecting': 'nwfth-status-connecting'
    };
    return classMap[this._connectionStatus()];
  }
  getConnectionIndicatorClass() {
    const classMap = {
      'connected': 'nwfth-indicator-connected',
      'disconnected': 'nwfth-indicator-disconnected',
      'connecting': 'nwfth-indicator-connecting animate-pulse'
    };
    return classMap[this._connectionStatus()];
  }
  getItemRowClass(item) {
    const classMap = {
      'PENDING': 'item-pending',
      'PICKING': 'item-picking',
      'COMPLETED': 'item-completed',
      'OVER_TOLERANCE': 'item-over-tolerance'
    };
    return classMap[item.status] || 'item-pending';
  }
  getStatusClass(status) {
    const statusClasses = {
      'PENDING': 'px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800',
      'PICKING': 'px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800',
      'COMPLETED': 'px-2 py-1 rounded-full text-xs bg-green-100 text-green-800',
      'OVER_TOLERANCE': 'px-2 py-1 rounded-full text-xs bg-red-100 text-red-800'
    };
    return statusClasses[status] || 'px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800';
  }
  getStatusDisplayName(status) {
    const statusMap = {
      'PENDING': 'Pending',
      'PICKING': 'Picking',
      'COMPLETED': 'Completed',
      'OVER_TOLERANCE': 'Over Tolerance'
    };
    return statusMap[status] || status;
  }
  getTolerancePercentage() {
    const item = this.currentPickingItem();
    if (!item) return 0;
    const weight = this._currentWeight();
    const range = item.tolerance.max - item.tolerance.min;
    const position = Math.max(0, Math.min(weight - item.tolerance.min, range));
    return position / range * 100;
  }
  getToleranceBarClass() {
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
  static #_ = _staticBlock = () => (this.ɵfac = function PickingInterfaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PickingInterfaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PickingInterfaceComponent,
    selectors: [["app-picking-interface"]],
    decls: 52,
    vars: 23,
    consts: [[1, "min-h-screen", "bg-background"], [1, "bg-white", "border-b", "border-border", "shadow-sm"], [1, "container", "mx-auto", "px-4", "py-4"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-bold", "text-foreground"], [1, "text-muted-foreground"], [1, "flex", "items-center", "gap-4"], [1, "px-3", "py-2", "rounded-lg", "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full"], [1, "text-sm", "font-medium"], [1, "nwfth-button-secondary", 3, "click"], [1, "container", "mx-auto", "px-4", "py-6"], [1, "nwfth-card", "mb-6", "p-6"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-lg", "font-semibold", "text-foreground"], [1, "text-sm", "text-muted-foreground"], [1, "w-full", "bg-muted", "rounded-full", "h-3"], [1, "bg-primary", "h-3", "rounded-full", "transition-all", "duration-300"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6", "mb-6"], [1, "nwfth-card", "p-6"], [1, "text-lg", "font-semibold", "text-foreground", "mb-4"], [1, "text-center"], [1, "text-4xl", "font-bold", "text-primary", "mb-2"], [1, "text-sm", "text-muted-foreground", "mb-4"], ["class", "mt-4", 4, "ngIf"], [1, "space-y-3"], [1, "nwfth-button-secondary", "w-full", 3, "click", "disabled"], [3, "click", "disabled"], ["class", "nwfth-card mb-6 p-6 border-primary border-2", 4, "ngIf"], ["class", "p-4 rounded-lg border transition-all", 3, "class", 4, "ngFor", "ngForOf"], ["class", "nwfth-card mt-6 p-6 bg-green-50 border-green-200", 4, "ngIf"], [1, "mt-4"], [1, "flex", "justify-between", "text-sm", "text-muted-foreground", "mb-2"], [1, "w-full", "bg-gray-200", "rounded-full", "h-2"], [1, "h-2", "rounded-full", "transition-all", "duration-300"], [1, "nwfth-card", "mb-6", "p-6", "border-primary", "border-2"], [1, "text-lg", "font-semibold", "text-foreground", "mb-4", "flex", "items-center", "gap-2"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "text-primary"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "text-sm", "font-medium", "text-foreground"], [1, "text-lg", "font-mono"], [1, "text-base"], [1, "text-lg", "font-semibold", "text-primary"], [1, "mt-6", "flex", "justify-between", "items-center"], ["type", "text", "placeholder", "LOT123", 1, "nwfth-input", "w-32", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "nwfth-button-primary", 3, "click", "disabled"], [1, "p-4", "rounded-lg", "border", "transition-all"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-4", "items-center"], [1, "font-mono", "text-sm"], [1, "text-xs", "text-muted-foreground"], ["class", "nwfth-button-secondary px-3 py-1 text-xs", 3, "click", 4, "ngIf"], [1, "nwfth-button-secondary", "px-3", "py-1", "text-xs", 3, "click"], [1, "nwfth-card", "mt-6", "p-6", "bg-green-50", "border-green-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "mx-auto", "text-green-500", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "font-semibold", "text-green-800", "mb-2"], [1, "text-green-700", "mb-4"], [1, "flex", "justify-center", "gap-4"], [1, "nwfth-button-primary", 3, "click"]],
    template: function PickingInterfaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_Template_button_click_14_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Back to List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Progress Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Current Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 21)(30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, PickingInterfaceComponent_div_34_Template, 10, 7, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 19)(36, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Scale Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 25)(39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_Template_button_click_39_listener() {
          return ctx.tareScale();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Tare Scale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_Template_button_click_41_listener() {
          return ctx.calibrateScale();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Calibrate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PickingInterfaceComponent_Template_button_click_43_listener() {
          return ctx.toggleRecording();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, PickingInterfaceComponent_div_45_Template, 31, 5, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 19)(47, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Picking Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, PickingInterfaceComponent_div_50_Template, 23, 11, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, PickingInterfaceComponent_div_51_Template, 13, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_0_0 = ctx.currentRun()) == null ? null : tmp_0_0.runNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_1_0 = ctx.currentRun()) == null ? null : tmp_1_0.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.getConnectionStatusClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.getConnectionIndicatorClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getConnectionStatusText());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.completedItems().length, " of ", ctx.totalItems(), " items completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.progressPercentage(), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.formatWeight(ctx.currentWeight()), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isWeightStable() ? "Stable" : "Stabilizing...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentPickingItem());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isScaleOperationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isScaleOperationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.isRecording() ? "nwfth-button-primary w-full bg-red-600" : "nwfth-button-primary w-full");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isScaleOperationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isRecording() ? "Stop Recording" : "Start Recording", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentPickingItem());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pickingItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRunCompleted());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: [".item-pending[_ngcontent-%COMP%] {\n      @apply border-gray-200 bg-white;\n    }\n    .item-picking[_ngcontent-%COMP%] {\n      @apply border-primary bg-blue-50;\n    }\n    .item-completed[_ngcontent-%COMP%] {\n      @apply border-green-200 bg-green-50;\n    }\n    .item-over-tolerance[_ngcontent-%COMP%] {\n      @apply border-red-200 bg-red-50;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGlja2luZy9waWNraW5nLWludGVyZmFjZS9waWNraW5nLWludGVyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSxnQ0FBZ0M7SUFDbEM7SUFDQTtNQUNFLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsK0JBQStCO0lBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLml0ZW0tcGVuZGluZyB7XG4gICAgICBAYXBwbHkgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlO1xuICAgIH1cbiAgICAuaXRlbS1waWNraW5nIHtcbiAgICAgIEBhcHBseSBib3JkZXItcHJpbWFyeSBiZy1ibHVlLTUwO1xuICAgIH1cbiAgICAuaXRlbS1jb21wbGV0ZWQge1xuICAgICAgQGFwcGx5IGJvcmRlci1ncmVlbi0yMDAgYmctZ3JlZW4tNTA7XG4gICAgfVxuICAgIC5pdGVtLW92ZXItdG9sZXJhbmNlIHtcbiAgICAgIEBhcHBseSBib3JkZXItcmVkLTIwMCBiZy1yZWQtNTA7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_features_picking_picking-interface_picking-interface_component_ts.js.map