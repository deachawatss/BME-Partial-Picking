"use strict";
(self["webpackChunkpk_frontend"] = self["webpackChunkpk_frontend"] || []).push([["src_app_features_scales_scale-management_scale-management_component_ts"],{

/***/ 3058:
/*!********************************************************************************!*\
  !*** ./src/app/features/scales/scale-management/scale-management.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScaleManagementComponent: () => (/* binding */ ScaleManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






function ScaleManagementComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading scales...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ScaleManagementComponent_div_54_tr_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scale_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Station: ", scale_r2.workstationId, " ");
  }
}
function ScaleManagementComponent_div_54_tr_17_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scale_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" FW: ", scale_r2.firmwareVersion, " ");
  }
}
function ScaleManagementComponent_div_54_tr_17_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scale_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Battery: ", scale_r2.batteryLevel, "% ");
  }
}
function ScaleManagementComponent_div_54_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 38)(1, "td", 39)(2, "div")(3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 39)(10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ScaleManagementComponent_div_54_tr_17_div_14_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 39)(16, "div", 43)(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ScaleManagementComponent_div_54_tr_17_div_21_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 39)(23, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ScaleManagementComponent_div_54_tr_17_div_25_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td", 39)(27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 39)(30, "div", 47)(31, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_div_54_tr_17_Template_button_click_31_listener() {
      const scale_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.testScale(scale_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Test ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_div_54_tr_17_Template_button_click_33_listener() {
      const scale_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.calibrateScale(scale_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Calibrate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_div_54_tr_17_Template_button_click_35_listener() {
      const scale_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.viewDetails(scale_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const scale_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](scale_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](scale_r2.serialNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](scale_r2.comPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r2.getStatusIndicatorClass(scale_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.getStatusDisplayName(scale_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", scale_r2.workstationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Capacity: ", ctx_r2.formatWeight(scale_r2.capacity));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Precision: \u00B1", ctx_r2.formatWeight(scale_r2.precision));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", scale_r2.firmwareVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.formatWeight(scale_r2.lastWeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", scale_r2.batteryLevel !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.formatDateTime(scale_r2.lastUpdated));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", scale_r2.status === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", scale_r2.status !== "connected");
  }
}
function ScaleManagementComponent_div_54_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "No scales found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_div_54_tr_18_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scanForScales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Scan for Scales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedStatusFilter === "all" ? "No scales have been registered." : "No scales match the selected filter.", " ");
  }
}
function ScaleManagementComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "table", 33)(2, "thead")(3, "tr", 34)(4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Scale Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Current Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ScaleManagementComponent_div_54_tr_17_Template, 37, 15, "tr", 36)(18, ScaleManagementComponent_div_54_tr_18_Template, 10, 1, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.filteredScales());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.filteredScales().length === 0);
  }
}
function ScaleManagementComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "div", 59)(4, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Scale Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_div_55_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 64)(10, "div")(11, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div")(16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div")(21, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "COM Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div")(26, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 67)(31, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_div_55_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_div_55_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.editScale(ctx_r2.selectedScale()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Edit Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selectedScale().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selectedScale().serialNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selectedScale().comPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r2.getStatusClass(ctx_r2.selectedScale().status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.getStatusDisplayName(ctx_r2.selectedScale().status), " ");
  }
}
class ScaleManagementComponent {
  constructor() {
    // Form inputs
    this.selectedStatusFilter = 'all';
    // Signals for reactive state management
    this._isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isLoading"
    }] : []));
    this._isScanning = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isScanning"
    }] : []));
    this._isRefreshing = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isRefreshing"
    }] : []));
    this._scales = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "_scales"
    }] : []));
    this._selectedScale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_selectedScale"
    }] : []));
    this._statusFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('all', ...(ngDevMode ? [{
      debugName: "_statusFilter"
    }] : []));
    // Public readonly signals
    this.isLoading = this._isLoading.asReadonly();
    this.isScanning = this._isScanning.asReadonly();
    this.isRefreshing = this._isRefreshing.asReadonly();
    this.scales = this._scales.asReadonly();
    this.selectedScale = this._selectedScale.asReadonly();
    // Computed signals
    this.totalScales = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._scales().length, ...(ngDevMode ? [{
      debugName: "totalScales"
    }] : []));
    this.connectedScales = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._scales().filter(scale => scale.status === 'connected').length, ...(ngDevMode ? [{
      debugName: "connectedScales"
    }] : []));
    this.disconnectedScales = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._scales().filter(scale => scale.status === 'disconnected').length, ...(ngDevMode ? [{
      debugName: "disconnectedScales"
    }] : []));
    this.errorScales = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._scales().filter(scale => scale.status === 'error').length, ...(ngDevMode ? [{
      debugName: "errorScales"
    }] : []));
    this.filteredScales = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const filter = this._statusFilter();
      const scales = this._scales();
      if (filter === 'all') {
        return scales;
      }
      return scales.filter(scale => scale.status === filter);
    }, ...(ngDevMode ? [{
      debugName: "filteredScales"
    }] : []));
  }
  ngOnInit() {
    this.loadScales();
  }
  /**
   * Load scales from the backend
   */
  loadScales() {
    this._isLoading.set(true);
    // Mock data for now - replace with actual API call
    setTimeout(() => {
      const mockScales = [{
        id: '1',
        name: 'Scale WS-001',
        serialNumber: 'SCL-2024-001',
        comPort: 'COM3',
        status: 'connected',
        capacity: 50.0,
        precision: 0.01,
        lastWeight: 12.45,
        lastUpdated: new Date(),
        workstationId: 'WS-001',
        firmwareVersion: '1.2.3',
        batteryLevel: 85
      }, {
        id: '2',
        name: 'Scale WS-002',
        serialNumber: 'SCL-2024-002',
        comPort: 'COM4',
        status: 'connected',
        capacity: 25.0,
        precision: 0.01,
        lastWeight: 0.00,
        lastUpdated: new Date(Date.now() - 30000),
        workstationId: 'WS-002',
        firmwareVersion: '1.2.3',
        batteryLevel: 92
      }, {
        id: '3',
        name: 'Scale WS-003',
        serialNumber: 'SCL-2024-003',
        comPort: 'COM5',
        status: 'disconnected',
        capacity: 50.0,
        precision: 0.01,
        lastWeight: 0.00,
        lastUpdated: new Date(Date.now() - 300000),
        workstationId: 'WS-003'
      }, {
        id: '4',
        name: 'Scale WS-004',
        serialNumber: 'SCL-2024-004',
        comPort: 'COM6',
        status: 'error',
        capacity: 25.0,
        precision: 0.01,
        lastWeight: 0.00,
        lastUpdated: new Date(Date.now() - 600000),
        workstationId: 'WS-004'
      }];
      this._scales.set(mockScales);
      this._isLoading.set(false);
    }, 1500);
  }
  /**
   * Scan for new scales
   */
  scanForScales() {
    this._isScanning.set(true);
    // Mock scanning process
    setTimeout(() => {
      // Simulate finding new scales
      console.log('Scanning for scales...');
      this._isScanning.set(false);
      this.loadScales();
    }, 3000);
  }
  /**
   * Refresh all scale statuses
   */
  refreshScales() {
    this._isRefreshing.set(true);
    // Mock refresh process
    setTimeout(() => {
      this.loadScales();
      this._isRefreshing.set(false);
    }, 2000);
  }
  /**
   * Update status filter
   */
  updateStatusFilter(filter) {
    this._statusFilter.set(filter);
  }
  /**
   * Test scale connection
   */
  testScale(scale) {
    console.log(`Testing scale ${scale.name}...`);
    // Implement scale testing logic
  }
  /**
   * Calibrate scale
   */
  calibrateScale(scale) {
    console.log(`Calibrating scale ${scale.name}...`);
    // Update scale status temporarily
    const scales = this._scales();
    const scaleIndex = scales.findIndex(s => s.id === scale.id);
    if (scaleIndex >= 0) {
      scales[scaleIndex].status = 'calibrating';
      this._scales.set([...scales]);
      // Simulate calibration process
      setTimeout(() => {
        scales[scaleIndex].status = 'connected';
        this._scales.set([...scales]);
      }, 5000);
    }
  }
  /**
   * View scale details
   */
  viewDetails(scale) {
    this._selectedScale.set(scale);
  }
  /**
   * Close details modal
   */
  closeDetails() {
    this._selectedScale.set(null);
  }
  /**
   * Edit scale settings
   */
  editScale(scale) {
    console.log(`Editing scale ${scale.name}...`);
    // Implement scale editing logic
    this.closeDetails();
  }
  // Helper methods
  formatWeight(weight) {
    return `${weight.toFixed(2)} kg`;
  }
  formatDateTime(date) {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  getStatusDisplayName(status) {
    const statusMap = {
      'connected': 'Connected',
      'disconnected': 'Disconnected',
      'error': 'Error',
      'calibrating': 'Calibrating'
    };
    return statusMap[status] || status;
  }
  getStatusIndicatorClass(status) {
    const statusClasses = {
      'connected': 'bg-green-500',
      'disconnected': 'bg-gray-400',
      'error': 'bg-red-500',
      'calibrating': 'bg-yellow-500 animate-pulse'
    };
    return statusClasses[status] || 'bg-gray-400';
  }
  getStatusClass(status) {
    const statusClasses = {
      'connected': 'text-green-600 font-medium',
      'disconnected': 'text-gray-600',
      'error': 'text-red-600 font-medium',
      'calibrating': 'text-yellow-600 font-medium'
    };
    return statusClasses[status] || 'text-gray-600';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ScaleManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScaleManagementComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ScaleManagementComponent,
    selectors: [["app-scale-management"]],
    decls: 56,
    vars: 12,
    consts: [[1, "container", "mx-auto", "px-4", "py-6"], [1, "mb-6"], [1, "text-2xl", "font-bold", "text-foreground", "mb-2"], [1, "text-muted-foreground"], [1, "nwfth-card", "mb-6", "p-4"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-4"], [1, "nwfth-button-primary", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "nwfth-button-secondary", 3, "click", "disabled"], [1, "flex", "items-center", "gap-2"], [1, "text-sm", "font-medium", "text-foreground"], [1, "nwfth-input", "w-32", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "connected"], ["value", "disconnected"], ["value", "error"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-4", "mb-6"], [1, "nwfth-card", "p-4", "text-center"], [1, "text-2xl", "font-bold", "text-primary"], [1, "text-sm", "text-muted-foreground"], [1, "text-2xl", "font-bold", "text-green-600"], [1, "text-2xl", "font-bold", "text-red-600"], [1, "text-2xl", "font-bold", "text-yellow-600"], [1, "nwfth-card", "p-6"], [1, "text-lg", "font-semibold", "text-foreground", "mb-4"], ["class", "text-center py-8", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", 4, "ngIf"], [1, "text-center", "py-8"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-primary", "mx-auto", "mb-4"], [1, "overflow-x-auto"], [1, "w-full"], [1, "border-b", "border-border"], [1, "text-left", "py-3", "px-4", "font-medium", "text-foreground"], ["class", "border-b border-border hover:bg-muted/50 transition-colors", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-b", "border-border", "hover:bg-muted/50", "transition-colors"], [1, "py-4", "px-4"], [1, "font-medium", "text-foreground"], [1, "text-xs", "text-muted-foreground"], [1, "w-3", "h-3", "rounded-full"], [1, "text-sm"], ["class", "text-xs text-muted-foreground mt-1", 4, "ngIf"], ["class", "text-xs text-muted-foreground", 4, "ngIf"], [1, "text-lg", "font-mono"], [1, "flex", "flex-col", "gap-1"], [1, "nwfth-button-secondary", "text-xs", "px-2", "py-1", 3, "click", "disabled"], [1, "nwfth-button-secondary", "text-xs", "px-2", "py-1", 3, "click"], [1, "text-xs", "text-muted-foreground", "mt-1"], ["colspan", "6", 1, "py-8", "text-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "mx-auto", "text-muted-foreground", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "text-lg", "font-medium", "text-foreground", "mb-2"], [1, "nwfth-button-primary", "mt-4", 3, "click"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "p-4", "z-50"], [1, "nwfth-card", "max-w-2xl", "w-full", "max-h-96", "overflow-y-auto"], [1, "p-6"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "text-lg", "font-semibold", "text-foreground"], [1, "text-muted-foreground", "hover:text-foreground", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "grid", "grid-cols-2", "gap-4"], [1, "text-base"], [1, "text-base", "font-mono"], [1, "mt-6", "flex", "justify-end", "gap-3"], [1, "nwfth-button-secondary", 3, "click"], [1, "nwfth-button-primary", 3, "click"]],
    template: function ScaleManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Scale Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Manage and monitor weight scales across all workstations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_Template_button_click_9_listener() {
          return ctx.scanForScales();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScaleManagementComponent_Template_button_click_13_listener() {
          return ctx.refreshScales();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11)(18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Filter:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ScaleManagementComponent_Template_select_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedStatusFilter, $event) || (ctx.selectedStatusFilter = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScaleManagementComponent_Template_select_ngModelChange_20_listener($event) {
          return ctx.updateStatusFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "All Scales");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Connected");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Disconnected");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Total Scales");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 19)(36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Connected");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 19)(41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Disconnected");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 19)(46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 25)(51, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Registered Scales");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, ScaleManagementComponent_div_53_Template, 4, 0, "div", 27)(54, ScaleManagementComponent_div_54_Template, 19, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ScaleManagementComponent_div_55_Template, 35, 6, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isScanning());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isScanning() ? "Scanning..." : "Scan for Scales", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isRefreshing());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isRefreshing() ? "Refreshing..." : "Refresh All", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatusFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.totalScales());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.connectedScales());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.disconnectedScales());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorScales());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedScale());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: [".modal-overlay[_ngcontent-%COMP%] {\n      -webkit-backdrop-filter: blur(4px);\n              backdrop-filter: blur(4px);\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NhbGVzL3NjYWxlLW1hbmFnZW1lbnQvc2NhbGUtbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0Usa0NBQTBCO2NBQTFCLDBCQUEwQjtJQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5tb2RhbC1vdmVybGF5IHtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_features_scales_scale-management_scale-management_component_ts.js.map