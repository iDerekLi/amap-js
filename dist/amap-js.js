/*!
 * AMapJS v1.1.1
 * 
 * Copyright (c) 2018-present Derek Li
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
            version: "2.6.9"
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
        } catch (mn) {
            return !0;
        }
    }, a = !i(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), c = e.document, u = r(c) && r(c.createElement), s = function(t) {
        return u ? c.createElement(t) : {};
    }, f = !a && !i(function() {
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
    }, p = Object.defineProperty, d = {
        f: a ? Object.defineProperty : function defineProperty(t, e, n) {
            if (o(t), e = l(e, !0), o(n), f) try {
                return p(t, e, n);
            } catch (mn) {/* empty */}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
        }
    }, h = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        };
    }, v = a ? function(t, e, n) {
        return d.f(t, e, h(1, n));
    } : function(t, e, n) {
        return t[e] = n, t;
    }, m = {}.hasOwnProperty, y = function(t, e) {
        return m.call(t, e);
    }, g = 0, _ = Math.random(), b = function(t) {
        return "Symbol(".concat(t === undefined ? "" : t, ")_", (++g + _).toString(36));
    }, w = createCommonjsModule(function(t) {
        var r = "__core-js_shared__", o = e[r] || (e[r] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = e !== undefined ? e : {});
        })("versions", []).push({
            version: n.version,
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    }), A = w("native-function-to-string", Function.toString), P = createCommonjsModule(function(t) {
        var r = b("src"), o = "toString", i = ("" + A).split(o);
        n.inspectSource = function(t) {
            return A.call(t);
        }, (t.exports = function(t, n, o, a) {
            var c = "function" == typeof o;
            c && (y(o, "name") || v(o, "name", n)), t[n] !== o && (c && (y(o, r) || v(o, r, t[n] ? "" + t[n] : i.join(String(n)))), 
            t === e ? t[n] = o : a ? t[n] ? t[n] = o : v(t, n, o) : (delete t[n], v(t, n, o)));
        })(Function.prototype, o, function toString() {
            return "function" == typeof this && this[r] || A.call(this);
        });
    }), M = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
    }, S = function(t, e, n) {
        if (M(t), e === undefined) return t;
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
    }, j = "prototype", O = function(t, r, o) {
        var i, a, c, u, s = t & O.F, f = t & O.G, l = t & O.S, p = t & O.P, d = t & O.B, h = f ? e : l ? e[r] || (e[r] = {}) : (e[r] || {})[j], m = f ? n : n[r] || (n[r] = {}), y = m[j] || (m[j] = {});
        for (i in f && (o = r), o) 
        // contains in native
        // export native or passed
        c = ((a = !s && h && h[i] !== undefined) ? h : o)[i], 
        // bind timers to global for call from export context
        u = d && a ? S(c, e) : p && "function" == typeof c ? S(Function.call, c) : c, 
        // extend global
        h && P(h, i, c, t & O.U), 
        // export
        m[i] != c && v(m, i, u), p && y[i] != c && (y[i] = c);
    };
    e.core = n, 
    // type bitmap
    O.F = 1, // forced
    O.G = 2, // global
    O.S = 4, // static
    O.P = 8, // proto
    O.B = 16, // bind
    O.W = 32, // wrap
    O.U = 64, // safe
    O.R = 128;
    // real proto method for `library`
    var k = O, I = {}.toString, L = function(t) {
        return I.call(t).slice(8, -1);
    }, T = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == L(t) ? t.split("") : Object(t);
    }, C = function(t) {
        if (t == undefined) throw TypeError("Can't call method on  " + t);
        return t;
    }, x = function(t) {
        return T(C(t));
    }, E = Math.ceil, U = Math.floor, N = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? U : E)(t);
    }, F = Math.min, R = function(t) {
        return t > 0 ? F(N(t), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
        }, J = Math.max, V = Math.min, B = function(t, e) {
        return (t = N(t)) < 0 ? J(t + e, 0) : V(t, e);
    }, D = function(t) {
        return function(e, n, r) {
            var o, i = x(e), a = R(i.length), c = B(r, a);
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (t && n != n) {
                for (;a > c; ) 
                // eslint-disable-next-line no-self-compare
                if ((o = i[c++]) != o) return !0;
                // Array#indexOf ignores holes, Array#includes - not
                        } else for (;a > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0;
            return !t && -1;
        };
    }, G = w("keys"), q = function(t) {
        return G[t] || (G[t] = b(t));
    }, z = D(!1), H = q("IE_PROTO"), K = function(t, e) {
        var n, r = x(t), o = 0, i = [];
        for (n in r) n != H && y(r, n) && i.push(n);
        // Don't enum bug & hidden keys
                for (;e.length > o; ) y(r, n = e[o++]) && (~z(i, n) || i.push(n));
        return i;
    }, W = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), $ = Object.keys || function keys(t) {
        return K(t, W);
    }, Q = a ? Object.defineProperties : function defineProperties(t, e) {
        o(t);
        for (var n, r = $(e), i = r.length, a = 0; i > a; ) d.f(t, n = r[a++], e[n]);
        return t;
    };
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    k(k.S + k.F * !a, "Object", {
        defineProperties: Q
    }), 
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    k(k.S + k.F * !a, "Object", {
        defineProperty: d.f
    });
    var X = e.document, Y = X && X.documentElement, Z = q("IE_PROTO"), tt = function() {/* empty */}, et = "prototype", nt = function() {
        // Thrash, waste and sodomy: IE GC bug
        var t, e = s("iframe"), n = W.length, r = "<", o = ">";
        for (e.style.display = "none", Y.appendChild(e), e.src = "javascript:", (// eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        t = e.contentWindow.document).open(), t.write(r + "script" + o + "document.F=Object" + r + "/script" + o), 
        t.close(), nt = t.F; n--; ) delete nt[et][W[n]];
        return nt();
    }, rt = Object.create || function create(t, e) {
        var n;
        return null !== t ? (tt[et] = o(t), n = new tt(), tt[et] = null, 
        // add "__proto__" for Object.getPrototypeOf polyfill
        n[Z] = t) : n = nt(), e === undefined ? n : Q(n, e);
    };
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    k(k.S, "Object", {
        create: rt
    });
    var ot = {
        f: Object.getOwnPropertySymbols
    }, it = {
        f: {}.propertyIsEnumerable
    }, at = function(t) {
        return Object(C(t));
    }, ct = Object.assign, ut = !ct || i(function() {
        var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach(function(t) {
            e[t] = t;
        }), 7 != ct({}, t)[n] || Object.keys(ct({}, e)).join("") != r;
    }) ? function assign(t, e) {
        for (// eslint-disable-line no-unused-vars
        var n = at(t), r = arguments.length, o = 1, i = ot.f, c = it.f; r > o; ) for (var u, s = T(arguments[o++]), f = i ? $(s).concat(i(s)) : $(s), l = f.length, p = 0; l > p; ) u = f[p++], 
        a && !c.call(s, u) || (n[u] = s[u]);
        return n;
    } : ct;
    // 19.1.3.1 Object.assign(target, source)
    k(k.S + k.F, "Object", {
        assign: ut
    });
    // 7.2.2 IsArray(argument)
    var st = Array.isArray || function isArray(t) {
        return "Array" == L(t);
    }, ft = createCommonjsModule(function(t) {
        var n = w("wks"), r = e.Symbol, o = "function" == typeof r;
        (t.exports = function(t) {
            return n[t] || (n[t] = o && r[t] || (o ? r : b)("Symbol." + t));
        }).store = n;
    }), lt = ft("species"), pt = function(t) {
        var e;
        return st(t) && (
        // cross-realm fallback
        "function" != typeof (e = t.constructor) || e !== Array && !st(e.prototype) || (e = undefined), 
        r(e) && null === (e = e[lt]) && (e = undefined)), e === undefined ? Array : e;
    }, dt = function(t, e) {
        return new (pt(t))(e);
    }, ht = function(t, e) {
        return !!t && i(function() {
            // eslint-disable-next-line no-useless-call
            e ? t.call(null, function() {/* empty */}, 1) : t.call(null);
        });
    }, vt = function(t, e) {
        var n = 1 == t, r = 2 == t, o = 3 == t, i = 4 == t, a = 6 == t, c = 5 == t || a, u = e || dt;
        return function(e, s, f) {
            for (var l, p, d = at(e), h = T(d), v = S(s, f, 3), m = R(h.length), y = 0, g = n ? u(e, m) : r ? u(e, 0) : undefined; m > y; y++) if ((c || y in h) && (p = v(l = h[y], y, d), 
            t)) if (n) g[y] = p; // map
             else if (p) switch (t) {
              case 3:
                return !0;

 // some
                              case 5:
                return l;

 // find
                              case 6:
                return y;

 // findIndex
                              case 2:
                g.push(l);
 // filter
                        } else if (i) return !1;
 // every
                        return a ? -1 : o || i ? i : g;
        };
    }(0), mt = ht([].forEach, !0);
    k(k.P + k.F * !mt, "Array", {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function forEach(t /* , thisArg */) {
            return vt(this, t, arguments[1]);
        }
    }), 
    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    k(k.S, "Array", {
        isArray: st
    });
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var yt = ft("toStringTag"), gt = "Arguments" == L(function() {
        return arguments;
    }()), _t = function(t, e) {
        try {
            return t[e];
        } catch (mn) {/* empty */}
    }, bt = function(t) {
        var e, n, r;
        return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (n = _t(e = Object(t), yt)) ? n : gt ? L(e) : "Object" == (r = L(e)) && "function" == typeof e.callee ? "Arguments" : r;
    }, wt = {};
    // ES3 wrong here
        wt[ft("toStringTag")] = "z", wt + "" != "[object z]" && P(Object.prototype, "toString", function toString() {
        return "[object " + bt(this) + "]";
    }, !0);
    // true  -> String#at
    // false -> String#codePointAt
    var At = function(t) {
        return function(e, n) {
            var r, o, i = String(C(e)), a = N(n), c = i.length;
            return a < 0 || a >= c ? t ? "" : undefined : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === c || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : r : t ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536;
        };
    }, Pt = {}, Mt = d.f, St = ft("toStringTag"), jt = function(t, e, n) {
        t && !y(t = n ? t : t.prototype, St) && Mt(t, St, {
            configurable: !0,
            value: e
        });
    }, Ot = {};
    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    v(Ot, ft("iterator"), function() {
        return this;
    });
    var kt = function(t, e, n) {
        t.prototype = rt(Ot, {
            next: h(1, n)
        }), jt(t, e + " Iterator");
    }, It = q("IE_PROTO"), Lt = Object.prototype, Tt = Object.getPrototypeOf || function(t) {
        return t = at(t), y(t, It) ? t[It] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Lt : null;
    }, Ct = ft("iterator"), xt = !([].keys && "next" in [].keys()), Et = "@@iterator", Ut = "keys", Nt = "values", Ft = function() {
        return this;
    }, Rt = function(t, e, n, r, o, i, a) {
        kt(n, e, r);
        var c, u, s, f = function(t) {
            if (!xt && t in h) return h[t];
            switch (t) {
              case Ut:
                return function keys() {
                    return new n(this, t);
                };

              case Nt:
                return function values() {
                    return new n(this, t);
                };
            }
            return function entries() {
                return new n(this, t);
            };
        }, l = e + " Iterator", p = o == Nt, d = !1, h = t.prototype, m = h[Ct] || h[Et] || o && h[o], y = m || f(o), g = o ? p ? f("entries") : y : undefined, _ = "Array" == e && h.entries || m;
        if (
        // Fix native
        _ && (s = Tt(_.call(new t()))) !== Object.prototype && s.next && (
        // Set @@toStringTag to native iterators
        jt(s, l, !0), 
        // fix for some old engines
        "function" != typeof s[Ct] && v(s, Ct, Ft)), 
        // fix Array#{values, @@iterator}.name in V8 / FF
        p && m && m.name !== Nt && (d = !0, y = function values() {
            return m.call(this);
        }), 
        // Define iterator
        (xt || d || !h[Ct]) && v(h, Ct, y), 
        // Plug for library
        Pt[e] = y, Pt[l] = Ft, o) if (c = {
            values: p ? y : f(Nt),
            keys: i ? y : f(Ut),
            entries: g
        }, a) for (u in c) u in h || P(h, u, c[u]); else k(k.P + k.F * (xt || d), e, c);
        return c;
    }, Jt = At(!0);
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        // 21.1.3.27 String.prototype[@@iterator]()
    Rt(String, "String", function(t) {
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
    // 22.1.3.31 Array.prototype[@@unscopables]
    var Vt = ft("unscopables"), Bt = Array.prototype;
    Bt[Vt] == undefined && v(Bt, Vt, {});
    var Dt = function(t) {
        Bt[Vt][t] = !0;
    }, Gt = function(t, e) {
        return {
            value: e,
            done: !!t
        };
    }, qt = Rt(Array, "Array", function(t, e) {
        this._t = x(t), // target
        this._i = 0, // next index
        this._k = e;
    }, function() {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = undefined, Gt(1)) : Gt(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
    }, "values");
    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Pt.Arguments = Pt.Array, Dt("keys"), Dt("values"), Dt("entries");
    for (var zt = ft("iterator"), Ht = ft("toStringTag"), Kt = Pt.Array, Wt = {
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
    }, $t = $(Wt), Qt = 0; Qt < $t.length; Qt++) {
        var Xt, Yt = $t[Qt], Zt = Wt[Yt], te = e[Yt], ee = te && te.prototype;
        if (ee && (ee[zt] || v(ee, zt, Kt), ee[Ht] || v(ee, Ht, Yt), Pt[Yt] = Kt, Zt)) for (Xt in qt) ee[Xt] || P(ee, Xt, qt[Xt], !0);
    }
    var ne, re, oe, ie = function(t, e, n, r) {
        if (!(t instanceof e) || r !== undefined && r in t) throw TypeError(n + ": incorrect invocation!");
        return t;
    }, ae = function(t, e, n, r) {
        try {
            return r ? e(o(n)[0], n[1]) : e(n);
            // 7.4.6 IteratorClose(iterator, completion)
                } catch (mn) {
            var i = t["return"];
            throw i !== undefined && o(i.call(t)), mn;
        }
    }, ce = ft("iterator"), ue = Array.prototype, se = function(t) {
        return t !== undefined && (Pt.Array === t || ue[ce] === t);
    }, fe = ft("iterator"), le = n.getIteratorMethod = function(t) {
        if (t != undefined) return t[fe] || t["@@iterator"] || Pt[bt(t)];
    }, pe = createCommonjsModule(function(t) {
        var e = {}, n = {}, r = t.exports = function(t, r, i, a, c) {
            var u, s, f, l, p = c ? function() {
                return t;
            } : le(t), d = S(i, a, r ? 2 : 1), h = 0;
            if ("function" != typeof p) throw TypeError(t + " is not iterable!");
            // fast case for arrays with default iterator
                        if (se(p)) {
                for (u = R(t.length); u > h; h++) if ((l = r ? d(o(s = t[h])[0], s[1]) : d(t[h])) === e || l === n) return l;
            } else for (f = p.call(t); !(s = f.next()).done; ) if ((l = ae(f, d, s.value, r)) === e || l === n) return l;
        };
        r.BREAK = e, r.RETURN = n;
    }), de = ft("species"), he = function(t, e) {
        var n, r = o(t).constructor;
        return r === undefined || (n = o(r)[de]) == undefined ? e : M(n);
    }, ve = function(t, e, n) {
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
    }, me = e.process, ye = e.setImmediate, ge = e.clearImmediate, _e = e.MessageChannel, be = e.Dispatch, we = 0, Ae = {}, Pe = "onreadystatechange", Me = function() {
        var t = +this;
        // eslint-disable-next-line no-prototype-builtins
                if (Ae.hasOwnProperty(t)) {
            var e = Ae[t];
            delete Ae[t], e();
        }
    }, Se = function(t) {
        Me.call(t.data);
    };
    // call something on iterator step with safe closing on error
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    ye && ge || (ye = function setImmediate(t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return Ae[++we] = function() {
            // eslint-disable-next-line no-new-func
            ve("function" == typeof t ? t : Function(t), e);
        }, ne(we), we;
    }, ge = function clearImmediate(t) {
        delete Ae[t];
    }, 
    // Node.js 0.8-
    "process" == L(me) ? ne = function(t) {
        me.nextTick(S(Me, t, 1));
    } : be && be.now ? ne = function(t) {
        be.now(S(Me, t, 1));
    } : _e ? (oe = (re = new _e()).port2, re.port1.onmessage = Se, ne = S(oe.postMessage, oe, 1)) : e.addEventListener && "function" == typeof postMessage && !e.importScripts ? (ne = function(t) {
        e.postMessage(t + "", "*");
    }, e.addEventListener("message", Se, !1)) : ne = Pe in s("script") ? function(t) {
        Y.appendChild(s("script"))[Pe] = function() {
            Y.removeChild(this), Me.call(t);
        };
    } : function(t) {
        setTimeout(S(Me, t, 1), 0);
    });
    var je = {
        set: ye,
        clear: ge
    }, Oe = je.set, ke = e.MutationObserver || e.WebKitMutationObserver, Ie = e.process, Le = e.Promise, Te = "process" == L(Ie), Ce = function() {
        var t, n, r, o = function() {
            var e, o;
            for (Te && (e = Ie.domain) && e.exit(); t; ) {
                o = t.fn, t = t.next;
                try {
                    o();
                } catch (mn) {
                    throw t ? r() : n = undefined, mn;
                }
            }
            n = undefined, e && e.enter();
        };
        // Node.js
        if (Te) r = function() {
            Ie.nextTick(o);
        };
        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
         else if (!ke || e.navigator && e.navigator.standalone) if (Le && Le.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var i = Le.resolve(undefined);
            r = function() {
                i.then(o);
            };
        } else r = function() {
            // strange IE + webpack dev server bug - use .call(global)
            Oe.call(e, o);
        }; else {
            var a = !0, c = document.createTextNode("");
            new ke(o).observe(c, {
                characterData: !0
            }), // eslint-disable-line no-new
            r = function() {
                c.data = a = !a;
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
        }), this.resolve = M(e), this.reject = M(n);
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
        } catch (mn) {
            return {
                e: !0,
                v: mn
            };
        }
    }, Ue = e.navigator, Ne = Ue && Ue.userAgent || "", Fe = function(t, e) {
        if (o(t), r(e) && e.constructor === t) return e;
        var n = xe.f(t);
        return (0, n.resolve)(e), n.promise;
    }, Re = function(t, e, n) {
        for (var r in e) P(t, r, e[r], n);
        return t;
    }, Je = ft("species"), Ve = function(t) {
        var n = e[t];
        a && n && !n[Je] && d.f(n, Je, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    }, Be = ft("iterator"), De = !1;
    try {
        var Ge = [ 7 ][Be]();
        Ge["return"] = function() {
            De = !0;
        }, 
        // eslint-disable-next-line no-throw-literal
        Array.from(Ge, function() {
            throw 2;
        });
    } catch (mn) {/* empty */}
    var qe, ze, He, Ke, We = function(t, e) {
        if (!e && !De) return !1;
        var n = !1;
        try {
            var r = [ 7 ], o = r[Be]();
            o.next = function() {
                return {
                    done: n = !0
                };
            }, r[Be] = function() {
                return o;
            }, t(r);
        } catch (mn) {/* empty */}
        return n;
    }, $e = je.set, Qe = Ce(), Xe = "Promise", Ye = e.TypeError, Ze = e.process, tn = Ze && Ze.versions, en = tn && tn.v8 || "", nn = e[Xe], rn = "process" == bt(Ze), on = function() {/* empty */}, an = ze = xe.f, cn = !!function() {
        try {
            // correct subclassing with @@species support
            var t = nn.resolve(1), e = (t.constructor = {})[ft("species")] = function(t) {
                t(on, on);
            };
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (rn || "function" == typeof PromiseRejectionEvent) && t.then(on) instanceof e && 0 !== en.indexOf("6.6") && -1 === Ne.indexOf("Chrome/66");
        } catch (mn) {/* empty */}
    }(), un = function(t) {
        var e;
        return !(!r(t) || "function" != typeof (e = t.then)) && e;
    }, sn = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            Qe(function() {
                for (var r = t._v, o = 1 == t._s, i = 0, a = function(e) {
                    var n, i, a, c = o ? e.ok : e.fail, u = e.resolve, s = e.reject, f = e.domain;
                    try {
                        c ? (o || (2 == t._h && pn(t), t._h = 1), !0 === c ? n = r : (f && f.enter(), n = c(r), 
                        // may throw
                        f && (f.exit(), a = !0)), n === e.promise ? s(Ye("Promise-chain cycle")) : (i = un(n)) ? i.call(n, u, s) : u(n)) : s(r);
                    } catch (mn) {
                        f && !a && f.exit(), s(mn);
                    }
                }; n.length > i; ) a(n[i++]);
 // variable length - can't use forEach
                                t._c = [], t._n = !1, e && !t._h && fn(t);
            });
        }
    }, fn = function(t) {
        $e.call(e, function() {
            var n, r, o, i = t._v, a = ln(t);
            if (a && (n = Ee(function() {
                rn ? Ze.emit("unhandledRejection", i, t) : (r = e.onunhandledrejection) ? r({
                    promise: t,
                    reason: i
                }) : (o = e.console) && o.error && o.error("Unhandled promise rejection", i);
            }), 
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            t._h = rn || ln(t) ? 2 : 1), t._a = undefined, a && n.e) throw n.v;
        });
    }, ln = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
    }, pn = function(t) {
        $e.call(e, function() {
            var n;
            rn ? Ze.emit("rejectionHandled", t) : (n = e.onrejectionhandled) && n({
                promise: t,
                reason: t._v
            });
        });
    }, dn = function(t) {
        var e = this;
        e._d || (e._d = !0, // unwrap
        (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), sn(e, !0));
    }, hn = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            // unwrap
            try {
                if (n === t) throw Ye("Promise can't be resolved itself");
                (e = un(t)) ? Qe(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
 // wrap
                                        try {
                        e.call(t, S(hn, r, 1), S(dn, r, 1));
                    } catch (mn) {
                        dn.call(r, mn);
                    }
                }) : (n._v = t, n._s = 1, sn(n, !1));
            } catch (mn) {
                dn.call({
                    _w: n,
                    _d: !1
                }, mn);
 // wrap
                        }
        }
    };
    // constructor polyfill
    cn || (
    // 25.4.3.1 Promise(executor)
    nn = function Promise(t) {
        ie(this, nn, Xe, "_h"), M(t), qe.call(this);
        try {
            t(S(hn, this, 1), S(dn, this, 1));
        } catch (e) {
            dn.call(this, e);
        }
    }, (
    // eslint-disable-next-line no-unused-vars
    qe = function Promise(t) {
        this._c = [], // <- awaiting reactions
        this._a = undefined, // <- checked in isUnhandled reactions
        this._s = 0, // <- state
        this._d = !1, // <- done
        this._v = undefined, // <- value
        this._h = 0, // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = !1;
    }).prototype = Re(nn.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(t, e) {
            var n = an(he(this, nn));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
            n.domain = rn ? Ze.domain : undefined, this._c.push(n), this._a && this._a.push(n), 
            this._s && sn(this, !1), n.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        "catch": function(t) {
            return this.then(undefined, t);
        }
    }), He = function() {
        var t = new qe();
        this.promise = t, this.resolve = S(hn, t, 1), this.reject = S(dn, t, 1);
    }, xe.f = an = function(t) {
        return t === nn || t === Ke ? new He(t) : ze(t);
    }), k(k.G + k.W + k.F * !cn, {
        Promise: nn
    }), jt(nn, Xe), Ve(Xe), Ke = n[Xe], 
    // statics
    k(k.S + k.F * !cn, Xe, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(t) {
            var e = an(this);
            return (0, e.reject)(t), e.promise;
        }
    }), k(k.S + k.F * !cn, Xe, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(t) {
            return Fe(this, t);
        }
    }), k(k.S + k.F * !(cn && We(function(t) {
        nn.all(t)["catch"](on);
    })), Xe, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all(t) {
            var e = this, n = an(e), r = n.resolve, o = n.reject, i = Ee(function() {
                var n = [], i = 0, a = 1;
                pe(t, !1, function(t) {
                    var c = i++, u = !1;
                    n.push(undefined), a++, e.resolve(t).then(function(t) {
                        u || (u = !0, n[c] = t, --a || r(n));
                    }, o);
                }), --a || r(n);
            });
            return i.e && o(i.v), n.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(t) {
            var e = this, n = an(e), r = n.reject, o = Ee(function() {
                pe(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r);
                });
            });
            return o.e && r(o.v), n.promise;
        }
    });
    n.Promise;
    // object
    /**
	 * Loader 基类
	 */    var vn = function Loader() {};
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
            if (!(t instanceof vn)) throw new TypeError(t + " is not an instance of Loader");
            if ("function" != typeof t.load) throw new TypeError(t.load + " is not a function");
            var e = t.load();
            o.push(e);
        });
        var i = Promise.all(o), a = {
            then: e,
            "catch": n,
            "finally": r
        }, c = {
            then: function then(t) {
                a.then.apply(a, t);
            },
            "catch": function _catch(t) {
                a["catch"](t);
            },
            "finally": function _finally() {
                a["finally"]();
            }
        }, u = i;
        for (var s in a) "function" == typeof a[s] && (u = u[s](c[s]));
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
    /*!
	 * httpJsonp v1.1.1
	 * 
	 * Copyright (c) 2019-present Derek Li
	 * Released under the MIT License - https://choosealicense.com/licenses/mit/
	 * 
	 * https://github.com/iDerekLi/http-jsonp
	 */
    /* eslint-disable */    function _extends$1() {
        return (_extends$1 = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
        }).apply(this, arguments);
    }
    Object.assign(vn.prototype, {
        load: function load() {}
    });
    var mn = "1.1.1";
    /**
	 * deepMerge
	 * @param target  {Object|Array}  merge target
	 * @param objN    {Object|Array}  obj1, obj2, obj3...
	 * @returns target
	 */
    /*
	// example
	var obj = {};
	var obj1 = {
	  str: "hello",
	  o: { a: 2 },
	  arr: [0],
	  arr2: [{ a: 1 }]
	};
	var obj2 = {
	  o: { a: 1, b: 2 },
	  arr: [1, 2],
	  arr2: [{ a: 1, b: 2 }],
	  varUndefined: undefined,
	  varNull: null,
	  varNaN: NaN
	};
	console.log(deepMerge(obj, obj1, obj2));
	*/    function deepMerge(t) {
        function assignItem(e, n) {
            if ("object" == typeof t[n] && "object" == typeof e) t[n] = deepMerge(t[n], e); else if ("object" == typeof e && null !== e) {
                var r = "[object Array]" === Object.prototype.toString.call(e) ? [] : {};
                t[n] = deepMerge(r, e);
            } else t[n] = e;
        }
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        for (var o = 0, i = n.length; o < i; o++) for (var a in n[o]) assignItem(n[o][a], a);
        return t;
    }
    /**
	 * treeAttribute
	 * @param obj
	 * @param attrPath
	 * @param value
	 * @returns {*}
	 */    function treeAttribute(t, e, n) {
        if ("object" != typeof t || null === t) throw Error("obj is not an Object type");
        if (!e) return t;
        var r = "string" == typeof e ? e.split(".") : e, o = r.length, i = r.shift();
        if ("string" != typeof i || "" === i) throw Error("error attribute path");
        return o > 1 ? treeAttribute(t[i], r, n) : n !== undefined ? t[i] = n : t[i];
    }
    /**
	 * 对象转url参数
	 * @param data 格式化对象
	 * @param prefix 前缀 ["?" | "&" | "" | true | false]
	 * @returns {string}
	 */    function includes(t, e) {
        for (var n in e) if (t === e[n]) return !0;
        return !1;
    }
    function queryParams(t, e) {
        void 0 === e && (e = ""), e = "boolean" == typeof e ? "?" : e;
        var n = [], r = function _loop(e) {
            var r = t[e];
            // 去掉为空的参数
                        if (includes(r, [ "", undefined, null ])) return "continue";
            r.constructor === Array ? r.forEach(function(t) {
                n.push(encodeURIComponent(e) + "[]=" + encodeURIComponent(t));
            }) : n.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
        };
        for (var o in t) r(o);
        return n.length ? e + n.join("&") : "";
    }
    var yn = {
        baseURL: "",
        // 将被添加到`url`
        url: "",
        // 是将用于请求的服务器URL
        params: {},
        // 请求服务器url所带参数（包括callback行为）
        callbackProp: !1,
        // [false | callbackProp], 当为false时只作为脚本请求 // 指定`params`中哪一个键是callback行为接口，（如果指定`params`中的键值存在则指定的值覆盖httpJsonp默认随机名称）
        callbackNamespase: "__httpJsonpCallback",
        // window.callbackNamespase
        callbackName: "",
        // callback名称，（callbackName=jp随机数）
        timeout: 6e4,
        // 指定请求超时之前的毫秒数。
        // 脚本属性参数
        scriptAttr: {
            type: "",
            charset: "",
            crossOrigin: null,
            async: !0,
            defer: !1
        },
        keepScriptTag: !1,
        // 请求完成时是否保留脚本标记
        callback: null,
        // 当callback被触发时要调用的函数。
        load: null,
        // 请求加载完成时调用的函数。
        error: null,
        // 请求失败时调用的函数。
        complete: null,
        // 无论请求成功或失败均调用
        then: null,
        "catch": null,
        "finally": null
    }, gn = Date.now();
    /**
	 * Callback nonce.
	 */
    /**
	 * Noop function.
	 */    function noop() {}
    /**
	 * Script event
	 */    var _n = function script_oncallback(t, e, n) {
        var r = treeAttribute(window, t);
        if (r = t && !r ? treeAttribute(window, t, {}) : r || window, !n) return r[e];
        r[e] = n;
    }, bn = function script_onload(t, e) {
        t.onload !== undefined ? t.onload = function() {
            e();
        } : t.onreadystatechange = function() {
            "loaded" != t.readyState && "complete" != t.readyState || (t.onreadystatechange = null, 
            e());
        };
    }, wn = function script_onerror(t, e) {
        t.onerror = e;
    };
    /**
	 * httpJsonp
	 * @param options {Object}
	 * @param [receive]
	 * @returns {{cancel: cancel}}
	 */    function httpJsonp(t, e) {
        "string" == typeof t && (t = {
            url: t
        }), e || (e = {});
        var n, r, o = deepMerge({}, yn, t || {}), i = _extends$1({
            callback: o.callback,
            load: o.load,
            error: o.error,
            complete: o.complete
        }, e), a = o.params, c = "", u = "", s = o.callbackNamespase, f = o.callbackProp;
        function cleanup() {
            o.keepScriptTag || n.parentNode && n.parentNode.removeChild(n), u && _n(s, u, noop), 
            bn(n, noop), wn(n, noop), r && clearTimeout(r);
        }
        function cancel() {
            c = "cancel", _n(s, u) && cleanup();
        }
        f && "" !== a[f] && (
        // create callback
        u = a[f] ? a[f] : o.callbackName || "jp" + gn++, a[f] = s ? s + "." + u : u);
        var l = o.timeout;
        l && (r = setTimeout(function() {
            c = "error", cleanup(), i.error && i.error(new Error("Request Timeout")), i.complete && i.complete();
        }, l));
        // qs
        var p = o.baseURL + o.url;
        p = (p += queryParams(a, ~p.indexOf("?") ? "&" : "?")).replace("?&", "?"), // create script
        n = document.createElement("script");
        var d = o.scriptAttr;
        for (var h in delete d.text, delete d.src, d) n[h] = d[h];
        u ? _n(s, u, function(t) {
            cleanup(), "error" !== c && (c = "callback", i.callback && i.callback(t), i.complete && i.complete());
        }) : bn(n, function() {
            cleanup(), "error" !== c && (c = "load", i.load && i.load(), i.complete && i.complete());
        }), wn(n, function() {
            c = "error", cleanup(), i.error && i.error(new Error("script error")), i.complete && i.complete();
        }), n.src = p;
        var v = document.getElementsByTagName("script")[0] || document.head || document.getElementsByTagName("head")[0];
        return v.parentNode.insertBefore(n, v), {
            cancel: cancel
        };
    }
    httpJsonp.version = mn;
    /**
	 * Deafult Configs
	 */
    var An = {
        protocol: "https:",
        // 资源请求协议
        path: "webapi.amap.com/maps",
        // 资源地址
        key: "",
        // 您申请的key值 (实例化后该属性存在params中)
        v: "1.4.14",
        // 版本号 (实例化后该属性存在params中)
        params: null,
        callbackProp: "callback",
        // callback接口键值
        callbackName: "",
        // 回调函数名 (实例化后该属性存在params中)
        crossOrigin: null,
        // "anonymous" 请求crossOrigin属性
        keepScriptTag: !1
    }, Pn = 
    /* */
    function(t) {
        function AMapJSAPILoader(e) {
            var n;
            n = t.call(this, e) || this;
            var r = Object.assign({}, An, e);
            return n.protocol = r.protocol, n.path = r.path, n.params = _extends({
                key: r.key,
                v: r.v
            }, r.params), n.callbackProp = r.callbackProp, n.callbackName = r.callbackName, 
            n.crossOrigin = r.crossOrigin, n.keepScriptTag = r.keepScriptTag, n;
        }
        /**
	   * 加载资源
	   * @returns {Promise|null}
	   */        _inheritsLoose(AMapJSAPILoader, t);
        var e = AMapJSAPILoader.prototype;
        return e.load = function load() {
            var t = this;
            return this.__loadPromise ? this.__loadPromise : (this.__loadPromise = new Promise(function(e, n) {
                var r = function callback() {
                    t.__loadPromise = null, e(window.AMap);
                };
                if (t.checkCorrectness()) return r();
                httpJsonp({
                    url: t.protocol + ("//" === t.path.slice(0, 2) ? t.path : "//" + t.path),
                    params: t.params,
                    callbackProp: t.callbackProp,
                    callbackName: t.callbackName,
                    scriptAttr: {
                        async: !0,
                        crossOrigin: t.crossOrigin
                    },
                    keepScriptTag: t.keepScriptTag,
                    callback: r,
                    error: function error(e) {
                        t.__loadPromise = null, n(e);
                    }
                });
            }), this.__loadPromise);
        }
        /**
	   * 检查AMapJSAPI正确性
	   */ , e.checkCorrectness = function checkCorrectness() {
            if (!window.AMap && "object" != typeof window.AMap) return !1;
            for (var t = 0, e = [ "v", "Pixel", "LngLat", "Size", "Bounds", "Map" ]; t < e.length; t++) {
                if (!(e[t] in window.AMap)) return !1;
            }
            return this.versionCompare(window.AMap.v, this.params.v);
        }
        /**
	   * 版本对比
	   */ , e.versionCompare = function versionCompare(t, e) {
            return t === e;
        }, e.setProtocol = function setProtocol(t) {
            return this.protocol = t, this;
        }, e.setPath = function setPath(t) {
            return this.path = t, this;
        }, e.setKey = function setKey(t) {
            return this.params && (this.params.key = t), this;
        }, e.setV = function setV(t) {
            return this.params && (this.params.v = t), this;
        }, e.setParams = function setParams(t) {
            return this.params = t, this;
        }, e.setCrossOrigin = function setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }, AMapJSAPILoader;
    }(vn), Mn = {
        protocol: "https:",
        // 请求UI组件库资源协议
        path: "webapi.amap.com/ui/{v}/main-async.js",
        // 资源地址，异步版本main-async.js
        v: "1.0",
        // UI组件库版本号
        initAMapUI: "initAMapUI",
        // 初始化AMapUI钩子（默认initAMapUI = window.initAMapUI）
        isAutoInitAMapUI: !1,
        // 是否加载完成自动调用initAMapUI初始化, (开启则返回AMapUI实例。关闭则返回initAMapUI函数，且需手动调用该方法并返回AMapUI实例。注意：当开启时请确保优先加载AMap JSAPI)
        AMapUIProtocol: undefined,
        // 请求UI组件协议，默认组件加载优先使用与应用页面相同的协议(https:下用https:，http:或者file:下用http:)，如果需要强制https协议（比如file:场景下）
        crossOrigin: "anonymous",
        // 请求crossOrigin属性
        keepScriptTag: !1
    }, Sn = 
    /* */
    function(t) {
        function AMapUILoader(e) {
            var n;
            n = t.call(this, e) || this;
            var r = Object.assign({}, Mn, e);
            return n.v = r.v, n.protocol = r.protocol, n.path = r.path, n.AMapUIProtocol = r.AMapUIProtocol, 
            n.initAMapUI = r.initAMapUI, n.isAutoInitAMapUI = r.isAutoInitAMapUI, n.crossOrigin = r.crossOrigin, 
            n.keepScriptTag = r.keepScriptTag, // 设置强制加载协议
            "string" == typeof n.AMapUIProtocol && n.setAMapUIProtocol(n.AMapUIProtocol), n;
        }
        /**
	   * 加载资源
	   * @returns {Promise|null}
	   */        _inheritsLoose(AMapUILoader, t);
        var e = AMapUILoader.prototype;
        return e.load = function load() {
            var t = this;
            return this.__loadPromise ? this.__loadPromise : (this.__loadPromise = new Promise(function(e, n) {
                var r = function load() {
                    t.__loadPromise = null;
                    var n = function initAMap() {
                        return t.checkCorrectness() ? window.AMapUI : (window[t.initAMapUI](), window.AMapUI);
                    };
                    e(t.isAutoInitAMapUI ? n() : n);
                };
                if (t.checkCorrectness()) return r();
                var o = t.protocol, i = t.v, a = t.path.replace("{v}", i);
                httpJsonp({
                    url: o + (a = "//" === a.replace("{v}", i).slice(0, 2) ? a : "//" + a),
                    params: t.params,
                    callbackProp: !1,
                    scriptAttr: {
                        async: !0,
                        crossOrigin: t.crossOrigin
                    },
                    keepScriptTag: t.keepScriptTag,
                    load: r,
                    error: function error(e) {
                        t.__loadPromise = null, n(e);
                    }
                });
            }), this.__loadPromise);
        }
        /**
	   * 检查AMapUI正确性
	   */ , e.checkCorrectness = function checkCorrectness() {
            if (!window.AMapUI) return !1;
            for (var t = 0, e = [ "libConf", "uiMods", "docProtocol", "version" ]; t < e.length; t++) {
                if (!(e[t] in window.AMapUI)) return !1;
            }
            return this.versionCompare(window.AMapUI.libConf.mainVersion, this.v);
        }, e.versionCompare = function versionCompare(t, e) {
            return t === e;
        }, e.setProtocol = function setProtocol(t) {
            return this.protocol = t, this;
        }, e.setPath = function setPath(t) {
            return this.path = t, this;
        }, e.setV = function setV(t) {
            return this.v = t, this;
        }
        /**
	   * UI组件加载协议
	   * @param AMapUIProtocol ["https:" | "http:"]
	   * @returns {AMapUILoader}
	   */ , e.setAMapUIProtocol = function setAMapUIProtocol(t) {
            var e = "https:" === t ? "https:" : "http:";
            return window.AMapUIProtocol = e, this;
        }, e.setCrossOrigin = function setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }, AMapUILoader;
    }(vn), jn = "1.1.1", On = {
        version: jn,
        Loader: vn,
        load: load,
        AMapJSAPILoader: Pn,
        AMapUILoader: Sn
    };
    /**
	 * AMapJSAPILoader
	 */    t.AMapJSAPILoader = Pn, t.AMapUILoader = Sn, t.Loader = vn, t["default"] = On, 
    t.load = load, t.version = jn, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});
