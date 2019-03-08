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

module.exports = "<app-header id=\"header\"></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n<app-loading class=\"global-loading\"\r\n*ngIf=\"(loadingProfile$ | async) || (loadingLogin$ | async) || (loadingToken$ | async)\"></app-loading>\r\n\r\n"

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
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");































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
                _shared_components__WEBPACK_IMPORTED_MODULE_29__["LoadingComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_29__["EmptyComponent"],
                app_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"]
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
            entryComponents: [app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_23__["IndicateComponent"], app_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"]],
            providers: [_services_home_service__WEBPACK_IMPORTED_MODULE_24__["HomeService"], _services_login_service__WEBPACK_IMPORTED_MODULE_25__["LoginService"], _servicesindicate_service__WEBPACK_IMPORTED_MODULE_28__["IndicateService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_26__["ProfileService"], _services_token_service__WEBPACK_IMPORTED_MODULE_27__["TokenService"]],
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

module.exports = "<main class=\"main\">\r\n  <section class=\"filter-container flex-column\">\r\n    <div class=\"flex-row filter-icons col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-3 col-sm-12 margin-right-2\">\r\n        <mat-label>Busca</mat-label>\r\n        <input matInput autocomplete=\"off\" (keyup)=\"updateList()\" [(ngModel)]=\"filters.search\">\r\n        <mat-icon matPrefix>search</mat-icon>\r\n      </mat-form-field>\r\n      <div class=\"flex-row col-md-9 col-sm-12 filters\">\r\n        <div class=\"icon-filters-container flex-row col-md-6\">\r\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Todos\" [ngClass]=\"{'active': filters.exibition === 'all'}\" (click)=\"setExibition('all')\">public</mat-icon>\r\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Seguindo\" [ngClass]=\"{'active': filters.exibition === 'group'}\" (click)=\"setExibition('group')\">group</mat-icon>\r\n          <span class=\"divider margin-right-1\"></span>\r\n          <mat-icon class=\"icon filter-icon\" matTooltip=\"Filtro\" [ngClass]=\"{'active': filterOpened}\" (click)=\"filterOpened = !filterOpened\">filter_list</mat-icon>\r\n        </div>\r\n        <button mat-button class=\"btn-default\"  matTooltip=\"Indicar\" (click)=\"openDialog()\">\r\n            <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"margin-top-2\" *ngIf=\"filterOpened\">\r\n      <div class=\"flex-row filter-options\">\r\n        <div class=\"form-group margin-right-2\">\r\n            <mat-chip-list>\r\n              <mat-chip *ngFor=\"let rating of ratingArray\" class=\"chip-default {{rating}}\" [ngClass]=\"{'active': isRatingActive(rating)}\" (click)='updateRatingFilter(rating)'>\r\n                {{rantingEnum[rating]}}\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n        </div>\r\n        <span class=\"divider margin-right-2\"></span>\r\n        <div class=\"form-group\">\r\n            <mat-chip-list>\r\n              <mat-chip *ngFor=\"let category of categoryArray\" class=\"chip-default {{category}}\" [ngClass]=\"{'active': isCategoryActive(category)}\" (click)='updateCategoryFilter(category)'>\r\n                {{categoryEnum[category]}}\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"cards-container flex-row flex-wrap\" [@listStagger]='moviesList?.length'>\r\n    <div class=\"card {{utils.getClassPoster(movie.average_rating)}}\" *ngFor=\"let movie of moviesList\">\r\n      <div class=\"poster-container\">\r\n        <div class=\"img-poster\" [ngStyle]=\"{'background-image': 'url(' + movie.poster_path + ')'}\"></div>\r\n        <div class=\"overlay\">\r\n          <div class=\"poster-detail flex-column\">\r\n            <h3 class=\"poster-title\">{{movie.original_title}} ({{movie.year}})</h3>\r\n\r\n            <span class=\"poster-chip {{utils.getClassCategory(movie.category)}}\">{{categoryEnum[movie.category]}}</span>\r\n\r\n            <div class=\"rating-container flex-column\">\r\n              <span>Avaliação Média</span>\r\n              <span class=\"poster-chip {{utils.getClassPoster(movie.average_rating)}}\">{{rantingEnum[movie.average_rating]}}</span>\r\n\r\n              <span>Última avaliação</span>\r\n              <span class=\"poster-chip {{utils.getClassPoster(movie.last_rating)}}\">{{rantingEnum[movie.last_rating]}}</span>\r\n            </div>\r\n\r\n            <div class=\"poster-actions flex-row\">\r\n                <a [routerLink]=\"\" matTooltip=\"Assistir depois\" class=\"watch-later\"><mat-icon>access_time</mat-icon></a>\r\n                <a [routerLink]=\"\" (click)=\"openDialog(movie.imdb_link)\" matTooltip=\"Indicar {{categoryEnum[movie.category]}}\" class=\"indicate-now\"><mat-icon>playlist_add</mat-icon></a>\r\n                <a href=\"#\" matTooltip=\"Mais informações\" class=\"more-details\"><mat-icon>arrow_forward</mat-icon></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-loading [hidden]=\"isLoaded && (moviesLoaded$ | async)\"></app-loading>\r\n    <button class=\"scroll-btn\" [ngClass]=\"{'active': scollTopActive}\" (click)=\"scollTop()\"><mat-icon>arrow_upward</mat-icon></button>\r\n  </section>\r\n  <app-empty *ngIf=\"moviesList && !moviesList.length && isLoaded && (moviesLoaded$ | async)\" [msg]=\"msg\"></app-empty>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.main .filter-container {\n  position: relative;\n  margin-bottom: 10px; }\n.main .filter-container .filter-icons {\n    align-items: center; }\n.main .filter-container .filter-icons .filters {\n      align-items: center;\n      justify-content: space-between; }\n.main .filter-container .filter-icons .filters .icon-filters-container {\n        align-items: center; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon:hover, .main .filter-container .filter-icons .filters .icon-filters-container .icon.active {\n          color: #005DD6; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon:hover {\n          color: #ffffff; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon.active {\n          color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active {\n    color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active.UNMISSABLE {\n      background: #7EBB6F; }\n.main .filter-container .filter-options .chip-default.active.VERY_GOOD {\n      background: #5D8EBA; }\n.main .filter-container .filter-options .chip-default.active.GOOD {\n      background: #85BDB6; }\n.main .filter-container .filter-options .chip-default.active.COOL {\n      background: #F4C27B; }\n.main .filter-container .filter-options .chip-default.active.BAD {\n      background: #B193B7; }\n.main .filter-container .filter-options .chip-default.active.VERY_BAD {\n      background: #CF6366; }\n.main .filter-container .filter-options .chip-default.active.STAY_AWAY {\n      background: #502B2C; }\n.main .filter-container .filter-options .chip-default.active.MOVIE {\n      background: #01C05D; }\n.main .filter-container .filter-options .chip-default.active.SERIE {\n      background: #F86C2F; }\n.main .cards-container {\n  width: calc(100% + 30px);\n  margin: 0 -15px; }\n.main .cards-container .card {\n    position: relative;\n    box-sizing: border-box;\n    margin: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\n.main .cards-container .card .poster-container {\n      position: relative;\n      overflow: hidden;\n      border-radius: 5px;\n      transition: all .4s ease;\n      background-position: center;\n      background-size: cover;\n      height: 0;\n      padding-bottom: 150%; }\n.main .cards-container .card .poster-container:hover .img-poster {\n        transform: scale(1.1, 1.1);\n        -ms-transform: scale(1.1, 1.1);\n        -webkit-transform: scale(1.1, 1.1); }\n.main .cards-container .card .poster-container .overlay {\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        color: #ffffff;\n        text-decoration: none;\n        transition: opacity .4s ease;\n        opacity: 0;\n        background: rgba(0, 0, 0, 0.8);\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n.main .cards-container .card .poster-container .overlay:hover {\n          opacity: 1; }\n.main .cards-container .card .poster-container .overlay .poster-detail {\n          align-items: center;\n          justify-content: space-between;\n          padding: 15px;\n          height: 100%;\n          box-sizing: border-box; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-title {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-chip {\n            padding: 3px 6px;\n            border-radius: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip {\n              display: block;\n              margin-top: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip:nth-child(2) {\n                margin-bottom: 15px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions {\n            justify-content: space-around;\n            width: 100%; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a {\n              color: #ffffff; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.watch-later {\n                color: #C132C0; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.indicate-now {\n                color: #29BF44; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.more-details {\n                color: #005DD6; }\n.main .cards-container .card .poster-container .img-poster {\n        transition: all .4s ease;\n        background-position: center;\n        background-size: cover;\n        padding-bottom: 150%;\n        width: 100.5%;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n@media (max-width: 480px) {\n  .main .filter-icons {\n    flex-direction: column; }\n    .main .filter-icons mat-form-field {\n      margin-right: 0 !important;\n      margin-bottom: 10px; }\n  .main .cards-container {\n    width: calc(100% + 14px);\n    margin: 0 -7px; }\n    .main .cards-container .card {\n      margin: 7px;\n      flex: 1 0 50%;\n      max-width: calc(50% - 14px); }\n      .main .cards-container .card .poster-container {\n        padding-bottom: 180% !important; }\n        .main .cards-container .card .poster-container .img-poster {\n          padding-bottom: 180% !important; }\n      .main .cards-container .card .poster-title, .main .cards-container .card .poster-chip, .main .cards-container .card .rating-container {\n        font-size: 12px; } }\n@media (min-width: 481px) {\n  .cards-container .card {\n    flex: 1 0 50%;\n    max-width: calc(50% - 30px); } }\n@media (min-width: 850px) {\n  .cards-container .card {\n    flex: 1 0 33.33333%;\n    max-width: calc(33.33333% - 30px); } }\n@media (min-width: 1101px) {\n  .cards-container .card {\n    flex: 1 0 25%;\n    max-width: calc(25% - 30px); } }\n@media (min-width: 1250px) {\n  .cards-container .card {\n    flex: 1 0 20%;\n    max-width: calc(20% - 30px); } }\n@media (min-width: 1460px) {\n  .cards-container .card {\n    flex: 1 0 16.66666667%;\n    max-width: calc(16.66666667% - 30px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJydW5vIE1hcnRpbmVsbGlcXERlc2t0b3BcXHByb2plY3RzXFxhc3Npc3RlYWktZnJvbnQvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xcQnJ1bm8gTWFydGluZWxsaVxcRGVza3RvcFxccHJvamVjdHNcXGFzc2lzdGVhaS1mcm9udC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBMkNBLGtCQUFBO0FBeUJBLFNBQUE7QUNsRUE7RUFFSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7QUFIdkI7SUFNTSxtQkFBbUIsRUFBQTtBQU56QjtNQVNRLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtBQVZ0QztRQWFVLG1CQUFtQixFQUFBO0FBYjdCO1VBZ0JnQyxjREpiLEVBQUE7QUNabkI7VUFvQmdCLGNEckJELEVBQUE7QUNDZjtVQXdCZ0IsY0R6QkQsRUFBQTtBQ0NmO0lBbUNVLGNEcENLLEVBQUE7QUNDZjtNQXFDeUIsbUJEZFAsRUFBQTtBQ3ZCbEI7TUFzQ3dCLG1CRGhCTixFQUFBO0FDdEJsQjtNQXVDbUIsbUJEbEJELEVBQUE7QUNyQmxCO01Bd0NtQixtQkRwQkQsRUFBQTtBQ3BCbEI7TUF5Q2tCLG1CRHRCQSxFQUFBO0FDbkJsQjtNQTBDdUIsbUJEeEJMLEVBQUE7QUNsQmxCO01BMkN3QixtQkQxQk4sRUFBQTtBQ2pCbEI7TUE2Q21CLG1CRG5CRSxFQUFBO0FDMUJyQjtNQThDb0IsbUJEckJDLEVBQUE7QUN6QnJCO0VBb0RJLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7QUFyRG5CO0lBd0RNLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkRRYztJQ0xkLCtDQUErQyxFQUFBO0FBL0RyRDtNQWtFUSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGtCREFZO01DRVosd0JBQXdCO01BQ3hCLDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsU0FBUztNQUNULG9CQUFvQixFQUFBO0FBMUU1QjtRQThFWSwwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLGtDQUFrQyxFQUFBO0FBaEY5QztRQXFGVSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLE1BQUs7UUFDTCxPQUFPO1FBQ1AsV0FBVztRQUNYLFlBQVk7UUFDWixrQkR2QlU7UUN3QlYsY0FBYztRQUNkLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsVUFBVTtRQUNWLDhCQUE0QjtRQUM1QixtQ0FBMkI7Z0JBQTNCLDJCQUEyQixFQUFBO0FBakdyQztVQW9HWSxVQUFVLEVBQUE7QUFwR3RCO1VBd0dZLG1CQUFtQjtVQUNuQiw4QkFBOEI7VUFDOUIsYUFBYTtVQUNiLFlBQVk7VUFDWixzQkFBc0IsRUFBQTtBQTVHbEM7WUErR2Msa0JBQWtCLEVBQUE7QUEvR2hDO1lBbUhjLGdCQUFnQjtZQUNoQixrQkRoRE0sRUFBQTtBQ3BFcEI7WUF3SGMsa0JBQWtCLEVBQUE7QUF4SGhDO2NBMkhnQixjQUFjO2NBQ2QsZUFBZSxFQUFBO0FBNUgvQjtnQkErSGtCLG1CQUFtQixFQUFBO0FBL0hyQztZQXNJYyw2QkFBNkI7WUFDN0IsV0FBVyxFQUFBO0FBdkl6QjtjQTBJZ0IsY0QzSUQsRUFBQTtBQ0NmO2dCQTZJa0MsY0RuSWYsRUFBQTtBQ1ZuQjtnQkE4SW1DLGNEcklmLEVBQUE7QUNUcEI7Z0JBK0lrQyxjRG5JZixFQUFBO0FDWm5CO1FBdUpVLHdCQUF3QjtRQUN4QiwyQkFBMkI7UUFDM0Isc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsbUNBQTJCO2dCQUEzQiwyQkFBMkIsRUFBQTtBQU9yQztFQUNFO0lBRUksc0JBQXNCLEVBQUE7SUFGMUI7TUFLTSwwQkFBMEI7TUFDMUIsbUJBQW1CLEVBQUE7RUFOekI7SUFXSSx3QkFBd0I7SUFDeEIsY0FBYyxFQUFBO0lBWmxCO01BZU0sV0FBVztNQUNYLGFENUhhO01DNkhiLDJCQUEyQyxFQUFBO01BakJqRDtRQW9CUSwrQkFBK0IsRUFBQTtRQXBCdkM7VUF1QlUsK0JBQStCLEVBQUE7TUF2QnpDO1FBNEJRLGVBQWUsRUFBQSxFQUNoQjtBQU1UO0VBQ0U7SUFDRSxhRGpKaUI7SUNrSmpCLDJCQUEyQyxFQUFBLEVBQzVDO0FBRUg7RUFDRTtJQUNFLG1CRHRKdUI7SUN1SnZCLGlDQUEyQyxFQUFBLEVBQzVDO0FBRUg7RUFDRTtJQUNFLGFEM0ppQjtJQzRKakIsMkJBQTJDLEVBQUEsRUFDNUM7QUFFSDtFQUNFO0lBQ0UsYURoS2lCO0lDaUtqQiwyQkFBMkMsRUFBQSxFQUM1QztBQUVIO0VBQ0U7SUFDRSxzQkRySzJCO0lDc0szQixvQ0FBMkMsRUFBQSxFQUM1QyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbiRoZWFkZXItYmFja2dyb3VuZDogIzMwMzAzMDtcclxuJGJhY2tncm91bmQtZmFjZWJvb2s6ICM0MjY3QjI7XHJcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcclxuXHJcbiRidXR0b24tcHJpbWFyeTogIzI5QkY0NDtcclxuXHJcbiRsb2dvLXllbGxvdzogI0QzRDk0QjtcclxuJGxvZ28tZ3JlZW46ICMyOUJGNDQ7XHJcbiRsb2dvLXBpbms6ICNDMTMyQzA7XHJcbiRsb2dvLXJlZDogI0RGMUQ0MztcclxuJGxvZ28tYmx1ZTogIzAwNURENjtcclxuXHJcbiRsb2dvLWdyYXk6ICM1ZDVkNWQ7XHJcbiRsb2dvLWRhcmstZ3JheTogIzQ0NDQ0NDtcclxuXHJcbiRyYXRpbmctMTogIzUwMkIyQztcclxuJHJhdGluZy0yOiAjQ0Y2MzY2O1xyXG4kcmF0aW5nLTM6ICNCMTkzQjc7XHJcbiRyYXRpbmctNDogI0Y0QzI3QjtcclxuJHJhdGluZy01OiAjODVCREI2O1xyXG4kcmF0aW5nLTY6ICM1RDhFQkE7XHJcbiRyYXRpbmctNzogIzdFQkI2RjtcclxuXHJcbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcclxuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xyXG5cclxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XHJcblxyXG4kbGlnaHRlc3QtZ3JheTogI0YxRjRGNTtcclxuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcclxuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XHJcbiRncmF5OiAjY2RkM2Q4O1xyXG4kZGFyay1ncmF5OiAjNzU4MThiO1xyXG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XHJcbiRkYXJrZXN0LWdyYXk6ICMzMzMzMzM7XHJcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xyXG5cclxuJGZvbnQtZGVmYXVsdDogJGRhcmtlci1ncmF5O1xyXG5cclxuLyogV0lEVEggQ09MVU1OUyAqL1xyXG4kd2lkdGgtMTogOC4zMzMzMzMzMzMlO1xyXG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xyXG4kd2lkdGgtMzogMjUlO1xyXG4kd2lkdGgtNDogMzMuMzMzMzMzMzMlO1xyXG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTY6IDUwJTtcclxuJHdpZHRoLTc6IDU4LjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtOTogNzUlO1xyXG4kd2lkdGgtMTA6IDgzLjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTEyOiAxMDAlO1xyXG5cclxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcclxuJHdpZHRoLTItY29sdW1uczogNTAlO1xyXG4kd2lkdGgtMy1jb2x1bW5zOiAzMy4zMzMzMyU7XHJcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcclxuJHdpZHRoLTUtY29sdW1uczogMjAlO1xyXG4kd2lkdGgtNi1jb2x1bW5zOiAxNi42NjY2NjY2NjclO1xyXG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xyXG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcclxuJHdpZHRoLTktY29sdW1uczogMTEuMSU7XHJcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XHJcblxyXG4vKiBTSVpFICovXHJcbiRzaXplLWRlZmF1bHQ6IDEycHg7XHJcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xyXG4iLCJAaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubWFpbiB7XHJcbiAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAuZmlsdGVyLWljb25zIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5maWx0ZXJzIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLmljb24tZmlsdGVycy1jb250YWluZXIge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICY6aG92ZXIsICYuYWN0aXZlIHsgY29sb3I6ICRsb2dvLWJsdWU7IH1cclxuXHJcbiAgICAgICAgICAgICYuZmlsdGVyLWljb24ge1xyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlci1vcHRpb25zIHtcclxuICAgICAgLmNoaXAtZGVmYXVsdCB7XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmLlVOTUlTU0FCTEUgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTcgfVxyXG4gICAgICAgICAgJi5WRVJZX0dPT0QgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTYgfVxyXG4gICAgICAgICAgJi5HT09EIHsgYmFja2dyb3VuZDogJHJhdGluZy01IH1cclxuICAgICAgICAgICYuQ09PTCB7IGJhY2tncm91bmQ6ICRyYXRpbmctNCB9XHJcbiAgICAgICAgICAmLkJBRCB7IGJhY2tncm91bmQ6ICRyYXRpbmctMyB9XHJcbiAgICAgICAgICAmLlZFUllfQkFEIHsgYmFja2dyb3VuZDogJHJhdGluZy0yIH1cclxuICAgICAgICAgICYuU1RBWV9BV0FZIHsgYmFja2dyb3VuZDogJHJhdGluZy0xIH1cclxuXHJcbiAgICAgICAgICAmLk1PVklFeyBiYWNrZ3JvdW5kOiAkY29sb3ItbW92aWUgfVxyXG4gICAgICAgICAgJi5TRVJJRSB7IGJhY2tncm91bmQ6ICRjb2xvci1zZXJpZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jYXJkcy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMwcHgpO1xyXG4gICAgbWFyZ2luOiAwIC0xNXB4O1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuXHJcbiAgICAgIC5wb3N0ZXItY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1MCU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgLmltZy1wb3N0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44MCk7XHJcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3Rlci1kZXRhaWwge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIC5wb3N0ZXItdGl0bGUge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBvc3Rlci1jaGlwIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtZGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJhdGluZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgLnBvc3Rlci1jaGlwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucG9zdGVyLWFjdGlvbnMge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICYud2F0Y2gtbGF0ZXIgeyBjb2xvcjogJGxvZ28tcGluazsgfVxyXG4gICAgICAgICAgICAgICAgICAmLmluZGljYXRlLW5vdyB7IGNvbG9yOiAkbG9nby1ncmVlbjsgfVxyXG4gICAgICAgICAgICAgICAgICAmLm1vcmUtZGV0YWlsc3sgY29sb3I6ICRsb2dvLWJsdWU7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWctcG9zdGVyIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTUwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAuNSU7XHJcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICAuZmlsdGVyLWljb25zIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxNHB4KTtcclxuICAgICAgbWFyZ2luOiAwIC03cHg7XHJcblxyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgZmxleDogMSAwICR3aWR0aC0yLWNvbHVtbnM7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTItY29sdW1uc30gLSAxNHB4KTtcclxuXHJcbiAgICAgICAgLnBvc3Rlci1jb250YWluZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE4MCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAuaW1nLXBvc3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdGVyLXRpdGxlLCAucG9zdGVyLWNoaXAsIC5yYXRpbmctY29udGFpbmVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkge1xyXG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xyXG4gICAgZmxleDogMSAwICR3aWR0aC0yLWNvbHVtbnM7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtMi1jb2x1bW5zfSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcclxuICAgIGZsZXg6IDEgMCAkd2lkdGgtMy1jb2x1bW5zO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTMtY29sdW1uc30gLSAzMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDExMDFweCkge1xyXG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xyXG4gICAgZmxleDogMSAwICR3aWR0aC00LWNvbHVtbnM7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtNC1jb2x1bW5zfSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XHJcbiAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTUtY29sdW1ucztcclxuICAgIG1heC13aWR0aDogY2FsYygjeyR3aWR0aC01LWNvbHVtbnN9IC0gMzBweCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNDYwcHgpIHtcclxuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcclxuICAgIGZsZXg6IDEgMCAkd2lkdGgtNi1jb2x1bW5zO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTYtY29sdW1uc30gLSAzMHB4KTtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _constants_ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @constants/ratings */ "./src/app/core/constants/ratings.ts");
/* harmony import */ var _constants_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constants/categories */ "./src/app/core/constants/categories.ts");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/indicate/indicate.component */ "./src/app/indicate/indicate.component.ts");
/* harmony import */ var lodash_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-decorators */ "./node_modules/lodash-decorators/index.js");
/* harmony import */ var lodash_decorators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_decorators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_home_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/home/store */ "./src/app/home/store/index.ts");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/utils */ "./src/app/shared/utils/index.ts");














