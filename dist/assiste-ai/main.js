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

module.exports = "\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n"

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






var AppComponent = /** @class */ (function () {
    function AppComponent(store, profileStore, tokenService) {
        this.store = store;
        this.profileStore = profileStore;
        this.tokenService = tokenService;
        this.title = 'assiste-ai';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.validateToken();
    };
    AppComponent.prototype.validateToken = function () {
        var tokenStore = this.tokenService.getToken();
        var validation = this.tokenService.validationExpirationDate();
        if (tokenStore) {
            validation ? this.profileStore.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_5__["LoadProfile"]()) : this.refreshToken();
        }
    };
    AppComponent.prototype.refreshToken = function () {
        this.store.dispatch(new app_login_store__WEBPACK_IMPORTED_MODULE_4__["VerifyToken"]());
        this.validateToken();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store.config */ "./src/app/store.config.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @main */ "./src/app/main-components/index.ts");
/* harmony import */ var app_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/indicate/indicate.component */ "./src/app/indicate/indicate.component.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                app_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _main__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                app_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_22__["IndicateComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
                app_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastNoAnimationModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    timeOut: 4000,
                    preventDuplicates: false
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_store_config__WEBPACK_IMPORTED_MODULE_14__["rootReducer"], { metaReducers: _store_config__WEBPACK_IMPORTED_MODULE_14__["metaReducers"] }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forFeature('homeList', app_home_store__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forFeature('loginPage', app_login_store__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forFeature('profile', app_profile_store__WEBPACK_IMPORTED_MODULE_11__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forFeature(app_home_store__WEBPACK_IMPORTED_MODULE_9__["effects"].concat(app_login_store__WEBPACK_IMPORTED_MODULE_10__["effects"], app_profile_store__WEBPACK_IMPORTED_MODULE_11__["effects"])),
                _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument(),
            ],
            entryComponents: [app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_22__["IndicateComponent"], app_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"]],
            providers: [_services_home_service__WEBPACK_IMPORTED_MODULE_23__["HomeService"], _services_login_service__WEBPACK_IMPORTED_MODULE_24__["LoginService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_25__["ProfileService"], _services_token_service__WEBPACK_IMPORTED_MODULE_26__["TokenService"]],
            bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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

/***/ "./src/app/core/constants/types.ts":
/*!*****************************************!*\
  !*** ./src/app/core/constants/types.ts ***!
  \*****************************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
var types;
(function (types) {
    types["MOVIE"] = "Filme";
    types["SERIE"] = "S\u00E9rie";
})(types || (types = {}));


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

module.exports = "<main class=\"main\">\r\n  <section class=\"filter-container flex-column\">\r\n    <div class=\"flex-row filter-icons col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-3 col-sm-12 margin-right-2\">\r\n        <mat-label>Busca</mat-label>\r\n        <input matInput autocomplete=\"off\" (keyup)=\"updateList()\">\r\n        <mat-icon matPrefix>search</mat-icon>\r\n      </mat-form-field>\r\n      <div class=\"flex-row col-md-9 col-sm-12 filters\">\r\n        <div class=\"icon-filters-container flex-row col-md-6\">\r\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Todos\" [ngClass]=\"{'active': filters.exibition === 'all'}\" (click)=\"setExibition('all')\">public</mat-icon>\r\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Seguindo\" [ngClass]=\"{'active': filters.exibition === 'group'}\" (click)=\"setExibition('group')\">group</mat-icon>\r\n          <span class=\"divider margin-right-1\"></span>\r\n          <mat-icon class=\"icon filter-icon\" matTooltip=\"Filtro\" [ngClass]=\"{'active': filterOpened}\" (click)=\"filterOpened = !filterOpened\">filter_list</mat-icon>\r\n        </div>\r\n        <button mat-button class=\"btn-default\"  matTooltip=\"Indicar\" (click)=\"openDialog()\">\r\n            <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"margin-top-2\" *ngIf=\"filterOpened\">\r\n      <div class=\"flex-row filter-options\">\r\n        <div class=\"form-group margin-right-2\">\r\n            <mat-chip-list>\r\n              <mat-chip *ngFor=\"let rating of ratingArray\" class=\"chip-default {{rating}}\" [ngClass]=\"{'active': isRatingActive(rating)}\" (click)='updateRatingFilter(rating)'>\r\n                {{rantingEnum[rating]}}\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n        </div>\r\n        <span class=\"divider margin-right-2\"></span>\r\n        <div class=\"form-group\">\r\n            <mat-chip-list>\r\n              <mat-chip *ngFor=\"let type of typeArray\" class=\"chip-default {{type}}\" [ngClass]=\"{'active': isTypeActive(type)}\" (click)='updateTypeFilter(type)'>\r\n                {{typeEnum[type]}}\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"cards-container flex-row flex-wrap\" [@listStagger]='moviesList?.length'>\r\n    <div class=\"card {{getClassPoster(movie.average_rating)}}\" *ngFor=\"let movie of moviesList\">\r\n      <div class=\"poster-container\">\r\n        <div class=\"img-poster\" [ngStyle]=\"{'background-image': 'url(' + movie.poster_path + ')'}\"></div>\r\n        <div class=\"overlay\">\r\n          <div class=\"poster-detail flex-column\">\r\n            <h3 class=\"poster-title\">{{movie.original_title}}</h3>\r\n\r\n            <span class=\"poster-chip {{getClassType(movie.category)}}\">{{typeEnum[movie.category]}}</span>\r\n\r\n            <div class=\"rating-container flex-column\">\r\n              <span>Avaliação Média</span>\r\n              <span class=\"poster-chip {{getClassPoster(movie.average_rating)}}\">{{rantingEnum[movie.average_rating]}}</span>\r\n\r\n              <span>Última avaliação</span>\r\n              <span class=\"poster-chip {{getClassPoster(movie.last_rating)}}\">{{rantingEnum[movie.last_rating]}}</span>\r\n            </div>\r\n\r\n            <div class=\"poster-actions flex-row\">\r\n                <a [routerLink]=\"\" matTooltip=\"Assistir depois\" class=\"watch-later\"><mat-icon>access_time</mat-icon></a>\r\n                <a [routerLink]=\"\" (click)=\"openDialog(movie.urlIndication)\" matTooltip=\"Indicar {{typeEnum[movie.type]}}\" class=\"indicate-now\"><mat-icon>playlist_add</mat-icon></a>\r\n                <a href=\"#\" matTooltip=\"Mais informações\" class=\"more-details\"><mat-icon>arrow_forward</mat-icon></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-loading [hidden]=\"isLoaded\"></app-loading>\r\n    <button class=\"scroll-btn\" [ngClass]=\"{'active': scollTopActive}\" (click)=\"scollTop()\"><mat-icon>arrow_upward</mat-icon></button>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.main .filter-container {\n  position: relative;\n  margin-bottom: 10px; }\n.main .filter-container .filter-icons {\n    align-items: center; }\n.main .filter-container .filter-icons .filters {\n      align-items: center;\n      justify-content: space-between; }\n.main .filter-container .filter-icons .filters .icon-filters-container {\n        align-items: center; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon:hover, .main .filter-container .filter-icons .filters .icon-filters-container .icon.active {\n          color: #005DD6; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon:hover {\n          color: #ffffff; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon.active {\n          color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active {\n    color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active.UNMISSABLE {\n      background: #7EBB6F; }\n.main .filter-container .filter-options .chip-default.active.VERY_GOOD {\n      background: #5D8EBA; }\n.main .filter-container .filter-options .chip-default.active.GOOD {\n      background: #85BDB6; }\n.main .filter-container .filter-options .chip-default.active.COOL {\n      background: #F4C27B; }\n.main .filter-container .filter-options .chip-default.active.BAD {\n      background: #B193B7; }\n.main .filter-container .filter-options .chip-default.active.VERY_BAD {\n      background: #CF6366; }\n.main .filter-container .filter-options .chip-default.active.STAY_AWAY {\n      background: #502B2C; }\n.main .filter-container .filter-options .chip-default.active.MOVIE {\n      background: #01C05D; }\n.main .filter-container .filter-options .chip-default.active.SERIE {\n      background: #F86C2F; }\n.main .cards-container {\n  width: calc(100% + 30px);\n  margin: 0 -15px; }\n.main .cards-container .card {\n    position: relative;\n    box-sizing: border-box;\n    margin: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\n.main .cards-container .card .poster-container {\n      position: relative;\n      overflow: hidden;\n      border-radius: 5px;\n      transition: all .4s ease;\n      background-position: center;\n      background-size: cover;\n      height: 0;\n      padding-bottom: 150%; }\n.main .cards-container .card .poster-container:hover .img-poster {\n        transform: scale(1.1, 1.1);\n        -ms-transform: scale(1.1, 1.1);\n        -webkit-transform: scale(1.1, 1.1); }\n.main .cards-container .card .poster-container .overlay {\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        color: #ffffff;\n        text-decoration: none;\n        transition: opacity .4s ease;\n        opacity: 0;\n        background: rgba(0, 0, 0, 0.8);\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n.main .cards-container .card .poster-container .overlay:hover {\n          opacity: 1; }\n.main .cards-container .card .poster-container .overlay .poster-detail {\n          align-items: center;\n          justify-content: space-between;\n          padding: 15px;\n          height: 100%;\n          box-sizing: border-box; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-title {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-chip {\n            padding: 3px 6px;\n            border-radius: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip {\n              display: block;\n              margin-top: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip:nth-child(2) {\n                margin-bottom: 15px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions {\n            justify-content: space-around;\n            width: 100%; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a {\n              color: #ffffff; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.watch-later {\n                color: #C132C0; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.indicate-now {\n                color: #29BF44; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.more-details {\n                color: #005DD6; }\n.main .cards-container .card .poster-container .img-poster {\n        transition: all .4s ease;\n        background-position: center;\n        background-size: cover;\n        padding-bottom: 150%;\n        width: 100.5%;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n@media (max-width: 480px) {\n  .main .filter-icons {\n    flex-direction: column; }\n    .main .filter-icons mat-form-field {\n      margin-right: 0 !important;\n      margin-bottom: 10px; }\n  .main .cards-container {\n    width: calc(100% + 14px);\n    margin: 0 -7px; }\n    .main .cards-container .card {\n      margin: 7px;\n      flex: 1 0 50%;\n      max-width: calc(50% - 14px); }\n      .main .cards-container .card .poster-container {\n        padding-bottom: 180% !important; }\n        .main .cards-container .card .poster-container .img-poster {\n          padding-bottom: 180% !important; }\n      .main .cards-container .card .poster-title, .main .cards-container .card .poster-chip, .main .cards-container .card .rating-container {\n        font-size: 12px; } }\n@media (min-width: 481px) {\n  .cards-container .card {\n    flex: 1 0 50%;\n    max-width: calc(50% - 30px); } }\n@media (min-width: 850px) {\n  .cards-container .card {\n    flex: 1 0 33.33333%;\n    max-width: calc(33.33333% - 30px); } }\n@media (min-width: 1101px) {\n  .cards-container .card {\n    flex: 1 0 25%;\n    max-width: calc(25% - 30px); } }\n@media (min-width: 1250px) {\n  .cards-container .card {\n    flex: 1 0 20%;\n    max-width: calc(20% - 30px); } }\n@media (min-width: 1460px) {\n  .cards-container .card {\n    flex: 1 0 16.66666667%;\n    max-width: calc(16.66666667% - 30px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJydW5vIE1hcnRpbmVsbGlcXERlc2t0b3BcXHByb2plY3RzXFxhc3Npc3RlYWktZnJvbnQvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xcQnJ1bm8gTWFydGluZWxsaVxcRGVza3RvcFxccHJvamVjdHNcXGFzc2lzdGVhaS1mcm9udC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBd0NBLGtCQUFBO0FBeUJBLFNBQUE7QUMvREE7RUFFSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7QUFIdkI7SUFNTSxtQkFBbUIsRUFBQTtBQU56QjtNQVNRLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtBQVZ0QztRQWFVLG1CQUFtQixFQUFBO0FBYjdCO1VBZ0JnQyxjREpiLEVBQUE7QUNabkI7VUFvQmdCLGNEckJELEVBQUE7QUNDZjtVQXdCZ0IsY0R6QkQsRUFBQTtBQ0NmO0lBbUNVLGNEcENLLEVBQUE7QUNDZjtNQXFDeUIsbUJEakJQLEVBQUE7QUNwQmxCO01Bc0N3QixtQkRuQk4sRUFBQTtBQ25CbEI7TUF1Q21CLG1CRHJCRCxFQUFBO0FDbEJsQjtNQXdDbUIsbUJEdkJELEVBQUE7QUNqQmxCO01BeUNrQixtQkR6QkEsRUFBQTtBQ2hCbEI7TUEwQ3VCLG1CRDNCTCxFQUFBO0FDZmxCO01BMkN3QixtQkQ3Qk4sRUFBQTtBQ2RsQjtNQTZDbUIsbUJEdEJFLEVBQUE7QUN2QnJCO01BOENvQixtQkR4QkMsRUFBQTtBQ3RCckI7RUFvREksd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTtBQXJEbkI7SUF3RE0sa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCREtjO0lDRmQsK0NBQStDLEVBQUE7QUEvRHJEO01Ba0VRLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsa0JESFk7TUNLWix3QkFBd0I7TUFDeEIsMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixTQUFTO01BQ1Qsb0JBQW9CLEVBQUE7QUExRTVCO1FBOEVZLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsa0NBQWtDLEVBQUE7QUFoRjlDO1FBcUZVLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsTUFBSztRQUNMLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCRDFCVTtRQzJCVixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM1QixVQUFVO1FBQ1YsOEJBQTRCO1FBQzVCLG1DQUEyQjtnQkFBM0IsMkJBQTJCLEVBQUE7QUFqR3JDO1VBb0dZLFVBQVUsRUFBQTtBQXBHdEI7VUF3R1ksbUJBQW1CO1VBQ25CLDhCQUE4QjtVQUM5QixhQUFhO1VBQ2IsWUFBWTtVQUNaLHNCQUFzQixFQUFBO0FBNUdsQztZQStHYyxrQkFBa0IsRUFBQTtBQS9HaEM7WUFtSGMsZ0JBQWdCO1lBQ2hCLGtCRG5ETSxFQUFBO0FDakVwQjtZQXdIYyxrQkFBa0IsRUFBQTtBQXhIaEM7Y0EySGdCLGNBQWM7Y0FDZCxlQUFlLEVBQUE7QUE1SC9CO2dCQStIa0IsbUJBQW1CLEVBQUE7QUEvSHJDO1lBc0ljLDZCQUE2QjtZQUM3QixXQUFXLEVBQUE7QUF2SXpCO2NBMElnQixjRDNJRCxFQUFBO0FDQ2Y7Z0JBNklrQyxjRG5JZixFQUFBO0FDVm5CO2dCQThJbUMsY0RySWYsRUFBQTtBQ1RwQjtnQkErSWtDLGNEbklmLEVBQUE7QUNabkI7UUF1SlUsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixtQ0FBMkI7Z0JBQTNCLDJCQUEyQixFQUFBO0FBT3JDO0VBQ0U7SUFFSSxzQkFBc0IsRUFBQTtJQUYxQjtNQUtNLDBCQUEwQjtNQUMxQixtQkFBbUIsRUFBQTtFQU56QjtJQVdJLHdCQUF3QjtJQUN4QixjQUFjLEVBQUE7SUFabEI7TUFlTSxXQUFXO01BQ1gsYUQvSGE7TUNnSWIsMkJBQTJDLEVBQUE7TUFqQmpEO1FBb0JRLCtCQUErQixFQUFBO1FBcEJ2QztVQXVCVSwrQkFBK0IsRUFBQTtNQXZCekM7UUE0QlEsZUFBZSxFQUFBLEVBQ2hCO0FBTVQ7RUFDRTtJQUNFLGFEcEppQjtJQ3FKakIsMkJBQTJDLEVBQUEsRUFDNUM7QUFFSDtFQUNFO0lBQ0UsbUJEekp1QjtJQzBKdkIsaUNBQTJDLEVBQUEsRUFDNUM7QUFFSDtFQUNFO0lBQ0UsYUQ5SmlCO0lDK0pqQiwyQkFBMkMsRUFBQSxFQUM1QztBQUVIO0VBQ0U7SUFDRSxhRG5LaUI7SUNvS2pCLDJCQUEyQyxFQUFBLEVBQzVDO0FBRUg7RUFDRTtJQUNFLHNCRHhLMkI7SUN5SzNCLG9DQUEyQyxFQUFBLEVBQzVDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kYmFja2dyb3VuZDogIzI4MjgyODtcclxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcclxuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xyXG5cclxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xyXG5cclxuJGxvZ28teWVsbG93OiAjRDNEOTRCO1xyXG4kbG9nby1ncmVlbjogIzI5QkY0NDtcclxuJGxvZ28tcGluazogI0MxMzJDMDtcclxuJGxvZ28tcmVkOiAjREYxRDQzO1xyXG4kbG9nby1ibHVlOiAjMDA1REQ2O1xyXG5cclxuJHJhdGluZy0xOiAjNTAyQjJDO1xyXG4kcmF0aW5nLTI6ICNDRjYzNjY7XHJcbiRyYXRpbmctMzogI0IxOTNCNztcclxuJHJhdGluZy00OiAjRjRDMjdCO1xyXG4kcmF0aW5nLTU6ICM4NUJEQjY7XHJcbiRyYXRpbmctNjogIzVEOEVCQTtcclxuJHJhdGluZy03OiAjN0VCQjZGO1xyXG5cclxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xyXG4kY29sb3ItbW92aWU6ICMwMUMwNUQ7XHJcblxyXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcclxuXHJcbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xyXG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xyXG4kbGlnaHQtZ3JheTogI0U0RTRFNDtcclxuJGdyYXk6ICNjZGQzZDg7XHJcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XHJcbiRkYXJrZXItZ3JheTogIzZBNkM2NjtcclxuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcclxuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XHJcblxyXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XHJcblxyXG4vKiBXSURUSCBDT0xVTU5TICovXHJcbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XHJcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XHJcbiR3aWR0aC0zOiAyNSU7XHJcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XHJcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtNjogNTAlO1xyXG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XHJcbiR3aWR0aC05OiA3NSU7XHJcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtMTI6IDEwMCU7XHJcblxyXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xyXG4kd2lkdGgtMi1jb2x1bW5zOiA1MCU7XHJcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcclxuJHdpZHRoLTQtY29sdW1uczogMjUlO1xyXG4kd2lkdGgtNS1jb2x1bW5zOiAyMCU7XHJcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XHJcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XHJcbiR3aWR0aC04LWNvbHVtbnM6IDEyLjUlO1xyXG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcclxuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcclxuXHJcbi8qIFNJWkUgKi9cclxuJHNpemUtZGVmYXVsdDogMTJweDtcclxuJHJhZGl1cy1kZWZhdWx0OiA1cHg7XHJcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5tYWluIHtcclxuICAuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIC5maWx0ZXItaWNvbnMge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmZpbHRlcnMge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAuaWNvbi1maWx0ZXJzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmUgeyBjb2xvcjogJGxvZ28tYmx1ZTsgfVxyXG5cclxuICAgICAgICAgICAgJi5maWx0ZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLW9wdGlvbnMge1xyXG4gICAgICAuY2hpcC1kZWZhdWx0IHtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICYuVU5NSVNTQUJMRSB7IGJhY2tncm91bmQ6ICRyYXRpbmctNyB9XHJcbiAgICAgICAgICAmLlZFUllfR09PRCB7IGJhY2tncm91bmQ6ICRyYXRpbmctNiB9XHJcbiAgICAgICAgICAmLkdPT0QgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTUgfVxyXG4gICAgICAgICAgJi5DT09MIHsgYmFja2dyb3VuZDogJHJhdGluZy00IH1cclxuICAgICAgICAgICYuQkFEIHsgYmFja2dyb3VuZDogJHJhdGluZy0zIH1cclxuICAgICAgICAgICYuVkVSWV9CQUQgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTIgfVxyXG4gICAgICAgICAgJi5TVEFZX0FXQVkgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTEgfVxyXG5cclxuICAgICAgICAgICYuTU9WSUV7IGJhY2tncm91bmQ6ICRjb2xvci1tb3ZpZSB9XHJcbiAgICAgICAgICAmLlNFUklFIHsgYmFja2dyb3VuZDogJGNvbG9yLXNlcmllIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XHJcbiAgICBtYXJnaW46IDAgLTE1cHg7XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG5cclxuICAgICAgLnBvc3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtZGVmYXVsdDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTUwJTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAuaW1nLXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGVhc2U7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgwKTtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdGVyLWRldGFpbCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgLnBvc3Rlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucG9zdGVyLWNoaXAge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmF0aW5nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAucG9zdGVyLWNoaXAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wb3N0ZXItYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgJi53YXRjaC1sYXRlciB7IGNvbG9yOiAkbG9nby1waW5rOyB9XHJcbiAgICAgICAgICAgICAgICAgICYuaW5kaWNhdGUtbm93IHsgY29sb3I6ICRsb2dvLWdyZWVuOyB9XHJcbiAgICAgICAgICAgICAgICAgICYubW9yZS1kZXRhaWxzeyBjb2xvcjogJGxvZ28tYmx1ZTsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZy1wb3N0ZXIge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMC41JTtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIC5maWx0ZXItaWNvbnMge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHMtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDE0cHgpO1xyXG4gICAgICBtYXJnaW46IDAgLTdweDtcclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDdweDtcclxuICAgICAgICBmbGV4OiAxIDAgJHdpZHRoLTItY29sdW1ucztcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtMi1jb2x1bW5zfSAtIDE0cHgpO1xyXG5cclxuICAgICAgICAucG9zdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTgwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIC5pbWctcG9zdGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE4MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3N0ZXItdGl0bGUsIC5wb3N0ZXItY2hpcCwgLnJhdGluZy1jb250YWluZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTItY29sdW1ucztcclxuICAgIG1heC13aWR0aDogY2FsYygjeyR3aWR0aC0yLWNvbHVtbnN9IC0gMzBweCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xyXG4gICAgZmxleDogMSAwICR3aWR0aC0zLWNvbHVtbnM7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtMy1jb2x1bW5zfSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMXB4KSB7XHJcbiAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTQtY29sdW1ucztcclxuICAgIG1heC13aWR0aDogY2FsYygjeyR3aWR0aC00LWNvbHVtbnN9IC0gMzBweCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcclxuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcclxuICAgIGZsZXg6IDEgMCAkd2lkdGgtNS1jb2x1bW5zO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTUtY29sdW1uc30gLSAzMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NjBweCkge1xyXG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xyXG4gICAgZmxleDogMSAwICR3aWR0aC02LWNvbHVtbnM7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtNi1jb2x1bW5zfSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _constants_ratings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constants/ratings */ "./src/app/core/constants/ratings.ts");
/* harmony import */ var _constants_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @constants/types */ "./src/app/core/constants/types.ts");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/indicate/indicate.component */ "./src/app/indicate/indicate.component.ts");
/* harmony import */ var _shared_decorators_throttle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/decorators/throttle */ "./src/app/shared/decorators/throttle.ts");
/* harmony import */ var app_home_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/home/store */ "./src/app/home/store/index.ts");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);














var HomeComponent = /** @class */ (function () {
    function HomeComponent(store, profileStore, tokenService, dialog) {
        this.store = store;
        this.profileStore = profileStore;
        this.tokenService = tokenService;
        this.dialog = dialog;
        this.floatLabel = 'always';
        this.typeEnum = _constants_types__WEBPACK_IMPORTED_MODULE_7__["types"];
        this.typeArray = lodash__WEBPACK_IMPORTED_MODULE_13__["keys"](_constants_types__WEBPACK_IMPORTED_MODULE_7__["types"]);
        this.rantingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_6__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_13__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_6__["ratings"]);
        this.filters = {
            search: '',
            exibition: 'all',
            ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
            types: ['MOVIE', 'SERIE'],
            currentPage: 1,
            lastPage: null
        };
        this.moviesList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_11__["getHomeListResponse"]));
        this.pagination$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_11__["getHomeListPagination"]));
        this.userLogged$ = this.profileStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_12__["getProfile"]));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_11__["LoadHomeList"](this.filters));
        this.moviesList$.subscribe(function (result) {
            if (result.length) {
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
        return lodash__WEBPACK_IMPORTED_MODULE_13__["includes"](this.filters.ratings, rating);
    };
    HomeComponent.prototype.isTypeActive = function (type) {
        return lodash__WEBPACK_IMPORTED_MODULE_13__["includes"](this.filters.types, type);
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
                    _this.filters.currentPage = 1;
                    _this.filters.lastPage = null;
                    _this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_11__["UpdateHomeList"](_this.filters));
                    window.scroll(0, 0);
                }
            });
        }
        else {
            var dialogRef = this.dialog.open(app_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], {
                width: '90%',
                maxWidth: '400px',
                data: { tab: 0 }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.updateList();
                }
            });
        }
    };
    HomeComponent.prototype.updateList = function () {
        console.log('buscou');
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
    HomeComponent.prototype.updateTypeFilter = function (tag) {
        if (lodash__WEBPACK_IMPORTED_MODULE_13__["includes"](this.filters.types, tag)) {
            if (this.filters.types.length > 1) {
                this.filters.types = lodash__WEBPACK_IMPORTED_MODULE_13__["remove"](this.filters.types, function (n) {
                    return n !== tag;
                });
            }
        }
        else {
            this.filters.types.push(tag);
        }
        this.updateList();
    };
    HomeComponent.prototype.getClassPoster = function (averageRating) {
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
    };
    HomeComponent.prototype.getClassType = function (type) {
        var typeClass;
        switch (type) {
            case 'MOVIE':
                typeClass = 'type-movie';
                break;
            case 'SERIE':
                typeClass = 'type-serie';
                break;
            default:
                break;
        }
        return typeClass;
    };
    HomeComponent.prototype.scollTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_shared_decorators_throttle__WEBPACK_IMPORTED_MODULE_10__["throttle"])(800),
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
            _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
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
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_LIST"]:
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_HOME_LIST"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_LIST_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, homeList: state.homeList.concat(action.response.data), pagination: new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"](action.response) });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_HOME_LIST_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, homeList: action.response.data, pagination: new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"](action.response) });
        }
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_LIST_FAIL"]:
        case app_home_store_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_HOME_LIST_FAIL"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, homeList: [], pagination: null });
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

