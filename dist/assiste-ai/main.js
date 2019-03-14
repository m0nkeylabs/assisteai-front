(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    {
        path: '',
        component: app_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header id=\"header\"></app-header>\n<router-outlet></router-outlet>\n\n<app-loading class=\"global-loading\"\n*ngIf=\"(loadingProfile$ | async) || (loadingLogin$ | async) || (loadingToken$ | async)\"></app-loading>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicestoken_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @servicestoken.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_login_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/login/store */ "./src/app/login/store/index.ts");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var lodash_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-decorators */ "./node_modules/lodash-decorators/index.js");
/* harmony import */ var lodash_decorators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_decorators__WEBPACK_IMPORTED_MODULE_6__);







var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, store, profileStore, tokenService) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.store = store;
        this.profileStore = profileStore;
        this.tokenService = tokenService;
        setInterval(function () { _this.changeDetectorRef.detectChanges(); }, 1000);
        this.loadingLogin$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(app_login_store__WEBPACK_IMPORTED_MODULE_4__["getLoginLoading"]));
        this.loadingToken$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(app_login_store__WEBPACK_IMPORTED_MODULE_4__["getTokenLoading"]));
        this.loadedToken$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(app_login_store__WEBPACK_IMPORTED_MODULE_4__["getTokenLoaded"]));
        this.loadingProfile$ = this.profileStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_5__["getLoading"]));
        this.validateToken();
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.detectChanges = function () {
        this.changeDetectorRef.detectChanges();
    };
    AppComponent.prototype.validateToken = function () {
        var tokenStore = this.tokenService.getToken();
        var validation = this.tokenService.validationExpirationDate();
        if (tokenStore) {
            validation ? this.loadProfile() : this.refreshToken();
        }
    };
    AppComponent.prototype.loadProfile = function () {
        this.profileStore.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_5__["LoadProfile"]());
    };
    AppComponent.prototype.refreshToken = function () {
        var _this = this;
        this.loadedToken$.subscribe(function (result) {
            if (result) {
                _this.store.dispatch(new app_login_store__WEBPACK_IMPORTED_MODULE_4__["VerifyToken"]());
                _this.validateToken();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(lodash_decorators__WEBPACK_IMPORTED_MODULE_6__["debounce"])(800),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "detectChanges", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _servicestoken_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var app_home_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/home/store */ "./src/app/home/store/index.ts");
/* harmony import */ var app_login_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/login/store */ "./src/app/login/store/index.ts");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var app_indicate_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/indicate/store */ "./src/app/indicate/store/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/reducer */ "./src/app/reducer/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @main */ "./src/app/main-components/index.ts");
/* harmony import */ var app_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/indicate/indicate.component */ "./src/app/indicate/indicate.component.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _servicesindicate_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @servicesindicate.service */ "./src/app/services/indicate.service.ts");
/* harmony import */ var _services_watch_later_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @services/watch-later.service */ "./src/app/services/watch-later.service.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                app_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _main__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                app_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_23__["IndicateComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_30__["LoadingComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_30__["EmptyComponent"],
                app_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_30__["SidenavComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastNoAnimationModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    timeOut: 4000,
                    preventDuplicates: false
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(app_reducer__WEBPACK_IMPORTED_MODULE_15__["reducers"], { metaReducers: app_reducer__WEBPACK_IMPORTED_MODULE_15__["metaReducers"] }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forFeature('homeList', app_home_store__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forFeature('AuthPage', app_login_store__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forFeature('profile', app_profile_store__WEBPACK_IMPORTED_MODULE_11__["reducers"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forFeature('indicate', app_indicate_store__WEBPACK_IMPORTED_MODULE_12__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forFeature(app_home_store__WEBPACK_IMPORTED_MODULE_9__["effects"].concat(app_login_store__WEBPACK_IMPORTED_MODULE_10__["effects"], app_profile_store__WEBPACK_IMPORTED_MODULE_11__["effects"], app_indicate_store__WEBPACK_IMPORTED_MODULE_12__["effects"])),
                _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument(),
            ],
            entryComponents: [app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_23__["IndicateComponent"], app_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"]],
            providers: [_services_home_service__WEBPACK_IMPORTED_MODULE_24__["HomeService"], _services_login_service__WEBPACK_IMPORTED_MODULE_25__["LoginService"], _servicesindicate_service__WEBPACK_IMPORTED_MODULE_28__["IndicateService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_26__["ProfileService"], _services_token_service__WEBPACK_IMPORTED_MODULE_27__["TokenService"], _services_watch_later_service__WEBPACK_IMPORTED_MODULE_29__["WatchLaterService"]],
            bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/constants/categories.ts":
/*!**********************************************!*\
  !*** ./src/app/core/constants/categories.ts ***!
  \**********************************************/
/*! exports provided: categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
var categories;
(function (categories) {
    categories["MOVIE"] = "Filme";
    categories["SERIE"] = "S\u00E9rie";
})(categories || (categories = {}));


/***/ }),

/***/ "./src/app/core/constants/ratings.ts":
/*!*******************************************!*\
  !*** ./src/app/core/constants/ratings.ts ***!
  \*******************************************/
/*! exports provided: ratings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratings", function() { return ratings; });
var ratings;
(function (ratings) {
    ratings["UNMISSABLE"] = "Imperd\u00EDvel";
    ratings["VERY_GOOD"] = "Muito Bom";
    ratings["GOOD"] = "Bom";
    ratings["COOL"] = "Legal";
    ratings["BAD"] = "Ruim";
    ratings["VERY_BAD"] = "Muito Ruim";
    ratings["STAY_AWAY"] = "Fique Longe";
})(ratings || (ratings = {}));


/***/ }),

/***/ "./src/app/core/models/pagination.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/pagination.ts ***!
  \*******************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
var Pagination = /** @class */ (function () {
    function Pagination(response) {
        this.currentPage = response.current_page;
        this.from = response.from;
        this.lastPage = response.last_page;
        this.perPage = response.per_page;
        this.firstPageUrl = response.first_page_url;
        this.lastPageUrl = response.last_page_url;
        this.nextPageUrl = response.next_page_url;
        this.prevPageUrl = response.prev_page_url;
        this.path = response.path;
    }
    return Pagination;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <app-sidenav [(isOpen)]='filterOpened'>\n      <form novalidate [formGroup]=\"formFilter\" (submit)=\"setFilter()\">\n        <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 margin-bottom-1\">\n          <mat-label>Avaliações</mat-label>\n          <mat-select multiple panelClass=\"panel-dark\" formControlName=\"ratings\">\n            <mat-option *ngFor=\"let rating of ratingArray\" [value]=\"rating\" [ngClass]=\"utils.getClassCheckbox(rating)\">{{rantingEnum[rating]}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 margin-bottom-1\">\n          <mat-label>Categorias</mat-label>\n          <mat-select multiple panelClass=\"panel-dark\" formControlName=\"categories\" style=\"min-width: 100% !important\">\n            <mat-option *ngFor=\"let category of categoryArray\" (click)=\"tosslePerOne()\" [value]=\"category\" [ngClass]=\"utils.getClassCheckbox(category)\">{{categoryEnum[category]}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div class=\"button-container\">\n          <button mat-button class=\"col-md-6\" (click)=\"filterOpened = false\" type=\"button\">Cancelar</button>\n          <button mat-button cdkFocusInitial class=\"btn-default col-md-6 margin-left-1\" type=\"submit\">Filtrar</button>\n        </div>\n      </form>\n\n      <!-- <div class=\"flex-row filter-options\">\n        <div class=\"form-group margin-right-2\">\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let rating of ratingArray\" class=\"chip-default {{rating}}\" [ngClass]=\"{'active': isRatingActive(rating)}\" (click)='updateRatingFilter(rating)'>\n                {{rantingEnum[rating]}}\n              </mat-chip>\n            </mat-chip-list>\n        </div>\n        <span class=\"divider margin-right-2\"></span>\n        <div class=\"form-group\">\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let category of categoryArray\" class=\"chip-default {{category}}\" [ngClass]=\"{'active': isCategoryActive(category)}\" (click)='updateCategoryFilter(category)'>\n                {{categoryEnum[category]}}\n              </mat-chip>\n            </mat-chip-list>\n        </div>\n      </div> -->\n  </app-sidenav>\n\n  <section class=\"filter-container flex-column\">\n    <div class=\"flex-row filter-icons col-md-12\">\n      <mat-form-field appearance=\"outline\" class=\"col-md-3 col-sm-12 margin-right-2\">\n        <mat-label>Busca</mat-label>\n        <input matInput autocomplete=\"off\" (ngModelChange)=\"updateList()\" [(ngModel)]=\"filters.search\">\n        <mat-icon matPrefix>search</mat-icon>\n      </mat-form-field>\n      <div class=\"flex-row col-md-9 col-sm-12 filters\">\n        <div class=\"icon-filters-container flex-row col-md-6\">\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Todos\" [ngClass]=\"{'active': filters.exibition === 'all'}\" (click)=\"setExibition('all')\">public</mat-icon>\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Seguindo\" [ngClass]=\"{'active': filters.exibition === 'group'}\" (click)=\"setExibition('group')\">group</mat-icon>\n          <span class=\"divider margin-right-1\"></span>\n          <mat-icon class=\"icon filter-icon\" matTooltip=\"Filtro\" [ngClass]=\"{'active': filterOpened}\" (click)=\"openNav()\">filter_list</mat-icon>\n        </div>\n        <button mat-button class=\"btn-default\"  matTooltip=\"Indicar\" (click)=\"openDialog()\">\n            <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon>\n        </button>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"cards-container flex-row flex-wrap\" [@listStagger]='moviesList?.length'>\n    <div class=\"card {{utils.getClassPoster(movie.average_rating)}}\" *ngFor=\"let movie of moviesList\">\n      <div class=\"poster-container\">\n        <div class=\"img-poster\" [ngStyle]=\"{'background-image': 'url(' + movie.poster_path + ')'}\"></div>\n        <div class=\"overlay\">\n          <div class=\"poster-detail flex-column\" *ngIf=\"!(wathLaterLoading$ | async) || movie.id !== movieWatchLaterIdActive\">\n            <h3 class=\"poster-title\">{{movie.original_title}} ({{movie.year}})</h3>\n\n            <span class=\"poster-chip {{utils.getClassCategory(movie.category)}}\">{{categoryEnum[movie.category]}}</span>\n\n            <div class=\"rating-container flex-column\">\n              <span>Avaliação Média</span>\n              <span class=\"poster-chip {{utils.getClassPoster(movie.average_rating)}}\">{{rantingEnum[movie.average_rating]}}</span>\n\n              <span>Última avaliação</span>\n              <span class=\"poster-chip {{utils.getClassPoster(movie.last_rating)}}\">{{rantingEnum[movie.last_rating]}}</span>\n            </div>\n\n            <div class=\"poster-actions flex-row\">\n                <button type=\"button\" (click)=\"setWatchLater(movie.id, movie.watch_later)\" matTooltip=\"Assistir depois\"\n                  class=\"watch-later\" [ngClass]=\"{'active':  movie.watch_later}\"><mat-icon>access_time</mat-icon></button>\n                <button type=\"button\" (click)=\"openDialog(movie.imdb_link)\" matTooltip=\"Indicar {{categoryEnum[movie.category]}}\" class=\"indicate-now\"><mat-icon>playlist_add</mat-icon></button>\n                <a href=\"#\" matTooltip=\"Mais informações\" class=\"more-details\"><mat-icon>arrow_forward</mat-icon></a>\n            </div>\n          </div>\n          <app-loading *ngIf=\"(wathLaterLoading$ | async) && movie.id === movieWatchLaterIdActive\"></app-loading>\n        </div>\n      </div>\n    </div>\n    <app-loading [hidden]=\"isLoaded && (moviesLoaded$ | async)\"></app-loading>\n    <button class=\"scroll-btn\" [ngClass]=\"{'active': scollTopActive}\" (click)=\"scollTop()\"><mat-icon>arrow_upward</mat-icon></button>\n  </section>\n  <app-empty *ngIf=\"moviesList && !moviesList.length && isLoaded && (moviesLoaded$ | async)\" [msg]=\"msg\"></app-empty>\n</main>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.main .filter-container {\n  position: relative;\n  margin-bottom: 10px; }\n.main .filter-container .filter-icons {\n    align-items: center; }\n.main .filter-container .filter-icons .filters {\n      align-items: center;\n      justify-content: space-between; }\n.main .filter-container .filter-icons .filters .icon-filters-container {\n        align-items: center; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon:hover, .main .filter-container .filter-icons .filters .icon-filters-container .icon.active {\n          color: #436AB1; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon:hover {\n          color: #ffffff; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon.active {\n          color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active {\n    color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active.UNMISSABLE {\n      background: #7EBB6F; }\n.main .filter-container .filter-options .chip-default.active.VERY_GOOD {\n      background: #5D8EBA; }\n.main .filter-container .filter-options .chip-default.active.GOOD {\n      background: #85BDB6; }\n.main .filter-container .filter-options .chip-default.active.COOL {\n      background: #F4C27B; }\n.main .filter-container .filter-options .chip-default.active.BAD {\n      background: #B193B7; }\n.main .filter-container .filter-options .chip-default.active.VERY_BAD {\n      background: #CF6366; }\n.main .filter-container .filter-options .chip-default.active.STAY_AWAY {\n      background: #502B2C; }\n.main .filter-container .filter-options .chip-default.active.MOVIE {\n      background: #01C05D; }\n.main .filter-container .filter-options .chip-default.active.SERIE {\n      background: #F86C2F; }\n.main .cards-container {\n  width: calc(100% + 30px);\n  margin: 0 -15px; }\n.main .cards-container .card {\n    position: relative;\n    box-sizing: border-box;\n    margin: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\n.main .cards-container .card .poster-container {\n      position: relative;\n      overflow: hidden;\n      border-radius: 5px;\n      transition: all .4s ease;\n      background-position: center;\n      background-size: cover;\n      height: 0;\n      padding-bottom: 150%; }\n.main .cards-container .card .poster-container:hover .img-poster {\n        transform: scale(1.1, 1.1);\n        -ms-transform: scale(1.1, 1.1);\n        -webkit-transform: scale(1.1, 1.1); }\n.main .cards-container .card .poster-container .overlay {\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        color: #ffffff;\n        text-decoration: none;\n        transition: opacity .4s ease;\n        opacity: 0;\n        background: rgba(0, 0, 0, 0.8);\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        display: flex;\n        align-items: center; }\n.main .cards-container .card .poster-container .overlay:hover {\n          opacity: 1; }\n.main .cards-container .card .poster-container .overlay .poster-detail {\n          align-items: center;\n          justify-content: space-between;\n          padding: 15px;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-title {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-chip {\n            padding: 3px 6px;\n            border-radius: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip {\n              display: block;\n              margin-top: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip:nth-child(2) {\n                margin-bottom: 15px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions {\n            justify-content: space-around;\n            width: 100%; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a, .main .cards-container .card .poster-container .overlay .poster-detail .poster-actions button {\n              border: 0;\n              padding: 0;\n              background: none;\n              color: #ffffff;\n              cursor: pointer;\n              outline: none; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.watch-later, .main .cards-container .card .poster-container .overlay .poster-detail .poster-actions button:hover.watch-later {\n                color: #A14CA0; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.indicate-now, .main .cards-container .card .poster-container .overlay .poster-detail .poster-actions button:hover.indicate-now {\n                color: #4BA053; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.more-details, .main .cards-container .card .poster-container .overlay .poster-detail .poster-actions button:hover.more-details {\n                color: #436AB1; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions button.active.watch-later {\n              color: #A14CA0; }\n.main .cards-container .card .poster-container .img-poster {\n        transition: all .4s ease;\n        background-position: center;\n        background-size: cover;\n        padding-bottom: 150%;\n        width: 100.5%;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n@media (max-width: 480px) {\n  .main .filter-icons {\n    flex-direction: column; }\n    .main .filter-icons mat-form-field {\n      margin-right: 0 !important;\n      margin-bottom: 10px; }\n  .main .cards-container {\n    width: calc(100% + 14px);\n    margin: 0 -7px; }\n    .main .cards-container .card {\n      margin: 7px;\n      flex: 1 0 50%;\n      max-width: calc(50% - 14px); }\n      .main .cards-container .card .poster-container {\n        padding-bottom: 180% !important; }\n        .main .cards-container .card .poster-container .img-poster {\n          padding-bottom: 180% !important; }\n      .main .cards-container .card .poster-title, .main .cards-container .card .poster-chip, .main .cards-container .card .rating-container {\n        font-size: 12px; } }\n@media (min-width: 481px) {\n  .cards-container .card {\n    flex: 1 0 50%;\n    max-width: calc(50% - 30px); } }\n@media (min-width: 850px) {\n  .cards-container .card {\n    flex: 1 0 33.33333%;\n    max-width: calc(33.33333% - 30px); } }\n@media (min-width: 1101px) {\n  .cards-container .card {\n    flex: 1 0 25%;\n    max-width: calc(25% - 30px); } }\n@media (min-width: 1250px) {\n  .cards-container .card {\n    flex: 1 0 20%;\n    max-width: calc(20% - 30px); } }\n@media (min-width: 1460px) {\n  .cards-container .card {\n    flex: 1 0 16.66666667%;\n    max-width: calc(16.66666667% - 30px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUEyQ0Esa0JBQUE7QUF5QkEsU0FBQTtBQ2xFQTtFQUVJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQUh2QjtJQU1NLG1CQUFtQixFQUFBO0FBTnpCO01BU1EsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0FBVnRDO1FBYVUsbUJBQW1CLEVBQUE7QUFiN0I7VUFnQmdDLGNESmIsRUFBQTtBQ1puQjtVQW9CZ0IsY0RyQkQsRUFBQTtBQ0NmO1VBd0JnQixjRHpCRCxFQUFBO0FDQ2Y7SUFtQ1UsY0RwQ0ssRUFBQTtBQ0NmO01BcUN5QixtQkRkUCxFQUFBO0FDdkJsQjtNQXNDd0IsbUJEaEJOLEVBQUE7QUN0QmxCO01BdUNtQixtQkRsQkQsRUFBQTtBQ3JCbEI7TUF3Q21CLG1CRHBCRCxFQUFBO0FDcEJsQjtNQXlDa0IsbUJEdEJBLEVBQUE7QUNuQmxCO01BMEN1QixtQkR4QkwsRUFBQTtBQ2xCbEI7TUEyQ3dCLG1CRDFCTixFQUFBO0FDakJsQjtNQTZDbUIsbUJEbkJFLEVBQUE7QUMxQnJCO01BOENvQixtQkRyQkMsRUFBQTtBQ3pCckI7RUFvREksd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTtBQXJEbkI7SUF3RE0sa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCRFFjO0lDTGQsK0NBQStDLEVBQUE7QUEvRHJEO01Ba0VRLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsa0JEQVk7TUNFWix3QkFBd0I7TUFDeEIsMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixTQUFTO01BQ1Qsb0JBQW9CLEVBQUE7QUExRTVCO1FBOEVZLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsa0NBQWtDLEVBQUE7QUFoRjlDO1FBcUZVLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsTUFBSztRQUNMLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCRHZCVTtRQ3dCVixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM1QixVQUFVO1FBQ1YsOEJBQTRCO1FBQzVCLG1DQUEyQjtnQkFBM0IsMkJBQTJCO1FBQzNCLGFBQWE7UUFDYixtQkFBbUIsRUFBQTtBQW5HN0I7VUFzR1ksVUFBVSxFQUFBO0FBdEd0QjtVQTBHWSxtQkFBbUI7VUFDbkIsOEJBQThCO1VBQzlCLGFBQWE7VUFDYixXQUFXO1VBQ1gsWUFBWTtVQUNaLHNCQUFzQixFQUFBO0FBL0dsQztZQWtIYyxrQkFBa0IsRUFBQTtBQWxIaEM7WUFzSGMsZ0JBQWdCO1lBQ2hCLGtCRG5ETSxFQUFBO0FDcEVwQjtZQTJIYyxrQkFBa0IsRUFBQTtBQTNIaEM7Y0E4SGdCLGNBQWM7Y0FDZCxlQUFlLEVBQUE7QUEvSC9CO2dCQWtJa0IsbUJBQW1CLEVBQUE7QUFsSXJDO1lBeUljLDZCQUE2QjtZQUM3QixXQUFXLEVBQUE7QUExSXpCO2NBNklnQixTQUFTO2NBQ1QsVUFBVTtjQUNWLGdCQUFnQjtjQUNoQixjRGpKRDtjQ2tKQyxlQUFlO2NBQ2YsYUFBYSxFQUFBO0FBbEo3QjtnQkFxSmtDLGNEM0lmLEVBQUE7QUNWbkI7Z0JBc0ptQyxjRDdJZixFQUFBO0FDVHBCO2dCQXVKa0MsY0QzSWYsRUFBQTtBQ1puQjtjQTZKa0MsY0RuSmYsRUFBQTtBQ1ZuQjtRQXFLVSx3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLG1DQUEyQjtnQkFBM0IsMkJBQTJCLEVBQUE7QUFPckM7RUFDRTtJQUVJLHNCQUFzQixFQUFBO0lBRjFCO01BS00sMEJBQTBCO01BQzFCLG1CQUFtQixFQUFBO0VBTnpCO0lBV0ksd0JBQXdCO0lBQ3hCLGNBQWMsRUFBQTtJQVpsQjtNQWVNLFdBQVc7TUFDWCxhRDFJYTtNQzJJYiwyQkFBMkMsRUFBQTtNQWpCakQ7UUFvQlEsK0JBQStCLEVBQUE7UUFwQnZDO1VBdUJVLCtCQUErQixFQUFBO01BdkJ6QztRQTRCUSxlQUFlLEVBQUEsRUFDaEI7QUFNVDtFQUNFO0lBQ0UsYUQvSmlCO0lDZ0tqQiwyQkFBMkMsRUFBQSxFQUM1QztBQUVIO0VBQ0U7SUFDRSxtQkRwS3VCO0lDcUt2QixpQ0FBMkMsRUFBQSxFQUM1QztBQUVIO0VBQ0U7SUFDRSxhRHpLaUI7SUMwS2pCLDJCQUEyQyxFQUFBLEVBQzVDO0FBRUg7RUFDRTtJQUNFLGFEOUtpQjtJQytLakIsMkJBQTJDLEVBQUEsRUFDNUM7QUFFSDtFQUNFO0lBQ0Usc0JEbkwyQjtJQ29MM0Isb0NBQTJDLEVBQUEsRUFDNUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDT0xPUlMgKi9cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRiYWNrZ3JvdW5kOiAjMjgyODI4O1xuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMWQxZDFkO1xuJGJhY2tncm91bmQtZmFjZWJvb2s6ICM0MjY3QjI7XG4kYmFja2dyb3VuZC1mYWNlYm9vay1ob3ZlcjogICMyZDQ2N2I7XG5cbiRidXR0b24tcHJpbWFyeTogIzI5QkY0NDtcblxuJGxvZ28teWVsbG93OiAjQjBCMzVBO1xuJGxvZ28tZ3JlZW46ICM0QkEwNTM7XG4kbG9nby1waW5rOiAjQTE0Q0EwO1xuJGxvZ28tcmVkOiAjQjk0QTVDO1xuJGxvZ28tYmx1ZTogIzQzNkFCMTtcblxuJGxvZ28tZ3JheTogIzVkNWQ1ZDtcbiRsb2dvLWRhcmstZ3JheTogIzQ0NDQ0NDtcblxuJHJhdGluZy0xOiAjNTAyQjJDO1xuJHJhdGluZy0yOiAjQ0Y2MzY2O1xuJHJhdGluZy0zOiAjQjE5M0I3O1xuJHJhdGluZy00OiAjRjRDMjdCO1xuJHJhdGluZy01OiAjODVCREI2O1xuJHJhdGluZy02OiAjNUQ4RUJBO1xuJHJhdGluZy03OiAjN0VCQjZGO1xuXG4kY29sb3Itc2VyaWU6ICNGODZDMkY7XG4kY29sb3ItbW92aWU6ICMwMUMwNUQ7XG5cbiRpbnZhbGlkLWNvbG9yOiAjRjQ0MzM2O1xuXG4kbGlnaHRlc3QtZ3JheTogI0YxRjRGNTtcbiRsaWdodGVyLWdyYXk6ICNFNkVBRUM7XG4kbGlnaHQtZ3JheTogI0U0RTRFNDtcbiRncmF5OiAjY2RkM2Q4O1xuJGRhcmstZ3JheTogIzc1ODE4YjtcbiRkYXJrZXItZ3JheTogIzZBNkM2NjtcbiRkYXJrZXN0LWdyYXk6ICMzMzMzMzM7XG4kZGFya2VzdC1ncmF5LWJvcmRlcjogIzFkMWQxZDtcblxuJGZvbnQtZGVmYXVsdDogJGRhcmtlci1ncmF5O1xuXG4vKiBXSURUSCBDT0xVTU5TICovXG4kd2lkdGgtMTogOC4zMzMzMzMzMzMlO1xuJHdpZHRoLTI6IDE2LjY2NjY2NjY3JTtcbiR3aWR0aC0zOiAyNSU7XG4kd2lkdGgtNDogMzMuMzMzMzMzMzMlO1xuJHdpZHRoLTU6IDQxLjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtNjogNTAlO1xuJHdpZHRoLTc6IDU4LjMzMzMzMzMzMzMzMyU7XG4kd2lkdGgtODogNjYuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC05OiA3NSU7XG4kd2lkdGgtMTA6IDgzLjMzMzMzMzMzMzMzMyU7XG4kd2lkdGgtMTE6IDkxLjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtMTI6IDEwMCU7XG5cbiR3aWR0aC0xLWNvbHVtbnM6IDEwMCU7XG4kd2lkdGgtMi1jb2x1bW5zOiA1MCU7XG4kd2lkdGgtMy1jb2x1bW5zOiAzMy4zMzMzMyU7XG4kd2lkdGgtNC1jb2x1bW5zOiAyNSU7XG4kd2lkdGgtNS1jb2x1bW5zOiAyMCU7XG4kd2lkdGgtNi1jb2x1bW5zOiAxNi42NjY2NjY2NjclO1xuJHdpZHRoLTctY29sdW1uczogMTQuMjg1NzE0Mjg2JTtcbiR3aWR0aC04LWNvbHVtbnM6IDEyLjUlO1xuJHdpZHRoLTktY29sdW1uczogMTEuMSU7XG4kd2lkdGgtMTAtY29sdW1uczogMTAlO1xuXG4vKiBTSVpFICovXG4kc2l6ZS1kZWZhdWx0OiAxMnB4O1xuJHJhZGl1cy1kZWZhdWx0OiA1cHg7XG4iLCJAaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5tYWluIHtcbiAgLmZpbHRlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgLmZpbHRlci1pY29ucyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAuZmlsdGVycyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuaWNvbi1maWx0ZXJzLWNvbnRhaW5lciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICY6aG92ZXIsICYuYWN0aXZlIHsgY29sb3I6ICRsb2dvLWJsdWU7IH1cblxuICAgICAgICAgICAgJi5maWx0ZXItaWNvbiB7XG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5maWx0ZXItb3B0aW9ucyB7XG4gICAgICAuY2hpcC1kZWZhdWx0IHtcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgICAmLlVOTUlTU0FCTEUgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTcgfVxuICAgICAgICAgICYuVkVSWV9HT09EIHsgYmFja2dyb3VuZDogJHJhdGluZy02IH1cbiAgICAgICAgICAmLkdPT0QgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTUgfVxuICAgICAgICAgICYuQ09PTCB7IGJhY2tncm91bmQ6ICRyYXRpbmctNCB9XG4gICAgICAgICAgJi5CQUQgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTMgfVxuICAgICAgICAgICYuVkVSWV9CQUQgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTIgfVxuICAgICAgICAgICYuU1RBWV9BV0FZIHsgYmFja2dyb3VuZDogJHJhdGluZy0xIH1cblxuICAgICAgICAgICYuTU9WSUV7IGJhY2tncm91bmQ6ICRjb2xvci1tb3ZpZSB9XG4gICAgICAgICAgJi5TRVJJRSB7IGJhY2tncm91bmQ6ICRjb2xvci1zZXJpZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNhcmRzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMwcHgpO1xuICAgIG1hcmdpbjogMCAtMTVweDtcblxuICAgIC5jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBtYXJnaW46IDE1cHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuXG4gICAgICAucG9zdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xuXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTAlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIC5pbWctcG9zdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgwKTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0ZXItZGV0YWlsIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICAucG9zdGVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdGVyLWNoaXAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yYXRpbmctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgIC5wb3N0ZXItY2hpcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdGVyLWFjdGlvbnMge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgYSwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICYud2F0Y2gtbGF0ZXIgeyBjb2xvcjogJGxvZ28tcGluazsgfVxuICAgICAgICAgICAgICAgICAgJi5pbmRpY2F0ZS1ub3cgeyBjb2xvcjogJGxvZ28tZ3JlZW47IH1cbiAgICAgICAgICAgICAgICAgICYubW9yZS1kZXRhaWxzeyBjb2xvcjogJGxvZ28tYmx1ZTsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgJi53YXRjaC1sYXRlciB7IGNvbG9yOiAkbG9nby1waW5rOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltZy1wb3N0ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTUwJTtcbiAgICAgICAgICB3aWR0aDogMTAwLjUlO1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1haW4ge1xuICAgIC5maWx0ZXItaWNvbnMge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZHMtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxNHB4KTtcbiAgICAgIG1hcmdpbjogMCAtN3B4O1xuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbjogN3B4O1xuICAgICAgICBmbGV4OiAxIDAgJHdpZHRoLTItY29sdW1ucztcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTItY29sdW1uc30gLSAxNHB4KTtcblxuICAgICAgICAucG9zdGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE4MCUgIWltcG9ydGFudDtcblxuICAgICAgICAgIC5pbWctcG9zdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxODAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3Rlci10aXRsZSwgLnBvc3Rlci1jaGlwLCAucmF0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkge1xuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTItY29sdW1ucztcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtMi1jb2x1bW5zfSAtIDMwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZCB7XG4gICAgZmxleDogMSAwICR3aWR0aC0zLWNvbHVtbnM7XG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTMtY29sdW1uc30gLSAzMHB4KTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDExMDFweCkge1xuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTQtY29sdW1ucztcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtNC1jb2x1bW5zfSAtIDMwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xuICAgIGZsZXg6IDEgMCAkd2lkdGgtNS1jb2x1bW5zO1xuICAgIG1heC13aWR0aDogY2FsYygjeyR3aWR0aC01LWNvbHVtbnN9IC0gMzBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDYwcHgpIHtcbiAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZCB7XG4gICAgZmxleDogMSAwICR3aWR0aC02LWNvbHVtbnM7XG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTYtY29sdW1uc30gLSAzMHB4KTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _constants_ratings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constants/ratings */ "./src/app/core/constants/ratings.ts");
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @constants/categories */ "./src/app/core/constants/categories.ts");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/indicate/indicate.component */ "./src/app/indicate/indicate.component.ts");
/* harmony import */ var lodash_decorators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-decorators */ "./node_modules/lodash-decorators/index.js");
/* harmony import */ var lodash_decorators__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_decorators__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_home_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/home/store */ "./src/app/home/store/index.ts");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/utils */ "./src/app/shared/utils/index.ts");















var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, store, profileStore, dialog) {
        this.fb = fb;
        this.store = store;
        this.profileStore = profileStore;
        this.dialog = dialog;
        this.utils = _shared_utils__WEBPACK_IMPORTED_MODULE_14__;
        this.msg = 'Nenhuma indicação encontrada';
        this.floatLabel = 'always';
        this.categoryEnum = _constants_categories__WEBPACK_IMPORTED_MODULE_7__["categories"];
        this.categoryArray = lodash__WEBPACK_IMPORTED_MODULE_13__["keys"](_constants_categories__WEBPACK_IMPORTED_MODULE_7__["categories"]);
        this.rantingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_6__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_13__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_6__["ratings"]);
        this.filters = {
            search: '',
            exibition: 'all',
            ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
            categories: ['MOVIE', 'SERIE'],
            currentPage: 1,
            lastPage: null
        };
        this.moviesList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_11__["getAllHomeList"]));
        this.moviesLoaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_11__["getHomeListLoaded"]));
        this.pagination$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_11__["getHomeListPagination"]));
        this.userLogged$ = this.profileStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_12__["getProfile"]));
        this.wathLaterLoading$ = this.profileStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_12__["getWatchLaterLoading"]));
        this.ratings = this.filters.ratings;
        this.categories = this.filters.categories;
        this.movieWatchLaterIdActive = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_11__["LoadHomeList"](this.filters));
        this.moviesListSub = this.moviesList$.subscribe(function (result) {
            if (result.length > 0) {
                _this.isLoaded = false;
                var totalLoaded_1 = 0;
                result.map(function (r) {
                    var objImg = new Image();
                    objImg.onload = function () {
                        totalLoaded_1++;
                        if (totalLoaded_1 === result.length) {
                            _this.moviesList = result;
                            _this.isLoaded = true;
                        }
                    };
                    objImg.src = r.poster_path;
                });
            }
            else {
                _this.isLoaded = true;
            }
        });
        this.paginationSub = this.pagination$.subscribe(function (result) {
            if (result) {
                _this.filters.currentPage = result.currentPage;
                _this.filters.lastPage = result.lastPage;
            }
        });
        this.userLogged = this.userLogged$.subscribe(function (result) {
            _this.isLogged = result ? true : false;
            if (result && _this.triedLogin) {
                _this.profileStore.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_12__["LoadAllWatchLater"]());
            }
        });
        this.wathLaterLoadingSub = this.wathLaterLoading$.subscribe(function (result) {
            if (!result) {
                _this.movieWatchLaterIdActive = null;
            }
        });
        this.formFilter = this.fb.group({
            ratings: [this.ratings],
            categories: [this.categories]
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.moviesListSub.unsubscribe();
        this.paginationSub.unsubscribe();
        this.userLogged.unsubscribe();
        this.wathLaterLoadingSub.unsubscribe();
    };
    HomeComponent.prototype.setExibition = function (exibition) {
        this.filters.exibition = exibition;
        this.updateList();
    };
    HomeComponent.prototype.isRatingActive = function (rating) {
        return lodash__WEBPACK_IMPORTED_MODULE_13__["includes"](this.filters.ratings, rating);
    };
    HomeComponent.prototype.isCategoryActive = function (category) {
        return lodash__WEBPACK_IMPORTED_MODULE_13__["includes"](this.filters.categories, category);
    };
    HomeComponent.prototype.openDialog = function (urlIndication) {
        var _this = this;
        if (this.isLogged) {
            var dialogRef = this.dialog.open(app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_9__["IndicateComponent"], {
                width: '90%',
                maxWidth: '700px',
                data: { url: urlIndication }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.isLoaded = false;
                    _this.moviesList = [];
                    _this.filters.currentPage = 1;
                    _this.filters.lastPage = null;
                    _this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_11__["UpdateHomeList"](_this.filters));
                }
            });
        }
        else {
            this.openLoginModal();
        }
    };
    HomeComponent.prototype.updateList = function () {
        this.isLoaded = false;
        this.moviesList = [];
        this.filters.currentPage = 1;
        this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_11__["UpdateHomeList"](this.filters));
    };
    HomeComponent.prototype.setFilter = function () {
        this.filterOpened = false;
        this.filters.ratings = this.formFilter.controls.ratings.value;
        this.filters.categories = this.formFilter.controls.categories.value;
        this.updateList();
    };
    HomeComponent.prototype.updateRatingFilter = function (tag) {
        if (lodash__WEBPACK_IMPORTED_MODULE_13__["includes"](this.filters.ratings, tag)) {
            if (this.filters.ratings.length > 1) {
                this.filters.ratings = lodash__WEBPACK_IMPORTED_MODULE_13__["remove"](this.filters.ratings, function (n) {
                    return n !== tag;
                });
            }
        }
        else {
            this.filters.ratings.push(tag);
        }
        this.updateList();
    };
    HomeComponent.prototype.updateCategoryFilter = function (tag) {
        if (lodash__WEBPACK_IMPORTED_MODULE_13__["includes"](this.filters.categories, tag)) {
            if (this.filters.categories.length > 1) {
                this.filters.categories = lodash__WEBPACK_IMPORTED_MODULE_13__["remove"](this.filters.categories, function (n) {
                    return n !== tag;
                });
            }
        }
        else {
            this.filters.categories.push(tag);
        }
        this.updateList();
    };
    HomeComponent.prototype.setWatchLater = function (movieId, isActive) {
        this.movieWatchLaterIdActive = movieId;
        if (this.isLogged) {
            this.profileStore.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_12__["UpdateWatchLater"](movieId, isActive));
        }
        else {
            this.openLoginModal();
        }
    };
    HomeComponent.prototype.openLoginModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(app_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], {
            width: '90%',
            maxWidth: '400px',
            data: { tab: 0 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.triedLogin = result;
        });
    };
    HomeComponent.prototype.scollTop = function () {
        var body = document.getElementById('body');
        body.scrollIntoView();
    };
    HomeComponent.prototype.onScroll = function ($event) {
        this.scollTopActive = window.scrollY >= 100 ? true : false;
        if (((window.innerHeight + window.scrollY) > document.body.offsetHeight)
            && this.filters.currentPage < this.filters.lastPage
            && this.isLoaded) {
            this.isLoaded = false;
            this.filters.currentPage = this.filters.currentPage + 1;
            this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_11__["LoadHomeList"](this.filters));
        }
    };
    HomeComponent.prototype.openNav = function () {
        this.filterOpened = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(lodash_decorators__WEBPACK_IMPORTED_MODULE_10__["debounce"])(800),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomeComponent.prototype, "updateList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomeComponent.prototype, "onScroll", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/store/actions/home-action.ts":
/*!***************************************************!*\
  !*** ./src/app/home/store/actions/home-action.ts ***!
  \***************************************************/
/*! exports provided: LOAD_HOME_LIST, LOAD_HOME_LIST_SUCCESS, LOAD_HOME_LIST_FAIL, UPDATE_HOME_LIST, UPDATE_HOME_LIST_SUCCESS, UPDATE_HOME_LIST_FAIL, UPDATE_WATCH_LATER_MOVIE, UPDATE_ALL_WATCH_LATER_MOVIE, LoadHomeList, LoadHomeListSuccess, UpdateHomeListFail, UpdateHomeList, UpdateHomeListSuccess, LoadHomeListFail, UpdateWatchLaterMovie, UpdateAllWatchLaterMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST", function() { return LOAD_HOME_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_SUCCESS", function() { return LOAD_HOME_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_FAIL", function() { return LOAD_HOME_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST", function() { return UPDATE_HOME_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_SUCCESS", function() { return UPDATE_HOME_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_FAIL", function() { return UPDATE_HOME_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_MOVIE", function() { return UPDATE_WATCH_LATER_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ALL_WATCH_LATER_MOVIE", function() { return UPDATE_ALL_WATCH_LATER_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHomeList", function() { return LoadHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListSuccess", function() { return LoadHomeListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListFail", function() { return UpdateHomeListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeList", function() { return UpdateHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListSuccess", function() { return UpdateHomeListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListFail", function() { return LoadHomeListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterMovie", function() { return UpdateWatchLaterMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAllWatchLaterMovie", function() { return UpdateAllWatchLaterMovie; });
var LOAD_HOME_LIST = '[Load] Load Home list';
var LOAD_HOME_LIST_SUCCESS = '[Load] Load Home list Success';
var LOAD_HOME_LIST_FAIL = '[Load] Load Home list Fail';
var UPDATE_HOME_LIST = '[Update] Update Home list';
var UPDATE_HOME_LIST_SUCCESS = '[Update] Update Home list Success';
var UPDATE_HOME_LIST_FAIL = '[Update] Update Home list Fail';
var UPDATE_WATCH_LATER_MOVIE = '[Update] Update Watch Later';
var UPDATE_ALL_WATCH_LATER_MOVIE = '[Update] Update All Watch Later';
var LoadHomeList = /** @class */ (function () {
    function LoadHomeList(filter) {
        this.filter = filter;
        this.type = LOAD_HOME_LIST;
    }
    return LoadHomeList;
}());

var LoadHomeListSuccess = /** @class */ (function () {
    function LoadHomeListSuccess(response) {
        this.response = response;
        this.type = LOAD_HOME_LIST_SUCCESS;
    }
    return LoadHomeListSuccess;
}());

var UpdateHomeListFail = /** @class */ (function () {
    function UpdateHomeListFail(payload) {
        this.payload = payload;
        this.type = LOAD_HOME_LIST_FAIL;
    }
    return UpdateHomeListFail;
}());

var UpdateHomeList = /** @class */ (function () {
    function UpdateHomeList(filter) {
        this.filter = filter;
        this.type = UPDATE_HOME_LIST;
    }
    return UpdateHomeList;
}());

var UpdateHomeListSuccess = /** @class */ (function () {
    function UpdateHomeListSuccess(response) {
        this.response = response;
        this.type = UPDATE_HOME_LIST_SUCCESS;
    }
    return UpdateHomeListSuccess;
}());

var LoadHomeListFail = /** @class */ (function () {
    function LoadHomeListFail(payload) {
        this.payload = payload;
        this.type = UPDATE_HOME_LIST_FAIL;
    }
    return LoadHomeListFail;
}());

var UpdateWatchLaterMovie = /** @class */ (function () {
    function UpdateWatchLaterMovie(movieId) {
        this.movieId = movieId;
        this.type = UPDATE_WATCH_LATER_MOVIE;
    }
    return UpdateWatchLaterMovie;
}());

var UpdateAllWatchLaterMovie = /** @class */ (function () {
    function UpdateAllWatchLaterMovie(moviesId) {
        this.moviesId = moviesId;
        this.type = UPDATE_ALL_WATCH_LATER_MOVIE;
    }
    return UpdateAllWatchLaterMovie;
}());



/***/ }),

