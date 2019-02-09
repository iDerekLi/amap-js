/*!
 * AMapJS v1.0.0
 * 
 * Copyright (c) 2018 Derek Li
 * Released under the MIT License - https://choosealicense.com/licenses/mit/
 * 
 * https://github.com/iDerekLi/amap-js
 */
/* eslint-disable */
function createCommonjsModule(t, e) {
    return t(e = {
        exports: {}
    }, e.exports), e.exports;
}

var t = createCommonjsModule(function(t) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e);
 // eslint-disable-line no-undef
}), e = createCommonjsModule(function(t) {
    var e = t.exports = {
        version: "2.6.4"
    };
    "number" == typeof __e && (__e = e);
 // eslint-disable-line no-undef
}), n = (e.version, function(t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
}), r = function(t) {
    if (!n(t)) throw TypeError(t + " is not an object!");
    return t;
}, o = function(t) {
    try {
        return !!t();
    } catch (e) {
        return !0;
    }
}, i = !o(function() {
    return 7 != Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a;
}), c = t.document, a = n(c) && n(c.createElement), u = function(t) {
    return a ? c.createElement(t) : {};
}, s = !i && !o(function() {
    return 7 != Object.defineProperty(u("div"), "a", {
        get: function() {
            return 7;
        }
    }).a;
}), f = function(t, e) {
    if (!n(t)) return t;
    var r, o;
    if (e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;
    if ("function" == typeof (r = t.valueOf) && !n(o = r.call(t))) return o;
    if (!e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;
    throw TypeError("Can't convert object to primitive value");
}, l = Object.defineProperty, p = {
    f: i ? Object.defineProperty : function defineProperty(t, e, n) {
        if (r(t), e = f(e, !0), r(n), s) try {
            return l(t, e, n);
        } catch (o) {/* empty */}
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
}, d = i ? function(t, e, n) {
    return p.f(t, e, h(1, n));
} : function(t, e, n) {
    return t[e] = n, t;
}, v = {}.hasOwnProperty, y = function(t, e) {
    return v.call(t, e);
}, m = 0, g = Math.random(), S = function(t) {
    return "Symbol(".concat(t === undefined ? "" : t, ")_", (++m + g).toString(36));
}, _ = !1, w = createCommonjsModule(function(n) {
    var r = "__core-js_shared__", o = t[r] || (t[r] = {});
    (n.exports = function(t, e) {
        return o[t] || (o[t] = e !== undefined ? e : {});
    })("versions", []).push({
        version: e.version,
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
}), A = w("native-function-to-string", Function.toString), M = createCommonjsModule(function(n) {
    var r = S("src"), o = "toString", i = ("" + A).split(o);
    e.inspectSource = function(t) {
        return A.call(t);
    }, (n.exports = function(e, n, o, c) {
        var a = "function" == typeof o;
        a && (y(o, "name") || d(o, "name", n)), e[n] !== o && (a && (y(o, r) || d(o, r, e[n] ? "" + e[n] : i.join(String(n)))), 
        e === t ? e[n] = o : c ? e[n] ? e[n] = o : d(e, n, o) : (delete e[n], d(e, n, o)));
    })(Function.prototype, o, function toString() {
        return "function" == typeof this && this[r] || A.call(this);
    });
}), b = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t;
}, P = function(t, e, n) {
    if (b(t), e === undefined) return t;
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
}, O = "prototype", j = function(n, r, o) {
    var i, c, a, u, s = n & j.F, f = n & j.G, l = n & j.S, p = n & j.P, h = n & j.B, v = f ? t : l ? t[r] || (t[r] = {}) : (t[r] || {})[O], y = f ? e : e[r] || (e[r] = {}), m = y[O] || (y[O] = {});
    for (i in f && (o = r), o) 
    // contains in native
    // export native or passed
    a = ((c = !s && v && v[i] !== undefined) ? v : o)[i], 
    // bind timers to global for call from export context
    u = h && c ? P(a, t) : p && "function" == typeof a ? P(Function.call, a) : a, 
    // extend global
    v && M(v, i, a, n & j.U), 
    // export
    y[i] != a && d(y, i, u), p && m[i] != a && (m[i] = a);
};

t.core = e, 
// type bitmap
j.F = 1, // forced
j.G = 2, // global
j.S = 4, // static
j.P = 8, // proto
j.B = 16, // bind
j.W = 32, // wrap
j.U = 64, // safe
j.R = 128;

// real proto method for `library`
var I = j, L = {}.toString, T = function(t) {
    return L.call(t).slice(8, -1);
}, k = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return "String" == T(t) ? t.split("") : Object(t);
}, U = function(t) {
    if (t == undefined) throw TypeError("Can't call method on  " + t);
    return t;
}, C = function(t) {
    return Object(U(t));
}, R = Math.ceil, E = Math.floor, x = function(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? E : R)(t);
}, F = Math.min, q = function(t) {
    return t > 0 ? F(x(t), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
}, N = Array.isArray || function isArray(t) {
    return "Array" == T(t);
}, V = createCommonjsModule(function(e) {
    var n = w("wks"), r = t.Symbol, o = "function" == typeof r;
    (e.exports = function(t) {
        return n[t] || (n[t] = o && r[t] || (o ? r : S)("Symbol." + t));
    }).store = n;
}), G = V("species"), B = function(t) {
    var e;
    return N(t) && (
    // cross-realm fallback
    "function" != typeof (e = t.constructor) || e !== Array && !N(e.prototype) || (e = undefined), 
    n(e) && null === (e = e[G]) && (e = undefined)), e === undefined ? Array : e;
}, D = function(t, e) {
    return new (B(t))(e);
}, J = function(t, e) {
    return !!t && o(function() {
        // eslint-disable-next-line no-useless-call
        e ? t.call(null, function() {/* empty */}, 1) : t.call(null);
    });
}, z = function(t, e) {
    var n = 1 == t, r = 2 == t, o = 3 == t, i = 4 == t, c = 6 == t, a = 5 == t || c, u = e || D;
    return function(e, s, f) {
        for (var l, p, h = C(e), d = k(h), v = P(s, f, 3), y = q(d.length), m = 0, g = n ? u(e, y) : r ? u(e, 0) : undefined; y > m; m++) if ((a || m in d) && (p = v(l = d[m], m, h), 
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
}(0), H = J([].forEach, !0);

I(I.P + I.F * !H, "Array", {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(t /* , thisArg */) {
        return z(this, t, arguments[1]);
    }
}), 
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
I(I.S, "Array", {
    isArray: N
});

// to indexed object, toObject with fallback for non-array-like ES3 strings
var K = function(t) {
    return k(U(t));
}, W = Math.max, Q = Math.min, X = function(t, e) {
    return (t = x(t)) < 0 ? W(t + e, 0) : Q(t, e);
}, Y = function(t) {
    return function(e, n, r) {
        var o, i = K(e), c = q(i.length), a = X(r, c);
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
}, Z = V("unscopables"), $ = Array.prototype;

$[Z] == undefined && d($, Z, {});

var tt = function(t) {
    $[Z][t] = !0;
}, et = Y(!0);

// https://github.com/tc39/Array.prototype.includes
I(I.P, "Array", {
    includes: function includes(t /* , fromIndex = 0 */) {
        return et(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
}), tt("includes");

var nt = w("keys"), rt = function(t) {
    return nt[t] || (nt[t] = S(t));
}, ot = Y(!1), it = rt("IE_PROTO"), ct = function(t, e) {
    var n, r = K(t), o = 0, i = [];
    for (n in r) n != it && y(r, n) && i.push(n);
    // Don't enum bug & hidden keys
        for (;e.length > o; ) y(r, n = e[o++]) && (~ot(i, n) || i.push(n));
    return i;
}, at = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), ut = Object.keys || function keys(t) {
    return ct(t, at);
}, st = i ? Object.defineProperties : function defineProperties(t, e) {
    r(t);
    for (var n, o = ut(e), i = o.length, c = 0; i > c; ) p.f(t, n = o[c++], e[n]);
    return t;
};

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
I(I.S + I.F * !i, "Object", {
    defineProperties: st
}), 
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
I(I.S + I.F * !i, "Object", {
    defineProperty: p.f
});

var ft = t.document, lt = ft && ft.documentElement, pt = rt("IE_PROTO"), ht = function() {/* empty */}, dt = "prototype", vt = function() {
    // Thrash, waste and sodomy: IE GC bug
    var t, e = u("iframe"), n = at.length, r = "<", o = ">";
    for (e.style.display = "none", lt.appendChild(e), e.src = "javascript:", (// eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    t = e.contentWindow.document).open(), t.write(r + "script" + o + "document.F=Object" + r + "/script" + o), 
    t.close(), vt = t.F; n--; ) delete vt[dt][at[n]];
    return vt();
}, yt = Object.create || function create(t, e) {
    var n;
    return null !== t ? (ht[dt] = r(t), n = new ht(), ht[dt] = null, 
    // add "__proto__" for Object.getPrototypeOf polyfill
    n[pt] = t) : n = vt(), e === undefined ? n : st(n, e);
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
I(I.S, "Object", {
    create: yt
});

var mt = {
    f: Object.getOwnPropertySymbols
}, gt = {
    f: {}.propertyIsEnumerable
}, St = Object.assign, _t = !St || o(function() {
    var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
    return t[n] = 7, r.split("").forEach(function(t) {
        e[t] = t;
    }), 7 != St({}, t)[n] || Object.keys(St({}, e)).join("") != r;
}) ? function assign(t, e) {
    for (// eslint-disable-line no-unused-vars
    var n = C(t), r = arguments.length, o = 1, i = mt.f, c = gt.f; r > o; ) for (var a, u = k(arguments[o++]), s = i ? ut(u).concat(i(u)) : ut(u), f = s.length, l = 0; f > l; ) c.call(u, a = s[l++]) && (n[a] = u[a]);
    return n;
} : St;

// 19.1.3.1 Object.assign(target, source)
I(I.S + I.F, "Object", {
    assign: _t
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var wt = V("toStringTag"), At = "Arguments" == T(function() {
    return arguments;
}()), Mt = function(t, e) {
    try {
        return t[e];
    } catch (n) {/* empty */}
}, bt = function(t) {
    var e, n, r;
    return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (n = Mt(e = Object(t), wt)) ? n : At ? T(e) : "Object" == (r = T(e)) && "function" == typeof e.callee ? "Arguments" : r;
}, Pt = {};

// ES3 wrong here
Pt[V("toStringTag")] = "z", Pt + "" != "[object z]" && M(Object.prototype, "toString", function toString() {
    return "[object " + bt(this) + "]";
}, !0);

// true  -> String#at
// false -> String#codePointAt
var Ot = function(t) {
    return function(e, n) {
        var r, o, i = String(U(e)), c = x(n), a = i.length;
        return c < 0 || c >= a ? t ? "" : undefined : (r = i.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === a || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? t ? i.charAt(c) : r : t ? i.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536;
    };
}, jt = {}, It = p.f, Lt = V("toStringTag"), Tt = function(t, e, n) {
    t && !y(t = n ? t : t.prototype, Lt) && It(t, Lt, {
        configurable: !0,
        value: e
    });
}, kt = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
d(kt, V("iterator"), function() {
    return this;
});

var Ut = function(t, e, n) {
    t.prototype = yt(kt, {
        next: h(1, n)
    }), Tt(t, e + " Iterator");
}, Ct = rt("IE_PROTO"), Rt = Object.prototype, Et = Object.getPrototypeOf || function(t) {
    return t = C(t), y(t, Ct) ? t[Ct] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Rt : null;
}, xt = V("iterator"), Ft = !([].keys && "next" in [].keys()), qt = "@@iterator", Nt = "keys", Vt = "values", Gt = function() {
    return this;
}, Bt = function(t, e, n, r, o, i, c) {
    Ut(n, e, r);
    var a, u, s, f = function(t) {
        if (!Ft && t in v) return v[t];
        switch (t) {
          case Nt:
            return function keys() {
                return new n(this, t);
            };

          case Vt:
            return function values() {
                return new n(this, t);
            };
        }
        return function entries() {
            return new n(this, t);
        };
    }, l = e + " Iterator", p = o == Vt, h = !1, v = t.prototype, y = v[xt] || v[qt] || o && v[o], m = y || f(o), g = o ? p ? f("entries") : m : undefined, S = "Array" == e && v.entries || y;
    if (
    // Fix native
    S && (s = Et(S.call(new t()))) !== Object.prototype && s.next && (
    // Set @@toStringTag to native iterators
    Tt(s, l, !0), 
    // fix for some old engines
    _ || "function" == typeof s[xt] || d(s, xt, Gt)), 
    // fix Array#{values, @@iterator}.name in V8 / FF
    p && y && y.name !== Vt && (h = !0, m = function values() {
        return y.call(this);
    }), 
    // Define iterator
    _ && !c || !Ft && !h && v[xt] || d(v, xt, m), 
    // Plug for library
    jt[e] = m, jt[l] = Gt, o) if (a = {
        values: p ? m : f(Vt),
        keys: i ? m : f(Nt),
        entries: g
    }, c) for (u in a) u in v || M(v, u, a[u]); else I(I.P + I.F * (Ft || h), e, a);
    return a;
}, Dt = Ot(!0);

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
// 21.1.3.27 String.prototype[@@iterator]()
Bt(String, "String", function(t) {
    this._t = String(t), // target
    this._i = 0;
}, function() {
    var t, e = this._t, n = this._i;
    return n >= e.length ? {
        value: undefined,
        done: !0
    } : (t = Dt(e, n), this._i += t.length, {
        value: t,
        done: !1
    });
});

var Jt = function(t, e) {
    return {
        value: e,
        done: !!t
    };
}, zt = Bt(Array, "Array", function(t, e) {
    this._t = K(t), // target
    this._i = 0, // next index
    this._k = e;
}, function() {
    var t = this._t, e = this._k, n = this._i++;
    return !t || n >= t.length ? (this._t = undefined, Jt(1)) : Jt(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
}, "values");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
jt.Arguments = jt.Array, tt("keys"), tt("values"), tt("entries");

for (var Ht = V("iterator"), Kt = V("toStringTag"), Wt = jt.Array, Qt = {
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
}, Xt = ut(Qt), Yt = 0; Yt < Xt.length; Yt++) {
    var Zt, $t = Xt[Yt], te = Qt[$t], ee = t[$t], ne = ee && ee.prototype;
    if (ne && (ne[Ht] || d(ne, Ht, Wt), ne[Kt] || d(ne, Kt, $t), jt[$t] = Wt, te)) for (Zt in zt) ne[Zt] || M(ne, Zt, zt[Zt], !0);
}

var re, oe, ie, ce = function(t, e, n, r) {
    if (!(t instanceof e) || r !== undefined && r in t) throw TypeError(n + ": incorrect invocation!");
    return t;
}, ae = function(t, e, n, o) {
    try {
        return o ? e(r(n)[0], n[1]) : e(n);
        // 7.4.6 IteratorClose(iterator, completion)
        } catch (c) {
        var i = t["return"];
        throw i !== undefined && r(i.call(t)), c;
    }
}, ue = V("iterator"), se = Array.prototype, fe = function(t) {
    return t !== undefined && (jt.Array === t || se[ue] === t);
}, le = V("iterator"), pe = e.getIteratorMethod = function(t) {
    if (t != undefined) return t[le] || t["@@iterator"] || jt[bt(t)];
}, he = createCommonjsModule(function(t) {
    var e = {}, n = {}, o = t.exports = function(t, o, i, c, a) {
        var u, s, f, l, p = a ? function() {
            return t;
        } : pe(t), h = P(i, c, o ? 2 : 1), d = 0;
        if ("function" != typeof p) throw TypeError(t + " is not iterable!");
        // fast case for arrays with default iterator
                if (fe(p)) {
            for (u = q(t.length); u > d; d++) if ((l = o ? h(r(s = t[d])[0], s[1]) : h(t[d])) === e || l === n) return l;
        } else for (f = p.call(t); !(s = f.next()).done; ) if ((l = ae(f, h, s.value, o)) === e || l === n) return l;
    };
    o.BREAK = e, o.RETURN = n;
}), de = V("species"), ve = function(t, e) {
    var n, o = r(t).constructor;
    return o === undefined || (n = r(o)[de]) == undefined ? e : b(n);
}, ye = function(t, e, n) {
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
}, me = t.process, ge = t.setImmediate, Se = t.clearImmediate, _e = t.MessageChannel, we = t.Dispatch, Ae = 0, Me = {}, be = "onreadystatechange", Pe = function() {
    var t = +this;
    // eslint-disable-next-line no-prototype-builtins
        if (Me.hasOwnProperty(t)) {
        var e = Me[t];
        delete Me[t], e();
    }
}, Oe = function(t) {
    Pe.call(t.data);
};

// call something on iterator step with safe closing on error
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
ge && Se || (ge = function setImmediate(t) {
    for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
    return Me[++Ae] = function() {
        // eslint-disable-next-line no-new-func
        ye("function" == typeof t ? t : Function(t), e);
    }, re(Ae), Ae;
}, Se = function clearImmediate(t) {
    delete Me[t];
}, 
// Node.js 0.8-
"process" == T(me) ? re = function(t) {
    me.nextTick(P(Pe, t, 1));
} : we && we.now ? re = function(t) {
    we.now(P(Pe, t, 1));
} : _e ? (ie = (oe = new _e()).port2, oe.port1.onmessage = Oe, re = P(ie.postMessage, ie, 1)) : t.addEventListener && "function" == typeof postMessage && !t.importScripts ? (re = function(e) {
    t.postMessage(e + "", "*");
}, t.addEventListener("message", Oe, !1)) : re = be in u("script") ? function(t) {
    lt.appendChild(u("script"))[be] = function() {
        lt.removeChild(this), Pe.call(t);
    };
} : function(t) {
    setTimeout(P(Pe, t, 1), 0);
});

var je = {
    set: ge,
    clear: Se
}, Ie = je.set, Le = t.MutationObserver || t.WebKitMutationObserver, Te = t.process, ke = t.Promise, Ue = "process" == T(Te), Ce = function() {
    var e, n, r, o = function() {
        var t, o;
        for (Ue && (t = Te.domain) && t.exit(); e; ) {
            o = e.fn, e = e.next;
            try {
                o();
            } catch (i) {
                throw e ? r() : n = undefined, i;
            }
        }
        n = undefined, t && t.enter();
    };
    // Node.js
    if (Ue) r = function() {
        Te.nextTick(o);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
     else if (!Le || t.navigator && t.navigator.standalone) if (ke && ke.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var i = ke.resolve(undefined);
        r = function() {
            i.then(o);
        };
    } else r = function() {
        // strange IE + webpack dev server bug - use .call(global)
        Ie.call(t, o);
    }; else {
        var c = !0, a = document.createTextNode("");
        new Le(o).observe(a, {
            characterData: !0
        }), // eslint-disable-line no-new
        r = function() {
            a.data = c = !c;
        };
    }
    return function(t) {
        var o = {
            fn: t,
            next: undefined
        };
        n && (n.next = o), e || (e = o, r()), n = o;
    };
};

// 25.4.1.5 NewPromiseCapability(C)
function PromiseCapability(t) {
    var e, n;
    this.promise = new t(function(t, r) {
        if (e !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
        e = t, n = r;
    }), this.resolve = b(e), this.reject = b(n);
}

var Re = {
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
}, xe = t.navigator, Fe = xe && xe.userAgent || "", qe = function(t, e) {
    if (r(t), n(e) && e.constructor === t) return e;
    var o = Re.f(t);
    return (0, o.resolve)(e), o.promise;
}, Ne = function(t, e, n) {
    for (var r in e) M(t, r, e[r], n);
    return t;
}, Ve = V("species"), Ge = function(e) {
    var n = t[e];
    i && n && !n[Ve] && p.f(n, Ve, {
        configurable: !0,
        get: function() {
            return this;
        }
    });
}, Be = V("iterator"), De = !1;

try {
    [ 7 ][Be]()["return"] = function() {
        De = !0;
    };
} catch (wn) {/* empty */}

var Je, ze, He, Ke, We = function(t, e) {
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
    } catch (wn) {/* empty */}
    return n;
}, Qe = je.set, Xe = Ce(), Ye = "Promise", Ze = t.TypeError, $e = t.process, tn = $e && $e.versions, en = tn && tn.v8 || "", nn = t[Ye], rn = "process" == bt($e), on = function() {/* empty */}, cn = ze = Re.f, an = !!function() {
    try {
        // correct subclassing with @@species support
        var t = nn.resolve(1), e = (t.constructor = {})[V("species")] = function(t) {
            t(on, on);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (rn || "function" == typeof PromiseRejectionEvent) && t.then(on) instanceof e && 0 !== en.indexOf("6.6") && -1 === Fe.indexOf("Chrome/66");
    } catch (wn) {/* empty */}
}(), un = function(t) {
    var e;
    return !(!n(t) || "function" != typeof (e = t.then)) && e;
}, sn = function(t, e) {
    if (!t._n) {
        t._n = !0;
        var n = t._c;
        Xe(function() {
            for (var r = t._v, o = 1 == t._s, i = 0, c = function(e) {
                var n, i, c, a = o ? e.ok : e.fail, u = e.resolve, s = e.reject, f = e.domain;
                try {
                    a ? (o || (2 == t._h && pn(t), t._h = 1), !0 === a ? n = r : (f && f.enter(), n = a(r), 
                    // may throw
                    f && (f.exit(), c = !0)), n === e.promise ? s(Ze("Promise-chain cycle")) : (i = un(n)) ? i.call(n, u, s) : u(n)) : s(r);
                } catch (wn) {
                    f && !c && f.exit(), s(wn);
                }
            }; n.length > i; ) c(n[i++]);
 // variable length - can't use forEach
                        t._c = [], t._n = !1, e && !t._h && fn(t);
        });
    }
}, fn = function(e) {
    Qe.call(t, function() {
        var n, r, o, i = e._v, c = ln(e);
        if (c && (n = Ee(function() {
            rn ? $e.emit("unhandledRejection", i, e) : (r = t.onunhandledrejection) ? r({
                promise: e,
                reason: i
            }) : (o = t.console) && o.error && o.error("Unhandled promise rejection", i);
        }), 
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        e._h = rn || ln(e) ? 2 : 1), e._a = undefined, c && n.e) throw n.v;
    });
}, ln = function(t) {
    return 1 !== t._h && 0 === (t._a || t._c).length;
}, pn = function(e) {
    Qe.call(t, function() {
        var n;
        rn ? $e.emit("rejectionHandled", e) : (n = t.onrejectionhandled) && n({
            promise: e,
            reason: e._v
        });
    });
}, hn = function(t) {
    var e = this;
    e._d || (e._d = !0, // unwrap
    (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), sn(e, !0));
}, dn = function(t) {
    var e, n = this;
    if (!n._d) {
        n._d = !0, n = n._w || n;
        // unwrap
        try {
            if (n === t) throw Ze("Promise can't be resolved itself");
            (e = un(t)) ? Xe(function() {
                var r = {
                    _w: n,
                    _d: !1
                };
 // wrap
                                try {
                    e.call(t, P(dn, r, 1), P(hn, r, 1));
                } catch (wn) {
                    hn.call(r, wn);
                }
            }) : (n._v = t, n._s = 1, sn(n, !1));
        } catch (wn) {
            hn.call({
                _w: n,
                _d: !1
            }, wn);
 // wrap
                }
    }
};

// constructor polyfill
an || (
// 25.4.3.1 Promise(executor)
nn = function Promise(t) {
    ce(this, nn, Ye, "_h"), b(t), Je.call(this);
    try {
        t(P(dn, this, 1), P(hn, this, 1));
    } catch (e) {
        hn.call(this, e);
    }
}, (
// eslint-disable-next-line no-unused-vars
Je = function Promise(t) {
    this._c = [], // <- awaiting reactions
    this._a = undefined, // <- checked in isUnhandled reactions
    this._s = 0, // <- state
    this._d = !1, // <- done
    this._v = undefined, // <- value
    this._h = 0, // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = !1;
}).prototype = Ne(nn.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(t, e) {
        var n = cn(ve(this, nn));
        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
        n.domain = rn ? $e.domain : undefined, this._c.push(n), this._a && this._a.push(n), 
        this._s && sn(this, !1), n.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    "catch": function(t) {
        return this.then(undefined, t);
    }
}), He = function() {
    var t = new Je();
    this.promise = t, this.resolve = P(dn, t, 1), this.reject = P(hn, t, 1);
}, Re.f = cn = function(t) {
    return t === nn || t === Ke ? new He(t) : ze(t);
}), I(I.G + I.W + I.F * !an, {
    Promise: nn
}), Tt(nn, Ye), Ge(Ye), Ke = e[Ye], 
// statics
I(I.S + I.F * !an, Ye, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(t) {
        var e = cn(this);
        return (0, e.reject)(t), e.promise;
    }
}), I(I.S + I.F * (_ || !an), Ye, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(t) {
        return qe(_ && this === Ke ? nn : this, t);
    }
}), I(I.S + I.F * !(an && We(function(t) {
    nn.all(t)["catch"](on);
})), Ye, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(t) {
        var e = this, n = cn(e), r = n.resolve, o = n.reject, i = Ee(function() {
            var n = [], i = 0, c = 1;
            he(t, !1, function(t) {
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
        var e = this, n = cn(e), r = n.reject, o = Ee(function() {
            he(t, !1, function(t) {
                e.resolve(t).then(n.resolve, r);
            });
        });
        return o.e && r(o.v), n.promise;
    }
});

e.Promise;

// array
/**
 * Loader 基类
 */ var vn = function Loader() {};

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
 */ function queryParams(t, e) {
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

Object.assign(vn.prototype, {
    load: function load() {}
});

var yn = {
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
}, mn = 
/* */
function(t) {
    function AMapJSAPILoader(e) {
        var n;
        n = t.call(this, e) || this;
        var r = Object.assign({}, yn, e);
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
   */    _inheritsLoose(AMapJSAPILoader, t);
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
}(vn), gn = {
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
}, Sn = 
/* */
function(t) {
    function AMapUILoader(e) {
        var n;
        n = t.call(this, e) || this;
        var r = Object.assign({}, gn, e);
        return n.v = r.v, n.protocol = r.protocol, n.path = r.path, n.crossOrigin = r.crossOrigin, 
        n.AMapUIProtocol = r.AMapUIProtocol, n.initAMapUI = r.initAMapUI, n.isAutoInitAMapUI = r.isAutoInitAMapUI, 
        n.keepScriptTag = r.keepScriptTag, // 设置强制加载协议
        "string" == typeof n.AMapUIProtocol && n.setAMapUIProtocol(n.AMapUIProtocol), n;
    }
    /**
   * 加载资源
   * @returns {*}
   */    _inheritsLoose(AMapUILoader, t);
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
}(vn), _n = "1.0.0";

 // 默认参数
export default {
    version: _n,
    Loader: vn,
    load: load,
    AMapJSAPILoader: mn,
    AMapUILoader: Sn
};

export { _n as version, vn as Loader, load, mn as AMapJSAPILoader, Sn as AMapUILoader };
