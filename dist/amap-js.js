/*!
 * AMapJS v1.0.0
 * 
 * Copyright (c) 2018 Derek Li
 * Released under the MIT License - https://choosealicense.com/licenses/mit/
 * 
 * https://github.com/iDerekLi/amap-js
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e((t = t || self).AMapJS = {});
}(this, function(t) {
    "use strict";
    function createCommonjsModule(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }
    var e = createCommonjsModule(function(t) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e);
 // eslint-disable-line no-undef
        }), n = createCommonjsModule(function(t) {
        var e = t.exports = {
            version: "2.6.4"
        };
        "number" == typeof __e && (__e = e);
 // eslint-disable-line no-undef
        }), r = (n.version, function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
    }), o = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
    }, i = function(t) {
        try {
            return !!t();
        } catch (e) {
            return !0;
        }
    }, c = !i(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), a = e.document, u = r(a) && r(a.createElement), s = function(t) {
        return u ? a.createElement(t) : {};
    }, f = !c && !i(function() {
        return 7 != Object.defineProperty(s("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), l = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value");
    }, p = Object.defineProperty, h = {
        f: c ? Object.defineProperty : function defineProperty(t, e, n) {
            if (o(t), e = l(e, !0), o(n), f) try {
                return p(t, e, n);
            } catch (r) {/* empty */}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
        }
    }, d = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        };
    }, v = c ? function(t, e, n) {
        return h.f(t, e, d(1, n));
    } : function(t, e, n) {
        return t[e] = n, t;
    }, y = {}.hasOwnProperty, m = function(t, e) {
        return y.call(t, e);
    }, g = 0, S = Math.random(), A = function(t) {
        return "Symbol(".concat(t === undefined ? "" : t, ")_", (++g + S).toString(36));
    }, _ = !1, w = createCommonjsModule(function(t) {
        var r = "__core-js_shared__", o = e[r] || (e[r] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = e !== undefined ? e : {});
        })("versions", []).push({
            version: n.version,
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    }), M = w("native-function-to-string", Function.toString), b = createCommonjsModule(function(t) {
        var r = A("src"), o = "toString", i = ("" + M).split(o);
        n.inspectSource = function(t) {
            return M.call(t);
        }, (t.exports = function(t, n, o, c) {
            var a = "function" == typeof o;
            a && (m(o, "name") || v(o, "name", n)), t[n] !== o && (a && (m(o, r) || v(o, r, t[n] ? "" + t[n] : i.join(String(n)))), 
            t === e ? t[n] = o : c ? t[n] ? t[n] = o : v(t, n, o) : (delete t[n], v(t, n, o)));
        })(Function.prototype, o, function toString() {
            return "function" == typeof this && this[r] || M.call(this);
        });
    }), P = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
    }, O = function(t, e, n) {
        if (P(t), e === undefined) return t;
        switch (n) {
          case 1:
            return function(n) {
                return t.call(e, n);
            };

          case 2:
            return function(n, r) {
                return t.call(e, n, r);
            };

          case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o);
            };
        }
        return function() {
            return t.apply(e, arguments);
        };
    }, j = "prototype", I = function(t, r, o) {
        var i, c, a, u, s = t & I.F, f = t & I.G, l = t & I.S, p = t & I.P, h = t & I.B, d = f ? e : l ? e[r] || (e[r] = {}) : (e[r] || {})[j], y = f ? n : n[r] || (n[r] = {}), m = y[j] || (y[j] = {});
        for (i in f && (o = r), o) 
        // contains in native
        // export native or passed
        a = ((c = !s && d && d[i] !== undefined) ? d : o)[i], 
        // bind timers to global for call from export context
        u = h && c ? O(a, e) : p && "function" == typeof a ? O(Function.call, a) : a, 
        // extend global
        d && b(d, i, a, t & I.U), 
        // export
        y[i] != a && v(y, i, u), p && m[i] != a && (m[i] = a);
    };
    e.core = n, 
    // type bitmap
    I.F = 1, // forced
    I.G = 2, // global
    I.S = 4, // static
    I.P = 8, // proto
    I.B = 16, // bind
    I.W = 32, // wrap
    I.U = 64, // safe
    I.R = 128;
    // real proto method for `library`
    var L = I, T = {}.toString, U = function(t) {
        return T.call(t).slice(8, -1);
    }, k = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == U(t) ? t.split("") : Object(t);
    }, C = function(t) {
        if (t == undefined) throw TypeError("Can't call method on  " + t);
        return t;
    }, R = function(t) {
        return Object(C(t));
    }, x = Math.ceil, E = Math.floor, F = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? E : x)(t);
    }, q = Math.min, N = function(t) {
        return t > 0 ? q(F(t), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
        }, V = Array.isArray || function isArray(t) {
        return "Array" == U(t);
    }, G = createCommonjsModule(function(t) {
        var n = w("wks"), r = e.Symbol, o = "function" == typeof r;
        (t.exports = function(t) {
            return n[t] || (n[t] = o && r[t] || (o ? r : A)("Symbol." + t));
        }).store = n;
    }), B = G("species"), D = function(t) {
        var e;
        return V(t) && (
        // cross-realm fallback
        "function" != typeof (e = t.constructor) || e !== Array && !V(e.prototype) || (e = undefined), 
        r(e) && null === (e = e[B]) && (e = undefined)), e === undefined ? Array : e;
    }, J = function(t, e) {
        return new (D(t))(e);
    }, z = function(t, e) {
        return !!t && i(function() {
            // eslint-disable-next-line no-useless-call
            e ? t.call(null, function() {/* empty */}, 1) : t.call(null);
        });
    }, H = function(t, e) {
        var n = 1 == t, r = 2 == t, o = 3 == t, i = 4 == t, c = 6 == t, a = 5 == t || c, u = e || J;
        return function(e, s, f) {
            for (var l, p, h = R(e), d = k(h), v = O(s, f, 3), y = N(d.length), m = 0, g = n ? u(e, y) : r ? u(e, 0) : undefined; y > m; m++) if ((a || m in d) && (p = v(l = d[m], m, h), 
            t)) if (n) g[m] = p; // map
             else if (p) switch (t) {
              case 3:
                return !0;

 // some
                              case 5:
                return l;

 // find
                              case 6:
                return m;

 // findIndex
                              case 2:
                g.push(l);
 // filter
                        } else if (i) return !1;
 // every
                        return c ? -1 : o || i ? i : g;
        };
    }(0), K = z([].forEach, !0);
    L(L.P + L.F * !K, "Array", {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function forEach(t /* , thisArg */) {
            return H(this, t, arguments[1]);
        }
    }), 
    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    L(L.S, "Array", {
        isArray: V
    });
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var W = function(t) {
        return k(C(t));
    }, Q = Math.max, X = Math.min, Y = function(t, e) {
        return (t = F(t)) < 0 ? Q(t + e, 0) : X(t, e);
    }, Z = function(t) {
        return function(e, n, r) {
            var o, i = W(e), c = N(i.length), a = Y(r, c);
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (t && n != n) {
                for (;c > a; ) 
                // eslint-disable-next-line no-self-compare
                if ((o = i[a++]) != o) return !0;
                // Array#indexOf ignores holes, Array#includes - not
                        } else for (;c > a; a++) if ((t || a in i) && i[a] === n) return t || a || 0;
            return !t && -1;
        };
    }, $ = G("unscopables"), tt = Array.prototype;
    tt[$] == undefined && v(tt, $, {});
    var et = function(t) {
        tt[$][t] = !0;
    }, nt = Z(!0);
    // https://github.com/tc39/Array.prototype.includes
        L(L.P, "Array", {
        includes: function includes(t /* , fromIndex = 0 */) {
            return nt(this, t, arguments.length > 1 ? arguments[1] : undefined);
        }
    }), et("includes");
    var rt = w("keys"), ot = function(t) {
        return rt[t] || (rt[t] = A(t));
    }, it = Z(!1), ct = ot("IE_PROTO"), at = function(t, e) {
        var n, r = W(t), o = 0, i = [];
        for (n in r) n != ct && m(r, n) && i.push(n);
        // Don't enum bug & hidden keys
                for (;e.length > o; ) m(r, n = e[o++]) && (~it(i, n) || i.push(n));
        return i;
    }, ut = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), st = Object.keys || function keys(t) {
        return at(t, ut);
    }, ft = c ? Object.defineProperties : function defineProperties(t, e) {
        o(t);
        for (var n, r = st(e), i = r.length, c = 0; i > c; ) h.f(t, n = r[c++], e[n]);
        return t;
    };
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    L(L.S + L.F * !c, "Object", {
        defineProperties: ft
    }), 
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    L(L.S + L.F * !c, "Object", {
        defineProperty: h.f
    });
    var lt = e.document, pt = lt && lt.documentElement, ht = ot("IE_PROTO"), dt = function() {/* empty */}, vt = "prototype", yt = function() {
        // Thrash, waste and sodomy: IE GC bug
        var t, e = s("iframe"), n = ut.length, r = "<", o = ">";
        for (e.style.display = "none", pt.appendChild(e), e.src = "javascript:", (// eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        t = e.contentWindow.document).open(), t.write(r + "script" + o + "document.F=Object" + r + "/script" + o), 
        t.close(), yt = t.F; n--; ) delete yt[vt][ut[n]];
        return yt();
    }, mt = Object.create || function create(t, e) {
        var n;
        return null !== t ? (dt[vt] = o(t), n = new dt(), dt[vt] = null, 
        // add "__proto__" for Object.getPrototypeOf polyfill
        n[ht] = t) : n = yt(), e === undefined ? n : ft(n, e);
    };
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    L(L.S, "Object", {
        create: mt
    });
    var gt = {
        f: Object.getOwnPropertySymbols
    }, St = {
        f: {}.propertyIsEnumerable
    }, At = Object.assign, _t = !At || i(function() {
        var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach(function(t) {
            e[t] = t;
        }), 7 != At({}, t)[n] || Object.keys(At({}, e)).join("") != r;
    }) ? function assign(t, e) {
        for (// eslint-disable-line no-unused-vars
        var n = R(t), r = arguments.length, o = 1, i = gt.f, c = St.f; r > o; ) for (var a, u = k(arguments[o++]), s = i ? st(u).concat(i(u)) : st(u), f = s.length, l = 0; f > l; ) c.call(u, a = s[l++]) && (n[a] = u[a]);
        return n;
    } : At;
    // 19.1.3.1 Object.assign(target, source)
    L(L.S + L.F, "Object", {
        assign: _t
    });
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var wt = G("toStringTag"), Mt = "Arguments" == U(function() {
        return arguments;
    }()), bt = function(t, e) {
        try {
            return t[e];
        } catch (n) {/* empty */}
    }, Pt = function(t) {
        var e, n, r;
        return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (n = bt(e = Object(t), wt)) ? n : Mt ? U(e) : "Object" == (r = U(e)) && "function" == typeof e.callee ? "Arguments" : r;
    }, Ot = {};
    // ES3 wrong here
        Ot[G("toStringTag")] = "z", Ot + "" != "[object z]" && b(Object.prototype, "toString", function toString() {
        return "[object " + Pt(this) + "]";
    }, !0);
    // true  -> String#at
    // false -> String#codePointAt
    var jt = function(t) {
        return function(e, n) {
            var r, o, i = String(C(e)), c = F(n), a = i.length;
            return c < 0 || c >= a ? t ? "" : undefined : (r = i.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === a || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? t ? i.charAt(c) : r : t ? i.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536;
        };
    }, It = {}, Lt = h.f, Tt = G("toStringTag"), Ut = function(t, e, n) {
        t && !m(t = n ? t : t.prototype, Tt) && Lt(t, Tt, {
            configurable: !0,
            value: e
        });
    }, kt = {};
    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    v(kt, G("iterator"), function() {
        return this;
    });
    var Ct = function(t, e, n) {
        t.prototype = mt(kt, {
            next: d(1, n)
        }), Ut(t, e + " Iterator");
    }, Rt = ot("IE_PROTO"), xt = Object.prototype, Et = Object.getPrototypeOf || function(t) {
        return t = R(t), m(t, Rt) ? t[Rt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? xt : null;
    }, Ft = G("iterator"), qt = !([].keys && "next" in [].keys()), Nt = "@@iterator", Vt = "keys", Gt = "values", Bt = function() {
        return this;
    }, Dt = function(t, e, n, r, o, i, c) {
        Ct(n, e, r);
        var a, u, s, f = function(t) {
            if (!qt && t in d) return d[t];
            switch (t) {
              case Vt:
                return function keys() {
                    return new n(this, t);
                };

              case Gt:
                return function values() {
                    return new n(this, t);
                };
            }
            return function entries() {
                return new n(this, t);
            };
        }, l = e + " Iterator", p = o == Gt, h = !1, d = t.prototype, y = d[Ft] || d[Nt] || o && d[o], m = y || f(o), g = o ? p ? f("entries") : m : undefined, S = "Array" == e && d.entries || y;
        if (
        // Fix native
        S && (s = Et(S.call(new t()))) !== Object.prototype && s.next && (
        // Set @@toStringTag to native iterators
        Ut(s, l, !0), 
        // fix for some old engines
        _ || "function" == typeof s[Ft] || v(s, Ft, Bt)), 
        // fix Array#{values, @@iterator}.name in V8 / FF
        p && y && y.name !== Gt && (h = !0, m = function values() {
            return y.call(this);
        }), 
        // Define iterator
        _ && !c || !qt && !h && d[Ft] || v(d, Ft, m), 
        // Plug for library
        It[e] = m, It[l] = Bt, o) if (a = {
            values: p ? m : f(Gt),
            keys: i ? m : f(Vt),
            entries: g
        }, c) for (u in a) u in d || b(d, u, a[u]); else L(L.P + L.F * (qt || h), e, a);
        return a;
    }, Jt = jt(!0);
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        // 21.1.3.27 String.prototype[@@iterator]()
    Dt(String, "String", function(t) {
        this._t = String(t), // target
        this._i = 0;
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: undefined,
            done: !0
        } : (t = Jt(e, n), this._i += t.length, {
            value: t,
            done: !1
        });
    });
    var zt = function(t, e) {
        return {
            value: e,
            done: !!t
        };
    }, Ht = Dt(Array, "Array", function(t, e) {
        this._t = W(t), // target
        this._i = 0, // next index
        this._k = e;
    }, function() {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = undefined, zt(1)) : zt(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
    }, "values");
    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    It.Arguments = It.Array, et("keys"), et("values"), et("entries");
    for (var Kt = G("iterator"), Wt = G("toStringTag"), Qt = It.Array, Xt = {
        CSSRuleList: !0,
        // TODO: Not spec compliant, should be false.
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
        // TODO: Not spec compliant, should be false.
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
        // TODO: Not spec compliant, should be false.
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, Yt = st(Xt), Zt = 0; Zt < Yt.length; Zt++) {
        var $t, te = Yt[Zt], ee = Xt[te], ne = e[te], re = ne && ne.prototype;
        if (re && (re[Kt] || v(re, Kt, Qt), re[Wt] || v(re, Wt, te), It[te] = Qt, ee)) for ($t in Ht) re[$t] || b(re, $t, Ht[$t], !0);
    }
    var oe, ie, ce, ae = function(t, e, n, r) {
        if (!(t instanceof e) || r !== undefined && r in t) throw TypeError(n + ": incorrect invocation!");
        return t;
    }, ue = function(t, e, n, r) {
        try {
            return r ? e(o(n)[0], n[1]) : e(n);
            // 7.4.6 IteratorClose(iterator, completion)
                } catch (c) {
            var i = t["return"];
            throw i !== undefined && o(i.call(t)), c;
        }
    }, se = G("iterator"), fe = Array.prototype, le = function(t) {
        return t !== undefined && (It.Array === t || fe[se] === t);
    }, pe = G("iterator"), he = n.getIteratorMethod = function(t) {
        if (t != undefined) return t[pe] || t["@@iterator"] || It[Pt(t)];
    }, de = createCommonjsModule(function(t) {
        var e = {}, n = {}, r = t.exports = function(t, r, i, c, a) {
            var u, s, f, l, p = a ? function() {
                return t;
            } : he(t), h = O(i, c, r ? 2 : 1), d = 0;
            if ("function" != typeof p) throw TypeError(t + " is not iterable!");
            // fast case for arrays with default iterator
                        if (le(p)) {
                for (u = N(t.length); u > d; d++) if ((l = r ? h(o(s = t[d])[0], s[1]) : h(t[d])) === e || l === n) return l;
            } else for (f = p.call(t); !(s = f.next()).done; ) if ((l = ue(f, h, s.value, r)) === e || l === n) return l;
        };
        r.BREAK = e, r.RETURN = n;
    }), ve = G("species"), ye = function(t, e) {
        var n, r = o(t).constructor;
        return r === undefined || (n = o(r)[ve]) == undefined ? e : P(n);
    }, me = function(t, e, n) {
        var r = n === undefined;
        switch (e.length) {
          case 0:
            return r ? t() : t.call(n);

          case 1:
            return r ? t(e[0]) : t.call(n, e[0]);

          case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

          case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

          case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
        }
        return t.apply(n, e);
    }, ge = e.process, Se = e.setImmediate, Ae = e.clearImmediate, _e = e.MessageChannel, we = e.Dispatch, Me = 0, be = {}, Pe = "onreadystatechange", Oe = function() {
        var t = +this;
        // eslint-disable-next-line no-prototype-builtins
                if (be.hasOwnProperty(t)) {
            var e = be[t];
            delete be[t], e();
        }
    }, je = function(t) {
        Oe.call(t.data);
    };
    // call something on iterator step with safe closing on error
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    Se && Ae || (Se = function setImmediate(t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return be[++Me] = function() {
            // eslint-disable-next-line no-new-func
            me("function" == typeof t ? t : Function(t), e);
        }, oe(Me), Me;
    }, Ae = function clearImmediate(t) {
        delete be[t];
    }, 
    // Node.js 0.8-
    "process" == U(ge) ? oe = function(t) {
        ge.nextTick(O(Oe, t, 1));
    } : we && we.now ? oe = function(t) {
        we.now(O(Oe, t, 1));
    } : _e ? (ce = (ie = new _e()).port2, ie.port1.onmessage = je, oe = O(ce.postMessage, ce, 1)) : e.addEventListener && "function" == typeof postMessage && !e.importScripts ? (oe = function(t) {
        e.postMessage(t + "", "*");
    }, e.addEventListener("message", je, !1)) : oe = Pe in s("script") ? function(t) {
        pt.appendChild(s("script"))[Pe] = function() {
            pt.removeChild(this), Oe.call(t);
        };
    } : function(t) {
        setTimeout(O(Oe, t, 1), 0);
    });
    var Ie = {
        set: Se,
        clear: Ae
    }, Le = Ie.set, Te = e.MutationObserver || e.WebKitMutationObserver, Ue = e.process, ke = e.Promise, Ce = "process" == U(Ue), Re = function() {
        var t, n, r, o = function() {
            var e, o;
            for (Ce && (e = Ue.domain) && e.exit(); t; ) {
                o = t.fn, t = t.next;
                try {
                    o();
                } catch (i) {
                    throw t ? r() : n = undefined, i;
                }
            }
            n = undefined, e && e.enter();
        };
        // Node.js
        if (Ce) r = function() {
            Ue.nextTick(o);
        };
        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
         else if (!Te || e.navigator && e.navigator.standalone) if (ke && ke.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var i = ke.resolve(undefined);
            r = function() {
                i.then(o);
            };
        } else r = function() {
            // strange IE + webpack dev server bug - use .call(global)
            Le.call(e, o);
        }; else {
            var c = !0, a = document.createTextNode("");
            new Te(o).observe(a, {
                characterData: !0
            }), // eslint-disable-line no-new
            r = function() {
                a.data = c = !c;
            };
        }
        return function(e) {
            var o = {
                fn: e,
                next: undefined
            };
            n && (n.next = o), t || (t = o, r()), n = o;
        };
    };
    // 25.4.1.5 NewPromiseCapability(C)
    function PromiseCapability(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (e !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
            e = t, n = r;
        }), this.resolve = P(e), this.reject = P(n);
    }
    var xe = {
        f: function(t) {
            return new PromiseCapability(t);
        }
    }, Ee = function(t) {
        try {
            return {
                e: !1,
                v: t()
            };
        } catch (e) {
            return {
                e: !0,
                v: e
            };
        }
    }, Fe = e.navigator, qe = Fe && Fe.userAgent || "", Ne = function(t, e) {
        if (o(t), r(e) && e.constructor === t) return e;
        var n = xe.f(t);
        return (0, n.resolve)(e), n.promise;
    }, Ve = function(t, e, n) {
        for (var r in e) b(t, r, e[r], n);
        return t;
    }, Ge = G("species"), Be = function(t) {
        var n = e[t];
        c && n && !n[Ge] && h.f(n, Ge, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    }, De = G("iterator"), Je = !1;
    try {
        [ 7 ][De]()["return"] = function() {
            Je = !0;
        };
    } catch (Mn) {/* empty */}
    var ze, He, Ke, We, Qe = function(t, e) {
        if (!e && !Je) return !1;
        var n = !1;
        try {
            var r = [ 7 ], o = r[De]();
            o.next = function() {
                return {
                    done: n = !0
                };
            }, r[De] = function() {
                return o;
            }, t(r);
        } catch (Mn) {/* empty */}
        return n;
    }, Xe = Ie.set, Ye = Re(), Ze = "Promise", $e = e.TypeError, tn = e.process, en = tn && tn.versions, nn = en && en.v8 || "", rn = e[Ze], on = "process" == Pt(tn), cn = function() {/* empty */}, an = He = xe.f, un = !!function() {
        try {
            // correct subclassing with @@species support
            var t = rn.resolve(1), e = (t.constructor = {})[G("species")] = function(t) {
                t(cn, cn);
            };
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (on || "function" == typeof PromiseRejectionEvent) && t.then(cn) instanceof e && 0 !== nn.indexOf("6.6") && -1 === qe.indexOf("Chrome/66");
        } catch (Mn) {/* empty */}
    }(), sn = function(t) {
        var e;
        return !(!r(t) || "function" != typeof (e = t.then)) && e;
    }, fn = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            Ye(function() {
                for (var r = t._v, o = 1 == t._s, i = 0, c = function(e) {
                    var n, i, c, a = o ? e.ok : e.fail, u = e.resolve, s = e.reject, f = e.domain;
                    try {
                        a ? (o || (2 == t._h && hn(t), t._h = 1), !0 === a ? n = r : (f && f.enter(), n = a(r), 
                        // may throw
                        f && (f.exit(), c = !0)), n === e.promise ? s($e("Promise-chain cycle")) : (i = sn(n)) ? i.call(n, u, s) : u(n)) : s(r);
                    } catch (Mn) {
                        f && !c && f.exit(), s(Mn);
                    }
                }; n.length > i; ) c(n[i++]);
 // variable length - can't use forEach
                                t._c = [], t._n = !1, e && !t._h && ln(t);
            });
        }
    }, ln = function(t) {
        Xe.call(e, function() {
            var n, r, o, i = t._v, c = pn(t);
            if (c && (n = Ee(function() {
                on ? tn.emit("unhandledRejection", i, t) : (r = e.onunhandledrejection) ? r({
                    promise: t,
                    reason: i
                }) : (o = e.console) && o.error && o.error("Unhandled promise rejection", i);
            }), 
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            t._h = on || pn(t) ? 2 : 1), t._a = undefined, c && n.e) throw n.v;
        });
    }, pn = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
    }, hn = function(t) {
        Xe.call(e, function() {
            var n;
            on ? tn.emit("rejectionHandled", t) : (n = e.onrejectionhandled) && n({
                promise: t,
                reason: t._v
            });
        });
    }, dn = function(t) {
        var e = this;
        e._d || (e._d = !0, // unwrap
        (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), fn(e, !0));
    }, vn = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            // unwrap
            try {
                if (n === t) throw $e("Promise can't be resolved itself");
                (e = sn(t)) ? Ye(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
 // wrap
                                        try {
                        e.call(t, O(vn, r, 1), O(dn, r, 1));
                    } catch (Mn) {
                        dn.call(r, Mn);
                    }
                }) : (n._v = t, n._s = 1, fn(n, !1));
            } catch (Mn) {
                dn.call({
                    _w: n,
                    _d: !1
                }, Mn);
 // wrap
                        }
        }
    };
    // constructor polyfill
    un || (
    // 25.4.3.1 Promise(executor)
    rn = function Promise(t) {
        ae(this, rn, Ze, "_h"), P(t), ze.call(this);
        try {
            t(O(vn, this, 1), O(dn, this, 1));
        } catch (e) {
            dn.call(this, e);
        }
    }, (
    // eslint-disable-next-line no-unused-vars
    ze = function Promise(t) {
        this._c = [], // <- awaiting reactions
        this._a = undefined, // <- checked in isUnhandled reactions
        this._s = 0, // <- state
        this._d = !1, // <- done
        this._v = undefined, // <- value
        this._h = 0, // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = !1;
    }).prototype = Ve(rn.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(t, e) {
            var n = an(ye(this, rn));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
            n.domain = on ? tn.domain : undefined, this._c.push(n), this._a && this._a.push(n), 
            this._s && fn(this, !1), n.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        "catch": function(t) {
            return this.then(undefined, t);
        }
    }), Ke = function() {
        var t = new ze();
        this.promise = t, this.resolve = O(vn, t, 1), this.reject = O(dn, t, 1);
    }, xe.f = an = function(t) {
        return t === rn || t === We ? new Ke(t) : He(t);
    }), L(L.G + L.W + L.F * !un, {
        Promise: rn
    }), Ut(rn, Ze), Be(Ze), We = n[Ze], 
    // statics
    L(L.S + L.F * !un, Ze, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(t) {
            var e = an(this);
            return (0, e.reject)(t), e.promise;
        }
    }), L(L.S + L.F * (_ || !un), Ze, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(t) {
            return Ne(_ && this === We ? rn : this, t);
        }
    }), L(L.S + L.F * !(un && Qe(function(t) {
        rn.all(t)["catch"](cn);
    })), Ze, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all(t) {
            var e = this, n = an(e), r = n.resolve, o = n.reject, i = Ee(function() {
                var n = [], i = 0, c = 1;
                de(t, !1, function(t) {
                    var a = i++, u = !1;
                    n.push(undefined), c++, e.resolve(t).then(function(t) {
                        u || (u = !0, n[a] = t, --c || r(n));
                    }, o);
                }), --c || r(n);
            });
            return i.e && o(i.v), n.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(t) {
            var e = this, n = an(e), r = n.reject, o = Ee(function() {
                de(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r);
                });
            });
            return o.e && r(o.v), n.promise;
        }
    });
    n.Promise;
    // array
    /**
	 * Loader 基类
	 */    var yn = function Loader() {};
    /**
	 * 加载loader
	 * @param loaders
	 * @param callbackThen 可选参数 通过回调方式返回，结果集为(a, b, c...)
	 * @param callbackCatch 可选参数
	 * @param callbackFinally 可选参数
	 * @returns {Promise<any[]>} 结果集为([a, b, c...])
	 */
    function load(t, e, n, r) {
        var o = [];
        (Array.isArray(t) ? t : [ t ]).forEach(function(t) {
            if (!(t instanceof yn)) throw new TypeError(t + " is not an instance of Loader");
            if ("function" != typeof t.load) throw new TypeError(t.load + " is not a function");
            var e = t.load();
            o.push(e);
        });
        var i = Promise.all(o), c = {
            then: e,
            "catch": n,
            "finally": r
        }, a = {
            then: function then(t) {
                c.then.apply(c, t);
            },
            "catch": function _catch(t) {
                c["catch"](t);
            },
            "finally": function _finally() {
                c["finally"]();
            }
        }, u = i;
        for (var s in c) "function" == typeof c[s] && (u = u[s](a[s]));
        return i;
    }
    function _extends() {
        return (_extends = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
        }).apply(this, arguments);
    }
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
    }
    /**
	 * 对象转url参数
	 * @param data 格式化对象
	 * @param isPrefix 前缀
	 * @returns {string}
	 */    function queryParams(t, e) {
        void 0 === e && (e = !1);
        var n = e ? "?" : "", r = [], o = function _loop(e) {
            var n = t[e];
 // 去掉为空的参数
                        if ([ "", undefined, null ].includes(n)) return "continue";
            n.constructor === Array ? n.forEach(function(t) {
                r.push(encodeURIComponent(e) + "[]=" + encodeURIComponent(t));
            }) : r.push(encodeURIComponent(e) + "=" + encodeURIComponent(n));
        };
        for (var i in t) o(i);
        return r.length ? n + r.join("&") : "";
    }
    Object.assign(yn.prototype, {
        load: function load() {}
    });
    var mn = {
        protocol: "https:",
        // 脚本加载协议
        path: "webapi.amap.com/maps",
        // 资源地址
        key: "",
        // 您申请的key值 (实例化后该属性存在params中)
        v: "1.4.12",
        // 版本号 (实例化后该属性存在params中)
        callback: "onAMapJS" + Math.ceil(Math.random() * Math.pow(10, 16)),
        // 回调函数名 (实例化后该属性存在params中)
        params: null,
        crossOrigin: "anonymous",
        keepScriptTag: !1
    }, gn = 
    /* */
    function(t) {
        function AMapJSAPILoader(e) {
            var n;
            n = t.call(this, e) || this;
            var r = Object.assign({}, mn, e);
            return n.protocol = r.protocol, n.path = r.path, n.params = _extends({
                key: r.key,
                v: r.v,
                callback: r.callback
            }, r.params), n.crossOrigin = r.crossOrigin, n.keepScriptTag = r.keepScriptTag, 
            n;
        }
        /**
	   * 加载资源
	   * @returns {Promise<any>}
	   */        _inheritsLoose(AMapJSAPILoader, t);
        var e = AMapJSAPILoader.prototype;
        return e.load = function load() {
            var t = this;
            if (this.checkCorrectness()) return Promise.resolve(window.AMap);
            var e = document.createElement("script");
            e.charset = "utf-8", e.type = "text/javascript", e.async = !0, e.defer = !0, e.crossOrigin = this.crossOrigin, 
            e.src = this.getRequestURL();
            var n = this.params.callback;
            return new Promise(function(r, o) {
                window[n] = function() {
                    return r(window.AMap);
                }, "undefined" != typeof e.onload ? e.onload = function() {
                    t.keepScriptTag || t.removeScriptTag(e);
                } : e.onreadystatechange = function() {
                    "loaded" != e.readyState && "complete" != e.readyState || (e.onreadystatechange = null, 
                    t.keepScriptTag || t.removeScriptTag(e));
                }, e.onerror = function(n) {
                    t.keepScriptTag || t.removeScriptTag(e), o(n);
                }, document.getElementsByTagName("head")[0].appendChild(e);
            });
        } // 检查AMapJSAPI正确性
        , e.checkCorrectness = function checkCorrectness() {
            if (!window.AMap) return !1;
            for (var t = [ "v", "Pixel", "LngLat", "Size", "Bounds", "Map" ], e = 0; e < t.length; e++) {
                if (!(t[e] in window.AMap)) return !1;
            }
            return this.versionCompare(window.AMap.v, this.params.v);
        }, e.versionCompare = function versionCompare(t, e) {
            return t === e;
        }
        /**
	   * 删除脚本标签
	   */ , e.removeScriptTag = function removeScriptTag(t) {
            t.parentNode.removeChild(t);
        }, e.toRequestURL = function toRequestURL() {
            return this.protocol + "//" + this.path + "?" + queryParams(this.params);
        }
        /**
	   * 获取请求地址
	   */ , e.getRequestURL = function getRequestURL() {
            return this.toRequestURL();
        }, e.setProtocol = function setProtocol(t) {
            return this.protocol = t, this;
        }, e.setPath = function setPath(t) {
            return this.path = t, this;
        }, e.setParams = function setParams(t) {
            this.params = t;
        }, e.setKey = function setKey(t) {
            return this.params && (this.params.key = t), this;
        }, e.setV = function setV(t) {
            return this.params && (this.params.v = t), this;
        }, e.setCrossOrigin = function setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }, AMapJSAPILoader;
    }(yn), Sn = {
        v: "1.0",
        // UI组件库版本号
        protocol: "https:",
        // 加载UI组件库的协议
        path: "webapi.amap.com/ui/{v}/main-async.js",
        // 异步版本main-async.js
        crossOrigin: "anonymous",
        AMapUIProtocol: undefined,
        // [ "https:" | "http:" ] 默认情况下，组件加载优先使用与应用页面相同的协议(https:下用https:，http:或者file:下用http:)，如果需要强制https协议（比如file:场景下）
        initAMapUI: "initAMapUI",
        // window["initAMapUI"] 钩子
        isAutoInitAMapUI: !1,
        // 是否加载完成自动调用initAMapUI初始化, (开启则返回AMapUI实例。关闭则返回initAMapUI函数，且需手动调用该方法并返回AMapUI实例。注意：当开启时请确保先加载AMap JSAPI)
        keepScriptTag: !1
    }, An = 
    /* */
    function(t) {
        function AMapUILoader(e) {
            var n;
            n = t.call(this, e) || this;
            var r = Object.assign({}, Sn, e);
            return n.v = r.v, n.protocol = r.protocol, n.path = r.path, n.crossOrigin = r.crossOrigin, 
            n.AMapUIProtocol = r.AMapUIProtocol, n.initAMapUI = r.initAMapUI, n.isAutoInitAMapUI = r.isAutoInitAMapUI, 
            n.keepScriptTag = r.keepScriptTag, // 设置强制加载协议
            "string" == typeof n.AMapUIProtocol && n.setAMapUIProtocol(n.AMapUIProtocol), n;
        }
        /**
	   * 加载资源
	   * @returns {*}
	   */        _inheritsLoose(AMapUILoader, t);
        var e = AMapUILoader.prototype;
        return e.load = function load() {
            var t = this;
            if (this.checkCorrectness()) {
                var e = function callback() {
                    return window.AMapUI;
                };
                return Promise.resolve(this.isAutoInitAMapUI ? e() : e);
            }
            var n = document.createElement("script");
            return n.charset = "utf-8", n.type = "text/javascript", n.async = !0, n.defer = !0, 
            n.crossOrigin = this.crossOrigin, n.src = this.getRequestURL(), new Promise(function(e, r) {
                "undefined" != typeof n.onload ? n.onload = function() {
                    t.keepScriptTag || t.removeScriptTag(n);
                    var r = function callback() {
                        return window[t.initAMapUI]() || window.AMapUI;
                    };
                    e(t.isAutoInitAMapUI ? r() : r);
                } : n.onreadystatechange = function() {
                    if ("loaded" == n.readyState || "complete" == n.readyState) {
                        n.onreadystatechange = null, t.keepScriptTag || t.removeScriptTag(n);
                        var r = function _callback() {
                            return window[t.initAMapUI]() || window.AMapUI;
                        };
                        e(t.isAutoInitAMapUI ? r() : r);
                    }
                }, n.onerror = function(e) {
                    t.keepScriptTag || t.removeScriptTag(n), r(e);
                }, document.getElementsByTagName("head")[0].appendChild(n);
            });
        } // 检查AMapUI正确性
        , e.checkCorrectness = function checkCorrectness() {
            if (!window.AMapUI) return !1;
            for (var t = [ "libConf", "uiMods", "docProtocol", "version" ], e = 0; e < t.length; e++) {
                if (!(t[e] in window.AMapUI)) return !1;
            }
            return this.versionCompare(window.AMapUI.libConf.mainVersion, this.v);
        }, e.versionCompare = function versionCompare(t, e) {
            return t === e;
        }
        /**
	   * 删除脚本标签
	   */ , e.removeScriptTag = function removeScriptTag(t) {
            t.parentNode.removeChild(t);
        }, e.toRequestURL = function toRequestURL() {
            var t = this.protocol, e = this.v;
            return t + "//" + this.path.replace("{v}", e);
        }
        /**
	   * 获取请求地址
	   */ , e.getRequestURL = function getRequestURL() {
            return this.toRequestURL();
        }, e.setProtocol = function setProtocol(t) {
            return this.protocol = t, this;
        }, e.setPath = function setPath(t) {
            return this.path = t, this;
        }, e.setV = function setV(t) {
            return this.v = t, this;
        }, e.setCrossOrigin = function setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }
        /**
	   * UI组件加载协议
	   * @param AMapUIProtocol ["https:" | "http:"]
	   * @returns {AMapUILoader}
	   */ , e.setAMapUIProtocol = function setAMapUIProtocol(t) {
            var e = "https:" === t ? "https:" : "http:";
            return window.AMapUIProtocol = e, this;
        }, AMapUILoader;
    }(yn), _n = "1.0.0", wn = {
        version: _n,
        Loader: yn,
        load: load,
        AMapJSAPILoader: gn,
        AMapUILoader: An
    };
 // 默认参数
        t["default"] = wn, t.version = _n, t.Loader = yn, t.load = load, t.AMapJSAPILoader = gn, 
    t.AMapUILoader = An, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});
