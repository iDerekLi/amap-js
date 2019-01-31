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
        version: "2.6.3"
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
}, _ = createCommonjsModule(function(n) {
    var r = S("src"), o = "toString", i = Function[o], c = ("" + i).split(o);
    e.inspectSource = function(t) {
        return i.call(t);
    }, (n.exports = function(e, n, o, i) {
        var a = "function" == typeof o;
        a && (y(o, "name") || d(o, "name", n)), e[n] !== o && (a && (y(o, r) || d(o, r, e[n] ? "" + e[n] : c.join(String(n)))), 
        e === t ? e[n] = o : i ? e[n] ? e[n] = o : d(e, n, o) : (delete e[n], d(e, n, o)));
    })(Function.prototype, o, function toString() {
        return "function" == typeof this && this[r] || i.call(this);
    });
}), w = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t;
}, A = function(t, e, n) {
    if (w(t), e === undefined) return t;
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
}, M = "prototype", b = function(n, r, o) {
    var i, c, a, u, s = n & b.F, f = n & b.G, l = n & b.S, p = n & b.P, h = n & b.B, v = f ? t : l ? t[r] || (t[r] = {}) : (t[r] || {})[M], y = f ? e : e[r] || (e[r] = {}), m = y[M] || (y[M] = {});
    for (i in f && (o = r), o) 
    // contains in native
    // export native or passed
    a = ((c = !s && v && v[i] !== undefined) ? v : o)[i], 
    // bind timers to global for call from export context
    u = h && c ? A(a, t) : p && "function" == typeof a ? A(Function.call, a) : a, 
    // extend global
    v && _(v, i, a, n & b.U), 
    // export
    y[i] != a && d(y, i, u), p && m[i] != a && (m[i] = a);
};

t.core = e, 
// type bitmap
b.F = 1, // forced
b.G = 2, // global
b.S = 4, // static
b.P = 8, // proto
b.B = 16, // bind
b.W = 32, // wrap
b.U = 64, // safe
b.R = 128;

