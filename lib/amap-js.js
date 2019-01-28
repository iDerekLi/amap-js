/*!
 * AMapJS v1.0.0
 * 
 * Copyright (c) 2018 Derek Li
 * Released under the MIT License - https://choosealicense.com/licenses/mit/
 * 
 * https://github.com/iDerekLi/amap-js
 */
!function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("AMapJS", [], n) : "object" == typeof exports ? exports.AMapJS = n() : t.AMapJS = n();
}(window, function() {
    return function(t) {
        var n = {};
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
        }
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            });
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function(n) {
                return t[n];
            }.bind(null, o));
            return r;
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t["default"];
            } : function() {
                return t;
            };
            return e.d(n, "a", n), n;
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, e.p = "", e(e.s = 41);
    }([ function(t, n, e) {
        var r = e(32)("wks"), o = e(18), i = e(1).Symbol, c = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t));
        }).store = r;
    }, function(t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e);
    }, function(t, n, e) {
        var r = e(1), o = e(4), i = e(5), c = e(8), u = e(9), a = "prototype", s = function(t, n, e) {
            var f, p, l, d, h = t & s.F, v = t & s.G, y = t & s.S, m = t & s.P, g = t & s.B, _ = v ? r : y ? r[n] || (r[n] = {}) : (r[n] || {})[a], x = v ? o : o[n] || (o[n] = {}), w = x[a] || (x[a] = {});
            for (f in v && (e = n), e) l = ((p = !h && _ && _[f] !== undefined) ? _ : e)[f], 
            d = g && p ? u(l, r) : m && "function" == typeof l ? u(Function.call, l) : l, _ && c(_, f, l, t & s.U), 
            x[f] != l && i(x, f, d), m && w[f] != l && (w[f] = l);
        };
        r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, 
        t.exports = s;
    }, function(t, n, e) {
        var r = e(6);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    }, function(t, n) {
        var e = t.exports = {
            version: "2.6.3"
        };
        "number" == typeof __e && (__e = e);
    }, function(t, n, e) {
        var r = e(12), o = e(30);
        t.exports = e(7) ? function(t, n, e) {
            return r.f(t, n, o(1, e));
        } : function(t, n, e) {
            return t[n] = e, t;
        };
    }, function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    }, function(t, n, e) {
        t.exports = !e(13)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(t, n, e) {
        var r = e(1), o = e(5), i = e(14), c = e(18)("src"), u = "toString", a = Function[u], s = ("" + a).split(u);
        e(4).inspectSource = function(t) {
            return a.call(t);
        }, (t.exports = function(t, n, e, u) {
            var a = "function" == typeof e;
            a && (i(e, "name") || o(e, "name", n)), t[n] !== e && (a && (i(e, c) || o(e, c, t[n] ? "" + t[n] : s.join(String(n)))), 
            t === r ? t[n] = e : u ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e)));
        })(Function.prototype, u, function() {
            return "function" == typeof this && this[c] || a.call(this);
        });
    }, function(t, n, e) {
        var r = e(15);
        t.exports = function(t, n, e) {
            if (r(t), n === undefined) return t;
            switch (e) {
              case 1:
                return function(e) {
                    return t.call(n, e);
                };

              case 2:
                return function(e, r) {
                    return t.call(n, e, r);
                };

              case 3:
                return function(e, r, o) {
                    return t.call(n, e, r, o);
                };
            }
            return function() {
                return t.apply(n, arguments);
            };
        };
    }, function(t, n) {
        var e = {}.toString;
        t.exports = function(t) {
            return e.call(t).slice(8, -1);
        };
    }, function(t, n) {
        t.exports = {};
    }, function(t, n, e) {
        var r = e(3), o = e(43), i = e(44), c = Object.defineProperty;
        n.f = e(7) ? Object.defineProperty : function(t, n, e) {
            if (r(t), n = i(n, !0), r(e), o) try {
                return c(t, n, e);
            } catch (u) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
        };
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return !!t();
            } catch (n) {
                return !0;
            }
        };
    }, function(t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return e.call(t, n);
        };
    }, function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    }, function(t, n, e) {
        "use strict";
        n.__esModule = !0, n["default"] = void 0;
        var r = function() {};
        Object.assign(r.prototype, {
            load: function() {}
        });
        var o = r;
        n["default"] = o;
    }, function(t, n, e) {
        var r = e(6), o = e(1).document, i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {};
        };
    }, function(t, n) {
        var e = 0, r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(t === undefined ? "" : t, ")_", (++e + r).toString(36));
        };
    }, function(t, n, e) {
        var r = e(10);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t);
        };
    }, function(t, n, e) {
        var r = e(21);
        t.exports = function(t) {
            return Object(r(t));
        };
    }, function(t, n) {
        t.exports = function(t) {
            if (t == undefined) throw TypeError("Can't call method on  " + t);
            return t;
        };
    }, function(t, n, e) {
        var r = e(23), o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    }, function(t, n) {
        var e = Math.ceil, r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t);
        };
    }, function(t, n) {
        t.exports = !1;
    }, function(t, n, e) {
        var r = e(52), o = e(35);
        t.exports = Object.keys || function(t) {
            return r(t, o);
        };
    }, function(t, n, e) {
        var r = e(19), o = e(21);
        t.exports = function(t) {
            return r(o(t));
        };
    }, function(t, n, e) {
        var r = e(32)("keys"), o = e(18);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t));
        };
    }, function(t, n, e) {
        var r = e(10), o = e(0)("toStringTag"), i = "Arguments" == r(function() {
            return arguments;
        }()), c = function(t, n) {
            try {
                return t[n];
            } catch (e) {}
        };
        t.exports = function(t) {
            var n, e, u;
            return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (e = c(n = Object(t), o)) ? e : i ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u;
        };
    }, function(t, n, e) {
        var r = e(12).f, o = e(14), i = e(0)("toStringTag");
        t.exports = function(t, n, e) {
            t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: n
            });
        };
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            };
        };
    }, function(t, n, e) {
        var r = e(10);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t);
        };
    }, function(t, n, e) {
        var r = e(4), o = e(1), i = "__core-js_shared__", c = o[i] || (o[i] = {});
        (t.exports = function(t, n) {
            return c[t] || (c[t] = n !== undefined ? n : {});
        })("versions", []).push({
            version: r.version,
            mode: e(24) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    }, function(t, n, e) {
        var r = e(3), o = e(51), i = e(35), c = e(27)("IE_PROTO"), u = function() {}, a = "prototype", s = function() {
            var t, n = e(17)("iframe"), r = i.length, o = "<", c = ">";
            for (n.style.display = "none", e(36).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), 
            t.write(o + "script" + c + "document.F=Object" + o + "/script" + c), t.close(), 
            s = t.F; r--; ) delete s[a][i[r]];
            return s();
        };
        t.exports = Object.create || function(t, n) {
            var e;
            return null !== t ? (u[a] = r(t), e = new u(), u[a] = null, e[c] = t) : e = s(), 
            n === undefined ? e : o(e, n);
        };
    }, function(t, n, e) {
        var r = e(26), o = e(22), i = e(53);
        t.exports = function(t) {
            return function(n, e, c) {
                var u, a = r(n), s = o(a.length), f = i(c, s);
                if (t && e != e) {
                    for (;s > f; ) if ((u = a[f++]) != u) return !0;
                } else for (;s > f; f++) if ((t || f in a) && a[f] === e) return t || f || 0;
                return !t && -1;
            };
        };
    }, function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(t, n, e) {
        var r = e(1).document;
        t.exports = r && r.documentElement;
    }, function(t, n, e) {
        "use strict";
        var r = e(24), o = e(2), i = e(8), c = e(5), u = e(11), a = e(62), s = e(29), f = e(63), p = e(0)("iterator"), l = !([].keys && "next" in [].keys()), d = "@@iterator", h = "keys", v = "values", y = function() {
            return this;
        };
        t.exports = function(t, n, e, m, g, _, x) {
            a(e, n, m);
            var w, S, b, M = function(t) {
                if (!l && t in P) return P[t];
                switch (t) {
                  case h:
                  case v:
                    return function() {
                        return new e(this, t);
                    };
                }
                return function() {
                    return new e(this, t);
                };
            }, A = n + " Iterator", O = g == v, j = !1, P = t.prototype, T = P[p] || P[d] || g && P[g], I = T || M(g), k = g ? O ? M("entries") : I : undefined, L = "Array" == n && P.entries || T;
            if (L && (b = f(L.call(new t()))) !== Object.prototype && b.next && (s(b, A, !0), 
            r || "function" == typeof b[p] || c(b, p, y)), O && T && T.name !== v && (j = !0, 
            I = function() {
                return T.call(this);
            }), r && !x || !l && !j && P[p] || c(P, p, I), u[n] = I, u[A] = y, g) if (w = {
                values: O ? I : M(v),
                keys: _ ? I : M(h),
                entries: k
            }, x) for (S in w) S in P || i(P, S, w[S]); else o(o.P + o.F * (l || j), n, w);
            return w;
        };
    }, function(t, n, e) {
        var r = e(0)("unscopables"), o = Array.prototype;
        o[r] == undefined && e(5)(o, r, {}), t.exports = function(t) {
            o[r][t] = !0;
        };
    }, function(t, n, e) {
        var r, o, i, c = e(9), u = e(74), a = e(36), s = e(17), f = e(1), p = f.process, l = f.setImmediate, d = f.clearImmediate, h = f.MessageChannel, v = f.Dispatch, y = 0, m = {}, g = "onreadystatechange", _ = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var n = m[t];
                delete m[t], n();
            }
        }, x = function(t) {
            _.call(t.data);
        };
        l && d || (l = function(t) {
            for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
            return m[++y] = function() {
                u("function" == typeof t ? t : Function(t), n);
            }, r(y), y;
        }, d = function(t) {
            delete m[t];
        }, "process" == e(10)(p) ? r = function(t) {
            p.nextTick(c(_, t, 1));
        } : v && v.now ? r = function(t) {
            v.now(c(_, t, 1));
        } : h ? (i = (o = new h()).port2, o.port1.onmessage = x, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
            f.postMessage(t + "", "*");
        }, f.addEventListener("message", x, !1)) : r = g in s("script") ? function(t) {
            a.appendChild(s("script"))[g] = function() {
                a.removeChild(this), _.call(t);
            };
        } : function(t) {
            setTimeout(c(_, t, 1), 0);
        }), t.exports = {
            set: l,
            clear: d
        };
    }, function(t, n, e) {
        "use strict";
        var r = e(15);
        function o(t) {
            var n, e;
            this.promise = new t(function(t, r) {
                if (n !== undefined || e !== undefined) throw TypeError("Bad Promise constructor");
                n = t, e = r;
            }), this.resolve = r(n), this.reject = r(e);
        }
        t.exports.f = function(t) {
            return new o(t);
        };
    }, function(t, n, e) {
        e(42), e(49), e(50), e(54), e(58), e(82), t.exports = e(83);
    }, function(t, n, e) {
        "use strict";
        var r = e(2), o = e(45)(0), i = e(48)([].forEach, !0);
        r(r.P + r.F * !i, "Array", {
            forEach: function(t) {
                return o(this, t, arguments[1]);
            }
        });
    }, function(t, n, e) {
        t.exports = !e(7) && !e(13)(function() {
            return 7 != Object.defineProperty(e(17)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(t, n, e) {
        var r = e(6);
        t.exports = function(t, n) {
            if (!r(t)) return t;
            var e, o;
            if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
            if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(t, n, e) {
        var r = e(9), o = e(19), i = e(20), c = e(22), u = e(46);
        t.exports = function(t, n) {
            var e = 1 == t, a = 2 == t, s = 3 == t, f = 4 == t, p = 6 == t, l = 5 == t || p, d = n || u;
            return function(n, u, h) {
                for (var v, y, m = i(n), g = o(m), _ = r(u, h, 3), x = c(g.length), w = 0, S = e ? d(n, x) : a ? d(n, 0) : undefined; x > w; w++) if ((l || w in g) && (y = _(v = g[w], w, m), 
                t)) if (e) S[w] = y; else if (y) switch (t) {
                  case 3:
                    return !0;

                  case 5:
                    return v;

                  case 6:
                    return w;

                  case 2:
                    S.push(v);
                } else if (f) return !1;
                return p ? -1 : s || f ? f : S;
            };
        };
    }, function(t, n, e) {
        var r = e(47);
        t.exports = function(t, n) {
            return new (r(t))(n);
        };
    }, function(t, n, e) {
        var r = e(6), o = e(31), i = e(0)("species");
        t.exports = function(t) {
            var n;
            return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) || (n = undefined), 
            r(n) && null === (n = n[i]) && (n = undefined)), n === undefined ? Array : n;
        };
    }, function(t, n, e) {
        "use strict";
        var r = e(13);
        t.exports = function(t, n) {
            return !!t && r(function() {
                n ? t.call(null, function() {}, 1) : t.call(null);
            });
        };
    }, function(t, n, e) {
        var r = e(2);
        r(r.S, "Array", {
            isArray: e(31)
        });
    }, function(t, n, e) {
        var r = e(2);
        r(r.S, "Object", {
            create: e(33)
        });
    }, function(t, n, e) {
        var r = e(12), o = e(3), i = e(25);
        t.exports = e(7) ? Object.defineProperties : function(t, n) {
            o(t);
            for (var e, c = i(n), u = c.length, a = 0; u > a; ) r.f(t, e = c[a++], n[e]);
            return t;
        };
    }, function(t, n, e) {
        var r = e(14), o = e(26), i = e(34)(!1), c = e(27)("IE_PROTO");
        t.exports = function(t, n) {
            var e, u = o(t), a = 0, s = [];
            for (e in u) e != c && r(u, e) && s.push(e);
            for (;n.length > a; ) r(u, e = n[a++]) && (~i(s, e) || s.push(e));
            return s;
        };
    }, function(t, n, e) {
        var r = e(23), o = Math.max, i = Math.min;
        t.exports = function(t, n) {
            return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
        };
    }, function(t, n, e) {
        var r = e(2);
        r(r.S + r.F, "Object", {
            assign: e(55)
        });
    }, function(t, n, e) {
        "use strict";
        var r = e(25), o = e(56), i = e(57), c = e(20), u = e(19), a = Object.assign;
        t.exports = !a || e(13)(function() {
            var t = {}, n = {}, e = Symbol(), r = "abcdefghijklmnopqrst";
            return t[e] = 7, r.split("").forEach(function(t) {
                n[t] = t;
            }), 7 != a({}, t)[e] || Object.keys(a({}, n)).join("") != r;
        }) ? function(t, n) {
            for (var e = c(t), a = arguments.length, s = 1, f = o.f, p = i.f; a > s; ) for (var l, d = u(arguments[s++]), h = f ? r(d).concat(f(d)) : r(d), v = h.length, y = 0; v > y; ) p.call(d, l = h[y++]) && (e[l] = d[l]);
            return e;
        } : a;
    }, function(t, n) {
        n.f = Object.getOwnPropertySymbols;
    }, function(t, n) {
        n.f = {}.propertyIsEnumerable;
    }, function(t, n, e) {
        e(59), e(60), e(64), e(67), t.exports = e(4).Promise;
    }, function(t, n, e) {
        "use strict";
        var r = e(28), o = {};
        o[e(0)("toStringTag")] = "z", o + "" != "[object z]" && e(8)(Object.prototype, "toString", function() {
            return "[object " + r(this) + "]";
        }, !0);
    }, function(t, n, e) {
        "use strict";
        var r = e(61)(!0);
        e(37)(String, "String", function(t) {
            this._t = String(t), this._i = 0;
        }, function() {
            var t, n = this._t, e = this._i;
            return e >= n.length ? {
                value: undefined,
                done: !0
            } : (t = r(n, e), this._i += t.length, {
                value: t,
                done: !1
            });
        });
    }, function(t, n, e) {
        var r = e(23), o = e(21);
        t.exports = function(t) {
            return function(n, e) {
                var i, c, u = String(o(n)), a = r(e), s = u.length;
                return a < 0 || a >= s ? t ? "" : undefined : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536;
            };
        };
    }, function(t, n, e) {
        "use strict";
        var r = e(33), o = e(30), i = e(29), c = {};
        e(5)(c, e(0)("iterator"), function() {
            return this;
        }), t.exports = function(t, n, e) {
            t.prototype = r(c, {
                next: o(1, e)
            }), i(t, n + " Iterator");
        };
    }, function(t, n, e) {
        var r = e(14), o = e(20), i = e(27)("IE_PROTO"), c = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null;
        };
    }, function(t, n, e) {
        for (var r = e(65), o = e(25), i = e(8), c = e(1), u = e(5), a = e(11), s = e(0), f = s("iterator"), p = s("toStringTag"), l = a.Array, d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, h = o(d), v = 0; v < h.length; v++) {
            var y, m = h[v], g = d[m], _ = c[m], x = _ && _.prototype;
            if (x && (x[f] || u(x, f, l), x[p] || u(x, p, m), a[m] = l, g)) for (y in r) x[y] || i(x, y, r[y], !0);
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(38), o = e(66), i = e(11), c = e(26);
        t.exports = e(37)(Array, "Array", function(t, n) {
            this._t = c(t), this._i = 0, this._k = n;
        }, function() {
            var t = this._t, n = this._k, e = this._i++;
            return !t || e >= t.length ? (this._t = undefined, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [ e, t[e] ]);
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            };
        };
    }, function(t, n, e) {
        "use strict";
        var r, o, i, c, u = e(24), a = e(1), s = e(9), f = e(28), p = e(2), l = e(6), d = e(15), h = e(68), v = e(69), y = e(73), m = e(39).set, g = e(75)(), _ = e(40), x = e(76), w = e(77), S = e(78), b = "Promise", M = a.TypeError, A = a.process, O = A && A.versions, j = O && O.v8 || "", P = a[b], T = "process" == f(A), I = function() {}, k = o = _.f, L = !!function() {
            try {
                var t = P.resolve(1), n = (t.constructor = {})[e(0)("species")] = function(t) {
                    t(I, I);
                };
                return (T || "function" == typeof PromiseRejectionEvent) && t.then(I) instanceof n && 0 !== j.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
            } catch (r) {}
        }(), U = function(t) {
            var n;
            return !(!l(t) || "function" != typeof (n = t.then)) && n;
        }, C = function(t, n) {
            if (!t._n) {
                t._n = !0;
                var e = t._c;
                g(function() {
                    for (var r = t._v, o = 1 == t._s, i = 0, c = function(n) {
                        var e, i, c, u = o ? n.ok : n.fail, a = n.resolve, s = n.reject, f = n.domain;
                        try {
                            u ? (o || (2 == t._h && F(t), t._h = 1), !0 === u ? e = r : (f && f.enter(), e = u(r), 
                            f && (f.exit(), c = !0)), e === n.promise ? s(M("Promise-chain cycle")) : (i = U(e)) ? i.call(e, a, s) : a(e)) : s(r);
                        } catch (p) {
                            f && !c && f.exit(), s(p);
                        }
                    }; e.length > i; ) c(e[i++]);
                    t._c = [], t._n = !1, n && !t._h && E(t);
                });
            }
        }, E = function(t) {
            m.call(a, function() {
                var n, e, r, o = t._v, i = R(t);
                if (i && (n = x(function() {
                    T ? A.emit("unhandledRejection", o, t) : (e = a.onunhandledrejection) ? e({
                        promise: t,
                        reason: o
                    }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o);
                }), t._h = T || R(t) ? 2 : 1), t._a = undefined, i && n.e) throw n.v;
            });
        }, R = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length;
        }, F = function(t) {
            m.call(a, function() {
                var n;
                T ? A.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n({
                    promise: t,
                    reason: t._v
                });
            });
        }, N = function(t) {
            var n = this;
            n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), 
            C(n, !0));
        }, q = function(t) {
            var n, e = this;
            if (!e._d) {
                e._d = !0, e = e._w || e;
                try {
                    if (e === t) throw M("Promise can't be resolved itself");
                    (n = U(t)) ? g(function() {
                        var r = {
                            _w: e,
                            _d: !1
                        };
                        try {
                            n.call(t, s(q, r, 1), s(N, r, 1));
                        } catch (o) {
                            N.call(r, o);
                        }
                    }) : (e._v = t, e._s = 1, C(e, !1));
                } catch (r) {
                    N.call({
                        _w: e,
                        _d: !1
                    }, r);
                }
            }
        };
        L || (P = function(t) {
            h(this, P, b, "_h"), d(t), r.call(this);
            try {
                t(s(q, this, 1), s(N, this, 1));
            } catch (n) {
                N.call(this, n);
            }
        }, (r = function(t) {
            this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, 
            this._h = 0, this._n = !1;
        }).prototype = e(79)(P.prototype, {
            then: function(t, n) {
                var e = k(y(this, P));
                return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, 
                e.domain = T ? A.domain : undefined, this._c.push(e), this._a && this._a.push(e), 
                this._s && C(this, !1), e.promise;
            },
            "catch": function(t) {
                return this.then(undefined, t);
            }
        }), i = function() {
            var t = new r();
            this.promise = t, this.resolve = s(q, t, 1), this.reject = s(N, t, 1);
        }, _.f = k = function(t) {
            return t === P || t === c ? new i(t) : o(t);
        }), p(p.G + p.W + p.F * !L, {
            Promise: P
        }), e(29)(P, b), e(80)(b), c = e(4)[b], p(p.S + p.F * !L, b, {
            reject: function(t) {
                var n = k(this);
                return (0, n.reject)(t), n.promise;
            }
        }), p(p.S + p.F * (u || !L), b, {
            resolve: function(t) {
                return S(u && this === c ? P : this, t);
            }
        }), p(p.S + p.F * !(L && e(81)(function(t) {
            P.all(t)["catch"](I);
        })), b, {
            all: function(t) {
                var n = this, e = k(n), r = e.resolve, o = e.reject, i = x(function() {
                    var e = [], i = 0, c = 1;
                    v(t, !1, function(t) {
                        var u = i++, a = !1;
                        e.push(undefined), c++, n.resolve(t).then(function(t) {
                            a || (a = !0, e[u] = t, --c || r(e));
                        }, o);
                    }), --c || r(e);
                });
                return i.e && o(i.v), e.promise;
            },
            race: function(t) {
                var n = this, e = k(n), r = e.reject, o = x(function() {
                    v(t, !1, function(t) {
                        n.resolve(t).then(e.resolve, r);
                    });
                });
                return o.e && r(o.v), e.promise;
            }
        });
    }, function(t, n) {
        t.exports = function(t, n, e, r) {
            if (!(t instanceof n) || r !== undefined && r in t) throw TypeError(e + ": incorrect invocation!");
            return t;
        };
    }, function(t, n, e) {
        var r = e(9), o = e(70), i = e(71), c = e(3), u = e(22), a = e(72), s = {}, f = {};
        (n = t.exports = function(t, n, e, p, l) {
            var d, h, v, y, m = l ? function() {
                return t;
            } : a(t), g = r(e, p, n ? 2 : 1), _ = 0;
            if ("function" != typeof m) throw TypeError(t + " is not iterable!");
            if (i(m)) {
                for (d = u(t.length); d > _; _++) if ((y = n ? g(c(h = t[_])[0], h[1]) : g(t[_])) === s || y === f) return y;
            } else for (v = m.call(t); !(h = v.next()).done; ) if ((y = o(v, g, h.value, n)) === s || y === f) return y;
        }).BREAK = s, n.RETURN = f;
    }, function(t, n, e) {
        var r = e(3);
        t.exports = function(t, n, e, o) {
            try {
                return o ? n(r(e)[0], e[1]) : n(e);
            } catch (c) {
                var i = t["return"];
                throw i !== undefined && r(i.call(t)), c;
            }
        };
    }, function(t, n, e) {
        var r = e(11), o = e(0)("iterator"), i = Array.prototype;
        t.exports = function(t) {
            return t !== undefined && (r.Array === t || i[o] === t);
        };
    }, function(t, n, e) {
        var r = e(28), o = e(0)("iterator"), i = e(11);
        t.exports = e(4).getIteratorMethod = function(t) {
            if (t != undefined) return t[o] || t["@@iterator"] || i[r(t)];
        };
    }, function(t, n, e) {
        var r = e(3), o = e(15), i = e(0)("species");
        t.exports = function(t, n) {
            var e, c = r(t).constructor;
            return c === undefined || (e = r(c)[i]) == undefined ? n : o(e);
        };
    }, function(t, n) {
        t.exports = function(t, n, e) {
            var r = e === undefined;
            switch (n.length) {
              case 0:
                return r ? t() : t.call(e);

              case 1:
                return r ? t(n[0]) : t.call(e, n[0]);

              case 2:
                return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);

              case 3:
                return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);

              case 4:
                return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3]);
            }
            return t.apply(e, n);
        };
    }, function(t, n, e) {
        var r = e(1), o = e(39).set, i = r.MutationObserver || r.WebKitMutationObserver, c = r.process, u = r.Promise, a = "process" == e(10)(c);
        t.exports = function() {
            var t, n, e, s = function() {
                var r, o;
                for (a && (r = c.domain) && r.exit(); t; ) {
                    o = t.fn, t = t.next;
                    try {
                        o();
                    } catch (i) {
                        throw t ? e() : n = undefined, i;
                    }
                }
                n = undefined, r && r.enter();
            };
            if (a) e = function() {
                c.nextTick(s);
            }; else if (!i || r.navigator && r.navigator.standalone) if (u && u.resolve) {
                var f = u.resolve(undefined);
                e = function() {
                    f.then(s);
                };
            } else e = function() {
                o.call(r, s);
            }; else {
                var p = !0, l = document.createTextNode("");
                new i(s).observe(l, {
                    characterData: !0
                }), e = function() {
                    l.data = p = !p;
                };
            }
            return function(r) {
                var o = {
                    fn: r,
                    next: undefined
                };
                n && (n.next = o), t || (t = o, e()), n = o;
            };
        };
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                };
            } catch (n) {
                return {
                    e: !0,
                    v: n
                };
            }
        };
    }, function(t, n, e) {
        var r = e(1).navigator;
        t.exports = r && r.userAgent || "";
    }, function(t, n, e) {
        var r = e(3), o = e(6), i = e(40);
        t.exports = function(t, n) {
            if (r(t), o(n) && n.constructor === t) return n;
            var e = i.f(t);
            return (0, e.resolve)(n), e.promise;
        };
    }, function(t, n, e) {
        var r = e(8);
        t.exports = function(t, n, e) {
            for (var o in n) r(t, o, n[o], e);
            return t;
        };
    }, function(t, n, e) {
        "use strict";
        var r = e(1), o = e(12), i = e(7), c = e(0)("species");
        t.exports = function(t) {
            var n = r[t];
            i && n && !n[c] && o.f(n, c, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    }, function(t, n, e) {
        var r = e(0)("iterator"), o = !1;
        try {
            var i = [ 7 ][r]();
            i["return"] = function() {
                o = !0;
            }, Array.from(i, function() {
                throw 2;
            });
        } catch (c) {}
        t.exports = function(t, n) {
            if (!n && !o) return !1;
            var e = !1;
            try {
                var i = [ 7 ], u = i[r]();
                u.next = function() {
                    return {
                        done: e = !0
                    };
                }, i[r] = function() {
                    return u;
                }, t(i);
            } catch (c) {}
            return e;
        };
    }, function(t, n, e) {
        "use strict";
        var r = e(2), o = e(34)(!0);
        r(r.P, "Array", {
            includes: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : undefined);
            }
        }), e(38)("includes");
    }, function(t, n, e) {
        "use strict";
        var r = u(e(16)), o = u(e(84)), i = u(e(85)), c = u(e(87));
        function u(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        var a = {
            version: "1.0.0",
            Loader: r["default"],
            load: o["default"],
            AMapJSAPILoader: i["default"],
            AMapUILoader: c["default"]
        };
        t.exports["default"] = t.exports = a;
    }, function(t, n, e) {
        "use strict";
        n.__esModule = !0, n["default"] = void 0;
        var r = o(e(16));
        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        function i(t, n, e, o) {
            var i = [];
            (Array.isArray(t) ? t : [ t ]).forEach(function(t) {
                if (!(t instanceof r["default"])) throw new TypeError(t + " is not an instance of Loader");
                if ("function" != typeof t.load) throw new TypeError(t.load + " is not a function");
                var n = t.load();
                i.push(n);
            });
            var c = Promise.all(i), u = {
                then: n,
                "catch": e,
                "finally": o
            }, a = {
                then: function(t) {
                    u.then.apply(u, t);
                },
                "catch": function(t) {
                    u["catch"](t);
                },
                "finally": function() {
                    u["finally"]();
                }
            }, s = c;
            for (var f in u) "function" == typeof u[f] && (s = s[f](a[f]));
            return c;
        }
        var c = i;
        n["default"] = c;
    }, function(t, n, e) {
        "use strict";
        n.__esModule = !0, n["default"] = void 0;
        var r = i(e(16)), o = i(e(86));
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        function c() {
            return (c = Object.assign || function(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }
                return t;
            }).apply(this, arguments);
        }
        function u(t, n) {
            t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
        }
        var a = {
            protocol: "https:",
            path: "webapi.amap.com/maps",
            key: "",
            v: "1.4.12",
            callback: "onAMapJS" + Math.ceil(Math.random() * Math.pow(10, 16)),
            params: null,
            crossOrigin: "anonymous",
            keepScriptTag: !1
        }, s = function(t) {
            function n(n) {
                var e;
                e = t.call(this, n) || this;
                var r = Object.assign({}, a, n);
                return e.protocol = r.protocol, e.path = r.path, e.params = c({
                    key: r.key,
                    v: r.v,
                    callback: r.callback
                }, r.params), e.crossOrigin = r.crossOrigin, e.keepScriptTag = r.keepScriptTag, 
                e;
            }
            u(n, t);
            var e = n.prototype;
            return e.load = function() {
                var t = this;
                if (this.checkCorrectness()) return Promise.resolve(window.AMap);
                var n = document.createElement("script");
                n.charset = "utf-8", n.type = "text/javascript", n.async = !0, n.defer = !0, n.crossOrigin = this.crossOrigin, 
                n.src = this.getRequestURL();
                var e = this.params.callback;
                return new Promise(function(r, o) {
                    window[e] = function() {
                        return r(window.AMap);
                    }, "undefined" != typeof n.onload ? n.onload = function() {
                        t.keepScriptTag || t.removeScriptTag(n);
                    } : n.onreadystatechange = function() {
                        "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, 
                        t.keepScriptTag || t.removeScriptTag(n));
                    }, n.onerror = function(e) {
                        t.keepScriptTag || t.removeScriptTag(n), o(e);
                    }, document.getElementsByTagName("head")[0].appendChild(n);
                });
            }, e.checkCorrectness = function() {
                if (!window.AMap) return !1;
                for (var t = [ "v", "Pixel", "LngLat", "Size", "Bounds", "Map" ], n = 0; n < t.length; n++) {
                    if (!(t[n] in window.AMap)) return !1;
                }
                return this.versionCompare(window.AMap.v, this.params.v);
            }, e.versionCompare = function(t, n) {
                return t === n;
            }, e.removeScriptTag = function(t) {
                t.parentNode.removeChild(t);
            }, e.toRequestURL = function() {
                return this.protocol + "//" + this.path + "?" + (0, o["default"])(this.params);
            }, e.getRequestURL = function() {
                return this.toRequestURL();
            }, e.setProtocol = function(t) {
                return this.protocol = t, this;
            }, e.setPath = function(t) {
                return this.path = t, this;
            }, e.setParams = function(t) {
                this.params = t;
            }, e.setKey = function(t) {
                return this.params && (this.params.key = t), this;
            }, e.setV = function(t) {
                return this.params && (this.params.v = t), this;
            }, e.setCrossOrigin = function(t) {
                return this.crossOrigin = t, this;
            }, n;
        }(r["default"]);
        n["default"] = s;
    }, function(t, n, e) {
        "use strict";
        function r(t, n) {
            void 0 === n && (n = !1);
            var e = n ? "?" : "", r = [], o = function(n) {
                var e = t[n];
                if ([ "", undefined, null ].includes(e)) return "continue";
                e.constructor === Array ? e.forEach(function(t) {
                    r.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(t));
                }) : r.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
            };
            for (var i in t) o(i);
            return r.length ? e + r.join("&") : "";
        }
        n.__esModule = !0, n["default"] = void 0;
        var o = r;
        n["default"] = o;
    }, function(t, n, e) {
        "use strict";
        n.__esModule = !0, n["default"] = void 0;
        var r = o(e(16));
        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            };
        }
        function i(t, n) {
            t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
        }
        var c = {
            v: "1.0",
            protocol: "https:",
            path: "webapi.amap.com/ui/{v}/main-async.js",
            crossOrigin: "anonymous",
            AMapUIProtocol: undefined,
            initAMapUI: "initAMapUI",
            isAutoInitAMapUI: !1,
            keepScriptTag: !1
        }, u = function(t) {
            function n(n) {
                var e;
                e = t.call(this, n) || this;
                var r = Object.assign({}, c, n);
                return e.v = r.v, e.protocol = r.protocol, e.path = r.path, e.crossOrigin = r.crossOrigin, 
                e.AMapUIProtocol = r.AMapUIProtocol, e.initAMapUI = r.initAMapUI, e.isAutoInitAMapUI = r.isAutoInitAMapUI, 
                e.keepScriptTag = r.keepScriptTag, "string" == typeof e.AMapUIProtocol && e.setAMapUIProtocol(e.AMapUIProtocol), 
                e;
            }
            i(n, t);
            var e = n.prototype;
            return e.load = function() {
                var t = this;
                if (this.checkCorrectness()) {
                    var n = function() {
                        return window.AMapUI;
                    };
                    return Promise.resolve(this.isAutoInitAMapUI ? n() : n);
                }
                var e = document.createElement("script");
                return e.charset = "utf-8", e.type = "text/javascript", e.async = !0, e.defer = !0, 
                e.crossOrigin = this.crossOrigin, e.src = this.getRequestURL(), new Promise(function(n, r) {
                    "undefined" != typeof e.onload ? e.onload = function() {
                        t.keepScriptTag || t.removeScriptTag(e);
                        var r = function() {
                            return window[t.initAMapUI]() || window.AMapUI;
                        };
                        n(t.isAutoInitAMapUI ? r() : r);
                    } : e.onreadystatechange = function() {
                        if ("loaded" == e.readyState || "complete" == e.readyState) {
                            e.onreadystatechange = null, t.keepScriptTag || t.removeScriptTag(e);
                            var r = function() {
                                return window[t.initAMapUI]() || window.AMapUI;
                            };
                            n(t.isAutoInitAMapUI ? r() : r);
                        }
                    }, e.onerror = function(n) {
                        t.keepScriptTag || t.removeScriptTag(e), r(n);
                    }, document.getElementsByTagName("head")[0].appendChild(e);
                });
            }, e.checkCorrectness = function() {
                if (!window.AMapUI) return !1;
                for (var t = [ "libConf", "uiMods", "docProtocol", "version" ], n = 0; n < t.length; n++) {
                    if (!(t[n] in window.AMapUI)) return !1;
                }
                return this.versionCompare(window.AMapUI.libConf.mainVersion, this.v);
            }, e.versionCompare = function(t, n) {
                return t === n;
            }, e.removeScriptTag = function(t) {
                t.parentNode.removeChild(t);
            }, e.toRequestURL = function() {
                var t = this.protocol, n = this.v;
                return t + "//" + this.path.replace("{v}", n);
            }, e.getRequestURL = function() {
                return this.toRequestURL();
            }, e.setProtocol = function(t) {
                return this.protocol = t, this;
            }, e.setPath = function(t) {
                return this.path = t, this;
            }, e.setV = function(t) {
                return this.v = t, this;
            }, e.setCrossOrigin = function(t) {
                return this.crossOrigin = t, this;
            }, e.setAMapUIProtocol = function(t) {
                var n = "https:" === t ? "https:" : "http:";
                return window.AMapUIProtocol = n, this;
            }, n;
        }(r["default"]);
        n["default"] = u;
    } ]);
});