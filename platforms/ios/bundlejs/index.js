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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(26);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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
__vue_options__.__file = "/Users/qiao/File/work/homevue/homeweex/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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

/***/ 27:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "marginTop": "120"
  },
  "registerc": {
    "marginTop": "120"
  },
  "title": {
    "paddingTop": "40",
    "paddingBottom": "40",
    "fontSize": "48"
  },
  "logo": {
    "width": "360",
    "height": "156"
  },
  "desc": {
    "paddingTop": "20",
    "color": "#888888",
    "fontSize": "24"
  }
}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sha = __webpack_require__(6);

var _sha2 = _interopRequireDefault(_sha);

var _xbuinessModule = __webpack_require__(1);

var _xbuinessModule2 = _interopRequireDefault(_xbuinessModule);

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

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
exports.default = {
    data: {
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World',
        notregisted: false
    },
    mounted: function mounted() {
        var _this = this;

        _xbuinessModule2.default.getDeviceId(function (did) {
            stream.fetch({
                method: "GET",
                url: 'https://d.apicloud.com/mcm/api/device?filter={"where":{"did":"' + did + '"},"limit":1}',
                type: 'json',
                headers: _sha2.default.getttt()
            }, function (res) {
                console.log("11111111" + JSON.stringify(res.data));
                if (res.ok) {
                    if (res.data.length < 1) {
                        _this.notregisted = true;
                    } else {
                        _xbuinessModule2.default.setString("did", res.data[0].id);
                    }
                }
            });
        });
    },

    methods: {
        update: function update(e) {
            var businessLauncherModule = weex.requireModule('businessLauncher');
            console.log(businessLauncherModule);
            businessLauncherModule.openURL('module/showuser', null, false, true);
        },
        tohome: function tohome() {
            var businessLauncherModule = weex.requireModule('businessLauncher');
            console.log(businessLauncherModule);
            businessLauncherModule.openURL('module/home', null, false, true);
            // console.log('target:', 'tohome')
        },
        totest: function totest() {
            var businessLauncherModule = weex.requireModule('businessLauncher');
            console.log(businessLauncherModule);
            businessLauncherModule.openURL('test3', null, false, true);
        },
        callwxjs: function callwxjs() {
            console.log("111111111112");
            _xbuinessModule2.default.sendMessageToid('currentuser', 'getup');
        },
        register: function register() {
            var _this2 = this;

            _xbuinessModule2.default.getDeviceId(function (did) {
                _xbuinessModule2.default.getDeviceName(function (name) {
                    stream.fetch({
                        method: "POST",
                        url: 'https://d.apicloud.com/mcm/api/device',
                        type: 'json',
                        headers: _sha2.default.getttt(),
                        body: '{"did": "' + did + '","name":"' + name + '" }'
                    }, function (res) {
                        console.log("11111111" + JSON.stringify(res.data));
                        if (res.ok) {
                            _this2.noteMessage = false;
                            modal.toast({
                                message: "注册成功",
                                duration: 0.3
                            });
                            _xbuinessModule2.default.setString("did", res.data.id);
                        }
                    });
                });
            });
        }
    }
};

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logoUrl
    },
    on: {
      "click": _vm.tohome
    }
  }), _c('text', {
    staticClass: ["logo"],
    on: {
      "click": _vm.update
    }
  }, [_vm._v("点击注册微信用户")]), _c('text', {
    staticClass: ["title"],
    on: {
      "click": _vm.update
    }
  }, [_vm._v("查看已注册用户")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("下面 没注明作用的  都是测试按钮 莫管")]), _c('text', {
    on: {
      "click": _vm.totest
    }
  }, [_vm._v(" totest")]), (_vm.notregisted) ? _c('text', {
    staticClass: ["registerc"],
    on: {
      "click": _vm.register
    }
  }, [_vm._v(" register")]) : _vm._e(), _c('text', {
    staticClass: ["registerc"],
    on: {
      "click": _vm.callwxjs
    }
  }, [_vm._v(" callwxjs")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 6:
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

/***/ })

/******/ });