/***/ "./src/app/home/store/actions/index.ts":
/*!*********************************************!*\
  !*** ./src/app/home/store/actions/index.ts ***!
  \*********************************************/
/*! exports provided: LOAD_HOME_LIST, LOAD_HOME_LIST_SUCCESS, LOAD_HOME_LIST_FAIL, UPDATE_HOME_LIST, UPDATE_HOME_LIST_SUCCESS, UPDATE_HOME_LIST_FAIL, UPDATE_WATCH_LATER_MOVIE, UPDATE_ALL_WATCH_LATER_MOVIE, LoadHomeList, LoadHomeListSuccess, UpdateHomeListFail, UpdateHomeList, UpdateHomeListSuccess, LoadHomeListFail, UpdateWatchLaterMovie, UpdateAllWatchLaterMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-action */ "./src/app/home/store/actions/home-action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_SUCCESS", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_LIST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_FAIL", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_LIST_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HOME_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_SUCCESS", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HOME_LIST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_FAIL", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HOME_LIST_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_MOVIE", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_WATCH_LATER_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ALL_WATCH_LATER_MOVIE", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ALL_WATCH_LATER_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeList", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LoadHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListSuccess", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListFail", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeList", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListSuccess", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListFail", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterMovie", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateWatchLaterMovie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAllWatchLaterMovie", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateAllWatchLaterMovie"]; });