// real proto method for `library`
var P = b, O = {}.toString, j = function(t) {
    return O.call(t).slice(8, -1);
}, I = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return "String" == j(t) ? t.split("") : Object(t);
}, L = function(t) {
    if (t == undefined) throw TypeError("Can't call method on  " + t);
    return t;
}, T = function(t) {
    return Object(L(t));
}, k = Math.ceil, U = Math.floor, C = function(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? U : k)(t);
}, R = Math.min, E = function(t) {
    return t > 0 ? R(C(t), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
}, x = Array.isArray || function isArray(t) {
    return "Array" == j(t);
}, F = !1, q = createCommonjsModule(function(n) {
    var r = "__core-js_shared__", o = t[r] || (t[r] = {});
    (n.exports = function(t, e) {
        return o[t] || (o[t] = e !== undefined ? e : {});
    })("versions", []).push({
        version: e.version,
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
}), N = createCommonjsModule(function(e) {
    var n = q("wks"), r = t.Symbol, o = "function" == typeof r;
    (e.exports = function(t) {
        return n[t] || (n[t] = o && r[t] || (o ? r : S)("Symbol." + t));
    }).store = n;
}), V = N("species"), G = function(t) {
    var e;
    return x(t) && (
    // cross-realm fallback
    "function" != typeof (e = t.constructor) || e !== Array && !x(e.prototype) || (e = undefined), 
    n(e) && null === (e = e[V]) && (e = undefined)), e === undefined ? Array : e;
}, B = function(t, e) {
    return new (G(t))(e);
}, D = function(t, e) {
    return !!t && o(function() {
        // eslint-disable-next-line no-useless-call
        e ? t.call(null, function() {/* empty */}, 1) : t.call(null);
    });
}, J = function(t, e) {
    var n = 1 == t, r = 2 == t, o = 3 == t, i = 4 == t, c = 6 == t, a = 5 == t || c, u = e || B;
    return function(e, s, f) {
        for (var l, p, h = T(e), d = I(h), v = A(s, f, 3), y = E(d.length), m = 0, g = n ? u(e, y) : r ? u(e, 0) : undefined; y > m; m++) if ((a || m in d) && (p = v(l = d[m], m, h), 
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
}(0), z = D([].forEach, !0);

P(P.P + P.F * !z, "Array", {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(t /* , thisArg */) {
        return J(this, t, arguments[1]);
    }
}), 
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
P(P.S, "Array", {
    isArray: x
});

// to indexed object, toObject with fallback for non-array-like ES3 strings
var H = function(t) {
    return I(L(t));
}, K = Math.max, W = Math.min, Q = function(t, e) {
    return (t = C(t)) < 0 ? K(t + e, 0) : W(t, e);
}, X = function(t) {
    return function(e, n, r) {
        var o, i = H(e), c = E(i.length), a = Q(r, c);
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
}, Y = N("unscopables"), Z = Array.prototype;

Z[Y] == undefined && d(Z, Y, {});

var $ = function(t) {
    Z[Y][t] = !0;
}, tt = X(!0);

// https://github.com/tc39/Array.prototype.includes
P(P.P, "Array", {
    includes: function includes(t /* , fromIndex = 0 */) {
        return tt(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
}), $("includes");

var et = q("keys"), nt = function(t) {
    return et[t] || (et[t] = S(t));
}, rt = X(!1), ot = nt("IE_PROTO"), it = function(t, e) {
    var n, r = H(t), o = 0, i = [];
    for (n in r) n != ot && y(r, n) && i.push(n);
    // Don't enum bug & hidden keys
        for (;e.length > o; ) y(r, n = e[o++]) && (~rt(i, n) || i.push(n));
    return i;
}, ct = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), at = Object.keys || function keys(t) {
    return it(t, ct);
}, ut = i ? Object.defineProperties : function defineProperties(t, e) {
    r(t);
    for (var n, o = at(e), i = o.length, c = 0; i > c; ) p.f(t, n = o[c++], e[n]);
    return t;
};

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
P(P.S + P.F * !i, "Object", {
    defineProperties: ut
}), 
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
P(P.S + P.F * !i, "Object", {
    defineProperty: p.f
});

var st = t.document, ft = st && st.documentElement, lt = nt("IE_PROTO"), pt = function() {/* empty */}, ht = "prototype", dt = function() {
    // Thrash, waste and sodomy: IE GC bug
    var t, e = u("iframe"), n = ct.length, r = "<", o = ">";
    for (e.style.display = "none", ft.appendChild(e), e.src = "javascript:", (// eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    t = e.contentWindow.document).open(), t.write(r + "script" + o + "document.F=Object" + r + "/script" + o), 
    t.close(), dt = t.F; n--; ) delete dt[ht][ct[n]];
    return dt();
}, vt = Object.create || function create(t, e) {
    var n;
    return null !== t ? (pt[ht] = r(t), n = new pt(), pt[ht] = null, 
    // add "__proto__" for Object.getPrototypeOf polyfill
    n[lt] = t) : n = dt(), e === undefined ? n : ut(n, e);
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
P(P.S, "Object", {
    create: vt
});

var yt = {
    f: Object.getOwnPropertySymbols
}, mt = {
    f: {}.propertyIsEnumerable
}, gt = Object.assign, St = !gt || o(function() {
    var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
    return t[n] = 7, r.split("").forEach(function(t) {
        e[t] = t;
    }), 7 != gt({}, t)[n] || Object.keys(gt({}, e)).join("") != r;
}) ? function assign(t, e) {
    for (// eslint-disable-line no-unused-vars
    var n = T(t), r = arguments.length, o = 1, i = yt.f, c = mt.f; r > o; ) for (var a, u = I(arguments[o++]), s = i ? at(u).concat(i(u)) : at(u), f = s.length, l = 0; f > l; ) c.call(u, a = s[l++]) && (n[a] = u[a]);
    return n;
} : gt;

// 19.1.3.1 Object.assign(target, source)
P(P.S + P.F, "Object", {
    assign: St
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var _t = N("toStringTag"), wt = "Arguments" == j(function() {
    return arguments;
}()), At = function(t, e) {
    try {
        return t[e];
    } catch (n) {/* empty */}
}, Mt = function(t) {
    var e, n, r;
    return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (n = At(e = Object(t), _t)) ? n : wt ? j(e) : "Object" == (r = j(e)) && "function" == typeof e.callee ? "Arguments" : r;
}, bt = {};

// ES3 wrong here
bt[N("toStringTag")] = "z", bt + "" != "[object z]" && _(Object.prototype, "toString", function toString() {
    return "[object " + Mt(this) + "]";
}, !0);

// true  -> String#at
// false -> String#codePointAt
var Pt = function(t) {
    return function(e, n) {
        var r, o, i = String(L(e)), c = C(n), a = i.length;
        return c < 0 || c >= a ? t ? "" : undefined : (r = i.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === a || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? t ? i.charAt(c) : r : t ? i.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536;
    };
}, Ot = {}, jt = p.f, It = N("toStringTag"), Lt = function(t, e, n) {
    t && !y(t = n ? t : t.prototype, It) && jt(t, It, {
        configurable: !0,
        value: e
    });
}, Tt = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
d(Tt, N("iterator"), function() {
    return this;
});

var kt = function(t, e, n) {
    t.prototype = vt(Tt, {
        next: h(1, n)
    }), Lt(t, e + " Iterator");
}, Ut = nt("IE_PROTO"), Ct = Object.prototype, Rt = Object.getPrototypeOf || function(t) {
    return t = T(t), y(t, Ut) ? t[Ut] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Ct : null;
}, Et = N("iterator"), xt = !([].keys && "next" in [].keys()), Ft = "@@iterator", qt = "keys", Nt = "values", Vt = function() {
    return this;
}, Gt = function(t, e, n, r, o, i, c) {
    kt(n, e, r);
    var a, u, s, f = function(t) {
        if (!xt && t in v) return v[t];
        switch (t) {
          case qt:
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
    }, l = e + " Iterator", p = o == Nt, h = !1, v = t.prototype, y = v[Et] || v[Ft] || o && v[o], m = y || f(o), g = o ? p ? f("entries") : m : undefined, S = "Array" == e && v.entries || y;
    if (
    // Fix native
    S && (s = Rt(S.call(new t()))) !== Object.prototype && s.next && (
    // Set @@toStringTag to native iterators
    Lt(s, l, !0), 
    // fix for some old engines
    "function" != typeof s[Et] && d(s, Et, Vt)), 
    // fix Array#{values, @@iterator}.name in V8 / FF
    p && y && y.name !== Nt && (h = !0, m = function values() {
        return y.call(this);
    }), 
    // Define iterator
    (xt || h || !v[Et]) && d(v, Et, m), 
    // Plug for library
    Ot[e] = m, Ot[l] = Vt, o) if (a = {
        values: p ? m : f(Nt),
        keys: i ? m : f(qt),
        entries: g
    }, c) for (u in a) u in v || _(v, u, a[u]); else P(P.P + P.F * (xt || h), e, a);
    return a;
}, Bt = Pt(!0);

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
// 21.1.3.27 String.prototype[@@iterator]()
Gt(String, "String", function(t) {
    this._t = String(t), // target
    this._i = 0;
}, function() {
    var t, e = this._t, n = this._i;
    return n >= e.length ? {
        value: undefined,
        done: !0
    } : (t = Bt(e, n), this._i += t.length, {
        value: t,
        done: !1
    });
});

var Dt = function(t, e) {
    return {
        value: e,
        done: !!t
    };
}, Jt = Gt(Array, "Array", function(t, e) {
    this._t = H(t), // target
    this._i = 0, // next index
    this._k = e;
}, function() {
    var t = this._t, e = this._k, n = this._i++;
    return !t || n >= t.length ? (this._t = undefined, Dt(1)) : Dt(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
}, "values");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Ot.Arguments = Ot.Array, $("keys"), $("values"), $("entries");

for (var zt = N("iterator"), Ht = N("toStringTag"), Kt = Ot.Array, Wt = {
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
}, Qt = at(Wt), Xt = 0; Xt < Qt.length; Xt++) {
    var Yt, Zt = Qt[Xt], $t = Wt[Zt], te = t[Zt], ee = te && te.prototype;
    if (ee && (ee[zt] || d(ee, zt, Kt), ee[Ht] || d(ee, Ht, Zt), Ot[Zt] = Kt, $t)) for (Yt in Jt) ee[Yt] || _(ee, Yt, Jt[Yt], !0);
}

var ne, re, oe, ie = function(t, e, n, r) {
    if (!(t instanceof e) || r !== undefined && r in t) throw TypeError(n + ": incorrect invocation!");
    return t;
}, ce = function(t, e, n, o) {
    try {
        return o ? e(r(n)[0], n[1]) : e(n);
        // 7.4.6 IteratorClose(iterator, completion)
        } catch (c) {
        var i = t["return"];
        throw i !== undefined && r(i.call(t)), c;
    }
}, ae = N("iterator"), ue = Array.prototype, se = function(t) {
    return t !== undefined && (Ot.Array === t || ue[ae] === t);
}, fe = N("iterator"), le = e.getIteratorMethod = function(t) {
    if (t != undefined) return t[fe] || t["@@iterator"] || Ot[Mt(t)];
}, pe = createCommonjsModule(function(t) {
    var e = {}, n = {}, o = t.exports = function(t, o, i, c, a) {
        var u, s, f, l, p = a ? function() {
            return t;
        } : le(t), h = A(i, c, o ? 2 : 1), d = 0;
        if ("function" != typeof p) throw TypeError(t + " is not iterable!");
        // fast case for arrays with default iterator
                if (se(p)) {
            for (u = E(t.length); u > d; d++) if ((l = o ? h(r(s = t[d])[0], s[1]) : h(t[d])) === e || l === n) return l;
        } else for (f = p.call(t); !(s = f.next()).done; ) if ((l = ce(f, h, s.value, o)) === e || l === n) return l;
    };
    o.BREAK = e, o.RETURN = n;
}), he = N("species"), de = function(t, e) {
    var n, o = r(t).constructor;
    return o === undefined || (n = r(o)[he]) == undefined ? e : w(n);
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
}, ye = t.process, me = t.setImmediate, ge = t.clearImmediate, Se = t.MessageChannel, _e = t.Dispatch, we = 0, Ae = {}, Me = "onreadystatechange", be = function() {
    var t = +this;
    // eslint-disable-next-line no-prototype-builtins
        if (Ae.hasOwnProperty(t)) {
        var e = Ae[t];
        delete Ae[t], e();
    }
}, Pe = function(t) {
    be.call(t.data);
};

// call something on iterator step with safe closing on error
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
me && ge || (me = function setImmediate(t) {
    for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
    return Ae[++we] = function() {
        // eslint-disable-next-line no-new-func
        ve("function" == typeof t ? t : Function(t), e);
    }, ne(we), we;
}, ge = function clearImmediate(t) {
    delete Ae[t];
}, 
// Node.js 0.8-
"process" == j(ye) ? ne = function(t) {
    ye.nextTick(A(be, t, 1));
} : _e && _e.now ? ne = function(t) {
    _e.now(A(be, t, 1));
} : Se ? (oe = (re = new Se()).port2, re.port1.onmessage = Pe, ne = A(oe.postMessage, oe, 1)) : t.addEventListener && "function" == typeof postMessage && !t.importScripts ? (ne = function(e) {
    t.postMessage(e + "", "*");
}, t.addEventListener("message", Pe, !1)) : ne = Me in u("script") ? function(t) {
    ft.appendChild(u("script"))[Me] = function() {
        ft.removeChild(this), be.call(t);
    };
} : function(t) {
    setTimeout(A(be, t, 1), 0);
});

var Oe = {
    set: me,
    clear: ge
}, je = Oe.set, Ie = t.MutationObserver || t.WebKitMutationObserver, Le = t.process, Te = t.Promise, ke = "process" == j(Le), Ue = function() {
    var e, n, r, o = function() {
        var t, o;
        for (ke && (t = Le.domain) && t.exit(); e; ) {
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
    if (ke) r = function() {
        Le.nextTick(o);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
     else if (!Ie || t.navigator && t.navigator.standalone) if (Te && Te.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var i = Te.resolve(undefined);
        r = function() {
            i.then(o);
        };
    } else r = function() {
        // strange IE + webpack dev server bug - use .call(global)
        je.call(t, o);
    }; else {
        var c = !0, a = document.createTextNode("");
        new Ie(o).observe(a, {
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
    }), this.resolve = w(e), this.reject = w(n);
}

var Ce = {
    f: function(t) {
        return new PromiseCapability(t);
    }
}, Re = function(t) {
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
}, Ee = t.navigator, xe = Ee && Ee.userAgent || "", Fe = function(t, e) {
    if (r(t), n(e) && e.constructor === t) return e;
    var o = Ce.f(t);
    return (0, o.resolve)(e), o.promise;
}, qe = function(t, e, n) {
    for (var r in e) _(t, r, e[r], n);
    return t;
}, Ne = N("species"), Ve = function(e) {
    var n = t[e];
    i && n && !n[Ne] && p.f(n, Ne, {
        configurable: !0,
        get: function() {
            return this;
        }
    });
}, Ge = N("iterator"), Be = !1;

try {
    [ 7 ][Ge]()["return"] = function() {
        Be = !0;
    };
} catch (_n) {/* empty */}

var De, Je, ze, He, Ke = function(t, e) {
    if (!e && !Be) return !1;
    var n = !1;
    try {
        var r = [ 7 ], o = r[Ge]();
        o.next = function() {
            return {
                done: n = !0
            };
        }, r[Ge] = function() {
            return o;
        }, t(r);
    } catch (_n) {/* empty */}
    return n;
}, We = Oe.set, Qe = Ue(), Xe = "Promise", Ye = t.TypeError, Ze = t.process, $e = Ze && Ze.versions, tn = $e && $e.v8 || "", en = t[Xe], nn = "process" == Mt(Ze), rn = function() {/* empty */}, on = Je = Ce.f, cn = !!function() {
    try {
        // correct subclassing with @@species support
        var t = en.resolve(1), e = (t.constructor = {})[N("species")] = function(t) {
            t(rn, rn);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (nn || "function" == typeof PromiseRejectionEvent) && t.then(rn) instanceof e && 0 !== tn.indexOf("6.6") && -1 === xe.indexOf("Chrome/66");
    } catch (_n) {/* empty */}
}(), an = function(t) {
    var e;
    return !(!n(t) || "function" != typeof (e = t.then)) && e;
}, un = function(t, e) {
    if (!t._n) {
        t._n = !0;
        var n = t._c;
        Qe(function() {
            for (var r = t._v, o = 1 == t._s, i = 0, c = function(e) {
                var n, i, c, a = o ? e.ok : e.fail, u = e.resolve, s = e.reject, f = e.domain;
                try {
                    a ? (o || (2 == t._h && ln(t), t._h = 1), !0 === a ? n = r : (f && f.enter(), n = a(r), 
                    // may throw
                    f && (f.exit(), c = !0)), n === e.promise ? s(Ye("Promise-chain cycle")) : (i = an(n)) ? i.call(n, u, s) : u(n)) : s(r);
                } catch (_n) {
                    f && !c && f.exit(), s(_n);
                }
            }; n.length > i; ) c(n[i++]);
 // variable length - can't use forEach
                        t._c = [], t._n = !1, e && !t._h && sn(t);
        });
    }
}, sn = function(e) {
    We.call(t, function() {
        var n, r, o, i = e._v, c = fn(e);
        if (c && (n = Re(function() {
            nn ? Ze.emit("unhandledRejection", i, e) : (r = t.onunhandledrejection) ? r({
                promise: e,
                reason: i
            }) : (o = t.console) && o.error && o.error("Unhandled promise rejection", i);
        }), 
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        e._h = nn || fn(e) ? 2 : 1), e._a = undefined, c && n.e) throw n.v;
    });
}, fn = function(t) {
    return 1 !== t._h && 0 === (t._a || t._c).length;
}, ln = function(e) {
    We.call(t, function() {
        var n;
        nn ? Ze.emit("rejectionHandled", e) : (n = t.onrejectionhandled) && n({
            promise: e,
            reason: e._v
        });
    });
}, pn = function(t) {
    var e = this;
    e._d || (e._d = !0, // unwrap
    (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), un(e, !0));
}, hn = function(t) {
    var e, n = this;
    if (!n._d) {
        n._d = !0, n = n._w || n;
        // unwrap
        try {
            if (n === t) throw Ye("Promise can't be resolved itself");
            (e = an(t)) ? Qe(function() {
                var r = {
                    _w: n,
                    _d: !1
                };
 // wrap
                                try {
                    e.call(t, A(hn, r, 1), A(pn, r, 1));
                } catch (_n) {
                    pn.call(r, _n);
                }
            }) : (n._v = t, n._s = 1, un(n, !1));
        } catch (_n) {
            pn.call({
                _w: n,
                _d: !1
            }, _n);
 // wrap
                }
    }
};

// constructor polyfill
cn || (
// 25.4.3.1 Promise(executor)
en = function Promise(t) {
    ie(this, en, Xe, "_h"), w(t), De.call(this);
    try {
        t(A(hn, this, 1), A(pn, this, 1));
    } catch (e) {
        pn.call(this, e);
    }
}, (
// eslint-disable-next-line no-unused-vars
De = function Promise(t) {
    this._c = [], // <- awaiting reactions
    this._a = undefined, // <- checked in isUnhandled reactions
    this._s = 0, // <- state
    this._d = !1, // <- done
    this._v = undefined, // <- value
    this._h = 0, // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = !1;
}).prototype = qe(en.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(t, e) {
        var n = on(de(this, en));
        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
        n.domain = nn ? Ze.domain : undefined, this._c.push(n), this._a && this._a.push(n), 
        this._s && un(this, !1), n.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    "catch": function(t) {
        return this.then(undefined, t);
    }
}), ze = function() {
    var t = new De();
    this.promise = t, this.resolve = A(hn, t, 1), this.reject = A(pn, t, 1);
}, Ce.f = on = function(t) {
    return t === en || t === He ? new ze(t) : Je(t);
}), P(P.G + P.W + P.F * !cn, {
    Promise: en
}), Lt(en, Xe), Ve(Xe), He = e[Xe], 
// statics
P(P.S + P.F * !cn, Xe, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(t) {
        var e = on(this);
        return (0, e.reject)(t), e.promise;
    }
}), P(P.S + P.F * (F || !cn), Xe, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(t) {
        return Fe(F && this === He ? en : this, t);
    }
}), P(P.S + P.F * !(cn && Ke(function(t) {
    en.all(t)["catch"](rn);
})), Xe, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(t) {
        var e = this, n = on(e), r = n.resolve, o = n.reject, i = Re(function() {
            var n = [], i = 0, c = 1;
            pe(t, !1, function(t) {
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
        var e = this, n = on(e), r = n.reject, o = Re(function() {
            pe(t, !1, function(t) {
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
 */ var dn = function Loader() {};

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
        if (!(t instanceof dn)) throw new TypeError(t + " is not an instance of Loader");
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

Object.assign(dn.prototype, {
    load: function load() {}
});

var vn = {
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
}, yn = 
/* */
function(t) {
    function AMapJSAPILoader(e) {
        var n;
        n = t.call(this, e) || this;
        var r = Object.assign({}, vn, e);
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
}(dn), mn = {
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
}, gn = 
/* */
function(t) {
    function AMapUILoader(e) {
        var n;
        n = t.call(this, e) || this;
        var r = Object.assign({}, mn, e);
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
}(dn), Sn = "1.0.0";

 // 默认参数
export default {
    version: Sn,
    Loader: dn,
    load: load,
    AMapJSAPILoader: yn,
    AMapUILoader: gn
};

export { Sn as version, dn as Loader, load, yn as AMapJSAPILoader, gn as AMapUILoader };