var HomeComponent = /** @class */ (function () {
    function HomeComponent(store, profileStore, dialog) {
        this.store = store;
        this.profileStore = profileStore;
        this.dialog = dialog;
        this.utils = _shared_utils__WEBPACK_IMPORTED_MODULE_13__;
        this.msg = 'Nenhuma indicação encontrada';
        this.floatLabel = 'always';
        this.categoryEnum = _constants_categories__WEBPACK_IMPORTED_MODULE_6__["categories"];
        this.categoryArray = lodash__WEBPACK_IMPORTED_MODULE_12__["keys"](_constants_categories__WEBPACK_IMPORTED_MODULE_6__["categories"]);
        this.rantingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_5__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_12__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_5__["ratings"]);
        this.filters = {
            search: '',
            exibition: 'all',
            ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
            categories: ['MOVIE', 'SERIE'],
            currentPage: 1,
            lastPage: null
        };
        this.moviesList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_10__["getHomeListResponse"]));
        this.moviesLoaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_10__["getHomeListLoaded"]));
        this.pagination$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_10__["getHomeListPagination"]));
        this.userLogged$ = this.profileStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_11__["getProfile"]));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_10__["LoadHomeList"](this.filters));
        this.moviesList$.subscribe(function (result) {
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
        this.pagination$.subscribe(function (result) {
            if (result) {
                _this.filters.currentPage = result.currentPage;
                _this.filters.lastPage = result.lastPage;
            }
        });
        this.userLogged$.subscribe(function (result) {
            _this.isLogged = result ? true : false;
        });
    };
    HomeComponent.prototype.setExibition = function (exibition) {
        this.filters.exibition = exibition;
        this.updateList();
    };
    HomeComponent.prototype.isRatingActive = function (rating) {
        return lodash__WEBPACK_IMPORTED_MODULE_12__["includes"](this.filters.ratings, rating);
    };
    HomeComponent.prototype.isCategoryActive = function (category) {
        return lodash__WEBPACK_IMPORTED_MODULE_12__["includes"](this.filters.categories, category);
    };
    HomeComponent.prototype.openDialog = function (urlIndication) {
        var _this = this;
        if (this.isLogged) {
            var dialogRef = this.dialog.open(app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_8__["IndicateComponent"], {
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
                    _this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_10__["UpdateHomeList"](_this.filters));
                }
            });
        }
        else {
            var dialogRef = this.dialog.open(app_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], {
                width: '90%',
                maxWidth: '400px',
                data: { tab: 0 }
            });
        }
    };
    HomeComponent.prototype.updateList = function () {
        this.isLoaded = false;
        this.moviesList = [];
        this.filters.currentPage = 1;
        this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_10__["UpdateHomeList"](this.filters));
    };
    HomeComponent.prototype.updateRatingFilter = function (tag) {
        if (lodash__WEBPACK_IMPORTED_MODULE_12__["includes"](this.filters.ratings, tag)) {
            if (this.filters.ratings.length > 1) {
                this.filters.ratings = lodash__WEBPACK_IMPORTED_MODULE_12__["remove"](this.filters.ratings, function (n) {
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
        if (lodash__WEBPACK_IMPORTED_MODULE_12__["includes"](this.filters.categories, tag)) {
            if (this.filters.categories.length > 1) {
                this.filters.categories = lodash__WEBPACK_IMPORTED_MODULE_12__["remove"](this.filters.categories, function (n) {
                    return n !== tag;
                });
            }
        }
        else {
            this.filters.categories.push(tag);
        }
        this.updateList();
    };
    HomeComponent.prototype.scollTop = function () {
        var header = document.getElementById('header');
        header.scrollIntoView();
    };
    HomeComponent.prototype.onScroll = function ($event) {
        this.scollTopActive = window.scrollY >= 100 ? true : false;
        if (((window.innerHeight + window.scrollY) > document.body.offsetHeight)
            && this.filters.currentPage < this.filters.lastPage
            && this.isLoaded) {
            this.isLoaded = false;
            this.filters.currentPage = this.filters.currentPage + 1;
            this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_10__["LoadHomeList"](this.filters));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(lodash_decorators__WEBPACK_IMPORTED_MODULE_9__["debounce"])(800),
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
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/store/actions/home-action.ts":
/*!***************************************************!*\
  !*** ./src/app/home/store/actions/home-action.ts ***!
  \***************************************************/
/*! exports provided: LOAD_HOME_LIST, LOAD_HOME_LIST_SUCCESS, LOAD_HOME_LIST_FAIL, UPDATE_HOME_LIST, UPDATE_HOME_LIST_SUCCESS, UPDATE_HOME_LIST_FAIL, LoadHomeList, LoadHomeListSuccess, UpdateHomeListFail, UpdateHomeList, UpdateHomeListSuccess, LoadHomeListFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST", function() { return LOAD_HOME_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_SUCCESS", function() { return LOAD_HOME_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_LIST_FAIL", function() { return LOAD_HOME_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST", function() { return UPDATE_HOME_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_SUCCESS", function() { return UPDATE_HOME_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOME_LIST_FAIL", function() { return UPDATE_HOME_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHomeList", function() { return LoadHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListSuccess", function() { return LoadHomeListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListFail", function() { return UpdateHomeListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeList", function() { return UpdateHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListSuccess", function() { return UpdateHomeListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListFail", function() { return LoadHomeListFail; });
var LOAD_HOME_LIST = '[Load Home List] Load Home list';
var LOAD_HOME_LIST_SUCCESS = '[Load Home List] Load Home list Success';
var LOAD_HOME_LIST_FAIL = '[Load Home List] Load Home list Fail';
var UPDATE_HOME_LIST = '[Update Home List] Load Home list';
var UPDATE_HOME_LIST_SUCCESS = '[Update Home List] Load Home list Success';
var UPDATE_HOME_LIST_FAIL = '[Update Home List] Load Home list Fail';
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



/***/ }),

/***/ "./src/app/home/store/actions/index.ts":
/*!*********************************************!*\
  !*** ./src/app/home/store/actions/index.ts ***!
  \*********************************************/
/*! exports provided: LOAD_HOME_LIST, LOAD_HOME_LIST_SUCCESS, LOAD_HOME_LIST_FAIL, UPDATE_HOME_LIST, UPDATE_HOME_LIST_SUCCESS, UPDATE_HOME_LIST_FAIL, LoadHomeList, LoadHomeListSuccess, UpdateHomeListFail, UpdateHomeList, UpdateHomeListSuccess, LoadHomeListFail */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeList", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LoadHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListSuccess", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListFail", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeList", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListSuccess", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListFail", function() { return _home_action__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListFail"]; });




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
/*! exports provided: effects, reducers, getState, LOAD_HOME_LIST, LOAD_HOME_LIST_SUCCESS, LOAD_HOME_LIST_FAIL, UPDATE_HOME_LIST, UPDATE_HOME_LIST_SUCCESS, UPDATE_HOME_LIST_FAIL, LoadHomeList, LoadHomeListSuccess, UpdateHomeListFail, UpdateHomeList, UpdateHomeListSuccess, LoadHomeListFail, HomeEffects, getHomeListState, getHomeListIds, getHomeListEntities, getAllHomeList, getHomeListResponse, getHomeListLoading, getHomeListLoaded, getHomeListPagination */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeList", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeList", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateHomeListSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateHomeListSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadHomeListFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadHomeListFail"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListResponse", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListPagination", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getHomeListPagination"]; });







/***/ }),