/***/ }),

/***/ "./src/app/home/store/effects/home-effect.ts":
/*!***************************************************!*\
  !*** ./src/app/home/store/effects/home-effect.ts ***!
  \***************************************************/
/*! exports provided: HomeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEffects", function() { return HomeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/home/store/actions */ "./src/app/home/store/actions/index.ts");








var HomeEffects = /** @class */ (function () {
    function HomeEffects(actions$, service, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.toastr = toastr;
        this.loadHomeList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["LOAD_HOME_LIST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.getAllMoviesAndSeries(params.filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["LoadHomeListSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["LoadHomeListFail"](error)); }));
        }));
        this.loadHomeListFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["LOAD_HOME_LIST_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Ocorreu um erro inesperado ao listar as indicações.', '', { enableHtml: true });
        }));
        this.updateHomeList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_HOME_LIST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.getAllMoviesAndSeries(params.filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateHomeListSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateHomeListFail"](error)); }));
        }));
        this.updateHomeListFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_home_store_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_HOME_LIST_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Ocorreu um erro inesperado ao listar as indicações.', '', { enableHtml: true });
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], HomeEffects.prototype, "loadHomeList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], HomeEffects.prototype, "loadHomeListFail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], HomeEffects.prototype, "updateHomeList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], HomeEffects.prototype, "updateHomeListFail$", void 0);
    HomeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], HomeEffects);
    return HomeEffects;
}());



/***/ }),

/***/ "./src/app/home/store/effects/index.ts":
/*!*********************************************!*\
  !*** ./src/app/home/store/effects/index.ts ***!
  \*********************************************/
/*! exports provided: effects, HomeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _home_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-effect */ "./src/app/home/store/effects/home-effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeEffects", function() { return _home_effect__WEBPACK_IMPORTED_MODULE_0__["HomeEffects"]; });

/* empty/unused harmony star reexport */

var effects = [_home_effect__WEBPACK_IMPORTED_MODULE_0__["HomeEffects"]];



/***/ }),

/***/ "./src/app/home/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/home/store/index.ts ***!
  \*************************************/
/*! exports provided: effects, reducers, getState, LOAD_HOME_LIST, LOAD_HOME_LIST_SUCCESS, LOAD_HOME_LIST_FAIL, UPDATE_HOME_LIST, UPDATE_HOME_LIST_SUCCESS, UPDATE_HOME_LIST_FAIL, UPDATE_WATCH_LATER_MOVIE, UPDATE_ALL_WATCH_LATER_MOVIE, LoadHomeList, LoadHomeListSuccess, UpdateHomeListFail, UpdateHomeList, UpdateHomeListSuccess, LoadHomeListFail, UpdateWatchLaterMovie, UpdateAllWatchLaterMovie, HomeEffects, getHomeListState, getHomeListIds, getHomeListEntities, getAllHomeList, getHomeListLoading, getHomeListLoaded, getHomeListPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/home/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_LIST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_LIST_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HOME_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HOME_LIST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HOME_LIST_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_MOVIE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_WATCH_LATER_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ALL_WATCH_LATER_MOVIE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ALL_WATCH_LATER_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeList", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeList", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterMovie", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateWatchLaterMovie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAllWatchLaterMovie", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateAllWatchLaterMovie"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/home/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["HomeEffects"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/home/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["getState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/home/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListIds", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllHomeList", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListPagination", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListPagination"]; });







/***/ }),

/***/ "./src/app/home/store/reducers/home-reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/store/reducers/home-reducer.ts ***!
  \*****************************************************/
/*! exports provided: adapter, initialState, reducer, getLoading, getLoaded, getPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPagination", function() { return getPagination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/pagination */ "./src/app/core/models/pagination.ts");
/* harmony import */ var app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/home/store/actions */ "./src/app/home/store/actions/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: function (moviesList) { return moviesList.id; }
});
var initialState = adapter.getInitialState({
    loading: false,
    loaded: false,
    pagination: null,
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_HOME_LIST"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_HOME_LIST_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, adapter.addMany(action.response.data, state), { loading: false, loaded: true, pagination: new _models_pagination__WEBPACK_IMPORTED_MODULE_2__["Pagination"](action.response) });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_HOME_LIST"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, adapter.addAll([], state), { loading: true, loaded: false, pagination: null });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_HOME_LIST_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, adapter.addAll(action.response.data, state), { loading: false, loaded: true, pagination: new _models_pagination__WEBPACK_IMPORTED_MODULE_2__["Pagination"](action.response) });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_HOME_LIST_FAIL"]:
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_HOME_LIST_FAIL"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, adapter.addAll([], state), { loading: false, loaded: false, pagination: null });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_WATCH_LATER_MOVIE"]: {
            var newHomeList = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](state.entities);
            newHomeList[action.movieId].watch_later = !state.entities[action.movieId].watch_later;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, adapter.updateOne({
                id: action.movieId,
                changes: newHomeList[action.movieId]
            }, state));
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_ALL_WATCH_LATER_MOVIE"]: {
            var homeListIds_1 = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](state.ids);
            var newHomeList_1 = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](state.entities);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, adapter.updateMany(action.moviesId.map(function (movieId) {
                if (lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](homeListIds_1, movieId)) {
                    newHomeList_1[movieId].watch_later = true;
                    return {
                        id: movieId,
                        changes: newHomeList_1[movieId]
                    };
                }
            }), state));
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };
var getLoaded = function (state) { return state.loaded; };
var getPagination = function (state) { return state.pagination; };


/***/ }),

/***/ "./src/app/home/store/reducers/index.ts":
/*!**********************************************!*\
  !*** ./src/app/home/store/reducers/index.ts ***!
  \**********************************************/
/*! exports provided: reducers, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/home/store/reducers/home-reducer */ "./src/app/home/store/reducers/home-reducer.ts");


var reducers = {
    homeList: app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var getState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('homeList');


/***/ }),

/***/ "./src/app/home/store/selectors/home-selector.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/store/selectors/home-selector.ts ***!
  \*******************************************************/
/*! exports provided: getHomeListState, getHomeListIds, getHomeListEntities, getAllHomeList, getHomeListLoading, getHomeListLoaded, getHomeListPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListState", function() { return getHomeListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListIds", function() { return getHomeListIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListEntities", function() { return getHomeListEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllHomeList", function() { return getAllHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoading", function() { return getHomeListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoaded", function() { return getHomeListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListPagination", function() { return getHomeListPagination; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_home_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/home/store/reducers */ "./src/app/home/store/reducers/index.ts");
/* harmony import */ var app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/home/store/reducers/home-reducer */ "./src/app/home/store/reducers/home-reducer.ts");
var _a;



var getHomeListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_home_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.homeList; });
var getHomeListIds = (_a = app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(getHomeListState), _a.selectIds), getHomeListEntities = _a.selectEntities, getAllHomeList = _a.selectAll;
var getHomeListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getHomeListLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoaded"]);
var getHomeListPagination = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getPagination"]);


/***/ }),

/***/ "./src/app/home/store/selectors/index.ts":
/*!***********************************************!*\
  !*** ./src/app/home/store/selectors/index.ts ***!
  \***********************************************/
/*! exports provided: getHomeListState, getHomeListIds, getHomeListEntities, getAllHomeList, getHomeListLoading, getHomeListLoaded, getHomeListPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-selector */ "./src/app/home/store/selectors/home-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListState", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListIds", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListEntities", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllHomeList", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getAllHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoading", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoaded", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListPagination", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListPagination"]; });




/***/ }),

