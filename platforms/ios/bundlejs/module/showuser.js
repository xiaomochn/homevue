// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 275);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bunessModule = weex.requireModule('businessLauncher');

var xbuinessModule = function () {
    function xbuinessModule() {
        _classCallCheck(this, xbuinessModule);
    }

    _createClass(xbuinessModule, null, [{
        key: 'getDeviceId',
        value: function getDeviceId(callback) {
            bunessModule.getDeviceId(callback);
        }
    }, {
        key: 'getString',
        value: function getString(k, callback) {
            bunessModule.getString(callback, k);
        }
    }, {
        key: 'setString',
        value: function setString(k, v) {
            bunessModule.setString(k, v);
        }

        // 获取对象

    }, {
        key: 'getObjectString',
        value: function getObjectString(k, callback) {
            bunessModule.getString(function (v) {
                callback(JSON.parse(v));
            }, k);
        }

        // 存对象

    }, {
        key: 'setObject',
        value: function setObject(k, v) {

            bunessModule.setString(k, JSON.stringify(v));
        }
    }, {
        key: 'getDeviceName',
        value: function getDeviceName(callback) {
            bunessModule.getDeviceName(callback);
        }
    }, {
        key: 'sendMessageToid',
        value: function sendMessageToid(uid, message) {
            bunessModule.sendMessageToid(uid, message);
        }
    }, {
        key: 'openURL',
        value: function openURL(path) {
            bunessModule.openURL(path, null, false, true);
        }
    }, {
        key: 'backPage',
        value: function backPage() {
            // 后退
            bunessModule.onBackClick();
        }
    }, {
        key: 'writeStr2Port',
        value: function writeStr2Port(commond) {
            // 后退
            bunessModule.WriteStr2Port(commond);
        }
    }]);

    return xbuinessModule;
}();

exports.default = xbuinessModule;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dialogModule = weex.requireModule('dialog');

var dialog = function () {
    function dialog() {
        _classCallCheck(this, dialog);
    }

    _createClass(dialog, null, [{
        key: 'showTwoBtnAlertDialog',
        value: function showTwoBtnAlertDialog(title, message, leftTxt, rightTxt, callback) {
            dialogModule.showTwoBtnAlertDialog(title, message, leftTxt, rightTxt, callback);
        }
    }]);

    return dialog;
}();

;

exports.default = dialog;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/qiao/File/work/homevue/homeweex/src/component/navigationBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7add8784"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _showuser = __webpack_require__(276);

var _showuser2 = _interopRequireDefault(_showuser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_showuser2.default.el = '#root';
new Vue(_showuser2.default);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(277)
)

/* script */
__vue_exports__ = __webpack_require__(278)

/* template */
var __vue_template__ = __webpack_require__(279)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/qiao/File/work/homevue/homeweex/src/module/showuser.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1cba4842"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = {
  "timertext": {
    "marginLeft": "30",
    "fontSize": "26",
    "color": "#0088fb",
    "fontWeight": "bold"
  },
  "panel": {
    "flexDirection": "row",
    "width": "600",
    "height": "100",
    "marginLeft": 10,
    "marginTop": 8,
    "marginRight": 10,
    "alignItems": "center",
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "#afddff",
    "background": "azure"
  },
  "navspace": {
    "height": "80",
    "width": "750"
  },
  "cell": {
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "6",
    "paddingBottom": "6"
  }
}

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dialog = __webpack_require__(10);

var _dialog2 = _interopRequireDefault(_dialog);

var _navigationBar = __webpack_require__(2);

var _navigationBar2 = _interopRequireDefault(_navigationBar);

var _xbuinessModule = __webpack_require__(1);

