const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./proxy-viewport-LCGkgIU_.js", "./index-DoSs2pBs.js", "./index-CXFzZnLY.css", "./house-pe3drcZU.js", "./settings-modal-DKGhuxvL.js", "./use-theme-catalog-BlTUgjKo.js", "./is-ref-object-Cpnybx3C.js", "./layout-BJDRqdIF.js", "./history-BRim-xll.js"]))) => i.map(i => d[i]);
import {
    aF as a,
    F as rt,
    an as n,
    au as Yt,
    m as Kt,
    q as je,
    av as Xt,
    ah as Jt,
    v as z,
    z as nt,
    f as D,
    P as ot,
    aJ as Q,
    a1 as _e,
    a3 as H,
    S as he,
    a8 as Qt,
    aN as Zt,
    a0 as ze,
    aU as er,
    aI as ue,
    U as tr,
    af as st,
    ad as Be,
    ap as V,
    aD as rr,
    e as nr,
    B as or,
    _ as sr,
    l as ar
} from "./index-DoSs2pBs.js";
import {
    p as at,
    m as ir,
    u as xe,
    M as cr,
    q as Z,
    A as J,
    o as O,
    b as lr,
    k as ur,
    G as se,
    l as Ce,
    S as pe,
    a as dr,
    C as fr,
    e as Ve,
    c as $e,
    O as We,
    d as Ge,
    i as mr,
    g as pr,
    f as hr,
    h as br,
    n as xr,
    r as gr,
    j as vr
} from "./settings-modal-DKGhuxvL.js";
import {
    S as ge,
    X as it,
    u as yr
} from "./use-theme-catalog-BlTUgjKo.js";
import {
    L as He,
    m as wr
} from "./is-ref-object-Cpnybx3C.js";
import {
    i as Sr,
    l as kr,
    d as Tr,
    g as jr,
    a as Nr,
    c as Er
} from "./layout-BJDRqdIF.js";
import {
    H as ct
} from "./history-BRim-xll.js";

function Ir(...e) {
    const r = !Array.isArray(e[0]),
        t = r ? 0 : -1,
        s = e[0 + t],
        o = e[1 + t],
        u = e[2 + t],
        l = e[3 + t],
        f = Sr(o, u, l);
    return r ? f(s) : f
}
const _r = e => !e.isLayoutDirty && e.willUpdate(!1);

function qe() {
    const e = new Set,
        r = new WeakMap,
        t = () => e.forEach(_r);
    return {
        add: s => {
            e.add(s), r.set(s, s.addEventListener("willUpdate", t))
        },
        remove: s => {
            e.delete(s);
            const o = r.get(s);
            o && (o(), r.delete(s)), t()
        },
        dirty: t
    }
}
const Cr = a.createContext(null);

function Ar() {
    const e = a.useRef(!1);
    return at(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Rr() {
    const e = Ar(),
        [r, t] = a.useState(0),
        s = a.useCallback(() => {
            e.current && t(r + 1)
        }, [r]);
    return [a.useCallback(() => rt.postRender(s), [s]), r]
}
const lt = e => e === !0,
    Ur = e => lt(e === !0) || e === "id",
    Dr = ({
        children: e,
        id: r,
        inherit: t = !0
    }) => {
        const s = a.useContext(He),
            o = a.useContext(Cr),
            [u, l] = Rr(),
            f = a.useRef(null),
            p = s.id || o;
        f.current === null && (Ur(t) && p && (r = r ? p + "-" + r : p), f.current = {
            id: r,
            group: lt(t) && s.group || qe()
        });
        const y = a.useMemo(() => ({
            ...f.current,
            forceRender: u
        }), [l]);
        return n.jsx(He.Provider, {
            value: y,
            children: e
        })
    },
    Lr = {
        ...Nr,
        ...jr,
        ...Tr,
        ...kr
    },
    ut = ir(Lr, Er);

function dt(e) {
    const r = xe(() => Yt(e)),
        {
            isStatic: t
        } = a.useContext(cr);
    if (t) {
        const [, s] = a.useState(e);
        a.useEffect(() => r.on("change", s), [])
    }
    return r
}

function ft(e, r) {
    const t = dt(r()),
        s = () => t.set(r());
    return s(), at(() => {
        const o = () => rt.preRender(s, !1, !0),
            u = e.map(l => l.on("change", o));
        return () => {
            u.forEach(l => l()), Kt(s)
        }
    }), t
}

function Mr(e) {
    je.current = [], e();
    const r = ft(je.current, e);
    return je.current = void 0, r
}

function Or(e, r, t, s) {
    if (typeof e == "function") return Mr(e);
    const u = typeof r == "function" ? r : Ir(r, t, s),
        l = Array.isArray(e) ? Ye(e, u) : Ye([e], ([p]) => u(p)),
        f = Array.isArray(e) ? void 0 : e.accelerate;
    return f && !f.isTransformed && typeof r != "function" && Array.isArray(t) && s?.clamp !== !1 && (l.accelerate = {
        ...f,
        times: r,
        keyframes: t,
        isTransformed: !0
    }), l
}

function Ye(e, r) {
    const t = xe(() => []);
    return ft(e, () => {
        t.length = 0;
        const s = e.length;
        for (let o = 0; o < s; o++) t[o] = e[o].get();
        return r(t)
    })
}
const mt = a.createContext(null);

function Fr(e, r, t, s) {
    if (!s) return e;
    const o = e.findIndex(h => h.value === r);
    if (o === -1) return e;
    const u = s > 0 ? 1 : -1,
        l = e[o + u];
    if (!l) return e;
    const f = e[o],
        p = l.layout,
        y = wr(p.min, p.max, .5);
    return u === 1 && f.layout.max + t > y || u === -1 && f.layout.min + t < y ? Xt(e, o, o + u) : e
}

function Pr({
    children: e,
    as: r = "ul",
    axis: t = "y",
    onReorder: s,
    values: o,
    ...u
}, l) {
    const f = xe(() => ut[r]),
        p = [],
        y = a.useRef(!1),
        h = a.useRef(null),
        g = {
            axis: t,
            groupRef: h,
            registerItem: (v, I) => {
                const _ = p.findIndex(m => v === m.value);
                _ !== -1 ? p[_].layout = I[t] : p.push({
                    value: v,
                    layout: I[t]
                }), p.sort(Br)
            },
            updateOrder: (v, I, _) => {
                if (y.current) return;
                const m = Fr(p, v, I, _);
                if (p !== m) {
                    y.current = !0;
                    const T = [...o];
                    for (let c = 0; c < m.length; c++)
                        if (p[c].value !== m[c].value) {
                            const k = o.indexOf(p[c].value),
                                C = o.indexOf(m[c].value);
                            k !== -1 && C !== -1 && ([T[k], T[C]] = [T[C], T[k]]);
                            break
                        } s(T)
                }
            }
        };
    a.useEffect(() => {
        y.current = !1
    });
    const b = v => {
            h.current = v, typeof l == "function" ? l(v) : l && (l.current = v)
        },
        N = {
            overflowAnchor: "none",
            ...u.style
        };
    return n.jsx(f, {
        ...u,
        style: N,
        ref: b,
        ignoreStrict: !0,
        children: n.jsx(mt.Provider, {
            value: g,
            children: e
        })
    })
}
const zr = a.forwardRef(Pr);

function Br(e, r) {
    return e.layout.min - r.layout.min
}
const de = 50,
    Ke = 25,
    Vr = new Set(["auto", "scroll"]),
    ne = new WeakMap,
    oe = new WeakMap;
let re = null;

function $r() {
    if (re) {
        const e = Ne(re, "y");
        e && (oe.delete(e), ne.delete(e));
        const r = Ne(re, "x");
        r && r !== e && (oe.delete(r), ne.delete(r)), re = null
    }
}

function Wr(e, r) {
    const t = getComputedStyle(e),
        s = r === "x" ? t.overflowX : t.overflowY,
        o = e === document.body || e === document.documentElement;
    return Vr.has(s) || o
}

function Ne(e, r) {
    let t = e?.parentElement;
    for (; t;) {
        if (Wr(t, r)) return t;
        t = t.parentElement
    }
    return null
}

function Gr(e, r, t) {
    const s = r.getBoundingClientRect(),
        o = t === "x" ? Math.max(0, s.left) : Math.max(0, s.top),
        u = t === "x" ? Math.min(window.innerWidth, s.right) : Math.min(window.innerHeight, s.bottom),
        l = e - o,
        f = u - e;
    if (l < de) {
        const p = 1 - l / de;
        return {
            amount: -Ke * p * p,
            edge: "start"
        }
    } else if (f < de) {
        const p = 1 - f / de;
        return {
            amount: Ke * p * p,
            edge: "end"
        }
    }
    return {
        amount: 0,
        edge: null
    }
}

function Hr(e, r, t, s) {
    if (!e) return;
    re = e;
    const o = Ne(e, t);
    if (!o) return;
    const u = r - (t === "x" ? window.scrollX : window.scrollY),
        {
            amount: l,
            edge: f
        } = Gr(u, o, t);
    if (f === null) {
        oe.delete(o), ne.delete(o);
        return
    }
    const p = oe.get(o),
        y = o === document.body || o === document.documentElement;
    if (p !== f) {
        if (!(f === "start" && s < 0 || f === "end" && s > 0)) return;
        oe.set(o, f);
        const g = t === "x" ? o.scrollWidth - (y ? window.innerWidth : o.clientWidth) : o.scrollHeight - (y ? window.innerHeight : o.clientHeight);
        ne.set(o, g)
    }
    if (l > 0) {
        const h = ne.get(o);
        if ((t === "x" ? y ? window.scrollX : o.scrollLeft : y ? window.scrollY : o.scrollTop) >= h) return
    }
    t === "x" ? y ? window.scrollBy({
        left: l
    }) : o.scrollLeft += l : y ? window.scrollBy({
        top: l
    }) : o.scrollTop += l
}

function Xe(e, r = 0) {
    return Jt(e) ? e : dt(r)
}

function qr({
    children: e,
    style: r = {},
    value: t,
    as: s = "li",
    onDrag: o,
    onDragEnd: u,
    layout: l = !0,
    ...f
}, p) {
    const y = xe(() => ut[s]),
        h = a.useContext(mt),
        g = {
            x: Xe(r.x),
            y: Xe(r.y)
        },
        b = Or([g.x, g.y], ([m, T]) => m || T ? 1 : "unset"),
        {
            axis: N,
            registerItem: v,
            updateOrder: I,
            groupRef: _
        } = h;
    return n.jsx(y, {
        drag: N,
        ...f,
        dragSnapToOrigin: !0,
        style: {
            ...r,
            x: g.x,
            y: g.y,
            zIndex: b
        },
        layout: l,
        onDrag: (m, T) => {
            const {
                velocity: c,
                point: k
            } = T, C = g[N].get();
            I(t, C, c[N]), Hr(_.current, k[N], N, c[N]), o && o(m, T)
        },
        onDragEnd: (m, T) => {
            $r(), u && u(m, T)
        },
        onLayoutMeasure: m => {
            v(t, m)
        },
        ref: p,
        ignoreStrict: !0,
        children: e
    })
}
const Yr = a.forwardRef(qr);
const Kr = [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ],
    Xr = z("arrow-left", Kr);
const Jr = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    Qr = z("arrow-right", Jr);
const Zr = [
        ["path", {
            d: "m12.296 3.464 3.02 3.956",
            key: "qash78"
        }],
        ["path", {
            d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",
            key: "1h7j8b"
        }],
        ["path", {
            d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "4lm6w1"
        }],
        ["path", {
            d: "m6.18 5.276 3.1 3.899",
            key: "zjj9t3"
        }]
    ],
    pt = z("clapperboard", Zr);
const en = [
        ["path", {
            d: "M20 4v7a4 4 0 0 1-4 4H4",
            key: "6o5b7l"
        }],
        ["path", {
            d: "m9 10-5 5 5 5",
            key: "1kshq7"
        }]
    ],
    tn = z("corner-down-left", en);
const rn = [
        ["line", {
            x1: "6",
            x2: "10",
            y1: "11",
            y2: "11",
            key: "1gktln"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "9",
            y2: "13",
            key: "qnk9ow"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "12",
            y2: "12",
            key: "krot7o"
        }],
        ["line", {
            x1: "18",
            x2: "18.01",
            y1: "10",
            y2: "10",
            key: "1lcuu1"
        }],
        ["path", {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
            key: "mfqc10"
        }]
    ],
    ht = z("gamepad-2", rn);
const nn = [
        ["path", {
            d: "M8 3H5a2 2 0 0 0-2 2v3",
            key: "1dcmit"
        }],
        ["path", {
            d: "M21 8V5a2 2 0 0 0-2-2h-3",
            key: "1e4gt3"
        }],
        ["path", {
            d: "M3 16v3a2 2 0 0 0 2 2h3",
            key: "wsl5sc"
        }],
        ["path", {
            d: "M16 21h3a2 2 0 0 0 2-2v-3",
            key: "18trek"
        }]
    ],
    on = z("maximize", nn);
const sn = [
        ["circle", {
            cx: "8",
            cy: "18",
            r: "4",
            key: "1fc0mg"
        }],
        ["path", {
            d: "M12 18V2l7 4",
            key: "g04rme"
        }]
    ],
    Ae = z("music-2", sn);
const an = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]
    ],
    bt = z("plus", an);