/***/ "./src/app/indicate/indicate.component.html":
/*!**************************************************!*\
  !*** ./src/app/indicate/indicate.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title-modal\">Nova Indicação</h2>\n\n<div class=\"container\">\n  <form novalidate [formGroup]=\"formGroup\" (submit)=\"saveIndication()\" [hidden]=\"(isLoading$ | async)\">\n    <div class=\"flex-row col-md-12\">\n      <mat-form-field appearance=\"outline\" class=\"col-md-8 col-sm-12 margin-right-1 dialog-input-prefix\">\n        <mat-label>Link IMDb/TMDb</mat-label>\n        <input matInput autocomplete=\"off\" formControlName='url'\n          placeholder=\"http://www.imdb.com/title/exemple ou https://www.themoviedb.org/movie/exemple\">\n        <mat-icon matPrefix>link</mat-icon>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"col-md-4 col-sm-12\">\n          <mat-label>Avaliação</mat-label>\n        <mat-select panelClass=\"panel-dark\" formControlName='rating'>\n          <mat-option *ngFor=\"let rating of ratingArray\" [value]=\"rating\">\n            {{ratingEnum[rating]}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"flex-row col-md-12\">\n      <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12\">\n        <mat-label>Comentário</mat-label>\n        <textarea matInput formControlName='comment'></textarea>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\" type=\"button\">Cancelar</button>\n      <button mat-button cdkFocusInitial class=\"btn-default\" type=\"submit\">\n        <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon> Indicar\n      </button>\n    </div>\n  </form>\n\n  <app-loading [hidden]=\"!(isLoading$ | async)\"></app-loading>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/indicate/indicate.component.scss":
/*!**************************************************!*\
  !*** ./src/app/indicate/indicate.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.title-modal {\n  width: 100%;\n  color: #E6EAEC;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #1d1d1d; }\n@media (max-width: 480px) {\n  .container .flex-row {\n    flex-direction: column; }\n    .container .flex-row mat-form-field {\n      margin-right: 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvaW5kaWNhdGUvaW5kaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTJDQSxrQkFBQTtBQXlCQSxTQUFBO0FDbEVBO0VBQ0UsV0FBVztFQUNYLGNENkJvQjtFQzVCcEIsb0JBQW9CO0VBQ3BCLGdDRGlDMkIsRUFBQTtBQzlCN0I7RUFDRTtJQUVJLHNCQUFzQixFQUFBO0lBRjFCO01BS00sMEJBQTBCLEVBQUEsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9pbmRpY2F0ZS9pbmRpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGJhY2tncm91bmQ6ICMyODI4Mjg7XG4kaGVhZGVyLWJhY2tncm91bmQ6ICMxZDFkMWQ7XG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcblxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xuXG4kbG9nby15ZWxsb3c6ICNCMEIzNUE7XG4kbG9nby1ncmVlbjogIzRCQTA1MztcbiRsb2dvLXBpbms6ICNBMTRDQTA7XG4kbG9nby1yZWQ6ICNCOTRBNUM7XG4kbG9nby1ibHVlOiAjNDM2QUIxO1xuXG4kbG9nby1ncmF5OiAjNWQ1ZDVkO1xuJGxvZ28tZGFyay1ncmF5OiAjNDQ0NDQ0O1xuXG4kcmF0aW5nLTE6ICM1MDJCMkM7XG4kcmF0aW5nLTI6ICNDRjYzNjY7XG4kcmF0aW5nLTM6ICNCMTkzQjc7XG4kcmF0aW5nLTQ6ICNGNEMyN0I7XG4kcmF0aW5nLTU6ICM4NUJEQjY7XG4kcmF0aW5nLTY6ICM1RDhFQkE7XG4kcmF0aW5nLTc6ICM3RUJCNkY7XG5cbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcbiRjb2xvci1tb3ZpZTogIzAxQzA1RDtcblxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XG5cbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcbiRsaWdodC1ncmF5OiAjRTRFNEU0O1xuJGdyYXk6ICNjZGQzZDg7XG4kZGFyay1ncmF5OiAjNzU4MThiO1xuJGRhcmtlci1ncmF5OiAjNkE2QzY2O1xuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xuXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XG5cbi8qIFdJRFRIIENPTFVNTlMgKi9cbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xuJHdpZHRoLTM6IDI1JTtcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC02OiA1MCU7XG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTk6IDc1JTtcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC0xMjogMTAwJTtcblxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcbiR3aWR0aC0yLWNvbHVtbnM6IDUwJTtcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcbiR3aWR0aC01LWNvbHVtbnM6IDIwJTtcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xuJHdpZHRoLTgtY29sdW1uczogMTIuNSU7XG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XG5cbi8qIFNJWkUgKi9cbiRzaXplLWRlZmF1bHQ6IDEycHg7XG4kcmFkaXVzLWRlZmF1bHQ6IDVweDtcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuLnRpdGxlLW1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAkbGlnaHRlci1ncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXJrZXN0LWdyYXktYm9yZGVyXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuZmxleC1yb3cge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/indicate/indicate.component.ts":
/*!************************************************!*\
  !*** ./src/app/indicate/indicate.component.ts ***!
  \************************************************/
/*! exports provided: IndicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateComponent", function() { return IndicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _constants_ratings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constants/ratings */ "./src/app/core/constants/ratings.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_indicate_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/indicate/store */ "./src/app/indicate/store/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









var IndicateComponent = /** @class */ (function () {
    function IndicateComponent(store, toastr, fb, dialogRef, data) {
        this.store = store;
        this.toastr = toastr;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ratingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"]);
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_indicate_store__WEBPACK_IMPORTED_MODULE_7__["getLoading"]));
        this.indicateLoaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_indicate_store__WEBPACK_IMPORTED_MODULE_7__["getLoaded"]));
    }
    IndicateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this.fb.group({
            url: [this.data.url, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ['']
        });
        this.indicateLoadedSub = this.indicateLoaded$.subscribe(function (result) {
            if (result) {
                _this.toastr.success('<i class="material-icons">done</i>Indicação realizada com sucesso!', '', { enableHtml: true });
                _this.store.dispatch(new app_indicate_store__WEBPACK_IMPORTED_MODULE_7__["IndicateClear"]());
                _this.dialogRef.close(true);
            }
        });
    };
    IndicateComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    IndicateComponent.prototype.saveIndication = function () {
        if (this.formGroup.valid) {
            this.store.dispatch(new app_indicate_store__WEBPACK_IMPORTED_MODULE_7__["IndicateSave"](this.formGroup.value));
        }
    };
    IndicateComponent.prototype.ngOnDestroy = function () {
        this.indicateLoadedSub.unsubscribe();
    };
    IndicateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indicate',
            template: __webpack_require__(/*! ./indicate.component.html */ "./src/app/indicate/indicate.component.html"),
            styles: [__webpack_require__(/*! ./indicate.component.scss */ "./src/app/indicate/indicate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], IndicateComponent);
    return IndicateComponent;
}());



/***/ }),

/***/ "./src/app/indicate/store/actions/index.ts":
/*!*************************************************!*\
  !*** ./src/app/indicate/store/actions/index.ts ***!
  \*************************************************/
/*! exports provided: INDICATE_SAVE, INDICATE_SAVE_SUCCESS, INDICATE_SAVE_FAIL, INDICATE_CLEAR, IndicateSave, IndicateSaveSuccess, IndicateSaveFail, IndicateClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicate_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicate-action */ "./src/app/indicate/store/actions/indicate-action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["INDICATE_SAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE_SUCCESS", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["INDICATE_SAVE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE_FAIL", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["INDICATE_SAVE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_CLEAR", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["INDICATE_CLEAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateSave", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["IndicateSave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateSaveSuccess", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["IndicateSaveSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateSaveFail", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["IndicateSaveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateClear", function() { return _indicate_action__WEBPACK_IMPORTED_MODULE_0__["IndicateClear"]; });




/***/ }),

/***/ "./src/app/indicate/store/actions/indicate-action.ts":
/*!***********************************************************!*\
  !*** ./src/app/indicate/store/actions/indicate-action.ts ***!
  \***********************************************************/
/*! exports provided: INDICATE_SAVE, INDICATE_SAVE_SUCCESS, INDICATE_SAVE_FAIL, INDICATE_CLEAR, IndicateSave, IndicateSaveSuccess, IndicateSaveFail, IndicateClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE", function() { return INDICATE_SAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE_SUCCESS", function() { return INDICATE_SAVE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE_FAIL", function() { return INDICATE_SAVE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDICATE_CLEAR", function() { return INDICATE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateSave", function() { return IndicateSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateSaveSuccess", function() { return IndicateSaveSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateSaveFail", function() { return IndicateSaveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateClear", function() { return IndicateClear; });
var INDICATE_SAVE = '[Indicate] Indicate Save';
var INDICATE_SAVE_SUCCESS = '[Indicate] Indicate Save Success';
var INDICATE_SAVE_FAIL = '[Indicate] Indicate Save Fail';
var INDICATE_CLEAR = '[Indicate] Indicate Clear';
var IndicateSave = /** @class */ (function () {
    function IndicateSave(form) {
        this.form = form;
        this.type = INDICATE_SAVE;
    }
    return IndicateSave;
}());

var IndicateSaveSuccess = /** @class */ (function () {
    function IndicateSaveSuccess(response) {
        this.response = response;
        this.type = INDICATE_SAVE_SUCCESS;
    }
    return IndicateSaveSuccess;
}());

var IndicateSaveFail = /** @class */ (function () {
    function IndicateSaveFail(payload) {
        this.payload = payload;
        this.type = INDICATE_SAVE_FAIL;
    }
    return IndicateSaveFail;
}());

var IndicateClear = /** @class */ (function () {
    function IndicateClear() {
        this.type = INDICATE_CLEAR;
    }
    return IndicateClear;
}());



/***/ }),

/***/ "./src/app/indicate/store/effects/index.ts":
/*!*************************************************!*\
  !*** ./src/app/indicate/store/effects/index.ts ***!
  \*************************************************/
/*! exports provided: effects, IndicateEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _indicate_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicate-effect */ "./src/app/indicate/store/effects/indicate-effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateEffects", function() { return _indicate_effect__WEBPACK_IMPORTED_MODULE_0__["IndicateEffects"]; });

/* empty/unused harmony star reexport */

var effects = [_indicate_effect__WEBPACK_IMPORTED_MODULE_0__["IndicateEffects"]];



/***/ }),

/***/ "./src/app/indicate/store/effects/indicate-effect.ts":
/*!***********************************************************!*\
  !*** ./src/app/indicate/store/effects/indicate-effect.ts ***!
  \***********************************************************/
/*! exports provided: IndicateEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateEffects", function() { return IndicateEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_indicate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/indicate.service */ "./src/app/services/indicate.service.ts");
/* harmony import */ var app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/indicate/store/actions */ "./src/app/indicate/store/actions/index.ts");








var IndicateEffects = /** @class */ (function () {
    function IndicateEffects(actions$, service, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.toastr = toastr;
        this.indicateSave$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_7__["INDICATE_SAVE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.sendIndicate(params.form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_7__["IndicateSaveSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_7__["IndicateSaveFail"](error)); }));
        }));
        this.indicateSaveFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_7__["INDICATE_SAVE_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> ' + action.payload.error.message, '', { enableHtml: true });
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], IndicateEffects.prototype, "indicateSave$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], IndicateEffects.prototype, "indicateSaveFail$", void 0);
    IndicateEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_indicate_service__WEBPACK_IMPORTED_MODULE_6__["IndicateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], IndicateEffects);
    return IndicateEffects;
}());



/***/ }),

/***/ "./src/app/indicate/store/index.ts":
/*!*****************************************!*\
  !*** ./src/app/indicate/store/index.ts ***!
  \*****************************************/
/*! exports provided: effects, reducers, getState, INDICATE_SAVE, INDICATE_SAVE_SUCCESS, INDICATE_SAVE_FAIL, INDICATE_CLEAR, IndicateSave, IndicateSaveSuccess, IndicateSaveFail, IndicateClear, IndicateEffects, getIndicateState, getIndicate, getLoading, getLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/indicate/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["INDICATE_SAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["INDICATE_SAVE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_SAVE_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["INDICATE_SAVE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INDICATE_CLEAR", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["INDICATE_CLEAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateSave", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["IndicateSave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateSaveSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["IndicateSaveSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateSaveFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["IndicateSaveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateClear", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["IndicateClear"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/indicate/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndicateEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["IndicateEffects"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/indicate/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["getState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/indicate/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIndicateState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getIndicateState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIndicate", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getIndicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoaded"]; });







/***/ }),

/***/ "./src/app/indicate/store/reducers/index.ts":
/*!**************************************************!*\
  !*** ./src/app/indicate/store/reducers/index.ts ***!
  \**************************************************/
/*! exports provided: reducers, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_indicate_store_reducers_indicate_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/indicate/store/reducers/indicate-reducer */ "./src/app/indicate/store/reducers/indicate-reducer.ts");


var reducers = {
    indicate: app_indicate_store_reducers_indicate_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var getState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('indicate');


/***/ }),

/***/ "./src/app/indicate/store/reducers/indicate-reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/indicate/store/reducers/indicate-reducer.ts ***!
  \*************************************************************/
/*! exports provided: adapter, initialState, reducer, getLoading, getLoaded, getIndicateSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicateSave", function() { return getIndicateSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/indicate/store/actions */ "./src/app/indicate/store/actions/index.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({});
var initialState = adapter.getInitialState({
    loading: false,
    loaded: false,
    indicate: null,
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_2__["INDICATE_SAVE"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        case app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_2__["INDICATE_SAVE_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, indicate: state.indicate });
        }
        case app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_2__["INDICATE_SAVE_FAIL"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, indicate: null });
        }
        case app_indicate_store_actions__WEBPACK_IMPORTED_MODULE_2__["INDICATE_CLEAR"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: false, indicate: null });
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };
var getLoaded = function (state) { return state.loaded; };
var getIndicateSave = function (state) { return state.indicate; };


/***/ }),

/***/ "./src/app/indicate/store/selectors/index.ts":
/*!***************************************************!*\
  !*** ./src/app/indicate/store/selectors/index.ts ***!
  \***************************************************/
/*! exports provided: getIndicateState, getIndicate, getLoading, getLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicate_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicate-selector */ "./src/app/indicate/store/selectors/indicate-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIndicateState", function() { return _indicate_selector__WEBPACK_IMPORTED_MODULE_0__["getIndicateState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIndicate", function() { return _indicate_selector__WEBPACK_IMPORTED_MODULE_0__["getIndicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return _indicate_selector__WEBPACK_IMPORTED_MODULE_0__["getLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return _indicate_selector__WEBPACK_IMPORTED_MODULE_0__["getLoaded"]; });




/***/ }),

/***/ "./src/app/indicate/store/selectors/indicate-selector.ts":
/*!***************************************************************!*\
  !*** ./src/app/indicate/store/selectors/indicate-selector.ts ***!
  \***************************************************************/
/*! exports provided: getIndicateState, getIndicate, getLoading, getLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicateState", function() { return getIndicateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicate", function() { return getIndicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_indicate_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/indicate/store/reducers */ "./src/app/indicate/store/reducers/index.ts");
/* harmony import */ var app_indicate_store_reducers_indicate_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/indicate/store/reducers/indicate-reducer */ "./src/app/indicate/store/reducers/indicate-reducer.ts");



