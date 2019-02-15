/*!
 * AMapJS v1.0.0
 * 
 * Copyright (c) 2018-present Derek Li
 * Released under the MIT License - https://choosealicense.com/licenses/mit/
 * 
 * https://github.com/iDerekLi/amap-js
 */
!function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define([ "exports" ], n) : n((t = t || self).AMapJS = {});
}(this, function(t) {
    "use strict";
    function n(t, n) {
        return t(n = {
            exports: {}
        }, n.exports), n.exports;
    }
    var e = n(function(t) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
 // eslint-disable-line no-undef
        }), r = n(function(t) {
        var n = t.exports = {
            version: "2.6.3"
        };
        "number" == typeof __e && (__e = n);
 // eslint-disable-line no-undef
        }), o = (r.version, function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
    }), i = function(t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t;
    }, c = function(t) {
        try {
            return !!t();
        } catch (je) {
            return !0;
        }
    }, a = !c(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), u = e.document, s = o(u) && o(u.createElement), f = function(t) {
        return s ? u.createElement(t) : {};
    }, l = !a && !c(function() {
        return 7 != Object.defineProperty(f("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), p = function(t, n) {
        if (!o(t)) return t;
        var e, r;
        if (n && "function" == typeof (e = t.toString) && !o(r = e.call(t))) return r;
        if ("function" == typeof (e = t.valueOf) && !o(r = e.call(t))) return r;
        if (!n && "function" == typeof (e = t.toString) && !o(r = e.call(t))) return r;
        throw TypeError("Can't convert object to primitive value");
    }, h = Object.defineProperty, d = {
        f: a ? Object.defineProperty : function(t, n, e) {
            if (i(t), n = p(n, !0), i(e), l) try {
                return h(t, n, e);
            } catch (je) {/* empty */}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
        }
    }, v = function(t, n) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
        };
    }, y = a ? function(t, n, e) {
        return d.f(t, n, v(1, e));
    } : function(t, n, e) {
        return t[n] = e, t;
    }, m = {}.hasOwnProperty, g = function(t, n) {
        return m.call(t, n);
    }, b = 0, _ = Math.random(), w = function(t) {
        return "Symbol(".concat(t === undefined ? "" : t, ")_", (++b + _).toString(36));
    }, P = !1, O = n(function(t) {
        var n = "__core-js_shared__", o = e[n] || (e[n] = {});
        (t.exports = function(t, n) {
            return o[t] || (o[t] = n !== undefined ? n : {});
        })("versions", []).push({
            version: r.version,
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    }), S = O("native-function-to-string", Function.toString), A = n(function(t) {
        var n = w("src"), o = "toString", i = ("" + S).split(o);
        r.inspectSource = function(t) {
            return S.call(t);
        }, (t.exports = function(t, r, o, c) {
            var a = "function" == typeof o;
            a && (g(o, "name") || y(o, "name", r)), t[r] !== o && (a && (g(o, n) || y(o, n, t[r] ? "" + t[r] : i.join(String(r)))), 
            t === e ? t[r] = o : c ? t[r] ? t[r] = o : y(t, r, o) : (delete t[r], y(t, r, o)));
        })(Function.prototype, o, function() {
            return "function" == typeof this && this[n] || S.call(this);
        });
    }), j = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
    }, k = function(t, n, e) {
        if (j(t), n === undefined) return t;
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
    }, M = "prototype", T = function(t, n, o) {
        var i, c, a, u, s = t & T.F, f = t & T.G, l = t & T.S, p = t & T.P, h = t & T.B, d = f ? e : l ? e[n] || (e[n] = {}) : (e[n] || {})[M], v = f ? r : r[n] || (r[n] = {}), m = v[M] || (v[M] = {});
        for (i in f && (o = n), o) 
        // contains in native
        // export native or passed
        a = ((c = !s && d && d[i] !== undefined) ? d : o)[i], 
        // bind timers to global for call from export context
        u = h && c ? k(a, e) : p && "function" == typeof a ? k(Function.call, a) : a, 
        // extend global
        d && A(d, i, a, t & T.U), 
        // export
        v[i] != a && y(v, i, u), p && m[i] != a && (m[i] = a);
    };
    e.core = r, 
    // type bitmap
    T.F = 1, // forced
    T.G = 2, // global
    T.S = 4, // static
    T.P = 8, // proto
    T.B = 16, // bind
    T.W = 32, // wrap
    T.U = 64, // safe
    T.R = 128;
    // real proto method for `library`
    var I = T, L = {}.toString, E = function(t) {
        return L.call(t).slice(8, -1);
    }, C = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == E(t) ? t.split("") : Object(t);
    }, U = function(t) {
        if (t == undefined) throw TypeError("Can't call method on  " + t);
        return t;
    }, x = function(t) {
        return Object(U(t));
    }, N = Math.ceil, F = Math.floor, R = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? F : N)(t);
    }, V = Math.min, B = function(t) {
        return t > 0 ? V(R(t), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
        }, D = Array.isArray || function(t) {
        return "Array" == E(t);
    }, G = n(function(t) {
        var n = O("wks"), r = e.Symbol, o = "function" == typeof r;
        (t.exports = function(t) {
            return n[t] || (n[t] = o && r[t] || (o ? r : w)("Symbol." + t));
        }).store = n;
    }), z = G("species"), H = function(t) {
        var n;
        return D(t) && (
        // cross-realm fallback
        "function" != typeof (n = t.constructor) || n !== Array && !D(n.prototype) || (n = undefined), 
        o(n) && null === (n = n[z]) && (n = undefined)), n === undefined ? Array : n;
    }, J = function(t, n) {
        return new (H(t))(n);
    }, W = function(t, n) {
        return !!t && c(function() {
            // eslint-disable-next-line no-useless-call
            n ? t.call(null, function() {/* empty */}, 1) : t.call(null);
        });
    }, q = function(t, n) {
        var e = 1 == t, r = 2 == t, o = 3 == t, i = 4 == t, c = 6 == t, a = 5 == t || c, u = n || J;
        return function(n, s, f) {
            for (var l, p, h = x(n), d = C(h), v = k(s, f, 3), y = B(d.length), m = 0, g = e ? u(n, y) : r ? u(n, 0) : undefined; y > m; m++) if ((a || m in d) && (p = v(l = d[m], m, h), 
            t)) if (e) g[m] = p; // map
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
    }(0), K = W([].forEach, !0);
    I(I.P + I.F * !K, "Array", {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function(t /* , thisArg */) {
            return q(this, t, arguments[1]);
        }
    }), 
    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    I(I.S, "Array", {
        isArray: D
    });
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var Q = function(t) {
        return C(U(t));
    }, X = Math.max, Y = Math.min, Z = function(t, n) {
        return (t = R(t)) < 0 ? X(t + n, 0) : Y(t, n);
    }, $ = function(t) {
        return function(n, e, r) {
            var o, i = Q(n), c = B(i.length), a = Z(r, c);
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (t && e != e) {
                for (;c > a; ) 
                // eslint-disable-next-line no-self-compare
                if ((o = i[a++]) != o) return !0;
                // Array#indexOf ignores holes, Array#includes - not
                        } else for (;c > a; a++) if ((t || a in i) && i[a] === e) return t || a || 0;
            return !t && -1;
        };
    }, tt = O("keys"), nt = function(t) {
        return tt[t] || (tt[t] = w(t));
    }, et = $(!1), rt = nt("IE_PROTO"), ot = function(t, n) {
        var e, r = Q(t), o = 0, i = [];
        for (e in r) e != rt && g(r, e) && i.push(e);
        // Don't enum bug & hidden keys
                for (;n.length > o; ) g(r, e = n[o++]) && (~et(i, e) || i.push(e));
        return i;
    }, it = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), ct = Object.keys || function(t) {
        return ot(t, it);
    }, at = a ? Object.defineProperties : function(t, n) {
        i(t);
        for (var e, r = ct(n), o = r.length, c = 0; o > c; ) d.f(t, e = r[c++], n[e]);
        return t;
    };
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    I(I.S + I.F * !a, "Object", {
        defineProperties: at
    }), 
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    I(I.S + I.F * !a, "Object", {
        defineProperty: d.f
    });
    var ut = e.document, st = ut && ut.documentElement, ft = nt("IE_PROTO"), lt = function() {/* empty */}, pt = "prototype", ht = function() {
        // Thrash, waste and sodomy: IE GC bug
        var t, n = f("iframe"), e = it.length, r = "<", o = ">";
        for (n.style.display = "none", st.appendChild(n), n.src = "javascript:", (// eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        t = n.contentWindow.document).open(), t.write(r + "script" + o + "document.F=Object" + r + "/script" + o), 
        t.close(), ht = t.F; e--; ) delete ht[pt][it[e]];
        return ht();
    }, dt = Object.create || function(t, n) {
        var e;
        return null !== t ? (lt[pt] = i(t), e = new lt(), lt[pt] = null, 
        // add "__proto__" for Object.getPrototypeOf polyfill
        e[ft] = t) : e = ht(), n === undefined ? e : at(e, n);
    };
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    I(I.S, "Object", {
        create: dt
    });
    var vt = {
        f: Object.getOwnPropertySymbols
    }, yt = {
        f: {}.propertyIsEnumerable
    }, mt = Object.assign, gt = !mt || c(function() {
        var t = {}, n = {}, e = Symbol(), r = "abcdefghijklmnopqrst";
        return t[e] = 7, r.split("").forEach(function(t) {
            n[t] = t;
        }), 7 != mt({}, t)[e] || Object.keys(mt({}, n)).join("") != r;
    }) ? function(t, n) {
        for (// eslint-disable-line no-unused-vars
        var e = x(t), r = arguments.length, o = 1, i = vt.f, c = yt.f; r > o; ) for (var a, u = C(arguments[o++]), s = i ? ct(u).concat(i(u)) : ct(u), f = s.length, l = 0; f > l; ) c.call(u, a = s[l++]) && (e[a] = u[a]);
        return e;
    } : mt;
    // 19.1.3.1 Object.assign(target, source)
    I(I.S + I.F, "Object", {
        assign: gt
    });
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var bt = G("toStringTag"), _t = "Arguments" == E(function() {
        return arguments;
    }()), wt = function(t, n) {
        try {
            return t[n];
        } catch (je) {/* empty */}
    }, Pt = function(t) {
        var n, e, r;
        return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (e = wt(n = Object(t), bt)) ? e : _t ? E(n) : "Object" == (r = E(n)) && "function" == typeof n.callee ? "Arguments" : r;
    }, Ot = {};
    // ES3 wrong here
        Ot[G("toStringTag")] = "z", Ot + "" != "[object z]" && A(Object.prototype, "toString", function() {
        return "[object " + Pt(this) + "]";
    }, !0);
    // true  -> String#at
    // false -> String#codePointAt
    var St = function(t) {
        return function(n, e) {
            var r, o, i = String(U(n)), c = R(e), a = i.length;
            return c < 0 || c >= a ? t ? "" : undefined : (r = i.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === a || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? t ? i.charAt(c) : r : t ? i.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536;
        };
    }, At = {}, jt = d.f, kt = G("toStringTag"), Mt = function(t, n, e) {
        t && !g(t = e ? t : t.prototype, kt) && jt(t, kt, {
            configurable: !0,
            value: n
        });
    }, Tt = {};
    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    y(Tt, G("iterator"), function() {
        return this;
    });
    var It = function(t, n, e) {
        t.prototype = dt(Tt, {
            next: v(1, e)
        }), Mt(t, n + " Iterator");
    }, Lt = nt("IE_PROTO"), Et = Object.prototype, Ct = Object.getPrototypeOf || function(t) {
        return t = x(t), g(t, Lt) ? t[Lt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Et : null;
    }, Ut = G("iterator"), xt = !([].keys && "next" in [].keys()), Nt = "@@iterator", Ft = "keys", Rt = "values", Vt = function() {
        return this;
    }, Bt = function(t, n, e, r, o, i, c) {
        It(e, n, r);
        var a, u, s, f = function(t) {
            if (!xt && t in d) return d[t];
            switch (t) {
              case Ft:
              case Rt:
                return function() {
                    return new e(this, t);
                };
            }
            return function() {
                return new e(this, t);
            };
        }, l = n + " Iterator", p = o == Rt, h = !1, d = t.prototype, v = d[Ut] || d[Nt] || o && d[o], m = v || f(o), g = o ? p ? f("entries") : m : undefined, b = "Array" == n && d.entries || v;
        if (
        // Fix native
        b && (s = Ct(b.call(new t()))) !== Object.prototype && s.next && (
        // Set @@toStringTag to native iterators
        Mt(s, l, !0), 
        // fix for some old engines
        "function" != typeof s[Ut] && y(s, Ut, Vt)), 
        // fix Array#{values, @@iterator}.name in V8 / FF
        p && v && v.name !== Rt && (h = !0, m = function() {
            return v.call(this);
        }), 
        // Define iterator
        (xt || h || !d[Ut]) && y(d, Ut, m), 
        // Plug for library
        At[n] = m, At[l] = Vt, o) if (a = {
            values: p ? m : f(Rt),
            keys: i ? m : f(Ft),
            entries: g
        }, c) for (u in a) u in d || A(d, u, a[u]); else I(I.P + I.F * (xt || h), n, a);
        return a;
    }, Dt = St(!0);
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        // 21.1.3.27 String.prototype[@@iterator]()
    Bt(String, "String", function(t) {
        this._t = String(t), // target
        this._i = 0;
    }, function() {
        var t, n = this._t, e = this._i;
        return e >= n.length ? {
            value: undefined,
            done: !0
        } : (t = Dt(n, e), this._i += t.length, {
            value: t,
            done: !1
        });
    });
    // 22.1.3.31 Array.prototype[@@unscopables]
    var Gt = G("unscopables"), zt = Array.prototype;
    zt[Gt] == undefined && y(zt, Gt, {});
    var Ht = function(t) {
        zt[Gt][t] = !0;
    }, Jt = function(t, n) {
        return {
            value: n,
            done: !!t
        };
    }, Wt = Bt(Array, "Array", function(t, n) {
        this._t = Q(t), // target
        this._i = 0, // next index
        this._k = n;
    }, function() {
        var t = this._t, n = this._k, e = this._i++;
        return !t || e >= t.length ? (this._t = undefined, Jt(1)) : Jt(0, "keys" == n ? e : "values" == n ? t[e] : [ e, t[e] ]);
    }, "values");
    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    At.Arguments = At.Array, Ht("keys"), Ht("values"), Ht("entries");
    for (var qt = G("iterator"), Kt = G("toStringTag"), Qt = At.Array, Xt = {
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
    }, Yt = ct(Xt), Zt = 0; Zt < Yt.length; Zt++) {
        var $t, tn = Yt[Zt], nn = Xt[tn], en = e[tn], rn = en && en.prototype;
        if (rn && (rn[qt] || y(rn, qt, Qt), rn[Kt] || y(rn, Kt, tn), At[tn] = Qt, nn)) for ($t in Wt) rn[$t] || A(rn, $t, Wt[$t], !0);
    }
    var on, cn, an, un = function(t, n, e, r) {
        if (!(t instanceof n) || r !== undefined && r in t) throw TypeError(e + ": incorrect invocation!");
        return t;
    }, sn = function(t, n, e, r) {
        try {
            return r ? n(i(e)[0], e[1]) : n(e);
            // 7.4.6 IteratorClose(iterator, completion)
                } catch (je) {
            var o = t["return"];
            throw o !== undefined && i(o.call(t)), je;
        }
    }, fn = G("iterator"), ln = Array.prototype, pn = function(t) {
        return t !== undefined && (At.Array === t || ln[fn] === t);
    }, hn = G("iterator"), dn = r.getIteratorMethod = function(t) {
        if (t != undefined) return t[hn] || t["@@iterator"] || At[Pt(t)];
    }, vn = n(function(t) {
        var n = {}, e = {}, r = t.exports = function(t, r, o, c, a) {
            var u, s, f, l, p = a ? function() {
                return t;
            } : dn(t), h = k(o, c, r ? 2 : 1), d = 0;
            if ("function" != typeof p) throw TypeError(t + " is not iterable!");
            // fast case for arrays with default iterator
                        if (pn(p)) {
                for (u = B(t.length); u > d; d++) if ((l = r ? h(i(s = t[d])[0], s[1]) : h(t[d])) === n || l === e) return l;
            } else for (f = p.call(t); !(s = f.next()).done; ) if ((l = sn(f, h, s.value, r)) === n || l === e) return l;
        };
        r.BREAK = n, r.RETURN = e;
    }), yn = G("species"), mn = function(t, n) {
        var e, r = i(t).constructor;
        return r === undefined || (e = i(r)[yn]) == undefined ? n : j(e);
    }, gn = function(t, n, e) {
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
    }, bn = e.process, _n = e.setImmediate, wn = e.clearImmediate, Pn = e.MessageChannel, On = e.Dispatch, Sn = 0, An = {}, jn = "onreadystatechange", kn = function() {
        var t = +this;
        // eslint-disable-next-line no-prototype-builtins
                if (An.hasOwnProperty(t)) {
            var n = An[t];
            delete An[t], n();
        }
    }, Mn = function(t) {
        kn.call(t.data);
    };
    // call something on iterator step with safe closing on error
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    _n && wn || (_n = function(t) {
        for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
        return An[++Sn] = function() {
            // eslint-disable-next-line no-new-func
            gn("function" == typeof t ? t : Function(t), n);
        }, on(Sn), Sn;
    }, wn = function(t) {
        delete An[t];
    }, 
    // Node.js 0.8-
    "process" == E(bn) ? on = function(t) {
        bn.nextTick(k(kn, t, 1));
    } : On && On.now ? on = function(t) {
        On.now(k(kn, t, 1));
    } : Pn ? (an = (cn = new Pn()).port2, cn.port1.onmessage = Mn, on = k(an.postMessage, an, 1)) : e.addEventListener && "function" == typeof postMessage && !e.importScripts ? (on = function(t) {
        e.postMessage(t + "", "*");
    }, e.addEventListener("message", Mn, !1)) : on = jn in f("script") ? function(t) {
        st.appendChild(f("script"))[jn] = function() {
            st.removeChild(this), kn.call(t);
        };
    } : function(t) {
        setTimeout(k(kn, t, 1), 0);
    });
    var Tn = {
        set: _n,
        clear: wn
    }, In = Tn.set, Ln = e.MutationObserver || e.WebKitMutationObserver, En = e.process, Cn = e.Promise, Un = "process" == E(En), xn = function() {
        var t, n, r, o = function() {
            var e, o;
            for (Un && (e = En.domain) && e.exit(); t; ) {
                o = t.fn, t = t.next;
                try {
                    o();
                } catch (je) {
                    throw t ? r() : n = undefined, je;
                }
            }
            n = undefined, e && e.enter();
        };
        // Node.js
        if (Un) r = function() {
            En.nextTick(o);
        };
        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
         else if (!Ln || e.navigator && e.navigator.standalone) if (Cn && Cn.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var i = Cn.resolve(undefined);
            r = function() {
                i.then(o);
            };
        } else r = function() {
            // strange IE + webpack dev server bug - use .call(global)
            In.call(e, o);
        }; else {
            var c = !0, a = document.createTextNode("");
            new Ln(o).observe(a, {
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
    function Nn(t) {
        var n, e;
        this.promise = new t(function(t, r) {
            if (n !== undefined || e !== undefined) throw TypeError("Bad Promise constructor");
            n = t, e = r;
        }), this.resolve = j(n), this.reject = j(e);
    }
    var Fn = {
        f: function(t) {
            return new Nn(t);
        }
    }, Rn = function(t) {
        try {
            return {
                e: !1,
                v: t()
            };
        } catch (je) {
            return {
                e: !0,
                v: je
            };
        }
    }, Vn = e.navigator, Bn = Vn && Vn.userAgent || "", Dn = function(t, n) {
        if (i(t), o(n) && n.constructor === t) return n;
        var e = Fn.f(t);
        return (0, e.resolve)(n), e.promise;
    }, Gn = function(t, n, e) {
        for (var r in n) A(t, r, n[r], e);
        return t;
    }, zn = G("species"), Hn = function(t) {
        var n = e[t];
        a && n && !n[zn] && d.f(n, zn, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    }, Jn = G("iterator"), Wn = !1;
    try {
        [ 7 ][Jn]()["return"] = function() {
            Wn = !0;
        };
    } catch (je) {/* empty */}
    var qn, Kn, Qn, Xn, Yn = function(t, n) {
        if (!n && !Wn) return !1;
        var e = !1;
        try {
            var r = [ 7 ], o = r[Jn]();
            o.next = function() {
                return {
                    done: e = !0
                };
            }, r[Jn] = function() {
                return o;
            }, t(r);
        } catch (je) {/* empty */}
        return e;
    }, Zn = Tn.set, $n = xn(), te = "Promise", ne = e.TypeError, ee = e.process, re = ee && ee.versions, oe = re && re.v8 || "", ie = e[te], ce = "process" == Pt(ee), ae = function() {/* empty */}, ue = Kn = Fn.f, se = !!function() {
        try {
            // correct subclassing with @@species support
            var t = ie.resolve(1), n = (t.constructor = {})[G("species")] = function(t) {
                t(ae, ae);
            };
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (ce || "function" == typeof PromiseRejectionEvent) && t.then(ae) instanceof n && 0 !== oe.indexOf("6.6") && -1 === Bn.indexOf("Chrome/66");
        } catch (je) {/* empty */}
    }(), fe = function(t) {
        var n;
        return !(!o(t) || "function" != typeof (n = t.then)) && n;
    }, le = function(t, n) {
        if (!t._n) {
            t._n = !0;
            var e = t._c;
            $n(function() {
                for (var r = t._v, o = 1 == t._s, i = 0, c = function(n) {
                    var e, i, c, a = o ? n.ok : n.fail, u = n.resolve, s = n.reject, f = n.domain;
                    try {
                        a ? (o || (2 == t._h && de(t), t._h = 1), !0 === a ? e = r : (f && f.enter(), e = a(r), 
                        // may throw
                        f && (f.exit(), c = !0)), e === n.promise ? s(ne("Promise-chain cycle")) : (i = fe(e)) ? i.call(e, u, s) : u(e)) : s(r);
                    } catch (je) {
                        f && !c && f.exit(), s(je);
                    }
                }; e.length > i; ) c(e[i++]);
 // variable length - can't use forEach
                                t._c = [], t._n = !1, n && !t._h && pe(t);
            });
        }
    }, pe = function(t) {
        Zn.call(e, function() {
            var n, r, o, i = t._v, c = he(t);
            if (c && (n = Rn(function() {
                ce ? ee.emit("unhandledRejection", i, t) : (r = e.onunhandledrejection) ? r({
                    promise: t,
                    reason: i
                }) : (o = e.console) && o.error && o.error("Unhandled promise rejection", i);
            }), 
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            t._h = ce || he(t) ? 2 : 1), t._a = undefined, c && n.e) throw n.v;
        });
    }, he = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
    }, de = function(t) {
        Zn.call(e, function() {
            var n;
            ce ? ee.emit("rejectionHandled", t) : (n = e.onrejectionhandled) && n({
                promise: t,
                reason: t._v
            });
        });
    }, ve = function(t) {
        var n = this;
        n._d || (n._d = !0, // unwrap
        (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), le(n, !0));
    }, ye = function(t) {
        var n, e = this;
        if (!e._d) {
            e._d = !0, e = e._w || e;
            // unwrap
            try {
                if (e === t) throw ne("Promise can't be resolved itself");
                (n = fe(t)) ? $n(function() {
                    var r = {
                        _w: e,
                        _d: !1
                    };
 // wrap
                                        try {
                        n.call(t, k(ye, r, 1), k(ve, r, 1));
                    } catch (je) {
                        ve.call(r, je);
                    }
                }) : (e._v = t, e._s = 1, le(e, !1));
            } catch (je) {
                ve.call({
                    _w: e,
                    _d: !1
                }, je);
 // wrap
                        }
        }
    };
    // constructor polyfill
    se || (
    // 25.4.3.1 Promise(executor)
    ie = function(t) {
        un(this, ie, te, "_h"), j(t), qn.call(this);
        try {
            t(k(ye, this, 1), k(ve, this, 1));
        } catch (n) {
            ve.call(this, n);
        }
    }, (
    // eslint-disable-next-line no-unused-vars
    qn = function(t) {
        this._c = [], // <- awaiting reactions
        this._a = undefined, // <- checked in isUnhandled reactions
        this._s = 0, // <- state
        this._d = !1, // <- done
        this._v = undefined, // <- value
        this._h = 0, // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = !1;
    }).prototype = Gn(ie.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function(t, n) {
            var e = ue(mn(this, ie));
            return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, 
            e.domain = ce ? ee.domain : undefined, this._c.push(e), this._a && this._a.push(e), 
            this._s && le(this, !1), e.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        "catch": function(t) {
            return this.then(undefined, t);
        }
    }), Qn = function() {
        var t = new qn();
        this.promise = t, this.resolve = k(ye, t, 1), this.reject = k(ve, t, 1);
    }, Fn.f = ue = function(t) {
        return t === ie || t === Xn ? new Qn(t) : Kn(t);
    }), I(I.G + I.W + I.F * !se, {
        Promise: ie
    }), Mt(ie, te), Hn(te), Xn = r[te], 
    // statics
    I(I.S + I.F * !se, te, {
        // 25.4.4.5 Promise.reject(r)
        reject: function(t) {
            var n = ue(this);
            return (0, n.reject)(t), n.promise;
        }
    }), I(I.S + I.F * (P || !se), te, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function(t) {
            return Dn(P && this === Xn ? ie : this, t);
        }
    }), I(I.S + I.F * !(se && Yn(function(t) {
        ie.all(t)["catch"](ae);
    })), te, {
        // 25.4.4.1 Promise.all(iterable)
        all: function(t) {
            var n = this, e = ue(n), r = e.resolve, o = e.reject, i = Rn(function() {
                var e = [], i = 0, c = 1;
                vn(t, !1, function(t) {
                    var a = i++, u = !1;
                    e.push(undefined), c++, n.resolve(t).then(function(t) {
                        u || (u = !0, e[a] = t, --c || r(e));
                    }, o);
                }), --c || r(e);
            });
            return i.e && o(i.v), e.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function(t) {
            var n = this, e = ue(n), r = e.reject, o = Rn(function() {
                vn(t, !1, function(t) {
                    n.resolve(t).then(e.resolve, r);
                });
            });
            return o.e && r(o.v), e.promise;
        }
    });
    r.Promise;
    // array
    /**
	 * Loader 基类
	 */    var me = function() {};
    /**
	 * 加载loader
	 * @param loaders
	 * @param callbackThen 可选参数 通过回调方式返回，结果集为(a, b, c...)
	 * @param callbackCatch 可选参数
	 * @param callbackFinally 可选参数
	 * @returns {Promise<any[]>} 结果集为([a, b, c...])
	 */
    function ge(t, n, e, r) {
        var o = [];
        (Array.isArray(t) ? t : [ t ]).forEach(function(t) {
            if (!(t instanceof me)) throw new TypeError(t + " is not an instance of Loader");
            if ("function" != typeof t.load) throw new TypeError(t.load + " is not a function");
            var n = t.load();
            o.push(n);
        });
        var i = Promise.all(o), c = {
            then: n,
            "catch": e,
            "finally": r
        }, a = {
            then: function(t) {
                c.then.apply(c, t);
            },
            "catch": function(t) {
                c["catch"](t);
            },
            "finally": function() {
                c["finally"]();
            }
        }, u = i;
        for (var s in c) "function" == typeof c[s] && (u = u[s](a[s]));
        return i;
    }
    function be() {
        return (be = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
        }).apply(this, arguments);
    }
    function _e(t, n) {
        t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
    }
    /*!
	 * httpJsonp v1.1.0
	 * 
	 * Copyright (c) 2019-present Derek Li
	 * Released under the MIT License - https://choosealicense.com/licenses/mit/
	 * 
	 * https://github.com/iDerekLi/http-jsonp
	 */
    /* eslint-disable */    function we() {
        return (we = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
        }).apply(this, arguments);
    }
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
	*/    function Pe(t) {
        function n(n, e) {
            if ("object" == typeof t[e] && "object" == typeof n) t[e] = Pe(t[e], n); else if ("object" == typeof n && null !== n) {
                var r = "[object Array]" === Object.prototype.toString.call(n) ? [] : {};
                t[e] = Pe(r, n);
            } else t[e] = n;
        }
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
        for (var i = 0, c = r.length; i < c; i++) for (var a in r[i]) n(r[i][a], a);
        return t;
    }
    /**
	 * treeAttribute
	 * @param obj
	 * @param attrPath
	 * @param value
	 * @returns {*}
	 */    function Oe(t, n, e) {
        if ("object" != typeof t || null === t) throw Error("obj is not an Object type");
        if (!n) return t;
        var r = "string" == typeof n ? n.split(".") : n, o = r.length, i = r.shift();
        if ("string" != typeof i || "" === i) throw Error("error attribute path");
        return o > 1 ? Oe(t[i], r, e) : e !== undefined ? t[i] = e : t[i];
    }
    /**
	 * 对象转url参数
	 * @param data 格式化对象
	 * @param prefix 前缀 ["?" | "&" | "" | true | false]
	 * @returns {string}
	 */    function Se(t, n) {
        for (var e in n) if (t === n[e]) return !0;
        return !1;
    }
    function Ae(t, n) {
        void 0 === n && (n = ""), n = "boolean" == typeof n ? "?" : n;
        var e = [], r = function(n) {
            var r = t[n];
            // 去掉为空的参数
                        if (Se(r, [ "", undefined, null ])) return "continue";
            r.constructor === Array ? r.forEach(function(t) {
                e.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(t));
            }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
        };
        for (var o in t) r(o);
        return e.length ? n + e.join("&") : "";
    }
    Object.assign(me.prototype, {
        load: function() {}
    });
    var je = {
        baseURL: "",
        // 将被添加到`url`
        url: "",
        // 是将用于请求的服务器URL
        params: {},
        // 请求服务器url所带参数（包括callback行为）
        callbackProp: "callback",
        // 指定`params`中哪一个键是callback行为接口，（如果指定`params`中的键值存在则指定的值覆盖httpJsonp默认随机名称）
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
        error: null
    }, ke = Date.now();
    /**
	 * Callback nonce.
	 */
    /**
	 * Noop function.
	 */    function Me() {}
    /**
	 * Script event
	 */    var Te = function(t, n, e) {
        var r = Oe(window, t);
        if (r = t && !r ? Oe(window, t, {}) : r || window, !e) return r[n];
        r[n] = e;
    }, Ie = function(t, n) {
        t.onload !== undefined ? t.onload = function() {
            n();
        } : t.onreadystatechange = function() {
            "loaded" != t.readyState && "complete" != t.readyState || (t.onreadystatechange = null, 
            n());
        };
    }, Le = function(t, n) {
        t.onerror = n;
    };
    /**
	 * httpJsonp
	 * @param options {Object}
	 * @param [receive]
	 * @returns {{cancel: cancel}}
	 */    function Ee(t, n) {
        "string" == typeof t && (t = {
            url: t
        }), n || (n = {});
        var e, r, o = Pe({}, je, t || {}), i = we({
            callback: o.callback,
            load: o.load,
            error: o.error
        }, n), c = o.params, a = "", u = "", s = o.callbackNamespase, f = o.callbackProp;
        function l() {
            o.keepScriptTag || e.parentNode && e.parentNode.removeChild(e), u && Te(s, u, Me), 
            Ie(e, Me), Le(e, Me), r && clearTimeout(r);
        }
        function p() {
            a = "cancel", Te(s, u) && l();
        }
        f && "" !== c[f] && (
        // create callback
        u = c[f] ? c[f] : o.callbackName || "jp" + ke++, c[f] = s ? s + "." + u : u);
        var h = o.timeout;
        h && (r = setTimeout(function() {
            a = "error", l(), i.error && i.error(new Error("Request Timeout"));
        }, h));
        // qs
        var d = o.baseURL + o.url;
        d = (d += Ae(c, ~d.indexOf("?") ? "&" : "?")).replace("?&", "?"), // create script
        e = document.createElement("script");
        var v = o.scriptAttr;
        for (var y in delete v.text, delete v.src, v) e[y] = v[y];
        u && Te(s, u, function(t) {
            a = "callback", l(), i.callback && i.callback(t);
        }), Ie(e, function() {
            l(), "error" !== a && (a = "load", i.load && i.load());
        }), Le(e, function() {
            a = "error", l(), i.error && i.error(new Error("script error"));
        }), e.src = d;
        var m = document.getElementsByTagName("script")[0] || document.head || document.getElementsByTagName("head")[0];
        return m.parentNode.insertBefore(e, m), {
            cancel: p
        };
    }
    var Ce = {
        protocol: "https:",
        // 脚本加载协议
        path: "webapi.amap.com/maps",
        // 资源地址
        key: "",
        // 您申请的key值 (实例化后该属性存在params中)
        v: "1.4.12",
        // 版本号 (实例化后该属性存在params中)
        params: null,
        callbackProp: "callback",
        callbackName: "",
        // 回调函数名 (实例化后该属性存在params中)
        crossOrigin: "anonymous",
        keepScriptTag: !1
    }, Ue = 
    /* */
    function(t) {
        function n(n) {
            var e;
            e = t.call(this, n) || this;
            var r = Object.assign({}, Ce, n);
            return e.protocol = r.protocol, e.path = r.path, e.params = be({
                key: r.key,
                v: r.v
            }, r.params), e.callbackProp = r.callbackProp, e.callbackName = r.callbackName, 
            e.crossOrigin = r.crossOrigin, e.keepScriptTag = r.keepScriptTag, e;
        }
        /**
	   * 加载资源
	   * @returns {Promise<any>}
	   */        _e(n, t);
        var e = n.prototype;
        return e.load = function() {
            var t = this;
            return this.__loadPromise ? this.__loadPromise : (this.__loadPromise = new Promise(function(n, e) {
                var r = function() {
                    t.__loadPromise = null, n(window.AMap);
                };
                if (t.checkCorrectness()) return r();
                Ee({
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
                    error: function(n) {
                        t.__loadPromise = null, e(n);
                    }
                });
            }), this.__loadPromise);
        } // 检查AMapJSAPI正确性
        , e.checkCorrectness = function() {
            if (!window.AMap && "object" != typeof window.AMap) return !1;
            for (var t = [ "v", "Pixel", "LngLat", "Size", "Bounds", "Map" ], n = 0; n < t.length; n++) {
                if (!(t[n] in window.AMap)) return !1;
            }
            return this.versionCompare(window.AMap.v, this.params.v);
        }
        /**
	   * 版本对比
	   * @param left
	   * @param right
	   * @returns {boolean}
	   */ , e.versionCompare = function(t, n) {
            return t === n;
        }, e.setProtocol = function(t) {
            return this.protocol = t, this;
        }, e.setPath = function(t) {
            return this.path = t, this;
        }, e.setParams = function(t) {
            return this.params = t, this;
        }, e.setKey = function(t) {
            return this.params && (this.params.key = t), this;
        }, e.setV = function(t) {
            return this.params && (this.params.v = t), this;
        }, e.setCrossOrigin = function(t) {
            return this.crossOrigin = t, this;
        }, n;
    }(me), xe = {
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
    }, Ne = 
    /* */
    function(t) {
        function n(n) {
            var e;
            e = t.call(this, n) || this;
            var r = Object.assign({}, xe, n);
            return e.v = r.v, e.protocol = r.protocol, e.path = r.path, e.crossOrigin = r.crossOrigin, 
            e.AMapUIProtocol = r.AMapUIProtocol, e.initAMapUI = r.initAMapUI, e.isAutoInitAMapUI = r.isAutoInitAMapUI, 
            e.keepScriptTag = r.keepScriptTag, // 设置强制加载协议
            "string" == typeof e.AMapUIProtocol && e.setAMapUIProtocol(e.AMapUIProtocol), e;
        }
        /**
	   * 加载资源
	   * @returns {*}
	   */        _e(n, t);
        var e = n.prototype;
        return e.load = function() {
            var t = this;
            return this.__loadPromise ? this.__loadPromise : (this.__loadPromise = new Promise(function(n, e) {
                var r = function() {
                    t.__loadPromise = null;
                    var e = function() {
                        return t.checkCorrectness() ? window.AMapUI : (window[t.initAMapUI](), window.AMapUI);
                    };
                    n(t.isAutoInitAMapUI ? e() : e);
                };
                if (t.checkCorrectness()) return r();
                var o = t.protocol, i = t.v, c = t.path.replace("{v}", i);
                Ee({
                    url: o + (c = "//" === c.replace("{v}", i).slice(0, 2) ? c : "//" + c),
                    params: t.params,
                    callbackProp: !1,
                    scriptAttr: {
                        async: !0,
                        crossOrigin: t.crossOrigin
                    },
                    keepScriptTag: t.keepScriptTag,
                    load: r,
                    error: function(n) {
                        t.__loadPromise = null, e(n);
                    }
                });
            }), this.__loadPromise);
        } // 检查AMapUI正确性
        , e.checkCorrectness = function() {
            if (!window.AMapUI) return !1;
            for (var t = [ "libConf", "uiMods", "docProtocol", "version" ], n = 0; n < t.length; n++) {
                if (!(t[n] in window.AMapUI)) return !1;
            }
            return this.versionCompare(window.AMapUI.libConf.mainVersion, this.v);
        }, e.versionCompare = function(t, n) {
            return t === n;
        }
        /**
	   * 删除脚本标签
	   */ , e.removeScriptTag = function(t) {
            t.parentNode.removeChild(t);
        }, e.setProtocol = function(t) {
            return this.protocol = t, this;
        }, e.setPath = function(t) {
            return this.path = t, this;
        }, e.setV = function(t) {
            return this.v = t, this;
        }, e.setCrossOrigin = function(t) {
            return this.crossOrigin = t, this;
        }
        /**
	   * UI组件加载协议
	   * @param AMapUIProtocol ["https:" | "http:"]
	   * @returns {AMapUILoader}
	   */ , e.setAMapUIProtocol = function(t) {
            var n = "https:" === t ? "https:" : "http:";
            return window.AMapUIProtocol = n, this;
        }, n;
    }(me), Fe = "1.0.0", Re = {
        version: Fe,
        Loader: me,
        load: ge,
        AMapJSAPILoader: Ue,
        AMapUILoader: Ne
    };
    t["default"] = Re, t.version = Fe, t.Loader = me, t.load = ge, t.AMapJSAPILoader = Ue, 
    t.AMapUILoader = Ne, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});