/***/ "./src/app/home/store/reducers/home-reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/store/reducers/home-reducer.ts ***!
  \*****************************************************/
/*! exports provided: adapter, initialState, reducer, getLoading, getLoaded, getHomeList, getPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeList", function() { return getHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPagination", function() { return getPagination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/home/store/actions */ "./src/app/home/store/actions/index.ts");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/pagination */ "./src/app/core/models/pagination.ts");




var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: function (moviesList) { return moviesList.id; }
});
var initialState = adapter.getInitialState({
    loading: false,
    loaded: false,
    homeList: [],
    pagination: null,
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_LIST"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_LIST_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, homeList: state.homeList.concat(action.response.data), pagination: new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"](action.response) });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_HOME_LIST"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false, homeList: [], pagination: null });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_HOME_LIST_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, homeList: action.response.data, pagination: new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"](action.response) });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_LIST_FAIL"]:
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_HOME_LIST_FAIL"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: false, homeList: [], pagination: null });
        }
        default: {
            return state;
        }
    }
}
var getLoading = function (state) { return state.loading; };
var getLoaded = function (state) { return state.loaded; };
var getHomeList = function (state) { return state.homeList; };
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
/*! exports provided: getHomeListState, getHomeListIds, getHomeListEntities, getAllHomeList, getHomeListResponse, getHomeListLoading, getHomeListLoaded, getHomeListPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListState", function() { return getHomeListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListIds", function() { return getHomeListIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListEntities", function() { return getHomeListEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllHomeList", function() { return getAllHomeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListResponse", function() { return getHomeListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoading", function() { return getHomeListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListLoaded", function() { return getHomeListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeListPagination", function() { return getHomeListPagination; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_home_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/home/store/reducers */ "./src/app/home/store/reducers/index.ts");
/* harmony import */ var app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/home/store/reducers/home-reducer */ "./src/app/home/store/reducers/home-reducer.ts");
var _a;



var getHomeListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_home_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.homeList; });
var getHomeListIds = (_a = app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(getHomeListState), _a.selectIds), getHomeListEntities = _a.selectEntities, getAllHomeList = _a.selectAll;
var getHomeListResponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getHomeList"]);
var getHomeListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getHomeListLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoaded"]);
var getHomeListPagination = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getPagination"]);


/***/ }),

/***/ "./src/app/home/store/selectors/index.ts":
/*!***********************************************!*\
  !*** ./src/app/home/store/selectors/index.ts ***!
  \***********************************************/
/*! exports provided: getHomeListState, getHomeListIds, getHomeListEntities, getAllHomeList, getHomeListResponse, getHomeListLoading, getHomeListLoaded, getHomeListPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-selector */ "./src/app/home/store/selectors/home-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListState", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListIds", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListEntities", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllHomeList", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getAllHomeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHomeListResponse", function() { return _home_selector__WEBPACK_IMPORTED_MODULE_0__["getHomeListResponse"]; });

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

module.exports = "<h2 class=\"title-modal\">Nova Indicação</h2>\r\n\r\n<div class=\"container\">\r\n  <form novalidate [formGroup]=\"formGroup\" (submit)=\"saveIndication()\" [hidden]=\"(isLoading$ | async)\">\r\n    <div class=\"flex-row col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-8 col-sm-12 margin-right-1 dialog-input-prefix\">\r\n        <mat-label>Link IMDb/TMDb</mat-label>\r\n        <input matInput autocomplete=\"off\" formControlName='url'\r\n          placeholder=\"http://www.imdb.com/title/exemple ou https://www.themoviedb.org/movie/exemple\">\r\n        <mat-icon matPrefix>link</mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-4 col-sm-12\">\r\n          <mat-label>Avaliação</mat-label>\r\n        <mat-select panelClass=\"panel-dark\" formControlName='rating'>\r\n          <mat-option *ngFor=\"let rating of ratingArray\" [value]=\"rating\">\r\n            {{ratingEnum[rating]}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"flex-row col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12\">\r\n        <mat-label>Comentário</mat-label>\r\n        <textarea matInput formControlName='comment'></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div mat-dialog-actions>\r\n      <button mat-button (click)=\"onNoClick()\" type=\"button\">Cancelar</button>\r\n      <button mat-button cdkFocusInitial class=\"btn-default\" type=\"submit\">\r\n        <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon> Indicar\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n  <app-loading [hidden]=\"!(isLoading$ | async)\"></app-loading>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/indicate/indicate.component.scss":
/*!**************************************************!*\
  !*** ./src/app/indicate/indicate.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.title-modal {\n  width: 100%;\n  color: #E6EAEC;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #1d1d1d; }\n@media (max-width: 480px) {\n  .container .flex-row {\n    flex-direction: column; }\n    .container .flex-row mat-form-field {\n      margin-right: 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaWNhdGUvQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvaW5kaWNhdGUvQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXBwXFxpbmRpY2F0ZVxcaW5kaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTJDQSxrQkFBQTtBQXlCQSxTQUFBO0FDbEVBO0VBQ0UsV0FBVztFQUNYLGNENkJvQjtFQzVCcEIsb0JBQW9CO0VBQ3BCLGdDRGlDMkIsRUFBQTtBQzlCN0I7RUFDRTtJQUVJLHNCQUFzQixFQUFBO0lBRjFCO01BS00sMEJBQTBCLEVBQUEsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9pbmRpY2F0ZS9pbmRpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbiRoZWFkZXItYmFja2dyb3VuZDogIzMwMzAzMDtcclxuJGJhY2tncm91bmQtZmFjZWJvb2s6ICM0MjY3QjI7XHJcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcclxuXHJcbiRidXR0b24tcHJpbWFyeTogIzI5QkY0NDtcclxuXHJcbiRsb2dvLXllbGxvdzogI0QzRDk0QjtcclxuJGxvZ28tZ3JlZW46ICMyOUJGNDQ7XHJcbiRsb2dvLXBpbms6ICNDMTMyQzA7XHJcbiRsb2dvLXJlZDogI0RGMUQ0MztcclxuJGxvZ28tYmx1ZTogIzAwNURENjtcclxuXHJcbiRsb2dvLWdyYXk6ICM1ZDVkNWQ7XHJcbiRsb2dvLWRhcmstZ3JheTogIzQ0NDQ0NDtcclxuXHJcbiRyYXRpbmctMTogIzUwMkIyQztcclxuJHJhdGluZy0yOiAjQ0Y2MzY2O1xyXG4kcmF0aW5nLTM6ICNCMTkzQjc7XHJcbiRyYXRpbmctNDogI0Y0QzI3QjtcclxuJHJhdGluZy01OiAjODVCREI2O1xyXG4kcmF0aW5nLTY6ICM1RDhFQkE7XHJcbiRyYXRpbmctNzogIzdFQkI2RjtcclxuXHJcbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcclxuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xyXG5cclxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XHJcblxyXG4kbGlnaHRlc3QtZ3JheTogI0YxRjRGNTtcclxuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcclxuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XHJcbiRncmF5OiAjY2RkM2Q4O1xyXG4kZGFyay1ncmF5OiAjNzU4MThiO1xyXG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XHJcbiRkYXJrZXN0LWdyYXk6ICMzMzMzMzM7XHJcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xyXG5cclxuJGZvbnQtZGVmYXVsdDogJGRhcmtlci1ncmF5O1xyXG5cclxuLyogV0lEVEggQ09MVU1OUyAqL1xyXG4kd2lkdGgtMTogOC4zMzMzMzMzMzMlO1xyXG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xyXG4kd2lkdGgtMzogMjUlO1xyXG4kd2lkdGgtNDogMzMuMzMzMzMzMzMlO1xyXG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTY6IDUwJTtcclxuJHdpZHRoLTc6IDU4LjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtOTogNzUlO1xyXG4kd2lkdGgtMTA6IDgzLjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTEyOiAxMDAlO1xyXG5cclxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcclxuJHdpZHRoLTItY29sdW1uczogNTAlO1xyXG4kd2lkdGgtMy1jb2x1bW5zOiAzMy4zMzMzMyU7XHJcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcclxuJHdpZHRoLTUtY29sdW1uczogMjAlO1xyXG4kd2lkdGgtNi1jb2x1bW5zOiAxNi42NjY2NjY2NjclO1xyXG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xyXG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcclxuJHdpZHRoLTktY29sdW1uczogMTEuMSU7XHJcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XHJcblxyXG4vKiBTSVpFICovXHJcbiRzaXplLWRlZmF1bHQ6IDEycHg7XHJcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xyXG4iLCJAaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4udGl0bGUtbW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAkbGlnaHRlci1ncmF5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFya2VzdC1ncmF5LWJvcmRlclxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5mbGV4LXJvdyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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

module.exports = "<div class=\"login-container\">\r\n  <div class=\"social-login margin-bottom-2\">\r\n    <button class=\"btn btn-facebook margin-bottom-2\" (click)=\"loginFacebook()\"><img src=\"assets/img/facebook.png\" height=\"25px\"> <span>Entrar com o Facebook</span></button>\r\n  </div>\r\n  <div class=\"manual-login\">\r\n    <mat-tab-group class=\"tab-login\" animationDuration=\"1500ms\" [selectedIndex]=\"tabActive\">\r\n      <mat-tab label=\"Login\">\r\n        <ng-container *ngIf=\"!isForgetPassword\">\r\n          <form novalidate [formGroup]=\"formSignIn\" (submit)=\"signIn()\">\r\n            <div class=\"flex-row col-md-12 col-sm-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n                <mat-label>E-mail</mat-label>\r\n                <input matInput autocomplete=\"off\" formControlName='email'\r\n                  placeholder=\"email@email.com.br\">\r\n                <mat-icon matPrefix>email</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"flex-column col-md-12 col-sm-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n                <mat-label>Senha</mat-label>\r\n                <input matInput type=\"password\" formControlName='password'>\r\n                <mat-icon matPrefix>lock</mat-icon>\r\n              </mat-form-field>\r\n              <div class=\"forget-password\">\r\n                <span (click)=\"setForgetPassword()\">Esqueceu sua senha?</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"flex-row col-md-12 col-sm-12 margin-top-1\">\r\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Entrar</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"isForgetPassword\">\r\n          <form novalidate [formGroup]=\"formForgetPassword\" (submit)=\"forgetPassword()\">\r\n            <div class=\"flex-row col-md-12 col-sm-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n                <mat-label>E-mail</mat-label>\r\n                <input matInput autocomplete=\"off\" formControlName='email'\r\n                  placeholder=\"email@email.com.br\">\r\n                <mat-icon matPrefix>email</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"flex-column align-items-center col-md-12 col-sm-12 margin-top-1\">\r\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Enviar e-mail</button>\r\n              <button mat-button class=\"col-md-5 margin-top-1\" (click)=\"setForgetPassword()\">Voltar</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n      </mat-tab>\r\n      <mat-tab label=\"Cadastrar\">\r\n        <form novalidate [formGroup]=\"formRegister\" (submit)=\"register()\">\r\n          <div class=\"flex-row col-md-12 col-sm-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n              <mat-label>Nome</mat-label>\r\n              <input matInput autocomplete=\"off\" formControlName='name'>\r\n              <mat-icon matPrefix>perm_identity</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-row col-md-12 col-sm-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n              <mat-label>E-mail</mat-label>\r\n              <input matInput autocomplete=\"off\" formControlName='email'\r\n                placeholder=\"email@email.com.br\">\r\n              <mat-icon matPrefix>email</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-column col-md-12 col-sm-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n              <mat-label>Senha</mat-label>\r\n              <input matInput type=\"password\" formControlName='password'>\r\n              <mat-icon matPrefix>lock</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-row col-md-12 col-sm-12 margin-top-1\">\r\n            <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Cadastrar</button>\r\n          </div>\r\n        </form>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.login-container .social-login {\n  border-bottom: 1px solid #1d1d1d; }\n.login-container .social-login .btn-facebook {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%; }\n.login-container .social-login .btn-facebook img {\n      margin-right: 10px; }\n.login-container .forget-password {\n  text-align: right;\n  margin: 5px 0 10px; }\n.login-container .forget-password span {\n    color: #75818b;\n    text-decoration: none;\n    cursor: pointer; }\n.login-container .forget-password span:hover {\n      color: #F1F4F5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTJDQSxrQkFBQTtBQXlCQSxTQUFBO0FDbEVBO0VBR0ksZ0NEa0N5QixFQUFBO0FDckM3QjtJQU1NLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtBQVRqQjtNQVdZLGtCQUFrQixFQUFBO0FBWDlCO0VBZ0JJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQWpCdEI7SUFvQk0sY0RjYTtJQ2JiLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7QUF0QnJCO01BeUJRLGNES2UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kYmFja2dyb3VuZDogIzI4MjgyODtcclxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcclxuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xyXG5cclxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xyXG5cclxuJGxvZ28teWVsbG93OiAjRDNEOTRCO1xyXG4kbG9nby1ncmVlbjogIzI5QkY0NDtcclxuJGxvZ28tcGluazogI0MxMzJDMDtcclxuJGxvZ28tcmVkOiAjREYxRDQzO1xyXG4kbG9nby1ibHVlOiAjMDA1REQ2O1xyXG5cclxuJGxvZ28tZ3JheTogIzVkNWQ1ZDtcclxuJGxvZ28tZGFyay1ncmF5OiAjNDQ0NDQ0O1xyXG5cclxuJHJhdGluZy0xOiAjNTAyQjJDO1xyXG4kcmF0aW5nLTI6ICNDRjYzNjY7XHJcbiRyYXRpbmctMzogI0IxOTNCNztcclxuJHJhdGluZy00OiAjRjRDMjdCO1xyXG4kcmF0aW5nLTU6ICM4NUJEQjY7XHJcbiRyYXRpbmctNjogIzVEOEVCQTtcclxuJHJhdGluZy03OiAjN0VCQjZGO1xyXG5cclxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xyXG4kY29sb3ItbW92aWU6ICMwMUMwNUQ7XHJcblxyXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcclxuXHJcbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xyXG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xyXG4kbGlnaHQtZ3JheTogI0U0RTRFNDtcclxuJGdyYXk6ICNjZGQzZDg7XHJcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XHJcbiRkYXJrZXItZ3JheTogIzZBNkM2NjtcclxuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcclxuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XHJcblxyXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XHJcblxyXG4vKiBXSURUSCBDT0xVTU5TICovXHJcbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XHJcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XHJcbiR3aWR0aC0zOiAyNSU7XHJcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XHJcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtNjogNTAlO1xyXG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XHJcbiR3aWR0aC05OiA3NSU7XHJcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtMTI6IDEwMCU7XHJcblxyXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xyXG4kd2lkdGgtMi1jb2x1bW5zOiA1MCU7XHJcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcclxuJHdpZHRoLTQtY29sdW1uczogMjUlO1xyXG4kd2lkdGgtNS1jb2x1bW5zOiAyMCU7XHJcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XHJcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XHJcbiR3aWR0aC04LWNvbHVtbnM6IDEyLjUlO1xyXG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcclxuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcclxuXHJcbi8qIFNJWkUgKi9cclxuJHNpemUtZGVmYXVsdDogMTJweDtcclxuJHJhZGl1cy1kZWZhdWx0OiA1cHg7XHJcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG5cclxuICAuc29jaWFsLWxvZ2luIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFya2VzdC1ncmF5LWJvcmRlcjtcclxuXHJcbiAgICAuYnRuLWZhY2Vib29rIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaW1nIHsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JnZXQtcGFzc3dvcmQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDVweCAwIDEwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JheTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
                _this.dialogRef.close();
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
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/login/store/actions */ "./src/app/login/store/actions/index.ts");











