/*!
 * AMapJS v1.0.0
 * 
 * Copyright (c) 2018 Derek Li
 * Released under the MIT License - https://choosealicense.com/licenses/mit/
 * 
 * https://github.com/iDerekLi/amap-js
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("AMapJS", [], e) : "object" == typeof exports ? exports.AMapJS = e() : t.AMapJS = e();
}(window, function() {
    return function(t) {
        var e = {};
        function o(n) {
            if (e[n]) return e[n].exports;
            var r = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
        }
        return o.m = t, o.c = e, o.d = function(t, e, n) {
            o.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            });
        }, o.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function(e) {
                return t[e];
            }.bind(null, r));
            return n;
        }, o.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return o.d(e, "a", e), e;
        }, o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, o.p = "", o(o.s = 2);
    }([ function(t, e, o) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = function t() {
            n(this, t);
        };
        Object.assign(r.prototype, {
            load: function() {}
        });
        var i = r;
        e.default = i;
    }, function(t, e, o) {
        "use strict";
        function n(t) {
            if (void 0 === t) throw Error("Cannot convert undefined or null to object");
            function e(t, e) {
                for (var o in e) t[o] = e[o];
                return t;
            }
            for (var o = 1, n = arguments.length; o < n; o++) e(t, arguments[o]);
            return t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            assign: n
        };
        e.default = r;
    }, function(t, e, o) {
        "use strict";
        var n = u(o(0)), r = u(o(3)), i = u(o(4)), a = u(o(6));
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var c = {
            version: "1.0.0",
            Loader: n.default,
            load: r.default,
            AMapJSAPILoader: i.default,
            AMapUILoader: a.default
        };
        t.exports.default = t.exports = c;
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = r(o(0));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t) {
            var e = [];
            return t.forEach(function(t) {
                if (!(t instanceof n.default)) throw new TypeError("".concat(t, " is not an instance of Loader"));
                if ("function" != typeof t.load) throw new TypeError("".concat(t.load, " is not a function"));
                var o = t.load();
                e.push(o);
            }), Promise.all(e);
        }
        var a = i;
        e.default = a;
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o(0)), r = a(o(5)), i = a(o(1));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {}, n = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(o, t).enumerable;
                }))), n.forEach(function(e) {
                    s(t, e, o[e]);
                });
            }
            return t;
        }
        function s(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t;
        }
        function f(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function p(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function l(t, e, o) {
            return e && p(t.prototype, e), o && p(t, o), t;
        }
        function d(t, e) {
            return !e || "object" !== u(e) && "function" != typeof e ? v(t) : e;
        }
        function v(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function y(t) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
        }
        function h(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && b(t, e);
        }
        function b(t, e) {
            return (b = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t;
            })(t, e);
        }
        var m = Math.ceil(Math.random() * Math.pow(10, 16)), g = {
            protocol: "https:",
            path: "webapi.amap.com/maps",
            key: "",
            v: "1.4.12",
            callback: "onAMapJS".concat(m),
            params: null,
            crossOrigin: "anonymous",
            keepScriptTag: !1
        }, w = function(t) {
            function e(t) {
                var o;
                f(this, e), o = d(this, y(e).call(this, t));
                var n = i.default.assign({}, g, t);
                return o.protocol = n.protocol, o.path = n.path, o.params = c({
                    key: n.key,
                    v: n.v,
                    callback: n.callback
                }, n.params), o.crossOrigin = n.crossOrigin, o.keepScriptTag = n.keepScriptTag, 
                o;
            }
            return h(e, n.default), l(e, [ {
                key: "load",
                value: function() {
                    var t = this;
                    if (this.checkCorrectness()) return Promise.resolve(window.AMap);
                    var e = document.createElement("script");
                    e.charset = "utf-8", e.type = "text/javascript", e.async = !0, e.defer = !0, e.crossOrigin = this.crossOrigin, 
                    e.src = this.getResourcePath();
                    var o = this.params.callback;
                    return new Promise(function(n, r) {
                        window[o] = function() {
                            return n(window.AMap);
                        }, e.onload = function() {
                            t.keepScriptTag || t.removeScriptTag(e);
                        }, e.onerror = function(o) {
                            t.keepScriptTag || t.removeScriptTag(e), r(o);
                        }, document.head.appendChild(e);
                    });
                }
            }, {
                key: "checkCorrectness",
                value: function() {
                    if (!window.AMap) return !1;
                    for (var t = [ "v", "Pixel", "LngLat", "Size", "Bounds", "Map" ], e = 0; e < t.length; e++) {
                        if (!(t[e] in window.AMap)) return !1;
                    }
                    return this.versionCompare(window.AMap.v, this.params.v);
                }
            }, {
                key: "versionCompare",
                value: function(t, e) {
                    return t === e;
                }
            }, {
                key: "removeScriptTag",
                value: function(t) {
                    t.parentNode.removeChild(t);
                }
            }, {
                key: "toResourcePath",
                value: function() {
                    var t = this.protocol, e = this.path, o = (0, r.default)(this.params);
                    return "".concat(t, "//").concat(e, "?").concat(o);
                }
            }, {
                key: "getResourcePath",
                value: function() {
                    return this.toResourcePath();
                }
            }, {
                key: "setProtocol",
                value: function(t) {
                    return this.protocol = t, this;
                }
            }, {
                key: "setPath",
                value: function(t) {
                    return this.path = t, this;
                }
            }, {
                key: "setParams",
                value: function(t) {
                    this.params = t;
                }
            }, {
                key: "setKey",
                value: function(t) {
                    return this.params && (this.params.key = t), this;
                }
            }, {
                key: "setV",
                value: function(t) {
                    return this.params && (this.params.v = t), this;
                }
            }, {
                key: "setCrossOrigin",
                value: function(t) {
                    return this.crossOrigin = t, this;
                }
            } ]), e;
        }();
        e.default = w;
    }, function(t, e, o) {
        "use strict";
        function n(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "?" : "", o = [], n = function(e) {
                var n = t[e];
                if ([ "", void 0, null ].includes(n)) return "continue";
                n.constructor === Array ? n.forEach(function(t) {
                    o.push(encodeURIComponent(e) + "[]=" + encodeURIComponent(t));
                }) : o.push(encodeURIComponent(e) + "=" + encodeURIComponent(n));
            };
            for (var r in t) n(r);
            return o.length ? e + o.join("&") : "";
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = n;
        e.default = r;
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i(o(0)), r = i(o(1));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function u(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function c(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function s(t, e, o) {
            return e && c(t.prototype, e), o && c(t, o), t;
        }
        function f(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? p(t) : e;
        }
        function p(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function l(t) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
        }
        function d(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && v(t, e);
        }
        function v(t, e) {
            return (v = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t;
            })(t, e);
        }
        var y = {
            v: "1.0",
            protocol: "https:",
            path: "webapi.amap.com/ui/{v}/main-async.js",
            crossOrigin: "anonymous",
            AMapUIProtocol: void 0,
            initAMapUI: "initAMapUI",
            isAutoInitAMapUI: !1,
            keepScriptTag: !1
        }, h = function(t) {
            function e(t) {
                var o;
                u(this, e), o = f(this, l(e).call(this, t));
                var n = r.default.assign({}, y, t);
                return o.v = n.v, o.protocol = n.protocol, o.path = n.path, o.crossOrigin = n.crossOrigin, 
                o.AMapUIProtocol = n.AMapUIProtocol, o.initAMapUI = n.initAMapUI, o.isAutoInitAMapUI = n.isAutoInitAMapUI, 
                o.keepScriptTag = n.keepScriptTag, "string" == typeof o.AMapUIProtocol && o.setAMapUIProtocol(o.AMapUIProtocol), 
                o;
            }
            return d(e, n.default), s(e, [ {
                key: "setAMapUIProtocol",
                value: function(t) {
                    var e = "https:" === t ? "https:" : "http:";
                    return window.AMapUIProtocol = e, this;
                }
            }, {
                key: "load",
                value: function() {
                    var t = this;
                    if (this.checkCorrectness()) {
                        var e = function() {
                            return window.AMapUI;
                        };
                        return Promise.resolve(this.isAutoInitAMapUI ? e() : e);
                    }
                    var o = document.createElement("script");
                    return o.charset = "utf-8", o.type = "text/javascript", o.async = !0, o.defer = !0, 
                    o.crossOrigin = this.crossOrigin, o.src = this.getResourcePath(), new Promise(function(e, n) {
                        o.onload = function() {
                            t.keepScriptTag || t.removeScriptTag(o);
                            var n = function() {
                                return window[t.initAMapUI]() || window.AMapUI;
                            };
                            e(t.isAutoInitAMapUI ? n() : n);
                        }, o.onerror = function(e) {
                            t.keepScriptTag || t.removeScriptTag(o), n(e);
                        }, document.head.appendChild(o);
                    });
                }
            }, {
                key: "checkCorrectness",
                value: function() {
                    if (!window.AMapUI) return !1;
                    for (var t = [ "libConf", "uiMods", "docProtocol", "version" ], e = 0; e < t.length; e++) {
                        if (!(t[e] in window.AMapUI)) return !1;
                    }
                    return this.versionCompare(window.AMapUI.libConf.mainVersion, this.v);
                }
            }, {
                key: "versionCompare",
                value: function(t, e) {
                    return t === e;
                }
            }, {
                key: "removeScriptTag",
                value: function(t) {
                    t.parentNode.removeChild(t);
                }
            }, {
                key: "toResourcePath",
                value: function() {
                    var t = this.protocol, e = this.v, o = this.path.replace("{v}", e);
                    return "".concat(t, "//").concat(o);
                }
            }, {
                key: "getResourcePath",
                value: function() {
                    return this.toResourcePath();
                }
            } ]), e;
        }();
        e.default = h;
    } ]);
});