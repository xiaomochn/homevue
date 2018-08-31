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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! lhq 2016-09-20 */
var sha1m = function () {
    function sha1m() {
        _classCallCheck(this, sha1m);
    }

    _createClass(sha1m, null, [{
        key: "getttt",
        value: function getttt() {
            var now = Date.now();
            var appKey = this.hex_sha1("A6970328512280UZ" + "A411EB7A-E27D-E60F-EB23-F893EF978E06UZ" + now) + "." + now;
            return {
                "X-APICloud-AppId": "A6970328512280",
                "X-APICloud-AppKey": appKey,
                "Content-Type": 'application/json'
            };
        }
    }, {
        key: "hex_sha1",
        value: function hex_sha1(a) {
            return this.binb2hex(this.core_sha1(this.AlignSHA1(a)));
        }
    }, {
        key: "core_sha1",
        value: function core_sha1(a) {
            for (var b = a, c = Array(80), d = 1732584193, e = -271733879, f = -1732584194, g = 271733878, h = -1009589776, i = 0; i < b.length; i += 16) {
                for (var j = d, k = e, l = f, m = g, n = h, o = 0; o < 80; o++) {
                    o < 16 ? c[o] = b[i + o] : c[o] = this.rol(c[o - 3] ^ c[o - 8] ^ c[o - 14] ^ c[o - 16], 1);
                    var p = this.safe_add(this.safe_add(this.rol(d, 5), this.sha1_ft(o, e, f, g)), this.safe_add(this.safe_add(h, c[o]), this.sha1_kt(o)));
                    h = g, g = f, f = this.rol(e, 30), e = d, d = p;
                }
                d = this.safe_add(d, j), e = this.safe_add(e, k), f = this.safe_add(f, l), g = this.safe_add(g, m), h = this.safe_add(h, n);
            }
            return new Array(d, e, f, g, h);
        }
    }, {
        key: "sha1_ft",
        value: function sha1_ft(a, b, c, d) {
            return a < 20 ? b & c | ~b & d : a < 40 ? b ^ c ^ d : a < 60 ? b & c | b & d | c & d : b ^ c ^ d;
        }
    }, {
        key: "sha1_kt",
        value: function sha1_kt(a) {
            return a < 20 ? 1518500249 : a < 40 ? 1859775393 : a < 60 ? -1894007588 : -899497514;
        }
    }, {
        key: "safe_add",
        value: function safe_add(a, b) {
            var c = (65535 & a) + (65535 & b),
                d = (a >> 16) + (b >> 16) + (c >> 16);
            return d << 16 | 65535 & c;
        }
    }, {
        key: "rol",
        value: function rol(a, b) {
            return a << b | a >>> 32 - b;
        }
    }, {
        key: "AlignSHA1",
        value: function AlignSHA1(a) {
            for (var b = (a.length + 8 >> 6) + 1, c = new Array(16 * b), d = 0; d < 16 * b; d++) {
                c[d] = 0;
            }for (d = 0; d < a.length; d++) {
                c[d >> 2] |= a.charCodeAt(d) << 24 - 8 * (3 & d);
            }return c[d >> 2] |= 128 << 24 - 8 * (3 & d), c[16 * b - 1] = 8 * a.length, c;
        }
    }, {
        key: "binb2hex",
        value: function binb2hex(a) {
            for (var b = 0 ? "0123456789ABCDEF" : "0123456789abcdef", c = "", d = 0; d < 4 * a.length; d++) {
                c += b.charAt(a[d >> 2] >> 8 * (3 - d % 4) + 4 & 15) + b.charAt(a[d >> 2] >> 8 * (3 - d % 4) & 15);
            }return c;
        }
    }, {
        key: "calcDigest",
        value: function calcDigest() {
            var a = hex_sha1(document.SHAForm.SourceMessage.value);
            document.SHAForm.MessageDigest.value = a;
        }

        // static  var hexcase = 0,chrsz = 8;

    }]);

    return sha1m;
}();

exports.default = sha1m;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addUser = __webpack_require__(31);

