"use strict";
(self["webpackChunkpk_frontend"] = self["webpackChunkpk_frontend"] || []).push([["src_app_features_dashboard_dashboard_component_ts"],{

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;




class DashboardComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    // Component initialization
  }
  navigateToFeature(feature) {
    this.router.navigate([`/${feature}`]);
  }
  showComingSoon(feature) {
    alert(`${feature} feature is coming soon in the next release!`);
  }
  logout() {
    this.authService.logout();
  }
  getSessionRemaining() {
    return this.authService.getRemainingSessionTime();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 111,
    vars: 5,
    consts: [[1, "tw-min-h-screen", "tw-bg-brand-cream/20"], [1, "tw-bg-brand-brown", "tw-text-brand-cream", "tw-p-4", "tw-shadow-lg"], [1, "tw-max-w-7xl", "tw-mx-auto", "tw-flex", "tw-justify-between", "tw-items-center"], [1, "tw-flex", "tw-items-center", "tw-space-x-4"], [1, "tw-w-12", "tw-h-12", "tw-bg-brand-cream", "tw-rounded-full", "tw-flex", "tw-items-center", "tw-justify-center"], [1, "tw-text-brand-brown", "tw-font-bold", "tw-text-lg"], [1, "tw-text-xl", "tw-font-bold"], [1, "tw-text-brand-cream/80", "tw-text-sm"], [1, "tw-text-right"], [1, "tw-font-semibold"], [1, "tw-px-4", "tw-py-2", "tw-bg-brand-amber", "tw-text-brand-brown", "tw-rounded-lg", "tw-font-medium", "tw-transition-colors", "hover:tw-bg-brand-amber/90", 3, "click"], [1, "tw-max-w-7xl", "tw-mx-auto", "tw-p-6"], [1, "nwfth-card", "tw-p-6", "tw-mb-6"], [1, "tw-text-2xl", "tw-font-bold", "tw-text-brand-brown", "tw-mb-4"], [1, "tw-text-muted-foreground", "tw-mb-4"], [1, "tw-flex", "tw-items-center", "tw-space-x-2", "tw-text-sm"], [1, "tw-w-3", "tw-h-3", "tw-bg-green-500", "tw-rounded-full"], [1, "tw-text-green-700", "tw-font-medium"], [1, "tw-text-muted-foreground"], [1, "tw-grid", "tw-grid-cols-1", "md:tw-grid-cols-2", "lg:tw-grid-cols-3", "tw-gap-6", "tw-mb-8"], [1, "nwfth-card", "tw-p-6", "tw-cursor-pointer", "tw-transition-transform", "hover:tw-scale-105", 3, "click"], [1, "tw-flex", "tw-items-center", "tw-mb-4"], [1, "tw-w-12", "tw-h-12", "tw-bg-brand-brown", "tw-rounded-lg", "tw-flex", "tw-items-center", "tw-justify-center"], [1, "tw-text-brand-cream", "tw-text-xl"], [1, "tw-text-lg", "tw-font-bold", "tw-text-brand-brown", "tw-ml-3"], [1, "tw-text-muted-foreground", "tw-text-sm", "tw-mb-3"], [1, "tw-text-brand-amber", "tw-font-medium", "tw-text-sm"], [1, "nwfth-card", "tw-p-6", "tw-cursor-pointer", "tw-transition-transform", "hover:tw-scale-105", "tw-opacity-75", 3, "click"], [1, "tw-w-12", "tw-h-12", "tw-bg-gray-400", "tw-rounded-lg", "tw-flex", "tw-items-center", "tw-justify-center"], [1, "tw-text-white", "tw-text-xl"], [1, "tw-text-lg", "tw-font-bold", "tw-text-gray-600", "tw-ml-3"], [1, "tw-text-gray-500", "tw-text-sm", "tw-mb-3"], [1, "tw-text-gray-400", "tw-font-medium", "tw-text-sm"], [1, "tw-grid", "tw-grid-cols-1", "md:tw-grid-cols-2", "tw-gap-6"], [1, "nwfth-card", "tw-p-4"], [1, "tw-font-semibold", "tw-text-brand-brown", "tw-mb-3"], [1, "tw-space-y-2", "tw-text-sm"], [1, "tw-flex", "tw-justify-between"], [1, "tw-font-medium"], [1, "tw-font-medium", "tw-text-green-600"], [1, "tw-flex", "tw-justify-between", "tw-items-center"], [1, "tw-flex", "tw-items-center"], [1, "tw-w-2", "tw-h-2", "tw-bg-green-500", "tw-rounded-full", "tw-mr-2"], [1, "tw-text-green-600", "tw-font-medium"], [1, "tw-w-2", "tw-h-2", "tw-bg-yellow-500", "tw-rounded-full", "tw-mr-2"], [1, "tw-text-yellow-600", "tw-font-medium"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](7, "div")(8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "PK System Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Partial Picking Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](12, "div", 3)(13, "div", 8)(14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomListener"]("click", function DashboardComponent_Template_button_click_18_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](20, "main", 11)(21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Welcome to PK System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Your modern warehouse partial picking solution. Select an option below to begin your operations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "System Connected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u2022 Backend: Operational \u2022 Database: TFCPILOT3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](32, "div", 19)(33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomListener"]("click", function DashboardComponent_Template_div_click_33_listener() {
          return ctx.navigateToFeature("picking");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](34, "div", 21)(35, "div", 22)(36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u2696\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](38, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Partial Picking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](40, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Start partial picking operations with real-time weight scale integration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Start Picking \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomListener"]("click", function DashboardComponent_Template_div_click_44_listener() {
          return ctx.navigateToFeature("scales");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](45, "div", 21)(46, "div", 22)(47, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\uD83D\uDD27");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](49, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Scale Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](51, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Configure and monitor USB weight scales across workstations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Manage Scales \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomListener"]("click", function DashboardComponent_Template_div_click_55_listener() {
          return ctx.showComingSoon("Reports");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](56, "div", 21)(57, "div", 28)(58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](60, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](62, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " View picking reports, performance metrics, and system analytics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Coming Soon... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](66, "div", 33)(67, "div", 34)(68, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Session Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](70, "div", 36)(71, "div", 37)(72, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "User:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](74, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](76, "div", 37)(77, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Workstation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](79, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](81, "div", 37)(82, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Session Remaining:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](84, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](86, "div", 34)(87, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "System Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](89, "div", 36)(90, "div", 40)(91, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Backend API:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](93, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](95, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Connected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](97, "div", 40)(98, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Database:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](100, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](102, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "TFCPILOT3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](104, "div", 40)(105, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Weight Scales:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](107, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](108, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](109, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Checking...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.authService.userDisplayName());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.authService.workstationId());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.authService.userDisplayName());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.authService.workstationId());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.getSessionRemaining(), " minutes");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_component_ts.js.map