module.exports = "<h2 class=\"title-modal\">Nova Indicação</h2>\r\n\r\n<div class=\"container\">\r\n  <form novalidate [formGroup]=\"formGroup\" (submit)=\"saveIndication()\">\r\n    <div class=\"flex-row col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-8 col-sm-12 margin-right-1 dialog-input-prefix\">\r\n        <mat-label>Link IMDb/TMDb</mat-label>\r\n        <input matInput autocomplete=\"off\" formControlName='url'\r\n          placeholder=\"http://www.imdb.com/title/exemple ou https://www.themoviedb.org/movie/exemple\">\r\n        <mat-icon matPrefix>link</mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-4 col-sm-12\">\r\n          <mat-label>Avaliação</mat-label>\r\n        <mat-select panelClass=\"panel-dark\" formControlName='rating'>\r\n          <mat-option *ngFor=\"let rating of ratingArray\" [value]=\"rating\">\r\n            {{ratingEnum[rating]}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"flex-row col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12\">\r\n        <mat-label>Comentário</mat-label>\r\n        <textarea matInput formControlName='comment'></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div mat-dialog-actions>\r\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n      <button mat-button cdkFocusInitial class=\"btn-default\" type=\"submit\">\r\n        <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon> Indicar\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/indicate/indicate.component.scss":
/*!**************************************************!*\
  !*** ./src/app/indicate/indicate.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.title-modal {\n  width: 100%;\n  color: #E6EAEC;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #1d1d1d; }\n@media (max-width: 480px) {\n  .container .flex-row {\n    flex-direction: column; }\n    .container .flex-row mat-form-field {\n      margin-right: 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaWNhdGUvQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvaW5kaWNhdGUvQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXBwXFxpbmRpY2F0ZVxcaW5kaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQXdDQSxrQkFBQTtBQXlCQSxTQUFBO0FDL0RBO0VBQ0UsV0FBVztFQUNYLGNEMEJvQjtFQ3pCcEIsb0JBQW9CO0VBQ3BCLGdDRDhCMkIsRUFBQTtBQzNCN0I7RUFDRTtJQUVJLHNCQUFzQixFQUFBO0lBRjFCO01BS00sMEJBQTBCLEVBQUEsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9pbmRpY2F0ZS9pbmRpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbiRoZWFkZXItYmFja2dyb3VuZDogIzMwMzAzMDtcclxuJGJhY2tncm91bmQtZmFjZWJvb2s6ICM0MjY3QjI7XHJcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcclxuXHJcbiRidXR0b24tcHJpbWFyeTogIzI5QkY0NDtcclxuXHJcbiRsb2dvLXllbGxvdzogI0QzRDk0QjtcclxuJGxvZ28tZ3JlZW46ICMyOUJGNDQ7XHJcbiRsb2dvLXBpbms6ICNDMTMyQzA7XHJcbiRsb2dvLXJlZDogI0RGMUQ0MztcclxuJGxvZ28tYmx1ZTogIzAwNURENjtcclxuXHJcbiRyYXRpbmctMTogIzUwMkIyQztcclxuJHJhdGluZy0yOiAjQ0Y2MzY2O1xyXG4kcmF0aW5nLTM6ICNCMTkzQjc7XHJcbiRyYXRpbmctNDogI0Y0QzI3QjtcclxuJHJhdGluZy01OiAjODVCREI2O1xyXG4kcmF0aW5nLTY6ICM1RDhFQkE7XHJcbiRyYXRpbmctNzogIzdFQkI2RjtcclxuXHJcbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcclxuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xyXG5cclxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XHJcblxyXG4kbGlnaHRlc3QtZ3JheTogI0YxRjRGNTtcclxuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcclxuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XHJcbiRncmF5OiAjY2RkM2Q4O1xyXG4kZGFyay1ncmF5OiAjNzU4MThiO1xyXG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XHJcbiRkYXJrZXN0LWdyYXk6ICMzMzMzMzM7XHJcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xyXG5cclxuJGZvbnQtZGVmYXVsdDogJGRhcmtlci1ncmF5O1xyXG5cclxuLyogV0lEVEggQ09MVU1OUyAqL1xyXG4kd2lkdGgtMTogOC4zMzMzMzMzMzMlO1xyXG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xyXG4kd2lkdGgtMzogMjUlO1xyXG4kd2lkdGgtNDogMzMuMzMzMzMzMzMlO1xyXG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTY6IDUwJTtcclxuJHdpZHRoLTc6IDU4LjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtOTogNzUlO1xyXG4kd2lkdGgtMTA6IDgzLjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTEyOiAxMDAlO1xyXG5cclxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcclxuJHdpZHRoLTItY29sdW1uczogNTAlO1xyXG4kd2lkdGgtMy1jb2x1bW5zOiAzMy4zMzMzMyU7XHJcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcclxuJHdpZHRoLTUtY29sdW1uczogMjAlO1xyXG4kd2lkdGgtNi1jb2x1bW5zOiAxNi42NjY2NjY2NjclO1xyXG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xyXG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcclxuJHdpZHRoLTktY29sdW1uczogMTEuMSU7XHJcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XHJcblxyXG4vKiBTSVpFICovXHJcbiRzaXplLWRlZmF1bHQ6IDEycHg7XHJcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xyXG4iLCJAaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4udGl0bGUtbW9kYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAkbGlnaHRlci1ncmF5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFya2VzdC1ncmF5LWJvcmRlclxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5mbGV4LXJvdyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var IndicateComponent = /** @class */ (function () {
    function IndicateComponent(toastr, fb, dialogRef, data) {
        this.toastr = toastr;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ratingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_6__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"]);
    }
    IndicateComponent.prototype.ngOnInit = function () {
        this.formGroup = this.fb.group({
            url: [this.data.url, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ['']
        });
    };
    IndicateComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    IndicateComponent.prototype.saveIndication = function () {
        if (this.formGroup.valid) {
            this.toastr.success('<i class="material-icons">done</i>Indicação realizada com sucesso!', '', { enableHtml: true });
            this.dialogRef.close(true);
        }
    };
    IndicateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indicate',
            template: __webpack_require__(/*! ./indicate.component.html */ "./src/app/indicate/indicate.component.html"),
            styles: [__webpack_require__(/*! ./indicate.component.scss */ "./src/app/indicate/indicate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], IndicateComponent);
    return IndicateComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\" *ngIf=\"!(userLoading$ | async) && !(loginLoading$ | async)\">\r\n  <div class=\"social-login margin-bottom-2\">\r\n    <button class=\"btn btn-facebook margin-bottom-2\" (click)=\"loginFacebook()\"><img src=\"assets/img/facebook.png\" height=\"25px\"> <span>Entrar com o Facebook</span></button>\r\n  </div>\r\n  <div class=\"manual-login\">\r\n    <mat-tab-group class=\"tab-login\" animationDuration=\"1500ms\" [selectedIndex]=\"tabActive\">\r\n      <mat-tab label=\"Login\">\r\n        <ng-container *ngIf=\"!isForgetPassword\">\r\n          <form novalidate [formGroup]=\"formSignIn\" (submit)=\"signIn()\">\r\n            <div class=\"flex-row col-md-12 col-sm-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n                <mat-label>E-mail</mat-label>\r\n                <input matInput autocomplete=\"off\" formControlName='email'\r\n                  placeholder=\"email@email.com.br\">\r\n                <mat-icon matPrefix>email</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"flex-column col-md-12 col-sm-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n                <mat-label>Senha</mat-label>\r\n                <input matInput type=\"password\" formControlName='password'>\r\n                <mat-icon matPrefix>lock</mat-icon>\r\n              </mat-form-field>\r\n              <div class=\"forget-password\">\r\n                <span (click)=\"setForgetPassword()\">Esqueceu sua senha?</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"flex-row col-md-12 col-sm-12 margin-top-1\">\r\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Entrar</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"isForgetPassword\">\r\n          <form novalidate [formGroup]=\"formForgetPassword\" (submit)=\"forgetPassword()\">\r\n            <div class=\"flex-row col-md-12 col-sm-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n                <mat-label>E-mail</mat-label>\r\n                <input matInput autocomplete=\"off\" formControlName='email'\r\n                  placeholder=\"email@email.com.br\">\r\n                <mat-icon matPrefix>email</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"flex-column align-items-center col-md-12 col-sm-12 margin-top-1\">\r\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Enviar e-mail</button>\r\n              <button mat-button class=\"col-md-5 margin-top-1\" (click)=\"setForgetPassword()\">Voltar</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n      </mat-tab>\r\n      <mat-tab label=\"Cadastrar\">\r\n        <form novalidate [formGroup]=\"formRegister\" (submit)=\"register()\">\r\n          <div class=\"flex-row col-md-12 col-sm-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n              <mat-label>Nome</mat-label>\r\n              <input matInput autocomplete=\"off\" formControlName='name'>\r\n              <mat-icon matPrefix>perm_identity</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-row col-md-12 col-sm-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n              <mat-label>E-mail</mat-label>\r\n              <input matInput autocomplete=\"off\" formControlName='email'\r\n                placeholder=\"email@email.com.br\">\r\n              <mat-icon matPrefix>email</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-column col-md-12 col-sm-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 col-sm-12 dialog-input-prefix\">\r\n              <mat-label>Senha</mat-label>\r\n              <input matInput type=\"password\" formControlName='password'>\r\n              <mat-icon matPrefix>lock</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-row col-md-12 col-sm-12 margin-top-1\">\r\n            <button mat-button cdkFocusInitial class=\"btn-default col-md-12 col-sm-12\" type=\"submit\">Cadastrar</button>\r\n          </div>\r\n        </form>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n<app-loading *ngIf=\"(userLoading$ | async) || (loginLoading$ | async)\"></app-loading>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.login-container .social-login {\n  border-bottom: 1px solid #1d1d1d; }\n.login-container .social-login .btn-facebook {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%; }\n.login-container .social-login .btn-facebook img {\n      margin-right: 10px; }\n.login-container .forget-password {\n  text-align: right;\n  margin: 5px 0 10px; }\n.login-container .forget-password span {\n    color: #75818b;\n    text-decoration: none;\n    cursor: pointer; }\n.login-container .forget-password span:hover {\n      color: #F1F4F5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQXdDQSxrQkFBQTtBQXlCQSxTQUFBO0FDL0RBO0VBR0ksZ0NEK0J5QixFQUFBO0FDbEM3QjtJQU1NLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtBQVRqQjtNQVdZLGtCQUFrQixFQUFBO0FBWDlCO0VBZ0JJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQWpCdEI7SUFvQk0sY0RXYTtJQ1ZiLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7QUF0QnJCO01BeUJRLGNERWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kYmFja2dyb3VuZDogIzI4MjgyODtcclxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcclxuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xyXG5cclxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xyXG5cclxuJGxvZ28teWVsbG93OiAjRDNEOTRCO1xyXG4kbG9nby1ncmVlbjogIzI5QkY0NDtcclxuJGxvZ28tcGluazogI0MxMzJDMDtcclxuJGxvZ28tcmVkOiAjREYxRDQzO1xyXG4kbG9nby1ibHVlOiAjMDA1REQ2O1xyXG5cclxuJHJhdGluZy0xOiAjNTAyQjJDO1xyXG4kcmF0aW5nLTI6ICNDRjYzNjY7XHJcbiRyYXRpbmctMzogI0IxOTNCNztcclxuJHJhdGluZy00OiAjRjRDMjdCO1xyXG4kcmF0aW5nLTU6ICM4NUJEQjY7XHJcbiRyYXRpbmctNjogIzVEOEVCQTtcclxuJHJhdGluZy03OiAjN0VCQjZGO1xyXG5cclxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xyXG4kY29sb3ItbW92aWU6ICMwMUMwNUQ7XHJcblxyXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcclxuXHJcbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xyXG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xyXG4kbGlnaHQtZ3JheTogI0U0RTRFNDtcclxuJGdyYXk6ICNjZGQzZDg7XHJcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XHJcbiRkYXJrZXItZ3JheTogIzZBNkM2NjtcclxuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcclxuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XHJcblxyXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XHJcblxyXG4vKiBXSURUSCBDT0xVTU5TICovXHJcbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XHJcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XHJcbiR3aWR0aC0zOiAyNSU7XHJcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XHJcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtNjogNTAlO1xyXG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XHJcbiR3aWR0aC05OiA3NSU7XHJcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtMTI6IDEwMCU7XHJcblxyXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xyXG4kd2lkdGgtMi1jb2x1bW5zOiA1MCU7XHJcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcclxuJHdpZHRoLTQtY29sdW1uczogMjUlO1xyXG4kd2lkdGgtNS1jb2x1bW5zOiAyMCU7XHJcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XHJcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XHJcbiR3aWR0aC04LWNvbHVtbnM6IDEyLjUlO1xyXG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcclxuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcclxuXHJcbi8qIFNJWkUgKi9cclxuJHNpemUtZGVmYXVsdDogMTJweDtcclxuJHJhZGl1cy1kZWZhdWx0OiA1cHg7XHJcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG5cclxuICAuc29jaWFsLWxvZ2luIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFya2VzdC1ncmF5LWJvcmRlcjtcclxuXHJcbiAgICAuYnRuLWZhY2Vib29rIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaW1nIHsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JnZXQtcGFzc3dvcmQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDVweCAwIDEwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JheTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var app_login_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/login/store */ "./src/app/login/store/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









var LoginComponent = /** @class */ (function () {
    function LoginComponent(store, loginStore, fb, dialogRef, data) {
        this.store = store;
        this.loginStore = loginStore;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ratingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_8__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"]);
        this.userLogged$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_6__["getProfile"]));
        this.userLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_6__["getLoading"]));
        this.loginLoading$ = this.loginStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_login_store__WEBPACK_IMPORTED_MODULE_7__["getLoginLoading"]));
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.userLogged$.subscribe(function (result) {
            if (result) {
                _this.dialogRef.close();
            }
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
                _this.loginStore.dispatch(new app_login_store__WEBPACK_IMPORTED_MODULE_7__["Login"](paramsLogin));
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
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
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL, VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAIL, Login, LoginSuccess, LoginFail, Logout, LogoutSuccess, LogoutFail, VerifyToken, VerifyTokenSuccess, VerifyTokenFail */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_SUCCESS", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_FAIL", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LoginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LogoutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutFail", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["LogoutFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyToken", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["VerifyToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenSuccess", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["VerifyTokenSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenFail", function() { return _login_action__WEBPACK_IMPORTED_MODULE_0__["VerifyTokenFail"]; });




/***/ }),

/***/ "./src/app/login/store/actions/login-action.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/store/actions/login-action.ts ***!
  \*****************************************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL, VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAIL, Login, LoginSuccess, LoginFail, Logout, LogoutSuccess, LogoutFail, VerifyToken, VerifyTokenSuccess, VerifyTokenFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAIL", function() { return LOGOUT_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN", function() { return VERIFY_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_SUCCESS", function() { return VERIFY_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_FAIL", function() { return VERIFY_TOKEN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return LoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return LogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutFail", function() { return LogoutFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyToken", function() { return VerifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenSuccess", function() { return VerifyTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenFail", function() { return VerifyTokenFail; });
var LOGIN = '[Login] Login';
var LOGIN_SUCCESS = '[Login] Login Success';
var LOGIN_FAIL = '[Login] Login Fail';
var LOGOUT = '[Logout] Logout';
var LOGOUT_SUCCESS = '[Logout] Logout Success';
var LOGOUT_FAIL = '[Logout] Logout Fail';
var VERIFY_TOKEN = '[Token] Verify Token';
var VERIFY_TOKEN_SUCCESS = '[Token] Verify Token Success';
var VERIFY_TOKEN_FAIL = '[Token] Verify Token Fail';
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
/*! exports provided: effects, LoginEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _login_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-effect */ "./src/app/login/store/effects/login-effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginEffects", function() { return _login_effect__WEBPACK_IMPORTED_MODULE_0__["LoginEffects"]; });

/* empty/unused harmony star reexport */

var effects = [_login_effect__WEBPACK_IMPORTED_MODULE_0__["LoginEffects"]];



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
/* harmony import */ var app_login_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/login/store */ "./src/app/login/store/index.ts");
/* harmony import */ var app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/login/store/actions */ "./src/app/login/store/actions/index.ts");












var LoginEffects = /** @class */ (function () {
    function LoginEffects(actions$, store, loginStore, service, tokenService, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.loginStore = loginStore;
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
            _this.store.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_9__["LoadProfile"]());
        }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.sendLogout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LogoutSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LogoutFail"](error)); }));
        }));
        this.logoutFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGOUT_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.toastr.error('<i class="material-icons">error</i> Erro ao sair. Tente novamente mais tarde.', '', { enableHtml: true });
        }));
        this.logoutSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["LOGOUT_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.tokenService.removeStorage();
            _this.store.dispatch(new app_profile_store__WEBPACK_IMPORTED_MODULE_9__["ClearProfile"]());
            _this.toastr.success('<i class="material-icons">done</i> Logout realizado com sucesso.', '', { enableHtml: true });
        }));
        this.verifyToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["VERIFY_TOKEN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.service.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["VerifyTokenSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["VerifyTokenFail"](error)); }));
        }));
        this.verifyTokenFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["VERIFY_TOKEN_FAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.loginStore.dispatch(new app_login_store__WEBPACK_IMPORTED_MODULE_10__["Logout"]());
            _this.toastr.error('<i class="material-icons">error</i> Sessão encerrada. Realize o login novamente.', '', { enableHtml: true });
        }));
        this.verifyTokenSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_login_store_actions__WEBPACK_IMPORTED_MODULE_11__["VERIFY_TOKEN_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            _this.tokenService.setToken(action.response);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "verifyToken$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "verifyTokenFail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoginEffects.prototype, "verifyTokenSuccess$", void 0);
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

/***/ "./src/app/login/store/index.ts":
/*!**************************************!*\
  !*** ./src/app/login/store/index.ts ***!
  \**************************************/
/*! exports provided: effects, reducers, getState, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL, VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAIL, Login, LoginSuccess, LoginFail, Logout, LogoutSuccess, LogoutFail, VerifyToken, VerifyTokenSuccess, VerifyTokenFail, LoginEffects, getLoginState, getLoginIds, getLoginEntities, getAllLogin, getLogin, getLoginLoading, getLoginLoaded */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_FAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_TOKEN_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LogoutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LogoutFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyToken", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VerifyToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VerifyTokenSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTokenFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VerifyTokenFail"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/login/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["LoginEffects"]; });

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