var LoginEffects = /** @class */ (function () {
    function LoginEffects(actions$, store, service, tokenService, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.tokenService = tokenService;
        this.toastr = toastr;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.sendLogin(params.dataLogin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LoginSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LoginFail"](error)); }));
        }));
        this.loginFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOGIN_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Dados de acesso inválidos.', '', { enableHtml: true });
        }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOGIN_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.tokenService.setToken(action.response);
            _this.store.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_9__["LoadProfile"]());
        }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.sendLogout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LogoutSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LogoutFail"](error)); }));
        }));
        this.logoutFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOGOUT_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.toastr.error('<i class="material-icons">error</i> Erro ao sair. Tente novamente mais tarde.', '', { enableHtml: true });
        }));
        this.logoutSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_10__["LOGOUT_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.tokenService.removeStorage();
            _this.store.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_9__["ClearProfile"]());
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

module.exports = "<header>\r\n  <div class=\"header\">\r\n    <div class=\"header-logo\">\r\n      <img src=\"assets/img/header-logo.png\">\r\n    </div>\r\n    <div class=\"header-settings\">\r\n      <div class=\"profile-image bd-{{(userLogged$ | async).theme}}\" *ngIf=\"(userLogged$ | async)\" (click)='logout()'>\r\n        <img src=\"{{(userLogged$ | async).avatar}}\">\r\n      </div>\r\n      <div class=\"signIn-container\" *ngIf=\"!(userLogged$ | async)\">\r\n        <span (click)=\"openDialog(0)\">Entrar</span> ou <span (click)=\"openDialog(1)\">Cadastrar</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/main-components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-components/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\nheader {\n  padding: 10px 0;\n  background: #303030;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\nheader .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 auto;\n    width: 90%; }\nheader .header img {\n      height: 29px; }\nheader .header .header-settings {\n      display: flex;\n      align-items: center; }\nheader .header .header-settings .signIn-container {\n        font-size: 14px; }\nheader .header .header-settings .signIn-container span {\n          display: inline-block;\n          color: #F1F4F5;\n          cursor: pointer; }\nheader .header .header-settings .signIn-container span:first-child {\n            margin-right: 7px; }\nheader .header .header-settings .signIn-container span:last-child {\n            margin-left: 7px; }\nheader .header .header-settings .signIn-container span:hover {\n            color: #D3D94B; }\nheader .header .header-settings .profile-image {\n        width: 43px;\n        height: 43px;\n        border-radius: 50%;\n        position: relative;\n        overflow: hidden;\n        text-align: center;\n        border-width: 3px;\n        border-style: solid; }\nheader .header .header-settings .profile-image img {\n          height: 100%;\n          margin-left: 50%;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%); }\nheader .header .header-settings mat-icon:hover {\n        cursor: pointer; }\n@media (min-width: 1460px) {\n  header .header {\n    max-width: 1460px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXEJydW5vIE1hcnRpbmVsbGlcXERlc2t0b3BcXHByb2plY3RzXFxhc3Npc3RlYWktZnJvbnQvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWluLWNvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcQnJ1bm8gTWFydGluZWxsaVxcRGVza3RvcFxccHJvamVjdHNcXGFzc2lzdGVhaS1mcm9udC9zcmNcXGFwcFxcbWFpbi1jb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBMkNBLGtCQUFBO0FBeUJBLFNBQUE7QUNsRUE7RUFDRSxlQUFlO0VBQ2YsbUJEQXlCO0VDR3pCLCtDQUErQyxFQUFBO0FBTGpEO0lBUUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFVBQVUsRUFBQTtBQVpkO01BZU0sWUFBWSxFQUFBO0FBZmxCO01BbUJNLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtBQXBCekI7UUF1QlEsZUFBZSxFQUFBO0FBdkJ2QjtVQXlCVSxxQkFBcUI7VUFDckIsY0RJYTtVQ0hiLGVBQWUsRUFBQTtBQTNCekI7WUE2QjBCLGlCQUFpQixFQUFBO0FBN0IzQztZQThCeUIsZ0JBQWdCLEVBQUE7QUE5QnpDO1lBaUNZLGNEekJTLEVBQUE7QUNSckI7UUF1Q1EsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFBO0FBOUMzQjtVQWlEVSxZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLG1DQUEyQjtrQkFBM0IsMkJBQTJCLEVBQUE7QUFuRHJDO1FBeURVLGVBQWUsRUFBQTtBQU96QjtFQUNFO0lBRUksaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbiRoZWFkZXItYmFja2dyb3VuZDogIzMwMzAzMDtcclxuJGJhY2tncm91bmQtZmFjZWJvb2s6ICM0MjY3QjI7XHJcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcclxuXHJcbiRidXR0b24tcHJpbWFyeTogIzI5QkY0NDtcclxuXHJcbiRsb2dvLXllbGxvdzogI0QzRDk0QjtcclxuJGxvZ28tZ3JlZW46ICMyOUJGNDQ7XHJcbiRsb2dvLXBpbms6ICNDMTMyQzA7XHJcbiRsb2dvLXJlZDogI0RGMUQ0MztcclxuJGxvZ28tYmx1ZTogIzAwNURENjtcclxuXHJcbiRsb2dvLWdyYXk6ICM1ZDVkNWQ7XHJcbiRsb2dvLWRhcmstZ3JheTogIzQ0NDQ0NDtcclxuXHJcbiRyYXRpbmctMTogIzUwMkIyQztcclxuJHJhdGluZy0yOiAjQ0Y2MzY2O1xyXG4kcmF0aW5nLTM6ICNCMTkzQjc7XHJcbiRyYXRpbmctNDogI0Y0QzI3QjtcclxuJHJhdGluZy01OiAjODVCREI2O1xyXG4kcmF0aW5nLTY6ICM1RDhFQkE7XHJcbiRyYXRpbmctNzogIzdFQkI2RjtcclxuXHJcbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcclxuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xyXG5cclxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XHJcblxyXG4kbGlnaHRlc3QtZ3JheTogI0YxRjRGNTtcclxuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcclxuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XHJcbiRncmF5OiAjY2RkM2Q4O1xyXG4kZGFyay1ncmF5OiAjNzU4MThiO1xyXG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XHJcbiRkYXJrZXN0LWdyYXk6ICMzMzMzMzM7XHJcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xyXG5cclxuJGZvbnQtZGVmYXVsdDogJGRhcmtlci1ncmF5O1xyXG5cclxuLyogV0lEVEggQ09MVU1OUyAqL1xyXG4kd2lkdGgtMTogOC4zMzMzMzMzMzMlO1xyXG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xyXG4kd2lkdGgtMzogMjUlO1xyXG4kd2lkdGgtNDogMzMuMzMzMzMzMzMlO1xyXG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTY6IDUwJTtcclxuJHdpZHRoLTc6IDU4LjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtOTogNzUlO1xyXG4kd2lkdGgtMTA6IDgzLjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTEyOiAxMDAlO1xyXG5cclxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcclxuJHdpZHRoLTItY29sdW1uczogNTAlO1xyXG4kd2lkdGgtMy1jb2x1bW5zOiAzMy4zMzMzMyU7XHJcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcclxuJHdpZHRoLTUtY29sdW1uczogMjAlO1xyXG4kd2lkdGgtNi1jb2x1bW5zOiAxNi42NjY2NjY2NjclO1xyXG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xyXG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcclxuJHdpZHRoLTktY29sdW1uczogMTEuMSU7XHJcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XHJcblxyXG4vKiBTSVpFICovXHJcbiRzaXplLWRlZmF1bHQ6IDEycHg7XHJcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xyXG4iLCJAaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBiYWNrZ3JvdW5kOiAkaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMjlweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXNldHRpbmdzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5zaWduSW4tY29udGFpbmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyYXk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7IG1hcmdpbi1yaWdodDogN3B4OyB9XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQgeyBtYXJnaW4tbGVmdDogN3B4OyB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbG9nby15ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDQzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ2MHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDE0NjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

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
    function HeaderComponent(store, storeLogin, dialog) {
        this.store = store;
        this.storeLogin = storeLogin;
        this.dialog = dialog;
        this.userLogged$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_5__["getProfile"]));
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.openDialog = function (tabActive) {
        var dialogRef = this.dialog.open(app_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '90%',
            maxWidth: '400px',
            data: { tab: tabActive }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result = result;
            }
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
/*! exports provided: LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL, CLEAR_PROFILE, LoadProfile, LoadProfileSuccess, LoadProfileFail, ClearProfile */
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

/***/ "./src/app/profile/store/effects/index.ts":
/*!************************************************!*\
  !*** ./src/app/profile/store/effects/index.ts ***!
  \************************************************/
/*! exports provided: effects, ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _profile_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-effect */ "./src/app/profile/store/effects/profile-effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return _profile_effect__WEBPACK_IMPORTED_MODULE_0__["ProfileEffects"]; });

/* empty/unused harmony star reexport */

var effects = [_profile_effect__WEBPACK_IMPORTED_MODULE_0__["ProfileEffects"]];



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

/***/ "./src/app/profile/store/index.ts":
/*!****************************************!*\
  !*** ./src/app/profile/store/index.ts ***!
  \****************************************/
/*! exports provided: effects, reducers, getState, LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL, CLEAR_PROFILE, LoadProfile, LoadProfileSuccess, LoadProfileFail, ClearProfile, ProfileEffects, getProfileState, getLoginIds, getLoginEntities, getAllLogin, getProfile, getLoading, getLoaded */
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

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/profile/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["ProfileEffects"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/profile/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["getState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/profile/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfileState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProfileState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginIds", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoginEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllLogin", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLoaded"]; });







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


