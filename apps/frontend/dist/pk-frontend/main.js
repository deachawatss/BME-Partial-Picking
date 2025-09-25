"use strict";
(self["webpackChunkpk_frontend"] = self["webpackChunkpk_frontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;


class AppComponent {
  constructor() {
    this.title = 'PK (Partial Picking System)';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    consts: [[1, "app-container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet],
    styles: [".app-container[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      background-color: hsl(var(--color-background));\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIsOENBQThDO0lBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmFwcC1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0tY29sb3ItYmFja2dyb3VuZCkpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _core_services_http_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/http.interceptor */ 2380);






const appConfig = {
  providers: [
  // Router configuration
  (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_3__.routes),
  // HTTP client with interceptors
  (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.provideHttpClient)(), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HTTP_INTERCEPTORS,
    useClass: _core_services_http_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthHttpInterceptor,
    multi: true
  },
  // Animations
  (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)()
  // Additional providers can be added here
  ]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 4978);

const routes = [
// Default redirect to login
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
// Login route (guest only)
{
  path: 'login',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_auth_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/login/login.component */ 461)).then(m => m.LoginComponent),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.GuestGuard],
  title: 'Login - PK System'
},
// Dashboard route (protected)
{
  path: 'dashboard',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_dashboard_dashboard_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.component */ 1626)).then(m => m.DashboardComponent),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  title: 'Dashboard - PK System'
},
// Main Partial Picking route (protected) - Direct post-login destination
{
  path: 'partial-picking',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_picking_partial-picking_partial-picking_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/picking/partial-picking/partial-picking.component */ 6022)).then(m => m.PartialPickingComponent),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  title: 'Partial Picking - PK System'
},
// Partial picking routes (protected)
{
  path: 'picking',
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  children: [{
    path: '',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_picking_picking-list_picking-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/picking/picking-list/picking-list.component */ 5432)).then(m => m.PickingListComponent),
    title: 'Picking Runs - PK System'
  }, {
    path: ':runId',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_picking_picking-interface_picking-interface_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/picking/picking-interface/picking-interface.component */ 6614)).then(m => m.PickingInterfaceComponent),
    title: 'Partial Picking - PK System'
  }]
},
// Weight scale management (protected)
{
  path: 'scales',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_scales_scale-management_scale-management_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/scales/scale-management/scale-management.component */ 3058)).then(m => m.ScaleManagementComponent),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  title: 'Scale Management - PK System'
},
// Catch-all route - redirect to login
{
  path: '**',
  redirectTo: '/login'
}];

/***/ }),

/***/ 2380:
/*!***************************************************!*\
  !*** ./src/app/core/services/http.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthHttpInterceptor: () => (/* binding */ AuthHttpInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ 8010);
var _staticBlock;




class AuthHttpInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(request, next) {
    // Get the current token
    const token = this.authService.getToken();
    // Clone the request and add authorization header if token exists
    let authReq = request;
    if (token) {
      authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
    }
    // Add custom headers for PK system
    authReq = authReq.clone({
      headers: authReq.headers.set('Content-Type', 'application/json').set('X-Workstation-Id', this.getWorkstationId()).set('X-Requested-With', 'PK-Frontend')
    });
    // Handle the request and potential errors
    return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      // Handle token expiration (401 Unauthorized)
      if (error.status === 401 && this.authService.isAuthenticatedSync()) {
        // Try to refresh the token
        return this.authService.refreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => {
          // Retry the original request with new token
          const newToken = this.authService.getToken();
          if (newToken) {
            const retryReq = request.clone({
              headers: request.headers.set('Authorization', `Bearer ${newToken}`)
            });
            return next.handle(retryReq);
          }
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => error);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => {
          // Refresh failed, logout user
          this.authService.logout();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => error);
        }));
      }
      // Handle other error responses
      this.handleHttpError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => error);
    }));
  }
  /**
   * Get workstation ID for request headers
   */
  getWorkstationId() {
    return this.authService.workstationId() || 'unknown';
  }
  /**
   * Handle HTTP errors and update connection status
   */
  handleHttpError(error) {
    switch (error.status) {
      case 0:
        // Network error or CORS issue
        console.error('Network error - backend may be unavailable');
        break;
      case 403:
        console.error('Access forbidden - insufficient permissions');
        break;
      case 404:
        console.error('Resource not found');
        break;
      case 500:
        console.error('Internal server error');
        break;
      default:
        console.error(`HTTP error ${error.status}: ${error.message}`);
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthHttpInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthHttpInterceptor,
    factory: AuthHttpInterceptor.ɵfac
  }));
}
_staticBlock();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_2__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 4978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard),
/* harmony export */   GuestGuard: () => (/* binding */ GuestGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock, _staticBlock2;





class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    // Check if user is authenticated synchronously first
    if (this.authService.isAuthenticatedSync()) {
      // Check if session is about to expire
      if (this.authService.isSessionExpiringSoon()) {
        console.log('Session expiring soon, attempting refresh');
        // Try to refresh token
        return this.authService.refreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => {
          // Refresh failed, redirect to login
          this.redirectToLogin(state.url);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false);
        }));
      }
      // User is authenticated and session is valid
      this.authService.updateLastActivity();
      return true;
    }
    // User is not authenticated, redirect to login
    this.redirectToLogin(state.url);
    return false;
  }
  /**
   * Redirect to login page with return URL
   */
  redirectToLogin(returnUrl) {
    if (returnUrl && returnUrl !== '/') {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  }));
}
/**
 * Guest guard - prevents authenticated users from accessing login page
 */
_staticBlock();
class GuestGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticatedSync()) {
      // User is already authenticated, redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
  static #_ = _staticBlock2 = () => (this.ɵfac = function GuestGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GuestGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: GuestGuard,
    factory: GuestGuard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock2();

/***/ }),

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;






