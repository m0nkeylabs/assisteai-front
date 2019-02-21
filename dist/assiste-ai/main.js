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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'assiste-ai';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _sotre_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sotre.config */ "./src/app/sotre.config.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @main */ "./src/app/main-components/index.ts");
/* harmony import */ var app_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/indicate/indicate.component */ "./src/app/indicate/indicate.component.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                app_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _main__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                app_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_20__["IndicateComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastNoAnimationModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                    timeOut: 4000,
                    preventDuplicates: false
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot(_sotre_config__WEBPACK_IMPORTED_MODULE_12__["rootReducer"], { metaReducers: _sotre_config__WEBPACK_IMPORTED_MODULE_12__["metaReducers"] }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forFeature('homeList', app_home_store__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forFeature(app_home_store__WEBPACK_IMPORTED_MODULE_9__["effects"].slice()),
                _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument(),
            ],
            entryComponents: [app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_20__["IndicateComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]],
            providers: [_services_home_service__WEBPACK_IMPORTED_MODULE_21__["HomeService"], _services_token_service__WEBPACK_IMPORTED_MODULE_22__["TokenService"]],
            bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
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

module.exports = "<main class=\"main\">\r\n  <section class=\"filter-container flex-column\">\r\n    <div class=\"flex-row filter-icons col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-3 margin-right-2\">\r\n        <mat-label>Busca</mat-label>\r\n        <input matInput autocomplete=\"off\" (keyup)=\"updateList()\">\r\n        <mat-icon matPrefix>search</mat-icon>\r\n      </mat-form-field>\r\n      <div class=\"flex-row col-md-9 filters\">\r\n        <div class=\"icon-filters-container flex-row col-md-6\">\r\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Todos\" [ngClass]=\"{'active': filters.exibition === 'all'}\" (click)=\"setExibition('all')\">public</mat-icon>\r\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Seguindo\" [ngClass]=\"{'active': filters.exibition === 'group'}\" (click)=\"setExibition('group')\">group</mat-icon>\r\n          <span class=\"divider margin-right-1\"></span>\r\n          <mat-icon class=\"icon filter-icon\" matTooltip=\"Filtro\" [ngClass]=\"{'active': filterOpened}\" (click)=\"filterOpened = !filterOpened\">filter_list</mat-icon>\r\n        </div>\r\n        <button mat-button class=\"btn-default\"  matTooltip=\"Indicar\" (click)=\"openDialog()\">\r\n            <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"margin-top-2\" *ngIf=\"filterOpened\">\r\n      <div class=\"flex-row filter-options\">\r\n        <div class=\"form-group margin-right-2\">\r\n            <mat-chip-list>\r\n              <mat-chip *ngFor=\"let rating of ratingArray\" class=\"chip-default {{rating}}\" [ngClass]=\"{'active': isRatingActive(rating)}\" (click)='updateRatingFilter(rating)'>\r\n                {{rantingEnum[rating]}}\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n        </div>\r\n        <span class=\"divider margin-right-2\"></span>\r\n        <div class=\"form-group\">\r\n            <mat-chip-list>\r\n              <mat-chip *ngFor=\"let type of typeArray\" class=\"chip-default {{type}}\" [ngClass]=\"{'active': isTypeActive(type)}\" (click)='updateTypeFilter(type)'>\r\n                {{typeEnum[type]}}\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"cards-container flex-row flex-wrap\">\r\n    <div class=\"card {{getClassPoster(movie.average_rating)}}\" *ngFor=\"let movie of moviesList$ | async\">\r\n      <div class=\"poster-container\">\r\n        <img src=\"{{movie.poster_path}}\" class=\"img-poster\">\r\n        <div class=\"overlay\">\r\n          <div class=\"poster-detail flex-column\">\r\n            <h3 class=\"poster-title\">{{movie.original_title}}</h3>\r\n\r\n            <span class=\"poster-chip {{getClassType(movie.category)}}\">{{typeEnum[movie.category]}}</span>\r\n\r\n            <div class=\"rating-container flex-column\">\r\n              <span>Avaliação Média</span>\r\n              <span class=\"poster-chip {{getClassPoster(movie.average_rating)}}\">{{rantingEnum[movie.average_rating]}}</span>\r\n\r\n              <span>Última avaliação</span>\r\n              <span class=\"poster-chip {{getClassPoster(movie.last_rating)}}\">{{rantingEnum[movie.last_rating]}}</span>\r\n            </div>\r\n\r\n            <div class=\"poster-actions flex-row\">\r\n                <a [routerLink]=\"\" matTooltip=\"Assistir depois\" class=\"watch-later\"><mat-icon>access_time</mat-icon></a>\r\n                <a [routerLink]=\"\" (click)=\"openDialog(movie.urlIndication)\" matTooltip=\"Indicar {{typeEnum[movie.type]}}\" class=\"indicate-now\"><mat-icon>playlist_add</mat-icon></a>\r\n                <a href=\"#\" matTooltip=\"Mais informações\" class=\"more-details\"><mat-icon>arrow_forward</mat-icon></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-loading *ngIf=\"(loading$ | async)\"></app-loading>\r\n    <button class=\"scroll-btn\" [ngClass]=\"{'active': scollTopActive}\" (click)=\"scollTop()\"><mat-icon>arrow_upward</mat-icon></button>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.main .filter-container {\n  position: relative;\n  margin-bottom: 10px; }\n.main .filter-container .filter-icons {\n    align-items: center; }\n.main .filter-container .filter-icons .filters {\n      align-items: center;\n      justify-content: space-between; }\n.main .filter-container .filter-icons .filters .icon-filters-container {\n        align-items: center; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon:hover, .main .filter-container .filter-icons .filters .icon-filters-container .icon.active {\n          color: #005DD6; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon:hover {\n          color: #ffffff; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon.active {\n          color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active {\n    color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active.UNMISSABLE {\n      background: #7EBB6F; }\n.main .filter-container .filter-options .chip-default.active.VERY_GOOD {\n      background: #5D8EBA; }\n.main .filter-container .filter-options .chip-default.active.GOOD {\n      background: #85BDB6; }\n.main .filter-container .filter-options .chip-default.active.COOL {\n      background: #F4C27B; }\n.main .filter-container .filter-options .chip-default.active.BAD {\n      background: #B193B7; }\n.main .filter-container .filter-options .chip-default.active.VERY_BAD {\n      background: #CF6366; }\n.main .filter-container .filter-options .chip-default.active.STAY_AWAY {\n      background: #502B2C; }\n.main .filter-container .filter-options .chip-default.active.MOVIE {\n      background: #01C05D; }\n.main .filter-container .filter-options .chip-default.active.SERIE {\n      background: #F86C2F; }\n.main .cards-container {\n  width: 100%; }\n.main .cards-container .card {\n    position: relative;\n    box-sizing: border-box;\n    margin: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\n.main .cards-container .card .poster-container {\n      position: relative;\n      overflow: hidden;\n      border-radius: 5px; }\n.main .cards-container .card .poster-container:hover .img-poster {\n        transform: scale(1.1, 1.1);\n        -ms-transform: scale(1.1, 1.1);\n        -webkit-transform: scale(1.1, 1.1); }\n.main .cards-container .card .poster-container .overlay {\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        color: #ffffff;\n        text-decoration: none;\n        transition: opacity .4s ease-in-out;\n        opacity: 0;\n        background-image: radial-gradient(circle, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)); }\n.main .cards-container .card .poster-container .overlay:hover {\n          opacity: 1; }\n.main .cards-container .card .poster-container .overlay .poster-detail {\n          align-items: center;\n          justify-content: space-between;\n          padding: 15px;\n          height: 100%;\n          box-sizing: border-box; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-title {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-chip {\n            padding: 3px 6px;\n            border-radius: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip {\n              display: block; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip:nth-child(2) {\n                margin-bottom: 10px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions {\n            justify-content: space-around;\n            width: 100%; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a {\n              color: #ffffff; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.watch-later {\n                color: #C132C0; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.indicate-now {\n                color: #29BF44; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.more-details {\n                color: #005DD6; }\n.main .cards-container .card .poster-container .img-poster {\n        border: 0;\n        position: relative;\n        border-radius: 5px;\n        width: 100%;\n        vertical-align: middle;\n        transition: all .4s ease-in-out; }\n@media (max-width: 599px) {\n  .cards-container .card {\n    flex: 1 0 100%;\n    max-width: calc(100% - 30px); } }\n@media (min-width: 600px) {\n  .cards-container .card {\n    flex: 1 0 33.33333%;\n    max-width: calc(33.33333% - 30px); } }\n@media (min-width: 930px) {\n  .cards-container .card {\n    flex: 1 0 25%;\n    max-width: calc(25% - 30px); } }\n@media (min-width: 1250px) {\n  .cards-container .card {\n    flex: 1 0 20%;\n    max-width: calc(20% - 30px); } }\n@media (min-width: 1460px) {\n  .cards-container .card {\n    flex: 1 0 16.66666667%;\n    max-width: calc(16.66666667% - 30px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJydW5vIE1hcnRpbmVsbGlcXERlc2t0b3BcXHByb2plY3RzXFxhc3Npc3RlYWktZnJvbnQvc3JjXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xcQnJ1bm8gTWFydGluZWxsaVxcRGVza3RvcFxccHJvamVjdHNcXGFzc2lzdGVhaS1mcm9udC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBd0NBLGtCQUFBO0FBeUJBLFNBQUE7QUMvREE7RUFFSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7QUFIdkI7SUFNTSxtQkFBbUIsRUFBQTtBQU56QjtNQVNRLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtBQVZ0QztRQWFVLG1CQUFtQixFQUFBO0FBYjdCO1VBZ0JnQyxjREpiLEVBQUE7QUNabkI7VUFvQmdCLGNEckJELEVBQUE7QUNDZjtVQXdCZ0IsY0R6QkQsRUFBQTtBQ0NmO0lBbUNVLGNEcENLLEVBQUE7QUNDZjtNQXFDeUIsbUJEakJQLEVBQUE7QUNwQmxCO01Bc0N3QixtQkRuQk4sRUFBQTtBQ25CbEI7TUF1Q21CLG1CRHJCRCxFQUFBO0FDbEJsQjtNQXdDbUIsbUJEdkJELEVBQUE7QUNqQmxCO01BeUNrQixtQkR6QkEsRUFBQTtBQ2hCbEI7TUEwQ3VCLG1CRDNCTCxFQUFBO0FDZmxCO01BMkN3QixtQkQ3Qk4sRUFBQTtBQ2RsQjtNQTZDbUIsbUJEdEJFLEVBQUE7QUN2QnJCO01BOENvQixtQkR4QkMsRUFBQTtBQ3RCckI7RUFvREksV0FBVyxFQUFBO0FBcERmO0lBdURNLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkRNYztJQ0hkLCtDQUErQyxFQUFBO0FBOURyRDtNQWlFUSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGtCREZZLEVBQUE7QUNqRXBCO1FBdUVZLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsa0NBQWtDLEVBQUE7QUF6RTlDO1FBOEVVLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsTUFBSztRQUNMLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCRG5CVTtRQ29CVixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1DQUFtQztRQUNuQyxVQUFVO1FBQ1Ysd0dBQTZGLEVBQUE7QUF6RnZHO1VBNEZZLFVBQVUsRUFBQTtBQTVGdEI7VUFnR1ksbUJBQW1CO1VBQ25CLDhCQUE4QjtVQUM5QixhQUFhO1VBQ2IsWUFBWTtVQUNaLHNCQUFzQixFQUFBO0FBcEdsQztZQXVHYyxrQkFBa0IsRUFBQTtBQXZHaEM7WUEyR2MsZ0JBQWdCO1lBQ2hCLGtCRDNDTSxFQUFBO0FDakVwQjtZQWdIYyxrQkFBa0IsRUFBQTtBQWhIaEM7Y0FtSGdCLGNBQWMsRUFBQTtBQW5IOUI7Z0JBc0hrQixtQkFBbUIsRUFBQTtBQXRIckM7WUE2SGMsNkJBQTZCO1lBQzdCLFdBQVcsRUFBQTtBQTlIekI7Y0FpSWdCLGNEbElELEVBQUE7QUNDZjtnQkFvSWtDLGNEMUhmLEVBQUE7QUNWbkI7Z0JBcUltQyxjRDVIZixFQUFBO0FDVHBCO2dCQXNJa0MsY0QxSGYsRUFBQTtBQ1puQjtRQThJVSxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLGtCRC9FVTtRQ2dGVixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLCtCQUErQixFQUFBO0FBT3pDO0VBQ0U7SUFDRSxjRHhHa0I7SUN5R2xCLDRCQUEyQyxFQUFBLEVBQzVDO0FBRUg7RUFDRTtJQUNFLG1CRDVHdUI7SUM2R3ZCLGlDQUEyQyxFQUFBLEVBQzVDO0FBRUg7RUFDRTtJQUNFLGFEakhpQjtJQ2tIakIsMkJBQTJDLEVBQUEsRUFDNUM7QUFFSDtFQUNFO0lBQ0UsYUR0SGlCO0lDdUhqQiwyQkFBMkMsRUFBQSxFQUM1QztBQUVIO0VBQ0U7SUFDRSxzQkQzSDJCO0lDNEgzQixvQ0FBMkMsRUFBQSxFQUM1QyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbiRoZWFkZXItYmFja2dyb3VuZDogIzMwMzAzMDtcclxuJGJhY2tncm91bmQtZmFjZWJvb2s6ICM0MjY3QjI7XHJcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcclxuXHJcbiRidXR0b24tcHJpbWFyeTogIzI5QkY0NDtcclxuXHJcbiRsb2dvLXllbGxvdzogI0QzRDk0QjtcclxuJGxvZ28tZ3JlZW46ICMyOUJGNDQ7XHJcbiRsb2dvLXBpbms6ICNDMTMyQzA7XHJcbiRsb2dvLXJlZDogI0RGMUQ0MztcclxuJGxvZ28tYmx1ZTogIzAwNURENjtcclxuXHJcbiRyYXRpbmctMTogIzUwMkIyQztcclxuJHJhdGluZy0yOiAjQ0Y2MzY2O1xyXG4kcmF0aW5nLTM6ICNCMTkzQjc7XHJcbiRyYXRpbmctNDogI0Y0QzI3QjtcclxuJHJhdGluZy01OiAjODVCREI2O1xyXG4kcmF0aW5nLTY6ICM1RDhFQkE7XHJcbiRyYXRpbmctNzogIzdFQkI2RjtcclxuXHJcbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcclxuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xyXG5cclxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XHJcblxyXG4kbGlnaHRlc3QtZ3JheTogI0YxRjRGNTtcclxuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcclxuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XHJcbiRncmF5OiAjY2RkM2Q4O1xyXG4kZGFyay1ncmF5OiAjNzU4MThiO1xyXG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XHJcbiRkYXJrZXN0LWdyYXk6ICMzMzMzMzM7XHJcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xyXG5cclxuJGZvbnQtZGVmYXVsdDogJGRhcmtlci1ncmF5O1xyXG5cclxuLyogV0lEVEggQ09MVU1OUyAqL1xyXG4kd2lkdGgtMTogOC4zMzMzMzMzMzMlO1xyXG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xyXG4kd2lkdGgtMzogMjUlO1xyXG4kd2lkdGgtNDogMzMuMzMzMzMzMzMlO1xyXG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTY6IDUwJTtcclxuJHdpZHRoLTc6IDU4LjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtOTogNzUlO1xyXG4kd2lkdGgtMTA6IDgzLjMzMzMzMzMzMzMzMyU7XHJcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcclxuJHdpZHRoLTEyOiAxMDAlO1xyXG5cclxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcclxuJHdpZHRoLTItY29sdW1uczogNTAlO1xyXG4kd2lkdGgtMy1jb2x1bW5zOiAzMy4zMzMzMyU7XHJcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcclxuJHdpZHRoLTUtY29sdW1uczogMjAlO1xyXG4kd2lkdGgtNi1jb2x1bW5zOiAxNi42NjY2NjY2NjclO1xyXG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xyXG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcclxuJHdpZHRoLTktY29sdW1uczogMTEuMSU7XHJcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XHJcblxyXG4vKiBTSVpFICovXHJcbiRzaXplLWRlZmF1bHQ6IDEycHg7XHJcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xyXG4iLCJAaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubWFpbiB7XHJcbiAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAuZmlsdGVyLWljb25zIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5maWx0ZXJzIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLmljb24tZmlsdGVycy1jb250YWluZXIge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICY6aG92ZXIsICYuYWN0aXZlIHsgY29sb3I6ICRsb2dvLWJsdWU7IH1cclxuXHJcbiAgICAgICAgICAgICYuZmlsdGVyLWljb24ge1xyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlci1vcHRpb25zIHtcclxuICAgICAgLmNoaXAtZGVmYXVsdCB7XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmLlVOTUlTU0FCTEUgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTcgfVxyXG4gICAgICAgICAgJi5WRVJZX0dPT0QgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTYgfVxyXG4gICAgICAgICAgJi5HT09EIHsgYmFja2dyb3VuZDogJHJhdGluZy01IH1cclxuICAgICAgICAgICYuQ09PTCB7IGJhY2tncm91bmQ6ICRyYXRpbmctNCB9XHJcbiAgICAgICAgICAmLkJBRCB7IGJhY2tncm91bmQ6ICRyYXRpbmctMyB9XHJcbiAgICAgICAgICAmLlZFUllfQkFEIHsgYmFja2dyb3VuZDogJHJhdGluZy0yIH1cclxuICAgICAgICAgICYuU1RBWV9BV0FZIHsgYmFja2dyb3VuZDogJHJhdGluZy0xIH1cclxuXHJcbiAgICAgICAgICAmLk1PVklFeyBiYWNrZ3JvdW5kOiAkY29sb3ItbW92aWUgfVxyXG4gICAgICAgICAgJi5TRVJJRSB7IGJhY2tncm91bmQ6ICRjb2xvci1zZXJpZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jYXJkcy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG5cclxuICAgICAgLnBvc3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtZGVmYXVsdDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAuaW1nLXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCwwLDAsMC41NSkscmdiYSgwLDAsMCwwLjc1KSxyZ2JhKDAsMCwwLDAuOTUpKTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdGVyLWRldGFpbCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgLnBvc3Rlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucG9zdGVyLWNoaXAge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmF0aW5nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAucG9zdGVyLWNoaXAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wb3N0ZXItYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgJi53YXRjaC1sYXRlciB7IGNvbG9yOiAkbG9nby1waW5rOyB9XHJcbiAgICAgICAgICAgICAgICAgICYuaW5kaWNhdGUtbm93IHsgY29sb3I6ICRsb2dvLWdyZWVuOyB9XHJcbiAgICAgICAgICAgICAgICAgICYubW9yZS1kZXRhaWxzeyBjb2xvcjogJGxvZ28tYmx1ZTsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZy1wb3N0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xyXG4gICAgZmxleDogMSAwICR3aWR0aC0xLWNvbHVtbnM7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtMS1jb2x1bW5zfSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcclxuICAgIGZsZXg6IDEgMCAkd2lkdGgtMy1jb2x1bW5zO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTMtY29sdW1uc30gLSAzMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkzMHB4KSB7XHJcbiAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTQtY29sdW1ucztcclxuICAgIG1heC13aWR0aDogY2FsYygjeyR3aWR0aC00LWNvbHVtbnN9IC0gMzBweCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcclxuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcclxuICAgIGZsZXg6IDEgMCAkd2lkdGgtNS1jb2x1bW5zO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTUtY29sdW1uc30gLSAzMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NjBweCkge1xyXG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xyXG4gICAgZmxleDogMSAwICR3aWR0aC02LWNvbHVtbnM7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtNi1jb2x1bW5zfSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _constants_ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @constants/ratings */ "./src/app/core/constants/ratings.ts");
/* harmony import */ var _constants_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constants/types */ "./src/app/core/constants/types.ts");
/* harmony import */ var app_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/indicate/indicate.component */ "./src/app/indicate/indicate.component.ts");
/* harmony import */ var _shared_decorators_throttle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/decorators/throttle */ "./src/app/shared/decorators/throttle.ts");
/* harmony import */ var app_home_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/home/store */ "./src/app/home/store/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);












