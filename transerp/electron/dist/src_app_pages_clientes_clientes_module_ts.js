(self["webpackChunktranserp"] = self["webpackChunktranserp"] || []).push([["src_app_pages_clientes_clientes_module_ts"],{

/***/ 9264:
/*!***********************************************************!*\
  !*** ./src/app/pages/clientes/clientes-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageRoutingModule": () => (/* binding */ ClientesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes.page */ 2334);




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_0__.ClientesPage
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ 5095:
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageModule": () => (/* binding */ ClientesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes-routing.module */ 9264);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page */ 2334);







let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesPageRoutingModule
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_1__.ClientesPage]
    })
], ClientesPageModule);



/***/ }),

/***/ 2334:
/*!*************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPage": () => (/* binding */ ClientesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clientes.page.html */ 2990);
/* harmony import */ var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page.scss */ 1738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-electron */ 2572);
/* harmony import */ var src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clientes.service */ 2754);






let ClientesPage = class ClientesPage {
    constructor(_clientes, _electronService, cdRef) {
        this._clientes = _clientes;
        this._electronService = _electronService;
        this.cdRef = cdRef;
        if (this._electronService.isElectronApp) {
            // let pong: string = this._electronService.ipcRenderer.sendSync('REQUEST_CHANNEL');
            console.log(this._electronService);
        }
    }
    ngOnInit() {
    }
    test() {
        this._clientes.obtenerClientes().subscribe((data) => {
            console.log(data);
        });
    }
    openModal() {
        console.log("Open a modal");
        this._electronService.ipcRenderer.send("openModal");
    }
};
ClientesPage.ctorParameters = () => [
    { type: src_app_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__.ClientesService },
    { type: ngx_electron__WEBPACK_IMPORTED_MODULE_3__.ElectronService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
ClientesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clientes',
        template: _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientesPage);



/***/ }),

/***/ 2754:
/*!**********************************************!*\
  !*** ./src/app/services/clientes.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesService": () => (/* binding */ ClientesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 1437);




let ClientesService = class ClientesService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.APIURL = 'http://localhost:3000/api/';
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                .set('user-token', loginService.obtenerSesion().token)
                .set('Content-Type', 'application/json')
        };
    }
    obtenerClientes() {
        return this.http.get(`${this.APIURL}clientes`, this.header);
    }
    crearServicio(nuevoServicio) {
        return this.http.post(`${this.APIURL}clientes`, nuevoServicio, this.header);
    }
    borrarServicio(id) {
        return this.http.delete(`${this.APIURL}clientes/${id}`, this.header);
    }
    editarServicio(id, servicioAEditar) {
        console.log(id);
        console.log(servicioAEditar);
        return this.http.put(`${this.APIURL}clientes/${id}`, servicioAEditar, this.header);
    }
    obtenerServiciosCriterio(criterio, cadena) {
        return this.http.get(`${this.APIURL}clientes/criterio/${criterio}/${cadena}`, this.header);
    }
};
ClientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService }
];
ClientesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ClientesService);



/***/ }),

/***/ 1738:
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2990:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>clientes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-button (click)=\"openModal()\"></ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_clientes_clientes_module_ts.js.map