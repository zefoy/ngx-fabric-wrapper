(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-container\" fxLayout=\"column\" [ngStyle.lt-sm]=\"'min-height: 800px;'\">\n  <div class=\"app-title\">Simple example app for the ngx-fabric-wrapper</div>\n\n  <div class=\"info-container\">\n    This example only shows some of the available features, to see all check Fabric demos / documentation.\n  </div>\n\n  <div class=\"horizontal-container\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"auto\">\n    <div class=\"vertical-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"50%\">\n      <div class=\"box-title\">Settings</div>\n\n      <div class=\"action-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"auto\">\n        <div class=\"action-button\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"auto\" (click)='toggleType()'>{{(type == \"component\") ? \"Switch to directive\" : \"Switch to component\"}}</div>\n\n        <div class=\"action-button\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"auto\" (click)='toggleDisabled()'>Toggle disabled state</div>\n\n        <div class=\"action-button\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"auto\" (click)='addLine()'>Add line object</div>\n\n        <div class=\"action-button\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"auto\" (click)='addText()'>Add text object</div>\n\n        <div class=\"action-button\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"auto\" (click)='addImage()'>Add image object</div>\n\n        <div class=\"action-button\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"auto\" (click)='resetCanvasObjects()'>Reset the canvas</div>\n      </div>\n    </div>\n\n    <div class=\"vertical-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"50%\">\n      <div class=\"box-title\">Fabric</div>\n\n      <div class=\"content-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"auto\">\n        <fabric *ngIf=\"type == 'component' && show\" fxFlex=\"auto\" [data]=\"data\" [config]=\"config\" [disabled]=\"disabled\" (dataLoaded)=\"onDataLoaded($event)\" (objectAdded)=\"onObjectAdded($event)\" (selectionCreated)=\"onSelectionCreated($event)\">\n        </fabric>\n\n        <div *ngIf=\"type == 'directive' && show\" fxFlex=\"auto\">\n          <canvas class=\"fabric-canvas\" [fabric]=\"config\" [disabled]=\"disabled\" (objectAdded)=\"onObjectAdded($event)\" (selectionCreated)=\"onSelectionCreated($event)\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-title {\n  font-size: 24px;\n}\n\n.box-title {\n  font-size: 20px;\n}\n\n.box-container {\n  box-sizing: border-box;\n  width: 800px;\n  height: 500px;\n  max-width: 90%;\n  max-height: 90%;\n  padding: 24px;\n  margin: 24px auto;\n  border-radius: 4px;\n\n  color: #555;\n  background-color: #eee;\n  box-shadow:\n    0 6px 20px rgba(0, 0, 0, 0.18),\n    0 6px 6px rgba(0, 0, 0, 0.25);\n}\n\n.info-container {\n  padding: 12px 16px;\n\n  line-height: 24px;\n}\n\n.action-container {\n  overflow: auto;\n  padding: 16px;\n}\n\n.content-container {\n  overflow: visible;\n}\n\n.action-container,\n.content-container {\n  position: relative;\n\n  height: 300px;\n  min-height: 0;\n  margin: 8px 16px;\n  border-radius: 4px;\n\n  background-color: #fff;\n}\n\n.action-button {\n  box-sizing: border-box;\n  width: calc(100% - 16px);\n  min-height: 35px;\n  padding: 4px 16px;\n  margin: 8px;\n  border: 1px solid #555;\n  border-radius: 4px;\n\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  text-align: center;\n}\n\n.action-button:hover {\n  color: #fff;\n  background-color: #555;\n}\n\n.quill-editor {\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEI7O2lDQUUrQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJveC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJveC1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1hcmdpbjogMjRweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJveC1zaGFkb3c6XG4gICAgMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTgpLFxuICAgIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uaW5mby1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG5cbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lcixcbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBoZWlnaHQ6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbi1idXR0b246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuLnF1aWxsLWVkaXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */"

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
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-fabric-wrapper */ "./node_modules/ngx-fabric-wrapper/dist/ngx-fabric-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.show = true;
        this.data = {
            objects: [
                {
                    type: 'group',
                    top: 22,
                    left: 72,
                    width: 200,
                    height: 60,
                    objects: [
                        {
                            type: 'rect',
                            top: -30,
                            left: -100,
                            width: 200,
                            height: 60,
                            fill: '#cfcfcf'
                        },
                        {
                            type: 'text',
                            width: 200,
                            height: 60,
                            fontSize: 24,
                            text: 'Example object',
                            originX: 'center',
                            originY: 'center'
                        }
                    ]
                }
            ]
        };
        this.type = 'component';
        this.disabled = false;
        this.config = {
            renderOnAddRemove: true
        };
    }
    AppComponent.prototype.toggleType = function () {
        this.type = (this.type === 'component') ? 'directive' : 'component';
    };
    AppComponent.prototype.addLine = function () {
        var line = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Line([
            44, 100, 300, 100
        ], {
            fill: '#000000',
            stroke: '#000000',
            strokeWidth: 3
        });
        if (this.type === 'directive' && this.directiveRef) {
            this.directiveRef.fabric().add(line);
        }
        else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
            this.componentRef.directiveRef.fabric().add(line);
        }
    };
    AppComponent.prototype.addText = function () {
        var text = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Text('Angular', {
            top: 120,
            left: 105,
            fill: '#000000'
        });
        if (this.type === 'directive' && this.directiveRef) {
            this.directiveRef.fabric().add(text);
        }
        else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
            this.componentRef.directiveRef.fabric().add(text);
        }
    };
    AppComponent.prototype.addImage = function () {
        var _this = this;
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL('https://angular.io/assets/images/logos/angular/angular.png', function (image) {
            image.scale(0.5);
            image.set({ left: 110, top: 180 });
            if (_this.type === 'directive' && _this.directiveRef) {
                _this.directiveRef.fabric().add(image);
            }
            else if (_this.type === 'component' && _this.componentRef && _this.componentRef.directiveRef) {
                _this.componentRef.directiveRef.fabric().add(image);
            }
        });
    };
    AppComponent.prototype.toggleDisabled = function () {
        this.disabled = !this.disabled;
    };
    AppComponent.prototype.resetCanvasObjects = function () {
        if (this.type === 'directive' && this.directiveRef) {
            this.directiveRef.clear();
        }
        else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
            this.componentRef.directiveRef.clear();
        }
        this.data = Object.assign({}, this.data);
    };
    AppComponent.prototype.onDataLoaded = function (canvas) {
        console.log('Data loaded:', canvas);
    };
    AppComponent.prototype.onObjectAdded = function (event) {
        console.log('Object added:', event);
    };
    AppComponent.prototype.onSelectionCreated = function (event) {
        console.log('Selection created:', event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_2__["FabricComponent"], { static: false }),
        __metadata("design:type", ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_2__["FabricComponent"])
    ], AppComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_2__["FabricDirective"], { static: false }),
        __metadata("design:type", ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_2__["FabricDirective"])
    ], AppComponent.prototype, "directiveRef", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-fabric-wrapper */ "./node_modules/ngx-fabric-wrapper/dist/ngx-fabric-wrapper.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DEFAULT_FABRIC_CONFIG = {
    allowTouchScrolling: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_3__["FabricModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ],
            exports: [],
            providers: [
                {
                    provide: ngx_fabric_wrapper__WEBPACK_IMPORTED_MODULE_3__["FABRIC_CONFIG"],
                    useValue: DEFAULT_FABRIC_CONFIG
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Projects/ngx-libraries/ngx-fabric-wrapper/example/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map