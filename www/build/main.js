webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElementosPage = /** @class */ (function () {
    function ElementosPage(navCtrl, navParams, viewCtrl, appCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
    }
    ElementosPage.prototype.abrirConfiguracao = function (elemento) {
        var _this = this;
        console.log("Elemento escolhido: " + elemento);
        var alert = this.alertCtrl.create({
            title: "Setup element",
            subTitle: "Give a legal nickname for the component.\nExample: wonderful button",
            inputs: [
                {
                    name: "nickname",
                    placeholder: "nickname"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Done",
                    handler: function (data) {
                        //this.informations = {elemento: elemento, nickname: data.nickname };
                        //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
                        //this.navCtrl.push(DragDropPage, {element: elemento, nickname: data.nickname });
                        //this.navCtrl.push(ConfigurarelementoPage, {elemento});
                        //this.viewCtrl.dismiss();
                        _this.navCtrl.parent.select(1, { nickname: data.nickname });
                    }
                }
            ]
        });
        alert.present();
    };
    ElementosPage.prototype.popView = function () {
        this.navCtrl.pop();
    };
    ElementosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-elementos",template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/elementos/elementos.html"*/'<ion-header absolute-drag>\n  <ion-navbar>\n    <ion-title>\n      Elements to create\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-label>Examples</ion-label>\n  <!-- List of Text Items -->\n  <ion-list>\n    <ion-item>\n      <ion-label (click)="abrirConfiguracao(\'button\')">Button</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label (click)="abrirConfiguracao(\'checkbox\')">Checkbox</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label (click)="abrirConfiguracao(\'image\')">Image</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label (click)="abrirConfiguracao(\'listview\')">Listview</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/elementos/elementos.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], ElementosPage);
    return ElementosPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=elementos.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/configurarelemento/configurarelemento.module": [
		152
	],
	"../pages/elementos/elementos.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarelementoPageModule", function() { return ConfigurarelementoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configurarelemento__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigurarelementoPageModule = /** @class */ (function () {
    function ConfigurarelementoPageModule() {
    }
    ConfigurarelementoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configurarelemento__["a" /* ConfigurarelementoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configurarelemento__["a" /* ConfigurarelementoPage */]),
            ],
        })
    ], ConfigurarelementoPageModule);
    return ConfigurarelementoPageModule;
}());