var getIndicateState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_indicate_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.indicate; });
var getIndicate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getIndicateState, app_indicate_store_reducers_indicate_reducer__WEBPACK_IMPORTED_MODULE_2__["getIndicateSave"]);
var getLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getIndicateState, app_indicate_store_reducers_indicate_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getIndicateState, app_indicate_store_reducers_indicate_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoaded"]);


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <div class=\"social-login margin-bottom-2\">\n    <button class=\"btn btn-facebook margin-bottom-2\" (click)=\"loginFacebook()\"><img src=\"assets/img/facebook.png\" height=\"25px\"> <span>Entrar com o Facebook</span></button>\n  </div>\n  <div class=\"manual-login\">\n    <mat-tab-group class=\"tab-login\" animationDuration=\"1500ms\" [selectedIndex]=\"tabActive\">\n      <mat-tab label=\"Login\">\n        <ng-container *ngIf=\"!isForgetPassword\">\n          <form novalidate [formGroup]=\"formSignIn\" (submit)=\"signIn()\">\n            <div class=\"flex-row col-md-12 col-sm-12\">\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\n                <mat-label>E-mail</mat-label>\n                <input matInput autocomplete=\"off\" formControlName='email'\n                  placeholder=\"email@email.com.br\">\n                <mat-icon matPrefix>email</mat-icon>\n              </mat-form-field>\n            </div>\n            <div class=\"flex-column col-md-12 col-sm-12\">\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\n                <mat-label>Senha</mat-label>\n                <input matInput type=\"password\" formControlName='password'>\n                <mat-icon matPrefix>lock</mat-icon>\n              </mat-form-field>\n              <div class=\"forget-password\">\n                <span (click)=\"setForgetPassword()\">Esqueceu sua senha?</span>\n              </div>\n            </div>\n            <div class=\"flex-row col-md-12 col-sm-12 margin-top-1\">\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Entrar</button>\n            </div>\n          </form>\n        </ng-container>\n\n        <ng-container *ngIf=\"isForgetPassword\">\n          <form novalidate [formGroup]=\"formForgetPassword\" (submit)=\"forgetPassword()\">\n            <div class=\"flex-row col-md-12 col-sm-12\">\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\n                <mat-label>E-mail</mat-label>\n                <input matInput autocomplete=\"off\" formControlName='email'\n                  placeholder=\"email@email.com.br\">\n                <mat-icon matPrefix>email</mat-icon>\n              </mat-form-field>\n            </div>\n            <div class=\"flex-column align-items-center col-md-12 col-sm-12 margin-top-1\">\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Enviar e-mail</button>\n              <button mat-button class=\"col-md-5 margin-top-1\" (click)=\"setForgetPassword()\">Voltar</button>\n            </div>\n          </form>\n        </ng-container>\n      </mat-tab>\n      <mat-tab label=\"Cadastrar\">\n        <form novalidate [formGroup]=\"formRegister\" (submit)=\"register()\">\n          <div class=\"flex-row col-md-12 col-sm-12\">\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\n              <mat-label>Nome</mat-label>\n              <input matInput autocomplete=\"off\" formControlName='name'>\n              <mat-icon matPrefix>perm_identity</mat-icon>\n            </mat-form-field>\n          </div>\n          <div class=\"flex-row col-md-12 col-sm-12\">\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\n              <mat-label>E-mail</mat-label>\n              <input matInput autocomplete=\"off\" formControlName='email'\n                placeholder=\"email@email.com.br\">\n              <mat-icon matPrefix>email</mat-icon>\n            </mat-form-field>\n          </div>\n          <div class=\"flex-column col-md-12 col-sm-12\">\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\n              <mat-label>Senha</mat-label>\n              <input matInput type=\"password\" formControlName='password'>\n              <mat-icon matPrefix>lock</mat-icon>\n            </mat-form-field>\n          </div>\n          <div class=\"flex-row col-md-12 col-sm-12 margin-top-1\">\n            <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Cadastrar</button>\n          </div>\n        </form>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.login-container .social-login {\n  border-bottom: 1px solid #1d1d1d; }\n.login-container .social-login .btn-facebook {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%; }\n.login-container .social-login .btn-facebook img {\n      margin-right: 10px; }\n.login-container .forget-password {\n  text-align: right;\n  margin: 5px 0 10px; }\n.login-container .forget-password span {\n    color: #75818b;\n    text-decoration: none;\n    cursor: pointer; }\n.login-container .forget-password span:hover {\n      color: #F1F4F5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTJDQSxrQkFBQTtBQXlCQSxTQUFBO0FDbEVBO0VBR0ksZ0NEa0N5QixFQUFBO0FDckM3QjtJQU1NLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtBQVRqQjtNQVdZLGtCQUFrQixFQUFBO0FBWDlCO0VBZ0JJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQWpCdEI7SUFvQk0sY0RjYTtJQ2JiLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7QUF0QnJCO01BeUJRLGNES2UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kYmFja2dyb3VuZDogIzI4MjgyODtcbiRoZWFkZXItYmFja2dyb3VuZDogIzFkMWQxZDtcbiRiYWNrZ3JvdW5kLWZhY2Vib29rOiAjNDI2N0IyO1xuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xuXG4kYnV0dG9uLXByaW1hcnk6ICMyOUJGNDQ7XG5cbiRsb2dvLXllbGxvdzogI0IwQjM1QTtcbiRsb2dvLWdyZWVuOiAjNEJBMDUzO1xuJGxvZ28tcGluazogI0ExNENBMDtcbiRsb2dvLXJlZDogI0I5NEE1QztcbiRsb2dvLWJsdWU6ICM0MzZBQjE7XG5cbiRsb2dvLWdyYXk6ICM1ZDVkNWQ7XG4kbG9nby1kYXJrLWdyYXk6ICM0NDQ0NDQ7XG5cbiRyYXRpbmctMTogIzUwMkIyQztcbiRyYXRpbmctMjogI0NGNjM2NjtcbiRyYXRpbmctMzogI0IxOTNCNztcbiRyYXRpbmctNDogI0Y0QzI3QjtcbiRyYXRpbmctNTogIzg1QkRCNjtcbiRyYXRpbmctNjogIzVEOEVCQTtcbiRyYXRpbmctNzogIzdFQkI2RjtcblxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xuXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcblxuJGxpZ2h0ZXN0LWdyYXk6ICNGMUY0RjU7XG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XG4kZ3JheTogI2NkZDNkODtcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XG4kZGFya2VzdC1ncmF5OiAjMzMzMzMzO1xuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XG5cbiRmb250LWRlZmF1bHQ6ICRkYXJrZXItZ3JheTtcblxuLyogV0lEVEggQ09MVU1OUyAqL1xuJHdpZHRoLTE6IDguMzMzMzMzMzMzJTtcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XG4kd2lkdGgtMzogMjUlO1xuJHdpZHRoLTQ6IDMzLjMzMzMzMzMzJTtcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTY6IDUwJTtcbiR3aWR0aC03OiA1OC4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtOTogNzUlO1xuJHdpZHRoLTEwOiA4My4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTEyOiAxMDAlO1xuXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xuJHdpZHRoLTItY29sdW1uczogNTAlO1xuJHdpZHRoLTMtY29sdW1uczogMzMuMzMzMzMlO1xuJHdpZHRoLTQtY29sdW1uczogMjUlO1xuJHdpZHRoLTUtY29sdW1uczogMjAlO1xuJHdpZHRoLTYtY29sdW1uczogMTYuNjY2NjY2NjY3JTtcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcbiR3aWR0aC05LWNvbHVtbnM6IDExLjElO1xuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcblxuLyogU0laRSAqL1xuJHNpemUtZGVmYXVsdDogMTJweDtcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xuIiwiQGltcG9ydCAnYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4ubG9naW4tY29udGFpbmVyIHtcblxuICAuc29jaWFsLWxvZ2luIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhcmtlc3QtZ3JheS1ib3JkZXI7XG5cbiAgICAuYnRuLWZhY2Vib29rIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaW1nIHsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cbiAgICB9XG4gIH1cblxuICAuZm9yZ2V0LXBhc3N3b3JkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDVweCAwIDEwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _constants_ratings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constants/ratings */ "./src/app/core/constants/ratings.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_login_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/login/store */ "./src/app/login/store/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginStore, fb, dialogRef, data) {
        this.loginStore = loginStore;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ratingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_7__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.tabActive = this.data.tab;
        this.formSignIn = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formRegister = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formForgetPassword = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        window.fbAsyncInit = function () {
            FB.init({
                appId: '2074647832674974',
                cookie: true,
                xfbml: true,
                version: 'v3.10'
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var fjs;
            var js;
            js = d.getElementsByTagName(s)[0];
            fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    };
    LoginComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginComponent.prototype.loginFacebook = function () {
        var _this = this;
        FB.login(function (response) {
            if (response.authResponse) {
                var paramsLogin = {
                    type: 'facebook',
                    token: response.authResponse.accessToken
                };
                _this.loginStore.dispatch(new app_login_store__WEBPACK_IMPORTED_MODULE_6__["Login"](paramsLogin));
                _this.dialogRef.close(true);
            }
            else {
                console.log('User login failed');
            }
        });
    };
    LoginComponent.prototype.signIn = function () {
        if (this.formSignIn.valid) {
            this.dialogRef.close(this.formSignIn.value);
        }
    };
    LoginComponent.prototype.forgetPassword = function () {
        if (this.formForgetPassword.valid) {
            this.dialogRef.close(this.formSignIn.value);
        }
    };
    LoginComponent.prototype.register = function () {
        if (this.formRegister.valid) {
            this.dialogRef.close(this.formSignIn.value);
        }
    };
    LoginComponent.prototype.setForgetPassword = function () {
        this.isForgetPassword = !this.isForgetPassword;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/store/actions/index.ts":
/*!**********************************************!*\
  !*** ./src/app/login/store/actions/index.ts ***!
  \**********************************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL, Login, LoginSuccess, LoginFail, Logout, LogoutSuccess, LogoutFail, VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAIL, VerifyToken, VerifyTokenSuccess, VerifyTokenFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-action */ "./src/app/login/store/actions/login-action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAIL", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LoginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LogoutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutFail", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LogoutFail"]; });

/* harmony import */ var _token_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-action */ "./src/app/login/store/actions/token-action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN", function() { return _token_action__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_SUCCESS", function() { return _token_action__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_FAIL", function() { return _token_action__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyToken", function() { return _token_action__WEBPACK_IMPORTED_MODULE_1__["VerifyToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenSuccess", function() { return _token_action__WEBPACK_IMPORTED_MODULE_1__["VerifyTokenSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenFail", function() { return _token_action__WEBPACK_IMPORTED_MODULE_1__["VerifyTokenFail"]; });





/***/ }),

/***/ "./src/app/login/store/actions/login-action.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/store/actions/login-action.ts ***!
  \*****************************************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL, Login, LoginSuccess, LoginFail, Logout, LogoutSuccess, LogoutFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAIL", function() { return LOGOUT_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return LoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return LogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutFail", function() { return LogoutFail; });
var LOGIN = '[Login] Login';
var LOGIN_SUCCESS = '[Login] Login Success';
var LOGIN_FAIL = '[Login] Login Fail';
var LOGOUT = '[Logout] Logout';
var LOGOUT_SUCCESS = '[Logout] Logout Success';
var LOGOUT_FAIL = '[Logout] Logout Fail';
var Login = /** @class */ (function () {
    function Login(dataLogin) {
        this.dataLogin = dataLogin;
        this.type = LOGIN;
    }
    return Login;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(response) {
        this.response = response;
        this.type = LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var LoginFail = /** @class */ (function () {
    function LoginFail(payload) {
        this.payload = payload;
        this.type = LOGIN_FAIL;
    }
    return LoginFail;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

var LogoutSuccess = /** @class */ (function () {
    function LogoutSuccess(response) {
        this.response = response;
        this.type = LOGOUT_SUCCESS;
    }
    return LogoutSuccess;
}());

var LogoutFail = /** @class */ (function () {
    function LogoutFail(payload) {
        this.payload = payload;
        this.type = LOGOUT_FAIL;
    }
    return LogoutFail;
}());



/***/ }),

/***/ "./src/app/login/store/actions/token-action.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/store/actions/token-action.ts ***!
  \*****************************************************/
/*! exports provided: VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAIL, VerifyToken, VerifyTokenSuccess, VerifyTokenFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN", function() { return VERIFY_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_SUCCESS", function() { return VERIFY_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_FAIL", function() { return VERIFY_TOKEN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyToken", function() { return VerifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenSuccess", function() { return VerifyTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenFail", function() { return VerifyTokenFail; });
var VERIFY_TOKEN = '[Token] Verify Token';
var VERIFY_TOKEN_SUCCESS = '[Token] Verify Token Success';
var VERIFY_TOKEN_FAIL = '[Token] Verify Token Fail';
var VerifyToken = /** @class */ (function () {
    function VerifyToken() {
        this.type = VERIFY_TOKEN;
    }
    return VerifyToken;
}());

var VerifyTokenSuccess = /** @class */ (function () {
    function VerifyTokenSuccess(response) {
        this.response = response;
        this.type = VERIFY_TOKEN_SUCCESS;
    }
    return VerifyTokenSuccess;
}());

var VerifyTokenFail = /** @class */ (function () {
    function VerifyTokenFail(payload) {
        this.payload = payload;
        this.type = VERIFY_TOKEN_FAIL;
    }
    return VerifyTokenFail;
}());



/***/ }),

/***/ "./src/app/login/store/effects/index.ts":
/*!**********************************************!*\
  !*** ./src/app/login/store/effects/index.ts ***!
  \**********************************************/
/*! exports provided: effects, LoginEffects, TokenEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _login_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-effect */ "./src/app/login/store/effects/login-effect.ts");
/* harmony import */ var _token_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-effect */ "./src/app/login/store/effects/token-effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginEffects", function() { return _login_effect__WEBPACK_IMPORTED_MODULE_0__["LoginEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenEffects", function() { return _token_effect__WEBPACK_IMPORTED_MODULE_1__["TokenEffects"]; });



var effects = [_login_effect__WEBPACK_IMPORTED_MODULE_0__["LoginEffects"], _token_effect__WEBPACK_IMPORTED_MODULE_1__["TokenEffects"]];




/***/ }),

/***/ "./src/app/login/store/effects/login-effect.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/store/effects/login-effect.ts ***!
  \*****************************************************/
/*! exports provided: LoginEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEffects", function() { return LoginEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_home_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/home/store */ "./src/app/home/store/index.ts");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/login/store/actions */ "./src/app/login/store/actions/index.ts");












var LoginEffects = /** @class */ (function () {
    function LoginEffects(actions$, store, storeHome, service, tokenService, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.storeHome = storeHome;
        this.service = service;
        this.tokenService = tokenService;
        this.toastr = toastr;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.sendLogin(params.dataLogin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LoginSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LoginFail"](error)); }));
        }));
        this.loginFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGIN_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Dados de acesso inválidos.', '', { enableHtml: true });
        }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGIN_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.tokenService.setToken(action.response);
            _this.store.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_10__["LoadProfile"]());
        }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.sendLogout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LogoutSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LogoutFail"](error)); }));
        }));
        this.logoutFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGOUT_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.toastr.error('<i class="material-icons">error</i> Erro ao sair. Tente novamente mais tarde.', '', { enableHtml: true });
        }));
        this.logoutSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGOUT_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.tokenService.removeStorage();
            _this.store.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_10__["ClearProfile"]());
            _this.storeHome.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_9__["UpdateHomeList"]({
                search: '',
                exibition: 'all',
                ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
                categories: ['MOVIE', 'SERIE'],
                currentPage: 1,
                lastPage: null
            }));
            _this.toastr.success('<i class="material-icons">done</i> Logout realizado com sucesso.', '', { enableHtml: true });
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "loginFail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "loginSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "logout$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "logoutFail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "logoutSuccess$", void 0);
    LoginEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginEffects);
    return LoginEffects;
}());



/***/ }),

/***/ "./src/app/login/store/effects/token-effect.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/store/effects/token-effect.ts ***!
  \*****************************************************/
/*! exports provided: TokenEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenEffects", function() { return TokenEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_login_store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/login/store/actions */ "./src/app/login/store/actions/index.ts");











var TokenEffects = /** @class */ (function () {
    function TokenEffects(actions$, loginStore, service, tokenService, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.loginStore = loginStore;
        this.service = service;
        this.tokenService = tokenService;
        this.toastr = toastr;
        this.verifyToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_9__["VERIFY_TOKEN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_login_store_actions__WEBPACK_IMPORTED_MODULE_9__["VerifyTokenSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_9__["VerifyTokenFail"](error)); }));
        }));
        this.verifyTokenFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_9__["VERIFY_TOKEN_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.loginStore.dispatch(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_9__["Logout"]());
            _this.toastr.error('<i class="material-icons">error</i> Sessão encerrada. Realize o login novamente.', '', { enableHtml: true });
        }));
        this.verifyTokenSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_9__["VERIFY_TOKEN_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.tokenService.setToken(action.response);
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], TokenEffects.prototype, "verifyToken$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], TokenEffects.prototype, "verifyTokenFail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], TokenEffects.prototype, "verifyTokenSuccess$", void 0);
    TokenEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], TokenEffects);
    return TokenEffects;
}());



/***/ }),

/***/ "./src/app/login/store/index.ts":
/*!**************************************!*\
  !*** ./src/app/login/store/index.ts ***!
  \**************************************/
/*! exports provided: effects, reducers, getState, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL, Login, LoginSuccess, LoginFail, Logout, LogoutSuccess, LogoutFail, VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAIL, VerifyToken, VerifyTokenSuccess, VerifyTokenFail, LoginEffects, TokenEffects, getLoginState, getLoginIds, getLoginEntities, getAllLogin, getLogin, getLoginLoading, getLoginLoaded, getTokenState, getTokenIds, getTokenEntities, getAllTokens, getTokenLoading, getTokenLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/login/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LogoutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LogoutFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyToken", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VerifyToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VerifyTokenSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VerifyTokenFail"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/login/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["LoginEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["TokenEffects"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/login/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["getState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/login/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginIds", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllLogin", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogin", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getTokenState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenIds", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getTokenIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getTokenEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllTokens", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllTokens"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getTokenLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getTokenLoaded"]; });







/***/ }),

/***/ "./src/app/login/store/reducers/index.ts":
/*!***********************************************!*\
  !*** ./src/app/login/store/reducers/index.ts ***!
  \***********************************************/
/*! exports provided: reducers, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/login/store/reducers/login-reducer */ "./src/app/login/store/reducers/login-reducer.ts");
/* harmony import */ var app_login_store_reducers_token_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/store/reducers/token-reducer */ "./src/app/login/store/reducers/token-reducer.ts");