const cn = [
        ["path", {
            d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
            key: "1p45f6"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }]
    ],
    ln = z("rotate-cw", cn);

function Re(e, r = 2) {
    const [t, s] = a.useState([]), o = a.useRef(null);
    a.useEffect(() => {
        if (e.length < r) {
            s([]);
            return
        }
        const f = setTimeout(async () => {
            o.current && o.current.abort(), o.current = new AbortController;
            try {
                const p = await nt(`/api/autocomplete?q=${encodeURIComponent(e)}`, {
                    signal: o.current.signal
                });
                if (!p.ok) {
                    s([]);
                    return
                }
                const y = await p.json();
                s(y.slice(0, 6).map(h => h.phrase))
            } catch (p) {
                p instanceof Error && p.name !== "AbortError" && s([])
            }
        }, 50);
        return () => {
            clearTimeout(f), o.current && o.current.abort()
        }
    }, [e, r]);
    const u = a.useCallback(() => {
        s([])
    }, []);
    return {
        suggestions: e.length < r ? [] : t,
        clearSuggestions: u
    }
}
const K = "inline-flex h-9 w-9 items-center justify-center rounded-md text-[color-mix(in_srgb,var(--muted)_56%,white_44%)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text)] disabled:opacity-30 disabled:cursor-not-allowed",
    un = a.memo(function ({
        value: r,
        onValueChange: t,
        onSubmit: s,
        onBack: o,
        onForward: u,
        onReload: l,
        onOpenSettings: f,
        onToggleDevtools: p,
        onToggleFullscreen: y,
        devtoolsEnabled: h,
        fullscreenEnabled: g
    }) {
        const {
            suggestions: b,
            clearSuggestions: N
        } = Re(r), v = a.useRef(null), I = a.useRef(null), [_, m] = a.useState(-1), [T, c] = a.useState(!0), k = Z(), C = b.length > 0 && !T;
        a.useEffect(() => {
            const S = U => {
                I.current && !I.current.contains(U.target) && (c(!0), m(-1))
            };
            return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S)
        }, []);
        const R = S => {
                if (S.preventDefault(), c(!0), N(), _ >= 0 && _ < b.length) {
                    t(b[_]), s(b[_]), v.current?.blur(), m(-1);
                    return
                }
                m(-1), v.current?.blur(), s()
            },
            E = S => {
                t(S), c(!0), m(-1), N(), v.current?.blur(), s(S)
            },
            j = S => {
                if (!C || b.length === 0) {
                    S.key === "Escape" && (c(!0), m(-1));
                    return
                }
                if (S.key === "ArrowDown") {
                    S.preventDefault(), m(U => U < b.length - 1 ? U + 1 : U);
                    return
                }
                if (S.key === "ArrowUp") {
                    S.preventDefault(), m(U => U > 0 ? U - 1 : -1);
                    return
                }
                if (S.key === "Enter" && _ >= 0) {
                    S.preventDefault(), E(b[_]);
                    return
                }
                S.key === "Escape" && (c(!0), m(-1))
            };
        return n.jsxs("form", {
            className: "flex items-center gap-2",
            onSubmit: R,
            children: [n.jsxs("div", {
                className: "contents",
                children: [n.jsx("button", {
                    type: "button",
                    "aria-label": "Back",
                    className: K,
                    onClick: o,
                    children: n.jsx(Xr, {
                        size: 15,
                        strokeWidth: 2
                    })
                }), n.jsx("button", {
                    type: "button",
                    "aria-label": "Forward",
                    className: K,
                    onClick: u,
                    children: n.jsx(Qr, {
                        size: 15,
                        strokeWidth: 2
                    })
                }), n.jsx("button", {
                    type: "button",
                    "aria-label": "Reload",
                    className: K,
                    onClick: l,
                    children: n.jsx(ln, {
                        size: 15,
                        strokeWidth: 2
                    })
                })]
            }), n.jsx("label", {
                htmlFor: "chrome-omnibox",
                className: "sr-only",
                children: "Search or type a URL"
            }), n.jsxs("div", {
                ref: I,
                className: "relative ml-1 flex-1",
                children: [n.jsxs("div", {
                    className: `flex h-9 items-center border border-[var(--border)] bg-[var(--surface-2)] px-3 ${C?"rounded-t-md":"rounded-md"}`,
                    children: [n.jsx(ge, {
                        size: 14,
                        strokeWidth: 2,
                        className: "text-[var(--muted)]"
                    }), n.jsx("input", {
                        ref: v,
                        id: "chrome-omnibox",
                        type: "text",
                        placeholder: "Search or type a URL",
                        value: r,
                        onChange: S => {
                            c(!1), m(-1), t(S.target.value)
                        },
                        onKeyDown: j,
                        autoComplete: "off",
                        className: "ml-2 h-full w-full bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--muted)]/90 outline-none"
                    })]
                }), n.jsx(J, {
                    children: C ? n.jsx(O.div, {
                        initial: k ? !1 : {
                            opacity: 0,
                            y: -6
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: k ? {
                            opacity: 0
                        } : {
                            opacity: 0,
                            y: -6
                        },
                        transition: {
                            duration: k ? 0 : .08
                        },
                        className: "absolute left-0 right-0 z-50 overflow-hidden rounded-b-md border-x border-b border-[var(--border)] bg-[var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur",
                        children: b.map((S, U) => n.jsx("button", {
                            type: "button",
                            onClick: () => E(S),
                            className: `w-full border-t border-[var(--border)] px-4 py-2.5 text-left text-sm transition-colors duration-150 first:border-t-0 ${U===_?"bg-[var(--autocomplete-selected-bg)] font-medium text-[var(--text)]":"text-[var(--text)]/90 hover:bg-[var(--autocomplete-selected-bg)]"}`,
                            children: n.jsx("span", {
                                className: "block truncate",
                                children: S
                            })
                        }, S))
                    }) : null
                })]
            }), n.jsx("button", {
                type: "button",
                "aria-label": g ? "Exit fullscreen" : "Enter fullscreen",
                "aria-pressed": g,
                className: `${K} ${g?"bg-[var(--surface-2)] text-[var(--accent)]":""}`,
                onClick: y,
                children: n.jsx(on, {
                    size: 15,
                    strokeWidth: 2
                })
            }), n.jsx("button", {
                type: "button",
                "aria-label": h ? "Close DevTools" : "Open DevTools",
                "aria-pressed": h,
                className: `${K} ${h?"bg-[var(--surface-2)] text-[var(--accent)]":""}`,
                onClick: p,
                children: n.jsx(lr, {
                    size: 15,
                    strokeWidth: 2
                })
            }), n.jsx("button", {
                type: "button",
                "aria-label": "Settings",
                className: K,
                onClick: f,
                children: n.jsx(ur, {
                    size: 15,
                    strokeWidth: 2
                })
            })]
        })
    }),
    dn = a.memo(function ({
        tabs: r,
        onCreateTab: t,
        onActivateTab: s,
        onCloseTab: o,
        onSetTabOrder: u
    }) {
        const [l, f] = a.useState({}), p = Z(), [y, h] = a.useState(null), g = r.map(m => m.id), b = [.22, 1, .36, 1], N = Math.max(r.length, 1), v = N >= 9, I = N >= 14, _ = I ? "2.75rem" : v ? "clamp(4.75rem, 10vw, 8.5rem)" : "clamp(6.5rem, 14vw, 13.75rem)";
        return n.jsx(Dr, {
            id: "tab-strip-horizontal",
            children: n.jsxs("div", {
                className: "inline-flex max-w-full items-center overflow-hidden",
                children: [n.jsx(zr, {
                    axis: "x",
                    values: g,
                    onReorder: u,
                    className: "flex items-center gap-0 overflow-hidden pl-0 pr-0 py-0.5",
                    style: {
                        "--tab-width": _
                    },
                    children: r.map(m => {
                        const T = `${m.id}:${m.faviconUrl??""}`,
                            c = m.motion === "closing",
                            k = m.motion === "opening" && !p,
                            C = p ? {
                                duration: 0,
                                layout: {
                                    duration: 0
                                }
                            } : {
                                duration: c ? .2 : .18,
                                ease: b,
                                layout: {
                                    duration: .24,
                                    ease: b
                                }
                            };
                        return n.jsxs(Yr, {
                            value: m.id,
                            as: "div",
                            dragElastic: .04,
                            dragMomentum: !1,
                            dragTransition: {
                                bounceStiffness: 700,
                                bounceDamping: 34
                            },
                            onDragStart: () => {
                                h(m.id)
                            },
                            onDragEnd: () => {
                                h(null)
                            },
                            className: `group/tab relative h-9 w-[var(--tab-width)] shrink-0 cursor-grab transition-[opacity,box-shadow] duration-100 active:cursor-grabbing ${y===m.id?"z-40 opacity-100 shadow-[0_14px_32px_rgba(0,0,0,0.42)]":"z-0 opacity-100"}`,
                            initial: k ? {
                                opacity: 0,
                                width: 0
                            } : !1,
                            animate: {
                                opacity: c ? 0 : 1,
                                width: c ? 0 : "var(--tab-width)"
                            },
                            transition: C,
                            style: {
                                overflow: "hidden",
                                transformOrigin: "left center"
                            },
                            whileDrag: p ? void 0 : {
                                scale: 1.02,
                                zIndex: 40,
                                transition: {
                                    duration: .16,
                                    ease: b
                                }
                            },
                            layout: !0,
                            children: [n.jsxs("button", {
                                type: "button",
                                onClick: () => {
                                    y || s(m.id)
                                },
                                className: `relative h-full w-full rounded-t-[2.5px] border-r border-[var(--border)] text-left text-sm transition ${m.active?"bg-[var(--surface-2)] text-[var(--text)]":`bg-transparent text-[var(--muted)] hover:bg-[var(--surface-2)]/85 hover:text-[var(--text)] ${I?"px-0":v?"px-2 pr-7":"px-3 pr-9"}`} ${I?"px-0":v?"px-2 pr-7":"px-3 pr-9"}`,
                                onAuxClick: R => {
                                    R.button === 1 && (R.preventDefault(), o(m.id))
                                },
                                title: I ? m.title : void 0,
                                children: [m.active ? n.jsx("span", {
                                    className: "absolute inset-x-0 top-0 h-0.5 rounded-t-[2.5px] bg-[var(--accent)]"
                                }) : null, n.jsxs("span", {
                                    className: `flex h-full items-center ${I?"justify-center":"gap-2"}`,
                                    children: [m.faviconUrl ? l[T] ? n.jsx(se, {
                                        size: 13,
                                        strokeWidth: 2,
                                        className: "shrink-0 text-[var(--muted)]"
                                    }) : n.jsx("img", {
                                        src: m.faviconUrl,
                                        alt: "",
                                        className: "h-4 w-4 shrink-0 rounded-[2px]",
                                        loading: "lazy",
                                        onError: () => {
                                            f(R => ({
                                                ...R,
                                                [T]: !0
                                            }))
                                        }
                                    }) : n.jsx(se, {
                                        size: 13,
                                        strokeWidth: 2,
                                        className: "shrink-0 text-[var(--muted)]"
                                    }), I ? null : n.jsx("span", {
                                        className: "block min-w-0 flex-1 truncate",
                                        children: m.title
                                    })]
                                })]
                            }), !I || m.active ? n.jsx("button", {
                                type: "button",
                                "aria-label": `Close ${m.title}`,
                                onClick: () => o(m.id),
                                className: `absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-sm text-[var(--muted)] transition duration-200 hover:text-[var(--text)] ${I?"opacity-0 group-hover/tab:opacity-95 focus-visible:opacity-95":m.active?"opacity-95":"opacity-65"}`,
                                children: n.jsx(it, {
                                    size: 12,
                                    strokeWidth: 2.2
                                })
                            }) : null]
                        }, m.id)
                    })
                }), n.jsx("button", {
                    type: "button",
                    "aria-label": "New tab",
                    onClick: t,
                    className: "inline-flex h-9 w-9 shrink-0 items-center justify-center border-l border-[var(--border)] text-[var(--accent)] transition duration-200 hover:bg-[var(--surface-2)]",
                    children: n.jsx(bt, {
                        size: 16,
                        strokeWidth: 2
                    })
                })]
            })
        })
    }),
    fn = a.memo(function ({
        tabs: r,
        addressValue: t,
        devtoolsEnabled: s,
        fullscreenEnabled: o,
        onCreateTab: u,
        onActivateTab: l,
        onCloseTab: f,
        onSetTabOrder: p,
        onAddressChange: y,
        onAddressSubmit: h,
        onBack: g,
        onForward: b,
        onReload: N,
        onOpenSettings: v,
        onToggleDevtools: I,
        onToggleFullscreen: _
    }) {
        const m = Z(),
            T = m ? {
                duration: 0
            } : {
                duration: .22,
                ease: [.22, 1, .36, 1]
            };
        return n.jsx(J, {
            mode: "wait",
            initial: !1,
            children: n.jsxs(O.header, {
                className: "relative z-40 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur",
                initial: m ? !1 : {
                    opacity: 0,
                    y: -12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: m ? void 0 : {
                    opacity: 0,
                    y: -8
                },
                transition: T,
                children: [n.jsx("div", {
                    className: "border-b border-[var(--border)] px-0",
                    children: n.jsx(dn, {
                        tabs: r,
                        onCreateTab: u,
                        onActivateTab: l,
                        onCloseTab: f,
                        onSetTabOrder: p
                    })
                }), n.jsx("div", {
                    className: "px-3 py-1.5",
                    children: n.jsx(un, {
                        value: t,
                        onValueChange: y,
                        onSubmit: h,
                        onBack: g,
                        onForward: b,
                        onReload: N,
                        onOpenSettings: v,
                        onToggleDevtools: I,
                        onToggleFullscreen: _,
                        devtoolsEnabled: s,
                        fullscreenEnabled: o
                    })
                })]
            }, "horizontal-shell")
        })
    }),
    Ee = [{
        id: "movies",
        type: "custom",
        kind: "custom",
        custom: true,
        label: "Movies",
        icon: "movies",
        url: "https://cinegram.tv/"
    }, {
        id: "music",
        type: "custom",
        kind: "custom",
        custom: true,
        label: "Music",
        icon: "music",
        url: "https://spotify.com/"
    }, {
        id: "games",
        type: "custom",
        kind: "custom",
        custom: true,
        label: "Games",
        icon: "games",
        url: "/g"
    }, {
        id: "ai",
        type: "custom",
        kind: "custom",
        custom: true,
        label: "AI",
        icon: "ai",
        url: "https://chat.openai.com"
    }, {
        id: "github",
        type: "custom",
        kind: "custom",
        custom: true,
        title: "My GitHub",
        label: "My GitHub",
        icon: "custom",
        url: "https://github.com/mumbojum2",
        imageUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
        faviconUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=64"
    }],
    mn = new Set(["lossless.wtf", "www.lossless.wtf", "monochrome.tf", "www.monochrome.tf", "monochrome.samidy.com", "www.monochrome.samidy.com"]);

function be(e) {
    return mn.has(e.hostname) && (e.hostname = "mono.geeked.wtf", e.protocol = "https:"), e
}

function Ue(e) {
    try {
        return be(new URL(e)).toString()
    } catch {
        return e
    }
}

function ae(e) {
    const r = e.trim();
    if (!r) return null;
    if (r.startsWith("/")) return r;
    const t = /^https?:\/\//i.test(r) ? r : `https://${r}`;
    try {
        const s = new URL(t);
        return s.protocol !== "http:" && s.protocol !== "https:" || !s.hostname.includes(".") ? null : be(s).toString()
    } catch {
        return null
    }
}

function xt(e) {
    if (!e) return [];
    try {
        const r = JSON.parse(e);
        return Array.isArray(r) ? r.map(t => {
            if (!t || typeof t != "object") return null;
            const s = typeof t.id == "string" ? t.id.trim() : "",
                o = typeof t.label == "string" ? t.label.trim() : "",
                u = typeof t.url == "string" ? t.url.trim() : "";
            if (!s || !o || !u) return null;
            const l = ae(u);
            return l ? {
                id: s,
                label: o,
                url: l
            } : null
        }).filter(t => !!t) : []
    } catch {
        return []
    }
}

function gt() {
    return typeof window > "u" ? [] : xt(window.localStorage.getItem(D.customShortcuts))
}

function Ie() {
    if (typeof window > "u") return {};
    try {
        const e = window.localStorage.getItem(`${D.customShortcuts}.hiddenDefaults`);
        if (!e) return {};
        const r = JSON.parse(e);
        if (!r || typeof r != "object") return {};
        const t = Object.entries(r).filter(([, s]) => typeof s == "boolean");
        return Object.fromEntries(t)
    } catch {
        return {}
    }
}

function pn(e) {
    window.localStorage.setItem(`${D.customShortcuts}.hiddenDefaults`, JSON.stringify(e))
}

function Je(e) {
    window.localStorage.setItem(D.customShortcuts, JSON.stringify(e))
}

function vt(e) {
    if (e.startsWith("/")) return null;
    try {
        const r = ae(e);
        if (!r) return null;
        const t = new URL(r).hostname;
        return t ? ot(`/api/favicon/${encodeURIComponent(t)}`) : null
    } catch {
        return null
    }
}

function hn() {
    const e = Ie(),
        r = gt(),
        t = Ee.filter(o => !e[o.id] && o.url).map(o => {
            const u = ae(o.url);
            return u ? {
                id: o.id,
                label: o.label,
                url: u,
                icon: o.icon,
                imageUrl: o.imageUrl,
                custom: !1
            } : null
        }).filter(Boolean),
        s = r.map(o => {
            const u = ae(o.url);
            return u ? {
                id: o.id,
                label: o.label,
                url: u,
                icon: "custom",
                imageUrl: void 0,
                custom: !0
            } : null
        }).filter(Boolean);
    return [...s]
}
const bn = {
        movies: pt,
        music: Ae,
        games: ht,
        ai: Ce,
        history: ct,
        custom: se
    },
    xn = {
        movies: "text-[var(--accent)]",
        music: "text-[var(--accent)]",
        games: "text-[var(--accent)]",
        ai: "text-[var(--accent)]",
        history: "text-[var(--accent)]",
        custom: "text-[var(--accent)]"
    };

function gn({
    item: e
}) {
    const [r, t] = a.useState(!1), s = bn[e.icon], o = e.url ? vt(e.url) : null, u = e.imageUrl ?? o;
    return u && !r ? n.jsx("img", {
        src: u,
        alt: "",
        loading: "lazy",
        className: "h-7 w-7 rounded-full object-cover",
        onError: () => t(!0)
    }) : n.jsx(s, {
        size: 20,
        strokeWidth: 2,
        className: xn[e.icon]
    })
}

function vn({
    onNavigate: e
}) {
    const [r, t] = a.useState(() => gt()), [s, o] = a.useState(() => Ie()), [u, l] = a.useState(!1), [f, p] = a.useState(""), [y, h] = a.useState(""), [g, b] = a.useState(null);
    a.useEffect(() => {
        const c = k => {
            if (k.key !== D.customShortcuts) {
                k.key === `${D.customShortcuts}.hiddenDefaults` && o(Ie());
                return
            }
            t(xt(k.newValue))
        };
        return window.addEventListener("storage", c), () => {
            window.removeEventListener("storage", c)
        }
    }, []);
    const N = a.useMemo(() => [...Ee.filter(c => !s[c.id]), ...r.map(c => ({
            id: c.id,
            label: c.label,
            icon: "custom",
            url: c.url
        }))], [r, s]),
        v = () => {
            l(!1), p(""), h(""), b(null)
        },
        I = () => {
            l(!0)
        },
        _ = c => {
            c.preventDefault();
            const k = f.trim();
            if (!k) {
                b("Bookmark name is required.");
                return
            }
            const C = y.trim();
            if (!C) {
                b("Bookmark URL is required.");
                return
            }
            const R = ae(C);
            if (!R) {
                b("Invalid URL. Use http(s):// or an internal /route path.");
                return
            }
            const E = {
                id: `custom-${Date.now().toString(36)}`,
                label: k,
                url: R
            };
            t(j => {
                const S = [...j, E];
                return Je(S), S
            }), v()
        },
        m = c => {
            t(k => {
                const C = k.filter(R => R.id !== c);
                return Je(C), C
            })
        },
        T = c => {
            o(k => {
                const C = {
                    ...k,
                    [c]: !0
                };
                return pn(C), C
            })
        };
    return n.jsxs(n.Fragment, {
        children: [n.jsxs("div", {
            className: "mx-auto mt-6 flex max-w-[620px] flex-wrap justify-center gap-x-5 gap-y-6",
            children: [N.map(c => {
                const k = () => {
                        if (c.url?.startsWith("/")) {
                            e?.(c.url);
                            return
                        }
                        c.url && e && e(c.url)
                    },
                    C = c.icon === "custom",
                    R = C || Ee.some(E => E.id === c.id);
                return n.jsxs("div", {
                    className: "group/shortcut relative",
                    children: [R ? n.jsx("button", {
                        type: "button",
                        onClick: E => {
                            E.stopPropagation(), C ? m(c.id) : T(c.id)
                        },
                        className: "absolute -right-1 -top-1 z-10 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[11px] text-[var(--muted)] opacity-0 transition hover:text-[var(--text)] group-hover/shortcut:opacity-100 focus-visible:opacity-100",
                        "aria-label": `Delete ${c.label}`,
                        title: "Delete bookmark",
                        children: "x"
                    }) : null, n.jsxs("button", {
                        type: "button",
                        onClick: k,
                        className: "group flex w-24 flex-col items-center gap-2 text-center",
                        children: [n.jsx("span", {
                            className: "flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition group-hover:border-[var(--shortcut-hover-border)] group-hover:bg-[var(--shortcut-hover-bg)]",
                            children: n.jsx(gn, {
                                item: c
                            })
                        }), n.jsx("span", {
                            className: "w-full truncate text-sm text-[var(--text)]/90",
                            children: c.label
                        })]
                    })]
                }, c.id)
            }), n.jsxs("button", {
                type: "button",
                onClick: I,
                className: "group flex w-24 flex-col items-center gap-2 text-center",
                children: [n.jsx("span", {
                    className: "flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition group-hover:border-[var(--shortcut-hover-border)] group-hover:bg-[var(--shortcut-hover-bg)]",
                    children: n.jsx(bt, {
                        size: 20,
                        strokeWidth: 2,
                        className: "text-[var(--accent)]"
                    })
                }), n.jsx("span", {
                    className: "w-full truncate text-sm text-[var(--text)]/90",
                    children: "Add"
                })]
            })]
        }), u ? n.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4",
            children: n.jsxs("form", {
                onSubmit: _,
                className: "w-full max-w-md rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
                children: [n.jsx("h3", {
                    className: "text-base font-semibold text-[var(--text)]",
                    children: "Add Bookmark"
                }), n.jsxs("div", {
                    className: "mt-3 space-y-3",
                    children: [n.jsx("input", {
                        type: "text",
                        value: f,
                        onChange: c => {
                            p(c.target.value), g && b(null)
                        },
                        placeholder: "Bookmark name",
                        className: "w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)]",
                        autoFocus: !0
                    }), n.jsx("input", {
                        type: "text",
                        value: y,
                        onChange: c => {
                            h(c.target.value), g && b(null)
                        },
                        placeholder: "https://example.com",
                        className: "w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)]"
                    }), g ? n.jsx("p", {
                        className: "text-xs text-red-400",
                        children: g
                    }) : null]
                }), n.jsxs("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [n.jsx("button", {
                        type: "button",
                        onClick: v,
                        className: "rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--muted)]/45",
                        children: "Cancel"
                    }), n.jsx("button", {
                        type: "submit",
                        className: "rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]",
                        children: "Save"
                    })]
                })]
            })
        }) : null]
    })
}