var HomeComponent = /** @class */ (function () {
    function HomeComponent(store, tokenService, dialog) {
        this.store = store;
        this.tokenService = tokenService;
        this.dialog = dialog;
        this.floatLabel = 'always';
        this.typeEnum = _constants_types__WEBPACK_IMPORTED_MODULE_6__["types"];
        this.typeArray = lodash__WEBPACK_IMPORTED_MODULE_11__["keys"](_constants_types__WEBPACK_IMPORTED_MODULE_6__["types"]);
        this.rantingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_5__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_11__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_5__["ratings"]);
        this.filters = {
            search: '',
            exibition: 'all',
            ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
            types: ['MOVIE', 'SERIE'],
            currentPage: 1,
            lastPage: null
        };
        this.moviesList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_10__["getHomeListResponse"]));
        this.pagination$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_10__["getHomeListPagination"]));
        this.loading$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(app_home_store__WEBPACK_IMPORTED_MODULE_10__["getHomeListLoading"]));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_10__["LoadHomeList"](this.filters));
        this.pagination$.subscribe(function (result) {
            if (result) {
                _this.filters.currentPage = result.currentPage;
                _this.filters.lastPage = result.lastPage;
            }
        });
    };
    HomeComponent.prototype.setExibition = function (exibition) {
        this.filters.exibition = exibition;
        this.updateList();
    };
    HomeComponent.prototype.isRatingActive = function (rating) {
        return lodash__WEBPACK_IMPORTED_MODULE_11__["includes"](this.filters.ratings, rating);
    };
    HomeComponent.prototype.isTypeActive = function (type) {
        return lodash__WEBPACK_IMPORTED_MODULE_11__["includes"](this.filters.types, type);
    };
    HomeComponent.prototype.openDialog = function (urlIndication) {
        var _this = this;
        if (this.tokenService.hasToken()) {
            var dialogRef = this.dialog.open(app_indicate_indicate_component__WEBPACK_IMPORTED_MODULE_8__["IndicateComponent"], {
                width: '90%',
                maxWidth: '700px',
                data: { url: urlIndication }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.filters.currentPage = 1;
                    _this.filters.lastPage = null;
                    _this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_10__["UpdateHomeList"](_this.filters));
                    window.scroll(0, 0);
                }
            });
        }
        else {
            var dialogRef = this.dialog.open(app_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], {
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
        if (lodash__WEBPACK_IMPORTED_MODULE_11__["includes"](this.filters.ratings, tag)) {
            if (this.filters.ratings.length > 1) {
                this.filters.ratings = lodash__WEBPACK_IMPORTED_MODULE_11__["remove"](this.filters.ratings, function (n) {
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
        if (lodash__WEBPACK_IMPORTED_MODULE_11__["includes"](this.filters.types, tag)) {
            if (this.filters.types.length > 1) {
                this.filters.types = lodash__WEBPACK_IMPORTED_MODULE_11__["remove"](this.filters.types, function (n) {
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
        if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
            this.store.dispatch(new app_home_store__WEBPACK_IMPORTED_MODULE_10__["LoadHomeList"](this.filters));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_shared_decorators_throttle__WEBPACK_IMPORTED_MODULE_9__["throttle"])(800),
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
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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
var getHomeListLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHomeListState, app_home_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoading"]);
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

module.exports = "<h2 class=\"title-modal\">Nova Indicação</h2>\r\n\r\n<div class=\"container\">\r\n  <form novalidate [formGroup]=\"formGroup\" (submit)=\"saveIndication()\">\r\n    <div class=\"flex-row col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-8 margin-right-1 dialog-input-prefix\">\r\n        <mat-label>Link IMDb/TMDb</mat-label>\r\n        <input matInput autocomplete=\"off\" formControlName='url'\r\n          placeholder=\"http://www.imdb.com/title/exemple ou https://www.themoviedb.org/movie/exemple\">\r\n        <mat-icon matPrefix>link</mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-4\">\r\n          <mat-label>Avaliação</mat-label>\r\n        <mat-select panelClass=\"panel-dark\" formControlName='rating'>\r\n          <mat-option *ngFor=\"let rating of ratingArray\" [value]=\"rating\">\r\n            {{ratingEnum[rating]}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"flex-row col-md-12\">\r\n      <mat-form-field appearance=\"outline\" class=\"col-md-12\">\r\n        <mat-label>Comentário</mat-label>\r\n        <textarea matInput formControlName='comment'></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div mat-dialog-actions>\r\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n      <button mat-button cdkFocusInitial class=\"btn-default\" type=\"submit\">\r\n        <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon> Indicar\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/indicate/indicate.component.scss":
/*!**************************************************!*\
  !*** ./src/app/indicate/indicate.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.title-modal {\n  width: 100%;\n  color: #E6EAEC;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #1d1d1d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaWNhdGUvQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvaW5kaWNhdGUvQzpcXFVzZXJzXFxCcnVubyBNYXJ0aW5lbGxpXFxEZXNrdG9wXFxwcm9qZWN0c1xcYXNzaXN0ZWFpLWZyb250L3NyY1xcYXBwXFxpbmRpY2F0ZVxcaW5kaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQXdDQSxrQkFBQTtBQXlCQSxTQUFBO0FDL0RBO0VBQ0UsV0FBVztFQUNYLGNEMEJvQjtFQ3pCcEIsb0JBQW9CO0VBQ3BCLGdDRDhCMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZGljYXRlL2luZGljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kYmFja2dyb3VuZDogIzI4MjgyODtcclxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcclxuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xyXG5cclxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xyXG5cclxuJGxvZ28teWVsbG93OiAjRDNEOTRCO1xyXG4kbG9nby1ncmVlbjogIzI5QkY0NDtcclxuJGxvZ28tcGluazogI0MxMzJDMDtcclxuJGxvZ28tcmVkOiAjREYxRDQzO1xyXG4kbG9nby1ibHVlOiAjMDA1REQ2O1xyXG5cclxuJHJhdGluZy0xOiAjNTAyQjJDO1xyXG4kcmF0aW5nLTI6ICNDRjYzNjY7XHJcbiRyYXRpbmctMzogI0IxOTNCNztcclxuJHJhdGluZy00OiAjRjRDMjdCO1xyXG4kcmF0aW5nLTU6ICM4NUJEQjY7XHJcbiRyYXRpbmctNjogIzVEOEVCQTtcclxuJHJhdGluZy03OiAjN0VCQjZGO1xyXG5cclxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xyXG4kY29sb3ItbW92aWU6ICMwMUMwNUQ7XHJcblxyXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcclxuXHJcbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xyXG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xyXG4kbGlnaHQtZ3JheTogI0U0RTRFNDtcclxuJGdyYXk6ICNjZGQzZDg7XHJcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XHJcbiRkYXJrZXItZ3JheTogIzZBNkM2NjtcclxuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcclxuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XHJcblxyXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XHJcblxyXG4vKiBXSURUSCBDT0xVTU5TICovXHJcbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XHJcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XHJcbiR3aWR0aC0zOiAyNSU7XHJcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XHJcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtNjogNTAlO1xyXG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XHJcbiR3aWR0aC05OiA3NSU7XHJcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcclxuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xyXG4kd2lkdGgtMTI6IDEwMCU7XHJcblxyXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xyXG4kd2lkdGgtMi1jb2x1bW5zOiA1MCU7XHJcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcclxuJHdpZHRoLTQtY29sdW1uczogMjUlO1xyXG4kd2lkdGgtNS1jb2x1bW5zOiAyMCU7XHJcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XHJcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XHJcbiR3aWR0aC04LWNvbHVtbnM6IDEyLjUlO1xyXG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcclxuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcclxuXHJcbi8qIFNJWkUgKi9cclxuJHNpemUtZGVmYXVsdDogMTJweDtcclxuJHJhZGl1cy1kZWZhdWx0OiA1cHg7XHJcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi50aXRsZS1tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICRsaWdodGVyLWdyYXk7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXJrZXN0LWdyYXktYm9yZGVyXHJcbn1cclxuIl19 */"

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

module.exports = "<div class=\"login-container\">\r\n  <div class=\"social-login margin-bottom-2\">\r\n    <button class=\"btn btn-facebook margin-bottom-2\"><img src=\"assets/img/facebook.png\" height=\"25px\"> <span>Entrar com o Facebook</span></button>\r\n  </div>\r\n  <div class=\"manual-login\">\r\n    <mat-tab-group class=\"tab-login\" animationDuration=\"1500ms\" [selectedIndex]=\"tabActive\">\r\n      <mat-tab label=\"Login\">\r\n        <ng-container *ngIf=\"!isForgetPassword\">\r\n          <form novalidate [formGroup]=\"formSignIn\" (submit)=\"signIn()\">\r\n            <div class=\"flex-row col-md-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\r\n                <mat-label>E-mail</mat-label>\r\n                <input matInput autocomplete=\"off\" formControlName='email'\r\n                  placeholder=\"email@email.com.br\">\r\n                <mat-icon matPrefix>email</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"flex-column col-md-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\r\n                <mat-label>Senha</mat-label>\r\n                <input matInput type=\"password\" formControlName='password'>\r\n                <mat-icon matPrefix>lock</mat-icon>\r\n              </mat-form-field>\r\n              <div class=\"forget-password\">\r\n                <span (click)=\"setForgetPassword()\">Esqueceu sua senha?</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"flex-row col-md-12 margin-top-1\">\r\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12\" type=\"submit\">Entrar</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"isForgetPassword\">\r\n          <form novalidate [formGroup]=\"formForgetPassword\" (submit)=\"forgetPassword()\">\r\n            <div class=\"flex-row col-md-12\">\r\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\r\n                <mat-label>E-mail</mat-label>\r\n                <input matInput autocomplete=\"off\" formControlName='email'\r\n                  placeholder=\"email@email.com.br\">\r\n                <mat-icon matPrefix>email</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"flex-column align-items-center col-md-12 margin-top-1\">\r\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12\" type=\"submit\">Enviar e-mail</button>\r\n              <button mat-button class=\"col-md-5 margin-top-1\" (click)=\"setForgetPassword()\">Voltar</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n      </mat-tab>\r\n      <mat-tab label=\"Cadastrar\">\r\n        <form novalidate [formGroup]=\"formRegister\" (submit)=\"register()\">\r\n          <div class=\"flex-row col-md-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\r\n              <mat-label>Nome</mat-label>\r\n              <input matInput autocomplete=\"off\" formControlName='name'>\r\n              <mat-icon matPrefix>perm_identity</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-row col-md-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\r\n              <mat-label>E-mail</mat-label>\r\n              <input matInput autocomplete=\"off\" formControlName='email'\r\n                placeholder=\"email@email.com.br\">\r\n              <mat-icon matPrefix>email</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-column col-md-12\">\r\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\r\n              <mat-label>Senha</mat-label>\r\n              <input matInput type=\"password\" formControlName='password'>\r\n              <mat-icon matPrefix>lock</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-row col-md-12 margin-top-1\">\r\n            <button mat-button cdkFocusInitial class=\"btn-default col-md-12\" type=\"submit\">Cadastrar</button>\r\n          </div>\r\n        </form>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ratingEnum = _constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"];
        this.ratingArray = lodash__WEBPACK_IMPORTED_MODULE_5__["keys"](_constants_ratings__WEBPACK_IMPORTED_MODULE_4__["ratings"]);
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
    };
    LoginComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"header\">\r\n    <div class=\"header-logo\">\r\n      <img src=\"assets/img/header-logo.png\">\r\n    </div>\r\n    <div class=\"header-settings\">\r\n      <div class=\"profile-image\" *ngIf=\"isLogged\">\r\n        <img src=\"assets/img/user.jpg\">\r\n      </div>\r\n      <div class=\"signIn-container\" *ngIf=\"!isLogged\">\r\n        <span (click)=\"openDialog(0)\">Entrar</span> ou <span (click)=\"openDialog(1)\">Cadastrar</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

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





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog, tokenService) {
        this.dialog = dialog;
        this.tokenService = tokenService;
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
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/main-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/main-components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
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
        return this.http.get('https://api.assisteai.com.br/movies');
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TOKEN_KEY = 'authToken';
var USER_KEY = 'user';
var ROLE_KEY = 'role';
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.hasToken = function () {
        return true;
        // return !!this.getToken();
    };
    TokenService.prototype.setToken = function (headers) {
        var token = headers.headers.get('x-ecams-token');
        var user = headers.headers.get('x-ecams-user');
        var role = headers.headers.get('x-ecams-role');
        sessionStorage.setItem(TOKEN_KEY, token);
        sessionStorage.setItem(ROLE_KEY, role);
        this.setUSer(user);
    };
    TokenService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenService.prototype.setUSer = function (user) {
        sessionStorage.setItem(USER_KEY, user);
    };
    TokenService.prototype.getUser = function () {
        return sessionStorage.getItem(USER_KEY);
    };
    TokenService.prototype.isAdmin = function () {
        return sessionStorage.getItem(ROLE_KEY) && sessionStorage.getItem(ROLE_KEY) === 'true';
    };
    TokenService.prototype.removeToken = function () {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(USER_KEY);
        sessionStorage.removeItem(ROLE_KEY);
    };
    TokenService.prototype.getHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](this.hasToken() ? {
            'x-ecams-token': this.getToken()
        } : {});
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
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

module.exports = ".loading {\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  text-align: center; }\n  .loading .loading-bar {\n    display: inline-block;\n    position: relative;\n    width: 8px;\n    height: 70px;\n    margin: 0 5px;\n    box-shadow: 4px 4px 3px 0px rgba(0, 0, 0, 0.35);\n    -webkit-animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n            animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite; }\n  .loading .loading-bar:nth-child(1) {\n      -webkit-animation-delay: -0.48s;\n              animation-delay: -0.48s; }\n  .loading .loading-bar:nth-child(2) {\n      -webkit-animation-delay: -0.36s;\n              animation-delay: -0.36s; }\n  .loading .loading-bar:nth-child(3) {\n      -webkit-animation-delay: -0.24s;\n              animation-delay: -0.24s; }\n  .loading .loading-bar:nth-child(4) {\n      -webkit-animation-delay: -0.12s;\n              animation-delay: -0.12s; }\n  .loading .loading-bar:nth-child(5) {\n      -webkit-animation-delay: -0s;\n              animation-delay: -0s; }\n  @-webkit-keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n  @keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9DOlxcVXNlcnNcXEJydW5vIE1hcnRpbmVsbGlcXERlc2t0b3BcXHByb2plY3RzXFxhc3Npc3RlYWktZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9hZGluZ1xcbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBSnBCO0lBT0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFHYiwrQ0FBK0M7SUFDL0MsNEVBQW9FO1lBQXBFLG9FQUFvRSxFQUFBO0VBZnhFO01BaUJxQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFqQjVDO01Ba0JxQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFsQjVDO01BbUJxQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFuQjVDO01Bb0JxQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFwQjVDO01BcUJxQiw0QkFBb0I7Y0FBcEIsb0JBQW9CLEVBQUE7RUFJekM7RUFDRTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQSxFQUFBO0VBUnpCO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5sb2FkaW5nLWJhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDRweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDRweCA0cHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICBhbmltYXRpb246IGxkcy1hc3Npc3RlLWFpIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxuXHJcbiAgICAmOm50aC1jaGlsZCgxKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuNDhzOyB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMzZzOyB9XHJcbiAgICAmOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMjRzOyB9XHJcbiAgICAmOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMTJzOyB9XHJcbiAgICAmOm50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogLTBzOyB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxkcy1hc3Npc3RlLWFpIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICB9XHJcbn1cclxuIl19 */"

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

/***/ "./src/app/sotre.config.ts":
/*!*********************************!*\
  !*** ./src/app/sotre.config.ts ***!
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