var reducers = {
    loginPage: app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    token: app_login_store_reducers_token_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
var getState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('AuthPage');


/***/ }),

/***/ "./src/app/login/store/reducers/login-reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/login/store/reducers/login-reducer.ts ***!
  \*******************************************************/
/*! exports provided: adapter, initialState, reducer, getLoading, getLoaded, getLoginData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginData", function() { return getLoginData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/store/actions */ "./src/app/login/store/actions/index.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: function (login) { return login.acess_token; }
});
var initialState = adapter.getInitialState({
    loading: false,
    loaded: false,
    login: null
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOGIN"]:
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOGIN_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, login: action.response });
        }
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, login: null });
        }
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOGIN_FAIL"]:
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT_FAIL"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, login: null });
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };
var getLoaded = function (state) { return state.loaded; };
var getLoginData = function (state) { return state.login; };


/***/ }),

/***/ "./src/app/login/store/reducers/token-reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/login/store/reducers/token-reducer.ts ***!
  \*******************************************************/
/*! exports provided: adapter, initialState, reducer, getLoading, getLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/store/actions */ "./src/app/login/store/actions/index.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({});
var initialState = adapter.getInitialState({
    loading: false,
    loaded: false,
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["VERIFY_TOKEN"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false });
        }
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["VERIFY_TOKEN_FAIL"]:
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["VERIFY_TOKEN_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true });
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };
var getLoaded = function (state) { return state.loaded; };


/***/ }),

/***/ "./src/app/login/store/selectors/index.ts":
/*!************************************************!*\
  !*** ./src/app/login/store/selectors/index.ts ***!
  \************************************************/
/*! exports provided: getLoginState, getLoginIds, getLoginEntities, getAllLogin, getLogin, getLoginLoading, getLoginLoaded, getTokenState, getTokenIds, getTokenEntities, getAllTokens, getTokenLoading, getTokenLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-selector */ "./src/app/login/store/selectors/login-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginState", function() { return _login_selector__WEBPACK_IMPORTED_MODULE_0__["getLoginState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginIds", function() { return _login_selector__WEBPACK_IMPORTED_MODULE_0__["getLoginIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginEntities", function() { return _login_selector__WEBPACK_IMPORTED_MODULE_0__["getLoginEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllLogin", function() { return _login_selector__WEBPACK_IMPORTED_MODULE_0__["getAllLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogin", function() { return _login_selector__WEBPACK_IMPORTED_MODULE_0__["getLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginLoading", function() { return _login_selector__WEBPACK_IMPORTED_MODULE_0__["getLoginLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginLoaded", function() { return _login_selector__WEBPACK_IMPORTED_MODULE_0__["getLoginLoaded"]; });

/* harmony import */ var _token_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-selector */ "./src/app/login/store/selectors/token-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenState", function() { return _token_selector__WEBPACK_IMPORTED_MODULE_1__["getTokenState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenIds", function() { return _token_selector__WEBPACK_IMPORTED_MODULE_1__["getTokenIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenEntities", function() { return _token_selector__WEBPACK_IMPORTED_MODULE_1__["getTokenEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllTokens", function() { return _token_selector__WEBPACK_IMPORTED_MODULE_1__["getAllTokens"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenLoading", function() { return _token_selector__WEBPACK_IMPORTED_MODULE_1__["getTokenLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTokenLoaded", function() { return _token_selector__WEBPACK_IMPORTED_MODULE_1__["getTokenLoaded"]; });





/***/ }),

/***/ "./src/app/login/store/selectors/login-selector.ts":
/*!*********************************************************!*\
  !*** ./src/app/login/store/selectors/login-selector.ts ***!
  \*********************************************************/
/*! exports provided: getLoginState, getLoginIds, getLoginEntities, getAllLogin, getLogin, getLoginLoading, getLoginLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginState", function() { return getLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginIds", function() { return getLoginIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginEntities", function() { return getLoginEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLogin", function() { return getAllLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogin", function() { return getLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginLoading", function() { return getLoginLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginLoaded", function() { return getLoginLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_login_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/login/store/reducers */ "./src/app/login/store/reducers/index.ts");
/* harmony import */ var app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/store/reducers/login-reducer */ "./src/app/login/store/reducers/login-reducer.ts");
var _a;



var getLoginState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_login_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.loginPage; });
var getLoginIds = (_a = app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(getLoginState), _a.selectIds), getLoginEntities = _a.selectEntities, getAllLogin = _a.selectAll;
var getLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLoginState, app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoginData"]);
var getLoginLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLoginState, app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getLoginLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLoginState, app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoaded"]);


/***/ }),

/***/ "./src/app/login/store/selectors/token-selector.ts":
/*!*********************************************************!*\
  !*** ./src/app/login/store/selectors/token-selector.ts ***!
  \*********************************************************/
/*! exports provided: getTokenState, getTokenIds, getTokenEntities, getAllTokens, getTokenLoading, getTokenLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenState", function() { return getTokenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenIds", function() { return getTokenIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenEntities", function() { return getTokenEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTokens", function() { return getAllTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenLoading", function() { return getTokenLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenLoaded", function() { return getTokenLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_login_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/login/store/reducers */ "./src/app/login/store/reducers/index.ts");
/* harmony import */ var app_login_store_reducers_token_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/store/reducers/token-reducer */ "./src/app/login/store/reducers/token-reducer.ts");
var _a;



var getTokenState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_login_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.token; });
var getTokenIds = (_a = app_login_store_reducers_token_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(getTokenState), _a.selectIds), getTokenEntities = _a.selectEntities, getAllTokens = _a.selectAll;
var getTokenLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTokenState, app_login_store_reducers_token_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getTokenLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTokenState, app_login_store_reducers_token_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoaded"]);


/***/ }),

/***/ "./src/app/main-components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"header\">\n    <div class=\"header-logo\">\n      <img src=\"assets/img/logo.svg\" />\n    </div>\n    <div class=\"header-settings\">\n      <ng-container *ngIf=\"(userLogged$ | async)\">\n        <span class=\"title-user\">{{(userLogged$ | async).name}}</span>\n        <div class=\"profile-image bd-{{(userLogged$ | async).theme}}\" [matMenuTriggerFor]=\"menuPerfil\">\n          <img src=\"{{(userLogged$ | async).avatar}}\">\n        </div>\n        <mat-menu #menuPerfil=\"matMenu\" xPosition=\"before\">\n          <button mat-menu-item><mat-icon>person_outline</mat-icon> Perfil</button>\n          <button mat-menu-item><mat-icon>access_time</mat-icon> Asssitir depois</button>\n          <button mat-menu-item><mat-icon>list</mat-icon> Minhas indicações</button>\n          <button mat-menu-item (click)='logout()'><mat-icon>close</mat-icon> Sair</button>\n        </mat-menu>\n      </ng-container>\n\n      <div class=\"signIn-container\" *ngIf=\"!(userLogged$ | async)\">\n        <span (click)=\"openDialog(0)\">Entrar</span> ou <span (click)=\"openDialog(1)\">Cadastrar</span>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/main-components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-components/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\nheader {\n  padding: 10px 0;\n  background: #1d1d1d; }\nheader .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 auto;\n    width: 90%; }\nheader .header img {\n      height: 34px; }\nheader .header .header-settings {\n      display: flex;\n      align-items: center; }\nheader .header .header-settings .title-user {\n        margin-right: 10px;\n        color: #F1F4F5;\n        font-size: 15px; }\nheader .header .header-settings .signIn-container {\n        font-size: 14px; }\nheader .header .header-settings .signIn-container span {\n          display: inline-block;\n          color: #F1F4F5;\n          cursor: pointer; }\nheader .header .header-settings .signIn-container span:first-child {\n            margin-right: 7px; }\nheader .header .header-settings .signIn-container span:last-child {\n            margin-left: 7px; }\nheader .header .header-settings .signIn-container span:hover {\n            color: #B0B35A; }\nheader .header .header-settings .profile-image {\n        width: 43px;\n        height: 43px;\n        border-radius: 50%;\n        position: relative;\n        overflow: hidden;\n        text-align: center;\n        border-width: 3px;\n        border-style: solid;\n        cursor: pointer;\n        transition: all .3s ease; }\nheader .header .header-settings .profile-image:hover {\n          -webkit-transform: scale(0.95, 0.95);\n                  transform: scale(0.95, 0.95); }\nheader .header .header-settings .profile-image img {\n          height: 100%;\n          margin-left: 50%;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%); }\nheader .header .header-settings mat-icon:hover {\n        cursor: pointer; }\n@media (min-width: 1460px) {\n  header .header {\n    max-width: 1460px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvbWFpbi1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTJDQSxrQkFBQTtBQXlCQSxTQUFBO0FDbEVBO0VBQ0UsZUFBZTtFQUNmLG1CREF5QixFQUFBO0FDRjNCO0lBS0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFVBQVUsRUFBQTtBQVRkO01BWU0sWUFBWSxFQUFBO0FBWmxCO01BZ0JNLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtBQWpCekI7UUFvQlEsa0JBQWtCO1FBQ2xCLGNEU2U7UUNSZixlQUFlLEVBQUE7QUF0QnZCO1FBMEJRLGVBQWUsRUFBQTtBQTFCdkI7VUE0QlUscUJBQXFCO1VBQ3JCLGNEQ2E7VUNBYixlQUFlLEVBQUE7QUE5QnpCO1lBZ0MwQixpQkFBaUIsRUFBQTtBQWhDM0M7WUFpQ3lCLGdCQUFnQixFQUFBO0FBakN6QztZQW9DWSxjRDVCUyxFQUFBO0FDUnJCO1FBMENRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHdCQUF3QixFQUFBO0FBbkRoQztVQXNEVSxvQ0FBNEI7a0JBQTVCLDRCQUE0QixFQUFBO0FBdER0QztVQTBEVSxZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLG1DQUEyQjtrQkFBM0IsMkJBQTJCLEVBQUE7QUE1RHJDO1FBa0VVLGVBQWUsRUFBQTtBQU96QjtFQUNFO0lBRUksaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGJhY2tncm91bmQ6ICMyODI4Mjg7XG4kaGVhZGVyLWJhY2tncm91bmQ6ICMxZDFkMWQ7XG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcblxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xuXG4kbG9nby15ZWxsb3c6ICNCMEIzNUE7XG4kbG9nby1ncmVlbjogIzRCQTA1MztcbiRsb2dvLXBpbms6ICNBMTRDQTA7XG4kbG9nby1yZWQ6ICNCOTRBNUM7XG4kbG9nby1ibHVlOiAjNDM2QUIxO1xuXG4kbG9nby1ncmF5OiAjNWQ1ZDVkO1xuJGxvZ28tZGFyay1ncmF5OiAjNDQ0NDQ0O1xuXG4kcmF0aW5nLTE6ICM1MDJCMkM7XG4kcmF0aW5nLTI6ICNDRjYzNjY7XG4kcmF0aW5nLTM6ICNCMTkzQjc7XG4kcmF0aW5nLTQ6ICNGNEMyN0I7XG4kcmF0aW5nLTU6ICM4NUJEQjY7XG4kcmF0aW5nLTY6ICM1RDhFQkE7XG4kcmF0aW5nLTc6ICM3RUJCNkY7XG5cbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcbiRjb2xvci1tb3ZpZTogIzAxQzA1RDtcblxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XG5cbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcbiRsaWdodC1ncmF5OiAjRTRFNEU0O1xuJGdyYXk6ICNjZGQzZDg7XG4kZGFyay1ncmF5OiAjNzU4MThiO1xuJGRhcmtlci1ncmF5OiAjNkE2QzY2O1xuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xuXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XG5cbi8qIFdJRFRIIENPTFVNTlMgKi9cbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xuJHdpZHRoLTM6IDI1JTtcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC02OiA1MCU7XG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTk6IDc1JTtcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC0xMjogMTAwJTtcblxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcbiR3aWR0aC0yLWNvbHVtbnM6IDUwJTtcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcbiR3aWR0aC01LWNvbHVtbnM6IDIwJTtcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xuJHdpZHRoLTgtY29sdW1uczogMTIuNSU7XG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XG5cbi8qIFNJWkUgKi9cbiRzaXplLWRlZmF1bHQ6IDEycHg7XG4kcmFkaXVzLWRlZmF1bHQ6IDVweDtcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBiYWNrZ3JvdW5kOiAkaGVhZGVyLWJhY2tncm91bmQ7XG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogOTAlO1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLXNldHRpbmdzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAudGl0bGUtdXNlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmF5O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5zaWduSW4tY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmF5O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tcmlnaHQ6IDdweDsgfVxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7IG1hcmdpbi1sZWZ0OiA3cHg7IH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRsb2dvLXllbGxvdztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnByb2ZpbGUtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDYwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIG1heC13aWR0aDogMTQ2MHB4O1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/main-components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var app_login_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/login/store */ "./src/app/login/store/index.ts");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, profileStore, storeLogin, dialog) {
        this.store = store;
        this.profileStore = profileStore;
        this.storeLogin = storeLogin;
        this.dialog = dialog;
        this.userLogged$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_5__["getProfile"]));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userLogged$.subscribe(function (result) {
            if (result && _this.triedLogin) {
                _this.profileStore.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_5__["LoadAllWatchLater"]());
            }
        });
    };
    HeaderComponent.prototype.openDialog = function (tabActive) {
        var _this = this;
        var dialogRef = this.dialog.open(app_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '90%',
            maxWidth: '400px',
            data: { tab: tabActive }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.triedLogin = result;
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.storeLogin.dispatch(new app_login_store__WEBPACK_IMPORTED_MODULE_6__["Logout"]());
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/main-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/main-components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-components/index.ts":
/*!******************************************!*\
  !*** ./src/app/main-components/index.ts ***!
  \******************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var app_main_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main-components/header/header.component */ "./src/app/main-components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return app_main_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });




/***/ }),

/***/ "./src/app/profile/store/actions/index.ts":
/*!************************************************!*\
  !*** ./src/app/profile/store/actions/index.ts ***!
  \************************************************/
/*! exports provided: LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL, CLEAR_PROFILE, LoadProfile, LoadProfileSuccess, LoadProfileFail, ClearProfile, LOAD_ALL_WATCH_LATER, LOAD_ALL_WATCH_LATER_SUCCESS, LOAD_ALL_WATCH_LATER_FAIL, UPDATE_WATCH_LATER, UPDATE_WATCH_LATER_SUCCESS, UPDATE_WATCH_LATER_FAIL, LoadAllWatchLater, LoadAllWatchLaterSuccess, LoadAllWatchLaterFail, UpdateWatchLater, UpdateWatchLaterSuccess, UpdateWatchLaterFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-action */ "./src/app/profile/store/actions/profile-action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_PROFILE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE_SUCCESS", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_PROFILE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE_FAIL", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_PROFILE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PROFILE", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["CLEAR_PROFILE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProfile", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["LoadProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProfileSuccess", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["LoadProfileSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProfileFail", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["LoadProfileFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearProfile", function() { return _profile_action__WEBPACK_IMPORTED_MODULE_0__["ClearProfile"]; });

/* harmony import */ var _watch_later_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch-later-action */ "./src/app/profile/store/actions/watch-later-action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_ALL_WATCH_LATER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER_SUCCESS", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_ALL_WATCH_LATER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER_FAIL", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["LOAD_ALL_WATCH_LATER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_WATCH_LATER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_SUCCESS", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_WATCH_LATER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_FAIL", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_WATCH_LATER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLater", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["LoadAllWatchLater"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLaterSuccess", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["LoadAllWatchLaterSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLaterFail", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["LoadAllWatchLaterFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLater", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["UpdateWatchLater"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterSuccess", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["UpdateWatchLaterSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterFail", function() { return _watch_later_action__WEBPACK_IMPORTED_MODULE_1__["UpdateWatchLaterFail"]; });





/***/ }),

/***/ "./src/app/profile/store/actions/profile-action.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/store/actions/profile-action.ts ***!
  \*********************************************************/
/*! exports provided: LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL, CLEAR_PROFILE, LoadProfile, LoadProfileSuccess, LoadProfileFail, ClearProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE", function() { return LOAD_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE_SUCCESS", function() { return LOAD_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE_FAIL", function() { return LOAD_PROFILE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PROFILE", function() { return CLEAR_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProfile", function() { return LoadProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProfileSuccess", function() { return LoadProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProfileFail", function() { return LoadProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearProfile", function() { return ClearProfile; });
var LOAD_PROFILE = '[Profile] Load Profile';
var LOAD_PROFILE_SUCCESS = '[Profile] Load Profile Success';
var LOAD_PROFILE_FAIL = '[Profile] Load Profile Fail';
var CLEAR_PROFILE = '[Profile] Clear Profile';
var LoadProfile = /** @class */ (function () {
    function LoadProfile() {
        this.type = LOAD_PROFILE;
    }
    return LoadProfile;
}());

var LoadProfileSuccess = /** @class */ (function () {
    function LoadProfileSuccess(response) {
        this.response = response;
        this.type = LOAD_PROFILE_SUCCESS;
    }
    return LoadProfileSuccess;
}());

var LoadProfileFail = /** @class */ (function () {
    function LoadProfileFail(payload) {
        this.payload = payload;
        this.type = LOAD_PROFILE_FAIL;
    }
    return LoadProfileFail;
}());

var ClearProfile = /** @class */ (function () {
    function ClearProfile() {
        this.type = CLEAR_PROFILE;
    }
    return ClearProfile;
}());



/***/ }),

/***/ "./src/app/profile/store/actions/watch-later-action.ts":
/*!*************************************************************!*\
  !*** ./src/app/profile/store/actions/watch-later-action.ts ***!
  \*************************************************************/
/*! exports provided: LOAD_ALL_WATCH_LATER, LOAD_ALL_WATCH_LATER_SUCCESS, LOAD_ALL_WATCH_LATER_FAIL, UPDATE_WATCH_LATER, UPDATE_WATCH_LATER_SUCCESS, UPDATE_WATCH_LATER_FAIL, LoadAllWatchLater, LoadAllWatchLaterSuccess, LoadAllWatchLaterFail, UpdateWatchLater, UpdateWatchLaterSuccess, UpdateWatchLaterFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER", function() { return LOAD_ALL_WATCH_LATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER_SUCCESS", function() { return LOAD_ALL_WATCH_LATER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER_FAIL", function() { return LOAD_ALL_WATCH_LATER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER", function() { return UPDATE_WATCH_LATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_SUCCESS", function() { return UPDATE_WATCH_LATER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_FAIL", function() { return UPDATE_WATCH_LATER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLater", function() { return LoadAllWatchLater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLaterSuccess", function() { return LoadAllWatchLaterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLaterFail", function() { return LoadAllWatchLaterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLater", function() { return UpdateWatchLater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterSuccess", function() { return UpdateWatchLaterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterFail", function() { return UpdateWatchLaterFail; });
var LOAD_ALL_WATCH_LATER = '[Watch Later] Load All Watch Later';
var LOAD_ALL_WATCH_LATER_SUCCESS = '[Watch Later] Load All Watch Later Success';
var LOAD_ALL_WATCH_LATER_FAIL = '[Watch Later] Load All Watch Later Fail';
var UPDATE_WATCH_LATER = '[Watch Later] Update Watch Later';
var UPDATE_WATCH_LATER_SUCCESS = '[Watch Later] Update Watch Later Success';
var UPDATE_WATCH_LATER_FAIL = '[Watch Later] Update Watch Later Fail';
var LoadAllWatchLater = /** @class */ (function () {
    function LoadAllWatchLater() {
        this.type = LOAD_ALL_WATCH_LATER;
    }
    return LoadAllWatchLater;
}());

var LoadAllWatchLaterSuccess = /** @class */ (function () {
    function LoadAllWatchLaterSuccess(response) {
        this.response = response;
        this.type = LOAD_ALL_WATCH_LATER_SUCCESS;
    }
    return LoadAllWatchLaterSuccess;
}());

var LoadAllWatchLaterFail = /** @class */ (function () {
    function LoadAllWatchLaterFail(payload) {
        this.payload = payload;
        this.type = LOAD_ALL_WATCH_LATER_FAIL;
    }
    return LoadAllWatchLaterFail;
}());

var UpdateWatchLater = /** @class */ (function () {
    function UpdateWatchLater(movieId, isActive) {
        this.movieId = movieId;
        this.isActive = isActive;
        this.type = UPDATE_WATCH_LATER;
    }
    return UpdateWatchLater;
}());

var UpdateWatchLaterSuccess = /** @class */ (function () {
    function UpdateWatchLaterSuccess(response) {
        this.response = response;
        this.type = UPDATE_WATCH_LATER_SUCCESS;
    }
    return UpdateWatchLaterSuccess;
}());

var UpdateWatchLaterFail = /** @class */ (function () {
    function UpdateWatchLaterFail(payload) {
        this.payload = payload;
        this.type = UPDATE_WATCH_LATER_FAIL;
    }
    return UpdateWatchLaterFail;
}());



/***/ }),

/***/ "./src/app/profile/store/effects/index.ts":
/*!************************************************!*\
  !*** ./src/app/profile/store/effects/index.ts ***!
  \************************************************/
/*! exports provided: effects, ProfileEffects, WatchLaterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _profile_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-effect */ "./src/app/profile/store/effects/profile-effect.ts");
/* harmony import */ var _watch_later_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch-later-effect */ "./src/app/profile/store/effects/watch-later-effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return _profile_effect__WEBPACK_IMPORTED_MODULE_0__["ProfileEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchLaterEffects", function() { return _watch_later_effect__WEBPACK_IMPORTED_MODULE_1__["WatchLaterEffects"]; });