function yn({
    value: e,
    searchEngineId: r,
    onValueChange: t,
    onSearchEngineChange: s,
    onSubmit: o,
    onNavigate: u,
    showShortcuts: l = !0
}) {
    const {
        suggestions: f,
        clearSuggestions: p
    } = Re(e), [y, h] = a.useState(-1), [g, b] = a.useState(!1), [N, v] = a.useState(!1), I = Z(), _ = a.useRef(null), m = a.useRef(null), T = a.useRef(null), c = f.length > 0 && !g, k = pe.find(j => j.id === r) ?? pe[0];
    a.useEffect(() => {
        const j = S => {
            m.current && !m.current.contains(S.target) && (b(!0), h(-1))
        };
        return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j)
    }, []), a.useEffect(() => {
        if (!N) return;
        const j = U => {
                T.current && !T.current.contains(U.target) && v(!1)
            },
            S = U => {
                U.key === "Escape" && v(!1)
            };
        return document.addEventListener("mousedown", j), document.addEventListener("keydown", S), () => {
            document.removeEventListener("mousedown", j), document.removeEventListener("keydown", S)
        }
    }, [N]);
    const C = j => {
            j.preventDefault(), b(!0), h(-1), p(), o()
        },
        R = j => {
            t(j), b(!0), h(-1), p(), u && u(j)
        },
        E = j => {
            !c || f.length === 0 || (j.key === "ArrowDown" ? (j.preventDefault(), h(S => S < f.length - 1 ? S + 1 : S)) : j.key === "ArrowUp" ? (j.preventDefault(), h(S => S > 0 ? S - 1 : -1)) : j.key === "Enter" && y >= 0 ? (j.preventDefault(), R(f[y])) : j.key === "Escape" && (b(!0), h(-1)))
        };
    return n.jsxs("section", {
        className: "w-full max-w-3xl text-center",
        children: [n.jsxs("div", {
            className: "mx-auto inline-block",
            children: [n.jsx("h1", {
                className: "brand-wordmark text-[64px] font-semibold tracking-tight text-[var(--accent)] leading-none",
                children: "HIjec"
            }), n.jsx("div", {
                className: "underline-expand mt-4 h-1 w-full rounded-full bg-[var(--accent)]",
                style: {
                    boxShadow: "0 0 18px color-mix(in srgb, var(--accent) 70%, transparent)"
                }
            })]
        }), n.jsxs("form", {
            onSubmit: C,
            className: "relative z-20 mx-auto mt-9 w-full max-w-[620px] px-3 sm:px-0",
            children: [n.jsx("label", {
                htmlFor: "newtab-search",
                className: "sr-only",
                children: "Search the web"
            }), n.jsxs("div", {
                className: `flex h-12 items-center border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] px-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl transition hover:border-[var(--muted)]/45 focus-within:border-[var(--accent)]/70 ${c?"rounded-t-xl":"rounded-xl"}`,
                children: [n.jsx(ge, {
                    size: 18,
                    strokeWidth: 2,
                    className: "text-[var(--muted)]"
                }), n.jsx("input", {
                    ref: _,
                    id: "newtab-search",
                    type: "text",
                    value: e,
                    onChange: j => {
                        b(!1), h(-1), t(j.target.value)
                    },
                    onKeyDown: E,
                    placeholder: `Search ${k.name} or type a URL`,
                    className: "ml-3 h-full w-full bg-transparent text-[15px] text-[var(--text)] placeholder:text-[var(--muted)]/90 outline-none",
                    autoComplete: "off"
                }), n.jsxs("div", {
                    ref: T,
                    className: "relative ml-6 shrink-0",
                    children: [n.jsxs("button", {
                        type: "button",
                        onClick: () => v(j => !j),
                        className: "inline-flex h-7 items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 text-[11px] text-[var(--muted)] transition hover:border-[var(--muted)]/45 hover:text-[var(--text)]",
                        "aria-label": "Select search engine",
                        "aria-haspopup": "listbox",
                        "aria-expanded": N,
                        children: [n.jsx("span", {
                            className: "max-w-[88px] truncate",
                            children: k.name
                        }), n.jsx(dr, {
                            size: 12,
                            className: `transition ${N?"rotate-180":""}`
                        })]
                    }), n.jsx(J, {
                        children: N ? n.jsx(O.div, {
                            initial: I ? !1 : {
                                opacity: 0,
                                y: -6
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: I ? {
                                opacity: 0
                            } : {
                                opacity: 0,
                                y: -6
                            },
                            transition: {
                                duration: I ? 0 : .06
                            },
                            className: "absolute right-0 z-50 mt-1.5 w-44 overflow-hidden rounded-b-xl border-x border-b border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl",
                            children: n.jsx("div", {
                                role: "listbox",
                                "aria-label": "Search engine",
                                className: "max-h-56 overflow-y-auto p-1",
                                children: pe.map(j => {
                                    const S = j.id === k.id;
                                    return n.jsxs("button", {
                                        type: "button",
                                        role: "option",
                                        "aria-selected": S,
                                        onClick: () => {
                                            s(j.id), v(!1)
                                        },
                                        className: `flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs transition ${S?"bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-[var(--accent)]":"text-[var(--text)] hover:bg-[var(--surface-2)]"}`,
                                        children: [n.jsx("span", {
                                            children: j.name
                                        }), S ? n.jsx(fr, {
                                            size: 12
                                        }) : null]
                                    }, j.id)
                                })
                            })
                        }) : null
                    })]
                })]
            }), n.jsx(J, {
                children: c && f.length > 0 ? n.jsx(O.div, {
                    ref: m,
                    initial: I ? !1 : {
                        opacity: 0,
                        y: -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: I ? {
                        opacity: 0
                    } : {
                        opacity: 0,
                        y: -8
                    },
                    transition: {
                        duration: I ? 0 : .08
                    },
                    className: "absolute left-0 right-0 z-30 mx-3 overflow-hidden rounded-b-xl border-x border-b border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:mx-0",
                    children: f.map((j, S) => n.jsx("button", {
                        type: "button",
                        onClick: () => R(j),
                        className: `w-full border-t border-[var(--border)] px-5 py-3 text-left text-[15px] transition-colors duration-150 first:border-t-0 ${S===y?"bg-[var(--autocomplete-selected-bg)] font-medium text-[var(--text)]":"text-[var(--text)]/90 hover:bg-[var(--autocomplete-selected-bg)]"}`,
                        children: n.jsx("span", {
                            className: "block truncate",
                            children: j
                        })
                    }, j))
                }) : null
            })]
        }), l ? n.jsx(vn, {
            onNavigate: u
        }) : null]
    })
}

function wn({
    open: e,
    onClose: r
}) {
    const t = Z();
    return n.jsx(J, {
        initial: !1,
        children: e ? n.jsxs(O.div, {
            className: "fixed inset-0 z-[75] flex items-center justify-center px-4 py-6",
            initial: t ? !1 : Ge,
            animate: We,
            exit: $e,
            transition: t ? {
                duration: 0
            } : Ve,
            onClick: r,
            children: [n.jsx(O.div, {
                "aria-hidden": "true",
                className: "absolute inset-0 bg-[rgba(6,10,18,0.48)] backdrop-blur-[8px]",
                initial: t ? !1 : Ge,
                animate: We,
                exit: $e,
                transition: t ? {
                    duration: 0
                } : Ve
            }), n.jsxs(O.section, {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Static build notice",
                onClick: s => s.stopPropagation(),
                initial: t ? !1 : br,
                animate: hr,
                exit: t ? {
                    opacity: 0
                } : pr,
                transition: t ? {
                    duration: 0
                } : mr,
                className: "w-full max-w-lg overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl",
                children: [n.jsxs("header", {
                    className: "flex items-start justify-between gap-4 border-b border-[color-mix(in_srgb,var(--border)_58%,transparent)] px-5 py-4",
                    children: [n.jsxs("div", {
                        children: [n.jsx("div", {
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] text-[var(--accent)]",
                            children: n.jsx(se, {
                                size: 18,
                                strokeWidth: 2.1
                            })
                        }), n.jsx("h2", {
                            className: "mt-3 text-lg font-semibold text-[var(--text)]",
                            children: "You are on a static build"
                        }), n.jsxs("p", {
                            className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                            children: ["Some features and settings are limited on static builds. To get all features, find an official domain in the", " ", n.jsx("a", {
                                href: "https://discord.gg/ZDq3UYskkK",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "text-[var(--accent)] underline underline-offset-4",
                                children: "Discord server"
                            }), "."]
                        })]
                    }), n.jsx("button", {
                        type: "button",
                        onClick: r,
                        className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] text-[var(--muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
                        "aria-label": "Close notice",
                        children: n.jsx(it, {
                            size: 15,
                            strokeWidth: 2.2
                        })
                    })]
                }), n.jsx("div", {
                    className: "flex items-center justify-end border-t border-[color-mix(in_srgb,var(--border)_58%,transparent)] px-5 py-3",
                    children: n.jsx("button", {
                        type: "button",
                        onClick: r,
                        className: "rounded-md border border-[color-mix(in_srgb,var(--accent)_45%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_14%,var(--surface))] px-3.5 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[color-mix(in_srgb,var(--accent)_22%,var(--surface))]",
                        children: "Continue"
                    })
                })]
            })]
        }) : null
    })
}

function Sn(e, r = 1) {
    const [t, s] = a.useState([]), o = a.useRef(null);
    a.useEffect(() => {
        if (e.length < r) {
            o.current?.abort(), s([]);
            return
        }
        let l = !1;
        const f = async () => {
            o.current?.abort();
            const y = new AbortController;
            o.current = y;
            try {
                const h = await nt(`/api/music-search?q=${encodeURIComponent(e)}`, {
                    signal: y.signal
                });
                if (!h.ok) {
                    l || s([]);
                    return
                }
                const g = await h.json();
                l || s(Array.isArray(g.items) ? g.items.slice(0, 6) : [])
            } catch (h) {
                !l && h instanceof Error && h.name !== "AbortError" && s([])
            }
        }, p = window.setTimeout(f, 25);
        return () => {
            l = !0, window.clearTimeout(p), o.current?.abort()
        }
    }, [r, e]);
    const u = a.useCallback(() => {
        o.current?.abort(), s([])
    }, []);
    return {
        results: e.length < r ? [] : t,
        clearResults: u
    }
}

function kn(e, r) {
    const t = r.trim().toLowerCase();
    return t ? e.label.toLowerCase().includes(t) || e.url.toLowerCase().includes(t) : !0
}
const Tn = {
    movies: pt,
    music: Ae,
    games: ht,
    ai: Ce,
    history: ct,
    custom: se
};

function jn({
    item: e
}) {
    const [r, t] = a.useState(!1);
    if (e.kind === "music") return e.imageUrl && !r ? n.jsx("img", {
        src: e.imageUrl,
        alt: "",
        loading: "lazy",
        className: "h-8 w-8 rounded-md object-cover",
        onError: () => t(!0)
    }) : n.jsx("span", {
        className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]",
        children: n.jsx(Ae, {
            size: 14,
            strokeWidth: 2.1
        })
    });
    if (e.kind === "bookmark") {
        const s = Tn[e.shortcut.icon],
            o = e.shortcut.imageUrl ?? vt(e.shortcut.url);
        return o && !r ? n.jsx("img", {
            src: o,
            alt: "",
            loading: "lazy",
            className: "h-8 w-8 rounded-md object-cover",
            onError: () => t(!0)
        }) : n.jsx("span", {
            className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]",
            children: n.jsx(s, {
                size: 14,
                strokeWidth: 2.1
            })
        })
    }
    return n.jsx("span", {
        className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]",
        children: e.kind === "ai" ? n.jsx(Ce, {
            size: 14,
            strokeWidth: 2.1
        }) : n.jsx(ge, {
            size: 14,
            strokeWidth: 2.1
        })
    })
}