var reducers = {
    loginPage: app_login_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var getState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('loginPage');


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
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]:
        case app_login_store_actions__WEBPACK_IMPORTED_MODULE_2__["VERIFY_TOKEN"]: {
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

/***/ "./src/app/login/store/selectors/index.ts":
/*!************************************************!*\
  !*** ./src/app/login/store/selectors/index.ts ***!
  \************************************************/
/*! exports provided: getLoginState, getLoginIds, getLoginEntities, getAllLogin, getLogin, getLoginLoading, getLoginLoaded */
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

/***/ "./src/app/main-components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"header\">\r\n    <div class=\"header-logo\">\r\n      <img src=\"assets/img/header-logo.png\">\r\n    </div>\r\n    <div class=\"header-settings\">\r\n      <div class=\"profile-image\" *ngIf=\"(userLogged$ | async)\" (click)='logout()'>\r\n        <img src=\"assets/img/user.jpg\">\r\n      </div>\r\n      <div class=\"signIn-container\" *ngIf=\"!(userLogged$ | async)\">\r\n        <span (click)=\"openDialog(0)\">Entrar</span> ou <span (click)=\"openDialog(1)\">Cadastrar</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/main-components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-components/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\nheader {\n  padding: 10px 0;\n  background: #303030;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\nheader .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 auto;\n    width: 90%; }\nheader .header img {\n      height: 29px; }\nheader .header .header-settings {\n      display: flex;\n      align-items: center; }\nheader .header .header-settings .signIn-container {\n        font-size: 14px; }\nheader .header .header-settings .signIn-container span {\n          display: inline-block;\n          color: #F1F4F5;\n          cursor: pointer; }\nheader .header .header-settings .signIn-container span:first-child {\n            margin-right: 7px; }\nheader .header .header-settings .signIn-container span:last-child {\n            margin-left: 7px; }\nheader .header .header-settings .signIn-container span:hover {\n            color: #D3D94B; }\nheader .header .header-settings .profile-image {\n        width: 43px;\n        height: 43px;\n        border-radius: 50%;\n        position: relative;\n        overflow: hidden;\n        text-align: center;\n        border: 3px solid #005DD6; }\nheader .header .header-settings .profile-image img {\n          height: 100%;\n          margin-left: 50%;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%); }\nheader .header .header-settings mat-icon:hover {\n        cursor: pointer; }\n@media (min-width: 1460px) {\n  header .header {\n    max-width: 1460px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXEJydW5vIE1hcnRpbmVsbGlcXERlc2t0b3BcXHByb2plY3RzXFxhc3Npc3RlYWktZnJvbnQvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWluLWNvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcQnJ1bm8gTWFydGluZWxsaVxcRGVza3RvcFxccHJvamVjdHNcXGFzc2lzdGVhaS1mcm9udC9zcmNcXGFwcFxcbWFpbi1jb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBd0NBLGtCQUFBO0FBeUJBLFNBQUE7QUMvREE7RUFDRSxlQUFlO0VBQ2YsbUJEQXlCO0VDR3pCLCtDQUErQyxFQUFBO0FBTGpEO0lBUUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFVBQVUsRUFBQTtBQVpkO01BZU0sWUFBWSxFQUFBO0FBZmxCO01BbUJNLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtBQXBCekI7UUF1QlEsZUFBZSxFQUFBO0FBdkJ2QjtVQXlCVSxxQkFBcUI7VUFDckIsY0RDYTtVQ0FiLGVBQWUsRUFBQTtBQTNCekI7WUE2QjBCLGlCQUFpQixFQUFBO0FBN0IzQztZQThCeUIsZ0JBQWdCLEVBQUE7QUE5QnpDO1lBaUNZLGNEekJTLEVBQUE7QUNSckI7UUF1Q1EsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIseUJBQXlCLEVBQUE7QUE3Q2pDO1VBZ0RVLFlBQVk7VUFDWixnQkFBZ0I7VUFDaEIsbUNBQTJCO2tCQUEzQiwyQkFBMkIsRUFBQTtBQWxEckM7UUF3RFUsZUFBZSxFQUFBO0FBT3pCO0VBQ0U7SUFFSSxpQkFBaUIsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kYmFja2dyb3VuZDogIzI4MjgyODtcclxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcclxuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xyXG5cclxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xyXG5cclxuJGxvZ28teWVsbG93OiAjRDNEOTRCO1xyXG4kbG9nby1ncmVlbjogIzI5QkY0NDtcclxuJGxvZ28tcGluazogI0MxMzJDMDtcclxuJGxvZ28tcmVkOiAjREYxRDQzO1xyXG4kbG9nby1ibHVlOiAjMDA1REQ2O1xyXG5cclxuJHJhdGluZy0xOiAjNTAyQjJDO1xyXG4kcmF0aW5nLTI6ICNDRjYzNjY7XHJcbiRyYXRpbmctMzogI0IxOTNCNztcclxuJHJhdGluZy00OiAjRjRDMjdCO1xyXG4kcmF0aW5nLTU6ICM4NUJEQjY7XHJcbiRyYXRpbmctNjogIzVEOEVCQTtcclxuJHJhdGluZy03OiAjN0VCQjZGO1xyXG5cclxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xyXG4kY29sb3ItbW92aWU6ICMwMUMwNUQ7XHJcblxyXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcclxuXHJcbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xyXG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xyXG4kbGlnaHQtZ3JheTogI0U0RTRFNDtcclxuJGdyYXk6ICNjZGQzZDg7XHJcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XHJcbiRkYXJrZXItZ3JheTogIzZBNkM2NjtcclxuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcclxuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XHJcblxyXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XHJcblxyXG4vKiBXSURUSCBDT0xVTU5TICovXHJcbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XHJcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XHJcbiR3aWR0aC0zOiAyNSU7XHJcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XHJcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtNjogNTAlO1xyXG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XHJcbiR3aWR0aC05OiA3NSU7XHJcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtMTI6IDEwMCU7XHJcblxyXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xyXG4kd2lkdGgtMi1jb2x1bW5zOiA1MCU7XHJcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcclxuJHdpZHRoLTQtY29sdW1uczogMjUlO1xyXG4kd2lkdGgtNS1jb2x1bW5zOiAyMCU7XHJcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XHJcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XHJcbiR3aWR0aC04LWNvbHVtbnM6IDEyLjUlO1xyXG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcclxuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcclxuXHJcbi8qIFNJWkUgKi9cclxuJHNpemUtZGVmYXVsdDogMTJweDtcclxuJHJhZGl1cy1kZWZhdWx0OiA1cHg7XHJcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICRoZWFkZXItYmFja2dyb3VuZDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItc2V0dGluZ3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLnNpZ25Jbi1jb250YWluZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JheTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHsgbWFyZ2luLXJpZ2h0OiA3cHg7IH1cclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7IG1hcmdpbi1sZWZ0OiA3cHg7IH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRsb2dvLXllbGxvdztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9maWxlLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogNDNweDtcclxuICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDA1REQ2O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNDYwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIG1heC13aWR0aDogMTQ2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19 */"

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
/* harmony import */ var _servicestoken_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @servicestoken.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_profile_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/profile/store */ "./src/app/profile/store/index.ts");
/* harmony import */ var app_login_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/login/store */ "./src/app/login/store/index.ts");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, storeLogin, dialog, tokenService) {
        this.store = store;
        this.storeLogin = storeLogin;
        this.dialog = dialog;
        this.tokenService = tokenService;
        this.userLogged$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(app_profile_store__WEBPACK_IMPORTED_MODULE_6__["getProfile"]));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLogged = this.tokenService.hasToken();
    };
    HeaderComponent.prototype.openDialog = function (tabActive) {
        var dialogRef = this.dialog.open(app_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], {
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
        this.storeLogin.dispatch(new app_login_store__WEBPACK_IMPORTED_MODULE_7__["Logout"]());
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/main-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/main-components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _servicestoken_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
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
        return this.http.get('https://api.assisteai.com.br/movies?page=' + filters.currentPage);
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
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

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"]; });




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

/***/ "./src/app/shared/decorators/throttle.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/decorators/throttle.ts ***!
  \***********************************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
function throttle(ms) {
    var _this = this;
    if (ms === void 0) { ms = 400; }
    // This decorator prevent to make several requests to backend
    return function (target, property, descriptor) {
        var method = descriptor.value;
        var timer = 0;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (event) {
                event.preventDefault();
            }
            clearInterval(timer);
            timer = setTimeout(function () { return method.apply(_this, args); }, ms);
        };
        return descriptor;
    };
}


/***/ }),

/***/ "./src/app/store.config.ts":
/*!*********************************!*\
  !*** ./src/app/store.config.ts ***!
  \*********************************/
/*! exports provided: rootReducer, getRouterState, CustomSerializer, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__);




var rootReducer = {
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