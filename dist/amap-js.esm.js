/*!
 * AMapJS v1.2.0
 * 
 * Copyright (c) 2018-present Derek Li
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
        version: "2.6.9"
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
    } catch (mn) {
        return !0;
    }
}, i = !o(function() {
    return 7 != Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a;
}), a = t.document, c = n(a) && n(a.createElement), s = function(t) {
    return c ? a.createElement(t) : {};
}, u = !i && !o(function() {
    return 7 != Object.defineProperty(s("div"), "a", {
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
        if (r(t), e = f(e, !0), r(n), u) try {
            return l(t, e, n);
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
}, d = i ? function(t, e, n) {
    return p.f(t, e, h(1, n));
} : function(t, e, n) {
    return t[e] = n, t;
}, v = {}.hasOwnProperty, m = function(t, e) {
    return v.call(t, e);
}, y = 0, g = Math.random(), _ = function(t) {
    return "Symbol(".concat(t === undefined ? "" : t, ")_", (++y + g).toString(36));
}, b = createCommonjsModule(function(n) {
    var r = "__core-js_shared__", o = t[r] || (t[r] = {});
    (n.exports = function(t, e) {
        return o[t] || (o[t] = e !== undefined ? e : {});
    })("versions", []).push({
        version: e.version,
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
}), w = b("native-function-to-string", Function.toString), A = createCommonjsModule(function(n) {
    var r = _("src"), o = "toString", i = ("" + w).split(o);
    e.inspectSource = function(t) {
        return w.call(t);
    }, (n.exports = function(e, n, o, a) {
        var c = "function" == typeof o;
        c && (m(o, "name") || d(o, "name", n)), e[n] !== o && (c && (m(o, r) || d(o, r, e[n] ? "" + e[n] : i.join(String(n)))), 
        e === t ? e[n] = o : a ? e[n] ? e[n] = o : d(e, n, o) : (delete e[n], d(e, n, o)));
    })(Function.prototype, o, function toString() {
        return "function" == typeof this && this[r] || w.call(this);
    });
}), P = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t;
}, S = function(t, e, n) {
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
}, M = "prototype", j = function(n, r, o) {
    var i, a, c, s, u = n & j.F, f = n & j.G, l = n & j.S, p = n & j.P, h = n & j.B, v = f ? t : l ? t[r] || (t[r] = {}) : (t[r] || {})[M], m = f ? e : e[r] || (e[r] = {}), y = m[M] || (m[M] = {});
    for (i in f && (o = r), o) 
    // contains in native
    // export native or passed
    c = ((a = !u && v && v[i] !== undefined) ? v : o)[i], 
    // bind timers to global for call from export context
    s = h && a ? S(c, t) : p && "function" == typeof c ? S(Function.call, c) : c, 
    // extend global
    v && A(v, i, c, n & j.U), 
    // export
    m[i] != c && d(m, i, s), p && y[i] != c && (y[i] = c);
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
var O = j, k = {}.toString, I = function(t) {
    return k.call(t).slice(8, -1);
}, T = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return "String" == I(t) ? t.split("") : Object(t);
}, C = function(t) {
    if (t == undefined) throw TypeError("Can't call method on  " + t);
    return t;
}, L = function(t) {
    return T(C(t));
}, E = Math.ceil, U = Math.floor, x = function(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? U : E)(t);
}, N = Math.min, F = function(t) {
    return t > 0 ? N(x(t), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
}, R = Math.max, V = Math.min, J = function(t, e) {
    return (t = x(t)) < 0 ? R(t + e, 0) : V(t, e);
}, B = function(t) {
    return function(e, n, r) {
        var o, i = L(e), a = F(i.length), c = J(r, a);
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
}, D = b("keys"), G = function(t) {
    return D[t] || (D[t] = _(t));
}, q = B(!1), z = G("IE_PROTO"), H = function(t, e) {
    var n, r = L(t), o = 0, i = [];
    for (n in r) n != z && m(r, n) && i.push(n);
    // Don't enum bug & hidden keys
        for (;e.length > o; ) m(r, n = e[o++]) && (~q(i, n) || i.push(n));
    return i;
}, K = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), W = Object.keys || function keys(t) {
    return H(t, K);
}, $ = i ? Object.defineProperties : function defineProperties(t, e) {
    r(t);
    for (var n, o = W(e), i = o.length, a = 0; i > a; ) p.f(t, n = o[a++], e[n]);
    return t;
};

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
O(O.S + O.F * !i, "Object", {
    defineProperties: $
}), 
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
O(O.S + O.F * !i, "Object", {
    defineProperty: p.f
});

var Q = t.document, X = Q && Q.documentElement, Y = G("IE_PROTO"), Z = function() {/* empty */}, tt = "prototype", et = function() {
    // Thrash, waste and sodomy: IE GC bug
    var t, e = s("iframe"), n = K.length, r = "<", o = ">";
    for (e.style.display = "none", X.appendChild(e), e.src = "javascript:", (// eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    t = e.contentWindow.document).open(), t.write(r + "script" + o + "document.F=Object" + r + "/script" + o), 
    t.close(), et = t.F; n--; ) delete et[tt][K[n]];
    return et();
}, nt = Object.create || function create(t, e) {
    var n;
    return null !== t ? (Z[tt] = r(t), n = new Z(), Z[tt] = null, 
    // add "__proto__" for Object.getPrototypeOf polyfill
    n[Y] = t) : n = et(), e === undefined ? n : $(n, e);
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
O(O.S, "Object", {
    create: nt
});

var rt = {
    f: Object.getOwnPropertySymbols
}, ot = {
    f: {}.propertyIsEnumerable
}, it = function(t) {
    return Object(C(t));
}, at = Object.assign, ct = !at || o(function() {
    var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
    return t[n] = 7, r.split("").forEach(function(t) {
        e[t] = t;
    }), 7 != at({}, t)[n] || Object.keys(at({}, e)).join("") != r;
}) ? function assign(t, e) {
    for (// eslint-disable-line no-unused-vars
    var n = it(t), r = arguments.length, o = 1, a = rt.f, c = ot.f; r > o; ) for (var s, u = T(arguments[o++]), f = a ? W(u).concat(a(u)) : W(u), l = f.length, p = 0; l > p; ) s = f[p++], 
    i && !c.call(u, s) || (n[s] = u[s]);
    return n;
} : at;

// 19.1.3.1 Object.assign(target, source)
O(O.S + O.F, "Object", {
    assign: ct
});

// 7.2.2 IsArray(argument)
var st = Array.isArray || function isArray(t) {
    return "Array" == I(t);
}, ut = createCommonjsModule(function(e) {
    var n = b("wks"), r = t.Symbol, o = "function" == typeof r;
    (e.exports = function(t) {
        return n[t] || (n[t] = o && r[t] || (o ? r : _)("Symbol." + t));
    }).store = n;
}), ft = ut("species"), lt = function(t) {
    var e;
    return st(t) && (
    // cross-realm fallback
    "function" != typeof (e = t.constructor) || e !== Array && !st(e.prototype) || (e = undefined), 
    n(e) && null === (e = e[ft]) && (e = undefined)), e === undefined ? Array : e;
}, pt = function(t, e) {
    return new (lt(t))(e);
}, ht = function(t, e) {
    return !!t && o(function() {
        // eslint-disable-next-line no-useless-call
        e ? t.call(null, function() {/* empty */}, 1) : t.call(null);
    });
}, dt = function(t, e) {
    var n = 1 == t, r = 2 == t, o = 3 == t, i = 4 == t, a = 6 == t, c = 5 == t || a, s = e || pt;
    return function(e, u, f) {
        for (var l, p, h = it(e), d = T(h), v = S(u, f, 3), m = F(d.length), y = 0, g = n ? s(e, m) : r ? s(e, 0) : undefined; m > y; y++) if ((c || y in d) && (p = v(l = d[y], y, h), 
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
}(0), vt = ht([].forEach, !0);

O(O.P + O.F * !vt, "Array", {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(t /* , thisArg */) {
        return dt(this, t, arguments[1]);
    }
}), 
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
O(O.S, "Array", {
    isArray: st
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var mt = ut("toStringTag"), yt = "Arguments" == I(function() {
    return arguments;
}()), gt = function(t, e) {
    try {
        return t[e];
    } catch (mn) {/* empty */}
}, _t = function(t) {
    var e, n, r;
    return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (n = gt(e = Object(t), mt)) ? n : yt ? I(e) : "Object" == (r = I(e)) && "function" == typeof e.callee ? "Arguments" : r;
}, bt = {};

// ES3 wrong here
bt[ut("toStringTag")] = "z", bt + "" != "[object z]" && A(Object.prototype, "toString", function toString() {
    return "[object " + _t(this) + "]";
}, !0);

// true  -> String#at
// false -> String#codePointAt
var wt = function(t) {
    return function(e, n) {
        var r, o, i = String(C(e)), a = x(n), c = i.length;
        return a < 0 || a >= c ? t ? "" : undefined : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === c || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : r : t ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536;
    };
}, At = {}, Pt = p.f, St = ut("toStringTag"), Mt = function(t, e, n) {
    t && !m(t = n ? t : t.prototype, St) && Pt(t, St, {
        configurable: !0,
        value: e
    });
}, jt = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
d(jt, ut("iterator"), function() {
    return this;
});

var Ot = function(t, e, n) {
    t.prototype = nt(jt, {
        next: h(1, n)
    }), Mt(t, e + " Iterator");
}, kt = G("IE_PROTO"), It = Object.prototype, Tt = Object.getPrototypeOf || function(t) {
    return t = it(t), m(t, kt) ? t[kt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? It : null;
}, Ct = ut("iterator"), Lt = !([].keys && "next" in [].keys()), Et = "@@iterator", Ut = "keys", xt = "values", Nt = function() {
    return this;
}, Ft = function(t, e, n, r, o, i, a) {
    Ot(n, e, r);
    var c, s, u, f = function(t) {
        if (!Lt && t in v) return v[t];
        switch (t) {
          case Ut:
            return function keys() {
                return new n(this, t);
            };

          case xt:
            return function values() {
                return new n(this, t);
            };
        }
        return function entries() {
            return new n(this, t);
        };
    }, l = e + " Iterator", p = o == xt, h = !1, v = t.prototype, m = v[Ct] || v[Et] || o && v[o], y = m || f(o), g = o ? p ? f("entries") : y : undefined, _ = "Array" == e && v.entries || m;
    if (
    // Fix native
    _ && (u = Tt(_.call(new t()))) !== Object.prototype && u.next && (
    // Set @@toStringTag to native iterators
    Mt(u, l, !0), 
    // fix for some old engines
    "function" != typeof u[Ct] && d(u, Ct, Nt)), 
    // fix Array#{values, @@iterator}.name in V8 / FF
    p && m && m.name !== xt && (h = !0, y = function values() {
        return m.call(this);
    }), 
    // Define iterator
    (Lt || h || !v[Ct]) && d(v, Ct, y), 
    // Plug for library
    At[e] = y, At[l] = Nt, o) if (c = {
        values: p ? y : f(xt),
        keys: i ? y : f(Ut),
        entries: g
    }, a) for (s in c) s in v || A(v, s, c[s]); else O(O.P + O.F * (Lt || h), e, c);
    return c;
}, Rt = wt(!0);

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
// 21.1.3.27 String.prototype[@@iterator]()
Ft(String, "String", function(t) {
    this._t = String(t), // target
    this._i = 0;
}, function() {
    var t, e = this._t, n = this._i;
    return n >= e.length ? {
        value: undefined,
        done: !0
    } : (t = Rt(e, n), this._i += t.length, {
        value: t,
        done: !1
    });
});

// 22.1.3.31 Array.prototype[@@unscopables]
var Vt = ut("unscopables"), Jt = Array.prototype;

Jt[Vt] == undefined && d(Jt, Vt, {});

var Bt = function(t) {
    Jt[Vt][t] = !0;
}, Dt = function(t, e) {
    return {
        value: e,
        done: !!t
    };
}, Gt = Ft(Array, "Array", function(t, e) {
    this._t = L(t), // target
    this._i = 0, // next index
    this._k = e;
}, function() {
    var t = this._t, e = this._k, n = this._i++;
    return !t || n >= t.length ? (this._t = undefined, Dt(1)) : Dt(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
}, "values");

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
At.Arguments = At.Array, Bt("keys"), Bt("values"), Bt("entries");

for (var qt = ut("iterator"), zt = ut("toStringTag"), Ht = At.Array, Kt = {
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
}, Wt = W(Kt), $t = 0; $t < Wt.length; $t++) {
    var Qt, Xt = Wt[$t], Yt = Kt[Xt], Zt = t[Xt], te = Zt && Zt.prototype;
    if (te && (te[qt] || d(te, qt, Ht), te[zt] || d(te, zt, Xt), At[Xt] = Ht, Yt)) for (Qt in Gt) te[Qt] || A(te, Qt, Gt[Qt], !0);
}

var ee, ne, re, oe = function(t, e, n, r) {
    if (!(t instanceof e) || r !== undefined && r in t) throw TypeError(n + ": incorrect invocation!");
    return t;
}, ie = function(t, e, n, o) {
    try {
        return o ? e(r(n)[0], n[1]) : e(n);
        // 7.4.6 IteratorClose(iterator, completion)
        } catch (mn) {
        var i = t["return"];
        throw i !== undefined && r(i.call(t)), mn;
    }
}, ae = ut("iterator"), ce = Array.prototype, se = function(t) {
    return t !== undefined && (At.Array === t || ce[ae] === t);
}, ue = ut("iterator"), fe = e.getIteratorMethod = function(t) {
    if (t != undefined) return t[ue] || t["@@iterator"] || At[_t(t)];
}, le = createCommonjsModule(function(t) {
    var e = {}, n = {}, o = t.exports = function(t, o, i, a, c) {
        var s, u, f, l, p = c ? function() {
            return t;
        } : fe(t), h = S(i, a, o ? 2 : 1), d = 0;
        if ("function" != typeof p) throw TypeError(t + " is not iterable!");
        // fast case for arrays with default iterator
                if (se(p)) {
            for (s = F(t.length); s > d; d++) if ((l = o ? h(r(u = t[d])[0], u[1]) : h(t[d])) === e || l === n) return l;
        } else for (f = p.call(t); !(u = f.next()).done; ) if ((l = ie(f, h, u.value, o)) === e || l === n) return l;
    };
    o.BREAK = e, o.RETURN = n;
}), pe = ut("species"), he = function(t, e) {
    var n, o = r(t).constructor;
    return o === undefined || (n = r(o)[pe]) == undefined ? e : P(n);
}, de = function(t, e, n) {
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
}, ve = t.process, me = t.setImmediate, ye = t.clearImmediate, ge = t.MessageChannel, _e = t.Dispatch, be = 0, we = {}, Ae = "onreadystatechange", Pe = function() {
    var t = +this;
    // eslint-disable-next-line no-prototype-builtins
        if (we.hasOwnProperty(t)) {
        var e = we[t];
        delete we[t], e();
    }
}, Se = function(t) {
    Pe.call(t.data);
};

// call something on iterator step with safe closing on error
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
me && ye || (me = function setImmediate(t) {
    for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
    return we[++be] = function() {
        // eslint-disable-next-line no-new-func
        de("function" == typeof t ? t : Function(t), e);
    }, ee(be), be;
}, ye = function clearImmediate(t) {
    delete we[t];
}, 
// Node.js 0.8-
"process" == I(ve) ? ee = function(t) {
    ve.nextTick(S(Pe, t, 1));
} : _e && _e.now ? ee = function(t) {
    _e.now(S(Pe, t, 1));
} : ge ? (re = (ne = new ge()).port2, ne.port1.onmessage = Se, ee = S(re.postMessage, re, 1)) : t.addEventListener && "function" == typeof postMessage && !t.importScripts ? (ee = function(e) {
    t.postMessage(e + "", "*");
}, t.addEventListener("message", Se, !1)) : ee = Ae in s("script") ? function(t) {
    X.appendChild(s("script"))[Ae] = function() {
        X.removeChild(this), Pe.call(t);
    };
} : function(t) {
    setTimeout(S(Pe, t, 1), 0);
});

var Me = {
    set: me,
    clear: ye
}, je = Me.set, Oe = t.MutationObserver || t.WebKitMutationObserver, ke = t.process, Ie = t.Promise, Te = "process" == I(ke), Ce = function() {
    var e, n, r, o = function() {
        var t, o;
        for (Te && (t = ke.domain) && t.exit(); e; ) {
            o = e.fn, e = e.next;
            try {
                o();
            } catch (mn) {
                throw e ? r() : n = undefined, mn;
            }
        }
        n = undefined, t && t.enter();
    };
    // Node.js
    if (Te) r = function() {
        ke.nextTick(o);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
     else if (!Oe || t.navigator && t.navigator.standalone) if (Ie && Ie.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var i = Ie.resolve(undefined);
        r = function() {
            i.then(o);
        };
    } else r = function() {
        // strange IE + webpack dev server bug - use .call(global)
        je.call(t, o);
    }; else {
        var a = !0, c = document.createTextNode("");
        new Oe(o).observe(c, {
            characterData: !0
        }), // eslint-disable-line no-new
        r = function() {
            c.data = a = !a;
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
    }), this.resolve = P(e), this.reject = P(n);
}

var Le = {
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
}, Ue = t.navigator, xe = Ue && Ue.userAgent || "", Ne = function(t, e) {
    if (r(t), n(e) && e.constructor === t) return e;
    var o = Le.f(t);
    return (0, o.resolve)(e), o.promise;
}, Fe = function(t, e, n) {
    for (var r in e) A(t, r, e[r], n);
    return t;
}, Re = ut("species"), Ve = function(e) {
    var n = t[e];
    i && n && !n[Re] && p.f(n, Re, {
        configurable: !0,
        get: function() {
            return this;
        }
    });
}, Je = ut("iterator"), Be = !1;

try {
    var De = [ 7 ][Je]();
    De["return"] = function() {
        Be = !0;
    }, 
    // eslint-disable-next-line no-throw-literal
    Array.from(De, function() {
        throw 2;
    });
} catch (mn) {/* empty */}

var Ge, qe, ze, He, Ke = function(t, e) {
    if (!e && !Be) return !1;
    var n = !1;
    try {
        var r = [ 7 ], o = r[Je]();
        o.next = function() {
            return {
                done: n = !0
            };
        }, r[Je] = function() {
            return o;
        }, t(r);
    } catch (mn) {/* empty */}
    return n;
}, We = Me.set, $e = Ce(), Qe = "Promise", Xe = t.TypeError, Ye = t.process, Ze = Ye && Ye.versions, tn = Ze && Ze.v8 || "", en = t[Qe], nn = "process" == _t(Ye), rn = function() {/* empty */}, on = qe = Le.f, an = !!function() {
    try {
        // correct subclassing with @@species support
        var t = en.resolve(1), e = (t.constructor = {})[ut("species")] = function(t) {
            t(rn, rn);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (nn || "function" == typeof PromiseRejectionEvent) && t.then(rn) instanceof e && 0 !== tn.indexOf("6.6") && -1 === xe.indexOf("Chrome/66");
    } catch (mn) {/* empty */}
}(), cn = function(t) {
    var e;
    return !(!n(t) || "function" != typeof (e = t.then)) && e;
}, sn = function(t, e) {
    if (!t._n) {
        t._n = !0;
        var n = t._c;
        $e(function() {
            for (var r = t._v, o = 1 == t._s, i = 0, a = function(e) {
                var n, i, a, c = o ? e.ok : e.fail, s = e.resolve, u = e.reject, f = e.domain;
                try {
                    c ? (o || (2 == t._h && ln(t), t._h = 1), !0 === c ? n = r : (f && f.enter(), n = c(r), 
                    // may throw
                    f && (f.exit(), a = !0)), n === e.promise ? u(Xe("Promise-chain cycle")) : (i = cn(n)) ? i.call(n, s, u) : s(n)) : u(r);
                } catch (mn) {
                    f && !a && f.exit(), u(mn);
                }
            }; n.length > i; ) a(n[i++]);
 // variable length - can't use forEach
                        t._c = [], t._n = !1, e && !t._h && un(t);
        });
    }
}, un = function(e) {
    We.call(t, function() {
        var n, r, o, i = e._v, a = fn(e);
        if (a && (n = Ee(function() {
            nn ? Ye.emit("unhandledRejection", i, e) : (r = t.onunhandledrejection) ? r({
                promise: e,
                reason: i
            }) : (o = t.console) && o.error && o.error("Unhandled promise rejection", i);
        }), 
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        e._h = nn || fn(e) ? 2 : 1), e._a = undefined, a && n.e) throw n.v;
    });
}, fn = function(t) {
    return 1 !== t._h && 0 === (t._a || t._c).length;
}, ln = function(e) {
    We.call(t, function() {
        var n;
        nn ? Ye.emit("rejectionHandled", e) : (n = t.onrejectionhandled) && n({
            promise: e,
            reason: e._v
        });
    });
}, pn = function(t) {
    var e = this;
    e._d || (e._d = !0, // unwrap
    (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), sn(e, !0));
}, hn = function(t) {
    var e, n = this;
    if (!n._d) {
        n._d = !0, n = n._w || n;
        // unwrap
        try {
            if (n === t) throw Xe("Promise can't be resolved itself");
            (e = cn(t)) ? $e(function() {
                var r = {
                    _w: n,
                    _d: !1
                };
 // wrap
                                try {
                    e.call(t, S(hn, r, 1), S(pn, r, 1));
                } catch (mn) {
                    pn.call(r, mn);
                }
            }) : (n._v = t, n._s = 1, sn(n, !1));
        } catch (mn) {
            pn.call({
                _w: n,
                _d: !1
            }, mn);
 // wrap
                }
    }
};

// constructor polyfill
an || (
// 25.4.3.1 Promise(executor)
en = function Promise(t) {
    oe(this, en, Qe, "_h"), P(t), Ge.call(this);
    try {
        t(S(hn, this, 1), S(pn, this, 1));
    } catch (e) {
        pn.call(this, e);
    }
}, (
// eslint-disable-next-line no-unused-vars
Ge = function Promise(t) {
    this._c = [], // <- awaiting reactions
    this._a = undefined, // <- checked in isUnhandled reactions
    this._s = 0, // <- state
    this._d = !1, // <- done
    this._v = undefined, // <- value
    this._h = 0, // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = !1;
}).prototype = Fe(en.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(t, e) {
        var n = on(he(this, en));
        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
        n.domain = nn ? Ye.domain : undefined, this._c.push(n), this._a && this._a.push(n), 
        this._s && sn(this, !1), n.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    "catch": function(t) {
        return this.then(undefined, t);
    }
}), ze = function() {
    var t = new Ge();
    this.promise = t, this.resolve = S(hn, t, 1), this.reject = S(pn, t, 1);
}, Le.f = on = function(t) {
    return t === en || t === He ? new ze(t) : qe(t);
}), O(O.G + O.W + O.F * !an, {
    Promise: en
}), Mt(en, Qe), Ve(Qe), He = e[Qe], 
// statics
O(O.S + O.F * !an, Qe, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(t) {
        var e = on(this);
        return (0, e.reject)(t), e.promise;
    }
}), O(O.S + O.F * !an, Qe, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(t) {
        return Ne(this, t);
    }
}), O(O.S + O.F * !(an && Ke(function(t) {
    en.all(t)["catch"](rn);
})), Qe, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(t) {
        var e = this, n = on(e), r = n.resolve, o = n.reject, i = Ee(function() {
            var n = [], i = 0, a = 1;
            le(t, !1, function(t) {
                var c = i++, s = !1;
                n.push(undefined), a++, e.resolve(t).then(function(t) {
                    s || (s = !0, n[c] = t, --a || r(n));
                }, o);
            }), --a || r(n);
        });
        return i.e && o(i.v), n.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(t) {
        var e = this, n = on(e), r = n.reject, o = Ee(function() {
            le(t, !1, function(t) {
                e.resolve(t).then(n.resolve, r);
            });
        });
        return o.e && r(o.v), n.promise;
    }
});

e.Promise;

// object
var dn = "1.2.0", vn = function Loader() {};

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
/* eslint-disable */ function _extends$1() {
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
*/ function deepMerge(t) {
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
 */ function treeAttribute(t, e, n) {
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
 */ function includes(t, e) {
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
 */ function noop() {}

/**
 * Script event
 */ var _n = function script_oncallback(t, e, n) {
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
 */ function httpJsonp(t, e) {
    "string" == typeof t && (t = {
        url: t
    }), e || (e = {});
    var n, r, o = deepMerge({}, yn, t || {}), i = _extends$1({
        callback: o.callback,
        load: o.load,
        error: o.error,
        complete: o.complete
    }, e), a = o.params, c = "", s = "", u = o.callbackNamespase, f = o.callbackProp;
    function cleanup() {
        o.keepScriptTag || n.parentNode && n.parentNode.removeChild(n), s && _n(u, s, noop), 
        bn(n, noop), wn(n, noop), r && clearTimeout(r);
    }
    function cancel() {
        c = "cancel", _n(u, s) && cleanup();
    }
    f && "" !== a[f] && (
    // create callback
    s = a[f] ? a[f] : o.callbackName || "jp" + gn++, a[f] = u ? u + "." + s : s);
    var l = o.timeout;
    l && (r = setTimeout(function() {
        c = "error", cleanup(), i.error && i.error(new Error("Request Timeout")), i.complete && i.complete();
    }, l));
    // qs
    var p = o.baseURL + o.url;
    p = (p += queryParams(a, ~p.indexOf("?") ? "&" : "?")).replace("?&", "?"), // create script
    n = document.createElement("script");
    var h = o.scriptAttr;
    for (var d in delete h.text, delete h.src, h) n[d] = h[d];
    s ? _n(u, s, function(t) {
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
    crossOrigin: "anonymous",
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
   */    _inheritsLoose(AMapJSAPILoader, t);
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
}(vn), Sn = {
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
}, Mn = 
/* */
function(t) {
    function AMapUILoader(e) {
        var n;
        n = t.call(this, e) || this;
        var r = Object.assign({}, Sn, e);
        return n.v = r.v, n.protocol = r.protocol, n.path = r.path, n.AMapUIProtocol = r.AMapUIProtocol, 
        n.initAMapUI = r.initAMapUI, n.isAutoInitAMapUI = r.isAutoInitAMapUI, n.crossOrigin = r.crossOrigin, 
        n.keepScriptTag = r.keepScriptTag, // 设置强制加载协议
        "string" == typeof n.AMapUIProtocol && n.setAMapUIProtocol(n.AMapUIProtocol), n;
    }
    /**
   * 加载资源
   * @returns {Promise|null}
   */    _inheritsLoose(AMapUILoader, t);
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
}(vn);

/**
 * AMapJSAPILoader
 */
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
    }, s = i;
    for (var u in a) "function" == typeof a[u] && (s = s[u](c[u]));
    return i;
}

var jn = new (
/* */
function() {
    function Store() {
        this.length = 0, this.__state = {};
    }
    var t = Store.prototype;
    return t.set = function set(t, e) {
        t in this.__state ? this.__state[t] = e : (this.__state[t] = e, this.length++);
    }, t.remove = function remove(t) {
        t in this.__state && (delete this.__state[t], this.length--);
    }, t.get = function get(t) {
        return this.__state[t];
    }, t.getAll = function getAll() {
        return this.__state;
    }, t.clear = function clear() {
        for (var t in this.__state) this.remove(t);
    }, Store;
}())();

function use(t, e) {
    t.install(On, e);
}

var On = {
    version: dn,
    Loader: vn,
    AMapJSAPILoader: Pn,
    AMapUILoader: Mn,
    load: load,
    use: use,
    store: jn
};

export default On;
