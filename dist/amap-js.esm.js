/*!
 * AMapJS v1.0.0
 * 
 * Copyright (c) 2018-present Derek Li
 * Released under the MIT License - https://choosealicense.com/licenses/mit/
 * 
 * https://github.com/iDerekLi/amap-js
 */
/* eslint-disable */
function t(t, n) {
    return t(n = {
        exports: {}
    }, n.exports), n.exports;
}

var n = t(function(t) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
 // eslint-disable-line no-undef
}), r = t(function(t) {
    var n = t.exports = {
        version: "2.6.3"
    };
    "number" == typeof __e && (__e = n);
 // eslint-disable-line no-undef
}), e = (r.version, function(t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
}), o = function(t) {
    if (!e(t)) throw TypeError(t + " is not an object!");
    return t;
}, i = function(t) {
    try {
        return !!t();
    } catch (Ar) {
        return !0;
    }
}, c = !i(function() {
    return 7 != Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a;
}), a = n.document, u = e(a) && e(a.createElement), s = function(t) {
    return u ? a.createElement(t) : {};
}, f = !c && !i(function() {
    return 7 != Object.defineProperty(s("div"), "a", {
        get: function() {
            return 7;
        }
    }).a;
}), l = function(t, n) {
    if (!e(t)) return t;
    var r, o;
    if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
    if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
    if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
    throw TypeError("Can't convert object to primitive value");
}, p = Object.defineProperty, h = {
    f: c ? Object.defineProperty : function(t, n, r) {
        if (o(t), n = l(n, !0), o(r), f) try {
            return p(t, n, r);
        } catch (Ar) {/* empty */}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[n] = r.value), t;
    }
}, d = function(t, n) {
    return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n
    };
}, v = c ? function(t, n, r) {
    return h.f(t, n, d(1, r));
} : function(t, n, r) {
    return t[n] = r, t;
}, y = {}.hasOwnProperty, m = function(t, n) {
    return y.call(t, n);
}, g = 0, b = Math.random(), _ = function(t) {
    return "Symbol(".concat(t === undefined ? "" : t, ")_", (++g + b).toString(36));
}, w = !1, O = t(function(t) {
    var e = "__core-js_shared__", o = n[e] || (n[e] = {});
    (t.exports = function(t, n) {
        return o[t] || (o[t] = n !== undefined ? n : {});
    })("versions", []).push({
        version: r.version,
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
}), P = O("native-function-to-string", Function.toString), S = t(function(t) {
    var e = _("src"), o = "toString", i = ("" + P).split(o);
    r.inspectSource = function(t) {
        return P.call(t);
    }, (t.exports = function(t, r, o, c) {
        var a = "function" == typeof o;
        a && (m(o, "name") || v(o, "name", r)), t[r] !== o && (a && (m(o, e) || v(o, e, t[r] ? "" + t[r] : i.join(String(r)))), 
        t === n ? t[r] = o : c ? t[r] ? t[r] = o : v(t, r, o) : (delete t[r], v(t, r, o)));
    })(Function.prototype, o, function() {
        return "function" == typeof this && this[e] || P.call(this);
    });
}), A = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t;
}, k = function(t, n, r) {
    if (A(t), n === undefined) return t;
    switch (r) {
      case 1:
        return function(r) {
            return t.call(n, r);
        };

      case 2:
        return function(r, e) {
            return t.call(n, r, e);
        };

      case 3:
        return function(r, e, o) {
            return t.call(n, r, e, o);
        };
    }
    return function() {
        return t.apply(n, arguments);
    };
}, j = "prototype", M = function(t, e, o) {
    var i, c, a, u, s = t & M.F, f = t & M.G, l = t & M.S, p = t & M.P, h = t & M.B, d = f ? n : l ? n[e] || (n[e] = {}) : (n[e] || {})[j], y = f ? r : r[e] || (r[e] = {}), m = y[j] || (y[j] = {});
    for (i in f && (o = e), o) 
    // contains in native
    // export native or passed
    a = ((c = !s && d && d[i] !== undefined) ? d : o)[i], 
    // bind timers to global for call from export context
    u = h && c ? k(a, n) : p && "function" == typeof a ? k(Function.call, a) : a, 
    // extend global
    d && S(d, i, a, t & M.U), 
    // export
    y[i] != a && v(y, i, u), p && m[i] != a && (m[i] = a);
};

n.core = r, 
// type bitmap
M.F = 1, // forced
M.G = 2, // global
M.S = 4, // static
M.P = 8, // proto
M.B = 16, // bind
M.W = 32, // wrap
M.U = 64, // safe
M.R = 128;

// real proto method for `library`
var T = M, I = {}.toString, E = function(t) {
    return I.call(t).slice(8, -1);
}, L = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return "String" == E(t) ? t.split("") : Object(t);
}, C = function(t) {
    if (t == undefined) throw TypeError("Can't call method on  " + t);
    return t;
}, U = function(t) {
    return Object(C(t));
}, x = Math.ceil, N = Math.floor, F = function(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? N : x)(t);
}, R = Math.min, V = function(t) {
    return t > 0 ? R(F(t), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
}, B = Array.isArray || function(t) {
    return "Array" == E(t);
}, D = t(function(t) {
    var r = O("wks"), e = n.Symbol, o = "function" == typeof e;
    (t.exports = function(t) {
        return r[t] || (r[t] = o && e[t] || (o ? e : _)("Symbol." + t));
    }).store = r;
}), G = D("species"), z = function(t) {
    var n;
    return B(t) && (
    // cross-realm fallback
    "function" != typeof (n = t.constructor) || n !== Array && !B(n.prototype) || (n = undefined), 
    e(n) && null === (n = n[G]) && (n = undefined)), n === undefined ? Array : n;
}, H = function(t, n) {
    return new (z(t))(n);
}, W = function(t, n) {
    return !!t && i(function() {
        // eslint-disable-next-line no-useless-call
        n ? t.call(null, function() {/* empty */}, 1) : t.call(null);
    });
}, q = function(t, n) {
    var r = 1 == t, e = 2 == t, o = 3 == t, i = 4 == t, c = 6 == t, a = 5 == t || c, u = n || H;
    return function(n, s, f) {
        for (var l, p, h = U(n), d = L(h), v = k(s, f, 3), y = V(d.length), m = 0, g = r ? u(n, y) : e ? u(n, 0) : undefined; y > m; m++) if ((a || m in d) && (p = v(l = d[m], m, h), 
        t)) if (r) g[m] = p; // map
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

T(T.P + T.F * !K, "Array", {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function(t /* , thisArg */) {
        return q(this, t, arguments[1]);
    }
}), 
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
T(T.S, "Array", {
    isArray: B
});

// to indexed object, toObject with fallback for non-array-like ES3 strings
var J = function(t) {
    return L(C(t));
}, Q = Math.max, X = Math.min, Y = function(t, n) {
    return (t = F(t)) < 0 ? Q(t + n, 0) : X(t, n);
}, Z = function(t) {
    return function(n, r, e) {
        var o, i = J(n), c = V(i.length), a = Y(e, c);
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (t && r != r) {
            for (;c > a; ) 
            // eslint-disable-next-line no-self-compare
            if ((o = i[a++]) != o) return !0;
            // Array#indexOf ignores holes, Array#includes - not
                } else for (;c > a; a++) if ((t || a in i) && i[a] === r) return t || a || 0;
        return !t && -1;
    };
}, $ = O("keys"), tt = function(t) {
    return $[t] || ($[t] = _(t));
}, nt = Z(!1), rt = tt("IE_PROTO"), et = function(t, n) {
    var r, e = J(t), o = 0, i = [];
    for (r in e) r != rt && m(e, r) && i.push(r);
    // Don't enum bug & hidden keys
        for (;n.length > o; ) m(e, r = n[o++]) && (~nt(i, r) || i.push(r));
    return i;
}, ot = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), it = Object.keys || function(t) {
    return et(t, ot);
}, ct = c ? Object.defineProperties : function(t, n) {
    o(t);
    for (var r, e = it(n), i = e.length, c = 0; i > c; ) h.f(t, r = e[c++], n[r]);
    return t;
};

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
T(T.S + T.F * !c, "Object", {
    defineProperties: ct
}), 
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
T(T.S + T.F * !c, "Object", {
    defineProperty: h.f
});

var at = n.document, ut = at && at.documentElement, st = tt("IE_PROTO"), ft = function() {/* empty */}, lt = "prototype", pt = function() {
    // Thrash, waste and sodomy: IE GC bug
    var t, n = s("iframe"), r = ot.length, e = "<", o = ">";
    for (n.style.display = "none", ut.appendChild(n), n.src = "javascript:", (// eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    t = n.contentWindow.document).open(), t.write(e + "script" + o + "document.F=Object" + e + "/script" + o), 
    t.close(), pt = t.F; r--; ) delete pt[lt][ot[r]];
    return pt();
}, ht = Object.create || function(t, n) {
    var r;
    return null !== t ? (ft[lt] = o(t), r = new ft(), ft[lt] = null, 
    // add "__proto__" for Object.getPrototypeOf polyfill
    r[st] = t) : r = pt(), n === undefined ? r : ct(r, n);
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
T(T.S, "Object", {
    create: ht
});

var dt = {
    f: Object.getOwnPropertySymbols
}, vt = {
    f: {}.propertyIsEnumerable
}, yt = Object.assign, mt = !yt || i(function() {
    var t = {}, n = {}, r = Symbol(), e = "abcdefghijklmnopqrst";
    return t[r] = 7, e.split("").forEach(function(t) {
        n[t] = t;
    }), 7 != yt({}, t)[r] || Object.keys(yt({}, n)).join("") != e;
}) ? function(t, n) {
    for (// eslint-disable-line no-unused-vars
    var r = U(t), e = arguments.length, o = 1, i = dt.f, c = vt.f; e > o; ) for (var a, u = L(arguments[o++]), s = i ? it(u).concat(i(u)) : it(u), f = s.length, l = 0; f > l; ) c.call(u, a = s[l++]) && (r[a] = u[a]);
    return r;
} : yt;

// 19.1.3.1 Object.assign(target, source)
T(T.S + T.F, "Object", {
    assign: mt
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var gt = D("toStringTag"), bt = "Arguments" == E(function() {
    return arguments;
}()), _t = function(t, n) {
    try {
        return t[n];
    } catch (Ar) {/* empty */}
}, wt = function(t) {
    var n, r, e;
    return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof (r = _t(n = Object(t), gt)) ? r : bt ? E(n) : "Object" == (e = E(n)) && "function" == typeof n.callee ? "Arguments" : e;
}, Ot = {};

// ES3 wrong here
Ot[D("toStringTag")] = "z", Ot + "" != "[object z]" && S(Object.prototype, "toString", function() {
    return "[object " + wt(this) + "]";
}, !0);

// true  -> String#at
// false -> String#codePointAt
var Pt = function(t) {
    return function(n, r) {
        var e, o, i = String(C(n)), c = F(r), a = i.length;
        return c < 0 || c >= a ? t ? "" : undefined : (e = i.charCodeAt(c)) < 55296 || e > 56319 || c + 1 === a || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? t ? i.charAt(c) : e : t ? i.slice(c, c + 2) : o - 56320 + (e - 55296 << 10) + 65536;
    };
}, St = {}, At = h.f, kt = D("toStringTag"), jt = function(t, n, r) {
    t && !m(t = r ? t : t.prototype, kt) && At(t, kt, {
        configurable: !0,
        value: n
    });
}, Mt = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
v(Mt, D("iterator"), function() {
    return this;
});

var Tt = function(t, n, r) {
    t.prototype = ht(Mt, {
        next: d(1, r)
    }), jt(t, n + " Iterator");
}, It = tt("IE_PROTO"), Et = Object.prototype, Lt = Object.getPrototypeOf || function(t) {
    return t = U(t), m(t, It) ? t[It] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Et : null;
}, Ct = D("iterator"), Ut = !([].keys && "next" in [].keys()), xt = "@@iterator", Nt = "keys", Ft = "values", Rt = function() {
    return this;
}, Vt = function(t, n, r, e, o, i, c) {
    Tt(r, n, e);
    var a, u, s, f = function(t) {
        if (!Ut && t in d) return d[t];
        switch (t) {
          case Nt:
          case Ft:
            return function() {
                return new r(this, t);
            };
        }
        return function() {
            return new r(this, t);
        };
    }, l = n + " Iterator", p = o == Ft, h = !1, d = t.prototype, y = d[Ct] || d[xt] || o && d[o], m = y || f(o), g = o ? p ? f("entries") : m : undefined, b = "Array" == n && d.entries || y;
    if (
    // Fix native
    b && (s = Lt(b.call(new t()))) !== Object.prototype && s.next && (
    // Set @@toStringTag to native iterators
    jt(s, l, !0), 
    // fix for some old engines
    "function" != typeof s[Ct] && v(s, Ct, Rt)), 
    // fix Array#{values, @@iterator}.name in V8 / FF
    p && y && y.name !== Ft && (h = !0, m = function() {
        return y.call(this);
    }), 
    // Define iterator
    (Ut || h || !d[Ct]) && v(d, Ct, m), 
    // Plug for library
    St[n] = m, St[l] = Rt, o) if (a = {
        values: p ? m : f(Ft),
        keys: i ? m : f(Nt),
        entries: g
    }, c) for (u in a) u in d || S(d, u, a[u]); else T(T.P + T.F * (Ut || h), n, a);
    return a;
}, Bt = Pt(!0);

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
// 21.1.3.27 String.prototype[@@iterator]()
Vt(String, "String", function(t) {
    this._t = String(t), // target
    this._i = 0;
}, function() {
    var t, n = this._t, r = this._i;
    return r >= n.length ? {
        value: undefined,
        done: !0
    } : (t = Bt(n, r), this._i += t.length, {
        value: t,
        done: !1
    });
});

// 22.1.3.31 Array.prototype[@@unscopables]
var Dt = D("unscopables"), Gt = Array.prototype;

Gt[Dt] == undefined && v(Gt, Dt, {});

var zt = function(t) {
    Gt[Dt][t] = !0;
}, Ht = function(t, n) {
    return {
        value: n,
        done: !!t
    };
}, Wt = Vt(Array, "Array", function(t, n) {
    this._t = J(t), // target
    this._i = 0, // next index
    this._k = n;
}, function() {
    var t = this._t, n = this._k, r = this._i++;
    return !t || r >= t.length ? (this._t = undefined, Ht(1)) : Ht(0, "keys" == n ? r : "values" == n ? t[r] : [ r, t[r] ]);
}, "values");

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
St.Arguments = St.Array, zt("keys"), zt("values"), zt("entries");

for (var qt = D("iterator"), Kt = D("toStringTag"), Jt = St.Array, Qt = {
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
}, Xt = it(Qt), Yt = 0; Yt < Xt.length; Yt++) {
    var Zt, $t = Xt[Yt], tn = Qt[$t], nn = n[$t], rn = nn && nn.prototype;
    if (rn && (rn[qt] || v(rn, qt, Jt), rn[Kt] || v(rn, Kt, $t), St[$t] = Jt, tn)) for (Zt in Wt) rn[Zt] || S(rn, Zt, Wt[Zt], !0);
}

var en, on, cn, an = function(t, n, r, e) {
    if (!(t instanceof n) || e !== undefined && e in t) throw TypeError(r + ": incorrect invocation!");
    return t;
}, un = function(t, n, r, e) {
    try {
        return e ? n(o(r)[0], r[1]) : n(r);
        // 7.4.6 IteratorClose(iterator, completion)
        } catch (Ar) {
        var i = t["return"];
        throw i !== undefined && o(i.call(t)), Ar;
    }
}, sn = D("iterator"), fn = Array.prototype, ln = function(t) {
    return t !== undefined && (St.Array === t || fn[sn] === t);
}, pn = D("iterator"), hn = r.getIteratorMethod = function(t) {
    if (t != undefined) return t[pn] || t["@@iterator"] || St[wt(t)];
}, dn = t(function(t) {
    var n = {}, r = {}, e = t.exports = function(t, e, i, c, a) {
        var u, s, f, l, p = a ? function() {
            return t;
        } : hn(t), h = k(i, c, e ? 2 : 1), d = 0;
        if ("function" != typeof p) throw TypeError(t + " is not iterable!");
        // fast case for arrays with default iterator
                if (ln(p)) {
            for (u = V(t.length); u > d; d++) if ((l = e ? h(o(s = t[d])[0], s[1]) : h(t[d])) === n || l === r) return l;
        } else for (f = p.call(t); !(s = f.next()).done; ) if ((l = un(f, h, s.value, e)) === n || l === r) return l;
    };
    e.BREAK = n, e.RETURN = r;
}), vn = D("species"), yn = function(t, n) {
    var r, e = o(t).constructor;
    return e === undefined || (r = o(e)[vn]) == undefined ? n : A(r);
}, mn = function(t, n, r) {
    var e = r === undefined;
    switch (n.length) {
      case 0:
        return e ? t() : t.call(r);

      case 1:
        return e ? t(n[0]) : t.call(r, n[0]);

      case 2:
        return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);

      case 3:
        return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);

      case 4:
        return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3]);
    }
    return t.apply(r, n);
}, gn = n.process, bn = n.setImmediate, _n = n.clearImmediate, wn = n.MessageChannel, On = n.Dispatch, Pn = 0, Sn = {}, An = "onreadystatechange", kn = function() {
    var t = +this;
    // eslint-disable-next-line no-prototype-builtins
        if (Sn.hasOwnProperty(t)) {
        var n = Sn[t];
        delete Sn[t], n();
    }
}, jn = function(t) {
    kn.call(t.data);
};

// call something on iterator step with safe closing on error
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
bn && _n || (bn = function(t) {
    for (var n = [], r = 1; arguments.length > r; ) n.push(arguments[r++]);
    return Sn[++Pn] = function() {
        // eslint-disable-next-line no-new-func
        mn("function" == typeof t ? t : Function(t), n);
    }, en(Pn), Pn;
}, _n = function(t) {
    delete Sn[t];
}, 
// Node.js 0.8-
"process" == E(gn) ? en = function(t) {
    gn.nextTick(k(kn, t, 1));
} : On && On.now ? en = function(t) {
    On.now(k(kn, t, 1));
} : wn ? (cn = (on = new wn()).port2, on.port1.onmessage = jn, en = k(cn.postMessage, cn, 1)) : n.addEventListener && "function" == typeof postMessage && !n.importScripts ? (en = function(t) {
    n.postMessage(t + "", "*");
}, n.addEventListener("message", jn, !1)) : en = An in s("script") ? function(t) {
    ut.appendChild(s("script"))[An] = function() {
        ut.removeChild(this), kn.call(t);
    };
} : function(t) {
    setTimeout(k(kn, t, 1), 0);
});

var Mn = {
    set: bn,
    clear: _n
}, Tn = Mn.set, In = n.MutationObserver || n.WebKitMutationObserver, En = n.process, Ln = n.Promise, Cn = "process" == E(En), Un = function() {
    var t, r, e, o = function() {
        var n, o;
        for (Cn && (n = En.domain) && n.exit(); t; ) {
            o = t.fn, t = t.next;
            try {
                o();
            } catch (Ar) {
                throw t ? e() : r = undefined, Ar;
            }
        }
        r = undefined, n && n.enter();
    };
    // Node.js
    if (Cn) e = function() {
        En.nextTick(o);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
     else if (!In || n.navigator && n.navigator.standalone) if (Ln && Ln.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var i = Ln.resolve(undefined);
        e = function() {
            i.then(o);
        };
    } else e = function() {
        // strange IE + webpack dev server bug - use .call(global)
        Tn.call(n, o);
    }; else {
        var c = !0, a = document.createTextNode("");
        new In(o).observe(a, {
            characterData: !0
        }), // eslint-disable-line no-new
        e = function() {
            a.data = c = !c;
        };
    }
    return function(n) {
        var o = {
            fn: n,
            next: undefined
        };
        r && (r.next = o), t || (t = o, e()), r = o;
    };
};

// 25.4.1.5 NewPromiseCapability(C)
function xn(t) {
    var n, r;
    this.promise = new t(function(t, e) {
        if (n !== undefined || r !== undefined) throw TypeError("Bad Promise constructor");
        n = t, r = e;
    }), this.resolve = A(n), this.reject = A(r);
}

var Nn = {
    f: function(t) {
        return new xn(t);
    }
}, Fn = function(t) {
    try {
        return {
            e: !1,
            v: t()
        };
    } catch (Ar) {
        return {
            e: !0,
            v: Ar
        };
    }
}, Rn = n.navigator, Vn = Rn && Rn.userAgent || "", Bn = function(t, n) {
    if (o(t), e(n) && n.constructor === t) return n;
    var r = Nn.f(t);
    return (0, r.resolve)(n), r.promise;
}, Dn = function(t, n, r) {
    for (var e in n) S(t, e, n[e], r);
    return t;
}, Gn = D("species"), zn = function(t) {
    var r = n[t];
    c && r && !r[Gn] && h.f(r, Gn, {
        configurable: !0,
        get: function() {
            return this;
        }
    });
}, Hn = D("iterator"), Wn = !1;

try {
    [ 7 ][Hn]()["return"] = function() {
        Wn = !0;
    };
} catch (Ar) {/* empty */}

var qn, Kn, Jn, Qn, Xn = function(t, n) {
    if (!n && !Wn) return !1;
    var r = !1;
    try {
        var e = [ 7 ], o = e[Hn]();
        o.next = function() {
            return {
                done: r = !0
            };
        }, e[Hn] = function() {
            return o;
        }, t(e);
    } catch (Ar) {/* empty */}
    return r;
}, Yn = Mn.set, Zn = Un(), $n = "Promise", tr = n.TypeError, nr = n.process, rr = nr && nr.versions, er = rr && rr.v8 || "", or = n[$n], ir = "process" == wt(nr), cr = function() {/* empty */}, ar = Kn = Nn.f, ur = !!function() {
    try {
        // correct subclassing with @@species support
        var t = or.resolve(1), n = (t.constructor = {})[D("species")] = function(t) {
            t(cr, cr);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (ir || "function" == typeof PromiseRejectionEvent) && t.then(cr) instanceof n && 0 !== er.indexOf("6.6") && -1 === Vn.indexOf("Chrome/66");
    } catch (Ar) {/* empty */}
}(), sr = function(t) {
    var n;
    return !(!e(t) || "function" != typeof (n = t.then)) && n;
}, fr = function(t, n) {
    if (!t._n) {
        t._n = !0;
        var r = t._c;
        Zn(function() {
            for (var e = t._v, o = 1 == t._s, i = 0, c = function(n) {
                var r, i, c, a = o ? n.ok : n.fail, u = n.resolve, s = n.reject, f = n.domain;
                try {
                    a ? (o || (2 == t._h && hr(t), t._h = 1), !0 === a ? r = e : (f && f.enter(), r = a(e), 
                    // may throw
                    f && (f.exit(), c = !0)), r === n.promise ? s(tr("Promise-chain cycle")) : (i = sr(r)) ? i.call(r, u, s) : u(r)) : s(e);
                } catch (Ar) {
                    f && !c && f.exit(), s(Ar);
                }
            }; r.length > i; ) c(r[i++]);
 // variable length - can't use forEach
                        t._c = [], t._n = !1, n && !t._h && lr(t);
        });
    }
}, lr = function(t) {
    Yn.call(n, function() {
        var r, e, o, i = t._v, c = pr(t);
        if (c && (r = Fn(function() {
            ir ? nr.emit("unhandledRejection", i, t) : (e = n.onunhandledrejection) ? e({
                promise: t,
                reason: i
            }) : (o = n.console) && o.error && o.error("Unhandled promise rejection", i);
        }), 
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        t._h = ir || pr(t) ? 2 : 1), t._a = undefined, c && r.e) throw r.v;
    });
}, pr = function(t) {
    return 1 !== t._h && 0 === (t._a || t._c).length;
}, hr = function(t) {
    Yn.call(n, function() {
        var r;
        ir ? nr.emit("rejectionHandled", t) : (r = n.onrejectionhandled) && r({
            promise: t,
            reason: t._v
        });
    });
}, dr = function(t) {
    var n = this;
    n._d || (n._d = !0, // unwrap
    (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), fr(n, !0));
}, vr = function(t) {
    var n, r = this;
    if (!r._d) {
        r._d = !0, r = r._w || r;
        // unwrap
        try {
            if (r === t) throw tr("Promise can't be resolved itself");
            (n = sr(t)) ? Zn(function() {
                var e = {
                    _w: r,
                    _d: !1
                };
 // wrap
                                try {
                    n.call(t, k(vr, e, 1), k(dr, e, 1));
                } catch (Ar) {
                    dr.call(e, Ar);
                }
            }) : (r._v = t, r._s = 1, fr(r, !1));
        } catch (Ar) {
            dr.call({
                _w: r,
                _d: !1
            }, Ar);
 // wrap
                }
    }
};

// constructor polyfill
ur || (
// 25.4.3.1 Promise(executor)
or = function(t) {
    an(this, or, $n, "_h"), A(t), qn.call(this);
    try {
        t(k(vr, this, 1), k(dr, this, 1));
    } catch (n) {
        dr.call(this, n);
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
}).prototype = Dn(or.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function(t, n) {
        var r = ar(yn(this, or));
        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, 
        r.domain = ir ? nr.domain : undefined, this._c.push(r), this._a && this._a.push(r), 
        this._s && fr(this, !1), r.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    "catch": function(t) {
        return this.then(undefined, t);
    }
}), Jn = function() {
    var t = new qn();
    this.promise = t, this.resolve = k(vr, t, 1), this.reject = k(dr, t, 1);
}, Nn.f = ar = function(t) {
    return t === or || t === Qn ? new Jn(t) : Kn(t);
}), T(T.G + T.W + T.F * !ur, {
    Promise: or
}), jt(or, $n), zn($n), Qn = r[$n], 
// statics
T(T.S + T.F * !ur, $n, {
    // 25.4.4.5 Promise.reject(r)
    reject: function(t) {
        var n = ar(this);
        return (0, n.reject)(t), n.promise;
    }
}), T(T.S + T.F * (w || !ur), $n, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function(t) {
        return Bn(w && this === Qn ? or : this, t);
    }
}), T(T.S + T.F * !(ur && Xn(function(t) {
    or.all(t)["catch"](cr);
})), $n, {
    // 25.4.4.1 Promise.all(iterable)
    all: function(t) {
        var n = this, r = ar(n), e = r.resolve, o = r.reject, i = Fn(function() {
            var r = [], i = 0, c = 1;
            dn(t, !1, function(t) {
                var a = i++, u = !1;
                r.push(undefined), c++, n.resolve(t).then(function(t) {
                    u || (u = !0, r[a] = t, --c || e(r));
                }, o);
            }), --c || e(r);
        });
        return i.e && o(i.v), r.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function(t) {
        var n = this, r = ar(n), e = r.reject, o = Fn(function() {
            dn(t, !1, function(t) {
                n.resolve(t).then(r.resolve, e);
            });
        });
        return o.e && e(o.v), r.promise;
    }
});

r.Promise;

// array
/**
 * Loader 基类
 */ var yr = function() {};

/**
 * 加载loader
 * @param loaders
 * @param callbackThen 可选参数 通过回调方式返回，结果集为(a, b, c...)
 * @param callbackCatch 可选参数
 * @param callbackFinally 可选参数
 * @returns {Promise<any[]>} 结果集为([a, b, c...])
 */
function mr(t, n, r, e) {
    var o = [];
    (Array.isArray(t) ? t : [ t ]).forEach(function(t) {
        if (!(t instanceof yr)) throw new TypeError(t + " is not an instance of Loader");
        if ("function" != typeof t.load) throw new TypeError(t.load + " is not a function");
        var n = t.load();
        o.push(n);
    });
    var i = Promise.all(o), c = {
        then: n,
        "catch": r,
        "finally": e
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

function gr() {
    return (gr = Object.assign || function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
        }
        return t;
    }).apply(this, arguments);
}

function br(t, n) {
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
/* eslint-disable */ function _r() {
    return (_r = Object.assign || function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
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
*/ function wr(t) {
    function n(n, r) {
        if ("object" == typeof t[r] && "object" == typeof n) t[r] = wr(t[r], n); else if ("object" == typeof n && null !== n) {
            var e = "[object Array]" === Object.prototype.toString.call(n) ? [] : {};
            t[r] = wr(e, n);
        } else t[r] = n;
    }
    for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) e[o - 1] = arguments[o];
    for (var i = 0, c = e.length; i < c; i++) for (var a in e[i]) n(e[i][a], a);
    return t;
}

/**
 * treeAttribute
 * @param obj
 * @param attrPath
 * @param value
 * @returns {*}
 */ function Or(t, n, r) {
    if ("object" != typeof t || null === t) throw Error("obj is not an Object type");
    if (!n) return t;
    var e = "string" == typeof n ? n.split(".") : n, o = e.length, i = e.shift();
    if ("string" != typeof i || "" === i) throw Error("error attribute path");
    return o > 1 ? Or(t[i], e, r) : r !== undefined ? t[i] = r : t[i];
}

/**
 * 对象转url参数
 * @param data 格式化对象
 * @param prefix 前缀 ["?" | "&" | "" | true | false]
 * @returns {string}
 */ function Pr(t, n) {
    for (var r in n) if (t === n[r]) return !0;
    return !1;
}

function Sr(t, n) {
    void 0 === n && (n = ""), n = "boolean" == typeof n ? "?" : n;
    var r = [], e = function(n) {
        var e = t[n];
        // 去掉为空的参数
                if (Pr(e, [ "", undefined, null ])) return "continue";
        e.constructor === Array ? e.forEach(function(t) {
            r.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(t));
        }) : r.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
    };
    for (var o in t) e(o);
    return r.length ? n + r.join("&") : "";
}

Object.assign(yr.prototype, {
    load: function() {}
});

var Ar = {
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
}, kr = Date.now();

/**
 * Callback nonce.
 */
/**
 * Noop function.
 */ function jr() {}

/**
 * Script event
 */ var Mr = function(t, n, r) {
    var e = Or(window, t);
    if (e = t && !e ? Or(window, t, {}) : e || window, !r) return e[n];
    e[n] = r;
}, Tr = function(t, n) {
    t.onload !== undefined ? t.onload = function() {
        n();
    } : t.onreadystatechange = function() {
        "loaded" != t.readyState && "complete" != t.readyState || (t.onreadystatechange = null, 
        n());
    };
}, Ir = function(t, n) {
    t.onerror = n;
};

/**
 * httpJsonp
 * @param options {Object}
 * @param [receive]
 * @returns {{cancel: cancel}}
 */ function Er(t, n) {
    "string" == typeof t && (t = {
        url: t
    }), n || (n = {});
    var r, e, o = wr({}, Ar, t || {}), i = _r({
        callback: o.callback,
        load: o.load,
        error: o.error
    }, n), c = o.params, a = "", u = "", s = o.callbackNamespase, f = o.callbackProp;
    function l() {
        o.keepScriptTag || r.parentNode && r.parentNode.removeChild(r), u && Mr(s, u, jr), 
        Tr(r, jr), Ir(r, jr), e && clearTimeout(e);
    }
    function p() {
        a = "cancel", Mr(s, u) && l();
    }
    f && "" !== c[f] && (
    // create callback
    u = c[f] ? c[f] : o.callbackName || "jp" + kr++, c[f] = s ? s + "." + u : u);
    var h = o.timeout;
    h && (e = setTimeout(function() {
        a = "error", l(), i.error && i.error(new Error("Request Timeout"));
    }, h));
    // qs
    var d = o.baseURL + o.url;
    d = (d += Sr(c, ~d.indexOf("?") ? "&" : "?")).replace("?&", "?"), // create script
    r = document.createElement("script");
    var v = o.scriptAttr;
    for (var y in delete v.text, delete v.src, v) r[y] = v[y];
    u && Mr(s, u, function(t) {
        a = "callback", l(), i.callback && i.callback(t);
    }), Tr(r, function() {
        l(), "error" !== a && (a = "load", i.load && i.load());
    }), Ir(r, function() {
        a = "error", l(), i.error && i.error(new Error("script error"));
    }), r.src = d;
    var m = document.getElementsByTagName("script")[0] || document.head || document.getElementsByTagName("head")[0];
    return m.parentNode.insertBefore(r, m), {
        cancel: p
    };
}

var Lr = {
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
}, Cr = 
/* */
function(t) {
    function n(n) {
        var r;
        r = t.call(this, n) || this;
        var e = Object.assign({}, Lr, n);
        return r.protocol = e.protocol, r.path = e.path, r.params = gr({
            key: e.key,
            v: e.v
        }, e.params), r.callbackProp = e.callbackProp, r.callbackName = e.callbackName, 
        r.crossOrigin = e.crossOrigin, r.keepScriptTag = e.keepScriptTag, r;
    }
    /**
   * 加载资源
   * @returns {Promise<any>}
   */    br(n, t);
    var r = n.prototype;
    return r.load = function() {
        var t = this;
        return this.__loadPromise ? this.__loadPromise : (this.__loadPromise = new Promise(function(n, r) {
            var e = function() {
                t.__loadPromise = null, n(window.AMap);
            };
            if (t.checkCorrectness()) return e();
            Er({
                url: t.protocol + ("//" === t.path.slice(0, 2) ? t.path : "//" + t.path),
                params: t.params,
                callbackProp: t.callbackProp,
                callbackName: t.callbackName,
                scriptAttr: {
                    async: !0,
                    crossOrigin: t.crossOrigin
                },
                keepScriptTag: t.keepScriptTag,
                callback: e,
                error: function(n) {
                    t.__loadPromise = null, r(n);
                }
            });
        }), this.__loadPromise);
    } // 检查AMapJSAPI正确性
    , r.checkCorrectness = function() {
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
   */ , r.versionCompare = function(t, n) {
        return t === n;
    }, r.setProtocol = function(t) {
        return this.protocol = t, this;
    }, r.setPath = function(t) {
        return this.path = t, this;
    }, r.setParams = function(t) {
        return this.params = t, this;
    }, r.setKey = function(t) {
        return this.params && (this.params.key = t), this;
    }, r.setV = function(t) {
        return this.params && (this.params.v = t), this;
    }, r.setCrossOrigin = function(t) {
        return this.crossOrigin = t, this;
    }, n;
}(yr), Ur = {
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
}, xr = 
/* */
function(t) {
    function n(n) {
        var r;
        r = t.call(this, n) || this;
        var e = Object.assign({}, Ur, n);
        return r.v = e.v, r.protocol = e.protocol, r.path = e.path, r.crossOrigin = e.crossOrigin, 
        r.AMapUIProtocol = e.AMapUIProtocol, r.initAMapUI = e.initAMapUI, r.isAutoInitAMapUI = e.isAutoInitAMapUI, 
        r.keepScriptTag = e.keepScriptTag, // 设置强制加载协议
        "string" == typeof r.AMapUIProtocol && r.setAMapUIProtocol(r.AMapUIProtocol), r;
    }
    /**
   * 加载资源
   * @returns {*}
   */    br(n, t);
    var r = n.prototype;
    return r.load = function() {
        var t = this;
        return this.__loadPromise ? this.__loadPromise : (this.__loadPromise = new Promise(function(n, r) {
            var e = function() {
                t.__loadPromise = null;
                var r = function() {
                    return t.checkCorrectness() ? window.AMapUI : (window[t.initAMapUI](), window.AMapUI);
                };
                n(t.isAutoInitAMapUI ? r() : r);
            };
            if (t.checkCorrectness()) return e();
            var o = t.protocol, i = t.v, c = t.path.replace("{v}", i);
            Er({
                url: o + (c = "//" === c.replace("{v}", i).slice(0, 2) ? c : "//" + c),
                params: t.params,
                callbackProp: !1,
                scriptAttr: {
                    async: !0,
                    crossOrigin: t.crossOrigin
                },
                keepScriptTag: t.keepScriptTag,
                load: e,
                error: function(n) {
                    t.__loadPromise = null, r(n);
                }
            });
        }), this.__loadPromise);
    } // 检查AMapUI正确性
    , r.checkCorrectness = function() {
        if (!window.AMapUI) return !1;
        for (var t = [ "libConf", "uiMods", "docProtocol", "version" ], n = 0; n < t.length; n++) {
            if (!(t[n] in window.AMapUI)) return !1;
        }
        return this.versionCompare(window.AMapUI.libConf.mainVersion, this.v);
    }, r.versionCompare = function(t, n) {
        return t === n;
    }
    /**
   * 删除脚本标签
   */ , r.removeScriptTag = function(t) {
        t.parentNode.removeChild(t);
    }, r.setProtocol = function(t) {
        return this.protocol = t, this;
    }, r.setPath = function(t) {
        return this.path = t, this;
    }, r.setV = function(t) {
        return this.v = t, this;
    }, r.setCrossOrigin = function(t) {
        return this.crossOrigin = t, this;
    }
    /**
   * UI组件加载协议
   * @param AMapUIProtocol ["https:" | "http:"]
   * @returns {AMapUILoader}
   */ , r.setAMapUIProtocol = function(t) {
        var n = "https:" === t ? "https:" : "http:";
        return window.AMapUIProtocol = n, this;
    }, n;
}(yr), Nr = "1.0.0";

export default {
    version: Nr,
    Loader: yr,
    load: mr,
    AMapJSAPILoader: Cr,
    AMapUILoader: xr
};

export { Nr as version, yr as Loader, mr as load, Cr as AMapJSAPILoader, xr as AMapUILoader };
