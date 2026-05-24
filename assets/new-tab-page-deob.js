const __vite__mapDeps = (_0x1d80f6, _0x482549 = __vite__mapDeps, _0x3249fc = _0x482549.f ||= ["./proxy-viewport-Cu_NmTP_.js", "./index-BevC3f8F.js", "./index-CXFzZnLY.css", "./house-BkWBD7A9.js", "./settings-modal-DwZXRAn7.js", "./use-theme-catalog-BrDJUbYz.js", "./is-ref-object-D3XswZhq.js", "./layout-BI1yl-jA.js", "./history-Ct9KmYhB.js"]) => _0x1d80f6.map(_0x329ad2 => _0x3249fc[_0x329ad2]);
import { aF as _0x43a24c, F as _0x535467, an as _0x2aec99, au as _0x26d13b, m as _0x1733b7, q as _0x506681, av as _0x579318, ah as _0x4c4e38, v as _0x47d142, z as _0x2bb2c1, f as _0x1f2cf0, P as _0x57aafa, aJ as _0x1bea8c, a1 as _0x513f86, a3 as _0x2f3a58, S as _0x524b5d, a8 as _0x5a3d79, aN as _0x812889, a0 as _0x1686ac, aU as _0x3a8d77, aI as _0x3b9d62, U as _0x529d0d, af as _0x5a96c3, ad as _0x40cfa6, ap as _0x3cb8fa, aD as _0x464c7c, e as _0xd5f71, B as _0x3778b3, _ as _0x28290a, l as _0x1cdb6b } from "./index-DoSs2pBs.js";
import { p as _0x29210e, m as _0x4f1bfd, u as _0x40d45e, M as _0x3da57a, q as _0x239cf3, A as _0x574231, o as _0x119d27, b as _0x1cc541, k as _0x28fbe1, G as _0x4f8c3d, l as _0x4e8983, S as _0x1264e8, a as _0x3939f9, C as _0x137dfe, e as _0x33deec, c as _0x1e795c, O as _0x5f26b4, d as _0x3845de, i as _0x1c883f, g as _0x414b64, f as _0x559bcb, h as _0x16ec75, n as _0x2fe807, r as _0x1a8ee0, j as _0x12d842 } from "./settings-modal-DKGhuxvL.js";
import { S as _0x2e62ad, X as _0x4946bc, u as _0x528b47 } from "./use-theme-catalog-DZQm7k9p.js";
import { L as _0x175ef8, m as _0x2f6f01 } from "./is-ref-object-Cpnybx3C.js";
import { i as _0x191cf6, l as _0x27d5b3, d as _0x752902, g as _0x4d2610, a as _0x2462b7, c as _0x25188a } from "./layout-BJDRqdIF.js";
import { H as _0x3e5681 } from "./history-BRim-xll.js";
function Ir(..._0x777396) {
  const _0x5418db = !Array.isArray(_0x777396[0]);
  const _0xb39f19 = _0x5418db ? 0 : -1;
  const _0x1139c1 = _0x777396[0 + _0xb39f19];
  const _0x562bb1 = _0x777396[1 + _0xb39f19];
  const _0x3725a8 = _0x777396[2 + _0xb39f19];
  const _0x5d0ace = _0x777396[3 + _0xb39f19];
  const _0x19af57 = _0x191cf6(_0x562bb1, _0x3725a8, _0x5d0ace);
  if (_0x5418db) {
    return _0x19af57(_0x1139c1);
  } else {
    return _0x19af57;
  }
}
const _r = _0x47867a => !_0x47867a.isLayoutDirty && _0x47867a.willUpdate(!1);
function qe() {
  const _0x14d17a = new Set();
  const _0x329b20 = new WeakMap();
  const _0x2350f9 = () => _0x14d17a.forEach(_r);
  return {
    add: _0x4be686 => {
      _0x14d17a.add(_0x4be686);
      _0x329b20.set(_0x4be686, _0x4be686.addEventListener("willUpdate", _0x2350f9));
    },
    remove: _0x4ae48b => {
      _0x14d17a.delete(_0x4ae48b);
      const _0x5f2a88 = _0x329b20.get(_0x4ae48b);
      if (_0x5f2a88) {
        _0x5f2a88();
        _0x329b20.delete(_0x4ae48b);
      }
      _0x2350f9();
    },
    dirty: _0x2350f9
  };
}
const Cr = _0x43a24c.createContext(null);
function Ar() {
  const _0x531c15 = _0x43a24c.useRef(!1);
  _0x29210e(() => {
    _0x531c15.current = !0;
    return () => {
      _0x531c15.current = !1;
    };
  }, []);
  return _0x531c15;
}
function Rr() {
  const _0x50805d = Ar();
  const [_0x1bd9b3, _0x39439f] = _0x43a24c.useState(0);
  const _0xbac2c3 = _0x43a24c.useCallback(() => {
    if (_0x50805d.current) {
      _0x39439f(_0x1bd9b3 + 1);
    }
  }, [_0x1bd9b3]);
  return [_0x43a24c.useCallback(() => _0x535467.postRender(_0xbac2c3), [_0xbac2c3]), _0x1bd9b3];
}
const _0x10bca3 = {
  ..._0x2462b7,
  ..._0x4d2610,
  ..._0x752902,
  ..._0x27d5b3
};
const lt = _0x127f11 => _0x127f11 === !0;
const Ur = _0x12151a => lt(_0x12151a === !0) || _0x12151a === "id";
const Dr = ({
  children: _0xe853d0,
  id: _0x53720b,
  inherit: _0x24a215 = !0
}) => {
  const _0x3c5f8b = _0x43a24c.useContext(_0x175ef8);
  const _0x55bd17 = _0x43a24c.useContext(Cr);
  const [_0x1ff592, _0x577d1c] = Rr();
  const _0x29a9a6 = _0x43a24c.useRef(null);
  const _0x1c967b = _0x3c5f8b.id || _0x55bd17;
  if (_0x29a9a6.current === null) {
    if (Ur(_0x24a215) && _0x1c967b) {
      _0x53720b = _0x53720b ? _0x1c967b + "-" + _0x53720b : _0x1c967b;
    }
    _0x29a9a6.current = {
      id: _0x53720b,
      group: lt(_0x24a215) && _0x3c5f8b.group || qe()
    };
  }
  const _0x8b2160 = _0x43a24c.useMemo(() => ({
    ..._0x29a9a6.current,
    forceRender: _0x1ff592
  }), [_0x577d1c]);
  const _0x2b1b23 = {
    value: _0x8b2160,
    children: _0xe853d0
  };
  return _0x2aec99.jsx(_0x175ef8.Provider, _0x2b1b23);
};
const Lr = _0x10bca3;
const ut = _0x4f1bfd(Lr, _0x25188a);
function dt(_0x2856f1) {
  const _0x4bf510 = _0x40d45e(() => _0x26d13b(_0x2856f1));
  const {
    isStatic: _0x5cae2d
  } = _0x43a24c.useContext(_0x3da57a);
  if (_0x5cae2d) {
    const [, _0x567ba9] = _0x43a24c.useState(_0x2856f1);
    _0x43a24c.useEffect(() => _0x4bf510.on("change", _0x567ba9), []);
  }
  return _0x4bf510;
}
function ft(_0x5b0aaf, _0xea1a59) {
  const _0x44b56f = dt(_0xea1a59());
  const _0x4f8141 = () => _0x44b56f.set(_0xea1a59());
  _0x4f8141();
  _0x29210e(() => {
    const _0x2481d4 = () => _0x535467.preRender(_0x4f8141, !1, !0);
    const _0x312904 = _0x5b0aaf.map(_0x355636 => _0x355636.on("change", _0x2481d4));
    return () => {
      _0x312904.forEach(_0x131553 => _0x131553());
      _0x1733b7(_0x4f8141);
    };
  });
  return _0x44b56f;
}
function Mr(_0x2c2d74) {
  _0x506681.current = [];
  _0x2c2d74();
  const _0x23b1cf = ft(_0x506681.current, _0x2c2d74);
  _0x506681.current = undefined;
  return _0x23b1cf;
}
function Or(_0x3d9b14, _0x532bd0, _0x47fa54, _0x17e795) {
  if (typeof _0x3d9b14 == "function") {
    return Mr(_0x3d9b14);
  }
  const _0x3d5462 = typeof _0x532bd0 == "function" ? _0x532bd0 : Ir(_0x532bd0, _0x47fa54, _0x17e795);
  const _0x470dec = Array.isArray(_0x3d9b14) ? Ye(_0x3d9b14, _0x3d5462) : Ye([_0x3d9b14], ([_0x237342]) => _0x3d5462(_0x237342));
  const _0x3acc5e = Array.isArray(_0x3d9b14) ? undefined : _0x3d9b14.accelerate;
  if (_0x3acc5e && !_0x3acc5e.isTransformed && typeof _0x532bd0 != "function" && Array.isArray(_0x47fa54) && _0x17e795?.clamp !== false) {
    _0x470dec.accelerate = {
      ..._0x3acc5e,
      times: _0x532bd0,
      keyframes: _0x47fa54,
      isTransformed: true
    };
  }
  return _0x470dec;
}
function Ye(_0x126279, _0x583bf0) {
  const _0x35438c = _0x40d45e(() => []);
  return ft(_0x126279, () => {
    _0x35438c.length = 0;
    const _0x3cc40e = _0x126279.length;
    for (let _0x55adf9 = 0; _0x55adf9 < _0x3cc40e; _0x55adf9++) {
      _0x35438c[_0x55adf9] = _0x126279[_0x55adf9].get();
    }
    return _0x583bf0(_0x35438c);
  });
}
const mt = _0x43a24c.createContext(null);
function Fr(_0x22e662, _0x3ff645, _0x5c42e2, _0x68a7ec) {
  if (!_0x68a7ec) {
    return _0x22e662;
  }
  const _0x2c6d7c = _0x22e662.findIndex(_0x2c6d06 => _0x2c6d06.value === _0x3ff645);
  if (_0x2c6d7c === -1) {
    return _0x22e662;
  }
  const _0x2ba3a5 = _0x68a7ec > 0 ? 1 : -1;
  const _0x5216e1 = _0x22e662[_0x2c6d7c + _0x2ba3a5];
  if (!_0x5216e1) {
    return _0x22e662;
  }
  const _0x1cd0cd = _0x22e662[_0x2c6d7c];
  const _0x3746f3 = _0x5216e1.layout;
  const _0x50f84b = _0x2f6f01(_0x3746f3.min, _0x3746f3.max, 0.5);
  if (_0x2ba3a5 === 1 && _0x1cd0cd.layout.max + _0x5c42e2 > _0x50f84b || _0x2ba3a5 === -1 && _0x1cd0cd.layout.min + _0x5c42e2 < _0x50f84b) {
    return _0x579318(_0x22e662, _0x2c6d7c, _0x2c6d7c + _0x2ba3a5);
  } else {
    return _0x22e662;
  }
}
function Pr({
  children: _0x52d5cf,
  as: _0x119178 = "ul",
  axis: _0x4179ae = "y",
  onReorder: _0x417d34,
  values: _0x46884d,
  ..._0x1e66c6
}, _0x352e03) {
  const _0x305b20 = _0x40d45e(() => ut[_0x119178]);
  const _0x56d4e6 = [];
  const _0x1b3a59 = _0x43a24c.useRef(!1);
  const _0xd03835 = _0x43a24c.useRef(null);
  const _0x1318fe = {
    axis: _0x4179ae,
    groupRef: _0xd03835,
    registerItem: (_0x25336d, _0x4822b8) => {
      const _0x2e24cd = _0x56d4e6.findIndex(_0x37c7a => _0x25336d === _0x37c7a.value);
      if (_0x2e24cd !== -1) {
        _0x56d4e6[_0x2e24cd].layout = _0x4822b8[_0x4179ae];
      } else {
        _0x56d4e6.push({
          value: _0x25336d,
          layout: _0x4822b8[_0x4179ae]
        });
      }
      _0x56d4e6.sort(Br);
    },
    updateOrder: (_0x1e0c64, _0x55b651, _0x17a28d) => {
      if (_0x1b3a59.current) {
        return;
      }
      const _0x2d3f5e = Fr(_0x56d4e6, _0x1e0c64, _0x55b651, _0x17a28d);
      if (_0x56d4e6 !== _0x2d3f5e) {
        _0x1b3a59.current = !0;
        const _0x167bd = [..._0x46884d];
        for (let _0x1218c6 = 0; _0x1218c6 < _0x2d3f5e.length; _0x1218c6++) {
          if (_0x56d4e6[_0x1218c6].value !== _0x2d3f5e[_0x1218c6].value) {
            const _0x2f23f7 = _0x46884d.indexOf(_0x56d4e6[_0x1218c6].value);
            const _0x488b21 = _0x46884d.indexOf(_0x2d3f5e[_0x1218c6].value);
            if (_0x2f23f7 !== -1 && _0x488b21 !== -1) {
              [_0x167bd[_0x2f23f7], _0x167bd[_0x488b21]] = [_0x167bd[_0x488b21], _0x167bd[_0x2f23f7]];
            }
            break;
          }
        }
        _0x417d34(_0x167bd);
      }
    }
  };
  _0x43a24c.useEffect(() => {
    _0x1b3a59.current = !1;
  });
  const _0xd70491 = _0x36f88c => {
    _0xd03835.current = _0x36f88c;
    if (typeof _0x352e03 == "function") {
      _0x352e03(_0x36f88c);
    } else if (_0x352e03) {
      _0x352e03.current = _0x36f88c;
    }
  };
  const _0x41b92c = {
    overflowAnchor: "none",
    ..._0x1e66c6.style
  };
  const _0x1c7803 = {
    value: _0x1318fe,
    children: _0x52d5cf
  };
  return <_0x305b20 {..._0x1e66c6} style={_0x41b92c} ref={_0xd70491} ignoreStrict={!0}>{_0x2aec99.jsx(mt.Provider, _0x1c7803)}</_0x305b20>;
}
const _Component = _0x43a24c.forwardRef(Pr);
function Br(_0x5440f5, _0x242c7c) {
  return _0x5440f5.layout.min - _0x242c7c.layout.min;
}
const de = 50;
const Ke = 25;
const Vr = new Set(["auto", "scroll"]);
const ne = new WeakMap();
const oe = new WeakMap();
let re = null;
function $r() {
  if (re) {
    const _0x505147 = Ne(re, "y");
    if (_0x505147) {
      oe.delete(_0x505147);
      ne.delete(_0x505147);
    }
    const _0x274d5d = Ne(re, "x");
    if (_0x274d5d && _0x274d5d !== _0x505147) {
      oe.delete(_0x274d5d);
      ne.delete(_0x274d5d);
    }
    re = null;
  }
}
function Wr(_0x49cbc6, _0x2a4c7f) {
  const _0x2b35d3 = getComputedStyle(_0x49cbc6);
  const _0x359b95 = _0x2a4c7f === "x" ? _0x2b35d3.overflowX : _0x2b35d3.overflowY;
  const _0x367db9 = _0x49cbc6 === document.body || _0x49cbc6 === document.documentElement;
  return Vr.has(_0x359b95) || _0x367db9;
}
function Ne(_0x218f24, _0x131b73) {
  let _0x473e01 = _0x218f24?.parentElement;
  while (_0x473e01) {
    if (Wr(_0x473e01, _0x131b73)) {
      return _0x473e01;
    }
    _0x473e01 = _0x473e01.parentElement;
  }
  return null;
}
function Gr(_0x34a594, _0x119526, _0x27c5d3) {
  const _0x495f16 = _0x119526.getBoundingClientRect();
  const _0x2d2e75 = _0x27c5d3 === "x" ? Math.max(0, _0x495f16.left) : Math.max(0, _0x495f16.top);
  const _0x3e584c = _0x27c5d3 === "x" ? Math.min(window.innerWidth, _0x495f16.right) : Math.min(window.innerHeight, _0x495f16.bottom);
  const _0xacc91c = _0x34a594 - _0x2d2e75;
  const _0x34c1c1 = _0x3e584c - _0x34a594;
  if (_0xacc91c < de) {
    const _0x3e4627 = 1 - _0xacc91c / de;
    return {
      amount: -Ke * _0x3e4627 * _0x3e4627,
      edge: "start"
    };
  } else if (_0x34c1c1 < de) {
    const _0x4b597c = 1 - _0x34c1c1 / de;
    return {
      amount: Ke * _0x4b597c * _0x4b597c,
      edge: "end"
    };
  }
  return {
    amount: 0,
    edge: null
  };
}
function Hr(_0x1f5eb0, _0x559092, _0x5a02c3, _0x5e1168) {
  if (!_0x1f5eb0) {
    return;
  }
  re = _0x1f5eb0;
  const _0xf4cc = Ne(_0x1f5eb0, _0x5a02c3);
  if (!_0xf4cc) {
    return;
  }
  const _0x598110 = _0x559092 - (_0x5a02c3 === "x" ? window.scrollX : window.scrollY);
  const {
    amount: _0xac8a9b,
    edge: _0x573739
  } = Gr(_0x598110, _0xf4cc, _0x5a02c3);
  if (_0x573739 === null) {
    oe.delete(_0xf4cc);
    ne.delete(_0xf4cc);
    return;
  }
  const _0x346a07 = oe.get(_0xf4cc);
  const _0x59ab97 = _0xf4cc === document.body || _0xf4cc === document.documentElement;
  if (_0x346a07 !== _0x573739) {
    if ((_0x573739 !== "start" || !(_0x5e1168 < 0)) && (_0x573739 !== "end" || !(_0x5e1168 > 0))) {
      return;
    }
    oe.set(_0xf4cc, _0x573739);
    const _0x8c2539 = _0x5a02c3 === "x" ? _0xf4cc.scrollWidth - (_0x59ab97 ? window.innerWidth : _0xf4cc.clientWidth) : _0xf4cc.scrollHeight - (_0x59ab97 ? window.innerHeight : _0xf4cc.clientHeight);
    ne.set(_0xf4cc, _0x8c2539);
  }
  if (_0xac8a9b > 0) {
    const _0x13f30a = ne.get(_0xf4cc);
    if ((_0x5a02c3 === "x" ? _0x59ab97 ? window.scrollX : _0xf4cc.scrollLeft : _0x59ab97 ? window.scrollY : _0xf4cc.scrollTop) >= _0x13f30a) {
      return;
    }
  }
  const _0x358611 = {
    left: _0xac8a9b
  };
  if (_0x5a02c3 === "x") {
    if (_0x59ab97) {
      window.scrollBy(_0x358611);
    } else {
      _0xf4cc.scrollLeft += _0xac8a9b;
    }
  } else if (_0x59ab97) {
    window.scrollBy({
      top: _0xac8a9b
    });
  } else {
    _0xf4cc.scrollTop += _0xac8a9b;
  }
}
function Xe(_0x1bf61b, _0x49080c = 0) {
  if (_0x4c4e38(_0x1bf61b)) {
    return _0x1bf61b;
  } else {
    return dt(_0x49080c);
  }
}
function qr({
  children: _0x5cf1ef,
  style: _0x180bb8 = {},
  value: _0x36c90a,
  as: _0x403118 = "li",
  onDrag: _0xed6827,
  onDragEnd: _0x39da9f,
  layout: _0x1ba549 = !0,
  ..._0x188d61
}, _0x39999e) {
  const _0x2dade9 = _0x40d45e(() => ut[_0x403118]);
  const _0x300a9d = _0x43a24c.useContext(mt);
  const _0x5de514 = {
    x: Xe(_0x180bb8.x),
    y: Xe(_0x180bb8.y)
  };
  const _0x5c299c = Or([_0x5de514.x, _0x5de514.y], ([_0x3ab70b, _0x2264b4]) => _0x3ab70b || _0x2264b4 ? 1 : "unset");
  const {
    axis: _0x4c1774,
    registerItem: _0x18d489,
    updateOrder: _0xc54daa,
    groupRef: _0x15cea4
  } = _0x300a9d;
  const _0x1fae5a = {
    ..._0x180bb8
  };
  _0x1fae5a.x = _0x5de514.x;
  _0x1fae5a.y = _0x5de514.y;
  _0x1fae5a.zIndex = _0x5c299c;
  return <_0x2dade9 drag={_0x4c1774} {..._0x188d61} dragSnapToOrigin={!0} style={_0x1fae5a} layout={_0x1ba549} onDrag={(_0x2ae725, _0x51b4ec) => {
    const {
      velocity: _0x3e8450,
      point: _0x4637d1
    } = _0x51b4ec;
    const _0x445151 = _0x5de514[_0x4c1774].get();
    _0xc54daa(_0x36c90a, _0x445151, _0x3e8450[_0x4c1774]);
    Hr(_0x15cea4.current, _0x4637d1[_0x4c1774], _0x4c1774, _0x3e8450[_0x4c1774]);
    if (_0xed6827) {
      _0xed6827(_0x2ae725, _0x51b4ec);
    }
  }} onDragEnd={(_0x29ab7c, _0x1be8f7) => {
    $r();
    if (_0x39da9f) {
      _0x39da9f(_0x29ab7c, _0x1be8f7);
    }
  }} onLayoutMeasure={_0x2be8ef => {
    _0x18d489(_0x36c90a, _0x2be8ef);
  }} ref={_0x39999e} ignoreStrict={!0}>{_0x5cf1ef}</_0x2dade9>;
}
const Yr = _0x43a24c.forwardRef(qr);
const Kr = [["path", {
  d: "m12 19-7-7 7-7",
  key: "1l729n"
}], ["path", {
  d: "M19 12H5",
  key: "x3x0zl"
}]];
const Xr = _0x47d142("arrow-left", Kr);
const Jr = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "m12 5 7 7-7 7",
  key: "xquz4c"
}]];
const Qr = _0x47d142("arrow-right", Jr);
const Zr = [["path", {
  d: "m12.296 3.464 3.02 3.956",
  key: "qash78"
}], ["path", {
  d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",
  key: "1h7j8b"
}], ["path", {
  d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key: "4lm6w1"
}], ["path", {
  d: "m6.18 5.276 3.1 3.899",
  key: "zjj9t3"
}]];
const pt = _0x47d142("clapperboard", Zr);
const en = [["path", {
  d: "M20 4v7a4 4 0 0 1-4 4H4",
  key: "6o5b7l"
}], ["path", {
  d: "m9 10-5 5 5 5",
  key: "1kshq7"
}]];
const tn = _0x47d142("corner-down-left", en);
const rn = [["line", {
  x1: "6",
  x2: "10",
  y1: "11",
  y2: "11",
  key: "1gktln"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "9",
  y2: "13",
  key: "qnk9ow"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "12",
  y2: "12",
  key: "krot7o"
}], ["line", {
  x1: "18",
  x2: "18.01",
  y1: "10",
  y2: "10",
  key: "1lcuu1"
}], ["path", {
  d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
  key: "mfqc10"
}]];
const ht = _0x47d142("gamepad-2", rn);
const nn = [["path", {
  d: "M8 3H5a2 2 0 0 0-2 2v3",
  key: "1dcmit"
}], ["path", {
  d: "M21 8V5a2 2 0 0 0-2-2h-3",
  key: "1e4gt3"
}], ["path", {
  d: "M3 16v3a2 2 0 0 0 2 2h3",
  key: "wsl5sc"
}], ["path", {
  d: "M16 21h3a2 2 0 0 0 2-2v-3",
  key: "18trek"
}]];
const on = _0x47d142("maximize", nn);
const sn = [["circle", {
  cx: "8",
  cy: "18",
  r: "4",
  key: "1fc0mg"
}], ["path", {
  d: "M12 18V2l7 4",
  key: "g04rme"
}]];
const Ae = _0x47d142("music-2", sn);
const an = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "M12 5v14",
  key: "s699le"
}]];
const _Component3 = _0x47d142("plus", an);
const cn = [["path", {
  d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
  key: "1p45f6"
}], ["path", {
  d: "M21 3v5h-5",
  key: "1q7to0"
}]];
const ln = _0x47d142("rotate-cw", cn);
function Re(_0x3808f6, _0x20e11a = 2) {
  const [_0x54e4a5, _0x4da2a4] = _0x43a24c.useState([]);
  const _0x43db37 = _0x43a24c.useRef(null);
  _0x43a24c.useEffect(() => {
    if (_0x3808f6.length < _0x20e11a) {
      _0x4da2a4([]);
      return;
    }
    const _0x590c67 = setTimeout(async () => {
      if (_0x43db37.current) {
        _0x43db37.current.abort();
      }
      _0x43db37.current = new AbortController();
      try {
        const _0x3902b0 = {
          signal: _0x43db37.current.signal
        };
        const _0x2a1850 = await _0x2bb2c1("/api/autocomplete?q=" + encodeURIComponent(_0x3808f6), _0x3902b0);
        if (!_0x2a1850.ok) {
          _0x4da2a4([]);
          return;
        }
        const _0x49e80b = await _0x2a1850.json();
        _0x4da2a4(_0x49e80b.slice(0, 6).map(_0x4d975e => _0x4d975e.phrase));
      } catch (_0x355171) {
        if (_0x355171 instanceof Error && _0x355171.name !== "AbortError") {
          _0x4da2a4([]);
        }
      }
    }, 50);
    return () => {
      clearTimeout(_0x590c67);
      if (_0x43db37.current) {
        _0x43db37.current.abort();
      }
    };
  }, [_0x3808f6, _0x20e11a]);
  const _0x4c09ec = _0x43a24c.useCallback(() => {
    _0x4da2a4([]);
  }, []);
  return {
    suggestions: _0x3808f6.length < _0x20e11a ? [] : _0x54e4a5,
    clearSuggestions: _0x4c09ec
  };
}
const _0x32abc9 = {
  id: "movies",
  type: "custom",
  kind: "custom",
  custom: true,
  title: "Movies & TV",
  label: "Movies & TV",
  icon: "movies",
  url: "https://aether.mom",
  imageUrl: "https://www.google.com/s2/favicons?domain=aether.mom&sz=64",
  faviconUrl: "https://www.google.com/s2/favicons?domain=aether.mom&sz=64"
};
const _0x32fbf1 = {
  id: "youtube",
  type: "custom",
  kind: "custom",
  custom: true,
  title: "YouTube",
  label: "YouTube",
  icon: "movies",
  url: "https://www.youtube.com",
  imageUrl: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
  faviconUrl: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64"
};
const _0x3d69e1 = {
  id: "spotify",
  type: "custom",
  kind: "custom",
  custom: true,
  title: "Spotify",
  label: "Spotify",
  icon: "music",
  url: "https://open.spotify.com",
  imageUrl: "https://www.google.com/s2/favicons?domain=spotify.com&sz=64",
  faviconUrl: "https://www.google.com/s2/favicons?domain=spotify.com&sz=64"
};
const _0x498cba = {
  id: "games",
  type: "custom",
  kind: "custom",
  custom: true,
  title: "Games",
  label: "Games",
  icon: "games",
  url: "/g",
  imageUrl: "https://www.google.com/s2/favicons?domain=crazygames.com&sz=64",
  faviconUrl: "https://www.google.com/s2/favicons?domain=crazygames.com&sz=64"
};
const _0xH1JEC1 = {
  id: "github",
  type: "custom",
  kind: "custom",
  custom: true,
  title: "GitHub",
  label: "GitHub",
  icon: "ai",
  url: "https://github.com/mumbojum2",
  imageUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
  faviconUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=64"
};
const _0xH1JEC2 = {
  id: "ai",
  type: "custom",
  kind: "custom",
  custom: true,
  title: "AI",
  label: "AI",
  icon: "ai",
  url: "https://gemini.google.com",
  imageUrl: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
  faviconUrl: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64"
};
const K = "inline-flex h-9 w-9 items-center justify-center rounded-md text-[color-mix(in_srgb,var(--muted)_56%,white_44%)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text)] disabled:opacity-30 disabled:cursor-not-allowed";
const un = _0x43a24c.memo(function ({
  value: _0xe38828,
  onValueChange: _0x463846,
  onSubmit: _0x4b81c6,
  onBack: _0x1d9f4f,
  onForward: _0x2026c1,
  onReload: _0x1830e4,
  onOpenSettings: _0x2508cc,
  onToggleDevtools: _0x10b179,
  onToggleFullscreen: _0x19a9ae,
  devtoolsEnabled: _0x5ec178,
  fullscreenEnabled: _0x5a6fb6
}) {
  const {
    suggestions: _0xe68e66,
    clearSuggestions: _0xe0d281
  } = Re(_0xe38828);
  const _0xe39e7e = _0x43a24c.useRef(null);
  const _0x39f836 = _0x43a24c.useRef(null);
  const [_0x579fb3, _0x1549e3] = _0x43a24c.useState(-1);
  const [_0x739f4e, _0x3eef18] = _0x43a24c.useState(!0);
  const _0x19495f = _0x239cf3();
  const _0x2cc64e = _0xe68e66.length > 0 && !_0x739f4e;
  _0x43a24c.useEffect(() => {
    const _0x17570d = _0x2c7a4e => {
      if (_0x39f836.current && !_0x39f836.current.contains(_0x2c7a4e.target)) {
        _0x3eef18(true);
        _0x1549e3(-1);
      }
    };
    document.addEventListener("mousedown", _0x17570d);
    return () => document.removeEventListener("mousedown", _0x17570d);
  }, []);
  const _0x39860e = _0x10a3e2 => {
    _0x10a3e2.preventDefault();
    _0x3eef18(!0);
    _0xe0d281();
    if (_0x579fb3 >= 0 && _0x579fb3 < _0xe68e66.length) {
      _0x463846(_0xe68e66[_0x579fb3]);
      _0x4b81c6(_0xe68e66[_0x579fb3]);
      _0xe39e7e.current?.blur();
      _0x1549e3(-1);
      return;
    }
    _0x1549e3(-1);
    _0xe39e7e.current?.blur();
    _0x4b81c6();
  };
  const _0xec65db = _0x44f359 => {
    _0x463846(_0x44f359);
    _0x3eef18(!0);
    _0x1549e3(-1);
    _0xe0d281();
    _0xe39e7e.current?.blur();
    _0x4b81c6(_0x44f359);
  };
  const _0x211771 = _0x24ad3b => {
    if (!_0x2cc64e || _0xe68e66.length === 0) {
      if (_0x24ad3b.key === "Escape") {
        _0x3eef18(true);
        _0x1549e3(-1);
      }
      return;
    }
    if (_0x24ad3b.key === "ArrowDown") {
      _0x24ad3b.preventDefault();
      _0x1549e3(_0x34832c => _0x34832c < _0xe68e66.length - 1 ? _0x34832c + 1 : _0x34832c);
      return;
    }
    if (_0x24ad3b.key === "ArrowUp") {
      _0x24ad3b.preventDefault();
      _0x1549e3(_0x48979e => _0x48979e > 0 ? _0x48979e - 1 : -1);
      return;
    }
    if (_0x24ad3b.key === "Enter" && _0x579fb3 >= 0) {
      _0x24ad3b.preventDefault();
      _0xec65db(_0xe68e66[_0x579fb3]);
      return;
    }
    if (_0x24ad3b.key === "Escape") {
      _0x3eef18(true);
      _0x1549e3(-1);
    }
  };
  const _0x1fca8b = {
    opacity: 0,
    y: -6
  };
  const _0x24543b = {
    opacity: 0,
    y: -6
  };
  return <form className="flex items-center gap-2" onSubmit={_0x39860e}><div className="contents"><button type="button" aria-label="Back" className={K} onClick={_0x1d9f4f}>{_0x2aec99.jsx(Xr, {
          size: 15,
          strokeWidth: 2
        })}</button><button type="button" aria-label="Forward" className={K} onClick={_0x2026c1}>{_0x2aec99.jsx(Qr, {
          size: 15,
          strokeWidth: 2
        })}</button><button type="button" aria-label="Reload" className={K} onClick={_0x1830e4}>{_0x2aec99.jsx(ln, {
          size: 15,
          strokeWidth: 2
        })}</button></div><label htmlFor="chrome-omnibox" className="sr-only">Search or type a URL</label><div ref={_0x39f836} className="relative ml-1 flex-1"><div className={"flex h-9 items-center border border-[var(--border)] bg-[var(--surface-2)] px-3 " + (_0x2cc64e ? "rounded-t-md" : "rounded-md")}><_0x2e62ad size={14} strokeWidth={2} className="text-[var(--muted)]" /><input ref={_0xe39e7e} id="chrome-omnibox" type="text" placeholder="Search or type a URL" value={_0xe38828} onChange={_0x4ed47c => {
          _0x3eef18(!1);
          _0x1549e3(-1);
          _0x463846(_0x4ed47c.target.value);
        }} onKeyDown={_0x211771} autoComplete="off" className="ml-2 h-full w-full bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--muted)]/90 outline-none" /></div><_0x574231>{_0x2cc64e ? <_0x119d27.div initial={_0x19495f ? !1 : _0x1fca8b} animate={{
          opacity: 1,
          y: 0
        }} exit={_0x19495f ? {
          opacity: 0
        } : _0x24543b} transition={{
          duration: _0x19495f ? 0 : 0.08
        }} className="absolute left-0 right-0 z-50 overflow-hidden rounded-b-md border-x border-b border-[var(--border)] bg-[var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur">{_0xe68e66.map((_0x544c33, _0x553215) => <button type="button" onClick={() => _0xec65db(_0x544c33)} className={"w-full border-t border-[var(--border)] px-4 py-2.5 text-left text-sm transition-colors duration-150 first:border-t-0 " + (_0x553215 === _0x579fb3 ? "bg-[var(--autocomplete-selected-bg)] font-medium text-[var(--text)]" : "text-[var(--text)]/90 hover:bg-[var(--autocomplete-selected-bg)]")} key={_0x544c33}><span className="block truncate">{_0x544c33}</span></button>)}</_0x119d27.div> : null}</_0x574231></div><button type="button" aria-label={_0x5a6fb6 ? "Exit fullscreen" : "Enter fullscreen"} aria-pressed={_0x5a6fb6} className={K + " " + (_0x5a6fb6 ? "bg-[var(--surface-2)] text-[var(--accent)]" : "")} onClick={_0x19a9ae}>{_0x2aec99.jsx(on, {
        size: 15,
        strokeWidth: 2
      })}</button><button type="button" aria-label={_0x5ec178 ? "Close DevTools" : "Open DevTools"} aria-pressed={_0x5ec178} className={K + " " + (_0x5ec178 ? "bg-[var(--surface-2)] text-[var(--accent)]" : "")} onClick={_0x10b179}>{_0x2aec99.jsx(_0x1cc541, {
        size: 15,
        strokeWidth: 2
      })}</button><button type="button" aria-label="Settings" className={K} onClick={_0x2508cc}>{_0x2aec99.jsx(_0x28fbe1, {
        size: 15,
        strokeWidth: 2
      })}</button></form>;
});
const dn = _0x43a24c.memo(function ({
  tabs: _0x525095,
  onCreateTab: _0xc995c5,
  onActivateTab: _0xbd22e1,
  onCloseTab: _0x514823,
  onSetTabOrder: _0x267477
}) {
  const [_0x5cb9ae, _0x3afd06] = _0x43a24c.useState({});
  const _0x599b62 = _0x239cf3();
  const [_0x3a1fc8, _0x28c005] = _0x43a24c.useState(null);
  const _0x9e8186 = _0x525095.map(_0x4b5679 => _0x4b5679.id);
  const _0x317f9e = [0.22, 1, 0.36, 1];
  const _0x6dac58 = Math.max(_0x525095.length, 1);
  const _0x416b21 = _0x6dac58 >= 9;
  const _0x3d8452 = _0x6dac58 >= 14;
  const _0x23643a = _0x3d8452 ? "2.75rem" : _0x416b21 ? "clamp(4.75rem, 10vw, 8.5rem)" : "clamp(6.5rem, 14vw, 13.75rem)";
  const _0x26304e = {
    "--tab-width": _0x23643a
  };
  return <Dr id="tab-strip-horizontal"><div className="inline-flex max-w-full items-center overflow-hidden"><_Component axis="x" values={_0x9e8186} onReorder={_0x267477} className="flex items-center gap-0 overflow-hidden pl-0 pr-0 py-0.5" style={_0x26304e}>{_0x525095.map(_0x1f9913 => {
          const _0x4a068b = _0x1f9913.id + ":" + (_0x1f9913.faviconUrl ?? "");
          const _0x28bfdf = _0x1f9913.motion === "closing";
          const _0x26115e = _0x1f9913.motion === "opening" && !_0x599b62;
          const _0x55527b = _0x599b62 ? {
            duration: 0,
            layout: {
              duration: 0
            }
          } : {
            duration: _0x28bfdf ? 0.2 : 0.18,
            ease: _0x317f9e,
            layout: {
              duration: 0.24,
              ease: _0x317f9e
            }
          };
          const _0x50fddf = {
            duration: 0.16,
            ease: _0x317f9e
          };
          const _0x9d7d50 = {
            scale: 1.02,
            zIndex: 40,
            transition: _0x50fddf
          };
          return <Yr value={_0x1f9913.id} as="div" dragElastic={0.04} dragMomentum={!1} dragTransition={{
            bounceStiffness: 700,
            bounceDamping: 34
          }} onDragStart={() => {
            _0x28c005(_0x1f9913.id);
          }} onDragEnd={() => {
            _0x28c005(null);
          }} className={"group/tab relative h-9 w-[var(--tab-width)] shrink-0 cursor-grab transition-[opacity,box-shadow] duration-100 active:cursor-grabbing " + (_0x3a1fc8 === _0x1f9913.id ? "z-40 opacity-100 shadow-[0_14px_32px_rgba(0,0,0,0.42)]" : "z-0 opacity-100")} initial={_0x26115e ? {
            opacity: 0,
            width: 0
          } : !1} animate={{
            opacity: _0x28bfdf ? 0 : 1,
            width: _0x28bfdf ? 0 : "var(--tab-width)"
          }} transition={_0x55527b} style={{
            overflow: "hidden",
            transformOrigin: "left center"
          }} whileDrag={_0x599b62 ? undefined : _0x9d7d50} layout={!0} key={_0x1f9913.id}><button type="button" onClick={() => {
              if (!_0x3a1fc8) {
                _0xbd22e1(_0x1f9913.id);
              }
            }} className={"relative h-full w-full rounded-t-[2.5px] border-r border-[var(--border)] text-left text-sm transition " + (_0x1f9913.active ? "bg-[var(--surface-2)] text-[var(--text)]" : "bg-transparent text-[var(--muted)] hover:bg-[var(--surface-2)]/85 hover:text-[var(--text)] " + (_0x3d8452 ? "px-0" : _0x416b21 ? "px-2 pr-7" : "px-3 pr-9")) + " " + (_0x3d8452 ? "px-0" : _0x416b21 ? "px-2 pr-7" : "px-3 pr-9")} onAuxClick={_0xd03de4 => {
              if (_0xd03de4.button === 1) {
                _0xd03de4.preventDefault();
                _0x514823(_0x1f9913.id);
              }
            }} title={_0x3d8452 ? _0x1f9913.title : undefined}>{_0x1f9913.active ? <span className="absolute inset-x-0 top-0 h-0.5 rounded-t-[2.5px] bg-[var(--accent)]" /> : null}<span className={"flex h-full items-center " + (_0x3d8452 ? "justify-center" : "gap-2")}>{_0x1f9913.faviconUrl ? _0x5cb9ae[_0x4a068b] ? <_0x4f8c3d size={13} strokeWidth={2} className="shrink-0 text-[var(--muted)]" /> : <img src={_0x1f9913.faviconUrl} alt="" className="h-4 w-4 shrink-0 rounded-[2px]" loading="lazy" onError={() => {
                  _0x3afd06(_0x3c80be => ({
                    ..._0x3c80be,
                    [_0x4a068b]: !0
                  }));
                }} /> : <_0x4f8c3d size={13} strokeWidth={2} className="shrink-0 text-[var(--muted)]" />}{_0x3d8452 ? null : <span className="block min-w-0 flex-1 truncate">{_0x1f9913.title}</span>}</span></button>{!_0x3d8452 || _0x1f9913.active ? <button type="button" aria-label={"Close " + _0x1f9913.title} onClick={() => _0x514823(_0x1f9913.id)} className={"absolute right-2 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-sm text-[var(--muted)] transition duration-200 hover:text-[var(--text)] " + (_0x3d8452 ? "opacity-0 group-hover/tab:opacity-95 focus-visible:opacity-95" : _0x1f9913.active ? "opacity-95" : "opacity-65")}>{_0x2aec99.jsx(_0x4946bc, {
                size: 12,
                strokeWidth: 2.2
              })}</button> : null}</Yr>;
        })}</_Component><button type="button" aria-label="New tab" onClick={_0xc995c5} className="inline-flex h-9 w-9 shrink-0 items-center justify-center border-l border-[var(--border)] text-[var(--accent)] transition duration-200 hover:bg-[var(--surface-2)]">{_0x2aec99.jsx(_Component3, {
          size: 16,
          strokeWidth: 2
        })}</button></div></Dr>;
});
const fn = _0x43a24c.memo(function ({
  tabs: _0x1eaac4,
  addressValue: _0x1c907d,
  devtoolsEnabled: _0x4c7a8e,
  fullscreenEnabled: _0xcc55c0,
  onCreateTab: _0xaaba7,
  onActivateTab: _0x30d93f,
  onCloseTab: _0x584d47,
  onSetTabOrder: _0x26d04e,
  onAddressChange: _0x1d43af,
  onAddressSubmit: _0x2c4888,
  onBack: _0x959de1,
  onForward: _0x5b51a7,
  onReload: _0x1ad51f,
  onOpenSettings: _0x2f4459,
  onToggleDevtools: _0x49036a,
  onToggleFullscreen: _0x5daf72
}) {
  const _0x4b0e19 = _0x239cf3();
  const _0x2f03fa = _0x4b0e19 ? {
    duration: 0
  } : {
    duration: 0.22,
    ease: [0.22, 1, 0.36, 1]
  };
  const _0x4983f0 = {
    opacity: 0,
    y: -12
  };
  const _0x408d2a = {
    opacity: 0,
    y: -8
  };
  const _0xf34f12 = {
    tabs: _0x1eaac4,
    onCreateTab: _0xaaba7,
    onActivateTab: _0x30d93f,
    onCloseTab: _0x584d47,
    onSetTabOrder: _0x26d04e
  };
  const _0x573f14 = {
    value: _0x1c907d,
    onValueChange: _0x1d43af,
    onSubmit: _0x2c4888,
    onBack: _0x959de1,
    onForward: _0x5b51a7,
    onReload: _0x1ad51f,
    onOpenSettings: _0x2f4459,
    onToggleDevtools: _0x49036a,
    onToggleFullscreen: _0x5daf72,
    devtoolsEnabled: _0x4c7a8e,
    fullscreenEnabled: _0xcc55c0
  };
  return <_0x574231 mode="wait" initial={!1}><_0x119d27.header className="relative z-40 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur" initial={_0x4b0e19 ? !1 : _0x4983f0} animate={{
      opacity: 1,
      y: 0
    }} exit={_0x4b0e19 ? undefined : _0x408d2a} transition={_0x2f03fa} key="horizontal-shell"><div className="border-b border-[var(--border)] px-0">{_0x2aec99.jsx(dn, _0xf34f12)}</div><div className="px-3 py-1.5">{_0x2aec99.jsx(un, _0x573f14)}</div></_0x119d27.header></_0x574231>;
});
const Ee = [_0x32abc9, _0x32fbf1, _0x3d69e1, _0x498cba, _0xH1JEC1, _0xH1JEC2];
const mn = new Set(["lossless.wtf", "www.lossless.wtf", "monochrome.tf", "www.monochrome.tf", "monochrome.samidy.com", "www.monochrome.samidy.com"]);
function be(_0x3e8fde) {
  if (mn.has(_0x3e8fde.hostname)) {
    _0x3e8fde.hostname = "mono.geeked.wtf";
    _0x3e8fde.protocol = "https:";
  }
  return _0x3e8fde;
}
function Ue(_0x281008) {
  try {
    return be(new URL(_0x281008)).toString();
  } catch {
    return _0x281008;
  }
}
function ae(_0x52ea80) {
  const _0x3e854b = _0x52ea80.trim();
  if (!_0x3e854b) {
    return null;
  }
  if (_0x3e854b.startsWith("/")) {
    return _0x3e854b;
  }
  const _0x3bde7a = /^https?:\/\//i.test(_0x3e854b) ? _0x3e854b : "https://" + _0x3e854b;
  try {
    const _0x3ad9e3 = new URL(_0x3bde7a);
    if (_0x3ad9e3.protocol !== "http:" && _0x3ad9e3.protocol !== "https:" || !_0x3ad9e3.hostname.includes(".")) {
      return null;
    } else {
      return be(_0x3ad9e3).toString();
    }
  } catch {
    return null;
  }
}
function xt(_0x5b560b) {
  if (!_0x5b560b) {
    return [];
  }
  try {
    const _0x1552ed = JSON.parse(_0x5b560b);
    if (Array.isArray(_0x1552ed)) {
      return _0x1552ed.map(_0x5b7598 => {
        if (!_0x5b7598 || typeof _0x5b7598 != "object") {
          return null;
        }
        const _0x86330a = typeof _0x5b7598.id == "string" ? _0x5b7598.id.trim() : "";
        const _0x28af10 = typeof _0x5b7598.label == "string" ? _0x5b7598.label.trim() : "";
        const _0x4268d3 = typeof _0x5b7598.url == "string" ? _0x5b7598.url.trim() : "";
        if (!_0x86330a || !_0x28af10 || !_0x4268d3) {
          return null;
        }
        const _0xc99c1d = ae(_0x4268d3);
        if (_0xc99c1d) {
          return {
            id: _0x86330a,
            label: _0x28af10,
            url: _0xc99c1d
          };
        } else {
          return null;
        }
      }).filter(_0x238eb0 => !!_0x238eb0);
    } else {
      return [];
    }
  } catch {
    return [];
  }
}
function gt() {
  if (typeof window === "undefined") {
    return [];
  } else {
    return xt(window.localStorage.getItem(_0x1f2cf0.customShortcuts));
  }
}
function Ie() {
  if (typeof window === "undefined") {
    return {};
  }
  try {
    const _0x5b49fa = window.localStorage.getItem(_0x1f2cf0.customShortcuts + ".hiddenDefaults");
    if (!_0x5b49fa) {
      return {};
    }
    const _0x5802cd = JSON.parse(_0x5b49fa);
    if (!_0x5802cd || typeof _0x5802cd != "object") {
      return {};
    }
    const _0x5da2e1 = Object.entries(_0x5802cd).filter(([, _0x2e3b32]) => typeof _0x2e3b32 == "boolean");
    return Object.fromEntries(_0x5da2e1);
  } catch {
    return {};
  }
}
function pn(_0x10b15) {
  window.localStorage.setItem(_0x1f2cf0.customShortcuts + ".hiddenDefaults", JSON.stringify(_0x10b15));
}
function Je(_0x312f76) {
  window.localStorage.setItem(_0x1f2cf0.customShortcuts, JSON.stringify(_0x312f76));
}
function vt(_0x986203) {
  if (_0x986203.startsWith("/")) {
    return null;
  }
  try {
    const _0x17ab39 = ae(_0x986203);
    if (!_0x17ab39) {
      return null;
    }
    const _0x722765 = new URL(_0x17ab39).hostname;
    if (_0x722765) {
      return _0x57aafa("/api/favicon/" + encodeURIComponent(_0x722765));
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
function hn() {
  const _0xe736f7 = Ie();
  const _0x49bde3 = gt();
  const _0x5375ac = Ee.filter(_0x1e7ddd => !_0xe736f7[_0x1e7ddd.id] && _0x1e7ddd.url).map(_0x5c6492 => {
    const _0xf77073 = ae(_0x5c6492.url);
    if (_0xf77073) {
      return {
        id: _0x5c6492.id,
        label: _0x5c6492.label,
        url: _0xf77073,
        icon: _0x5c6492.icon,
        imageUrl: _0x5c6492.imageUrl,
        custom: false
      };
    } else {
      return null;
    }
  }).filter(Boolean);
  const _0x349d34 = _0x49bde3.map(_0x2c4917 => {
    const _0x41c157 = ae(_0x2c4917.url);
    if (_0x41c157) {
      return {
        id: _0x2c4917.id,
        label: _0x2c4917.label,
        url: _0x41c157,
        icon: "custom",
        imageUrl: undefined,
        custom: true
      };
    } else {
      return null;
    }
  }).filter(Boolean);
  return [..._0x349d34];
}
const _0x2d9344 = {
  movies: pt,
  music: Ae,
  games: ht,
  ai: _0x4e8983,
  history: _0x3e5681,
  custom: _0x4f8c3d
};
const bn = _0x2d9344;
const xn = {
  movies: "text-[var(--accent)]",
  music: "text-[var(--accent)]",
  games: "text-[var(--accent)]",
  ai: "text-[var(--accent)]",
  history: "text-[var(--accent)]",
  custom: "text-[var(--accent)]"
};
function _Component2({
  item: _0x47fd66
}) {
  const [_0x1eaaac, _0xc45790] = _0x43a24c.useState(!1);
  const _0x56f913 = bn[_0x47fd66.icon];
  const _0x1fb08f = _0x47fd66.url ? vt(_0x47fd66.url) : null;
  const _0x2ff5b6 = _0x47fd66.imageUrl ?? _0x1fb08f;
  if (_0x2ff5b6 && !_0x1eaaac) {
    return <img src={_0x2ff5b6} alt="" loading="lazy" className="h-7 w-7 rounded-full object-cover" onError={() => _0xc45790(true)} />;
  } else {
    return <_0x56f913 size={5000} strokeWidth={2} className={xn[_0x47fd66.icon]} />;
  }
}
function vn({
  onNavigate: _0x4efa7a
}) {
  const [_0x4986ff, _0x718bf0] = _0x43a24c.useState(() => gt());
  const [_0x1aee2d, _0x554d37] = _0x43a24c.useState(() => Ie());
  const [_0x13d97b, _0x12c1ac] = _0x43a24c.useState(!1);
  const [_0x3ec497, _0x290b67] = _0x43a24c.useState("");
  const [_0x3a81ed, _0xffe1e0] = _0x43a24c.useState("");
  const [_0x3e9f9d, _0x3a8808] = _0x43a24c.useState(null);
  _0x43a24c.useEffect(() => {
    const _0x453f5c = _0x5501ee => {
      if (_0x5501ee.key !== _0x1f2cf0.customShortcuts) {
        if (_0x5501ee.key === _0x1f2cf0.customShortcuts + ".hiddenDefaults") {
          _0x554d37(Ie());
        }
        return;
      }
      _0x718bf0(xt(_0x5501ee.newValue));
    };
    window.addEventListener("storage", _0x453f5c);
    return () => {
      window.removeEventListener("storage", _0x453f5c);
    };
  }, []);
  const _0x135ab6 = _0x43a24c.useMemo(() => [...Ee.filter(_0x5bdf80 => !_0x1aee2d[_0x5bdf80.id]), ..._0x4986ff.map(_0x15a3ac => ({
    id: _0x15a3ac.id,
    label: _0x15a3ac.label,
    icon: "custom",
    url: _0x15a3ac.url
  }))], [_0x4986ff, _0x1aee2d]);
  const _0x4d945a = () => {
    _0x12c1ac(!1);
    _0x290b67("");
    _0xffe1e0("");
    _0x3a8808(null);
  };
  const _0x37f492 = () => {
    _0x12c1ac(!0);
  };
  const _0x4a31bc = _0xe53a13 => {
    _0xe53a13.preventDefault();
    const _0x4b75c1 = _0x3ec497.trim();
    if (!_0x4b75c1) {
      _0x3a8808("Bookmark name is required.");
      return;
    }
    const _0x4e4c47 = _0x3a81ed.trim();
    if (!_0x4e4c47) {
      _0x3a8808("Bookmark URL is required.");
      return;
    }
    const _0x40366b = ae(_0x4e4c47);
    if (!_0x40366b) {
      _0x3a8808("Invalid URL. Use http(s):// or an internal /route path.");
      return;
    }
    const _0x482df2 = {
      id: "custom-" + Date.now().toString(36),
      label: _0x4b75c1,
      url: _0x40366b
    };
    _0x718bf0(_0x5a64b6 => {
      const _0x3f3415 = [..._0x5a64b6, _0x482df2];
      Je(_0x3f3415);
      return _0x3f3415;
    });
    _0x4d945a();
  };
  const _0x3a7d0e = _0x56801f => {
    _0x718bf0(_0x50e359 => {
      const _0x1926cc = _0x50e359.filter(_0x1e8254 => _0x1e8254.id !== _0x56801f);
      Je(_0x1926cc);
      return _0x1926cc;
    });
  };
  const _0x1d4243 = _0x55be17 => {
    _0x554d37(_0x4e3cdf => {
      const _0x52c1c9 = {
        ..._0x4e3cdf
      };
      _0x52c1c9[_0x55be17] = !0;
      const _0x330a9f = _0x52c1c9;
      pn(_0x330a9f);
      return _0x330a9f;
    });
  };
  return <_0x2aec99.Fragment><div className="mx-auto mt-6 flex max-w-[620px] flex-wrap justify-center gap-x-5 gap-y-6">{_0x135ab6.map(_0x57bb09 => {
        const _0x499053 = () => {
          if (_0x57bb09.url?.startsWith("/")) {
            _0x4efa7a(_0x57bb09.url);
            return;
          }
          if (_0x57bb09.url && _0x4efa7a) {
            _0x4efa7a(_0x57bb09.url);
          }
        };
        const _0x159228 = _0x57bb09.icon === "custom";
        const _0x22a938 = _0x159228 || Ee.some(_0x573a69 => _0x573a69.id === _0x57bb09.id);
        return <div className="group/shortcut relative" key={_0x57bb09.id}>{_0x22a938 ? <button type="button" onClick={_0x12bd2c => {
            _0x12bd2c.stopPropagation();
            if (_0x159228) {
              _0x3a7d0e(_0x57bb09.id);
            } else {
              _0x1d4243(_0x57bb09.id);
            }
          }} className="absolute -right-1 -top-1 z-10 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[11px] text-[var(--muted)] opacity-0 transition hover:text-[var(--text)] group-hover/shortcut:opacity-100 focus-visible:opacity-100" aria-label={"Delete " + _0x57bb09.label} title="Delete bookmark">x</button> : null}<button type="button" onClick={_0x499053} className="group flex w-24 flex-col items-center gap-2 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition group-hover:border-[var(--shortcut-hover-border)] group-hover:bg-[var(--shortcut-hover-bg)]"><_Component2 item={_0x57bb09} /></span><span className="w-full truncate text-sm text-[var(--text)]/90">{_0x57bb09.label}</span></button></div>;
      })}<button type="button" onClick={_0x37f492} className="group flex w-24 flex-col items-center gap-2 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition group-hover:border-[var(--shortcut-hover-border)] group-hover:bg-[var(--shortcut-hover-bg)]"><_Component3 size={20} strokeWidth={2} className="text-[var(--accent)]" /></span><span className="w-full truncate text-sm text-[var(--text)]/90">Add</span></button></div>{_0x13d97b ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4"><form onSubmit={_0x4a31bc} className="w-full max-w-md rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"><h3 className="text-base font-semibold text-[var(--text)]">Add Bookmark</h3><div className="mt-3 space-y-3"><input type="text" value={_0x3ec497} onChange={_0x5adf06 => {
            _0x290b67(_0x5adf06.target.value);
            if (_0x3e9f9d) {
              _0x3a8808(null);
            }
          }} placeholder="Bookmark name" className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)]" autoFocus={!0} /><input type="text" value={_0x3a81ed} onChange={_0x4433b3 => {
            _0xffe1e0(_0x4433b3.target.value);
            if (_0x3e9f9d) {
              _0x3a8808(null);
            }
          }} placeholder="https://example.com" className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)]" />{_0x3e9f9d ? <p className="text-xs text-red-400">{_0x3e9f9d}</p> : null}</div><div className="mt-4 flex justify-end gap-2"><button type="button" onClick={_0x4d945a} className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--muted)]/45">Cancel</button><button type="submit" className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]">Save</button></div></form></div> : null}</_0x2aec99.Fragment>;
}
function _Component6({
  value: _0xeb0574,
  searchEngineId: _0x366cd3,
  onValueChange: _0x44a606,
  onSearchEngineChange: _0x4927a7,
  onSubmit: _0x3efd6b,
  onNavigate: _0x203d2c,
  showShortcuts: _0x17cb9d = !0
}) {
  const {
    suggestions: _0x491ed3,
    clearSuggestions: _0x3739bd
  } = Re(_0xeb0574);
  const [_0x5ddd1b, _0x1fa93f] = _0x43a24c.useState(-1);
  const [_0x33cf32, _0x5cb67c] = _0x43a24c.useState(!1);
  const [_0x1086e7, _0x270657] = _0x43a24c.useState(!1);
  const _0x11980d = _0x239cf3();
  const _0x45cc49 = _0x43a24c.useRef(null);
  const _0x407c83 = _0x43a24c.useRef(null);
  const _0x5dd4d8 = _0x43a24c.useRef(null);
  const _0x5829b2 = _0x491ed3.length > 0 && !_0x33cf32;
  const _0x5b587d = _0x1264e8.find(_0x2b04f6 => _0x2b04f6.id === _0x366cd3) ?? _0x1264e8[0];
  _0x43a24c.useEffect(() => {
    const _0x428f67 = _0x2cebac => {
      if (_0x407c83.current && !_0x407c83.current.contains(_0x2cebac.target)) {
        _0x5cb67c(true);
        _0x1fa93f(-1);
      }
    };
    document.addEventListener("mousedown", _0x428f67);
    return () => document.removeEventListener("mousedown", _0x428f67);
  }, []);
  _0x43a24c.useEffect(() => {
    if (!_0x1086e7) {
      return;
    }
    const _0xeb0c99 = _0x564bf1 => {
      if (_0x5dd4d8.current && !_0x5dd4d8.current.contains(_0x564bf1.target)) {
        _0x270657(false);
      }
    };
    const _0x420902 = _0x2eb857 => {
      if (_0x2eb857.key === "Escape") {
        _0x270657(false);
      }
    };
    document.addEventListener("mousedown", _0xeb0c99);
    document.addEventListener("keydown", _0x420902);
    return () => {
      document.removeEventListener("mousedown", _0xeb0c99);
      document.removeEventListener("keydown", _0x420902);
    };
  }, [_0x1086e7]);
  const _0x1306f0 = _0x12b5d2 => {
    _0x12b5d2.preventDefault();
    _0x5cb67c(!0);
    _0x1fa93f(-1);
    _0x3739bd();
    _0x3efd6b();
  };
  const _0x2137e9 = _0x49e704 => {
    _0x44a606(_0x49e704);
    _0x5cb67c(!0);
    _0x1fa93f(-1);
    _0x3739bd();
    if (_0x203d2c) {
      _0x203d2c(_0x49e704);
    }
  };
  const _0x3e19e2 = _0x212385 => {
    if (!!_0x5829b2 && _0x491ed3.length !== 0) {
      if (_0x212385.key === "ArrowDown") {
        _0x212385.preventDefault();
        _0x1fa93f(_0x5da664 => _0x5da664 < _0x491ed3.length - 1 ? _0x5da664 + 1 : _0x5da664);
      } else if (_0x212385.key === "ArrowUp") {
        _0x212385.preventDefault();
        _0x1fa93f(_0x943ccf => _0x943ccf > 0 ? _0x943ccf - 1 : -1);
      } else if (_0x212385.key === "Enter" && _0x5ddd1b >= 0) {
        _0x212385.preventDefault();
        _0x2137e9(_0x491ed3[_0x5ddd1b]);
      } else if (_0x212385.key === "Escape") {
        _0x5cb67c(true);
        _0x1fa93f(-1);
      }
    }
  };
  const _0x9cc6ab = {
    opacity: 0,
    y: -6
  };
  const _0xcc272e = {
    opacity: 0,
    y: -6
  };
  const _0x4d09fd = {
    opacity: 0,
    y: -8
  };
  const _0x360a30 = {
    opacity: 0,
    y: -8
  };
  const _0x1e88f5 = {
    onNavigate: _0x203d2c
  };
  return <section className="w-full max-w-3xl text-center"><div className="mx-auto inline-block"><h1 className="brand-wordmark text-[64px] font-semibold tracking-tight text-[var(--accent)] leading-none">lucide</h1><div className="underline-expand mt-4 h-1 w-full rounded-full bg-[var(--accent)]" style={{
        boxShadow: "0 0 18px color-mix(in srgb, var(--accent) 70%, transparent)"
      }} /></div><form onSubmit={_0x1306f0} className="relative z-20 mx-auto mt-9 w-full max-w-[620px] px-3 sm:px-0"><label htmlFor="newtab-search" className="sr-only">Search the web</label><div className={"flex h-12 items-center border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] px-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl transition hover:border-[var(--muted)]/45 focus-within:border-[var(--accent)]/70 " + (_0x5829b2 ? "rounded-t-xl" : "rounded-xl")}><_0x2e62ad size={18} strokeWidth={2} className="text-[var(--muted)]" /><input ref={_0x45cc49} id="newtab-search" type="text" value={_0xeb0574} onChange={_0x346eeb => {
          _0x5cb67c(!1);
          _0x1fa93f(-1);
          _0x44a606(_0x346eeb.target.value);
        }} onKeyDown={_0x3e19e2} placeholder={"Search " + _0x5b587d.name + " or type a URL"} className="ml-3 h-full w-full bg-transparent text-[15px] text-[var(--text)] placeholder:text-[var(--muted)]/90 outline-none" autoComplete="off" /><div ref={_0x5dd4d8} className="relative ml-6 shrink-0"><button type="button" onClick={() => _0x270657(_0x2e6eb7 => !_0x2e6eb7)} className="inline-flex h-7 items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 text-[11px] text-[var(--muted)] transition hover:border-[var(--muted)]/45 hover:text-[var(--text)]" aria-label="Select search engine" aria-haspopup="listbox" aria-expanded={_0x1086e7}><span className="max-w-[88px] truncate">{_0x5b587d.name}</span><_0x3939f9 size={12} className={"transition " + (_0x1086e7 ? "rotate-180" : "")} /></button><_0x574231>{_0x1086e7 ? <_0x119d27.div initial={_0x11980d ? !1 : _0x9cc6ab} animate={{
              opacity: 1,
              y: 0
            }} exit={_0x11980d ? {
              opacity: 0
            } : _0xcc272e} transition={{
              duration: _0x11980d ? 0 : 0.06
            }} className="absolute right-0 z-50 mt-1.5 w-44 overflow-hidden rounded-b-xl border-x border-b border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl"><div role="listbox" aria-label="Search engine" className="max-h-56 overflow-y-auto p-1">{_0x1264e8.map(_0x73059d => {
                  const _0x556dc8 = _0x73059d.id === _0x5b587d.id;
                  return <button type="button" role="option" aria-selected={_0x556dc8} onClick={() => {
                    _0x4927a7(_0x73059d.id);
                    _0x270657(!1);
                  }} className={"flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs transition " + (_0x556dc8 ? "bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-[var(--accent)]" : "text-[var(--text)] hover:bg-[var(--surface-2)]")} key={_0x73059d.id}><span>{_0x73059d.name}</span>{_0x556dc8 ? _0x2aec99.jsx(_0x137dfe, {
                      size: 12
                    }) : null}</button>;
                })}</div></_0x119d27.div> : null}</_0x574231></div></div><_0x574231>{_0x5829b2 && _0x491ed3.length > 0 ? <_0x119d27.div ref={_0x407c83} initial={_0x11980d ? !1 : _0x4d09fd} animate={{
          opacity: 1,
          y: 0
        }} exit={_0x11980d ? {
          opacity: 0
        } : _0x360a30} transition={{
          duration: _0x11980d ? 0 : 0.08
        }} className="absolute left-0 right-0 z-30 mx-3 overflow-hidden rounded-b-xl border-x border-b border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:mx-0">{_0x491ed3.map((_0x478533, _0x49fa21) => <button type="button" onClick={() => _0x2137e9(_0x478533)} className={"w-full border-t border-[var(--border)] px-5 py-3 text-left text-[15px] transition-colors duration-150 first:border-t-0 " + (_0x49fa21 === _0x5ddd1b ? "bg-[var(--autocomplete-selected-bg)] font-medium text-[var(--text)]" : "text-[var(--text)]/90 hover:bg-[var(--autocomplete-selected-bg)]")} key={_0x478533}><span className="block truncate">{_0x478533}</span></button>)}</_0x119d27.div> : null}</_0x574231></form>{_0x17cb9d ? _0x2aec99.jsx(vn, _0x1e88f5) : null}</section>;
}
function wn({
  open: _0x16e84f,
  onClose: _0x6ad378
}) {
  const _0x4ad0c1 = _0x239cf3();
  return <_0x574231 initial={!1}>{_0x16e84f ? <_0x119d27.div className="fixed inset-0 z-[75] flex items-center justify-center px-4 py-6" initial={_0x4ad0c1 ? !1 : _0x3845de} animate={_0x5f26b4} exit={_0x1e795c} transition={_0x4ad0c1 ? {
      duration: 0
    } : _0x33deec} onClick={_0x6ad378}><_0x119d27.div aria-hidden="true" className="absolute inset-0 bg-[rgba(6,10,18,0.48)] backdrop-blur-[8px]" initial={_0x4ad0c1 ? !1 : _0x3845de} animate={_0x5f26b4} exit={_0x1e795c} transition={_0x4ad0c1 ? {
        duration: 0
      } : _0x33deec} /><_0x119d27.section role="dialog" aria-modal="true" aria-label="Static build notice" onClick={_0x13ecf5 => _0x13ecf5.stopPropagation()} initial={_0x4ad0c1 ? !1 : _0x16ec75} animate={_0x559bcb} exit={_0x4ad0c1 ? {
        opacity: 0
      } : _0x414b64} transition={_0x4ad0c1 ? {
        duration: 0
      } : _0x1c883f} className="w-full max-w-lg overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl"><header className="flex items-start justify-between gap-4 border-b border-[color-mix(in_srgb,var(--border)_58%,transparent)] px-5 py-4"><div><div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] text-[var(--accent)]">{_0x2aec99.jsx(_0x4f8c3d, {
                size: 18,
                strokeWidth: 2.1
              })}</div><h2 className="mt-3 text-lg font-semibold text-[var(--text)]">You are on a static build</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Some features and settings are limited on static builds. To get all features, find an official domain in the <a href="https://discord.gg/ZDq3UYskkK" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline underline-offset-4">Discord server</a>.</p></div><button type="button" onClick={_0x6ad378} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] text-[var(--muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text)]" aria-label="Close notice">{_0x2aec99.jsx(_0x4946bc, {
              size: 15,
              strokeWidth: 2.2
            })}</button></header><div className="flex items-center justify-end border-t border-[color-mix(in_srgb,var(--border)_58%,transparent)] px-5 py-3"><button type="button" onClick={_0x6ad378} className="rounded-md border border-[color-mix(in_srgb,var(--accent)_45%,var(--border))] bg-[color-mix(in_srgb,var(--accent)_14%,var(--surface))] px-3.5 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[color-mix(in_srgb,var(--accent)_22%,var(--surface))]">Continue</button></div></_0x119d27.section></_0x119d27.div> : null}</_0x574231>;
}
function Sn(_0x249aa9, _0x23aad0 = 1) {
  const [_0x2c97d7, _0x3e5676] = _0x43a24c.useState([]);
  const _0x547be1 = _0x43a24c.useRef(null);
  _0x43a24c.useEffect(() => {
    if (_0x249aa9.length < _0x23aad0) {
      _0x547be1.current?.abort();
      _0x3e5676([]);
      return;
    }
    let _0x3328b6 = !1;
    const _0x38042d = async () => {
      _0x547be1.current?.abort();
      const _0x18c7ad = new AbortController();
      _0x547be1.current = _0x18c7ad;
      try {
        const _0x53b401 = {
          signal: _0x18c7ad.signal
        };
        const _0x12fcd2 = await _0x2bb2c1("/api/music-search?q=" + encodeURIComponent(_0x249aa9), _0x53b401);
        if (!_0x12fcd2.ok) {
          if (!_0x3328b6) {
            _0x3e5676([]);
          }
          return;
        }
        const _0x439c05 = await _0x12fcd2.json();
        if (!_0x3328b6) {
          _0x3e5676(Array.isArray(_0x439c05.items) ? _0x439c05.items.slice(0, 6) : []);
        }
      } catch (_0x805c36) {
        if (!_0x3328b6 && _0x805c36 instanceof Error && _0x805c36.name !== "AbortError") {
          _0x3e5676([]);
        }
      }
    };
    const _0x103164 = window.setTimeout(_0x38042d, 25);
    return () => {
      _0x3328b6 = !0;
      window.clearTimeout(_0x103164);
      _0x547be1.current?.abort();
    };
  }, [_0x23aad0, _0x249aa9]);
  const _0x4f1e05 = _0x43a24c.useCallback(() => {
    _0x547be1.current?.abort();
    _0x3e5676([]);
  }, []);
  return {
    results: _0x249aa9.length < _0x23aad0 ? [] : _0x2c97d7,
    clearResults: _0x4f1e05
  };
}
function kn(_0x1368b8, _0x56997d) {
  const _0x2c802b = _0x56997d.trim().toLowerCase();
  if (_0x2c802b) {
    return _0x1368b8.label.toLowerCase().includes(_0x2c802b) || _0x1368b8.url.toLowerCase().includes(_0x2c802b);
  } else {
    return true;
  }
}
const _0x473408 = {
  movies: pt,
  music: Ae,
  games: ht,
  ai: _0x4e8983,
  history: _0x3e5681,
  custom: _0x4f8c3d
};
const Tn = _0x473408;
function _Component4({
  item: _0x364e70
}) {
  const [_0x2d783f, _0x289c72] = _0x43a24c.useState(!1);
  if (_0x364e70.kind === "music") {
    if (_0x364e70.imageUrl && !_0x2d783f) {
      return <img src={_0x364e70.imageUrl} alt="" loading="lazy" className="h-8 w-8 rounded-md object-cover" onError={() => _0x289c72(true)} />;
    } else {
      return <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">{_0x2aec99.jsx(Ae, {
          size: 14,
          strokeWidth: 2.1
        })}</span>;
    }
  }
  if (_0x364e70.kind === "bookmark") {
    const _0x56602d = Tn[_0x364e70.shortcut.icon];
    const _0x4a678a = _0x364e70.shortcut.imageUrl ?? vt(_0x364e70.shortcut.url);
    if (_0x364e70.shortcut.icon === "custom" && _0x4a678a && !_0x2d783f) {
      return <img src={_0x4a678a} alt="" loading="lazy" className="h-8 w-8 rounded-md object-cover" onError={() => _0x289c72(true)} />;
    } else {
      return <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">{_0x2aec99.jsx(_0x56602d, {
          size: 14,
          strokeWidth: 2.1
        })}</span>;
    }
  }
  return <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">{_0x364e70.kind === "ai" ? _0x2aec99.jsx(_0x4e8983, {
      size: 14,
      strokeWidth: 2.1
    }) : _0x2aec99.jsx(_0x2e62ad, {
      size: 14,
      strokeWidth: 2.1
    })}</span>;
}
function Nn({
  open: _0x5dfa8a,
  searchEngineName: _0x2f85a6,
  onClose: _0x3676f7,
  onNavigate: _0x1d91ba
}) {
  const _0xf3b1ca = _0x239cf3();
  const _0x2817f6 = _0x43a24c.useRef(null);
  const _0x23764c = _0x43a24c.useRef([]);
  const [_0x5e4cf0, _0x4b4d3c] = _0x43a24c.useState("");
  const [_0xb21992, _0x2b683b] = _0x43a24c.useState(0);
  const [_0x4288e1, _0x4d1ddb] = _0x43a24c.useState([]);
  const {
    suggestions: _0x5be52d,
    clearSuggestions: _0xa1feb4
  } = Re(_0x5dfa8a ? _0x5e4cf0 : "");
  const {
    results: _0x5005a6,
    clearResults: _0x34ea9a
  } = Sn(_0x5dfa8a ? _0x5e4cf0 : "");
  _0x43a24c.useEffect(() => {
    if (!_0x5dfa8a) {
      _0x4b4d3c("");
      _0x2b683b(0);
      _0xa1feb4();
      _0x34ea9a();
      return;
    }
    _0x4d1ddb(hn());
    window.setTimeout(() => {
      _0x2817f6.current?.focus();
      _0x2817f6.current?.select();
    }, 0);
  }, [_0x34ea9a, _0xa1feb4, _0x5dfa8a]);
  const _0xb4e08 = _0x43a24c.useMemo(() => {
    const _0x3bcdeb = _0x5e4cf0.trim();
    const _0x55e339 = _0x4288e1.filter(_0x5be64f => kn(_0x5be64f, _0x3bcdeb)).slice(0, _0x3bcdeb ? 6 : 8).map(_0x55518a => ({
      id: "bookmark:" + _0x55518a.id,
      kind: "bookmark",
      title: _0x55518a.label,
      subtitle: _0x55518a.url,
      value: _0x55518a.url,
      shortcut: _0x55518a
    }));
    if (!_0x3bcdeb) {
      return _0x55e339;
    }
    const _0x36fc5f = _0x5be52d.filter(_0x4cfc6f => _0x4cfc6f.trim().toLowerCase() !== _0x3bcdeb.toLowerCase()).slice(0, 6).map(_0x49d257 => ({
      id: "suggestion:" + _0x49d257,
      kind: "suggestion",
      title: _0x49d257,
      subtitle: "Search " + _0x2f85a6,
      value: _0x49d257
    }));
    const _0x3ed095 = _0x5005a6.map(_0x1c05e9 => ({
      id: "music:" + _0x1c05e9.kind + ":" + _0x1c05e9.id,
      kind: "music",
      title: _0x1c05e9.title,
      subtitle: _0x1c05e9.subtitle + " • " + _0x1c05e9.source,
      value: _0x1c05e9.href,
      imageUrl: _0x1c05e9.imageUrl
    }));
    const _0x42c28c = {
      id: "ai:" + _0x3bcdeb,
      kind: "ai",
      title: "Ask AI: " + _0x3bcdeb,
      subtitle: "Send to Lucide AI",
      value: _0x3bcdeb
    };
    const _0x1f3282 = {
      id: "query:" + _0x3bcdeb,
      kind: "query",
      title: _0x3bcdeb,
      subtitle: "Open or search with " + _0x2f85a6,
      value: _0x3bcdeb
    };
    return [_0x42c28c, ..._0x3ed095, _0x1f3282, ..._0x36fc5f, ..._0x55e339];
  }, [_0x5005a6, _0x5e4cf0, _0x2f85a6, _0x4288e1, _0x5be52d]);
  _0x43a24c.useEffect(() => {
    _0x2b683b(_0x55955a => _0xb4e08.length === 0 ? 0 : Math.min(_0x55955a, _0xb4e08.length - 1));
  }, [_0xb4e08]);
  _0x43a24c.useEffect(() => {
    if (!_0x5dfa8a || _0xb4e08.length === 0) {
      return;
    }
    const _0x40a9b1 = _0x23764c.current[_0xb21992];
    if (_0x40a9b1) {
      _0x40a9b1.scrollIntoView({
        block: "nearest"
      });
    }
  }, [_0xb4e08.length, _0x5dfa8a, _0xb21992]);
  _0x43a24c.useEffect(() => {
    if (!_0x5dfa8a) {
      return;
    }
    const _0x34116c = _0xad2f54 => {
      if (_0xad2f54.key === "Escape") {
        _0xad2f54.preventDefault();
        _0x3676f7();
      }
    };
    window.addEventListener("keydown", _0x34116c);
    return () => {
      window.removeEventListener("keydown", _0x34116c);
    };
  }, [_0x3676f7, _0x5dfa8a]);
  const _0x3bcfed = _0x209297 => {
    if (_0x209297) {
      _0x1d91ba(_0x209297);
      _0x3676f7();
    }
  };
  const _0xd1e3b0 = {
    opacity: 0,
    y: -18,
    scale: 0.98
  };
  const _0xfca764 = {
    opacity: 0,
    y: -12,
    scale: 0.98
  };
  return <_0x574231 initial={!1}>{_0x5dfa8a ? <_0x119d27.div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6" initial={_0xf3b1ca ? !1 : {
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} transition={{
      duration: _0xf3b1ca ? 0 : 0.08
    }} onClick={_0x3676f7}><_0x119d27.div aria-hidden="true" className="absolute inset-0 bg-[rgba(6,10,18,0.48)] backdrop-blur-[8px]" initial={_0xf3b1ca ? !1 : {
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: _0xf3b1ca ? 0 : 0.08
      }} /><_0x119d27.section role="dialog" aria-modal="true" aria-label="Spotlight search" onClick={_0x14bdf7 => _0x14bdf7.stopPropagation()} initial={_0xf3b1ca ? !1 : _0xd1e3b0} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={_0xf3b1ca ? {
        opacity: 0
      } : _0xfca764} transition={{
        duration: _0xf3b1ca ? 0 : 0.1
      }} className="w-full max-w-2xl overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl" style={{
        fontFamily: "Manrope Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif"
      }}><div className="border-b border-[var(--border)] px-5 py-4"><div className="flex items-center gap-3 rounded-lg border border-[color-mix(in_srgb,var(--border)_58%,transparent)] bg-[color-mix(in_srgb,var(--surface)_56%,transparent)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl"><_0x2e62ad size={17} strokeWidth={2.1} className="text-[var(--muted)]" /><input ref={_0x2817f6} type="text" value={_0x5e4cf0} onChange={_0x430176 => {
              _0x4b4d3c(_0x430176.target.value);
              _0x2b683b(0);
            }} onKeyDown={_0x2926ae => {
              if (_0x2926ae.key === "ArrowDown") {
                _0x2926ae.preventDefault();
                _0x2b683b(_0x5a2c47 => _0xb4e08.length === 0 ? 0 : Math.min(_0x5a2c47 + 1, _0xb4e08.length - 1));
              }
              if (_0x2926ae.key === "ArrowUp") {
                _0x2926ae.preventDefault();
                _0x2b683b(_0x903f16 => Math.max(_0x903f16 - 1, 0));
              }
              if (_0x2926ae.key === "Enter") {
                _0x2926ae.preventDefault();
                _0x3bcfed(_0xb4e08[_0xb21992]);
              }
            }} placeholder="Search the web, music, bookmarks, or jump somewhere" className="h-full w-full bg-transparent text-[15px] text-[var(--text)] outline-none placeholder:text-[var(--muted)]/72" autoComplete="off" spellCheck={!1} /></div></div><div className="max-h-[26rem] overflow-hidden px-3 py-3" onWheel={_0x572af8 => {
          _0x572af8.preventDefault();
        }}>{_0xb4e08.length > 0 ? _0xb4e08.map((_0x18bbf1, _0x364f25) => <button ref={_0x10a010 => {
            _0x23764c.current[_0x364f25] = _0x10a010;
          }} type="button" onClick={() => _0x3bcfed(_0x18bbf1)} className={"flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition " + (_0x364f25 === _0xb21992 ? "bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] text-[var(--text)]" : "text-[var(--text)]/92 hover:bg-[var(--surface-2)]")} key={_0x18bbf1.id}><_Component4 item={_0x18bbf1} /><span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">{_0x18bbf1.title}</span><span className="mt-0.5 block truncate text-xs text-[var(--muted)]">{_0x18bbf1.subtitle}</span></span></button>) : <div className="px-3 py-8 text-center">{_0x2aec99.jsx("p", {
              className: "text-sm font-medium text-[var(--text)]",
              children: "Nothing matched that search."
            })}<p className="mt-1 text-xs text-[var(--muted)]">Try a bookmark name, URL, or a web search.</p></div>}</div><div className="flex items-center justify-end border-t border-[var(--border)] px-5 py-3 text-xs text-[var(--muted)]"><span className="inline-flex items-center gap-1.5">{_0x2aec99.jsx(tn, {
              size: 12,
              strokeWidth: 2.2
            })}Open selection</span></div></_0x119d27.section></_0x119d27.div> : null}</_0x574231>;
}
const X = "New Tab";
const En = [{
  id: "new-tab",
  title: X,
  active: !0,
  motion: null,
  targetUrl: undefined,
  inputValue: ""
}];
const yt = 250;
const In = 30000;
function wt() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID == "function") {
    return crypto.randomUUID();
  } else {
    return Date.now() + "-" + Math.random().toString(16).slice(2);
  }
}
function St(_0x520711) {
  if (_0x1bea8c(_0x520711, typeof window !== "undefined" ? window.location.origin : undefined)) {
    return !0;
  }
  try {
    const _0x288116 = new URL(_0x520711);
    return _0x288116.protocol === "http:" || _0x288116.protocol === "https:";
  } catch {
    return !1;
  }
}
function _n() {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const _0x1e669b = window.localStorage.getItem(_0x1f2cf0.webHistory);
    if (!_0x1e669b) {
      return [];
    }
    const _0x2ab5a7 = JSON.parse(_0x1e669b);
    if (Array.isArray(_0x2ab5a7)) {
      return _0x2ab5a7.map(_0x5e0148 => {
        if (!_0x5e0148 || typeof _0x5e0148 != "object") {
          return null;
        }
        const _0x519dd2 = _0x5e0148;
        if (typeof _0x519dd2.url != "string" || !St(_0x519dd2.url)) {
          return null;
        }
        const _0x1fb590 = kt(_0x519dd2.url);
        return {
          id: typeof _0x519dd2.id == "string" ? _0x519dd2.id : wt(),
          url: _0x1fb590,
          title: typeof _0x519dd2.title == "string" && _0x519dd2.title.trim() ? _0x519dd2.title.trim() : _0x1fb590,
          faviconUrl: typeof _0x519dd2.faviconUrl == "string" && _0x519dd2.faviconUrl.trim() ? _0x519dd2.faviconUrl : undefined,
          visitedAt: typeof _0x519dd2.visitedAt == "number" ? _0x519dd2.visitedAt : Date.now()
        };
      }).filter(_0x3da087 => _0x3da087 !== null).sort((_0x297c3a, _0x5eb8c7) => _0x5eb8c7.visitedAt - _0x297c3a.visitedAt).slice(0, yt);
    } else {
      return [];
    }
  } catch {
    return [];
  }
}
function Qe(_0x56b396) {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(_0x1f2cf0.webHistory, JSON.stringify(_0x56b396.slice(0, yt)));
    } catch {
      return;
    }
  }
}
function kt(_0x1073eb) {
  const _0x4fa513 = _0x1bea8c(_0x1073eb, typeof window !== "undefined" ? window.location.origin : undefined);
  return _0x4fa513 || Ue(_0x1073eb);
}
function Cn(_0x4ec7fb) {
  const _0x5ed6d8 = _0x1bea8c(_0x4ec7fb, typeof window !== "undefined" ? window.location.origin : undefined);
  if (_0x5ed6d8) {
    return _0x513f86(_0x5ed6d8)?.title ?? _0x5ed6d8;
  } else {
    return _0x4ec7fb;
  }
}
function Ze(_0xa919c8) {
  if (typeof window === "undefined" || !St(_0xa919c8.url)) {
    return;
  }
  const _0x107eb0 = kt(_0xa919c8.url);
  const _0x58be84 = typeof _0xa919c8.visitedAt == "number" ? _0xa919c8.visitedAt : Date.now();
  const _0x68e82d = _0xa919c8.title.trim() || Cn(_0x107eb0);
  const _0xc2293a = _n();
  const _0x1d746a = _0xc2293a[0];
  if (_0x1d746a && _0x1d746a.url === _0x107eb0 && Math.abs(_0x1d746a.visitedAt - _0x58be84) <= In) {
    const _0x18968d = {
      ..._0x1d746a
    };
    _0x18968d.title = _0x68e82d;
    _0x18968d.faviconUrl = _0xa919c8.faviconUrl ?? _0x1d746a.faviconUrl;
    _0x18968d.visitedAt = _0x58be84;
    Qe([_0x18968d, ..._0xc2293a.slice(1)]);
    return;
  }
  Qe([{
    id: wt(),
    url: _0x107eb0,
    title: _0x68e82d,
    faviconUrl: _0xa919c8.faviconUrl,
    visitedAt: _0x58be84
  }, ..._0xc2293a]);
}
const An = 190;
const Rn = 210;
function Un(_0x1fbf42, _0x591ce9) {
  switch (_0x591ce9.type) {
    case "ACTIVATE":
      return _0x1fbf42.map(_0x426738 => ({
        ..._0x426738,
        active: _0x426738.id === _0x591ce9.id
      }));
    case "CREATE":
      const _0x1611b7 = {
        id: _0x591ce9.id,
        title: X,
        active: !0,
        motion: "opening",
        inputValue: ""
      };
      return [..._0x1fbf42.map(_0x2c74c3 => ({
        ..._0x2c74c3,
        active: !1
      })), _0x1611b7];
    case "CLOSE_START":
      if (_0x1fbf42.length <= 1) {
        return _0x1fbf42;
      } else {
        return _0x1fbf42.map(_0x138e40 => _0x138e40.id === _0x591ce9.id ? {
          ..._0x138e40,
          motion: "closing"
        } : _0x138e40);
      }
    case "CLOSE_COMPLETE":
      {
        if (_0x1fbf42.length <= 1) {
          return _0x1fbf42.map(_0x10e62e => ({
            ..._0x10e62e,
            motion: null
          }));
        }
        const _0x2a8a45 = _0x1fbf42.findIndex(_0x42dd65 => _0x42dd65.id === _0x591ce9.id);
        if (_0x2a8a45 === -1) {
          return _0x1fbf42;
        }
        const _0xdb8c16 = _0x1fbf42[_0x2a8a45].active;
        const _0x49a965 = _0x1fbf42.filter(_0x44aaff => _0x44aaff.id !== _0x591ce9.id);
        if (!_0xdb8c16) {
          return _0x49a965;
        }
        const _0x49b1e4 = Math.max(0, Math.min(_0x2a8a45, _0x49a965.length - 1));
        return _0x49a965.map((_0x250b45, _0x396960) => ({
          ..._0x250b45,
          active: _0x396960 === _0x49b1e4
        }));
      }
    case "CLEAR_MOTION":
      return _0x1fbf42.map(_0x377760 => _0x377760.id === _0x591ce9.id ? {
        ..._0x377760,
        motion: null
      } : _0x377760);
    case "RESET":
      return _0x1fbf42.map(_0x311a69 => _0x311a69.id === _0x591ce9.id ? {
        ..._0x311a69,
        title: X,
        targetUrl: undefined,
        inputValue: "",
        faviconUrl: undefined
      } : _0x311a69);
    case "UPDATE_INPUT":
      return _0x1fbf42.map(_0x11939c => _0x11939c.id === _0x591ce9.id ? {
        ..._0x11939c,
        inputValue: _0x591ce9.value
      } : _0x11939c);
    case "SET_ORDER":
      {
        const _0x12e0bc = new Map(_0x1fbf42.map(_0x2590cd => [_0x2590cd.id, _0x2590cd]));
        const _0x31cdca = _0x591ce9.ids.map(_0x38cc5f => _0x12e0bc.get(_0x38cc5f)).filter(_0x71b23c => !!_0x71b23c);
        if (_0x31cdca.length === _0x1fbf42.length) {
          return _0x31cdca;
        }
        const _0x268699 = _0x1fbf42.filter(_0x34eb0f => !_0x591ce9.ids.includes(_0x34eb0f.id));
        return [..._0x31cdca, ..._0x268699];
      }
    case "NAVIGATE":
      return _0x1fbf42.map(_0x5817cb => _0x5817cb.id === _0x591ce9.id ? {
        ..._0x5817cb,
        targetUrl: _0x591ce9.url,
        inputValue: _0x591ce9.url,
        title: _0x591ce9.title,
        faviconUrl: _0x591ce9.faviconUrl
      } : _0x5817cb);
    case "UPDATE_METADATA":
      return _0x1fbf42.map(_0x11a047 => _0x11a047.id !== _0x591ce9.id ? _0x11a047 : {
        ..._0x11a047,
        targetUrl: _0x591ce9.metadata.url?.trim() || _0x11a047.targetUrl,
        inputValue: _0x591ce9.metadata.url?.trim() ? _0x591ce9.metadata.url : _0x11a047.inputValue,
        title: _0x591ce9.metadata.title?.trim() || _0x11a047.title,
        faviconUrl: _0x591ce9.metadata.faviconUrl ?? _0x11a047.faviconUrl
      });
    default:
      return _0x1fbf42;
  }
}
function Dn(_0x48a58b) {
  if (!_0x2f3a58().persistTabs) {
    return _0x48a58b;
  }
  try {
    const _0xde17ac = localStorage.getItem(_0x1f2cf0.tabs);
    if (!_0xde17ac) {
      return _0x48a58b;
    }
    const _0x2edf04 = JSON.parse(_0xde17ac);
    if (Array.isArray(_0x2edf04) && _0x2edf04.length > 0) {
      return _0x2edf04.map(_0xb166e7 => {
        const _0x17240c = {
          ..._0xb166e7
        };
        _0x17240c.motion = null;
        const _0x20d9fc = _0x17240c;
        const _0x54fac1 = typeof _0xb166e7.targetUrl == "string" ? _0xb166e7.targetUrl : "";
        const _0x341a83 = typeof _0xb166e7.inputValue == "string" ? _0xb166e7.inputValue : "";
        const _0x398b82 = _0x1bea8c(_0x54fac1 || _0x341a83, window.location.origin);
        if (!_0x398b82) {
          return _0x20d9fc;
        }
        const _0x2dc7de = _0x513f86(_0x398b82);
        if (_0x2dc7de) {
          return {
            ..._0x20d9fc,
            targetUrl: _0x398b82,
            inputValue: _0x398b82,
            title: _0x2dc7de.title,
            faviconUrl: _0x2dc7de.faviconUrl
          };
        } else {
          return _0x20d9fc;
        }
      });
    }
  } catch {}
  return _0x48a58b;
}
function Ln(_0x37f2d1) {
  let _0x2064a1 = 0;
  for (const _0x56f00c of _0x37f2d1) {
    const _0x3f80a4 = _0x56f00c.id.match(/^tab-(\d+)$/);
    if (_0x3f80a4) {
      const _0x4d39b5 = parseInt(_0x3f80a4[1], 10);
      if (_0x4d39b5 > _0x2064a1) {
        _0x2064a1 = _0x4d39b5;
      }
    }
  }
  return _0x2064a1 + 1;
}
function Mn(_0x427484) {
  const [_0xaa2230, _0x54ffb2] = _0x43a24c.useReducer(Un, _0x427484, Dn);
  _0x43a24c.useEffect(() => {
    if (_0x2f3a58().persistTabs) {
      try {
        localStorage.setItem(_0x1f2cf0.tabs, JSON.stringify(_0xaa2230));
      } catch {}
    } else {
      localStorage.removeItem(_0x1f2cf0.tabs);
    }
  }, [_0xaa2230]);
  return {
    tabs: _0xaa2230,
    activateTab: _0x449760 => _0x54ffb2({
      type: "ACTIVATE",
      id: _0x449760
    }),
    createTab: () => {
      const _0x54a971 = "tab-" + Ln(_0xaa2230);
      _0x54ffb2({
        type: "CREATE",
        id: _0x54a971
      });
      setTimeout(() => {
        _0x54ffb2({
          type: "CLEAR_MOTION",
          id: _0x54a971
        });
      }, An);
      return _0x54a971;
    },
    closeTab: _0x38cab1 => {
      _0x54ffb2({
        type: "CLOSE_START",
        id: _0x38cab1
      });
      setTimeout(() => {
        const _0x18ad73 = {
          type: "CLOSE_COMPLETE",
          id: _0x38cab1
        };
        _0x54ffb2(_0x18ad73);
      }, Rn);
    },
    resetTab: _0x3ad5f8 => {
      _0x54ffb2({
        type: "RESET",
        id: _0x3ad5f8
      });
    },
    updateInput: (_0x4e660b, _0x5819de) => {
      const _0x3d46e4 = {
        type: "UPDATE_INPUT",
        id: _0x4e660b,
        value: _0x5819de
      };
      _0x54ffb2(_0x3d46e4);
    },
    setTabOrder: _0x5ade46 => {
      _0x54ffb2({
        type: "SET_ORDER",
        ids: _0x5ade46
      });
    },
    navigateTab: (_0x2f217b, _0x5d5264, _0x536226, _0x320372) => {
      _0x54ffb2({
        type: "NAVIGATE",
        id: _0x2f217b,
        url: _0x5d5264,
        title: _0x536226,
        faviconUrl: _0x320372
      });
      Ze({
        url: _0x5d5264,
        title: _0x536226,
        faviconUrl: _0x320372
      });
    },
    updateTabMetadata: (_0x5b7966, _0x27492b) => {
      const _0x4ebe73 = {
        type: "UPDATE_METADATA",
        id: _0x5b7966,
        metadata: _0x27492b
      };
      _0x54ffb2(_0x4ebe73);
      if (typeof _0x27492b.url == "string" && _0x27492b.url.trim()) {
        Ze({
          url: _0x27492b.url,
          title: _0x27492b.title?.trim() || _0x27492b.url,
          faviconUrl: _0x27492b.faviconUrl
        });
      }
    }
  };
}
function On(_0x1f7f27) {
  const _0x5e0883 = _0x1f7f27.trim();
  if (!_0x5e0883) {
    return "";
  }
  try {
    return be(new URL(_0x5e0883)).toString();
  } catch {}
  try {
    const _0x2e8507 = new URL("http://" + _0x5e0883);
    if (_0x2e8507.hostname.includes(".")) {
      return be(_0x2e8507).toString();
    }
  } catch {}
  return _0x2fe807() + encodeURIComponent(_0x5e0883);
}
function Fn(_0x448e6c) {
  if (typeof window === "undefined") {
    return null;
  }
  const _0x4f88f7 = _0x1bea8c(_0x448e6c, window.location.origin);
  if (!_0x4f88f7) {
    return null;
  }
  const _0x2ca351 = _0x513f86(_0x4f88f7);
  if (_0x2ca351) {
    return {
      url: _0x4f88f7,
      title: _0x2ca351.title,
      faviconUrl: _0x2ca351.faviconUrl
    };
  } else {
    return null;
  }
}
function Tt(_0x31978d) {
  try {
    const _0x1d5e03 = new URL(Ue(_0x31978d)).hostname;
    if (_0x1d5e03) {
      return _0x57aafa("/api/favicon/" + encodeURIComponent(_0x1d5e03));
    } else {
      return undefined;
    }
  } catch {
    return;
  }
}
function et(_0x43803e) {
  const _0x4a007c = Fn(_0x43803e);
  if (_0x4a007c) {
    return _0x4a007c;
  }
  const _0x10d09d = On(_0x43803e);
  if (!_0x10d09d) {
    return null;
  }
  let _0x1adb28 = X;
  try {
    _0x1adb28 = new URL(Ue(_0x10d09d)).hostname || X;
  } catch {
    _0x1adb28 = X;
  }
  const _0x4973e6 = Tt(_0x10d09d);
  const _0x13b3a2 = {
    url: _0x10d09d,
    title: _0x1adb28,
    faviconUrl: _0x4973e6
  };
  return _0x13b3a2;
}
function Pn(_0x1193e0) {
  const {
    tabs: _0x3afb19,
    activateTab: _0x3eaf00,
    createTab: _0x352f5b,
    closeTab: _0x37258b,
    resetTab: _0x2566f5,
    updateInput: _0x3864f7,
    setTabOrder: _0x19e5a5,
    navigateTab: _0x100d58,
    updateTabMetadata: _0x419d0c
  } = Mn(_0x1193e0);
  const _0x6f31e6 = _0x43a24c.useMemo(() => _0x3afb19.find(_0x368087 => _0x368087.active) ?? _0x3afb19[0] ?? null, [_0x3afb19]);
  return {
    tabs: _0x3afb19,
    activeTab: _0x6f31e6,
    activateTab: _0x3eaf00,
    createTab: _0x352f5b,
    closeTab: _0x37258b,
    resetActiveTab: () => {
      if (_0x6f31e6) {
        _0x2566f5(_0x6f31e6.id);
      }
    },
    updateActiveInput: _0x597ba3 => {
      if (_0x6f31e6) {
        _0x3864f7(_0x6f31e6.id, _0x597ba3);
      }
    },
    setTabOrder: _0x19e5a5,
    navigateTabById: (_0x3a128a, _0x7b95f6) => {
      const _0x4fa57d = et(_0x7b95f6);
      if (_0x4fa57d) {
        _0x100d58(_0x3a128a, _0x4fa57d.url, _0x4fa57d.title, _0x4fa57d.faviconUrl);
        return _0x4fa57d.url;
      } else {
        return "";
      }
    },
    navigateActiveTab: _0x39ac54 => {
      if (!_0x6f31e6) {
        return "";
      }
      const _0x59a297 = _0x39ac54 ?? _0x6f31e6.inputValue;
      const _0x6dc5ca = et(_0x59a297);
      if (_0x6dc5ca) {
        _0x100d58(_0x6f31e6.id, _0x6dc5ca.url, _0x6dc5ca.title, _0x6dc5ca.faviconUrl);
        return _0x6dc5ca.url;
      } else {
        return "";
      }
    },
    updateTabFromFrame: (_0x42f48e, _0x2d33ca) => {
      const _0x11ae35 = _0x2d33ca.url ? Tt(_0x2d33ca.url) : undefined;
      const _0x2f7f8c = {
        ..._0x2d33ca
      };
      _0x2f7f8c.faviconUrl = _0x11ae35;
      _0x419d0c(_0x42f48e, _0x2f7f8c);
    }
  };
}
function zn() {
  const [_0x15dd27, _0x34dab1] = _0x43a24c.useState(!1);
  const [_0x51dd17, _0x3a54af] = _0x43a24c.useState(0);
  const _0x2c5919 = _0x43a24c.useRef(null);
  const _0x45fc05 = _0x43a24c.useRef(null);
  const _0x5aa7fd = _0x43a24c.useRef(0);
  const _0x227b9a = () => {
    if (_0x2c5919.current !== null) {
      window.clearInterval(_0x2c5919.current);
      _0x2c5919.current = null;
    }
  };
  const _0xfb538f = () => {
    if (_0x45fc05.current !== null) {
      window.clearTimeout(_0x45fc05.current);
      _0x45fc05.current = null;
    }
  };
  const _0x27605e = () => {
    _0xfb538f();
    if (!_0x15dd27) {
      _0x5aa7fd.current = Date.now();
    }
    _0x34dab1(!0);
    _0x3a54af(_0x1fac87 => _0x1fac87 > 0.08 ? _0x1fac87 : 0.08);
    if (_0x2c5919.current === null) {
      _0x2c5919.current = window.setInterval(() => {
        _0x3a54af(_0x24a7b1 => _0x24a7b1 >= 0.86 ? _0x24a7b1 : Math.min(0.86, _0x24a7b1 + Math.max((0.86 - _0x24a7b1) * 0.14, 0.008)));
      }, 130);
    }
  };
  const _0x13e232 = () => {
    _0x34dab1(true);
    _0x3a54af(_0x33dd08 => Math.max(_0x33dd08, 0.93));
  };
  const _0x49f082 = () => {
    _0x227b9a();
    _0xfb538f();
    _0x34dab1(!0);
    _0x3a54af(1);
    const _0xbacc99 = Date.now() - _0x5aa7fd.current;
    const _0x12acb1 = Math.max(0, 320 - _0xbacc99);
    _0x45fc05.current = window.setTimeout(() => {
      _0x34dab1(!1);
      _0x3a54af(0);
      _0x45fc05.current = null;
    }, _0x12acb1 + 180);
  };
  _0x43a24c.useEffect(() => () => {
    _0x227b9a();
    _0xfb538f();
  }, []);
  return {
    visible: _0x15dd27,
    progress: _0x51dd17,
    start: _0x27605e,
    settle: _0x13e232,
    done: _0x49f082
  };
}
function Bn(_0x1e1481) {
  const [_0x12bd6c, _0x54c46d] = _0x43a24c.useState(null);
  const _0x3dc42f = _0x43a24c.useRef(null);
  _0x43a24c.useEffect(() => {
    _0x3dc42f.current = _0x12bd6c;
  }, [_0x12bd6c]);
  return {
    loadingTabId: _0x12bd6c,
    startForTab: _0x1233f3 => {
      _0x54c46d(_0x1233f3);
      _0x3dc42f.current = _0x1233f3;
      _0x1e1481.start();
    },
    settleForTab: _0xbd6c7b => {
      if (_0x3dc42f.current === _0xbd6c7b) {
        _0x1e1481.settle();
      }
    },
    doneForTab: _0x2da37a => {
      if (_0x3dc42f.current === _0x2da37a) {
        _0x1e1481.done();
        _0x54c46d(null);
        _0x3dc42f.current = null;
      }
    }
  };
}
function Vn() {
  const [_0x144844, _0x5228eb] = _0x43a24c.useState(null);
  _0x43a24c.useEffect(() => {
    let _0x3db5dc = !1;
    let _0x31bdad = null;
    const _0x2b3da = async () => {
      const _0x145362 = await _0x1a8ee0();
      if (_0x3db5dc) {
        return;
      }
      const _0x14de70 = _0x145362 ? URL.createObjectURL(_0x145362) : null;
      _0x5228eb(_0x4bed88 => {
        if (_0x4bed88) {
          URL.revokeObjectURL(_0x4bed88);
        }
        return _0x14de70;
      });
      _0x31bdad = _0x14de70;
    };
    _0x2b3da();
    window.addEventListener(_0x524b5d, _0x2b3da);
    return () => {
      _0x3db5dc = !0;
      window.removeEventListener(_0x524b5d, _0x2b3da);
      if (_0x31bdad) {
        URL.revokeObjectURL(_0x31bdad);
      }
    };
  }, []);
  return _0x144844;
}
function $n() {
  const [_0x493da4, _0x46ad31] = _0x43a24c.useState(() => _0x2f3a58().newTabBehavior === "shortcuts");
  const [_0x170016, _0xbbb9ed] = _0x43a24c.useState(() => _0x2f3a58().searchEngine);
  const [_0x16d9b2, _0x2cb618] = _0x43a24c.useState(() => _0x2f3a58().globalShortcutModifier);
  _0x43a24c.useEffect(() => {
    const _0x4c6a58 = () => {
      const _0x5740cd = _0x2f3a58();
      _0x46ad31(_0x5740cd.newTabBehavior === "shortcuts");
      _0xbbb9ed(_0x5740cd.searchEngine);
      _0x2cb618(_0x5740cd.globalShortcutModifier);
    };
    window.addEventListener("storage", _0x4c6a58);
    window.addEventListener(_0x524b5d, _0x4c6a58);
    return () => {
      window.removeEventListener("storage", _0x4c6a58);
      window.removeEventListener(_0x524b5d, _0x4c6a58);
    };
  }, []);
  return {
    showShortcuts: _0x493da4,
    searchEngineId: _0x170016,
    setSearchEngineId: _0xbbb9ed,
    globalShortcutModifier: _0x16d9b2
  };
}
const fe = "lucide-eruda-script";
const Wn = "lucide-eruda-container";
const Gn = "https://cdn.jsdelivr.net/npm/eruda@3.4.3/eruda.js";
function Hn(_0x4dc03d) {
  const _0x4b6140 = _0x43a24c.useRef(new Map());
  const _0xcdefad = _0x43a24c.useCallback(_0x2d8b7e => {
    if (_0x2d8b7e) {
      try {
        const _0x799fdb = _0x2d8b7e.contentWindow;
        const _0x20849a = _0x2d8b7e.contentDocument;
        _0x799fdb?.eruda?.destroy?.();
        _0x20849a?.getElementById(fe)?.remove();
        _0x20849a?.getElementById(Wn)?.remove();
      } catch {
        return;
      }
    }
  }, []);
  const _0x58f553 = _0x43a24c.useCallback(async _0x10eaf2 => {
    const _0x2cf14e = _0x4dc03d.current?.get(_0x10eaf2);
    if (!_0x2cf14e?.contentDocument || !_0x2cf14e.contentWindow) {
      return;
    }
    const _0x389b25 = _0x2cf14e.contentWindow;
    const _0x5c726f = _0x2cf14e.contentDocument;
    const _0x410208 = () => {
      if (_0x389b25.eruda) {
        _0x389b25.eruda.init();
        _0x389b25.eruda.show();
      }
    };
    if (_0x389b25.eruda) {
      _0x410208();
      return;
    }
    if (_0x5c726f.getElementById(fe)) {
      return;
    }
    const _0x430212 = _0x5c726f.createElement("script");
    _0x430212.id = fe;
    _0x430212.type = "text/javascript";
    _0x430212.src = Gn;
    _0x430212.crossOrigin = "anonymous";
    try {
      const _0x4d1fa7 = {
        once: !0
      };
      _0x430212.addEventListener("load", () => {
        _0x4b6140.current.delete(_0x10eaf2);
        window.setTimeout(_0x410208, 0);
      }, _0x4d1fa7);
      _0x430212.addEventListener("error", () => {
        _0x4b6140.current.delete(_0x10eaf2);
        _0x430212.remove();
      }, {
        once: !0
      });
      if (!_0x5c726f.head) {
        _0x4b6140.current.delete(_0x10eaf2);
        _0x430212.remove();
        return;
      }
      _0x5c726f.head.appendChild(_0x430212);
    } catch {
      _0x4b6140.current.delete(_0x10eaf2);
      _0x430212.remove();
    }
    const _0x5901e5 = window.setTimeout(() => {
      _0x4b6140.current.delete(_0x10eaf2);
      _0x5c726f.getElementById(fe)?.remove();
    }, 15000);
    _0x4b6140.current.set(_0x10eaf2, _0x5901e5);
  }, [_0x4dc03d]);
  const _0x58a2e0 = _0x43a24c.useCallback(_0x5508c0 => {
    const _0xc33ee3 = _0x4b6140.current.get(_0x5508c0);
    if (_0xc33ee3 !== undefined) {
      window.clearTimeout(_0xc33ee3);
      _0x4b6140.current.delete(_0x5508c0);
    }
  }, []);
  const _0x2e6924 = _0x43a24c.useCallback(_0x3981be => {
    for (const [_0x522df0, _0x32db05] of _0x4b6140.current.entries()) {
      if (!_0x3981be.has(_0x522df0)) {
        window.clearTimeout(_0x32db05);
        _0x4b6140.current.delete(_0x522df0);
      }
    }
  }, []);
  _0x43a24c.useEffect(() => {
    const _0x49116e = _0x4b6140.current;
    return () => {
      for (const _0xb4f867 of _0x49116e.values()) {
        window.clearTimeout(_0xb4f867);
      }
      _0x49116e.clear();
    };
  }, []);
  return {
    destroyForFrame: _0xcdefad,
    injectIntoFrame: _0x58f553,
    clearPendingForTab: _0x58a2e0,
    clearPendingForRemovedTabs: _0x2e6924
  };
}
const _Component5 = _0x43a24c.lazy(() => _0x28290a(() => import("./proxy-viewport-Cu_NmTP_.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url).then(_0x37f0c6 => ({
  default: _0x37f0c6.ProxyViewport
})));
const Yn = "1";
const tt = "1";
function me(_0x1cd990) {
  return _0x5a96c3(_0x1cd990.trim());
}
function Kn({
  initialInternalPath: _0x74314f,
  initialExternalUrl: _0x28c244
} = {}) {
  const {
    tabs: _0x2c7ecf,
    activeTab: _0x2c7c8e,
    activateTab: _0x56096b,
    createTab: _0x4a10ef,
    closeTab: _0x28681b,
    resetActiveTab: _0x15a558,
    setTabOrder: _0x305a96,
    updateActiveInput: _0x1296d9,
    navigateTabById: _0x288b4f,
    navigateActiveTab: _0x5979d8,
    updateTabFromFrame: _0xacfad8
  } = Pn(En);
  const _0x376df9 = zn();
  const _0x5d99b2 = Bn(_0x376df9);
  const {
    activeTheme: _0x45ee04
  } = _0x528b47();
  const {
    showShortcuts: _0x5300a1,
    searchEngineId: _0x5bbe07,
    setSearchEngineId: _0x54ddb7,
    globalShortcutModifier: _0x332367
  } = $n();
  const _0x38a280 = Vn();
  const [_0xc260d8, _0x3b297f] = _0x43a24c.useState({});
  const [_0x309dcf, _0x3e2545] = _0x43a24c.useState(!1);
  const [_0x40043b, _0x1d949f] = _0x43a24c.useState({});
  const [_0x2e0f36, _0x3f0567] = _0x43a24c.useState(!1);
  const [_0x225908, _0x53dd10] = _0x43a24c.useState(!1);
  const [_0x57a334, _0x5680a9] = _0x43a24c.useState(!1);
  const _0x316df0 = _0x43a24c.useRef(new Map());
  const _0x3bd39e = _0x43a24c.useRef(new Map());
  const _0x9c06c2 = _0x43a24c.useRef(!1);
  const _0x3c3f86 = _0x43a24c.useRef(null);
  const _0x463f24 = _0x43a24c.useRef({
    url: "",
    ts: 0
  });
  const _0x27df25 = _0x2c7c8e?.id ?? "";
  const _0xfae4af = _0x2c7c8e?.targetUrl?.trim() ?? "";
  const _0x4e735f = _0x27df25 ? _0xc260d8[_0x27df25] ?? "" : "";
  const _0x3836a0 = _0x1264e8.find(_0x58a43b => _0x58a43b.id === _0x5bbe07)?.name ?? "the web";
  const _0x499adc = _0xfae4af.length === 0;
  const _0x286452 = _0x1cdb6b(_0x332367, "F");
  const _0x3cb263 = _0x2c7ecf.filter(_0x11e140 => (_0x11e140.targetUrl?.trim() ?? "").length > 0);
  const _0x9992af = _0x3cb263.filter(_0x36ed84 => !me(_0x36ed84.targetUrl?.trim() ?? ""));
  const _0x211f20 = _0x3cb263.filter(_0x208a8f => me(_0x208a8f.targetUrl?.trim() ?? ""));
  const _0x3fcd9b = _0x376df9.visible && !!_0x27df25 && _0x5d99b2.loadingTabId === _0x27df25;
  const _0x187e6f = _0x27df25 ? _0x40043b[_0x27df25] === !0 : !1;
  const _0x6f6009 = !1;
  const _0x51e539 = _0x43a24c.useCallback(() => {
    _0x5a3d79();
  }, []);
  _0x43a24c.useEffect(() => {
    _0x812889(_0x6f6009);
  }, [_0x6f6009]);
  const _0x2f9fea = Hn(_0x316df0);
  const _0x458897 = _0x173f5d => {
    const _0x4fefbe = _0x173f5d.trim();
    if (_0x4fefbe) {
      if (!me(_0x4fefbe)) {
        _0x464c7c();
      }
    }
  };
  const _0x434530 = _0x43a24c.useCallback(() => {
    if (!_0x27df25) {
      return;
    }
    const _0x426313 = _0x3bd39e.current.get(_0x27df25);
    if (_0x426313 && _0x426313.index > 0) {
      _0x426313.index -= 1;
      const _0x29b952 = _0x426313.entries[_0x426313.index];
      _0x5d99b2.startForTab(_0x27df25);
      _0x288b4f(_0x27df25, _0x29b952);
      return;
    }
    _0x316df0.current.get(_0x27df25)?.contentWindow?.history.back();
  }, [_0x27df25, _0x288b4f, _0x5d99b2]);
  const _0x2579b3 = _0x43a24c.useCallback(() => {
    if (!_0x27df25) {
      return;
    }
    const _0x551a70 = _0x3bd39e.current.get(_0x27df25);
    if (_0x551a70 && _0x551a70.index < _0x551a70.entries.length - 1) {
      _0x551a70.index += 1;
      const _0x469a0d = _0x551a70.entries[_0x551a70.index];
      _0x5d99b2.startForTab(_0x27df25);
      _0x288b4f(_0x27df25, _0x469a0d);
      return;
    }
    _0x316df0.current.get(_0x27df25)?.contentWindow?.history.forward();
  }, [_0x27df25, _0x288b4f, _0x5d99b2]);
  const _0x11dde4 = _0x43a24c.useCallback(() => {
    if (!_0x27df25) {
      return;
    }
    _0x5d99b2.startForTab(_0x27df25);
    const _0x21e2ed = _0x316df0.current.get(_0x27df25);
    if (!_0x21e2ed) {
      _0x5d99b2.doneForTab(_0x27df25);
      return;
    }
    if (me(_0xfae4af)) {
      const _0x2fe690 = _0x1686ac(_0xfae4af);
      const _0x124cc1 = "" + _0x2fe690 + (_0x2fe690.includes("?") ? "&" : "?") + "r=" + Date.now();
      _0x21e2ed.src = _0x124cc1;
      return;
    }
    try {
      _0x21e2ed.contentWindow?.location.reload();
    } catch {
      _0x5d99b2.doneForTab(_0x27df25);
    }
  }, [_0x27df25, _0xfae4af, _0x5d99b2]);
  _0x43a24c.useEffect(() => {
    const _0xc351d7 = () => {
      const _0x303b88 = _0x27df25 ? _0x316df0.current.get(_0x27df25) : null;
      _0x5680a9(!!_0x303b88 && document.fullscreenElement === _0x303b88);
    };
    document.addEventListener("fullscreenchange", _0xc351d7);
    _0xc351d7();
    return () => {
      document.removeEventListener("fullscreenchange", _0xc351d7);
    };
  }, [_0x27df25]);
  _0x43a24c.useEffect(() => {
    const _0x1a87cc = new Set(_0x2c7ecf.map(_0x4df564 => _0x4df564.id));
    for (const [_0xe100f2] of _0x3bd39e.current.entries()) {
      if (!_0x1a87cc.has(_0xe100f2)) {
        _0x3bd39e.current.delete(_0xe100f2);
      }
    }
    for (const _0x46b411 of _0x2c7ecf) {
      const _0x53724f = _0x46b411.targetUrl?.trim() ?? "";
      if (!_0x53724f) {
        continue;
      }
      const _0x43bca8 = _0x3bd39e.current.get(_0x46b411.id);
      if (!_0x43bca8) {
        const _0x4f99e9 = {
          entries: [_0x53724f],
          index: 0
        };
        _0x3bd39e.current.set(_0x46b411.id, _0x4f99e9);
        continue;
      }
      if (_0x43bca8.entries[_0x43bca8.index] !== _0x53724f) {
        _0x43bca8.entries = [..._0x43bca8.entries.slice(0, _0x43bca8.index + 1), _0x53724f];
        _0x43bca8.index = _0x43bca8.entries.length - 1;
      }
    }
  }, [_0x2c7ecf]);
  _0x43a24c.useEffect(() => {
    const _0x5df18b = new Set(_0x2c7ecf.map(_0x2a3cf7 => _0x2a3cf7.id));
    _0x1d949f(_0x506f42 => {
      const _0x55b2ef = Object.entries(_0x506f42).filter(([_0x4aee42, _0x44af5e]) => _0x44af5e && _0x5df18b.has(_0x4aee42));
      if (_0x55b2ef.length === Object.keys(_0x506f42).length) {
        return _0x506f42;
      } else {
        return Object.fromEntries(_0x55b2ef);
      }
    });
    _0x2f9fea.clearPendingForRemovedTabs(_0x5df18b);
  }, [_0x2c7ecf, _0x2f9fea]);
  _0x43a24c.useEffect(() => {
    const _0x5820da = _0x3f91f8 => {
      if (!_0x3f91f8.defaultPrevented && !_0x3f91f8.isComposing && !_0x309dcf && !_0x40cfa6(_0x3f91f8.target)) {
        if (_0x3cb8fa(_0x3f91f8, _0x332367, "F")) {
          _0x3f91f8.preventDefault();
          _0x3f0567(_0x49137e => !_0x49137e);
        }
      }
    };
    window.addEventListener("keydown", _0x5820da);
    return () => {
      window.removeEventListener("keydown", _0x5820da);
    };
  }, [_0x332367, _0x309dcf]);
  _0x43a24c.useEffect(() => {
    const _0x25d98d = _0x3be977 => {
      if (_0x2f3a58().confirmLeave) {
        _0x3be977.preventDefault();
        _0x3be977.returnValue = "";
        return "";
      }
    };
    window.addEventListener("beforeunload", _0x25d98d);
    return () => window.removeEventListener("beforeunload", _0x25d98d);
  }, []);
  _0x43a24c.useEffect(() => {
    if (_0x499adc) {
      _0x51e539();
    }
  }, [_0x499adc, _0x51e539]);
  const _0x28f1f3 = _0x43a24c.useCallback(() => {
    window.localStorage.setItem(_0x1f2cf0.staticBuildNoticeVersion, Yn);
    _0x53dd10(!1);
    _0x51e539();
  }, [_0x51e539]);
  _0x43a24c.useEffect(() => {
    if ((window.localStorage.getItem(_0x1f2cf0.firstVisitPromptVersion) ?? "") !== tt) {
      window.localStorage.setItem(_0x1f2cf0.firstVisitPromptVersion, tt);
    }
  }, []);
  const _0x35dc7a = _0x43a24c.useCallback(_0x50fd16 => {
    _0x54ddb7(_0x50fd16);
    _0x3a8d77("searchEngine", _0x50fd16);
  }, []);
  const _0x88e3ac = _0x43a24c.useCallback(() => _0x4a10ef(), [_0x4a10ef]);
  const _0x204dd6 = _0x43a24c.useCallback(_0x566a6d => {
    const _0x5e3fc4 = _0x566a6d.trim();
    if (!_0x5e3fc4) {
      return;
    }
    const _0x4c6f3e = Date.now();
    if (_0x463f24.current.url === _0x5e3fc4 && _0x4c6f3e - _0x463f24.current.ts < 750) {
      return;
    }
    const _0xff3ff8 = {
      url: _0x5e3fc4,
      ts: _0x4c6f3e
    };
    _0x463f24.current = _0xff3ff8;
    _0x458897(_0x5e3fc4);
    const _0x3589cf = _0x88e3ac();
    _0x5d99b2.startForTab(_0x3589cf);
    _0x288b4f(_0x3589cf, _0x5e3fc4);
  }, [_0x88e3ac, _0x288b4f, _0x5d99b2]);
  const _0x1f5c5a = _0x43a24c.useCallback(_0x556154 => {
    _0x28681b(_0x556154);
  }, [_0x28681b]);
  const _0x36a37e = _0x43a24c.useCallback(_0x310c65 => {
    _0x305a96(_0x310c65);
  }, [_0x305a96]);
  const _0x271594 = _0x43a24c.useCallback(async () => {
    const _0x4cb5bf = _0x27df25 ? _0x316df0.current.get(_0x27df25) : null;
    if (_0x4cb5bf) {
      if (document.fullscreenElement === _0x4cb5bf) {
        await document.exitFullscreen().catch(() => {});
        return;
      }
      await _0x4cb5bf.requestFullscreen().catch(() => {});
    }
  }, [_0x27df25]);
  const _0x58363b = _0x43a24c.useCallback(() => {
    const _0x458c36 = document.getElementById("chrome-omnibox");
    if (_0x458c36) {
      _0x458c36.focus();
      _0x458c36.select();
    }
  }, []);
  const _0x2bbe57 = _0x43a24c.useCallback(_0x3c6582 => {
    if (!_0x27df25 || _0x2c7ecf.length <= 1) {
      return;
    }
    const _0x521e60 = _0x2c7ecf.findIndex(_0x5e2b73 => _0x5e2b73.id === _0x27df25);
    if (_0x521e60 === -1) {
      return;
    }
    const _0x51ddc3 = (_0x521e60 + _0x3c6582 + _0x2c7ecf.length) % _0x2c7ecf.length;
    const _0x454e3d = _0x2c7ecf[_0x51ddc3];
    if (_0x454e3d) {
      _0x56096b(_0x454e3d.id);
    }
  }, [_0x27df25, _0x56096b, _0x2c7ecf]);
  const _0x1a863d = _0x43a24c.useCallback((_0x37ad2d, _0x206135) => {
    if (_0x37ad2d === "spotlight") {
      _0x3f0567(_0x1210ef => !_0x1210ef);
      return;
    }
    if (_0x37ad2d === "new-tab") {
      _0x88e3ac();
      return;
    }
    if (_0x37ad2d === "close-tab") {
      if (!_0x27df25 || _0x2c7ecf.length <= 1) {
        return;
      }
      _0x1f5c5a(_0x27df25);
      return;
    }
    if (_0x37ad2d === "reload-tab") {
      _0x11dde4();
      return;
    }
    if (_0x37ad2d === "focus-address-bar") {
      _0x58363b();
      return;
    }
    if (_0x37ad2d === "next-tab") {
      _0x2bbe57(1);
      return;
    }
    if (_0x37ad2d === "previous-tab") {
      _0x2bbe57(-1);
      return;
    }
    if (_0x37ad2d === "tab-index" && typeof _0x206135 == "number") {
      const _0x46c5e0 = _0x2c7ecf[_0x206135 - 1];
      if (_0x46c5e0) {
        _0x56096b(_0x46c5e0.id);
      }
    }
  }, [_0x27df25, _0x2bbe57, _0x56096b, _0x1f5c5a, _0x88e3ac, _0x58363b, _0x11dde4, _0x2c7ecf]);
  _0x43a24c.useEffect(() => {
    const _0x5d2bfa = _0x5064e5 => {
      if (!_0x5064e5.defaultPrevented && !_0x5064e5.isComposing && !_0x309dcf && !_0x2e0f36 && !_0x40cfa6(_0x5064e5.target)) {
        for (let _0x1771fa = 1; _0x1771fa <= 9; _0x1771fa += 1) {
          if (_0x3cb8fa(_0x5064e5, _0x332367, String(_0x1771fa))) {
            if (!_0x2c7ecf[_0x1771fa - 1]) {
              return;
            }
            _0x5064e5.preventDefault();
            _0x1a863d("tab-index", _0x1771fa);
            return;
          }
        }
        if (_0x3cb8fa(_0x5064e5, _0x332367, "T")) {
          _0x5064e5.preventDefault();
          _0x1a863d("new-tab");
          return;
        }
        if (_0x3cb8fa(_0x5064e5, _0x332367, "W")) {
          if (!_0x27df25 || _0x2c7ecf.length <= 1) {
            return;
          }
          _0x5064e5.preventDefault();
          _0x1a863d("close-tab");
          return;
        }
        if (_0x3cb8fa(_0x5064e5, _0x332367, "R")) {
          _0x5064e5.preventDefault();
          _0x1a863d("reload-tab");
          return;
        }
        if (_0x3cb8fa(_0x5064e5, _0x332367, "L")) {
          _0x5064e5.preventDefault();
          _0x1a863d("focus-address-bar");
          return;
        }
        if (_0x3cb8fa(_0x5064e5, _0x332367, "ArrowRight")) {
          _0x5064e5.preventDefault();
          _0x1a863d("next-tab");
          return;
        }
        if (_0x3cb8fa(_0x5064e5, _0x332367, "ArrowLeft")) {
          _0x5064e5.preventDefault();
          _0x1a863d("previous-tab");
        }
      }
    };
    window.addEventListener("keydown", _0x5d2bfa);
    return () => {
      window.removeEventListener("keydown", _0x5d2bfa);
    };
  }, [_0x27df25, _0x332367, _0x1a863d, _0x309dcf, _0x2e0f36]);
  _0x43a24c.useEffect(() => {
    if (_0x9c06c2.current) {
      return;
    }
    const _0x22065e = new URLSearchParams(window.location.search).get("open");
    const _0x39fe15 = (_0x22065e ? _0x1bea8c(_0x22065e, window.location.origin) : null) ?? _0x74314f;
    if (_0x28c244) {
      _0x5979d8(_0x28c244);
      _0x3b9d62("/");
      _0x9c06c2.current = !0;
      return;
    }
    if (!_0x39fe15) {
      _0x9c06c2.current = !0;
      return;
    }
    _0x3c3f86.current = _0x39fe15;
    _0x5979d8(_0x39fe15);
    _0x3b9d62(_0x39fe15);
    _0x9c06c2.current = !0;
  }, [_0x28c244, _0x74314f, _0x5979d8]);
  _0x43a24c.useEffect(() => {
    if (!_0x9c06c2.current) {
      return;
    }
    const _0x36f021 = _0x3c3f86.current;
    if (_0x36f021) {
      if (_0xfae4af !== _0x36f021) {
        return;
      }
      _0x3c3f86.current = null;
    }
    const _0x5cbcf5 = _0x5a96c3(_0xfae4af) ? _0xfae4af : "/";
    if (_0x529d0d() !== _0x5cbcf5) {
      _0x3b9d62(_0x5cbcf5);
    }
  }, [_0xfae4af]);
  _0x43a24c.useEffect(() => {
    const _0x168c10 = _0x4b0dd6 => {
      if (_0x4b0dd6.origin !== window.location.origin) {
        return;
      }
      const _0x3e239d = _0x4b0dd6.data;
      if (!_0x3e239d || typeof _0x3e239d != "object") {
        return;
      }
      const _0x2cf45f = _0x3e239d.type;
      if (_0x2cf45f === _0xd5f71) {
        _0x3f0567(_0x51ff6b => !_0x51ff6b);
        return;
      }
      if (_0x2cf45f === _0x3778b3) {
        _0x1a863d(typeof _0x3e239d.action == "string" ? _0x3e239d.action : "", typeof _0x3e239d.index == "number" ? _0x3e239d.index : undefined);
        return;
      }
      if (_0x2cf45f === "open-new-tab") {
        const _0x553567 = typeof _0x3e239d.decodedUrl == "string" ? _0x3e239d.decodedUrl ?? "" : typeof _0x3e239d.url == "string" ? _0x3e239d.url ?? "" : "";
        _0x204dd6(_0x553567);
        return;
      }
      if (_0x2cf45f === "lucide:go-home") {
        _0x15a558();
        _0x3b9d62("/");
        return;
      }
      if (_0x2cf45f === "lucide:open-external-window") {
        const _0x1e2ca3 = _0x3e239d.href;
        if (typeof _0x1e2ca3 != "string" || _0x1e2ca3.trim().length === 0) {
          return;
        }
        window.open(_0x1e2ca3.trim(), "_blank", "noopener,noreferrer");
        return;
      }
      if (_0x2cf45f !== "lucide:open-link") {
        return;
      }
      const _0x53eb65 = _0x3e239d.href;
      const _0xc0453c = _0x3e239d.newTab === !0;
      if (typeof _0x53eb65 != "string" || _0x53eb65.trim().length === 0) {
        return;
      }
      const _0x128f1b = _0x53eb65.trim();
      _0x458897(_0x128f1b);
      if (_0xc0453c) {
        const _0x20af0b = _0x88e3ac();
        _0x5d99b2.startForTab(_0x20af0b);
        _0x288b4f(_0x20af0b, _0x128f1b);
        return;
      }
      if (_0x27df25) {
        _0x5d99b2.startForTab(_0x27df25);
      }
      _0x5979d8(_0x128f1b);
    };
    window.addEventListener("message", _0x168c10);
    return () => {
      window.removeEventListener("message", _0x168c10);
    };
  }, [_0x27df25, _0x5979d8, _0x288b4f, _0x204dd6, _0x15a558, _0x5d99b2]);
  _0x43a24c.useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }
    const _0x4c734b = _0x18743a => {
      const {
        data: _0x5de639
      } = _0x18743a;
      if (!_0x5de639 || _0x5de639.type !== "open-new-tab") {
        return;
      }
      const _0x200891 = typeof _0x5de639.decodedUrl == "string" ? _0x5de639.decodedUrl : typeof _0x5de639.url == "string" ? _0x5de639.url : "";
      _0x204dd6(_0x200891);
    };
    navigator.serviceWorker.addEventListener("message", _0x4c734b);
    return () => {
      navigator.serviceWorker.removeEventListener("message", _0x4c734b);
    };
  }, [_0x204dd6]);
  const _0x597aaa = _0x43a24c.useCallback(() => {
    _0x3e2545(!0);
  }, []);
  const _0x19ee0c = _0x43a24c.useCallback(() => {
    if (!_0x27df25) {
      return;
    }
    const _0x2c4f77 = _0x316df0.current.get(_0x27df25);
    if (_0x2c4f77) {
      if (_0x40043b[_0x27df25]) {
        _0x2f9fea.clearPendingForTab(_0x27df25);
        _0x2f9fea.destroyForFrame(_0x2c4f77);
        _0x1d949f(_0x438656 => {
          const _0x4bc126 = {
            ..._0x438656
          };
          const _0x340984 = _0x4bc126;
          delete _0x340984[_0x27df25];
          return _0x340984;
        });
        return;
      }
      _0x1d949f(_0x503e9a => ({
        ..._0x503e9a,
        [_0x27df25]: !0
      }));
      _0x2f9fea.injectIntoFrame(_0x27df25);
    }
  }, [_0x27df25, _0x40043b, _0x2f9fea]);
  const _0x3582ac = _0x43a24c.useCallback(_0x35adbf => {
    const _0x1020bd = (_0x35adbf ?? _0x2c7c8e?.inputValue ?? "").trim();
    if (!_0x1020bd) {
      return;
    }
    _0x458897(_0x1020bd);
    const _0x30b2c2 = _0x5979d8(_0x1020bd);
    if (_0x30b2c2) {
      if (_0x30b2c2 === _0xfae4af) {
        _0x11dde4();
        return;
      }
      if (_0x27df25) {
        _0x5d99b2.startForTab(_0x27df25);
      }
    }
  }, [_0x2c7c8e?.inputValue, _0x27df25, _0xfae4af, _0x11dde4, _0x5979d8, _0x5d99b2]);
  const _0x3bd711 = _0x23c677 => {
    const _0x58cd60 = _0x23c677.trim();
    if (!_0x58cd60) {
      return;
    }
    _0x458897(_0x58cd60);
    const _0x2b8f4e = _0x88e3ac();
    _0x5d99b2.startForTab(_0x2b8f4e);
    _0x288b4f(_0x2b8f4e, _0x58cd60);
  };
  const _0x34fb34 = {
    tabs: _0x2c7ecf,
    addressValue: _0x2c7c8e?.inputValue ?? "",
    devtoolsEnabled: _0x187e6f,
    fullscreenEnabled: _0x57a334,
    onCreateTab: _0x88e3ac,
    onActivateTab: _0x56096b,
    onCloseTab: _0x1f5c5a,
    onSetTabOrder: _0x36a37e,
    onAddressChange: _0x1296d9,
    onBack: _0x434530,
    onForward: _0x2579b3,
    onReload: _0x11dde4,
    onOpenSettings: _0x597aaa,
    onToggleDevtools: _0x19ee0c,
    onToggleFullscreen: () => {
      _0x271594();
    },
    onAddressSubmit: _0xfa69c3 => _0x3582ac(_0xfa69c3)
  };
  const _0x11f81d = "absolute inset-0 h-full w-full min-h-0 border-t border-[var(--border)] bg-[var(--surface)]";
  const _0x25c55e = <div className="h-[2px] w-full bg-transparent"><div className={"h-[2px] w-full origin-left bg-[var(--accent)] transition-opacity duration-180 " + (_0x3fcd9b ? "opacity-100" : "opacity-0")} style={{
      transform: "scaleX(" + Math.max(0, Math.min(1, _0x376df9.progress)) + ")"
    }} /></div>;
  const _0x5abbec = <main className="relative min-h-0 flex-1 overflow-hidden"><div className="relative flex h-full min-h-0 w-full"><_0x43a24c.Suspense fallback={null}>{_0x9992af.map(_0x5d6065 => <_Component5 tabId={_0x5d6065.id} active={_0x5d6065.id === _0x27df25} visible={!!_0xfae4af && _0x5d6065.id === _0x27df25} interactive={!!_0xfae4af && _0x5d6065.id === _0x27df25} containerClassName={_0x11f81d} url={_0x5d6065.targetUrl ?? ""} spotlightShortcut={_0x286452} globalShortcutModifier={_0x332367} preferredColorScheme={_0x45ee04.mode} onFrameReady={_0x2b7b2a => {
          _0x316df0.current.set(_0x5d6065.id, _0x2b7b2a);
        }} onMetadataChange={_0x503e11 => {
          _0xacfad8(_0x5d6065.id, _0x503e11);
        }} onLoadStateChange={_0x426079 => {
          if (_0x426079 === "start") {
            if (_0x5d6065.id === _0x27df25) {
              _0x5d99b2.startForTab(_0x5d6065.id);
            }
            return;
          }
          if (_0x426079 === "settle") {
            _0x5d99b2.settleForTab(_0x5d6065.id);
            return;
          }
          _0x5d99b2.doneForTab(_0x5d6065.id);
          if (_0x40043b[_0x5d6065.id]) {
            _0x2f9fea.injectIntoFrame(_0x5d6065.id);
          }
        }} onRequestNewTab={_0x3bd711} key={_0x5d6065.id} />)}{_0x211f20.map(_0x762183 => {
          const _0xfc5ff = _0x762183.targetUrl?.trim() ?? "";
          return <div data-tab-id={_0x762183.id} className={_0x11f81d + " " + (_0xfae4af && _0x762183.id === _0x27df25 ? "opacity-100" : "opacity-0 pointer-events-none")} key={_0x762183.id}><iframe ref={_0x5f3598 => {
              _0x316df0.current.set(_0x762183.id, _0x5f3598);
            }} src={_0x1686ac(_0xfc5ff)} title={_0x762183.title} allow="display-capture; picture-in-picture; clipboard-write" className="h-full w-full border-0" onLoad={() => {
              _0x5d99b2.doneForTab(_0x762183.id);
              if (_0x40043b[_0x762183.id]) {
                _0x2f9fea.injectIntoFrame(_0x762183.id);
              }
            }} /></div>;
        })}</_0x43a24c.Suspense></div>{_0xfae4af ? null : <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-10">{_0x38a280 ? <div className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url(\"" + _0x38a280 + "\")"
      }} aria-hidden="true" /> : null}{_0x38a280 ? <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,7,12,0.28),rgba(4,7,12,0.52))]" aria-hidden="true" /> : null}<div className="flex w-full flex-1 items-center justify-center"><div className="flex w-full max-w-[1400px] items-center justify-center gap-6 px-2 lg:px-6"><div className="flex min-w-0 flex-1 justify-center"><div className="flex w-full max-w-4xl flex-col items-center"><_Component6 value={_0x4e735f} searchEngineId={_0x5bbe07} showShortcuts={_0x5300a1} onValueChange={_0x33c184 => {
                if (_0x27df25) {
                  _0x3b297f(_0x10ac5f => ({
                    ..._0x10ac5f,
                    [_0x27df25]: _0x33c184
                  }));
                }
              }} onSubmit={() => {
                _0x3582ac(_0x4e735f);
              }} onSearchEngineChange={_0x35dc7a} onNavigate={_0x1ea3e9 => {
                _0x3582ac(_0x1ea3e9);
              }} /></div></div></div></div><div className="pointer-events-none fixed bottom-2 right-2 z-20"><div className="pointer-events-auto flex items-center gap-3 text-xs" style={{
          fontFamily: "Manrope Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "0.01em"
        }}><div style={{
            color: _0x45ee04.mode === "dark" ? "#eee" : "#222"
          }} className="flex items-center gap-3"><a href="https://discord.gg/ZDq3UYskkK" target="_blank" rel="noreferrer" className="font-semibold tracking-[0.02em] transition hover:opacity-80">More links</a><button type="button" onClick={() => _0x3582ac("/t")} className="font-semibold tracking-[0.02em] transition hover:opacity-80">TOS</button><button type="button" onClick={() => _0x3582ac("/p")} className="font-semibold tracking-[0.02em] transition hover:opacity-80">Privacy</button></div></div></div><div className="pointer-events-none fixed bottom-2 left-2 z-20"><div className="pointer-events-auto text-xs font-semibold tracking-[0.02em] text-[var(--muted)]" style={{
          fontFamily: "Manrope Variable, Geist Variable, ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "0.01em"
        }}>SVG build</div></div></div>}</main>;
  const _0x37f270 = {
    ..._0x34fb34
  };
  const _0x80a698 = {
    open: _0x225908,
    onClose: _0x28f1f3
  };
  return <div className="app-grid-bg flex h-screen flex-col overflow-hidden text-[var(--text)]">{_0x2aec99.jsx(fn, _0x37f270)}{_0x25c55e}{_0x5abbec}<_0x12d842 open={_0x309dcf} onClose={() => _0x3e2545(!1)} />{_0x2aec99.jsx(wn, _0x80a698)}<Nn open={_0x2e0f36} searchEngineName={_0x3836a0} onClose={() => _0x3f0567(!1)} onNavigate={_0x4d75f1 => {
      if (_0x4d75f1.kind === "ai") {
        window.localStorage.setItem(_0x1f2cf0.aiPendingPrompt, _0x4d75f1.value);
        _0x3582ac("/a");
        _0x3f0567(!1);
        return;
      }
      _0x3582ac(_0x4d75f1.value);
      _0x3f0567(!1);
    }} /></div>;
}
const _0x5d6c07 = {
  __proto__: null,
  NewTabPage: Kn
};
const ro = Object.freeze(Object.defineProperty(_0x5d6c07, Symbol.toStringTag, {
  value: "Module"
}));
export { Kn as N, be as a, ro as n };