var _addUser2 = _interopRequireDefault(_addUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addUser2.default.el = '#root';
new Vue(_addUser2.default);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(34)
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
__vue_options__.__file = "/Users/qiao/File/work/homevue/homeweex/src/module/addUser.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5c1681fc"
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
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "imgsize": {
    "marginTop": 100,
    "marginRight": 20,
    "marginBottom": 20,
    "marginLeft": 20,
    "width": 300,
    "height": 300
  },
  "margtop": {
    "marginTop": "30"
  },
  "timertext": {
    "marginLeft": 30,
    "fontSize": 26,
    "color": "#0088fb",
    "fontWeight": "bold"
  },
  "navsize": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "height": "80",
    "width": "750"
  },
  "navspace": {
    "height": "80",
    "width": "750"
  },
  "panel": {
    "width": "600",
    "height": "100",
    "marginLeft": 10,
    "marginTop": 8,
    "marginRight": 10,
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "#afddff",
    "background": "azure"
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dialog = __webpack_require__(10);

var _dialog2 = _interopRequireDefault(_dialog);

var _sha = __webpack_require__(6);

var _sha2 = _interopRequireDefault(_sha);

var _xbuinessModule = __webpack_require__(1);

var _xbuinessModule2 = _interopRequireDefault(_xbuinessModule);

var _navigationBar = __webpack_require__(2);

var _navigationBar2 = _interopRequireDefault(_navigationBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


var globalEvent = weex.requireModule('globalEvent');
var stream = weex.requireModule('stream');
exports.default = {
    name: "adduser",
    components: { navigationBar: _navigationBar2.default },
    data: {
        noteMessage: "点击图片添加用户",
        lists: [{ userId: '1', userNickname: '新添加的用户会显示在这里' }],
        timerCode: -1,
        timerCodet: -1,
        shwoTimer: false
    },

    mounted: function mounted() {
        var _this = this;

        globalEvent.addEventListener("onnewuser", function (params) {

            if (_this.shwoTimer) {
                _this.lists.splice(_this.lists.length, 1, params);
                var businessLauncherModule = weex.requireModule('businessLauncher');
                businessLauncherModule.addUser(params.userId, params.userNickname, 0);
                _this.uploadUser(params);
            }
        });
        globalEvent.addEventListener("onReadPortEvent", function (params) {
            if (_this.shwoTimer) {
                _this.lists.splice(_this.lists.length, 1, { userNickname: '读到数据' + params.commond });
                if (params.commond.match("cardnum:")) {
                    var cardid = params.commond.substring(8);
                    var businessLauncherModule = weex.requireModule('businessLauncher');
                    businessLauncherModule.addUser(cardid, "卡" + cardid, 0);
                    _this.uploadUser(params);
                }
            }
        });
    },

    methods: {
        uploadUser: function uploadUser(params) {
            var _this2 = this;

            console.log("b11111");
            _xbuinessModule2.default.getDeviceId(function (did) {
                console.log("1111111did" + did);
                stream.fetch({
                    method: "POST",
                    url: 'https://d.apicloud.com/mcm/api/homeuser',
                    type: 'json',
                    headers: _sha2.default.getttt(),
                    body: '{"uuid": "' + params.userId + '","name":"' + params.userNickname + '","deviceid":"' + did + '" }'
                }, function (res) {
                    if (res.ok) {
                        console.log("111111" + res.data.id);
                        _this2.noteMessage = false;
                    }
                });
            });
        },
        startTimer: function startTimer(run) {
            var _this3 = this;

            if (run) {
                this.timerCode = 30;
                this.shwoTimer = true;
                this.timerCodet = setInterval(function () {
                    _this3.timerCode = _this3.timerCode - 1;
                    if (_this3.timerCode <= 0) {
                        clearInterval(_this3.timerCodet);
                        _this3.shwoTimer = false;
                        _this3.noteMessage = "点击图片添加用户";
                    }
                }, 1000);
            } else {
                clearInterval(this.timerCodet);
                this.shwoTimer = false;
                this.timerCode = -1;
            }
        },
        adduser: function adduser() {
            if (this.noteMessage == "点击停止添加用户") {
                this.noteMessage = "点击图片添加用户";
                this.startTimer(false);
            } else {
                this.noteMessage = "点击停止添加用户";
                this.startTimer(true);
            }
        },
        itmeClick: function itmeClick(num) {
            var _this4 = this;

            console.log("itemclick" + num);
            _dialog2.default.showTwoBtnAlertDialog('删除该用户', '删除该用户的信息', '不删除', '删除', function (data) {
                if (data.res = 'right') {
                    var businessLauncherModule = weex.requireModule('businessLauncher');
                    businessLauncherModule.deleteUser(_this4.lists[num].userId);
                }
            });
        },
        onBackClick: function onBackClick() {
            _xbuinessModule2.default.backPage();
        }
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('image', {
    staticClass: ["imgsize"],
    attrs: {
      "src": "https://vuejs.org/images/logo.png"
    },
    on: {
      "click": _vm.adduser
    }
  }), _c('text', [_vm._v(_vm._s(_vm.noteMessage))]), (_vm.shwoTimer) ? _c('text', {
    staticClass: ["timertext"]
  }, [_vm._v(_vm._s(_vm.timerCode))]) : _vm._e(), _c('list', {
    staticClass: ["list"]
  }, [_c('header', {
    staticClass: ["navspace"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }), _vm._l((_vm.lists), function(k, num) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.itmeClick(num)
        }
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(" " + _vm._s(k.userNickname))])])])
  })], 2), _c('navigationBar', {
    staticStyle: {
      width: "750px",
      height: "80px",
      position: "absolute",
      top: "0",
      left: "0px"
    },
    attrs: {
      "title": "添加用户"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);