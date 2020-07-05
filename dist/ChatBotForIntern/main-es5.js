function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@angular/compiler/src sync recursive":
  /*!*************************************************!*\
    !*** ./node_modules/@angular/compiler/src sync ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCompilerSrcSyncRecursive(module, exports) {
    function webpackEmptyContext(req) {
      var e = new Error("Cannot find module '" + req + "'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }

    webpackEmptyContext.keys = function () {
      return [];
    };

    webpackEmptyContext.resolve = webpackEmptyContext;
    module.exports = webpackEmptyContext;
    webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ChatBotForIntern';
      this.MainUrl = 'https://dazzling-saguaro-21294.herokuapp.com/';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 1,
      consts: [[3, "MainUrl"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("MainUrl", ctx.MainUrl);
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _chat_log_chat_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat-log/chat-log.component */
    "./src/app/chat-log/chat-log.component.ts");
    /* harmony import */


    var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-box/chat-box.component */
    "./src/app/chat-box/chat-box.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _chat_log_chat_log_component__WEBPACK_IMPORTED_MODULE_4__["ChatLogComponent"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__["ChatBoxComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _chat_log_chat_log_component__WEBPACK_IMPORTED_MODULE_4__["ChatLogComponent"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__["ChatBoxComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat-box/chat-box.component.ts":
  /*!************************************************!*\
    !*** ./src/app/chat-box/chat-box.component.ts ***!
    \************************************************/

  /*! exports provided: ChatBoxComponent */

  /***/
  function srcAppChatBoxChatBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function () {
      return ChatBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChatBoxComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msgInfo_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pt-3", i_r3 > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msgInfo_r2.message, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getDateInHumanReadableFormat(ctx_r0.parseISOString(msgInfo_r2.created_at)), " ");
      }
    }

    var ChatBoxComponent = /*#__PURE__*/function () {
      function ChatBoxComponent(http) {
        _classCallCheck(this, ChatBoxComponent);

        this.http = http;
        this.sendMessageUrl = "".concat(this.MainUrl, "/sendMessage");
        this.getUserMessageUrl = "".concat(this.MainUrl, "/messageOfUser?id=");
        this.getUserImageUrl = "".concat(this.MainUrl, "/getImage?id=");
        this.messageList = [];
        this.userList = [];
        this.pendingMsg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.numberOfMessagesUnsent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lastMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ChatBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          for (var i = 0; i < this.pendingMessages.length; i++) {
            if (this.id == this.pendingMessages[i].id) {
              this.sendMessage(this.pendingMessages[i].mssg);
            }
          }

          this.http.get(this.getUserMessageUrl.concat(String(this.id))).subscribe(function (res) {
            _this.messageList = res;
            _this.messageList = _this.messageList.slice(_this.messageList.length - 10, _this.messageList.length);

            _this.lastMessage.emit(_this.messageList[_this.messageList.length - 1].message);
          }, function (error) {
            console.log('Server Not Found');
          });
          this.http.get(this.getUserImageUrl.concat(String(this.id))).subscribe(function (res) {
            _this.userList = res;
          }, function (error) {
            console.log('Server Not Found');
          });
        }
      }, {
        key: "parseISOString",
        value: function parseISOString(s) {
          try {
            var b = s.split(/\D+/);
            return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
          } catch (e) {
            console.log('No Database');
            return 'No Database';
          }
        }
      }, {
        key: "getDateInHumanReadableFormat",
        value: function getDateInHumanReadableFormat(inpDate) {
          if (inpDate != 'No Database') {
            var diffInMinutes = (new Date().getTime() - inpDate.getTime()) / 60000;

            if (diffInMinutes < 1) {
              return '* a moment ago';
            }

            if (diffInMinutes < 10) {
              return '* few minutes ago';
            }

            if (diffInMinutes < 60) {
              return '* half an hour ago';
            }

            if (diffInMinutes < 1440) {
              return '* few hours ago';
            }

            if (diffInMinutes < 2880) {
              return '* a day ago';
            }

            if (diffInMinutes < 43800) {
              return '* few days ago';
            }

            if (diffInMinutes < 87600) {
              return '* a month ago';
            }

            return '* few months ago';
          }

          return '* will be added latter';
        }
      }, {
        key: "closeMe",
        value: function closeMe() {
          this.isClosed.emit(0);
        }
      }, {
        key: "getUserImage",
        value: function getUserImage() {
          try {
            return this.userList[0].image;
          } catch (e) {
            return 'none';
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(msg, msgBox) {
          var _this2 = this;

          var options = {
            headers: {
              'Content-Type': 'application/json'
            },
            reportProgress: true
          };
          var data = {
            id: this.id,
            message: msg
          };

          if (msg.length > 0) {
            var response;
            this.http.post(this.sendMessageUrl, JSON.stringify(data), options).subscribe(function (res) {
              response = res;
              response = response.slice(response.length - 10, response.length);
            }, function (error) {
              var flag = true;

              for (var i = 0; i < _this2.pendingMessages.length; i++) {
                if (_this2.pendingMessages[i].id == _this2.id && _this2.pendingMessages[i].mssg == msg) {
                  flag = false;
                  break;
                }
              }

              if (flag) {
                _this2.pendingMsg.emit({
                  id: _this2.id,
                  mssg: msg
                });

                _this2.numberOfMessagesUnsent.emit(_this2.pendingMessages.length);
              }

              _this2.messageList.push({
                userid: _this2.id,
                message: msg
              });

              try {
                msgBox.value = '';
              } catch (e) {
                console.log('no Input Found');
              }

              _this2.lastMessage.emit(_this2.messageList[_this2.messageList.length - 1].message);
            }, function () {
              _this2.isSend.emit(true);

              _this2.messageList = response;

              try {
                msgBox.value = '';
              } catch (e) {
                for (var i = 0; i < _this2.pendingMessages.length; i++) {
                  if (_this2.pendingMessages[i].id == _this2.id && _this2.pendingMessages[i].mssg == msg) {
                    _this2.pendingMessages.splice(i, 1);

                    _this2.numberOfMessagesUnsent.emit(_this2.pendingMessages.length);

                    break;
                  }
                }
              }

              _this2.lastMessage.emit(_this2.messageList[_this2.messageList.length - 1].message);
            });
          }
        }
      }]);

      return ChatBoxComponent;
    }();

    ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) {
      return new (t || ChatBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ChatBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatBoxComponent,
      selectors: [["app-chat-box"]],
      inputs: {
        posOfDisplay: ["positionOfDisplay", "posOfDisplay"],
        nameOfBot: "nameOfBot",
        id: "id",
        pendingMessages: "pendingMessages",
        MainUrl: ["MainURL", "MainUrl"]
      },
      outputs: {
        pendingMsg: "pendingMsg",
        isClosed: "isClosed",
        isSend: "isSend",
        numberOfMessagesUnsent: "numberOfMessagesUnsent",
        lastMessage: "lastMessage"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "align-bottom-right"], [1, "card", "border", 2, "width", "290px"], [1, "card-header", "bg-dark"], ["src", "/assets/images/message-2-16.png", "alt", "m", 1, "p-1"], [1, "card-title", "text-white", "font-weight-bold"], ["src", "/assets/images/closeButton.png", "alt", "c", 1, "float-right", "btn", "bg-white", 3, "click"], [1, "card-header", "overflow-auto", 2, "height", "150px"], [1, "list-unstyled"], [4, "ngFor", "ngForOf"], [1, "form-inline", "p-2"], ["type", "text", 1, "form-control", "form-control-sm"], ["message", ""], ["type", "button", "value", "send", 1, "form-control", "form-control-sm", "btn-sm", "btn-primary", 3, "click"], [1, "pb-5"], [1, "bg-white", "p-2", "shadow-sm", "small", "w-90", "float-left"], [1, "small", "text-black-50"], ["width", "20px", "height", "20px", "src", "/assets/images/car1.jpeg", "alt", "i", 1, "float-right"]],
      template: function ChatBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_img_click_6_listener() {
            return ctx.closeMe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatBoxComponent_li_9_Template, 7, 4, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_input_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.sendMessage(_r1.value, _r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx.posOfDisplay.toString().concat("px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Chat - ", ctx.nameOfBot, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".align-bottom-right[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jaGF0LWJveC9jaGF0LWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduLWJvdHRvbS1yaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-box',
          templateUrl: './chat-box.component.html',
          styleUrls: ['./chat-box.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        posOfDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['positionOfDisplay']
        }],
        nameOfBot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['nameOfBot']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['id']
        }],
        pendingMessages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['pendingMessages']
        }],
        MainUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['MainURL']
        }],
        pendingMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['pendingMsg']
        }],
        isClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['isClosed']
        }],
        isSend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['isSend']
        }],
        numberOfMessagesUnsent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['numberOfMessagesUnsent']
        }],
        lastMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['lastMessage']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chat-log/chat-log.component.ts":
  /*!************************************************!*\
    !*** ./src/app/chat-log/chat-log.component.ts ***!
    \************************************************/

  /*! exports provided: ChatLogComponent */

  /***/
  function srcAppChatLogChatLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatLogComponent", function () {
      return ChatLogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChatLogComponent = /*#__PURE__*/function () {
      function ChatLogComponent() {
        _classCallCheck(this, ChatLogComponent);
      }

      _createClass(ChatLogComponent, [{
        key: "checkLastMessage",
        value: function checkLastMessage() {
          if (this.lastMessage.split(' ').length > 4) {
            this.lastMessage = this.lastMessage.split(' ').slice(0, 4).join(' ').concat('...');
          }

          return this.lastMessage;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatLogComponent;
    }();

    ChatLogComponent.ɵfac = function ChatLogComponent_Factory(t) {
      return new (t || ChatLogComponent)();
    };

    ChatLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatLogComponent,
      selectors: [["app-chat-log"]],
      inputs: {
        img: ["image", "img"],
        name: "name",
        lastMessage: "lastMessage"
      },
      decls: 9,
      vars: 2,
      consts: [[1, "card-body"], [1, "card-group", "border-bottom"], [1, "float-left"], ["src", "/assets/images/car1.jpeg", "height", "60px", "width", "60px", "alt", "p", 1, "p-2"], [1, "pl-2"], [1, "card-subtitle"], [1, "card-text"]],
      template: function ChatLogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.checkLastMessage());
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtbG9nL2NoYXQtbG9nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-log',
          templateUrl: './chat-log.component.html',
          styleUrls: ['./chat-log.component.css']
        }]
      }], function () {
        return [];
      }, {
        img: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['image']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['name']
        }],
        lastMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['lastMessage']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.pressed = -1;
        this.numberOfTimesButtonPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.numberOfTimesButtonPressed.emit(this.pressed);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buttonPressed",
        value: function buttonPressed() {
          this.pressed += 1;
          this.numberOfTimesButtonPressed.emit(this.pressed);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        numberOfPendingMessages: "numberOfPendingMessages"
      },
      outputs: {
        numberOfTimesButtonPressed: "pressedTimes"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "card-header"], [1, "btn", "btn-primary", "float-right", 3, "click"], [1, "bg-white", "text-primary", "border", "rounded-circle", "p-1"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ng-book 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.buttonPressed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Messages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberOfPendingMessages);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, {
        numberOfPendingMessages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['numberOfPendingMessages']
        }],
        numberOfTimesButtonPressed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['pressedTimes']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/compiler/src/util */
    "./node_modules/@angular/compiler/src/util.js");
    /* harmony import */


    var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_log_chat_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../chat-log/chat-log.component */
    "./src/app/chat-log/chat-log.component.ts");
    /* harmony import */


    var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../chat-box/chat-box.component */
    "./src/app/chat-box/chat-box.component.ts");

    function MainComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-log", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", user_r2.image)("name", user_r2.name)("lastMessage", ctx_r0.getLastMessage(user_r2.id));
      }
    }

    function MainComponent_li_4_app_chat_box_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-chat-box", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("lastMessage", function MainComponent_li_4_app_chat_box_1_Template_app_chat_box_lastMessage_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.getLastMess($event, user_r3.id);
        })("numberOfMessagesUnsent", function MainComponent_li_4_app_chat_box_1_Template_app_chat_box_numberOfMessagesUnsent_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.numberOfPendingMessages = $event;
        })("pendingMsg", function MainComponent_li_4_app_chat_box_1_Template_app_chat_box_pendingMsg_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.getPendingMsg($event);
        })("isClosed", function MainComponent_li_4_app_chat_box_1_Template_app_chat_box_isClosed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r11.visible[i_r4] = 0;
          return ctx_r11.isVisible();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r4 = ctx_r13.index;
        var user_r3 = ctx_r13.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("MainURL", ctx_r5.MainUrl)("positionOfDisplay", ctx_r5.posOfDisplay[i_r4])("nameOfBot", user_r3.name)("id", user_r3.id)("pendingMessages", ctx_r5.pendingMessages);
      }
    }

    function MainComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_li_4_app_chat_box_1_Template, 1, 5, "app-chat-box", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r4 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible[i_r4]);
      }
    }

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(http) {
        var _this3 = this;

        _classCallCheck(this, MainComponent);

        this.http = http;
        this.messageUrl = "".concat(this.MainUrl, "/messages");
        this.usersUrl = "".concat(this.MainUrl, "/users");
        this.numberOfPendingMessages = 0;
        this.pendingMessages = [];
        this.screenWidth = window.innerWidth;
        var options = {
          headers: {
            'Content-Type': 'text/plain'
          }
        };
        this.http.get(this.messageUrl, options).subscribe(function (res) {
          _this3.messageList = res;
        });
        this.http.get(this.usersUrl, options).subscribe(function (res) {
          _this3.usersList = res;
          _this3.posOfDisplay = Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__["newArray"])(_this3.usersList.length);
          _this3.visible = Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__["newArray"])(_this3.usersList.length);
          _this3.lastMessage = Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__["newArray"])(_this3.usersList.length);

          for (var i = 0; i < _this3.posOfDisplay.length; i++) {
            _this3.posOfDisplay[i] = -1;
            _this3.visible[i] = 0;
            _this3.lastMessage[i] = '';
          }
        });
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getWidth",
        value: function getWidth(val) {
          this.screenWidth = val.target.innerWidth;
          this.buttonPressed();

          for (var i = 0; i < this.visible.length; i--) {
            if (this.visible[i] == 1) {
              this.visible[i] = 0;
              return;
            }
          }

          this.isVisible();
        }
      }, {
        key: "getPendingMsg",
        value: function getPendingMsg(event) {
          this.pendingMessages.push(event);
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          var maxPos = 0;

          for (var i = this.posOfDisplay.length - 1; i > -1; i--) {
            if (this.visible[i]) {
              if (maxPos + 300 < this.screenWidth) {
                this.posOfDisplay[i] = maxPos;
                maxPos += 300;
              }
            }
          }
        }
      }, {
        key: "buttonPressed",
        value: function buttonPressed() {
          for (var i = 0; i < this.visible.length; i++) {
            if (this.visible[i] == 0) {
              this.visible[i] = 1;
              break;
            }
          }

          this.isVisible();
        }
      }, {
        key: "getLastMess",
        value: function getLastMess(event, userid) {
          this.lastMessage[userid] = event;
        }
      }, {
        key: "getLastMessage",
        value: function getLastMessage(userid) {
          if (this.lastMessage[userid] == '' || this.lastMessage[userid] == undefined) {
            for (var i = this.messageList.length - 1; i > -1; i--) {
              if (this.messageList[i].user_id == userid) {
                return this.messageList[i].message;
              }
            }
          }

          return this.lastMessage[userid];
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      inputs: {
        MainUrl: "MainUrl"
      },
      decls: 5,
      vars: 3,
      consts: [[3, "numberOfPendingMessages", "pressedTimes", "resize"], [1, "list-unstyled"], [4, "ngFor", "ngForOf"], [3, "image", "name", "lastMessage"], [3, "MainURL", "positionOfDisplay", "nameOfBot", "id", "pendingMessages", "lastMessage", "numberOfMessagesUnsent", "pendingMsg", "isClosed", 4, "ngIf"], [3, "MainURL", "positionOfDisplay", "nameOfBot", "id", "pendingMessages", "lastMessage", "numberOfMessagesUnsent", "pendingMsg", "isClosed"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pressedTimes", function MainComponent_Template_app_header_pressedTimes_0_listener() {
            return ctx.buttonPressed();
          })("resize", function MainComponent_Template_app_header_resize_0_listener($event) {
            return ctx.getWidth($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_li_2_Template, 2, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainComponent_li_4_Template, 2, 1, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("numberOfPendingMessages", ctx.numberOfPendingMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersList);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _chat_log_chat_log_component__WEBPACK_IMPORTED_MODULE_5__["ChatLogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_6__["ChatBoxComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, {
        MainUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['MainUrl']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/akrocks/Desktop/chatBot/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map