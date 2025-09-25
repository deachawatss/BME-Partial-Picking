"use strict";
(self["webpackChunkpk_frontend"] = self["webpackChunkpk_frontend"] || []).push([["src_app_features_auth_login_login_component_ts"],{

/***/ 461:
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;








function LoginComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldErrorMessage("username"), " ");
  }
}
function LoginComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldErrorMessage("password"), " ");
  }
}
function LoginComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 35);
  }
}
function LoginComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Authentication in progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "div", 37)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.getConnectionStatusClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx_r0.getConnectionStatusAriaLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.getConnectionStatusIconClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getConnectionStatusText());
  }
}
class LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    // Angular 20 Signals for reactive state management
    this._isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isLoading"
    }] : []));
    this._loginError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "_loginError"
    }] : []));
    this._connectionStatus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('unknown', ...(ngDevMode ? [{
      debugName: "_connectionStatus"
    }] : []));
    // Public readonly signals
    this.isLoading = this._isLoading.asReadonly();
    this.loginError = this._loginError.asReadonly();
    this.connectionStatus = this._connectionStatus.asReadonly();
    // Computed signals
    this.hasError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._loginError().length > 0, ...(ngDevMode ? [{
      debugName: "hasError"
    }] : []));
    this.isConnected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._connectionStatus() === 'connected', ...(ngDevMode ? [{
      debugName: "isConnected"
    }] : []));
    this.canSubmit = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.loginForm?.valid && !this._isLoading() && this._connectionStatus() === 'connected', ...(ngDevMode ? [{
      debugName: "canSubmit"
    }] : []));
    this.loginForm = this.fb.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(100)]]
    });
  }
  ngOnInit() {
    // Check if already authenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/partial-picking']);
      return;
    }
    // Test backend connection on component initialization
    this.testConnection();
    // Auto-retry connection every 10 seconds if disconnected
    const connectionRetryInterval = setInterval(() => {
      if (this._connectionStatus() === 'disconnected') {
        this.testConnection();
      }
    }, 10000);
    // Monitor authentication state changes using effect (Angular 20)
    // Note: In real implementation, use effect() from @angular/core for signal-based reactivity
    // For now, check authentication state periodically or use a different approach
    const authCheckInterval = setInterval(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/partial-picking']);
        clearInterval(authCheckInterval);
        clearInterval(connectionRetryInterval);
      }
    }, 1000);
    // Auto-focus username field for better UX
    setTimeout(() => {
      const usernameField = document.getElementById('username');
      if (usernameField) {
        usernameField.focus();
      }
    }, 100);
  }
  /**
   * Test connection to backend
   */
  testConnection() {
    this._connectionStatus.set('unknown');
    this.authService.testConnection().subscribe({
      next: isConnected => {
        this._connectionStatus.set(isConnected ? 'connected' : 'disconnected');
        if (!isConnected) {
          this._loginError.set('Unable to connect to server. Please check your connection.');
        } else {
          this._loginError.set('');
        }
      },
      error: () => {
        this._connectionStatus.set('disconnected');
        this._loginError.set('Backend server is not available. Please contact IT support.');
      }
    });
  }
  /**
   * Handle form submission
   */
  onSubmit() {
    if (!this.canSubmit()) {
      this.markAllFieldsAsTouched();
      return;
    }
    this._isLoading.set(true);
    this._loginError.set('');
    this.loginForm.disable();
    const {
      username,
      password
    } = this.loginForm.value;
    this.authService.login(username.trim(), password).subscribe({
      next: response => {
        this._isLoading.set(false);
        this.loginForm.enable();
        if (response.success) {
          // Success - navigation will be handled by the auth state subscription
          console.log('Login successful');
        } else {
          this._loginError.set(response.message || 'Login failed');
        }
      },
      error: error => {
        this._isLoading.set(false);
        this.loginForm.enable();
        const errorMessage = error.message || 'Login failed. Please try again.';
        this._loginError.set(errorMessage);
        // Re-test connection on error
        setTimeout(() => this.testConnection(), 1000);
      }
    });
  }
  /**
   * Mark all form fields as touched to show validation errors
   */
  markAllFieldsAsTouched() {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }
  /**
   * Get connection status text for display
   */
  getConnectionStatusText() {
    switch (this._connectionStatus()) {
      case 'connected':
        return 'Backend Connected';
      case 'disconnected':
        return 'Backend Disconnected';
      default:
        return 'Checking Connection...';
    }
  }
  /**
   * Get connection status icon class
   */
  getConnectionStatusIconClass() {
    switch (this._connectionStatus()) {
      case 'connected':
        return 'nwfth-indicator-connected';
      case 'disconnected':
        return 'nwfth-indicator-disconnected';
      default:
        return 'nwfth-indicator-connecting';
    }
  }
  /**
   * Get connection status container class
   */
  getConnectionStatusClass() {
    switch (this._connectionStatus()) {
      case 'connected':
        return 'nwfth-status-connected';
      case 'disconnected':
        return 'nwfth-status-disconnected';
      default:
        return 'nwfth-status-connecting';
    }
  }
  /**
   * Get ARIA label for connection status
   */
  getConnectionStatusAriaLabel() {
    switch (this._connectionStatus()) {
      case 'connected':
        return 'System connected successfully';
      case 'disconnected':
        return 'System connection failed';
      default:
        return 'Checking system connection';
    }
  }
  /**
   * Check if a form field has a specific error
   */
  hasFieldError(fieldName, errorType) {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.hasError(errorType) && field.touched);
  }
  /**
   * Get error message for a specific field
   */
  getFieldErrorMessage(fieldName) {
    const field = this.loginForm.get(fieldName);
    if (!field || !field.touched || !field.errors) {
      return '';
    }
    if (field.errors['required']) {
      return `${this.getFieldDisplayName(fieldName)} is required`;
    }
    if (field.errors['minlength']) {
      const requiredLength = field.errors['minlength'].requiredLength;
      return `${this.getFieldDisplayName(fieldName)} must be at least ${requiredLength} characters`;
    }
    if (field.errors['maxlength']) {
      const requiredLength = field.errors['maxlength'].requiredLength;
      return `${this.getFieldDisplayName(fieldName)} must not exceed ${requiredLength} characters`;
    }
    return 'Invalid input';
  }
  /**
   * Get display name for form field
   */
  getFieldDisplayName(fieldName) {
    const displayNames = {
      username: 'Username',
      password: 'Password'
    };
    return displayNames[fieldName] || fieldName;
  }
  /**
   * Clear login error
   */
  clearError() {
    this._loginError.set('');
  }
  /**
   * Handle Enter key press on form fields
   */
  onFieldKeyPress(event) {
    if (event.key === 'Enter' && this.canSubmit()) {
      this.onSubmit();
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 52,
    vars: 11,
    consts: [["role", "main", 1, "min-h-screen", "relative", "flex", "items-center", "justify-center", "p-4", "overflow-hidden"], [1, "absolute", "inset-0", "bg-gradient-to-br", "from-nwfth-brown", "via-nwfth-brown/80", "to-nwfth-brown/90"], [1, "absolute", "inset-0", "animate-gradient-morph"], [1, "absolute", "inset-0", "animate-particles-layer-1"], [1, "absolute", "inset-0", "animate-particles-layer-2"], [1, "absolute", "inset-0", "animate-particles-layer-3"], [1, "absolute", "inset-0", "animate-floating-orbs"], [1, "mobile-warning", "fixed", "top-4", "left-4", "right-4", "z-30"], [1, "font-medium"], ["role", "region", "aria-labelledby", "login-heading", 1, "nwfth-card", "login-form-container", "w-full", "max-w-md", "p-8", "space-y-6", "relative", "z-20"], [1, "text-center", "space-y-4"], [1, "flex", "justify-center"], ["src", "assets/images/NWFLogo.jpg", "alt", "Newly Weds Foods Thailand Logo", "loading", "eager", 1, "h-28", "w-auto", "mx-auto", "rounded", "shadow-sm"], ["id", "login-heading", 1, "text-xl", "font-bold", "text-foreground", "whitespace-nowrap"], ["role", "form", "aria-labelledby", "login-heading", "novalidate", "", 1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "space-y-2"], ["for", "username", 1, "block", "text-sm", "font-bold", "text-foreground"], ["aria-label", "required", 1, "text-red-500"], ["id", "username", "formControlName", "username", "type", "text", "placeholder", "Enter your username", "autocomplete", "username", "spellcheck", "false", "aria-describedby", "username-help username-error", 1, "nwfth-input", "w-full", "min-h-touch", "px-4", "py-3", "text-base", 3, "keypress"], ["id", "username-help", 1, "sr-only"], ["id", "username-error", "role", "alert", "aria-live", "polite", "class", "text-sm text-red-600 mt-1", 4, "ngIf"], ["for", "password", 1, "block", "text-sm", "font-bold", "text-foreground"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", "aria-describedby", "password-help password-error", 1, "nwfth-input", "w-full", "min-h-touch", "px-4", "py-3", "text-base", 3, "keypress"], ["id", "password-help", 1, "sr-only"], ["id", "password-error", "role", "alert", "aria-live", "polite", "class", "text-sm text-red-600 mt-1", 4, "ngIf"], ["type", "submit", 1, "nwfth-button-primary", "w-full", "min-h-touch", "px-6", "py-3", "flex", "items-center", "justify-center", "gap-2", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin", "aria-hidden", "true", 4, "ngIf"], ["id", "loading-status", "class", "sr-only", "aria-live", "polite", 4, "ngIf"], ["class", "flex justify-center", 4, "ngIf"], [1, "text-center", "text-xs", "text-muted-foreground", "mt-6", "border-t", "pt-4"], [1, "mt-1"], ["href", "#login-heading", 1, "sr-only", "absolute", "left-0", "top-0", "z-50", "bg-background", "text-foreground", "p-4", "rounded", "focus:not-sr-only", "focus:z-auto"], ["aria-live", "polite", 1, "sr-only"], ["id", "username-error", "role", "alert", "aria-live", "polite", 1, "text-sm", "text-red-600", "mt-1"], ["id", "password-error", "role", "alert", "aria-live", "polite", 1, "text-sm", "text-red-600", "mt-1"], ["aria-hidden", "true", 1, "w-4", "h-4", "border-2", "border-current", "border-t-transparent", "rounded-full", "animate-spin"], ["id", "loading-status", "aria-live", "polite", 1, "sr-only"], ["role", "status", 1, "relative", "flex", "items-center", "gap-3", "px-4", "py-2", "rounded-lg", "border-2", "font-medium", "text-sm", "transition-all", "duration-300", 3, "ngClass"], [1, "relative", "flex", "items-center"], [1, "w-3", "h-3", "rounded-full", "transition-all", "duration-300", 3, "ngClass"], [1, "font-semibold"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u26A0\uFE0F This system is optimized for warehouse tablets and desktop computers. Some features may not work properly on mobile devices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Partial Picking System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_17_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15)(19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_23_listener($event) {
          return ctx.onFieldKeyPress($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Enter your warehouse system username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15)(28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_32_listener($event) {
          return ctx.onFieldKeyPress($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Enter your warehouse system password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, LoginComponent_div_35_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, LoginComponent_div_37_Template, 1, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, LoginComponent_div_40_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, LoginComponent_div_41_Template, 6, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 29)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Partial Picking v1.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\u00A9 2025 Newly Weds Foods Thailand");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Skip to main content\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 32)(50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Use Tab to navigate between form fields. Press Enter to submit the login form when all fields are filled.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-invalid", ctx.hasFieldError("username", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-invalid", ctx.hasFieldError("password", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.canSubmit());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-describedby", ctx.isLoading() ? "loading-status" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isLoading() ? "Signing In..." : "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.connectionStatus() === "disconnected");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["\n\n\n\n\n.login-form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, \n.login-form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid hsl(var(--color-accent));\n  outline-offset: 2px;\n}\n\n\n\n.login-form-container[_ngcontent-%COMP%]   .nwfth-input[_ngcontent-%COMP%]:focus-visible {\n  transform: scale(1.02);\n  box-shadow: 0 0 0 3px hsl(var(--color-accent) / 0.3);\n}\n\n\n\n.login-form-container[_ngcontent-%COMP%]   .nwfth-button-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px) scale(1.02);\n  box-shadow: 0 8px 20px hsl(var(--color-primary) / 0.3);\n}\n\n.login-form-container[_ngcontent-%COMP%]   .nwfth-button-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0) scale(1);\n}\n\n\n\n.nwfth-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);\n}\n\n.nwfth-input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #059669;\n  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.2);\n}\n\n\n\n.login-form-container.nwfth-card[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow:\n    0 20px 40px hsl(var(--color-primary) / 0.1),\n    0 10px 20px hsl(var(--color-primary) / 0.05),\n    inset 0 1px 0 rgba(255, 255, 255, 0.8);\n}\n\n\n\n.login-form-container[_ngcontent-%COMP%]   .bg-nwfth-brown[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-brand-brown), #6B4423);\n  box-shadow: 0 4px 15px hsl(var(--color-primary) / 0.3);\n}\n\n\n\n.nwfth-status-connected[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ecfdf5, #d1fae5);\n  border-color: #10b981;\n  color: #065f46;\n}\n\n.nwfth-status-disconnected[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fef2f2, #fee2e2);\n  border-color: #ef4444;\n  color: #991b1b;\n}\n\n.nwfth-status-connecting[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fffbeb, #fef3c7);\n  border-color: #f59e0b;\n  color: #92400e;\n}\n\n\n\n.nwfth-indicator-connecting[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n\n\n[role=\"alert\"][_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n@media (max-width: 1023px) {\n  .mobile-warning[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_slideDown 0.5s ease-out;\n    z-index: 1000;\n  }\n}\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  .nwfth-input[_ngcontent-%COMP%]:focus-visible, \n   .nwfth-button-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: none;\n  }\n\n  [role=\"alert\"][_ngcontent-%COMP%], \n   .mobile-warning[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n\n\n\n@media (prefers-contrast: high) {\n  .nwfth-card[_ngcontent-%COMP%] {\n    background: white;\n    border: 2px solid black;\n  }\n\n  .nwfth-input[_ngcontent-%COMP%] {\n    border: 2px solid black;\n  }\n\n  .nwfth-button-primary[_ngcontent-%COMP%] {\n    border: 2px solid black;\n    background: black;\n    color: white;\n  }\n}\n\n\n\n@media print {\n  .tw-animate-gradient-morph[_ngcontent-%COMP%], \n   .tw-animate-particles-layer-1[_ngcontent-%COMP%], \n   .tw-animate-particles-layer-2[_ngcontent-%COMP%], \n   .tw-animate-particles-layer-3[_ngcontent-%COMP%], \n   .tw-animate-floating-orbs[_ngcontent-%COMP%], \n   .tw-animate-wave-pattern[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .nwfth-card[_ngcontent-%COMP%] {\n    background: white;\n    box-shadow: none;\n  }\n}\n\n\n\n@media (pointer: coarse) {\n  .nwfth-input[_ngcontent-%COMP%], \n   .nwfth-button-primary[_ngcontent-%COMP%] {\n    min-height: 48px; \n\n    font-size: 16px; \n\n  }\n}\n\n\n\n@media (prefers-color-scheme: dark) {\n  [_ngcontent-%COMP%]:root {\n    --color-background: 222.2 84% 4.9%;\n    --color-foreground: 210 40% 98%;\n    --color-muted: 217.2 32.6% 17.5%;\n    --color-muted-foreground: 215 20.2% 65.1%;\n    --color-border: 217.2 32.6% 17.5%;\n  }\n}\n\n\n\n.login-form-container[_ngcontent-%COMP%]:focus-within {\n  outline: none;\n}\n\n\n\n.tw-animate-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n\n.tw-sr-only[_ngcontent-%COMP%]:focus, \n.tw-sr-only[_ngcontent-%COMP%]:active {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0.5rem;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7QUFFcEMsZ0NBQWdDO0FBQ2hDOztFQUVFLDJDQUEyQztFQUMzQyxtQkFBbUI7QUFDckI7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0Usc0JBQXNCO0VBQ3RCLG9EQUFvRDtBQUN0RDs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSx1Q0FBdUM7RUFDdkMsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQTRDO0FBQzlDOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDOzs7MENBR3dDO0FBQzFDOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLHNFQUFzRTtFQUN0RSxzREFBc0Q7QUFDeEQ7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0UscURBQXFEO0VBQ3JELHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRTtJQUNFLGtDQUFrQztJQUNsQyxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtBQUNGOztBQUVBLDRDQUE0QztBQUM1QztFQUNFOzs7Ozs7SUFNRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0U7O0lBRUUsZ0JBQWdCLEVBQUUseUJBQXlCO0lBQzNDLGVBQWUsRUFBRSx3QkFBd0I7RUFDM0M7QUFDRjs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRTtJQUNFLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHlDQUF5QztJQUN6QyxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLCtCQUErQjtBQUMvQjs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyogTG9naW4gQ29tcG9uZW50IFNwZWNpZmljIFN0eWxlcyAqL1xuXG4vKiBMb2dpbi1zcGVjaWZpYyBlbmhhbmNlbWVudHMgKi9cbi5sb2dpbi1mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cy12aXNpYmxlLFxuLmxvZ2luLWZvcm0tY29udGFpbmVyIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIGhzbCh2YXIoLS1jb2xvci1hY2NlbnQpKTtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLyogTG9naW4gZm9ybSBmaWVsZCBlbmhhbmNlbWVudHMgKi9cbi5sb2dpbi1mb3JtLWNvbnRhaW5lciAubndmdGgtaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCBoc2wodmFyKC0tY29sb3ItYWNjZW50KSAvIDAuMyk7XG59XG5cbi8qIExvZ2luIGJ1dHRvbiBlbmhhbmNlbWVudHMgKi9cbi5sb2dpbi1mb3JtLWNvbnRhaW5lciAubndmdGgtYnV0dG9uLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgc2NhbGUoMS4wMik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggaHNsKHZhcigtLWNvbG9yLXByaW1hcnkpIC8gMC4zKTtcbn1cblxuLmxvZ2luLWZvcm0tY29udGFpbmVyIC5ud2Z0aC1idXR0b24tcHJpbWFyeTphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG59XG5cbi8qIEZvcm0gdmFsaWRhdGlvbiBzdHlsaW5nICovXG4ubndmdGgtaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMyNjI2O1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyMjAsIDM4LCAzOCwgMC4yKTtcbn1cblxuLm53ZnRoLWlucHV0Lm5nLXZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItY29sb3I6ICMwNTk2Njk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDUsIDE1MCwgMTA1LCAwLjIpO1xufVxuXG4vKiBMb2dpbiBjYXJkIGVuaGFuY2VtZW50cyAqL1xuLmxvZ2luLWZvcm0tY29udGFpbmVyLm53ZnRoLWNhcmQge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAyMHB4IDQwcHggaHNsKHZhcigtLWNvbG9yLXByaW1hcnkpIC8gMC4xKSxcbiAgICAwIDEwcHggMjBweCBoc2wodmFyKC0tY29sb3ItcHJpbWFyeSkgLyAwLjA1KSxcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLyogTG9nbyBjaXJjbGUgc3R5bGluZyAqL1xuLmxvZ2luLWZvcm0tY29udGFpbmVyIC5iZy1ud2Z0aC1icm93biB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLWJyYW5kLWJyb3duKSwgIzZCNDQyMyk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggaHNsKHZhcigtLWNvbG9yLXByaW1hcnkpIC8gMC4zKTtcbn1cblxuLyogQ29ubmVjdGlvbiBzdGF0dXMgc3R5bGluZyBlbmhhbmNlbWVudHMgKi9cbi5ud2Z0aC1zdGF0dXMtY29ubmVjdGVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VjZmRmNSwgI2QxZmFlNSk7XG4gIGJvcmRlci1jb2xvcjogIzEwYjk4MTtcbiAgY29sb3I6ICMwNjVmNDY7XG59XG5cbi5ud2Z0aC1zdGF0dXMtZGlzY29ubmVjdGVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZlZjJmMiwgI2ZlZTJlMik7XG4gIGJvcmRlci1jb2xvcjogI2VmNDQ0NDtcbiAgY29sb3I6ICM5OTFiMWI7XG59XG5cbi5ud2Z0aC1zdGF0dXMtY29ubmVjdGluZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZiZWIsICNmZWYzYzcpO1xuICBib3JkZXItY29sb3I6ICNmNTllMGI7XG4gIGNvbG9yOiAjOTI0MDBlO1xufVxuXG4vKiBTdGF0dXMgaW5kaWNhdG9yIHB1bHNlIGFuaW1hdGlvbiBmb3IgY29ubmVjdGluZyAqL1xuLm53ZnRoLWluZGljYXRvci1jb25uZWN0aW5nIHtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cblxuLyogRXJyb3IgYWxlcnQgc3R5bGluZyAqL1xuW3JvbGU9XCJhbGVydFwiXSB7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vKiBNb2JpbGUgd2FybmluZyBzcGVjaWZpYyBzdHlsaW5nICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5tb2JpbGUtd2FybmluZyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC41cyBlYXNlLW91dDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG59XG5cbi8qIEVuaGFuY2VkIGFuaW1hdGlvbnMgZm9yIHJlZHVjZWQgbW90aW9uIHByZWZlcmVuY2UgKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5ud2Z0aC1pbnB1dDpmb2N1cy12aXNpYmxlLFxuICAubndmdGgtYnV0dG9uLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIFtyb2xlPVwiYWxlcnRcIl0sXG4gIC5tb2JpbGUtd2FybmluZyB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5cbi8qIEhpZ2ggY29udHJhc3QgbW9kZSBhZGp1c3RtZW50cyAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbnRyYXN0OiBoaWdoKSB7XG4gIC5ud2Z0aC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gIC5ud2Z0aC1pbnB1dCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIH1cblxuICAubndmdGgtYnV0dG9uLXByaW1hcnkge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4vKiBQcmludCBzdHlsZXMgKGhpZGUgZGVjb3JhdGl2ZSBlbGVtZW50cykgKi9cbkBtZWRpYSBwcmludCB7XG4gIC50dy1hbmltYXRlLWdyYWRpZW50LW1vcnBoLFxuICAudHctYW5pbWF0ZS1wYXJ0aWNsZXMtbGF5ZXItMSxcbiAgLnR3LWFuaW1hdGUtcGFydGljbGVzLWxheWVyLTIsXG4gIC50dy1hbmltYXRlLXBhcnRpY2xlcy1sYXllci0zLFxuICAudHctYW5pbWF0ZS1mbG9hdGluZy1vcmJzLFxuICAudHctYW5pbWF0ZS13YXZlLXBhdHRlcm4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubndmdGgtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4vKiBUb3VjaCBkZXZpY2Ugb3B0aW1pemF0aW9ucyAqL1xuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgLm53ZnRoLWlucHV0LFxuICAubndmdGgtYnV0dG9uLXByaW1hcnkge1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7IC8qIExhcmdlciB0b3VjaCB0YXJnZXRzICovXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBQcmV2ZW50IHpvb20gb24gaU9TICovXG4gIH1cbn1cblxuLyogRGFyayBtb2RlIHN1cHBvcnQgKGlmIG5lZWRlZCBpbiBmdXR1cmUpICovXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIDpyb290IHtcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IDIyMi4yIDg0JSA0LjklO1xuICAgIC0tY29sb3ItZm9yZWdyb3VuZDogMjEwIDQwJSA5OCU7XG4gICAgLS1jb2xvci1tdXRlZDogMjE3LjIgMzIuNiUgMTcuNSU7XG4gICAgLS1jb2xvci1tdXRlZC1mb3JlZ3JvdW5kOiAyMTUgMjAuMiUgNjUuMSU7XG4gICAgLS1jb2xvci1ib3JkZXI6IDIxNy4yIDMyLjYlIDE3LjUlO1xuICB9XG59XG5cbi8qIEZvY3VzIHRyYXAgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gKi9cbi5sb2dpbi1mb3JtLWNvbnRhaW5lcjpmb2N1cy13aXRoaW4ge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBMb2FkaW5nIHNwaW5uZXIgZW5oYW5jZW1lbnQgKi9cbi50dy1hbmltYXRlLXNwaW4ge1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4vKiBTY3JlZW4gcmVhZGVyIGltcHJvdmVtZW50cyAqL1xuLnR3LXNyLW9ubHk6Zm9jdXMsXG4udHctc3Itb25seTphY3RpdmUge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGNsaXA6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=src_app_features_auth_login_login_component_ts.js.map