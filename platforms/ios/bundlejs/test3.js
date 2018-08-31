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
/******/ 	return __webpack_require__(__webpack_require__.s = 285);
/******/ })
/************************************************************************/
/******/ ({

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _test = __webpack_require__(286);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_test2.default.el = '#root';
new Vue(_test2.default);

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(287)
)

/* script */
__vue_exports__ = __webpack_require__(288)

/* template */
var __vue_template__ = __webpack_require__(289)
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
__vue_options__.__file = "/Users/qiao/File/work/homevue/homeweex/src/test3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10b4b158"
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

/***/ 287:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sha = __webpack_require__(6);

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = weex.requireModule('stream'); //
//
//
//
//
//
//

exports.default = {
    name: "test2",
    data: {},
    computed: {
        getzzsfa: function getzzsfa() {
            var appKey = _sha2.default.getttt();
            return appKey;
        }
    },
    methods: {
        testPost: function testPost() {
            var _this = this;

            stream.fetch({
                method: 'GET',
                url: "https://d.apicloud.com/mcm/api/comment_item/5a668f4702c0c03948a2dbed",
                type: 'json',
                headers: _sha2.default.getttt()
            }, function (ret) {
                if (!ret.ok) {
                    _this.postResult = "request failed";
                } else {
                    console.log('get:' + JSON.stringify(ret.data));
                }
            });
        }
    }
};

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    on: {
      "click": _vm.testPost
    }
  }, [_vm._v(_vm._s(_vm.getzzsfa))])])
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