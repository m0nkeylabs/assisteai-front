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

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

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

module.exports = "<main class=\"main\">\n  <section class=\"filter-container flex-column\">\n    <div class=\"flex-row filter-icons col-md-12\">\n      <mat-form-field appearance=\"outline\" class=\"col-md-3 margin-right-2\">\n        <mat-label>Busca</mat-label>\n        <input matInput autocomplete=\"off\" (keyup)=\"updateList()\">\n        <mat-icon matPrefix>search</mat-icon>\n      </mat-form-field>\n      <div class=\"flex-row col-md-9 filters\">\n        <div class=\"icon-filters-container flex-row col-md-6\">\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Todos\" [ngClass]=\"{'active': filters.exibition === 'all'}\" (click)=\"setExibition('all')\">public</mat-icon>\n          <mat-icon class=\"icon margin-right-1\" matTooltip=\"Seguindo\" [ngClass]=\"{'active': filters.exibition === 'group'}\" (click)=\"setExibition('group')\">group</mat-icon>\n          <span class=\"divider margin-right-1\"></span>\n          <mat-icon class=\"icon filter-icon\" matTooltip=\"Filtro\" [ngClass]=\"{'active': filterOpened}\" (click)=\"filterOpened = !filterOpened\">filter_list</mat-icon>\n        </div>\n        <button mat-button class=\"btn-default\"  matTooltip=\"Indicar\" (click)=\"openDialog()\">\n            <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"margin-top-2\" *ngIf=\"filterOpened\">\n      <div class=\"flex-row filter-options\">\n        <div class=\"form-group margin-right-2\">\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let rating of ratingArray\" class=\"chip-default {{rating}}\" [ngClass]=\"{'active': isRatingActive(rating)}\" (click)='updateRatingFilter(rating)'>\n                {{rantingEnum[rating]}}\n              </mat-chip>\n            </mat-chip-list>\n        </div>\n        <span class=\"divider margin-right-2\"></span>\n        <div class=\"form-group\">\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let type of typeArray\" class=\"chip-default {{type}}\" [ngClass]=\"{'active': isTypeActive(type)}\" (click)='updateTypeFilter(type)'>\n                {{typeEnum[type]}}\n              </mat-chip>\n            </mat-chip-list>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"cards-container flex-row flex-wrap\">\n    <div class=\"card {{getClassPoster(movie.average_rating)}}\" *ngFor=\"let movie of moviesList$ | async\">\n      <div class=\"poster-container\">\n        <div class=\"img-poster\" [ngStyle]=\"{'background-image': 'url(' + movie.poster_path + ')'}\"></div>\n        <div class=\"overlay\">\n          <div class=\"poster-detail flex-column\">\n            <h3 class=\"poster-title\">{{movie.original_title}}</h3>\n\n            <span class=\"poster-chip {{getClassType(movie.category)}}\">{{typeEnum[movie.category]}}</span>\n\n            <div class=\"rating-container flex-column\">\n              <span>Avaliação Média</span>\n              <span class=\"poster-chip {{getClassPoster(movie.average_rating)}}\">{{rantingEnum[movie.average_rating]}}</span>\n\n              <span>Última avaliação</span>\n              <span class=\"poster-chip {{getClassPoster(movie.last_rating)}}\">{{rantingEnum[movie.last_rating]}}</span>\n            </div>\n\n            <div class=\"poster-actions flex-row\">\n                <a [routerLink]=\"\" matTooltip=\"Assistir depois\" class=\"watch-later\"><mat-icon>access_time</mat-icon></a>\n                <a [routerLink]=\"\" (click)=\"openDialog(movie.urlIndication)\" matTooltip=\"Indicar {{typeEnum[movie.type]}}\" class=\"indicate-now\"><mat-icon>playlist_add</mat-icon></a>\n                <a href=\"#\" matTooltip=\"Mais informações\" class=\"more-details\"><mat-icon>arrow_forward</mat-icon></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-loading *ngIf=\"(loading$ | async)\"></app-loading>\n    <button class=\"scroll-btn\" [ngClass]=\"{'active': scollTopActive}\" (click)=\"scollTop()\"><mat-icon>arrow_upward</mat-icon></button>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.main .filter-container {\n  position: relative;\n  margin-bottom: 10px; }\n.main .filter-container .filter-icons {\n    align-items: center; }\n.main .filter-container .filter-icons .filters {\n      align-items: center;\n      justify-content: space-between; }\n.main .filter-container .filter-icons .filters .icon-filters-container {\n        align-items: center; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon:hover, .main .filter-container .filter-icons .filters .icon-filters-container .icon.active {\n          color: #005DD6; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon:hover {\n          color: #ffffff; }\n.main .filter-container .filter-icons .filters .icon-filters-container .icon.filter-icon.active {\n          color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active {\n    color: #ffffff; }\n.main .filter-container .filter-options .chip-default.active.UNMISSABLE {\n      background: #7EBB6F; }\n.main .filter-container .filter-options .chip-default.active.VERY_GOOD {\n      background: #5D8EBA; }\n.main .filter-container .filter-options .chip-default.active.GOOD {\n      background: #85BDB6; }\n.main .filter-container .filter-options .chip-default.active.COOL {\n      background: #F4C27B; }\n.main .filter-container .filter-options .chip-default.active.BAD {\n      background: #B193B7; }\n.main .filter-container .filter-options .chip-default.active.VERY_BAD {\n      background: #CF6366; }\n.main .filter-container .filter-options .chip-default.active.STAY_AWAY {\n      background: #502B2C; }\n.main .filter-container .filter-options .chip-default.active.MOVIE {\n      background: #01C05D; }\n.main .filter-container .filter-options .chip-default.active.SERIE {\n      background: #F86C2F; }\n.main .cards-container {\n  width: calc(100% + 30px);\n  margin: 0 -15px; }\n.main .cards-container .card {\n    position: relative;\n    box-sizing: border-box;\n    margin: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\n.main .cards-container .card .poster-container {\n      position: relative;\n      overflow: hidden;\n      border-radius: 5px;\n      transition: all .4s ease-in-out;\n      background-position: center;\n      background-size: cover;\n      height: 0;\n      padding-bottom: 150%; }\n.main .cards-container .card .poster-container:hover .img-poster {\n        transform: scale(1.1, 1.1);\n        -ms-transform: scale(1.1, 1.1);\n        -webkit-transform: scale(1.1, 1.1); }\n.main .cards-container .card .poster-container .overlay {\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        color: #ffffff;\n        text-decoration: none;\n        transition: opacity .4s ease-in-out;\n        opacity: 0;\n        background-image: radial-gradient(circle, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)); }\n.main .cards-container .card .poster-container .overlay:hover {\n          opacity: 1; }\n.main .cards-container .card .poster-container .overlay .poster-detail {\n          align-items: center;\n          justify-content: space-between;\n          padding: 15px;\n          height: 100%;\n          box-sizing: border-box; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-title {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-chip {\n            padding: 3px 6px;\n            border-radius: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container {\n            text-align: center; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip {\n              display: block;\n              margin-top: 5px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .rating-container .poster-chip:nth-child(2) {\n                margin-bottom: 15px; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions {\n            justify-content: space-around;\n            width: 100%; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a {\n              color: #ffffff; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.watch-later {\n                color: #C132C0; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.indicate-now {\n                color: #29BF44; }\n.main .cards-container .card .poster-container .overlay .poster-detail .poster-actions a:hover.more-details {\n                color: #005DD6; }\n.main .cards-container .card .poster-container .img-poster {\n        transition: all .4s ease-in-out;\n        background-position: center;\n        background-size: cover;\n        padding-bottom: 150%; }\n@media (max-width: 849px) {\n  .cards-container .card {\n    flex: 1 0 50%;\n    max-width: calc(50% - 30px); } }\n@media (min-width: 850px) {\n  .cards-container .card {\n    flex: 1 0 33.33333%;\n    max-width: calc(33.33333% - 30px); } }\n@media (min-width: 1101px) {\n  .cards-container .card {\n    flex: 1 0 25%;\n    max-width: calc(25% - 30px); } }\n@media (min-width: 1250px) {\n  .cards-container .card {\n    flex: 1 0 20%;\n    max-width: calc(20% - 30px); } }\n@media (min-width: 1460px) {\n  .cards-container .card {\n    flex: 1 0 16.66666667%;\n    max-width: calc(16.66666667% - 30px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUF3Q0Esa0JBQUE7QUF5QkEsU0FBQTtBQy9EQTtFQUVJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQUh2QjtJQU1NLG1CQUFtQixFQUFBO0FBTnpCO01BU1EsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0FBVnRDO1FBYVUsbUJBQW1CLEVBQUE7QUFiN0I7VUFnQmdDLGNESmIsRUFBQTtBQ1puQjtVQW9CZ0IsY0RyQkQsRUFBQTtBQ0NmO1VBd0JnQixjRHpCRCxFQUFBO0FDQ2Y7SUFtQ1UsY0RwQ0ssRUFBQTtBQ0NmO01BcUN5QixtQkRqQlAsRUFBQTtBQ3BCbEI7TUFzQ3dCLG1CRG5CTixFQUFBO0FDbkJsQjtNQXVDbUIsbUJEckJELEVBQUE7QUNsQmxCO01Bd0NtQixtQkR2QkQsRUFBQTtBQ2pCbEI7TUF5Q2tCLG1CRHpCQSxFQUFBO0FDaEJsQjtNQTBDdUIsbUJEM0JMLEVBQUE7QUNmbEI7TUEyQ3dCLG1CRDdCTixFQUFBO0FDZGxCO01BNkNtQixtQkR0QkUsRUFBQTtBQ3ZCckI7TUE4Q29CLG1CRHhCQyxFQUFBO0FDdEJyQjtFQW9ESSx3QkFBd0I7RUFDeEIsZUFBZSxFQUFBO0FBckRuQjtJQXdETSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JES2M7SUNGZCwrQ0FBK0MsRUFBQTtBQS9EckQ7TUFrRVEsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixrQkRIWTtNQ0taLCtCQUErQjtNQUMvQiwyQkFBMkI7TUFDM0Isc0JBQXNCO01BQ3RCLFNBQVM7TUFDVCxvQkFBb0IsRUFBQTtBQTFFNUI7UUE4RVksMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QixrQ0FBa0MsRUFBQTtBQWhGOUM7UUFxRlUsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixNQUFLO1FBQ0wsT0FBTztRQUNQLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JEMUJVO1FDMkJWLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsbUNBQW1DO1FBQ25DLFVBQVU7UUFDVix3R0FBNkYsRUFBQTtBQWhHdkc7VUFtR1ksVUFBVSxFQUFBO0FBbkd0QjtVQXVHWSxtQkFBbUI7VUFDbkIsOEJBQThCO1VBQzlCLGFBQWE7VUFDYixZQUFZO1VBQ1osc0JBQXNCLEVBQUE7QUEzR2xDO1lBOEdjLGtCQUFrQixFQUFBO0FBOUdoQztZQWtIYyxnQkFBZ0I7WUFDaEIsa0JEbERNLEVBQUE7QUNqRXBCO1lBdUhjLGtCQUFrQixFQUFBO0FBdkhoQztjQTBIZ0IsY0FBYztjQUNkLGVBQWUsRUFBQTtBQTNIL0I7Z0JBOEhrQixtQkFBbUIsRUFBQTtBQTlIckM7WUFxSWMsNkJBQTZCO1lBQzdCLFdBQVcsRUFBQTtBQXRJekI7Y0F5SWdCLGNEMUlELEVBQUE7QUNDZjtnQkE0SWtDLGNEbElmLEVBQUE7QUNWbkI7Z0JBNkltQyxjRHBJZixFQUFBO0FDVHBCO2dCQThJa0MsY0RsSWYsRUFBQTtBQ1puQjtRQXNKVSwrQkFBK0I7UUFDL0IsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixvQkFBb0IsRUFBQTtBQU85QjtFQUNFO0lBQ0UsYUQ3R2lCO0lDOEdqQiwyQkFBMkMsRUFBQSxFQUM1QztBQUVIO0VBQ0U7SUFDRSxtQkRsSHVCO0lDbUh2QixpQ0FBMkMsRUFBQSxFQUM1QztBQUVIO0VBQ0U7SUFDRSxhRHZIaUI7SUN3SGpCLDJCQUEyQyxFQUFBLEVBQzVDO0FBRUg7RUFDRTtJQUNFLGFENUhpQjtJQzZIakIsMkJBQTJDLEVBQUEsRUFDNUM7QUFFSDtFQUNFO0lBQ0Usc0JEakkyQjtJQ2tJM0Isb0NBQTJDLEVBQUEsRUFDNUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDT0xPUlMgKi9cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRiYWNrZ3JvdW5kOiAjMjgyODI4O1xuJGhlYWRlci1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xuJGJhY2tncm91bmQtZmFjZWJvb2s6ICM0MjY3QjI7XG4kYmFja2dyb3VuZC1mYWNlYm9vay1ob3ZlcjogICMyZDQ2N2I7XG5cbiRidXR0b24tcHJpbWFyeTogIzI5QkY0NDtcblxuJGxvZ28teWVsbG93OiAjRDNEOTRCO1xuJGxvZ28tZ3JlZW46ICMyOUJGNDQ7XG4kbG9nby1waW5rOiAjQzEzMkMwO1xuJGxvZ28tcmVkOiAjREYxRDQzO1xuJGxvZ28tYmx1ZTogIzAwNURENjtcblxuJHJhdGluZy0xOiAjNTAyQjJDO1xuJHJhdGluZy0yOiAjQ0Y2MzY2O1xuJHJhdGluZy0zOiAjQjE5M0I3O1xuJHJhdGluZy00OiAjRjRDMjdCO1xuJHJhdGluZy01OiAjODVCREI2O1xuJHJhdGluZy02OiAjNUQ4RUJBO1xuJHJhdGluZy03OiAjN0VCQjZGO1xuXG4kY29sb3Itc2VyaWU6ICNGODZDMkY7XG4kY29sb3ItbW92aWU6ICMwMUMwNUQ7XG5cbiRpbnZhbGlkLWNvbG9yOiAjRjQ0MzM2O1xuXG4kbGlnaHRlc3QtZ3JheTogI0YxRjRGNTtcbiRsaWdodGVyLWdyYXk6ICNFNkVBRUM7XG4kbGlnaHQtZ3JheTogI0U0RTRFNDtcbiRncmF5OiAjY2RkM2Q4O1xuJGRhcmstZ3JheTogIzc1ODE4YjtcbiRkYXJrZXItZ3JheTogIzZBNkM2NjtcbiRkYXJrZXN0LWdyYXk6ICMzMzMzMzM7XG4kZGFya2VzdC1ncmF5LWJvcmRlcjogIzFkMWQxZDtcblxuJGZvbnQtZGVmYXVsdDogJGRhcmtlci1ncmF5O1xuXG4vKiBXSURUSCBDT0xVTU5TICovXG4kd2lkdGgtMTogOC4zMzMzMzMzMzMlO1xuJHdpZHRoLTI6IDE2LjY2NjY2NjY3JTtcbiR3aWR0aC0zOiAyNSU7XG4kd2lkdGgtNDogMzMuMzMzMzMzMzMlO1xuJHdpZHRoLTU6IDQxLjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtNjogNTAlO1xuJHdpZHRoLTc6IDU4LjMzMzMzMzMzMzMzMyU7XG4kd2lkdGgtODogNjYuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC05OiA3NSU7XG4kd2lkdGgtMTA6IDgzLjMzMzMzMzMzMzMzMyU7XG4kd2lkdGgtMTE6IDkxLjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtMTI6IDEwMCU7XG5cbiR3aWR0aC0xLWNvbHVtbnM6IDEwMCU7XG4kd2lkdGgtMi1jb2x1bW5zOiA1MCU7XG4kd2lkdGgtMy1jb2x1bW5zOiAzMy4zMzMzMyU7XG4kd2lkdGgtNC1jb2x1bW5zOiAyNSU7XG4kd2lkdGgtNS1jb2x1bW5zOiAyMCU7XG4kd2lkdGgtNi1jb2x1bW5zOiAxNi42NjY2NjY2NjclO1xuJHdpZHRoLTctY29sdW1uczogMTQuMjg1NzE0Mjg2JTtcbiR3aWR0aC04LWNvbHVtbnM6IDEyLjUlO1xuJHdpZHRoLTktY29sdW1uczogMTEuMSU7XG4kd2lkdGgtMTAtY29sdW1uczogMTAlO1xuXG4vKiBTSVpFICovXG4kc2l6ZS1kZWZhdWx0OiAxMnB4O1xuJHJhZGl1cy1kZWZhdWx0OiA1cHg7XG4iLCJAaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5tYWluIHtcbiAgLmZpbHRlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgLmZpbHRlci1pY29ucyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAuZmlsdGVycyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuaWNvbi1maWx0ZXJzLWNvbnRhaW5lciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICY6aG92ZXIsICYuYWN0aXZlIHsgY29sb3I6ICRsb2dvLWJsdWU7IH1cblxuICAgICAgICAgICAgJi5maWx0ZXItaWNvbiB7XG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5maWx0ZXItb3B0aW9ucyB7XG4gICAgICAuY2hpcC1kZWZhdWx0IHtcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgICAmLlVOTUlTU0FCTEUgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTcgfVxuICAgICAgICAgICYuVkVSWV9HT09EIHsgYmFja2dyb3VuZDogJHJhdGluZy02IH1cbiAgICAgICAgICAmLkdPT0QgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTUgfVxuICAgICAgICAgICYuQ09PTCB7IGJhY2tncm91bmQ6ICRyYXRpbmctNCB9XG4gICAgICAgICAgJi5CQUQgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTMgfVxuICAgICAgICAgICYuVkVSWV9CQUQgeyBiYWNrZ3JvdW5kOiAkcmF0aW5nLTIgfVxuICAgICAgICAgICYuU1RBWV9BV0FZIHsgYmFja2dyb3VuZDogJHJhdGluZy0xIH1cblxuICAgICAgICAgICYuTU9WSUV7IGJhY2tncm91bmQ6ICRjb2xvci1tb3ZpZSB9XG4gICAgICAgICAgJi5TRVJJRSB7IGJhY2tncm91bmQ6ICRjb2xvci1zZXJpZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNhcmRzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMwcHgpO1xuICAgIG1hcmdpbjogMCAtMTVweDtcblxuICAgIC5jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBtYXJnaW46IDE1cHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuXG4gICAgICAucG9zdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1kZWZhdWx0O1xuXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTUwJTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAuaW1nLXBvc3RlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHRvcDowO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtZGVmYXVsdDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsMCwwLDAuNTUpLHJnYmEoMCwwLDAsMC43NSkscmdiYSgwLDAsMCwwLjk1KSk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3Rlci1kZXRhaWwge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICAucG9zdGVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdGVyLWNoaXAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWRlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yYXRpbmctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgIC5wb3N0ZXItY2hpcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdGVyLWFjdGlvbnMge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgJi53YXRjaC1sYXRlciB7IGNvbG9yOiAkbG9nby1waW5rOyB9XG4gICAgICAgICAgICAgICAgICAmLmluZGljYXRlLW5vdyB7IGNvbG9yOiAkbG9nby1ncmVlbjsgfVxuICAgICAgICAgICAgICAgICAgJi5tb3JlLWRldGFpbHN7IGNvbG9yOiAkbG9nby1ibHVlOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltZy1wb3N0ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg0OXB4KSB7XG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xuICAgIGZsZXg6IDEgMCAkd2lkdGgtMi1jb2x1bW5zO1xuICAgIG1heC13aWR0aDogY2FsYygjeyR3aWR0aC0yLWNvbHVtbnN9IC0gMzBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4NTBweCkge1xuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTMtY29sdW1ucztcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtMy1jb2x1bW5zfSAtIDMwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMXB4KSB7XG4gIC5jYXJkcy1jb250YWluZXIgLmNhcmQge1xuICAgIGZsZXg6IDEgMCAkd2lkdGgtNC1jb2x1bW5zO1xuICAgIG1heC13aWR0aDogY2FsYygjeyR3aWR0aC00LWNvbHVtbnN9IC0gMzBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZCB7XG4gICAgZmxleDogMSAwICR3aWR0aC01LWNvbHVtbnM7XG4gICAgbWF4LXdpZHRoOiBjYWxjKCN7JHdpZHRoLTUtY29sdW1uc30gLSAzMHB4KTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0NjBweCkge1xuICAuY2FyZHMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBmbGV4OiAxIDAgJHdpZHRoLTYtY29sdW1ucztcbiAgICBtYXgtd2lkdGg6IGNhbGMoI3skd2lkdGgtNi1jb2x1bW5zfSAtIDMwcHgpO1xuICB9XG59XG4iXX0= */"

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
        this.loading$.subscribe(function (result) {
            _this.isLoading = result;
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
        if (((window.innerHeight + window.scrollY) > document.body.offsetHeight)
            && this.filters.currentPage < this.filters.lastPage
            && !this.isLoading) {
            this.filters.currentPage = this.filters.currentPage + 1;
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

module.exports = "<h2 class=\"title-modal\">Nova Indicação</h2>\n\n<div class=\"container\">\n  <form novalidate [formGroup]=\"formGroup\" (submit)=\"saveIndication()\">\n    <div class=\"flex-row col-md-12\">\n      <mat-form-field appearance=\"outline\" class=\"col-md-8 margin-right-1 dialog-input-prefix\">\n        <mat-label>Link IMDb/TMDb</mat-label>\n        <input matInput autocomplete=\"off\" formControlName='url'\n          placeholder=\"http://www.imdb.com/title/exemple ou https://www.themoviedb.org/movie/exemple\">\n        <mat-icon matPrefix>link</mat-icon>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"col-md-4\">\n          <mat-label>Avaliação</mat-label>\n        <mat-select panelClass=\"panel-dark\" formControlName='rating'>\n          <mat-option *ngFor=\"let rating of ratingArray\" [value]=\"rating\">\n            {{ratingEnum[rating]}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"flex-row col-md-12\">\n      <mat-form-field appearance=\"outline\" class=\"col-md-12\">\n        <mat-label>Comentário</mat-label>\n        <textarea matInput formControlName='comment'></textarea>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n      <button mat-button cdkFocusInitial class=\"btn-default\" type=\"submit\">\n        <mat-icon class=\"icon filter-icon\">playlist_add</mat-icon> Indicar\n      </button>\n    </div>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/indicate/indicate.component.scss":
/*!**************************************************!*\
  !*** ./src/app/indicate/indicate.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.title-modal {\n  width: 100%;\n  color: #E6EAEC;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #1d1d1d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvaW5kaWNhdGUvaW5kaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQXdDQSxrQkFBQTtBQXlCQSxTQUFBO0FDL0RBO0VBQ0UsV0FBVztFQUNYLGNEMEJvQjtFQ3pCcEIsb0JBQW9CO0VBQ3BCLGdDRDhCMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZGljYXRlL2luZGljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kYmFja2dyb3VuZDogIzI4MjgyODtcbiRoZWFkZXItYmFja2dyb3VuZDogIzMwMzAzMDtcbiRiYWNrZ3JvdW5kLWZhY2Vib29rOiAjNDI2N0IyO1xuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xuXG4kYnV0dG9uLXByaW1hcnk6ICMyOUJGNDQ7XG5cbiRsb2dvLXllbGxvdzogI0QzRDk0QjtcbiRsb2dvLWdyZWVuOiAjMjlCRjQ0O1xuJGxvZ28tcGluazogI0MxMzJDMDtcbiRsb2dvLXJlZDogI0RGMUQ0MztcbiRsb2dvLWJsdWU6ICMwMDVERDY7XG5cbiRyYXRpbmctMTogIzUwMkIyQztcbiRyYXRpbmctMjogI0NGNjM2NjtcbiRyYXRpbmctMzogI0IxOTNCNztcbiRyYXRpbmctNDogI0Y0QzI3QjtcbiRyYXRpbmctNTogIzg1QkRCNjtcbiRyYXRpbmctNjogIzVEOEVCQTtcbiRyYXRpbmctNzogIzdFQkI2RjtcblxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xuXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcblxuJGxpZ2h0ZXN0LWdyYXk6ICNGMUY0RjU7XG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XG4kZ3JheTogI2NkZDNkODtcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XG4kZGFya2VzdC1ncmF5OiAjMzMzMzMzO1xuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XG5cbiRmb250LWRlZmF1bHQ6ICRkYXJrZXItZ3JheTtcblxuLyogV0lEVEggQ09MVU1OUyAqL1xuJHdpZHRoLTE6IDguMzMzMzMzMzMzJTtcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XG4kd2lkdGgtMzogMjUlO1xuJHdpZHRoLTQ6IDMzLjMzMzMzMzMzJTtcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTY6IDUwJTtcbiR3aWR0aC03OiA1OC4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtOTogNzUlO1xuJHdpZHRoLTEwOiA4My4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTEyOiAxMDAlO1xuXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xuJHdpZHRoLTItY29sdW1uczogNTAlO1xuJHdpZHRoLTMtY29sdW1uczogMzMuMzMzMzMlO1xuJHdpZHRoLTQtY29sdW1uczogMjUlO1xuJHdpZHRoLTUtY29sdW1uczogMjAlO1xuJHdpZHRoLTYtY29sdW1uczogMTYuNjY2NjY2NjY3JTtcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcbiR3aWR0aC05LWNvbHVtbnM6IDExLjElO1xuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcblxuLyogU0laRSAqL1xuJHNpemUtZGVmYXVsdDogMTJweDtcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xuIiwiQGltcG9ydCAnYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4udGl0bGUtbW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICRsaWdodGVyLWdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhcmtlc3QtZ3JheS1ib3JkZXJcbn1cbiJdfQ== */"

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

module.exports = "<div class=\"login-container\">\n  <div class=\"social-login margin-bottom-2\">\n    <button class=\"btn btn-facebook margin-bottom-2\"><img src=\"assets/img/facebook.png\" height=\"25px\"> <span>Entrar com o Facebook</span></button>\n  </div>\n  <div class=\"manual-login\">\n    <mat-tab-group class=\"tab-login\" animationDuration=\"1500ms\" [selectedIndex]=\"tabActive\">\n      <mat-tab label=\"Login\">\n        <ng-container *ngIf=\"!isForgetPassword\">\n          <form novalidate [formGroup]=\"formSignIn\" (submit)=\"signIn()\">\n            <div class=\"flex-row col-md-12\">\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\n                <mat-label>E-mail</mat-label>\n                <input matInput autocomplete=\"off\" formControlName='email'\n                  placeholder=\"email@email.com.br\">\n                <mat-icon matPrefix>email</mat-icon>\n              </mat-form-field>\n            </div>\n            <div class=\"flex-column col-md-12\">\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\n                <mat-label>Senha</mat-label>\n                <input matInput type=\"password\" formControlName='password'>\n                <mat-icon matPrefix>lock</mat-icon>\n              </mat-form-field>\n              <div class=\"forget-password\">\n                <span (click)=\"setForgetPassword()\">Esqueceu sua senha?</span>\n              </div>\n            </div>\n            <div class=\"flex-row col-md-12 margin-top-1\">\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12\" type=\"submit\">Entrar</button>\n            </div>\n          </form>\n        </ng-container>\n\n        <ng-container *ngIf=\"isForgetPassword\">\n          <form novalidate [formGroup]=\"formForgetPassword\" (submit)=\"forgetPassword()\">\n            <div class=\"flex-row col-md-12\">\n              <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\n                <mat-label>E-mail</mat-label>\n                <input matInput autocomplete=\"off\" formControlName='email'\n                  placeholder=\"email@email.com.br\">\n                <mat-icon matPrefix>email</mat-icon>\n              </mat-form-field>\n            </div>\n            <div class=\"flex-column align-items-center col-md-12 margin-top-1\">\n              <button mat-button cdkFocusInitial class=\"btn-default col-md-12\" type=\"submit\">Enviar e-mail</button>\n              <button mat-button class=\"col-md-5 margin-top-1\" (click)=\"setForgetPassword()\">Voltar</button>\n            </div>\n          </form>\n        </ng-container>\n      </mat-tab>\n      <mat-tab label=\"Cadastrar\">\n        <form novalidate [formGroup]=\"formRegister\" (submit)=\"register()\">\n          <div class=\"flex-row col-md-12\">\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\n              <mat-label>Nome</mat-label>\n              <input matInput autocomplete=\"off\" formControlName='name'>\n              <mat-icon matPrefix>perm_identity</mat-icon>\n            </mat-form-field>\n          </div>\n          <div class=\"flex-row col-md-12\">\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\n              <mat-label>E-mail</mat-label>\n              <input matInput autocomplete=\"off\" formControlName='email'\n                placeholder=\"email@email.com.br\">\n              <mat-icon matPrefix>email</mat-icon>\n            </mat-form-field>\n          </div>\n          <div class=\"flex-column col-md-12\">\n            <mat-form-field appearance=\"outline\" class=\"col-md-12 dialog-input-prefix\">\n              <mat-label>Senha</mat-label>\n              <input matInput type=\"password\" formControlName='password'>\n              <mat-icon matPrefix>lock</mat-icon>\n            </mat-form-field>\n          </div>\n          <div class=\"flex-row col-md-12 margin-top-1\">\n            <button mat-button cdkFocusInitial class=\"btn-default col-md-12\" type=\"submit\">Cadastrar</button>\n          </div>\n        </form>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\n.login-container .social-login {\n  border-bottom: 1px solid #1d1d1d; }\n.login-container .social-login .btn-facebook {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%; }\n.login-container .social-login .btn-facebook img {\n      margin-right: 10px; }\n.login-container .forget-password {\n  text-align: right;\n  margin: 5px 0 10px; }\n.login-container .forget-password span {\n    color: #75818b;\n    text-decoration: none;\n    cursor: pointer; }\n.login-container .forget-password span:hover {\n      color: #F1F4F5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQXdDQSxrQkFBQTtBQXlCQSxTQUFBO0FDL0RBO0VBR0ksZ0NEK0J5QixFQUFBO0FDbEM3QjtJQU1NLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtBQVRqQjtNQVdZLGtCQUFrQixFQUFBO0FBWDlCO0VBZ0JJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQWpCdEI7SUFvQk0sY0RXYTtJQ1ZiLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7QUF0QnJCO01BeUJRLGNERWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kYmFja2dyb3VuZDogIzI4MjgyODtcbiRoZWFkZXItYmFja2dyb3VuZDogIzMwMzAzMDtcbiRiYWNrZ3JvdW5kLWZhY2Vib29rOiAjNDI2N0IyO1xuJGJhY2tncm91bmQtZmFjZWJvb2staG92ZXI6ICAjMmQ0NjdiO1xuXG4kYnV0dG9uLXByaW1hcnk6ICMyOUJGNDQ7XG5cbiRsb2dvLXllbGxvdzogI0QzRDk0QjtcbiRsb2dvLWdyZWVuOiAjMjlCRjQ0O1xuJGxvZ28tcGluazogI0MxMzJDMDtcbiRsb2dvLXJlZDogI0RGMUQ0MztcbiRsb2dvLWJsdWU6ICMwMDVERDY7XG5cbiRyYXRpbmctMTogIzUwMkIyQztcbiRyYXRpbmctMjogI0NGNjM2NjtcbiRyYXRpbmctMzogI0IxOTNCNztcbiRyYXRpbmctNDogI0Y0QzI3QjtcbiRyYXRpbmctNTogIzg1QkRCNjtcbiRyYXRpbmctNjogIzVEOEVCQTtcbiRyYXRpbmctNzogIzdFQkI2RjtcblxuJGNvbG9yLXNlcmllOiAjRjg2QzJGO1xuJGNvbG9yLW1vdmllOiAjMDFDMDVEO1xuXG4kaW52YWxpZC1jb2xvcjogI0Y0NDMzNjtcblxuJGxpZ2h0ZXN0LWdyYXk6ICNGMUY0RjU7XG4kbGlnaHRlci1ncmF5OiAjRTZFQUVDO1xuJGxpZ2h0LWdyYXk6ICNFNEU0RTQ7XG4kZ3JheTogI2NkZDNkODtcbiRkYXJrLWdyYXk6ICM3NTgxOGI7XG4kZGFya2VyLWdyYXk6ICM2QTZDNjY7XG4kZGFya2VzdC1ncmF5OiAjMzMzMzMzO1xuJGRhcmtlc3QtZ3JheS1ib3JkZXI6ICMxZDFkMWQ7XG5cbiRmb250LWRlZmF1bHQ6ICRkYXJrZXItZ3JheTtcblxuLyogV0lEVEggQ09MVU1OUyAqL1xuJHdpZHRoLTE6IDguMzMzMzMzMzMzJTtcbiR3aWR0aC0yOiAxNi42NjY2NjY2NyU7XG4kd2lkdGgtMzogMjUlO1xuJHdpZHRoLTQ6IDMzLjMzMzMzMzMzJTtcbiR3aWR0aC01OiA0MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTY6IDUwJTtcbiR3aWR0aC03OiA1OC4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTg6IDY2LjY2NjY2NjY2NjY2NyU7XG4kd2lkdGgtOTogNzUlO1xuJHdpZHRoLTEwOiA4My4zMzMzMzMzMzMzMzMlO1xuJHdpZHRoLTExOiA5MS42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTEyOiAxMDAlO1xuXG4kd2lkdGgtMS1jb2x1bW5zOiAxMDAlO1xuJHdpZHRoLTItY29sdW1uczogNTAlO1xuJHdpZHRoLTMtY29sdW1uczogMzMuMzMzMzMlO1xuJHdpZHRoLTQtY29sdW1uczogMjUlO1xuJHdpZHRoLTUtY29sdW1uczogMjAlO1xuJHdpZHRoLTYtY29sdW1uczogMTYuNjY2NjY2NjY3JTtcbiR3aWR0aC03LWNvbHVtbnM6IDE0LjI4NTcxNDI4NiU7XG4kd2lkdGgtOC1jb2x1bW5zOiAxMi41JTtcbiR3aWR0aC05LWNvbHVtbnM6IDExLjElO1xuJHdpZHRoLTEwLWNvbHVtbnM6IDEwJTtcblxuLyogU0laRSAqL1xuJHNpemUtZGVmYXVsdDogMTJweDtcbiRyYWRpdXMtZGVmYXVsdDogNXB4O1xuIiwiQGltcG9ydCAnYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4ubG9naW4tY29udGFpbmVyIHtcblxuICAuc29jaWFsLWxvZ2luIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhcmtlc3QtZ3JheS1ib3JkZXI7XG5cbiAgICAuYnRuLWZhY2Vib29rIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaW1nIHsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cbiAgICB9XG4gIH1cblxuICAuZm9yZ2V0LXBhc3N3b3JkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDVweCAwIDEwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRsaWdodGVzdC1ncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

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

module.exports = "<header>\n  <div class=\"header\">\n    <div class=\"header-logo\">\n      <img src=\"assets/img/header-logo.png\">\n    </div>\n    <div class=\"header-settings\">\n      <div class=\"profile-image\" *ngIf=\"isLogged\">\n        <img src=\"assets/img/user.jpg\">\n      </div>\n      <div class=\"signIn-container\" *ngIf=\"!isLogged\">\n        <span (click)=\"openDialog(0)\">Entrar</span> ou <span (click)=\"openDialog(1)\">Cadastrar</span>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/main-components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-components/header/header.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* COLORS */\n/* WIDTH COLUMNS */\n/* SIZE */\nheader {\n  padding: 10px 0;\n  background: #303030;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55); }\nheader .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 auto;\n    width: 90%; }\nheader .header img {\n      height: 29px; }\nheader .header .header-settings {\n      display: flex;\n      align-items: center; }\nheader .header .header-settings .signIn-container {\n        font-size: 14px; }\nheader .header .header-settings .signIn-container span {\n          display: inline-block;\n          color: #F1F4F5;\n          cursor: pointer; }\nheader .header .header-settings .signIn-container span:first-child {\n            margin-right: 7px; }\nheader .header .header-settings .signIn-container span:last-child {\n            margin-left: 7px; }\nheader .header .header-settings .signIn-container span:hover {\n            color: #D3D94B; }\nheader .header .header-settings .profile-image {\n        width: 43px;\n        height: 43px;\n        border-radius: 50%;\n        position: relative;\n        overflow: hidden;\n        text-align: center;\n        border: 3px solid #005DD6; }\nheader .header .header-settings .profile-image img {\n          height: 100%;\n          margin-left: 50%;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%); }\nheader .header .header-settings mat-icon:hover {\n        cursor: pointer; }\n@media (min-width: 1460px) {\n  header .header {\n    max-width: 1460px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvbWFpbi1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQXdDQSxrQkFBQTtBQXlCQSxTQUFBO0FDL0RBO0VBQ0UsZUFBZTtFQUNmLG1CREF5QjtFQ0d6QiwrQ0FBK0MsRUFBQTtBQUxqRDtJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxVQUFVLEVBQUE7QUFaZDtNQWVNLFlBQVksRUFBQTtBQWZsQjtNQW1CTSxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7QUFwQnpCO1FBdUJRLGVBQWUsRUFBQTtBQXZCdkI7VUF5QlUscUJBQXFCO1VBQ3JCLGNEQ2E7VUNBYixlQUFlLEVBQUE7QUEzQnpCO1lBNkIwQixpQkFBaUIsRUFBQTtBQTdCM0M7WUE4QnlCLGdCQUFnQixFQUFBO0FBOUJ6QztZQWlDWSxjRHpCUyxFQUFBO0FDUnJCO1FBdUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHlCQUF5QixFQUFBO0FBN0NqQztVQWdEVSxZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLG1DQUEyQjtrQkFBM0IsMkJBQTJCLEVBQUE7QUFsRHJDO1FBd0RVLGVBQWUsRUFBQTtBQU96QjtFQUNFO0lBRUksaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGJhY2tncm91bmQ6ICMyODI4Mjg7XG4kaGVhZGVyLWJhY2tncm91bmQ6ICMzMDMwMzA7XG4kYmFja2dyb3VuZC1mYWNlYm9vazogIzQyNjdCMjtcbiRiYWNrZ3JvdW5kLWZhY2Vib29rLWhvdmVyOiAgIzJkNDY3YjtcblxuJGJ1dHRvbi1wcmltYXJ5OiAjMjlCRjQ0O1xuXG4kbG9nby15ZWxsb3c6ICNEM0Q5NEI7XG4kbG9nby1ncmVlbjogIzI5QkY0NDtcbiRsb2dvLXBpbms6ICNDMTMyQzA7XG4kbG9nby1yZWQ6ICNERjFENDM7XG4kbG9nby1ibHVlOiAjMDA1REQ2O1xuXG4kcmF0aW5nLTE6ICM1MDJCMkM7XG4kcmF0aW5nLTI6ICNDRjYzNjY7XG4kcmF0aW5nLTM6ICNCMTkzQjc7XG4kcmF0aW5nLTQ6ICNGNEMyN0I7XG4kcmF0aW5nLTU6ICM4NUJEQjY7XG4kcmF0aW5nLTY6ICM1RDhFQkE7XG4kcmF0aW5nLTc6ICM3RUJCNkY7XG5cbiRjb2xvci1zZXJpZTogI0Y4NkMyRjtcbiRjb2xvci1tb3ZpZTogIzAxQzA1RDtcblxuJGludmFsaWQtY29sb3I6ICNGNDQzMzY7XG5cbiRsaWdodGVzdC1ncmF5OiAjRjFGNEY1O1xuJGxpZ2h0ZXItZ3JheTogI0U2RUFFQztcbiRsaWdodC1ncmF5OiAjRTRFNEU0O1xuJGdyYXk6ICNjZGQzZDg7XG4kZGFyay1ncmF5OiAjNzU4MThiO1xuJGRhcmtlci1ncmF5OiAjNkE2QzY2O1xuJGRhcmtlc3QtZ3JheTogIzMzMzMzMztcbiRkYXJrZXN0LWdyYXktYm9yZGVyOiAjMWQxZDFkO1xuXG4kZm9udC1kZWZhdWx0OiAkZGFya2VyLWdyYXk7XG5cbi8qIFdJRFRIIENPTFVNTlMgKi9cbiR3aWR0aC0xOiA4LjMzMzMzMzMzMyU7XG4kd2lkdGgtMjogMTYuNjY2NjY2NjclO1xuJHdpZHRoLTM6IDI1JTtcbiR3aWR0aC00OiAzMy4zMzMzMzMzMyU7XG4kd2lkdGgtNTogNDEuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC02OiA1MCU7XG4kd2lkdGgtNzogNTguMzMzMzMzMzMzMzMzJTtcbiR3aWR0aC04OiA2Ni42NjY2NjY2NjY2NjclO1xuJHdpZHRoLTk6IDc1JTtcbiR3aWR0aC0xMDogODMuMzMzMzMzMzMzMzMzJTtcbiR3aWR0aC0xMTogOTEuNjY2NjY2NjY2NjY3JTtcbiR3aWR0aC0xMjogMTAwJTtcblxuJHdpZHRoLTEtY29sdW1uczogMTAwJTtcbiR3aWR0aC0yLWNvbHVtbnM6IDUwJTtcbiR3aWR0aC0zLWNvbHVtbnM6IDMzLjMzMzMzJTtcbiR3aWR0aC00LWNvbHVtbnM6IDI1JTtcbiR3aWR0aC01LWNvbHVtbnM6IDIwJTtcbiR3aWR0aC02LWNvbHVtbnM6IDE2LjY2NjY2NjY2NyU7XG4kd2lkdGgtNy1jb2x1bW5zOiAxNC4yODU3MTQyODYlO1xuJHdpZHRoLTgtY29sdW1uczogMTIuNSU7XG4kd2lkdGgtOS1jb2x1bW5zOiAxMS4xJTtcbiR3aWR0aC0xMC1jb2x1bW5zOiAxMCU7XG5cbi8qIFNJWkUgKi9cbiRzaXplLWRlZmF1bHQ6IDEycHg7XG4kcmFkaXVzLWRlZmF1bHQ6IDVweDtcbiIsIkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBiYWNrZ3JvdW5kOiAkaGVhZGVyLWJhY2tncm91bmQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuXG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDI5cHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci1zZXR0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLnNpZ25Jbi1jb250YWluZXIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyYXk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7IG1hcmdpbi1yaWdodDogN3B4OyB9XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDdweDsgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGxvZ28teWVsbG93O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucHJvZmlsZS1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDVERDY7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NjBweCkge1xuICBoZWFkZXIge1xuICAgIC5oZWFkZXIge1xuICAgICAgbWF4LXdpZHRoOiAxNDYwcHg7XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"

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
        return this.http.get('https://api.assisteai.com.br/movies?page=' + filters.currentPage);
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

module.exports = "<div class=\"loading\">\n  <span class=\"loading-bar bg-yellow\"></span>\n  <span class=\"loading-bar bg-green\"></span>\n  <span class=\"loading-bar bg-pink\"></span>\n  <span class=\"loading-bar bg-red\"></span>\n  <span class=\"loading-bar bg-blue\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  text-align: center; }\n  .loading .loading-bar {\n    display: inline-block;\n    position: relative;\n    width: 8px;\n    height: 70px;\n    margin: 0 5px;\n    box-shadow: 4px 4px 3px 0px rgba(0, 0, 0, 0.35);\n    -webkit-animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n            animation: lds-assiste-ai 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite; }\n  .loading .loading-bar:nth-child(1) {\n      -webkit-animation-delay: -0.48s;\n              animation-delay: -0.48s; }\n  .loading .loading-bar:nth-child(2) {\n      -webkit-animation-delay: -0.36s;\n              animation-delay: -0.36s; }\n  .loading .loading-bar:nth-child(3) {\n      -webkit-animation-delay: -0.24s;\n              animation-delay: -0.24s; }\n  .loading .loading-bar:nth-child(4) {\n      -webkit-animation-delay: -0.12s;\n              animation-delay: -0.12s; }\n  .loading .loading-bar:nth-child(5) {\n      -webkit-animation-delay: -0s;\n              animation-delay: -0s; }\n  @-webkit-keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n  @keyframes lds-assiste-ai {\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmVsbGkvUHJvamVjdHMvbXktcHJvamVjdHMvYXNzaXN0ZWFpLWZyb250L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFKcEI7SUFPSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUdiLCtDQUErQztJQUMvQyw0RUFBb0U7WUFBcEUsb0VBQW9FLEVBQUE7RUFmeEU7TUFpQnFCLCtCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQWpCNUM7TUFrQnFCLCtCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQWxCNUM7TUFtQnFCLCtCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQW5CNUM7TUFvQnFCLCtCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQXBCNUM7TUFxQnFCLDRCQUFvQjtjQUFwQixvQkFBb0IsRUFBQTtFQUl6QztFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBO0VBRXZCO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBLEVBQUE7RUFSekI7RUFDRTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmxvYWRpbmctYmFyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNHB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDRweCA0cHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIGFuaW1hdGlvbjogbGRzLWFzc2lzdGUtYWkgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xuXG4gICAgJjpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjQ4czsgfVxuICAgICY6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC4zNnM7IH1cbiAgICAmOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMjRzOyB9XG4gICAgJjpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjEyczsgfVxuICAgICY6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMHM7IH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxkcy1hc3Npc3RlLWFpIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG59XG4iXX0= */"

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

module.exports = __webpack_require__(/*! /home/martinelli/Projects/my-projects/assisteai-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map