//# sourceMappingURL=configurarelemento.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurarelementoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dragdrop_dragdrop__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurarelementoPage = /** @class */ (function () {
    function ConfigurarelementoPage(navCtrl, navParams, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.elementoClicado = this.navParams.get('elemento');
    }
    ConfigurarelementoPage.prototype.salvarConfig = function () {
        //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dragdrop_dragdrop__["a" /* DragDropPage */], { nickname: this.nickname, elementoClicado: this.elementoClicado });
        this.viewCtrl.dismiss();
    };
    ConfigurarelementoPage.prototype.popView = function () {
        this.navCtrl.pop();
    };
    ConfigurarelementoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configurarelemento',template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/configurarelemento/configurarelemento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Setup element</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>Give a legal nickname for the component</h4>\n  <p>Example: wonderful button </p>\n  <br /><br />\n\n  <!-- Input with placeholder -->\n  <ion-input id="nickname" [(ngModel)]="nickname" placeholder="Nickname for the component"></ion-input>\n\n  <button ion-button class="button"  (click)="salvarConfig()">\n    Salvar\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/configurarelemento/configurarelemento.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object])
    ], ConfigurarelementoPage);
    return ConfigurarelementoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=configurarelemento.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dragdrop_dragdrop__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elementos_elementos__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__dragdrop_dragdrop__["a" /* DragDropPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__elementos_elementos__["a" /* ElementosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Drag/Drop" tabIcon="desktop"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Elementos" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>In.Iot</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="insere-image-iot">\n  <h2>Bem vindo ao In.IoT!</h2>\n  <br><br>\n  <p>\n    Esta aplicação tem por base lhe ajudar a montar sua aplicação. Conectando-se ao middleware, você terá acesso a informações de seu interesse\n    e sua capacidade de montar uma tela legal aqui para visualizá-las.\n  </p>\n  <br>\n</ion-content>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dragdrop_dragdrop__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_elementos_elementos__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_configurarelemento_configurarelemento_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_absolute_drag_absolute_drag__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dragdrop_dragdrop__["a" /* DragDropPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_absolute_drag_absolute_drag__["a" /* AbsoluteDrag */],
                __WEBPACK_IMPORTED_MODULE_7__pages_elementos_elementos__["a" /* ElementosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/configurarelemento/configurarelemento.module#ConfigurarelementoPageModule', name: 'ConfigurarelementoPage', segment: 'configurarelemento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementos/elementos.module#ElementosPageModule', name: 'ElementosPage', segment: 'elementos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_configurarelemento_configurarelemento_module__["ConfigurarelementoPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dragdrop_dragdrop__["a" /* DragDropPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_elementos_elementos__["a" /* ElementosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsoluteDrag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbsoluteDrag = /** @class */ (function () {
    function AbsoluteDrag(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    AbsoluteDrag.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    AbsoluteDrag.prototype.handlePan = function (ev) {
        var _this = this;
        var newLeft = ev.center.x;
        var newTop = ev.center.y;
        this.domCtrl.write(function () {
            if (newLeft < 0) {
                newLeft = 0;
            }
            if (newLeft > (screen.width.valueOf() - 50)) {
                newLeft = screen.width.valueOf() - 50;
            }
            if (newTop >= screen.height.valueOf() - 50) {
                newTop = screen.height.valueOf() - 50;
                console.log("entrei aqui " + newTop);
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'left', newLeft + 'px');
            _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('startLeft'),
        __metadata("design:type", Object)
    ], AbsoluteDrag.prototype, "startLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('startTop'),
        __metadata("design:type", Object)
    ], AbsoluteDrag.prototype, "startTop", void 0);
    AbsoluteDrag = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[absolute-drag]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* DomController */]])
    ], AbsoluteDrag);
    return AbsoluteDrag;
}());

//# sourceMappingURL=absolute-drag.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragDropPage = /** @class */ (function () {
    function DragDropPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.testRadioOpen = false;
        this.inputs = [];
    }
    DragDropPage.prototype.adicionarelementoClicado = function (elementoClicado) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Give a nickname to the component",
            inputs: [
                {
                    name: "nickname",
                    placeholder: "nickname"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Login",
                    handler: function (data) {
                        if (elementoClicado == "button") {
                            _this.inputs.push({
                                title: data.nickname,
                                type: "button",
                                value: data.nickname,
                                class: "btn"
                            });
                        }
                        else if (elementoClicado == "checkbox") {
                            _this.inputs.push({
                                title: data.nickname,
                                type: "checkbox",
                                value: data.nickname,
                                class: "checkbox"
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    DragDropPage.prototype.alertDialogChoice = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Select a component");
        alert.addInput({
            type: "radio",
            label: "Button",
            value: "button",
            checked: true
        });
        alert.addInput({
            type: "radio",
            label: "Checkbox",
            value: "checkbox"
        });
        alert.addInput({
            type: "radio",
            label: "ListView",
            value: "listview"
        });
        alert.addInput({
            type: "radio",
            label: "Graph",
            value: "graph"
        });
        alert.addButton("Cancel");
        alert.addButton({
            text: "Ok",
            handler: function (data) {
                console.log("Radio data:", data);
                _this.adicionarelementoClicado(data);
            }
        });
        alert.present();
    };
    DragDropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dragdrop",template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/dragdrop/dragdrop.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons right>\n      <button ion-button ion-only (click)="alertDialogChoice()">\n        <ion-icon name="add-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Add component\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div *ngFor="let item of inputs">\n    <div absolute-drag>\n      <input\n        class="{{ item.class }}"\n        type="{{ item.type }}"\n        value="{{ item.value }}"\n      />\n    </div>\n    <br />\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/dragdrop/dragdrop.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], DragDropPage);
    return DragDropPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=dragdrop.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map