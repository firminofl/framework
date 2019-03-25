webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dragdrop_dragdrop__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__dragdrop_dragdrop__["a" /* DragDropPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Drag/Drop" tabIcon="desktop"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
        this.inputs = [];
        this.inputsChbox = [];
        this.ios = "ios-unlock";
        this.md = "md-unlock";
        this.flag_of_lock = false;
    }
    DragDropPage.prototype.pieChart = function () {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Topping");
        data.addColumn("number", "Slices");
        data.addRows([
            ["Mushrooms", 3],
            ["Onions", 1],
            ["Olives", 1],
            ["Zucchini", 1],
            ["Pepperoni", 2]
        ]);
        // Set chart options
        var options = { title: "Chart", width: 400, height: 300 };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById("chart_div"));
        chart.draw(data, options);
    };
    DragDropPage.prototype.barChart = function () {
        var data = google.visualization.arrayToDataTable([
            ["Element", "Density", { role: "style" }],
            ["Copper", 8.94, "#b87333"],
            ["Silver", 10.49, "silver"],
            ["Gold", 19.3, "gold"],
            ["Platinum", 21.45, "color: #e5e4e2"]
        ]);
        var view = new google.visualization.DataView(data);
        view.setColumns([
            0,
            1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2
        ]);
        var options = {
            title: "Density of Precious Metals, in g/cm^3",
            width: 600,
            height: 400,
            bar: { groupWidth: "95%" },
            legend: { position: "none" }
        };
        var chart = new google.visualization.BarChart(document.getElementById("chart_div"));
        chart.draw(view, options);
    };
    DragDropPage.prototype.histogramChart = function () {
        var data = google.visualization.arrayToDataTable([
            ["Dinosaur", "Length"],
            ["Acrocanthosaurus (top-spined lizard)", 12.2],
            ["Albertosaurus (Alberta lizard)", 9.1],
            ["Allosaurus (other lizard)", 12.2],
            ["Apatosaurus (deceptive lizard)", 22.9],
            ["Archaeopteryx (ancient wing)", 0.9],
            ["Argentinosaurus (Argentina lizard)", 36.6],
            ["Baryonyx (heavy claws)", 9.1],
            ["Brachiosaurus (arm lizard)", 30.5],
            ["Ceratosaurus (horned lizard)", 6.1],
            ["Coelophysis (hollow form)", 2.7],
            ["Compsognathus (elegant jaw)", 0.9],
            ["Deinonychus (terrible claw)", 2.7],
            ["Diplodocus (double beam)", 27.1],
            ["Dromicelomimus (emu mimic)", 3.4],
            ["Gallimimus (fowl mimic)", 5.5],
            ["Mamenchisaurus (Mamenchi lizard)", 21.0],
            ["Megalosaurus (big lizard)", 7.9],
            ["Microvenator (small hunter)", 1.2],
            ["Ornithomimus (bird mimic)", 4.6],
            ["Oviraptor (egg robber)", 1.5],
            ["Plateosaurus (flat lizard)", 7.9],
            ["Sauronithoides (narrow-clawed lizard)", 2.0],
            ["Seismosaurus (tremor lizard)", 45.7],
            ["Spinosaurus (spiny lizard)", 12.2],
            ["Supersaurus (super lizard)", 30.5],
            ["Tyrannosaurus (tyrant lizard)", 15.2],
            ["Ultrasaurus (ultra lizard)", 30.5],
            ["Velociraptor (swift robber)", 1.8]
        ]);
        var options = {
            title: "Lengths of dinosaurs, in meters",
            legend: { position: "none" }
        };
        var chart = new google.visualization.Histogram(document.getElementById("chart_div"));
        chart.draw(data, options);
    };
    DragDropPage.prototype.addElementClicked = function (elementClicked) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Give a nickname to the component",
            subTitle: "Exemple: It's magic this",
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
                        console.log("Cancel clicked! Caution");
                    }
                },
                {
                    text: "Done",
                    handler: function (data) {
                        if (elementClicked == "button") {
                            _this.inputs.push({
                                title: data.nickname,
                                type: "button",
                                value: data.nickname,
                                class: "btn"
                            });
                        }
                        else if (elementClicked == "checkbox") {
                            _this.inputsChbox.push({
                                title: data.nickname,
                                type: "checkbox",
                                value: data.nickname,
                                class: "checkbox"
                            });
                        }
                        else if (elementClicked == "graphic") {
                            _this.alertDialogChoiceGraphic();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    DragDropPage.prototype.alertDialogChoiceGraphic = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Select a type of chart for drag and drop");
        alert.addInput({
            type: "radio",
            label: "Pie chart",
            value: "piechart",
            checked: true
        });
        alert.addInput({
            type: "radio",
            label: "Bar chart",
            value: "barchart"
        });
        alert.addInput({
            type: "radio",
            label: "Histogram",
            value: "histogram"
        });
        /*alert.addInput({
          type: "radio",
          label: "Table chart",
          value: "tablechart"
        });*/
        alert.addButton("Cancel");
        alert.addButton({
            text: "Ok",
            handler: function (data) {
                console.log("Radio data:", data);
                if (data == "piechart") {
                    _this.pieChart();
                }
                if (data == "barchart") {
                    _this.barChart();
                }
                if (data == "histogram") {
                    _this.histogramChart();
                }
                if (data == "tablechart") {
                    //this.tableChart();
                }
            }
        });
        alert.present();
    };
    DragDropPage.prototype.changeStateOfButton = function () {
        if (!this.flag_of_lock) {
            this.ios = "ios-lock";
            this.md = "md-lock";
            this.flag_of_lock = true;
        }
        else {
            this.ios = "ios-unlock";
            this.md = "md-unlock";
            this.flag_of_lock = false;
        }
    };
    DragDropPage.prototype.exportProgram = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle("Select a component for drag and drop");
        alert.addButton("Cancel");
        alert.present();
    };
    DragDropPage.prototype.alertDialogChoice = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Select a component for drag and drop");
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
        /*alert.addInput({
          type: "radio",
          label: "ListView",
          value: "listview"
        });*/
        alert.addInput({
            type: "radio",
            label: "Graphic",
            value: "graphic"
        });
        alert.addButton("Cancel");
        alert.addButton({
            text: "Ok",
            handler: function (data) {
                console.log("Radio data:", data);
                if (data == "graphic")
                    _this.alertDialogChoiceGraphic();
                else
                    _this.addElementClicked(data);
            }
        });
        alert.present();
    };
    DragDropPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dragdrop",template:/*ion-inline-start:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/dragdrop/dragdrop.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-buttons left>\n        <button (click)="changeStateOfButton()">\n          <ion-icon ios="{{ ios }}" md="{{ md }}"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-buttons *ngIf="!flag_of_lock" right>\n        <button\n          ion-button\n          icon-end\n          solid\n          color="secondary"\n          (click)="alertDialogChoice()"\n        >\n          Add\n        </button>\n      </ion-buttons>\n\n      <ion-buttons *ngIf="flag_of_lock" right>\n        <button\n          ion-button\n          icon-end\n          solid\n          color="primary"\n          (click)="exportProgram()"\n        >\n          Export\n        </button>\n      </ion-buttons>\n      <ion-title>\n        Add component\n      </ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div *ngFor="let item of inputs">\n    <div absolute-drag>\n      <input\n        class="{{ item.class }}"\n        type="{{ item.type }}"\n        value="{{ item.value }}"\n      />\n    </div>\n    <br />\n  </div>\n\n  <div *ngFor="let chbox of inputsChbox">\n    <div absolute-drag>\n      <input\n        class="{{ chbox.class }}"\n        type="{{ chbox.type }}"\n        value="{{ chbox.value }}"\n      />{{ chbox.value }}\n    </div>\n    <br />\n  </div>\n\n  <div id="chart_div" absolute-drag></div>\n</ion-content>\n'/*ion-inline-end:"/home/filipe/Documentos/workspaces/ionic/framework/src/pages/dragdrop/dragdrop.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], DragDropPage);
    return DragDropPage;
    var _a, _b, _c;
}());

/*tableChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Name");
    data.addColumn("number", "Salary");
    data.addColumn("boolean", "Full Time Employee");
    data.addRows([
      ["Mike", { v: 10000, f: "$10,000" }, true],
      ["Jim", { v: 8000, f: "$8,000" }, false],
      ["Alice", { v: 12500, f: "$12,500" }, true],
      ["Bob", { v: 7000, f: "$7,000" }, true]
    ]);

    var table = new google.visualization.Table(
      document.getElementById("chart_div")
    );

    table.draw(data, { showRowNumber: true, width: "100%", height: "100%" });
  }
  */
//# sourceMappingURL=dragdrop.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dragdrop_dragdrop__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_absolute_drag_absolute_drag__ = __webpack_require__(270);
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
                __WEBPACK_IMPORTED_MODULE_9__components_absolute_drag_absolute_drag__["a" /* AbsoluteDrag */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dragdrop_dragdrop__["a" /* DragDropPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsoluteDrag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DomController */]])
    ], AbsoluteDrag);
    return AbsoluteDrag;
}());

//# sourceMappingURL=absolute-drag.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map