var reducers = {
    profile: app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
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

/***/ "./src/app/profile/store/selectors/index.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/store/selectors/index.ts ***!
  \**************************************************/
/*! exports provided: getProfileState, getLoginIds, getLoginEntities, getAllLogin, getProfile, getLoading, getLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-selector */ "./src/app/profile/store/selectors/profile-selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfileState", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getProfileState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginIds", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getLoginIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginEntities", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getLoginEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllLogin", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getAllLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return _profile_selector__WEBPACK_IMPORTED_MODULE_0__["getLoaded"]; });




/***/ }),

/***/ "./src/app/profile/store/selectors/profile-selector.ts":
/*!*************************************************************!*\
  !*** ./src/app/profile/store/selectors/profile-selector.ts ***!
  \*************************************************************/
/*! exports provided: getProfileState, getLoginIds, getLoginEntities, getAllLogin, getProfile, getLoading, getLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileState", function() { return getProfileState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginIds", function() { return getLoginIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginEntities", function() { return getLoginEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLogin", function() { return getAllLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaded", function() { return getLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_profile_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/profile/store/reducers */ "./src/app/profile/store/reducers/index.ts");
/* harmony import */ var app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/profile/store/reducers/profile-reducer */ "./src/app/profile/store/reducers/profile-reducer.ts");
var _a;



