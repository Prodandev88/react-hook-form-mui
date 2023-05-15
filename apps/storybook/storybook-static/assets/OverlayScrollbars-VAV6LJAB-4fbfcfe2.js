import {_ as wi, a as Wi} from './DocsRenderer-EYKKDMVH-9f06eb77.js'
import {r as cs, R as lt} from './index-ebeaab24.js'
import './iframe-e60fd180.js'
import '../sb-preview/runtime.js'
import './_getPrototype-bc124946.js'
import './index-9c09ad76.js'
import './index-d475d2ea.js'
import './assertThisInitialized-5649ae8b.js'
import './extends-98964cd2.js'
import './index-356e4a49.js'
var zi = Wi({
    '../../node_modules/overlayscrollbars/js/OverlayScrollbars.js'(Ut, ue) {
      ;(function (er, Pr) {
        typeof define == 'function' && define.amd
          ? define(function () {
              return Pr(er, er.document, void 0)
            })
          : typeof ue == 'object' && typeof ue.exports == 'object'
          ? (ue.exports = Pr(er, er.document, void 0))
          : Pr(er, er.document, void 0)
      })(typeof window < 'u' ? window : Ut, function (er, Pr, B) {
        var Ie = 'OverlayScrollbars',
          v = {
            o: 'object',
            f: 'function',
            a: 'array',
            s: 'string',
            b: 'boolean',
            n: 'number',
            u: 'undefined',
            z: 'null',
          },
          c = {
            c: 'class',
            s: 'style',
            i: 'id',
            l: 'length',
            p: 'prototype',
            ti: 'tabindex',
            oH: 'offsetHeight',
            cH: 'clientHeight',
            sH: 'scrollHeight',
            oW: 'offsetWidth',
            cW: 'clientWidth',
            sW: 'scrollWidth',
            hOP: 'hasOwnProperty',
            bCR: 'getBoundingClientRect',
          },
          qn = (function () {
            var T = {},
              m = {},
              n = ['-webkit-', '-moz-', '-o-', '-ms-'],
              p = ['WebKit', 'Moz', 'O', 'MS']
            function l(h) {
              return h.charAt(0).toUpperCase() + h.slice(1)
            }
            return {
              _cssPrefixes: n,
              _jsPrefixes: p,
              _cssProperty: function (h) {
                var I = m[h]
                if (m[c.hOP](h)) return I
                for (
                  var or = l(h),
                    ar = Pr.createElement('div')[c.s],
                    M,
                    Y = 0,
                    xr,
                    K;
                  Y < n.length;
                  Y++
                )
                  for (
                    K = n[Y].replace(/-/g, ''),
                      M = [h, n[Y] + h, K + or, l(K) + or],
                      xr = 0;
                    xr < M[c.l];
                    xr++
                  )
                    if (ar[M[xr]] !== B) {
                      I = M[xr]
                      break
                    }
                return (m[h] = I), I
              },
              _cssPropertyValue: function (h, I, or) {
                var ar = h + ' ' + I,
                  M = m[ar]
                if (m[c.hOP](ar)) return M
                for (
                  var Y = Pr.createElement('div')[c.s],
                    xr = I.split(' '),
                    K = or || '',
                    Wr = 0,
                    k = -1,
                    Z;
                  Wr < xr[c.l];
                  Wr++
                )
                  for (; k < qn._cssPrefixes[c.l]; k++)
                    if (
                      ((Z = k < 0 ? xr[Wr] : qn._cssPrefixes[k] + xr[Wr]),
                      (Y.cssText = h + ':' + Z + K),
                      Y[c.l])
                    ) {
                      M = Z
                      break
                    }
                return (m[ar] = M), M
              },
              _jsAPI: function (h, I, or) {
                var ar = 0,
                  M = T[h]
                if (!T[c.hOP](h)) {
                  for (M = er[h]; ar < p[c.l]; ar++)
                    M = M || er[(I ? p[ar] : p[ar].toLowerCase()) + l(h)]
                  T[h] = M
                }
                return M || or
              },
            }
          })(),
          P = (function () {
            function T(n) {
              return n
                ? er.innerWidth || Pr.documentElement[c.cW] || Pr.body[c.cW]
                : er.innerHeight || Pr.documentElement[c.cH] || Pr.body[c.cH]
            }
            function m(n, p) {
              if (typeof n != v.f) throw "Can't bind function!"
              var l = c.p,
                h = Array[l].slice.call(arguments, 2),
                I = function () {},
                or = function () {
                  return n.apply(
                    this instanceof I ? this : p,
                    h.concat(Array[l].slice.call(arguments))
                  )
                }
              return n[l] && (I[l] = n[l]), (or[l] = new I()), or
            }
            return {
              wW: m(T, 0, !0),
              wH: m(T, 0),
              mO: m(qn._jsAPI, 0, 'MutationObserver', !0),
              rO: m(qn._jsAPI, 0, 'ResizeObserver', !0),
              rAF: m(qn._jsAPI, 0, 'requestAnimationFrame', !1, function (n) {
                return er.setTimeout(n, 1e3 / 60)
              }),
              cAF: m(qn._jsAPI, 0, 'cancelAnimationFrame', !1, function (n) {
                return er.clearTimeout(n)
              }),
              now: function () {
                return (Date.now && Date.now()) || new Date().getTime()
              },
              stpP: function (n) {
                n.stopPropagation ? n.stopPropagation() : (n.cancelBubble = !0)
              },
              prvD: function (n) {
                n.preventDefault && n.cancelable
                  ? n.preventDefault()
                  : (n.returnValue = !1)
              },
              page: function (n) {
                n = n.originalEvent || n
                var p = 'page',
                  l = 'client',
                  h = 'X',
                  I = 'Y',
                  or = n.target || n.srcElement || Pr,
                  ar = or.ownerDocument || Pr,
                  M = ar.documentElement,
                  Y = ar.body
                if (n.touches !== B) {
                  var xr = n.touches[0]
                  return {x: xr[p + h], y: xr[p + I]}
                }
                return !n[p + h] && n[l + h] && n[l + h] != null
                  ? {
                      x:
                        n[l + h] +
                        ((M && M.scrollLeft) || (Y && Y.scrollLeft) || 0) -
                        ((M && M.clientLeft) || (Y && Y.clientLeft) || 0),
                      y:
                        n[l + I] +
                        ((M && M.scrollTop) || (Y && Y.scrollTop) || 0) -
                        ((M && M.clientTop) || (Y && Y.clientTop) || 0),
                    }
                  : {x: n[p + h], y: n[p + I]}
              },
              mBtn: function (n) {
                var p = n.button
                return !n.which && p !== B
                  ? p & 1
                    ? 1
                    : p & 2
                    ? 3
                    : p & 4
                    ? 2
                    : 0
                  : n.which
              },
              inA: function (n, p) {
                for (var l = 0; l < p[c.l]; l++)
                  try {
                    if (p[l] === n) return l
                  } catch {}
                return -1
              },
              isA: function (n) {
                var p = Array.isArray
                return p ? p(n) : this.type(n) == v.a
              },
              type: function (n) {
                return n === B || n === null
                  ? n + ''
                  : Object[c.p].toString
                      .call(n)
                      .replace(/^\[object (.+)\]$/, '$1')
                      .toLowerCase()
              },
              bind: m,
            }
          })(),
          A = Math,
          fe = er.jQuery,
          Cc = (function () {
            var T = {
              p: A.PI,
              c: A.cos,
              s: A.sin,
              w: A.pow,
              t: A.sqrt,
              n: A.asin,
              a: A.abs,
              o: 1.70158,
            }
            return {
              swing: function (m, n, p, l, h) {
                return 0.5 - T.c(m * T.p) / 2
              },
              linear: function (m, n, p, l, h) {
                return m
              },
              easeInQuad: function (m, n, p, l, h) {
                return l * (n /= h) * n + p
              },
              easeOutQuad: function (m, n, p, l, h) {
                return -l * (n /= h) * (n - 2) + p
              },
              easeInOutQuad: function (m, n, p, l, h) {
                return (n /= h / 2) < 1
                  ? (l / 2) * n * n + p
                  : (-l / 2) * (--n * (n - 2) - 1) + p
              },
              easeInCubic: function (m, n, p, l, h) {
                return l * (n /= h) * n * n + p
              },
              easeOutCubic: function (m, n, p, l, h) {
                return l * ((n = n / h - 1) * n * n + 1) + p
              },
              easeInOutCubic: function (m, n, p, l, h) {
                return (n /= h / 2) < 1
                  ? (l / 2) * n * n * n + p
                  : (l / 2) * ((n -= 2) * n * n + 2) + p
              },
              easeInQuart: function (m, n, p, l, h) {
                return l * (n /= h) * n * n * n + p
              },
              easeOutQuart: function (m, n, p, l, h) {
                return -l * ((n = n / h - 1) * n * n * n - 1) + p
              },
              easeInOutQuart: function (m, n, p, l, h) {
                return (n /= h / 2) < 1
                  ? (l / 2) * n * n * n * n + p
                  : (-l / 2) * ((n -= 2) * n * n * n - 2) + p
              },
              easeInQuint: function (m, n, p, l, h) {
                return l * (n /= h) * n * n * n * n + p
              },
              easeOutQuint: function (m, n, p, l, h) {
                return l * ((n = n / h - 1) * n * n * n * n + 1) + p
              },
              easeInOutQuint: function (m, n, p, l, h) {
                return (n /= h / 2) < 1
                  ? (l / 2) * n * n * n * n * n + p
                  : (l / 2) * ((n -= 2) * n * n * n * n + 2) + p
              },
              easeInSine: function (m, n, p, l, h) {
                return -l * T.c((n / h) * (T.p / 2)) + l + p
              },
              easeOutSine: function (m, n, p, l, h) {
                return l * T.s((n / h) * (T.p / 2)) + p
              },
              easeInOutSine: function (m, n, p, l, h) {
                return (-l / 2) * (T.c((T.p * n) / h) - 1) + p
              },
              easeInExpo: function (m, n, p, l, h) {
                return n == 0 ? p : l * T.w(2, 10 * (n / h - 1)) + p
              },
              easeOutExpo: function (m, n, p, l, h) {
                return n == h ? p + l : l * (-T.w(2, (-10 * n) / h) + 1) + p
              },
              easeInOutExpo: function (m, n, p, l, h) {
                return n == 0
                  ? p
                  : n == h
                  ? p + l
                  : (n /= h / 2) < 1
                  ? (l / 2) * T.w(2, 10 * (n - 1)) + p
                  : (l / 2) * (-T.w(2, -10 * --n) + 2) + p
              },
              easeInCirc: function (m, n, p, l, h) {
                return -l * (T.t(1 - (n /= h) * n) - 1) + p
              },
              easeOutCirc: function (m, n, p, l, h) {
                return l * T.t(1 - (n = n / h - 1) * n) + p
              },
              easeInOutCirc: function (m, n, p, l, h) {
                return (n /= h / 2) < 1
                  ? (-l / 2) * (T.t(1 - n * n) - 1) + p
                  : (l / 2) * (T.t(1 - (n -= 2) * n) + 1) + p
              },
              easeInElastic: function (m, n, p, l, h) {
                var I = T.o,
                  or = 0,
                  ar = l
                return n == 0
                  ? p
                  : (n /= h) == 1
                  ? p + l
                  : (or || (or = h * 0.3),
                    ar < T.a(l)
                      ? ((ar = l), (I = or / 4))
                      : (I = (or / (2 * T.p)) * T.n(l / ar)),
                    -(
                      ar *
                      T.w(2, 10 * (n -= 1)) *
                      T.s(((n * h - I) * (2 * T.p)) / or)
                    ) + p)
              },
              easeOutElastic: function (m, n, p, l, h) {
                var I = T.o,
                  or = 0,
                  ar = l
                return n == 0
                  ? p
                  : (n /= h) == 1
                  ? p + l
                  : (or || (or = h * 0.3),
                    ar < T.a(l)
                      ? ((ar = l), (I = or / 4))
                      : (I = (or / (2 * T.p)) * T.n(l / ar)),
                    ar * T.w(2, -10 * n) * T.s(((n * h - I) * (2 * T.p)) / or) +
                      l +
                      p)
              },
              easeInOutElastic: function (m, n, p, l, h) {
                var I = T.o,
                  or = 0,
                  ar = l
                return n == 0
                  ? p
                  : (n /= h / 2) == 2
                  ? p + l
                  : (or || (or = h * (0.3 * 1.5)),
                    ar < T.a(l)
                      ? ((ar = l), (I = or / 4))
                      : (I = (or / (2 * T.p)) * T.n(l / ar)),
                    n < 1
                      ? -0.5 *
                          (ar *
                            T.w(2, 10 * (n -= 1)) *
                            T.s(((n * h - I) * (2 * T.p)) / or)) +
                        p
                      : ar *
                          T.w(2, -10 * (n -= 1)) *
                          T.s(((n * h - I) * (2 * T.p)) / or) *
                          0.5 +
                        l +
                        p)
              },
              easeInBack: function (m, n, p, l, h, I) {
                return (I = I || T.o), l * (n /= h) * n * ((I + 1) * n - I) + p
              },
              easeOutBack: function (m, n, p, l, h, I) {
                return (
                  (I = I || T.o),
                  l * ((n = n / h - 1) * n * ((I + 1) * n + I) + 1) + p
                )
              },
              easeInOutBack: function (m, n, p, l, h, I) {
                return (
                  (I = I || T.o),
                  (n /= h / 2) < 1
                    ? (l / 2) * (n * n * (((I *= 1.525) + 1) * n - I)) + p
                    : (l / 2) *
                        ((n -= 2) * n * (((I *= 1.525) + 1) * n + I) + 2) +
                      p
                )
              },
              easeInBounce: function (m, n, p, l, h) {
                return l - this.easeOutBounce(m, h - n, 0, l, h) + p
              },
              easeOutBounce: function (m, n, p, l, h) {
                var I = 7.5625
                return (n /= h) < 1 / 2.75
                  ? l * (I * n * n) + p
                  : n < 2 / 2.75
                  ? l * (I * (n -= 1.5 / 2.75) * n + 0.75) + p
                  : n < 2.5 / 2.75
                  ? l * (I * (n -= 2.25 / 2.75) * n + 0.9375) + p
                  : l * (I * (n -= 2.625 / 2.75) * n + 0.984375) + p
              },
              easeInOutBounce: function (m, n, p, l, h) {
                return n < h / 2
                  ? this.easeInBounce(m, n * 2, 0, l, h) * 0.5 + p
                  : this.easeOutBounce(m, n * 2 - h, 0, l, h) * 0.5 +
                      l * 0.5 +
                      p
              },
            }
          })(),
          R = (function () {
            var T = /[^\x20\t\r\n\f]+/g,
              m = ' ',
              n = '',
              p = 'scrollLeft',
              l = 'scrollTop',
              h = [],
              I = P.type,
              or = {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
              }
            function ar() {
              var e,
                o,
                s,
                u,
                y,
                O,
                w = arguments[0] || {},
                F = 1,
                G = arguments[c.l],
                W = !1
              for (
                I(w) == v.b && ((W = w), (w = arguments[1] || {}), (F = 2)),
                  I(w) != v.o && !I(w) == v.f && (w = {}),
                  G === F && ((w = C), --F);
                F < G;
                F++
              )
                if ((y = arguments[F]) != null)
                  for (u in y)
                    (e = w[u]),
                      (s = y[u]),
                      w !== s &&
                        (W && s && (K(s) || (o = P.isA(s)))
                          ? (o
                              ? ((o = !1), (O = e && P.isA(e) ? e : []))
                              : (O = e && K(e) ? e : {}),
                            (w[u] = ar(W, O, s)))
                          : s !== B && (w[u] = s))
              return w
            }
            function M(e, o, s) {
              for (var u = s || 0; u < o[c.l]; u++) if (o[u] === e) return u
              return -1
            }
            function Y(e) {
              return I(e) == v.f
            }
            function xr(e) {
              for (var o in e) return !1
              return !0
            }
            function K(e) {
              if (!e || I(e) != v.o) return !1
              var o,
                s = c.p,
                u = Object[s].hasOwnProperty,
                y = u.call(e, 'constructor'),
                O =
                  e.constructor &&
                  e.constructor[s] &&
                  u.call(e.constructor[s], 'isPrototypeOf')
              if (e.constructor && !y && !O) return !1
              for (o in e);
              return I(o) == v.u || u.call(e, o)
            }
            function Wr(e, o) {
              var s = 0
              if (k(e)) for (; s < e[c.l] && o.call(e[s], s, e[s]) !== !1; s++);
              else for (s in e) if (o.call(e[s], s, e[s]) === !1) break
              return e
            }
            function k(e) {
              var o = !!e && [c.l] in e && e[c.l],
                s = I(e)
              return Y(s)
                ? !1
                : s == v.a || o === 0 || (I(o) == v.n && o > 0 && o - 1 in e)
            }
            function Z(e) {
              var o = e.match(T) || []
              return o.join(m)
            }
            function S(e, o) {
              for (
                var s = (e.parentNode || Pr).querySelectorAll(o) || [],
                  u = s[c.l];
                u--;

              )
                if (s[u] == e) return !0
              return !1
            }
            function H(e, o, s) {
              if (P.isA(s)) for (var u = 0; u < s[c.l]; u++) H(e, o, s[u])
              else
                I(s) == v.s
                  ? e.insertAdjacentHTML(o, s)
                  : e.insertAdjacentElement(o, s.nodeType ? s : s[0])
            }
            function _r(e, o, s) {
              try {
                e[c.s][o] !== B && (e[c.s][o] = Un(o, s))
              } catch {}
            }
            function Un(e, o) {
              return !or[e.toLowerCase()] && I(o) == v.n && (o += 'px'), o
            }
            function X(e, o) {
              var s, u
              o !== !1 && e.q.splice(0, 1),
                e.q[c.l] > 0
                  ? ((u = e.q[0]),
                    N(e.el, u.props, u.duration, u.easing, u.complete, !0))
                  : ((s = M(e, h)), s > -1 && h.splice(s, 1))
            }
            function Zr(e, o, s) {
              o === p || o === l ? (e[o] = s) : _r(e, o, s)
            }
            function N(e, o, s, u, y, O) {
              var w = K(s),
                F = {},
                G = {},
                W = 0,
                V,
                Xr,
                Ir,
                Rr,
                $r,
                Nr
              for (
                w
                  ? ((u = s.easing),
                    s.start,
                    (Ir = s.progress),
                    (Rr = s.step),
                    ($r = s.specialEasing),
                    (y = s.complete),
                    (Nr = s.duration))
                  : (Nr = s),
                  $r = $r || {},
                  Nr = Nr || 400,
                  u = u || 'swing',
                  O = O || !1;
                W < h[c.l];
                W++
              )
                if (h[W].el === e) {
                  Xr = h[W]
                  break
                }
              Xr || ((Xr = {el: e, q: []}), h.push(Xr))
              for (V in o)
                V === p || V === l ? (F[V] = e[V]) : (F[V] = C(e).css(V))
              for (V in F) F[V] !== o[V] && o[V] !== B && (G[V] = o[V])
              if (xr(G)) O && X(Xr)
              else {
                var An,
                  Er,
                  vn,
                  bn,
                  Qn,
                  pr,
                  zr,
                  xt,
                  Tn,
                  Ln = O ? 0 : M(mr, Xr.q),
                  mr = {props: G, duration: w ? s : Nr, easing: u, complete: y}
                if ((Ln === -1 && ((Ln = Xr.q[c.l]), Xr.q.push(mr)), Ln === 0))
                  if (Nr > 0)
                    (zr = P.now()),
                      (xt = function () {
                        ;(An = P.now()),
                          (Tn = An - zr),
                          (Er = mr.stop || Tn >= Nr),
                          (vn = 1 - (A.max(0, zr + Nr - An) / Nr || 0))
                        for (V in G)
                          (bn = parseFloat(F[V])),
                            (Qn = parseFloat(G[V])),
                            (pr =
                              (Qn - bn) *
                                Cc[$r[V] || u](vn, vn * Nr, 0, 1, Nr) +
                              bn),
                            Zr(e, V, pr),
                            Y(Rr) &&
                              Rr(pr, {
                                elem: e,
                                prop: V,
                                start: bn,
                                now: pr,
                                end: Qn,
                                pos: vn,
                                options: {
                                  easing: u,
                                  speacialEasing: $r,
                                  duration: Nr,
                                  complete: y,
                                  step: Rr,
                                },
                                startTime: zr,
                              })
                        Y(Ir) && Ir({}, vn, A.max(0, Nr - Tn)),
                          Er ? (X(Xr), Y(y) && y()) : (mr.frame = P.rAF()(xt))
                      }),
                      (mr.frame = P.rAF()(xt))
                  else {
                    for (V in G) Zr(e, V, G[V])
                    X(Xr)
                  }
              }
            }
            function vr(e, o, s) {
              for (var u, y, O, w = 0; w < h[c.l]; w++)
                if (((u = h[w]), u.el === e)) {
                  if (u.q[c.l] > 0) {
                    if (
                      ((y = u.q[0]),
                      (y.stop = !0),
                      P.cAF()(y.frame),
                      u.q.splice(0, 1),
                      s)
                    )
                      for (O in y.props) Zr(e, O, y.props[O])
                    o ? (u.q = []) : X(u, !1)
                  }
                  break
                }
            }
            function dr(e) {
              return !!(e[c.oW] || e[c.oH] || e.getClientRects()[c.l])
            }
            function C(e) {
              if (arguments[c.l] === 0) return this
              var o = new C(),
                s = e,
                u = 0,
                y,
                O
              if (I(e) == v.s)
                for (
                  s = [],
                    e.charAt(0) === '<'
                      ? ((O = Pr.createElement('div')),
                        (O.innerHTML = e),
                        (y = O.children))
                      : (y = Pr.querySelectorAll(e));
                  u < y[c.l];
                  u++
                )
                  s.push(y[u])
              if (s) {
                for (
                  I(s) != v.s &&
                    (!k(s) || s === er || s === s.self) &&
                    (s = [s]),
                    u = 0;
                  u < s[c.l];
                  u++
                )
                  o[u] = s[u]
                o[c.l] = s[c.l]
              }
              return o
            }
            return (
              (C[c.p] = {
                on: function (e, o) {
                  e = (e || n).match(T) || [n]
                  var s = e[c.l],
                    u = 0,
                    y
                  return this.each(function () {
                    y = this
                    try {
                      if (y.addEventListener)
                        for (; u < s; u++) y.addEventListener(e[u], o)
                      else if (y.detachEvent)
                        for (; u < s; u++) y.attachEvent('on' + e[u], o)
                    } catch {}
                  })
                },
                off: function (e, o) {
                  e = (e || n).match(T) || [n]
                  var s = e[c.l],
                    u = 0,
                    y
                  return this.each(function () {
                    y = this
                    try {
                      if (y.removeEventListener)
                        for (; u < s; u++) y.removeEventListener(e[u], o)
                      else if (y.detachEvent)
                        for (; u < s; u++) y.detachEvent('on' + e[u], o)
                    } catch {}
                  })
                },
                one: function (e, o) {
                  return (
                    (e = (e || n).match(T) || [n]),
                    this.each(function () {
                      var s = C(this)
                      C.each(e, function (u, y) {
                        var O = function (w) {
                          o.call(this, w), s.off(y, O)
                        }
                        s.on(y, O)
                      })
                    })
                  )
                },
                trigger: function (e) {
                  var o, s
                  return this.each(function () {
                    ;(o = this),
                      Pr.createEvent
                        ? ((s = Pr.createEvent('HTMLEvents')),
                          s.initEvent(e, !0, !1),
                          o.dispatchEvent(s))
                        : o.fireEvent('on' + e)
                  })
                },
                append: function (e) {
                  return this.each(function () {
                    H(this, 'beforeend', e)
                  })
                },
                prepend: function (e) {
                  return this.each(function () {
                    H(this, 'afterbegin', e)
                  })
                },
                before: function (e) {
                  return this.each(function () {
                    H(this, 'beforebegin', e)
                  })
                },
                after: function (e) {
                  return this.each(function () {
                    H(this, 'afterend', e)
                  })
                },
                remove: function () {
                  return this.each(function () {
                    var e = this,
                      o = e.parentNode
                    o == null || o.removeChild(e)
                  })
                },
                unwrap: function () {
                  var e = [],
                    o,
                    s,
                    u
                  for (
                    this.each(function () {
                      ;(u = this.parentNode), M(u, e) === -1 && e.push(u)
                    }),
                      o = 0;
                    o < e[c.l];
                    o++
                  ) {
                    for (s = e[o], u = s.parentNode; s.firstChild; )
                      u.insertBefore(s.firstChild, s)
                    u.removeChild(s)
                  }
                  return this
                },
                wrapAll: function (e) {
                  for (
                    var o,
                      s = this,
                      u = C(e)[0],
                      y = u,
                      O = s[0].parentNode,
                      w = s[0].previousSibling;
                    y.childNodes[c.l] > 0;

                  )
                    y = y.childNodes[0]
                  for (o = 0; s[c.l] - o; y.firstChild === s[0] && o++)
                    y.appendChild(s[o])
                  var F = w ? w.nextSibling : O.firstChild
                  return O.insertBefore(u, F), this
                },
                wrapInner: function (e) {
                  return this.each(function () {
                    var o = C(this),
                      s = o.contents()
                    s[c.l] ? s.wrapAll(e) : o.append(e)
                  })
                },
                wrap: function (e) {
                  return this.each(function () {
                    C(this).wrapAll(e)
                  })
                },
                css: function (e, o) {
                  var s,
                    u,
                    y,
                    O = er.getComputedStyle
                  return I(e) == v.s
                    ? o === B
                      ? ((s = this[0]),
                        (y = O ? O(s, null) : s.currentStyle[e]),
                        O ? (y != null ? y.getPropertyValue(e) : s[c.s][e]) : y)
                      : this.each(function () {
                          _r(this, e, o)
                        })
                    : this.each(function () {
                        for (u in e) _r(this, u, e[u])
                      })
                },
                hasClass: function (e) {
                  for (var o, s = 0, u = m + e + m, y; (o = this[s++]); )
                    if (
                      ((y = o.classList),
                      (y && y.contains(e)) ||
                        (o.nodeType === 1 &&
                          (m + Z(o.className + n) + m).indexOf(u) > -1))
                    )
                      return !0
                  return !1
                },
                addClass: function (e) {
                  var o,
                    s,
                    u,
                    y,
                    O,
                    w,
                    F,
                    G,
                    W = 0,
                    V = 0
                  if (e) {
                    for (o = e.match(T) || []; (s = this[W++]); )
                      if (((G = s.classList), F === B && (F = G !== B), F))
                        for (; (O = o[V++]); ) G.add(O)
                      else if (
                        ((y = s.className + n),
                        (u = s.nodeType === 1 && m + Z(y) + m),
                        u)
                      ) {
                        for (; (O = o[V++]); )
                          u.indexOf(m + O + m) < 0 && (u += O + m)
                        ;(w = Z(u)), y !== w && (s.className = w)
                      }
                  }
                  return this
                },
                removeClass: function (e) {
                  var o,
                    s,
                    u,
                    y,
                    O,
                    w,
                    F,
                    G,
                    W = 0,
                    V = 0
                  if (e) {
                    for (o = e.match(T) || []; (s = this[W++]); )
                      if (((G = s.classList), F === B && (F = G !== B), F))
                        for (; (O = o[V++]); ) G.remove(O)
                      else if (
                        ((y = s.className + n),
                        (u = s.nodeType === 1 && m + Z(y) + m),
                        u)
                      ) {
                        for (; (O = o[V++]); )
                          for (; u.indexOf(m + O + m) > -1; )
                            u = u.replace(m + O + m, m)
                        ;(w = Z(u)), y !== w && (s.className = w)
                      }
                  }
                  return this
                },
                hide: function () {
                  return this.each(function () {
                    this[c.s].display = 'none'
                  })
                },
                show: function () {
                  return this.each(function () {
                    this[c.s].display = 'block'
                  })
                },
                attr: function (e, o) {
                  for (var s = 0, u; (u = this[s++]); ) {
                    if (o === B) return u.getAttribute(e)
                    u.setAttribute(e, o)
                  }
                  return this
                },
                removeAttr: function (e) {
                  return this.each(function () {
                    this.removeAttribute(e)
                  })
                },
                offset: function () {
                  var e = this[0],
                    o = e[c.bCR](),
                    s = er.pageXOffset || Pr.documentElement[p],
                    u = er.pageYOffset || Pr.documentElement[l]
                  return {top: o.top + u, left: o.left + s}
                },
                position: function () {
                  var e = this[0]
                  return {top: e.offsetTop, left: e.offsetLeft}
                },
                scrollLeft: function (e) {
                  for (var o = 0, s; (s = this[o++]); ) {
                    if (e === B) return s[p]
                    s[p] = e
                  }
                  return this
                },
                scrollTop: function (e) {
                  for (var o = 0, s; (s = this[o++]); ) {
                    if (e === B) return s[l]
                    s[l] = e
                  }
                  return this
                },
                val: function (e) {
                  var o = this[0]
                  return e ? ((o.value = e), this) : o.value
                },
                first: function () {
                  return this.eq(0)
                },
                last: function () {
                  return this.eq(-1)
                },
                eq: function (e) {
                  return C(this[e >= 0 ? e : this[c.l] + e])
                },
                find: function (e) {
                  var o = [],
                    s
                  return (
                    this.each(function () {
                      var u = this,
                        y = u.querySelectorAll(e)
                      for (s = 0; s < y[c.l]; s++) o.push(y[s])
                    }),
                    C(o)
                  )
                },
                children: function (e) {
                  var o = [],
                    s,
                    u,
                    y
                  return (
                    this.each(function () {
                      for (u = this.children, y = 0; y < u[c.l]; y++)
                        (s = u[y]),
                          e
                            ? ((s.matches && s.matches(e)) || S(s, e)) &&
                              o.push(s)
                            : o.push(s)
                    }),
                    C(o)
                  )
                },
                parent: function (e) {
                  var o = [],
                    s
                  return (
                    this.each(function () {
                      ;(s = this.parentNode), (!e || C(s).is(e)) && o.push(s)
                    }),
                    C(o)
                  )
                },
                is: function (e) {
                  var o, s
                  for (s = 0; s < this[c.l]; s++) {
                    if (((o = this[s]), e === ':visible')) return dr(o)
                    if (e === ':hidden') return !dr(o)
                    if ((o.matches && o.matches(e)) || S(o, e)) return !0
                  }
                  return !1
                },
                contents: function () {
                  var e = [],
                    o,
                    s
                  return (
                    this.each(function () {
                      for (o = this.childNodes, s = 0; s < o[c.l]; s++)
                        e.push(o[s])
                    }),
                    C(e)
                  )
                },
                each: function (e) {
                  return Wr(this, e)
                },
                animate: function (e, o, s, u) {
                  return this.each(function () {
                    N(this, e, o, s, u)
                  })
                },
                stop: function (e, o) {
                  return this.each(function () {
                    vr(this, e, o)
                  })
                },
              }),
              ar(C, {
                extend: ar,
                inArray: M,
                isEmptyObject: xr,
                isPlainObject: K,
                each: Wr,
              }),
              C
            )
          })(),
          Bt = (function () {
            var T = [],
              m = '__overlayScrollbars__'
            return function (n, p) {
              var l = arguments[c.l]
              if (l < 1) return T
              if (p) (n[m] = p), T.push(n)
              else {
                var h = P.inA(n, T)
                if (h > -1)
                  if (l > 1) delete n[m], T.splice(h, 1)
                  else return T[h][m]
              }
            }
          })(),
          Ws = (function () {
            var T,
              m,
              n,
              p = [],
              l = (function () {
                var M = P.type,
                  Y = [v.b, v.n, v.s, v.a, v.o, v.f, v.z],
                  xr = ' ',
                  K = ':',
                  Wr = [v.z, v.s],
                  k = v.n,
                  Z = [v.z, v.b],
                  S = [!0, v.b],
                  H = [!1, v.b],
                  _r = [null, [v.z, v.f]],
                  Un = [['img'], [v.s, v.a, v.z]],
                  X = [
                    ['style', 'class'],
                    [v.s, v.a, v.z],
                  ],
                  Zr = 'n:none b:both h:horizontal v:vertical',
                  N = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden',
                  vr = 'v:visible h:hidden a:auto',
                  dr = 'n:never s:scroll l:leave m:move',
                  C = {
                    className: ['os-theme-dark', Wr],
                    resize: ['none', Zr],
                    sizeAutoCapable: S,
                    clipAlways: S,
                    normalizeRTL: S,
                    paddingAbsolute: H,
                    autoUpdate: [null, Z],
                    autoUpdateInterval: [33, k],
                    updateOnLoad: Un,
                    nativeScrollbarsOverlaid: {
                      showNativeScrollbars: H,
                      initialize: S,
                    },
                    overflowBehavior: {x: ['scroll', N], y: ['scroll', N]},
                    scrollbars: {
                      visibility: ['auto', vr],
                      autoHide: ['never', dr],
                      autoHideDelay: [800, k],
                      dragScrolling: S,
                      clickScrolling: H,
                      touchSupport: S,
                      snapHandle: H,
                    },
                    textarea: {dynWidth: H, dynHeight: H, inheritedAttrs: X},
                    callbacks: {
                      onInitialized: _r,
                      onInitializationWithdrawn: _r,
                      onDestroyed: _r,
                      onScrollStart: _r,
                      onScroll: _r,
                      onScrollStop: _r,
                      onOverflowChanged: _r,
                      onOverflowAmountChanged: _r,
                      onDirectionChanged: _r,
                      onContentSizeChanged: _r,
                      onHostSizeChanged: _r,
                      onUpdated: _r,
                    },
                  },
                  e = function (o) {
                    var s = function (u) {
                      var y, O, w
                      for (y in u)
                        u[c.hOP](y) &&
                          ((O = u[y]),
                          (w = M(O)),
                          w == v.a
                            ? (u[y] = O[o ? 1 : 0])
                            : w == v.o && (u[y] = s(O)))
                      return u
                    }
                    return s(R.extend(!0, {}, C))
                  }
                return {
                  _defaults: e(),
                  _template: e(!0),
                  _validate: function (o, s, u, y) {
                    var O = {},
                      w = {},
                      F = R.extend(!0, {}, o),
                      G = R.inArray,
                      W = R.isEmptyObject,
                      V = function (Xr, Ir, Rr, $r, Nr, An) {
                        for (var Er in Ir)
                          if (Ir[c.hOP](Er) && Xr[c.hOP](Er)) {
                            var vn = !1,
                              bn = !1,
                              Qn = Ir[Er],
                              pr = M(Qn),
                              zr = pr == v.o,
                              xt = P.isA(Qn) ? Qn : [Qn],
                              Tn = Rr[Er],
                              Ln = Xr[Er],
                              mr = M(Ln),
                              mt = An ? An + '.' : '',
                              Be =
                                'The option "' +
                                mt +
                                Er +
                                `" wasn't set, because`,
                              tn = [],
                              dn = [],
                              gn,
                              qr,
                              cn,
                              Hn,
                              hr,
                              Nn,
                              Rt,
                              J
                            if (((Tn = Tn === B ? {} : Tn), zr && mr == v.o))
                              ($r[Er] = {}),
                                (Nr[Er] = {}),
                                V(Ln, Qn, Tn, $r[Er], Nr[Er], mt + Er),
                                R.each([Xr, $r, Nr], function (Ur, Bn) {
                                  W(Bn[Er]) && delete Bn[Er]
                                })
                            else if (!zr) {
                              for (Nn = 0; Nn < xt[c.l]; Nn++)
                                if (
                                  ((hr = xt[Nn]),
                                  (pr = M(hr)),
                                  (cn = pr == v.s && G(hr, Y) === -1),
                                  cn)
                                )
                                  for (
                                    tn.push(v.s),
                                      gn = hr.split(xr),
                                      dn = dn.concat(gn),
                                      Rt = 0;
                                    Rt < gn[c.l];
                                    Rt++
                                  ) {
                                    for (
                                      qr = gn[Rt].split(K), Hn = qr[0], J = 0;
                                      J < qr[c.l];
                                      J++
                                    )
                                      if (Ln === qr[J]) {
                                        vn = !0
                                        break
                                      }
                                    if (vn) break
                                  }
                                else if ((tn.push(hr), mr === hr)) {
                                  vn = !0
                                  break
                                }
                              vn
                                ? ((bn = Ln !== Tn),
                                  bn && ($r[Er] = Ln),
                                  (cn ? G(Tn, qr) < 0 : bn) &&
                                    (Nr[Er] = cn ? Hn : Ln))
                                : u &&
                                  console.warn(
                                    Be +
                                      " it doesn't accept the type [ " +
                                      mr.toUpperCase() +
                                      ' ] with the value of "' +
                                      Ln +
                                      `".\r
Accepted types are: [ ` +
                                      tn.join(', ').toUpperCase() +
                                      ' ].' +
                                      (dn[length] > 0
                                        ? `\r
Valid strings are: [ ` +
                                          dn.join(', ').split(K).join(', ') +
                                          ' ].'
                                        : '')
                                  ),
                                delete Xr[Er]
                            }
                          }
                      }
                    return (
                      V(F, s, y || {}, O, w),
                      !W(F) &&
                        u &&
                        console.warn(
                          `The following options are discarded due to invalidity:\r
` + er.JSON.stringify(F, null, 2)
                        ),
                      {_default: O, _prepared: w}
                    )
                  },
                }
              })()
            function h() {
              m || (m = new I(l._defaults)), n || (n = new or(m))
            }
            function I(M) {
              var Y = this,
                xr = 'overflow',
                K = 'hidden',
                Wr = 'scroll',
                k = R('body'),
                Z = R('<div id="os-dummy-scrollbar-size"><div></div></div>'),
                S = Z[0],
                H = R(Z.children('div').eq(0))
              k.append(Z), Z.hide().show()
              var _r = Zr(S),
                Un = {x: _r.x === 0, y: _r.y === 0},
                X = (function () {
                  var N = er.navigator.userAgent,
                    vr = 'indexOf',
                    dr = 'substring',
                    C = N[vr]('MSIE '),
                    e = N[vr]('Trident/'),
                    o = N[vr]('Edge/'),
                    s = N[vr]('rv:'),
                    u,
                    y = parseInt
                  return (
                    C > 0
                      ? (u = y(N[dr](C + 5, N[vr]('.', C)), 10))
                      : e > 0
                      ? (u = y(N[dr](s + 3, N[vr]('.', s)), 10))
                      : o > 0 && (u = y(N[dr](o + 5, N[vr]('.', o)), 10)),
                    u
                  )
                })()
              R.extend(Y, {
                defaultOptions: M,
                msie: X,
                autoUpdateLoop: !1,
                autoUpdateRecommended: !P.mO(),
                nativeScrollbarSize: _r,
                nativeScrollbarIsOverlaid: Un,
                nativeScrollbarStyling: (function () {
                  var N = !1
                  Z.addClass('os-viewport-native-scrollbars-invisible')
                  try {
                    N =
                      (Z.css('scrollbar-width') === 'none' && (X > 9 || !X)) ||
                      er
                        .getComputedStyle(S, '::-webkit-scrollbar')
                        .getPropertyValue('display') === 'none'
                  } catch {}
                  return N
                })(),
                overlayScrollbarDummySize: {x: 30, y: 30},
                cssCalc: qn._cssPropertyValue('width', 'calc', '(1px)') || null,
                restrictedMeasuring: (function () {
                  Z.css(xr, K)
                  var N = {w: S[c.sW], h: S[c.sH]}
                  Z.css(xr, 'visible')
                  var vr = {w: S[c.sW], h: S[c.sH]}
                  return N.w - vr.w !== 0 || N.h - vr.h !== 0
                })(),
                rtlScrollBehavior: (function () {
                  Z.css({
                    'overflow-y': K,
                    'overflow-x': Wr,
                    direction: 'rtl',
                  }).scrollLeft(0)
                  var N = Z.offset(),
                    vr = H.offset()
                  Z.scrollLeft(-999)
                  var dr = H.offset()
                  return {i: N.left === vr.left, n: vr.left !== dr.left}
                })(),
                supportTransform: !!qn._cssProperty('transform'),
                supportTransition: !!qn._cssProperty('transition'),
                supportPassiveEvents: (function () {
                  var N = !1
                  try {
                    er.addEventListener(
                      'test',
                      null,
                      Object.defineProperty({}, 'passive', {
                        get: function () {
                          N = !0
                        },
                      })
                    )
                  } catch {}
                  return N
                })(),
                supportResizeObserver: !!P.rO(),
                supportMutationObserver: !!P.mO(),
              }),
                Z.removeAttr(c.s).remove(),
                (function () {
                  if (Un.x && Un.y) return
                  var N = A.abs,
                    vr = P.wW(),
                    dr = P.wH(),
                    C = s(),
                    e = function () {
                      if (Bt().length > 0) {
                        var u = P.wW(),
                          y = P.wH(),
                          O = u - vr,
                          w = y - dr
                        if (O === 0 && w === 0) return
                        var F = A.round(u / (vr / 100)),
                          G = A.round(y / (dr / 100)),
                          W = N(O),
                          V = N(w),
                          Xr = N(F),
                          Ir = N(G),
                          Rr = s(),
                          $r = W > 2 && V > 2,
                          Nr = !o(Xr, Ir),
                          An = Rr !== C && C > 0,
                          Er = $r && Nr && An,
                          vn = Y.nativeScrollbarSize,
                          bn
                        Er &&
                          (k.append(Z),
                          (bn = Y.nativeScrollbarSize = Zr(Z[0])),
                          Z.remove(),
                          (vn.x !== bn.x || vn.y !== bn.y) &&
                            R.each(Bt(), function () {
                              Bt(this) && Bt(this).update('zoom')
                            })),
                          (vr = u),
                          (dr = y),
                          (C = Rr)
                      }
                    }
                  function o(u, y) {
                    var O = N(u),
                      w = N(y)
                    return !(O === w || O + 1 === w || O - 1 === w)
                  }
                  function s() {
                    var u = er.screen.deviceXDPI || 0,
                      y = er.screen.logicalXDPI || 1
                    return er.devicePixelRatio || u / y
                  }
                  R(er).on('resize', e)
                })()
              function Zr(N) {
                return {x: N[c.oH] - N[c.cH], y: N[c.oW] - N[c.cW]}
              }
            }
            function or(M) {
              var Y = this,
                xr = R.inArray,
                K = P.now,
                Wr = 'autoUpdate',
                k = Wr + 'Interval',
                Z = c.l,
                S = [],
                H = [],
                _r = !1,
                Un = 33,
                X = Un,
                Zr = K(),
                N,
                vr = function () {
                  if (S[Z] > 0 && _r) {
                    N = P.rAF()(function () {
                      vr()
                    })
                    var dr = K(),
                      C = dr - Zr,
                      e,
                      o,
                      s,
                      u,
                      y,
                      O
                    if (C > X) {
                      ;(Zr = dr - (C % X)), (e = Un)
                      for (var w = 0; w < S[Z]; w++)
                        (o = S[w]),
                          o !== B &&
                            ((s = o.options()),
                            (u = s[Wr]),
                            (y = A.max(1, s[k])),
                            (O = K()),
                            (u === !0 || u === null) &&
                              O - H[w] > y &&
                              (o.update('auto'), (H[w] = new Date((O += y)))),
                            (e = A.max(1, A.min(e, y))))
                      X = e
                    }
                  } else X = Un
                }
              ;(Y.add = function (dr) {
                xr(dr, S) === -1 &&
                  (S.push(dr),
                  H.push(K()),
                  S[Z] > 0 && !_r && ((_r = !0), (M.autoUpdateLoop = _r), vr()))
              }),
                (Y.remove = function (dr) {
                  var C = xr(dr, S)
                  C > -1 &&
                    (H.splice(C, 1),
                    S.splice(C, 1),
                    S[Z] === 0 &&
                      _r &&
                      ((_r = !1),
                      (M.autoUpdateLoop = _r),
                      N !== B && (P.cAF()(N), (N = -1))))
                })
            }
            function ar(M, Y, xr, K, Wr) {
              var k = P.type,
                Z = R.inArray,
                S = R.each,
                H = new T(),
                _r = R[c.p]
              if (!Bc(M)) return
              if (Bt(M)) {
                var Un = Bt(M)
                return Un.options(Y), Un
              }
              var X,
                Zr,
                N,
                vr,
                dr,
                C,
                e,
                o,
                s,
                u,
                y,
                O,
                w,
                F,
                G,
                W,
                V,
                Xr,
                Ir,
                Rr,
                $r,
                Nr,
                An,
                Er,
                vn,
                bn,
                Qn,
                pr,
                zr,
                xt = {},
                Tn = {},
                Ln = {},
                mr = {},
                mt = {},
                Be = '-hidden',
                tn = 'margin-',
                dn = 'padding-',
                gn = 'border-',
                qr = 'top',
                cn = 'right',
                Hn = 'bottom',
                hr = 'left',
                Nn = 'min-',
                Rt = 'max-',
                J = 'width',
                Ur = 'height',
                Bn = 'float',
                Q = '',
                jr = 'auto',
                zs = 'sync',
                Kn = 'scroll',
                qt = '100%',
                Re = 'x',
                qe = 'y',
                $n = '.',
                on = ' ',
                Us = 'scrollbar',
                Bs = '-horizontal',
                Rs = '-vertical',
                un = Kn + 'Left',
                fn = Kn + 'Top',
                Ee = 'mousedown touchstart',
                Ae = 'mouseup touchend touchcancel',
                Qe = 'mousemove touchmove',
                za = 'mouseenter',
                Ua = 'mouseleave',
                qs = 'keydown',
                As = 'keyup',
                ge = 'selectstart',
                Qs = 'transitionend webkitTransitionEnd oTransitionEnd',
                gs = '__overlayScrollbarsRO__',
                kn = 'os-',
                Ba = kn + 'html',
                Mn = kn + 'host',
                os = Mn + '-foreign',
                Ks = Mn + '-textarea',
                Ra = Mn + '-' + Us + Bs + Be,
                qa = Mn + '-' + Us + Rs + Be,
                Aa = Mn + '-transition',
                Qa = Mn + '-rtl',
                $s = Mn + '-resize-disabled',
                us = Mn + '-scrolling',
                Ke = Mn + '-overflow',
                Ke = Mn + '-overflow',
                ga = Ke + '-x',
                Ka = Ke + '-y',
                fs = kn + 'textarea',
                Gc = fs + '-cover',
                Ys = kn + 'padding',
                ls = kn + 'viewport',
                Fs = ls + '-native-scrollbars-invisible',
                $a = ls + '-native-scrollbars-overlaid',
                Js = kn + 'content',
                jc = kn + 'content-arrange',
                Sc = kn + 'content-glue',
                ri = kn + 'size-auto-observer',
                le = kn + 'resize-observer',
                _s = kn + 'resize-observer-item',
                Ya = _s + '-final',
                ps = kn + 'text-inherit',
                At = kn + Us,
                Fa = At + '-track',
                Ja = Fa + '-off',
                Za = At + '-handle',
                Xa = Za + '-off',
                Va = At + '-unusable',
                $e = At + '-' + jr + Be,
                Zs = At + '-corner',
                Ye = Zs + '-resize',
                Ca = Ye + '-both',
                Ga = Ye + Bs,
                ja = Ye + Rs,
                ni = At + Bs,
                ti = At + Rs,
                _e = kn + 'dragging',
                hs = kn + 'theme-none',
                Xs = [Fs, $a, Ja, Xa, Va, $e, Ye, Ca, Ga, ja, _e].join(on),
                Vs = [],
                Cs = [c.ti],
                Sa,
                Fe,
                Sr,
                Qt = {},
                ei = 'added removed on contract',
                rc,
                pe = {},
                nc,
                tc = 42,
                Gs = 'load',
                he = [],
                vs,
                bt,
                He,
                ve,
                cr,
                g,
                _t,
                pt,
                Gn,
                nr,
                Ar,
                gt,
                Pn,
                Kt,
                On,
                de,
                ds,
                Je,
                ye,
                ys,
                Ze,
                Xe,
                ke,
                jt,
                Yn,
                xs,
                ms,
                St,
                xe,
                jn,
                Ve,
                me,
                ec,
                Tt,
                Ce,
                Sn,
                re,
                sc,
                js,
                ac,
                cc,
                ic,
                oc,
                uc,
                fc,
                lc,
                Oe,
                De,
                Ss,
                ra,
                _c,
                pc,
                hc,
                vc,
                dc,
                yc,
                na,
                xc,
                $t,
                Ge,
                ta,
                bs,
                ea,
                mc,
                bc,
                Tc,
                ne,
                Lc = {},
                Ts,
                Ls,
                sa,
                aa,
                Lt,
                Nc = ['wrap', 'cols', 'rows'],
                ca = [c.i, c.c, c.s, 'open'].concat(Cs),
                ia = [],
                oa,
                Mc,
                Pc,
                ua,
                fa,
                te,
                rt,
                be,
                la,
                ee,
                Ns,
                Ms,
                _a,
                pa
              function Rn(r, t, a, i, f) {
                var _ = P.isA(t) && P.isA(a),
                  d = i ? 'removeEventListener' : 'addEventListener',
                  b = i ? 'off' : 'on',
                  x = _ ? !1 : t.split(on),
                  L = 0,
                  q = R.isPlainObject(f),
                  D = (y && (q ? f._passive : f)) || !1,
                  j = q && (f._capture || !1),
                  rr = y ? {passive: D, capture: j} : j
                if (_) for (; L < t[c.l]; L++) Rn(r, t[L], a[L], i, f)
                else
                  for (; L < x[c.l]; L++)
                    y ? r[0][d](x[L], a, rr) : r[b](x[L], a)
              }
              function ht(r, t, a, i) {
                Rn(r, t, a, !1, i), ia.push(P.bind(Rn, 0, r, t, a, !0, i))
              }
              function Ps(r, t) {
                if (r) {
                  var a = P.rO(),
                    i =
                      'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart',
                    f = 'childNodes',
                    _ = 3333333,
                    d = function () {
                      r[fn](_)[un](pr ? (N.n ? -_ : N.i ? 0 : _) : _), t()
                    }
                  if (t) {
                    if (O) {
                      var b = r
                          .addClass('observed')
                          .append(Jn(le))
                          .contents()[0],
                        x = (b[gs] = new a(d))
                      x.observe(b)
                    } else if (dr > 9 || !vr) {
                      r.prepend(
                        Jn(
                          le,
                          Jn(
                            {c: _s, dir: 'ltr'},
                            Jn(_s, Jn(Ya)) +
                              Jn(
                                _s,
                                Jn({c: Ya, style: 'width: 200%; height: 200%'})
                              )
                          )
                        )
                      )
                      var L = r[0][f][0][f][0],
                        q = R(L[f][1]),
                        D = R(L[f][0]),
                        j = R(D[0][f][0]),
                        rr = L[c.oW],
                        ir = L[c.oH],
                        $,
                        ur,
                        tr,
                        Hr,
                        xn = 2,
                        Yr = K.nativeScrollbarSize,
                        wn = function () {
                          D[un](_)[fn](_), q[un](_)[fn](_)
                        },
                        en = function () {
                          ;(ur = 0), $ && ((rr = tr), (ir = Hr), d())
                        },
                        rn = function (br) {
                          return (
                            (tr = L[c.oW]),
                            (Hr = L[c.oH]),
                            ($ = tr != rr || Hr != ir),
                            br && $ && !ur
                              ? (P.cAF()(ur), (ur = P.rAF()(en)))
                              : br || en(),
                            wn(),
                            br && (P.prvD(br), P.stpP(br)),
                            !1
                          )
                        },
                        Cr = {},
                        Qr = {}
                      Te(Qr, Q, [
                        -((Yr.y + 1) * xn),
                        Yr.x * -xn,
                        Yr.y * -xn,
                        -((Yr.x + 1) * xn),
                      ]),
                        R(L).css(Qr),
                        D.on(Kn, rn),
                        q.on(Kn, rn),
                        r.on(i, function () {
                          rn(!1)
                        }),
                        (Cr[J] = _),
                        (Cr[Ur] = _),
                        j.css(Cr),
                        wn()
                    } else {
                      var nn = ke.attachEvent,
                        dt = dr !== B
                      if (nn)
                        r.prepend(Jn(le)),
                          we(r, $n + le)[0].attachEvent('onresize', d)
                      else {
                        var gr = ke.createElement(v.o)
                        gr.setAttribute(c.ti, '-1'),
                          gr.setAttribute(c.c, le),
                          (gr.onload = function () {
                            var br = this.contentDocument.defaultView
                            br.addEventListener('resize', d),
                              (br.document.documentElement.style.display =
                                'none')
                          }),
                          (gr.type = 'text/html'),
                          dt && r.prepend(gr),
                          (gr.data = 'about:blank'),
                          dt || r.prepend(gr),
                          r.on(i, d)
                      }
                    }
                    if (r[0] === ms) {
                      var et = function () {
                        var br = g.css('direction'),
                          E = {},
                          kr = 0,
                          Or = !1
                        return (
                          br !== oc &&
                            (br === 'ltr'
                              ? ((E[hr] = 0), (E[cn] = jr), (kr = _))
                              : ((E[hr] = jr),
                                (E[cn] = 0),
                                (kr = N.n ? -_ : N.i ? 0 : _)),
                            pt.children().eq(0).css(E),
                            pt[un](kr)[fn](_),
                            (oc = br),
                            (Or = !0)),
                          Or
                        )
                      }
                      et(),
                        ht(r, Kn, function (br) {
                          return et() && Nt(), P.prvD(br), P.stpP(br), !1
                        })
                    }
                  } else if (O) {
                    var b = r.contents()[0],
                      Tr = b[gs]
                    Tr && (Tr.disconnect(), delete b[gs])
                  } else Ft(r.children($n + le).eq(0))
                }
              }
              function si() {
                if (w) {
                  var r = 11,
                    t = P.mO(),
                    a = P.now(),
                    i,
                    f,
                    _,
                    d,
                    b,
                    x,
                    L,
                    q,
                    D,
                    j
                  ;(sa = function (rr) {
                    var ir = !1,
                      $ = !1,
                      ur,
                      tr = []
                    return (
                      F &&
                        !zr &&
                        (S(rr, function () {
                          ;(ur = this),
                            (i = ur.target),
                            (f = ur.attributeName),
                            (_ = f === c.c),
                            (d = ur.oldValue),
                            (b = i.className),
                            Ir &&
                              _ &&
                              !$ &&
                              d.indexOf(os) > -1 &&
                              b.indexOf(os) < 0 &&
                              ((x = Uc(!0)),
                              (Yn.className = b
                                .split(on)
                                .concat(
                                  d.split(on).filter(function (Hr) {
                                    return Hr.match(x)
                                  })
                                )
                                .join(on)),
                              (ir = $ = !0)),
                            ir ||
                              (ir = _
                                ? Oc(d, b)
                                : f === c.s
                                ? d !== i[c.s].cssText
                                : !0),
                            tr.push(f)
                        }),
                        ya(tr),
                        ir && H.update($ || jr)),
                      ir
                    )
                  }),
                    (aa = function (rr) {
                      var ir = !1,
                        $
                      return (
                        F &&
                          !zr &&
                          (S(rr, function () {
                            return ($ = this), (ir = ii($)), !ir
                          }),
                          ir &&
                            ((q = P.now()),
                            (D = re || Sn),
                            (j = function () {
                              G || ((a = q), W && xa(), D ? Nt() : H.update(jr))
                            }),
                            clearTimeout(L),
                            r <= 0 || q - a > r || !D
                              ? j()
                              : (L = setTimeout(j, r)))),
                        ir
                      )
                    }),
                    (Ts = new t(sa)),
                    (Ls = new t(aa))
                }
              }
              function Ic() {
                w &&
                  !Lt &&
                  (Ts.observe(Yn, {
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: ca,
                  }),
                  Ls.observe(W ? jt : jn, {
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !W,
                    childList: !W,
                    characterData: !W,
                    attributeFilter: W ? Nc : ca,
                  }),
                  (Lt = !0))
              }
              function ha() {
                w && Lt && (Ts.disconnect(), Ls.disconnect(), (Lt = !1))
              }
              function ai() {
                if (!zr) {
                  var r,
                    t = {w: ms[c.sW], h: ms[c.sH]}
                  ;(r = Le(t, hc)), (hc = t), r && Nt({_hostSizeChanged: !0})
                }
              }
              function Ec() {
                be && Mt(!0)
              }
              function Hc() {
                be && !ve.hasClass(_e) && Mt(!1)
              }
              function ci() {
                rt &&
                  (Mt(!0),
                  clearTimeout(Pc),
                  (Pc = setTimeout(function () {
                    rt && !G && Mt(!1)
                  }, 100)))
              }
              function je(r) {
                return P.prvD(r), !1
              }
              function va(r) {
                if (!G) {
                  var t = r.target,
                    a = R(r.target),
                    i = R.inArray(t, he)
                  i > -1 && he.splice(i, 1),
                    qc(function (f, _) {
                      a.is(_) && Nt({_contentSizeChanged: !0})
                    })
                }
              }
              function da(r) {
                r || da(!0),
                  Rn(g, Qe.split(on)[0], ci, !rt || r, !0),
                  Rn(g, [za, Ua], [Ec, Hc], !be || r, !0),
                  !F && !r && g.one('mouseover', Ec)
              }
              function kc() {
                var r = {}
                return (
                  V &&
                    gt &&
                    ((r.w = Pt(gt.css(Nn + J))),
                    (r.h = Pt(gt.css(Nn + Ur))),
                    (r.c = Le(r, ne)),
                    (r.f = !0)),
                  (ne = r),
                  !!r.c
                )
              }
              function Oc(r, t) {
                var a = typeof t == v.s ? t.split(on) : [],
                  i = typeof r == v.s ? r.split(on) : [],
                  f = hi(i, a),
                  _ = Z(hs, f),
                  d,
                  b
                if ((_ > -1 && f.splice(_, 1), f[c.l] > 0)) {
                  for (b = Uc(!0, !0), d = 0; d < f.length; d++)
                    if (!f[d].match(b)) return !0
                }
                return !1
              }
              function ii(r) {
                var t = r.attributeName,
                  a = r.target,
                  i = r.type,
                  f = 'closest'
                if (a === jn) return t === null
                if (i === 'attributes' && (t === c.c || t === c.s) && !W) {
                  if (t === c.c && R(a).hasClass(Mn))
                    return Oc(r.oldValue, a.className)
                  if (typeof a[f] != v.f) return !0
                  if (
                    a[f]($n + le) !== null ||
                    a[f]($n + At) !== null ||
                    a[f]($n + Zs) !== null
                  )
                    return !1
                }
                return !0
              }
              function oi() {
                if (zr) return !1
                var r = Rc(),
                  t = W && Sn && !bs ? cr.val().length : 0,
                  a = !Lt && Sn && !W,
                  i = {},
                  f,
                  _,
                  d,
                  b
                return (
                  a &&
                    ((f = Ar.css(Bn)),
                    (i[Bn] = pr ? cn : hr),
                    (i[J] = jr),
                    Ar.css(i)),
                  (b = {w: r[c.sW] + t, h: r[c.sH] + t}),
                  a && ((i[Bn] = f), (i[J] = qt), Ar.css(i)),
                  (_ = kc()),
                  (d = Le(b, pc)),
                  (pc = b),
                  d || _
                )
              }
              function ui() {
                if (!(zr || Lt)) {
                  var r,
                    t,
                    a,
                    i = [],
                    f = [
                      {_elem: g, _attrs: ca.concat(':visible')},
                      {_elem: W ? cr : B, _attrs: Nc},
                    ]
                  return (
                    S(f, function (_, d) {
                      ;(r = d._elem),
                        r &&
                          S(d._attrs, function (b, x) {
                            ;(t = x.charAt(0) === ':' ? r.is(x) : r.attr(x)),
                              (a = Lc[x]),
                              Le(t, a) && i.push(x),
                              (Lc[x] = t)
                          })
                    }),
                    ya(i),
                    i[c.l] > 0
                  )
                }
              }
              function fi(r) {
                if (!F) return !0
                var t = 'flex-grow',
                  a = 'flex-shrink',
                  i = 'flex-basis',
                  f = [
                    J,
                    Nn + J,
                    Rt + J,
                    tn + hr,
                    tn + cn,
                    hr,
                    cn,
                    'font-weight',
                    'word-spacing',
                    t,
                    a,
                    i,
                  ],
                  _ = [dn + hr, dn + cn, gn + hr + J, gn + cn + J],
                  d = [
                    Ur,
                    Nn + Ur,
                    Rt + Ur,
                    tn + qr,
                    tn + Hn,
                    qr,
                    Hn,
                    'line-height',
                    t,
                    a,
                    i,
                  ],
                  b = [dn + qr, dn + Hn, gn + qr + J, gn + Hn + J],
                  x = 's',
                  L = 'v-s',
                  q = Oe.x === x || Oe.x === L,
                  D = Oe.y === x || Oe.y === L,
                  j = !1,
                  rr = function (ir, $) {
                    for (var ur = 0; ur < ir[c.l]; ur++)
                      if (ir[ur] === $) return !0
                    return !1
                  }
                return (
                  D && ((j = rr(d, r)), !j && !Rr && (j = rr(b, r))),
                  q && !j && ((j = rr(f, r)), !j && !Rr && (j = rr(_, r))),
                  j
                )
              }
              function ya(r) {
                ;(r = r || Cs),
                  S(r, function (t, a) {
                    if (P.inA(a, Cs) > -1) {
                      var i = cr.attr(a)
                      k(i) == v.s ? nr.attr(a, i) : nr.removeAttr(a)
                    }
                  })
              }
              function xa() {
                if (!zr) {
                  var r = !bs,
                    t = mr.w,
                    a = mr.h,
                    i = {},
                    f = Sn || r,
                    _,
                    d,
                    b,
                    x
                  return (
                    (i[Nn + J] = Q),
                    (i[Nn + Ur] = Q),
                    (i[J] = jr),
                    cr.css(i),
                    (_ = jt[c.oW]),
                    (d = f ? A.max(_, jt[c.sW] - 1) : 1),
                    (i[J] = Sn ? jr : qt),
                    (i[Nn + J] = qt),
                    (i[Ur] = jr),
                    cr.css(i),
                    (b = jt[c.oH]),
                    (x = A.max(b, jt[c.sH] - 1)),
                    (i[J] = d),
                    (i[Ur] = x),
                    Kt.css(i),
                    (i[Nn + J] = t),
                    (i[Nn + Ur] = a),
                    cr.css(i),
                    {
                      _originalWidth: _,
                      _originalHeight: b,
                      _dynamicWidth: d,
                      _dynamicHeight: x,
                    }
                  )
                }
              }
              function Nt(r) {
                clearTimeout(nc),
                  (r = r || {}),
                  (pe._hostSizeChanged |= r._hostSizeChanged),
                  (pe._contentSizeChanged |= r._contentSizeChanged),
                  (pe._force |= r._force)
                var t = P.now(),
                  a = !!pe._hostSizeChanged,
                  i = !!pe._contentSizeChanged,
                  f = !!pe._force,
                  _ = r._changedOptions,
                  d = F && !G && !f && !_ && t - rc < tc && !re && !Sn,
                  b
                if (
                  (d && (nc = setTimeout(Nt, tc)),
                  !(
                    G ||
                    d ||
                    (zr && !_) ||
                    (F && !f && (b = g.is(':hidden'))) ||
                    g.css('display') === 'inline'
                  ))
                ) {
                  ;(rc = t),
                    (pe = {}),
                    C && !(X.x && X.y)
                      ? ((o.x = 0), (o.y = 0))
                      : (o = Dn({}, K.nativeScrollbarSize)),
                    (mt = {
                      x: (o.x + (X.x ? 0 : 3)) * 3,
                      y: (o.y + (X.y ? 0 : 3)) * 3,
                    }),
                    (_ = _ || {})
                  var x = function () {
                      return Le.apply(
                        this,
                        [].slice.call(arguments).concat([f])
                      )
                    },
                    L = {x: nr[un](), y: nr[fn]()},
                    q = Sr.scrollbars,
                    D = Sr.textarea,
                    j = q.visibility,
                    rr = x(j, vc),
                    ir = q.autoHide,
                    $ = x(ir, dc),
                    ur = q.clickScrolling,
                    tr = x(ur, yc),
                    Hr = q.dragScrolling,
                    xn = x(Hr, na),
                    Yr = Sr.className,
                    wn = x(Yr, Ge),
                    en = Sr.resize,
                    rn = x(en, xc) && !V,
                    Cr = Sr.paddingAbsolute,
                    Qr = x(Cr, uc),
                    nn = Sr.clipAlways,
                    dt = x(nn, fc),
                    gr = Sr.sizeAutoCapable && !V,
                    et = x(gr, _c),
                    Tr = Sr.nativeScrollbarsOverlaid.showNativeScrollbars,
                    br = x(Tr, Ss),
                    E = Sr.autoUpdate,
                    kr = x(E, ra),
                    Or = Sr.overflowBehavior,
                    Zn = x(Or, Oe, f),
                    Jt = D.dynWidth,
                    Ne = x(Tc, Jt),
                    Wn = D.dynHeight,
                    It = x(bc, Wn)
                  if (
                    ((fa = ir === 'n'),
                    (te = ir === 's'),
                    (rt = ir === 'm'),
                    (be = ir === 'l'),
                    (ua = q.autoHideDelay),
                    (ta = Ge),
                    (Ns = en === 'n'),
                    (Ms = en === 'b'),
                    (_a = en === 'h'),
                    (pa = en === 'v'),
                    ($t = Sr.normalizeRTL),
                    (Tr = Tr && X.x && X.y),
                    (vc = j),
                    (dc = ir),
                    (yc = ur),
                    (na = Hr),
                    (Ge = Yr),
                    (xc = en),
                    (uc = Cr),
                    (fc = nn),
                    (_c = gr),
                    (Ss = Tr),
                    (ra = E),
                    (Oe = Dn({}, Or)),
                    (Tc = Jt),
                    (bc = Wn),
                    (Tt = Tt || {x: !1, y: !1}),
                    wn &&
                      (yn(g, ta + on + hs),
                      Vr(
                        g,
                        Yr !== B && Yr !== null && Yr.length > 0 ? Yr : hs
                      )),
                    kr &&
                      (E === !0 || (E === null && vr)
                        ? (ha(), Wr.add(H))
                        : (Wr.remove(H), Ic())),
                    et)
                  )
                    if (gr)
                      if (
                        (Pn ? Pn.show() : ((Pn = R(Jn(Sc))), Gn.before(Pn)), $r)
                      )
                        _t.show()
                      else {
                        ;(_t = R(Jn(ri))), (xs = _t[0]), Pn.before(_t)
                        var Et = {w: -1, h: -1}
                        Ps(_t, function () {
                          var Ue = {w: xs[c.oW], h: xs[c.oH]}
                          Le(Ue, Et) &&
                            ((F && re && Ue.h > 0) ||
                              (Sn && Ue.w > 0) ||
                              (F && !re && Ue.h === 0) ||
                              (!Sn && Ue.w === 0)) &&
                            Nt(),
                            (Et = Ue)
                        }),
                          ($r = !0),
                          e !== null && _t.css(Ur, e + '(100% + 1px)')
                      }
                    else $r && _t.hide(), Pn && Pn.hide()
                  f &&
                    (pt.find('*').trigger(Kn), $r && _t.find('*').trigger(Kn)),
                    (b = b === B ? g.is(':hidden') : b)
                  var Xn = W ? cr.attr('wrap') !== 'off' : !1,
                    rs = x(Xn, bs),
                    Vn = g.css('direction'),
                    In = x(Vn, ic),
                    Zt = g.css('box-sizing'),
                    Cn = x(Zt, sc),
                    Br = Ma(dn),
                    ln
                  try {
                    ln = $r ? xs[c.bCR]() : null
                  } catch {
                    return
                  }
                  ;(pr = Vn === 'rtl'), (Rr = Zt === 'border-box')
                  var _n = pr ? hr : cn,
                    fr = pr ? cn : hr,
                    st = !1,
                    se =
                      $r && g.css(Bn) !== 'none'
                        ? A.round(ln.right - ln.left) === 0 &&
                          (Cr ? !0 : Yn[c.cW] - Nr > 0)
                        : !1
                  if (gr && !se) {
                    var Me = Yn[c.oW],
                      Xt = Pn.css(J)
                    Pn.css(J, jr)
                    var Ht = Yn[c.oW]
                    Pn.css(J, Xt),
                      (st = Me !== Ht),
                      st ||
                        (Pn.css(J, Me + 1),
                        (Ht = Yn[c.oW]),
                        Pn.css(J, Xt),
                        (st = Me !== Ht))
                  }
                  var sr = (se || st) && gr && !b,
                    pn = x(sr, Sn),
                    Vt = !sr && Sn,
                    Mr =
                      $r && gr && !b ? A.round(ln.bottom - ln.top) === 0 : !1,
                    hn = x(Mr, re),
                    at = !Mr && re,
                    ns = (sr && Rr) || !Rr,
                    Is = (Mr && Rr) || !Rr,
                    ct = Ma(gn, '-' + J, !ns, !Is),
                    kt = Ma(tn),
                    z = {},
                    U = {},
                    Fr = function () {
                      return {w: Yn[c.cW], h: Yn[c.cH]}
                    },
                    En = function () {
                      return {
                        w: St[c.oW] + A.max(0, jn[c.cW] - jn[c.sW]),
                        h: St[c.oH] + A.max(0, jn[c.cH] - jn[c.sH]),
                      }
                    },
                    yr = (Nr = Br.l + Br.r),
                    it = (An = Br.t + Br.b)
                  if (
                    ((yr *= Cr ? 1 : 0),
                    (it *= Cr ? 1 : 0),
                    (Br.c = x(Br, js)),
                    (Er = ct.l + ct.r),
                    (vn = ct.t + ct.b),
                    (ct.c = x(ct, ac)),
                    (bn = kt.l + kt.r),
                    (Qn = kt.t + kt.b),
                    (kt.c = x(kt, cc)),
                    (bs = Xn),
                    (ic = Vn),
                    (sc = Zt),
                    (Sn = sr),
                    (re = Mr),
                    (js = Br),
                    (ac = ct),
                    (cc = kt),
                    In && $r && _t.css(Bn, fr),
                    Br.c || In || Qr || pn || hn || Cn || et)
                  ) {
                    var Gr = {},
                      zn = {},
                      ae = [Br.t, Br.r, Br.b, Br.l]
                    Te(U, tn, [-Br.t, -Br.r, -Br.b, -Br.l]),
                      Cr
                        ? (Te(Gr, Q, ae), Te(W ? zn : z, dn))
                        : (Te(Gr, Q), Te(W ? zn : z, dn, ae)),
                      Gn.css(Gr),
                      cr.css(zn)
                  }
                  mr = En()
                  var Dr = W ? xa() : !1,
                    ot = W && x(Dr, mc),
                    Ot =
                      W && Dr
                        ? {
                            w: Jt ? Dr._dynamicWidth : Dr._originalWidth,
                            h: Wn ? Dr._dynamicHeight : Dr._originalHeight,
                          }
                        : {}
                  if (
                    ((mc = Dr),
                    Mr && (hn || Qr || Cn || Br.c || ct.c)
                      ? (z[Ur] = jr)
                      : (hn || Qr) && (z[Ur] = qt),
                    sr && (pn || Qr || Cn || Br.c || ct.c || In)
                      ? ((z[J] = jr), (U[Rt + J] = qt))
                      : (pn || Qr) &&
                        ((z[J] = qt), (z[Bn] = Q), (U[Rt + J] = Q)),
                    sr
                      ? ((U[J] = jr),
                        (z[J] =
                          qn._cssPropertyValue(J, 'max-content intrinsic') ||
                          jr),
                        (z[Bn] = fr))
                      : (U[J] = Q),
                    Mr ? (U[Ur] = Ot.h || jn[c.cH]) : (U[Ur] = Q),
                    gr && Pn.css(U),
                    Ar.css(z),
                    (z = {}),
                    (U = {}),
                    a ||
                      i ||
                      ot ||
                      In ||
                      Cn ||
                      Qr ||
                      pn ||
                      sr ||
                      hn ||
                      Mr ||
                      br ||
                      Zn ||
                      dt ||
                      rn ||
                      rr ||
                      $ ||
                      xn ||
                      tr ||
                      Ne ||
                      It ||
                      rs)
                  ) {
                    var sn = 'overflow',
                      Ct = sn + '-x',
                      Dt = sn + '-y',
                      ce = 'hidden',
                      ut = 'visible'
                    if (!C) {
                      var wt = {},
                        Ea =
                          Tt.y && Ce.ys && !Tr ? (X.y ? nr.css(_n) : -o.y) : 0,
                        xi =
                          Tt.x && Ce.xs && !Tr ? (X.x ? nr.css(Hn) : -o.x) : 0
                      Te(wt, Q), nr.css(wt)
                    }
                    var ie = Rc(),
                      ts = {w: Ot.w || ie[c.cW], h: Ot.h || ie[c.cH]},
                      Ac = {w: ie[c.sW], h: ie[c.sH]}
                    C ||
                      ((wt[Hn] = at ? Q : xi),
                      (wt[_n] = Vt ? Q : Ea),
                      nr.css(wt)),
                      (mr = En())
                    var es = Fr(),
                      Ha = {
                        w: es.w - bn - Er - (Rr ? 0 : Nr),
                        h: es.h - Qn - vn - (Rr ? 0 : An),
                      },
                      We = {
                        w: A.max((sr ? ts.w : Ac.w) + yr, Ha.w),
                        h: A.max((Mr ? ts.h : Ac.h) + it, Ha.h),
                      }
                    if (((We.c = x(We, lc)), (lc = We), gr)) {
                      ;(We.c || Mr || sr) &&
                        ((U[J] = We.w),
                        (U[Ur] = We.h),
                        W || (ts = {w: ie[c.cW], h: ie[c.cH]}))
                      var Qc = {},
                        gc = function (Jr) {
                          var mn = nt(Jr),
                            ft = mn._w_h,
                            Kr = mn._width_height,
                            lr = Jr ? sr : Mr,
                            yt = Jr ? Er : vn,
                            Pe = Jr ? Nr : An,
                            Wa = Jr ? bn : Qn,
                            ws = mr[ft] - yt - Wa - (Rr ? 0 : Pe)
                          ;(!lr || (!lr && ct.c)) && (U[Kr] = Ha[ft] - 1),
                            lr &&
                              ts[ft] < ws &&
                              (!(Jr && W) || !Xn) &&
                              (W && (Qc[Kr] = Pt(Kt.css(Kr)) - 1),
                              (U[Kr] -= 1)),
                            ts[ft] > 0 && (U[Kr] = A.max(1, U[Kr]))
                        }
                      gc(!0), gc(!1), W && Kt.css(Qc), Pn.css(U)
                    }
                    sr && (z[J] = qt),
                      sr && !Rr && !Lt && (z[Bn] = 'none'),
                      Ar.css(z),
                      (z = {})
                    var oe = {w: ie[c.sW], h: ie[c.sH]}
                    ;(oe.c = i = x(oe, me)),
                      (me = oe),
                      (mr = En()),
                      (es = Fr()),
                      (a = x(es, Ve)),
                      (Ve = es)
                    var ka = W && (mr.w === 0 || mr.h === 0),
                      Es = De,
                      ze = {},
                      ss = {},
                      Kc = {},
                      Wt = {},
                      wr = {},
                      Lr = {},
                      as = {},
                      $c = St[c.bCR](),
                      Yc = function (Jr) {
                        var mn = nt(Jr),
                          ft = nt(!Jr),
                          Kr = ft._x_y,
                          lr = mn._x_y,
                          yt = mn._w_h,
                          Pe = mn._width_height,
                          Wa = Kn + mn._Left_Top + 'Max',
                          ws = $c[Pe] ? A.abs($c[Pe] - mr[yt]) : 0,
                          Di = Es && Es[lr] > 0 && xe[Wa] === 0
                        ;(ze[lr] = Or[lr] === 'v-s'),
                          (ss[lr] = Or[lr] === 'v-h'),
                          (Kc[lr] = Or[lr] === 's'),
                          (Wt[lr] = A.max(
                            0,
                            A.round((oe[yt] - mr[yt]) * 100) / 100
                          )),
                          (Wt[lr] *= ka || (Di && ws > 0 && ws < 1) ? 0 : 1),
                          (wr[lr] = Wt[lr] > 0),
                          (Lr[lr] =
                            ze[lr] || ss[lr]
                              ? wr[Kr] && !ze[Kr] && !ss[Kr]
                              : wr[lr]),
                          (Lr[lr + 's'] = Lr[lr] ? Kc[lr] || ze[lr] : !1),
                          (as[lr] = wr[lr] && Lr[lr + 's'])
                      }
                    if (
                      (Yc(!0),
                      Yc(!1),
                      (Wt.c = x(Wt, De)),
                      (De = Wt),
                      (wr.c = x(wr, Tt)),
                      (Tt = wr),
                      (Lr.c = x(Lr, Ce)),
                      (Ce = Lr),
                      X.x || X.y)
                    ) {
                      var mi = 'px solid transparent',
                        Oa = {},
                        Gt = {},
                        Hs = f,
                        Da
                      ;(wr.x || wr.y) &&
                        ((Gt.w = X.y && wr.y ? oe.w + Zr.y : Q),
                        (Gt.h = X.x && wr.x ? oe.h + Zr.x : Q),
                        (Hs = x(Gt, ec)),
                        (ec = Gt)),
                        (wr.c ||
                          Lr.c ||
                          oe.c ||
                          In ||
                          pn ||
                          hn ||
                          sr ||
                          Mr ||
                          br) &&
                          ((z[tn + fr] = z[gn + fr] = Q),
                          (Da = function (Jr) {
                            var mn = nt(Jr),
                              ft = nt(!Jr),
                              Kr = mn._x_y,
                              lr = Jr ? Hn : _n,
                              yt = Jr ? Mr : sr
                            X[Kr] && wr[Kr] && Lr[Kr + 's']
                              ? ((z[tn + lr] = yt ? (Tr ? Q : Zr[Kr]) : Q),
                                (z[gn + lr] =
                                  (!Jr || !yt) && !Tr ? Zr[Kr] + mi : Q))
                              : ((Gt[ft._w_h] = z[tn + lr] = z[gn + lr] = Q),
                                (Hs = !0))
                          }),
                          C ? tt(nr, Fs, !Tr) : (Da(!0), Da(!1))),
                        Tr && ((Gt.w = Gt.h = Q), (Hs = !0)),
                        Hs &&
                          !C &&
                          ((Oa[J] = Lr.y ? Gt.w : Q),
                          (Oa[Ur] = Lr.x ? Gt.h : Q),
                          gt || ((gt = R(Jn(jc))), nr.prepend(gt)),
                          gt.css(Oa)),
                        Ar.css(z)
                    }
                    var an = {},
                      Gr = {},
                      wa
                    if (
                      (a ||
                        wr.c ||
                        Lr.c ||
                        oe.c ||
                        Zn ||
                        Cn ||
                        br ||
                        In ||
                        dt ||
                        hn) &&
                      ((an[fr] = Q),
                      (wa = function (Jr) {
                        var mn = nt(Jr),
                          ft = nt(!Jr),
                          Kr = mn._x_y,
                          lr = mn._X_Y,
                          yt = Jr ? Hn : _n,
                          Pe = function () {
                            ;(an[yt] = Q), (xt[ft._w_h] = 0)
                          }
                        wr[Kr] && Lr[Kr + 's']
                          ? ((an[sn + lr] = Kn),
                            Tr || C
                              ? Pe()
                              : ((an[yt] = -(X[Kr] ? Zr[Kr] : o[Kr])),
                                (xt[ft._w_h] = X[Kr] ? Zr[ft._x_y] : 0)))
                          : ((an[sn + lr] = Q), Pe())
                      }),
                      wa(!0),
                      wa(!1),
                      !C &&
                      (mr.h < mt.x || mr.w < mt.y) &&
                      ((wr.x && Lr.x && !X.x) || (wr.y && Lr.y && !X.y))
                        ? ((an[dn + qr] = mt.x),
                          (an[tn + qr] = -mt.x),
                          (an[dn + fr] = mt.y),
                          (an[tn + fr] = -mt.y))
                        : (an[dn + qr] =
                            an[tn + qr] =
                            an[dn + fr] =
                            an[tn + fr] =
                              Q),
                      (an[dn + _n] = an[tn + _n] = Q),
                      (wr.x && Lr.x) || (wr.y && Lr.y) || ka
                        ? W && ka && (Gr[Ct] = Gr[Dt] = ce)
                        : (!nn || ss.x || ze.x || ss.y || ze.y) &&
                          (W && (Gr[Ct] = Gr[Dt] = Q), (an[Ct] = an[Dt] = ut)),
                      Gn.css(Gr),
                      nr.css(an),
                      (an = {}),
                      (wr.c || Cn || pn || hn) && !(X.x && X.y))
                    ) {
                      var ks = jn[c.s]
                      ;(ks.webkitTransform = 'scale(1)'),
                        (ks.display = 'run-in'),
                        jn[c.oH],
                        (ks.display = Q),
                        (ks.webkitTransform = Q)
                    }
                    if (((z = {}), In || pn || hn))
                      if (pr && sr) {
                        var bi = Ar.css(Bn),
                          Fc = A.round(Ar.css(Bn, Q).css(hr, Q).position().left)
                        Ar.css(Bn, bi)
                        var Ti = A.round(Ar.position().left)
                        Fc !== Ti && (z[hr] = Fc)
                      } else z[hr] = Q
                    if ((Ar.css(z), W && i)) {
                      var zt = vi()
                      if (zt) {
                        var Jc = ea === B ? !0 : zt._rows !== ea._rows,
                          Zc = zt._cursorRow,
                          Li = zt._cursorColumn,
                          Ni = zt._widestRow,
                          Mi = zt._rows,
                          Pi = zt._columns,
                          Ii = zt._cursorPosition,
                          Ei = zt._cursorMax,
                          Xc = Ii >= Ei && oa,
                          Os = {
                            x: !Xn && Li === Pi && Zc === Ni ? De.x : -1,
                            y: (
                              Xn
                                ? Xc || (Jc && Es && L.y === Es.y)
                                : (Xc || Jc) && Zc === Mi
                            )
                              ? De.y
                              : -1,
                          }
                        ;(L.x = Os.x > -1 ? (pr && $t && N.i ? 0 : Os.x) : L.x),
                          (L.y = Os.y > -1 ? Os.y : L.y)
                      }
                      ea = zt
                    }
                    pr && N.i && X.y && wr.x && $t && (L.x += xt.w || 0),
                      sr && g[un](0),
                      Mr && g[fn](0),
                      nr[un](L.x)[fn](L.y)
                    var Hi = j === 'v',
                      ki = j === 'h',
                      Oi = j === 'a',
                      Ds = function (Jr, mn) {
                        ;(mn = mn === B ? Jr : mn),
                          Wc(!0, Jr, as.x),
                          Wc(!1, mn, as.y)
                      }
                    tt(g, Ke, Lr.x || Lr.y),
                      tt(g, ga, Lr.x),
                      tt(g, Ka, Lr.y),
                      In && !V && tt(g, Qa, pr),
                      V && Vr(g, $s),
                      rn &&
                        (tt(g, $s, Ns),
                        tt(On, Ye, !Ns),
                        tt(On, Ca, Ms),
                        tt(On, Ga, _a),
                        tt(On, ja, pa)),
                      (rr || Zn || Lr.c || wr.c || br) &&
                        (Tr
                          ? br && (yn(g, us), Tr && Ds(!1))
                          : Oi
                          ? Ds(as.x, as.y)
                          : Hi
                          ? Ds(!0)
                          : ki && Ds(!1)),
                      ($ || br) && (da(!be && !rt), Mt(fa, !fa)),
                      (a || Wt.c || hn || pn || rn || Cn || Qr || br || In) &&
                        (La(!0), vt(!0), La(!1), vt(!1)),
                      tr && zc(!0, ur),
                      xn && zc(!1, Hr),
                      Fn('onDirectionChanged', {isRTL: pr, dir: Vn}, In),
                      Fn('onHostSizeChanged', {width: Ve.w, height: Ve.h}, a),
                      Fn(
                        'onContentSizeChanged',
                        {width: me.w, height: me.h},
                        i
                      ),
                      Fn(
                        'onOverflowChanged',
                        {
                          x: wr.x,
                          y: wr.y,
                          xScrollable: Lr.xs,
                          yScrollable: Lr.ys,
                          clipped: Lr.x || Lr.y,
                        },
                        wr.c || Lr.c
                      ),
                      Fn('onOverflowAmountChanged', {x: Wt.x, y: Wt.y}, Wt.c)
                  }
                  V &&
                    ne &&
                    (Tt.c || ne.c) &&
                    (ne.f || kc(),
                    X.y && Tt.x && Ar.css(Nn + J, ne.w + Zr.y),
                    X.x && Tt.y && Ar.css(Nn + Ur, ne.h + Zr.x),
                    (ne.c = !1)),
                    F && _.updateOnLoad && Dc(),
                    Fn('onUpdated', {forced: f})
                }
              }
              function Dc() {
                W ||
                  qc(function (r, t) {
                    Ar.find(t).each(function (a, i) {
                      P.inA(i, he) < 0 &&
                        (he.push(i), R(i).off(Gs, va).on(Gs, va))
                    })
                  })
              }
              function ma(r) {
                var t = l._validate(r, l._template, !0, Fe)
                return (
                  (Fe = Dn({}, Fe, t._default)),
                  (Sr = Dn({}, Sr, t._prepared)),
                  t._prepared
                )
              }
              function ba(r) {
                var t = 'parent',
                  a = 'os-resize-observer-host',
                  i = fs + on + ps,
                  f = W ? on + ps : Q,
                  _ = Sr.textarea.inheritedAttrs,
                  d = {},
                  b = function () {
                    var q = r ? cr : g
                    S(d, function (D, j) {
                      k(j) == v.s && (D == c.c ? q.addClass(j) : q.attr(D, j))
                    })
                  },
                  x = [
                    Mn,
                    os,
                    Ks,
                    $s,
                    Qa,
                    Ra,
                    qa,
                    Aa,
                    us,
                    Ke,
                    ga,
                    Ka,
                    hs,
                    fs,
                    ps,
                    Ge,
                  ].join(on),
                  L = {}
                ;(g =
                  g || (W ? (Ir ? cr[t]()[t]()[t]()[t]() : R(Jn(Ks))) : cr)),
                  (Ar = Ar || Yt(Js + f)),
                  (nr = nr || Yt(ls + f)),
                  (Gn = Gn || Yt(Ys + f)),
                  (pt = pt || Yt(a)),
                  (Kt = Kt || (W ? Yt(Gc) : B)),
                  Ir && Vr(g, os),
                  r && yn(g, x),
                  (_ = k(_) == v.s ? _.split(on) : _),
                  P.isA(_) &&
                    W &&
                    S(_, function (q, D) {
                      k(D) == v.s && (d[D] = r ? g.attr(D) : cr.attr(D))
                    }),
                  r
                    ? (Ir && F
                        ? (pt.children().remove(),
                          S([Gn, nr, Ar, Kt], function (q, D) {
                            D && yn(D.removeAttr(c.s), Xs)
                          }),
                          Vr(g, W ? Ks : Mn))
                        : (Ft(pt),
                          Ar.contents().unwrap().unwrap().unwrap(),
                          W && (cr.unwrap(), Ft(g), Ft(Kt), b())),
                      W && cr.removeAttr(c.s),
                      V && yn(He, Ba))
                    : (W &&
                        (Sr.sizeAutoCapable ||
                          ((L[J] = cr.css(J)), (L[Ur] = cr.css(Ur))),
                        Ir || cr.addClass(ps).wrap(g),
                        (g = cr[t]().css(L))),
                      Ir ||
                        (Vr(cr, W ? i : Mn),
                        g.wrapInner(Ar).wrapInner(nr).wrapInner(Gn).prepend(pt),
                        (Ar = we(g, $n + Js)),
                        (nr = we(g, $n + ls)),
                        (Gn = we(g, $n + Ys)),
                        W && (Ar.prepend(Kt), b())),
                      C && Vr(nr, Fs),
                      X.x && X.y && Vr(nr, $a),
                      V && Vr(He, Ba),
                      (ms = pt[0]),
                      (Yn = g[0]),
                      (St = Gn[0]),
                      (xe = nr[0]),
                      (jn = Ar[0]),
                      ya())
              }
              function li() {
                var r = [
                    112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33,
                    34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144,
                  ],
                  t = [],
                  a,
                  i,
                  f = 175,
                  _ = 'focus'
                function d($) {
                  xa(), H.update(jr), $ && vr && clearInterval(a)
                }
                function b($) {
                  return (
                    cr[un](N.i && $t ? 9999999 : 0),
                    cr[fn](0),
                    P.prvD($),
                    P.stpP($),
                    !1
                  )
                }
                function x($) {
                  setTimeout(function () {
                    G || d()
                  }, 50)
                }
                function L() {
                  ;(oa = !0), Vr(g, _)
                }
                function q() {
                  ;(oa = !1), (t = []), yn(g, _), d(!0)
                }
                function D($) {
                  var ur = $.keyCode
                  Z(ur, r) < 0 &&
                    (t[c.l] || (d(), (a = setInterval(d, 1e3 / 60))),
                    Z(ur, t) < 0 && t.push(ur))
                }
                function j($) {
                  var ur = $.keyCode,
                    tr = Z(ur, t)
                  Z(ur, r) < 0 && (tr > -1 && t.splice(tr, 1), t[c.l] || d(!0))
                }
                function rr($) {
                  ra !== !0 &&
                    (($ = $.originalEvent || $),
                    fi($.propertyName) && H.update(jr))
                }
                function ir($) {
                  zr ||
                    (i !== B
                      ? clearTimeout(i)
                      : ((te || rt) && Mt(!0),
                        Se() || Vr(g, us),
                        Fn('onScrollStart', $)),
                    ee || (vt(!0), vt(!1)),
                    Fn('onScroll', $),
                    (i = setTimeout(function () {
                      G ||
                        (clearTimeout(i),
                        (i = B),
                        (te || rt) && Mt(!1),
                        Se() || yn(g, us),
                        Fn('onScrollStop', $))
                    }, f)))
                }
                W
                  ? (dr > 9 || !vr
                      ? ht(cr, 'input', d)
                      : ht(cr, [qs, As], [D, j]),
                    ht(cr, [Kn, 'drop', _, _ + 'out'], [b, x, L, q]))
                  : ht(Ar, Qs, rr),
                  ht(nr, Kn, ir, !0)
              }
              function Ta(r) {
                var t = function (_) {
                  var d = _ ? ni : ti,
                    b = Yt(At + on + d, !0),
                    x = Yt(Fa, b),
                    L = Yt(Za, b)
                  return (
                    !Ir && !r && (b.append(x), x.append(L)),
                    {_scrollbar: b, _track: x, _handle: L}
                  )
                }
                function a(_) {
                  var d = nt(_),
                    b = d._scrollbar,
                    x = d._track,
                    L = d._handle
                  Ir && F
                    ? S([b, x, L], function (q, D) {
                        yn(D.removeAttr(c.s), Xs)
                      })
                    : Ft(b || t(_)._scrollbar)
                }
                var i, f
                r
                  ? (a(!0), a())
                  : ((i = t(!0)),
                    (f = t()),
                    (de = i._scrollbar),
                    (ds = i._track),
                    (Je = i._handle),
                    (ye = f._scrollbar),
                    (ys = f._track),
                    (Ze = f._handle),
                    Ir || (Gn.after(ye), Gn.after(de)))
              }
              function wc(r) {
                var t = nt(r),
                  a = t._info,
                  i = Xe.top !== Xe,
                  f = t._x_y,
                  _ = t._X_Y,
                  d = Kn + t._Left_Top,
                  b = 'active',
                  x = 'snapHandle',
                  L = 'click',
                  q = 1,
                  D = [16, 17],
                  j,
                  rr,
                  ir,
                  $
                function ur(E) {
                  return dr && i ? E['screen' + _] : P.page(E)[f]
                }
                function tr(E) {
                  return Sr.scrollbars[E]
                }
                function Hr() {
                  q = 0.5
                }
                function xn() {
                  q = 1
                }
                function Yr(E) {
                  P.stpP(E)
                }
                function wn(E) {
                  Z(E.keyCode, D) > -1 && Hr()
                }
                function en(E) {
                  Z(E.keyCode, D) > -1 && xn()
                }
                function rn(E) {
                  var kr = E.originalEvent || E,
                    Or = kr.touches !== B
                  return zr || G || Se() || !na || (Or && !tr('touchSupport'))
                    ? !1
                    : P.mBtn(E) === 1 || Or
                }
                function Cr(E) {
                  if (rn(E)) {
                    var kr = a._trackLength,
                      Or = a._handleLength,
                      Zn = a._maxScroll,
                      Jt = (ur(E) - ir) * $,
                      Ne = Jt / (kr - Or),
                      Wn = Zn * Ne
                    ;(Wn = isFinite(Wn) ? Wn : 0),
                      pr && r && !N.i && (Wn *= -1),
                      nr[d](A.round(rr + Wn)),
                      ee && vt(r, rr + Wn),
                      y || P.prvD(E)
                  } else Qr(E)
                }
                function Qr(E) {
                  if (
                    ((E = E || E.originalEvent),
                    Rn(bt, [Qe, Ae, qs, As, ge], [Cr, Qr, wn, en, je], !0),
                    P.rAF()(function () {
                      Rn(bt, L, Yr, !0, {_capture: !0})
                    }),
                    ee && vt(r, !0),
                    (ee = !1),
                    yn(ve, _e),
                    yn(t._handle, b),
                    yn(t._track, b),
                    yn(t._scrollbar, b),
                    (rr = B),
                    (ir = B),
                    ($ = 1),
                    xn(),
                    j !== B && (H.scrollStop(), clearTimeout(j), (j = B)),
                    E)
                  ) {
                    var kr = Yn[c.bCR](),
                      Or =
                        E.clientX >= kr.left &&
                        E.clientX <= kr.right &&
                        E.clientY >= kr.top &&
                        E.clientY <= kr.bottom
                    Or || Hc(), (te || rt) && Mt(!1)
                  }
                }
                function nn(E) {
                  rn(E) && dt(E)
                }
                function dt(E) {
                  ;(rr = nr[d]()),
                    (rr = isNaN(rr) ? 0 : rr),
                    ((pr && r && !N.n) || !pr) && (rr = rr < 0 ? 0 : rr),
                    ($ = Pa()[f]),
                    (ir = ur(E)),
                    (ee = !tr(x)),
                    Vr(ve, _e),
                    Vr(t._handle, b),
                    Vr(t._scrollbar, b),
                    Rn(bt, [Qe, Ae, ge], [Cr, Qr, je]),
                    P.rAF()(function () {
                      Rn(bt, L, Yr, !1, {_capture: !0})
                    }),
                    (dr || !Xr) && P.prvD(E),
                    P.stpP(E)
                }
                function gr(E) {
                  if (rn(E)) {
                    var kr =
                        t._info._handleLength /
                        Math.round(
                          A.min(1, mr[t._w_h] / me[t._w_h]) *
                            t._info._trackLength
                        ),
                      Or = A.round(mr[t._w_h] * kr),
                      Zn = 270 * kr,
                      Jt = 400 * kr,
                      Ne = t._track.offset()[t._left_top],
                      Wn = E.ctrlKey,
                      It = E.shiftKey,
                      Et = It && Wn,
                      Xn = !0,
                      rs = 'linear',
                      Vn,
                      In,
                      Zt = function (ln) {
                        ee && vt(r, ln)
                      },
                      Cn = function () {
                        Zt(), dt(E)
                      },
                      Br = function () {
                        if (!G) {
                          var ln = (ir - Ne) * $,
                            _n = a._handleOffset,
                            fr = a._trackLength,
                            st = a._handleLength,
                            se = a._maxScroll,
                            Me = a._currentScroll,
                            Xt = Zn * q,
                            Ht = Xn ? A.max(Jt, Xt) : Xt,
                            sr = se * ((ln - st / 2) / (fr - st)),
                            pn = pr && r && ((!N.i && !N.n) || $t),
                            Vt = pn ? _n < ln : _n > ln,
                            Mr = {},
                            hn = {
                              easing: rs,
                              step: function (at) {
                                ee && (nr[d](at), vt(r, at))
                              },
                            }
                          ;(sr = isFinite(sr) ? sr : 0),
                            (sr = pr && r && !N.i ? se - sr : sr),
                            It
                              ? (nr[d](sr),
                                Et
                                  ? ((sr = nr[d]()),
                                    nr[d](Me),
                                    (sr = pn && N.i ? se - sr : sr),
                                    (sr = pn && N.n ? -sr : sr),
                                    (Mr[f] = sr),
                                    H.scroll(
                                      Mr,
                                      Dn(hn, {duration: 130, complete: Cn})
                                    ))
                                  : Cn())
                              : ((Vn = Xn ? Vt : Vn),
                                (In = pn
                                  ? Vn
                                    ? _n + st >= ln
                                    : _n <= ln
                                  : Vn
                                  ? _n <= ln
                                  : _n + st >= ln),
                                In
                                  ? (clearTimeout(j),
                                    H.scrollStop(),
                                    (j = B),
                                    Zt(!0))
                                  : ((j = setTimeout(Br, Ht)),
                                    (Mr[f] = (Vn ? '-=' : '+=') + Or),
                                    H.scroll(Mr, Dn(hn, {duration: Xt}))),
                                (Xn = !1))
                        }
                      }
                    Wn && Hr(),
                      ($ = Pa()[f]),
                      (ir = P.page(E)[f]),
                      (ee = !tr(x)),
                      Vr(ve, _e),
                      Vr(t._track, b),
                      Vr(t._scrollbar, b),
                      Rn(bt, [Ae, qs, As, ge], [Qr, wn, en, je]),
                      Br(),
                      P.prvD(E),
                      P.stpP(E)
                  }
                }
                function et(E) {
                  ;(la = !0), (te || rt) && Mt(!0)
                }
                function Tr(E) {
                  ;(la = !1), (te || rt) && Mt(!1)
                }
                function br(E) {
                  P.stpP(E)
                }
                ht(t._handle, Ee, nn),
                  ht(t._track, [Ee, za, Ua], [gr, et, Tr]),
                  ht(t._scrollbar, Ee, br),
                  s &&
                    ht(t._scrollbar, Qs, function (E) {
                      E.target === t._scrollbar[0] && (La(r), vt(r))
                    })
              }
              function Wc(r, t, a) {
                var i = r ? Ra : qa,
                  f = r ? de : ye
                tt(g, i, !t), tt(f, Va, !a)
              }
              function Mt(r, t) {
                if ((clearTimeout(Mc), r)) yn(de, $e), yn(ye, $e)
                else {
                  var a,
                    i = 'active',
                    f = function () {
                      !la &&
                        !G &&
                        ((a = Je.hasClass(i) || Ze.hasClass(i)),
                        !a && (te || rt || be) && Vr(de, $e),
                        !a && (te || rt || be) && Vr(ye, $e))
                    }
                  ua > 0 && t !== !0 ? (Mc = setTimeout(f, ua)) : f()
                }
              }
              function La(r) {
                var t = {},
                  a = nt(r),
                  i = a._info,
                  f = 1e6,
                  _ = A.min(1, mr[a._w_h] / me[a._w_h])
                ;(t[a._width_height] = A.floor(_ * 100 * f) / f + '%'),
                  Se() || a._handle.css(t),
                  (i._handleLength = a._handle[0]['offset' + a._Width_Height]),
                  (i._handleLengthRatio = _)
              }
              function vt(r, t) {
                var a = k(t) == v.b,
                  i = 250,
                  f = pr && r,
                  _ = nt(r),
                  d = _._info,
                  b = 'translate(',
                  x = qn._cssProperty('transform'),
                  L = qn._cssProperty('transition'),
                  q = r ? nr[un]() : nr[fn](),
                  D = t === B || a ? q : t,
                  j = d._handleLength,
                  rr = _._track[0]['offset' + _._Width_Height],
                  ir = rr - j,
                  $ = {},
                  ur,
                  tr,
                  Hr =
                    (xe[Kn + _._Width_Height] -
                      xe['client' + _._Width_Height]) *
                    (N.n && f ? -1 : 1),
                  xn = function (Qr) {
                    return isNaN(Qr / Hr) ? 0 : A.max(0, A.min(1, Qr / Hr))
                  },
                  Yr = function (Qr) {
                    var nn = ir * Qr
                    return (
                      (nn = isNaN(nn) ? 0 : nn),
                      (nn = f && !N.i ? rr - j - nn : nn),
                      (nn = A.max(0, nn)),
                      nn
                    )
                  },
                  wn = xn(q),
                  en = xn(D),
                  rn = Yr(en),
                  Cr = Yr(wn)
                ;(d._maxScroll = Hr),
                  (d._currentScroll = q),
                  (d._currentScrollRatio = wn),
                  u
                    ? ((ur = f ? -(rr - j - rn) : rn),
                      (tr = r ? b + ur + 'px, 0)' : b + '0, ' + ur + 'px)'),
                      ($[x] = tr),
                      s &&
                        ($[L] =
                          a && A.abs(rn - d._handleOffset) > 1
                            ? pi(_._handle) + ', ' + (x + on + i + 'ms')
                            : Q))
                    : ($[_._left_top] = rn),
                  Se() ||
                    (_._handle.css($),
                    u &&
                      s &&
                      a &&
                      _._handle.one(Qs, function () {
                        G || _._handle.css(L, Q)
                      })),
                  (d._handleOffset = rn),
                  (d._snappedHandleOffset = Cr),
                  (d._trackLength = rr)
              }
              function zc(r, t) {
                var a = t ? 'removeClass' : 'addClass',
                  i = r ? ds : Je,
                  f = r ? ys : Ze,
                  _ = r ? Ja : Xa
                i[a](_), f[a](_)
              }
              function nt(r) {
                return {
                  _width_height: r ? J : Ur,
                  _Width_Height: r ? 'Width' : 'Height',
                  _left_top: r ? hr : qr,
                  _Left_Top: r ? 'Left' : 'Top',
                  _x_y: r ? Re : qe,
                  _X_Y: r ? 'X' : 'Y',
                  _w_h: r ? 'w' : 'h',
                  _l_t: r ? 'l' : 't',
                  _track: r ? ds : ys,
                  _handle: r ? Je : Ze,
                  _scrollbar: r ? de : ye,
                  _info: r ? Tn : Ln,
                }
              }
              function Na(r) {
                ;(On = On || Yt(Zs, !0)),
                  r
                    ? Ir && F
                      ? yn(On.removeAttr(c.s), Xs)
                      : Ft(On)
                    : Ir || g.append(On)
              }
              function _i() {
                var r = Xe.top !== Xe,
                  t = {},
                  a = {},
                  i = {},
                  f
                function _(L) {
                  if (b(L)) {
                    var q = x(L),
                      D = {}
                    ;(_a || Ms) && (D[J] = a.w + (q.x - t.x) * i.x),
                      (pa || Ms) && (D[Ur] = a.h + (q.y - t.y) * i.y),
                      g.css(D),
                      P.stpP(L)
                  } else d(L)
                }
                function d(L) {
                  var q = L !== B
                  Rn(bt, [ge, Qe, Ae], [je, _, d], !0),
                    yn(ve, _e),
                    On.releaseCapture && On.releaseCapture(),
                    q && (f && Ic(), H.update(jr)),
                    (f = !1)
                }
                function b(L) {
                  var q = L.originalEvent || L,
                    D = q.touches !== B
                  return zr || G ? !1 : P.mBtn(L) === 1 || D
                }
                function x(L) {
                  return dr && r ? {x: L.screenX, y: L.screenY} : P.page(L)
                }
                ht(On, Ee, function (L) {
                  b(L) &&
                    !Ns &&
                    (Lt && ((f = !0), ha()),
                    (t = x(L)),
                    (a.w = Yn[c.oW] - (Rr ? 0 : Nr)),
                    (a.h = Yn[c.oH] - (Rr ? 0 : An)),
                    (i = Pa()),
                    Rn(bt, [ge, Qe, Ae], [je, _, d]),
                    Vr(ve, _e),
                    On.setCapture && On.setCapture(),
                    P.prvD(L),
                    P.stpP(L))
                })
              }
              function Fn(r, t, a) {
                if (a !== !1)
                  if (F) {
                    var i = Sr.callbacks[r],
                      f = r,
                      _
                    f.substr(0, 2) === 'on' &&
                      (f = f.substr(2, 1).toLowerCase() + f.substr(3)),
                      k(i) == v.f && i.call(H, t),
                      S(Qt, function () {
                        ;(_ = this), k(_.on) == v.f && _.on(f, t)
                      })
                  } else G || Vs.push({n: r, a: t})
              }
              function Te(r, t, a) {
                ;(t = t || Q),
                  (a = a || [Q, Q, Q, Q]),
                  (r[t + qr] = a[0]),
                  (r[t + cn] = a[1]),
                  (r[t + Hn] = a[2]),
                  (r[t + hr] = a[3])
              }
              function Ma(r, t, a, i) {
                return (
                  (t = t || Q),
                  (r = r || Q),
                  {
                    t: i ? 0 : Pt(g.css(r + qr + t)),
                    r: a ? 0 : Pt(g.css(r + cn + t)),
                    b: i ? 0 : Pt(g.css(r + Hn + t)),
                    l: a ? 0 : Pt(g.css(r + hr + t)),
                  }
                )
              }
              function pi(r) {
                var t = qn._cssProperty('transition'),
                  a = r.css(t)
                if (a) return a
                for (
                  var i = '\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*',
                    f = new RegExp(i),
                    _ = new RegExp('^(' + i + ')+$'),
                    d = 'property duration timing-function delay'.split(' '),
                    b = [],
                    x,
                    L,
                    q = 0,
                    D,
                    j = function (rr) {
                      if (((x = []), !rr.match(_))) return rr
                      for (; rr.match(f); )
                        x.push(RegExp.$1), (rr = rr.replace(f, Q))
                      return x
                    };
                  q < d[c.l];
                  q++
                )
                  for (L = j(r.css(t + '-' + d[q])), D = 0; D < L[c.l]; D++)
                    b[D] = (b[D] ? b[D] + on : Q) + L[D]
                return b.join(', ')
              }
              function Uc(r, t) {
                var a,
                  i,
                  f,
                  _ = function (d, b) {
                    if (((f = ''), b && typeof d == v.s))
                      for (i = d.split(on), a = 0; a < i[c.l]; a++)
                        f += '|' + i[a] + '$'
                    return f
                  }
                return new RegExp(
                  '(^' + Mn + '([-_].+|)$)' + _(Ge, r) + _(ta, t),
                  'g'
                )
              }
              function Pa() {
                var r = St[c.bCR]()
                return {
                  x: (u && 1 / (A.round(r.width) / St[c.oW])) || 1,
                  y: (u && 1 / (A.round(r.height) / St[c.oH])) || 1,
                }
              }
              function Bc(r) {
                var t = 'ownerDocument',
                  a = 'HTMLElement',
                  i = (r && r[t] && r[t].parentWindow) || er
                return typeof i[a] == v.o
                  ? r instanceof i[a]
                  : r &&
                      typeof r == v.o &&
                      r !== null &&
                      r.nodeType === 1 &&
                      typeof r.nodeName == v.s
              }
              function hi(r, t) {
                var a = [],
                  i = [],
                  f,
                  _
                for (f = 0; f < r.length; f++) a[r[f]] = !0
                for (f = 0; f < t.length; f++)
                  a[t[f]] ? delete a[t[f]] : (a[t[f]] = !0)
                for (_ in a) i.push(_)
                return i
              }
              function Pt(r, t) {
                var a = t ? parseFloat(r) : parseInt(r, 10)
                return isNaN(a) ? 0 : a
              }
              function vi() {
                var r = jt.selectionStart
                if (r !== B) {
                  var t = cr.val(),
                    a = t[c.l],
                    i = t.split(`
`),
                    f = i[c.l],
                    _ = t.substr(0, r).split(`
`),
                    d = 0,
                    b = 0,
                    x = _[c.l],
                    L = _[_[c.l] - 1][c.l],
                    q,
                    D
                  for (D = 0; D < i[c.l]; D++)
                    (q = i[D][c.l]), q > b && ((d = D + 1), (b = q))
                  return {
                    _cursorRow: x,
                    _cursorColumn: L,
                    _rows: f,
                    _columns: b,
                    _widestRow: d,
                    _cursorPosition: r,
                    _cursorMax: a,
                  }
                }
              }
              function Se() {
                return Ss && X.x && X.y
              }
              function Rc() {
                return W ? Kt[0] : jn
              }
              function Jn(r, t) {
                return (
                  '<div ' +
                  (r
                    ? k(r) == v.s
                      ? 'class="' + r + '"'
                      : (function () {
                          var a,
                            i = Q
                          if (R.isPlainObject(r))
                            for (a in r)
                              i +=
                                (a === 'c' ? 'class' : a) + '="' + r[a] + '" '
                          return i
                        })()
                    : Q) +
                  '>' +
                  (t || Q) +
                  '</div>'
                )
              }
              function Yt(r, t) {
                var a = k(t) == v.b,
                  i = a ? g : t || g
                return Ir && !i[c.l]
                  ? null
                  : Ir
                  ? i[a ? 'children' : 'find']($n + r.replace(/\s/g, $n)).eq(0)
                  : R(Jn(r))
              }
              function Ia(r, t) {
                for (var a = t.split($n), i = 0, f; i < a.length; i++) {
                  if (!r[c.hOP](a[i])) return
                  ;(f = r[a[i]]), i < a.length && k(f) == v.o && (r = f)
                }
                return f
              }
              function di(r, t, a) {
                for (
                  var i = t.split($n), f = i.length, _ = 0, d = {}, b = d;
                  _ < f;
                  _++
                )
                  d = d[i[_]] = _ + 1 < f ? {} : a
                R.extend(r, b, !0)
              }
              function qc(r) {
                var t = Sr.updateOnLoad
                ;(t = k(t) == v.s ? t.split(on) : t), P.isA(t) && !G && S(t, r)
              }
              function Le(r, t, a) {
                if (a) return a
                if (k(r) == v.o && k(t) == v.o) {
                  for (var i in r)
                    if (i !== 'c')
                      if (r[c.hOP](i) && t[c.hOP](i)) {
                        if (Le(r[i], t[i])) return !0
                      } else return !0
                } else return r !== t
                return !1
              }
              function Dn() {
                return R.extend.apply(
                  this,
                  [!0].concat([].slice.call(arguments))
                )
              }
              function Vr(r, t) {
                return _r.addClass.call(r, t)
              }
              function yn(r, t) {
                return _r.removeClass.call(r, t)
              }
              function tt(r, t, a) {
                return a ? Vr(r, t) : yn(r, t)
              }
              function Ft(r) {
                return _r.remove.call(r)
              }
              function we(r, t) {
                return _r.find.call(r, t).eq(0)
              }
              ;(H.sleep = function () {
                zr = !0
              }),
                (H.update = function (r) {
                  if (!G) {
                    var t,
                      a,
                      i = k(r) == v.s,
                      f,
                      _,
                      d
                    return (
                      i
                        ? r === jr
                          ? ((t = ui()),
                            (a = oi()),
                            (f = t || a),
                            f &&
                              Nt({
                                _contentSizeChanged: a,
                                _changedOptions: F ? B : Sr,
                              }))
                          : r === zs
                          ? Lt
                            ? ((_ = sa(Ts.takeRecords())),
                              (d = aa(Ls.takeRecords())))
                            : (_ = H.update(jr))
                          : r === 'zoom' &&
                            Nt({_hostSizeChanged: !0, _contentSizeChanged: !0})
                        : ((r = zr || r),
                          (zr = !1),
                          (!H.update(zs) || r) && Nt({_force: r})),
                      Dc(),
                      f || _ || d
                    )
                  }
                }),
                (H.options = function (r, t) {
                  var a = {},
                    i
                  if (R.isEmptyObject(r) || !R.isPlainObject(r))
                    if (k(r) == v.s)
                      if (arguments.length > 1) di(a, r, t), (i = ma(a))
                      else return Ia(Fe, r)
                    else return Fe
                  else i = ma(r)
                  R.isEmptyObject(i) || Nt({_changedOptions: i})
                }),
                (H.destroy = function () {
                  if (!G) {
                    Wr.remove(H), ha(), Ps(pt), Ps(_t)
                    for (var r in Qt) H.removeExt(r)
                    for (; ia[c.l] > 0; ) ia.pop()()
                    da(!0),
                      Pn && Ft(Pn),
                      gt && Ft(gt),
                      $r && Ft(_t),
                      Ta(!0),
                      Na(!0),
                      ba(!0)
                    for (var t = 0; t < he[c.l]; t++) R(he[t]).off(Gs, va)
                    ;(he = B), (G = !0), (zr = !0), Bt(M, 0), Fn('onDestroyed')
                  }
                }),
                (H.scroll = function (r, t, a, i) {
                  if (arguments.length === 0 || r === B) {
                    var f = Tn,
                      _ = Ln,
                      d = $t && pr && N.i,
                      b = $t && pr && N.n,
                      x = f._currentScroll,
                      L = f._currentScrollRatio,
                      q = f._maxScroll
                    return (
                      (L = d ? 1 - L : L),
                      (x = d ? q - x : x),
                      (x *= b ? -1 : 1),
                      (q *= b ? -1 : 1),
                      {
                        position: {x, y: _._currentScroll},
                        ratio: {x: L, y: _._currentScrollRatio},
                        max: {x: q, y: _._maxScroll},
                        handleOffset: {x: f._handleOffset, y: _._handleOffset},
                        handleLength: {x: f._handleLength, y: _._handleLength},
                        handleLengthRatio: {
                          x: f._handleLengthRatio,
                          y: _._handleLengthRatio,
                        },
                        trackLength: {x: f._trackLength, y: _._trackLength},
                        snappedHandleOffset: {
                          x: f._snappedHandleOffset,
                          y: _._snappedHandleOffset,
                        },
                        isRTL: pr,
                        isRTLNormalized: $t,
                      }
                    )
                  }
                  H.update(zs)
                  var D = $t,
                    j = [Re, hr, 'l'],
                    rr = [qe, qr, 't'],
                    ir = ['+=', '-=', '*=', '/='],
                    $ = k(t) == v.o,
                    ur = $ ? t.complete : i,
                    tr,
                    Hr = {},
                    xn = {},
                    Yr,
                    wn,
                    en,
                    rn = 'end',
                    Cr = 'begin',
                    Qr = 'center',
                    nn = 'nearest',
                    dt = 'always',
                    gr = 'never',
                    et = 'ifneeded',
                    Tr = c.l,
                    br,
                    E,
                    kr,
                    Or,
                    Zn,
                    Jt = [Re, qe, 'xy', 'yx'],
                    Ne = [Cr, rn, Qr, nn],
                    Wn = [dt, gr, et],
                    It = r[c.hOP]('el'),
                    Et = It ? r.el : r,
                    Xn = Et instanceof R || fe ? Et instanceof fe : !1,
                    rs = Xn ? !1 : Bc(Et),
                    Vn = function () {
                      Yr && vt(!0), wn && vt(!1)
                    },
                    In =
                      k(ur) != v.f
                        ? B
                        : function () {
                            Vn(), ur()
                          }
                  function Zt(z, U) {
                    for (tr = 0; tr < U[Tr]; tr++) if (z === U[tr]) return !0
                    return !1
                  }
                  function Cn(z, U) {
                    var Fr = z ? j : rr
                    if (
                      ((U = k(U) == v.s || k(U) == v.n ? [U, U] : U), P.isA(U))
                    )
                      return z ? U[0] : U[1]
                    if (k(U) == v.o) {
                      for (tr = 0; tr < Fr[Tr]; tr++)
                        if (Fr[tr] in U) return U[Fr[tr]]
                    }
                  }
                  function Br(z, U) {
                    var Fr = k(U) == v.s,
                      En,
                      yr,
                      it = z ? Tn : Ln,
                      Gr = it._currentScroll,
                      zn = it._maxScroll,
                      ae = ' * ',
                      Dr,
                      ot = pr && z,
                      Ot = ot && N.n && !D,
                      sn = 'replace',
                      Ct = eval,
                      Dt
                    if (
                      (Fr
                        ? (U[Tr] > 2 &&
                            ((Dt = U.substr(0, 2)),
                            Z(Dt, ir) > -1 && (En = Dt)),
                          (U = En ? U.substr(2) : U),
                          (U = U[sn](/min/g, 0)
                            [sn](/</g, 0)
                            [sn](/max/g, (Ot ? '-' : Q) + qt)
                            [sn](/>/g, (Ot ? '-' : Q) + qt)
                            [sn](/px/g, Q)
                            [sn](/%/g, ae + (zn * (ot && N.n ? -1 : 1)) / 100)
                            [sn](/vw/g, ae + mr.w)
                            [sn](/vh/g, ae + mr.h)),
                          (yr = Pt(isNaN(U) ? Pt(Ct(U), !0).toFixed() : U)))
                        : (yr = U),
                      yr !== B && !isNaN(yr) && k(yr) == v.n)
                    ) {
                      var ce = D && ot,
                        ut = Gr * (ce && N.n ? -1 : 1),
                        wt = ce && N.i,
                        Ea = ce && N.n
                      switch (((ut = wt ? zn - ut : ut), En)) {
                        case '+=':
                          Dr = ut + yr
                          break
                        case '-=':
                          Dr = ut - yr
                          break
                        case '*=':
                          Dr = ut * yr
                          break
                        case '/=':
                          Dr = ut / yr
                          break
                        default:
                          Dr = yr
                          break
                      }
                      ;(Dr = wt ? zn - Dr : Dr),
                        (Dr *= Ea ? -1 : 1),
                        (Dr =
                          ot && N.n
                            ? A.min(0, A.max(zn, Dr))
                            : A.max(0, A.min(zn, Dr)))
                    }
                    return Dr === Gr ? B : Dr
                  }
                  function ln(z, U, Fr, En) {
                    var yr = [Fr, Fr],
                      it = k(z),
                      Gr,
                      zn
                    if (it == U) z = [z, z]
                    else if (it == v.a) {
                      if (((Gr = z[Tr]), Gr > 2 || Gr < 1)) z = yr
                      else
                        for (Gr === 1 && (z[1] = Fr), tr = 0; tr < Gr; tr++)
                          if (((zn = z[tr]), k(zn) != U || !Zt(zn, En))) {
                            z = yr
                            break
                          }
                    } else
                      it == v.o ? (z = [z[Re] || Fr, z[qe] || Fr]) : (z = yr)
                    return {x: z[0], y: z[1]}
                  }
                  function _n(z) {
                    var U = [],
                      Fr,
                      En,
                      yr = [qr, cn, Hn, hr]
                    for (tr = 0; tr < z[Tr] && tr !== yr[Tr]; tr++)
                      (Fr = z[tr]),
                        (En = k(Fr)),
                        En == v.b
                          ? U.push(Fr ? Pt(Zn.css(tn + yr[tr])) : 0)
                          : U.push(En == v.n ? Fr : 0)
                    return U
                  }
                  if (Xn || rs) {
                    var fr = It ? r.margin : 0,
                      st = It ? r.axis : 0,
                      se = It ? r.scroll : 0,
                      Me = It ? r.block : 0,
                      Xt = [0, 0, 0, 0],
                      Ht = k(fr),
                      sr
                    if (((Zn = Xn ? Et : R(Et)), Zn[Tr] > 0)) {
                      Ht == v.n || Ht == v.b
                        ? (fr = _n([fr, fr, fr, fr]))
                        : Ht == v.a
                        ? ((sr = fr[Tr]),
                          sr === 2
                            ? (fr = _n([fr[0], fr[1], fr[0], fr[1]]))
                            : sr >= 4
                            ? (fr = _n(fr))
                            : (fr = Xt))
                        : Ht == v.o
                        ? (fr = _n([fr[qr], fr[cn], fr[Hn], fr[hr]]))
                        : (fr = Xt),
                        (br = Zt(st, Jt) ? st : 'xy'),
                        (E = ln(se, v.s, dt, Wn)),
                        (kr = ln(Me, v.s, Cr, Ne)),
                        (Or = fr)
                      var pn = {l: Tn._currentScroll, t: Ln._currentScroll},
                        Vt = Gn.offset(),
                        Mr = Zn.offset(),
                        hn = {
                          x: E.x == gr || br == qe,
                          y: E.y == gr || br == Re,
                        }
                      ;(Mr[qr] -= Or[0]), (Mr[hr] -= Or[3])
                      var at = {
                        x: A.round(Mr[hr] - Vt[hr] + pn.l),
                        y: A.round(Mr[qr] - Vt[qr] + pn.t),
                      }
                      if (
                        (pr &&
                          (!N.n &&
                            !N.i &&
                            (at.x = A.round(Vt[hr] - Mr[hr] + pn.l)),
                          N.n && D && (at.x *= -1),
                          N.i &&
                            D &&
                            (at.x = A.round(
                              Vt[hr] - Mr[hr] + (Tn._maxScroll - pn.l)
                            ))),
                        kr.x != Cr ||
                          kr.y != Cr ||
                          E.x == et ||
                          E.y == et ||
                          pr)
                      ) {
                        var ns = Zn[0],
                          Is = u
                            ? ns[c.bCR]()
                            : {width: ns[c.oW], height: ns[c.oH]},
                          ct = {
                            w: Is[J] + Or[3] + Or[1],
                            h: Is[Ur] + Or[0] + Or[2],
                          },
                          kt = function (z) {
                            var U = nt(z),
                              Fr = U._w_h,
                              En = U._left_top,
                              yr = U._x_y,
                              it = kr[yr] == (z && pr ? Cr : rn),
                              Gr = kr[yr] == Qr,
                              zn = kr[yr] == nn,
                              ae = E[yr] == gr,
                              Dr = E[yr] == et,
                              ot = mr[Fr],
                              Ot = Vt[En],
                              sn = ct[Fr],
                              Ct = Mr[En],
                              Dt = Gr ? 2 : 1,
                              ce = Ct + sn / 2,
                              ut = Ot + ot / 2,
                              wt = sn <= ot && Ct >= Ot && Ct + sn <= Ot + ot
                            ae
                              ? (hn[yr] = !0)
                              : hn[yr] ||
                                ((zn || Dr) &&
                                  ((hn[yr] = Dr ? wt : !1),
                                  (it = sn < ot ? ce > ut : ce < ut)),
                                (at[yr] -=
                                  it || Gr
                                    ? (ot / Dt - sn / Dt) *
                                      (z && pr && D ? -1 : 1)
                                    : 0))
                          }
                        kt(!0), kt(!1)
                      }
                      hn.y && delete at.y, hn.x && delete at.x, (r = at)
                    }
                  }
                  ;(Hr[un] = Br(!0, Cn(!0, r))),
                    (Hr[fn] = Br(!1, Cn(!1, r))),
                    (Yr = Hr[un] !== B),
                    (wn = Hr[fn] !== B),
                    (Yr || wn) && (t > 0 || $)
                      ? $
                        ? ((t.complete = In), nr.animate(Hr, t))
                        : ((en = {duration: t, complete: In}),
                          P.isA(a) || R.isPlainObject(a)
                            ? ((xn[un] = a[0] || a.x),
                              (xn[fn] = a[1] || a.y),
                              (en.specialEasing = xn))
                            : (en.easing = a),
                          nr.animate(Hr, en))
                      : (Yr && nr[un](Hr[un]), wn && nr[fn](Hr[fn]), Vn())
                }),
                (H.scrollStop = function (r, t, a) {
                  return nr.stop(r, t, a), H
                }),
                (H.getElements = function (r) {
                  var t = {
                    target: jt,
                    host: Yn,
                    padding: St,
                    viewport: xe,
                    content: jn,
                    scrollbarHorizontal: {
                      scrollbar: de[0],
                      track: ds[0],
                      handle: Je[0],
                    },
                    scrollbarVertical: {
                      scrollbar: ye[0],
                      track: ys[0],
                      handle: Ze[0],
                    },
                    scrollbarCorner: On[0],
                  }
                  return k(r) == v.s ? Ia(t, r) : t
                }),
                (H.getState = function (r) {
                  function t(i) {
                    if (!R.isPlainObject(i)) return i
                    var f = Dn({}, i),
                      _ = function (d, b) {
                        f[c.hOP](d) && ((f[b] = f[d]), delete f[d])
                      }
                    return _('w', J), _('h', Ur), delete f.c, f
                  }
                  var a = {
                    destroyed: !!t(G),
                    sleeping: !!t(zr),
                    autoUpdate: t(!Lt),
                    widthAuto: t(Sn),
                    heightAuto: t(re),
                    padding: t(js),
                    overflowAmount: t(De),
                    hideOverflow: t(Ce),
                    hasOverflow: t(Tt),
                    contentScrollSize: t(me),
                    viewportSize: t(mr),
                    hostSize: t(Ve),
                    documentMixed: t(Xr),
                  }
                  return k(r) == v.s ? Ia(a, r) : a
                }),
                (H.ext = function (r) {
                  var t,
                    a = ei.split(' '),
                    i = 0
                  if (k(r) == v.s) {
                    if (Qt[c.hOP](r))
                      for (t = Dn({}, Qt[r]); i < a.length; i++) delete t[a[i]]
                  } else {
                    t = {}
                    for (i in Qt) t[i] = Dn({}, H.ext(i))
                  }
                  return t
                }),
                (H.addExt = function (r, t) {
                  var a = T.extension(r),
                    i,
                    f,
                    _,
                    d,
                    b = !0
                  if (a) {
                    if (Qt[c.hOP](r)) return H.ext(r)
                    if (
                      ((i = a.extensionFactory.call(
                        H,
                        Dn({}, a.defaultOptions),
                        R,
                        P
                      )),
                      i &&
                        ((_ = i.contract),
                        k(_) == v.f && ((d = _(er)), (b = k(d) == v.b ? d : b)),
                        b))
                    )
                      return (
                        (Qt[r] = i),
                        (f = i.added),
                        k(f) == v.f && f(t),
                        H.ext(r)
                      )
                  } else
                    console.warn(
                      'A extension with the name "' + r + `" isn't registered.`
                    )
                }),
                (H.removeExt = function (r) {
                  var t = Qt[r],
                    a
                  return t
                    ? (delete Qt[r], (a = t.removed), k(a) == v.f && a(), !0)
                    : !1
                })
              function yi(r, t, a) {
                ;(Sa = K.defaultOptions),
                  (C = K.nativeScrollbarStyling),
                  (o = Dn({}, K.nativeScrollbarSize)),
                  (X = Dn({}, K.nativeScrollbarIsOverlaid)),
                  (Zr = Dn({}, K.overlayScrollbarDummySize)),
                  (N = Dn({}, K.rtlScrollBehavior)),
                  ma(Dn({}, Sa, t)),
                  (e = K.cssCalc),
                  (dr = K.msie),
                  (vr = K.autoUpdateRecommended),
                  (s = K.supportTransition),
                  (u = K.supportTransform),
                  (y = K.supportPassiveEvents),
                  (O = K.supportResizeObserver),
                  (w = K.supportMutationObserver),
                  K.restrictedMeasuring,
                  (bt = R(r.ownerDocument)),
                  (ke = bt[0]),
                  (vs = R(ke.defaultView || ke.parentWindow)),
                  (Xe = vs[0]),
                  (He = we(bt, 'html')),
                  (ve = we(He, 'body')),
                  (cr = R(r)),
                  (jt = cr[0]),
                  (W = cr.is('textarea')),
                  (V = cr.is('body')),
                  (Xr = ke !== Pr),
                  (Ir = W
                    ? cr.hasClass(fs) && cr.parent().hasClass(Js)
                    : cr.hasClass(Mn) && cr.children($n + Ys)[c.l])
                var i, f
                return X.x && X.y && !Sr.nativeScrollbarsOverlaid.initialize
                  ? ((F = !0),
                    Fn('onInitializationWithdrawn'),
                    Ir && (ba(!0), Ta(!0), Na(!0)),
                    (F = !1),
                    (G = !0),
                    (zr = !0),
                    H)
                  : (V &&
                      ((i = {}),
                      (i.l = A.max(cr[un](), He[un](), vs[un]())),
                      (i.t = A.max(cr[fn](), He[fn](), vs[fn]())),
                      (f = function () {
                        nr.removeAttr(c.ti), Rn(nr, Ee, f, !0, !0)
                      })),
                    ba(),
                    Ta(),
                    Na(),
                    li(),
                    wc(!0),
                    wc(!1),
                    _i(),
                    si(),
                    Ps(pt, ai),
                    V &&
                      (nr[un](i.l)[fn](i.t),
                      Pr.activeElement == r &&
                        xe.focus &&
                        (nr.attr(c.ti, '-1'),
                        xe.focus(),
                        Rn(nr, Ee, f, !1, !0))),
                    H.update(jr),
                    (F = !0),
                    Fn('onInitialized'),
                    S(Vs, function (_, d) {
                      Fn(d.n, d.a)
                    }),
                    (Vs = []),
                    k(a) == v.s && (a = [a]),
                    P.isA(a)
                      ? S(a, function (_, d) {
                          H.addExt(d)
                        })
                      : R.isPlainObject(a) &&
                        S(a, function (_, d) {
                          H.addExt(_, d)
                        }),
                    setTimeout(function () {
                      s && !G && Vr(g, Aa)
                    }, 333),
                    H)
              }
              return T.valid(yi(M, Y, xr)) && Bt(M, H), H
            }
            return (
              (T = er[Ie] =
                function (M, Y, xr) {
                  if (arguments[c.l] === 0) return this
                  var K = [],
                    Wr = R.isPlainObject(Y),
                    k,
                    Z
                  return M
                    ? ((M = M[c.l] != B ? M : [M[0] || M]),
                      h(),
                      M[c.l] > 0 &&
                        (Wr
                          ? R.each(M, function (S, H) {
                              ;(k = H), k !== B && K.push(ar(k, Y, xr, m, n))
                            })
                          : R.each(M, function (S, H) {
                              ;(k = Bt(H)),
                                ((Y === '!' && T.valid(k)) ||
                                  (P.type(Y) == v.f && Y(H, k)) ||
                                  Y === B) &&
                                  K.push(k)
                            }),
                        (Z = K[c.l] === 1 ? K[0] : K)),
                      Z)
                    : Wr || !Y
                    ? Z
                    : K
                }),
              (T.globals = function () {
                h()
                var M = R.extend(!0, {}, m)
                return delete M.msie, M
              }),
              (T.defaultOptions = function (M) {
                h()
                var Y = m.defaultOptions
                if (M === B) return R.extend(!0, {}, Y)
                m.defaultOptions = R.extend(
                  !0,
                  {},
                  Y,
                  l._validate(M, l._template, !0, Y)._default
                )
              }),
              (T.valid = function (M) {
                return M instanceof T && !M.getState().destroyed
              }),
              (T.extension = function (M, Y, xr) {
                var K = P.type(M) == v.s,
                  Wr = arguments[c.l],
                  k = 0
                if (Wr < 1 || !K) return R.extend(!0, {length: p[c.l]}, p)
                if (K) {
                  if (P.type(Y) == v.f)
                    p.push({name: M, extensionFactory: Y, defaultOptions: xr})
                  else
                    for (; k < p[c.l]; k++)
                      if (p[k].name === M)
                        if (Wr > 1) p.splice(k, 1)
                        else return R.extend(!0, {}, p[k])
                }
              }),
              T
            )
          })()
        return (
          fe &&
            fe.fn &&
            (fe.fn.overlayScrollbars = function (T, m) {
              var n = this
              return fe.isPlainObject(T)
                ? (fe.each(n, function () {
                    Ws(this, T, m)
                  }),
                  n)
                : Ws(n, T)
            }),
          Ws
        )
      })
    },
  }),
  is = wi(zi()),
  Ui = ({
    options: Ut = {},
    extensions: ue,
    className: er,
    children: Pr,
    ...B
  }) => {
    let Ie = cs.useRef(),
      v = cs.useRef()
    return (
      cs.useEffect(
        () => (
          (v.current = (0, is.default)(Ie.current, Ut, ue)),
          Vc(v.current, er),
          () => {
            is.default.valid(v.current) &&
              (v.current.destroy(), (v.current = null))
          }
        ),
        []
      ),
      cs.useEffect(() => {
        is.default.valid(v.current) && v.current.options(Ut)
      }, [Ut]),
      cs.useEffect(() => {
        is.default.valid(v.current) && Vc(v.current, er)
      }, [er]),
      lt.createElement(
        'div',
        {className: 'os-host', ...B, ref: Ie},
        lt.createElement('div', {className: 'os-resize-observer-host'}),
        lt.createElement(
          'div',
          {className: 'os-padding'},
          lt.createElement(
            'div',
            {className: 'os-viewport'},
            lt.createElement('div', {className: 'os-content'}, Pr)
          )
        ),
        lt.createElement(
          'div',
          {className: 'os-scrollbar os-scrollbar-horizontal '},
          lt.createElement(
            'div',
            {className: 'os-scrollbar-track'},
            lt.createElement('div', {className: 'os-scrollbar-handle'})
          )
        ),
        lt.createElement(
          'div',
          {className: 'os-scrollbar os-scrollbar-vertical'},
          lt.createElement(
            'div',
            {className: 'os-scrollbar-track'},
            lt.createElement('div', {className: 'os-scrollbar-handle'})
          )
        ),
        lt.createElement('div', {className: 'os-scrollbar-corner'})
      )
    )
  }
function Vc(Ut, ue) {
  if (is.default.valid(Ut)) {
    let {host: er} = Ut.getElements(),
      Pr = new RegExp(
        `(^os-host([-_].+|)$)|${Ut.options().className.replace(/\s/g, '$|')}$`,
        'g'
      ),
      B = er.className
        .split(' ')
        .filter((Ie) => Ie.match(Pr))
        .join(' ')
    er.className = `${B} ${ue || ''}`
  }
}
var Ji = Ui
export {Ui as OverlayScrollbarsComponent, Ji as default}
//# sourceMappingURL=OverlayScrollbars-VAV6LJAB-4fbfcfe2.js.map