var effects = [_profile_effect__WEBPACK_IMPORTED_MODULE_0__["ProfileEffects"], _watch_later_effect__WEBPACK_IMPORTED_MODULE_1__["WatchLaterEffects"]];




/***/ }),

/***/ "./src/app/profile/store/effects/profile-effect.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/store/effects/profile-effect.ts ***!
  \*********************************************************/
/*! exports provided: ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return ProfileEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_profile_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/profile/store/actions */ "./src/app/profile/store/actions/index.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/profile.service */ "./src/app/services/profile.service.ts");








var ProfileEffects = /** @class */ (function () {
    function ProfileEffects(actions$, service, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.toastr = toastr;
        this.loadProfile$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_6__["LOAD_PROFILE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.getProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_profile_store_actions__WEBPACK_IMPORTED_MODULE_6__["LoadProfileSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_profile_store_actions__WEBPACK_IMPORTED_MODULE_6__["LoadProfileFail"](error)); }));
        }));
        this.loadProfileFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_6__["LOAD_PROFILE_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Erro ao carregar seus dados.', '', { enableHtml: true });
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProfileEffects.prototype, "loadProfile$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProfileEffects.prototype, "loadProfileFail$", void 0);
    ProfileEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ProfileEffects);
    return ProfileEffects;
}());



/***/ }),

/***/ "./src/app/profile/store/effects/watch-later-effect.ts":
/*!*************************************************************!*\
  !*** ./src/app/profile/store/effects/watch-later-effect.ts ***!
  \*************************************************************/
/*! exports provided: WatchLaterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchLaterEffects", function() { return WatchLaterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_watch_later_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/watch-later.service */ "./src/app/services/watch-later.service.ts");
/* harmony import */ var app_home_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/home/store */ "./src/app/home/store/index.ts");
/* harmony import */ var app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/profile/store/actions */ "./src/app/profile/store/actions/index.ts");











var WatchLaterEffects = /** @class */ (function () {
    function WatchLaterEffects(store, actions$, service, serviceWatchLater, toastr) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.service = service;
        this.serviceWatchLater = serviceWatchLater;
        this.toastr = toastr;
        this.loadAllWatchLater$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOAD_ALL_WATCH_LATER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.serviceWatchLater.getAllWatchLater().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["LoadAllWatchLaterSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["LoadAllWatchLaterFail"](error)); }));
        }));
        this.loadAllWatchLaterFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOAD_ALL_WATCH_LATER_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Erro ao carregar sua lista de Assistir depois.', '', { enableHtml: true });
        }));
        this.loadAllWatchLaterSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOAD_ALL_WATCH_LATER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_9__["UpdateAllWatchLaterMovie"](action.response.movie_ids));
        }));
        this.updateWatchLater$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["UPDATE_WATCH_LATER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.updateWatchLater(params.movieId, params.isActive).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateWatchLaterSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateWatchLaterFail"](error)); }));
        }));
        this.updateWatchLaterFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["UPDATE_WATCH_LATER_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Erro ao adicionar em sua lista de Assistir depois.', '', { enableHtml: true });
        }));
        this.updateWatchLaterSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_profile_store_actions__WEBPACK_IMPORTED_MODULE_10__["UPDATE_WATCH_LATER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_9__["UpdateWatchLaterMovie"](action.response.movie.id));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], WatchLaterEffects.prototype, "loadAllWatchLater$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], WatchLaterEffects.prototype, "loadAllWatchLaterFail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], WatchLaterEffects.prototype, "loadAllWatchLaterSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], WatchLaterEffects.prototype, "updateWatchLater$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], WatchLaterEffects.prototype, "updateWatchLaterFail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], WatchLaterEffects.prototype, "updateWatchLaterSuccess$", void 0);
    WatchLaterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
            _services_watch_later_service__WEBPACK_IMPORTED_MODULE_8__["WatchLaterService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], WatchLaterEffects);
    return WatchLaterEffects;
}());



/***/ }),

/***/ "./src/app/profile/store/index.ts":
/*!****************************************!*\
  !*** ./src/app/profile/store/index.ts ***!
  \****************************************/
/*! exports provided: effects, reducers, getState, LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL, CLEAR_PROFILE, LoadProfile, LoadProfileSuccess, LoadProfileFail, ClearProfile, LOAD_ALL_WATCH_LATER, LOAD_ALL_WATCH_LATER_SUCCESS, LOAD_ALL_WATCH_LATER_FAIL, UPDATE_WATCH_LATER, UPDATE_WATCH_LATER_SUCCESS, UPDATE_WATCH_LATER_FAIL, LoadAllWatchLater, LoadAllWatchLaterSuccess, LoadAllWatchLaterFail, UpdateWatchLater, UpdateWatchLaterSuccess, UpdateWatchLaterFail, ProfileEffects, WatchLaterEffects, getProfileState, getProfile, getLoading, getLoaded, getWatchLaterState, getWatchLaterLoading, getWatchLaterLoaded, getWatchLaterId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/profile/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_PROFILE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_PROFILE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROFILE_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_PROFILE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PROFILE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_PROFILE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProfile", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProfileSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProfileSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProfileFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProfileFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearProfile", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ClearProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_ALL_WATCH_LATER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_ALL_WATCH_LATER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_WATCH_LATER_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_ALL_WATCH_LATER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_WATCH_LATER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_WATCH_LATER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WATCH_LATER_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_WATCH_LATER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLater", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadAllWatchLater"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLaterSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadAllWatchLaterSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAllWatchLaterFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadAllWatchLaterFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLater", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateWatchLater"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateWatchLaterSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateWatchLaterFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateWatchLaterFail"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/profile/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["ProfileEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WatchLaterEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["WatchLaterEffects"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/profile/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["getState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/profile/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfileState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProfileState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getWatchLaterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getWatchLaterLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getWatchLaterLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterId", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getWatchLaterId"]; });







/***/ }),

/***/ "./src/app/profile/store/reducers/index.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/store/reducers/index.ts ***!
  \*************************************************/
/*! exports provided: reducers, getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/profile/store/reducers/profile-reducer */ "./src/app/profile/store/reducers/profile-reducer.ts");
/* harmony import */ var app_profile_store_reducers_watch_later_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/profile/store/reducers/watch-later-reducer */ "./src/app/profile/store/reducers/watch-later-reducer.ts");



var reducers = {
    profile: app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    watchLater: app_profile_store_reducers_watch_later_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
var getState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('profile');


/***/ }),

/***/ "./src/app/profile/store/reducers/profile-reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/profile/store/reducers/profile-reducer.ts ***!
  \***********************************************************/
/*! exports provided: adapter, initialState, reducer, getLoading, getLoaded, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/profile/store/actions */ "./src/app/profile/store/actions/index.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: function (login) { return login.acess_token; }
});
var initialState = adapter.getInitialState({
    loading: false,
    loaded: false,
    profile: null
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_PROFILE"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        case app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_PROFILE_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, profile: action.response });
        }
        case app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_PROFILE_FAIL"]:
        case app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__["CLEAR_PROFILE"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, profile: null });
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };
var getLoaded = function (state) { return state.loaded; };
var getProfile = function (state) { return state.profile; };


/***/ }),

/***/ "./src/app/profile/store/reducers/watch-later-reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/profile/store/reducers/watch-later-reducer.ts ***!
  \***************************************************************/
/*! exports provided: adapter, initialState, reducer, getLoading, getLoaded, getMovieId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieId", function() { return getMovieId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/profile/store/actions */ "./src/app/profile/store/actions/index.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({});
var initialState = adapter.getInitialState({
    loading: false,
    loaded: false,
    movieId: null
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_WATCH_LATER"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, movieId: action.movieId });
        }
        case app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_WATCH_LATER_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true });
        }
        case app_profile_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_WATCH_LATER_FAIL"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, movieId: null });
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };
var getLoaded = function (state) { return state.loaded; };
var getMovieId = function (state) { return state.movieId; };


/***/ }),

/***/ "./src/app/profile/store/selectors/index.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/store/selectors/index.ts ***!
  \**************************************************/
/*! exports provided: getProfileState, getProfile, getLoading, getLoaded, getWatchLaterState, getWatchLaterLoading, getWatchLaterLoaded, getWatchLaterId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-selector */ "./src/app/profile/store/selectors/profile-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfileState", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getProfileState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getLoaded"]; });

/* harmony import */ var _watch_later_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch-later-selector */ "./src/app/profile/store/selectors/watch-later-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterState", function() { return _watch_later_selector__WEBPACK_IMPORTED_MODULE_1__["getWatchLaterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterLoading", function() { return _watch_later_selector__WEBPACK_IMPORTED_MODULE_1__["getWatchLaterLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterLoaded", function() { return _watch_later_selector__WEBPACK_IMPORTED_MODULE_1__["getWatchLaterLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterId", function() { return _watch_later_selector__WEBPACK_IMPORTED_MODULE_1__["getWatchLaterId"]; });





/***/ }),

/***/ "./src/app/profile/store/selectors/profile-selector.ts":
/*!*************************************************************!*\
  !*** ./src/app/profile/store/selectors/profile-selector.ts ***!
  \*************************************************************/
/*! exports provided: getProfileState, getProfile, getLoading, getLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileState", function() { return getProfileState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_profile_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/profile/store/reducers */ "./src/app/profile/store/reducers/index.ts");
/* harmony import */ var app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/profile/store/reducers/profile-reducer */ "./src/app/profile/store/reducers/profile-reducer.ts");



var getProfileState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_profile_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.profile; });
var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfileState, app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__["getProfile"]);
var getLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfileState, app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfileState, app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);


/***/ }),

/***/ "./src/app/profile/store/selectors/watch-later-selector.ts":
/*!*****************************************************************!*\
  !*** ./src/app/profile/store/selectors/watch-later-selector.ts ***!
  \*****************************************************************/
/*! exports provided: getWatchLaterState, getWatchLaterLoading, getWatchLaterLoaded, getWatchLaterId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterState", function() { return getWatchLaterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterLoading", function() { return getWatchLaterLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterLoaded", function() { return getWatchLaterLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWatchLaterId", function() { return getWatchLaterId; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_profile_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/profile/store/reducers */ "./src/app/profile/store/reducers/index.ts");
/* harmony import */ var app_profile_store_reducers_watch_later_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/profile/store/reducers/watch-later-reducer */ "./src/app/profile/store/reducers/watch-later-reducer.ts");



var getWatchLaterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_profile_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.watchLater; });
var getWatchLaterLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getWatchLaterState, app_profile_store_reducers_watch_later_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getWatchLaterLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getWatchLaterState, app_profile_store_reducers_watch_later_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getWatchLaterId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getWatchLaterState, app_profile_store_reducers_watch_later_reducer__WEBPACK_IMPORTED_MODULE_2__["getMovieId"]);


/***/ }),

/***/ "./src/app/reducer/index.ts":
/*!**********************************!*\
  !*** ./src/app/reducer/index.ts ***!
  \**********************************/