class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.API_BASE = 'http://localhost:7070/api';
    this.TOKEN_KEY = 'pk_auth_token';
    this.USER_KEY = 'pk_auth_user';
    this.SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
    // Angular 20 Signals for reactive state management
    this._isAuthenticated = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isAuthenticated"
    }] : []));
    this._currentUser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_currentUser"
    }] : []));
    this._connectionStatus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('unknown', ...(ngDevMode ? [{
      debugName: "_connectionStatus"
    }] : []));
    this._sessionTimeout = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_sessionTimeout"
    }] : []));
    // Computed signals
    this.isAuthenticated = this._isAuthenticated.asReadonly();
    this.currentUser = this._currentUser.asReadonly();
    this.connectionStatus = this._connectionStatus.asReadonly();
    // Computed properties
    this.isConnected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._connectionStatus() === 'connected', ...(ngDevMode ? [{
      debugName: "isConnected"
    }] : []));
    this.userDisplayName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._currentUser()?.displayName || '', ...(ngDevMode ? [{
      debugName: "userDisplayName"
    }] : []));
    this.workstationId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this._currentUser()?.workstationId || '', ...(ngDevMode ? [{
      debugName: "workstationId"
    }] : []));
    this.lastActivity = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new Date());
    this.initializeAuth();
    this.startSessionMonitoring();
  }
  /**
   * Initialize authentication state from stored tokens
   */
  initializeAuth() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const userJson = localStorage.getItem(this.USER_KEY);
    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        this._isAuthenticated.set(true);
        this._currentUser.set(user);
        this.setupSessionTimeout();
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        this.clearAuthData();
      }
    }
  }
  /**
   * Login with username and password
   */
  login(username, password) {
    const loginData = {
      username: username.trim(),
      password: password,
      workstationId: this.getWorkstationId()
    };
    return this.http.post(`${this.API_BASE}/auth/login`, loginData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      if (response.success && response.token && response.user) {
        this.setAuthData(response.token, response.user);
        this._isAuthenticated.set(true);
        this._currentUser.set(response.user);
        this.setupSessionTimeout();
        this.updateLastActivity();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleAuthError.bind(this)));
  }
  /**
   * Logout and clear authentication data
   */
  logout() {
    this.clearAuthData();
    this._isAuthenticated.set(false);
    this._currentUser.set(null);
    this.clearSessionTimeout();
    this.router.navigate(['/login']);
  }
  /**
   * Check if user is currently authenticated
   */
  isAuthenticatedSync() {
    return this._isAuthenticated();
  }
  /**
   * Get current authentication token
   */
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  /**
   * Test connection to backend
   */
  testConnection() {
    return this.http.get(`${this.API_BASE}/health`, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
      this._connectionStatus.set('connected');
      return true;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => {
      this._connectionStatus.set('disconnected');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
    }));
  }
  /**
   * Refresh authentication token
   */
  refreshToken() {
    const currentToken = this.getToken();
    if (!currentToken) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('No token available for refresh'));
    }
    return this.http.post(`${this.API_BASE}/auth/refresh`, {
      token: currentToken,
      workstationId: this.getWorkstationId()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      if (response.success && response.token && response.user) {
        this.setAuthData(response.token, response.user);
        this.setupSessionTimeout();
        this.updateLastActivity();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleAuthError.bind(this)));
  }
  /**
   * Update last activity timestamp
   */
  updateLastActivity() {
    this.lastActivity.next(new Date());
    this.setupSessionTimeout();
  }
  /**
   * Get workstation ID from environment or generate one
   */
  getWorkstationId() {
    // Try to get from environment or browser
    return navigator.userAgent.includes('Chrome') ? `WS-${Date.now().toString(36)}` : `WS-${Math.random().toString(36).substr(2, 9)}`;
  }
  /**
   * Store authentication data securely
   */
  setAuthData(token, user) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  /**
   * Clear all authentication data
   */
  clearAuthData() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
  /**
   * Setup session timeout monitoring
   */
  setupSessionTimeout() {
    this.clearSessionTimeout();
    this.sessionTimer = setTimeout(() => {
      console.log('Session timeout - logging out');
      this.logout();
    }, this.SESSION_TIMEOUT);
    this._sessionTimeout.set(Date.now() + this.SESSION_TIMEOUT);
  }
  /**
   * Clear session timeout
   */
  clearSessionTimeout() {
    if (this.sessionTimer) {
      clearTimeout(this.sessionTimer);
      this.sessionTimer = undefined;
    }
    this._sessionTimeout.set(null);
  }
  /**
   * Start monitoring user activity for session management
   */
  startSessionMonitoring() {
    // Monitor user activity events
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    activityEvents.forEach(event => {
      document.addEventListener(event, () => {
        if (this._isAuthenticated()) {
          this.updateLastActivity();
        }
      }, {
        passive: true
      });
    });
    // Check for session timeout every minute
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(0, 60000).subscribe(() => {
      if (this._isAuthenticated()) {
        const timeout = this._sessionTimeout();
        if (timeout && Date.now() > timeout) {
          console.log('Session expired due to inactivity');
          this.logout();
        }
      }
    });
  }
  /**
   * Handle authentication errors
   */
  handleAuthError(error) {
    let errorMessage = 'Authentication failed';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Connection error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 401:
          errorMessage = 'Invalid username or password';
          break;
        case 403:
          errorMessage = 'Access denied';
          break;
        case 404:
          errorMessage = 'Authentication service not available';
          break;
        case 500:
          errorMessage = 'Server error during authentication';
          break;
        default:
          errorMessage = `Authentication failed (${error.status})`;
      }
    }
    this._connectionStatus.set('disconnected');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => ({
      success: false,
      message: errorMessage
    }));
  }
  /**
   * Get remaining session time in minutes
   */
  getRemainingSessionTime() {
    const timeout = this._sessionTimeout();
    if (!timeout) return 0;
    const remaining = timeout - Date.now();
    return Math.max(0, Math.floor(remaining / (60 * 1000)));
  }
  /**
   * Check if session is about to expire (within 5 minutes)
   */
  isSessionExpiringSoon() {
    return this.getRemainingSessionTime() <= 5;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map