var getProfileState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_profile_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getState"], function (state) { return state.profile; });
var getLoginIds = (_a = app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(getProfileState), _a.selectIds), getLoginEntities = _a.selectEntities, getAllLogin = _a.selectAll;
var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfileState, app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__["getProfile"]);
var getLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfileState, app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
var getLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfileState, app_profile_store_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);


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



// import { baseLocal } from 'app/constants';
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getAllMoviesAndSeries = function (filters) {
        var search = filters.search ? '&q=' + filters.search : '';
        var filter = '&filter=' + btoa(JSON.stringify({ ratings: filters.ratings, categories: filters.categories }));
        return this.http.get('https://api.assisteai.com.br/movies?page=' + filters.currentPage + filter + search);
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
        console.log(token);
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
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");




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
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
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

/***/ "./src/app/shared/components/empty/empty.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/empty/empty.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty-msg\">\r\n  <div class=\"loading\">\r\n    <span class=\"loading-bar bg-dark-gray\"></span>\r\n    <span class=\"loading-bar bg-gray\"></span>\r\n    <span class=\"loading-bar bg-dark-gray\"></span>\r\n    <span class=\"loading-bar bg-gray\"></span>\r\n    <span class=\"loading-bar bg-dark-gray\"></span>\r\n  </div>\r\n\r\n  <span>{{msg}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/empty/empty.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/empty/empty.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-msg {\n  font-size: 17px;\n  margin: 50px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .empty-msg .loading {\n    position: relative;\n    z-index: 5;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 10px; }\n  .empty-msg .loading .loading-bar {\n      display: inline-block;\n      position: relative;\n      width: 8px;\n      height: 70px;\n      margin: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZW1wdHkvQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGVtcHR5XFxlbXB0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7RUFOckI7SUFTSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7RUFidkI7TUFnQk0scUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsWUFBWTtNQUNaLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2VtcHR5L2VtcHR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcHR5LW1zZyB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sb2FkaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgLmxvYWRpbmctYmFyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/*! exports provided: EmptyComponent, LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/shared/components/empty/empty.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return _empty_empty_component__WEBPACK_IMPORTED_MODULE_0__["EmptyComponent"]; });

/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"]; });





/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\r\n  <span class=\"loading-bar bg-yellow\"></span>\r\n  <span class=\"loading-bar bg-green\"></span>\r\n  <span class=\"loading-bar bg-pink\"></span>\r\n  <span class=\"loading-bar bg-red\"></span>\r\n  <span class=\"loading-bar bg-blue\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  text-align: center; }\n  .loading .loading-bar {\n    display: inline-block;\n    position: relative;\n    width: 8px;\n    height: 70px;\n    margin: 0 5px;\n    -webkit-animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n            animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite; }\n  .loading .loading-bar:nth-child(1) {\n      -webkit-animation-delay: -0.48s;\n              animation-delay: -0.48s; }\n  .loading .loading-bar:nth-child(2) {\n      -webkit-animation-delay: -0.36s;\n              animation-delay: -0.36s; }\n  .loading .loading-bar:nth-child(3) {\n      -webkit-animation-delay: -0.24s;\n              animation-delay: -0.24s; }\n  .loading .loading-bar:nth-child(4) {\n      -webkit-animation-delay: -0.12s;\n              animation-delay: -0.12s; }\n  .loading .loading-bar:nth-child(5) {\n      -webkit-animation-delay: -0s;\n              animation-delay: -0s; }\n  @-webkit-keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n  @keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9DOlxcVXNlcnNcXEJydW5vIE1hcnRpbmVsbGlcXERlc2t0b3BcXHByb2plY3RzXFxhc3Npc3RlYWktZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9hZGluZ1xcbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBSnBCO0lBT0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYiw0RUFBb0U7WUFBcEUsb0VBQW9FLEVBQUE7RUFaeEU7TUFjcUIsK0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO0VBZDVDO01BZXFCLCtCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQWY1QztNQWdCcUIsK0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO0VBaEI1QztNQWlCcUIsK0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO0VBakI1QztNQWtCcUIsNEJBQW9CO2NBQXBCLG9CQUFvQixFQUFBO0VBSXpDO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUEsRUFBQTtFQVJ6QjtFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBO0VBRXZCO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAubG9hZGluZy1iYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBhbmltYXRpb246IGxkcy1hc3Npc3RlLWFpIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxuXHJcbiAgICAmOm50aC1jaGlsZCgxKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuNDhzOyB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMzZzOyB9XHJcbiAgICAmOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMjRzOyB9XHJcbiAgICAmOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMTJzOyB9XHJcbiAgICAmOm50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogLTBzOyB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxkcy1hc3Npc3RlLWFpIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICB9XHJcbn1cclxuIl19 */"

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

/***/ "./src/app/shared/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: getClassPoster, getClassCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassPoster", function() { return getClassPoster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassCategory", function() { return getClassCategory; });
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

module.exports = __webpack_require__(/*! C:\Users\Bruno Martinelli\Desktop\projects\assisteai-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map