/*! exports provided: reducers, getRouterState, CustomSerializer, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__);




var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
};
var getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params;
        return { url: url, queryParams: queryParams, params: params };
    };
    return CustomSerializer;
}());

var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
    ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__["storeFreeze"]]
    : [];


/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");




// import { baseLocal } from 'app/constants';
var HomeService = /** @class */ (function () {
    function HomeService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    HomeService.prototype.getAllMoviesAndSeries = function (filters) {
        var hasToken = this.tokenService.getToken();
        var search = filters.search ? '&q=' + filters.search : '';
        var filter = '&filter=' + btoa(JSON.stringify({ ratings: filters.ratings, categories: filters.categories }));
        if (hasToken) {
            var header = this.tokenService.getHeader();
            return this.http.get('https://api.assisteai.com.br/movies?page=' + filters.currentPage + filter + search, { headers: header });
        }
        else {
            return this.http.get('https://api.assisteai.com.br/movies?page=' + filters.currentPage + filter + search);
        }
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/indicate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/indicate.service.ts ***!
  \**********************************************/
/*! exports provided: IndicateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicateService", function() { return IndicateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");




// import { baseLocal } from 'app/constants';
var IndicateService = /** @class */ (function () {
    function IndicateService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    IndicateService.prototype.sendIndicate = function (form) {
        var token = this.tokenService.getHeader();
        return this.http.post('https://api.assisteai.com.br/movies', form, { headers: token });
    };
    IndicateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], IndicateService);
    return IndicateService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");




// import { baseLocal } from 'app/constants';
var LoginService = /** @class */ (function () {
    function LoginService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    LoginService.prototype.sendLogin = function (data) {
        if (data.type === 'facebook') {
            return this.http.post('https://api.assisteai.com.br/auth/login/facebook', { token: data.token });
        }
    };
    LoginService.prototype.sendLogout = function () {
        var token = this.tokenService.getHeader();
        return this.http.get('https://api.assisteai.com.br/auth/logout', { headers: token });
    };
    LoginService.prototype.refreshToken = function () {
        var token = this.tokenService.getHeader();
        return this.http.get('https://api.assisteai.com.br/auth/refresh', { headers: token });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






// import { baseLocal } from 'app/constants';
var ProfileService = /** @class */ (function () {
    function ProfileService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    ProfileService.prototype.getProfile = function () {
        var token = this.tokenService.getHeader();
        return this.http.get('https://api.assisteai.com.br/auth/me', { headers: token });
    };
    ProfileService.prototype.updateWatchLater = function (movieId, isActive) {
        var token = this.tokenService.getHeader();
        if (isActive) {
            return this.http.delete('https://api.assisteai.com.br/watch-later/' + movieId, { headers: token }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
                var newResponse = {
                    success: response.success,
                    movie: { id: movieId }
                };
                return newResponse;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
            }));
        }
        else {
            return this.http.post('https://api.assisteai.com.br/watch-later', { movie_id: movieId }, { headers: token });
        }
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TOKEN_KEY = 'authToken';
var EXPIRATION_DATE = 'expirationDate';
var AUTH_KEY = 'authType';
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.hasToken = function () {
        return !!this.getToken();
    };
    TokenService.prototype.setToken = function (data) {
        localStorage.setItem(TOKEN_KEY, data.access_token);
        this.setAuthType(data.token_type);
        this.setExpirationDate(data.expires_in);
    };
    TokenService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_KEY);
    };
    TokenService.prototype.getHeader = function () {
        var typeAuth = this.getAuthType();
        var token = this.getToken();
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: typeAuth + ' ' + token
        });
        return header;
    };
    TokenService.prototype.setAuthType = function (authType) {
        localStorage.setItem(AUTH_KEY, authType);
    };
    TokenService.prototype.getAuthType = function () {
        return localStorage.getItem(AUTH_KEY);
    };
    TokenService.prototype.setExpirationDate = function (expiration) {
        var today = new Date();
        var expirationDate = new Date(today.setSeconds(expiration));
        localStorage.setItem(EXPIRATION_DATE, String(expirationDate));
    };
    TokenService.prototype.validationExpirationDate = function () {
        var now = new Date();
        var expirationDate = new Date(localStorage.getItem(EXPIRATION_DATE));
        return expirationDate > now ? true : false;
    };
    TokenService.prototype.removeStorage = function () {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(EXPIRATION_DATE);
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/services/watch-later.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/watch-later.service.ts ***!
  \*************************************************/
/*! exports provided: WatchLaterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchLaterService", function() { return WatchLaterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");




// import { baseLocal } from 'app/constants';
var WatchLaterService = /** @class */ (function () {
    function WatchLaterService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    WatchLaterService.prototype.getAllWatchLater = function () {
        var header = this.tokenService.getHeader();
        return this.http.get('https://api.assisteai.com.br/watch-later', { headers: header });
    };
    WatchLaterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], WatchLaterService);
    return WatchLaterService;
}());



/***/ }),

/***/ "./src/app/shared/components/empty/empty.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/empty/empty.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty-msg\">\n  <div class=\"loading\">\n    <span class=\"loading-bar bg-dark-gray\"></span>\n    <span class=\"loading-bar bg-gray\"></span>\n    <span class=\"loading-bar bg-dark-gray\"></span>\n    <span class=\"loading-bar bg-gray\"></span>\n    <span class=\"loading-bar bg-dark-gray\"></span>\n  </div>\n\n  <span>{{msg}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/empty/empty.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/empty/empty.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-msg {\n  font-size: 17px;\n  margin: 50px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .empty-msg .loading {\n    position: relative;\n    z-index: 5;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 10px; }\n  .empty-msg .loading .loading-bar {\n      display: inline-block;\n      position: relative;\n      width: 8px;\n      height: 70px;\n      margin: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZW1wdHkvZW1wdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0VBTnJCO0lBU0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBYnZCO01BZ0JNLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFlBQVk7TUFDWixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lbXB0eS9lbXB0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1tc2cge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogNTBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIC5sb2FkaW5nLWJhciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/empty/empty.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/empty/empty.component.ts ***!
  \************************************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
    }
    EmptyComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmptyComponent.prototype, "msg", void 0);
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty',
            template: __webpack_require__(/*! ./empty.component.html */ "./src/app/shared/components/empty/empty.component.html"),
            styles: [__webpack_require__(/*! ./empty.component.scss */ "./src/app/shared/components/empty/empty.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: EmptyComponent, LoadingComponent, SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/shared/components/empty/empty.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return _empty_empty_component__WEBPACK_IMPORTED_MODULE_0__["EmptyComponent"]; });

/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"]; });

/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/shared/components/sidenav/sidenav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]; });






/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <span class=\"loading-bar bg-yellow\"></span>\n  <span class=\"loading-bar bg-green\"></span>\n  <span class=\"loading-bar bg-pink\"></span>\n  <span class=\"loading-bar bg-red\"></span>\n  <span class=\"loading-bar bg-blue\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  text-align: center; }\n  .loading .loading-bar {\n    display: inline-block;\n    position: relative;\n    width: 8px;\n    height: 70px;\n    margin: 0 5px;\n    -webkit-animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n            animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite; }\n  .loading .loading-bar:nth-child(1) {\n      -webkit-animation-delay: -0.48s;\n              animation-delay: -0.48s; }\n  .loading .loading-bar:nth-child(2) {\n      -webkit-animation-delay: -0.36s;\n              animation-delay: -0.36s; }\n  .loading .loading-bar:nth-child(3) {\n      -webkit-animation-delay: -0.24s;\n              animation-delay: -0.24s; }\n  .loading .loading-bar:nth-child(4) {\n      -webkit-animation-delay: -0.12s;\n              animation-delay: -0.12s; }\n  .loading .loading-bar:nth-child(5) {\n      -webkit-animation-delay: -0s;\n              animation-delay: -0s; }\n  @-webkit-keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n  @keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFKcEI7SUFPSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLDRFQUFvRTtZQUFwRSxvRUFBb0UsRUFBQTtFQVp4RTtNQWNxQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFkNUM7TUFlcUIsK0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO0VBZjVDO01BZ0JxQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFoQjVDO01BaUJxQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFqQjVDO01Ba0JxQiw0QkFBb0I7Y0FBcEIsb0JBQW9CLEVBQUE7RUFJekM7RUFDRTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQSxFQUFBO0VBUnpCO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5sb2FkaW5nLWJhciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWFzc2lzdGUtYWkgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xuXG4gICAgJjpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjQ4czsgfVxuICAgICY6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC4zNnM7IH1cbiAgICAmOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMjRzOyB9XG4gICAgJjpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjEyczsgfVxuICAgICY6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMHM7IH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxkcy1hc3Npc3RlLWFpIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/components/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-overlay\" (click)=\"closeNav()\" [ngClass]=\"{'active': isOpen}\"></div>\n<div class=\"sidenav\" [ngClass]=\"{'active': isOpen}\">\n  <div class=\"container\">\n    <div class=\"header\">\n      <h2>Filtros</h2>\n      <button class=\"closebtn color-{{(userLogged$ | async)?.theme}}\" (click)=\"closeNav()\"><mat-icon>close</mat-icon></button>\n    </div>\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.sidenav-overlay {\n  position: fixed;\n  z-index: 98;\n  width: 0;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7); }\n.sidenav-overlay.active {\n    width: 100%; }\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #1d1d1d;\n  overflow-x: hidden;\n  transition: 0.5s; }\n.sidenav.active {\n    width: 300px; }\n.sidenav .container {\n    padding: 25px; }\n.sidenav .container .header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-bottom: 20px;\n      margin-bottom: 20px;\n      border-bottom: 1px solid #333333;\n      color: #E6EAEC; }\n.sidenav .container .header h2 {\n        margin: 0; }\n.sidenav .container .header .closebtn {\n        border: 0;\n        background: none;\n        color: #E6EAEC;\n        cursor: pointer;\n        outline: none; }\n.sidenav .container .header .closebtn.color-YELLOW:hover {\n          color: #B0B35A; }\n.sidenav .container .header .closebtn.color-GREEN :hover {\n          color: #4BA053; }\n.sidenav .container .header .closebtn.color-PINK:hover {\n          color: #A14CA0; }\n.sidenav .container .header .closebtn.color-RED:hover {\n          color: #B94A5C; }\n.sidenav .container .header .closebtn.color-BLUE:hover {\n          color: #436AB1; }\n.sidenav .container .button-container {\n      display: flex;\n      justify-content: space-between; }\n.sidenav .container .button-container button {\n        padding: 0 16px; }\n@media (max-width: 480px) {\n  .sidenav.active {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUEyQ0Esa0JBQUE7QUF5QkEsU0FBQTtBQ2xFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLDhCQUEyQixFQUFBO0FBUDdCO0lBU2UsV0FBVyxFQUFBO0FBRzFCO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AseUJEa0IyQjtFQ2pCM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBVGxCO0lBV2EsWUFBWSxFQUFBO0FBWHpCO0lBY0ksYUFBYSxFQUFBO0FBZGpCO01BaUJNLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsZ0NERWdCO01DRGhCLGNESmdCLEVBQUE7QUNuQnRCO1FBeUJXLFNBQVMsRUFBQTtBQXpCcEI7UUE0QlEsU0FBUztRQUNULGdCQUFnQjtRQUNoQixjRFhjO1FDWWQsZUFBZTtRQUNmLGFBQWEsRUFBQTtBQWhDckI7VUFrQytCLGNEdENWLEVBQUE7QUNJckI7VUFtQzhCLGNEdENWLEVBQUE7QUNHcEI7VUFvQzZCLGNEdENWLEVBQUE7QUNFbkI7VUFxQzRCLGNEdENWLEVBQUE7QUNDbEI7VUFzQzZCLGNEdENWLEVBQUE7QUNBbkI7TUEyQ00sYUFBYTtNQUNiLDhCQUE4QixFQUFBO0FBNUNwQztRQThDZSxlQUFlLEVBQUE7QUFLOUI7RUFDRTtJQUNhLFdBQVcsRUFBQSxFQUFJIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kYmFja2dyb3VuZDogIzI4MjgyODtcbiRoZWFkZXItYmFja2dyb3VuZDogIzFkMWQxZDtcbiRiYWNrZ3JvdW5kLWZhY2Vib29rOiAjNDI2N0IyO1xuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xuXG4kYnV0dG9uLXByaW1hcnk6ICMyOUJGNDQ7XG5cbiRsb2dvLXllbGxvdzogI0IwQjM1QTtcbiRsb2dvLWdyZWVuOiAjNEJBMDUzO1xuJGxvZ28tcGluazogI0ExNENBMDtcbiRsb2dvLXJlZDogI0I5NEE1QztcbiRsb2dvLWJsdWU6ICM0MzZBQjE7XG5cbiRsb2dvLWdyYXk6ICM1ZDVkNWQ7XG4kbG9nby1kYXJrLWdyYXk6ICM0NDQ0NDQ7XG5cbiRyYXRpbmctMTogIzUwMkIyQztcbiRyYXRpbmctMjogI0NGNjM2NjtcbiRyYXRpbmctMzogI0IxOTNCNztcbiRyYXRpbmctNDogI0Y0QzI3QjtcbiRyYXRpbmctNTogIzg1QkRCNjtcbiRyYXRpbmctNjogIzVEOEVCQTtcbiRyYXRpbmctNzogIzdFQkI2RjtcblxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xuXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcblxuJGxpZ2h0ZXN0LWdyYXk6ICNGMUY0RjU7XG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XG4kZ3JheTogI2NkZDNkODtcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XG4kZGFya2VzdC1ncmF5OiAjMzMzMzMzO1xuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XG5cbiRmb250LWRlZmF1bHQ6ICRkYXJrZXItZ3JheTtcblxuLyogV0lEVEggQ09MVU1OUyAqL1xuJHdpZHRoLTE6IDguMzMzMzMzMzMzJTtcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XG4kd2lkdGgtMzogMjUlO1xuJHdpZHRoLTQ6IDMzLjMzMzMzMzMzJTtcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTY6IDUwJTtcbiR3aWR0aC03OiA1OC4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtOTogNzUlO1xuJHdpZHRoLTEwOiA4My4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTEyOiAxMDAlO1xuXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xuJHdpZHRoLTItY29sdW1uczogNTAlO1xuJHdpZHRoLTMtY29sdW1uczogMzMuMzMzMzMlO1xuJHdpZHRoLTQtY29sdW1uczogMjUlO1xuJHdpZHRoLTUtY29sdW1uczogMjAlO1xuJHdpZHRoLTYtY29sdW1uczogMTYuNjY2NjY2NjY3JTtcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcbiR3aWR0aC05LWNvbHVtbnM6IDExLjElO1xuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcblxuLyogU0laRSAqL1xuJHNpemUtZGVmYXVsdDogMTJweDtcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xuIiwiQGltcG9ydCAnYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4uc2lkZW5hdi1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5ODtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuXG4gICAgJi5hY3RpdmUgeyB3aWR0aDogMTAwJTsgfVxufVxuXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3QtZ3JheS1ib3JkZXI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcblxuICAmLmFjdGl2ZSB7IHdpZHRoOiAzMDBweDsgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXJrZXN0LWdyYXk7XG4gICAgICBjb2xvcjogJGxpZ2h0ZXItZ3JheTtcblxuICAgICAgaDIgeyBtYXJnaW46IDA7IH1cblxuICAgICAgLmNsb3NlYnRuIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogJGxpZ2h0ZXItZ3JheTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgICYuY29sb3ItWUVMTE9XOmhvdmVyIHsgY29sb3I6ICRsb2dvLXllbGxvdzsgfVxuICAgICAgICAmLmNvbG9yLUdSRUVOIDpob3ZlcnsgY29sb3I6ICRsb2dvLWdyZWVuOyB9XG4gICAgICAgICYuY29sb3ItUElOSzpob3ZlciB7IGNvbG9yOiAkbG9nby1waW5rOyB9XG4gICAgICAgICYuY29sb3ItUkVEOmhvdmVyIHsgY29sb3I6ICRsb2dvLXJlZDsgfVxuICAgICAgICAmLmNvbG9yLUJMVUU6aG92ZXIgeyBjb2xvcjogJGxvZ28tYmx1ZTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIGJ1dHRvbiB7IHBhZGRpbmc6IDAgMTZweDsgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgICYuYWN0aXZlIHsgd2lkdGg6IDEwMCU7IH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");




var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(store) {
        this.store = store;
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userLogged$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_3__["getProfile"]));
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.closeNav = function () {
        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SidenavComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "isOpenChange", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/shared/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/shared/components/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/shared/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: getClassPoster, getClassCategory, getClassCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassPoster", function() { return getClassPoster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassCategory", function() { return getClassCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassCheckbox", function() { return getClassCheckbox; });
function getClassPoster(averageRating) {
    var ratingClass;
    switch (averageRating) {
        case 'STAY_AWAY':
            ratingClass = 'rating-1';
            break;
        case 'VERY_BAD':
            ratingClass = 'rating-2';
            break;
        case 'BAD':
            ratingClass = 'rating-3';
            break;
        case 'COOL':
            ratingClass = 'rating-4';
            break;
        case 'GOOD':
            ratingClass = 'rating-5';
            break;
        case 'VERY_GOOD':
            ratingClass = 'rating-6';
            break;
        case 'UNMISSABLE':
            ratingClass = 'rating-7';
            break;
        default:
            break;
    }
    return ratingClass;
}
function getClassCategory(category) {
    var categoryClass;
    switch (category) {
        case 'MOVIE':
            categoryClass = 'category-movie';
            break;
        case 'SERIE':
            categoryClass = 'category-serie';
            break;
        default:
            break;
    }
    return categoryClass;
}
function getClassCheckbox(option) {
    var ratingClass;
    switch (option) {
        case 'STAY_AWAY':
            ratingClass = 'checkbox-1';
            break;
        case 'VERY_BAD':
            ratingClass = 'checkbox-2';
            break;
        case 'BAD':
            ratingClass = 'checkbox-3';
            break;
        case 'COOL':
            ratingClass = 'checkbox-4';
            break;
        case 'GOOD':
            ratingClass = 'checkbox-5';
            break;
        case 'VERY_GOOD':
            ratingClass = 'checkbox-6';
            break;
        case 'UNMISSABLE':
            ratingClass = 'checkbox-7';
            break;
        case 'MOVIE':
            ratingClass = 'checkbox-movie';
            break;
        case 'SERIE':
            ratingClass = 'checkbox-serie';
            break;
        default:
            break;
    }
    return ratingClass;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/martinelli/Projects/my-projects/assisteai-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map