var _xbuinessModule2 = _interopRequireDefault(_xbuinessModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "showuser",
    components: { navigationBar: _navigationBar2.default },
    data: {
        // lists: [{"userNickname": "当前没有用户"}]
        lists: [],
        onrightButtonClick: {
            click: function click() {
                _xbuinessModule2.default.openURL('module/addUser');
                return true;
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        var businessLauncherModule = weex.requireModule('businessLauncher');
        businessLauncherModule.getUserList(function (data) {
            _this.lists = JSON.parse(data);
        });
    },

    methods: {
        deleteUser: function deleteUser(itemnum) {
            var _this2 = this;

            console.log("itemclick" + itemnum);
            _dialog2.default.showTwoBtnAlertDialog('删除该用户', '删除该用户的信息', '不删除', '删除', function (data) {
                if (data.res == 'right') {
                    var businessLauncherModule = weex.requireModule('businessLauncher');
                    businessLauncherModule.deleteUser(_this2.lists[itemnum].userId);
                    _this2.lists.splice(itemnum, 1);
                }
            });
        },
        toAddUser: function toAddUser() {
            _xbuinessModule2.default.openURL('module/addUser');
        },
        onAppear: function onAppear() {
            var _this3 = this;

            console.log("appear");
            var businessLauncherModule = weex.requireModule('businessLauncher');
            businessLauncherModule.getUserList(function (data) {
                var tempList = JSON.parse(data);
                if (_this3.lists.length != tempList.length) {
                    console.log("变了");
                    _this3.lists = tempList;
                }
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "viewappear": _vm.onAppear,
      "viewdisappear": _vm.onDisappear
    }
  }, [_c('list', [_c('header', {
    staticClass: ["navspace"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }), _vm._l((_vm.lists), function(v, k) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"],
      on: {
        "click": function($event) {
          _vm.deleteUser(k)
        }
      }
    }, [_c('text', {
      staticClass: ["timertext"]
    }, [_vm._v("昵称:")]), _c('text', {
      staticClass: ["timertext"]
    }, [_vm._v(_vm._s(v.userNickname))])])])
  }), _c('header', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "click": _vm.toAddUser
    }
  }, [_c('text', {
    staticClass: ["timertext"]
  }, [_vm._v("添加新用户或卡")])])], 2), _c('navigationBar', {
    staticStyle: {
      width: "750px",
      height: "80px",
      position: "absolute",
      top: "0",
      left: "0px"
    },
    attrs: {
      "title": "已注册用户",
      "righttext": "添加",
      "rightButtonClick": _vm.onrightButtonClick
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = {
  "navsize": {
    "top": 0,
    "left": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "height": "80",
    "width": "750"
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xbuinessModule = __webpack_require__(1);

var _xbuinessModule2 = _interopRequireDefault(_xbuinessModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'navigationBar',
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    methods: {
        onBackClick: function onBackClick() {
            if (!this.letftButtonClick.click()) {
                _xbuinessModule2.default.backPage();
            }
        },
        onRightClick: function onRightClick() {
            console.log(this.rightButtonClick);
            this.rightButtonClick.click();
        }
    },
    props: {
        imagesrc: { default: '../img/left_arrow.png' },
        title: { default: '页面' },
        righttext: '',
        letftButtonClick: {
            default: {
                click: function click() {
                    return false;
                }
            }
        },
        rightButtonClick: {
            default: {
                click: function click() {
                    return false;
                }
            }
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["navsize"]
  }, [_c('image', {
    staticStyle: {
      width: "60px",
      height: "60px"
    },
    attrs: {
      "src": _vm.imagesrc
    },
    on: {
      "click": _vm.onBackClick
    }
  }), _c('div', {
    staticStyle: {
      justifyContent: "center",
      alignItems: "center",
      width: "520px",
      height: "80px",
      flexDirection: "row",
      position: "relative",
      top: "0",
      left: "60px"
    }
  }, [_c('text', {
    staticStyle: {
      color: "#3142f5"
    }
  }, [_vm._v(_vm._s(_vm.title))])]), (this.righttext != '') ? _c('text', {
    staticStyle: {
      height: "60px",
      width: "100px",
      textAlign: "right",
      justifyContent: "center",
      alignItems: "center"
    },
    on: {
      "click": _vm.onRightClick
    }
  }, [_vm._v(_vm._s(_vm.righttext) + "\n    ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });