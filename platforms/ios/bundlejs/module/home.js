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
/******/ 	return __webpack_require__(__webpack_require__.s = 268);
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

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _home = __webpack_require__(269);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_home2.default.el = '#root';
new Vue(_home2.default);

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(270)
)

/* script */
__vue_exports__ = __webpack_require__(271)

/* template */
var __vue_template__ = __webpack_require__(274)
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
__vue_options__.__file = "/Users/qiao/File/work/homevue/homeweex/src/module/home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dd27cb4e"
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

/***/ 270:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "width": "750",
    "height": "200",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "marginLeft": "20",
    "marginRight": "20",
    "flexDirection": "row",
    "marginTop": "30"
  },
  "witetext": {
    "color": "#FFFFFF"
  },
  "smaltextsize": {
    "fontSize": "26"
  },
  "normaltextsize": {
    "fontSize": "30"
  },
  "img": {
    "width": "133",
    "height": "215"
  },
  "page": {
    "marginLeft": "16",
    "marginRight": "16"
  },
  "cell": {
    "paddingTop": "6",
    "paddingBottom": "6"
  },
  "item": {
    "borderRadius": "4",
    "width": "350",
    "height": "216",
    "backgroundColor": "#FFFFFF",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "sheader": {
    "position": "sticky",
    "paddingBottom": "6"
  },
  "indicator": {
    "color": "#888888",
    "height": "40",
    "width": "40",
    "marginRight": "30"
  },
  "navsize": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "flexDirection": "row",
    "alignItems": "center",
    "height": "80",
    "width": "750"
  },
  "fixedItem": {
    "position": "fixed",
    "width": "78",
    "height": "78",
    "backgroundColor": "#00cc99",
    "right": "32",
    "bottom": "32",
    "borderRadius": "39",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refres": {
    "flexDirection": "column",
    "alignItems": "center",
    "height": "100",
    "width": "750"
  },
  "bannerPhotoWrap": {
    "width": "449",
    "height": "305",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between"
  },
  "bannerPhoto": {
    "width": "137",
    "height": "137",
    "marginBottom": "6"
  }
}

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xbuinessModule = __webpack_require__(1);

var _xbuinessModule2 = _interopRequireDefault(_xbuinessModule);

var _navigationBar = __webpack_require__(2);

var _navigationBar2 = _interopRequireDefault(_navigationBar);

var _sha = __webpack_require__(6);

var _sha2 = _interopRequireDefault(_sha);

var _urls = __webpack_require__(272);

var _urls2 = _interopRequireDefault(_urls);

var _util = __webpack_require__(273);

var _util2 = _interopRequireDefault(_util);

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

// import navigationBar from '../component/navigationBar.vue'

var modal = weex.requireModule('modal');
var globalEvent = weex.requireModule('globalEvent');
var stream = weex.requireModule('stream');
exports.default = {
    name: "home",
    components: { navigationBar: _navigationBar2.default },
    data: {
        src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
        columnWidth: '300',
        refreshing: false,
        apiCloudid: '',
        deviceId: '', // 和推送用一个id
        statusnlock: '', //门是否锁定
        statusnallow: '', // m门是否反锁
        nstatusopen: '', // 门是是可以开
        menuClick: {
            click: function click() {
                _xbuinessModule2.default.openURL('module/showuser');
                return true;
            }
        },
        items: [{
            src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
            name: 'Thomas Carlyle',
            desc: 'Genius only means hard-working all one\'s life',
            behaviourName: 'Change width',
            behaviour: 'changeColumnWidth'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg',
            desc: 'The man who has made up his mind to win will never say "impossible "',
            behaviourName: 'Change gap',
            behaviour: 'changeColumnGap'
        }]

    },
    mounted: function mounted() {
        var _this = this;

        globalEvent.addEventListener("onReadPortEvent", function (params) {
            // 读到串口数据
            var cmd = params.commond;
            if (cmd == _urls2.default.data.statusView.nstatusallow) {
                // 门打开
            } else if (cmd == _urls2.default.data.statusView.nstatusnotallow) {
                // 门关闭
            } else if (cmd == _urls2.default.data.statusView.statusnallow) {
                // 门未被反锁
            } else if (cmd == _urls2.default.data.statusView.statusnlock) {
                // 门以锁
                _this.statusnlock = '门以锁';
            } else if (cmd == _urls2.default.data.statusView.statusnnotallow) {
                // 门反锁
            } else if (cmd == _urls2.default.data.statusView.statusnunlock) {}
            // 没没锁


            // if (this.shwoTimer) {
            //     // this.lists.splice(this.lists.length, 1, {userNickname: '读到数据' + params.commond})
            //     // let businessLauncherModule = weex.requireModule('businessLauncher')
            //     // businessLauncherModule.addUser(params.userId, params.userNickname, 0)
            //     // this.uploadUser(params);
            // }
        });
        globalEvent.addEventListener("ongetJpush", function (params) {// 拿到极光推送的数据
            // if (this.shwoTimer) {
            //     this.lists.splice(this.lists.length, 1, {userNickname: '读到数据' + params.commond})
            //     // let businessLauncherModule = weex.requireModule('businessLauncher')
            //     // businessLauncherModule.addUser(params.userId, params.userNickname, 0)
            //     // this.uploadUser(params);
            // }

        });
        this.register();
        _xbuinessModule2.default.getDeviceId(function (deviced) {
            _this.deviceId = deviced;
        });
        this.refreshStatus();
    },

    methods: {

        refreshStatus: function refreshStatus() {
            _xbuinessModule2.default.writeStr2Port('statusn:lock\r\n');
            _xbuinessModule2.default.writeStr2Port('statusn:allow\r\n');
        },

        loadmore: function loadmore() {
            console.log('receive loadmore event');
        },

        onrefresh: function onrefresh(event) {
            var _this2 = this;

            this.refreshing = true;
            setTimeout(function () {
                _this2.refreshing = false;
            }, 2000);
            this.register();
        },

        to12306: function to12306() {
            _xbuinessModule2.default.openURL('module/home_12306');
        },
        scroll2Nex: function scroll2Nex() {
            weex.requireModule('dom').scrollToElement(this.$refs.header);
        },

        toUser: function toUser() {
            console.log("aaaaa");
            _xbuinessModule2.default.openURL('module/showuser');
        },

        onDeviceClick: function onDeviceClick(index) {
            _xbuinessModule2.default.writeStr2Port('device' + index);
        },

        register: function register() {
            var _this3 = this;

            _xbuinessModule2.default.getString("apiCloudid", function (apiCloudid) {
                if (!apiCloudid.replace(/(^s*)|(s*$)/g, "").length == 0) {
                    _this3.apiCloudid = apiCloudid;
                    return;
                }
                _xbuinessModule2.default.getDeviceId(function (did) {
                    stream.fetch({
                        method: "GET",
                        url: 'https://d.apicloud.com/mcm/api/device?filter={"where":{"did":"' + did + '"},"limit":1}',
                        type: 'json',
                        headers: _sha2.default.getttt()
                    }, function (res) {
                        if (res.ok) {
                            console.log("111111re");
                            if (res.data.length < 1) {
                                console.log("111111reres.data.length < 1");
                                _xbuinessModule2.default.getDeviceName(function (name) {
                                    stream.fetch({
                                        method: "POST",
                                        url: 'https://d.apicloud.com/mcm/api/device',
                                        type: 'json',
                                        headers: _sha2.default.getttt(),
                                        body: '{"did": "' + did + '","name":"' + name + '" }'
                                    }, function (res1) {
                                        console.log("111111res1");
                                        if (res1.ok) {
                                            console.log("111111res1ok");
                                            _this3.registerZdevice(res1.data.id, '锁1', 'lock', '001');
                                            _this3.apiCloudid = res1.data.id;
                                            _xbuinessModule2.default.setString("apiCloudid", res1.data.id);
                                            modal.toast({
                                                message: "首次打开注册成功注册成功",
                                                duration: 0.3
                                            });
                                        }
                                    });
                                });
                            } else {
                                _this3.apiCloudid = res.data[0].id;
                                _xbuinessModule2.default.setString("apiCloudid", res.data[0].id);
                            }
                        }
                    });
                });
            });
        },
        registerZdevice: function registerZdevice(did, name, type, deviceid) {
            console.log("1111112");
            var parms = {
                "device(uz*R*id)": did,
                "name": name,
                "type": type,
                "deviceid": deviceid
            };
            _util2.default.post(_urls2.default.data.dvicesModeDb, parms, function (res) {
                console.log("111111" + res.data);
            });
        },
        getZdevices: function getZdevices(callback) {},
        addZdevices: function addZdevices(parms) {
            _xbuinessModule2.default.getString("zdeviceslist", function (listStr) {
                var devicess = JSON.parse(listStr);
                if (_util2.default.isEmpty(listStr)) {
                    listStr = [];
                }
                devicess[devicess.length - 1] = parms;
            });
        }
    }

};

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: {
        dvicesModeDb: "https://d.apicloud.com/mcm/api/dvicesmode",
        statusView: {
            'nstatusnotallow': 'nstatus:notallow', //电机状态
            'nstatusallow': 'nstatus:allow',
            'statusnlock': 'statusn:lock', //状态查询
            'statusnunlock': 'statusn:unlock',
            'statusnallow': 'statusn:allow', // 反锁
            'statusnnotallow': 'statusn:notallow'
        }
    }
};

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xbuinessModule = __webpack_require__(1);

var _xbuinessModule2 = _interopRequireDefault(_xbuinessModule);

var _sha = __webpack_require__(6);

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = weex.requireModule('stream');
exports.default = {
    /**
     * 是否为空:  空字符串   undefine
     */
    isEmpty: function isEmpty(str) {
        return str == undefined || str == '';
    },
    post: function post(url, parms, callback) {
        console.log("111111bg");
        stream.fetch({
            method: "POST",
            url: url,
            type: 'json',
            headers: _sha2.default.getttt(),
            body: this.obj2Str(parms)
        }, callback);
    },
    obj2Str: function obj2Str(obj) {
        return obj;
    },
    getDeviceId: function getDeviceId(callback) {
        _xbuinessModule2.default.getDeviceId(callback);
    }
};

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "palegreen"
    }
  }, [_c('waterfall', {
    ref: "waterfall",
    staticClass: ["page"],
    attrs: {
      "columnWidth": 340,
      "columnCount": _vm.auto,
      "columnGap": _vm.normal,
      "loadmoreoffset": "3000"
    },
    on: {
      "loadmore": _vm.loadmore
    }
  }, [_c('header', {
    staticStyle: {
      height: "150px"
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }), _c('header', {
    staticStyle: {
      height: "270px"
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["witetext", "normaltextsize"],
    staticStyle: {
      fontSize: "120px"
    }
  }, [_vm._v("🔐 🔓")]), _c('div', {
    staticStyle: {
      flexDirection: "column"
    }
  }, [_c('text', {
    staticClass: ["witetext", "normaltextsize"]
  }, [_vm._v("描述 1")]), _c('text', {
    staticClass: ["witetext", "normaltextsize"]
  }, [_vm._v("描述 2")])])]), _c('text', {
    staticClass: ["witetext", "normaltextsize"],
    staticStyle: {
      marginTop: "20px"
    }
  }, [_vm._v("上次开锁时间是23号17点13分")])]), _c('refresh', {
    staticClass: ["refres"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.pullingdown
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["witetext"]
  }, [_vm._v("刷新")])]), _vm._l((_vm.items), function(item, index) {
    return _c('cell', {
      key: item.src,
      ref: "index",
      refInFor: true,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["item"],
      on: {
        "click": function($event) {
          _vm.onDeviceClick(index)
        }
      }
    }, [_c('text', {
      staticClass: ["smaltextsize"],
      staticStyle: {
        width: "200px",
        paddingLeft: "16px"
      }
    }, [_vm._v("点击给第" + _vm._s(index) + "个设备发信息")]), _c('image', {
      staticClass: ["img"],
      staticStyle: {
        paddingLeft: "17px",
        paddingRight: "17px",
        paddingTop: "58px",
        paddingBottom: "58px"
      },
      attrs: {
        "src": item.src
      }
    })])])
  }), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["item"]
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "src": "../img/My.png"
    }
  }), _c('text', [_vm._v("点击添加设备")])])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "click": _vm.to12306
    }
  }, [_c('div', {
    staticClass: ["item"]
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "src": "../img/My.png"
    }
  }), _c('text', [_vm._v("写着玩的 12306查票")])]), _c('div')]), _c('div', {
    ref: "fixed",
    staticClass: ["fixedItem"],
    on: {
      "click": _vm.scroll2Nex
    }
  }, [_c('text', {
    staticClass: ["fixedText"]
  }, [_vm._v("bot")])])], 2), _c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["witetext"],
    staticStyle: {
      width: "640px"
    }
  }, [_vm._v("小莫的家 >")]), _c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "src": "../img/My.png"
    },
    on: {
      "click": _vm.toUser
    }
  })])], 1)
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