function Nn({
    open: e,
    searchEngineName: r,
    onClose: t,
    onNavigate: s
}) {
    const o = Z(),
        u = a.useRef(null),
        l = a.useRef([]),
        [f, p] = a.useState(""),
        [y, h] = a.useState(0),
        [g, b] = a.useState([]),
        {
            suggestions: N,
            clearSuggestions: v
        } = Re(e ? f : ""),
        {
            results: I,
            clearResults: _
        } = Sn(e ? f : "");
    a.useEffect(() => {
        if (!e) {
            p(""), h(0), v(), _();
            return
        }
        b(hn()), window.setTimeout(() => {
            u.current?.focus(), u.current?.select()
        }, 0)
    }, [_, v, e]);
    const m = a.useMemo(() => {
        const c = f.trim(),
            k = g.filter(E => kn(E, c)).slice(0, c ? 6 : 8).map(E => ({
                id: `bookmark:${E.id}`,
                kind: "bookmark",
                title: E.label,
                subtitle: E.url,
                value: E.url,
                shortcut: E
            }));
        if (!c) return k;
        const C = N.filter(E => E.trim().toLowerCase() !== c.toLowerCase()).slice(0, 6).map(E => ({
                id: `suggestion:${E}`,
                kind: "suggestion",
                title: E,
                subtitle: `Search ${r}`,
                value: E
            })),
            R = I.map(E => ({
                id: `music:${E.kind}:${E.id}`,
                kind: "music",
                title: E.title,
                subtitle: `${E.subtitle} • ${E.source}`,
                value: E.href,
                imageUrl: E.imageUrl
            }));
        return [{
            id: `ai:${c}`,
            kind: "ai",
            title: `Ask AI: ${c}`,
            subtitle: "Send to Lucide AI",
            value: c
        }, ...R, {
            id: `query:${c}`,
            kind: "query",
            title: c,
            subtitle: `Open or search with ${r}`,
            value: c
        }, ...C, ...k]
    }, [I, f, r, g, N]);
    a.useEffect(() => {
        h(c => m.length === 0 ? 0 : Math.min(c, m.length - 1))
    }, [m]), a.useEffect(() => {
        if (!e || m.length === 0) return;
        const c = l.current[y];
        c && c.scrollIntoView({
            block: "nearest"
        })
    }, [m.length, e, y]), a.useEffect(() => {
        if (!e) return;
        const c = k => {
            k.key === "Escape" && (k.preventDefault(), t())
        };
        return window.addEventListener("keydown", c), () => {
            window.removeEventListener("keydown", c)
        }
    }, [t, e]);
    const T = c => {
        c && (s(c), t())
    };
    return n.jsx(J, {
        initial: !1,
        children: e ? n.jsxs(O.div, {
            className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-6",
            initial: o ? !1 : {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: o ? 0 : .08
            },
            onClick: t,
            children: [n.jsx(O.div, {
                "aria-hidden": "true",
                className: "absolute inset-0 bg-[rgba(6,10,18,0.48)] backdrop-blur-[8px]",
                initial: o ? !1 : {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: o ? 0 : .08
                }
            }), n.jsxs(O.section, {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Spotlight search",
                onClick: c => c.stopPropagation(),
                initial: o ? !1 : {
                    opacity: 0,
                    y: -18,
                    scale: .98
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: o ? {
                    opacity: 0
                } : {
                    opacity: 0,
                    y: -12,
                    scale: .98
                },
                transition: {
                    duration: o ? 0 : .1
                },
                className: "w-full max-w-2xl overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl",
                style: {
                    fontFamily: "Manrope Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif"
                },
                children: [n.jsx("div", {
                    className: "border-b border-[var(--border)] px-5 py-4",
                    children: n.jsxs("div", {
                        className: "flex items-center gap-3 rounded-lg border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl",
                        children: [n.jsx(ge, {
                            size: 17,
                            strokeWidth: 2.1,
                            className: "text-[var(--muted)]"
                        }), n.jsx("input", {
                            ref: u,
                            type: "text",
                            value: f,
                            onChange: c => {
                                p(c.target.value), h(0)
                            },
                            onKeyDown: c => {
                                c.key === "ArrowDown" && (c.preventDefault(), h(k => m.length === 0 ? 0 : Math.min(k + 1, m.length - 1))), c.key === "ArrowUp" && (c.preventDefault(), h(k => Math.max(k - 1, 0))), c.key === "Enter" && (c.preventDefault(), T(m[y]))
                            },
                            placeholder: "Search the web, music, bookmarks, or jump somewhere",
                            className: "h-full w-full bg-transparent text-[15px] text-[var(--text)] outline-none placeholder:text-[var(--muted)]/72",
                            autoComplete: "off",
                            spellCheck: !1
                        })]
                    })
                }), n.jsx("div", {
                    className: "max-h-[26rem] overflow-hidden px-3 py-3",
                    onWheel: c => {
                        c.preventDefault()
                    },
                    children: m.length > 0 ? m.map((c, k) => n.jsxs("button", {
                        ref: C => {
                            l.current[k] = C
                        },
                        type: "button",
                        onClick: () => T(c),
                        className: `flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition ${k===y?"bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] text-[var(--text)]":"text-[var(--text)]/92 hover:bg-[var(--surface-2)]"}`,
                        children: [n.jsx(jn, {
                            item: c
                        }), n.jsxs("span", {
                            className: "min-w-0 flex-1",
                            children: [n.jsx("span", {
                                className: "block truncate text-sm font-semibold",
                                children: c.title
                            }), n.jsx("span", {
                                className: "mt-0.5 block truncate text-xs text-[var(--muted)]",
                                children: c.subtitle
                            })]
                        })]
                    }, c.id)) : n.jsxs("div", {
                        className: "px-3 py-8 text-center",
                        children: [n.jsx("p", {
                            className: "text-sm font-medium text-[var(--text)]",
                            children: "Nothing matched that search."
                        }), n.jsx("p", {
                            className: "mt-1 text-xs text-[var(--muted)]",
                            children: "Try a bookmark name, URL, or a web search."
                        })]
                    })
                }), n.jsx("div", {
                    className: "flex items-center justify-end border-t border-[var(--border)] px-5 py-3 text-xs text-[var(--muted)]",
                    children: n.jsxs("span", {
                        className: "inline-flex items-center gap-1.5",
                        children: [n.jsx(tn, {
                            size: 12,
                            strokeWidth: 2.2
                        }), "Open selection"]
                    })
                })]
            })]
        }) : null
    })
}
const X = "New Tab",
    En = [{
        id: "new-tab",
        title: X,
        active: !0,
        motion: null,
        targetUrl: void 0,
        inputValue: ""
    }],
    yt = 250,
    In = 3e4;

function wt() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function St(e) {
    if (Q(e, typeof window < "u" ? window.location.origin : void 0)) return !0;
    try {
        const t = new URL(e);
        return t.protocol === "http:" || t.protocol === "https:"
    } catch {
        return !1
    }
}

function _n() {
    if (typeof window > "u") return [];
    try {
        const e = window.localStorage.getItem(D.webHistory);
        if (!e) return [];
        const r = JSON.parse(e);
        return Array.isArray(r) ? r.map(s => {
            if (!s || typeof s != "object") return null;
            const o = s;
            if (typeof o.url != "string" || !St(o.url)) return null;
            const u = kt(o.url);
            return {
                id: typeof o.id == "string" ? o.id : wt(),
                url: u,
                title: typeof o.title == "string" && o.title.trim() ? o.title.trim() : u,
                faviconUrl: typeof o.faviconUrl == "string" && o.faviconUrl.trim() ? o.faviconUrl : void 0,
                visitedAt: typeof o.visitedAt == "number" ? o.visitedAt : Date.now()
            }
        }).filter(s => s !== null).sort((s, o) => o.visitedAt - s.visitedAt).slice(0, yt) : []
    } catch {
        return []
    }
}

function Qe(e) {
    if (!(typeof window > "u")) try {
        window.localStorage.setItem(D.webHistory, JSON.stringify(e.slice(0, yt)))
    } catch {
        return
    }
}

function kt(e) {
    const r = Q(e, typeof window < "u" ? window.location.origin : void 0);
    return r || Ue(e)
}

function Cn(e) {
    const r = Q(e, typeof window < "u" ? window.location.origin : void 0);
    return r ? _e(r)?.title ?? r : e
}

function Ze(e) {
    if (typeof window > "u" || !St(e.url)) return;
    const r = kt(e.url),
        t = typeof e.visitedAt == "number" ? e.visitedAt : Date.now(),
        s = e.title.trim() || Cn(r),
        o = _n(),
        u = o[0];
    if (u && u.url === r && Math.abs(u.visitedAt - t) <= In) {
        Qe([{
            ...u,
            title: s,
            faviconUrl: e.faviconUrl ?? u.faviconUrl,
            visitedAt: t
        }, ...o.slice(1)]);
        return
    }
    Qe([{
        id: wt(),
        url: r,
        title: s,
        faviconUrl: e.faviconUrl,
        visitedAt: t
    }, ...o])
}
const An = 190,
    Rn = 210;

function Un(e, r) {
    switch (r.type) {
    case "ACTIVATE":
        return e.map(t => ({
            ...t,
            active: t.id === r.id
        }));
    case "CREATE":
        return [...e.map(t => ({
            ...t,
            active: !1
        })), {
            id: r.id,
            title: X,
            active: !0,
            motion: "opening",
            inputValue: ""
        }];
    case "CLOSE_START":
        return e.length <= 1 ? e : e.map(t => t.id === r.id ? {
            ...t,
            motion: "closing"
        } : t);
    case "CLOSE_COMPLETE": {
        if (e.length <= 1) return e.map(l => ({
            ...l,
            motion: null
        }));
        const t = e.findIndex(l => l.id === r.id);
        if (t === -1) return e;
        const s = e[t].active,
            o = e.filter(l => l.id !== r.id);
        if (!s) return o;
        const u = Math.max(0, Math.min(t, o.length - 1));
        return o.map((l, f) => ({
            ...l,
            active: f === u
        }))
    }
    case "CLEAR_MOTION":
        return e.map(t => t.id === r.id ? {
            ...t,
            motion: null
        } : t);
    case "RESET":
        return e.map(t => t.id === r.id ? {
            ...t,
            title: X,
            targetUrl: void 0,
            inputValue: "",
            faviconUrl: void 0
        } : t);
    case "UPDATE_INPUT":
        return e.map(t => t.id === r.id ? {
            ...t,
            inputValue: r.value
        } : t);
    case "SET_ORDER": {
        const t = new Map(e.map(u => [u.id, u])),
            s = r.ids.map(u => t.get(u)).filter(u => !!u);
        if (s.length === e.length) return s;
        const o = e.filter(u => !r.ids.includes(u.id));
        return [...s, ...o]
    }
    case "NAVIGATE":
        return e.map(t => t.id === r.id ? {
            ...t,
            targetUrl: r.url,
            inputValue: r.url,
            title: r.title,
            faviconUrl: r.faviconUrl
        } : t);
    case "UPDATE_METADATA":
        return e.map(t => t.id !== r.id ? t : {
            ...t,
            targetUrl: r.metadata.url?.trim() || t.targetUrl,
            inputValue: r.metadata.url?.trim() ? r.metadata.url : t.inputValue,
            title: r.metadata.title?.trim() || t.title,
            faviconUrl: r.metadata.faviconUrl ?? t.faviconUrl
        });
    default:
        return e
    }
}

function Dn(e) {
    if (!H().persistTabs) return e;
    try {
        const t = localStorage.getItem(D.tabs);
        if (!t) return e;
        const s = JSON.parse(t);
        if (Array.isArray(s) && s.length > 0) return s.map(o => {
            const u = {
                    ...o,
                    motion: null
                },
                l = typeof o.targetUrl == "string" ? o.targetUrl : "",
                f = typeof o.inputValue == "string" ? o.inputValue : "",
                y = Q(l || f, window.location.origin);
            if (!y) return u;
            const h = _e(y);
            return h ? {
                ...u,
                targetUrl: y,
                inputValue: y,
                title: h.title,
                faviconUrl: h.faviconUrl
            } : u
        })
    } catch {}
    return e
}

function Ln(e) {
    let r = 0;
    for (const t of e) {
        const s = t.id.match(/^tab-(\d+)$/);
        if (s) {
            const o = parseInt(s[1], 10);
            o > r && (r = o)
        }
    }
    return r + 1
}

function Mn(e) {
    const [r, t] = a.useReducer(Un, e, Dn);
    return a.useEffect(() => {
        if (H().persistTabs) try {
            localStorage.setItem(D.tabs, JSON.stringify(r))
        } catch {} else localStorage.removeItem(D.tabs)
    }, [r]), {
        tabs: r,
        activateTab: g => t({
            type: "ACTIVATE",
            id: g
        }),
        createTab: () => {
            const g = `tab-${Ln(r)}`;
            return t({
                type: "CREATE",
                id: g
            }), setTimeout(() => {
                t({
                    type: "CLEAR_MOTION",
                    id: g
                })
            }, An), g
        },
        closeTab: g => {
            t({
                type: "CLOSE_START",
                id: g
            }), setTimeout(() => {
                t({
                    type: "CLOSE_COMPLETE",
                    id: g
                })
            }, Rn)
        },
        resetTab: g => {
            t({
                type: "RESET",
                id: g
            })
        },
        updateInput: (g, b) => {
            t({
                type: "UPDATE_INPUT",
                id: g,
                value: b
            })
        },
        setTabOrder: g => {
            t({
                type: "SET_ORDER",
                ids: g
            })
        },
        navigateTab: (g, b, N, v) => {
            t({
                type: "NAVIGATE",
                id: g,
                url: b,
                title: N,
                faviconUrl: v
            }), Ze({
                url: b,
                title: N,
                faviconUrl: v
            })
        },
        updateTabMetadata: (g, b) => {
            t({
                type: "UPDATE_METADATA",
                id: g,
                metadata: b
            }), typeof b.url == "string" && b.url.trim() && Ze({
                url: b.url,
                title: b.title?.trim() || b.url,
                faviconUrl: b.faviconUrl
            })
        }
    }
}

function On(e) {
    const r = e.trim();
    if (!r) return "";
    try {
        return be(new URL(r)).toString()
    } catch {}
    try {
        const s = new URL(`http://${r}`);
        if (s.hostname.includes(".")) return be(s).toString()
    } catch {}
    return xr() + encodeURIComponent(r)
}

function Fn(e) {
    if (typeof window > "u") return null;
    const r = Q(e, window.location.origin);
    if (!r) return null;
    const t = _e(r);
    return t ? {
        url: r,
        title: t.title,
        faviconUrl: t.faviconUrl
    } : null
}

function Tt(e) {
    try {
        const r = new URL(Ue(e)).hostname;
        return r ? ot(`/api/favicon/${encodeURIComponent(r)}`) : void 0
    } catch {
        return
    }
}

function et(e) {
    const r = Fn(e);
    if (r) return r;
    const t = On(e);
    if (!t) return null;
    let s = X;
    try {
        s = new URL(Ue(t)).hostname || X
    } catch {
        s = X
    }
    const o = Tt(t);
    return {
        url: t,
        title: s,
        faviconUrl: o
    }
}

function Pn(e) {
    const {
        tabs: r,
        activateTab: t,
        createTab: s,
        closeTab: o,
        resetTab: u,
        updateInput: l,
        setTabOrder: f,
        navigateTab: p,
        updateTabMetadata: y
    } = Mn(e), h = a.useMemo(() => r.find(_ => _.active) ?? r[0] ?? null, [r]);
    return {
        tabs: r,
        activeTab: h,
        activateTab: t,
        createTab: s,
        closeTab: o,
        resetActiveTab: () => {
            h && u(h.id)
        },
        updateActiveInput: _ => {
            h && l(h.id, _)
        },
        setTabOrder: f,
        navigateTabById: (_, m) => {
            const T = et(m);
            return T ? (p(_, T.url, T.title, T.faviconUrl), T.url) : ""
        },
        navigateActiveTab: _ => {
            if (!h) return "";
            const m = _ ?? h.inputValue,
                T = et(m);
            return T ? (p(h.id, T.url, T.title, T.faviconUrl), T.url) : ""
        },
        updateTabFromFrame: (_, m) => {
            const T = m.url ? Tt(m.url) : void 0;
            y(_, {
                ...m,
                faviconUrl: T
            })
        }
    }
}

function zn() {
    const [e, r] = a.useState(!1), [t, s] = a.useState(0), o = a.useRef(null), u = a.useRef(null), l = a.useRef(0), f = () => {
        o.current !== null && (window.clearInterval(o.current), o.current = null)
    }, p = () => {
        u.current !== null && (window.clearTimeout(u.current), u.current = null)
    }, y = () => {
        p(), e || (l.current = Date.now()), r(!0), s(b => b > .08 ? b : .08), o.current === null && (o.current = window.setInterval(() => {
            s(b => b >= .86 ? b : Math.min(.86, b + Math.max((.86 - b) * .14, .008)))
        }, 130))
    }, h = () => {
        r(!0), s(b => Math.max(b, .93))
    }, g = () => {
        f(), p(), r(!0), s(1);
        const b = Date.now() - l.current,
            v = Math.max(0, 320 - b);
        u.current = window.setTimeout(() => {
            r(!1), s(0), u.current = null
        }, v + 180)
    };
    return a.useEffect(() => () => {
        f(), p()
    }, []), {
        visible: e,
        progress: t,
        start: y,
        settle: h,
        done: g
    }
}

function Bn(e) {
    const [r, t] = a.useState(null), s = a.useRef(null);
    return a.useEffect(() => {
        s.current = r
    }, [r]), {
        loadingTabId: r,
        startForTab: f => {
            t(f), s.current = f, e.start()
        },
        settleForTab: f => {
            s.current === f && e.settle()
        },
        doneForTab: f => {
            s.current === f && (e.done(), t(null), s.current = null)
        }
    }
}

function Vn() {
    const [e, r] = a.useState(null);
    return a.useEffect(() => {
        let t = !1,
            s = null;
        const o = async () => {
            const u = await gr();
            if (t) return;
            const l = u ? URL.createObjectURL(u) : null;
            r(f => (f && URL.revokeObjectURL(f), l)), s = l
        };
        return o(), window.addEventListener(he, o), () => {
            t = !0, window.removeEventListener(he, o), s && URL.revokeObjectURL(s)
        }
    }, []), e
}

function $n() {
    const [e, r] = a.useState(() => H().newTabBehavior === "shortcuts"), [t, s] = a.useState(() => H().searchEngine), [o, u] = a.useState(() => H().globalShortcutModifier);
    return a.useEffect(() => {
        const l = () => {
            const f = H();
            r(f.newTabBehavior === "shortcuts"), s(f.searchEngine), u(f.globalShortcutModifier)
        };
        return window.addEventListener("storage", l), window.addEventListener(he, l), () => {
            window.removeEventListener("storage", l), window.removeEventListener(he, l)
        }
    }, []), {
        showShortcuts: e,
        searchEngineId: t,
        setSearchEngineId: s,
        globalShortcutModifier: o
    }
}
const fe = "lucide-eruda-script",
    Wn = "lucide-eruda-container",
    Gn = "https://cdn.jsdelivr.net/npm/eruda@3.4.3/eruda.js";

function Hn(e) {
    const r = a.useRef(new Map),
        t = a.useCallback(l => {
            if (l) try {
                const f = l.contentWindow,
                    p = l.contentDocument;
                f?.eruda?.destroy?.(), p?.getElementById(fe)?.remove(), p?.getElementById(Wn)?.remove()
            } catch {
                return
            }
        }, []),
        s = a.useCallback(async l => {
            const f = e.current?.get(l);
            if (!f?.contentDocument || !f.contentWindow) return;
            const p = f.contentWindow,
                y = f.contentDocument,
                h = () => {
                    p.eruda && (p.eruda.init(), p.eruda.show())
                };
            if (p.eruda) {
                h();
                return
            }
            if (y.getElementById(fe)) return;
            const b = y.createElement("script");
            b.id = fe, b.type = "text/javascript", b.src = Gn, b.crossOrigin = "anonymous";
            try {
                if (b.addEventListener("load", () => {
                        r.current.delete(l), window.setTimeout(h, 0)
                    }, {
                        once: !0
                    }), b.addEventListener("error", () => {
                        r.current.delete(l), b.remove()
                    }, {
                        once: !0
                    }), !y.head) {
                    r.current.delete(l), b.remove();
                    return
                }
                y.head.appendChild(b)
            } catch {
                r.current.delete(l), b.remove()
            }
            const N = window.setTimeout(() => {
                r.current.delete(l), y.getElementById(fe)?.remove()
            }, 15e3);
            r.current.set(l, N)
        }, [e]),
        o = a.useCallback(l => {
            const f = r.current.get(l);
            f !== void 0 && (window.clearTimeout(f), r.current.delete(l))
        }, []),
        u = a.useCallback(l => {
            for (const [f, p] of r.current.entries()) l.has(f) || (window.clearTimeout(p), r.current.delete(f))
        }, []);
    return a.useEffect(() => {
        const l = r.current;
        return () => {
            for (const f of l.values()) window.clearTimeout(f);
            l.clear()
        }
    }, []), {
        destroyForFrame: t,
        injectIntoFrame: s,
        clearPendingForTab: o,
        clearPendingForRemovedTabs: u
    }
}
const qn = a.lazy(() => sr(() => import("./proxy-viewport-LCGkgIU_.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
        import.meta.url).then(e => ({
        default: e.ProxyViewport
    }))),
    Yn = "1",
    tt = "1";

function me(e) {
    return st(e.trim())
}

function Kn({
    initialInternalPath: e,
    initialExternalUrl: r
} = {}) {
    const {
        tabs: t,
        activeTab: s,
        activateTab: o,
        createTab: u,
        closeTab: l,
        resetActiveTab: f,
        setTabOrder: p,
        updateActiveInput: y,
        navigateTabById: h,
        navigateActiveTab: g,
        updateTabFromFrame: b
    } = Pn(En), N = zn(), v = Bn(N), {
        activeTheme: I
    } = yr(), {
        showShortcuts: _,
        searchEngineId: m,
        setSearchEngineId: T,
        globalShortcutModifier: c
    } = $n(), k = Vn(), [C, R] = a.useState({}), [E, j] = a.useState(!1), [S, U] = a.useState({}), [ve, q] = a.useState(!1), [jt, Nt] = a.useState(!1), [Et, It] = a.useState(!1), F = a.useRef(new Map), Y = a.useRef(new Map), ee = a.useRef(!1), ye = a.useRef(null), we = a.useRef({
        url: "",
        ts: 0
    }), w = s?.id ?? "", L = s?.targetUrl?.trim() ?? "", De = w ? C[w] ?? "" : "", _t = pe.find(i => i.id === m)?.name ?? "the web", Le = L.length === 0, Ct = ar(c, "F"), Me = t.filter(i => (i.targetUrl?.trim() ?? "").length > 0), At = Me.filter(i => !me(i.targetUrl?.trim() ?? "")), Rt = Me.filter(i => me(i.targetUrl?.trim() ?? "")), Ut = N.visible && !!w && v.loadingTabId === w, Dt = w ? S[w] === !0 : !1, Oe = !1, ie = a.useCallback(() => {
        Qt()
    }, []);
    a.useEffect(() => {
        Zt(Oe)
    }, [Oe]);
    const B = Hn(F),
        ce = i => {
            const d = i.trim();
            d && (me(d) || rr())
        },
        Lt = a.useCallback(() => {
            if (!w) return;
            const i = Y.current.get(w);
            if (i && i.index > 0) {
                i.index -= 1;
                const x = i.entries[i.index];
                v.startForTab(w), h(w, x);
                return
            }
            F.current.get(w)?.contentWindow?.history.back()
        }, [w, h, v]),
        Mt = a.useCallback(() => {
            if (!w) return;
            const i = Y.current.get(w);
            if (i && i.index < i.entries.length - 1) {
                i.index += 1;
                const x = i.entries[i.index];
                v.startForTab(w), h(w, x);
                return
            }
            F.current.get(w)?.contentWindow?.history.forward()
        }, [w, h, v]),
        te = a.useCallback(() => {
            if (!w) return;
            v.startForTab(w);
            const i = F.current.get(w);
            if (!i) {
                v.doneForTab(w);
                return
            }
            if (me(L)) {
                const d = ze(L),
                    x = `${d}${d.includes("?")?"&":"?"}r=${Date.now()}`;
                i.src = x;
                return
            }
            try {
                i.contentWindow?.location.reload()
            } catch {
                v.doneForTab(w)
            }
        }, [w, L, v]);
    a.useEffect(() => {
        const i = () => {
            const d = w ? F.current.get(w) : null;
            It(!!(d && document.fullscreenElement === d))
        };
        return document.addEventListener("fullscreenchange", i), i(), () => {
            document.removeEventListener("fullscreenchange", i)
        }
    }, [w]), a.useEffect(() => {
        const i = new Set(t.map(d => d.id));
        for (const [d] of Y.current.entries()) i.has(d) || Y.current.delete(d);
        for (const d of t) {
            const x = d.targetUrl?.trim() ?? "";
            if (!x) continue;
            const A = Y.current.get(d.id);
            if (!A) {
                Y.current.set(d.id, {
                    entries: [x],
                    index: 0
                });
                continue
            }
            A.entries[A.index] !== x && (A.entries = [...A.entries.slice(0, A.index + 1), x], A.index = A.entries.length - 1)
        }
    }, [t]), a.useEffect(() => {
        const i = new Set(t.map(d => d.id));
        U(d => {
            const x = Object.entries(d).filter(([A, G]) => G && i.has(A));
            return x.length === Object.keys(d).length ? d : Object.fromEntries(x)
        }), B.clearPendingForRemovedTabs(i)
    }, [t, B]), a.useEffect(() => {
        const i = d => {
            d.defaultPrevented || d.isComposing || E || Be(d.target) || V(d, c, "F") && (d.preventDefault(), q(x => !x))
        };
        return window.addEventListener("keydown", i), () => {
            window.removeEventListener("keydown", i)
        }
    }, [c, E]), a.useEffect(() => {
        const i = d => {
            if (H().confirmLeave) return d.preventDefault(), d.returnValue = "", ""
        };
        return window.addEventListener("beforeunload", i), () => window.removeEventListener("beforeunload", i)
    }, []), a.useEffect(() => {
        Le && ie()
    }, [Le, ie]);
    const Ot = a.useCallback(() => {
        window.localStorage.setItem(D.staticBuildNoticeVersion, Yn), Nt(!1), ie()
    }, [ie]);
    a.useEffect(() => {
        (window.localStorage.getItem(D.firstVisitPromptVersion) ?? "") !== tt && window.localStorage.setItem(D.firstVisitPromptVersion, tt)
    }, []);
    const Ft = a.useCallback(i => {
            T(i), er("searchEngine", i)
        }, []),
        $ = a.useCallback(() => u(), [u]),
        le = a.useCallback(i => {
            const d = i.trim();
            if (!d) return;
            const x = Date.now();
            if (we.current.url === d && x - we.current.ts < 750) return;
            we.current = {
                url: d,
                ts: x
            }, ce(d);
            const A = $();
            v.startForTab(A), h(A, d)
        }, [$, h, v]),
        Se = a.useCallback(i => {
            l(i)
        }, [l]),
        Pt = a.useCallback(i => {
            p(i)
        }, [p]),
        zt = a.useCallback(async () => {
            const i = w ? F.current.get(w) : null;
            if (i) {
                if (document.fullscreenElement === i) {
                    await document.exitFullscreen().catch(() => {});
                    return
                }
                await i.requestFullscreen().catch(() => {})
            }
        }, [w]),
        Fe = a.useCallback(() => {
            const i = document.getElementById("chrome-omnibox");
            i && (i.focus(), i.select())
        }, []),
        ke = a.useCallback(i => {
            if (!w || t.length <= 1) return;
            const d = t.findIndex(G => G.id === w);
            if (d === -1) return;
            const x = (d + i + t.length) % t.length,
                A = t[x];
            A && o(A.id)
        }, [w, o, t]),
        P = a.useCallback((i, d) => {
            if (i === "spotlight") {
                q(x => !x);
                return
            }
            if (i === "new-tab") {
                $();
                return
            }
            if (i === "close-tab") {
                if (!w || t.length <= 1) return;
                Se(w);
                return
            }
            if (i === "reload-tab") {
                te();
                return
            }
            if (i === "focus-address-bar") {
                Fe();
                return
            }
            if (i === "next-tab") {
                ke(1);
                return
            }
            if (i === "previous-tab") {
                ke(-1);
                return
            }
            if (i === "tab-index" && typeof d == "number") {
                const x = t[d - 1];
                x && o(x.id)
            }
        }, [w, ke, o, Se, $, Fe, te, t]);
    a.useEffect(() => {
        const i = d => {
            if (!(d.defaultPrevented || d.isComposing) && !(E || ve) && !Be(d.target)) {
                for (let x = 1; x <= 9; x += 1)
                    if (V(d, c, String(x))) {
                        if (!t[x - 1]) return;
                        d.preventDefault(), P("tab-index", x);
                        return
                    } if (V(d, c, "T")) {
                    d.preventDefault(), P("new-tab");
                    return
                }
                if (V(d, c, "W")) {
                    if (!w || t.length <= 1) return;
                    d.preventDefault(), P("close-tab");
                    return
                }
                if (V(d, c, "R")) {
                    d.preventDefault(), P("reload-tab");
                    return
                }
                if (V(d, c, "L")) {
                    d.preventDefault(), P("focus-address-bar");
                    return
                }
                if (V(d, c, "ArrowRight")) {
                    d.preventDefault(), P("next-tab");
                    return
                }
                V(d, c, "ArrowLeft") && (d.preventDefault(), P("previous-tab"))
            }
        };
        return window.addEventListener("keydown", i), () => {
            window.removeEventListener("keydown", i)
        }
    }, [w, c, P, E, ve]), a.useEffect(() => {
        if (ee.current) return;
        const d = new URLSearchParams(window.location.search).get("open"),
            A = (d ? Q(d, window.location.origin) : null) ?? e;
        if (r) {
            g(r), ue("/"), ee.current = !0;
            return
        }
        if (!A) {
            ee.current = !0;
            return
        }
        ye.current = A, g(A), ue(A), ee.current = !0
    }, [r, e, g]), a.useEffect(() => {
        if (!ee.current) return;
        const i = ye.current;
        if (i) {
            if (L !== i) return;
            ye.current = null
        }
        const d = st(L) ? L : "/";
        tr() !== d && ue(d)
    }, [L]), a.useEffect(() => {
        const i = d => {
            if (d.origin !== window.location.origin) return;
            const x = d.data;
            if (!x || typeof x != "object") return;
            const A = x.type;
            if (A === nr) {
                q(M => !M);
                return
            }
            if (A === or) {
                P(typeof x.action == "string" ? x.action : "", typeof x.index == "number" ? x.index : void 0);
                return
            }
            if (A === "open-new-tab") {
                const M = typeof x.decodedUrl == "string" ? x.decodedUrl ?? "" : typeof x.url == "string" ? x.url ?? "" : "";
                le(M);
                return
            }
            if (A === "lucide:go-home") {
                f(), ue("/");
                return
            }
            if (A === "lucide:open-external-window") {
                const M = x.href;
                if (typeof M != "string" || M.trim().length === 0) return;
                window.open(M.trim(), "_blank", "noopener,noreferrer");
                return
            }
            if (A !== "lucide:open-link") return;
            const G = x.href,
                qt = x.newTab === !0;
            if (typeof G != "string" || G.trim().length === 0) return;
            const Te = G.trim();
            if (ce(Te), qt) {
                const M = $();
                v.startForTab(M), h(M, Te);
                return
            }
            w && v.startForTab(w), g(Te)
        };
        return window.addEventListener("message", i), () => {
            window.removeEventListener("message", i)
        }
    }, [w, g, h, le, f, v]), a.useEffect(() => {
        if (!("serviceWorker" in navigator)) return;
        const i = d => {
            const {
                data: x
            } = d;
            if (!x || x.type !== "open-new-tab") return;
            const A = typeof x.decodedUrl == "string" ? x.decodedUrl : typeof x.url == "string" ? x.url : "";
            le(A)
        };
        return navigator.serviceWorker.addEventListener("message", i), () => {
            navigator.serviceWorker.removeEventListener("message", i)
        }
    }, [le]);
    const Bt = a.useCallback(() => {
            j(!0)
        }, []),
        Vt = a.useCallback(() => {
            if (!w) return;
            const i = F.current.get(w);
            if (i) {
                if (S[w]) {
                    B.clearPendingForTab(w), B.destroyForFrame(i), U(d => {
                        const x = {
                            ...d
                        };
                        return delete x[w], x
                    });
                    return
                }
                U(d => ({
                    ...d,
                    [w]: !0
                })), B.injectIntoFrame(w)
            }
        }, [w, S, B]),
        W = a.useCallback(i => {
            const d = (i ?? s?.inputValue ?? "").trim();
            if (!d) return;
            ce(d);
            const x = g(d);
            if (x) {
                if (x === L) {
                    te();
                    return
                }
                w && v.startForTab(w)
            }
        }, [s?.inputValue, w, L, te, g, v]),
        $t = i => {
            const d = i.trim();
            if (!d) return;
            ce(d);
            const x = $();
            v.startForTab(x), h(x, d)
        },
        Wt = {
            tabs: t,
            addressValue: s?.inputValue ?? "",
            devtoolsEnabled: Dt,
            fullscreenEnabled: Et,
            onCreateTab: $,
            onActivateTab: o,
            onCloseTab: Se,
            onSetTabOrder: Pt,
            onAddressChange: y,
            onBack: Lt,
            onForward: Mt,
            onReload: te,
            onOpenSettings: Bt,
            onToggleDevtools: Vt,
            onToggleFullscreen: () => {
                zt()
            },
            onAddressSubmit: i => W(i)
        },
        Pe = "absolute inset-0 h-full w-full min-h-0 border-t border-[var(--border)] bg-[var(--surface)]",
        Gt = n.jsx("div", {
            className: "h-[2px] w-full bg-transparent",
            children: n.jsx("div", {
                className: `h-[2px] w-full origin-left bg-[var(--accent)] transition-opacity duration-180 ${Ut?"opacity-100":"opacity-0"}`,
                style: {
                    transform: `scaleX(${Math.max(0,Math.min(1,N.progress))})`
                }
            })
        }),
        Ht = n.jsxs("main", {
            className: "relative min-h-0 flex-1 overflow-hidden",
            children: [n.jsx("div", {
                className: "relative flex h-full min-h-0 w-full",
                children: n.jsxs(a.Suspense, {
                    fallback: null,
                    children: [At.map(i => n.jsx(qn, {
                        tabId: i.id,
                        active: i.id === w,
                        visible: !!L && i.id === w,
                        interactive: !!L && i.id === w,
                        containerClassName: Pe,
                        url: i.targetUrl ?? "",
                        spotlightShortcut: Ct,
                        globalShortcutModifier: c,
                        preferredColorScheme: I.mode,
                        onFrameReady: d => {
                            F.current.set(i.id, d)
                        },
                        onMetadataChange: d => {
                            b(i.id, d)
                        },
                        onLoadStateChange: d => {
                            if (d === "start") {
                                i.id === w && v.startForTab(i.id);
                                return
                            }
                            if (d === "settle") {
                                v.settleForTab(i.id);
                                return
                            }
                            v.doneForTab(i.id), S[i.id] && B.injectIntoFrame(i.id)
                        },
                        onRequestNewTab: $t
                    }, i.id)), Rt.map(i => {
                        const d = i.targetUrl?.trim() ?? "";
                        return n.jsx("div", {
                            "data-tab-id": i.id,
                            className: `${Pe} ${L&&i.id===w?"opacity-100":"opacity-0 pointer-events-none"}`,
                            children: n.jsx("iframe", {
                                ref: x => {
                                    F.current.set(i.id, x)
                                },
                                src: ze(d),
                                title: i.title,
                                allow: "display-capture; picture-in-picture; clipboard-write",
                                className: "h-full w-full border-0",
                                onLoad: () => {
                                    v.doneForTab(i.id), S[i.id] && B.injectIntoFrame(i.id)
                                }
                            })
                        }, i.id)
                    })]
                })
            }), L ? null : n.jsxs("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center px-6 py-10",
                children: [k ? n.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",
                    style: {
                        backgroundImage: `url("${k}")`
                    },
                    "aria-hidden": "true"
                }) : null, k ? n.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,7,12,0.28),rgba(4,7,12,0.52))]",
                    "aria-hidden": "true"
                }) : null, n.jsx("div", {
                    className: "flex w-full flex-1 items-center justify-center",
                    children: n.jsx("div", {
                        className: "flex w-full max-w-[1400px] items-center justify-center gap-6 px-2 lg:px-6",
                        children: n.jsx("div", {
                            className: "flex min-w-0 flex-1 justify-center",
                            children: n.jsx("div", {
                                className: "flex w-full max-w-4xl flex-col items-center",
                                children: n.jsx(yn, {
                                    value: De,
                                    searchEngineId: m,
                                    showShortcuts: _,
                                    onValueChange: i => {
                                        w && R(d => ({
                                            ...d,
                                            [w]: i
                                        }))
                                    },
                                    onSubmit: () => {
                                        W(De)
                                    },
                                    onSearchEngineChange: Ft,
                                    onNavigate: i => {
                                        W(i)
                                    }
                                })
                            })
                        })
                    })
                }), n.jsx("div", {
                    className: "pointer-events-none fixed bottom-2 right-2 z-20",
                    children: n.jsx("div", {
                        className: "pointer-events-auto flex items-center gap-3 text-xs",
                        style: {
                            fontFamily: "Manrope Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif",
                            letterSpacing: "0.01em"
                        },
                        children: n.jsxs("div", {
                            style: {
                                color: I.mode === "dark" ? "#eee" : "#222"
                            },
                            className: "flex items-center gap-3",
                            children: [n.jsx("a", {
                                href: "https://discord.gg/ZDq3UYskkK",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "font-semibold tracking-[0.02em] transition hover:opacity-80",
                                children: "More links"
                            }), n.jsx("button", {
                                type: "button",
                                onClick: () => W("/t"),
                                className: "font-semibold tracking-[0.02em] transition hover:opacity-80",
                                children: "TOS"
                            }), n.jsx("button", {
                                type: "button",
                                onClick: () => W("/p"),
                                className: "font-semibold tracking-[0.02em] transition hover:opacity-80",
                                children: "Privacy"
                            }), n.jsx("button", {
                                type: "button",
                                onClick: () => {
                                    localStorage.clear();
                                    window.location.href = "https://www.classroom.google.com";
                                },
                                className: "rounded-md bg-red-500 px-2 py-0.5 text-xs font-semibold text-white transition hover:bg-red-600",
                                children: "PANIC"
                            })]
                        })
                    })
                }), n.jsx("div", {
                    className: "pointer-events-none fixed bottom-2 left-2 z-20",
                    children: n.jsx("div", {
                        className: "pointer-events-auto text-xs font-semibold tracking-[0.02em] text-[var(--muted)]",
                        style: {
                            fontFamily: "Manrope Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif",
                            letterSpacing: "0.01em"
                        },
                        children: "SVG build"
                    })
                })]
            })]
        });
    return n.jsxs("div", {
        className: "app-grid-bg flex h-screen flex-col overflow-hidden text-[var(--text)]",
        children: [n.jsx(fn, {
            ...Wt
        }), Gt, Ht, n.jsx(vr, {
            open: E,
            onClose: () => j(!1)
        }), n.jsx(wn, {
            open: jt,
            onClose: Ot
        }), n.jsx(Nn, {
            open: ve,
            searchEngineName: _t,
            onClose: () => q(!1),
            onNavigate: i => {
                if (i.kind === "ai") {
                    window.localStorage.setItem(D.aiPendingPrompt, i.value), W("/a"), q(!1);
                    return
                }
                W(i.value), q(!1)
            }
        })]
    })
}
const ro = Object.freeze(Object.defineProperty({
    __proto__: null,
    NewTabPage: Kn
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    Kn as N, be as a, ro as n
};