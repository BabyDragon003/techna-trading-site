!(function () {
  var e,
    t,
    i,
    r,
    n,
    s = {
      3145: function (e, t, i) {
        "use strict";
        i.d(t, {
          UZ: function () {
            return s;
          },
          cP: function () {
            return n;
          },
          i_: function () {
            return r;
          },
        });
        const r = new (class {
          constructor() {
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "5.4.8",
            }),
              Object.defineProperty(this, "licenses", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "entitiesById", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "rootElements", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              });
          }
        })();
        function n(e) {
          r.licenses.push(e);
        }
        function s() {
          let e;
          for (; (e = r.rootElements.pop()); ) e.dispose();
        }
      },
      6493: function (e, t, i) {
        "use strict";
        i.d(t, {
          f: function () {
            return Ne;
          },
        });
        var r = i(8777),
          n = i(2036),
          s = i(4431),
          a = i(1706),
          o = i(6881),
          l = i(7449),
          h = i(5071),
          u = i(7652);
        class c {
          constructor() {
            Object.defineProperty(this, "_observer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_targets", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              (this._observer = new ResizeObserver((e) => {
                h.each(e, (e) => {
                  h.each(this._targets, (t) => {
                    t.target === e.target && t.callback();
                  });
                });
              }));
          }
          addTarget(e, t) {
            this._observer.observe(e, { box: "border-box" }),
              this._targets.push({ target: e, callback: t });
          }
          removeTarget(e) {
            this._observer.unobserve(e),
              h.keepIf(this._targets, (t) => t.target !== e);
          }
        }
        class d {
          constructor() {
            Object.defineProperty(this, "_timer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
              Object.defineProperty(this, "_targets", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              });
          }
          addTarget(e, t) {
            if (null === this._timer) {
              let e = null;
              const t = () => {
                const i = Date.now();
                (null === e || i > e + d.delay) &&
                  ((e = i),
                  h.each(this._targets, (e) => {
                    let t = e.target.getBoundingClientRect();
                    (t.width === e.size.width && t.height === e.size.height) ||
                      ((e.size = t), e.callback());
                  })),
                  0 === this._targets.length
                    ? (this._timer = null)
                    : (this._timer = requestAnimationFrame(t));
              };
              this._timer = requestAnimationFrame(t);
            }
            this._targets.push({
              target: e,
              callback: t,
              size: {
                width: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                x: 0,
                y: 0,
              },
            });
          }
          removeTarget(e) {
            h.keepIf(this._targets, (t) => t.target !== e),
              0 === this._targets.length &&
                null !== this._timer &&
                (cancelAnimationFrame(this._timer), (this._timer = null));
          }
        }
        Object.defineProperty(d, "delay", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 200,
        });
        let p = null;
        class f {
          constructor(e, t) {
            Object.defineProperty(this, "_sensor", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_element", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_listener", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_disposed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              (this._sensor =
                (null === p &&
                  (p =
                    "undefined" != typeof ResizeObserver ? new c() : new d()),
                p)),
              (this._element = e),
              (this._listener = u.onZoom(t)),
              this._sensor.addTarget(e, t);
          }
          isDisposed() {
            return this._disposed;
          }
          dispose() {
            this._disposed ||
              ((this._disposed = !0),
              this._sensor.removeTarget(this._element),
              this._listener.dispose());
          }
          get sensor() {
            return this._sensor;
          }
        }
        var g = i(9821),
          m = i(1479),
          b = i(7142),
          _ = i(2876),
          v = i(780),
          y = i(6460),
          w = i(798),
          x = i(6331),
          O = i(256),
          P = i(3100);
        class D extends x.JH {
          _setDefaults() {
            this.setPrivate("defaultLocale", P.Z), super._setDefaults();
          }
          translate(e, t, ...i) {
            t || (t = this._root.locale || this.getPrivate("defaultLocale"));
            let r = e,
              n = t[e];
            if (null === n) r = "";
            else if (null != n) n && (r = n);
            else if (t !== this.getPrivate("defaultLocale"))
              return this.translate(e, this.getPrivate("defaultLocale"), ...i);
            if (i.length)
              for (let e = i.length, t = 0; t < e; ++t)
                r = r.split("%" + (t + 1)).join(i[t]);
            return r;
          }
          translateAny(e, t, ...i) {
            return this.translate(e, t, ...i);
          }
          setTranslationAny(e, t, i) {
            (i || this._root.locale)[e] = t;
          }
          setTranslationsAny(e, t) {
            O.each(e, (e, i) => {
              this.setTranslationAny(e, i, t);
            });
          }
          translateEmpty(e, t, ...i) {
            let r = this.translate(e, t, ...i);
            return r == e ? "" : r;
          }
          translateFunc(e, t) {
            return this._root.locale[e]
              ? this._root.locale[e]
              : t !== this.getPrivate("defaultLocale")
              ? this.translateFunc(e, this.getPrivate("defaultLocale"))
              : () => "";
          }
          translateAll(e, t) {
            return this.isDefault() ? e : h.map(e, (e) => this.translate(e, t));
          }
          isDefault() {
            return this.getPrivate("defaultLocale") === this._root.locale;
          }
        }
        var k = i(9770),
          T = i(3783),
          M = i(4680),
          E = i(1112);
        class S {
          constructor(e = 1, t = 0, i = 0, r = 1, n = 0, s = 0) {
            Object.defineProperty(this, "a", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "b", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "c", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "d", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "tx", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "ty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.a = e),
              (this.b = t),
              (this.c = i),
              (this.d = r),
              (this.tx = n),
              (this.ty = s);
          }
          setTransform(e, t, i, r, n, s = 1) {
            (this.a = Math.cos(n) * s),
              (this.b = Math.sin(n) * s),
              (this.c = -Math.sin(n) * s),
              (this.d = Math.cos(n) * s),
              (this.tx = e - (i * this.a + r * this.c)),
              (this.ty = t - (i * this.b + r * this.d));
          }
          apply(e) {
            return {
              x: this.a * e.x + this.c * e.y + this.tx,
              y: this.b * e.x + this.d * e.y + this.ty,
            };
          }
          applyInverse(e) {
            const t = 1 / (this.a * this.d + this.c * -this.b);
            return {
              x:
                this.d * t * e.x +
                -this.c * t * e.y +
                (this.ty * this.c - this.tx * this.d) * t,
              y:
                this.a * t * e.y +
                -this.b * t * e.x +
                (-this.ty * this.a + this.tx * this.b) * t,
            };
          }
          append(e) {
            const t = this.a,
              i = this.b,
              r = this.c,
              n = this.d;
            (this.a = e.a * t + e.b * r),
              (this.b = e.a * i + e.b * n),
              (this.c = e.c * t + e.d * r),
              (this.d = e.c * i + e.d * n),
              (this.tx = e.tx * t + e.ty * r + this.tx),
              (this.ty = e.tx * i + e.ty * n + this.ty);
          }
          prepend(e) {
            const t = this.tx;
            if (1 !== e.a || 0 !== e.b || 0 !== e.c || 1 !== e.d) {
              const t = this.a,
                i = this.c;
              (this.a = t * e.a + this.b * e.c),
                (this.b = t * e.b + this.b * e.d),
                (this.c = i * e.a + this.d * e.c),
                (this.d = i * e.b + this.d * e.d);
            }
            (this.tx = t * e.a + this.ty * e.c + e.tx),
              (this.ty = t * e.b + this.ty * e.d + e.ty);
          }
          copyFrom(e) {
            (this.a = e.a),
              (this.b = e.b),
              (this.c = e.c),
              (this.d = e.d),
              (this.tx = e.tx),
              (this.ty = e.ty);
          }
        }
        var C = i(6245),
          N = i(7255),
          L = i(5040),
          j = i(751),
          A = 2 * Math.PI,
          R = function (e, t, i, r, n, s, a) {
            var o = e.x,
              l = e.y;
            return { x: r * (o *= t) - n * (l *= i) + s, y: n * o + r * l + a };
          },
          B = function (e, t) {
            var i =
                1.5707963267948966 === t
                  ? 0.551915024494
                  : -1.5707963267948966 === t
                  ? -0.551915024494
                  : (4 / 3) * Math.tan(t / 4),
              r = Math.cos(e),
              n = Math.sin(e),
              s = Math.cos(e + t),
              a = Math.sin(e + t);
            return [
              { x: r - n * i, y: n + r * i },
              { x: s + a * i, y: a - s * i },
              { x: s, y: a },
            ];
          },
          U = function (e, t, i, r) {
            var n = e * i + t * r;
            return (
              n > 1 && (n = 1),
              n < -1 && (n = -1),
              (e * r - t * i < 0 ? -1 : 1) * Math.acos(n)
            );
          },
          F = function (e) {
            var t = e.px,
              i = e.py,
              r = e.cx,
              n = e.cy,
              s = e.rx,
              a = e.ry,
              o = e.xAxisRotation,
              l = void 0 === o ? 0 : o,
              h = e.largeArcFlag,
              u = void 0 === h ? 0 : h,
              c = e.sweepFlag,
              d = void 0 === c ? 0 : c,
              p = [];
            if (0 === s || 0 === a) return [];
            var f = Math.sin((l * A) / 360),
              g = Math.cos((l * A) / 360),
              m = (g * (t - r)) / 2 + (f * (i - n)) / 2,
              b = (-f * (t - r)) / 2 + (g * (i - n)) / 2;
            if (0 === m && 0 === b) return [];
            (s = Math.abs(s)), (a = Math.abs(a));
            var _ =
              Math.pow(m, 2) / Math.pow(s, 2) + Math.pow(b, 2) / Math.pow(a, 2);
            _ > 1 && ((s *= Math.sqrt(_)), (a *= Math.sqrt(_)));
            var v = (function (e, t, i, r, n, s, a, o, l, h, u, c) {
                var d = Math.pow(n, 2),
                  p = Math.pow(s, 2),
                  f = Math.pow(u, 2),
                  g = Math.pow(c, 2),
                  m = d * p - d * g - p * f;
                m < 0 && (m = 0), (m /= d * g + p * f);
                var b = (((m = Math.sqrt(m) * (a === o ? -1 : 1)) * n) / s) * c,
                  _ = ((m * -s) / n) * u,
                  v = h * b - l * _ + (e + i) / 2,
                  y = l * b + h * _ + (t + r) / 2,
                  w = (u - b) / n,
                  x = (c - _) / s,
                  O = (-u - b) / n,
                  P = (-c - _) / s,
                  D = U(1, 0, w, x),
                  k = U(w, x, O, P);
                return (
                  0 === o && k > 0 && (k -= A),
                  1 === o && k < 0 && (k += A),
                  [v, y, D, k]
                );
              })(t, i, r, n, s, a, u, d, f, g, m, b),
              y = (function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e))
                  return (function (e, t) {
                    var i = [],
                      r = !0,
                      n = !1,
                      s = void 0;
                    try {
                      for (
                        var a, o = e[Symbol.iterator]();
                        !(r = (a = o.next()).done) &&
                        (i.push(a.value), !t || i.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (n = !0), (s = e);
                    } finally {
                      try {
                        !r && o.return && o.return();
                      } finally {
                        if (n) throw s;
                      }
                    }
                    return i;
                  })(e, t);
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              })(v, 4),
              w = y[0],
              x = y[1],
              O = y[2],
              P = y[3],
              D = Math.abs(P) / (A / 4);
            Math.abs(1 - D) < 1e-7 && (D = 1);
            var k = Math.max(Math.ceil(D), 1);
            P /= k;
            for (var T = 0; T < k; T++) p.push(B(O, P)), (O += P);
            return p.map(function (e) {
              var t = R(e[0], s, a, g, f, w, x),
                i = t.x,
                r = t.y,
                n = R(e[1], s, a, g, f, w, x),
                o = n.x,
                l = n.y,
                h = R(e[2], s, a, g, f, w, x);
              return { x1: i, y1: r, x2: o, y2: l, x: h.x, y: h.y };
            });
          };
        function I(e, t, i) {
          if (t !== i)
            throw new Error(
              "Required " + i + " arguments for " + e + " but got " + t
            );
        }
        function H(e, t, i) {
          if (t < i)
            throw new Error(
              "Required at least " + i + " arguments for " + e + " but got " + t
            );
        }
        function z(e, t, i) {
          if ((H(e, t, i), t % i != 0))
            throw new Error("Arguments for " + e + " must be in pairs of " + i);
        }
        function V(e) {
          for (let t = 0; t < e.length; t += 7) {
            let i = t + 3,
              r = e[i];
            if (r.length > 1) {
              const t = /^([01])([01])(.*)$/.exec(r);
              null !== t &&
                (e.splice(i, 0, t[1]),
                ++i,
                e.splice(i, 0, t[2]),
                ++i,
                t[3].length > 0 ? (e[i] = t[3]) : e.splice(i, 1));
            }
            if ((++i, (r = e[i]), r.length > 1)) {
              const t = /^([01])(.+)$/.exec(r);
              null !== t && (e.splice(i, 0, t[1]), ++i, (e[i] = t[2]));
            }
          }
        }
        function G(e) {
          if (0 === e || 1 === e) return e;
          throw new Error("Flag must be 0 or 1");
        }
        function Y(e, t) {
          for (; (!e.interactive || t(e)) && e._parent; ) e = e._parent;
        }
        function W(e, t, i) {
          return u.addEventListener(e, u.getRendererEvent(t), (e) => {
            const t = u.getEventTarget(e);
            let r = e.touches;
            r
              ? (0 == r.length && (r = e.changedTouches), i(h.copy(r), t))
              : i([e], t);
          });
        }
        function X(e) {
          const t = document.createElement("canvas");
          (t.width = 1), (t.height = 1);
          const i = t.getContext("2d", { willReadFrequently: !0 });
          i.drawImage(e, 0, 0, 1, 1);
          try {
            return i.getImageData(0, 0, 1, 1), !1;
          } catch (t) {
            return (
              console.warn(
                'Image "' +
                  e.src +
                  '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'
              ),
              !0
            );
          }
        }
        function $(e) {
          (e.width = 0),
            (e.height = 0),
            (e.style.width = "0px"),
            (e.style.height = "0px");
        }
        class Z {
          constructor() {
            Object.defineProperty(this, "_x", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
              Object.defineProperty(this, "_y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              });
          }
          get x() {
            return this._x;
          }
          get y() {
            return this._y;
          }
          set x(e) {
            this._x = e;
          }
          set y(e) {
            this._y = e;
          }
        }
        class K extends l.KK {
          constructor(e) {
            super(),
              Object.defineProperty(this, "_layer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "mask", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "visible", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "exportable", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "interactive", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "inactive", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "wheelable", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "cancelTouch", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "isMeasured", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "buttonMode", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "alpha", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 1,
              }),
              Object.defineProperty(this, "compoundAlpha", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 1,
              }),
              Object.defineProperty(this, "angle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "scale", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 1,
              }),
              Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "crisp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "pivot", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Z(),
              }),
              Object.defineProperty(this, "filter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "cursorOverStyle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_replacedCursorStyle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_localMatrix", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new S(),
              }),
              Object.defineProperty(this, "_matrix", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new S(),
              }),
              Object.defineProperty(this, "_uMatrix", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new S(),
              }),
              Object.defineProperty(this, "_renderer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_parent", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_localBounds", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_bounds", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_colorId", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._renderer = e);
          }
          _dispose() {
            this._renderer._removeObject(this), (this.getLayer().dirty = !0);
          }
          getCanvas() {
            return this.getLayer().view;
          }
          getLayer() {
            let e = this;
            for (;;) {
              if (e._layer) return e._layer;
              if (!e._parent) return this._renderer.defaultLayer;
              e = e._parent;
            }
          }
          setLayer(e, t) {
            if (null == e) this._layer = void 0;
            else {
              const i = !0;
              (this._layer = this._renderer.getLayer(e, i)),
                (this._layer.visible = i),
                (this._layer.margin = t),
                t && u.setInteractive(this._layer.view, !1),
                this._renderer._ghostLayer.setMargin(this._renderer.layers),
                this._parent && this._parent.registerChildLayer(this._layer),
                (this._layer.dirty = !0),
                this._renderer.resizeLayer(this._layer),
                this._renderer.resizeGhost();
            }
          }
          markDirtyLayer() {
            this.getLayer().dirty = !0;
          }
          clear() {
            this.invalidateBounds();
          }
          invalidateBounds() {
            this._localBounds = void 0;
          }
          _addBounds(e) {}
          _getColorId() {
            return (
              void 0 === this._colorId &&
                (this._colorId = this._renderer.paintId(this)),
              this._colorId
            );
          }
          _isInteractive() {
            return (
              0 == this.inactive &&
              (this.interactive || this._renderer._forceInteractive > 0)
            );
          }
          _isInteractiveMask() {
            return this._isInteractive();
          }
          contains(e) {
            for (;;) {
              if (e === this) return !0;
              if (!e._parent) return !1;
              e = e._parent;
            }
          }
          toGlobal(e) {
            return this._matrix.apply(e);
          }
          toLocal(e) {
            return this._matrix.applyInverse(e);
          }
          getLocalMatrix() {
            return (
              this._uMatrix.setTransform(
                0,
                0,
                this.pivot.x,
                this.pivot.y,
                (this.angle * Math.PI) / 180,
                this.scale
              ),
              this._uMatrix
            );
          }
          getLocalBounds() {
            if (!this._localBounds) {
              const e = 1e7;
              (this._localBounds = { left: e, top: e, right: -e, bottom: -e }),
                this._addBounds(this._localBounds);
            }
            return this._localBounds;
          }
          getAdjustedBounds(e) {
            this._setMatrix();
            const t = this.getLocalMatrix(),
              i = t.apply({ x: e.left, y: e.top }),
              r = t.apply({ x: e.right, y: e.top }),
              n = t.apply({ x: e.right, y: e.bottom }),
              s = t.apply({ x: e.left, y: e.bottom });
            return {
              left: Math.min(i.x, r.x, n.x, s.x),
              top: Math.min(i.y, r.y, n.y, s.y),
              right: Math.max(i.x, r.x, n.x, s.x),
              bottom: Math.max(i.y, r.y, n.y, s.y),
            };
          }
          on(e, t, i) {
            return this.interactive
              ? this._renderer._addEvent(this, e, t, i)
              : new l.ku(() => {});
          }
          _setMatrix() {
            this._localMatrix.setTransform(
              this.x,
              this.y,
              this.pivot.x,
              this.pivot.y,
              (this.angle * Math.PI) / 180,
              this.scale
            ),
              this._matrix.copyFrom(this._localMatrix),
              this._parent && this._matrix.prepend(this._parent._matrix);
          }
          _transform(e, t) {
            const i = this._matrix;
            let r = i.tx * t,
              n = i.ty * t;
            this.crisp &&
              ((r = Math.floor(r) + 0.5), (n = Math.floor(n) + 0.5)),
              e.setTransform(i.a * t, i.b * t, i.c * t, i.d * t, r, n);
          }
          _transformMargin(e, t, i) {
            const r = this._matrix;
            e.setTransform(
              r.a * t,
              r.b * t,
              r.c * t,
              r.d * t,
              (r.tx + i.left) * t,
              (r.ty + i.top) * t
            );
          }
          _transformLayer(e, t, i) {
            i.margin
              ? this._transformMargin(e, i.scale || t, i.margin)
              : this._transform(e, i.scale || t);
          }
          render(e) {
            if (
              this.visible &&
              (!1 !== this.exportable || !this._renderer._omitTainted)
            ) {
              this._setMatrix();
              const t = this._renderer.resolution,
                i = this._renderer.layers,
                r = this._renderer._ghostLayer,
                n = r.context,
                s = this.mask;
              s && s._setMatrix(),
                h.each(i, (e) => {
                  if (e) {
                    const i = e.context;
                    i.save(),
                      s &&
                        (s._transformLayer(i, t, e), s._runPath(i), i.clip()),
                      (i.globalAlpha = this.compoundAlpha * this.alpha),
                      this._transformLayer(i, t, e),
                      this.filter && (i.filter = this.filter);
                  }
                }),
                n.save(),
                s &&
                  this._isInteractiveMask() &&
                  (s._transformMargin(n, t, r.margin), s._runPath(n), n.clip()),
                this._transformMargin(n, t, r.margin),
                this._render(e),
                n.restore(),
                h.each(i, (e) => {
                  e && e.context.restore();
                });
            }
          }
          _render(e) {
            !1 === this.exportable && ((this._layer || e).tainted = !0);
          }
          hovering() {
            return this._renderer._hovering.has(this);
          }
          dragging() {
            return this._renderer._dragging.some((e) => e.value === this);
          }
          shouldCancelTouch() {
            const e = this._renderer;
            return (
              !(e.tapToActivate && !e._touchActive) &&
              (!!this.cancelTouch ||
                (!!this._parent && this._parent.shouldCancelTouch()))
            );
          }
        }
        class q extends K {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "interactiveChildren", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "_childLayers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_children", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              });
          }
          _isInteractiveMask() {
            return this.interactiveChildren || super._isInteractiveMask();
          }
          addChild(e) {
            (e._parent = this),
              this._children.push(e),
              e._layer && this.registerChildLayer(e._layer);
          }
          addChildAt(e, t) {
            (e._parent = this),
              this._children.splice(t, 0, e),
              e._layer && this.registerChildLayer(e._layer);
          }
          removeChild(e) {
            (e._parent = void 0), h.removeFirst(this._children, e);
          }
          _render(e) {
            super._render(e);
            const t = this._renderer;
            this.interactive &&
              this.interactiveChildren &&
              ++t._forceInteractive;
            const i = this._layer || e;
            h.each(this._children, (e) => {
              (e.compoundAlpha = this.compoundAlpha * this.alpha), e.render(i);
            }),
              this.interactive &&
                this.interactiveChildren &&
                --t._forceInteractive;
          }
          registerChildLayer(e) {
            this._childLayers || (this._childLayers = []),
              h.pushOne(this._childLayers, e),
              this._parent && this._parent.registerChildLayer(e);
          }
          markDirtyLayer(e = !1) {
            super.markDirtyLayer(),
              e &&
                this._childLayers &&
                h.each(this._childLayers, (e) => (e.dirty = !0));
          }
          _dispose() {
            super._dispose(),
              this._childLayers &&
                h.each(this._childLayers, (e) => {
                  e.dirty = !0;
                });
          }
        }
        function Q(e, t) {
          (e.left = Math.min(e.left, t.x)),
            (e.top = Math.min(e.top, t.y)),
            (e.right = Math.max(e.right, t.x)),
            (e.bottom = Math.max(e.bottom, t.y));
        }
        class J {
          colorize(e, t) {}
          path(e) {}
          addBounds(e) {}
        }
        class ee extends J {
          colorize(e, t) {
            e.beginPath();
          }
        }
        class te extends J {
          constructor(e) {
            super(),
              Object.defineProperty(this, "color", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
          }
          colorize(e, t) {
            e.fillStyle = void 0 !== t ? t : this.color;
          }
        }
        class ie extends J {
          constructor(e) {
            super(),
              Object.defineProperty(this, "clearShadow", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
          }
          colorize(e, t) {
            e.fill(),
              this.clearShadow &&
                ((e.shadowColor = ""),
                (e.shadowBlur = 0),
                (e.shadowOffsetX = 0),
                (e.shadowOffsetY = 0));
          }
        }
        class re extends J {
          colorize(e, t) {
            e.stroke();
          }
        }
        class ne extends J {
          constructor(e, t, i) {
            super(),
              Object.defineProperty(this, "width", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "color", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "lineJoin", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              });
          }
          colorize(e, t) {
            (e.strokeStyle = void 0 !== t ? t : this.color),
              (e.lineWidth = this.width),
              this.lineJoin && (e.lineJoin = this.lineJoin);
          }
        }
        class se extends J {
          constructor(e) {
            super(),
              Object.defineProperty(this, "dash", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
          }
          colorize(e, t) {
            e.setLineDash(this.dash);
          }
        }
        class ae extends J {
          constructor(e) {
            super(),
              Object.defineProperty(this, "dashOffset", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
          }
          colorize(e, t) {
            e.lineDashOffset = this.dashOffset;
          }
        }
        class oe extends J {
          constructor(e, t, i, r) {
            super(),
              Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "width", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "height", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              });
          }
          path(e) {
            e.rect(this.x, this.y, this.width, this.height);
          }
          addBounds(e) {
            const t = this.x,
              i = this.y,
              r = t + this.width,
              n = i + this.height;
            Q(e, { x: t, y: i }),
              Q(e, { x: r, y: i }),
              Q(e, { x: t, y: n }),
              Q(e, { x: r, y: n });
          }
        }
        class le extends J {
          constructor(e, t, i) {
            super(),
              Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "radius", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              });
          }
          path(e) {
            e.moveTo(this.x + this.radius, this.y),
              e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          }
          addBounds(e) {
            Q(e, { x: this.x - this.radius, y: this.y - this.radius }),
              Q(e, { x: this.x + this.radius, y: this.y + this.radius });
          }
        }
        class he extends J {
          constructor(e, t, i, r) {
            super(),
              Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "radiusX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "radiusY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              });
          }
          path(e) {
            e.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
          }
          addBounds(e) {
            Q(e, { x: this.x - this.radiusX, y: this.y - this.radiusY }),
              Q(e, { x: this.x + this.radiusX, y: this.y + this.radiusY });
          }
        }
        class ue extends J {
          constructor(e, t, i, r, n, s) {
            super(),
              Object.defineProperty(this, "cx", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "cy", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "radius", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "startAngle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(this, "endAngle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              }),
              Object.defineProperty(this, "anticlockwise", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              });
          }
          path(e) {
            this.radius > 0 &&
              e.arc(
                this.cx,
                this.cy,
                this.radius,
                this.startAngle,
                this.endAngle,
                this.anticlockwise
              );
          }
          addBounds(e) {
            let t = j.getArcBounds(
              this.cx,
              this.cy,
              this.startAngle * j.DEGREES,
              this.endAngle * j.DEGREES,
              this.radius
            );
            Q(e, { x: t.left, y: t.top }), Q(e, { x: t.right, y: t.bottom });
          }
        }
        class ce extends J {
          constructor(e, t, i, r, n) {
            super(),
              Object.defineProperty(this, "x1", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "y1", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "x2", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "y2", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(this, "radius", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
          }
          path(e) {
            this.radius > 0 &&
              e.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
          }
          addBounds(e) {}
        }
        class de extends J {
          constructor(e, t) {
            super(),
              Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
          }
          path(e) {
            e.lineTo(this.x, this.y);
          }
          addBounds(e) {
            Q(e, { x: this.x, y: this.y });
          }
        }
        class pe extends J {
          constructor(e, t) {
            super(),
              Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
          }
          path(e) {
            e.moveTo(this.x, this.y);
          }
          addBounds(e) {
            Q(e, { x: this.x, y: this.y });
          }
        }
        class fe extends J {
          path(e) {
            e.closePath();
          }
        }
        class ge extends J {
          constructor(e, t, i, r, n, s) {
            super(),
              Object.defineProperty(this, "cpX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "cpY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "cpX2", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "cpY2", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(this, "toX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              }),
              Object.defineProperty(this, "toY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              });
          }
          path(e) {
            e.bezierCurveTo(
              this.cpX,
              this.cpY,
              this.cpX2,
              this.cpY2,
              this.toX,
              this.toY
            );
          }
          addBounds(e) {
            Q(e, { x: this.cpX, y: this.cpY }),
              Q(e, { x: this.cpX2, y: this.cpY2 }),
              Q(e, { x: this.toX, y: this.toY });
          }
        }
        class me extends J {
          constructor(e, t, i, r) {
            super(),
              Object.defineProperty(this, "cpX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "cpY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "toX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "toY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              });
          }
          path(e) {
            e.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
          }
          addBounds(e) {
            Q(e, { x: this.cpX, y: this.cpY }),
              Q(e, { x: this.toX, y: this.toY });
          }
        }
        class be extends J {
          constructor(e, t, i, r, n) {
            super(),
              Object.defineProperty(this, "color", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "blur", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "offsetX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "offsetY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(this, "opacity", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
          }
          colorize(e, t) {
            this.opacity && (e.fillStyle = this.color),
              (e.shadowColor = this.color),
              (e.shadowBlur = this.blur),
              (e.shadowOffsetX = this.offsetX),
              (e.shadowOffsetY = this.offsetY);
          }
        }
        class _e extends J {
          constructor(e, t, i, r, n) {
            super(),
              Object.defineProperty(this, "image", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              }),
              Object.defineProperty(this, "width", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "height", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "x", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(this, "y", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
          }
          path(e) {
            e.drawImage(this.image, this.x, this.y, this.width, this.height);
          }
          addBounds(e) {
            Q(e, { x: this.x, y: this.y }),
              Q(e, { x: this.width, y: this.height });
          }
        }
        class ve extends K {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_operations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "blendMode", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: M.b.NORMAL,
              }),
              Object.defineProperty(this, "_hasShadows", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_fillAlpha", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_strokeAlpha", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          clear() {
            super.clear(), (this._operations.length = 0);
          }
          _pushOp(e) {
            this._operations.push(e);
          }
          beginFill(e, t = 1) {
            (this._fillAlpha = t),
              e
                ? e instanceof E.Il
                  ? this._pushOp(new te(e.toCSS(t)))
                  : ((this.isMeasured = !0), this._pushOp(new te(e)))
                : this._pushOp(new te("rgba(0, 0, 0, " + t + ")"));
          }
          endFill() {
            this._pushOp(new ie(this._hasShadows));
          }
          endStroke() {
            this._pushOp(new re());
          }
          beginPath() {
            this._pushOp(new ee());
          }
          lineStyle(e = 0, t, i = 1, r) {
            (this._strokeAlpha = i),
              t
                ? t instanceof E.Il
                  ? this._pushOp(new ne(e, t.toCSS(i), r))
                  : this._pushOp(new ne(e, t, r))
                : this._pushOp(new ne(e, "rgba(0, 0, 0, " + i + ")", r));
          }
          setLineDash(e) {
            this._pushOp(new se(e || []));
          }
          setLineDashOffset(e = 0) {
            this._pushOp(new ae(e));
          }
          drawRect(e, t, i, r) {
            this._pushOp(new oe(e, t, i, r));
          }
          drawCircle(e, t, i) {
            this._pushOp(new le(e, t, i));
          }
          drawEllipse(e, t, i, r) {
            this._pushOp(new he(e, t, i, r));
          }
          arc(e, t, i, r, n, s = !1) {
            this._pushOp(new ue(e, t, i, r, n, s));
          }
          arcTo(e, t, i, r, n) {
            this._pushOp(new ce(e, t, i, r, n));
          }
          lineTo(e, t) {
            this._pushOp(new de(e, t));
          }
          moveTo(e, t) {
            this._pushOp(new pe(e, t));
          }
          bezierCurveTo(e, t, i, r, n, s) {
            this._pushOp(new ge(e, t, i, r, n, s));
          }
          quadraticCurveTo(e, t, i, r) {
            this._pushOp(new me(e, t, i, r));
          }
          closePath() {
            this._pushOp(new fe());
          }
          shadow(e, t = 0, i = 0, r = 0, n) {
            (this._hasShadows = !0),
              this._pushOp(
                new be(
                  n
                    ? e.toCSS(n)
                    : e.toCSS(this._fillAlpha || this._strokeAlpha),
                  t,
                  i,
                  r
                )
              );
          }
          image(e, t, i, r, n) {
            this._pushOp(new _e(e, t, i, r, n));
          }
          svgPath(e) {
            let t = 0,
              i = 0,
              r = null,
              n = null,
              s = null,
              a = null;
            const o = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g,
              l =
                /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
            let u;
            for (; null !== (u = o.exec(e)); ) {
              const e = u[1],
                o = u[2],
                c = [];
              for (; null !== (u = l.exec(o)); ) c.push(u[1]);
              switch (
                ("S" !== e &&
                  "s" !== e &&
                  "C" !== e &&
                  "c" !== e &&
                  ((r = null), (n = null)),
                "Q" !== e &&
                  "q" !== e &&
                  "T" !== e &&
                  "t" !== e &&
                  ((s = null), (a = null)),
                e)
              ) {
                case "M":
                  z(e, c.length, 2),
                    (t = +c[0]),
                    (i = +c[1]),
                    this.moveTo(t, i);
                  for (let e = 2; e < c.length; e += 2)
                    (t = +c[e]), (i = +c[e + 1]), this.lineTo(t, i);
                  break;
                case "m":
                  z(e, c.length, 2),
                    (t += +c[0]),
                    (i += +c[1]),
                    this.moveTo(t, i);
                  for (let e = 2; e < c.length; e += 2)
                    (t += +c[e]), (i += +c[e + 1]), this.lineTo(t, i);
                  break;
                case "L":
                  z(e, c.length, 2);
                  for (let e = 0; e < c.length; e += 2)
                    (t = +c[e]), (i = +c[e + 1]), this.lineTo(t, i);
                  break;
                case "l":
                  z(e, c.length, 2);
                  for (let e = 0; e < c.length; e += 2)
                    (t += +c[e]), (i += +c[e + 1]), this.lineTo(t, i);
                  break;
                case "H":
                  H(e, c.length, 1);
                  for (let e = 0; e < c.length; ++e)
                    (t = +c[e]), this.lineTo(t, i);
                  break;
                case "h":
                  H(e, c.length, 1);
                  for (let e = 0; e < c.length; ++e)
                    (t += +c[e]), this.lineTo(t, i);
                  break;
                case "V":
                  H(e, c.length, 1);
                  for (let e = 0; e < c.length; ++e)
                    (i = +c[e]), this.lineTo(t, i);
                  break;
                case "v":
                  H(e, c.length, 1);
                  for (let e = 0; e < c.length; ++e)
                    (i += +c[e]), this.lineTo(t, i);
                  break;
                case "C":
                  z(e, c.length, 6);
                  for (let e = 0; e < c.length; e += 6) {
                    const s = +c[e],
                      a = +c[e + 1];
                    (r = +c[e + 2]),
                      (n = +c[e + 3]),
                      (t = +c[e + 4]),
                      (i = +c[e + 5]),
                      this.bezierCurveTo(s, a, r, n, t, i);
                  }
                  break;
                case "c":
                  z(e, c.length, 6);
                  for (let e = 0; e < c.length; e += 6) {
                    const s = +c[e] + t,
                      a = +c[e + 1] + i;
                    (r = +c[e + 2] + t),
                      (n = +c[e + 3] + i),
                      (t += +c[e + 4]),
                      (i += +c[e + 5]),
                      this.bezierCurveTo(s, a, r, n, t, i);
                  }
                  break;
                case "S":
                  z(e, c.length, 4),
                    (null !== r && null !== n) || ((r = t), (n = i));
                  for (let e = 0; e < c.length; e += 4) {
                    const s = 2 * t - r,
                      a = 2 * i - n;
                    (r = +c[e]),
                      (n = +c[e + 1]),
                      (t = +c[e + 2]),
                      (i = +c[e + 3]),
                      this.bezierCurveTo(s, a, r, n, t, i);
                  }
                  break;
                case "s":
                  z(e, c.length, 4),
                    (null !== r && null !== n) || ((r = t), (n = i));
                  for (let e = 0; e < c.length; e += 4) {
                    const s = 2 * t - r,
                      a = 2 * i - n;
                    (r = +c[e] + t),
                      (n = +c[e + 1] + i),
                      (t += +c[e + 2]),
                      (i += +c[e + 3]),
                      this.bezierCurveTo(s, a, r, n, t, i);
                  }
                  break;
                case "Q":
                  z(e, c.length, 4);
                  for (let e = 0; e < c.length; e += 4)
                    (s = +c[e]),
                      (a = +c[e + 1]),
                      (t = +c[e + 2]),
                      (i = +c[e + 3]),
                      this.quadraticCurveTo(s, a, t, i);
                  break;
                case "q":
                  z(e, c.length, 4);
                  for (let e = 0; e < c.length; e += 4)
                    (s = +c[e] + t),
                      (a = +c[e + 1] + i),
                      (t += +c[e + 2]),
                      (i += +c[e + 3]),
                      this.quadraticCurveTo(s, a, t, i);
                  break;
                case "T":
                  z(e, c.length, 2),
                    (null !== s && null !== a) || ((s = t), (a = i));
                  for (let e = 0; e < c.length; e += 2)
                    (s = 2 * t - s),
                      (a = 2 * i - a),
                      (t = +c[e]),
                      (i = +c[e + 1]),
                      this.quadraticCurveTo(s, a, t, i);
                  break;
                case "t":
                  z(e, c.length, 2),
                    (null !== s && null !== a) || ((s = t), (a = i));
                  for (let e = 0; e < c.length; e += 2)
                    (s = 2 * t - s),
                      (a = 2 * i - a),
                      (t += +c[e]),
                      (i += +c[e + 1]),
                      this.quadraticCurveTo(s, a, t, i);
                  break;
                case "A":
                case "a":
                  const o = "a" === e;
                  V(c), z(e, c.length, 7);
                  for (let e = 0; e < c.length; e += 7) {
                    let r = +c[e + 5],
                      n = +c[e + 6];
                    o && ((r += t), (n += i));
                    const s = F({
                      px: t,
                      py: i,
                      rx: +c[e],
                      ry: +c[e + 1],
                      xAxisRotation: +c[e + 2],
                      largeArcFlag: G(+c[e + 3]),
                      sweepFlag: G(+c[e + 4]),
                      cx: r,
                      cy: n,
                    });
                    h.each(s, (e) => {
                      this.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y),
                        (t = e.x),
                        (i = e.y);
                    });
                  }
                  break;
                case "Z":
                case "z":
                  I(e, c.length, 0), this.closePath();
              }
            }
          }
          _runPath(e) {
            e.beginPath(),
              h.each(this._operations, (t) => {
                t.path(e);
              });
          }
          _render(e) {
            super._render(e);
            const t = this._layer || e,
              i = t.dirty,
              r = this._isInteractive();
            if (i || r) {
              const e = t.context,
                n = this._renderer._ghostLayer.context;
              let s;
              i &&
                ((e.globalCompositeOperation = this.blendMode), e.beginPath()),
                r && (n.beginPath(), (s = this._getColorId())),
                h.each(this._operations, (t) => {
                  i && (t.path(e), t.colorize(e, void 0)),
                    r && (t.path(n), t.colorize(n, s));
                });
            }
          }
          renderDetached(e) {
            if (this.visible) {
              this._setMatrix(), e.save();
              const t = this.mask;
              t &&
                (t._setMatrix(), t._transform(e, 1), t._runPath(e), e.clip()),
                (e.globalAlpha = this.compoundAlpha * this.alpha),
                this._transform(e, 1),
                this.filter && (e.filter = this.filter),
                (e.globalCompositeOperation = this.blendMode),
                e.beginPath(),
                h.each(this._operations, (t) => {
                  t.path(e), t.colorize(e, void 0);
                }),
                e.restore();
            }
          }
          _addBounds(e) {
            this.visible &&
              this.isMeasured &&
              h.each(this._operations, (t) => {
                t.addBounds(e);
              });
          }
        }
        class ye extends K {
          constructor(e, t, i) {
            super(e),
              Object.defineProperty(this, "text", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "style", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "resolution", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 1,
              }),
              Object.defineProperty(this, "textVisible", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "_textInfo", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_originalScale", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 1,
              }),
              (this.text = t),
              (this.style = i);
          }
          invalidateBounds() {
            super.invalidateBounds(), (this._textInfo = void 0);
          }
          _shared(e) {
            this.style.textAlign && (e.textAlign = this.style.textAlign),
              this.style.direction && (e.direction = this.style.direction),
              this.style.textBaseline &&
                (e.textBaseline = this.style.textBaseline);
          }
          _prerender(e, t = !1, i = !1) {
            super._render(e);
            const r = e.context,
              n = this._renderer._ghostLayer.context,
              s = this.style;
            let a = this._getFontStyle(void 0, i);
            (r.font = a),
              this._isInteractive() && !t && (n.font = a),
              s.fill &&
                (s.fill instanceof E.Il
                  ? (r.fillStyle = s.fill.toCSS(
                      null != s.fillOpacity ? s.fillOpacity : 1
                    ))
                  : (r.fillStyle = s.fill)),
              s.shadowColor &&
                (e.context.shadowColor = s.shadowColor.toCSS(
                  s.shadowOpacity || 1
                )),
              s.shadowBlur && (e.context.shadowBlur = s.shadowBlur),
              s.shadowOffsetX && (e.context.shadowOffsetX = s.shadowOffsetX),
              s.shadowOffsetY && (e.context.shadowOffsetY = s.shadowOffsetY),
              this._shared(r),
              this._isInteractive() &&
                !t &&
                ((n.fillStyle = this._getColorId()), this._shared(n));
          }
          _getFontStyle(e, t = !1) {
            const i = this.style;
            let r = [];
            return (
              e && e.fontVariant
                ? r.push(e.fontVariant)
                : i.fontVariant && r.push(i.fontVariant),
              t ||
                (e && e.fontWeight
                  ? r.push(e.fontWeight)
                  : i.fontWeight && r.push(i.fontWeight)),
              e && e.fontStyle
                ? r.push(e.fontStyle)
                : i.fontStyle && r.push(i.fontStyle),
              e && e.fontSize
                ? (L.isNumber(e.fontSize) && (e.fontSize = e.fontSize + "px"),
                  r.push(e.fontSize))
                : i.fontSize &&
                  (L.isNumber(i.fontSize) && (i.fontSize = i.fontSize + "px"),
                  r.push(i.fontSize)),
              e && e.fontFamily
                ? r.push(e.fontFamily)
                : i.fontFamily
                ? r.push(i.fontFamily)
                : r.length && r.push("Arial"),
              r.join(" ")
            );
          }
          _render(e) {
            const t = this._layer || e;
            if ((this._textInfo || this._measure(t), this.textVisible)) {
              const e = this._isInteractive(),
                i = t.context,
                r = t.dirty,
                n = this._renderer._ghostLayer.context;
              i.save(),
                n.save(),
                this._prerender(t),
                h.each(this._textInfo, (t, s) => {
                  h.each(t.textChunks, (s, a) => {
                    if (
                      (s.style &&
                        (i.save(),
                        n.save(),
                        (i.font = s.style),
                        this._isInteractive() && (n.font = s.style)),
                      s.fill && (i.save(), (i.fillStyle = s.fill.toCSS())),
                      r && i.fillText(s.text, s.offsetX, t.offsetY + s.offsetY),
                      "underline" == s.textDecoration ||
                        "line-through" == s.textDecoration)
                    ) {
                      let e,
                        r = 1,
                        n = 1,
                        a = s.height,
                        o = s.offsetX;
                      switch (this.style.textAlign) {
                        case "right":
                        case "end":
                          o -= s.width;
                          break;
                        case "center":
                          o -= s.width / 2;
                      }
                      if (s.style)
                        switch (N.V.getTextStyle(s.style).fontWeight) {
                          case "bolder":
                          case "bold":
                          case "700":
                          case "800":
                          case "900":
                            r = 2;
                        }
                      a && (n = a / 20),
                        (e =
                          "line-through" == s.textDecoration
                            ? r + t.offsetY + s.offsetY - s.height / 2
                            : r + 1.5 * n + t.offsetY + s.offsetY),
                        i.save(),
                        i.beginPath(),
                        s.fill
                          ? (i.strokeStyle = s.fill.toCSS())
                          : this.style.fill &&
                            this.style.fill instanceof E.Il &&
                            (i.strokeStyle = this.style.fill.toCSS()),
                        (i.lineWidth = r * n),
                        i.moveTo(o, e),
                        i.lineTo(o + s.width, e),
                        i.stroke(),
                        i.restore();
                    }
                    e &&
                      this.interactive &&
                      n.fillText(s.text, s.offsetX, t.offsetY + s.offsetY),
                      s.fill && i.restore(),
                      s.style && (i.restore(), n.restore());
                  });
                }),
                i.restore(),
                n.restore();
            }
          }
          _addBounds(e) {
            if (this.visible && this.isMeasured) {
              const t = this._measure(this.getLayer());
              Q(e, { x: t.left, y: t.top }), Q(e, { x: t.right, y: t.bottom });
            }
          }
          _ignoreFontWeight() {
            return /apple/i.test(navigator.vendor);
          }
          _measure(e) {
            const t = e.context,
              i = this._renderer._ghostLayer.context,
              r = "rtl" == this.style.direction;
            this._textInfo = [];
            const n = this.style.oversizedBehavior,
              s = this.style.maxWidth,
              a = L.isNumber(s) && "truncate" == n,
              o = L.isNumber(s) && ("wrap" == n || "wrap-no-break" == n);
            t.save(),
              i.save(),
              this._prerender(e, !0, this._ignoreFontWeight());
            const l =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",
              c = this.text.toString().replace(/\r/g, "").split(/\n/);
            let d,
              p = !0,
              f = 0,
              g = 0,
              m = 0;
            h.each(c, (e, r) => {
              let n;
              for (
                n =
                  "" == e
                    ? [{ type: "value", text: "" }]
                    : N.V.chunk(e, !1, this.style.ignoreFormatting);
                n.length > 0;

              ) {
                let e = {
                  offsetY: m,
                  ascent: 0,
                  width: 0,
                  height: 0,
                  left: 0,
                  right: 0,
                  textChunks: [],
                };
                const r = this._measureText(l, t),
                  c = r.actualBoundingBoxAscent + r.actualBoundingBoxDescent;
                let b;
                (e.height = c), (e.ascent = r.actualBoundingBoxAscent);
                let _,
                  v,
                  y,
                  w = this.style.textDecoration,
                  x = !1,
                  O = !0,
                  P = [];
                h.eachContinue(n, (r, h) => {
                  if ("format" == r.type)
                    if ("[/]" == r.text)
                      p || (t.restore(), i.restore(), (p = !0)),
                        (_ = void 0),
                        (d = void 0),
                        (v = void 0),
                        (w = this.style.textDecoration),
                        (y = void 0),
                        (b = r.text);
                    else {
                      p || (t.restore(), i.restore());
                      let n = N.V.getTextStyle(r.text);
                      const s = this._getFontStyle(n);
                      t.save(),
                        i.save(),
                        (t.font = s),
                        (d = s),
                        (b = r.text),
                        n.textDecoration && (w = n.textDecoration),
                        n.fill && (_ = n.fill),
                        n.width && (v = L.toNumber(n.width)),
                        n.verticalAlign && (y = n.verticalAlign),
                        (p = !1);
                      const a = this._measureText(l, t),
                        o =
                          a.actualBoundingBoxAscent +
                          a.actualBoundingBoxDescent;
                      o > e.height && (e.height = o),
                        a.actualBoundingBoxAscent > e.ascent &&
                          (e.ascent = a.actualBoundingBoxAscent);
                    }
                  else if ("value" == r.type && !x) {
                    const i = this._measureText(r.text, t);
                    let l = i.actualBoundingBoxLeft + i.actualBoundingBoxRight;
                    if (a) {
                      let i = O || this.style.breakWords || !1;
                      const n = this.style.ellipsis || "",
                        a = this._measureText(n, t),
                        o = a.actualBoundingBoxLeft + a.actualBoundingBoxRight;
                      if (e.width + l > s) {
                        const a = s - e.width - o;
                        (r.text = this._truncateText(t, r.text, a, i)),
                          (r.text += n),
                          (x = !0);
                      }
                    } else if (o && e.width + l > s) {
                      const i = s - e.width,
                        a = this._truncateText(
                          t,
                          r.text,
                          i,
                          !1,
                          O && "wrap-no-break" != this.style.oversizedBehavior
                        );
                      if ("" == a) return (this.textVisible = !0), !1;
                      (P = n.slice(h + 1)),
                        u.trim(a) != u.trim(r.text) &&
                          (P.unshift({
                            type: "value",
                            text: r.text.substr(a.length),
                          }),
                          b && P.unshift({ type: "format", text: b })),
                        (r.text = u.trim(a)),
                        (n = []),
                        (x = !0);
                    }
                    let c = 1,
                      p = 1;
                    if (d && v && v > l) {
                      const e = l / v;
                      switch (this.style.textAlign) {
                        case "right":
                        case "end":
                          c = e;
                          break;
                        case "center":
                          (c = e), (p = e);
                          break;
                        default:
                          p = e;
                      }
                      l = v;
                    }
                    const f =
                      i.actualBoundingBoxAscent + i.actualBoundingBoxDescent;
                    f > e.height && (e.height = f),
                      i.actualBoundingBoxAscent > e.ascent &&
                        (e.ascent = i.actualBoundingBoxAscent),
                      (e.width += l),
                      (e.left += i.actualBoundingBoxLeft / c),
                      (e.right += i.actualBoundingBoxRight / p),
                      e.textChunks.push({
                        style: d,
                        fill: _,
                        text: r.text,
                        width: l,
                        height: f,
                        left: i.actualBoundingBoxLeft,
                        right: i.actualBoundingBoxRight,
                        ascent: i.actualBoundingBoxAscent,
                        offsetX: 0,
                        offsetY: 0,
                        textDecoration: w,
                        verticalAlign: y,
                      }),
                      (O = !1);
                  }
                  return !0;
                }),
                  this.style.lineHeight instanceof C.gG
                    ? ((e.height *= this.style.lineHeight.value),
                      (e.ascent *= this.style.lineHeight.value))
                    : ((e.height *= this.style.lineHeight || 1.2),
                      (e.ascent *= this.style.lineHeight || 1.2)),
                  f < e.left && (f = e.left),
                  g < e.right && (g = e.right),
                  this._textInfo.push(e),
                  (m += e.height),
                  (n = P || []);
              }
            }),
              p || (t.restore(), i.restore()),
              h.each(this._textInfo, (e, t) => {
                let i = 0;
                h.each(e.textChunks, (t) => {
                  if (
                    ((t.offsetX = i + t.left - e.left),
                    (t.offsetY +=
                      e.height - e.height * (this.style.baselineRatio || 0.19)),
                    (i += t.width),
                    t.verticalAlign)
                  )
                    switch (t.verticalAlign) {
                      case "super":
                        t.offsetY -= e.height / 2 - t.height / 2;
                        break;
                      case "sub":
                        t.offsetY += t.height / 2;
                    }
                });
              });
            const b = {
              left: r ? -g : -f,
              top: 0,
              right: r ? f : g,
              bottom: m,
            };
            if ("none" !== n) {
              const e = this._fitRatio(b);
              if (e < 1)
                if ("fit" == n)
                  L.isNumber(this.style.minScale) && e < this.style.minScale
                    ? ((this.textVisible = !1),
                      (b.left = 0),
                      (b.top = 0),
                      (b.right = 0),
                      (b.bottom = 0))
                    : ((this._originalScale && 1 != this._originalScale) ||
                        (this._originalScale = this.scale),
                      (this.scale = e),
                      (this.textVisible = !0));
                else if ("hide" == n)
                  (this.textVisible = !1),
                    (b.left = 0),
                    (b.top = 0),
                    (b.right = 0),
                    (b.bottom = 0);
                else {
                  switch (this.style.textAlign) {
                    case "right":
                    case "end":
                      (b.left = -s), (b.right = 0);
                      break;
                    case "center":
                      (b.left = -s / 2), (b.right = s / 2);
                      break;
                    default:
                      (b.left = 0), (b.right = s);
                  }
                  (this.scale = this._originalScale || 1),
                    (this._originalScale = void 0),
                    (this.textVisible = !0);
                }
              else
                (this.scale = this._originalScale || 1),
                  (this._originalScale = void 0),
                  (this.textVisible = !0);
            }
            return t.restore(), i.restore(), b;
          }
          _fitRatio(e) {
            const t = this.style.maxWidth,
              i = this.style.maxHeight;
            if (!L.isNumber(t) && !L.isNumber(i)) return 1;
            const r = e.right - e.left,
              n = e.bottom - e.top;
            return Math.min(t / r || 1, i / n || 1);
          }
          _truncateText(e, t, i, r = !1, n = !0) {
            let s;
            do {
              if (r) t = t.slice(0, -1);
              else {
                let e = t.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
                if (("" != e && e !== t) || !n) {
                  if ("" == e) return t;
                  t = e;
                } else r = !0;
              }
              const i = this._measureText(t, e);
              s = i.actualBoundingBoxLeft + i.actualBoundingBoxRight;
            } while (s > i && "" != t);
            return t;
          }
          _measureText(e, t) {
            let i = t.measureText(e),
              r = {};
            if (null == i.actualBoundingBoxAscent) {
              const t = document.createElement("div");
              (t.innerText = e),
                (t.style.visibility = "hidden"),
                (t.style.position = "absolute"),
                (t.style.top = "-1000000px;"),
                (t.style.fontFamily = this.style.fontFamily || ""),
                (t.style.fontSize = this.style.fontSize + ""),
                document.body.appendChild(t);
              const n = t.getBoundingClientRect();
              document.body.removeChild(t);
              const s = n.height,
                a = i.width;
              r = {
                actualBoundingBoxAscent: s,
                actualBoundingBoxDescent: 0,
                actualBoundingBoxLeft: 0,
                actualBoundingBoxRight: a,
                fontBoundingBoxAscent: s,
                fontBoundingBoxDescent: 0,
                width: a,
              };
            } else
              r = {
                actualBoundingBoxAscent: i.actualBoundingBoxAscent,
                actualBoundingBoxDescent: i.actualBoundingBoxDescent,
                actualBoundingBoxLeft: i.actualBoundingBoxLeft,
                actualBoundingBoxRight: i.actualBoundingBoxRight,
                fontBoundingBoxAscent: i.actualBoundingBoxAscent,
                fontBoundingBoxDescent: i.actualBoundingBoxDescent,
                width: i.width,
              };
            const n = i.width;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                (r.actualBoundingBoxLeft = n), (r.actualBoundingBoxRight = 0);
                break;
              case "center":
                (r.actualBoundingBoxLeft = n / 2),
                  (r.actualBoundingBoxRight = n / 2);
                break;
              default:
                (r.actualBoundingBoxLeft = 0), (r.actualBoundingBoxRight = n);
            }
            return r;
          }
        }
        class we {
          constructor() {
            Object.defineProperty(this, "fill", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "fillOpacity", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "textAlign", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "fontFamily", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "fontSize", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "fontWeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "fontStyle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "fontVariant", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "textDecoration", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowColor", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowBlur", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowOffsetX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowOffsetY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowOpacity", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "lineHeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: (0, C.aQ)(120),
              }),
              Object.defineProperty(this, "baselineRatio", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0.19,
              }),
              Object.defineProperty(this, "direction", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "textBaseline", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "oversizedBehavior", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "none",
              }),
              Object.defineProperty(this, "breakWords", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "ellipsis", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "…",
              }),
              Object.defineProperty(this, "maxWidth", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "maxHeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "minScale", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "ignoreFormatting", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
        }
        class xe extends ye {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "textType", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "circular",
              }),
              Object.defineProperty(this, "radius", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "startAngle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "inside", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "orientation", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "auto",
              }),
              Object.defineProperty(this, "kerning", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_textReversed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _render(e) {
            "circular" === this.textType
              ? this._renderCircular(e)
              : super._render(e);
          }
          _renderCircular(e) {
            if (this.textVisible) {
              const t = this._layer || e;
              this._prerender(t);
              const i = this._isInteractive(),
                r = t.context,
                n = t.dirty,
                s = this._renderer._ghostLayer.context;
              r.save(), i && s.save(), this._textInfo || this._measure(t);
              let a = this.radius || 0,
                o = this.startAngle || 0,
                l = 0,
                u = this.orientation,
                c = "auto" == u ? "auto" : "inward" == u;
              const d = this.inside,
                p = this.style.textAlign || "left",
                f = this.kerning || 0;
              let g = "left" == p ? 1 : -1;
              const m = !this._textReversed;
              if ("auto" == c) {
                let e = 0,
                  t = 0;
                h.each(this._textInfo, (t, i) => {
                  const r = o + (t.width / (a - t.height) / 2) * -g;
                  r > e && (e = r);
                }),
                  (t =
                    "left" == p
                      ? (e + l / 2) * j.DEGREES
                      : "right" == p
                      ? (e - l / 2) * j.DEGREES
                      : o * j.DEGREES),
                  (t = j.normalizeAngle(t)),
                  (c = t >= 270 || t <= 90);
              }
              1 == c &&
                m &&
                (this._textInfo.reverse(), (this._textReversed = !0)),
                h.each(this._textInfo, (e, t) => {
                  const u = e.height;
                  d || (a += u),
                    ((-1 == g && c) || (1 == g && !c)) &&
                      m &&
                      e.textChunks.reverse();
                  let b = o;
                  (l = 0),
                    "center" == p &&
                      ((b += (e.width / (a - u) / 2) * -g), (l = b - o)),
                    (b += Math.PI * (c ? 0 : 1)),
                    r.save(),
                    i && s.save(),
                    r.rotate(b),
                    i && s.rotate(b);
                  let _ = 0;
                  h.each(e.textChunks, (e, t) => {
                    const o = e.text,
                      l = e.width;
                    (_ = (l / 2 / (a - u)) * g),
                      r.rotate(_),
                      i && s.rotate(_),
                      e.style &&
                        (r.save(),
                        s.save(),
                        (r.font = e.style),
                        i && (s.font = e.style)),
                      e.fill && (r.save(), (r.fillStyle = e.fill.toCSS())),
                      (r.textBaseline = "middle"),
                      (r.textAlign = "center"),
                      i &&
                        ((s.textBaseline = "middle"), (s.textAlign = "center")),
                      n && r.fillText(o, 0, (c ? 1 : -1) * (0 - a + u / 2)),
                      i && s.fillText(o, 0, (c ? 1 : -1) * (0 - a + u / 2)),
                      e.fill && r.restore(),
                      e.style && (r.restore(), s.restore()),
                      (_ = ((l / 2 + f) / (a - u)) * g),
                      r.rotate(_),
                      i && s.rotate(_);
                  }),
                    r.restore(),
                    i && s.restore(),
                    d && (a -= u);
                }),
                r.restore(),
                i && s.restore();
            }
          }
          _measure(e) {
            return "circular" === this.textType
              ? this._measureCircular(e)
              : super._measure(e);
          }
          _measureCircular(e) {
            const t = e.context,
              i = this._renderer._ghostLayer.context,
              r = "rtl" == this.style.direction,
              n = this.style.oversizedBehavior,
              s = this.style.maxWidth,
              a = L.isNumber(s) && "truncate" == n,
              o = this.style.ellipsis || "";
            let l;
            (this.textVisible = !0),
              (this._textInfo = []),
              (this._textReversed = !1),
              t.save(),
              i.save(),
              this._prerender(e, !0);
            const u = this.text.toString().replace(/\r/g, "").split(/\n/);
            let c = !0,
              d = 0,
              p = 0;
            return (
              h.each(u, (e, n) => {
                let u,
                  f,
                  g,
                  m = N.V.chunk(e, !1, this.style.ignoreFormatting),
                  b = {
                    offsetY: p,
                    ascent: 0,
                    width: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    textChunks: [],
                  };
                h.each(m, (e, n) => {
                  if ("format" == e.type) {
                    if ("[/]" == e.text)
                      c || (t.restore(), i.restore(), (c = !0)),
                        (f = void 0),
                        (u = void 0),
                        (g = void 0);
                    else {
                      let r = N.V.getTextStyle(e.text);
                      const n = this._getFontStyle(r);
                      t.save(),
                        i.save(),
                        (t.font = n),
                        (u = n),
                        r.fill && (f = r.fill),
                        r.width && (g = L.toNumber(r.width)),
                        (c = !1);
                    }
                    a && (l = this._measureText(o, t));
                  } else if ("value" == e.type) {
                    const i = e.text.match(/./gu) || [];
                    r && i.reverse();
                    for (let e = 0; e < i.length; e++) {
                      const n = i[e],
                        h = this._measureText(n, t);
                      let c = h.width;
                      u && g && g > c && (c = g);
                      const p =
                        h.actualBoundingBoxAscent + h.actualBoundingBoxDescent;
                      if (
                        (p > b.height && (b.height = p),
                        h.actualBoundingBoxAscent > b.ascent &&
                          (b.ascent = h.actualBoundingBoxAscent),
                        (b.width += c),
                        (b.left += h.actualBoundingBoxLeft),
                        (b.right += h.actualBoundingBoxRight),
                        b.textChunks.push({
                          style: u,
                          fill: f,
                          text: n,
                          width: c,
                          height: p + h.actualBoundingBoxDescent,
                          left: h.actualBoundingBoxLeft,
                          right: h.actualBoundingBoxRight,
                          ascent: h.actualBoundingBoxAscent,
                          offsetX: 0,
                          offsetY: p,
                          textDecoration: void 0,
                        }),
                        (d += c),
                        a)
                      ) {
                        l || (l = this._measureText(o, t));
                        const e =
                          l.actualBoundingBoxLeft + l.actualBoundingBoxRight;
                        if (((d += e), d + e > s)) {
                          1 == b.textChunks.length
                            ? (this.textVisible = !1)
                            : ((b.width += e),
                              (b.left += l.actualBoundingBoxLeft),
                              (b.right += l.actualBoundingBoxRight),
                              b.textChunks.push({
                                style: u,
                                fill: f,
                                text: o,
                                width: e,
                                height: p + l.actualBoundingBoxDescent,
                                left: l.actualBoundingBoxLeft,
                                right: l.actualBoundingBoxRight,
                                ascent: l.actualBoundingBoxAscent,
                                offsetX: 0,
                                offsetY: p,
                                textDecoration: void 0,
                              }));
                          break;
                        }
                      }
                      if (r) break;
                    }
                  }
                }),
                  this.style.lineHeight instanceof C.gG
                    ? (b.height *= this.style.lineHeight.value)
                    : (b.height *= this.style.lineHeight || 1.2),
                  this._textInfo.push(b),
                  (p += b.height);
              }),
              c || (t.restore(), i.restore()),
              "hide" == n && d > s && (this.textVisible = !1),
              h.each(this._textInfo, (e) => {
                h.each(e.textChunks, (t) => {
                  t.offsetY += Math.round(
                    (e.height - t.height + (e.ascent - t.ascent)) / 2
                  );
                });
              }),
              t.restore(),
              i.restore(),
              { left: 0, top: 0, right: 0, bottom: 0 }
            );
          }
        }
        class Oe extends K {
          constructor(e, t) {
            super(e),
              Object.defineProperty(this, "width", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "height", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "image", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "tainted", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowColor", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowBlur", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowOffsetX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowOffsetY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shadowOpacity", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_imageMask", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.image = t);
          }
          _dispose() {
            super._dispose(), this._imageMask && $(this._imageMask);
          }
          getLocalBounds() {
            if (!this._localBounds) {
              let e = 0,
                t = 0;
              this.width && (e = this.width),
                this.height && (t = this.height),
                (this._localBounds = { left: 0, top: 0, right: e, bottom: t }),
                this._addBounds(this._localBounds);
            }
            return this._localBounds;
          }
          _render(e) {
            if ((super._render(e), this.image)) {
              const t = this._layer || e;
              if (
                (void 0 === this.tainted &&
                  ((this.tainted = X(this.image)), (t.tainted = !0)),
                this.tainted && this._renderer._omitTainted)
              )
                return;
              if (t.dirty) {
                this.shadowColor &&
                  (t.context.shadowColor = this.shadowColor.toCSS(
                    this.shadowOpacity || 1
                  )),
                  this.shadowBlur && (t.context.shadowBlur = this.shadowBlur),
                  this.shadowOffsetX &&
                    (t.context.shadowOffsetX = this.shadowOffsetX),
                  this.shadowOffsetY &&
                    (t.context.shadowOffsetY = this.shadowOffsetY);
                const e = this.width || this.image.naturalWidth,
                  i = this.height || this.image.naturalHeight;
                t.context.drawImage(this.image, 0, 0, e, i);
              }
              if (this.interactive && this._isInteractive()) {
                const e = this._getMask(this.image);
                this._renderer._ghostLayer.context.drawImage(e, 0, 0);
              }
            }
          }
          clear() {
            super.clear(), (this.image = void 0), (this._imageMask = void 0);
          }
          _getMask(e) {
            if (void 0 === this._imageMask) {
              const t = this.width || e.naturalWidth,
                i = this.height || e.naturalHeight,
                r = document.createElement("canvas");
              (r.width = t), (r.height = i);
              const n = r.getContext("2d");
              (n.imageSmoothingEnabled = !1),
                (n.fillStyle = this._getColorId()),
                n.fillRect(0, 0, t, i),
                X(e) ||
                  ((n.globalCompositeOperation = "destination-in"),
                  n.drawImage(e, 0, 0, t, i)),
                (this._imageMask = r);
            }
            return this._imageMask;
          }
        }
        class Pe {
          constructor(e, t, i, r) {
            Object.defineProperty(this, "event", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            }),
              Object.defineProperty(this, "originalPoint", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              }),
              Object.defineProperty(this, "point", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(this, "bbox", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              }),
              Object.defineProperty(this, "id", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "simulated", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "native", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              u.supports("touchevents") && e instanceof Touch
                ? (this.id = e.identifier)
                : (this.id = null);
          }
        }
        class De extends l.rk {
          constructor(e) {
            if (
              (super(),
              Object.defineProperty(this, "view", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: document.createElement("div"),
              }),
              Object.defineProperty(this, "_layerDom", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: document.createElement("div"),
              }),
              Object.defineProperty(this, "layers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_dirtyLayers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "defaultLayer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.getLayer(0),
              }),
              Object.defineProperty(this, "_ghostLayer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new ke(),
              }),
              Object.defineProperty(this, "_patternCanvas", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: document.createElement("canvas"),
              }),
              Object.defineProperty(this, "_patternContext", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._patternCanvas.getContext("2d"),
              }),
              Object.defineProperty(this, "_realWidth", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_realHeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_calculatedWidth", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_calculatedHeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "resolution", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "interactionsEnabled", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "_listeners", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_colorId", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_colorMap", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_forceInteractive", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_omitTainted", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_hovering", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Set(),
              }),
              Object.defineProperty(this, "_dragging", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_mousedown", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_lastPointerMoveEvent", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "tapToActivate", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "tapToActivateTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3e3,
              }),
              Object.defineProperty(this, "_touchActive", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_touchActiveTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.resolution = null == e ? window.devicePixelRatio : e),
              (this.view.style.position = "absolute"),
              this.view.setAttribute("aria-hidden", "true"),
              this.view.appendChild(this._layerDom),
              this._disposers.push(
                new l.ku(() => {
                  O.each(this._events, (e, t) => {
                    t.disposer.dispose();
                  }),
                    h.each(this.layers, (e) => {
                      $(e.view), e.exportableView && $(e.exportableView);
                    }),
                    $(this._ghostLayer.view),
                    $(this._patternCanvas);
                })
              ),
              this._disposers.push(
                u.onZoom(() => {
                  null == e && (this.resolution = window.devicePixelRatio);
                })
              ),
              u.supports("touchevents"))
            ) {
              const e = (e) => {
                0 !== this._dragging.length &&
                  h.eachContinue(
                    this._dragging,
                    (t) =>
                      !t.value.shouldCancelTouch() || (e.preventDefault(), !1)
                  ),
                  this._touchActiveTimeout && this._delayTouchDeactivate();
              };
              this._disposers.push(
                u.addEventListener(window, "touchstart", e, { passive: !1 })
              ),
                this._disposers.push(
                  u.addEventListener(this.view, "touchstart", e, {
                    passive: !1,
                  })
                ),
                this._disposers.push(
                  u.addEventListener(
                    this.view,
                    "touchmove",
                    () => {
                      this._touchActiveTimeout && this._delayTouchDeactivate();
                    },
                    { passive: !0 }
                  )
                ),
                this._disposers.push(
                  u.addEventListener(
                    window,
                    "click",
                    (e) => {
                      this._touchActive = !1;
                    },
                    { passive: !0 }
                  )
                ),
                this._disposers.push(
                  u.addEventListener(
                    this.view,
                    "click",
                    (e) => {
                      window.setTimeout(() => {
                        (this._touchActive = !0), this._delayTouchDeactivate();
                      }, 100);
                    },
                    { passive: !0 }
                  )
                );
            }
            u.supports("wheelevents") &&
              this._disposers.push(
                u.addEventListener(
                  this.view,
                  "wheel",
                  (e) => {
                    let t = !1;
                    this._hovering.forEach((e) => {
                      if (e.wheelable) return (t = !0), !1;
                    }),
                      t && e.preventDefault();
                  },
                  { passive: !1 }
                )
              );
          }
          _delayTouchDeactivate() {
            this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout),
              this.tapToActivateTimeout > 0 &&
                (this._touchActiveTimeout = window.setTimeout(() => {
                  this._touchActive = !1;
                }, this.tapToActivateTimeout));
          }
          get debugGhostView() {
            return !!this._ghostLayer.view.parentNode;
          }
          set debugGhostView(e) {
            e
              ? this._ghostLayer.view.parentNode ||
                this.view.appendChild(this._ghostLayer.view)
              : this._ghostLayer.view.parentNode &&
                this._ghostLayer.view.parentNode.removeChild(
                  this._ghostLayer.view
                );
          }
          createLinearGradient(e, t, i, r) {
            return this.defaultLayer.context.createLinearGradient(e, t, i, r);
          }
          createRadialGradient(e, t, i, r, n, s) {
            return this.defaultLayer.context.createRadialGradient(
              e,
              t,
              i,
              r,
              n,
              s
            );
          }
          createPattern(e, t, i, r, n) {
            return (
              (this._patternCanvas.width = r),
              (this._patternCanvas.height = n),
              this._patternContext.clearRect(0, 0, r, n),
              t.renderDetached(this._patternContext),
              e.renderDetached(this._patternContext),
              this._patternContext.createPattern(this._patternCanvas, i)
            );
          }
          makeContainer() {
            return new q(this);
          }
          makeGraphics() {
            return new ve(this);
          }
          makeText(e, t) {
            return new ye(this, e, t);
          }
          makeTextStyle() {
            return new we();
          }
          makeRadialText(e, t) {
            return new xe(this, e, t);
          }
          makePicture(e) {
            return new Oe(this, e);
          }
          resizeLayer(e) {
            e.resize(
              this._calculatedWidth,
              this._calculatedHeight,
              this._calculatedWidth,
              this._calculatedHeight,
              this.resolution
            );
          }
          resizeGhost() {
            this._ghostLayer.resize(
              this._calculatedWidth,
              this._calculatedHeight,
              this._calculatedWidth,
              this._calculatedHeight,
              this.resolution
            );
          }
          resize(e, t, i, r) {
            (this._realWidth = e),
              (this._realHeight = t),
              (this._calculatedWidth = i),
              (this._calculatedHeight = r),
              h.each(this.layers, (e) => {
                e && ((e.dirty = !0), this.resizeLayer(e));
              }),
              this.resizeGhost(),
              (this.view.style.width = i + "px"),
              (this.view.style.height = r + "px");
          }
          createDetachedLayer(e = !1) {
            const t = document.createElement("canvas"),
              i = t.getContext("2d", { willReadFrequently: e }),
              r = new Te(t, i);
            return (
              (t.style.position = "absolute"),
              (t.style.top = "0px"),
              (t.style.left = "0px"),
              r
            );
          }
          getLayerByOrder(e) {
            const t = this.layers,
              i = t.length;
            for (let r = 0; r < i; r++) {
              const i = t[r];
              if (i.order == e) return i;
            }
          }
          getLayer(e, t = !0) {
            let i = this.getLayerByOrder(e);
            if (i) return i;
            const r = this.createDetachedLayer(99 == e);
            (r.order = e), (r.visible = t), r.visible && this.resizeLayer(r);
            const n = this.layers;
            n.push(r),
              n.sort((e, t) =>
                e.order > t.order ? 1 : e.order < t.order ? -1 : 0
              );
            const s = n.length;
            let a;
            for (let e = h.indexOf(n, r) + 1; e < s; e++)
              if (n[e].visible) {
                a = n[e];
                break;
              }
            return (
              r.visible &&
                (void 0 === a
                  ? this._layerDom.appendChild(r.view)
                  : this._layerDom.insertBefore(r.view, a.view)),
              r
            );
          }
          render(e) {
            if (
              ((this._dirtyLayers.length = 0),
              h.each(this.layers, (e) => {
                e &&
                  e.dirty &&
                  e.visible &&
                  (this._dirtyLayers.push(e), e.clear());
              }),
              this._ghostLayer.clear(),
              e.render(this.defaultLayer),
              this._ghostLayer.context.restore(),
              h.each(this.layers, (e) => {
                if (e) {
                  const t = e.context;
                  t.beginPath(), t.moveTo(0, 0), t.stroke();
                }
              }),
              h.each(this._dirtyLayers, (e) => {
                e.context.restore(), (e.dirty = !1);
              }),
              this._hovering.size && this._lastPointerMoveEvent)
            ) {
              const {
                events: e,
                target: t,
                native: i,
              } = this._lastPointerMoveEvent;
              h.each(e, (e) => {
                this._dispatchGlobalMousemove(e, t, i);
              });
            }
          }
          paintId(e) {
            const t = (function (e) {
                const t = [0, 0, 0];
                for (let i = 0; i < 24; i++)
                  (t[i % 3] <<= 1), (t[i % 3] |= 1 & e), (e >>= 1);
                return (0 | t[2]) + (t[1] << 8) + (t[0] << 16);
              })(++this._colorId),
              i = E.Il.fromHex(t).toCSS();
            return (this._colorMap[i] = e), i;
          }
          _removeObject(e) {
            void 0 !== e._colorId && delete this._colorMap[e._colorId];
          }
          _adjustBoundingBox(e) {
            const t = this._ghostLayer.margin;
            return new DOMRect(
              -t.left,
              -t.top,
              e.width + t.left + t.right,
              e.height + t.top + t.bottom
            );
          }
          getEvent(e, t = !0) {
            const i = this.view.getBoundingClientRect(),
              r = e.clientX || 0,
              n = e.clientY || 0,
              s = this._calculatedWidth / this._realWidth,
              a = this._calculatedHeight / this._realHeight,
              o = { x: r - i.left, y: n - i.top },
              l = {
                x: (r - (t ? i.left : 0)) * s,
                y: (n - (t ? i.top : 0)) * a,
              };
            return new Pe(e, o, l, this._adjustBoundingBox(i));
          }
          _getHitTarget(e, t, i) {
            if (
              0 === t.width ||
              0 === t.height ||
              e.x < t.left ||
              e.x > t.right ||
              e.y < t.top ||
              e.y > t.bottom
            )
              return;
            if (!i || !this._layerDom.contains(i)) return;
            const r = this._ghostLayer.getImageData(e, t);
            if (0 === r.data[0] && 0 === r.data[1] && 0 === r.data[2])
              return !1;
            const n = E.Il.fromRGB(r.data[0], r.data[1], r.data[2]).toCSS();
            return this._colorMap[n];
          }
          _withEvents(e, t) {
            const i = this._events[e];
            if (void 0 !== i) {
              i.dispatching = !0;
              try {
                t(i);
              } finally {
                (i.dispatching = !1),
                  i.cleanup &&
                    ((i.cleanup = !1),
                    h.keepIf(i.callbacks, (e) => !e.disposed),
                    0 === i.callbacks.length &&
                      (i.disposer.dispose(), delete this._events[e]));
              }
            }
          }
          _dispatchEventAll(e, t) {
            this.interactionsEnabled &&
              this._withEvents(e, (e) => {
                h.each(e.callbacks, (e) => {
                  e.disposed || e.callback.call(e.context, t);
                });
              });
          }
          _dispatchEvent(e, t, i) {
            if (!this.interactionsEnabled) return !1;
            let r = !1;
            return (
              this._withEvents(e, (e) => {
                h.each(e.callbacks, (e) => {
                  e.disposed ||
                    e.object !== t ||
                    (e.callback.call(e.context, i), (r = !0));
                });
              }),
              r
            );
          }
          _dispatchMousedown(e, t) {
            const i = e.button;
            if (0 != i && 2 != i && 1 != i && void 0 !== i) return;
            const r = this.getEvent(e),
              n = this._getHitTarget(r.originalPoint, r.bbox, t);
            if (n) {
              const e = r.id;
              let t = !1;
              Y(n, (i) => {
                const n = { id: e, value: i };
                return (
                  this._mousedown.push(n),
                  !t &&
                    this._dispatchEvent("pointerdown", i, r) &&
                    ((t = !0),
                    this._dragging.some((t) => t.value === i && t.id === e) ||
                      this._dragging.push(n)),
                  !0
                );
              });
            }
          }
          _dispatchGlobalMousemove(e, t, i) {
            const r = this.getEvent(e),
              n = this._getHitTarget(r.originalPoint, r.bbox, t);
            (r.native = i),
              n
                ? (this._hovering.forEach((e) => {
                    e.contains(n) ||
                      (this._hovering.delete(e),
                      e.cursorOverStyle &&
                        u.setStyle(
                          document.body,
                          "cursor",
                          e._replacedCursorStyle
                        ),
                      this._dispatchEvent("pointerout", e, r));
                  }),
                  r.native &&
                    Y(
                      n,
                      (e) => (
                        this._hovering.has(e) ||
                          (this._hovering.add(e),
                          e.cursorOverStyle &&
                            ((e._replacedCursorStyle = u.getStyle(
                              document.body,
                              "cursor"
                            )),
                            u.setStyle(
                              document.body,
                              "cursor",
                              e.cursorOverStyle
                            )),
                          this._dispatchEvent("pointerover", e, r)),
                        !0
                      )
                    ))
                : (this._hovering.forEach((e) => {
                    e.cursorOverStyle &&
                      u.setStyle(
                        document.body,
                        "cursor",
                        e._replacedCursorStyle
                      ),
                      this._dispatchEvent("pointerout", e, r);
                  }),
                  this._hovering.clear()),
              this._dispatchEventAll("globalpointermove", r);
          }
          _dispatchGlobalMouseup(e, t) {
            const i = this.getEvent(e);
            (i.native = t), this._dispatchEventAll("globalpointerup", i);
          }
          _dispatchDragMove(e) {
            if (0 !== this._dragging.length) {
              const t = this.getEvent(e),
                i = t.id;
              this._dragging.forEach((e) => {
                e.id === i && this._dispatchEvent("pointermove", e.value, t);
              });
            }
          }
          _dispatchDragEnd(e, t) {
            const i = e.button;
            let r;
            if (0 == i || void 0 === i) r = "click";
            else if (2 == i) r = "rightclick";
            else {
              if (1 != i) return;
              r = "middleclick";
            }
            const n = this.getEvent(e),
              s = n.id;
            if (0 !== this._mousedown.length) {
              const e = this._getHitTarget(n.originalPoint, n.bbox, t);
              e &&
                this._mousedown.forEach((t) => {
                  t.id === s &&
                    t.value.contains(e) &&
                    this._dispatchEvent(r, t.value, n);
                }),
                (this._mousedown.length = 0);
            }
            0 !== this._dragging.length &&
              (this._dragging.forEach((e) => {
                e.id === s && this._dispatchEvent("pointerup", e.value, n);
              }),
              (this._dragging.length = 0));
          }
          _dispatchDoubleClick(e, t) {
            const i = this.getEvent(e),
              r = this._getHitTarget(i.originalPoint, i.bbox, t);
            r && Y(r, (e) => !this._dispatchEvent("dblclick", e, i));
          }
          _dispatchWheel(e, t) {
            const i = this.getEvent(e),
              r = this._getHitTarget(i.originalPoint, i.bbox, t);
            r && Y(r, (e) => !this._dispatchEvent("wheel", e, i));
          }
          _makeSharedEvent(e, t) {
            if (void 0 === this._listeners[e]) {
              const i = t();
              this._listeners[e] = new l.DM(() => {
                delete this._listeners[e], i.dispose();
              });
            }
            return this._listeners[e].increment();
          }
          _onPointerEvent(e, t) {
            let i = !1,
              r = null;
            function n() {
              (r = null), (i = !1);
            }
            return new l.FV([
              new l.ku(() => {
                null !== r && clearTimeout(r), n();
              }),
              u.addEventListener(this.view, u.getRendererEvent(e), (e) => {
                (i = !0),
                  null !== r && clearTimeout(r),
                  (r = window.setTimeout(n, 0));
              }),
              W(window, e, (e, n) => {
                null !== r && (clearTimeout(r), (r = null)),
                  t(e, n, i),
                  (i = !1);
              }),
            ]);
          }
          _initEvent(e) {
            switch (e) {
              case "globalpointermove":
              case "pointerover":
              case "pointerout":
                return this._makeSharedEvent("pointermove", () => {
                  const e = (e, t, i) => {
                    (this._lastPointerMoveEvent = {
                      events: e,
                      target: t,
                      native: i,
                    }),
                      h.each(e, (e) => {
                        this._dispatchGlobalMousemove(e, t, i);
                      });
                  };
                  return new l.FV([
                    this._onPointerEvent("pointerdown", e),
                    this._onPointerEvent("pointermove", e),
                  ]);
                });
              case "globalpointerup":
                return this._makeSharedEvent("pointerup", () => {
                  const e = this._onPointerEvent("pointerup", (e, t, i) => {
                      h.each(e, (e) => {
                        this._dispatchGlobalMouseup(e, i);
                      }),
                        (this._lastPointerMoveEvent = {
                          events: e,
                          target: t,
                          native: i,
                        });
                    }),
                    t = this._onPointerEvent("pointercancel", (e, t, i) => {
                      h.each(e, (e) => {
                        this._dispatchGlobalMouseup(e, i);
                      }),
                        (this._lastPointerMoveEvent = {
                          events: e,
                          target: t,
                          native: i,
                        });
                    });
                  return new l.ku(() => {
                    e.dispose(), t.dispose();
                  });
                });
              case "click":
              case "rightclick":
              case "middleclick":
              case "pointerdown":
              case "pointermove":
              case "pointerup":
                return this._makeSharedEvent("pointerdown", () => {
                  const e = this._onPointerEvent("pointerdown", (e, t) => {
                      h.each(e, (e) => {
                        this._dispatchMousedown(e, t);
                      });
                    }),
                    t = this._onPointerEvent("pointermove", (e) => {
                      h.each(e, (e) => {
                        this._dispatchDragMove(e);
                      });
                    }),
                    i = this._onPointerEvent("pointerup", (e, t) => {
                      h.each(e, (e) => {
                        this._dispatchDragEnd(e, t);
                      });
                    }),
                    r = this._onPointerEvent("pointercancel", (e, t) => {
                      h.each(e, (e) => {
                        this._dispatchDragEnd(e, t);
                      });
                    });
                  return new l.ku(() => {
                    e.dispose(), t.dispose(), i.dispose(), r.dispose();
                  });
                });
              case "dblclick":
                return this._makeSharedEvent("dblclick", () =>
                  this._onPointerEvent("dblclick", (e, t) => {
                    h.each(e, (e) => {
                      this._dispatchDoubleClick(e, t);
                    });
                  })
                );
              case "wheel":
                return this._makeSharedEvent("wheel", () =>
                  u.addEventListener(
                    window,
                    u.getRendererEvent("wheel"),
                    (e) => {
                      this._dispatchWheel(e, u.getEventTarget(e));
                    },
                    { passive: !1 }
                  )
                );
            }
          }
          _addEvent(e, t, i, r) {
            let n = this._events[t];
            void 0 === n &&
              (n = this._events[t] =
                {
                  disposer: this._initEvent(t),
                  callbacks: [],
                  dispatching: !1,
                  cleanup: !1,
                });
            const s = { object: e, context: r, callback: i, disposed: !1 };
            return (
              n.callbacks.push(s),
              new l.ku(() => {
                (s.disposed = !0),
                  n.dispatching
                    ? (n.cleanup = !0)
                    : (h.removeFirst(n.callbacks, s),
                      0 === n.callbacks.length &&
                        (n.disposer.dispose(), delete this._events[t]));
              })
            );
          }
          getCanvas(e, t) {
            this.render(e), t || (t = {});
            let i = this.resolution,
              r = Math.floor(this._calculatedWidth * this.resolution),
              n = Math.floor(this._calculatedHeight * this.resolution);
            if (t.minWidth && t.minWidth > r) {
              let e = t.minWidth / r;
              e > i && (i = e * this.resolution);
            }
            if (t.minHeight && t.minHeight > n) {
              let e = t.minHeight / n;
              e > i && (i = e * this.resolution);
            }
            if (t.maxWidth && t.maxWidth < r) {
              let e = t.maxWidth / r;
              e < i && (i = e * this.resolution);
            }
            if (t.maxHeight && t.maxHeight > n) {
              let e = t.maxHeight / n;
              e < i && (i = e * this.resolution);
            }
            t.maintainPixelRatio && (i /= this.resolution);
            const s = [];
            let a = !1;
            const o = document.createElement("canvas");
            i != this.resolution &&
              ((a = !0),
              (r = (r * i) / this.resolution),
              (n = (n * i) / this.resolution)),
              (o.width = r),
              (o.height = n),
              (o.style.position = "fixed"),
              (o.style.top = "-10000px"),
              this.view.appendChild(o),
              s.push(o);
            const l = o.getContext("2d");
            let u = 0,
              c = 0,
              d = !1;
            return (
              h.each(this.layers, (e) => {
                if (e && e.visible && (e.tainted || a)) {
                  (d = !0),
                    (e.exportableView = e.view),
                    (e.exportableContext = e.context),
                    (e.view = document.createElement("canvas")),
                    (e.view.style.position = "fixed"),
                    (e.view.style.top = "-10000px"),
                    this.view.appendChild(e.view),
                    s.push(e.view);
                  let t = 0,
                    a = 0;
                  e.margin &&
                    ((t += e.margin.left || 0 + e.margin.right || 0),
                    (a += e.margin.top || 0 + e.margin.bottom || 0)),
                    (e.view.width = r + t),
                    (e.view.height = n + a),
                    (e.context = e.view.getContext("2d")),
                    (e.dirty = !0),
                    (e.scale = i);
                }
              }),
              d &&
                ((this._omitTainted = !0),
                this.render(e),
                (this._omitTainted = !1)),
              h.each(this.layers, (e) => {
                if (e && e.visible) {
                  let t = 0,
                    i = 0;
                  e.margin &&
                    ((t = -(e.margin.left || 0) * this.resolution),
                    (i = -(e.margin.top || 0) * this.resolution)),
                    l.drawImage(e.view, t, i),
                    e.exportableView &&
                      ((e.view = e.exportableView),
                      (e.exportableView = void 0)),
                    e.exportableContext &&
                      ((e.context = e.exportableContext),
                      (e.exportableContext = void 0)),
                    u < e.view.clientWidth && (u = e.view.clientWidth),
                    c < e.view.clientHeight && (c = e.view.clientHeight),
                    (e.scale = void 0);
                }
              }),
              (o.style.width = u + "px"),
              (o.style.height = c + "px"),
              h.each(s, (e) => {
                (e.style.position = ""),
                  (e.style.top = ""),
                  this.view.removeChild(e);
              }),
              o
            );
          }
        }
        class ke {
          constructor() {
            Object.defineProperty(this, "view", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "context", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "margin", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: { left: 0, right: 0, top: 0, bottom: 0 },
              }),
              Object.defineProperty(this, "_width", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_height", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              (this.view = document.createElement("canvas")),
              (this.context = this.view.getContext("2d", {
                alpha: !1,
                willReadFrequently: !0,
              })),
              (this.context.imageSmoothingEnabled = !1),
              (this.view.style.position = "absolute"),
              (this.view.style.top = "0px"),
              (this.view.style.left = "0px");
          }
          resize(e, t, i, r, n) {
            (e += this.margin.left + this.margin.right),
              (t += this.margin.top + this.margin.bottom),
              (i += this.margin.left + this.margin.right),
              (r += this.margin.top + this.margin.bottom),
              (this.view.style.left = -this.margin.left + "px"),
              (this.view.style.top = -this.margin.top + "px"),
              (this._width = Math.floor(e * n)),
              (this._height = Math.floor(t * n)),
              (this.view.width = this._width),
              (this.view.style.width = i + "px"),
              (this.view.height = this._height),
              (this.view.style.height = r + "px");
          }
          getImageData(e, t) {
            return this.context.getImageData(
              Math.round(((e.x - t.left) / t.width) * this._width),
              Math.round(((e.y - t.top) / t.height) * this._height),
              1,
              1
            );
          }
          setMargin(e) {
            (this.margin.left = 0),
              (this.margin.right = 0),
              (this.margin.top = 0),
              (this.margin.bottom = 0),
              h.each(e, (e) => {
                e.margin &&
                  ((this.margin.left = Math.max(
                    this.margin.left,
                    e.margin.left
                  )),
                  (this.margin.right = Math.max(
                    this.margin.right,
                    e.margin.right
                  )),
                  (this.margin.top = Math.max(this.margin.top, e.margin.top)),
                  (this.margin.bottom = Math.max(
                    this.margin.bottom,
                    e.margin.bottom
                  )));
              });
          }
          clear() {
            this.context.save(),
              (this.context.fillStyle = "#000"),
              this.context.fillRect(0, 0, this._width, this._height);
          }
        }
        class Te {
          constructor(e, t) {
            Object.defineProperty(this, "view", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "context", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "tainted", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "margin", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "order", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "visible", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "width", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "height", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "scale", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "dirty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "exportableView", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "exportableContext", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_width", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_height", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              (this.view = e),
              (this.context = t);
          }
          resize(e, t, i, r, n) {
            null != this.width && ((e = this.width), (i = this.width)),
              null != this.height && ((t = this.height), (r = this.height)),
              this.margin
                ? ((e += this.margin.left + this.margin.right),
                  (t += this.margin.top + this.margin.bottom),
                  (i += this.margin.left + this.margin.right),
                  (r += this.margin.top + this.margin.bottom),
                  (this.view.style.left = -this.margin.left + "px"),
                  (this.view.style.top = -this.margin.top + "px"))
                : ((this.view.style.left = "0px"),
                  (this.view.style.top = "0px")),
              (this._width = Math.floor(e * n)),
              (this._height = Math.floor(t * n)),
              (this.view.width = this._width),
              (this.view.style.width = i + "px"),
              (this.view.height = this._height),
              (this.view.style.height = r + "px");
          }
          clear() {
            this.context.save(),
              this.context.clearRect(0, 0, this._width, this._height);
          }
        }
        var Me = i(2132),
          Ee = i(3145),
          Se = i(3540);
        function Ce(e, t) {
          null == e
            ? requestAnimationFrame(t)
            : setTimeout(() => {
                requestAnimationFrame(t);
              }, 1e3 / e);
        }
        class Ne {
          constructor(e, t = {}, i) {
            if (
              (Object.defineProperty(this, "dom", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_inner", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_settings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_isDirty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_isDirtyParents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_dirty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_dirtyParents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_dirtyBounds", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_dirtyPositions", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_ticker", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "_tickers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_updateTick", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new k.p(),
              }),
              Object.defineProperty(this, "animationTime", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "_animations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_renderer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_rootContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "container", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "tooltipContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltipContainerSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltip", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "language", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: D.new(this, {}),
              }),
              Object.defineProperty(this, "locale", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: P.Z,
              }),
              Object.defineProperty(this, "utc", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "timezone", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "fps", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "numberFormatter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: v.e.new(this, {}),
              }),
              Object.defineProperty(this, "dateFormatter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: y.C.new(this, {}),
              }),
              Object.defineProperty(this, "durationFormatter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: w.$.new(this, {}),
              }),
              Object.defineProperty(this, "tabindex", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_tabindexes", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_a11yD", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_focusElementDirty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_focusElementContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_focusedSprite", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_isShift", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_keyboardDragPoint", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltipElementContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_readerAlertElement", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_logo", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltipDiv", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "nonce", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "interfaceColors", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "verticalLayout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a.Z.new(this, {}),
              }),
              Object.defineProperty(this, "horizontalLayout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s.G.new(this, {}),
              }),
              Object.defineProperty(this, "gridLayout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o.M.new(this, {}),
              }),
              Object.defineProperty(this, "_paused", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "autoResize", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "_fontHash", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "",
              }),
              Object.defineProperty(this, "_isDisposed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_disposers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_resizeSensorDisposer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltips", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_htmlElementContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_htmlEnabledContainers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              !i)
            )
              throw new Error(
                "You cannot use `new Class()`, instead use `Class.new()`"
              );
            let r, n;
            if (
              ((this._settings = t),
              0 == t.accessible && (this._a11yD = !0),
              null == t.useSafeResolution && (t.useSafeResolution = !0),
              t.useSafeResolution && (r = u.getSafeResolution()),
              (this._renderer = new De(r)),
              (n = e instanceof HTMLElement ? e : document.getElementById(e)),
              h.each(Ee.i_.rootElements, (e) => {
                if (e.dom === n)
                  throw new Error(
                    "You cannot have multiple Roots on the same DOM node"
                  );
              }),
              (this.interfaceColors = g.v.new(this, {})),
              null === n)
            )
              throw new Error(
                "Could not find HTML element with id `" + e + "`"
              );
            this.dom = n;
            let l = document.createElement("div");
            (l.style.position = "relative"),
              (l.style.width = "100%"),
              (l.style.height = "100%"),
              n.appendChild(l);
            const c = t.tooltipContainerBounds;
            c && (this._tooltipContainerSettings = c),
              (this._inner = l),
              this._updateComputedStyles(),
              Ee.i_.rootElements.push(this);
          }
          static new(e, t) {
            const i = new Ne(e, t, !0);
            return i._init(), i;
          }
          moveDOM(e) {
            let t;
            if (
              ((t = e instanceof HTMLElement ? e : document.getElementById(e)),
              t)
            ) {
              for (; this.dom.childNodes.length > 0; )
                t.appendChild(this.dom.childNodes[0]);
              (this.dom = t), this._initResizeSensor(), this.resize();
            }
          }
          _handleLogo() {
            if (this._logo) {
              const e = this.dom.offsetWidth,
                t = this.dom.offsetHeight;
              e <= 150 || t <= 60 ? this._logo.hide() : this._logo.show();
            }
          }
          _showBranding() {
            if (!this._logo) {
              const e = this.tooltipContainer.children.push(
                  r.W.new(this, {
                    interactive: !0,
                    interactiveChildren: !1,
                    position: "absolute",
                    setStateOnChildren: !0,
                    paddingTop: 9,
                    paddingRight: 9,
                    paddingBottom: 9,
                    paddingLeft: 9,
                    scale: 0.6,
                    y: (0, C.aQ)(100),
                    centerY: C.AQ,
                    tooltipText: "Created using amCharts 5",
                    tooltipX: C.AQ,
                    cursorOverStyle: "pointer",
                    background: b.A.new(this, {
                      fill: (0, E.$_)(4671320),
                      fillOpacity: 0,
                      tooltipY: 5,
                    }),
                  })
                ),
                t = _.u.new(this, {
                  pointerOrientation: "horizontal",
                  paddingTop: 4,
                  paddingRight: 7,
                  paddingBottom: 4,
                  paddingLeft: 7,
                });
              t.label.setAll({ fontSize: 12 }),
                t.get("background").setAll({
                  fill: this.interfaceColors.get("background"),
                  stroke: this.interfaceColors.get("grid"),
                  strokeOpacity: 0.3,
                }),
                e.set("tooltip", t),
                e.events.on("click", () => {
                  window.open("https://www.amcharts.com/", "_blank");
                }),
                e.states.create("hover", {}),
                e.children
                  .push(
                    m.T.new(this, {
                      stroke: (0, E.$_)(13421772),
                      strokeWidth: 3,
                      svgPath:
                        "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6",
                    })
                  )
                  .states.create("hover", { stroke: (0, E.$_)(3976191) }),
                e.children
                  .push(
                    m.T.new(this, {
                      stroke: (0, E.$_)(8947848),
                      strokeWidth: 3,
                      svgPath:
                        "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0",
                    })
                  )
                  .states.create("hover", { stroke: (0, E.$_)(4671320) }),
                (this._logo = e),
                this._handleLogo();
            }
          }
          _getRealSize() {
            return this.dom.getBoundingClientRect();
          }
          _getCalculatedSize(e) {
            return this._settings.calculateSize
              ? this._settings.calculateSize(e)
              : { width: e.width, height: e.height };
          }
          _init() {
            const e = this._settings;
            !1 !== e.accessible &&
              (e.focusable &&
                (this._inner.setAttribute("focusable", "true"),
                this._inner.setAttribute("tabindex", this.tabindex + "")),
              e.ariaLabel &&
                this._inner.setAttribute("aria-label", e.ariaLabel));
            const t = this._renderer,
              i = this._getRealSize(),
              n = this._getCalculatedSize(i),
              s = Math.floor(n.width),
              a = Math.floor(n.height),
              o = Math.floor(i.width),
              l = Math.floor(i.height),
              h = r.W.new(this, { visible: !0, width: s, height: a });
            (this._rootContainer = h),
              this._rootContainer._defaultThemes.push(T.X.new(this));
            const c = h.children.push(
              r.W.new(this, { visible: !0, width: C.AQ, height: C.AQ })
            );
            (this.container = c),
              t.resize(o, l, s, a),
              this._inner.appendChild(t.view),
              this._initResizeSensor();
            const d = document.createElement("div");
            if (
              ((this._htmlElementContainer = d),
              (d.className = "am5-html-container"),
              (d.style.position = "absolute"),
              (d.style.pointerEvents = "none"),
              this._tooltipContainerSettings || (d.style.overflow = "hidden"),
              this._inner.appendChild(d),
              !0 !== this._a11yD)
            ) {
              const e = document.createElement("div");
              (e.className = "am5-reader-container"),
                e.setAttribute("role", "alert"),
                (e.style.position = "absolute"),
                (e.style.width = "1px"),
                (e.style.height = "1px"),
                (e.style.overflow = "hidden"),
                (e.style.clip = "rect(1px, 1px, 1px, 1px)"),
                (this._readerAlertElement = e),
                this._inner.appendChild(this._readerAlertElement);
              const i = document.createElement("div");
              (i.className = "am5-focus-container"),
                (i.style.position = "absolute"),
                (i.style.pointerEvents = "none"),
                (i.style.top = "0px"),
                (i.style.left = "0px"),
                (i.style.overflow = "hidden"),
                (i.style.width = s + "px"),
                (i.style.height = a + "px"),
                i.setAttribute("role", "graphics-document"),
                u.setInteractive(i, !1),
                (this._focusElementContainer = i),
                this._inner.appendChild(this._focusElementContainer);
              const r = document.createElement("div");
              (this._tooltipElementContainer = r),
                (r.className = "am5-tooltip-container"),
                this._inner.appendChild(r),
                u.supports("keyboardevents") &&
                  (this._disposers.push(
                    u.addEventListener(window, "keydown", (e) => {
                      16 == e.keyCode
                        ? (this._isShift = !0)
                        : 9 == e.keyCode && (this._isShift = e.shiftKey);
                    })
                  ),
                  this._disposers.push(
                    u.addEventListener(window, "keyup", (e) => {
                      16 == e.keyCode && (this._isShift = !1);
                    })
                  ),
                  this._disposers.push(
                    u.addEventListener(i, "click", () => {
                      const e = this._focusedSprite;
                      if (e) {
                        const i = t.getEvent(new MouseEvent("click"));
                        e.events.dispatch("click", {
                          type: "click",
                          originalEvent: i.event,
                          point: i.point,
                          simulated: !0,
                          target: e,
                        });
                      }
                    })
                  ),
                  this._disposers.push(
                    u.addEventListener(i, "keydown", (e) => {
                      const i = this._focusedSprite;
                      if (i) {
                        27 == e.keyCode &&
                          (u.blur(), (this._focusedSprite = void 0));
                        let r = 0,
                          n = 0;
                        switch (e.keyCode) {
                          case 13:
                            e.preventDefault();
                            const s = t.getEvent(new MouseEvent("click"));
                            return void i.events.dispatch("click", {
                              type: "click",
                              originalEvent: s.event,
                              point: s.point,
                              simulated: !0,
                              target: i,
                            });
                          case 37:
                            r = -6;
                            break;
                          case 39:
                            r = 6;
                            break;
                          case 38:
                            n = -6;
                            break;
                          case 40:
                            n = 6;
                            break;
                          default:
                            return;
                        }
                        if (0 != r || 0 != n) {
                          if ((e.preventDefault(), !i.isDragging())) {
                            this._keyboardDragPoint = { x: 0, y: 0 };
                            const e = t.getEvent(
                              new MouseEvent("mousedown", {
                                clientX: 0,
                                clientY: 0,
                              })
                            );
                            i.events.isEnabled("pointerdown") &&
                              i.events.dispatch("pointerdown", {
                                type: "pointerdown",
                                originalEvent: e.event,
                                point: e.point,
                                simulated: !0,
                                target: i,
                              });
                          }
                          const s = this._keyboardDragPoint;
                          (s.x += r), (s.y += n);
                          const a = t.getEvent(
                            new MouseEvent("mousemove", {
                              clientX: s.x,
                              clientY: s.y,
                            }),
                            !1
                          );
                          i.events.isEnabled("globalpointermove") &&
                            i.events.dispatch("globalpointermove", {
                              type: "globalpointermove",
                              originalEvent: a.event,
                              point: a.point,
                              simulated: !0,
                              target: i,
                            });
                        }
                      }
                    })
                  ),
                  this._disposers.push(
                    u.addEventListener(i, "keyup", (e) => {
                      if (this._focusedSprite) {
                        const i = this._focusedSprite,
                          r = e.keyCode;
                        switch (r) {
                          case 37:
                          case 39:
                          case 38:
                          case 40:
                            if (i.isDragging()) {
                              const e = this._keyboardDragPoint,
                                r = t.getEvent(
                                  new MouseEvent("mouseup", {
                                    clientX: e.x,
                                    clientY: e.y,
                                  })
                                );
                              return (
                                i.events.isEnabled("globalpointerup") &&
                                  i.events.dispatch("globalpointerup", {
                                    type: "globalpointerup",
                                    originalEvent: r.event,
                                    point: r.point,
                                    simulated: !0,
                                    target: i,
                                  }),
                                void (this._keyboardDragPoint = void 0)
                              );
                            }
                            if (i.get("focusableGroup")) {
                              const e = i.get("focusableGroup"),
                                t = this._tabindexes.filter(
                                  (t) =>
                                    t.get("focusableGroup") == e &&
                                    !1 !== t.getPrivate("focusable")
                                );
                              let n = t.indexOf(i);
                              const s = t.length - 1;
                              (n += 39 == r || 40 == r ? 1 : -1),
                                n < 0 ? (n = s) : n > s && (n = 0),
                                u.focus(t[n].getPrivate("focusElement").dom);
                            }
                        }
                      }
                    })
                  ));
            }
            this._startTicker(),
              this.setThemes([]),
              this._addTooltip(),
              this._hasLicense() || this._showBranding();
          }
          _initResizeSensor() {
            this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(),
              (this._resizeSensorDisposer = new f(this.dom, () => {
                this.autoResize && this.resize();
              })),
              this._disposers.push(this._resizeSensorDisposer);
          }
          resize() {
            const e = this._getRealSize(),
              t = this._getCalculatedSize(e),
              i = Math.floor(t.width),
              r = Math.floor(t.height);
            if (i > 0 && r > 0) {
              const t = Math.floor(e.width),
                n = Math.floor(e.height),
                s = this._htmlElementContainer;
              if (
                ((s.style.width = i + "px"),
                (s.style.height = r + "px"),
                !0 !== this._a11yD)
              ) {
                const e = this._focusElementContainer;
                (e.style.width = i + "px"), (e.style.height = r + "px");
              }
              this._renderer.resize(t, n, i, r);
              const a = this._rootContainer;
              a.setPrivate("width", i),
                a.setPrivate("height", r),
                this._render(),
                this._handleLogo();
            }
          }
          _render() {
            this._renderer.render(this._rootContainer._display),
              this._focusElementDirty &&
                (this._updateCurrentFocus(), (this._focusElementDirty = !1));
          }
          _runTickers(e) {
            h.each(this._tickers, (t) => {
              t(e);
            });
          }
          _runAnimations(e) {
            h.keepIf(this._animations, (t) => t._runAnimation(e));
          }
          _runDirties() {
            let e = {};
            for (; this._isDirtyParents; )
              (this._isDirtyParents = !1),
                O.keys(this._dirtyParents).forEach((t) => {
                  const i = this._dirtyParents[t];
                  delete this._dirtyParents[t],
                    i.isDisposed() || ((e[i.uid] = i), i._prepareChildren());
                });
            O.keys(e).forEach((t) => {
              e[t]._updateChildren();
            });
            const t = [];
            O.keys(this._dirty).forEach((e) => {
              const i = this._dirty[e];
              i.isDisposed()
                ? delete this._dirty[i.uid]
                : (t.push(i), i._beforeChanged());
            }),
              t.forEach((e) => {
                e._changed(), delete this._dirty[e.uid], e._clearDirty();
              }),
              (this._isDirty = !1);
            const i = {},
              r = [];
            O.keys(this._dirtyBounds).forEach((e) => {
              const t = this._dirtyBounds[e];
              delete this._dirtyBounds[e],
                t.isDisposed() || ((i[t.uid] = t.depth()), r.push(t));
            }),
              this._positionHTMLElements(),
              r.sort((e, t) => Se.qu(i[t.uid], i[e.uid])),
              r.forEach((e) => {
                e._updateBounds();
              });
            const n = this._dirtyPositions;
            O.keys(n).forEach((e) => {
              const t = n[e];
              delete n[e], t.isDisposed() || t._updatePosition();
            }),
              t.forEach((e) => {
                e._afterChanged();
              });
          }
          _renderFrame(e) {
            return (
              !this._updateTick ||
              (this.events.isEnabled("framestarted") &&
                this.events.dispatch("framestarted", {
                  type: "framestarted",
                  target: this,
                  timestamp: e,
                }),
              this._checkComputedStyles(),
              this._runTickers(e),
              this._runAnimations(e),
              this._runDirties(),
              this._render(),
              this._positionHTMLElements(),
              this.events.isEnabled("frameended") &&
                this.events.dispatch("frameended", {
                  type: "frameended",
                  target: this,
                  timestamp: e,
                }),
              0 === this._tickers.length &&
                0 === this._animations.length &&
                !this._isDirty)
            );
          }
          _runTicker(e, t) {
            this.isDisposed() ||
              ((this.animationTime = e),
              this._renderFrame(e)
                ? ((this._ticker = null), (this.animationTime = null))
                : this._paused ||
                  (t ? this._ticker : Ce(this.fps, this._ticker)));
          }
          _runTickerNow(e = 1e4) {
            if (!this.isDisposed()) {
              const t = performance.now() + e;
              for (;;) {
                const e = performance.now();
                if (e >= t) {
                  this.animationTime = null;
                  break;
                }
                if (((this.animationTime = e), this._renderFrame(e))) {
                  this.animationTime = null;
                  break;
                }
              }
            }
          }
          _startTicker() {
            null === this._ticker &&
              ((this.animationTime = null),
              (this._ticker = (e) => {
                this._runTicker(e);
              }),
              Ce(this.fps, this._ticker));
          }
          get updateTick() {
            return this._updateTick;
          }
          set updateTick(e) {
            (this._updateTick = e), e && this._startTicker();
          }
          _addDirtyEntity(e) {
            void 0 === this._dirty[e.uid] &&
              ((this._isDirty = !0),
              (this._dirty[e.uid] = e),
              this._startTicker());
          }
          _addDirtyParent(e) {
            void 0 === this._dirtyParents[e.uid] &&
              ((this._isDirty = !0),
              (this._isDirtyParents = !0),
              (this._dirtyParents[e.uid] = e),
              this._startTicker());
          }
          _addDirtyBounds(e) {
            void 0 === this._dirtyBounds[e.uid] &&
              ((this._isDirty = !0),
              (this._dirtyBounds[e.uid] = e),
              this._startTicker());
          }
          _addDirtyPosition(e) {
            void 0 === this._dirtyPositions[e.uid] &&
              ((this._isDirty = !0),
              (this._dirtyPositions[e.uid] = e),
              this._startTicker());
          }
          _addAnimation(e) {
            -1 === this._animations.indexOf(e) &&
              (this._animations.push(e), this._startTicker());
          }
          _markDirty() {
            this._isDirty = !0;
          }
          _markDirtyRedraw() {
            this.events.once("frameended", () => {
              (this._isDirty = !0), this._startTicker();
            });
          }
          eachFrame(e) {
            return (
              this._tickers.push(e),
              this._startTicker(),
              new l.ku(() => {
                h.removeFirst(this._tickers, e);
              })
            );
          }
          markDirtyGlobal(e) {
            e || (e = this.container),
              e.walkChildren((e) => {
                e instanceof r.W && this.markDirtyGlobal(e),
                  e.markDirty(),
                  e.markDirtyBounds();
              });
          }
          width() {
            return Math.floor(
              this._getCalculatedSize(this._getRealSize()).width
            );
          }
          height() {
            return Math.floor(
              this._getCalculatedSize(this._getRealSize()).height
            );
          }
          dispose() {
            this._isDisposed ||
              ((this._isDisposed = !0),
              this._rootContainer.dispose(),
              this._renderer.dispose(),
              this.horizontalLayout.dispose(),
              this.verticalLayout.dispose(),
              this.interfaceColors.dispose(),
              h.each(this._disposers, (e) => {
                e.dispose();
              }),
              this._inner && u.removeElement(this._inner),
              h.remove(Ee.i_.rootElements, this));
          }
          isDisposed() {
            return this._isDisposed;
          }
          readerAlert(e) {
            !0 !== this._a11yD &&
              (this._readerAlertElement.innerHTML = u.stripTags(e));
          }
          setThemes(e) {
            this._rootContainer.set("themes", e);
            const t = this.tooltipContainer;
            t && t._applyThemes();
            const i = this.interfaceColors;
            i && i._applyThemes();
          }
          _addTooltip() {
            if (!this.tooltipContainer) {
              const e = this._tooltipContainerSettings,
                t = this._rootContainer.children.push(
                  r.W.new(this, {
                    position: "absolute",
                    isMeasured: !1,
                    width: C.AQ,
                    height: C.AQ,
                    layer: e ? 35 : 30,
                    layerMargin: e || void 0,
                  })
                );
              this.tooltipContainer = t;
              const i = _.u.new(this, {});
              this.container.set("tooltip", i), i.hide(0), (this._tooltip = i);
            }
          }
          _registerTabindexOrder(e) {
            1 != this._a11yD &&
              (e.get("focusable")
                ? h.pushOne(this._tabindexes, e)
                : h.remove(this._tabindexes, e),
              this._invalidateTabindexes());
          }
          _unregisterTabindexOrder(e) {
            1 != this._a11yD &&
              (h.remove(this._tabindexes, e), this._invalidateTabindexes());
          }
          _invalidateTabindexes() {
            if (1 == this._a11yD) return;
            this._tabindexes.sort((e, t) => {
              const i = e.get("tabindexOrder", 0),
                r = t.get("tabindexOrder", 0);
              return i == r ? 0 : i > r ? 1 : -1;
            });
            const e = [];
            h.each(this._tabindexes, (t, i) => {
              t.getPrivate("focusElement")
                ? this._moveFocusElement(i, t)
                : this._makeFocusElement(i, t);
              const r = t.get("focusableGroup");
              r &&
                !1 !== t.getPrivate("focusable") &&
                (-1 !== e.indexOf(r)
                  ? t
                      .getPrivate("focusElement")
                      .dom.setAttribute("tabindex", "-1")
                  : e.push(r));
            });
          }
          _updateCurrentFocus() {
            1 != this._a11yD &&
              this._focusedSprite &&
              (this._decorateFocusElement(this._focusedSprite),
              this._positionFocusElement(this._focusedSprite));
          }
          _decorateFocusElement(e, t) {
            if (1 == this._a11yD) return;
            if ((t || (t = e.getPrivate("focusElement").dom), !t)) return;
            const i = e.get("role");
            i ? t.setAttribute("role", i) : t.removeAttribute("role");
            const r = e.get("ariaLabel");
            if (r) {
              const i = (0, Me.q)(e, r);
              t.setAttribute("aria-label", i);
            } else t.removeAttribute("aria-label");
            const n = e.get("ariaLive");
            n ? t.setAttribute("aria-live", n) : t.removeAttribute("aria-live");
            const s = e.get("ariaChecked");
            null != s
              ? t.setAttribute("aria-checked", s ? "true" : "false")
              : t.removeAttribute("aria-checked"),
              e.get("ariaHidden")
                ? t.setAttribute("aria-hidden", "true")
                : t.removeAttribute("aria-hidden");
            const a = e.get("ariaOrientation");
            a
              ? t.setAttribute("aria-orientation", a)
              : t.removeAttribute("aria-orientation");
            const o = e.get("ariaValueNow");
            o
              ? t.setAttribute("aria-valuenow", o)
              : t.removeAttribute("aria-valuenow");
            const l = e.get("ariaValueMin");
            l
              ? t.setAttribute("aria-valuemin", l)
              : t.removeAttribute("aria-valuemin");
            const h = e.get("ariaValueMax");
            h
              ? t.setAttribute("aria-valuemax", h)
              : t.removeAttribute("aria-valuemax");
            const u = e.get("ariaValueText");
            u
              ? t.setAttribute("aria-valuetext", u)
              : t.removeAttribute("aria-valuetext");
            const c = e.get("ariaControls");
            c
              ? t.setAttribute("aria-controls", c)
              : t.removeAttribute("aria-controls"),
              e.get("visible") &&
              0 !== e.get("opacity") &&
              "tooltip" != e.get("role") &&
              !e.isHidden() &&
              !1 !== e.getPrivate("focusable")
                ? ("-1" != t.getAttribute("tabindex") &&
                    t.setAttribute("tabindex", "" + this.tabindex),
                  t.removeAttribute("aria-hidden"))
                : (t.removeAttribute("tabindex"),
                  t.setAttribute("aria-hidden", "true"));
          }
          _makeFocusElement(e, t) {
            if (t.getPrivate("focusElement") || 1 == this._a11yD) return;
            const i = document.createElement("div");
            "tooltip" != t.get("role") && (i.tabIndex = this.tabindex),
              (i.style.position = "absolute"),
              u.setInteractive(i, !1);
            const r = [];
            t.setPrivate("focusElement", { dom: i, disposers: r }),
              this._decorateFocusElement(t),
              r.push(
                u.addEventListener(i, "focus", (t) => {
                  this._handleFocus(t, e);
                })
              ),
              r.push(
                u.addEventListener(i, "blur", (t) => {
                  this._handleBlur(t, e);
                })
              ),
              this._moveFocusElement(e, t);
          }
          _removeFocusElement(e) {
            if (1 == this._a11yD) return;
            h.remove(this._tabindexes, e);
            const t = e.getPrivate("focusElement");
            t &&
              (this._focusElementContainer.removeChild(t.dom),
              h.each(t.disposers, (e) => {
                e.dispose();
              }));
          }
          _hideFocusElement(e) {
            1 != this._a11yD &&
              (e.getPrivate("focusElement").dom.style.display = "none");
          }
          _moveFocusElement(e, t) {
            if (1 == this._a11yD) return;
            const i = this._focusElementContainer,
              r = t.getPrivate("focusElement").dom;
            if (r === this._focusElementContainer.children[e]) return;
            const n = this._focusElementContainer.children[e + 1];
            n ? i.insertBefore(r, n) : i.append(r);
          }
          _positionFocusElement(e) {
            if (1 == this._a11yD || null == e) return;
            const t = e.globalBounds();
            let i = t.right == t.left ? e.width() : t.right - t.left,
              r = t.top == t.bottom ? e.height() : t.bottom - t.top,
              n = t.left - 2,
              s = t.top - 2;
            i < 0 && ((n += i), (i = Math.abs(i))),
              r < 0 && ((s += r), (r = Math.abs(r)));
            const a = e.getPrivate("focusElement").dom;
            (a.style.top = s + "px"),
              (a.style.left = n + "px"),
              (a.style.width = i + 4 + "px"),
              (a.style.height = r + 4 + "px");
          }
          _handleFocus(e, t) {
            if (1 == this._a11yD) return;
            const i = this._tabindexes[t];
            i.isVisibleDeep()
              ? (this._positionFocusElement(i),
                (this._focusedSprite = i),
                i.events.isEnabled("focus") &&
                  i.events.dispatch("focus", {
                    type: "focus",
                    originalEvent: e,
                    target: i,
                  }))
              : this._focusNext(e.target, this._isShift ? -1 : 1);
          }
          _focusNext(e, t) {
            if (1 == this._a11yD) return;
            const i = Array.from(
              document.querySelectorAll(
                [
                  "a[href]",
                  "area[href]",
                  "button:not([disabled])",
                  "details",
                  "input:not([disabled])",
                  "iframe:not([disabled])",
                  "select:not([disabled])",
                  "textarea:not([disabled])",
                  '[contentEditable=""]',
                  '[contentEditable="true"]',
                  '[contentEditable="TRUE"]',
                  '[tabindex]:not([tabindex^="-"])',
                ].join(",")
              )
            );
            let r = i.indexOf(e) + t;
            r < 0 ? (r = i.length - 1) : r >= i.length && (r = 0), i[r].focus();
          }
          _handleBlur(e, t) {
            if (1 == this._a11yD) return;
            const i = this._focusedSprite;
            i &&
              i.events.isEnabled("blur") &&
              i.events.dispatch("blur", {
                type: "blur",
                originalEvent: e,
                target: i,
              }),
              (this._focusedSprite = void 0);
          }
          updateTooltip(e) {
            if (1 == this._a11yD) return;
            const t = u.stripTags(e._getText());
            let i = e.getPrivate("tooltipElement");
            "tooltip" == e.get("role") && "" != t
              ? (i || (i = this._makeTooltipElement(e)),
                i.innerHTML != t && (i.innerHTML = t))
              : i && (i.remove(), e.removePrivate("tooltipElement"));
          }
          _makeTooltipElement(e) {
            const t = this._tooltipElementContainer,
              i = document.createElement("div");
            return (
              (i.style.position = "absolute"),
              (i.style.width = "1px"),
              (i.style.height = "1px"),
              (i.style.overflow = "hidden"),
              (i.style.clip = "rect(1px, 1px, 1px, 1px)"),
              u.setInteractive(i, !1),
              this._decorateFocusElement(e, i),
              t.append(i),
              e.setPrivate("tooltipElement", i),
              i
            );
          }
          _removeTooltipElement(e) {
            if (1 == this._a11yD) return;
            const t = e.getPrivate("tooltipElement");
            if (t) {
              const e = t.parentElement;
              e && e.removeChild(t);
            }
          }
          _invalidateAccessibility(e) {
            if (1 == this._a11yD) return;
            this._focusElementDirty = !0;
            const t = e.getPrivate("focusElement");
            e.get("focusable")
              ? t &&
                (this._decorateFocusElement(e), this._positionFocusElement(e))
              : t && this._removeFocusElement(e);
          }
          focused(e) {
            return this._focusedSprite === e;
          }
          documentPointToRoot(e) {
            const t = this._getRealSize(),
              i = this._getCalculatedSize(t),
              r = i.width / t.width,
              n = i.height / t.height;
            return { x: (e.x - t.left) * r, y: (e.y - t.top) * n };
          }
          rootPointToDocument(e) {
            const t = this._getRealSize(),
              i = this._getCalculatedSize(t),
              r = i.width / t.width,
              n = i.height / t.height;
            return { x: e.x / r + t.left, y: e.y / n + t.top };
          }
          addDisposer(e) {
            return this._disposers.push(e), e;
          }
          _updateComputedStyles() {
            const e = window.getComputedStyle(this.dom);
            let t = "";
            O.each(e, (e, i) => {
              L.isString(e) && e.match(/^font/) && (t += i);
            });
            const i = t != this._fontHash;
            return i && (this._fontHash = t), i;
          }
          _checkComputedStyles() {
            this._updateComputedStyles() &&
              this._invalidateLabelBounds(this.container);
          }
          _invalidateLabelBounds(e) {
            e instanceof r.W
              ? e.children.each((e) => {
                  this._invalidateLabelBounds(e);
                })
              : e instanceof n.x && e.markDirtyBounds();
          }
          _hasLicense() {
            for (let e = 0; e < Ee.i_.licenses.length; e++)
              if (Ee.i_.licenses[e].match(/^AM5C.{5,}/i)) return !0;
            return !1;
          }
          _licenseApplied() {
            this._logo && this._logo.set("forceHidden", !0);
          }
          get debugGhostView() {
            return this._renderer.debugGhostView;
          }
          set debugGhostView(e) {
            this._renderer.debugGhostView = e;
          }
          set tapToActivate(e) {
            this._renderer.tapToActivate = e;
          }
          get tapToActivate() {
            return this._renderer.tapToActivate;
          }
          set tapToActivateTimeout(e) {
            this._renderer.tapToActivateTimeout = e;
          }
          get tapToActivateTimeout() {
            return this._renderer.tapToActivateTimeout;
          }
          _makeHTMLElement(e) {
            const t = this._htmlElementContainer,
              i = document.createElement("div");
            return (
              e.setPrivate("htmlElement", i),
              (i.style.position = "absolute"),
              (i.style.overflow = "auto"),
              (i.style.boxSizing = "border-box"),
              u.setInteractive(i, e.get("interactive", !1)),
              e.events.isEnabled("click") &&
                (u.setInteractive(i, !0),
                this._disposers.push(
                  u.addEventListener(i, "click", (t) => {
                    const i = this._renderer.getEvent(t);
                    e.events.dispatch("click", {
                      type: "click",
                      originalEvent: i.event,
                      point: i.point,
                      simulated: !1,
                      target: e,
                    });
                  })
                )),
              this._positionHTMLElement(e),
              t.append(i),
              h.pushOne(this._htmlEnabledContainers, e),
              i
            );
          }
          _positionHTMLElements() {
            h.each(this._htmlEnabledContainers, (e) => {
              this._positionHTMLElement(e);
            });
          }
          _positionHTMLElement(e) {
            const t = e.getPrivate("htmlElement");
            if (t) {
              const i = [
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft",
                "minWidth",
                "minHeight",
                "maxWidth",
                "maxHeight",
              ];
              h.each(i, (i) => {
                const r = e.get(i);
                t.style[i] = r ? r + "px" : "";
              });
              const r = e.compositeOpacity();
              setTimeout(() => {
                t.style.opacity = r + "";
              }, 10);
              const n = e.isVisibleDeep();
              n && (t.style.display = "block");
              const s = e.globalBounds();
              (t.style.top = s.top + "px"), (t.style.left = s.left + "px");
              const a = e.get("width"),
                o = e.get("height");
              let l = 0,
                u = 0;
              if ((a && (l = e.width()), o && (u = e.height()), a && o))
                e.removePrivate("minWidth"), e.removePrivate("minHeight");
              else {
                (t.style.position = "fixed"),
                  (t.style.width = ""),
                  (t.style.height = "");
                const i = t.getBoundingClientRect();
                (t.style.position = "absolute"),
                  (l = i.width),
                  (u = i.height),
                  (e._adjustedLocalBounds = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  }),
                  e.setPrivate("minWidth", l),
                  e.setPrivate("minHeight", u);
              }
              l > 0 && (t.style.minWidth = l + "px"),
                u > 0 && (t.style.minHeight = u + "px"),
                (n && 0 != r) || (t.style.display = "none");
            }
          }
          _setHTMLContent(e, t) {
            let i = e.getPrivate("htmlElement");
            i || (i = this._makeHTMLElement(e)),
              i.innerHTML != t && (i.innerHTML = t);
          }
          _removeHTMLContent(e) {
            let t = e.getPrivate("htmlElement");
            t && this._htmlElementContainer.removeChild(t),
              h.remove(this._htmlEnabledContainers, e);
          }
        }
      },
      3409: function (e, t, i) {
        "use strict";
        i.d(t, {
          Q: function () {
            return a;
          },
        });
        var r = i(5769),
          n = i(3540),
          s = i(5071);
        class a {
          constructor(e, t) {
            if (
              (Object.defineProperty(this, "_root", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_rules", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              (this._root = e),
              !t)
            )
              throw new Error(
                "You cannot use `new Class()`, instead use `Class.new()`"
              );
          }
          static new(e) {
            const t = new this(e, !0);
            return t.setupDefaultRules(), t;
          }
          setupDefaultRules() {}
          _lookupRules(e) {
            return this._rules[e];
          }
          ruleRaw(e, t = []) {
            let i = this._rules[e];
            i || (i = this._rules[e] = []), t.sort(n.qu);
            const { index: a, found: o } = s.getSortedIndex(i, (e) => {
              const i = n.qu(e.tags.length, t.length);
              return 0 === i ? n.wq(e.tags, t, n.qu) : i;
            });
            if (o) return i[a].template;
            {
              const e = r.YS.new({});
              return i.splice(a, 0, { tags: t, template: e }), e;
            }
          }
          rule(e, t = []) {
            return this.ruleRaw(e, t);
          }
        }
      },
      5108: function (e, t, i) {
        "use strict";
        i.d(t, {
          g: function () {
            return n;
          },
        });
        var r = i(6331);
        class n extends r.JH {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_index", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "series", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _afterNew() {
            super._afterNewApplyThemes();
          }
          _beforeChanged() {
            if ((super._beforeChanged(), this.isDirty("sprite"))) {
              const e = this.get("sprite");
              e &&
                (e.setAll({ position: "absolute", role: "figure" }),
                this._disposers.push(e));
            }
            (this.isDirty("locationX") || this.isDirty("locationY")) &&
              this.series &&
              this.series._positionBullet(this);
          }
        }
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bullet",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([n.className]),
          });
      },
      8054: function (e, t, i) {
        "use strict";
        i.d(t, {
          z: function () {
            return a;
          },
        });
        var r = i(3497),
          n = i(8777),
          s = i(7652);
        class a extends n.W {
          _afterNew() {
            (this._settings.themeTags = s.mergeTags(this._settings.themeTags, [
              "button",
            ])),
              super._afterNew(),
              this._settings.background ||
                this.set(
                  "background",
                  r.c.new(this._root, {
                    themeTags: s.mergeTags(this._settings.themeTags, [
                      "background",
                    ]),
                  })
                );
          }
          _prepareChildren() {
            if ((super._prepareChildren(), this.isDirty("icon"))) {
              const e = this._prevSettings.icon,
                t = this.get("icon");
              t !== e &&
                (this._disposeProperty("icon"),
                e && e.dispose(),
                t && this.children.push(t),
                (this._prevSettings.icon = t));
            }
            if (this.isDirty("label")) {
              const e = this._prevSettings.label,
                t = this.get("label");
              t !== e &&
                (this._disposeProperty("label"),
                e && e.dispose(),
                t && this.children.push(t),
                (this._prevSettings.label = t));
            }
          }
        }
        Object.defineProperty(a, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Button",
        }),
          Object.defineProperty(a, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.W.classNames.concat([a.className]),
          });
      },
      1337: function (e, t, i) {
        "use strict";
        i.d(t, {
          k: function () {
            return s;
          },
        });
        var r = i(8777),
          n = i(6245);
        class s extends r.W {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "chartContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.children.push(
                  r.W.new(this._root, {
                    width: n.AQ,
                    height: n.AQ,
                    interactiveChildren: !1,
                  })
                ),
              }),
              Object.defineProperty(this, "bulletsContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r.W.new(this._root, {
                  interactiveChildren: !1,
                  isMeasured: !1,
                  position: "absolute",
                  width: n.AQ,
                  height: n.AQ,
                }),
              });
          }
        }
        Object.defineProperty(s, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Chart",
        }),
          Object.defineProperty(s, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.W.classNames.concat([s.className]),
          });
      },
      8035: function (e, t, i) {
        "use strict";
        i.d(t, {
          C: function () {
            return n;
          },
        });
        var r = i(1479);
        class n extends r.T {
          _beforeChanged() {
            super._beforeChanged(),
              this.isDirty("radius") && (this._clear = !0);
          }
          _changed() {
            super._changed(),
              this._clear &&
                this._display.drawCircle(0, 0, this.get("radius", 10));
          }
        }
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Circle",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.T.classNames.concat([n.className]),
          });
      },
      9361: function (e, t, i) {
        "use strict";
        i.d(t, {
          w: function () {
            return u;
          },
          z: function () {
            return h;
          },
        });
        var r = i(5125),
          n = i(6331),
          s = i(8777),
          a = i(9582),
          o = i(5071),
          l = i(256);
        class h extends n.Zr {
          constructor(e, t, i) {
            super(i),
              Object.defineProperty(this, "component", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "dataContext", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "bullets", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "open", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "close", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.dataContext = t),
              (this.component = e),
              (this._settings.visible = !0),
              this._checkDirty();
          }
          markDirty() {
            this.component.markDirtyValues(this);
          }
          _startAnimation() {
            this.component._root._addAnimation(this);
          }
          _animationTime() {
            return this.component._root.animationTime;
          }
          _dispose() {
            this.component && this.component.disposeDataItem(this),
              super._dispose();
          }
          show(e) {
            this.setRaw("visible", !0),
              this.component && this.component.showDataItem(this, e);
          }
          hide(e) {
            this.setRaw("visible", !1),
              this.component && this.component.hideDataItem(this, e);
          }
          isHidden() {
            return !this.get("visible");
          }
        }
        class u extends s.W {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new a.k(),
              }),
              Object.defineProperty(this, "_dataItems", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_mainDataItems", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._dataItems,
              }),
              Object.defineProperty(this, "valueFields", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "fields", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: ["id"],
              }),
              Object.defineProperty(this, "_valueFields", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_valueFieldsF", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_fields", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_fieldsF", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_valuesDirty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_dataChanged", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_dataGrouped", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "inited", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          set data(e) {
            e.incrementRef(), this._data.decrementRef(), (this._data = e);
          }
          get data() {
            return this._data;
          }
          _dispose() {
            super._dispose(), this._data.decrementRef();
          }
          _onDataClear() {}
          _afterNew() {
            super._afterNew(),
              this._data.incrementRef(),
              this._updateFields(),
              this._disposers.push(
                this.data.events.onAll((e) => {
                  const t = this._mainDataItems;
                  if (
                    (this.markDirtyValues(),
                    this._markDirtyGroup(),
                    (this._dataChanged = !0),
                    "clear" === e.type)
                  )
                    o.each(t, (e) => {
                      e.dispose();
                    }),
                      (t.length = 0),
                      this._onDataClear();
                  else if ("push" === e.type) {
                    const i = new h(
                      this,
                      e.newValue,
                      this._makeDataItem(e.newValue)
                    );
                    t.push(i), this.processDataItem(i);
                  } else if ("setIndex" === e.type) {
                    const i = t[e.index],
                      r = this._makeDataItem(e.newValue);
                    i.bullets && 0 == i.bullets.length && (i.bullets = void 0),
                      l.keys(r).forEach((e) => {
                        i.animate({
                          key: e,
                          to: r[e],
                          duration: this.get("interpolationDuration", 0),
                          easing: this.get("interpolationEasing"),
                        });
                      }),
                      (i.dataContext = e.newValue);
                  } else if ("insertIndex" === e.type) {
                    const i = new h(
                      this,
                      e.newValue,
                      this._makeDataItem(e.newValue)
                    );
                    t.splice(e.index, 0, i), this.processDataItem(i);
                  } else if ("removeIndex" === e.type)
                    t[e.index].dispose(), t.splice(e.index, 1);
                  else {
                    if ("moveIndex" !== e.type)
                      throw new Error("Unknown IStreamEvent type");
                    {
                      const i = t[e.oldIndex];
                      t.splice(e.oldIndex, 1), t.splice(e.newIndex, 0, i);
                    }
                  }
                  this._afterDataChange();
                })
              );
          }
          _updateFields() {
            this.valueFields &&
              ((this._valueFields = []),
              (this._valueFieldsF = {}),
              o.each(this.valueFields, (e) => {
                this.get(e + "Field") &&
                  (this._valueFields.push(e),
                  (this._valueFieldsF[e] = {
                    fieldKey: e + "Field",
                    workingKey: e + "Working",
                  }));
              })),
              this.fields &&
                ((this._fields = []),
                (this._fieldsF = {}),
                o.each(this.fields, (e) => {
                  this.get(e + "Field") &&
                    (this._fields.push(e), (this._fieldsF[e] = e + "Field"));
                }));
          }
          get dataItems() {
            return this._dataItems;
          }
          processDataItem(e) {}
          _makeDataItem(e) {
            const t = {};
            return (
              this._valueFields &&
                o.each(this._valueFields, (i) => {
                  const r = this.get(this._valueFieldsF[i].fieldKey);
                  (t[i] = e[r]), (t[this._valueFieldsF[i].workingKey] = t[i]);
                }),
              this._fields &&
                o.each(this._fields, (i) => {
                  const r = this.get(this._fieldsF[i]);
                  t[i] = e[r];
                }),
              t
            );
          }
          makeDataItem(e) {
            let t = new h(this, void 0, e);
            return this.processDataItem(t), t;
          }
          pushDataItem(e) {
            const t = this.makeDataItem(e);
            return this._mainDataItems.push(t), t;
          }
          disposeDataItem(e) {}
          showDataItem(e, t) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              e.set("visible", !0);
            });
          }
          hideDataItem(e, t) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              e.set("visible", !1);
            });
          }
          _clearDirty() {
            super._clearDirty(), (this._valuesDirty = !1);
          }
          _afterDataChange() {}
          _afterChanged() {
            if ((super._afterChanged(), this._dataChanged)) {
              const e = "datavalidated";
              this.events.isEnabled(e) &&
                this.events.dispatch(e, { type: e, target: this }),
                (this._dataChanged = !1);
            }
            this.inited = !0;
          }
          markDirtyValues(e) {
            this.markDirty(), (this._valuesDirty = !0);
          }
          _markDirtyGroup() {
            this._dataGrouped = !1;
          }
          markDirtySize() {
            (this._sizeDirty = !0), this.markDirty();
          }
        }
        Object.defineProperty(u, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Component",
        }),
          Object.defineProperty(u, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s.W.classNames.concat([u.className]),
          });
      },
      8777: function (e, t, i) {
        "use strict";
        i.d(t, {
          W: function () {
            return g;
          },
        });
        var r = i(7144),
          n = i(5071);
        class s extends r.aV {
          constructor(e) {
            super(),
              Object.defineProperty(this, "_disposed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_container", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._container = e),
              (this._events = this.events.onAll((e) => {
                if ("clear" === e.type)
                  n.each(e.oldValues, (e) => {
                    this._onRemoved(e);
                  });
                else if ("push" === e.type) this._onInserted(e.newValue);
                else if ("setIndex" === e.type)
                  this._onRemoved(e.oldValue),
                    this._onInserted(e.newValue, e.index);
                else if ("insertIndex" === e.type)
                  this._onInserted(e.newValue, e.index);
                else if ("removeIndex" === e.type) this._onRemoved(e.oldValue);
                else {
                  if ("moveIndex" !== e.type)
                    throw new Error("Unknown IListEvent type");
                  this._onRemoved(e.value),
                    this._onInserted(e.value, e.newIndex);
                }
              }));
          }
          _onInserted(e, t) {
            e._setParent(this._container, !0);
            const i = this._container._childrenDisplay;
            void 0 === t ? i.addChild(e._display) : i.addChildAt(e._display, t);
          }
          _onRemoved(e) {
            this._container._childrenDisplay.removeChild(e._display),
              this._container.markDirtyBounds(),
              this._container.markDirty();
          }
          isDisposed() {
            return this._disposed;
          }
          dispose() {
            this._disposed ||
              ((this._disposed = !0),
              this._events.dispose(),
              n.each(this.values, (e) => {
                e.dispose();
              }));
          }
        }
        var a = i(6245),
          o = i(4596),
          l = i(7142),
          h = i(4431),
          u = i(1706),
          c = i(6881),
          d = i(2132),
          p = i(5040),
          f = i(7652);
        class g extends o.j {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_display", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeContainer(),
              }),
              Object.defineProperty(this, "_childrenDisplay", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeContainer(),
              }),
              Object.defineProperty(this, "children", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new s(this),
              }),
              Object.defineProperty(this, "_percentageSizeChildren", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_percentagePositionChildren", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_prevWidth", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_prevHeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_contentWidth", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_contentHeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_contentMask", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_vsbd0", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_vsbd1", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _afterNew() {
            super._afterNew(), this._display.addChild(this._childrenDisplay);
          }
          _dispose() {
            n.eachReverse(this.allChildren(), (e) => {
              e.dispose();
            }),
              this.getPrivate("htmlElement") &&
                this._root._removeHTMLContent(this),
              super._dispose();
          }
          _changed() {
            if (
              (super._changed(),
              this.isDirty("interactiveChildren") &&
                (this._display.interactiveChildren = this.get(
                  "interactiveChildren",
                  !1
                )),
              this.isDirty("layout") &&
                ((this._prevWidth = 0),
                (this._prevHeight = 0),
                this.markDirtyBounds(),
                this._prevSettings.layout &&
                  this.children.each((e) => {
                    e.removePrivate("x"), e.removePrivate("y");
                  })),
              (this.isDirty("paddingTop") ||
                this.isDirty("paddingBottom") ||
                this.isDirty("paddingLeft") ||
                this.isDirty("paddingRight")) &&
                this.children.each((e) => {
                  e.markDirtyPosition();
                }),
              this.isDirty("maskContent"))
            ) {
              const e = this._childrenDisplay;
              let t = this._contentMask;
              this.get("maskContent")
                ? t ||
                  ((t = l.A.new(this._root, {
                    x: -0.5,
                    y: -0.5,
                    width: this.width() + 1,
                    height: this.height() + 1,
                  })),
                  (this._contentMask = t),
                  e.addChildAt(t._display, 0),
                  (e.mask = t._display))
                : t &&
                  (e.removeChild(t._display),
                  (e.mask = null),
                  t.dispose(),
                  (this._contentMask = void 0));
            }
          }
          _updateSize() {
            super._updateSize(),
              n.each(this._percentageSizeChildren, (e) => {
                e._updateSize();
              }),
              n.each(this._percentagePositionChildren, (e) => {
                e.markDirtyPosition(), e._updateSize();
              }),
              this.updateBackground();
          }
          updateBackground() {
            const e = this.get("background");
            let t = this._localBounds;
            if (t && !this.isHidden()) {
              let i = t.left,
                r = t.top,
                n = t.right - i,
                s = t.bottom - r,
                a = this.get("maxWidth"),
                o = this.get("maxHeight");
              o && s > o && (s = o), a && n > a && (n = a);
              let l = this.width(),
                h = this.height();
              e &&
                (e.setAll({ width: n, height: s, x: i, y: r }),
                this._display.interactive && (e._display.interactive = !0));
              const u = this._contentMask;
              u && u.setAll({ width: l + 1, height: h + 1 });
              const c = this.get("verticalScrollbar");
              if (c) {
                c.set("height", h),
                  c.set("x", l - c.width() - c.get("marginRight", 0)),
                  c.set("end", c.get("start", 0) + h / this._contentHeight);
                const e = c.get("background");
                e && e.setAll({ width: c.width(), height: h });
                let t = !0;
                this._contentHeight <= h && (t = !1),
                  c.setPrivate("visible", t);
              }
            }
          }
          _applyThemes() {
            return (
              !!super._applyThemes() &&
              (this.eachChildren((e) => {
                e._applyThemes();
              }),
              !0)
            );
          }
          _applyState(e) {
            super._applyState(e),
              this.get("setStateOnChildren") &&
                this.eachChildren((t) => {
                  t.states.apply(e);
                });
          }
          _applyStateAnimated(e, t) {
            super._applyStateAnimated(e, t),
              this.get("setStateOnChildren") &&
                this.eachChildren((i) => {
                  i.states.applyAnimate(e, t);
                });
          }
          innerWidth() {
            return (
              this.width() -
              this.get("paddingRight", 0) -
              this.get("paddingLeft", 0)
            );
          }
          innerHeight() {
            return (
              this.height() -
              this.get("paddingTop", 0) -
              this.get("paddingBottom", 0)
            );
          }
          _getBounds() {
            let e = this.get("width"),
              t = this.get("height"),
              i = this.getPrivate("width"),
              r = this.getPrivate("height"),
              n = {
                left: 0,
                top: 0,
                right: this.width(),
                bottom: this.height(),
              },
              s = this.get("layout"),
              a = !1,
              o = !1;
            if (
              ((s instanceof h.G || s instanceof c.M) && (a = !0),
              s instanceof u.Z && (o = !0),
              (null == e && null == i) ||
                (null == t && null == r) ||
                this.get("verticalScrollbar"))
            ) {
              let e = Number.MAX_VALUE,
                t = e,
                i = -e,
                r = e,
                s = -e;
              const l = this.get("paddingLeft", 0),
                h = this.get("paddingTop", 0),
                u = this.get("paddingRight", 0),
                c = this.get("paddingBottom", 0);
              this.children.each((e) => {
                if ("absolute" != e.get("position") && e.get("isMeasured")) {
                  let n = e.adjustedLocalBounds(),
                    l = e.x(),
                    h = e.y(),
                    u = l + n.left,
                    c = l + n.right,
                    d = h + n.top,
                    p = h + n.bottom;
                  a &&
                    ((u -= e.get("marginLeft", 0)),
                    (c += e.get("marginRight", 0))),
                    o &&
                      ((d -= e.get("marginTop", 0)),
                      (p += e.get("marginBottom", 0))),
                    u < t && (t = u),
                    c > i && (i = c),
                    d < r && (r = d),
                    p > s && (s = p);
                }
              }),
                t == e && (t = 0),
                i == -e && (i = 0),
                r == e && (r = 0),
                s == -e && (s = 0),
                (n.left = t - l),
                (n.top = r - h),
                (n.right = i + u),
                (n.bottom = s + c);
            }
            (this._contentWidth = n.right - n.left),
              (this._contentHeight = n.bottom - n.top),
              p.isNumber(e) && ((n.left = 0), (n.right = e)),
              p.isNumber(i) && ((n.left = 0), (n.right = i)),
              p.isNumber(t) && ((n.top = 0), (n.bottom = t)),
              p.isNumber(r) && ((n.top = 0), (n.bottom = r)),
              (this._localBounds = n);
          }
          _updateBounds() {
            const e = this.get("layout");
            e && e.updateContainer(this),
              super._updateBounds(),
              this.updateBackground();
          }
          markDirty() {
            super.markDirty(), this._root._addDirtyParent(this);
          }
          _prepareChildren() {
            const e = this.innerWidth(),
              t = this.innerHeight();
            if (e != this._prevWidth || t != this._prevHeight) {
              let i = this.get("layout"),
                r = !1,
                s = !1;
              i &&
                ((i instanceof h.G || i instanceof c.M) && (r = !0),
                i instanceof u.Z && (s = !0)),
                n.each(this._percentageSizeChildren, (i) => {
                  if (!r) {
                    let t = i.get("width");
                    t instanceof a.gG && i.setPrivate("width", t.value * e);
                  }
                  if (!s) {
                    let e = i.get("height");
                    e instanceof a.gG && i.setPrivate("height", e.value * t);
                  }
                }),
                n.each(this._percentagePositionChildren, (e) => {
                  e.markDirtyPosition(), e.markDirtyBounds();
                }),
                (this._prevWidth = e),
                (this._prevHeight = t),
                (this._sizeDirty = !0),
                this.updateBackground();
            }
            this._handleStates();
          }
          _updateChildren() {
            if (this.isDirty("html")) {
              const e = this.get("html");
              e && "" !== e
                ? this._root._setHTMLContent(
                    this,
                    (0, d.q)(this, this.get("html", ""))
                  )
                : this._root._removeHTMLContent(this),
                this._root._positionHTMLElement(this);
            }
            if (this.isDirty("verticalScrollbar")) {
              const e = this.get("verticalScrollbar");
              if (e) {
                e._setParent(this),
                  e.startGrip.setPrivate("visible", !1),
                  e.endGrip.setPrivate("visible", !1),
                  this.set("maskContent", !0),
                  this.set(
                    "paddingRight",
                    e.width() + e.get("marginRight", 0) + e.get("marginLeft", 0)
                  );
                let t = this.get("background");
                t ||
                  (t = this.set(
                    "background",
                    l.A.new(this._root, {
                      themeTags: ["background"],
                      fillOpacity: 0,
                      fill: this._root.interfaceColors.get(
                        "alternativeBackground"
                      ),
                    })
                  )),
                  (this._vsbd0 = this.events.on("wheel", (t) => {
                    const i = t.originalEvent;
                    if (!f.isLocalEvent(i, this)) return;
                    i.preventDefault();
                    let r = i.deltaY / 5e3;
                    const n = e.get("start", 0),
                      s = e.get("end", 1);
                    n + r <= 0 && (r = -n),
                      s + r >= 1 && (r = 1 - s),
                      n + r >= 0 &&
                        s + r <= 1 &&
                        (e.set("start", n + r), e.set("end", s + r));
                  })),
                  this._disposers.push(this._vsbd0),
                  (this._vsbd1 = e.events.on("rangechanged", () => {
                    let t = this._contentHeight;
                    const i = this._childrenDisplay,
                      r = this._contentMask;
                    (i.y = -e.get("start") * t),
                      i.markDirtyLayer(),
                      r && ((r._display.y = -i.y), (i.mask = r._display));
                  })),
                  this._disposers.push(this._vsbd1),
                  this._display.addChild(e._display);
              } else {
                const e = this._prevSettings.verticalScrollbar;
                e &&
                  (this._display.removeChild(e._display),
                  this._vsbd0 && this._vsbd0.dispose(),
                  this._vsbd1 && this._vsbd1.dispose(),
                  (this._childrenDisplay.y = 0),
                  this.setPrivate("height", void 0),
                  this.set("maskContent", !1),
                  this.set("paddingRight", void 0));
              }
            }
            if (this.isDirty("background")) {
              const e = this._prevSettings.background;
              e && this._display.removeChild(e._display);
              const t = this.get("background");
              t instanceof o.j &&
                (t.set("isMeasured", !1),
                t._setParent(this),
                this._display.addChildAt(t._display, 0));
            }
            if (this.isDirty("mask")) {
              const e = this.get("mask"),
                t = this._prevSettings.mask;
              if (
                (t &&
                  (this._display.removeChild(t._display),
                  t != e && t.dispose()),
                e)
              ) {
                const t = e.parent;
                t && t.children.removeValue(e),
                  e._setParent(this),
                  this._display.addChildAt(e._display, 0),
                  (this._childrenDisplay.mask = e._display);
              }
            }
          }
          _processTemplateField() {
            super._processTemplateField(),
              this.children.each((e) => {
                e._processTemplateField();
              });
          }
          walkChildren(e) {
            this.children.each((t) => {
              t instanceof g && t.walkChildren(e), e(t);
            });
          }
          eachChildren(e) {
            const t = this.get("background");
            t && e(t);
            const i = this.get("verticalScrollbar");
            i && e(i);
            const r = this.get("mask");
            r && e(r),
              this.children.values.forEach((t) => {
                e(t);
              });
          }
          allChildren() {
            const e = [];
            return (
              this.eachChildren((t) => {
                e.push(t);
              }),
              e
            );
          }
          _setDataItem(e) {
            const t = e !== this._dataItem;
            super._setDataItem(e);
            const i = this.get("html", "");
            i &&
              "" !== i &&
              t &&
              this._root._setHTMLContent(this, (0, d.q)(this, i));
          }
        }
        Object.defineProperty(g, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Container",
        }),
          Object.defineProperty(g, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o.j.classNames.concat([g.className]),
          });
      },
      2433: function (e, t, i) {
        "use strict";
        i.d(t, {
          P: function () {
            return n;
          },
        });
        var r = i(1479);
        class n extends r.T {
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("radiusX") ||
                this.isDirty("radiusY") ||
                this.isDirty("rotation")) &&
                (this._clear = !0);
          }
          _changed() {
            super._changed(),
              this._clear &&
                this._display.drawEllipse(
                  0,
                  0,
                  Math.abs(this.get("radiusX")),
                  Math.abs(this.get("radiusY"))
                );
          }
        }
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Ellipse",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.T.classNames.concat([n.className]),
          });
      },
      1479: function (e, t, i) {
        "use strict";
        i.d(t, {
          T: function () {
            return h;
          },
          u: function () {
            return l;
          },
        });
        var r = i(4429),
          n = i(4596),
          s = i(4680),
          a = i(5040),
          o = i(5071);
        const l = [
          "fill",
          "fillOpacity",
          "stroke",
          "strokeWidth",
          "strokeOpacity",
          "fillPattern",
          "strokePattern",
          "fillGradient",
          "strokeGradient",
          "strokeDasharray",
          "strokeDashoffset",
        ];
        class h extends n.j {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_display", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeGraphics(),
              }),
              Object.defineProperty(this, "_clear", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _beforeChanged() {
            if (
              (super._beforeChanged(),
              (this.isDirty("draw") || this.isDirty("svgPath")) &&
                this.markDirtyBounds(),
              (this.isDirty("fill") ||
                this.isDirty("stroke") ||
                this.isDirty("visible") ||
                this.isDirty("forceHidden") ||
                this.isDirty("scale") ||
                this.isDirty("fillGradient") ||
                this.isDirty("strokeGradient") ||
                this.isDirty("fillPattern") ||
                this.isDirty("strokePattern") ||
                this.isDirty("fillOpacity") ||
                this.isDirty("strokeOpacity") ||
                this.isDirty("strokeWidth") ||
                this.isDirty("draw") ||
                this.isDirty("blendMode") ||
                this.isDirty("strokeDasharray") ||
                this.isDirty("strokeDashoffset") ||
                this.isDirty("svgPath") ||
                this.isDirty("lineJoin") ||
                this.isDirty("shadowColor") ||
                this.isDirty("shadowBlur") ||
                this.isDirty("shadowOffsetX") ||
                this.isDirty("shadowOffsetY")) &&
                (this._clear = !0),
              (this._display.crisp = this.get("crisp", !1)),
              this.isDirty("fillGradient"))
            ) {
              const e = this.get("fillGradient");
              if (e) {
                this._display.isMeasured = !0;
                const t = e.get("target");
                t &&
                  (this._disposers.push(
                    t.events.on("boundschanged", () => {
                      this._markDirtyKey("fill");
                    })
                  ),
                  this._disposers.push(
                    t.events.on("positionchanged", () => {
                      this._markDirtyKey("fill");
                    })
                  ));
              }
            }
            if (this.isDirty("strokeGradient")) {
              const e = this.get("strokeGradient");
              if (e) {
                this._display.isMeasured = !0;
                const t = e.get("target");
                t &&
                  (this._disposers.push(
                    t.events.on("boundschanged", () => {
                      this._markDirtyKey("stroke");
                    })
                  ),
                  this._disposers.push(
                    t.events.on("positionchanged", () => {
                      this._markDirtyKey("stroke");
                    })
                  ));
              }
            }
          }
          _changed() {
            if ((super._changed(), this._clear)) {
              this.markDirtyBounds(),
                this.markDirtyLayer(),
                this._display.clear();
              let e = this.get("strokeDasharray");
              a.isNumber(e) && (e = e < 0.5 ? [0] : [e]),
                this._display.setLineDash(e);
              const t = this.get("strokeDashoffset");
              t && this._display.setLineDashOffset(t);
              const i = this.get("blendMode", s.b.NORMAL);
              this._display.blendMode = i;
              const r = this.get("draw");
              r && r(this._display, this);
              const n = this.get("svgPath");
              null != n && this._display.svgPath(n);
            }
          }
          _afterChanged() {
            if ((super._afterChanged(), this._clear)) {
              const e = this.get("fill"),
                t = this.get("fillGradient"),
                i = this.get("fillPattern"),
                n = this.get("fillOpacity"),
                s = this.get("stroke"),
                a = this.get("strokeGradient"),
                l = this.get("strokePattern"),
                h = this.get("shadowColor"),
                u = this.get("shadowBlur"),
                c = this.get("shadowOffsetX"),
                d = this.get("shadowOffsetY"),
                p = this.get("shadowOpacity");
              if (
                (h && (u || c || d) && this._display.shadow(h, u, c, d, p), i)
              ) {
                let t = !1;
                !e ||
                  (i.get("fill") && !i.get("fillInherited")) ||
                  (i.set("fill", e), i.set("fillInherited", !0), (t = !0)),
                  !s ||
                    (i.get("color") && !i.get("colorInherited")) ||
                    (i.set("color", s), i.set("colorInherited", !0), (t = !0)),
                  t && i._changed();
                const a = i.pattern;
                a &&
                  (this._display.beginFill(a, n),
                  this._display.endFill(),
                  i instanceof r.v &&
                    i.events.once("loaded", () => {
                      (this._clear = !0), this.markDirty();
                    }));
              } else if (t) {
                if (e) {
                  const i = t.get("stops", []);
                  i.length &&
                    o.each(i, (t) => {
                      (t.color && !t.colorInherited) ||
                        !e ||
                        ((t.color = e), (t.colorInherited = !0)),
                        (null == t.opacity || t.opacityInherited) &&
                          ((t.opacity = n), (t.opacityInherited = !0));
                    });
                }
                const i = t.getFill(this);
                i && (this._display.beginFill(i, n), this._display.endFill());
              } else
                e && (this._display.beginFill(e, n), this._display.endFill());
              if (s || a || l) {
                const e = this.get("strokeOpacity");
                let t = this.get("strokeWidth", 1);
                this.get("nonScalingStroke") && (t /= this.get("scale", 1)),
                  this.get("crisp") && (t /= this._root._renderer.resolution);
                const i = this.get("lineJoin");
                if (l) {
                  let n = !1;
                  !s ||
                    (l.get("color") && !l.get("colorInherited")) ||
                    (l.set("color", s), l.set("colorInherited", !0), (n = !0)),
                    n && l._changed();
                  const a = l.pattern;
                  a &&
                    (this._display.lineStyle(t, a, e, i),
                    this._display.endStroke(),
                    l instanceof r.v &&
                      l.events.once("loaded", () => {
                        (this._clear = !0), this.markDirty();
                      }));
                } else if (a) {
                  const r = a.get("stops", []);
                  r.length &&
                    o.each(r, (t) => {
                      (t.color && !t.colorInherited) ||
                        !s ||
                        ((t.color = s), (t.colorInherited = !0)),
                        (null == t.opacity || t.opacityInherited) &&
                          ((t.opacity = e), (t.opacityInherited = !0));
                    });
                  const n = a.getFill(this);
                  n &&
                    (this._display.lineStyle(t, n, e, i),
                    this._display.endStroke());
                } else
                  s &&
                    (this._display.lineStyle(t, s, e, i),
                    this._display.endStroke());
              }
              this.getPrivate("showingTooltip") && this.showTooltip();
            }
            this._clear = !1;
          }
        }
        Object.defineProperty(h, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Graphics",
        }),
          Object.defineProperty(h, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.j.classNames.concat([h.className]),
          });
      },
      6881: function (e, t, i) {
        "use strict";
        i.d(t, {
          M: function () {
            return a;
          },
        });
        var r = i(2010),
          n = i(5071),
          s = i(751);
        class a extends r.A {
          _afterNew() {
            this._setRawDefault("maxColumns", Number.MAX_VALUE),
              super._afterNew();
          }
          updateContainer(e) {
            let t = e.get("paddingLeft", 0),
              i = e.get("paddingRight", 0),
              n = e.get("paddingTop", 0),
              a = e.maxWidth() - t - i,
              o = a,
              l = 1;
            (0, r.j)(e, (e) => {
              if (
                e.get("visible") &&
                e.getPrivate("visible") &&
                !e.get("forceHidden") &&
                "absolute" != e.get("position")
              ) {
                let t = e.width();
                t < o && (o = t), t > l && (l = t);
              }
            }),
              (o = s.fitToRange(o, 1, a)),
              (l = s.fitToRange(l, 1, a));
            let h = 1;
            (h = this.get("fixedWidthGrid") ? a / l : a / o),
              (h = Math.max(1, Math.floor(h))),
              (h = Math.min(this.get("maxColumns", Number.MAX_VALUE), h));
            let u = this.getColumnWidths(e, h, l, a),
              c = n,
              d = 0,
              p = 0;
            h = u.length;
            let f = t;
            (0, r.j)(e, (e) => {
              if ("relative" == e.get("position") && e.isVisible()) {
                const i = e.get("marginTop", 0),
                  r = e.get("marginBottom", 0);
                let n = e.adjustedLocalBounds(),
                  s = e.get("marginLeft", 0),
                  a = e.get("marginRight", 0),
                  o = f + s - n.left,
                  l = c + i - n.top;
                e.setPrivate("x", o),
                  e.setPrivate("y", l),
                  (f += u[d] + a),
                  (p = Math.max(p, e.height() + i + r)),
                  d++,
                  d >= h && ((d = 0), (f = t), (c += p));
              }
            });
          }
          getColumnWidths(e, t, i, s) {
            let a = 0,
              o = [],
              l = 0;
            return (
              (0, r.j)(e, (r) => {
                let n = r.adjustedLocalBounds();
                "absolute" != r.get("position") &&
                  r.isVisible() &&
                  (this.get("fixedWidthGrid")
                    ? (o[l] = i)
                    : (o[l] = Math.max(
                        0 | o[l],
                        n.right -
                          n.left +
                          r.get("marginLeft", 0) +
                          r.get("marginRight", 0)
                      )),
                  l < e.children.length - 1 && (l++, l == t && (l = 0)));
              }),
              n.each(o, (e) => {
                a += e;
              }),
              a > s
                ? t > 2
                  ? ((t -= 1), this.getColumnWidths(e, t, i, s))
                  : [s]
                : o
            );
          }
        }
        Object.defineProperty(a, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "GridLayout",
        }),
          Object.defineProperty(a, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.A.classNames.concat([a.className]),
          });
      },
      4431: function (e, t, i) {
        "use strict";
        i.d(t, {
          G: function () {
            return a;
          },
        });
        var r = i(2010),
          n = i(5040),
          s = i(6245);
        class a extends r.A {
          updateContainer(e) {
            let t = e.get("paddingLeft", 0),
              i = e.innerWidth(),
              a = 0;
            (0, r.j)(e, (e) => {
              if (e.isVisible() && "relative" == e.get("position")) {
                let t = e.get("width");
                if (t instanceof s.gG) {
                  a += t.value;
                  let r = i * t.value,
                    n = e.get("minWidth", e.getPrivate("minWidth", -1 / 0));
                  n > r && ((i -= n), (a -= t.value));
                  let s = e.get("maxWidth", e.getPrivate("maxWidth", 1 / 0));
                  r > s && ((i -= s), (a -= t.value));
                } else
                  n.isNumber(t) || (t = e.width()),
                    (i -= t + e.get("marginLeft", 0) + e.get("marginRight", 0));
              }
            }),
              (i <= 0 || i == 1 / 0) && (i = 0.1),
              (0, r.j)(e, (e) => {
                if (e.isVisible() && "relative" == e.get("position")) {
                  let t = e.get("width");
                  if (t instanceof s.gG) {
                    let r =
                        (i * t.value) / a -
                        e.get("marginLeft", 0) -
                        e.get("marginRight", 0),
                      n = e.get("minWidth", e.getPrivate("minWidth", -1 / 0)),
                      s = e.get("maxWidth", e.getPrivate("maxWidth", 1 / 0));
                    (r = Math.min(Math.max(n, r), s)), e.setPrivate("width", r);
                  } else
                    e._prevSettings.width instanceof s.gG &&
                      e.setPrivate("width", void 0);
                }
              });
            let o = t;
            (0, r.j)(e, (e) => {
              if ("relative" == e.get("position"))
                if (e.isVisible()) {
                  let t = e.adjustedLocalBounds(),
                    i = e.get("marginLeft", 0),
                    r = e.get("marginRight", 0),
                    n = e.get("maxWidth"),
                    s = t.left,
                    a = t.right;
                  n && a - s > n && (a = s + n);
                  let l = o + i - s;
                  e.setPrivate("x", l), (o = l + a + r);
                } else e.setPrivate("x", void 0);
            });
          }
        }
        Object.defineProperty(a, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "HorizontalLayout",
        }),
          Object.defineProperty(a, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.A.classNames.concat([a.className]),
          });
      },
      962: function (e, t, i) {
        "use strict";
        i.d(t, {
          _: function () {
            return l;
          },
        });
        var r = i(2036),
          n = i(6245),
          s = i(8777),
          a = i(5071),
          o = i(5040);
        class l extends s.W {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_text", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_textKeys", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [
                  "text",
                  "fill",
                  "fillOpacity",
                  "textAlign",
                  "fontFamily",
                  "fontSize",
                  "fontStyle",
                  "fontWeight",
                  "fontStyle",
                  "fontVariant",
                  "textDecoration",
                  "shadowColor",
                  "shadowBlur",
                  "shadowOffsetX",
                  "shadowOffsetY",
                  "shadowOpacity",
                  "lineHeight",
                  "baselineRatio",
                  "direction",
                  "textBaseline",
                  "oversizedBehavior",
                  "breakWords",
                  "ellipsis",
                  "minScale",
                  "populateText",
                  "role",
                  "ignoreFormatting",
                ],
              });
          }
          get text() {
            return this._text;
          }
          _afterNew() {
            super._afterNew(),
              this._makeText(),
              a.each(this._textKeys, (e) => {
                const t = this.get(e);
                null != t && this._text.set(e, t);
              }),
              "" !== this.get("html", "") && this._text.set("text", ""),
              this.onPrivate("maxWidth", () => {
                this._setMaxDimentions();
              }),
              this.onPrivate("maxHeight", () => {
                this._setMaxDimentions();
              });
          }
          _makeText() {
            this._text = this.children.push(r.x.new(this._root, {}));
          }
          _updateChildren() {
            if (
              (super._updateChildren(),
              a.each(this._textKeys, (e) => {
                this._text.set(e, this.get(e));
              }),
              this.isDirty("maxWidth") && this._setMaxDimentions(),
              this.isDirty("maxHeight") && this._setMaxDimentions(),
              this.isDirty("rotation") && this._setMaxDimentions(),
              "" !== this.get("html", "")
                ? this._text.set("text", "")
                : this._text.set("text", this.get("text")),
              this.isDirty("textAlign") || this.isDirty("width"))
            ) {
              const e = this.get("textAlign");
              let t;
              null != this.get("width")
                ? (t = "right" == e ? n.AQ : "center" == e ? n.CI : 0)
                : "left" == e || "start" == e
                ? (t = this.get("paddingLeft"))
                : ("right" != e && "end" != e) ||
                  (t = -this.get("paddingRight")),
                this.text.set("x", t);
            }
          }
          _setMaxDimentions() {
            const e = this.get("rotation"),
              t = 90 == e || 270 == e || -90 == e,
              i = this.get("maxWidth", this.getPrivate("maxWidth", 1 / 0));
            o.isNumber(i)
              ? this.text.set(
                  t ? "maxHeight" : "maxWidth",
                  i - this.get("paddingLeft", 0) - this.get("paddingRight", 0)
                )
              : this.text.set(t ? "maxHeight" : "maxWidth", void 0);
            const r = this.get(
              "maxHeight",
              this.getPrivate("maxHeight", 1 / 0)
            );
            o.isNumber(r)
              ? this.text.set(
                  t ? "maxWidth" : "maxHeight",
                  r - this.get("paddingTop", 0) - this.get("paddingBottom", 0)
                )
              : this.text.set(t ? "maxWidth" : "maxHeight", void 0);
          }
          _setDataItem(e) {
            super._setDataItem(e),
              this._markDirtyKey("text"),
              this.text.get("populateText") && this.text.markDirtyText();
          }
          getText() {
            return this._text._getText();
          }
        }
        Object.defineProperty(l, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Label",
        }),
          Object.defineProperty(l, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s.W.classNames.concat([l.className]),
          });
      },
      2010: function (e, t, i) {
        "use strict";
        i.d(t, {
          A: function () {
            return s;
          },
          j: function () {
            return n;
          },
        });
        var r = i(6331);
        function n(e, t) {
          e.get("reverseChildren", !1)
            ? e.children.eachReverse(t)
            : e.children.each(t);
        }
        class s extends r.JH {}
        Object.defineProperty(s, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Layout",
        }),
          Object.defineProperty(s, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([s.className]),
          });
      },
      3105: function (e, t, i) {
        "use strict";
        i.d(t, {
          D: function () {
            return u;
          },
        });
        var r = i(3399),
          n = i(8777),
          s = i(962),
          a = i(3497),
          o = i(5769),
          l = i(7144),
          h = i(7652);
        class u extends r.F {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "itemContainers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new l.o(o.YS.new({}), () =>
                  n.W._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.itemContainers.template.get("themeTags", []),
                        ["legend", "item"]
                      ),
                      themeTagsSelf: h.mergeTags(
                        this.itemContainers.template.get("themeTagsSelf", []),
                        ["itemcontainer"]
                      ),
                      background: a.c.new(this._root, {
                        themeTags: h.mergeTags(
                          this.itemContainers.template.get("themeTags", []),
                          ["legend", "item", "background"]
                        ),
                        themeTagsSelf: h.mergeTags(
                          this.itemContainers.template.get("themeTagsSelf", []),
                          ["itemcontainer"]
                        ),
                      }),
                    },
                    [this.itemContainers.template]
                  )
                ),
              }),
              Object.defineProperty(this, "markers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new l.o(o.YS.new({}), () =>
                  n.W._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.markers.template.get("themeTags", []),
                        ["legend", "marker"]
                      ),
                    },
                    [this.markers.template]
                  )
                ),
              }),
              Object.defineProperty(this, "labels", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new l.o(o.YS.new({}), () =>
                  s._._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.labels.template.get("themeTags", []),
                        ["legend", "label"]
                      ),
                    },
                    [this.labels.template]
                  )
                ),
              }),
              Object.defineProperty(this, "valueLabels", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new l.o(o.YS.new({}), () =>
                  s._._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.valueLabels.template.get("themeTags", []),
                        ["legend", "label", "value"]
                      ),
                    },
                    [this.valueLabels.template]
                  )
                ),
              }),
              Object.defineProperty(this, "markerRectangles", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new l.o(o.YS.new({}), () =>
                  a.c._new(
                    this._root,
                    {
                      themeTags: h.mergeTags(
                        this.markerRectangles.template.get("themeTags", []),
                        ["legend", "marker", "rectangle"]
                      ),
                    },
                    [this.markerRectangles.template]
                  )
                ),
              });
          }
          _afterNew() {
            (this._settings.themeTags = h.mergeTags(this._settings.themeTags, [
              "legend",
            ])),
              this.fields.push("name", "stroke", "fill"),
              super._afterNew();
          }
          makeItemContainer(e) {
            const t = this.children.push(this.itemContainers.make());
            return (
              t._setDataItem(e),
              this.itemContainers.push(t),
              t.states.create("disabled", {}),
              t
            );
          }
          makeMarker() {
            const e = this.markers.make();
            return this.markers.push(e), e.states.create("disabled", {}), e;
          }
          makeLabel() {
            const e = this.labels.make();
            return e.states.create("disabled", {}), e;
          }
          makeValueLabel() {
            const e = this.valueLabels.make();
            return e.states.create("disabled", {}), e;
          }
          makeMarkerRectangle() {
            const e = this.markerRectangles.make();
            return e.states.create("disabled", {}), e;
          }
          processDataItem(e) {
            super.processDataItem(e);
            const t = this.makeItemContainer(e),
              i = this.get("nameField"),
              r = this.get("fillField"),
              n = this.get("strokeField");
            if (t) {
              const s = this.get("clickTarget", "itemContainer"),
                a = e.dataContext;
              a && a.set && a.set("legendDataItem", e),
                t._setDataItem(e),
                e.set("itemContainer", t);
              const o = this.makeMarker();
              if (o) {
                t.children.push(o), o._setDataItem(e), e.set("marker", o);
                const i = this.get("useDefaultMarker"),
                  s = o.children.push(this.makeMarkerRectangle());
                let l = e.get("fill"),
                  h = e.get("stroke");
                e.set("markerRectangle", s),
                  a && a.get && ((l = a.get(r, l)), (h = a.get(n, h))),
                  h || (h = l),
                  i
                    ? a.on &&
                      (a.on(r, () => {
                        s.set("fill", a.get(r));
                      }),
                      a.on(n, () => {
                        s.set("stroke", a.get(n));
                      }))
                    : a && a.createLegendMarker && a.createLegendMarker(),
                  s.setAll({ fill: l, stroke: h });
                const u = a.component;
                u && u.updateLegendMarker && u.updateLegendMarker(a);
              }
              const l = this.makeLabel();
              if (l) {
                t.children.push(l),
                  l._setDataItem(e),
                  e.set("label", l),
                  l.text.on("text", () => {
                    t.setRaw(
                      "ariaLabel",
                      l.text._getText() +
                        ("none" !== this.get("clickTarget")
                          ? "; " + this._t("Press ENTER to toggle")
                          : "")
                    ),
                      t.markDirtyAccessibility();
                  }),
                  a && a.get && e.set("name", a.get(i));
                let r = e.get("name");
                r && l.set("text", r);
              }
              const h = this.makeValueLabel();
              if (
                (h &&
                  (t.children.push(h),
                  h._setDataItem(e),
                  e.set("valueLabel", h)),
                a &&
                  a.show &&
                  (a.on("visible", (e) => {
                    t.set("disabled", !e);
                  }),
                  a.get("visible") || t.set("disabled", !0),
                  "none" != s))
              ) {
                let i = t;
                "marker" == s && (i = o), this._addClickEvents(i, a, e);
              }
              this.children.values.sort((e, t) => {
                const i = e.dataItem.dataContext,
                  r = t.dataItem.dataContext;
                if (i && r) {
                  const e = this.data.indexOf(i),
                    t = this.data.indexOf(r);
                  if (e > t) return 1;
                  if (e < t) return -1;
                }
                return 0;
              }),
                a && a.updateLegendValue && a.updateLegendValue();
            }
          }
          _addClickEvents(e, t, i) {
            e.set("cursorOverStyle", "pointer"),
              e.events.on("pointerover", () => {
                const e = t.component;
                e && e.hoverDataItem && e.hoverDataItem(t);
              }),
              e.events.on("pointerout", () => {
                const e = t.component;
                e && e.hoverDataItem && e.unhoverDataItem(t);
              }),
              e.events.on("click", () => {
                const r = i.get("label").text._getText();
                t.show &&
                t.isHidden &&
                (t.isHidden() || !1 === t.get("visible"))
                  ? (t.show(),
                    e.set("disabled", !1),
                    this._root.readerAlert(
                      this._t("%1 shown", this._root.locale, r)
                    ))
                  : t.hide &&
                    (t.hide(),
                    e.set("disabled", !0),
                    this._root.readerAlert(
                      this._t("%1 hidden", this._root.locale, r)
                    ));
              });
          }
          disposeDataItem(e) {
            super.disposeDataItem(e);
            const t = e.dataContext;
            t &&
              t.get &&
              t.get("legendDataItem") == e &&
              t.set("legendDataItem", void 0);
            let i = e.get("itemContainer");
            i && (this.itemContainers.removeValue(i), i.dispose());
            let r = e.get("marker");
            r && (this.markers.removeValue(r), r.dispose());
            let n = e.get("markerRectangle");
            n && (this.markerRectangles.removeValue(n), n.dispose());
            let s = e.get("label");
            s && (this.labels.removeValue(s), s.dispose());
            let a = e.get("valueLabel");
            a && (this.valueLabels.removeValue(a), a.dispose());
          }
        }
        Object.defineProperty(u, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Legend",
        }),
          Object.defineProperty(u, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.F.classNames.concat([u.className]),
          });
      },
      2077: function (e, t, i) {
        "use strict";
        i.d(t, {
          x: function () {
            return a;
          },
        });
        var r = i(1479);
        function n(e, t) {
          for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i];
            if (r.length > 0) {
              let t = r[0];
              if (t.length > 0) {
                let i = t[0];
                e.moveTo(i.x, i.y);
                for (let t = 0, i = r.length; t < i; t++) s(e, r[t]);
              }
            }
          }
        }
        function s(e, t) {
          for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i];
            e.lineTo(r.x, r.y);
          }
        }
        class a extends r.T {
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("points") ||
                this.isDirty("segments") ||
                this._sizeDirty ||
                this.isPrivateDirty("width") ||
                this.isPrivateDirty("height")) &&
                (this._clear = !0);
          }
          _changed() {
            if ((super._changed(), this._clear)) {
              const e = this.get("points"),
                t = this.get("segments");
              if (e && e.length > 0) {
                let t = e[0];
                this._display.moveTo(t.x, t.y), n(this._display, [[e]]);
              } else if (t) n(this._display, t);
              else if (!this.get("draw")) {
                let e = this.width(),
                  t = this.height();
                this._display.moveTo(0, 0), this._display.lineTo(e, t);
              }
            }
          }
        }
        Object.defineProperty(a, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Line",
        }),
          Object.defineProperty(a, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.T.classNames.concat([a.className]),
          });
      },
      8289: function (e, t, i) {
        "use strict";
        i.d(t, {
          G: function () {
            return n;
          },
        });
        class r {
          constructor(e, t) {
            Object.defineProperty(this, "_line", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
              Object.defineProperty(this, "_point", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_context", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_x0", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_x1", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_y0", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_y1", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_t0", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_tension", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              (this._context = e),
              (this._tension = t);
          }
          areaStart() {
            this._line = 0;
          }
          areaEnd() {
            this._line = NaN;
          }
          lineStart() {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          }
          lineEnd() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                l(this, this._t0, o(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          }
          point(e, t) {
            let i = NaN;
            if (((t = +t), (e = +e) !== this._x1 || t !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(e, t)
                      : this._context.moveTo(e, t);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), l(this, o(this, (i = a(this, e, t))), i);
                  break;
                default:
                  l(this, this._t0, (i = a(this, e, t)));
              }
              (this._x0 = this._x1),
                (this._x1 = e),
                (this._y0 = this._y1),
                (this._y1 = t),
                (this._t0 = i);
            }
          }
        }
        function n(e) {
          return function (t) {
            return new r(t, e);
          };
        }
        function s(e) {
          return e < 0 ? -1 : 1;
        }
        function a(e, t, i) {
          let r = e._x1 - e._x0,
            n = t - e._x1,
            a = (e._y1 - e._y0) / (r || (n < 0 && -0)),
            o = (i - e._y1) / (n || (r < 0 && -0)),
            l = (a * n + o * r) / (r + n);
          return (
            (s(a) + s(o)) *
              Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(l)) || 0
          );
        }
        function o(e, t) {
          let i = e._x1 - e._x0;
          return i ? ((3 * (e._y1 - e._y0)) / i - t) / 2 : t;
        }
        function l(e, t, i) {
          let r = e._x0,
            n = e._y0,
            s = e._x1,
            a = e._y1,
            o = ((s - r) / 1.5) * (1 - e._tension);
          e._context.bezierCurveTo(r + o, n + o * t, s - o, a - o * i, s, a);
        }
      },
      5892: function (e, t, i) {
        "use strict";
        i.d(t, {
          $: function () {
            return n;
          },
        });
        class r {
          constructor(e, t) {
            Object.defineProperty(this, "_line", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
              Object.defineProperty(this, "_point", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_context", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_x0", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_x1", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_y0", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_y1", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_t0", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_tension", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              (this._context = e),
              (this._tension = t);
          }
          areaStart() {
            this._line = 0;
          }
          areaEnd() {
            this._line = NaN;
          }
          lineStart() {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          }
          lineEnd() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                l(this, this._t0, o(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          }
          point(e, t) {
            [e, t] = [t, e];
            let i = NaN;
            if (((t = +t), (e = +e) !== this._x1 || t !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), l(this, o(this, (i = a(this, e, t))), i);
                  break;
                default:
                  l(this, this._t0, (i = a(this, e, t)));
              }
              (this._x0 = this._x1),
                (this._x1 = e),
                (this._y0 = this._y1),
                (this._y1 = t),
                (this._t0 = i);
            }
          }
        }
        function n(e) {
          function t(t) {
            return new r(t, e);
          }
          return (
            (t.tension = function (e) {
              return n(+e);
            }),
            t
          );
        }
        function s(e) {
          return e < 0 ? -1 : 1;
        }
        function a(e, t, i) {
          let r = e._x1 - e._x0,
            n = t - e._x1,
            a = (e._y1 - e._y0) / (r || (n < 0 && -0)),
            o = (i - e._y1) / (n || (r < 0 && -0)),
            l = (a * n + o * r) / (r + n);
          return (
            (s(a) + s(o)) *
              Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(l)) || 0
          );
        }
        function o(e, t) {
          let i = e._x1 - e._x0;
          return i ? ((3 * (e._y1 - e._y0)) / i - t) / 2 : t;
        }
        function l(e, t, i) {
          let r = e._x0,
            n = e._y0,
            s = e._x1,
            a = e._y1,
            o = ((s - r) / 1.5) * (1 - e._tension);
          e._context.bezierCurveTo(n + o * t, r + o, a - o * i, s - o, a, s);
        }
      },
      5021: function (e, t, i) {
        "use strict";
        i.d(t, {
          t: function () {
            return s;
          },
        });
        var r = i(4596),
          n = i(5040);
        class s extends r.j {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_display", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makePicture(void 0),
              });
          }
          _changed() {
            if ((super._changed(), this.isDirty("width"))) {
              const e = this.get("width");
              this._display.width = n.isNumber(e) ? e : void 0;
            }
            if (this.isDirty("height")) {
              const e = this.get("height");
              this._display.height = n.isNumber(e) ? e : void 0;
            }
            if (this.isDirty("shadowColor")) {
              this._display.clear();
              const e = this.get("shadowColor");
              this._display.shadowColor = null == e ? void 0 : e;
            }
            this.isDirty("shadowBlur") &&
              (this._display.clear(),
              (this._display.shadowBlur = this.get("shadowBlur"))),
              this.isDirty("shadowOffsetX") &&
                (this._display.clear(),
                (this._display.shadowOffsetX = this.get("shadowOffsetX"))),
              this.isDirty("shadowOffsetY") &&
                (this._display.clear(),
                (this._display.shadowOffsetY = this.get("shadowOffsetY"))),
              this.isDirty("shadowOpacity") &&
                (this._display.clear(),
                (this._display.shadowOpacity = this.get("shadowOpacity"))),
              (this.isDirty("src") || this.isDirty("cors")) &&
                (this._display.clear(), this._load());
          }
          _load() {
            const e = this.get("src");
            if (e) {
              let t = "loaded";
              const i = new Image();
              (i.crossOrigin = this.get("cors", "anonymous")),
                (i.src = e),
                i
                  .decode()
                  .then(() => {
                    (this._display.image = i), this._updateSize();
                  })
                  .catch((e) => {
                    t = "loaderror";
                  }),
                this.events.isEnabled(t) &&
                  this.events.dispatch(t, { type: t, target: this });
            }
          }
          _updateSize() {
            super._updateSize();
            const e = this._display.image;
            if (e) {
              let t = this.getPrivate("width", this.get("width")),
                i = this.getPrivate("height", this.get("height"));
              const r = e.width && e.height ? e.width / e.height : 0;
              n.isNumber(t) && n.isNumber(i)
                ? ((this._display.width = t), (this._display.height = i))
                : n.isNumber(t) && r
                ? (i = t / r)
                : n.isNumber(i) && r
                ? (t = i * r)
                : ((t = e.width), (i = e.height)),
                n.isNumber(t) && (this._display.width = t),
                n.isNumber(i) && (this._display.height = i),
                this.markDirtyBounds(),
                this.markDirty();
            }
          }
        }
        Object.defineProperty(s, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Picture",
        }),
          Object.defineProperty(s, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.j.classNames.concat([s.className]),
          });
      },
      8931: function (e, t, i) {
        "use strict";
        i.d(t, {
          i: function () {
            return s;
          },
        });
        var r = i(1479),
          n = i(751);
        class s extends r.T {
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("pointerBaseWidth") ||
                this.isDirty("cornerRadius") ||
                this.isDirty("pointerLength") ||
                this.isDirty("pointerX") ||
                this.isDirty("pointerY") ||
                this.isDirty("width") ||
                this.isDirty("height")) &&
                (this._clear = !0);
          }
          _changed() {
            if ((super._changed(), this._clear)) {
              this.markDirtyBounds();
              let e = this.width(),
                t = this.height();
              if (e > 0 && t > 0) {
                let i = this.get("cornerRadius", 8);
                i = n.fitToRange(i, 0, Math.min(e / 2, t / 2));
                let r = this.get("pointerX", 0),
                  s = this.get("pointerY", 0),
                  a = this.get("pointerBaseWidth", 15) / 2,
                  o = 0,
                  l = 0,
                  h = 0,
                  u = (r - o) * (t - l) - (s - l) * (e - o),
                  c = (r - h) * (0 - t) - (s - t) * (e - h);
                const d = this._display;
                if ((d.moveTo(i, 0), u > 0 && c > 0)) {
                  let t = Math.round(n.fitToRange(r, i + a, e - a - i));
                  (s = n.fitToRange(s, -1 / 0, 0)),
                    d.lineTo(t - a, 0),
                    d.lineTo(r, s),
                    d.lineTo(t + a, 0);
                }
                if (
                  (d.lineTo(e - i, 0), d.arcTo(e, 0, e, i, i), u > 0 && c < 0)
                ) {
                  let o = Math.round(n.fitToRange(s, i + a, t - a - i));
                  (r = n.fitToRange(r, e, 1 / 0)),
                    d.lineTo(e, i),
                    d.lineTo(e, Math.max(o - a, i)),
                    d.lineTo(r, s),
                    d.lineTo(e, o + a);
                }
                if (
                  (d.lineTo(e, t - i),
                  d.arcTo(e, t, e - i, t, i),
                  u < 0 && c < 0)
                ) {
                  let o = Math.round(n.fitToRange(r, i + a, e - a - i));
                  (s = n.fitToRange(s, t, 1 / 0)),
                    d.lineTo(e - i, t),
                    d.lineTo(o + a, t),
                    d.lineTo(r, s),
                    d.lineTo(o - a, t);
                }
                if (
                  (d.lineTo(i, t), d.arcTo(0, t, 0, t - i, i), u < 0 && c > 0)
                ) {
                  let e = Math.round(n.fitToRange(s, i + a, t - i - a));
                  (r = n.fitToRange(r, -1 / 0, 0)),
                    d.lineTo(0, t - i),
                    d.lineTo(0, e + a),
                    d.lineTo(r, s),
                    d.lineTo(0, Math.max(e - a, i));
                }
                d.lineTo(0, i), d.arcTo(0, 0, i, 0, i), d.closePath();
              }
            }
          }
        }
        Object.defineProperty(s, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PointedRectangle",
        }),
          Object.defineProperty(s, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.T.classNames.concat([s.className]),
          });
      },
      7770: function (e, t, i) {
        "use strict";
        i.d(t, {
          m: function () {
            return s;
          },
        });
        var r = i(1479),
          n = i(5071);
        class s extends r.T {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "morphAnimation", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _beforeChanged() {
            if ((super._beforeChanged(), this.isDirty("coordinates"))) {
              const e = [],
                t = this.get("coordinates");
              t &&
                n.each(t, (t) => {
                  e.push({ x: t[0], y: t[1] });
                }),
                this.set("points", e);
            }
            if (
              (this.isPrivateDirty("points") && (this._clear = !0),
              this.isDirty("points"))
            ) {
              this._clear = !0;
              const e = this.get("points"),
                t = this._prevSettings.points;
              if (t) {
                if (e) {
                  let i = n.copy(e),
                    r = n.copy(t),
                    s = i.length,
                    a = r.length;
                  if (s > a) {
                    let e = n.copy(i);
                    for (let t = 0; t < s; t++) {
                      let i = Math.floor((t / s) * a);
                      e[t] = { x: r[i].x, y: r[i].y };
                    }
                    r = e;
                  } else if (a > s) {
                    let e = n.copy(r);
                    for (let t = 0; t < a; t++) {
                      let r = Math.floor((t / a) * s);
                      e[t] = { x: i[r].x, y: i[r].y };
                    }
                    i = e;
                  }
                  this.setPrivateRaw("previousPoints", r),
                    this.setPrivateRaw("points", i),
                    (this.morphAnimation = this.animatePrivate({
                      key: "morphProgress",
                      from: 0,
                      to: 1,
                      duration: this.get("animationDuration", 0),
                      easing: this.get("animationEasing"),
                    }));
                }
              } else
                this.setPrivateRaw("previousPoints", e),
                  this.setPrivateRaw("points", e);
              let i = 1 / 0,
                r = -1 / 0,
                s = 1 / 0,
                a = -1 / 0;
              if (e)
                for (let t = 1, n = e.length; t < n; t++) {
                  const n = e[t];
                  (i = Math.min(i, n.x)),
                    (r = Math.max(r, n.x)),
                    (s = Math.min(s, n.y)),
                    (a = Math.max(a, n.y));
                }
              this.setPrivate("minX", i),
                this.setPrivate("maxX", r),
                this.setPrivate("minY", s),
                this.setPrivate("maxY", s);
            }
            this.isPrivateDirty("morphProgress") && (this._clear = !0);
          }
          _changed() {
            super._changed(), this._clear && this._draw();
          }
          _draw() {
            const e = this.getPrivate("previousPoints"),
              t = this.getPrivate("points"),
              i = this.getPrivate("morphProgress", 1);
            if (t && e) {
              const r = t[0],
                n = e[0];
              r &&
                this._display.moveTo(
                  n.x + (r.x - n.x) * i,
                  n.y + (r.y - n.y) * i
                );
              for (let r = 1, n = t.length; r < n; r++) {
                const n = t[r],
                  s = e[r];
                this._display.lineTo(
                  s.x + (n.x - s.x) * i,
                  s.y + (n.y - s.y) * i
                );
              }
              this._display.closePath();
            }
          }
          _updateSize() {
            this.markDirty(), (this._clear = !0);
          }
        }
        Object.defineProperty(s, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Polygon",
        }),
          Object.defineProperty(s, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.T.classNames.concat([s.className]),
          });
      },
      815: function (e, t, i) {
        "use strict";
        i.d(t, {
          x: function () {
            return l;
          },
        });
        var r = i(6245),
          n = i(962),
          s = i(4244),
          a = i(751),
          o = i(7652);
        class l extends n._ {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_flipped", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _afterNew() {
            this._textKeys.push("textType", "kerning"), super._afterNew();
          }
          _makeText() {
            this._text = this.children.push(s.f.new(this._root, {}));
          }
          baseRadius() {
            const e = this.getPrivate("radius", 0),
              t = this.getPrivate("innerRadius", 0),
              i = this.get("baseRadius", 0);
            return t + o.relativeToValue(i, e - t);
          }
          radius() {
            const e = this.get("inside", !1);
            return this.baseRadius() + this.get("radius", 0) * (e ? -1 : 1);
          }
          _updateChildren() {
            if (
              (super._updateChildren(),
              this.isDirty("baseRadius") ||
                this.isPrivateDirty("radius") ||
                this.isPrivateDirty("innerRadius") ||
                this.isDirty("labelAngle") ||
                this.isDirty("radius") ||
                this.isDirty("inside") ||
                this.isDirty("orientation") ||
                this.isDirty("textType"))
            ) {
              const e = this.get("textType", "adjusted"),
                t = this.get("inside", !1),
                i = this.get("orientation");
              let n = a.normalizeAngle(this.get("labelAngle", 0));
              this._text.set("startAngle", this.get("labelAngle", 0)),
                this._text.set("inside", t);
              const s = a.sin(n),
                o = a.cos(n);
              let l = this.baseRadius(),
                h = this.radius();
              if (((this._display.angle = 0), "circular" == e))
                this.setAll({
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                }),
                  this._text.set("orientation", i),
                  this._text.set("radius", h);
              else {
                0 == l && ((n = 0), (h = 0));
                let t = h * o,
                  a = h * s;
                "radial" == e
                  ? (this.setRaw("x", t),
                    this.setRaw("y", a),
                    n < 90 || n > 270 || "auto" != i
                      ? ((this._display.angle = n), (this._flipped = !1))
                      : ((this._display.angle = n + 180), (this._flipped = !0)),
                    (this._dirty.rotation = !1))
                  : "adjusted" == e
                  ? (this.setRaw("centerX", r.CI),
                    this.setRaw("centerY", r.CI),
                    this.setRaw("x", t),
                    this.setRaw("y", a))
                  : "regular" == e &&
                    (this.setRaw("x", t), this.setRaw("y", a));
              }
              this.markDirtyPosition(), this.markDirtyBounds();
            }
          }
          _updatePosition() {
            const e = this.get("textType", "regular"),
              t = this.get("inside", !1);
            let i = 0,
              n = 0,
              s = this.get("labelAngle", 0),
              o = this.localBounds(),
              l = o.right - o.left,
              h = o.bottom - o.top;
            if ("radial" == e) {
              if (this._flipped) {
                let e = this.get("centerX");
                e instanceof r.gG && (l *= 1 - 2 * e.value),
                  (i = l * a.cos(s)),
                  (n = l * a.sin(s));
              }
            } else
              t ||
                "adjusted" != e ||
                ((i = (l / 2) * a.cos(s)), (n = (h / 2) * a.sin(s)));
            this.setRaw("dx", i), this.setRaw("dy", n), super._updatePosition();
          }
          get text() {
            return this._text;
          }
        }
        Object.defineProperty(l, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RadialLabel",
        }),
          Object.defineProperty(l, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n._.classNames.concat([l.className]),
          });
      },
      4244: function (e, t, i) {
        "use strict";
        i.d(t, {
          f: function () {
            return s;
          },
        });
        var r = i(2036),
          n = i(751);
        class s extends r.x {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_display", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeRadialText("", this.textStyle),
              });
          }
          _afterNew() {
            super._afterNew();
          }
          _beforeChanged() {
            super._beforeChanged(),
              this._display.clear(),
              this.isDirty("textType") &&
                ((this._display.textType = this.get("textType")),
                this.markDirtyBounds()),
              this.isDirty("radius") &&
                ((this._display.radius = this.get("radius")),
                this.markDirtyBounds()),
              this.isDirty("startAngle") &&
                ((this._display.startAngle =
                  (this.get("startAngle", 0) + 90) * n.RADIANS),
                this.markDirtyBounds()),
              this.isDirty("inside") &&
                ((this._display.inside = this.get("inside")),
                this.markDirtyBounds()),
              this.isDirty("orientation") &&
                ((this._display.orientation = this.get("orientation")),
                this.markDirtyBounds()),
              this.isDirty("kerning") &&
                ((this._display.kerning = this.get("kerning")),
                this.markDirtyBounds());
          }
        }
        Object.defineProperty(s, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RadialText",
        }),
          Object.defineProperty(s, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.x.classNames.concat([s.className]),
          });
      },
      7142: function (e, t, i) {
        "use strict";
        i.d(t, {
          A: function () {
            return n;
          },
        });
        var r = i(1479);
        class n extends r.T {
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("width") ||
                this.isDirty("height") ||
                this.isPrivateDirty("width") ||
                this.isPrivateDirty("height")) &&
                (this._clear = !0);
          }
          _changed() {
            super._changed(), this._clear && !this.get("draw") && this._draw();
          }
          _draw() {
            this._display.drawRect(0, 0, this.width(), this.height());
          }
          _updateSize() {
            this.markDirty(), (this._clear = !0);
          }
        }
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Rectangle",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.T.classNames.concat([n.className]),
          });
      },
      3497: function (e, t, i) {
        "use strict";
        i.d(t, {
          c: function () {
            return o;
          },
        });
        var r = i(5040),
          n = i(751),
          s = i(7652),
          a = i(7142);
        class o extends a.A {
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("cornerRadiusTL") ||
                this.isDirty("cornerRadiusTR") ||
                this.isDirty("cornerRadiusBR") ||
                this.isDirty("cornerRadiusBL")) &&
                (this._clear = !0);
          }
          _draw() {
            let e = this.width(),
              t = this.height(),
              i = e,
              a = t,
              o = i / Math.abs(e),
              l = a / Math.abs(t);
            if (r.isNumber(i) && r.isNumber(a)) {
              let e = Math.min(i, a) / 2,
                t = s.relativeToValue(this.get("cornerRadiusTL", 8), e),
                r = s.relativeToValue(this.get("cornerRadiusTR", 8), e),
                h = s.relativeToValue(this.get("cornerRadiusBR", 8), e),
                u = s.relativeToValue(this.get("cornerRadiusBL", 8), e),
                c = Math.min(Math.abs(i / 2), Math.abs(a / 2));
              (t = n.fitToRange(t, 0, c)),
                (r = n.fitToRange(r, 0, c)),
                (h = n.fitToRange(h, 0, c)),
                (u = n.fitToRange(u, 0, c));
              const d = this._display;
              d.moveTo(t * o, 0),
                d.lineTo(i - r * o, 0),
                r > 0 && d.arcTo(i, 0, i, r * l, r),
                d.lineTo(i, a - h * l),
                h > 0 && d.arcTo(i, a, i - h * o, a, h),
                d.lineTo(u * o, a),
                u > 0 && d.arcTo(0, a, 0, a - u * l, u),
                d.lineTo(0, t * l),
                t > 0 && d.arcTo(0, 0, t * o, 0, t),
                d.closePath();
            }
          }
        }
        Object.defineProperty(o, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RoundedRectangle",
        }),
          Object.defineProperty(o, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a.A.classNames.concat([o.className]),
          });
      },
      6001: function (e, t, i) {
        "use strict";
        i.d(t, {
          L: function () {
            return h;
          },
        });
        var r = i(3497),
          n = i(8777),
          s = i(1479),
          a = i(8054),
          o = i(5040),
          l = i(7652);
        class h extends n.W {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "thumb", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._makeThumb(),
              }),
              Object.defineProperty(this, "startGrip", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._makeButton(),
              }),
              Object.defineProperty(this, "endGrip", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._makeButton(),
              }),
              Object.defineProperty(this, "_thumbBusy", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_startDown", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_endDown", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_thumbDown", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_gripDown", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _addOrientationClass() {
            (this._settings.themeTags = l.mergeTags(this._settings.themeTags, [
              "scrollbar",
              this._settings.orientation,
            ])),
              this._settings.background ||
                (this._settings.background = r.c.new(this._root, {
                  themeTags: l.mergeTags(this._settings.themeTags, [
                    "main",
                    "background",
                  ]),
                }));
          }
          _makeButton() {
            return this.children.push(
              a.z.new(this._root, {
                themeTags: ["resize", "button", this.get("orientation")],
                icon: s.T.new(this._root, { themeTags: ["icon"] }),
              })
            );
          }
          _makeThumb() {
            return this.children.push(
              r.c.new(this._root, {
                themeTags: ["thumb", this.get("orientation")],
              })
            );
          }
          _handleAnimation(e) {
            e &&
              this._disposers.push(
                e.events.on("stopped", () => {
                  this.setPrivateRaw("isBusy", !1), (this._thumbBusy = !1);
                })
              );
          }
          _afterNew() {
            this._addOrientationClass(), super._afterNew();
            const e = this.startGrip,
              t = this.endGrip,
              i = this.thumb,
              r = this.get("background");
            r &&
              this._disposers.push(
                r.events.on("click", (e) => {
                  this.setPrivateRaw("isBusy", !0);
                  const t = this._display.toLocal(e.point),
                    r = this.width(),
                    n = this.height(),
                    s = this.get("orientation");
                  let a, o, l;
                  (a =
                    "vertical" == s
                      ? (t.y - i.height() / 2) / n
                      : (t.x - i.width() / 2) / r),
                    "vertical" == s
                      ? ((o = a * n), (l = "y"))
                      : ((o = a * r), (l = "x"));
                  const h = this.get("animationDuration", 0);
                  h > 0
                    ? ((this._thumbBusy = !0),
                      this._handleAnimation(
                        this.thumb.animate({
                          key: l,
                          to: o,
                          duration: h,
                          easing: this.get("animationEasing"),
                        })
                      ))
                    : (this.thumb.set(l, o),
                      this._root.events.once("frameended", () => {
                        this.setPrivateRaw("isBusy", !1);
                      }));
                })
              ),
              this._disposers.push(
                i.events.on("dblclick", (e) => {
                  if (!l.isLocalEvent(e.originalEvent, this)) return;
                  const t = this.get("animationDuration", 0),
                    i = this.get("animationEasing");
                  this.animate({ key: "start", to: 0, duration: t, easing: i }),
                    this.animate({ key: "end", to: 1, duration: t, easing: i });
                })
              ),
              this._disposers.push(
                e.events.on("pointerdown", () => {
                  this.setPrivateRaw("isBusy", !0),
                    (this._startDown = !0),
                    (this._gripDown = "start");
                })
              ),
              this._disposers.push(
                t.events.on("pointerdown", () => {
                  this.setPrivateRaw("isBusy", !0),
                    (this._endDown = !0),
                    (this._gripDown = "end");
                })
              ),
              this._disposers.push(
                i.events.on("pointerdown", () => {
                  this.setPrivateRaw("isBusy", !0),
                    (this._thumbDown = !0),
                    (this._gripDown = void 0);
                })
              ),
              this._disposers.push(
                e.events.on("globalpointerup", () => {
                  this._startDown && this.setPrivateRaw("isBusy", !1),
                    (this._startDown = !1);
                })
              ),
              this._disposers.push(
                t.events.on("globalpointerup", () => {
                  this._endDown && this.setPrivateRaw("isBusy", !1),
                    (this._endDown = !1);
                })
              ),
              this._disposers.push(
                i.events.on("globalpointerup", () => {
                  this._thumbDown && this.setPrivateRaw("isBusy", !1),
                    (this._thumbDown = !1);
                })
              ),
              this._disposers.push(
                e.on("x", () => {
                  this._updateThumb();
                })
              ),
              this._disposers.push(
                t.on("x", () => {
                  this._updateThumb();
                })
              ),
              this._disposers.push(
                e.on("y", () => {
                  this._updateThumb();
                })
              ),
              this._disposers.push(
                t.on("y", () => {
                  this._updateThumb();
                })
              ),
              this._disposers.push(
                i.events.on("positionchanged", () => {
                  this._updateGripsByThumb();
                })
              ),
              "vertical" == this.get("orientation")
                ? (e.set("x", 0),
                  t.set("x", 0),
                  this._disposers.push(
                    i.adapters.add("y", (e) =>
                      Math.max(
                        Math.min(Number(e), this.height() - i.height()),
                        0
                      )
                    )
                  ),
                  this._disposers.push(
                    i.adapters.add("x", (e) => this.width() / 2)
                  ),
                  this._disposers.push(
                    e.adapters.add("x", (e) => this.width() / 2)
                  ),
                  this._disposers.push(
                    t.adapters.add("x", (e) => this.width() / 2)
                  ),
                  this._disposers.push(
                    e.adapters.add("y", (e) =>
                      Math.max(Math.min(Number(e), this.height()), 0)
                    )
                  ),
                  this._disposers.push(
                    t.adapters.add("y", (e) =>
                      Math.max(Math.min(Number(e), this.height()), 0)
                    )
                  ))
                : (e.set("y", 0),
                  t.set("y", 0),
                  this._disposers.push(
                    i.adapters.add("x", (e) =>
                      Math.max(Math.min(Number(e), this.width() - i.width()), 0)
                    )
                  ),
                  this._disposers.push(
                    i.adapters.add("y", (e) => this.height() / 2)
                  ),
                  this._disposers.push(
                    e.adapters.add("y", (e) => this.height() / 2)
                  ),
                  this._disposers.push(
                    t.adapters.add("y", (e) => this.height() / 2)
                  ),
                  this._disposers.push(
                    e.adapters.add("x", (e) =>
                      Math.max(Math.min(Number(e), this.width()), 0)
                    )
                  ),
                  this._disposers.push(
                    t.adapters.add("x", (e) =>
                      Math.max(Math.min(Number(e), this.width()), 0)
                    )
                  ));
          }
          _updateChildren() {
            super._updateChildren(),
              (this.isDirty("end") ||
                this.isDirty("start") ||
                this._sizeDirty) &&
                this.updateGrips();
          }
          _changed() {
            if (
              (super._changed(), this.isDirty("start") || this.isDirty("end"))
            ) {
              const e = "rangechanged";
              this.events.isEnabled(e) &&
                this.events.dispatch(e, {
                  type: e,
                  target: this,
                  start: this.get("start", 0),
                  end: this.get("end", 1),
                  grip: this._gripDown,
                });
            }
          }
          updateGrips() {
            const e = this.startGrip,
              t = this.endGrip,
              i = this.get("orientation"),
              r = this.height(),
              n = this.width();
            "vertical" == i
              ? (e.set("y", r * this.get("start", 0)),
                t.set("y", r * this.get("end", 1)))
              : (e.set("x", n * this.get("start", 0)),
                t.set("x", n * this.get("end", 1)));
            const s = this.getPrivate("positionTextFunction"),
              a = Math.round(100 * this.get("start", 0)),
              o = Math.round(100 * this.get("end", 0));
            let l, h;
            s
              ? ((l = s.call(this, this.get("start", 0))),
                (h = s.call(this, this.get("end", 0))))
              : ((l = a + "%"), (h = o + "%")),
              e.set("ariaLabel", this._t("From %1", void 0, l)),
              e.set("ariaValueNow", "" + a),
              e.set("ariaValueText", a + "%"),
              e.set("ariaValueMin", "0"),
              e.set("ariaValueMax", "100"),
              t.set("ariaLabel", this._t("To %1", void 0, h)),
              t.set("ariaValueNow", "" + o),
              t.set("ariaValueText", o + "%"),
              t.set("ariaValueMin", "0"),
              t.set("ariaValueMax", "100");
          }
          _updateThumb() {
            const e = this.thumb,
              t = this.startGrip,
              i = this.endGrip,
              r = this.height(),
              n = this.width();
            let s = t.x(),
              a = i.x(),
              l = t.y(),
              h = i.y(),
              u = 0,
              c = 1;
            "vertical" == this.get("orientation")
              ? o.isNumber(l) &&
                o.isNumber(h) &&
                (this._thumbBusy ||
                  e.isDragging() ||
                  (e.set("height", h - l), e.set("y", l)),
                (u = l / r),
                (c = h / r))
              : o.isNumber(s) &&
                o.isNumber(a) &&
                (this._thumbBusy ||
                  e.isDragging() ||
                  (e.set("width", a - s), e.set("x", s)),
                (u = s / n),
                (c = a / n)),
              !this.getPrivate("isBusy") ||
                (this.get("start") == u && this.get("end") == c) ||
                (this.set("start", u), this.set("end", c));
            const d = this.getPrivate("positionTextFunction"),
              p = Math.round(100 * this.get("start", 0)),
              f = Math.round(100 * this.get("end", 0));
            let g, m;
            d
              ? ((g = d.call(this, this.get("start", 0))),
                (m = d.call(this, this.get("end", 0))))
              : ((g = p + "%"), (m = f + "%")),
              e.set("ariaLabel", this._t("From %1 to %2", void 0, g, m)),
              e.set("ariaValueNow", "" + p),
              e.set("ariaValueText", p + "%");
          }
          _updateGripsByThumb() {
            const e = this.thumb,
              t = this.startGrip,
              i = this.endGrip;
            if ("vertical" == this.get("orientation")) {
              const r = e.height();
              t.set("y", e.y()), i.set("y", e.y() + r);
            } else {
              const r = e.width();
              t.set("x", e.x()), i.set("x", e.x() + r);
            }
          }
        }
        Object.defineProperty(h, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Scrollbar",
        }),
          Object.defineProperty(h, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.W.classNames.concat([h.className]),
          });
      },
      5829: function (e, t, i) {
        "use strict";
        i.d(t, {
          j: function () {
            return l;
          },
        });
        var r = i(1337),
          n = i(8777),
          s = i(7144),
          a = i(6245),
          o = i(5071);
        class l extends r.k {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "seriesContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n.W.new(this._root, {
                  width: a.AQ,
                  height: a.AQ,
                  isMeasured: !1,
                }),
              }),
              Object.defineProperty(this, "series", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new s.dn(),
              });
          }
          _afterNew() {
            super._afterNew(), this._disposers.push(this.series);
            const e = this.seriesContainer.children;
            this._disposers.push(
              this.series.events.onAll((t) => {
                if ("clear" === t.type) {
                  o.each(t.oldValues, (e) => {
                    this._removeSeries(e);
                  });
                  const e = this.get("colors");
                  e && e.reset();
                } else if ("push" === t.type)
                  e.moveValue(t.newValue), this._processSeries(t.newValue);
                else if ("setIndex" === t.type)
                  e.setIndex(t.index, t.newValue),
                    this._processSeries(t.newValue);
                else if ("insertIndex" === t.type)
                  e.insertIndex(t.index, t.newValue),
                    this._processSeries(t.newValue);
                else if ("removeIndex" === t.type)
                  this._removeSeries(t.oldValue);
                else {
                  if ("moveIndex" !== t.type)
                    throw new Error("Unknown IListEvent type");
                  e.moveValue(t.value, t.newIndex),
                    this._processSeries(t.value);
                }
              })
            );
          }
          _processSeries(e) {
            (e.chart = this), e._placeBulletsContainer(this);
          }
          _removeSeries(e) {
            e.isDisposed() ||
              (this.seriesContainer.children.removeValue(e),
              e._removeBulletsContainer());
          }
        }
        Object.defineProperty(l, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SerialChart",
        }),
          Object.defineProperty(l, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.k.classNames.concat([l.className]),
          });
      },
      3399: function (e, t, i) {
        "use strict";
        i.d(t, {
          F: function () {
            return f;
          },
        });
        var r = i(5125),
          n = i(9361),
          s = i(7144),
          a = i(1112),
          o = i(6490),
          l = i(6245),
          h = i(5071),
          u = i(5040),
          c = i(1926),
          d = i(8777),
          p = i(962);
        class f extends n.w {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_aggregatesCalculated", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_selectionAggregatesCalculated", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_dataProcessed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_psi", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_pei", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "chart", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "bullets", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new s.aV(),
              }),
              Object.defineProperty(this, "bulletsContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d.W.new(this._root, {
                  width: l.AQ,
                  height: l.AQ,
                  position: "absolute",
                }),
              });
          }
          _afterNew() {
            this.valueFields.push("value"),
              super._afterNew(),
              this.setPrivate("customData", {}),
              this._disposers.push(
                this.bullets.events.onAll((e) => {
                  if ("clear" === e.type) this._handleBullets(this.dataItems);
                  else if ("push" === e.type)
                    this._handleBullets(this.dataItems);
                  else if ("setIndex" === e.type)
                    this._handleBullets(this.dataItems);
                  else if ("insertIndex" === e.type)
                    this._handleBullets(this.dataItems);
                  else if ("removeIndex" === e.type)
                    this._handleBullets(this.dataItems);
                  else {
                    if ("moveIndex" !== e.type)
                      throw new Error("Unknown IListEvent type");
                    this._handleBullets(this.dataItems);
                  }
                })
              );
          }
          _dispose() {
            this.bulletsContainer.dispose(), super._dispose();
          }
          startIndex() {
            let e = this.dataItems.length;
            return Math.min(this.getPrivate("startIndex", 0), e);
          }
          endIndex() {
            let e = this.dataItems.length;
            return Math.min(this.getPrivate("endIndex", e), e);
          }
          _handleBullets(e) {
            h.each(e, (e) => {
              const t = e.bullets;
              t &&
                (h.each(t, (e) => {
                  e.dispose();
                }),
                (e.bullets = void 0));
            }),
              this.markDirtyValues();
          }
          getDataItemById(e) {
            return h.find(this.dataItems, (t) => t.get("id") == e);
          }
          _makeBullets(e) {
            this._shouldMakeBullet(e) &&
              ((e.bullets = []),
              this.bullets.each((t) => {
                this._makeBullet(e, t);
              }));
          }
          _shouldMakeBullet(e) {
            return !0;
          }
          _makeBullet(e, t, i) {
            const r = t(this._root, this, e);
            if (r) {
              let t = r.get("sprite");
              t &&
                (t._setDataItem(e),
                t.setRaw("position", "absolute"),
                this.bulletsContainer.children.push(t)),
                (r._index = i),
                (r.series = this),
                e.bullets.push(r);
            }
            return r;
          }
          _clearDirty() {
            super._clearDirty(),
              (this._aggregatesCalculated = !1),
              (this._selectionAggregatesCalculated = !1);
          }
          _prepareChildren() {
            super._prepareChildren();
            let e = this.startIndex(),
              t = this.endIndex();
            if (
              (this.isDirty("heatRules") && (this._valuesDirty = !0),
              this.isPrivateDirty("baseValueSeries"))
            ) {
              const e = this.getPrivate("baseValueSeries");
              e &&
                this._disposers.push(
                  e.onPrivate("startIndex", () => {
                    this.markDirtyValues();
                  })
                );
            }
            if (
              (this.get("calculateAggregates") &&
                (this._valuesDirty &&
                  !this._dataProcessed &&
                  (this._aggregatesCalculated ||
                    (this._calculateAggregates(0, this.dataItems.length),
                    (this._aggregatesCalculated = !0))),
                (this._psi == e && this._pei == t) ||
                  this._selectionAggregatesCalculated ||
                  ((0 === e &&
                    t === this.dataItems.length &&
                    this._aggregatesCalculated) ||
                    this._calculateAggregates(e, t),
                  (this._selectionAggregatesCalculated = !0))),
              this.isDirty("tooltip"))
            ) {
              let e = this.get("tooltip");
              e && (e.hide(0), e.set("tooltipTarget", this));
            }
            if (this.isDirty("fill") || this.isDirty("stroke")) {
              let e;
              const t = this.get("legendDataItem");
              if (
                t &&
                ((e = t.get("markerRectangle")), e && this.isVisible())
              ) {
                if (this.isDirty("stroke")) {
                  let t = this.get("stroke");
                  e.set("stroke", t);
                }
                if (this.isDirty("fill")) {
                  let t = this.get("fill");
                  e.set("fill", t);
                }
              }
              this.updateLegendMarker(void 0);
            }
            if (this.bullets.length > 0) {
              let e = this.startIndex(),
                t = this.endIndex();
              t < this.dataItems.length && t++;
              for (let i = e; i < t; i++) {
                let e = this.dataItems[i];
                e.bullets || this._makeBullets(e);
              }
            }
          }
          _calculateAggregates(e, t) {
            let i = this._valueFields;
            if (!i) throw new Error("No value fields are set for the series.");
            const r = {},
              n = {},
              s = {},
              a = {},
              o = {},
              l = {},
              u = {},
              c = {},
              d = {};
            h.each(i, (e) => {
              (r[e] = 0), (n[e] = 0), (s[e] = 0);
            }),
              h.each(i, (i) => {
                let h = i + "Change",
                  p = i + "ChangePercent",
                  f = i + "ChangePrevious",
                  g = i + "ChangePreviousPercent",
                  m = i + "ChangeSelection",
                  b = i + "ChangeSelectionPercent",
                  _ = "valueY";
                ("valueX" != i &&
                  "openValueX" != i &&
                  "lowValueX" != i &&
                  "highValueX" != i) ||
                  (_ = "valueX");
                const v = this.getPrivate("baseValueSeries");
                for (let y = e; y < t; y++) {
                  const t = this.dataItems[y];
                  let w = t.get(i);
                  null != w &&
                    (s[i]++,
                    (r[i] += w),
                    (n[i] += Math.abs(w)),
                    (c[i] = r[i] / s[i]),
                    (a[i] > w || null == a[i]) && (a[i] = w),
                    (o[i] < w || null == o[i]) && (o[i] = w),
                    (u[i] = w),
                    null == l[i] &&
                      ((l[i] = w), (d[i] = w), v && (l[_] = v._getBase(_))),
                    0 === e &&
                      (t.setRaw(h, w - l[_]),
                      t.setRaw(p, ((w - l[_]) / l[_]) * 100)),
                    t.setRaw(f, w - d[_]),
                    t.setRaw(g, ((w - d[_]) / d[_]) * 100),
                    t.setRaw(m, w - l[_]),
                    t.setRaw(b, ((w - l[_]) / l[_]) * 100),
                    (d[i] = w));
                }
              }),
              h.each(i, (e) => {
                this.setPrivate(e + "AverageSelection", c[e]),
                  this.setPrivate(e + "CountSelection", s[e]),
                  this.setPrivate(e + "SumSelection", r[e]),
                  this.setPrivate(e + "AbsoluteSumSelection", n[e]),
                  this.setPrivate(e + "LowSelection", a[e]),
                  this.setPrivate(e + "HighSelection", o[e]),
                  this.setPrivate(e + "OpenSelection", l[e]),
                  this.setPrivate(e + "CloseSelection", u[e]);
              }),
              0 === e &&
                t === this.dataItems.length &&
                h.each(i, (e) => {
                  this.setPrivate(e + "Average", c[e]),
                    this.setPrivate(e + "Count", s[e]),
                    this.setPrivate(e + "Sum", r[e]),
                    this.setPrivate(e + "AbsoluteSum", n[e]),
                    this.setPrivate(e + "Low", a[e]),
                    this.setPrivate(e + "High", o[e]),
                    this.setPrivate(e + "Open", l[e]),
                    this.setPrivate(e + "Close", u[e]);
                });
          }
          _updateChildren() {
            super._updateChildren(),
              (this._psi = this.startIndex()),
              (this._pei = this.endIndex()),
              this.isDirty("visible") &&
                this.bulletsContainer.set("visible", this.get("visible"));
            const e = this.get("heatRules");
            if (
              (this._valuesDirty &&
                e &&
                e.length > 0 &&
                h.each(e, (e) => {
                  const t =
                      e.minValue || this.getPrivate(e.dataField + "Low") || 0,
                    i =
                      e.maxValue || this.getPrivate(e.dataField + "High") || 0;
                  h.each(e.target._entities, (r) => {
                    const n = r.dataItem.get(e.dataField);
                    if (u.isNumber(n))
                      if (e.customFunction)
                        e.customFunction.call(this, r, t, i, n);
                      else {
                        let s, h;
                        (s = e.logarithmic
                          ? (Math.log(n) * Math.LOG10E -
                              Math.log(t) * Math.LOG10E) /
                            (Math.log(i) * Math.LOG10E -
                              Math.log(t) * Math.LOG10E)
                          : (n - t) / (i - t)),
                          !u.isNumber(n) ||
                            (u.isNumber(s) && Math.abs(s) != 1 / 0) ||
                            (s = 0.5),
                          u.isNumber(e.min)
                            ? (h = e.min + (e.max - e.min) * s)
                            : e.min instanceof a.Il
                            ? (h = a.Il.interpolate(s, e.min, e.max))
                            : e.min instanceof l.gG &&
                              (h = (0, o.Wn)(s, e.min, e.max)),
                          r.set(e.key, h);
                      }
                    else e.neutral && r.set(e.key, e.neutral);
                  });
                }),
              this.get("visible") && this.bullets.length > 0)
            ) {
              let e = this.dataItems.length,
                t = this.startIndex(),
                i = this.endIndex();
              i < e && i++, t > 0 && t--;
              for (let e = 0; e < t; e++) this._hideBullets(this.dataItems[e]);
              for (let e = t; e < i; e++)
                this._positionBullets(this.dataItems[e]);
              for (let t = i; t < e; t++) this._hideBullets(this.dataItems[t]);
            }
          }
          _positionBullets(e) {
            e.bullets &&
              h.each(e.bullets, (e) => {
                this._positionBullet(e);
                const t = e.get("sprite");
                e.get("dynamic") &&
                  (t && (t._markDirtyKey("fill"), t.markDirtySize()),
                  t instanceof d.W &&
                    t.walkChildren((e) => {
                      e._markDirtyKey("fill"),
                        e.markDirtySize(),
                        e instanceof p._ && e.text.markDirtyText();
                    })),
                  t instanceof p._ &&
                    t.get("populateText") &&
                    t.text.markDirtyText();
              });
          }
          _hideBullets(e) {
            e.bullets &&
              h.each(e.bullets, (e) => {
                let t = e.get("sprite");
                t && t.setPrivate("visible", !1);
              });
          }
          _positionBullet(e) {}
          _placeBulletsContainer(e) {
            e.bulletsContainer.children.moveValue(this.bulletsContainer);
          }
          _removeBulletsContainer() {
            const e = this.bulletsContainer;
            e.parent && e.parent.children.removeValue(e);
          }
          disposeDataItem(e) {
            const t = e.bullets;
            t &&
              h.each(t, (e) => {
                e.dispose();
              });
          }
          _getItemReaderLabel() {
            return "";
          }
          showDataItem(e, t) {
            const i = Object.create(null, {
              showDataItem: { get: () => super.showDataItem },
            });
            return (0, r.mG)(this, void 0, void 0, function* () {
              const r = [i.showDataItem.call(this, e, t)],
                n = e.bullets;
              n &&
                h.each(n, (e) => {
                  r.push(e.get("sprite").show(t));
                }),
                yield Promise.all(r);
            });
          }
          hideDataItem(e, t) {
            const i = Object.create(null, {
              hideDataItem: { get: () => super.hideDataItem },
            });
            return (0, r.mG)(this, void 0, void 0, function* () {
              const r = [i.hideDataItem.call(this, e, t)],
                n = e.bullets;
              n &&
                h.each(n, (e) => {
                  r.push(e.get("sprite").hide(t));
                }),
                yield Promise.all(r);
            });
          }
          _sequencedShowHide(e, t) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              if (this.get("sequencedInterpolation"))
                if (
                  (u.isNumber(t) || (t = this.get("interpolationDuration", 0)),
                  t > 0)
                ) {
                  const i = this.startIndex(),
                    n = this.endIndex();
                  yield Promise.all(
                    h.map(this.dataItems, (s, a) =>
                      (0, r.mG)(this, void 0, void 0, function* () {
                        let r = t || 0;
                        (a < i - 10 || a > n + 10) && (r = 0);
                        let o = this.get("sequencedDelay", 0) + r / (n - i);
                        yield c.sleep(o * (a - i)),
                          e
                            ? yield this.showDataItem(s, r)
                            : yield this.hideDataItem(s, r);
                      })
                    )
                  );
                } else
                  yield Promise.all(
                    h.map(this.dataItems, (t) =>
                      e ? this.showDataItem(t, 0) : this.hideDataItem(t, 0)
                    )
                  );
            });
          }
          updateLegendValue(e) {
            if (e) {
              const t = e.get("legendDataItem");
              if (t) {
                const i = t.get("valueLabel");
                if (i) {
                  const t = i.text;
                  let r = "";
                  i._setDataItem(e),
                    (r = this.get("legendValueText", t.get("text", ""))),
                    i.set("text", r),
                    t.markDirtyText();
                }
                const r = t.get("label");
                if (r) {
                  const t = r.text;
                  let i = "";
                  r._setDataItem(e),
                    (i = this.get("legendLabelText", t.get("text", ""))),
                    r.set("text", i),
                    t.markDirtyText();
                }
              }
            }
          }
          updateLegendMarker(e) {}
          _onHide() {
            super._onHide();
            const e = this.getTooltip();
            e && e.hide();
          }
          hoverDataItem(e) {}
          unhoverDataItem(e) {}
          _getBase(e) {
            const t = this.dataItems[this.startIndex()];
            return t ? t.get(e) : 0;
          }
        }
        Object.defineProperty(f, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Series",
        }),
          Object.defineProperty(f, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.w.classNames.concat([f.className]),
          });
      },
      5863: function (e, t, i) {
        "use strict";
        i.d(t, {
          p: function () {
            return l;
          },
        });
        var r = i(1479),
          n = i(5040),
          s = i(6245),
          a = i(832),
          o = i(751);
        class l extends r.T {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "ix", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "iy", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_generator", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: (0, a.Z)(),
              });
          }
          _getTooltipPoint() {
            let e = this.get("tooltipX"),
              t = this.get("tooltipY"),
              i = 0,
              r = 0;
            n.isNumber(e) && (i = e), n.isNumber(t) && (r = t);
            let a = this.get("radius", 0),
              o = this.get("innerRadius", 0);
            return (
              (a += this.get("dRadius", 0)),
              (o += this.get("dInnerRadius", 0)),
              o < 0 && (o = a + o),
              e instanceof s.gG && (i = this.ix * (o + (a - o) * e.value)),
              t instanceof s.gG && (r = this.iy * (o + (a - o) * t.value)),
              this.get("arc") >= 360 && 0 == o && ((i = 0), (r = 0)),
              { x: i, y: r }
            );
          }
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("radius") ||
                this.isDirty("arc") ||
                this.isDirty("innerRadius") ||
                this.isDirty("startAngle") ||
                this.isDirty("dRadius") ||
                this.isDirty("dInnerRadius") ||
                this.isDirty("cornerRadius")) &&
                (this._clear = !0);
          }
          _changed() {
            if ((super._changed(), this._clear)) {
              let e = this.get("startAngle", 0),
                t = this.get("arc", 0);
              const i = this._generator;
              t < 0 && ((e += t), (t *= -1)),
                t > 0.1 && i.cornerRadius(this.get("cornerRadius", 0)),
                i.context(this._display);
              let r = this.get("radius", 0),
                n = this.get("innerRadius", 0);
              (r += this.get("dRadius", 0)),
                (n += this.get("dInnerRadius", 0)),
                n < 0 && (n = r + n),
                i({
                  innerRadius: n,
                  outerRadius: r,
                  startAngle: (e + 90) * o.RADIANS,
                  endAngle: (e + t + 90) * o.RADIANS,
                });
              let s = e + t / 2;
              (this.ix = o.cos(s)), (this.iy = o.sin(s));
            }
            if (this.isDirty("shiftRadius")) {
              const e = this.get("shiftRadius", 0);
              this.setRaw("dx", this.ix * e),
                this.setRaw("dy", this.iy * e),
                this.markDirtyPosition();
            }
          }
        }
        Object.defineProperty(l, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Slice",
        }),
          Object.defineProperty(l, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.T.classNames.concat([l.className]),
          });
      },
      4596: function (e, t, i) {
        "use strict";
        i.d(t, {
          j: function () {
            return m;
          },
        });
        var r = i(5125),
          n = i(6331),
          s = i(5769),
          a = i(6245),
          o = i(9770),
          l = i(7449),
          h = i(6490),
          u = i(7652),
          c = i(5071),
          d = i(5040),
          p = i(256),
          f = i(751);
        class g extends o.p {
          constructor(e) {
            super(),
              Object.defineProperty(this, "_sprite", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_rendererDisposers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_dispatchParents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              (this._sprite = e);
          }
          _makePointerEvent(e, t) {
            return {
              type: e,
              originalEvent: t.event,
              point: t.point,
              simulated: t.simulated,
              native: t.native,
              target: this._sprite,
            };
          }
          _onRenderer(e, t) {
            this._sprite.set("interactive", !0),
              (this._sprite._display.interactive = !0);
            let i = this._rendererDisposers[e];
            if (void 0 === i) {
              const r = this._sprite._display.on(e, (e) => {
                t.call(this, e);
              });
              i = this._rendererDisposers[e] = new l.DM(() => {
                delete this._rendererDisposers[e], r.dispose();
              });
            }
            return i.increment();
          }
          _on(e, t, i, r, n, s) {
            const a = super._on(e, t, i, r, n, s),
              o = g.RENDERER_EVENTS[t];
            return (
              void 0 !== o &&
                (a.disposer = new l.FV([a.disposer, this._onRenderer(t, o)])),
              a
            );
          }
          stopParentDispatch() {
            this._dispatchParents = !1;
          }
          dispatchParents(e, t) {
            const i = this._dispatchParents;
            this._dispatchParents = !0;
            try {
              this.dispatch(e, t),
                this._dispatchParents &&
                  this._sprite.parent &&
                  this._sprite.parent.events.dispatchParents(e, t);
            } finally {
              this._dispatchParents = i;
            }
          }
        }
        Object.defineProperty(g, "RENDERER_EVENTS", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            click: function (e) {
              this.isEnabled("click") &&
                !this._sprite.isDragging() &&
                this._sprite._hasDown() &&
                !this._sprite._hasMoved(this._makePointerEvent("click", e)) &&
                this.dispatch("click", this._makePointerEvent("click", e));
            },
            rightclick: function (e) {
              this.isEnabled("rightclick") &&
                this.dispatch(
                  "rightclick",
                  this._makePointerEvent("rightclick", e)
                );
            },
            middleclick: function (e) {
              this.isEnabled("middleclick") &&
                this.dispatch(
                  "middleclick",
                  this._makePointerEvent("middleclick", e)
                );
            },
            dblclick: function (e) {
              this.dispatchParents(
                "dblclick",
                this._makePointerEvent("dblclick", e)
              );
            },
            pointerover: function (e) {
              this.isEnabled("pointerover") &&
                this.dispatch(
                  "pointerover",
                  this._makePointerEvent("pointerover", e)
                );
            },
            pointerout: function (e) {
              this.isEnabled("pointerout") &&
                this.dispatch(
                  "pointerout",
                  this._makePointerEvent("pointerout", e)
                );
            },
            pointerdown: function (e) {
              this.dispatchParents(
                "pointerdown",
                this._makePointerEvent("pointerdown", e)
              );
            },
            pointerup: function (e) {
              this.isEnabled("pointerup") &&
                this.dispatch(
                  "pointerup",
                  this._makePointerEvent("pointerup", e)
                );
            },
            globalpointerup: function (e) {
              this.isEnabled("globalpointerup") &&
                this.dispatch(
                  "globalpointerup",
                  this._makePointerEvent("globalpointerup", e)
                );
            },
            globalpointermove: function (e) {
              this.isEnabled("globalpointermove") &&
                this.dispatch(
                  "globalpointermove",
                  this._makePointerEvent("globalpointermove", e)
                );
            },
            wheel: function (e) {
              this.dispatchParents("wheel", {
                type: "wheel",
                target: this._sprite,
                originalEvent: e.event,
                point: e.point,
              });
            },
          },
        });
        class m extends n.JH {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_adjustedLocalBounds", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: { left: 0, right: 0, top: 0, bottom: 0 },
              }),
              Object.defineProperty(this, "_localBounds", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: { left: 0, right: 0, top: 0, bottom: 0 },
              }),
              Object.defineProperty(this, "_parent", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_dataItem", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_templateField", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_sizeDirty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_isDragging", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_dragEvent", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_dragPoint", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_isHidden", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_isShowing", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_isHiding", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_isDown", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_downPoint", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_downPoints", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_toggleDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_dragDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltipDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_hoverDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_focusDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltipMoveDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_tooltipPointerDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_statesHandled", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _afterNew() {
            this.setPrivateRaw("visible", !0), super._afterNew();
          }
          _markDirtyKey(e) {
            super._markDirtyKey(e),
              ("x" != e && "y" != e && "dx" != e && "dy" != e) ||
                (this.markDirtyBounds(),
                this._addPercentagePositionChildren(),
                this.markDirtyPosition());
          }
          _markDirtyPrivateKey(e) {
            super._markDirtyPrivateKey(e),
              ("x" != e && "y" != e) || this.markDirtyPosition();
          }
          _removeTemplateField() {
            this._templateField &&
              this._templateField._removeObjectTemplate(this);
          }
          _createEvents() {
            return new g(this);
          }
          _processTemplateField() {
            let e;
            const t = this.get("templateField");
            if (t) {
              const i = this.dataItem;
              if (i) {
                const r = i.dataContext;
                r && ((e = r[t]), e instanceof s.YS || !e || (e = s.YS.new(e)));
              }
            }
            this._templateField !== e &&
              (this._removeTemplateField(),
              (this._templateField = e),
              e && e._setObjectTemplate(this),
              this._applyTemplates());
          }
          _setDataItem(e) {
            const t = this._dataItem;
            (this._dataItem = e), this._processTemplateField();
            const i = "dataitemchanged";
            e != t &&
              this.events.isEnabled(i) &&
              this.events.dispatch(i, {
                type: i,
                target: this,
                oldDataItem: t,
                newDataItem: e,
              });
          }
          set dataItem(e) {
            this._setDataItem(e);
          }
          get dataItem() {
            if (this._dataItem) return this._dataItem;
            {
              let e = this._parent;
              for (; e; ) {
                if (e._dataItem) return e._dataItem;
                e = e._parent;
              }
            }
          }
          _addPercentageSizeChildren() {
            let e = this.parent;
            e &&
              (this.get("width") instanceof a.gG ||
              this.get("height") instanceof a.gG
                ? c.pushOne(e._percentageSizeChildren, this)
                : c.removeFirst(e._percentageSizeChildren, this));
          }
          _addPercentagePositionChildren() {
            let e = this.parent;
            e &&
              (this.get("x") instanceof a.gG || this.get("y") instanceof a.gG
                ? c.pushOne(e._percentagePositionChildren, this)
                : c.removeFirst(e._percentagePositionChildren, this));
          }
          markDirtyPosition() {
            this._root._addDirtyPosition(this);
          }
          updatePivotPoint() {
            const e = this._localBounds;
            if (e) {
              const t = this.get("centerX");
              null != t &&
                (this._display.pivot.x =
                  e.left + u.relativeToValue(t, e.right - e.left));
              const i = this.get("centerY");
              null != i &&
                (this._display.pivot.y =
                  e.top + u.relativeToValue(i, e.bottom - e.top));
            }
          }
          _beforeChanged() {
            if (
              (super._beforeChanged(),
              this._handleStates(),
              this.isDirty("tooltip"))
            ) {
              const e = this._prevSettings.tooltip;
              e && e.dispose();
            }
            if (
              ((this.isDirty("layer") || this.isDirty("layerMargin")) &&
                (this._display.setLayer(
                  this.get("layer"),
                  this.get("layerMargin")
                ),
                this.markDirtyLayer()),
              this.isDirty("tooltipPosition"))
            ) {
              const e = this._tooltipMoveDp;
              e && (e.dispose(), (this._tooltipMoveDp = void 0));
              const t = this._tooltipPointerDp;
              t && (t.dispose(), (this._tooltipPointerDp = void 0)),
                "pointer" == this.get("tooltipPosition") &&
                  (this.isHover() &&
                    (this._tooltipMoveDp = this.events.on(
                      "globalpointermove",
                      (e) => {
                        this.showTooltip(e.point);
                      }
                    )),
                  (this._tooltipPointerDp = new l.FV([
                    this.events.on("pointerover", () => {
                      this._tooltipMoveDp = this.events.on(
                        "globalpointermove",
                        (e) => {
                          this.showTooltip(e.point);
                        }
                      );
                    }),
                    this.events.on("pointerout", () => {
                      const e = this._tooltipMoveDp;
                      e && (e.dispose(), (this._tooltipMoveDp = void 0));
                    }),
                  ])));
            }
          }
          _handleStates() {
            this._statesHandled ||
              (this.isDirty("active") &&
                (this.get("active")
                  ? (this.states.applyAnimate("active"),
                    this.set("ariaChecked", !0))
                  : (this.isHidden() || this.states.applyAnimate("default"),
                    this.set("ariaChecked", !1)),
                this.markDirtyAccessibility()),
              this.isDirty("disabled") &&
                (this.get("disabled")
                  ? (this.states.applyAnimate("disabled"),
                    this.set("ariaChecked", !1))
                  : (this.isHidden() || this.states.applyAnimate("default"),
                    this.set("ariaChecked", !0)),
                this.markDirtyAccessibility()),
              (this._statesHandled = !0));
          }
          _changed() {
            super._changed();
            const e = this._display,
              t = this.events;
            if (this.isDirty("draggable")) {
              const i = this.get("draggable");
              i
                ? (this.set("interactive", !0),
                  (this._dragDp = new l.FV([
                    t.on("pointerdown", (e) => {
                      this.dragStart(e);
                    }),
                    t.on("globalpointermove", (e) => {
                      this.dragMove(e);
                    }),
                    t.on("globalpointerup", (e) => {
                      this.dragStop(e);
                    }),
                  ])))
                : this._dragDp &&
                  (this._dragDp.dispose(), (this._dragDp = void 0)),
                (e.cancelTouch = !!i);
            }
            if (
              this.isDirty("tooltipText") ||
              this.isDirty("tooltipHTML") ||
              this.isDirty("showTooltipOn")
            ) {
              const e = this.get("tooltipText"),
                i = this.get("tooltipHTML"),
                r = this.get("showTooltipOn", "hover");
              this._tooltipDp &&
                (this._tooltipDp.dispose(), (this._tooltipDp = void 0)),
                (e || i) &&
                  ("click" == r
                    ? ((this._tooltipDp = new l.FV([
                        t.on("click", () => {
                          this.setTimeout(() => this.showTooltip(), 10);
                        }),
                        u.addEventListener(document, "click", (e) => {
                          this.hideTooltip();
                        }),
                      ])),
                      this._disposers.push(this._tooltipDp))
                    : "always" == r ||
                      ((this._tooltipDp = new l.FV([
                        t.on("pointerover", () => {
                          this.showTooltip();
                        }),
                        t.on("pointerout", () => {
                          this.hideTooltip();
                        }),
                      ])),
                      this._disposers.push(this._tooltipDp)));
            }
            if (this.isDirty("toggleKey")) {
              let e = this.get("toggleKey");
              e && "none" != e
                ? (this._toggleDp = t.on("click", () => {
                    this._isDragging || this.set(e, !this.get(e));
                  }))
                : this._toggleDp &&
                  (this._toggleDp.dispose(), (this._toggleDp = void 0));
            }
            if (
              (this.isDirty("opacity") &&
                (e.alpha = Math.max(0, this.get("opacity", 1))),
              this.isDirty("rotation") &&
                (this.markDirtyBounds(), (e.angle = this.get("rotation", 0))),
              this.isDirty("scale") &&
                (this.markDirtyBounds(), (e.scale = this.get("scale", 0))),
              (this.isDirty("centerX") || this.isDirty("centerY")) &&
                (this.markDirtyBounds(), this.updatePivotPoint()),
              (this.isDirty("visible") ||
                this.isPrivateDirty("visible") ||
                this.isDirty("forceHidden")) &&
                (this.get("visible") &&
                this.getPrivate("visible") &&
                !this.get("forceHidden")
                  ? (e.visible = !0)
                  : ((e.visible = !1), this.hideTooltip()),
                this.markDirtyBounds(),
                this.get("focusable") && this.markDirtyAccessibility()),
              this.isDirty("width") || this.isDirty("height"))
            ) {
              this.markDirtyBounds(), this._addPercentageSizeChildren();
              const e = this.parent;
              e &&
                ((this.isDirty("width") && this.get("width") instanceof a.gG) ||
                  (this.isDirty("height") &&
                    this.get("height") instanceof a.gG)) &&
                (e.markDirty(), (e._prevWidth = 0)),
                (this._sizeDirty = !0);
            }
            if (
              ((this.isDirty("maxWidth") ||
                this.isDirty("maxHeight") ||
                this.isPrivateDirty("width") ||
                this.isPrivateDirty("height") ||
                this.isDirty("minWidth") ||
                this.isDirty("minHeight") ||
                this.isPrivateDirty("maxWidth") ||
                this.isPrivateDirty("maxHeight") ||
                this.isPrivateDirty("minWidth") ||
                this.isPrivateDirty("minHeight")) &&
                (this.markDirtyBounds(), (this._sizeDirty = !0)),
              this._sizeDirty && this._updateSize(),
              this.isDirty("wheelable"))
            ) {
              const t = this.get("wheelable");
              t && this.set("interactive", !0), (e.wheelable = !!t);
            }
            if (
              ((this.isDirty("tabindexOrder") ||
                this.isDirty("focusableGroup")) &&
                (this.get("focusable")
                  ? this._root._registerTabindexOrder(this)
                  : this._root._unregisterTabindexOrder(this)),
              this.isDirty("filter") && (e.filter = this.get("filter")),
              this.isDirty("cursorOverStyle") &&
                (e.cursorOverStyle = this.get("cursorOverStyle")),
              this.isDirty("hoverOnFocus") &&
                (this.get("hoverOnFocus")
                  ? (this._focusDp = new l.FV([
                      t.on("focus", () => {
                        this.showTooltip();
                      }),
                      t.on("blur", () => {
                        this.hideTooltip();
                      }),
                    ]))
                  : this._focusDp &&
                    (this._focusDp.dispose(), (this._focusDp = void 0))),
              this.isDirty("focusable") &&
                (this.get("focusable")
                  ? this._root._registerTabindexOrder(this)
                  : this._root._unregisterTabindexOrder(this),
                this.markDirtyAccessibility()),
              this.isPrivateDirty("focusable") && this.markDirtyAccessibility(),
              (this.isDirty("role") ||
                this.isDirty("ariaLive") ||
                this.isDirty("ariaChecked") ||
                this.isDirty("ariaHidden") ||
                this.isDirty("ariaOrientation") ||
                this.isDirty("ariaValueNow") ||
                this.isDirty("ariaValueMin") ||
                this.isDirty("ariaValueMax") ||
                this.isDirty("ariaValueText") ||
                this.isDirty("ariaLabel") ||
                this.isDirty("ariaControls")) &&
                this.markDirtyAccessibility(),
              this.isDirty("exportable") &&
                (e.exportable = this.get("exportable")),
              this.isDirty("interactive"))
            ) {
              const e = this.events;
              this.get("interactive")
                ? (this._hoverDp = new l.FV([
                    e.on("click", (e) => {
                      u.isTouchEvent(e.originalEvent) &&
                        (this.getPrivate("touchHovering") ||
                          this.setTimeout(() => {
                            this._handleOver(),
                              (this.get("tooltipText") ||
                                this.get("tooltipHTML")) &&
                                this.showTooltip(),
                              this.setPrivateRaw("touchHovering", !0),
                              this.events.dispatch("pointerover", {
                                type: "pointerover",
                                target: e.target,
                                originalEvent: e.originalEvent,
                                point: e.point,
                                simulated: e.simulated,
                              });
                          }, 10));
                    }),
                    e.on("globalpointerup", (e) => {
                      u.isTouchEvent(e.originalEvent) &&
                        this.getPrivate("touchHovering") &&
                        (this._handleOut(),
                        (this.get("tooltipText") || this.get("tooltipHTML")) &&
                          this.hideTooltip(),
                        this.setPrivateRaw("touchHovering", !1),
                        this.events.dispatch("pointerout", {
                          type: "pointerout",
                          target: e.target,
                          originalEvent: e.originalEvent,
                          point: e.point,
                          simulated: e.simulated,
                        })),
                        this._isDown && this._handleUp(e);
                    }),
                    e.on("pointerover", () => {
                      this._handleOver();
                    }),
                    e.on("pointerout", () => {
                      this._handleOut();
                    }),
                    e.on("pointerdown", (e) => {
                      this._handleDown(e);
                    }),
                  ]))
                : ((this._display.interactive = !1),
                  this._hoverDp &&
                    (this._hoverDp.dispose(), (this._hoverDp = void 0)));
            }
            this.isDirty("forceInactive") &&
              (this._display.inactive = this.get("forceInactive", !1)),
              "always" == this.get("showTooltipOn") &&
                this._display.visible &&
                this.showTooltip();
          }
          dragStart(e) {
            (this._dragEvent = e), this.events.stopParentDispatch();
          }
          dragStop(e) {
            if (
              ((this._dragEvent = void 0),
              (this._dragPoint = void 0),
              this.events.stopParentDispatch(),
              this._isDragging)
            ) {
              this._isDragging = !1;
              const t = "dragstop";
              this.events.isEnabled(t) &&
                this.events.dispatch(t, {
                  type: t,
                  target: this,
                  originalEvent: e.originalEvent,
                  point: e.point,
                  simulated: e.simulated,
                });
            }
          }
          _handleOver() {
            this.isHidden() ||
              (this.get("active") && this.states.lookup("hoverActive")
                ? this.states.applyAnimate("hoverActive")
                : this.get("disabled") && this.states.lookup("hoverDisabled")
                ? this.states.applyAnimate("hoverDisabled")
                : this.states.applyAnimate("hover"),
              this.get("draggable") &&
                this._isDown &&
                this.states.lookup("down") &&
                this.states.applyAnimate("down"));
          }
          _handleOut() {
            this.isHidden() ||
              (this.get("active") && this.states.lookup("active")
                ? this.states.applyAnimate("active")
                : this.get("disabled") && this.states.lookup("disabled")
                ? this.states.applyAnimate("disabled")
                : (this.states.lookup("hover") ||
                    this.states.lookup("hoverActive")) &&
                  this.states.applyAnimate("default"),
              this.get("draggable") &&
                this._isDown &&
                this.states.lookup("down") &&
                this.states.applyAnimate("down"));
          }
          _handleUp(e) {
            if (!this.isHidden()) {
              this.get("active") && this.states.lookup("active")
                ? this.states.applyAnimate("active")
                : this.get("disabled") && this.states.lookup("disabled")
                ? this.states.applyAnimate("disabled")
                : this.states.lookup("down") &&
                  (this.isHover()
                    ? this.states.applyAnimate("hover")
                    : this.states.applyAnimate("default")),
                (this._downPoint = void 0);
              const t = u.getPointerId(e.originalEvent);
              delete this._downPoints[t],
                0 == p.keys(this._downPoints).length && (this._isDown = !1);
            }
          }
          _hasMoved(e) {
            const t = u.getPointerId(e.originalEvent),
              i = this._downPoints[t];
            if (i) {
              const t = Math.abs(i.x - e.point.x),
                r = Math.abs(i.y - e.point.y);
              return t > 5 || r > 5;
            }
            return !1;
          }
          _hasDown() {
            return p.keys(this._downPoints).length > 0;
          }
          _handleDown(e) {
            const t = this.parent;
            if (
              (t && !this.get("draggable") && t._handleDown(e),
              this.get("interactive") && !this.isHidden())
            ) {
              this.states.lookup("down") && this.states.applyAnimate("down"),
                (this._downPoint = { x: e.point.x, y: e.point.y }),
                (this._isDown = !0);
              const t = u.getPointerId(e.originalEvent);
              this._downPoints[t] = { x: e.point.x, y: e.point.y };
            }
          }
          dragMove(e) {
            let t = this._dragEvent;
            if (t) {
              if (t.simulated && !e.simulated) return !0;
              let i = 0,
                r = this.parent;
              for (; null != r; ) (i += r.get("rotation", 0)), (r = r.parent);
              let n = e.point.x - t.point.x,
                s = e.point.y - t.point.y;
              const a = this.events;
              if (t.simulated && !this._isDragging) {
                (this._isDragging = !0),
                  (this._dragEvent = e),
                  (this._dragPoint = { x: this.x(), y: this.y() });
                const t = "dragstart";
                a.isEnabled(t) &&
                  a.dispatch(t, {
                    type: t,
                    target: this,
                    originalEvent: e.originalEvent,
                    point: e.point,
                    simulated: e.simulated,
                  });
              }
              if (this._isDragging) {
                let t = this._dragPoint;
                this.set("x", t.x + n * f.cos(i) + s * f.sin(i)),
                  this.set("y", t.y + s * f.cos(i) - n * f.sin(i));
                const r = "dragged";
                a.isEnabled(r) &&
                  a.dispatch(r, {
                    type: r,
                    target: this,
                    originalEvent: e.originalEvent,
                    point: e.point,
                    simulated: e.simulated,
                  });
              } else if (Math.hypot(n, s) > 5) {
                (this._isDragging = !0),
                  (this._dragEvent = e),
                  (this._dragPoint = { x: this.x(), y: this.y() });
                const t = "dragstart";
                a.isEnabled(t) &&
                  a.dispatch(t, {
                    type: t,
                    target: this,
                    originalEvent: e.originalEvent,
                    point: e.point,
                    simulated: e.simulated,
                  });
              }
            }
          }
          _updateSize() {}
          _getBounds() {
            this._localBounds = this._display.getLocalBounds();
          }
          depth() {
            let e = this.parent,
              t = 0;
            for (;;) {
              if (!e) return t;
              ++t, (e = e.parent);
            }
          }
          markDirtySize() {
            (this._sizeDirty = !0), this.markDirty();
          }
          markDirtyBounds() {
            const e = this._display;
            if (this.get("isMeasured")) {
              this._root._addDirtyBounds(this),
                (e.isMeasured = !0),
                e.invalidateBounds();
              const t = this.parent;
              t &&
                "absolute" != this.get("position") &&
                (null == t.get("width") ||
                  null == t.get("height") ||
                  t.get("layout")) &&
                t.markDirtyBounds(),
                this.get("focusable") &&
                  this.isFocus() &&
                  this.markDirtyAccessibility();
            }
          }
          markDirtyAccessibility() {
            this._root._invalidateAccessibility(this);
          }
          markDirtyLayer() {
            this._display.markDirtyLayer(!0);
          }
          markDirty() {
            super.markDirty(), this.markDirtyLayer();
          }
          _updateBounds() {
            const e = this._adjustedLocalBounds;
            let t;
            if (
              (this.get("visible") &&
              this.getPrivate("visible") &&
              !this.get("forceHidden")
                ? (this._getBounds(),
                  this._fixMinBounds(this._localBounds),
                  this.updatePivotPoint(),
                  (this._adjustedLocalBounds = this._display.getAdjustedBounds(
                    this._localBounds
                  )),
                  (t = this._adjustedLocalBounds))
                : ((t = { left: 0, right: 0, top: 0, bottom: 0 }),
                  (this._localBounds = t),
                  (this._adjustedLocalBounds = t)),
              !e ||
                e.left !== t.left ||
                e.top !== t.top ||
                e.right !== t.right ||
                e.bottom !== t.bottom)
            ) {
              const e = "boundschanged";
              this.events.isEnabled(e) &&
                this.events.dispatch(e, { type: e, target: this }),
                this.parent &&
                  (this.parent.markDirty(), this.parent.markDirtyBounds());
            }
          }
          _fixMinBounds(e) {
            let t = this.get("minWidth", this.getPrivate("minWidth")),
              i = this.get("minHeight", this.getPrivate("minHeight"));
            d.isNumber(t) && e.right - e.left < t && (e.right = e.left + t),
              d.isNumber(i) && e.bottom - e.top < i && (e.bottom = e.top + i);
            let r = this.getPrivate("width"),
              n = this.getPrivate("height");
            d.isNumber(r) &&
              (r > 0 ? (e.right = e.left + r) : (e.left = e.right + r)),
              d.isNumber(n) &&
                (n > 0 ? (e.bottom = e.top + n) : (e.top = e.bottom + n));
          }
          _removeParent(e) {
            e &&
              (e.children.removeValue(this),
              c.removeFirst(e._percentageSizeChildren, this),
              c.removeFirst(e._percentagePositionChildren, this));
          }
          _clearDirty() {
            super._clearDirty(),
              (this._sizeDirty = !1),
              (this._statesHandled = !1);
          }
          hover() {
            this.showTooltip(), this._handleOver();
          }
          unhover() {
            this.hideTooltip(), this._handleOut();
          }
          showTooltip(e) {
            const t = this.getTooltip(),
              i = this.get("tooltipText"),
              r = this.get("tooltipHTML");
            if ((i || r) && t) {
              const n = this.get("tooltipPosition"),
                s = this.getPrivate("tooltipTarget", this);
              ("fixed" != n && e) ||
                (this._display._setMatrix(),
                (e = this.toGlobal(s._getTooltipPoint()))),
                t.set("pointTo", e),
                t.set("tooltipTarget", s),
                t.get("x") || t.set("x", e.x),
                t.get("y") || t.set("y", e.y),
                i && t.label.set("text", i),
                r && t.label.set("html", r);
              const a = this.dataItem;
              if (
                (a && t.label._setDataItem(a),
                "always" == this.get("showTooltipOn") &&
                  (e.x < 0 ||
                    e.x > this._root.width() ||
                    e.y < 0 ||
                    e.y > this._root.height()))
              )
                return void this.hideTooltip();
              t.label.text.markDirtyText();
              const o = t.show();
              return this.setPrivateRaw("showingTooltip", !0), o;
            }
          }
          hideTooltip() {
            const e = this.getTooltip();
            if (
              e &&
              (e.get("tooltipTarget") ==
                this.getPrivate("tooltipTarget", this) ||
                this.get("tooltip") == e)
            ) {
              let t =
                e.get("keepTargetHover") &&
                0 == e.get("stateAnimationDuration", 0)
                  ? 400
                  : void 0;
              const i = e.hide(t);
              return this.setPrivateRaw("showingTooltip", !1), i;
            }
          }
          _getTooltipPoint() {
            const e = this._localBounds;
            if (e) {
              let t = 0,
                i = 0;
              return (
                this.get("isMeasured")
                  ? ((t =
                      e.left +
                      u.relativeToValue(
                        this.get("tooltipX", 0),
                        e.right - e.left
                      )),
                    (i =
                      e.top +
                      u.relativeToValue(
                        this.get("tooltipY", 0),
                        e.bottom - e.top
                      )))
                  : ((t = u.relativeToValue(
                      this.get("tooltipX", 0),
                      this.width()
                    )),
                    (i = u.relativeToValue(
                      this.get("tooltipY", 0),
                      this.height()
                    ))),
                { x: t, y: i }
              );
            }
            return { x: 0, y: 0 };
          }
          getTooltip() {
            let e = this.get("tooltip");
            if (e) return e;
            {
              let e = this.parent;
              if (e) return e.getTooltip();
            }
          }
          _updatePosition() {
            const e = this.parent;
            let t = this.get("dx", 0),
              i = this.get("dy", 0),
              r = this.get("x"),
              n = this.getPrivate("x"),
              s = 0,
              o = 0;
            const l = this.get("position");
            r instanceof a.gG &&
              (r = e ? e.innerWidth() * r.value + e.get("paddingLeft", 0) : 0),
              d.isNumber(r)
                ? (s = r + t)
                : null != n
                ? (s = n)
                : e && "relative" == l && (s = e.get("paddingLeft", 0) + t);
            let h = this.get("y"),
              u = this.getPrivate("y");
            h instanceof a.gG &&
              (h = e ? e.innerHeight() * h.value + e.get("paddingTop", 0) : 0),
              d.isNumber(h)
                ? (o = h + i)
                : null != u
                ? (o = u)
                : e && "relative" == l && (o = e.get("paddingTop", 0) + i);
            const c = this._display;
            if (c.x != s || c.y != o) {
              c.invalidateBounds(), (c.x = s), (c.y = o);
              const e = "positionchanged";
              this.events.isEnabled(e) &&
                this.events.dispatch(e, { type: e, target: this });
            }
            this.getPrivate("showingTooltip") && this.showTooltip();
          }
          x() {
            let e = this.get("x"),
              t = this.getPrivate("x");
            const i = this.parent;
            return i
              ? e instanceof a.gG
                ? u.relativeToValue(e, i.innerWidth()) + i.get("paddingLeft", 0)
                : d.isNumber(e)
                ? e
                : null != t
                ? t
                : i.get("paddingLeft", this._display.x)
              : this._display.x;
          }
          y() {
            let e = this.getPrivate("y");
            if (null != e) return e;
            let t = this.get("y");
            const i = this.parent;
            return i
              ? t instanceof a.gG
                ? u.relativeToValue(t, i.innerHeight()) + i.get("paddingTop", 0)
                : d.isNumber(t)
                ? t
                : null != e
                ? e
                : i.get("paddingTop", this._display.y)
              : this._display.y;
          }
          _dispose() {
            super._dispose(),
              this._display.dispose(),
              this._removeTemplateField(),
              this._removeParent(this.parent),
              this._root._removeFocusElement(this);
            const e = this.get("tooltip");
            e && e.dispose(), this.markDirty();
          }
          adjustedLocalBounds() {
            return (
              this._fixMinBounds(this._adjustedLocalBounds),
              this._adjustedLocalBounds
            );
          }
          localBounds() {
            return this._localBounds;
          }
          bounds() {
            const e = this._adjustedLocalBounds,
              t = this.x(),
              i = this.y();
            return {
              left: e.left + t,
              right: e.right + t,
              top: e.top + i,
              bottom: e.bottom + i,
            };
          }
          globalBounds() {
            const e = this.localBounds(),
              t = this.toGlobal({ x: e.left, y: e.top }),
              i = this.toGlobal({ x: e.right, y: e.top }),
              r = this.toGlobal({ x: e.right, y: e.bottom }),
              n = this.toGlobal({ x: e.left, y: e.bottom });
            return {
              left: Math.min(t.x, i.x, r.x, n.x),
              top: Math.min(t.y, i.y, r.y, n.y),
              right: Math.max(t.x, i.x, r.x, n.x),
              bottom: Math.max(t.y, i.y, r.y, n.y),
            };
          }
          _onShow(e) {}
          _onHide(e) {}
          appear(e, t) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              return (
                yield this.hide(0),
                t
                  ? new Promise((i, r) => {
                      this.setTimeout(() => {
                        i(this.show(e));
                      }, t);
                    })
                  : this.show(e)
              );
            });
          }
          show(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              if (!this._isShowing) {
                (this._isHidden = !1),
                  (this._isShowing = !0),
                  (this._isHiding = !1),
                  this.states.lookup("default").get("visible") &&
                    this.set("visible", !0),
                  this._onShow(e);
                const t = this.states.applyAnimate("default", e);
                yield (0, h.ne)(t), (this._isShowing = !1);
              }
            });
          }
          hide(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              if (!this._isHiding && !this._isHidden) {
                (this._isHiding = !0), (this._isShowing = !1);
                let t = this.states.lookup("hidden");
                t ||
                  (t = this.states.create("hidden", {
                    opacity: 0,
                    visible: !1,
                  })),
                  (this._isHidden = !0),
                  this._onHide(e);
                const i = this.states.applyAnimate("hidden", e);
                yield (0, h.ne)(i), (this._isHiding = !1);
              }
            });
          }
          isHidden() {
            return this._isHidden;
          }
          isShowing() {
            return this._isShowing;
          }
          isHiding() {
            return this._isHiding;
          }
          isHover() {
            return this._display.hovering();
          }
          isFocus() {
            return this._root.focused(this);
          }
          isDragging() {
            return this._isDragging;
          }
          isVisible() {
            return !(
              !this.get("visible") ||
              !this.getPrivate("visible") ||
              this.get("forceHidden")
            );
          }
          isVisibleDeep() {
            return this._parent
              ? this._parent.isVisibleDeep() && this.isVisible()
              : this.isVisible();
          }
          compositeOpacity() {
            const e = this.get("opacity", 1);
            return this._parent ? this._parent.compositeOpacity() * e : e;
          }
          width() {
            let e = this.get("width"),
              t = this.get("maxWidth", this.getPrivate("maxWidth")),
              i = this.get("minWidth", this.getPrivate("minWidth")),
              r = this.getPrivate("width"),
              n = 0;
            if (d.isNumber(r)) n = r;
            else if (null == e)
              this._adjustedLocalBounds &&
                (n =
                  this._adjustedLocalBounds.right -
                  this._adjustedLocalBounds.left);
            else if (e instanceof a.gG) {
              const t = this.parent;
              n = t ? t.innerWidth() * e.value : this._root.width() * e.value;
            } else d.isNumber(e) && (n = e);
            return (
              d.isNumber(i) && (n = Math.max(i, n)),
              d.isNumber(t) && (n = Math.min(t, n)),
              n
            );
          }
          maxWidth() {
            let e = this.get("maxWidth", this.getPrivate("maxWidth"));
            if (d.isNumber(e)) return e;
            {
              let e = this.get("width");
              if (d.isNumber(e)) return e;
            }
            const t = this.parent;
            return t ? t.innerWidth() : this._root.width();
          }
          maxHeight() {
            let e = this.get("maxHeight", this.getPrivate("maxHeight"));
            if (d.isNumber(e)) return e;
            {
              let e = this.get("height");
              if (d.isNumber(e)) return e;
            }
            const t = this.parent;
            return t ? t.innerHeight() : this._root.height();
          }
          height() {
            let e = this.get("height"),
              t = this.get("maxHeight", this.getPrivate("maxHeight")),
              i = this.get("minHeight", this.getPrivate("minHeight")),
              r = this.getPrivate("height"),
              n = 0;
            if (d.isNumber(r)) n = r;
            else if (null == e)
              this._adjustedLocalBounds &&
                (n =
                  this._adjustedLocalBounds.bottom -
                  this._adjustedLocalBounds.top);
            else if (e instanceof a.gG) {
              const t = this.parent;
              n = t ? t.innerHeight() * e.value : this._root.height() * e.value;
            } else d.isNumber(e) && (n = e);
            return (
              d.isNumber(i) && (n = Math.max(i, n)),
              d.isNumber(t) && (n = Math.min(t, n)),
              n
            );
          }
          _findStaticTemplate(e) {
            return this._templateField && e(this._templateField)
              ? this._templateField
              : super._findStaticTemplate(e);
          }
          _walkParents(e) {
            this._parent && this._walkParent(e);
          }
          _walkParent(e) {
            this._parent && this._parent._walkParent(e), e(this);
          }
          get parent() {
            return this._parent;
          }
          _setParent(e, t = !1) {
            const i = this._parent;
            e !== i &&
              (this.markDirtyBounds(),
              e.markDirty(),
              (this._parent = e),
              t &&
                (this._removeParent(i),
                e &&
                  (this._addPercentageSizeChildren(),
                  this._addPercentagePositionChildren())),
              this.markDirtyPosition(),
              this._applyThemes());
          }
          getNumberFormatter() {
            return this.get("numberFormatter", this._root.numberFormatter);
          }
          getDateFormatter() {
            return this.get("dateFormatter", this._root.dateFormatter);
          }
          getDurationFormatter() {
            return this.get("durationFormatter", this._root.durationFormatter);
          }
          toGlobal(e) {
            return this._display.toGlobal(e);
          }
          toLocal(e) {
            return this._display.toLocal(e);
          }
          _getDownPoint() {
            const e = this._getDownPointId();
            if (e) return this._downPoints[e];
          }
          _getDownPointId() {
            if (this._downPoints)
              return p.keysOrdered(this._downPoints, (e, t) =>
                e > t ? 1 : e < t ? -1 : 0
              )[0];
          }
          toFront() {
            const e = this.parent;
            e && e.children.moveValue(this, e.children.length - 1);
          }
          toBack() {
            const e = this.parent;
            e && e.children.moveValue(this, 0);
          }
        }
        Object.defineProperty(m, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Sprite",
        }),
          Object.defineProperty(m, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.JH.classNames.concat([m.className]),
          });
      },
      1195: function (e, t, i) {
        "use strict";
        i.d(t, {
          b: function () {
            return h;
          },
        });
        var r = i(8777),
          n = i(6245),
          s = i(3497),
          a = i(7142),
          o = i(1112),
          l = i(751);
        class h extends r.W {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "rectangle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.children.push(
                  a.A.new(this._root, {
                    themeTags: ["rectangle"],
                    fillOpacity: 0,
                    fill: (0, o.$_)(16777215),
                  })
                ),
              }),
              Object.defineProperty(this, "gripL", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._createGrip("left"),
              }),
              Object.defineProperty(this, "gripR", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._createGrip("right"),
              }),
              Object.defineProperty(this, "gripT", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._createGrip("top"),
              }),
              Object.defineProperty(this, "gripB", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._createGrip("bottom"),
              }),
              Object.defineProperty(this, "_is", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 1,
              }),
              Object.defineProperty(this, "_ix", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_iw", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_positionDP", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_isHover", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _afterNew() {
            super._afterNew(),
              this.addTag("resizer"),
              this.set("visible", !1),
              this.gripL.events.on("dragged", (e) => {
                this._resize(e.target, -1);
              }),
              this.gripR.events.on("dragged", (e) => {
                this._resize(e.target, 1);
              }),
              this.gripL.events.on("dragstart", (e) => {
                this._resizeStart(e.target);
              }),
              this.gripR.events.on("dragstart", (e) => {
                this._resizeStart(e.target);
              }),
              this.gripT.events.on("dragged", (e) => {
                this._rotate(e, 90);
              }),
              this.gripB.events.on("dragged", (e) => {
                this._rotate(e, -90);
              }),
              this.gripT.events.on("dragstart", (e) => {
                this._resizeStart(e.target);
              }),
              this.gripB.events.on("dragstart", (e) => {
                this._resizeStart(e.target);
              });
          }
          _resizeStart(e) {
            const t = this.get("sprite");
            t &&
              ((this._is = t.get("scale", 1)),
              (this._ix = e.x()),
              (this._iw = this.width() / 2));
          }
          _resize(e, t) {
            const i = this.get("sprite"),
              r = this.get("spriteTemplate");
            if (i) {
              const n = Math.max(
                0.01,
                this._is * (1 + (t * (e.x() - this._ix)) / this._iw)
              );
              r ? r.set("scale", n) : i.set("scale", n),
                i.states.lookup("default").set("scale", n),
                this._updatePositions();
            }
          }
          _rotate(e, t) {
            const i = this.get("sprite"),
              r = this.get("spriteTemplate");
            if (i) {
              const n = this.parent;
              if (n) {
                const s = this.get("rotationStep", 10);
                let a =
                  Math.round(
                    (l.getAngle(
                      { x: this.x(), y: this.y() },
                      n.toLocal(e.point)
                    ) +
                      t) /
                      s
                  ) * s;
                r ? r.set("rotation", a) : i.set("rotation", a),
                  i.states.lookup("default").set("rotation", a),
                  this._updatePositions();
              }
            }
          }
          _createGrip(e) {
            const t = this.children.push(
              r.W.new(this._root, {
                themeTags: ["grip", e],
                setStateOnChildren: !0,
                draggable: !0,
              })
            );
            return (
              t.children.push(
                s.c.new(this._root, {
                  themeTags: ["outline"],
                  centerX: n.CI,
                  centerY: n.CI,
                })
              ),
              t.children.push(
                s.c.new(this._root, { centerX: n.CI, centerY: n.CI })
              ),
              t
            );
          }
          _updateChildren() {
            if ((super._updateChildren(), this.isDirty("sprite"))) {
              const e = this.get("sprite");
              if (e) {
                this.show(0),
                  this.setPrivate("visible", !0),
                  this._updatePositions();
                const t = e.parent;
                t && t.children.moveValue(this, 0),
                  (this._positionDP = e.events.on("positionchanged", () => {
                    this._updatePositions();
                  }));
              } else
                this.hide(0),
                  this.setPrivate("visible", !1),
                  this._positionDP && this._positionDP.dispose();
            }
            (this.isDirty("width") ||
              this.isDirty("height") ||
              this.isDirty("rotation")) &&
              this._updatePositions();
          }
          _updatePositions() {
            const e = this.get("sprite");
            if (e) {
              let t = e.localBounds(),
                i = e.get("scale", 1),
                r = 20,
                s = (t.right - t.left) * i + r,
                a = (t.bottom - t.top) * i + r,
                o = e.get("rotation", 0);
              const h = this.rectangle;
              let u = e.get("centerX", n.CI),
                c = e.get("centerY", n.CI),
                d = 0;
              u instanceof n.gG && (d = u.value);
              let p = 0;
              c instanceof n.gG && (p = c.value),
                h.setAll({ centerX: u, centerY: c, width: s, height: a }),
                this.setAll({
                  x:
                    e.x() + r * (d - 0.5) * l.cos(o) - r * (p - 0.5) * l.sin(o),
                  y:
                    e.y() + r * (p - 0.5) * l.cos(o) + r * (d - 0.5) * l.sin(o),
                  width: s,
                  height: a,
                  rotation: o,
                }),
                this.gripT.setAll({ x: (0.5 - d) * s, y: -p * a }),
                this.gripB.setAll({ x: (0.5 - d) * s, y: (1 - p) * a }),
                this.gripL.setAll({ x: -d * s, y: (0.5 - p) * a }),
                this.gripR.setAll({ x: (1 - d) * s, y: (0.5 - p) * a }),
                this.rectangle.setAll({ width: s, height: a });
            }
          }
        }
        Object.defineProperty(h, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SpriteResizer",
        }),
          Object.defineProperty(h, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.W.classNames.concat([h.className]),
          });
      },
      2036: function (e, t, i) {
        "use strict";
        i.d(t, {
          x: function () {
            return o;
          },
        });
        var r = i(4596),
          n = i(2132),
          s = i(5071),
          a = i(7449);
        class o extends r.j {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "textStyle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeTextStyle(),
              }),
              Object.defineProperty(this, "_display", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeText("", this.textStyle),
              }),
              Object.defineProperty(this, "_textStyles", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [
                  "textAlign",
                  "fontFamily",
                  "fontSize",
                  "fontStyle",
                  "fontWeight",
                  "fontStyle",
                  "fontVariant",
                  "textDecoration",
                  "shadowColor",
                  "shadowBlur",
                  "shadowOffsetX",
                  "shadowOffsetY",
                  "shadowOpacity",
                  "lineHeight",
                  "baselineRatio",
                  "direction",
                  "textBaseline",
                  "oversizedBehavior",
                  "breakWords",
                  "ellipsis",
                  "minScale",
                ],
              }),
              Object.defineProperty(this, "_originalScale", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _updateBounds() {
            if (this.get("text")) super._updateBounds();
            else {
              let e = { left: 0, right: 0, top: 0, bottom: 0 };
              this._adjustedLocalBounds = e;
            }
          }
          _changed() {
            super._changed(), this._display.clear();
            let e = this.textStyle;
            if (this.isDirty("opacity")) {
              let e = this.get("opacity", 1);
              this._display.alpha = e;
            }
            if (
              ((this.isDirty("text") || this.isDirty("populateText")) &&
                ((this._display.text = this._getText()),
                this.markDirtyBounds(),
                "tooltip" == this.get("role") &&
                  this._root.updateTooltip(this)),
              this.isPrivateDirty("tooltipElement") &&
                this.getPrivate("tooltipElement") &&
                this._disposers.push(
                  new a.ku(() => {
                    this._root._removeTooltipElement(this);
                  })
                ),
              this.isDirty("width") &&
                ((e.wordWrapWidth = this.width()), this.markDirtyBounds()),
              this.isDirty("oversizedBehavior") &&
                ((e.oversizedBehavior = this.get("oversizedBehavior", "none")),
                this.markDirtyBounds()),
              this.isDirty("breakWords") &&
                ((e.breakWords = this.get("breakWords", !1)),
                this.markDirtyBounds()),
              this.isDirty("ellipsis") &&
                ((e.ellipsis = this.get("ellipsis")), this.markDirtyBounds()),
              this.isDirty("ignoreFormatting") &&
                ((e.ignoreFormatting = this.get("ignoreFormatting", !1)),
                this.markDirtyBounds()),
              this.isDirty("minScale") &&
                ((e.minScale = this.get("minScale", 0)),
                this.markDirtyBounds()),
              this.isDirty("fill"))
            ) {
              let t = this.get("fill");
              t && (e.fill = t);
            }
            if (this.isDirty("fillOpacity")) {
              let t = this.get("fillOpacity", 1);
              t && (e.fillOpacity = t);
            }
            (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) &&
              ((e.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth"))),
              this.markDirtyBounds()),
              (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) &&
                ((e.maxHeight = this.get(
                  "maxHeight",
                  this.getPrivate("maxHeight")
                )),
                this.markDirtyBounds()),
              s.each(this._textStyles, (t) => {
                this._dirty[t] &&
                  ((e[t] = this.get(t)), this.markDirtyBounds());
              }),
              (e.fontSize = this.get("fontSize")),
              (e.fontFamily = this.get("fontFamily")),
              (this._display.style = e),
              this.isDirty("role") &&
                "tooltip" == this.get("role") &&
                this._root.updateTooltip(this);
          }
          _getText() {
            const e = this.get("text", "");
            return this.get("populateText") ? (0, n.q)(this, e) : e;
          }
          markDirtyText() {
            (this._display.text = this._getText()),
              "tooltip" == this.get("role") && this._root.updateTooltip(this),
              this.markDirtyBounds(),
              this.markDirty();
          }
          _setDataItem(e) {
            super._setDataItem(e),
              this.get("populateText") && this.markDirtyText();
          }
          getNumberFormatter() {
            return this.parent
              ? this.parent.getNumberFormatter()
              : super.getNumberFormatter();
          }
          getDateFormatter() {
            return this.parent
              ? this.parent.getDateFormatter()
              : super.getDateFormatter();
          }
          getDurationFormatter() {
            return this.parent
              ? this.parent.getDurationFormatter()
              : super.getDurationFormatter();
          }
        }
        Object.defineProperty(o, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Text",
        }),
          Object.defineProperty(o, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.j.classNames.concat([o.className]),
          });
      },
      2438: function (e, t, i) {
        "use strict";
        i.d(t, {
          d: function () {
            return n;
          },
        });
        var r = i(2077);
        class n extends r.x {}
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Tick",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.x.classNames.concat([n.className]),
          });
      },
      2876: function (e, t, i) {
        "use strict";
        i.d(t, {
          u: function () {
            return d;
          },
        });
        var r = i(7449),
          n = i(962),
          s = i(8931),
          a = i(8777),
          o = i(6245),
          l = i(1112),
          h = i(751),
          u = i(5071),
          c = i(7652);
        class d extends a.W {
          constructor(e, t, i, r = []) {
            super(e, t, i, r),
              Object.defineProperty(this, "_fx", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_fy", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_label", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_fillDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_strokeDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_labelDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_w", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_h", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_keepHoverDp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_htmlContentHovered", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _afterNew() {
            (this._settings.themeTags = c.mergeTags(this._settings.themeTags, [
              "tooltip",
            ])),
              super._afterNew(),
              this.set(
                "background",
                s.i.new(this._root, { themeTags: ["tooltip", "background"] })
              ),
              (this._label = this.children.push(n._.new(this._root, {}))),
              this._disposers.push(
                this._label.events.on("boundschanged", () => {
                  this._updateBackground();
                })
              ),
              this._disposers.push(
                this.on("bounds", () => {
                  this._updateBackground();
                })
              ),
              this._updateTextColor(),
              this._root.tooltipContainer.children.push(this),
              this.hide(0),
              this._disposers.push(
                this.label.onPrivate("htmlElement", (e) => {
                  e &&
                    (c.addEventListener(e, "pointerover", (e) => {
                      this._htmlContentHovered = !0;
                    }),
                    c.addEventListener(e, "pointerout", (e) => {
                      this._htmlContentHovered = !1;
                    }));
                })
              ),
              this._root._tooltips.push(this);
          }
          get label() {
            return this._label;
          }
          dispose() {
            super.dispose(), u.remove(this._root._tooltips, this);
          }
          _updateChildren() {
            super._updateChildren(),
              (this.isDirty("pointerOrientation") ||
                this.isPrivateDirty("minWidth") ||
                this.isPrivateDirty("minHeight")) &&
                this.get("background")._markDirtyKey("width"),
              null != this.get("labelText") &&
                this.label.set("text", this.get("labelText")),
              null != this.get("labelHTML") &&
                this.label.set("html", this.get("labelHTML"));
          }
          _changed() {
            if (
              (super._changed(),
              (this.isDirty("pointTo") || this.isDirty("pointerOrientation")) &&
                this._updateBackground(),
              this.isDirty("tooltipTarget") && this.updateBackgroundColor(),
              this.isDirty("keepTargetHover"))
            )
              if (this.get("keepTargetHover")) {
                const e = this.get("background");
                (this._keepHoverDp = new r.FV([
                  e.events.on("pointerover", (e) => {
                    let t = this.get("tooltipTarget");
                    t &&
                      (t.parent &&
                        t.parent.getPrivate("tooltipTarget") == t &&
                        (t = t.parent),
                      t.hover());
                  }),
                  e.events.on("pointerout", (e) => {
                    let t = this.get("tooltipTarget");
                    t &&
                      (t.parent &&
                        t.parent.getPrivate("tooltipTarget") == t &&
                        (t = t.parent),
                      this._htmlContentHovered || t.unhover());
                  }),
                ])),
                  this.label.onPrivate("htmlElement", (t) => {
                    this._keepHoverDp &&
                      t &&
                      this._keepHoverDp.disposers.push(
                        c.addEventListener(t, "pointerleave", (t) => {
                          const i = this.root._renderer.getEvent(t);
                          e.events.dispatch("pointerout", {
                            type: "pointerout",
                            originalEvent: i.event,
                            point: i.point,
                            simulated: !1,
                            target: e,
                          });
                        })
                      );
                  });
              } else
                this._keepHoverDp &&
                  (this._keepHoverDp.dispose(), (this._keepHoverDp = void 0));
          }
          _onShow() {
            super._onShow(), this.updateBackgroundColor();
          }
          updateBackgroundColor() {
            let e = this.get("tooltipTarget");
            const t = this.get("background");
            let i, r;
            e &&
              t &&
              ((i = e.get("fill")),
              (r = e.get("stroke")),
              null == i && (i = r),
              this.get("getFillFromSprite") &&
                (this._fillDp && this._fillDp.dispose(),
                null != i && t.set("fill", i),
                (this._fillDp = e.on("fill", (e) => {
                  null != e && (t.set("fill", e), this._updateTextColor(e));
                })),
                this._disposers.push(this._fillDp)),
              this.get("getStrokeFromSprite") &&
                (this._strokeDp && this._strokeDp.dispose(),
                null != i && t.set("stroke", i),
                (this._strokeDp = e.on("fill", (e) => {
                  null != e && t.set("stroke", e);
                })),
                this._disposers.push(this._strokeDp)),
              this.get("getLabelFillFromSprite") &&
                (this._labelDp && this._labelDp.dispose(),
                null != i && this.label.set("fill", i),
                (this._labelDp = e.on("fill", (e) => {
                  null != e && this.label.set("fill", e);
                })),
                this._disposers.push(this._labelDp))),
              this._updateTextColor(i);
          }
          _updateTextColor(e) {
            this.get("autoTextColor") &&
              (null == e && (e = this.get("background").get("fill")),
              null == e && (e = this._root.interfaceColors.get("background")),
              e instanceof l.Il &&
                this.label.set(
                  "fill",
                  l.Il.alternative(
                    e,
                    this._root.interfaceColors.get("alternativeText"),
                    this._root.interfaceColors.get("text")
                  )
                ));
          }
          _setDataItem(e) {
            super._setDataItem(e), this.label._setDataItem(e);
          }
          _updateBackground() {
            super.updateBackground();
            const e = this._root.container;
            if (e) {
              let t = 0.5,
                i = 0.5,
                r = this.get("centerX");
              r instanceof o.gG && (t = r.value);
              let n = this.get("centerY");
              n instanceof o.gG && (i = n.value);
              let a = e.width(),
                l = e.height(),
                u = this.parent,
                c = 0,
                d = 0;
              if (u) {
                (c = u.x()), (d = u.y());
                const e = u.get("layerMargin");
                e &&
                  ((c += e.left || 0),
                  (d += e.top || 0),
                  (a += (e.left || 0) + (e.right || 0)),
                  (l += (e.top || 0) + (e.bottom || 0)));
              }
              const p = this.get("bounds", {
                left: -c,
                top: -d,
                right: a - c,
                bottom: l - d,
              });
              this._updateBounds();
              let f = this.width(),
                g = this.height();
              0 === f && (f = this._w), 0 === g && (g = this._h);
              let m = this.get("pointTo", { x: a / 2, y: l / 2 }),
                b = m.x,
                _ = m.y,
                v = this.get("pointerOrientation"),
                y = this.get("background"),
                w = 0,
                x = 0,
                O = 0;
              y instanceof s.i &&
                ((w = y.get("pointerLength", 0)),
                (x = y.get("strokeWidth", 0) / 2),
                (O = x),
                y.set("width", f),
                y.set("height", g));
              let P = 0,
                D = 0,
                k = p.right - p.left,
                T = p.bottom - p.top;
              "horizontal" == v || "left" == v || "right" == v
                ? ((x = 0),
                  "horizontal" == v
                    ? b > p.left + k / 2
                      ? ((b -= f * (1 - t) + w), (O *= -1))
                      : (b += f * t + w)
                    : "left" == v
                    ? (b += f * (1 - t) + w)
                    : ((b -= f * t + w), (O *= -1)))
                : ((O = 0),
                  "vertical" == v
                    ? _ > p.top + g / 2 + w
                      ? (_ -= g * (1 - i) + w)
                      : ((_ += g * i + w), (x *= -1))
                    : "down" == v
                    ? (_ -= g * (1 - i) + w)
                    : ((_ += g * i + w), (x *= -1))),
                (b =
                  h.fitToRange(b, p.left + f * t, p.left + k - f * (1 - t)) +
                  O),
                (_ =
                  h.fitToRange(_, p.top + g * i, p.top + T - g * (1 - i)) - x),
                (P = m.x - b + f * t + O),
                (D = m.y - _ + g * i - x),
                (this._fx = b),
                (this._fy = _);
              const M = this.get("animationDuration", 0);
              if (M > 0 && this.get("visible") && this.get("opacity") > 0.1) {
                const e = this.get("animationEasing");
                this.animate({ key: "x", to: b, duration: M, easing: e }),
                  this.animate({ key: "y", to: _, duration: M, easing: e });
              } else this.set("x", b), this.set("y", _);
              y instanceof s.i && (y.set("pointerX", P), y.set("pointerY", D)),
                f > 0 && (this._w = f),
                g > 0 && (this._h = g);
            }
          }
        }
        Object.defineProperty(d, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Tooltip",
        }),
          Object.defineProperty(d, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a.W.classNames.concat([d.className]),
          });
      },
      1706: function (e, t, i) {
        "use strict";
        i.d(t, {
          Z: function () {
            return a;
          },
        });
        var r = i(2010),
          n = i(5040),
          s = i(6245);
        class a extends r.A {
          updateContainer(e) {
            let t = e.get("paddingTop", 0),
              i = e.innerHeight(),
              a = 0;
            (0, r.j)(e, (e) => {
              if (e.isVisible() && "relative" == e.get("position")) {
                let t = e.get("height");
                if (t instanceof s.gG) {
                  a += t.value;
                  let r = i * t.value,
                    n = e.get("minHeight", e.getPrivate("minHeight", -1 / 0));
                  n > r && ((i -= n), (a -= t.value));
                  let s = e.get("maxHeight", e.getPrivate("maxHeight", 1 / 0));
                  r > s && ((i -= s), (a -= t.value));
                } else
                  n.isNumber(t) || (t = e.height()),
                    (i -= t + e.get("marginTop", 0) + e.get("marginBottom", 0));
              }
            }),
              (i <= 0 || i == 1 / 0) && (i = 0.1),
              (0, r.j)(e, (e) => {
                if (e.isVisible() && "relative" == e.get("position")) {
                  let t = e.get("height");
                  if (t instanceof s.gG) {
                    let r =
                        (i * t.value) / a -
                        e.get("marginTop", 0) -
                        e.get("marginBottom", 0),
                      n = e.get("minHeight", e.getPrivate("minHeight", -1 / 0)),
                      s = e.get("maxHeight", e.getPrivate("maxHeight", 1 / 0));
                    (r = Math.min(Math.max(n, r), s)),
                      e.setPrivate("height", r);
                  } else
                    e._prevSettings.height instanceof s.gG &&
                      e.setPrivate("height", void 0);
                }
              });
            let o = t;
            (0, r.j)(e, (e) => {
              if ("relative" == e.get("position"))
                if (e.isVisible()) {
                  let t = e.adjustedLocalBounds(),
                    i = e.get("marginTop", 0),
                    r = t.top,
                    n = t.bottom,
                    s = e.get("maxHeight");
                  s && n - r > s && (n = r + s);
                  let a = e.get("marginBottom", 0),
                    l = o + i - r;
                  e.setPrivate("y", l), (o = l + n + a);
                } else e.setPrivate("y", void 0);
            });
          }
        }
        Object.defineProperty(a, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "VerticalLayout",
        }),
          Object.defineProperty(a, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.A.classNames.concat([a.className]),
          });
      },
      4680: function (e, t, i) {
        "use strict";
        var r;
        i.d(t, {
          b: function () {
            return r;
          },
        }),
          (function (e) {
            (e.ADD = "lighter"),
              (e.COLOR = "color"),
              (e.COLOR_BURN = "color-burn"),
              (e.COLOR_DODGE = "color-dodge"),
              (e.DARKEN = "darken"),
              (e.DIFFERENCE = "difference"),
              (e.DST_OVER = "destination-over"),
              (e.EXCLUSION = "exclusion"),
              (e.HARD_LIGHT = "hard-light"),
              (e.HUE = "hue"),
              (e.LIGHTEN = "lighten"),
              (e.LUMINOSITY = "luminosity"),
              (e.MULTIPLY = "multiply"),
              (e.NORMAL = "source-over"),
              (e.OVERLAY = "overlay"),
              (e.SATURATION = "saturation"),
              (e.SCREEN = "screen"),
              (e.SOFT_LIGHT = "soft-light"),
              (e.SRC_ATOP = "source-atop"),
              (e.XOR = "xor");
          })(r || (r = {}));
      },
      1437: function (e, t, i) {
        "use strict";
        i.d(t, {
          p: function () {
            return n;
          },
        });
        var r = i(6331);
        class n extends r.JH {
          _afterNew() {
            super._afterNewApplyThemes();
          }
          getFill(e) {
            return { addColorStop: (e, t) => {} };
          }
          _changed() {
            super._changed();
          }
          getBounds(e) {
            const t = this.get("target");
            if (t) {
              let i = t.globalBounds();
              const r = e.toLocal({ x: i.left, y: i.top }),
                n = e.toLocal({ x: i.right, y: i.top }),
                s = e.toLocal({ x: i.right, y: i.bottom }),
                a = e.toLocal({ x: i.left, y: i.bottom });
              return {
                left: Math.min(r.x, n.x, s.x, a.x),
                top: Math.min(r.y, n.y, s.y, a.y),
                right: Math.max(r.x, n.x, s.x, a.x),
                bottom: Math.max(r.y, n.y, s.y, a.y),
              };
            }
            return e._display.getLocalBounds();
          }
        }
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Gradient",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([n.className]),
          });
      },
      1747: function (e, t, i) {
        "use strict";
        i.d(t, {
          o: function () {
            return l;
          },
        });
        var r = i(1437),
          n = i(1112),
          s = i(5071),
          a = i(5040),
          o = i(751);
        class l extends r.p {
          getFill(e) {
            const t = this.get("rotation", 0);
            let i = this.getBounds(e),
              r = i.left || 0,
              l = i.right || 0,
              h = i.top || 0,
              u = i.bottom || 0,
              c = o.cos(t),
              d = o.sin(t),
              p = c * (l - r),
              f = d * (u - h),
              g = Math.max(p, f);
            const m = this._root._renderer.createLinearGradient(
                r,
                h,
                r + g * c,
                h + g * d
              ),
              b = this.get("stops");
            if (b) {
              let e = 0;
              s.each(b, (t) => {
                let i = t.offset;
                a.isNumber(i) || (i = e / (b.length - 1));
                let r = t.opacity;
                a.isNumber(r) || (r = 1);
                let s = t.color;
                if (s) {
                  const e = t.lighten;
                  e && (s = n.Il.lighten(s, e));
                  const a = t.brighten;
                  a && (s = n.Il.brighten(s, a)),
                    m.addColorStop(
                      i,
                      "rgba(" + s.r + "," + s.g + "," + s.b + "," + r + ")"
                    );
                }
                e++;
              });
            }
            return m;
          }
        }
        Object.defineProperty(l, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "LinearGradient",
        }),
          Object.defineProperty(l, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.p.classNames.concat([l.className]),
          });
      },
      3437: function (e, t, i) {
        "use strict";
        i.d(t, {
          c: function () {
            return n;
          },
        });
        var r = i(6331);
        class n extends r.JH {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_display", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeGraphics(),
              }),
              Object.defineProperty(this, "_backgroundDisplay", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._root._renderer.makeGraphics(),
              }),
              Object.defineProperty(this, "_clear", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_pattern", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _afterNew() {
            super._afterNewApplyThemes();
          }
          get pattern() {
            return this._pattern;
          }
          _draw() {}
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("repetition") ||
                this.isDirty("width") ||
                this.isDirty("height") ||
                this.isDirty("rotation") ||
                this.isDirty("color") ||
                this.isDirty("strokeWidth") ||
                this.isDirty("strokeDasharray") ||
                this.isDirty("strokeDashoffset") ||
                this.isDirty("colorOpacity") ||
                this.isDirty("fill") ||
                this.isDirty("fillOpacity")) &&
                (this._clear = !0);
          }
          _changed() {
            if ((super._changed(), this._clear)) {
              const e = this.get("repetition", ""),
                t = this.get("width", 100),
                i = this.get("height", 100),
                r = this.get("fill"),
                n = this.get("fillOpacity", 1);
              this._display.clear(),
                this._backgroundDisplay.clear(),
                r &&
                  n > 0 &&
                  (this._backgroundDisplay.beginFill(r, n),
                  this._backgroundDisplay.drawRect(0, 0, t, i),
                  this._backgroundDisplay.endFill()),
                (this._display.angle = this.get("rotation", 0)),
                this._draw(),
                (this._pattern = this._root._renderer.createPattern(
                  this._display,
                  this._backgroundDisplay,
                  e,
                  t,
                  i
                ));
            }
          }
        }
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Pattern",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([n.className]),
          });
      },
      4429: function (e, t, i) {
        "use strict";
        i.d(t, {
          v: function () {
            return n;
          },
        });
        var r = i(3437);
        class n extends r.c {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_image", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _beforeChanged() {
            super._beforeChanged(),
              (this._clear = !0),
              this.isDirty("src") && this._load();
          }
          _draw() {
            super._draw();
            const e = this._image;
            if (e) {
              const t = this.get("width", 100),
                i = this.get("height", 100),
                r = this.get("fit", "image");
              let n = 0,
                s = 0;
              "pattern" == r
                ? ((n = t), (s = i))
                : ((n = e.width),
                  (s = e.height),
                  "image" == r &&
                    (this.set("width", n), this.set("height", s)));
              let a = 0,
                o = 0;
              this.get("centered", !0) &&
                ((a = t / 2 - n / 2), (o = i / 2 - s / 2)),
                this._display.image(e, n, s, a, o);
            }
          }
          _load() {
            const e = this.get("src");
            if (e) {
              const t = new Image();
              (t.src = e),
                t
                  .decode()
                  .then(() => {
                    (this._image = t),
                      this._draw(),
                      this.events.isEnabled("loaded") &&
                        this.events.dispatch("loaded", {
                          type: "loaded",
                          target: this,
                        });
                  })
                  .catch((e) => {});
            }
          }
        }
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PicturePattern",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.c.classNames.concat([n.className]),
          });
      },
      6490: function (e, t, i) {
        "use strict";
        i.d(t, {
          Wn: function () {
            return u;
          },
          XG: function () {
            return d;
          },
          ne: function () {
            return o;
          },
          w6: function () {
            return l;
          },
        });
        var r = i(5125),
          n = i(6245),
          s = i(1112),
          a = i(256);
        function o(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (void 0 !== e) {
              const t = [];
              a.each(e, (e, i) => {
                t.push(i.waitForStop());
              }),
                yield Promise.all(t);
            }
          });
        }
        function l(e, t, i) {
          return t + e * (i - t);
        }
        function h(e, t, i) {
          return e >= 1 ? i : t;
        }
        function u(e, t, i) {
          return new n.gG(l(e, t.percent, i.percent));
        }
        function c(e, t, i) {
          return s.Il.interpolate(e, t, i);
        }
        function d(e, t) {
          return "number" == typeof e && "number" == typeof t
            ? l
            : e instanceof n.gG && t instanceof n.gG
            ? u
            : e instanceof s.Il && t instanceof s.Il
            ? c
            : h;
        }
      },
      5071: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            add: function () {
              return v;
            },
            any: function () {
              return s;
            },
            copy: function () {
              return P;
            },
            each: function () {
              return o;
            },
            eachContinue: function () {
              return h;
            },
            eachReverse: function () {
              return l;
            },
            find: function () {
              return S;
            },
            findIndex: function () {
              return M;
            },
            findIndexReverse: function () {
              return E;
            },
            findMap: function () {
              return N;
            },
            findReverse: function () {
              return C;
            },
            first: function () {
              return d;
            },
            getFirstSortedIndex: function () {
              return A;
            },
            getSortedIndex: function () {
              return j;
            },
            has: function () {
              return O;
            },
            indexOf: function () {
              return n;
            },
            insert: function () {
              return p;
            },
            insertIndex: function () {
              return k;
            },
            keepIf: function () {
              return R;
            },
            last: function () {
              return c;
            },
            map: function () {
              return a;
            },
            move: function () {
              return _;
            },
            pushAll: function () {
              return g;
            },
            pushOne: function () {
              return y;
            },
            remove: function () {
              return m;
            },
            removeFirst: function () {
              return b;
            },
            removeIndex: function () {
              return T;
            },
            replace: function () {
              return w;
            },
            setIndex: function () {
              return f;
            },
            shiftLeft: function () {
              return u;
            },
            shuffle: function () {
              return L;
            },
            slice: function () {
              return D;
            },
            toArray: function () {
              return x;
            },
          });
        var r = i(5040);
        function n(e, t) {
          const i = e.length;
          for (let r = 0; r < i; ++r) if (e[r] === t) return r;
          return -1;
        }
        function s(e, t) {
          const i = e.length;
          for (let r = 0; r < i; ++r) if (t(e[r])) return !0;
          return !1;
        }
        function a(e, t) {
          const i = e.length,
            r = new Array(i);
          for (let n = 0; n < i; ++n) r[n] = t(e[n], n);
          return r;
        }
        function o(e, t) {
          const i = e.length;
          for (let r = 0; r < i; ++r) t(e[r], r);
        }
        function l(e, t) {
          let i = e.length;
          for (; i > 0; ) --i, t(e[i], i);
        }
        function h(e, t) {
          const i = e.length;
          for (let r = 0; r < i && t(e[r], r); ++r);
        }
        function u(e, t) {
          const i = e.length;
          for (let r = t; r < i; ++r) e[r - t] = e[r];
          e.length = i - t;
        }
        function c(e) {
          const t = e.length;
          return t ? e[t - 1] : void 0;
        }
        function d(e) {
          return e[0];
        }
        function p(e, t, i) {
          (i = Math.max(0, Math.min(i, e.length))), e.splice(i, 0, t);
        }
        function f(e, t, i) {
          m(e, t), p(e, t, i);
        }
        function g(e, t) {
          const i = t.length;
          for (let r = 0; r < i; ++r) e.push(t[r]);
        }
        function m(e, t) {
          let i = !1,
            r = 0;
          for (;;) {
            if (((r = e.indexOf(t, r)), -1 === r)) return i;
            (i = !0), e.splice(r, 1);
          }
        }
        function b(e, t) {
          let i = e.indexOf(t);
          return -1 !== i && (e.splice(i, 1), !0);
        }
        function _(e, t, i) {
          let r = n(e, t);
          -1 !== r && T(e, r), null == i ? e.push(t) : k(e, i, t);
        }
        function v(e, t, i) {
          r.isNumber(i)
            ? 0 === i
              ? e.unshift(t)
              : e.splice(i, 0, t)
            : e.push(t);
        }
        function y(e, t) {
          -1 === e.indexOf(t) && e.push(t);
        }
        function w(e, t, i) {
          let n = e.indexOf(t);
          -1 !== n && e.splice(n, 1),
            r.isNumber(i) ? e.splice(i, 0, t) : e.push(t);
        }
        function x(e) {
          return Array.isArray(e) ? e : [e];
        }
        function O(e, t) {
          return -1 !== n(e, t);
        }
        function P(e) {
          const t = e.length,
            i = new Array(t);
          for (let r = 0; r < t; ++r) i[r] = e[r];
          return i;
        }
        function D(e, t, i = e.length) {
          const r = new Array(i - t);
          for (let n = t; n < i; ++n) r[n - t] = e[n];
          return r;
        }
        function k(e, t, i) {
          e.splice(t, 0, i);
        }
        function T(e, t) {
          e.splice(t, 1);
        }
        function M(e, t) {
          const i = e.length;
          for (let r = 0; r < i; ++r) if (t(e[r], r)) return r;
          return -1;
        }
        function E(e, t) {
          let i = e.length;
          for (; i > 0; ) if ((--i, t(e[i], i))) return i;
          return -1;
        }
        function S(e, t) {
          const i = M(e, t);
          if (-1 !== i) return e[i];
        }
        function C(e, t) {
          const i = E(e, t);
          if (-1 !== i) return e[i];
        }
        function N(e, t) {
          const i = e.length;
          for (let r = 0; r < i; ++r) {
            const i = t(e[r], r);
            if (void 0 !== i) return i;
          }
        }
        function L(e) {
          let t,
            i,
            r = e.length;
          for (; 0 !== r; )
            (i = Math.floor(Math.random() * r)),
              (r -= 1),
              (t = e[r]),
              (e[r] = e[i]),
              (e[i] = t);
        }
        function j(e, t) {
          let i = 0,
            r = e.length,
            n = !1;
          for (; i < r; ) {
            const s = (i + r) >> 1,
              a = t(e[s]);
            a < 0 ? (i = s + 1) : 0 === a ? ((n = !0), (i = s + 1)) : (r = s);
          }
          return { found: n, index: n ? i - 1 : i };
        }
        function A(e, t) {
          let i = 0,
            r = e.length,
            n = !1;
          for (; i < r; ) {
            const s = (i + r) >> 1,
              a = t(e[s]);
            a < 0 ? (i = s + 1) : 0 === a ? ((n = !0), (r = s)) : (r = s);
          }
          return { found: n, index: i };
        }
        function R(e, t) {
          let i = e.length;
          for (; i > 0; ) --i, t(e[i]) || e.splice(i, 1);
        }
      },
      1112: function (e, t, i) {
        "use strict";
        i.d(t, {
          $_: function () {
            return o;
          },
          Il: function () {
            return l;
          },
        });
        var r = i(6490),
          n = i(7652),
          s = i(5040);
        function a(e) {
          return (
            "#" === e[0] && (e = e.substr(1)),
            3 == e.length &&
              (e = e[0].repeat(2) + e[1].repeat(2) + e[2].repeat(2)),
            parseInt(e, 16)
          );
        }
        function o(e) {
          return l.fromAny(e);
        }
        class l {
          constructor(e) {
            Object.defineProperty(this, "_hex", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              (this._hex = 0 | e);
          }
          get hex() {
            return this._hex;
          }
          get r() {
            return this._hex >>> 16;
          }
          get g() {
            return (this._hex >> 8) & 255;
          }
          get b() {
            return 255 & this._hex;
          }
          toCSS(e = 1) {
            return (
              "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + e + ")"
            );
          }
          toCSSHex() {
            return (
              "#" +
              n.padString(this.r.toString(16), 2) +
              n.padString(this.g.toString(16), 2) +
              n.padString(this.b.toString(16), 2)
            );
          }
          toHSL(e = 1) {
            return n.rgbToHsl({ r: this.r, g: this.g, b: this.b, a: e });
          }
          static fromHSL(e, t, i) {
            const r = n.hslToRgb({ h: e, s: t, l: i });
            return this.fromRGB(r.r, r.g, r.b);
          }
          toString() {
            return this.toCSSHex();
          }
          static fromHex(e) {
            return new l(e);
          }
          static fromRGB(e, t, i) {
            return new l((0 | i) + (t << 8) + (e << 16));
          }
          static fromString(e) {
            return new l(a(e));
          }
          static fromCSS(e) {
            return new l(
              (function (e) {
                let t = (e = e.replace(/[ ]/g, "")).match(
                  /^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i
                );
                if (t) t.push("1");
                else if (
                  ((t = e.match(
                    /^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i
                  )),
                  !t)
                )
                  return 0;
                let i = "";
                for (let e = 1; e <= 3; e++) {
                  let r = parseInt(t[e]).toString(16);
                  1 == r.length && (r = "0" + r), (i += r);
                }
                return a(i);
              })(e)
            );
          }
          static fromAny(e) {
            if (s.isString(e)) {
              if ("#" == e[0]) return l.fromString(e);
              if ("rgb" == e.substr(0, 3)) return l.fromCSS(e);
            } else {
              if (s.isNumber(e)) return l.fromHex(e);
              if (e instanceof l) return l.fromHex(e.hex);
            }
            throw new Error("Unknown color syntax: " + e);
          }
          static alternative(e, t, i) {
            const r = n.alternativeColor(
              { r: e.r, g: e.g, b: e.b },
              t ? { r: t.r, g: t.g, b: t.b } : void 0,
              i ? { r: i.r, g: i.g, b: i.b } : void 0
            );
            return this.fromRGB(r.r, r.g, r.b);
          }
          static interpolate(e, t, i, n = "rgb") {
            if ("hsl" == n) {
              const n = t.toHSL(),
                s = i.toHSL();
              return l.fromHSL(
                (0, r.w6)(e, n.h, s.h),
                (0, r.w6)(e, n.s, s.s),
                (0, r.w6)(e, n.l, s.l)
              );
            }
            return l.fromRGB(
              (0, r.w6)(e, t.r, i.r),
              (0, r.w6)(e, t.g, i.g),
              (0, r.w6)(e, t.b, i.b)
            );
          }
          static lighten(e, t) {
            const i = n.lighten({ r: e.r, g: e.g, b: e.b }, t);
            return l.fromRGB(i.r, i.g, i.b);
          }
          static brighten(e, t) {
            const i = n.brighten({ r: e.r, g: e.g, b: e.b }, t);
            return l.fromRGB(i.r, i.g, i.b);
          }
          static saturate(e, t) {
            const i = n.saturate({ r: e.r, g: e.g, b: e.b }, t);
            return l.fromRGB(i.r, i.g, i.b);
          }
        }
      },
      2754: function (e, t, i) {
        "use strict";
        i.d(t, {
          U: function () {
            return s;
          },
        });
        var r = i(6331),
          n = i(1112);
        class s extends r.JH {
          _afterNew() {
            super._afterNewApplyThemes(), (this._dirty.colors = !1);
          }
          _beforeChanged() {
            this.isDirty("colors") && this.reset();
          }
          generateColors() {
            this.setPrivate(
              "currentPass",
              this.getPrivate("currentPass", 0) + 1
            );
            const e = this.getPrivate("currentPass"),
              t = this.get("colors", [
                this.get("baseColor", n.Il.fromHex(16711680)),
              ]);
            this.getPrivate("numColors") ||
              this.setPrivate("numColors", t.length);
            const i = this.getPrivate("numColors"),
              r = this.get("passOptions"),
              s = this.get("reuse");
            for (let a = 0; a < i; a++)
              if (s) t.push(t[a]);
              else {
                const i = t[a].toHSL();
                let s = i.h + (r.hue || 0) * e;
                for (; s > 1; ) s -= 1;
                let o = i.s + (r.saturation || 0) * e;
                o > 1 && (o = 1), o < 0 && (o = 0);
                let l = i.l + (r.lightness || 0) * e;
                for (; l > 1; ) l -= 1;
                t.push(n.Il.fromHSL(s, o, l));
              }
          }
          getIndex(e) {
            const t = this.get("colors", []),
              i = this.get("saturation");
            return e >= t.length
              ? (this.generateColors(), this.getIndex(e))
              : null != i
              ? n.Il.saturate(t[e], i)
              : t[e];
          }
          next() {
            let e = this.getPrivate("currentStep", this.get("startIndex", 0));
            return (
              this.setPrivate("currentStep", e + this.get("step", 1)),
              this.getIndex(e)
            );
          }
          reset() {
            this.setPrivate("currentStep", this.get("startIndex", 0)),
              this.setPrivate("currentPass", 0);
          }
        }
        Object.defineProperty(s, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ColorSet",
        }),
          Object.defineProperty(s, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([s.className]),
          });
      },
      9582: function (e, t, i) {
        "use strict";
        i.d(t, {
          Q: function () {
            return s;
          },
          k: function () {
            return n;
          },
        });
        var r = i(7144);
        class n extends r.aV {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "processor", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          incrementRef() {}
          decrementRef() {}
          _onPush(e) {
            this.processor && this.processor.processRow(e), super._onPush(e);
          }
          _onInsertIndex(e, t) {
            this.processor && this.processor.processRow(t),
              super._onInsertIndex(e, t);
          }
          _onSetIndex(e, t, i) {
            this.processor && this.processor.processRow(i),
              super._onSetIndex(e, t, i);
          }
        }
        class s {
          constructor(e) {
            Object.defineProperty(this, "processor", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_value", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._value = e);
          }
          incrementRef() {}
          decrementRef() {}
        }
      },
      6460: function (e, t, i) {
        "use strict";
        i.d(t, {
          C: function () {
            return l;
          },
        });
        var r = i(6331),
          n = i(7255),
          s = i(462),
          a = i(5040),
          o = i(7652);
        class l extends r.JH {
          _setDefaults() {
            this._setDefault("capitalize", !0),
              this._setDefault("dateFormat", "yyyy-MM-dd"),
              super._setDefaults();
          }
          _beforeChanged() {
            super._beforeChanged();
          }
          format(e, t) {
            let i;
            (void 0 !== t && "" !== t) ||
              (t = this.get("dateFormat", "yyyy-MM-dd"));
            let r = e;
            if (a.isObject(t))
              try {
                const e = this.get("intlLocales");
                return e
                  ? new Intl.DateTimeFormat(e, t).format(r)
                  : new Intl.DateTimeFormat(void 0, t).format(r);
              } catch (e) {
                return "Invalid";
              }
            let n = this.parseFormat(t);
            const s = this._root.timezone;
            return (
              s && !this._root.utc && (r = s.convertLocal(r)),
              a.isNumber(r.getTime())
                ? ((i = this.applyFormat(r, n)),
                  this.get("capitalize") &&
                    (i = i.replace(/^.{1}/, i.substr(0, 1).toUpperCase())),
                  i)
                : "Invalid date"
            );
          }
          applyFormat(e, t) {
            let i,
              r,
              n,
              l,
              h,
              u,
              c,
              d,
              p = t.template,
              f = e.getTime();
            this._root.utc
              ? ((i = e.getUTCFullYear()),
                (r = e.getUTCMonth()),
                (n = e.getUTCDay()),
                (l = e.getUTCDate()),
                (h = e.getUTCHours()),
                (u = e.getUTCMinutes()),
                (c = e.getUTCSeconds()),
                (d = e.getUTCMilliseconds()))
              : ((i = e.getFullYear()),
                (r = e.getMonth()),
                (n = e.getDay()),
                (l = e.getDate()),
                (h = e.getHours()),
                (u = e.getMinutes()),
                (c = e.getSeconds()),
                (d = e.getMilliseconds()));
            for (let g = 0, m = t.parts.length; g < m; g++) {
              let m = "";
              switch (t.parts[g]) {
                case "G":
                  m = this._t(i < 0 ? "_era_bc" : "_era_ad");
                  break;
                case "yyyy":
                  (m = Math.abs(i).toString()),
                    i < 0 && (m += this._t("_era_bc"));
                  break;
                case "yyy":
                case "yy":
                case "y":
                  (m = Math.abs(i).toString().substr(-t.parts[g].length)),
                    i < 0 && (m += this._t("_era_bc"));
                  break;
                case "YYYY":
                case "YYY":
                case "YY":
                case "Y":
                  let a = o.getWeekYear(e, this._root.utc);
                  (m =
                    "YYYY" == t.parts[g]
                      ? Math.abs(a).toString()
                      : Math.abs(a).toString().substr(-t.parts[g].length)),
                    a < 0 && (m += this._t("_era_bc"));
                  break;
                case "u":
                case "F":
                case "g":
                  break;
                case "q":
                  m = "" + Math.ceil((e.getMonth() + 1) / 3);
                  break;
                case "MMMMM":
                  m = this._t(this._getMonth(r)).substr(0, 1);
                  break;
                case "MMMM":
                  m = this._t(this._getMonth(r));
                  break;
                case "MMM":
                  m = this._t(this._getShortMonth(r));
                  break;
                case "MM":
                  m = o.padString(r + 1, 2, "0");
                  break;
                case "M":
                  m = (r + 1).toString();
                  break;
                case "ww":
                  m = o.padString(o.getWeek(e, this._root.utc), 2, "0");
                  break;
                case "w":
                  m = o.getWeek(e, this._root.utc).toString();
                  break;
                case "W":
                  m = o.getMonthWeek(e, this._root.utc).toString();
                  break;
                case "dd":
                  m = o.padString(l, 2, "0");
                  break;
                case "d":
                  m = l.toString();
                  break;
                case "DD":
                case "DDD":
                  m = o.padString(
                    o.getYearDay(e, this._root.utc).toString(),
                    t.parts[g].length,
                    "0"
                  );
                  break;
                case "D":
                  m = o.getYearDay(e, this._root.utc).toString();
                  break;
                case "t":
                  m = this._root.language
                    .translateFunc("_dateOrd")
                    .call(this, l);
                  break;
                case "E":
                  m = (n || 7).toString();
                  break;
                case "EE":
                  m = o.padString((n || 7).toString(), 2, "0");
                  break;
                case "EEE":
                case "eee":
                  m = this._t(this._getShortWeekday(n));
                  break;
                case "EEEE":
                case "eeee":
                  m = this._t(this._getWeekday(n));
                  break;
                case "EEEEE":
                case "eeeee":
                  m = this._t(this._getShortWeekday(n)).substr(0, 1);
                  break;
                case "e":
                case "ee":
                  (m = (
                    n -
                    (this._root.locale.firstDayOfWeek || 1) +
                    1
                  ).toString()),
                    "ee" == t.parts[g] && (m = o.padString(m, 2, "0"));
                  break;
                case "a":
                  m = h >= 12 ? this._t("PM") : this._t("AM");
                  break;
                case "aa":
                  m = h >= 12 ? this._t("P.M.") : this._t("A.M.");
                  break;
                case "aaa":
                  m = h >= 12 ? this._t("P") : this._t("A");
                  break;
                case "h":
                  m = o.get12Hours(h).toString();
                  break;
                case "hh":
                  m = o.padString(o.get12Hours(h), 2, "0");
                  break;
                case "H":
                  m = h.toString();
                  break;
                case "HH":
                  m = o.padString(h, 2, "0");
                  break;
                case "K":
                  m = o.get12Hours(h, 0).toString();
                  break;
                case "KK":
                  m = o.padString(o.get12Hours(h, 0), 2, "0");
                  break;
                case "k":
                  m = (h + 1).toString();
                  break;
                case "kk":
                  m = o.padString(h + 1, 2, "0");
                  break;
                case "m":
                  m = u.toString();
                  break;
                case "mm":
                  m = o.padString(u, 2, "0");
                  break;
                case "s":
                  m = c.toString();
                  break;
                case "ss":
                  m = o.padString(c, 2, "0");
                  break;
                case "S":
                case "SS":
                case "SSS":
                  m = Math.round(
                    (d / 1e3) * Math.pow(10, t.parts[g].length)
                  ).toString();
                  break;
                case "x":
                  m = f.toString();
                  break;
                case "n":
                case "nn":
                case "nnn":
                  m = o.padString(d, t.parts[g].length, "0");
                  break;
                case "z":
                  m = o.getTimeZone(
                    e,
                    !1,
                    !1,
                    this._root.utc,
                    this._root.timezone ? this._root.timezone.name : void 0
                  );
                  break;
                case "zz":
                  m = o.getTimeZone(
                    e,
                    !0,
                    !1,
                    this._root.utc,
                    this._root.timezone ? this._root.timezone.name : void 0
                  );
                  break;
                case "zzz":
                  m = o.getTimeZone(
                    e,
                    !1,
                    !0,
                    this._root.utc,
                    this._root.timezone ? this._root.timezone.name : void 0
                  );
                  break;
                case "zzzz":
                  m = o.getTimeZone(
                    e,
                    !0,
                    !0,
                    this._root.utc,
                    this._root.timezone ? this._root.timezone.name : void 0
                  );
                  break;
                case "Z":
                case "ZZ":
                  let p = this._root.utc ? "UTC" : this._root.timezone;
                  p instanceof s.r && (p = p.name);
                  const b = p ? o.getTimezoneOffset(p) : e.getTimezoneOffset();
                  let _ = Math.abs(b) / 60,
                    v = Math.floor(_),
                    y = 60 * _ - 60 * v;
                  this._root.utc && ((v = 0), (y = 0)),
                    "Z" == t.parts[g]
                      ? ((m = "GMT"),
                        (m += b > 0 ? "-" : "+"),
                        (m += o.padString(v, 2) + ":" + o.padString(y, 2)))
                      : ((m = b > 0 ? "-" : "+"),
                        (m += o.padString(v, 2) + o.padString(y, 2)));
                  break;
                case "i":
                  m = e.toISOString();
                  break;
                case "I":
                  m = e.toUTCString();
              }
              p = p.replace(a.PLACEHOLDER, m);
            }
            return p;
          }
          parseFormat(e) {
            let t = { template: "", parts: [] },
              i = n.V.chunk(e, !0);
            for (let e = 0; e < i.length; e++) {
              let r = i[e];
              if ("value" === r.type) {
                if (r.text.match(/^date$/i)) {
                  let e = this.get("dateFormat", "yyyy-MM-dd");
                  a.isString(e) || (e = "yyyy-MM-dd"), (r.text = e);
                }
                let e = r.text.match(
                  /G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g
                );
                if (e)
                  for (let i = 0; i < e.length; i++)
                    t.parts.push(e[i]),
                      (r.text = r.text.replace(e[i], a.PLACEHOLDER));
              }
              t.template += r.text;
            }
            return t;
          }
          _months() {
            return [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
          }
          _getMonth(e) {
            return this._months()[e];
          }
          _shortMonths() {
            return [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May(short)",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
          }
          _getShortMonth(e) {
            return this._shortMonths()[e];
          }
          _weekdays() {
            return [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
          }
          _getWeekday(e) {
            return this._weekdays()[e];
          }
          _shortWeekdays() {
            return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          }
          _getShortWeekday(e) {
            return this._shortWeekdays()[e];
          }
          parse(e, t) {
            if (e instanceof Date) return e;
            if (a.isNumber(e)) return new Date(e);
            let i;
            a.isString(e) || (e = e.toString());
            let r = "";
            t = (t = o.cleanFormat(t)).substr(0, e.length);
            let n = this.parseFormat(t),
              s = {
                year: -1,
                year3: -1,
                year2: -1,
                year1: -1,
                month: -1,
                monthShort: -1,
                monthLong: -1,
                weekdayShort: -1,
                weekdayLong: -1,
                day: -1,
                yearDay: -1,
                week: -1,
                hourBase0: -1,
                hour12Base0: -1,
                hourBase1: -1,
                hour12Base1: -1,
                minute: -1,
                second: -1,
                millisecond: -1,
                millisecondDigits: -1,
                am: -1,
                zone: -1,
                timestamp: -1,
                iso: -1,
              },
              l = {
                year: 1970,
                month: 0,
                day: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                timestamp: null,
                offset: 0,
                utc: this._root.utc,
              },
              h = 0,
              u = 0;
            for (let e = 0; e < n.parts.length; e++) {
              switch (((u = e + h + 1), n.parts[e])) {
                case "yyyy":
                case "YYYY":
                  (r += "([0-9]{4})"), (s.year = u);
                  break;
                case "yyy":
                case "YYY":
                  (r += "([0-9]{3})"), (s.year3 = u);
                  break;
                case "yy":
                case "YY":
                  (r += "([0-9]{2})"), (s.year2 = u);
                  break;
                case "y":
                case "Y":
                  (r += "([0-9]{1})"), (s.year1 = u);
                  break;
                case "MMMM":
                  (r +=
                    "(" + this.getStringList(this._months()).join("|") + ")"),
                    (s.monthLong = u);
                  break;
                case "MMM":
                  (r +=
                    "(" +
                    this.getStringList(this._shortMonths()).join("|") +
                    ")"),
                    (s.monthShort = u);
                  break;
                case "MM":
                case "M":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.month = u);
                  break;
                case "ww":
                case "w":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.week = u);
                  break;
                case "dd":
                case "d":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.day = u);
                  break;
                case "DDD":
                case "DD":
                case "D":
                  (r += "([0-9]{3}|[0-9]{2}|[0-9]{1})"), (s.yearDay = u);
                  break;
                case "dddd":
                  (r +=
                    "(" + this.getStringList(this._weekdays()).join("|") + ")"),
                    (s.weekdayLong = u);
                  break;
                case "ddd":
                  (r +=
                    "(" +
                    this.getStringList(this._shortWeekdays()).join("|") +
                    ")"),
                    (s.weekdayShort = u);
                  break;
                case "aaa":
                case "aa":
                case "a":
                  (r +=
                    "(" +
                    this.getStringList([
                      "AM",
                      "PM",
                      "A.M.",
                      "P.M.",
                      "A",
                      "P",
                    ]).join("|") +
                    ")"),
                    (s.am = u);
                  break;
                case "hh":
                case "h":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.hour12Base1 = u);
                  break;
                case "HH":
                case "H":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.hourBase0 = u);
                  break;
                case "KK":
                case "K":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.hour12Base0 = u);
                  break;
                case "kk":
                case "k":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.hourBase1 = u);
                  break;
                case "mm":
                case "m":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.minute = u);
                  break;
                case "ss":
                case "s":
                  (r += "([0-9]{2}|[0-9]{1})"), (s.second = u);
                  break;
                case "SSS":
                case "SS":
                case "S":
                  (r += "([0-9]{3}|[0-9]{2}|[0-9]{1})"),
                    (s.millisecond = u),
                    (s.millisecondDigits = n.parts[e].length);
                  break;
                case "nnn":
                case "nn":
                case "n":
                  (r += "([0-9]{3}|[0-9]{2}|[0-9]{1})"), (s.millisecond = u);
                  break;
                case "x":
                  (r += "([0-9]{1,})"), (s.timestamp = u);
                  break;
                case "Z":
                  (r += "GMT([-+]+[0-9]{2}:[0-9]{2})"), (s.zone = u);
                  break;
                case "ZZ":
                  (r += "([\\-+]+[0-9]{2}[0-9]{2})"), (s.zone = u);
                  break;
                case "i":
                  (r +=
                    "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)"),
                    (s.iso = u),
                    (h += 7);
                  break;
                case "G":
                case "YYYY":
                case "YYY":
                case "YY":
                case "Y":
                case "MMMMM":
                case "W":
                case "EEEEE":
                case "EEEE":
                case "EEE":
                case "EE":
                case "E":
                case "eeeee":
                case "eeee":
                case "eee":
                case "ee":
                case "e":
                case "zzzz":
                case "zzz":
                case "zz":
                case "z":
                case "t":
                  h--;
              }
              r += "[^0-9]*";
            }
            let c = new RegExp(r),
              d = e.match(c);
            if (d) {
              if (
                (s.year > -1 && (l.year = parseInt(d[s.year])), s.year3 > -1)
              ) {
                let e = parseInt(d[s.year3]);
                (e += 1e3), (l.year = e);
              }
              if (s.year2 > -1) {
                let e = parseInt(d[s.year2]);
                (e += e > 50 ? 1e3 : 2e3), (l.year = e);
              }
              if (s.year1 > -1) {
                let e = parseInt(d[s.year1]);
                (e = 10 * Math.floor(new Date().getFullYear() / 10) + e),
                  (l.year = e);
              }
              if (
                (s.monthLong > -1 &&
                  (l.month = this.resolveMonth(d[s.monthLong])),
                s.monthShort > -1 &&
                  (l.month = this.resolveShortMonth(d[s.monthShort])),
                s.month > -1 && (l.month = parseInt(d[s.month]) - 1),
                s.week > -1 &&
                  -1 === s.day &&
                  ((l.month = 0),
                  (l.day = o.getDayFromWeek(
                    parseInt(d[s.week]),
                    l.year,
                    1,
                    this._root.utc
                  ))),
                s.day > -1 && (l.day = parseInt(d[s.day])),
                s.yearDay > -1 &&
                  ((l.month = 0), (l.day = parseInt(d[s.yearDay]))),
                s.hourBase0 > -1 && (l.hour = parseInt(d[s.hourBase0])),
                s.hourBase1 > -1 && (l.hour = parseInt(d[s.hourBase1]) - 1),
                s.hour12Base0 > -1)
              ) {
                let e = parseInt(d[s.hour12Base0]);
                11 == e && (e = 0),
                  s.am > -1 && !this.isAm(d[s.am]) && (e += 12),
                  (l.hour = e);
              }
              if (s.hour12Base1 > -1) {
                let e = parseInt(d[s.hour12Base1]);
                12 == e && (e = 0),
                  s.am > -1 && !this.isAm(d[s.am]) && (e += 12),
                  (l.hour = e);
              }
              if (
                (s.minute > -1 && (l.minute = parseInt(d[s.minute])),
                s.second > -1 && (l.second = parseInt(d[s.second])),
                s.millisecond > -1)
              ) {
                let e = parseInt(d[s.millisecond]);
                2 == s.millisecondDigits
                  ? (e *= 10)
                  : 1 == s.millisecondDigits && (e *= 100),
                  (l.millisecond = e);
              }
              if (s.timestamp > -1) {
                l.timestamp = parseInt(d[s.timestamp]);
                const e = new Date(l.timestamp);
                (l.year = e.getUTCFullYear()),
                  (l.month = e.getUTCMonth()),
                  (l.day = e.getUTCDate()),
                  (l.hour = e.getUTCHours()),
                  (l.minute = e.getUTCMinutes()),
                  (l.second = e.getUTCSeconds()),
                  (l.millisecond = e.getUTCMilliseconds());
              }
              s.zone > -1 &&
                (l.offset = this.resolveTimezoneOffset(
                  new Date(l.year, l.month, l.day),
                  d[s.zone]
                )),
                s.iso > -1 &&
                  ((l.year = a.toNumber(d[s.iso + 0])),
                  (l.month = a.toNumber(d[s.iso + 1]) - 1),
                  (l.day = a.toNumber(d[s.iso + 2])),
                  (l.hour = a.toNumber(d[s.iso + 3])),
                  (l.minute = a.toNumber(d[s.iso + 4])),
                  (l.second = a.toNumber(d[s.iso + 5])),
                  (l.millisecond = a.toNumber(d[s.iso + 6])),
                  "Z" == d[s.iso + 7] || "z" == d[s.iso + 7]
                    ? (l.utc = !0)
                    : "" != d[s.iso + 7] &&
                      (l.offset = this.resolveTimezoneOffset(
                        new Date(l.year, l.month, l.day),
                        d[s.iso + 7]
                      ))),
                (i = l.utc
                  ? new Date(
                      Date.UTC(
                        l.year,
                        l.month,
                        l.day,
                        l.hour,
                        l.minute,
                        l.second,
                        l.millisecond
                      )
                    )
                  : new Date(
                      l.year,
                      l.month,
                      l.day,
                      l.hour,
                      l.minute + l.offset,
                      l.second,
                      l.millisecond
                    ));
            } else i = new Date(e);
            return i;
          }
          resolveTimezoneOffset(e, t) {
            if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/)) {
              let i = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/),
                r = i[1],
                n = i[2],
                s = i[3],
                a = 60 * parseInt(n) + parseInt(s);
              return (
                "+" == r && (a *= -1), a - (e || new Date()).getTimezoneOffset()
              );
            }
            return 0;
          }
          resolveMonth(e) {
            let t = this._months().indexOf(e);
            return t > -1 ||
              (!this._root.language.isDefault() &&
                ((t = this._root.language
                  .translateAll(this._months())
                  .indexOf(e)),
                t > -1))
              ? t
              : 0;
          }
          resolveShortMonth(e) {
            let t = this._shortMonths().indexOf(e);
            return t > -1
              ? t
              : ((t = this._months().indexOf(e)),
                t > -1 ||
                (this._root.language &&
                  !this._root.language.isDefault() &&
                  ((t = this._root.language
                    .translateAll(this._shortMonths())
                    .indexOf(e)),
                  t > -1))
                  ? t
                  : 0);
          }
          isAm(e) {
            return (
              this.getStringList(["AM", "A.M.", "A"]).indexOf(e.toUpperCase()) >
              -1
            );
          }
          getStringList(e) {
            let t = [];
            for (let i = 0; i < e.length; i++)
              this._root.language
                ? t.push(o.escapeForRgex(this._t(e[i])))
                : t.push(o.escapeForRgex(e[i]));
            return t;
          }
        }
      },
      7449: function (e, t, i) {
        "use strict";
        i.d(t, {
          DM: function () {
            return h;
          },
          FV: function () {
            return o;
          },
          KK: function () {
            return n;
          },
          cx: function () {
            return l;
          },
          ku: function () {
            return s;
          },
          rk: function () {
            return a;
          },
        });
        var r = i(5071);
        class n {
          constructor() {
            Object.defineProperty(this, "_disposed", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              (this._disposed = !1);
          }
          isDisposed() {
            return this._disposed;
          }
          dispose() {
            this._disposed || ((this._disposed = !0), this._dispose());
          }
        }
        class s {
          constructor(e) {
            Object.defineProperty(this, "_disposed", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_dispose", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._disposed = !1),
              (this._dispose = e);
          }
          isDisposed() {
            return this._disposed;
          }
          dispose() {
            this._disposed || ((this._disposed = !0), this._dispose());
          }
        }
        class a extends n {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_disposers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              });
          }
          _dispose() {
            r.each(this._disposers, (e) => {
              e.dispose();
            });
          }
        }
        class o extends n {
          constructor(e) {
            super(),
              Object.defineProperty(this, "_disposers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._disposers = e);
          }
          _dispose() {
            r.each(this._disposers, (e) => {
              e.dispose();
            });
          }
          get disposers() {
            return this._disposers;
          }
        }
        class l extends n {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_disposer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_value", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              });
          }
          _dispose() {
            null != this._disposer &&
              (this._disposer.dispose(), (this._disposer = void 0));
          }
          get() {
            return this._value;
          }
          set(e, t) {
            null != this._disposer && this._disposer.dispose(),
              (this._disposer = t),
              (this._value = e);
          }
          reset() {
            this.set(void 0, void 0);
          }
        }
        class h extends s {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_counter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              });
          }
          increment() {
            return (
              ++this._counter,
              new s(() => {
                --this._counter, 0 === this._counter && this.dispose();
              })
            );
          }
        }
      },
      798: function (e, t, i) {
        "use strict";
        i.d(t, {
          $: function () {
            return l;
          },
        });
        var r = i(6331),
          n = i(7255),
          s = i(256),
          a = i(7652),
          o = i(5040);
        class l extends r.JH {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_unitAliases", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: { Y: "y", D: "d", H: "h", K: "h", k: "h", n: "S" },
              });
          }
          _setDefaults() {
            const e = "_duration_millisecond",
              t = "_duration_second",
              i = "_duration_minute",
              r = "_duration_hour",
              n = "_duration_day",
              s = "_duration_week",
              a = "_duration_month",
              o = "_minute",
              l = "_hour",
              h = "_day",
              u = "_week",
              c = "_week",
              d = "_year";
            this._setDefault("negativeBase", 0),
              this._setDefault("baseUnit", "second"),
              this._setDefault("durationFormats", {
                millisecond: {
                  millisecond: this._t(e),
                  second: this._t(e + "_second"),
                  minute: this._t(e + o),
                  hour: this._t(e + l),
                  day: this._t(e + h),
                  week: this._t(e + u),
                  month: this._t(e + c),
                  year: this._t(e + d),
                },
                second: {
                  second: this._t(t),
                  minute: this._t(t + o),
                  hour: this._t(t + l),
                  day: this._t(t + h),
                  week: this._t(t + u),
                  month: this._t(t + c),
                  year: this._t(t + d),
                },
                minute: {
                  minute: this._t(i),
                  hour: this._t(i + l),
                  day: this._t(i + h),
                  week: this._t(i + u),
                  month: this._t(i + c),
                  year: this._t(i + d),
                },
                hour: {
                  hour: this._t(r),
                  day: this._t(r + h),
                  week: this._t(r + u),
                  month: this._t(r + c),
                  year: this._t(r + d),
                },
                day: {
                  day: this._t(n),
                  week: this._t(n + u),
                  month: this._t(n + c),
                  year: this._t(n + d),
                },
                week: {
                  week: this._t(s),
                  month: this._t(s + c),
                  year: this._t(s + d),
                },
                month: { month: this._t(a), year: this._t(a + d) },
                year: { year: this._t("_duration_year") },
              }),
              super._setDefaults();
          }
          _beforeChanged() {
            super._beforeChanged();
          }
          format(e, t, i) {
            let r = i || this.get("baseUnit");
            (void 0 !== t && "" !== t) ||
              (t =
                null != this.get("durationFormat")
                  ? this.get("durationFormat")
                  : this.getFormat(o.toNumber(e), void 0, r)),
              (t = a.cleanFormat(t));
            let n,
              s = this.parseFormat(t, r),
              l = Number(e);
            n =
              l > this.get("negativeBase")
                ? s.positive
                : l < this.get("negativeBase")
                ? s.negative
                : s.zero;
            let h = this.applyFormat(l, n);
            return "" !== n.color && (h = "[" + n.color + "]" + h + "[/]"), h;
          }
          parseFormat(e, t) {
            let i = t || this.get("baseUnit"),
              r = {
                positive: {
                  color: "",
                  template: "",
                  parts: [],
                  source: "",
                  baseUnit: i,
                  parsed: !1,
                  absolute: !1,
                },
                negative: {
                  color: "",
                  template: "",
                  parts: [],
                  source: "",
                  baseUnit: i,
                  parsed: !1,
                  absolute: !1,
                },
                zero: {
                  color: "",
                  template: "",
                  parts: [],
                  source: "",
                  baseUnit: i,
                  parsed: !1,
                  absolute: !1,
                },
              },
              a = (e = e.replace("||", o.PLACEHOLDER2)).split("|");
            return (
              (r.positive.source = a[0]),
              void 0 === a[2] ? (r.zero = r.positive) : (r.zero.source = a[2]),
              void 0 === a[1]
                ? (r.negative = r.positive)
                : (r.negative.source = a[1]),
              s.each(r, (e, t) => {
                if (t.parsed) return;
                let i = t.source,
                  r = [];
                (r = t.source.match(/^\[([^\]]*)\]/)),
                  r &&
                    r.length &&
                    "" !== r[0] &&
                    ((i = t.source.substr(r[0].length)), (t.color = r[1]));
                let s = n.V.chunk(i, !0);
                for (let e = 0; e < s.length; e++) {
                  let i = s[e];
                  if (
                    ((i.text = i.text.replace(o.PLACEHOLDER2, "|")),
                    "value" === i.type)
                  ) {
                    i.text.match(/[yYMdDwhHKkmsSn]+a/) &&
                      ((t.absolute = !0),
                      (i.text = i.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1")));
                    let e = i.text.match(
                      /y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g
                    );
                    if (e)
                      for (let r = 0; r < e.length; r++)
                        null == e[r] && (e[r] = this._unitAliases[e[r]]),
                          t.parts.push(e[r]),
                          (i.text = i.text.replace(e[r], o.PLACEHOLDER));
                  }
                  t.template += i.text;
                }
                t.parsed = !0;
              }),
              r
            );
          }
          applyFormat(e, t) {
            let i = !t.absolute && e < this.get("negativeBase");
            e = Math.abs(e);
            let r = this.toTimeStamp(e, t.baseUnit),
              n = t.template;
            for (let e = 0, i = t.parts.length; e < i; e++) {
              let i = t.parts[e],
                s = this._toTimeUnit(i.substr(0, 1)),
                l = i.length,
                h = Math.floor(r / this._getUnitValue(s));
              (n = n.replace(o.PLACEHOLDER, a.padString(h, l, "0"))),
                (r -= h * this._getUnitValue(s));
            }
            return i && (n = "-" + n), n;
          }
          toTimeStamp(e, t) {
            return e * this._getUnitValue(t);
          }
          _toTimeUnit(e) {
            switch (e) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "w":
                return "week";
              case "M":
                return "month";
              case "y":
                return "year";
            }
          }
          getFormat(e, t, i) {
            if (null != this.get("durationFormat"))
              return this.get("durationFormat");
            if ((i || (i = this.get("baseUnit")), null != t && e != t)) {
              (e = Math.abs(e)), (t = Math.abs(t));
              let r = this.getValueUnit(Math.max(e, t), i);
              return this.get("durationFormats")[i][r];
            }
            {
              let t = this.getValueUnit(e, i);
              return this.get("durationFormats")[i][t];
            }
          }
          getValueUnit(e, t) {
            let i;
            t || (t = this.get("baseUnit"));
            let r = this.getMilliseconds(e, t);
            return (
              s.eachContinue(this._getUnitValues(), (e, n) => {
                if (e == t || i) {
                  if (r / n <= 1) return i || (i = e), !1;
                  i = e;
                }
                return !0;
              }),
              i
            );
          }
          getMilliseconds(e, t) {
            return t || (t = this.get("baseUnit")), e * this._getUnitValue(t);
          }
          _getUnitValue(e) {
            return this._getUnitValues()[e];
          }
          _getUnitValues() {
            return {
              millisecond: 1,
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
              week: 6048e5,
              month: 2592e6,
              year: 31536e6,
            };
          }
        }
      },
      9395: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            bounce: function () {
              return g;
            },
            circle: function () {
              return u;
            },
            cubic: function () {
              return a;
            },
            elastic: function () {
              return _;
            },
            exp: function () {
              return l;
            },
            inOut: function () {
              return p;
            },
            linear: function () {
              return n;
            },
            out: function () {
              return d;
            },
            pow: function () {
              return o;
            },
            quad: function () {
              return s;
            },
            sine: function () {
              return h;
            },
            yoyo: function () {
              return c;
            },
          });
        var r = i(751);
        function n(e) {
          return e;
        }
        function s(e) {
          return e * e;
        }
        function a(e) {
          return e * e * e;
        }
        function o(e, t) {
          return Math.pow(e, t);
        }
        function l(e) {
          return Math.pow(2, 10 * e - 10);
        }
        function h(e) {
          return 1 - Math.cos(e * r.HALFPI);
        }
        function u(e) {
          return 1 - Math.sqrt(1 - e * e);
        }
        function c(e) {
          return function (t) {
            return e(t < 0.5 ? 2 * t : 2 * (1 - t));
          };
        }
        function d(e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        }
        function p(e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          };
        }
        let f = 7.5625;
        function g(e) {
          return (
            1 -
            (function (e) {
              return e < 0.36363636363636365
                ? f * e * e
                : e < 0.7272727272727273
                ? f * (e -= 0.5454545454545454) * e + 0.75
                : e < 0.9090909090909091
                ? f * (e -= 0.8181818181818182) * e + 0.9375
                : f * (e -= 0.9545454545454546) * e + 0.984375;
            })(1 - e)
          );
        }
        let m = 0.3 / (2 * Math.PI),
          b = Math.asin(1) * m;
        function _(e) {
          let t = e;
          return 1 * Math.pow(2, 10 * --t) * Math.sin((b - t) / m);
        }
      },
      6331: function (e, t, i) {
        "use strict";
        i.d(t, {
          JH: function () {
            return b;
          },
          Zr: function () {
            return m;
          },
        });
        var r = i(7449),
          n = i(9770),
          s = i(6490),
          a = i(256),
          o = i(9395);
        class l {
          constructor(e, t) {
            Object.defineProperty(this, "_entity", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_settings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_userSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              (this._entity = e),
              (this._settings = t),
              a.each(t, (e) => {
                this._userSettings[e] = !0;
              });
          }
          get(e, t) {
            const i = this._settings[e];
            return void 0 !== i ? i : t;
          }
          setRaw(e, t) {
            this._settings[e] = t;
          }
          set(e, t) {
            (this._userSettings[e] = !0), this.setRaw(e, t);
          }
          remove(e) {
            delete this._userSettings[e], delete this._settings[e];
          }
          setAll(e) {
            a.keys(e).forEach((t) => {
              this.set(t, e[t]);
            });
          }
          _eachSetting(e) {
            a.each(this._settings, e);
          }
          apply() {
            const e = { stateAnimationEasing: !0, stateAnimationDuration: !0 },
              t = this._entity.states.lookup("default");
            this._eachSetting((i, r) => {
              e[i] ||
                ((e[i] = !0),
                this !== t &&
                  (i in t._settings || (t._settings[i] = this._entity.get(i))),
                this._entity.set(i, r));
            });
          }
          applyAnimate(e) {
            null == e && (e = this._settings.stateAnimationDuration),
              null == e &&
                (e = this.get(
                  "stateAnimationDuration",
                  this._entity.get("stateAnimationDuration", 0)
                ));
            let t = this._settings.stateAnimationEasing;
            null == t &&
              (t = this.get(
                "stateAnimationEasing",
                this._entity.get("stateAnimationEasing", o.cubic)
              ));
            const i = this._entity.states.lookup("default"),
              r = { stateAnimationEasing: !0, stateAnimationDuration: !0 },
              n = {};
            return (
              this._eachSetting((s, a) => {
                if (!r[s]) {
                  (r[s] = !0),
                    this != i &&
                      (s in i._settings ||
                        (i._settings[s] = this._entity.get(s)));
                  const o = this._entity.animate({
                    key: s,
                    to: a,
                    duration: e,
                    easing: t,
                  });
                  o && (n[s] = o);
                }
              }),
              n
            );
          }
        }
        class h {
          constructor(e) {
            Object.defineProperty(this, "_states", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
              Object.defineProperty(this, "_entity", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._entity = e);
          }
          lookup(e) {
            return this._states[e];
          }
          create(e, t) {
            const i = this._states[e];
            if (i) return i.setAll(t), i;
            {
              const i = new l(this._entity, t);
              return (this._states[e] = i), i;
            }
          }
          remove(e) {
            delete this._states[e];
          }
          apply(e) {
            const t = this._states[e];
            t && t.apply(), this._entity._applyState(e);
          }
          applyAnimate(e, t) {
            let i;
            const r = this._states[e];
            return (
              r && (i = r.applyAnimate(t)),
              this._entity._applyStateAnimated(e, t),
              i
            );
          }
        }
        var u = i(3145),
          c = i(5071),
          d = i(3540);
        class p {
          constructor(e) {
            Object.defineProperty(this, "_entity", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_callbacks", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_disabled", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              (this._entity = e);
          }
          add(e, t) {
            let i = this._callbacks[e];
            return (
              void 0 === i && (i = this._callbacks[e] = []),
              i.push(t),
              this._entity._markDirtyKey(e),
              new r.ku(() => {
                c.removeFirst(i, t) && this._entity._markDirtyKey(e);
              })
            );
          }
          remove(e) {
            const t = this._callbacks[e];
            void 0 !== t &&
              (delete this._callbacks[e],
              0 !== t.length && this._entity._markDirtyKey(e));
          }
          enable(e) {
            this._disabled[e] &&
              (delete this._disabled[e], this._entity._markDirtyKey(e));
          }
          disable(e) {
            this._disabled[e] ||
              ((this._disabled[e] = !0), this._entity._markDirtyKey(e));
          }
          fold(e, t) {
            if (!this._disabled[e]) {
              const i = this._callbacks[e];
              if (void 0 !== i)
                for (let r = 0, n = i.length; r < n; ++r)
                  t = i[r](t, this._entity, e);
            }
            return t;
          }
        }
        class f {
          constructor(e, t, i, r, a, o, l) {
            Object.defineProperty(this, "_animation", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_from", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_to", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_duration", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_easing", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_loops", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_interpolate", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_oldTime", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_time", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_stopped", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_playing", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new n.p(),
              }),
              (this._animation = e),
              (this._from = t),
              (this._to = i),
              (this._duration = r),
              (this._easing = a),
              (this._loops = o),
              (this._interpolate = (0, s.XG)(t, i)),
              (this._oldTime = l);
          }
          get to() {
            return this._to;
          }
          get from() {
            return this._from;
          }
          get playing() {
            return this._playing;
          }
          get stopped() {
            return this._stopped;
          }
          stop() {
            this._stopped ||
              ((this._stopped = !0),
              (this._playing = !1),
              this.events.isEnabled("stopped") &&
                this.events.dispatch("stopped", {
                  type: "stopped",
                  target: this,
                }));
          }
          pause() {
            (this._playing = !1), (this._oldTime = null);
          }
          play() {
            this._stopped ||
              this._playing ||
              ((this._playing = !0), this._animation._startAnimation());
          }
          get percentage() {
            return this._time / this._duration;
          }
          waitForStop() {
            return new Promise((e, t) => {
              if (this._stopped) e();
              else {
                const t = () => {
                    i.dispose(), e();
                  },
                  i = this.events.on("stopped", t);
              }
            });
          }
          _checkEnded() {
            return !(this._loops > 1 && (--this._loops, 1));
          }
          _run(e) {
            null !== this._oldTime &&
              ((this._time += e - this._oldTime),
              this._time > this._duration && (this._time = this._duration)),
              (this._oldTime = e);
          }
          _reset(e) {
            (this._oldTime = e), (this._time = 0);
          }
          _value(e) {
            return this._interpolate(this._easing(e), this._from, this._to);
          }
        }
        let g = 0;
        class m {
          constructor(e) {
            Object.defineProperty(this, "uid", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ++g,
            }),
              Object.defineProperty(this, "_settings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_privateSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_settingEvents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_privateSettingEvents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_prevSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_prevPrivateSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_animatingSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_animatingPrivateSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_playingAnimations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "_disposed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_userProperties", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              (this._settings = e);
          }
          _checkDirty() {
            a.keys(this._settings).forEach((e) => {
              (this._userProperties[e] = !0), this._markDirtyKey(e);
            });
          }
          resetUserSettings() {
            this._userProperties = {};
          }
          _runAnimation(e) {
            return (
              !this.isDisposed() &&
              (a.each(this._animatingSettings, (t, i) => {
                if (i._stopped) this._stopAnimation(t);
                else if (i._playing) {
                  i._run(e);
                  const r = i.percentage;
                  r >= 1
                    ? i._checkEnded()
                      ? this.set(t, i._value(1))
                      : (i._reset(e), this._set(t, i._value(1)))
                    : this._set(t, i._value(r));
                }
              }),
              a.each(this._animatingPrivateSettings, (t, i) => {
                if (i._stopped) this._stopAnimationPrivate(t);
                else if (i._playing) {
                  i._run(e);
                  const r = i.percentage;
                  r >= 1
                    ? i._checkEnded()
                      ? this.setPrivate(t, i._value(1))
                      : (i._reset(e), this._setPrivate(t, i._value(1)))
                    : this._setPrivate(t, i._value(r));
                }
              }),
              0 !== this._playingAnimations)
            );
          }
          _markDirtyKey(e) {
            this.markDirty();
          }
          _markDirtyPrivateKey(e) {
            this.markDirty();
          }
          on(e, t) {
            let i = this._settingEvents[e];
            return (
              void 0 === i && (i = this._settingEvents[e] = []),
              i.push(t),
              new r.ku(() => {
                c.removeFirst(i, t),
                  0 === i.length && delete this._settingEvents[e];
              })
            );
          }
          onPrivate(e, t) {
            let i = this._privateSettingEvents[e];
            return (
              void 0 === i && (i = this._privateSettingEvents[e] = []),
              i.push(t),
              new r.ku(() => {
                c.removeFirst(i, t),
                  0 === i.length && delete this._privateSettingEvents[e];
              })
            );
          }
          getRaw(e, t) {
            const i = this._settings[e];
            return void 0 !== i ? i : t;
          }
          get(e, t) {
            return this.getRaw(e, t);
          }
          _sendKeyEvent(e, t) {
            const i = this._settingEvents[e];
            void 0 !== i &&
              c.each(i, (i) => {
                i(t, this, e);
              });
          }
          _sendPrivateKeyEvent(e, t) {
            const i = this._privateSettingEvents[e];
            void 0 !== i &&
              c.each(i, (i) => {
                i(t, this, e);
              });
          }
          _setRaw(e, t, i) {
            (this._prevSettings[e] = t), this._sendKeyEvent(e, i);
          }
          setRaw(e, t) {
            const i = this._settings[e];
            (this._settings[e] = t), i !== t && this._setRaw(e, i, t);
          }
          _set(e, t) {
            const i = this._settings[e];
            (this._settings[e] = t),
              i !== t && (this._setRaw(e, i, t), this._markDirtyKey(e));
          }
          _stopAnimation(e) {
            const t = this._animatingSettings[e];
            t &&
              (--this._playingAnimations,
              delete this._animatingSettings[e],
              t.stop());
          }
          set(e, t) {
            return this._set(e, t), this._stopAnimation(e), t;
          }
          remove(e) {
            e in this._settings &&
              ((this._prevSettings[e] = this._settings[e]),
              delete this._settings[e],
              this._sendKeyEvent(e, void 0),
              this._markDirtyKey(e)),
              this._stopAnimation(e);
          }
          removeAll() {
            c.each(a.keys(this._settings), (e) => {
              this.remove(e);
            });
          }
          getPrivate(e, t) {
            const i = this._privateSettings[e];
            return void 0 !== i ? i : t;
          }
          _setPrivateRaw(e, t, i) {
            (this._prevPrivateSettings[e] = t), this._sendPrivateKeyEvent(e, i);
          }
          setPrivateRaw(e, t) {
            const i = this._privateSettings[e];
            (this._privateSettings[e] = t),
              i !== t && this._setPrivateRaw(e, i, t);
          }
          _setPrivate(e, t) {
            const i = this._privateSettings[e];
            (this._privateSettings[e] = t),
              i !== t &&
                (this._setPrivateRaw(e, i, t), this._markDirtyPrivateKey(e));
          }
          _stopAnimationPrivate(e) {
            const t = this._animatingPrivateSettings[e];
            t &&
              (--this._playingAnimations,
              t.stop(),
              delete this._animatingPrivateSettings[e]);
          }
          setPrivate(e, t) {
            return this._setPrivate(e, t), this._stopAnimationPrivate(e), t;
          }
          removePrivate(e) {
            e in this._privateSettings &&
              ((this._prevPrivateSettings[e] = this._privateSettings[e]),
              delete this._privateSettings[e],
              this._markDirtyPrivateKey(e)),
              this._stopAnimationPrivate(e);
          }
          setAll(e) {
            a.each(e, (e, t) => {
              this.set(e, t);
            });
          }
          animate(e) {
            const t = e.key,
              i = e.to,
              r = e.duration || 0,
              n = e.loops || 1,
              s = void 0 === e.from ? this.get(t) : e.from,
              a = void 0 === e.easing ? o.linear : e.easing;
            if (0 === r) this.set(t, i);
            else {
              if (void 0 !== s && s !== i) {
                this.set(t, s);
                const e = (this._animatingSettings[t] = new f(
                  this,
                  s,
                  i,
                  r,
                  a,
                  n,
                  this._animationTime()
                ));
                return ++this._playingAnimations, this._startAnimation(), e;
              }
              this.set(t, i);
            }
            const l = new f(this, s, i, r, a, n, null);
            return l.stop(), l;
          }
          animatePrivate(e) {
            const t = e.key,
              i = e.to,
              r = e.duration || 0,
              n = e.loops || 1,
              s = void 0 === e.from ? this.getPrivate(t) : e.from,
              a = void 0 === e.easing ? o.linear : e.easing;
            if (0 === r) this.setPrivate(t, i);
            else {
              if (void 0 !== s && s !== i) {
                this.setPrivate(t, s);
                const e = (this._animatingPrivateSettings[t] = new f(
                  this,
                  s,
                  i,
                  r,
                  a,
                  n,
                  this._animationTime()
                ));
                return ++this._playingAnimations, this._startAnimation(), e;
              }
              this.setPrivate(t, i);
            }
            const l = new f(this, s, i, r, a, n, null);
            return l.stop(), l;
          }
          _dispose() {}
          isDisposed() {
            return this._disposed;
          }
          dispose() {
            this._disposed || ((this._disposed = !0), this._dispose());
          }
        }
        class b extends m {
          constructor(e, t, i, r = []) {
            if (
              (super(t),
              Object.defineProperty(this, "_root", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_user_id", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "states", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new h(this),
              }),
              Object.defineProperty(this, "adapters", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new p(this),
              }),
              Object.defineProperty(this, "events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this._createEvents(),
              }),
              Object.defineProperty(this, "_userPrivateProperties", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_dirty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_dirtyPrivate", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_template", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_templates", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_internalTemplates", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_defaultThemes", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_templateDisposers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_disposers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "_runSetup", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "_disposerProperties", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              !i)
            )
              throw new Error(
                "You cannot use `new Class()`, instead use `Class.new()`"
              );
            (this._root = e),
              (this._internalTemplates = r),
              t.id && this._registerId(t.id);
          }
          static new(e, t, i) {
            const r = new this(e, t, !0);
            return (r._template = i), r._afterNew(), r;
          }
          static _new(e, t, i = []) {
            const r = new this(e, t, !0, i);
            return r._afterNew(), r;
          }
          _afterNew() {
            this._checkDirty();
            let e = !1;
            const t = this._template;
            t && ((e = !0), t._setObjectTemplate(this)),
              c.each(this._internalTemplates, (t) => {
                (e = !0), t._setObjectTemplate(this);
              }),
              e && this._applyTemplates(!1),
              this.states.create("default", {}),
              this._setDefaults();
          }
          _afterNewApplyThemes() {
            this._checkDirty();
            const e = this._template;
            e && e._setObjectTemplate(this),
              c.each(this._internalTemplates, (e) => {
                e._setObjectTemplate(this);
              }),
              this.states.create("default", {}),
              this._setDefaults(),
              this._applyThemes();
          }
          _createEvents() {
            return new n.p();
          }
          get classNames() {
            return this.constructor.classNames;
          }
          get className() {
            return this.constructor.className;
          }
          _setDefaults() {}
          _setDefault(e, t) {
            e in this._settings || super.set(e, t);
          }
          _setRawDefault(e, t) {
            e in this._settings || super.setRaw(e, t);
          }
          _clearDirty() {
            a.keys(this._dirty).forEach((e) => {
              this._dirty[e] = !1;
            }),
              a.keys(this._dirtyPrivate).forEach((e) => {
                this._dirtyPrivate[e] = !1;
              });
          }
          isDirty(e) {
            return !!this._dirty[e];
          }
          isPrivateDirty(e) {
            return !!this._dirtyPrivate[e];
          }
          _markDirtyKey(e) {
            (this._dirty[e] = !0), super._markDirtyKey(e);
          }
          _markDirtyPrivateKey(e) {
            (this._dirtyPrivate[e] = !0), super._markDirtyKey(e);
          }
          isType(e) {
            return -1 !== this.classNames.indexOf(e);
          }
          _pushPropertyDisposer(e, t) {
            let i = this._disposerProperties[e];
            return (
              void 0 === i && (i = this._disposerProperties[e] = []),
              i.push(t),
              t
            );
          }
          _disposeProperty(e) {
            const t = this._disposerProperties[e];
            void 0 !== t &&
              (c.each(t, (e) => {
                e.dispose();
              }),
              delete this._disposerProperties[e]);
          }
          set template(e) {
            const t = this._template;
            t !== e &&
              ((this._template = e),
              t && t._removeObjectTemplate(this),
              e && e._setObjectTemplate(this),
              this._applyTemplates());
          }
          get template() {
            return this._template;
          }
          markDirty() {
            this._root._addDirtyEntity(this);
          }
          _startAnimation() {
            this._root._addAnimation(this);
          }
          _animationTime() {
            return this._root.animationTime;
          }
          _applyState(e) {}
          _applyStateAnimated(e, t) {}
          get(e, t) {
            const i = this.adapters.fold(e, this._settings[e]);
            return void 0 !== i ? i : t;
          }
          isUserSetting(e) {
            return this._userProperties[e] || !1;
          }
          set(e, t) {
            return (this._userProperties[e] = !0), super.set(e, t);
          }
          setRaw(e, t) {
            (this._userProperties[e] = !0), super.setRaw(e, t);
          }
          _setSoft(e, t) {
            return this._userProperties[e] ? t : super.set(e, t);
          }
          remove(e) {
            delete this._userProperties[e], this._removeTemplateProperty(e);
          }
          setPrivate(e, t) {
            return (
              (this._userPrivateProperties[e] = !0), super.setPrivate(e, t)
            );
          }
          setPrivateRaw(e, t) {
            (this._userPrivateProperties[e] = !0), super.setPrivateRaw(e, t);
          }
          removePrivate(e) {
            delete this._userPrivateProperties[e],
              this._removeTemplatePrivateProperty(e);
          }
          _setTemplateProperty(e, t, i) {
            this._userProperties[t] ||
              (e === this._findTemplateByKey(t) && super.set(t, i));
          }
          _setTemplatePrivateProperty(e, t, i) {
            this._userPrivateProperties[t] ||
              (e === this._findTemplateByPrivateKey(t) &&
                super.setPrivate(t, i));
          }
          _removeTemplateProperty(e) {
            if (!this._userProperties[e]) {
              const t = this._findTemplateByKey(e);
              t ? super.set(e, t._settings[e]) : super.remove(e);
            }
          }
          _removeTemplatePrivateProperty(e) {
            if (!this._userPrivateProperties[e]) {
              const t = this._findTemplateByPrivateKey(e);
              t
                ? super.setPrivate(e, t._privateSettings[e])
                : super.removePrivate(e);
            }
          }
          _walkParents(e) {
            e(this._root._rootContainer), e(this);
          }
          _applyStateByKey(e) {
            const t = this.states.create(e, {}),
              i = {};
            this._eachTemplate((r) => {
              const n = r.states.lookup(e);
              n && n._apply(t, i);
            }),
              a.each(t._settings, (e) => {
                i[e] || t._userSettings[e] || t.remove(e);
              });
          }
          _applyTemplate(e, t) {
            this._templateDisposers.push(e._apply(this, t)),
              a.each(e._settings, (e, i) => {
                t.settings[e] ||
                  this._userProperties[e] ||
                  ((t.settings[e] = !0), super.set(e, i));
              }),
              a.each(e._privateSettings, (e, i) => {
                t.privateSettings[e] ||
                  this._userPrivateProperties[e] ||
                  ((t.privateSettings[e] = !0), super.setPrivate(e, i));
              }),
              this._runSetup &&
                e.setup &&
                ((this._runSetup = !1), e.setup(this));
          }
          _findStaticTemplate(e) {
            if (this._template && e(this._template)) return this._template;
          }
          _eachTemplate(e) {
            this._findStaticTemplate((t) => (e(t), !1)),
              c.eachReverse(this._internalTemplates, e),
              c.each(this._templates, e);
          }
          _applyTemplates(e = !0) {
            e && this._disposeTemplates();
            const t = { settings: {}, privateSettings: {}, states: {} };
            this._eachTemplate((e) => {
              this._applyTemplate(e, t);
            }),
              e &&
                (a.each(this._settings, (e) => {
                  this._userProperties[e] || t.settings[e] || super.remove(e);
                }),
                a.each(this._privateSettings, (e) => {
                  this._userPrivateProperties[e] ||
                    t.privateSettings[e] ||
                    super.removePrivate(e);
                }));
          }
          _findTemplate(e) {
            const t = this._findStaticTemplate(e);
            if (void 0 === t) {
              const t = c.findReverse(this._internalTemplates, e);
              return void 0 === t ? c.find(this._templates, e) : t;
            }
            return t;
          }
          _findTemplateByKey(e) {
            return this._findTemplate((t) => e in t._settings);
          }
          _findTemplateByPrivateKey(e) {
            return this._findTemplate((t) => e in t._privateSettings);
          }
          _disposeTemplates() {
            c.each(this._templateDisposers, (e) => {
              e.dispose();
            }),
              (this._templateDisposers.length = 0);
          }
          _removeTemplates() {
            c.each(this._templates, (e) => {
              e._removeObjectTemplate(this);
            }),
              (this._templates.length = 0);
          }
          _applyThemes() {
            let e = !1;
            const t = [];
            let i = [];
            const r = new Set(),
              n = this.get("themeTagsSelf");
            return (
              n &&
                c.each(n, (e) => {
                  r.add(e);
                }),
              this._walkParents((n) => {
                n === this._root._rootContainer && (e = !0),
                  n._defaultThemes.length > 0 && t.push(n._defaultThemes);
                const s = n.get("themes");
                s && i.push(s);
                const a = n.get("themeTags");
                a &&
                  c.each(a, (e) => {
                    r.add(e);
                  });
              }),
              (i = t.concat(i)),
              this._removeTemplates(),
              e &&
                c.eachReverse(this.classNames, (e) => {
                  const t = [];
                  c.each(i, (i) => {
                    c.each(i, (i) => {
                      const n = i._lookupRules(e);
                      n &&
                        c.eachReverse(n, (e) => {
                          if (e.tags.every((e) => r.has(e))) {
                            const i = c.getFirstSortedIndex(t, (t) => {
                              const i = d.qu(e.tags.length, t.tags.length);
                              return 0 === i ? d.wq(e.tags, t.tags, d.qu) : i;
                            });
                            t.splice(i.index, 0, e);
                          }
                        });
                    });
                  }),
                    c.each(t, (e) => {
                      this._templates.push(e.template),
                        e.template._setObjectTemplate(this);
                    });
                }),
              this._applyTemplates(),
              e && (this._runSetup = !1),
              e
            );
          }
          _changed() {}
          _beforeChanged() {
            if (this.isDirty("id")) {
              const e = this.get("id");
              e && this._registerId(e);
              const t = this._prevSettings.id;
              t && delete u.i_.entitiesById[t];
            }
          }
          _registerId(e) {
            if (u.i_.entitiesById[e] && u.i_.entitiesById[e] !== this)
              throw new Error('An entity with id "' + e + '" already exists.');
            u.i_.entitiesById[e] = this;
          }
          _afterChanged() {}
          addDisposer(e) {
            return this._disposers.push(e), e;
          }
          _dispose() {
            super._dispose();
            const e = this._template;
            e && e._removeObjectTemplate(this),
              c.each(this._internalTemplates, (e) => {
                e._removeObjectTemplate(this);
              }),
              this._removeTemplates(),
              this._disposeTemplates(),
              this.events.dispose(),
              this._disposers.forEach((e) => {
                e.dispose();
              }),
              a.each(this._disposerProperties, (e, t) => {
                c.each(t, (e) => {
                  e.dispose();
                });
              });
            const t = this.get("id");
            t && delete u.i_.entitiesById[t];
          }
          setTimeout(e, t) {
            const i = setTimeout(() => {
                this.removeDispose(n), e();
              }, t),
              n = new r.ku(() => {
                clearTimeout(i);
              });
            return this._disposers.push(n), n;
          }
          removeDispose(e) {
            if (!this.isDisposed()) {
              let t = c.indexOf(this._disposers, e);
              t > -1 && this._disposers.splice(t, 1);
            }
            e.dispose();
          }
          hasTag(e) {
            return -1 !== c.indexOf(this.get("themeTags", []), e);
          }
          addTag(e) {
            if (!this.hasTag(e)) {
              const t = this.get("themeTags", []);
              t.push(e), this.set("themeTags", t);
            }
          }
          removeTag(e) {
            if (this.hasTag(e)) {
              const t = this.get("themeTags", []);
              c.remove(t, e), this.set("themeTags", t);
            }
          }
          _t(e, t, ...i) {
            return this._root.language.translate(e, t, ...i);
          }
          get root() {
            return this._root;
          }
        }
        Object.defineProperty(b, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Entity",
        }),
          Object.defineProperty(b, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ["Entity"],
          });
      },
      9770: function (e, t, i) {
        "use strict";
        i.d(t, {
          p: function () {
            return a;
          },
        });
        var r = i(7449),
          n = i(5071),
          s = i(5040);
        class a {
          constructor() {
            Object.defineProperty(this, "_listeners", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_killed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_disabled", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_iterating", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_enabled", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_disposed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._listeners = []),
              (this._killed = []),
              (this._disabled = {}),
              (this._iterating = 0),
              (this._enabled = !0),
              (this._disposed = !1);
          }
          isDisposed() {
            return this._disposed;
          }
          dispose() {
            if (!this._disposed) {
              this._disposed = !0;
              const e = this._listeners;
              (this._iterating = 1),
                (this._listeners = null),
                (this._disabled = null);
              try {
                n.each(e, (e) => {
                  e.disposer.dispose();
                });
              } finally {
                (this._killed = null), (this._iterating = null);
              }
            }
          }
          hasListeners() {
            return 0 !== this._listeners.length;
          }
          hasListenersByType(e) {
            return n.any(
              this._listeners,
              (t) => (null === t.type || t.type === e) && !t.killed
            );
          }
          enable() {
            this._enabled = !0;
          }
          disable() {
            this._enabled = !1;
          }
          enableType(e) {
            delete this._disabled[e];
          }
          disableType(e, t = 1 / 0) {
            this._disabled[e] = t;
          }
          _removeListener(e) {
            if (0 === this._iterating) {
              const t = this._listeners.indexOf(e);
              if (-1 === t)
                throw new Error("Invalid state: could not remove listener");
              this._listeners.splice(t, 1);
            } else this._killed.push(e);
          }
          _removeExistingListener(e, t, i, r) {
            if (this._disposed) throw new Error("EventDispatcher is disposed");
            this._eachListener((n) => {
              n.once !== e ||
                n.type !== t ||
                (void 0 !== i && n.callback !== i) ||
                n.context !== r ||
                n.disposer.dispose();
            });
          }
          isEnabled(e) {
            if (this._disposed) throw new Error("EventDispatcher is disposed");
            return (
              this._enabled &&
              this._listeners.length > 0 &&
              this.hasListenersByType(e) &&
              void 0 === this._disabled[e]
            );
          }
          removeType(e) {
            if (this._disposed) throw new Error("EventDispatcher is disposed");
            this._eachListener((t) => {
              t.type === e && t.disposer.dispose();
            });
          }
          has(e, t, i) {
            return (
              -1 !==
              n.findIndex(
                this._listeners,
                (r) =>
                  !0 !== r.once &&
                  r.type === e &&
                  (void 0 === t || r.callback === t) &&
                  r.context === i
              )
            );
          }
          _shouldDispatch(e) {
            if (this._disposed) throw new Error("EventDispatcher is disposed");
            const t = this._disabled[e];
            return s.isNumber(t)
              ? (t <= 1 ? delete this._disabled[e] : --this._disabled[e], !1)
              : this._enabled;
          }
          _eachListener(e) {
            ++this._iterating;
            try {
              n.each(this._listeners, e);
            } finally {
              --this._iterating,
                0 === this._iterating &&
                  0 !== this._killed.length &&
                  (n.each(this._killed, (e) => {
                    this._removeListener(e);
                  }),
                  (this._killed.length = 0));
            }
          }
          dispatch(e, t) {
            this._shouldDispatch(e) &&
              this._eachListener((i) => {
                i.killed ||
                  (null !== i.type && i.type !== e) ||
                  i.dispatch(e, t);
              });
          }
          _on(e, t, i, n, s, a) {
            if (this._disposed) throw new Error("EventDispatcher is disposed");
            this._removeExistingListener(e, t, i, n);
            const o = {
              type: t,
              callback: i,
              context: n,
              shouldClone: s,
              dispatch: a,
              killed: !1,
              once: e,
              disposer: new r.ku(() => {
                (o.killed = !0), this._removeListener(o);
              }),
            };
            return this._listeners.push(o), o;
          }
          onAll(e, t, i = !0) {
            return this._on(!1, null, e, t, i, (i, r) => e.call(t, r)).disposer;
          }
          on(e, t, i, r = !0) {
            return this._on(!1, e, t, i, r, (e, r) => t.call(i, r)).disposer;
          }
          once(e, t, i, r = !0) {
            const n = this._on(!0, e, t, i, r, (e, r) => {
              n.disposer.dispose(), t.call(i, r);
            });
            return n.disposer;
          }
          off(e, t, i) {
            this._removeExistingListener(!1, e, t, i);
          }
          copyFrom(e) {
            if (this._disposed) throw new Error("EventDispatcher is disposed");
            if (e === this)
              throw new Error(
                "Cannot copyFrom the same TargetedEventDispatcher"
              );
            const t = [];
            return (
              n.each(e._listeners, (e) => {
                !e.killed &&
                  e.shouldClone &&
                  (null === e.type
                    ? t.push(this.onAll(e.callback, e.context))
                    : e.once
                    ? t.push(this.once(e.type, e.callback, e.context))
                    : t.push(this.on(e.type, e.callback, e.context)));
              }),
              new r.FV(t)
            );
          }
        }
      },
      9821: function (e, t, i) {
        "use strict";
        i.d(t, {
          v: function () {
            return n;
          },
        });
        var r = i(6331);
        class n extends r.JH {}
        Object.defineProperty(n, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InterfaceColors",
        }),
          Object.defineProperty(n, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([n.className]),
          });
      },
      7144: function (e, t, i) {
        "use strict";
        i.d(t, {
          aV: function () {
            return a;
          },
          dn: function () {
            return o;
          },
          o: function () {
            return l;
          },
        });
        var r = i(9770),
          n = i(5071);
        function s(e, t) {
          if (!(e >= 0 && e < t)) throw new Error("Index out of bounds: " + e);
        }
        class a {
          constructor(e = []) {
            Object.defineProperty(this, "_values", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new r.p(),
              }),
              (this._values = e);
          }
          get values() {
            return this._values;
          }
          contains(e) {
            return -1 !== this._values.indexOf(e);
          }
          removeValue(e) {
            let t = 0,
              i = this._values.length;
            for (; t < i; )
              this._values[t] === e ? (this.removeIndex(t), --i) : ++t;
          }
          indexOf(e) {
            return n.indexOf(this._values, e);
          }
          get length() {
            return this._values.length;
          }
          hasIndex(e) {
            return e >= 0 && e < this._values.length;
          }
          getIndex(e) {
            return this._values[e];
          }
          _onPush(e) {
            this.events.isEnabled("push") &&
              this.events.dispatch("push", {
                type: "push",
                target: this,
                newValue: e,
              });
          }
          _onInsertIndex(e, t) {
            this.events.isEnabled("insertIndex") &&
              this.events.dispatch("insertIndex", {
                type: "insertIndex",
                target: this,
                index: e,
                newValue: t,
              });
          }
          _onSetIndex(e, t, i) {
            this.events.isEnabled("setIndex") &&
              this.events.dispatch("setIndex", {
                type: "setIndex",
                target: this,
                index: e,
                oldValue: t,
                newValue: i,
              });
          }
          _onRemoveIndex(e, t) {
            this.events.isEnabled("removeIndex") &&
              this.events.dispatch("removeIndex", {
                type: "removeIndex",
                target: this,
                index: e,
                oldValue: t,
              });
          }
          _onMoveIndex(e, t, i) {
            this.events.isEnabled("moveIndex") &&
              this.events.dispatch("moveIndex", {
                type: "moveIndex",
                target: this,
                oldIndex: e,
                newIndex: t,
                value: i,
              });
          }
          _onClear(e) {
            this.events.isEnabled("clear") &&
              this.events.dispatch("clear", {
                type: "clear",
                target: this,
                oldValues: e,
              });
          }
          setIndex(e, t) {
            s(e, this._values.length);
            const i = this._values[e];
            return (
              i !== t && ((this._values[e] = t), this._onSetIndex(e, i, t)), i
            );
          }
          insertIndex(e, t) {
            return (
              s(e, this._values.length + 1),
              n.insertIndex(this._values, e, t),
              this._onInsertIndex(e, t),
              t
            );
          }
          swap(e, t) {
            const i = this._values.length;
            if ((s(e, i), s(t, i), e !== t)) {
              const i = this._values[e],
                r = this._values[t];
              (this._values[e] = r),
                this._onSetIndex(e, i, r),
                (this._values[t] = i),
                this._onSetIndex(t, r, i);
            }
          }
          removeIndex(e) {
            s(e, this._values.length);
            const t = this._values[e];
            return n.removeIndex(this._values, e), this._onRemoveIndex(e, t), t;
          }
          moveValue(e, t) {
            let i = this.indexOf(e);
            if (-1 !== i)
              if ((n.removeIndex(this._values, i), null == t)) {
                const t = this._values.length;
                this._values.push(e), this._onMoveIndex(i, t, e);
              } else
                n.insertIndex(this._values, t, e), this._onMoveIndex(i, t, e);
            else
              null == t
                ? (this._values.push(e), this._onPush(e))
                : (n.insertIndex(this._values, t, e),
                  this._onInsertIndex(t, e));
            return e;
          }
          push(e) {
            return this._values.push(e), this._onPush(e), e;
          }
          unshift(e) {
            return this.insertIndex(0, e), e;
          }
          pushAll(e) {
            n.each(e, (e) => {
              this.push(e);
            });
          }
          copyFrom(e) {
            this.pushAll(e._values);
          }
          pop() {
            return this._values.length - 1 < 0
              ? void 0
              : this.removeIndex(this._values.length - 1);
          }
          shift() {
            return this._values.length ? this.removeIndex(0) : void 0;
          }
          setAll(e) {
            const t = this._values;
            (this._values = []),
              this._onClear(t),
              n.each(e, (e) => {
                this._values.push(e), this._onPush(e);
              });
          }
          clear() {
            this.setAll([]);
          }
          *[Symbol.iterator]() {
            const e = this._values.length;
            for (let t = 0; t < e; ++t) yield this._values[t];
          }
          each(e) {
            n.each(this._values, e);
          }
          eachReverse(e) {
            n.eachReverse(this._values, e);
          }
        }
        class o extends a {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "autoDispose", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0,
              }),
              Object.defineProperty(this, "_disposed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _onSetIndex(e, t, i) {
            this.autoDispose && t.dispose(), super._onSetIndex(e, t, i);
          }
          _onRemoveIndex(e, t) {
            this.autoDispose && t.dispose(), super._onRemoveIndex(e, t);
          }
          _onClear(e) {
            this.autoDispose &&
              n.each(e, (e) => {
                e.dispose();
              }),
              super._onClear(e);
          }
          isDisposed() {
            return this._disposed;
          }
          dispose() {
            this._disposed ||
              ((this._disposed = !0),
              this.autoDispose &&
                n.each(this._values, (e) => {
                  e.dispose();
                }));
          }
        }
        class l extends o {
          constructor(e, t) {
            super(),
              Object.defineProperty(this, "template", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "make", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.template = e),
              (this.make = t);
          }
        }
      },
      751: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            DEGREES: function () {
              return o;
            },
            HALFPI: function () {
              return s;
            },
            PI: function () {
              return n;
            },
            RADIANS: function () {
              return a;
            },
            boundsOverlap: function () {
              return k;
            },
            ceil: function () {
              return h;
            },
            closest: function () {
              return D;
            },
            cos: function () {
              return g;
            },
            fitAngleToRange: function () {
              return y;
            },
            fitToRange: function () {
              return d;
            },
            getAngle: function () {
              return x;
            },
            getArcBounds: function () {
              return b;
            },
            getArcPoint: function () {
              return _;
            },
            getCubicControlPointA: function () {
              return u;
            },
            getCubicControlPointB: function () {
              return c;
            },
            getPointOnLine: function () {
              return P;
            },
            getPointOnQuadraticCurve: function () {
              return O;
            },
            inBounds: function () {
              return w;
            },
            mergeBounds: function () {
              return v;
            },
            normalizeAngle: function () {
              return m;
            },
            round: function () {
              return l;
            },
            sin: function () {
              return p;
            },
            tan: function () {
              return f;
            },
          });
        var r = i(5040);
        const n = Math.PI,
          s = n / 2,
          a = n / 180,
          o = 180 / n;
        function l(e, t, i) {
          if (!(0, r.isNumber)(t) || t <= 0) {
            let t = Math.round(e);
            return i && t - e == 0.5 && t--, t;
          }
          {
            let i = Math.pow(10, t);
            return Math.round(e * i) / i;
          }
        }
        function h(e, t) {
          if (!(0, r.isNumber)(t) || t <= 0) return Math.ceil(e);
          {
            let i = Math.pow(10, t);
            return Math.ceil(e * i) / i;
          }
        }
        function u(e, t, i, r, n) {
          return {
            x: (-e.x + t.x / r + i.x) * r,
            y: (-e.y + t.y / n + i.y) * n,
          };
        }
        function c(e, t, i, r, n) {
          return { x: (e.x + t.x / r - i.x) * r, y: (e.y + t.y / n - i.y) * n };
        }
        function d(e, t, i) {
          return Math.min(Math.max(e, t), i);
        }
        function p(e) {
          return Math.sin(a * e);
        }
        function f(e) {
          return Math.tan(a * e);
        }
        function g(e) {
          return Math.cos(a * e);
        }
        function m(e) {
          return (e %= 360) < 0 && (e += 360), e;
        }
        function b(e, t, i, r, n) {
          let s = Number.MAX_VALUE,
            a = Number.MAX_VALUE,
            o = -Number.MAX_VALUE,
            l = -Number.MAX_VALUE,
            h = [];
          h.push(_(n, i)), h.push(_(n, r));
          let u = Math.min(90 * Math.floor(i / 90), 90 * Math.floor(r / 90)),
            c = Math.max(90 * Math.ceil(i / 90), 90 * Math.ceil(r / 90));
          for (let e = u; e <= c; e += 90) e >= i && e <= r && h.push(_(n, e));
          for (let e = 0; e < h.length; e++) {
            let t = h[e];
            t.x < s && (s = t.x),
              t.y < a && (a = t.y),
              t.x > o && (o = t.x),
              t.y > l && (l = t.y);
          }
          return { left: e + s, top: t + a, right: e + o, bottom: t + l };
        }
        function _(e, t) {
          return { x: e * g(t), y: e * p(t) };
        }
        function v(e) {
          const t = e.length;
          if (t > 0) {
            let i = e[0],
              r = i.left,
              n = i.top,
              s = i.right,
              a = i.bottom;
            if (t > 1)
              for (let o = 1; o < t; o++)
                (i = e[o]),
                  (r = Math.min(i.left, r)),
                  (s = Math.max(i.right, s)),
                  (n = Math.min(i.top, n)),
                  (a = Math.max(i.bottom, a));
            return { left: r, right: s, top: n, bottom: a };
          }
          return { left: 0, right: 0, top: 0, bottom: 0 };
        }
        function y(e, t, i) {
          if (t > i) {
            let e = t;
            (t = i), (i = e);
          }
          e = m(e);
          let r = (t - m(t)) / 360;
          return (
            e < t && (e += 360 * (r + 1)),
            e > i &&
              (e - 360 > t
                ? (e -= 360)
                : (e = e < t + (i - t) / 2 + 180 ? i : t)),
            e < t && (e = e > t + (i - t) / 2 - 180 ? t : i),
            e
          );
        }
        function w(e, t) {
          return (
            e.x >= t.left && e.y >= t.top && e.x <= t.right && e.y <= t.bottom
          );
        }
        function x(e, t) {
          t || (t = { x: 2 * e.x, y: 2 * e.y });
          let i = t.x - e.x,
            r = t.y - e.y,
            n = Math.atan2(r, i) * o;
          return n < 0 && (n += 360), m(n);
        }
        function O(e, t, i, r) {
          return {
            x: (1 - r) * (1 - r) * e.x + 2 * (1 - r) * r * i.x + r * r * t.x,
            y: (1 - r) * (1 - r) * e.y + 2 * (1 - r) * r * i.y + r * r * t.y,
          };
        }
        function P(e, t, i) {
          return { x: e.x + (t.x - e.x) * i, y: e.y + (t.y - e.y) * i };
        }
        function D(e, t) {
          return e.reduce(function (e, i) {
            return Math.abs(i - t) < Math.abs(e - t) ? i : e;
          });
        }
        function k(e, t) {
          return !(
            e.bottom < t.top ||
            t.bottom < e.top ||
            e.right < t.left ||
            t.right < e.left
          );
        }
      },
      8219: function (e, t, i) {
        "use strict";
        i.d(t, {
          u: function () {
            return o;
          },
        });
        var r = i(6331),
          n = i(7652),
          s = i(7449);
        let a;
        class o extends r.JH {
          _afterNew() {
            super._afterNewApplyThemes(),
              this._setRawDefault("deactivateRoot", !0),
              (function (e, t, i) {
                const r = t.interfaceColors,
                  o = r.get("secondaryButton").toCSS(),
                  l = r.get("text").toCSS(),
                  h = r.get("alternativeBackground").toCSS(0.45);
                if (!a) {
                  const t = new s.FV([
                    new n.StyleRule(e, ".am5-modal", {
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      "z-index": "100000",
                      top: "0",
                      left: "0",
                    }),
                    new n.StyleRule(e, ".am5-modal-curtain", {
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      background: r.get("background").toCSS(0.5),
                      "z-index": "100",
                    }),
                    new n.StyleRule(e, ".am5-modal-wrapper", {
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      "text-align": "center",
                      "white-space": "nowrap",
                      background: r.get("background").toCSS(0.5),
                      "z-index": "101",
                    }),
                    new n.StyleRule(e, ".am5-modal-wrapper:before", {
                      content: "''",
                      display: "inline-block",
                      height: "100%",
                      "vertical-align": "middle",
                      "margin-right": "-0.25em",
                    }),
                    new n.StyleRule(e, ".am5-modal-content", {
                      display: "inline-block",
                      padding: "1.2em",
                      "vertical-align": "middle",
                      "text-align": "left",
                      "white-space": "normal",
                      background: r.get("background").toCSS(),
                      "border-radius": "4px",
                      "-webkit-box-shadow": "0px 0px 36px 0px " + h,
                      "box-shadow": "0px 0px 36px 0px " + h,
                      color: l,
                    }),
                    new n.StyleRule(e, ".am5-modal-content h1", {
                      "font-size": "1em",
                      margin: "0 0 0.5em 0",
                    }),
                    new n.StyleRule(e, ".am5-modal-table", {
                      display: "table",
                      margin: "1em 0",
                    }),
                    new n.StyleRule(e, ".am5-modal-table-row", {
                      display: "table-row",
                    }),
                    new n.StyleRule(e, ".am5-modal-table-heading", {
                      display: "table-heading",
                      padding: "3px 10px 3px 0",
                    }),
                    new n.StyleRule(e, ".am5-modal-table-cell", {
                      display: "table-cell",
                      padding: "3px 0 3px 0",
                    }),
                    new n.StyleRule(e, ".am5-modal-table-cell > *", {
                      "vertical-align": "middle",
                    }),
                    new n.StyleRule(
                      e,
                      ".am5-modal-content input[type=text], .am5-modal-content input[type=number], .am5-modal-content select",
                      {
                        border: "1px solid " + o,
                        "border-radius": "4px",
                        padding: "3px 5px",
                        margin: "2px",
                      }
                    ),
                    new n.StyleRule(e, ".am5-modal-input-narrow", {
                      width: "50px",
                    }),
                    new n.StyleRule(e, ".am5-modal-button", {
                      "font-weight": "400",
                      color: r.get("secondaryButtonText").toCSS(),
                      "line-height": "1.5",
                      "text-align": "center",
                      "text-decoration": "none",
                      "vertical-align": "middle",
                      cursor: "pointer",
                      padding: "0.2em 0.8em",
                      "font-size": "1em",
                      "border-radius": "0.25em",
                      margin: "0 0.25em 0 0",
                      border:
                        "1px solid " + r.get("secondaryButtonStroke").toCSS(),
                      background: r.get("secondaryButton").toCSS(),
                    }),
                    new n.StyleRule(e, ".am5-modal-button:hover", {
                      background: r.get("secondaryButtonHover").toCSS(),
                    }),
                    new n.StyleRule(e, ".am5-modal-button.am5-modal-primary", {
                      color: r.get("primaryButtonText").toCSS(),
                      border:
                        "1px solid " + r.get("primaryButtonStroke").toCSS(),
                      background: r.get("primaryButton").toCSS(),
                    }),
                    new n.StyleRule(
                      e,
                      ".am5-modal-button.am5-modal-primary:hover",
                      { background: r.get("primaryButtonHover").toCSS() }
                    ),
                  ]);
                  a = new s.DM(() => {
                    (a = void 0), t.dispose();
                  });
                }
                a.increment();
              })(n.getShadowRoot(this._root.dom), this._root);
            const e = document.createElement("div");
            (e.className = "am5-modal"),
              (e.style.display = "none"),
              this.root._inner.appendChild(e),
              this.setPrivate("container", e);
            const t = document.createElement("div");
            (t.className = "am5-modal-curtain"),
              e.appendChild(t),
              this.setPrivate("curtain", t),
              this._disposers.push(
                n.addEventListener(t, "click", () => {
                  this.cancel();
                })
              );
            const i = document.createElement("div");
            (i.className = "am5-modal-wrapper"),
              e.appendChild(i),
              this.setPrivate("wrapper", i);
            const r = document.createElement("div");
            (r.className = "am5-modal-content"),
              i.appendChild(r),
              this.setPrivate("content", r);
            const o = this.get("content");
            o && (r.innerHTML = o),
              n.supports("keyboardevents") &&
                this._disposers.push(
                  n.addEventListener(document, "keydown", (e) => {
                    this.isOpen() && 27 == e.keyCode && this.cancel();
                  })
                );
          }
          _beforeChanged() {
            super._beforeChanged(),
              this.isDirty("content") &&
                (this.getPrivate("content").innerHTML = this.get(
                  "content",
                  ""
                ));
          }
          isOpen() {
            return "none" != this.getPrivate("container").style.display;
          }
          open() {
            (this.getPrivate("container").style.display = "block"),
              this.get("deactivateRoot") &&
                this.setTimeout(() => {
                  this._root._renderer.interactionsEnabled = !1;
                }, 10),
              this.events.dispatch("opened", { type: "opened", target: this });
          }
          close() {
            (this.getPrivate("container").style.display = "none"),
              this.get("deactivateRoot") &&
                (this._root._renderer.interactionsEnabled = !0),
              this.events.dispatch("closed", { type: "closed", target: this });
          }
          cancel() {
            (this.getPrivate("container").style.display = "none"),
              this.get("deactivateRoot") &&
                (this._root._renderer.interactionsEnabled = !0),
              this.events.dispatch("cancelled", {
                type: "cancelled",
                target: this,
              });
          }
          dispose() {
            super.dispose();
            const e = this.getPrivate("container");
            e.parentElement && e.parentElement.removeChild(e);
          }
        }
        Object.defineProperty(o, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Modal",
        }),
          Object.defineProperty(o, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([o.className]),
          });
      },
      780: function (e, t, i) {
        "use strict";
        i.d(t, {
          e: function () {
            return l;
          },
        });
        var r = i(6331),
          n = i(7255),
          s = i(256),
          a = i(7652),
          o = i(5040);
        class l extends r.JH {
          _setDefaults() {
            this._setDefault("negativeBase", 0),
              this._setDefault("numberFormat", "#,###.#####"),
              this._setDefault("smallNumberThreshold", 1);
            const e = "_big_number_suffix_",
              t = "_small_number_suffix_",
              i = "_byte_suffix_";
            this._setDefault("bigNumberPrefixes", [
              { number: 1e3, suffix: this._t(e + "3") },
              { number: 1e6, suffix: this._t(e + "6") },
              { number: 1e9, suffix: this._t(e + "9") },
              { number: 1e12, suffix: this._t(e + "12") },
              { number: 1e15, suffix: this._t(e + "15") },
              { number: 1e18, suffix: this._t(e + "18") },
              { number: 1e21, suffix: this._t(e + "21") },
              { number: 1e24, suffix: this._t(e + "24") },
            ]),
              this._setDefault("smallNumberPrefixes", [
                { number: 1e-24, suffix: this._t(t + "24") },
                { number: 1e-21, suffix: this._t(t + "21") },
                { number: 1e-18, suffix: this._t(t + "18") },
                { number: 1e-15, suffix: this._t(t + "15") },
                { number: 1e-12, suffix: this._t(t + "12") },
                { number: 1e-9, suffix: this._t(t + "9") },
                { number: 1e-6, suffix: this._t(t + "6") },
                { number: 0.001, suffix: this._t(t + "3") },
              ]),
              this._setDefault("bytePrefixes", [
                { number: 1, suffix: this._t(i + "B") },
                { number: 1024, suffix: this._t(i + "KB") },
                { number: 1048576, suffix: this._t(i + "MB") },
                { number: 1073741824, suffix: this._t(i + "GB") },
                { number: 1099511627776, suffix: this._t(i + "TB") },
                { number: 0x4000000000000, suffix: this._t(i + "PB") },
              ]),
              super._setDefaults();
          }
          _beforeChanged() {
            super._beforeChanged();
          }
          format(e, t, i) {
            let r;
            (null == t || (o.isString(t) && "number" === t.toLowerCase())) &&
              (t = this.get("numberFormat", ""));
            let n = Number(e);
            if (o.isObject(t))
              try {
                return this.get("intlLocales")
                  ? new Intl.NumberFormat(this.get("intlLocales"), t).format(n)
                  : new Intl.NumberFormat(void 0, t).format(n);
              } catch (e) {
                return "Invalid";
              }
            else {
              t = a.cleanFormat(t);
              let e,
                l = this.parseFormat(t, this._root.language);
              (e =
                n > this.get("negativeBase")
                  ? l.positive
                  : n < this.get("negativeBase")
                  ? l.negative
                  : l.zero),
                null == i ||
                  e.mod ||
                  ((e = s.copy(e)), (e.decimals.active = 0 == n ? 0 : i)),
                (r = e.template
                  .split(o.PLACEHOLDER)
                  .join(this.applyFormat(n, e)));
            }
            return !0 === this.get("forceLTR") && (r = "‎" + r), r;
          }
          parseFormat(e, t) {
            const i = t.translateEmpty("_thousandSeparator"),
              r = t.translateEmpty("_decimalSeparator");
            let a = {
                positive: {
                  thousands: {
                    active: -1,
                    passive: -1,
                    interval: -1,
                    separator: i,
                  },
                  decimals: { active: -1, passive: -1, separator: r },
                  template: "",
                  source: "",
                  parsed: !1,
                },
                negative: {
                  thousands: {
                    active: -1,
                    passive: -1,
                    interval: -1,
                    separator: i,
                  },
                  decimals: { active: -1, passive: -1, separator: r },
                  template: "",
                  source: "",
                  parsed: !1,
                },
                zero: {
                  thousands: {
                    active: -1,
                    passive: -1,
                    interval: -1,
                    separator: i,
                  },
                  decimals: { active: -1, passive: -1, separator: r },
                  template: "",
                  source: "",
                  parsed: !1,
                },
              },
              l = (e = e.replace("||", o.PLACEHOLDER2)).split("|");
            return (
              (a.positive.source = l[0]),
              void 0 === l[2] ? (a.zero = a.positive) : (a.zero.source = l[2]),
              void 0 === l[1]
                ? (a.negative = a.positive)
                : (a.negative.source = l[1]),
              s.each(a, (e, t) => {
                if (t.parsed) return;
                let i = t.source;
                "number" === i.toLowerCase() &&
                  (i = this.get("numberFormat", "#,###.#####"));
                let r = n.V.chunk(i, !0);
                for (let e = 0; e < r.length; e++) {
                  let i = r[e];
                  if (
                    ((i.text = i.text.replace(o.PLACEHOLDER2, "|")),
                    "value" === i.type)
                  ) {
                    let e = i.text.match(
                      /[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/
                    );
                    if (e)
                      if (null === e || "" === e[0]) t.template += i.text;
                      else {
                        let r = e[0].match(
                          /[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/
                        );
                        r &&
                          ((t.mod = r[0].toLowerCase()),
                          (t.modSpacing = !!e[0].match(
                            /[ ]{1}[abespABESP%‰!]{1}$/
                          )));
                        let n = e[0].split(".");
                        if ("" === n[0]);
                        else {
                          (t.thousands.active = (
                            n[0].match(/0/g) || []
                          ).length),
                            (t.thousands.passive =
                              (n[0].match(/\#/g) || []).length +
                              t.thousands.active);
                          let e = n[0].split(",");
                          1 === e.length ||
                            ((t.thousands.interval = (e.pop() || "").length),
                            0 === t.thousands.interval &&
                              (t.thousands.interval = -1));
                        }
                        void 0 === n[1] ||
                          ((t.decimals.active = (
                            n[1].match(/0/g) || []
                          ).length),
                          (t.decimals.passive =
                            (n[1].match(/\#/g) || []).length +
                            t.decimals.active)),
                          (t.template += i.text
                            .split(e[0])
                            .join(o.PLACEHOLDER));
                      }
                  } else t.template += i.text;
                }
                t.parsed = !0;
              }),
              a
            );
          }
          applyFormat(e, t) {
            let i = e < 0;
            e = Math.abs(e);
            let r = "",
              n = "",
              s = t.mod ? t.mod.split("") : [];
            if (-1 !== s.indexOf("b")) {
              let i = this.applyPrefix(
                e,
                this.get("bytePrefixes"),
                -1 !== s.indexOf("!")
              );
              (e = i[0]), (r = i[1]), (n = i[2]), t.modSpacing && (n = " " + n);
            } else if (-1 !== s.indexOf("a")) {
              let i = this.applyPrefix(
                e,
                e < this.get("smallNumberThreshold")
                  ? this.get("smallNumberPrefixes")
                  : this.get("bigNumberPrefixes"),
                -1 !== s.indexOf("!")
              );
              (e = i[0]), (r = i[1]), (n = i[2]), t.modSpacing && (n = " " + n);
            } else if (-1 !== s.indexOf("p")) {
              let t = Math.min(e.toString().length + 2, 21);
              (e = parseFloat(e.toPrecision(t))),
                (r = this._root.language.translate("_percentPrefix")),
                (n = this._root.language.translate("_percentSuffix")),
                "" == r && "" == n && (n = "%");
            } else if (-1 !== s.indexOf("%")) {
              let t = Math.min(e.toString().length + 2, 21);
              (e *= 100), (e = parseFloat(e.toPrecision(t))), (n = "%");
            } else if (-1 !== s.indexOf("‰")) {
              let t = Math.min(e.toString().length + 3, 21);
              (e *= 1e3), (e = parseFloat(e.toPrecision(t))), (n = "‰");
            }
            if (-1 !== s.indexOf("e")) {
              let i;
              (i =
                t.decimals.passive >= 0
                  ? e.toExponential(t.decimals.passive).split("e")
                  : e.toExponential().split("e")),
                (e = Number(i[0])),
                (n = "e" + i[1]),
                t.modSpacing && (n = " " + n);
            } else if (0 === t.decimals.passive) e = Math.round(e);
            else if (t.decimals.passive > 0) {
              let i = Math.pow(10, t.decimals.passive);
              e = Math.round(e * i) / i;
            }
            let a = "",
              l = o.numberToString(e).split("."),
              h = l[0];
            if (
              (h.length < t.thousands.active &&
                (h = Array(t.thousands.active - h.length + 1).join("0") + h),
              t.thousands.interval > 0)
            ) {
              let e = [],
                i = h.split("").reverse().join("");
              for (let r = 0, n = h.length; r <= n; r += t.thousands.interval) {
                let n = i
                  .substr(r, t.thousands.interval)
                  .split("")
                  .reverse()
                  .join("");
                "" !== n && e.unshift(n);
              }
              h = e.join(t.thousands.separator);
            }
            (a += h), 1 === l.length && l.push("");
            let u = l[1];
            return (
              u.length < t.decimals.active &&
                (u += Array(t.decimals.active - u.length + 1).join("0")),
              "" !== u && (a += t.decimals.separator + u),
              "" === a && (a = "0"),
              0 !== e && i && -1 === s.indexOf("s") && (a = "-" + a),
              r && (a = r + a),
              n && (a += n),
              a
            );
          }
          applyPrefix(e, t, i = !1) {
            let r = e,
              n = "",
              s = "",
              a = !1,
              o = 1;
            for (let i = 0, l = t.length; i < l; i++)
              t[i].number <= e &&
                (0 === t[i].number
                  ? (r = 0)
                  : ((r = e / t[i].number), (o = t[i].number)),
                (n = t[i].prefix),
                (s = t[i].suffix),
                (a = !0));
            return (
              !a &&
                i &&
                t.length &&
                0 != e &&
                ((r = e / t[0].number),
                (n = t[0].prefix),
                (s = t[0].suffix),
                (a = !0)),
              a &&
                (r = parseFloat(
                  r.toPrecision(
                    Math.min(
                      o.toString().length +
                        Math.floor(r)
                          .toString()
                          .replace(/[^0-9]*/g, "").length,
                      21
                    )
                  )
                )),
              [r, n, s]
            );
          }
          escape(e) {
            return e.replace("||", o.PLACEHOLDER2);
          }
          unescape(e) {
            return e.replace(o.PLACEHOLDER2, "|");
          }
        }
      },
      256: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            copy: function () {
              return a;
            },
            each: function () {
              return o;
            },
            eachContinue: function () {
              return l;
            },
            eachOrdered: function () {
              return h;
            },
            hasKey: function () {
              return u;
            },
            keys: function () {
              return n;
            },
            keysOrdered: function () {
              return s;
            },
            softCopyProperties: function () {
              return c;
            },
          });
        var r = i(5071);
        function n(e) {
          return Object.keys(e);
        }
        function s(e, t) {
          return n(e).sort(t);
        }
        function a(e) {
          return Object.assign({}, e);
        }
        function o(e, t) {
          n(e).forEach((i) => {
            t(i, e[i]);
          });
        }
        function l(e, t) {
          for (let i in e) if (u(e, i) && !t(i, e[i])) break;
        }
        function h(e, t, i) {
          r.each(s(e, i), (i) => {
            t(i, e[i]);
          });
        }
        function u(e, t) {
          return {}.hasOwnProperty.call(e, t);
        }
        function c(e, t) {
          return (
            o(e, (e, i) => {
              null != i && null == t[e] && (t[e] = i);
            }),
            t
          );
        }
      },
      3540: function (e, t, i) {
        "use strict";
        function r(e, t) {
          return e === t ? 0 : e < t ? -1 : 1;
        }
        function n(e, t, i) {
          const n = e.length,
            s = t.length,
            a = Math.min(n, s);
          for (let r = 0; r < a; ++r) {
            const n = i(e[r], t[r]);
            if (0 !== n) return n;
          }
          return r(n, s);
        }
        function s(e, t) {
          return e === t ? 0 : e < t ? -1 : 1;
        }
        i.d(t, {
          HO: function () {
            return s;
          },
          qu: function () {
            return r;
          },
          wq: function () {
            return n;
          },
        });
      },
      6245: function (e, t, i) {
        "use strict";
        i.d(t, {
          AQ: function () {
            return a;
          },
          CI: function () {
            return o;
          },
          aQ: function () {
            return n;
          },
          gG: function () {
            return r;
          },
          p0: function () {
            return s;
          },
        });
        class r {
          constructor(e) {
            Object.defineProperty(this, "_value", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              (this._value = e);
          }
          get value() {
            return this._value / 100;
          }
          get percent() {
            return this._value;
          }
          toString() {
            return this._value + "%";
          }
          interpolate(e, t) {
            return e + this.value * (t - e);
          }
          static normalize(e, t, i) {
            return e instanceof r
              ? e
              : new r(
                  t === i
                    ? 0
                    : 100 * Math.min(Math.max((1 / (i - t)) * (e - t), 0), 1)
                );
          }
        }
        function n(e) {
          return new r(e);
        }
        const s = n(0),
          a = n(100),
          o = n(50);
      },
      2132: function (e, t, i) {
        "use strict";
        i.d(t, {
          q: function () {
            return o;
          },
        });
        var r = i(5040),
          n = i(7652),
          s = i(4596),
          a = i(7255);
        function o(e, t) {
          if (null != t) {
            t = "" + t;
            let i,
              r = (t = a.V.escape(t)).match(/\{([^}]+)\}/g);
            if (r)
              for (i = 0; i < r.length; i++) {
                let n = l(e, r[i].replace(/\{([^}]+)\}/, "$1"), "");
                null == n && (n = ""), (t = t.split(r[i]).join(n));
              }
            t = a.V.unescape(t);
          } else t = "";
          return t;
        }
        function l(e, t, i) {
          let s;
          const a = e.dataItem;
          let o,
            h = [],
            c = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
          for (; (o = c.exec(t)), null !== o; )
            if (o[3]) {
              h.push({ prop: o[3] });
              const t = e.getDateFormatter().get("dateFields", []),
                i = e.getNumberFormatter().get("numericFields", []),
                r = e.getDurationFormatter().get("durationFields", []);
              -1 !== t.indexOf(o[3])
                ? h.push({ method: "formatDate", params: [] })
                : -1 !== i.indexOf(o[3])
                ? h.push({ method: "formatNumber", params: [] })
                : -1 !== r.indexOf(o[3]) &&
                  h.push({ method: "formatDuration", params: [] });
            } else {
              let e = [];
              if ("" != n.trim(o[2])) {
                let t,
                  i = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
                for (; (t = i.exec(o[2])), null !== t; )
                  e.push(t[1] || t[2] || t[3]);
              }
              h.push({ method: o[1], params: e });
            }
          if (a) {
            (s = u(e, h, a._settings)),
              (null == s || r.isObject(s)) && (s = u(e, h, a));
            let n = a.dataContext;
            null == s &&
              n &&
              ((s = u(e, h, n)),
              null == s && (s = u(e, [{ prop: t }], n)),
              null == s && n.dataContext && (s = u(e, h, n.dataContext))),
              null == s &&
                a.component &&
                a.component.dataItem !== a &&
                (s = l(a.component, t, i));
          }
          return (
            null == s && (s = u(e, h, e)),
            null == s && e.parent && (s = l(e.parent, t, i)),
            s
          );
        }
        function h(e, t) {
          const i = e.getPrivate("customData");
          if (r.isObject(i)) return i[t];
        }
        function u(e, t, i, a) {
          let o = i,
            l = !1;
          for (let n = 0, u = t.length; n < u; n++) {
            let u = t[n];
            if (u.prop) {
              if (o instanceof s.j) {
                let e = o.get(u.prop);
                null == e && (e = o.getPrivate(u.prop)),
                  null == e && (e = h(o, u.prop)),
                  null == e && (e = o[u.prop]),
                  (o = e);
              } else if (o.get) {
                let e = o.get(u.prop);
                null == e && (e = o[u.prop]), (o = e);
              } else o = o[u.prop];
              if (null == o) return;
            } else
              switch (u.method) {
                case "formatNumber":
                  let t = r.toNumber(o);
                  null != t &&
                    ((o = e
                      .getNumberFormatter()
                      .format(t, a || u.params[0] || void 0)),
                    (l = !0));
                  break;
                case "formatDate":
                  let n = r.toDate(o);
                  if (!r.isDate(n) || r.isNaN(n.getTime())) return;
                  null != n &&
                    ((o = e
                      .getDateFormatter()
                      .format(n, a || u.params[0] || void 0)),
                    (l = !0));
                  break;
                case "formatDuration":
                  let s = r.toNumber(o);
                  null != s &&
                    ((o = e
                      .getDurationFormatter()
                      .format(
                        s,
                        a || u.params[0] || void 0,
                        u.params[1] || void 0
                      )),
                    (l = !0));
                  break;
                case "urlEncode":
                case "encodeURIComponent":
                  o = encodeURIComponent(o);
                  break;
                default:
                  o[u.method] && o[u.method].apply(i, u.params);
              }
          }
          if (!l) {
            let t = [{ method: "", params: a }];
            if (null == a)
              r.isNumber(o)
                ? ((t[0].method = "formatNumber"), (t[0].params = ""))
                : r.isDate(o) &&
                  ((t[0].method = "formatDate"), (t[0].params = ""));
            else {
              let e = n.getFormat(a);
              "number" === e
                ? (t[0].method = "formatNumber")
                : "date" === e
                ? (t[0].method = "formatDate")
                : "duration" === e && (t[0].method = "formatDuration");
            }
            t[0].method && (o = u(e, t, o));
          }
          return o;
        }
      },
      5769: function (e, t, i) {
        "use strict";
        i.d(t, {
          YS: function () {
            return u;
          },
        });
        var r = i(9770),
          n = i(7449),
          s = i(5071),
          a = i(256);
        class o {
          constructor(e, t, i) {
            Object.defineProperty(this, "_settings", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_template", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._name = e),
              (this._template = t),
              (this._settings = i);
          }
          get(e, t) {
            const i = this._settings[e];
            return void 0 !== i ? i : t;
          }
          set(e, t) {
            (this._settings[e] = t), this._template._stateChanged(this._name);
          }
          remove(e) {
            delete this._settings[e], this._template._stateChanged(this._name);
          }
          setAll(e) {
            a.keys(e).forEach((t) => {
              this._settings[t] = e[t];
            }),
              this._template._stateChanged(this._name);
          }
          _apply(e, t) {
            a.each(this._settings, (i, r) => {
              t[i] || e._userSettings[i] || ((t[i] = !0), e.setRaw(i, r));
            });
          }
        }
        class l {
          constructor(e) {
            Object.defineProperty(this, "_template", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "_states", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              (this._template = e);
          }
          lookup(e) {
            return this._states[e];
          }
          create(e, t) {
            const i = this._states[e];
            if (i) return i.setAll(t), i;
            {
              const i = new o(e, this._template, t);
              return (this._states[e] = i), this._template._stateChanged(e), i;
            }
          }
          remove(e) {
            delete this._states[e], this._template._stateChanged(e);
          }
          _apply(e, t) {
            a.each(this._states, (i, r) => {
              let n = t.states[i];
              null == n && (n = t.states[i] = {});
              const s = e.states.create(i, {});
              r._apply(s, n);
            });
          }
        }
        class h {
          constructor() {
            Object.defineProperty(this, "_callbacks", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            });
          }
          add(e, t) {
            let i = this._callbacks[e];
            return (
              void 0 === i && (i = this._callbacks[e] = []),
              i.push(t),
              new n.ku(() => {
                s.removeFirst(i, t),
                  0 === i.length && delete this._callbacks[e];
              })
            );
          }
          remove(e) {
            void 0 !== this._callbacks[e] && delete this._callbacks[e];
          }
          _apply(e) {
            const t = [];
            return (
              a.each(this._callbacks, (i, r) => {
                s.each(r, (r) => {
                  t.push(e.adapters.add(i, r));
                });
              }),
              new n.FV(t)
            );
          }
        }
        class u {
          constructor(e, t) {
            if (
              (Object.defineProperty(this, "_settings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_privateSettings", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_settingEvents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_privateSettingEvents", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_entities", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              }),
              Object.defineProperty(this, "states", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new l(this),
              }),
              Object.defineProperty(this, "adapters", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new h(),
              }),
              Object.defineProperty(this, "events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new r.p(),
              }),
              Object.defineProperty(this, "setup", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              !t)
            )
              throw new Error(
                "You cannot use `new Class()`, instead use `Class.new()`"
              );
            this._settings = e;
          }
          static new(e) {
            return new u(e, !0);
          }
          get entities() {
            return this._entities;
          }
          get(e, t) {
            const i = this._settings[e];
            return void 0 !== i ? i : t;
          }
          setRaw(e, t) {
            this._settings[e] = t;
          }
          set(e, t) {
            this._settings[e] !== t &&
              (this.setRaw(e, t),
              this._entities.forEach((i) => {
                i._setTemplateProperty(this, e, t);
              }));
          }
          remove(e) {
            e in this._settings &&
              (delete this._settings[e],
              this._entities.forEach((t) => {
                t._removeTemplateProperty(e);
              }));
          }
          removeAll() {
            a.each(this._settings, (e, t) => {
              this.remove(e);
            });
          }
          getPrivate(e, t) {
            const i = this._privateSettings[e];
            return void 0 !== i ? i : t;
          }
          setPrivateRaw(e, t) {
            return (this._privateSettings[e] = t), t;
          }
          setPrivate(e, t) {
            return (
              this._privateSettings[e] !== t &&
                (this.setPrivateRaw(e, t),
                this._entities.forEach((i) => {
                  i._setTemplatePrivateProperty(this, e, t);
                })),
              t
            );
          }
          removePrivate(e) {
            e in this._privateSettings &&
              (delete this._privateSettings[e],
              this._entities.forEach((t) => {
                t._removeTemplatePrivateProperty(e);
              }));
          }
          setAll(e) {
            a.each(e, (e, t) => {
              this.set(e, t);
            });
          }
          on(e, t) {
            let i = this._settingEvents[e];
            return (
              void 0 === i && (i = this._settingEvents[e] = []),
              i.push(t),
              new n.ku(() => {
                s.removeFirst(i, t),
                  0 === i.length && delete this._settingEvents[e];
              })
            );
          }
          onPrivate(e, t) {
            let i = this._privateSettingEvents[e];
            return (
              void 0 === i && (i = this._privateSettingEvents[e] = []),
              i.push(t),
              new n.ku(() => {
                s.removeFirst(i, t),
                  0 === i.length && delete this._privateSettingEvents[e];
              })
            );
          }
          _apply(e, t) {
            const i = [];
            return (
              a.each(this._settingEvents, (t, r) => {
                s.each(r, (r) => {
                  i.push(e.on(t, r));
                });
              }),
              a.each(this._privateSettingEvents, (t, r) => {
                s.each(r, (r) => {
                  i.push(e.onPrivate(t, r));
                });
              }),
              this.states._apply(e, t),
              i.push(this.adapters._apply(e)),
              i.push(e.events.copyFrom(this.events)),
              new n.FV(i)
            );
          }
          _setObjectTemplate(e) {
            this._entities.push(e);
          }
          _removeObjectTemplate(e) {
            s.remove(this._entities, e);
          }
          _stateChanged(e) {
            this._entities.forEach((t) => {
              t._applyStateByKey(e);
            });
          }
        }
      },
      7255: function (e, t, i) {
        "use strict";
        i.d(t, {
          V: function () {
            return s;
          },
        });
        var r = i(1112),
          n = i(5040);
        class s {
          static escape(e) {
            return e
              .replace(/\[\[/g, this.prefix + "1")
              .replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2")
              .replace(/\]\]/g, this.prefix + "2")
              .replace(/\{\{/g, this.prefix + "3")
              .replace(/\}\}/g, this.prefix + "4")
              .replace(/\'\'/g, this.prefix + "5");
          }
          static unescape(e) {
            return e
              .replace(new RegExp(this.prefix + "1", "g"), "[[")
              .replace(new RegExp(this.prefix + "2", "g"), "]]")
              .replace(new RegExp(this.prefix + "3", "g"), "{{")
              .replace(new RegExp(this.prefix + "4", "g"), "}}")
              .replace(new RegExp(this.prefix + "5", "g"), "''");
          }
          static cleanUp(e) {
            return e
              .replace(/\[\[/g, "[")
              .replace(/\]\]/g, "]")
              .replace(/\{\{/g, "{")
              .replace(/\}\}/g, "}")
              .replace(/\'\'/g, "'");
          }
          static chunk(e, t = !1, i = !1) {
            let r = [];
            e = this.escape(e);
            let s = t ? e.split("'") : [e];
            for (let e = 0; e < s.length; e++) {
              let t = s[e];
              if ("" !== t)
                if (e % 2 == 0) {
                  (t = t.replace(/\]\[/g, "]" + n.PLACEHOLDER + "[")),
                    (t = t.replace(/\[\]/g, "[ ]"));
                  let e = t.split(/[\[\]]+/);
                  for (let t = 0; t < e.length; t++) {
                    let s = this.cleanUp(this.unescape(e[t]));
                    s !== n.PLACEHOLDER &&
                      "" !== s &&
                      (t % 2 == 0
                        ? r.push({ type: "value", text: s })
                        : r.push({
                            type: i ? "value" : "format",
                            text: "[" + s + "]",
                          }));
                  }
                } else {
                  let e = t.split(/[\[\]]+/);
                  for (let t = 0; t < e.length; t++) {
                    let i = this.cleanUp(this.unescape(e[t]));
                    "" !== i &&
                      (t % 2 == 0
                        ? r.push({ type: "text", text: i })
                        : this.isImage(i)
                        ? r.push({ type: "image", text: "[" + i + "]" })
                        : r.push({ type: "format", text: "[" + i + "]" }));
                  }
                }
            }
            return r;
          }
          static isImage(e) {
            return !!e.match(/img[ ]?:/);
          }
          static getTextStyle(e) {
            let t = {};
            if ("" == e || "[ ]" == e) return {};
            const i = e.match(/('[^']*')|("[^"]*")/gi);
            if (i)
              for (let t = 0; t < i.length; t++)
                e = e.replace(
                  i[t],
                  i[t].replace(/['"]*/g, "").replace(/[ ]+/g, "+")
                );
            let n = e.match(
              /([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi
            );
            if (!n) return {};
            for (let e = 0; e < n.length; e++)
              if (
                n[e].match(
                  /^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i
                )
              )
                t.fontWeight = n[e];
              else if (n[e].match(/^(underline|line-through)$/i))
                t.textDecoration = n[e];
              else if ("/" == n[e]);
              else if (n[e].match(/:/)) {
                const i = n[e].replace("+", " ").split(/:[ ]*/);
                t[i[0]] = i[1];
              } else t.fill = r.Il.fromString(n[e]);
            return t;
          }
        }
        Object.defineProperty(s, "prefix", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "__amcharts__",
        });
      },
      1926: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            add: function () {
              return g;
            },
            checkChange: function () {
              return f;
            },
            chooseInterval: function () {
              return b;
            },
            copy: function () {
              return p;
            },
            getDateIntervalDuration: function () {
              return u;
            },
            getDuration: function () {
              return l;
            },
            getIntervalDuration: function () {
              return h;
            },
            getNextUnit: function () {
              return o;
            },
            getTime: function () {
              return d;
            },
            getUnitValue: function () {
              return _;
            },
            now: function () {
              return c;
            },
            round: function () {
              return m;
            },
            sleep: function () {
              return s;
            },
            timeUnitDurations: function () {
              return a;
            },
          });
        var r = i(5040),
          n = i(7652);
        function s(e) {
          return new Promise((t, i) => {
            setTimeout(t, e);
          });
        }
        let a = {
          millisecond: 1,
          second: 1e3,
          minute: 6e4,
          hour: 36e5,
          day: 864e5,
          week: 6048e5,
          month: 2629742400,
          year: 31536e6,
        };
        function o(e) {
          switch (e) {
            case "year":
              return;
            case "month":
              return "year";
            case "week":
            case "day":
              return "month";
            case "hour":
              return "day";
            case "minute":
              return "hour";
            case "second":
              return "minute";
            case "millisecond":
              return "second";
          }
        }
        function l(e, t) {
          return null == t && (t = 1), a[e] * t;
        }
        function h(e) {
          return e ? a[e.timeUnit] * e.count : 0;
        }
        function u(e, t, i, r, n) {
          const s = e.timeUnit,
            o = e.count;
          if (
            "hour" == s ||
            "minute" == s ||
            "second" == s ||
            "millisecond" == s
          )
            return a[e.timeUnit] * e.count;
          {
            const e = m(new Date(t.getTime()), s, o, i, r, void 0, n).getTime();
            let a = e + o * l(s) * 1.05;
            return (a = m(new Date(a), s, 1, i, r, void 0, n).getTime()), a - e;
          }
        }
        function c() {
          return new Date();
        }
        function d() {
          return c().getTime();
        }
        function p(e) {
          return new Date(e.getTime());
        }
        function f(e, t, i, r, n) {
          if (t - e > l(i, 1.2)) return !0;
          let s = new Date(e),
            a = new Date(t);
          n && ((s = n.convertLocal(s)), (a = n.convertLocal(a)));
          let h = 0,
            u = 0;
          r ||
            "millisecond" == i ||
            ((h = s.getTimezoneOffset()),
            s.setUTCMinutes(s.getUTCMinutes() - h),
            (u = a.getTimezoneOffset()),
            a.setUTCMinutes(a.getUTCMinutes() - u));
          let c = !1;
          switch (i) {
            case "year":
              s.getUTCFullYear() != a.getUTCFullYear() && (c = !0);
              break;
            case "month":
              (s.getUTCFullYear() != a.getUTCFullYear() ||
                s.getUTCMonth() != a.getUTCMonth()) &&
                (c = !0);
              break;
            case "day":
              (s.getUTCMonth() != a.getUTCMonth() ||
                s.getUTCDate() != a.getUTCDate()) &&
                (c = !0);
              break;
            case "hour":
              s.getUTCHours() != a.getUTCHours() && (c = !0);
              break;
            case "minute":
              s.getUTCMinutes() != a.getUTCMinutes() && (c = !0);
              break;
            case "second":
              s.getUTCSeconds() != a.getUTCSeconds() && (c = !0);
              break;
            case "millisecond":
              s.getTime() != a.getTime() && (c = !0);
          }
          if (c) return c;
          let d = o(i);
          return !!d && f(e, t, d, r, n);
        }
        function g(e, t, i, r, n) {
          let s = 0;
          switch (
            (r ||
              "millisecond" == t ||
              ((s = e.getTimezoneOffset()),
              n && (s -= n.offsetUTC(e)),
              e.setUTCMinutes(e.getUTCMinutes() - s)),
            t)
          ) {
            case "day":
              let t = e.getUTCDate();
              e.setUTCDate(t + i);
              break;
            case "second":
              let r = e.getUTCSeconds();
              e.setUTCSeconds(r + i);
              break;
            case "millisecond":
              let n = e.getUTCMilliseconds();
              e.setUTCMilliseconds(n + i);
              break;
            case "hour":
              let s = e.getUTCHours();
              e.setUTCHours(s + i);
              break;
            case "minute":
              let a = e.getUTCMinutes();
              e.setUTCMinutes(a + i);
              break;
            case "year":
              let o = e.getUTCFullYear();
              e.setUTCFullYear(o + i);
              break;
            case "month":
              let l = e.getUTCMonth();
              e.setUTCMonth(l + i);
              break;
            case "week":
              let h = e.getUTCDate();
              e.setUTCDate(h + 7 * i);
          }
          if (
            !r &&
            "millisecond" != t &&
            (e.setUTCMinutes(e.getUTCMinutes() + s),
            "day" == t || "week" == t || "month" == t || "year" == t)
          ) {
            let t = e.getTimezoneOffset();
            if ((n && (t += n.offsetUTC(e)), t != s)) {
              let i = t - s;
              e.setUTCMinutes(e.getUTCMinutes() + i),
                e.getTimezoneOffset() != t &&
                  e.setUTCMinutes(e.getUTCMinutes() - i);
            }
          }
          return e;
        }
        function m(e, t, i, n, s, a, o) {
          if (!o || s) {
            let o = 0;
            switch (
              (s ||
                "millisecond" == t ||
                ((o = e.getTimezoneOffset()),
                e.setUTCMinutes(e.getUTCMinutes() - o)),
              t)
            ) {
              case "day":
                let t = e.getUTCDate();
                if (i > 1) {
                  if (a) {
                    a = m(a, "day", 1);
                    let t = e.getTime() - a.getTime(),
                      r = Math.floor(t / l("day") / i),
                      n = l("day", r * i);
                    e.setTime(a.getTime() + n - o * l("minute"));
                  }
                } else e.setUTCDate(t);
                e.setUTCHours(0, 0, 0, 0);
                break;
              case "second":
                let s = e.getUTCSeconds();
                i > 1 && (s = Math.floor(s / i) * i), e.setUTCSeconds(s, 0);
                break;
              case "millisecond":
                if (1 == i) return e;
                let h = e.getUTCMilliseconds();
                (h = Math.floor(h / i) * i), e.setUTCMilliseconds(h);
                break;
              case "hour":
                let u = e.getUTCHours();
                i > 1 && (u = Math.floor(u / i) * i), e.setUTCHours(u, 0, 0, 0);
                break;
              case "minute":
                let c = e.getUTCMinutes();
                i > 1 && (c = Math.floor(c / i) * i), e.setUTCMinutes(c, 0, 0);
                break;
              case "month":
                let d = e.getUTCMonth();
                i > 1 && (d = Math.floor(d / i) * i),
                  e.setUTCMonth(d, 1),
                  e.setUTCHours(0, 0, 0, 0);
                break;
              case "year":
                let p = e.getUTCFullYear();
                i > 1 && (p = Math.floor(p / i) * i),
                  e.setUTCFullYear(p, 0, 1),
                  e.setUTCHours(0, 0, 0, 0);
                break;
              case "week":
                let f = e.getUTCDate(),
                  g = e.getUTCDay();
                r.isNumber(n) || (n = 1),
                  (f = g >= n ? f - g + n : f - (7 + g) + n),
                  e.setUTCDate(f),
                  e.setUTCHours(0, 0, 0, 0);
            }
            if (
              !s &&
              "millisecond" != t &&
              (e.setUTCMinutes(e.getUTCMinutes() + o),
              "day" == t || "week" == t || "month" == t || "year" == t)
            ) {
              let t = e.getTimezoneOffset();
              if (t != o) {
                let i = t - o;
                e.setUTCMinutes(e.getUTCMinutes() + i);
              }
            }
            return e;
          }
          {
            if (isNaN(e.getTime())) return e;
            let h = o.offsetUTC(e),
              u = e.getTimezoneOffset(),
              c = o.parseDate(e),
              d = c.year,
              p = c.month,
              f = c.day,
              g = c.hour,
              b = c.minute,
              _ = c.second,
              v = c.millisecond,
              y = c.weekday;
            switch (t) {
              case "day":
                if (i > 1 && a) {
                  a = m(a, "day", 1, n, s, void 0, o);
                  let t = e.getTime() - a.getTime(),
                    r = Math.floor(t / l("day") / i),
                    h = l("day", r * i);
                  e.setTime(a.getTime() + h),
                    (c = o.parseDate(e)),
                    (d = c.year),
                    (p = c.month),
                    (f = c.day);
                }
                (g = 0), (b = h - u), (_ = 0), (v = 0);
                break;
              case "second":
                (b += h - u), i > 1 && (_ = Math.floor(_ / i) * i), (v = 0);
                break;
              case "millisecond":
                (b += h - u), i > 1 && (v = Math.floor(v / i) * i);
                break;
              case "hour":
                i > 1 && (g = Math.floor(g / i) * i),
                  (b = h - u),
                  (_ = 0),
                  (v = 0);
                break;
              case "minute":
                i > 1 && (b = Math.floor(b / i) * i),
                  (b += h - u),
                  (_ = 0),
                  (v = 0);
                break;
              case "month":
                i > 1 && (p = Math.floor(p / i) * i),
                  (f = 1),
                  (g = 0),
                  (b = h - u),
                  (_ = 0),
                  (v = 0);
                break;
              case "year":
                i > 1 && (d = Math.floor(d / i) * i),
                  (p = 0),
                  (f = 1),
                  (g = 0),
                  (b = h - u),
                  (_ = 0),
                  (v = 0);
                break;
              case "week":
                r.isNumber(n) || (n = 1),
                  (f = y >= n ? f - y + n : f - (7 + y) + n),
                  (g = 0),
                  (b = h - u),
                  (_ = 0),
                  (v = 0);
            }
            let w = (e = new Date(d, p, f, g, b, _, v)).getTimezoneOffset();
            return w != u && e.setTime(e.getTime() + 6e4 * (u - w)), e;
          }
        }
        function b(e, t, i, r) {
          let n = h(r[e]),
            s = r.length - 1;
          if (e >= s) return Object.assign({}, r[s]);
          let a = Math.ceil(t / n);
          return t < n && e > 0
            ? Object.assign({}, r[e - 1])
            : a <= i
            ? Object.assign({}, r[e])
            : e + 1 < r.length
            ? b(e + 1, t, i, r)
            : Object.assign({}, r[e]);
        }
        function _(e, t) {
          switch (t) {
            case "day":
              return e.getDate();
            case "second":
              return e.getSeconds();
            case "millisecond":
              return e.getMilliseconds();
            case "hour":
              return e.getHours();
            case "minute":
              return e.getMinutes();
            case "month":
              return e.getMonth();
            case "year":
              return e.getFullYear();
            case "week":
              return n.getWeek(e);
          }
        }
      },
      462: function (e, t, i) {
        "use strict";
        function r(e, t) {
          let i = 0,
            r = 0,
            n = 1,
            s = 0,
            a = 0,
            o = 0,
            l = 0,
            h = 0;
          return (
            e.formatToParts(t).forEach((e) => {
              switch (e.type) {
                case "year":
                  i = +e.value;
                  break;
                case "month":
                  r = +e.value - 1;
                  break;
                case "day":
                  n = +e.value;
                  break;
                case "hour":
                  s = +e.value;
                  break;
                case "minute":
                  a = +e.value;
                  break;
                case "second":
                  o = +e.value;
                  break;
                case "fractionalSecond":
                  l = +e.value;
                  break;
                case "weekday":
                  switch (e.value) {
                    case "Sun":
                      h = 0;
                      break;
                    case "Mon":
                      h = 1;
                      break;
                    case "Tue":
                      h = 2;
                      break;
                    case "Wed":
                      h = 3;
                      break;
                    case "Thu":
                      h = 4;
                      break;
                    case "Fri":
                      h = 5;
                      break;
                    case "Sat":
                      h = 6;
                  }
              }
            }),
            24 === s && (s = 0),
            {
              year: i,
              month: r,
              day: n,
              hour: s,
              minute: a,
              second: o,
              millisecond: l,
              weekday: h,
            }
          );
        }
        function n(e, t) {
          const {
            year: i,
            month: n,
            day: s,
            hour: a,
            minute: o,
            second: l,
            millisecond: h,
          } = r(e, t);
          return Date.UTC(i, n, s, a, o, l, h);
        }
        i.d(t, {
          r: function () {
            return s;
          },
        });
        class s {
          constructor(e, t) {
            if (
              (Object.defineProperty(this, "_utc", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_dtf", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              !t)
            )
              throw new Error(
                "You cannot use `new Class()`, instead use `Class.new()`"
              );
            (this.name = e),
              (this._utc = new Intl.DateTimeFormat("UTC", {
                hour12: !1,
                timeZone: "UTC",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                weekday: "short",
                fractionalSecondDigits: 3,
              })),
              (this._dtf = new Intl.DateTimeFormat("UTC", {
                hour12: !1,
                timeZone: e,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                weekday: "short",
                fractionalSecondDigits: 3,
              }));
          }
          static new(e) {
            return new this(e, !0);
          }
          convertLocal(e) {
            const t = this.offsetUTC(e),
              i = e.getTimezoneOffset(),
              r = new Date(e);
            r.setUTCMinutes(r.getUTCMinutes() - (t - i));
            const n = r.getTimezoneOffset();
            return i != n && r.setUTCMinutes(r.getUTCMinutes() + n - i), r;
          }
          offsetUTC(e) {
            return (n(this._utc, e) - n(this._dtf, e)) / 6e4;
          }
          parseDate(e) {
            return r(this._dtf, e);
          }
        }
      },
      5040: function (e, t, i) {
        "use strict";
        function r(e) {
          return Number(e) !== e;
        }
        function n(e) {
          return {}.toString.call(e);
        }
        function s(e, t = "Assertion failed") {
          if (!e) throw new Error(t);
        }
        function a(e) {
          if (null != e && !d(e)) {
            let t = Number(e);
            return r(t) && c(e) && "" != e
              ? a(e.replace(/[^0-9.\-]+/g, ""))
              : t;
          }
          return e;
        }
        function o(e) {
          if (u(e)) return new Date(e);
          if (d(e)) return new Date(e);
          {
            let t = Number(e);
            return d(t) ? new Date(t) : new Date(e);
          }
        }
        function l(e) {
          if (r(e)) return "NaN";
          if (e === 1 / 0) return "Infinity";
          if (e === -1 / 0) return "-Infinity";
          if (0 === e && 1 / e == -1 / 0) return "-0";
          let t = e < 0;
          e = Math.abs(e);
          let i,
            n = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + e),
            s = n[1],
            a = n[2] || "";
          if (void 0 === n[3]) i = "" === a ? s : s + "." + a;
          else {
            let t = +n[3];
            if (e < 1) i = "0." + h("0", t - 1) + s + a;
            else {
              let e = t - a.length;
              i =
                0 === e
                  ? s + a
                  : e < 0
                  ? s + a.slice(0, e) + "." + a.slice(e)
                  : s + a + h("0", e);
            }
          }
          return t ? "-" + i : i;
        }
        function h(e, t) {
          return new Array(t + 1).join(e);
        }
        function u(e) {
          return "[object Date]" === n(e);
        }
        function c(e) {
          return "string" == typeof e;
        }
        function d(e) {
          return "number" == typeof e && Number(e) == e;
        }
        function p(e) {
          return "object" == typeof e && null !== e;
        }
        function f(e) {
          return Array.isArray(e);
        }
        i.r(t),
          i.d(t, {
            PLACEHOLDER: function () {
              return g;
            },
            PLACEHOLDER2: function () {
              return m;
            },
            assert: function () {
              return s;
            },
            getType: function () {
              return n;
            },
            isArray: function () {
              return f;
            },
            isDate: function () {
              return u;
            },
            isNaN: function () {
              return r;
            },
            isNumber: function () {
              return d;
            },
            isObject: function () {
              return p;
            },
            isString: function () {
              return c;
            },
            numberToString: function () {
              return l;
            },
            repeat: function () {
              return h;
            },
            toDate: function () {
              return o;
            },
            toNumber: function () {
              return a;
            },
          });
        const g = "__§§§__",
          m = "__§§§§__";
      },
      7652: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            StyleRule: function () {
              return D;
            },
            StyleSheet: function () {
              return k;
            },
            addClass: function () {
              return T;
            },
            addEventListener: function () {
              return h;
            },
            addSpacing: function () {
              return z;
            },
            alternativeColor: function () {
              return ae;
            },
            blur: function () {
              return p;
            },
            brighten: function () {
              return ie;
            },
            capitalizeFirst: function () {
              return q;
            },
            cleanFormat: function () {
              return U;
            },
            contains: function () {
              return y;
            },
            decimalPlaces: function () {
              return N;
            },
            escapeForRgex: function () {
              return H;
            },
            focus: function () {
              return f;
            },
            get12Hours: function () {
              return $;
            },
            getBrightnessStep: function () {
              return re;
            },
            getDayFromWeek: function () {
              return X;
            },
            getEventTarget: function () {
              return v;
            },
            getFormat: function () {
              return B;
            },
            getLightnessStep: function () {
              return te;
            },
            getMonthWeek: function () {
              return W;
            },
            getPointerId: function () {
              return d;
            },
            getRendererEvent: function () {
              return g;
            },
            getSafeResolution: function () {
              return S;
            },
            getShadowRoot: function () {
              return O;
            },
            getStyle: function () {
              return _;
            },
            getTimeZone: function () {
              return Z;
            },
            getTimezoneOffset: function () {
              return K;
            },
            getWeek: function () {
              return G;
            },
            getWeekYear: function () {
              return Y;
            },
            getYearDay: function () {
              return V;
            },
            hslToRgb: function () {
              return Q;
            },
            iOS: function () {
              return E;
            },
            isLight: function () {
              return ne;
            },
            isLocalEvent: function () {
              return w;
            },
            isTouchEvent: function () {
              return m;
            },
            lighten: function () {
              return ee;
            },
            mergeTags: function () {
              return oe;
            },
            onZoom: function () {
              return u;
            },
            padString: function () {
              return L;
            },
            plainText: function () {
              return I;
            },
            ready: function () {
              return o;
            },
            relativeToValue: function () {
              return C;
            },
            removeClass: function () {
              return M;
            },
            removeElement: function () {
              return l;
            },
            rgbToHsl: function () {
              return J;
            },
            sameBounds: function () {
              return le;
            },
            saturate: function () {
              return se;
            },
            setInteractive: function () {
              return x;
            },
            setStyle: function () {
              return b;
            },
            stripTags: function () {
              return F;
            },
            supports: function () {
              return c;
            },
            trim: function () {
              return R;
            },
            trimLeft: function () {
              return j;
            },
            trimRight: function () {
              return A;
            },
          });
        var r = i(5040),
          n = i(5071),
          s = i(256),
          a = i(7449);
        function o(e) {
          if ("loading" !== document.readyState) e();
          else {
            const t = () => {
              "loading" !== document.readyState &&
                (document.removeEventListener("readystatechange", t), e());
            };
            document.addEventListener("readystatechange", t);
          }
        }
        function l(e) {
          e.parentNode && e.parentNode.removeChild(e);
        }
        function h(e, t, i, r) {
          return (
            e.addEventListener(t, i, r || !1),
            new a.ku(() => {
              e.removeEventListener(t, i, r || !1);
            })
          );
        }
        function u(e) {
          return h(window, "resize", (t) => {
            e();
          });
        }
        function c(e) {
          switch (e) {
            case "touchevents":
              return window.hasOwnProperty("TouchEvent");
            case "pointerevents":
              return window.hasOwnProperty("PointerEvent");
            case "mouseevents":
              return window.hasOwnProperty("MouseEvent");
            case "wheelevents":
              return window.hasOwnProperty("WheelEvent");
            case "keyboardevents":
              return window.hasOwnProperty("KeyboardEvent");
          }
          return !1;
        }
        function d(e) {
          return e.pointerId || 0;
        }
        function p() {
          if (document.activeElement && document.activeElement != document.body)
            if (document.activeElement.blur) document.activeElement.blur();
            else {
              let e = document.createElement("button");
              (e.style.position = "fixed"),
                (e.style.top = "0px"),
                (e.style.left = "-10000px"),
                document.body.appendChild(e),
                e.focus(),
                e.blur(),
                document.body.removeChild(e);
            }
        }
        function f(e) {
          e && e.focus();
        }
        function g(e) {
          if (c("pointerevents")) return e;
          if (c("touchevents"))
            switch (e) {
              case "pointerover":
              case "pointerdown":
                return "touchstart";
              case "pointerout":
              case "pointerleave":
              case "pointerup":
                return "touchend";
              case "pointermove":
                return "touchmove";
              case "click":
                return "click";
              case "dblclick":
                return "dblclick";
            }
          else if (c("mouseevents"))
            switch (e) {
              case "pointerover":
                return "mouseover";
              case "pointerout":
                return "mouseout";
              case "pointerleave":
                return "mouseleave";
              case "pointerdown":
                return "mousedown";
              case "pointermove":
                return "mousemove";
              case "pointerup":
                return "mouseup";
              case "click":
                return "click";
              case "dblclick":
                return "dblclick";
            }
          return e;
        }
        function m(e) {
          if ("undefined" != typeof Touch && e instanceof Touch) return !0;
          if (
            "undefined" != typeof PointerEvent &&
            e instanceof PointerEvent &&
            null != e.pointerType
          )
            switch (e.pointerType) {
              case "touch":
              case "pen":
              case 2:
                return !0;
              case "mouse":
              case 4:
                return !1;
              default:
                return !(e instanceof MouseEvent);
            }
          else if (null != e.type && e.type.match(/^mouse/)) return !1;
          return !0;
        }
        function b(e, t, i) {
          e.style[t] = i;
        }
        function _(e, t) {
          return e.style[t];
        }
        function v(e) {
          if (e.composedPath) {
            const t = e.composedPath();
            return 0 === t.length ? null : t[0];
          }
          return e.target;
        }
        function y(e, t) {
          let i = t;
          for (;;) {
            if (e === i) return !0;
            if (null === i.parentNode) {
              if (null == i.host) return !1;
              i = i.host;
            } else i = i.parentNode;
          }
        }
        function w(e, t) {
          return e.target && y(t.root.dom, e.target);
        }
        function x(e, t) {
          e.style.pointerEvents = t ? "auto" : "none";
        }
        function O(e) {
          let t = e;
          for (;;) {
            if (null === t.parentNode) return null != t.host ? t : null;
            t = t.parentNode;
          }
        }
        let P;
        class D extends a.KK {
          constructor(e, t, i, r = "") {
            super(),
              Object.defineProperty(this, "_root", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "_rule", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._root = (function (e, t = "") {
                if (null === e) {
                  if (null == P) {
                    const e = document.createElement("style");
                    (e.type = "text/css"),
                      "" != t && e.setAttribute("nonce", t),
                      document.head.appendChild(e),
                      (P = e.sheet);
                  }
                  return P;
                }
                {
                  const i = document.createElement("style");
                  return (
                    (i.type = "text/css"),
                    "" != t && i.setAttribute("nonce", t),
                    e.appendChild(i),
                    i.sheet
                  );
                }
              })(e, r));
            try {
              (this._rule = (function (e, t) {
                const i = e.cssRules.length;
                return e.insertRule(t + "{}", i), e.cssRules[i];
              })(this._root, t)),
                s.each(i, (e, t) => {
                  this.setStyle(e, t);
                });
            } catch (e) {
              this._rule = new CSSStyleRule();
            }
          }
          set selector(e) {
            this._rule.selectorText = e;
          }
          get selector() {
            return this._rule.selectorText;
          }
          _dispose() {
            const e = n.indexOf(this._root.cssRules, this._rule);
            if (-1 === e) throw new Error("Could not dispose StyleRule");
            this._root.deleteRule(e);
          }
          _setVendorPrefixName(e, t) {
            const i = this._rule.style;
            i.setProperty("-webkit-" + e, t, ""),
              i.setProperty("-moz-" + e, t, ""),
              i.setProperty("-ms-" + e, t, ""),
              i.setProperty("-o-" + e, t, ""),
              i.setProperty(e, t, "");
          }
          setStyle(e, t) {
            "transition" === e
              ? this._setVendorPrefixName(e, t)
              : this._rule.style.setProperty(e, t, "");
          }
        }
        class k extends a.KK {
          constructor(e, t, i = "") {
            super(),
              Object.defineProperty(this, "_element", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this._element = (function (e, t, i = "") {
                const r = document.createElement("style");
                return (
                  (r.type = "text/css"),
                  "" != i && r.setAttribute("nonce", i),
                  (r.textContent = t),
                  null === e ? document.head.appendChild(r) : e.appendChild(r),
                  r
                );
              })(e, t, i));
          }
          _dispose() {
            this._element.parentNode &&
              this._element.parentNode.removeChild(this._element);
          }
        }
        function T(e, t) {
          if (e)
            if (e.classList) {
              const i = t.split(" ");
              n.each(i, (t) => {
                e.classList.add(t);
              });
            } else {
              let i = e.getAttribute("class");
              i
                ? e.setAttribute(
                    "class",
                    i
                      .split(" ")
                      .filter((e) => e !== t)
                      .join(" ") +
                      " " +
                      t
                  )
                : e.setAttribute("class", t);
            }
        }
        function M(e, t) {
          if (e)
            if (e.classList) e.classList.remove(t);
            else {
              let i = e.getAttribute("class");
              i &&
                e.setAttribute(
                  "class",
                  i
                    .split(" ")
                    .filter((e) => e !== t)
                    .join(" ")
                );
            }
        }
        function E() {
          return /apple/i.test(navigator.vendor) && "ontouchend" in document;
        }
        function S() {
          return E() ? 1 : void 0;
        }
        function C(e, t) {
          return r.isNumber(e)
            ? e
            : null != e && r.isNumber(e.value) && r.isNumber(t)
            ? t * e.value
            : 0;
        }
        function N(e) {
          let t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        }
        function L(e, t = 0, i = "0") {
          return (
            "string" != typeof e && (e = e.toString()),
            t > e.length ? Array(t - e.length + 1).join(i) + e : e
          );
        }
        function j(e) {
          return e.replace(/^[\s]*/, "");
        }
        function A(e) {
          return e.replace(/[\s]*$/, "");
        }
        function R(e) {
          return j(A(e));
        }
        function B(e) {
          if (void 0 === e) return "string";
          let t = (e = (e = (e = e
            .toLowerCase()
            .replace(/^\[[^\]]*\]/, "")).replace(
            /\[[^\]]+\]/,
            ""
          )).trim()).match(/\/(date|number|duration)$/);
          return t
            ? t[1]
            : "number" === e
            ? "number"
            : "date" === e
            ? "date"
            : "duration" === e
            ? "duration"
            : e.match(/[#0]/)
            ? "number"
            : e.match(/[ymwdhnsqaxkzgtei]/)
            ? "date"
            : "string";
        }
        function U(e) {
          return e.replace(/\/(date|number|duration)$/i, "");
        }
        function F(e) {
          return e ? e.replace(/<[^>]*>/g, "") : e;
        }
        function I(e) {
          return e ? F(("" + e).replace(/[\n\r]+/g, ". ")) : e;
        }
        function H(e) {
          return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        }
        function z(e) {
          let t = "";
          for (let i = 0; i < e.length; i++) {
            const r = e.charAt(i);
            r.toUpperCase() == r && 0 != i && (t += " "), (t += r);
          }
          return t;
        }
        function V(e, t = !1) {
          const i = new Date(e.getFullYear(), 0, 0),
            r =
              e.getTime() -
              i.getTime() +
              60 * (i.getTimezoneOffset() - e.getTimezoneOffset()) * 1e3;
          return Math.floor(r / 864e5);
        }
        function G(e, t = !1) {
          const i = new Date(
              Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())
            ),
            r = i.getUTCDay() || 7;
          i.setUTCDate(i.getUTCDate() + 4 - r);
          const n = new Date(Date.UTC(i.getUTCFullYear(), 0, 1));
          return Math.ceil(((i.getTime() - n.getTime()) / 864e5 + 1) / 7);
        }
        function Y(e, t = !1) {
          const i = new Date(
              Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())
            ),
            r = i.getUTCDay() || 7;
          return (
            i.setUTCDate(i.getUTCDate() + 4 - r),
            new Date(Date.UTC(i.getUTCFullYear(), 0, 1)).getFullYear()
          );
        }
        function W(e, t = !1) {
          const i = G(new Date(e.getFullYear(), e.getMonth(), 1), t);
          let r = G(e, t);
          return 1 == r && (r = 53), r - i + 1;
        }
        function X(e, t, i = 1, r = !1) {
          let n = new Date(t, 0, 4, 0, 0, 0, 0);
          return r && n.setUTCFullYear(t), 7 * e + i - ((n.getDay() || 7) + 3);
        }
        function $(e, t) {
          return (
            e > 12 ? (e -= 12) : 0 === e && (e = 12),
            null != t ? e + (t - 1) : e
          );
        }
        function Z(e, t = !1, i = !1, r = !1, n) {
          if (r) return t ? "Coordinated Universal Time" : "UTC";
          if (n) {
            const i = e.toLocaleString("en-US", { timeZone: n });
            return R(
              e
                .toLocaleString("en-US", {
                  timeZone: n,
                  timeZoneName: t ? "long" : "short",
                })
                .substr(i.length)
            );
          }
          let s = e.toLocaleString("UTC"),
            a = e
              .toLocaleString("UTC", { timeZoneName: t ? "long" : "short" })
              .substr(s.length);
          return (
            !1 === i &&
              (a = a.replace(/ (standard|daylight|summer|winter) /i, " ")),
            a
          );
        }
        function K(e) {
          const t = new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0)),
            i = new Date(t.toLocaleString("en-US", { timeZone: "UTC" }));
          return (
            ((new Date(t.toLocaleString("en-US", { timeZone: e })).getTime() -
              i.getTime()) /
              6e4) *
            -1
          );
        }
        function q(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function Q(e) {
          let t,
            i,
            r,
            n = e.h,
            s = e.s,
            a = e.l;
          if (0 == s) t = i = r = a;
          else {
            let e = function (e, t, i) {
                return (
                  i < 0 && (i += 1),
                  i > 1 && (i -= 1),
                  i < 1 / 6
                    ? e + 6 * (t - e) * i
                    : i < 0.5
                    ? t
                    : i < 2 / 3
                    ? e + (t - e) * (2 / 3 - i) * 6
                    : e
                );
              },
              o = a < 0.5 ? a * (1 + s) : a + s - a * s,
              l = 2 * a - o;
            (t = e(l, o, n + 1 / 3)),
              (i = e(l, o, n)),
              (r = e(l, o, n - 1 / 3));
          }
          return {
            r: Math.round(255 * t),
            g: Math.round(255 * i),
            b: Math.round(255 * r),
          };
        }
        function J(e) {
          let t = e.r / 255,
            i = e.g / 255,
            r = e.b / 255,
            n = Math.max(t, i, r),
            s = Math.min(t, i, r),
            a = 0,
            o = 0,
            l = (n + s) / 2;
          if (n === s) a = o = 0;
          else {
            let e = n - s;
            switch (((o = l > 0.5 ? e / (2 - n - s) : e / (n + s)), n)) {
              case t:
                a = (i - r) / e + (i < r ? 6 : 0);
                break;
              case i:
                a = (r - t) / e + 2;
                break;
              case r:
                a = (t - i) / e + 4;
            }
            a /= 6;
          }
          return { h: a, s: o, l: l };
        }
        function ee(e, t) {
          return e
            ? {
                r: Math.max(0, Math.min(255, e.r + te(e.r, t))),
                g: Math.max(0, Math.min(255, e.g + te(e.g, t))),
                b: Math.max(0, Math.min(255, e.b + te(e.b, t))),
                a: e.a,
              }
            : e;
        }
        function te(e, t) {
          let i = t > 0 ? 255 - e : e;
          return Math.round(i * t);
        }
        function ie(e, t) {
          if (e) {
            let i = te(Math.min(Math.max(e.r, e.g, e.b), 230), t);
            return {
              r: Math.max(0, Math.min(255, Math.round(e.r + i))),
              g: Math.max(0, Math.min(255, Math.round(e.g + i))),
              b: Math.max(0, Math.min(255, Math.round(e.b + i))),
              a: e.a,
            };
          }
          return e;
        }
        function re(e, t) {
          return Math.round(255 * t);
        }
        function ne(e) {
          return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 >= 128;
        }
        function se(e, t) {
          if (void 0 === e || 1 == t) return e;
          let i = J(e);
          return (i.s = t), Q(i);
        }
        function ae(
          e,
          t = { r: 255, g: 255, b: 255 },
          i = { r: 255, g: 255, b: 255 }
        ) {
          let r = t,
            n = i;
          return ne(i) && ((r = i), (n = t)), ne(e) ? n : r;
        }
        function oe(e, t) {
          return (
            e || (e = []), [...e, ...t].filter((e, t, i) => i.indexOf(e) === t)
          );
        }
        function le(e, t) {
          return (
            !!t &&
            e.left == t.left &&
            e.right == t.right &&
            e.top == t.top &&
            e.bottom == t.bottom
          );
        }
      },
      3360: function (e, t, i) {
        "use strict";
        i.d(t, {
          z: function () {
            return y;
          },
        });
        var r = i(5125),
          n = i(6331),
          s = i(4596),
          a = i(8777),
          o = i(1112),
          l = i(6245),
          h = i(5769),
          u = i(5040),
          c = i(5071),
          d = i(256),
          p = {
            AccumulationDistribution: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.AccumulationDistribution),
            AccumulativeSwingIndex: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.AccumulativeSwingIndex),
            Annotator: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[396]) {
                    var e = new Error(
                      "Module '396' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(396);
                })
                .then((e) => e.Annotator),
            Aroon: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.Aroon),
            AverageSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.AverageSeries),
            AwesomeOscillator: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.AwesomeOscillator),
            Axis: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.Axis),
            AxisBullet: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.AxisBullet),
            AxisLabel: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.AxisLabel),
            AxisLabelRadial: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.AxisLabelRadial),
            AxisRenderer: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.AxisRenderer),
            AxisRendererCircular: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.AxisRendererCircular),
            AxisRendererRadial: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.AxisRendererRadial),
            AxisRendererX: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.AxisRendererX),
            AxisRendererY: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.AxisRendererY),
            AxisTick: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.AxisTick),
            BaseColumnSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.BaseColumnSeries),
            BollingerBands: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.BollingerBands),
            BreadcrumbBar: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.BreadcrumbBar),
            Bullet: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Bullet),
            Button: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Button),
            CalloutSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.CalloutSeries),
            Candlestick: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.Candlestick),
            CandlestickSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.CandlestickSeries),
            CategoryAxis: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.CategoryAxis),
            CategoryDateAxis: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.CategoryDateAxis),
            ChaikinMoneyFlow: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.ChaikinMoneyFlow),
            ChaikinOscillator: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.ChaikinOscillator),
            Chart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Chart),
            ChartIndicator: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.ChartIndicator),
            Chord: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.Chord),
            ChordDirected: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.ChordDirected),
            ChordLink: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.ChordLink),
            ChordLinkDirected: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.ChordLinkDirected),
            ChordNodes: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.ChordNodes),
            ChordNonRibbon: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.ChordNonRibbon),
            Circle: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Circle),
            CirclePattern: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.CirclePattern),
            ClockHand: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.ClockHand),
            ColorControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.ColorControl),
            ColorSet: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.ColorSet),
            ColumnSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.ColumnSeries),
            CommodityChannelIndex: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.CommodityChannelIndex),
            ComparisonControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.ComparisonControl),
            Component: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Component),
            Container: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Container),
            DateAxis: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.DateAxis),
            DateRangeSelector: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DateRangeSelector),
            DisparityIndex: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DisparityIndex),
            DoodleSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DoodleSeries),
            DrawingControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DrawingControl),
            DrawingSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DrawingSeries),
            DrawingToolControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DrawingToolControl),
            Dropdown: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.Dropdown),
            DropdownColors: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DropdownColors),
            DropdownList: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DropdownList),
            DropdownListControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.DropdownListControl),
            DurationAxis: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.DurationAxis),
            Ellipse: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Ellipse),
            EllipseSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.EllipseSeries),
            Entity: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Entity),
            Exporting: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[396]) {
                    var e = new Error(
                      "Module '396' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(396);
                })
                .then((e) => e.Exporting),
            ExportingMenu: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[396]) {
                    var e = new Error(
                      "Module '396' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(396);
                })
                .then((e) => e.ExportingMenu),
            FibonacciSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.FibonacciSeries),
            FibonacciTimezoneSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.FibonacciTimezoneSeries),
            Flow: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.Flow),
            FlowLink: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.FlowLink),
            FlowNode: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.FlowNode),
            FlowNodes: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.FlowNodes),
            ForceDirected: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.ForceDirected),
            FunnelSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.FunnelSeries),
            FunnelSlice: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.FunnelSlice),
            GaplessDateAxis: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.GaplessDateAxis),
            Gradient: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Gradient),
            Graphics: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Graphics),
            GraticuleSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.GraticuleSeries),
            Grid: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.Grid),
            GridLayout: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.GridLayout),
            HeatLegend: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.HeatLegend),
            Hierarchy: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.Hierarchy),
            HierarchyLink: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.HierarchyLink),
            HierarchyNode: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.HierarchyNode),
            HorizontalLayout: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.HorizontalLayout),
            HorizontalLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.HorizontalLineSeries),
            HorizontalRaySeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.HorizontalRaySeries),
            IconControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.IconControl),
            IconSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.IconSeries),
            Indicator: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.Indicator),
            IndicatorControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.IndicatorControl),
            InterfaceColors: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.InterfaceColors),
            IntervalControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.IntervalControl),
            Label: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Label),
            LabelSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.LabelSeries),
            Layout: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Layout),
            Legend: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Legend),
            Line: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Line),
            LinePattern: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.LinePattern),
            LineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.LineSeries),
            LinearGradient: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.LinearGradient),
            LinkedHierarchy: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.LinkedHierarchy),
            LinkedHierarchyNode: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.LinkedHierarchyNode),
            MACD: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.MACD),
            MapChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.MapChart),
            MapLine: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.MapLine),
            MapLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.MapLineSeries),
            MapPointSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.MapPointSeries),
            MapPolygon: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.MapPolygon),
            MapPolygonSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.MapPolygonSeries),
            MapSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.MapSeries),
            MedianPrice: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.MedianPrice),
            Modal: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Modal),
            MovingAverage: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.MovingAverage),
            MovingAverageDeviation: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.MovingAverageDeviation),
            MovingAverageEnvelope: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.MovingAverageEnvelope),
            OHLC: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.OHLC),
            OHLCSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.OHLCSeries),
            OnBalanceVolume: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.OnBalanceVolume),
            Pack: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.Pack),
            PanelControls: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.PanelControls),
            Partition: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.Partition),
            PathPattern: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.PathPattern),
            Pattern: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Pattern),
            PercentChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.PercentChart),
            PercentSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.PercentSeries),
            PeriodSelector: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.PeriodSelector),
            PictorialStackedSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.PictorialStackedSeries),
            Picture: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Picture),
            PicturePattern: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.PicturePattern),
            PieChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.PieChart),
            PieSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.PieSeries),
            PointedRectangle: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.PointedRectangle),
            PolylineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.PolylineSeries),
            PyramidSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.PyramidSeries),
            QuadrantLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.QuadrantLineSeries),
            RadarChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.RadarChart),
            RadarColumnSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.RadarColumnSeries),
            RadarCursor: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.RadarCursor),
            RadarLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.RadarLineSeries),
            RadialGradient: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.RadialGradient),
            RadialLabel: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.RadialLabel),
            RadialText: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.RadialText),
            Rectangle: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Rectangle),
            RectanglePattern: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.RectanglePattern),
            RectangleSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.RectangleSeries),
            RegressionSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.RegressionSeries),
            RelativeStrengthIndex: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.RelativeStrengthIndex),
            ResetControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.ResetControl),
            RoundedRectangle: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.RoundedRectangle),
            Sankey: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.Sankey),
            SankeyLink: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.SankeyLink),
            SankeyNodes: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2924]) {
                    var e = new Error(
                      "Module '2924' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2924);
                })
                .then((e) => e.SankeyNodes),
            Scrollbar: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Scrollbar),
            SerialChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.SerialChart),
            Serializer: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9075]) {
                    var e = new Error(
                      "Module '9075' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9075);
                })
                .then((e) => e.Serializer),
            Series: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Series),
            SeriesTypeControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.SeriesTypeControl),
            SettingsControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.SettingsControl),
            SettingsModal: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.SettingsModal),
            SimpleLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.SimpleLineSeries),
            Slice: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Slice),
            SliceGrouper: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[1790]) {
                    var e = new Error(
                      "Module '1790' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(1790);
                })
                .then((e) => e.SliceGrouper),
            SlicedChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2536]) {
                    var e = new Error(
                      "Module '2536' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2536);
                })
                .then((e) => e.SlicedChart),
            Slider: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Slider),
            SmoothedRadarLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[2051]) {
                    var e = new Error(
                      "Module '2051' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(2051);
                })
                .then((e) => e.SmoothedRadarLineSeries),
            SmoothedXLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.SmoothedXLineSeries),
            SmoothedXYLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.SmoothedXYLineSeries),
            SmoothedYLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.SmoothedYLineSeries),
            Sprite: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Sprite),
            SpriteResizer: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.SpriteResizer),
            StandardDeviation: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.StandardDeviation),
            Star: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Star),
            StepLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.StepLineSeries),
            StochasticOscillator: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.StochasticOscillator),
            StockChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.StockChart),
            StockControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.StockControl),
            StockLegend: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.StockLegend),
            StockPanel: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.StockPanel),
            StockToolbar: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.StockToolbar),
            Sunburst: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.Sunburst),
            Text: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Text),
            Tick: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Tick),
            Tooltip: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Tooltip),
            Tree: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.Tree),
            Treemap: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[496]) {
                    var e = new Error(
                      "Module '496' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(496);
                })
                .then((e) => e.Treemap),
            TrendLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.TrendLineSeries),
            Triangle: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.Triangle),
            Trix: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.Trix),
            TypicalPrice: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.TypicalPrice),
            VWAP: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.VWAP),
            ValueAxis: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.ValueAxis),
            Venn: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[8034]) {
                    var e = new Error(
                      "Module '8034' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(8034);
                })
                .then((e) => e.Venn),
            VerticalLayout: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[9852]) {
                    var e = new Error(
                      "Module '9852' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(9852);
                })
                .then((e) => e.VerticalLayout),
            VerticalLineSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.VerticalLineSeries),
            Volume: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.Volume),
            WilliamsR: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.WilliamsR),
            WordCloud: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6769]) {
                    var e = new Error(
                      "Module '6769' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6769);
                })
                .then((e) => e.WordCloud),
            XYChart: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.XYChart),
            XYChartScrollbar: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.XYChartScrollbar),
            XYCursor: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.XYCursor),
            XYSeries: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[3955]) {
                    var e = new Error(
                      "Module '3955' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(3955);
                })
                .then((e) => e.XYSeries),
            ZigZag: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[591]) {
                    var e = new Error(
                      "Module '591' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(591);
                })
                .then((e) => e.ZigZag),
            ZoomControl: () =>
              Promise.resolve()
                .then(function () {
                  if (!i.m[6970]) {
                    var e = new Error(
                      "Module '6970' is not available (weak dependency)"
                    );
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  }
                  return i(6970);
                })
                .then((e) => e.ZoomControl),
          };
        function f(e) {
          return u.isObject(e);
        }
        function g(e, t) {
          if ("#" === e[0] || "@" === e[0]) {
            if (e[1] === e[0]) return { isValue: !0, value: e.slice(1) };
            {
              const i = e.split(/\./g);
              let r = (function (e, t) {
                let i = e.length;
                for (; i--; ) {
                  const r = e[i];
                  if (t in r) return r[t];
                }
                throw new Error("Could not find ref " + t);
              })(t, i[0]);
              for (let e = 1; e < i.length; ++e) {
                const t = i[e],
                  n = /get\((["'])([^\1]*)\1\)/.exec(t);
                r = n ? r.get(n[2]) : r[t];
              }
              return { isValue: !0, value: r };
            }
          }
          return { isValue: !0, value: e };
        }
        function m(e, t) {
          t.properties &&
            c.each(t.properties, (t) => {
              t(e);
            });
        }
        function b(e, t) {
          m(e, t),
            t.adapters &&
              c.each(t.adapters, (t) => {
                e.adapters.add(t.key, t.callback);
              }),
            e instanceof a.W &&
              t.children &&
              t.children.forEach((t) => {
                null == t.index
                  ? e.children.push(t.value)
                  : e.children.insertIndex(t.index, t.value);
              });
        }
        function _(e, t) {
          if (!t.construct) return t.value;
          const i = t.construct.new(e, t.settings || {});
          return b(i, t), i;
        }
        class v {
          constructor() {
            Object.defineProperty(this, "_caching", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
              Object.defineProperty(this, "_cache", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              }),
              Object.defineProperty(this, "_delayed", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: [],
              });
          }
          afterParse() {
            this._delayed.forEach((e) => {
              e();
            });
          }
          getClass(e) {
            return this._cache[e];
          }
          storeClass(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              const t = p[e];
              this._cache[e] = yield t();
            });
          }
          cacheClass(e) {
            let t = this._caching[e];
            return null == t && (t = this._caching[e] = this.storeClass(e)), t;
          }
          parseAsyncArray(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              yield Promise.all(c.map(e, (e) => this.parseAsync(e)));
            });
          }
          parseAsyncObject(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              yield Promise.all(c.map(d.keys(e), (t) => this.parseAsync(e[t])));
            });
          }
          parseAsyncSettings(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              yield Promise.all(
                c.map(d.keys(e), (t) => this.parseAsyncSetting(t, e[t]))
              );
            });
          }
          parseAsyncSetting(e, t) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              "geoJSON" !== e && (yield this.parseAsync(t));
            });
          }
          parseAsyncRefs(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              u.isArray(e)
                ? yield Promise.all(c.map(e, (e) => this.parseAsyncRefs(e)))
                : yield this.parseAsyncObject(e);
            });
          }
          parseAsync(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              u.isArray(e)
                ? yield this.parseAsyncArray(e)
                : f(e) &&
                  ("Color" === e.type ||
                    "Percent" === e.type ||
                    ("Template" === e.type
                      ? yield Promise.all([
                          e.refs
                            ? this.parseAsyncRefs(e.refs)
                            : Promise.resolve(void 0),
                          e.settings
                            ? this.parseAsyncObject(e.settings)
                            : Promise.resolve(void 0),
                        ])
                      : !0 === e.__parse
                      ? yield this.parseAsyncObject(e)
                      : !1 !== e.__parse &&
                        (yield Promise.all([
                          e.type
                            ? this.cacheClass(e.type)
                            : Promise.resolve(void 0),
                          e.refs
                            ? this.parseAsyncRefs(e.refs)
                            : Promise.resolve(void 0),
                          e.settings
                            ? this.parseAsyncSettings(e.settings)
                            : Promise.resolve(void 0),
                          e.properties
                            ? this.parseAsyncObject(e.properties)
                            : Promise.resolve(void 0),
                          e.children
                            ? this.parseAsyncArray(e.children)
                            : Promise.resolve(void 0),
                        ]))));
            });
          }
          parseObject(e, t, i) {
            const r = {};
            return (
              c.each(d.keys(t), (n) => {
                r[n] = this.parse(e, t[n], i);
              }),
              r
            );
          }
          parseArray(e, t, i) {
            return c.map(t, (t) => this.parse(e, t, i));
          }
          parseChildren(e, t, i) {
            return c.map(t, (t) => this.parseChild(e, t, i));
          }
          parseStops(e, t, i) {
            return c.map(t, (t) => this.parseObject(e, t, i));
          }
          parseSetting(e, t, i, r) {
            if ("layout" === t)
              switch (i) {
                case "horizontal":
                  return e.horizontalLayout;
                case "vertical":
                  return e.verticalLayout;
                case "grid":
                  return e.gridLayout;
              }
            return "geoJSON" === t
              ? i
              : "stops" === t
              ? this.parseStops(e, i, r)
              : this.parse(e, i, r);
          }
          parseSettings(e, t, i) {
            const r = {};
            return (
              c.each(d.keys(t), (n) => {
                r[n] = this.parseSetting(e, n, t[n], i);
              }),
              r
            );
          }
          parseProperties(e, t, i) {
            return c.map(d.keys(t), (r) => {
              const s = t[r];
              return (t) => {
                const a = () => {
                  const a = this.parseValue(e, s, i),
                    o = t[r];
                  o
                    ? a.isValue
                      ? u.isArray(a.value)
                        ? c.each(a.value, (e) => {
                            o.push(e);
                          })
                        : (t[r] = a.value)
                      : a.construct
                      ? (t[r] = _(e, a))
                      : o instanceof n.JH || o instanceof h.YS
                      ? (function (e, t) {
                          t.settings && e.setAll(t.settings), b(e, t);
                        })(o, a)
                      : m(o, a)
                    : a.isValue
                    ? (t[r] = a.value)
                    : (t[r] = _(e, a));
                };
                if ("data" === r) this._delayed.push(a);
                else if ("bullets" === r) {
                  const n = t[r];
                  u.assert(null != n),
                    u.assert(u.isArray(s)),
                    c.each(s, (t) => {
                      n.push((r, n) => {
                        const s = i.concat([{ "@series": n }]);
                        return this.parse(e, t, s);
                      });
                    });
                } else a();
              };
            });
          }
          parseRefsObject(e, t, i) {
            const r = {};
            return (
              c.each(d.keys(t), (n) => {
                r["#" + n] = this.parse(e, t[n], i);
              }),
              r
            );
          }
          parseRefs(e, t, i) {
            if (u.isArray(t)) {
              const r = t.length;
              for (let n = 0; n < r; ++n)
                i = i.concat([this.parseRefsObject(e, t[n], i)]);
            } else i = i.concat([this.parseRefsObject(e, t, i)]);
            return i;
          }
          parseChild(e, t, i) {
            if (u.isString(t)) return { index: void 0, value: g(t, i).value };
            if (null != t.ref)
              return {
                index: null == t.index ? void 0 : t.index,
                value: g(t.ref, i).value,
              };
            {
              const r = this.parseEntity(e, t, i);
              return { index: r.index, value: _(e, r) };
            }
          }
          parseEntity(e, t, i) {
            t.refs && (i = this.parseRefs(e, t.refs, i));
            const r = t.type ? this.getClass(t.type) : void 0,
              n = t.settings ? this.parseSettings(e, t.settings, i) : void 0,
              s = t.properties
                ? this.parseProperties(e, t.properties, i)
                : void 0,
              a = t.children ? this.parseChildren(e, t.children, i) : void 0,
              o = null == t.index ? void 0 : t.index;
            return {
              isValue: !1,
              type: t.type,
              construct: r,
              settings: n,
              adapters: t.adapters,
              children: a,
              properties: s,
              index: o,
              value: t,
            };
          }
          parseValue(e, t, i) {
            if (t instanceof n.JH) return { isValue: !0, value: t };
            if (u.isArray(t))
              return { isValue: !0, value: this.parseArray(e, t, i) };
            if (f(t)) {
              if ("Color" === t.type)
                return { isValue: !0, value: o.Il.fromAny(t.value) };
              if ("Percent" === t.type)
                return { isValue: !0, value: new l.gG(t.value) };
              if ("Template" === t.type) {
                t.refs && (i = this.parseRefs(e, t.refs, i));
                const r = t.settings
                  ? this.parseSettings(e, t.settings, i)
                  : {};
                return { isValue: !0, value: h.YS.new(r) };
              }
              return !0 === t.__parse
                ? { isValue: !0, value: this.parseObject(e, t, i) }
                : !1 === t.__parse
                ? { isValue: !0, value: t }
                : this.parseEntity(e, t, i);
            }
            return u.isString(t) ? g(t, i) : { isValue: !0, value: t };
          }
          parse(e, t, i) {
            const r = this.parseValue(e, t, i);
            return r.isValue ? r.value : _(e, r);
          }
        }
        class y {
          constructor(e, t) {
            if (
              (Object.defineProperty(this, "_root", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              !t)
            )
              throw new Error(
                "You cannot use `new Class()`, instead use `Class.new()`"
              );
            this._root = e;
          }
          static new(e) {
            return new this(e, !0);
          }
          parse(e, t = {}) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              const i = new v();
              yield i.parseAsync(e);
              const r = i.parse(this._root, e, []);
              if (t.parent) {
                if (!(r instanceof s.j))
                  throw new Error(
                    "When using the parent setting, the entity must be a Sprite"
                  );
                t.parent.children.push(r);
              }
              return i.afterParse(), r;
            });
          }
          parseString(e, t = {}) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              return yield this.parse(JSON.parse(e), t);
            });
          }
        }
      },
      6890: function (e, t, i) {
        "use strict";
        i.d(t, {
          e: function () {
            return d;
          },
        });
        var r = i(6331),
          n = i(9361),
          s = i(1112),
          a = i(6245),
          o = i(5769),
          l = i(9582),
          h = i(5040),
          u = i(5071),
          c = i(256);
        class d extends r.JH {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_refs", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {},
              });
          }
          serialize(e, t = 0, i = !1) {
            if (t > this.get("maxDepth", 2)) return;
            if (!1 === e || !0 === e) return e;
            if (h.isArray(e)) {
              const r = [];
              return (
                u.each(e, (e) => {
                  r.push(this.serialize(e, t, i));
                }),
                r
              );
            }
            if (e instanceof l.k) {
              const r = [];
              return (
                u.each(e.values, (e) => {
                  r.push(this.serialize(e, t, i));
                }),
                r
              );
            }
            const d = {},
              p =
                e instanceof r.JH ||
                e instanceof o.YS ||
                e instanceof s.Il ||
                e instanceof a.gG;
            if (e instanceof r.JH) {
              d.type = e.className;
              let r = c.keys(e._settings);
              const n = this.get("includeSettings", []),
                s = this.get("excludeSettings", []);
              n.length
                ? (r = n)
                : s.length && (r = r.filter((e) => -1 === s.indexOf(e))),
                (r = r.filter((t) => e.isUserSetting(t))),
                r.length &&
                  ((d.settings = {}),
                  u.each(r, (r) => {
                    const n = e.get(r);
                    void 0 !== n &&
                      (d.settings[r] = this.serialize(n, t + 1, i));
                  }));
            } else if (e instanceof o.YS) {
              d.type = "Template";
              let i = c.keys(e._settings);
              return (
                i.length &&
                  ((d.settings = {}),
                  u.each(i, (i) => {
                    d.settings[i] = this.serialize(e.get(i), t + 1);
                  })),
                d
              );
            }
            if (
              (e instanceof n.w &&
                e.data.length &&
                (d.properties = { data: this.serialize(e.data.values, 1, !0) }),
              e instanceof s.Il)
            )
              return { type: "Color", value: e.toCSSHex() };
            if (e instanceof a.gG) return { type: "Percent", value: e.percent };
            if (h.isString(e) || h.isNumber(e)) return e;
            if (h.isObject(e) && i && !p) {
              const r = this.get("excludeProperties", []);
              c.each(e, (e, n) => {
                -1 === r.indexOf(e) &&
                  void 0 !== n &&
                  (d[e] = this.serialize(n, t + 1, i));
              });
            }
            return (
              0 == t && c.keys(this._refs).length && (d.refs = this._refs), d
            );
          }
        }
        Object.defineProperty(d, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Serializer",
        }),
          Object.defineProperty(d, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r.JH.classNames.concat([d.className]),
          });
      },
      3783: function (e, t, i) {
        "use strict";
        i.d(t, {
          X: function () {
            return h;
          },
          v: function () {
            return l;
          },
        });
        var r = i(3409),
          n = i(6245),
          s = i(1112),
          a = i(6881),
          o = i(9395);
        function l(e, t, i, r) {
          e.set(t, i.get(r)),
            i.on(r, (i) => {
              e.set(t, i);
            });
        }
        class h extends r.Q {
          setupDefaultRules() {
            super.setupDefaultRules();
            const e = this._root.language,
              t = this._root.interfaceColors,
              i = this._root.horizontalLayout,
              r = this._root.verticalLayout,
              h = this.rule.bind(this);
            h("InterfaceColors").setAll({
              stroke: s.Il.fromHex(15066597),
              fill: s.Il.fromHex(15987699),
              primaryButton: s.Il.fromHex(6788316),
              primaryButtonHover: s.Il.fromHex(6779356),
              primaryButtonDown: s.Il.fromHex(6872182),
              primaryButtonActive: s.Il.fromHex(6872182),
              primaryButtonText: s.Il.fromHex(16777215),
              primaryButtonStroke: s.Il.fromHex(16777215),
              secondaryButton: s.Il.fromHex(14277081),
              secondaryButtonHover: s.Il.fromHex(10724259),
              secondaryButtonDown: s.Il.fromHex(9276813),
              secondaryButtonActive: s.Il.fromHex(15132390),
              secondaryButtonText: s.Il.fromHex(0),
              secondaryButtonStroke: s.Il.fromHex(16777215),
              grid: s.Il.fromHex(0),
              background: s.Il.fromHex(16777215),
              alternativeBackground: s.Il.fromHex(0),
              text: s.Il.fromHex(0),
              alternativeText: s.Il.fromHex(16777215),
              disabled: s.Il.fromHex(11382189),
              positive: s.Il.fromHex(5288704),
              negative: s.Il.fromHex(11730944),
            });
            {
              const e = h("ColorSet");
              e.setAll({
                passOptions: { hue: 0.05, saturation: 0, lightness: 0 },
                colors: [s.Il.fromHex(6797276)],
                step: 1,
                reuse: !1,
                startIndex: 0,
              }),
                e.setPrivate("currentStep", 0),
                e.setPrivate("currentPass", 0);
            }
            h("Entity").setAll({
              stateAnimationDuration: 0,
              stateAnimationEasing: o.out(o.cubic),
            }),
              h("Component").setAll({
                interpolationDuration: 0,
                interpolationEasing: o.out(o.cubic),
              }),
              h("Sprite").setAll({
                visible: !0,
                scale: 1,
                opacity: 1,
                rotation: 0,
                position: "relative",
                tooltipX: n.CI,
                tooltipY: n.CI,
                tooltipPosition: "fixed",
                isMeasured: !0,
              }),
              h("Sprite").states.create("default", { visible: !0, opacity: 1 }),
              h("Container").setAll({
                interactiveChildren: !0,
                setStateOnChildren: !1,
              }),
              h("Graphics").setAll({ strokeWidth: 1 }),
              h("Chart").setAll({
                width: n.AQ,
                height: n.AQ,
                interactiveChildren: !1,
              }),
              h("Sprite", ["horizontal", "center"]).setAll({
                centerX: n.CI,
                x: n.CI,
              }),
              h("Sprite", ["vertical", "center"]).setAll({
                centerY: n.CI,
                y: n.CI,
              }),
              h("Container", ["horizontal", "layout"]).setAll({ layout: i }),
              h("Container", ["vertical", "layout"]).setAll({ layout: r }),
              h("Pattern").setAll({
                repetition: "repeat",
                width: 50,
                height: 50,
                rotation: 0,
                fillOpacity: 1,
              }),
              h("LinePattern").setAll({
                gap: 6,
                colorOpacity: 1,
                width: 49,
                height: 49,
              }),
              h("RectanglePattern").setAll({
                gap: 6,
                checkered: !1,
                centered: !0,
                maxWidth: 5,
                maxHeight: 5,
                width: 48,
                height: 48,
                strokeWidth: 0,
              }),
              h("CirclePattern").setAll({
                gap: 5,
                checkered: !1,
                centered: !1,
                radius: 3,
                strokeWidth: 0,
                width: 45,
                height: 45,
              }),
              h("LinearGradient").setAll({ rotation: 90 }),
              h("Legend").setAll({
                fillField: "fill",
                strokeField: "stroke",
                nameField: "name",
                layout: a.M.new(this._root, {}),
                layer: 30,
                clickTarget: "itemContainer",
              }),
              h("Container", ["legend", "item", "itemcontainer"]).setAll({
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 5,
                paddingTop: 5,
                layout: i,
                setStateOnChildren: !0,
                interactiveChildren: !1,
                ariaChecked: !0,
                focusable: !0,
                ariaLabel: e.translate("Press ENTER to toggle"),
                role: "checkbox",
              });
            {
              const e = h("Rectangle", ["legend", "item", "background"]);
              e.setAll({ fillOpacity: 0 }), l(e, "fill", t, "background");
            }
            h("Container", ["legend", "marker"]).setAll({
              setStateOnChildren: !0,
              centerY: n.CI,
              paddingLeft: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingTop: 0,
              width: 18,
              height: 18,
            }),
              h("RoundedRectangle", ["legend", "marker", "rectangle"]).setAll({
                width: n.AQ,
                height: n.AQ,
                cornerRadiusBL: 3,
                cornerRadiusTL: 3,
                cornerRadiusBR: 3,
                cornerRadiusTR: 3,
              });
            {
              const e = h("RoundedRectangle", [
                "legend",
                "marker",
                "rectangle",
              ]).states.create("disabled", {});
              l(e, "fill", t, "disabled"), l(e, "stroke", t, "disabled");
            }
            h("Label", ["legend", "label"]).setAll({
              centerY: n.CI,
              marginLeft: 5,
              paddingRight: 0,
              paddingLeft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              populateText: !0,
            }),
              l(
                h("Label", ["legend", "label"]).states.create("disabled", {}),
                "fill",
                t,
                "disabled"
              ),
              h("Label", ["legend", "value", "label"]).setAll({
                centerY: n.CI,
                marginLeft: 5,
                paddingRight: 0,
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                width: 50,
                centerX: n.AQ,
                populateText: !0,
              }),
              l(
                h("Label", ["legend", "value", "label"]).states.create(
                  "disabled",
                  {}
                ),
                "fill",
                t,
                "disabled"
              ),
              h("HeatLegend").setAll({ stepCount: 1 }),
              h("RoundedRectangle", ["heatlegend", "marker"]).setAll({
                cornerRadiusTR: 0,
                cornerRadiusBR: 0,
                cornerRadiusTL: 0,
                cornerRadiusBL: 0,
              }),
              h("RoundedRectangle", [
                "vertical",
                "heatlegend",
                "marker",
              ]).setAll({ height: n.AQ, width: 15 }),
              h("RoundedRectangle", [
                "horizontal",
                "heatlegend",
                "marker",
              ]).setAll({ width: n.AQ, height: 15 }),
              h("HeatLegend", ["vertical"]).setAll({ height: n.AQ }),
              h("HeatLegend", ["horizontal"]).setAll({ width: n.AQ }),
              h("Label", ["heatlegend", "start"]).setAll({
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
              }),
              h("Label", ["heatlegend", "end"]).setAll({
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
              });
            {
              const e = h("Label");
              e.setAll({
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 10,
                paddingRight: 10,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "1em",
                populateText: !1,
              }),
                l(e, "fill", t, "text");
            }
            h("RadialLabel").setAll({
              textType: "regular",
              centerY: n.CI,
              centerX: n.CI,
              inside: !1,
              radius: 0,
              baseRadius: n.AQ,
              orientation: "auto",
              textAlign: "center",
            }),
              h("RoundedRectangle").setAll({
                cornerRadiusTL: 8,
                cornerRadiusBL: 8,
                cornerRadiusTR: 8,
                cornerRadiusBR: 8,
              }),
              h("PointedRectangle").setAll({
                pointerBaseWidth: 15,
                pointerLength: 10,
                cornerRadius: 8,
              }),
              h("Slice").setAll({
                shiftRadius: 0,
                dRadius: 0,
                dInnerRadius: 0,
              });
            {
              const e = h("Tick");
              e.setAll({
                strokeOpacity: 0.15,
                isMeasured: !1,
                length: 4.5,
                position: "absolute",
                crisp: !0,
              }),
                l(e, "stroke", t, "grid");
            }
            h("Bullet").setAll({ locationX: 0.5, locationY: 0.5 }),
              h("Tooltip").setAll({
                position: "absolute",
                getFillFromSprite: !0,
                getStrokeFromSprite: !1,
                autoTextColor: !0,
                paddingTop: 9,
                paddingBottom: 8,
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 5,
                pointerOrientation: "vertical",
                centerX: n.CI,
                centerY: n.CI,
                animationEasing: o.out(o.cubic),
                exportable: !1,
              }),
              h("Polygon").setAll({ animationEasing: o.out(o.cubic) }),
              h("PointedRectangle", ["tooltip", "background"]).setAll({
                strokeOpacity: 0.9,
                cornerRadius: 4,
                pointerLength: 4,
                pointerBaseWidth: 8,
                fillOpacity: 0.9,
                stroke: s.Il.fromHex(16777215),
              });
            {
              const e = h("Label", ["tooltip"]);
              e.setAll({
                role: "tooltip",
                populateText: !0,
                paddingRight: 0,
                paddingTop: 0,
                paddingLeft: 0,
                paddingBottom: 0,
              }),
                l(e, "fill", t, "alternativeText");
            }
            h("Button").setAll({
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 10,
              paddingRight: 10,
              interactive: !0,
              layout: i,
              interactiveChildren: !1,
              setStateOnChildren: !0,
              focusable: !0,
            }),
              h("Button").states.create("hover", {}),
              h("Button").states.create("down", { stateAnimationDuration: 0 }),
              h("Button").states.create("active", {});
            {
              const e = h("RoundedRectangle", ["button", "background"]);
              l(e, "fill", t, "primaryButton"),
                l(e, "stroke", t, "primaryButtonStroke");
            }
            l(
              h("RoundedRectangle", ["button", "background"]).states.create(
                "hover",
                {}
              ),
              "fill",
              t,
              "primaryButtonHover"
            ),
              l(
                h("RoundedRectangle", ["button", "background"]).states.create(
                  "down",
                  { stateAnimationDuration: 0 }
                ),
                "fill",
                t,
                "primaryButtonDown"
              ),
              l(
                h("RoundedRectangle", ["button", "background"]).states.create(
                  "active",
                  {}
                ),
                "fill",
                t,
                "primaryButtonActive"
              ),
              l(
                h("Graphics", ["button", "icon"]),
                "stroke",
                t,
                "primaryButtonText"
              ),
              l(h("Label", ["button"]), "fill", t, "primaryButtonText"),
              h("Button", ["zoom"]).setAll({
                paddingTop: 18,
                paddingBottom: 18,
                paddingLeft: 12,
                paddingRight: 12,
                centerX: 46,
                centerY: -10,
                y: 0,
                x: n.AQ,
                role: "button",
                ariaLabel: e.translate("Zoom Out"),
                layer: 30,
              });
            {
              const e = h("RoundedRectangle", ["background", "button", "zoom"]);
              e.setAll({
                cornerRadiusBL: 40,
                cornerRadiusBR: 40,
                cornerRadiusTL: 40,
                cornerRadiusTR: 40,
              }),
                l(e, "fill", t, "primaryButton");
            }
            l(
              h("RoundedRectangle", [
                "background",
                "button",
                "zoom",
              ]).states.create("hover", {}),
              "fill",
              t,
              "primaryButtonHover"
            ),
              l(
                h("RoundedRectangle", [
                  "background",
                  "button",
                  "zoom",
                ]).states.create("down", { stateAnimationDuration: 0 }),
                "fill",
                t,
                "primaryButtonDown"
              );
            {
              const e = h("Graphics", ["icon", "button", "zoom"]);
              e.setAll({
                crisp: !0,
                strokeOpacity: 0.7,
                draw: (e) => {
                  e.moveTo(0, 0), e.lineTo(12, 0);
                },
              }),
                l(e, "stroke", t, "primaryButtonText");
            }
            h("Button", ["resize"]).setAll({
              paddingTop: 9,
              paddingBottom: 9,
              paddingLeft: 13,
              paddingRight: 13,
              draggable: !0,
              centerX: n.CI,
              centerY: n.CI,
              position: "absolute",
              role: "slider",
              ariaValueMin: "0",
              ariaValueMax: "100",
              ariaLabel: e.translate(
                "Use up and down arrows to move selection"
              ),
            });
            {
              const e = h("RoundedRectangle", [
                "background",
                "resize",
                "button",
              ]);
              e.setAll({
                cornerRadiusBL: 40,
                cornerRadiusBR: 40,
                cornerRadiusTL: 40,
                cornerRadiusTR: 40,
              }),
                l(e, "fill", t, "secondaryButton"),
                l(e, "stroke", t, "secondaryButtonStroke");
            }
            l(
              h("RoundedRectangle", [
                "background",
                "resize",
                "button",
              ]).states.create("hover", {}),
              "fill",
              t,
              "secondaryButtonHover"
            ),
              l(
                h("RoundedRectangle", [
                  "background",
                  "resize",
                  "button",
                ]).states.create("down", { stateAnimationDuration: 0 }),
                "fill",
                t,
                "secondaryButtonDown"
              );
            {
              const e = h("Graphics", ["resize", "button", "icon"]);
              e.setAll({
                interactive: !1,
                crisp: !0,
                strokeOpacity: 0.5,
                draw: (e) => {
                  e.moveTo(0, 0.5),
                    e.lineTo(0, 12.5),
                    e.moveTo(4, 0.5),
                    e.lineTo(4, 12.5);
                },
              }),
                l(e, "stroke", t, "secondaryButtonText");
            }
            h("Button", ["resize", "vertical"]).setAll({
              rotation: 90,
              cursorOverStyle: "ns-resize",
            }),
              h("Button", ["resize", "horizontal"]).setAll({
                cursorOverStyle: "ew-resize",
              }),
              h("Button", ["play"]).setAll({
                paddingTop: 13,
                paddingBottom: 13,
                paddingLeft: 14,
                paddingRight: 14,
                ariaLabel: e.translate("Play"),
                toggleKey: "active",
              });
            {
              const e = h("RoundedRectangle", ["play", "background"]);
              e.setAll({
                strokeOpacity: 0.5,
                cornerRadiusBL: 100,
                cornerRadiusBR: 100,
                cornerRadiusTL: 100,
                cornerRadiusTR: 100,
              }),
                l(e, "fill", t, "primaryButton");
            }
            {
              const e = h("Graphics", ["play", "icon"]);
              e.setAll({
                stateAnimationDuration: 0,
                dx: 1,
                draw: (e) => {
                  e.moveTo(0, -5),
                    e.lineTo(8, 0),
                    e.lineTo(0, 5),
                    e.lineTo(0, -5);
                },
              }),
                l(e, "fill", t, "primaryButtonText");
            }
            h("Graphics", ["play", "icon"]).states.create("default", {
              stateAnimationDuration: 0,
            }),
              h("Graphics", ["play", "icon"]).states.create("active", {
                stateAnimationDuration: 0,
                draw: (e) => {
                  e.moveTo(-4, -5),
                    e.lineTo(-1, -5),
                    e.lineTo(-1, 5),
                    e.lineTo(-4, 5),
                    e.lineTo(-4, -5),
                    e.moveTo(4, -5),
                    e.lineTo(1, -5),
                    e.lineTo(1, 5),
                    e.lineTo(4, 5),
                    e.lineTo(4, -5);
                },
              }),
              h("Button", ["switch"]).setAll({
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 4,
                paddingRight: 4,
                ariaLabel: e.translate("Press ENTER to toggle"),
                toggleKey: "active",
                width: 40,
                height: 24,
                layout: null,
              });
            {
              const e = h("RoundedRectangle", ["switch", "background"]);
              e.setAll({
                strokeOpacity: 0.5,
                cornerRadiusBL: 100,
                cornerRadiusBR: 100,
                cornerRadiusTL: 100,
                cornerRadiusTR: 100,
              }),
                l(e, "fill", t, "primaryButton");
            }
            {
              const e = h("Circle", ["switch", "icon"]);
              e.setAll({ radius: 8, centerY: 0, centerX: 0, dx: 0 }),
                l(e, "fill", t, "primaryButtonText");
            }
            h("Graphics", ["switch", "icon"]).states.create("active", {
              dx: 16,
            }),
              h("Scrollbar").setAll({
                start: 0,
                end: 1,
                layer: 30,
                animationEasing: o.out(o.cubic),
              }),
              h("Scrollbar", ["vertical"]).setAll({
                marginRight: 13,
                marginLeft: 13,
                minWidth: 12,
                height: n.AQ,
              }),
              h("Scrollbar", ["horizontal"]).setAll({
                marginTop: 13,
                marginBottom: 13,
                minHeight: 12,
                width: n.AQ,
              }),
              this.rule("Button", ["scrollbar"]).setAll({ exportable: !1 });
            {
              const e = h("RoundedRectangle", [
                "scrollbar",
                "main",
                "background",
              ]);
              e.setAll({
                cornerRadiusTL: 8,
                cornerRadiusBL: 8,
                cornerRadiusTR: 8,
                cornerRadiusBR: 8,
                fillOpacity: 0.8,
              }),
                l(e, "fill", t, "fill");
            }
            {
              const e = h("RoundedRectangle", ["scrollbar", "thumb"]);
              e.setAll({
                role: "slider",
                ariaLive: "polite",
                position: "absolute",
                draggable: !0,
              }),
                l(e, "fill", t, "secondaryButton");
            }
            l(
              h("RoundedRectangle", ["scrollbar", "thumb"]).states.create(
                "hover",
                {}
              ),
              "fill",
              t,
              "secondaryButtonHover"
            ),
              l(
                h("RoundedRectangle", ["scrollbar", "thumb"]).states.create(
                  "down",
                  { stateAnimationDuration: 0 }
                ),
                "fill",
                t,
                "secondaryButtonDown"
              ),
              h("RoundedRectangle", ["scrollbar", "thumb", "vertical"]).setAll({
                x: n.CI,
                width: n.AQ,
                centerX: n.CI,
                ariaLabel: e.translate(
                  "Use up and down arrows to move selection"
                ),
              }),
              h("RoundedRectangle", [
                "scrollbar",
                "thumb",
                "horizontal",
              ]).setAll({
                y: n.CI,
                centerY: n.CI,
                height: n.AQ,
                ariaLabel: e.translate(
                  "Use left and right arrows to move selection"
                ),
              });
            {
              const e = h("PointedRectangle", [
                "axis",
                "tooltip",
                "background",
              ]);
              e.setAll({ cornerRadius: 0 }),
                l(e, "fill", t, "alternativeBackground");
            }
            h("Label", ["axis", "tooltip"]).setAll({ role: void 0 }),
              h("Label", ["axis", "tooltip", "y"]).setAll({
                textAlign: "right",
              }),
              h("Label", ["axis", "tooltip", "y", "opposite"]).setAll({
                textAlign: "left",
              }),
              h("Label", ["axis", "tooltip", "x"]).setAll({
                textAlign: "center",
              }),
              h("Tooltip", ["categoryaxis"]).setAll({
                labelText: "{category}",
              }),
              h("Star").setAll({ spikes: 5, innerRadius: 5, radius: 10 }),
              h("Tooltip", ["stock"]).setAll({
                paddingTop: 6,
                paddingBottom: 5,
                paddingLeft: 7,
                paddingRight: 7,
              }),
              h("PointedRectangle", ["tooltip", "stock", "axis"]).setAll({
                pointerLength: 0,
                pointerBaseWidth: 0,
                cornerRadius: 3,
              }),
              h("Label", ["tooltip", "stock"]).setAll({ fontSize: "0.8em" }),
              h("SpriteResizer").setAll({ rotationStep: 10 }),
              h("Container", ["resizer", "grip"]).states.create("hover", {});
            {
              const e = h("RoundedRectangle", ["resizer", "grip"]);
              e.setAll({
                strokeOpacity: 0.7,
                strokeWidth: 1,
                fillOpacity: 1,
                width: 12,
                height: 12,
              }),
                l(e, "fill", t, "background"),
                l(e, "stroke", t, "alternativeBackground");
            }
            {
              const e = h("RoundedRectangle", ["resizer", "grip", "outline"]);
              e.setAll({
                strokeOpacity: 0,
                fillOpacity: 0,
                width: 20,
                height: 20,
              }),
                e.states.create("hover", { fillOpacity: 0.3 }),
                l(e, "fill", t, "alternativeBackground");
            }
            h("RoundedRectangle", ["resizer", "grip", "left"]).setAll({
              cornerRadiusBL: 0,
              cornerRadiusBR: 0,
              cornerRadiusTL: 0,
              cornerRadiusTR: 0,
            }),
              h("RoundedRectangle", ["resizer", "grip", "right"]).setAll({
                cornerRadiusBL: 0,
                cornerRadiusBR: 0,
                cornerRadiusTL: 0,
                cornerRadiusTR: 0,
              });
            {
              const e = h("Rectangle", ["resizer", "rectangle"]);
              e.setAll({
                strokeDasharray: [2, 2],
                strokeOpacity: 0.5,
                strokeWidth: 1,
              }),
                l(e, "stroke", t, "alternativeBackground");
            }
          }
        }
      },
      9852: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            ArrayDisposer: function () {
              return u.rk;
            },
            Bullet: function () {
              return c.g;
            },
            Button: function () {
              return d.z;
            },
            CSVParser: function () {
              return de;
            },
            Chart: function () {
              return W.k;
            },
            Circle: function () {
              return p.C;
            },
            CirclePattern: function () {
              return re;
            },
            Color: function () {
              return k.Il;
            },
            ColorSet: function () {
              return le.U;
            },
            Component: function () {
              return _.w;
            },
            Container: function () {
              return v.W;
            },
            CounterDisposer: function () {
              return u.DM;
            },
            DataItem: function () {
              return _.z;
            },
            DataProcessor: function () {
              return pe;
            },
            DateFormatter: function () {
              return fe.C;
            },
            Disposer: function () {
              return u.ku;
            },
            DurationFormatter: function () {
              return ge.$;
            },
            Ellipse: function () {
              return g.P;
            },
            Entity: function () {
              return h.JH;
            },
            Gradient: function () {
              return Q.p;
            },
            Graphics: function () {
              return m.T;
            },
            GridLayout: function () {
              return y.M;
            },
            HeatLegend: function () {
              return S;
            },
            HorizontalLayout: function () {
              return C.G;
            },
            InterfaceColors: function () {
              return me.v;
            },
            JSONParser: function () {
              return ce;
            },
            JsonData: function () {
              return he.Q;
            },
            Label: function () {
              return w._;
            },
            Layout: function () {
              return N.A;
            },
            Legend: function () {
              return L.D;
            },
            Line: function () {
              return j.x;
            },
            LinePattern: function () {
              return ne;
            },
            LinearGradient: function () {
              return M.o;
            },
            ListData: function () {
              return he.k;
            },
            Modal: function () {
              return l.u;
            },
            MultiDisposer: function () {
              return u.FV;
            },
            MutableValueDisposer: function () {
              return u.cx;
            },
            NumberFormatter: function () {
              return be.e;
            },
            PathPattern: function () {
              return oe;
            },
            Pattern: function () {
              return te.c;
            },
            Percent: function () {
              return x.gG;
            },
            Picture: function () {
              return A.t;
            },
            PicturePattern: function () {
              return se.v;
            },
            PointedRectangle: function () {
              return R.i;
            },
            Polygon: function () {
              return f.m;
            },
            RadialGradient: function () {
              return ee;
            },
            RadialLabel: function () {
              return B.x;
            },
            RadialText: function () {
              return U.f;
            },
            Rectangle: function () {
              return F.A;
            },
            RectanglePattern: function () {
              return ae;
            },
            Root: function () {
              return n.f;
            },
            RoundedRectangle: function () {
              return O.c;
            },
            Scrollbar: function () {
              return H.L;
            },
            SerialChart: function () {
              return X.j;
            },
            Series: function () {
              return Y.F;
            },
            Slice: function () {
              return V.p;
            },
            Slider: function () {
              return z;
            },
            Sprite: function () {
              return G.j;
            },
            SpriteResizer: function () {
              return ve.b;
            },
            Star: function () {
              return b;
            },
            Template: function () {
              return P.YS;
            },
            Text: function () {
              return $.x;
            },
            TextFormatter: function () {
              return _e.V;
            },
            Theme: function () {
              return s.Q;
            },
            Tick: function () {
              return Z.d;
            },
            Timezone: function () {
              return q.r;
            },
            Tooltip: function () {
              return T.u;
            },
            Triangle: function () {
              return I;
            },
            VerticalLayout: function () {
              return K.Z;
            },
            addLicense: function () {
              return a.cP;
            },
            array: function () {
              return J;
            },
            color: function () {
              return k.$_;
            },
            disposeAllRootElements: function () {
              return a.UZ;
            },
            ease: function () {
              return ye;
            },
            math: function () {
              return ie;
            },
            net: function () {
              return r;
            },
            object: function () {
              return ue;
            },
            p0: function () {
              return x.p0;
            },
            p100: function () {
              return x.AQ;
            },
            p50: function () {
              return x.CI;
            },
            percent: function () {
              return x.aQ;
            },
            ready: function () {
              return o.ready;
            },
            registry: function () {
              return a.i_;
            },
            time: function () {
              return Oe;
            },
            type: function () {
              return E;
            },
            utils: function () {
              return o;
            },
          });
        var r = {};
        i.r(r),
          i.d(r, {
            load: function () {
              return we;
            },
            readBlob: function () {
              return xe;
            },
          });
        var n = i(6493),
          s = i(3409),
          a = i(3145),
          o = i(7652),
          l = i(8219),
          h = i(6331),
          u = i(7449),
          c = i(5108),
          d = i(8054),
          p = i(8035),
          f = i(7770),
          g = i(2433),
          m = i(1479);
        class b extends m.T {
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("radius") ||
                this.isDirty("innerRadius") ||
                this.isDirty("spikes")) &&
                (this._clear = !0);
          }
          _changed() {
            if ((super._changed(), this._clear)) {
              const e = this._display,
                t = this.get("radius", 0),
                i = o.relativeToValue(this.get("innerRadius", 0), t),
                r = this.get("spikes", 0),
                n = Math.PI / r;
              let s = (Math.PI / 2) * 3;
              e.moveTo(0, -t);
              for (let a = 0; a < r; a++)
                e.lineTo(Math.cos(s) * t, Math.sin(s) * t),
                  (s += n),
                  e.lineTo(Math.cos(s) * i, Math.sin(s) * i),
                  (s += n);
              e.lineTo(0, -t), e.closePath();
            }
          }
        }
        Object.defineProperty(b, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Star",
        }),
          Object.defineProperty(b, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: m.T.classNames.concat([b.className]),
          });
        var _ = i(9361),
          v = i(8777),
          y = i(6881),
          w = i(962),
          x = i(6245),
          O = i(3497),
          P = i(5769),
          D = i(7144),
          k = i(1112),
          T = i(2876),
          M = i(1747),
          E = i(5040);
        class S extends v.W {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "labelContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.children.push(v.W.new(this._root, {})),
              }),
              Object.defineProperty(this, "markerContainer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.children.push(v.W.new(this._root, {})),
              }),
              Object.defineProperty(this, "startLabel", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.labelContainer.children.push(
                  w._.new(this._root, { themeTags: ["start"] })
                ),
              }),
              Object.defineProperty(this, "endLabel", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.labelContainer.children.push(
                  w._.new(this._root, { themeTags: ["end"] })
                ),
              }),
              Object.defineProperty(this, "markers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new D.o(P.YS.new({}), () =>
                  O.c._new(
                    this._root,
                    {
                      themeTags: o.mergeTags(
                        this.markers.template.get("themeTags", []),
                        [this.get("orientation"), "heatlegend", "marker"]
                      ),
                    },
                    [this.markers.template]
                  )
                ),
              });
          }
          _afterNew() {
            (this._settings.themeTags = o.mergeTags(this._settings.themeTags, [
              "heatlegend",
              this._settings.orientation,
            ])),
              super._afterNew(),
              this.set(
                "tooltip",
                T.u.new(this._root, { themeTags: ["heatlegend"] })
              );
          }
          makeMarker() {
            const e = this.markers.make();
            return e.states.create("disabled", {}), e;
          }
          showValue(e, t, i) {
            const r = this.getTooltip();
            if (r && E.isNumber(e)) {
              const n = this.get("startValue", 0),
                s = (e - n) / (this.get("endValue", 1) - n),
                a = this.get("startColor"),
                o = this.get("endColor");
              let l;
              t || (t = this.getNumberFormatter().format(e)),
                i || (i = k.Il.interpolate(s, a, o)),
                r.label.set("text", t),
                (l =
                  "vertical" == this.get("orientation")
                    ? this.markerContainer.toGlobal({
                        x: 0,
                        y: this.innerHeight() * (1 - s),
                      })
                    : this.markerContainer.toGlobal({
                        x: this.innerWidth() * s,
                        y: 0,
                      }));
              let h = r.get("background");
              h && h.set("fill", k.Il.interpolate(s, a, o)),
                r.set("pointTo", l),
                r.show();
            }
          }
          _prepareChildren() {
            super._prepareChildren();
            const e = this.labelContainer,
              t = this.get("orientation"),
              i = this.startLabel,
              r = this.endLabel,
              n = this.getTooltip();
            if (
              (this.isDirty("orientation") &&
                ("vertical" == t
                  ? (this.markerContainer.setAll({
                      layout: this._root.verticalLayout,
                      height: x.AQ,
                    }),
                    this.set("layout", this._root.horizontalLayout),
                    i.setAll({
                      y: x.AQ,
                      x: void 0,
                      centerY: x.AQ,
                      centerX: x.AQ,
                    }),
                    r.setAll({ y: 0, x: void 0, centerY: 0, centerX: x.AQ }),
                    e.setAll({ height: x.AQ, width: void 0 }),
                    n && n.set("pointerOrientation", "horizontal"))
                  : (this.markerContainer.setAll({
                      layout: this._root.horizontalLayout,
                      width: x.AQ,
                    }),
                    this.set("layout", this._root.verticalLayout),
                    i.setAll({ x: 0, y: void 0, centerX: 0, centerY: 0 }),
                    r.setAll({ x: x.AQ, y: void 0, centerX: x.AQ, centerY: 0 }),
                    e.setAll({ width: x.AQ, height: void 0 }),
                    n && n.set("pointerOrientation", "vertical"))),
              this.isDirty("stepCount"))
            ) {
              const e = this.get("stepCount", 1),
                i = this.get("startColor"),
                r = this.get("endColor");
              if ((this.markerContainer.children.clear(), e > 1))
                for (let n = 0; n < e; n++) {
                  const s = this.makeMarker();
                  "vertical" == t
                    ? this.markerContainer.children.moveValue(s, 0)
                    : this.markerContainer.children.push(s),
                    i && r && s.set("fill", k.Il.interpolate(n / e, i, r));
                }
              else if (1 == e) {
                const e = this.makeMarker();
                this.markerContainer.children.push(e);
                const n = M.o.new(this._root, {
                  stops: [{ color: i }, { color: r }],
                });
                if ("vertical" == t) {
                  n.set("rotation", 90);
                  let e = n.get("stops");
                  e && e.reverse();
                } else n.set("rotation", 0);
                i && r && e.set("fillGradient", n);
              }
            }
            (this.isDirty("startText") || this.isDirty("startValue")) &&
              i.set(
                "text",
                this.get(
                  "startText",
                  this.getNumberFormatter().format(this.get("startValue", 0))
                )
              ),
              (this.isDirty("endText") || this.isDirty("endValue")) &&
                r.set(
                  "text",
                  this.get(
                    "endText",
                    this.getNumberFormatter().format(this.get("endValue", 1))
                  )
                );
          }
        }
        Object.defineProperty(S, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "HeatLegend",
        }),
          Object.defineProperty(S, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: v.W.classNames.concat([S.className]),
          });
        var C = i(4431),
          N = i(2010),
          L = i(3105),
          j = i(2077),
          A = i(5021),
          R = i(8931),
          B = i(815),
          U = i(4244),
          F = i(7142);
        class I extends m.T {
          _beforeChanged() {
            super._beforeChanged(),
              (this.isDirty("width") ||
                this.isDirty("height") ||
                this.isPrivateDirty("width") ||
                this.isPrivateDirty("height")) &&
                (this._clear = !0);
          }
          _changed() {
            super._changed(), this._clear && !this.get("draw") && this._draw();
          }
          _draw() {
            const e = this.width(),
              t = this.height(),
              i = this._display;
            i.moveTo(-e / 2, t / 2),
              i.lineTo(0, -t / 2),
              i.lineTo(e / 2, t / 2),
              i.lineTo(-e / 2, t / 2),
              i.closePath();
          }
          _updateSize() {
            this.markDirty(), (this._clear = !0);
          }
        }
        Object.defineProperty(I, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Triangle",
        }),
          Object.defineProperty(I, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: m.T.classNames.concat([I.className]),
          });
        var H = i(6001);
        class z extends H.L {
          _afterNew() {
            this._addOrientationClass(),
              super._afterNew(),
              this.endGrip.setPrivate("visible", !1),
              this.thumb.setPrivate("visible", !1);
          }
          updateGrips() {
            super.updateGrips();
            const e = this.startGrip;
            this.endGrip.setAll({ x: e.x(), y: e.y() }),
              this.setRaw("end", this.get("start"));
          }
        }
        Object.defineProperty(z, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Slider",
        }),
          Object.defineProperty(z, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.L.classNames.concat([z.className]),
          });
        var V = i(5863),
          G = i(4596),
          Y = i(3399),
          W = i(1337),
          X = i(5829),
          $ = i(2036),
          Z = i(2438),
          K = i(1706),
          q = i(462),
          Q = i(1437),
          J = i(5071);
        class ee extends Q.p {
          getFill(e) {
            const t = this.getBounds(e);
            let i = 0,
              r = 0,
              n = t.left || 0,
              s = t.right || 0,
              a = t.top || 0;
            const l = s - n,
              h = (t.bottom || 0) - a;
            let u = e.get("radius");
            E.isNumber(u)
              ? ((i = 0), (r = 0))
              : ((u = Math.min(l, h) / 2), (i = l / 2), (r = h / 2));
            let c = this.get("x"),
              d = this.get("y");
            null != c && (i = o.relativeToValue(c, l)),
              null != d && (r = o.relativeToValue(d, h));
            const p = this._root._renderer.createRadialGradient(
                i,
                r,
                0,
                i,
                r,
                u
              ),
              f = this.get("stops");
            if (f) {
              let e = 0;
              J.each(f, (t) => {
                let i = t.offset;
                E.isNumber(i) || (i = e / (f.length - 1));
                let r = t.opacity;
                E.isNumber(r) || (r = 1);
                let n = t.color;
                if (n) {
                  const e = t.lighten;
                  e && (n = k.Il.lighten(n, e));
                  const s = t.brighten;
                  s && (n = k.Il.brighten(n, s)),
                    p.addColorStop(
                      i,
                      "rgba(" + n.r + "," + n.g + "," + n.b + "," + r + ")"
                    );
                }
                e++;
              });
            }
            return p;
          }
        }
        Object.defineProperty(ee, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RadialGradient",
        }),
          Object.defineProperty(ee, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Q.p.classNames.concat([ee.className]),
          });
        var te = i(3437),
          ie = i(751);
        class re extends te.c {
          _beforeChanged() {
            super._beforeChanged(), this.isDirty("gap") && (this._clear = !0);
          }
          _draw() {
            super._draw();
            const e = this.get("checkered", !1),
              t = this.get("centered", !0),
              i = this.get("gap", 0),
              r = this.get("rotation", 0);
            let n = this.get("width", 100),
              s = this.get("height", 100),
              a = this.get("radius", 3),
              o = 2 * a + i,
              l = 2 * a + i,
              h = Math.round(n / o),
              u = Math.round(s / l);
            (o = n / h),
              (l = s / u),
              0 != r &&
                ((this._display.x = o * ie.cos(r)),
                (this._display.y = l * ie.sin(r)));
            const c = this.get("color"),
              d = this.get("colorOpacity");
            (c || d) && this._display.beginFill(c, d);
            for (let n = 0 == r ? 0 : 2 * -u; n < 2 * u; n++)
              for (let s = 0 == r ? 0 : 2 * -h; s < 2 * h; s++)
                if (
                  !e ||
                  (1 != (1 & n) && 1 != (1 & s)) ||
                  (1 == (1 & n) && 1 == (1 & s))
                ) {
                  let e = s * o,
                    r = n * l;
                  t && ((e += o + i / 2), (r += l + i / 2)),
                    this._display.drawCircle(e - a, r - a, a);
                }
            e
              ? ((n = n / 2 - 2 * i), (s = s / 2 - 2 * i))
              : ((n -= i), (s -= i)),
              (c || d) && this._display.endFill();
          }
        }
        Object.defineProperty(re, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "CirclePattern",
        }),
          Object.defineProperty(re, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: te.c.classNames.concat([re.className]),
          });
        class ne extends te.c {
          _beforeChanged() {
            super._beforeChanged(), this.isDirty("gap") && (this._clear = !0);
          }
          _draw() {
            super._draw();
            const e = this.get("width", 100),
              t = this.get("height", 100),
              i = this.get("gap", 0),
              r = this.get("strokeWidth", 1);
            if (i) {
              let n = i + r,
                s = t / n;
              for (let t = -s; t < 2 * s; t++) {
                const i = Math.round(t * n - n / 2) + 0.5;
                this._display.moveTo(-e, i), this._display.lineTo(2 * e, i);
              }
            } else this._display.moveTo(0, 0), this._display.lineTo(e, 0);
            this._display.lineStyle(
              r,
              this.get("color"),
              this.get("colorOpacity")
            );
            let n = this.get("strokeDasharray");
            E.isNumber(n) && (n = n < 0.5 ? [0] : [n]),
              this._display.setLineDash(n);
            const s = this.get("strokeDashoffset");
            s && this._display.setLineDashOffset(s), this._display.endStroke();
          }
        }
        Object.defineProperty(ne, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "LinePattern",
        }),
          Object.defineProperty(ne, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: te.c.classNames.concat([ne.className]),
          });
        var se = i(4429);
        class ae extends te.c {
          _beforeChanged() {
            super._beforeChanged(), this.isDirty("gap") && (this._clear = !0);
          }
          _draw() {
            super._draw();
            const e = this.get("checkered", !1),
              t = this.get("centered", !0),
              i = this.get("gap", 0),
              r = this.get("rotation", 0);
            let n = this.get("width", 100),
              s = this.get("height", 100),
              a = this.get("maxWidth", 5),
              o = this.get("maxHeight", 5),
              l = a + i,
              h = o + i,
              u = Math.round(n / l),
              c = Math.round(s / h);
            (l = n / u),
              (h = s / c),
              0 != r &&
                ((this._display.x = (l / 2) * ie.cos(r)),
                (this._display.y = (-h / 2) * ie.sin(r)));
            for (let i = 0 == r ? 0 : 2 * -c; i < 2 * c; i++)
              for (let n = 0 == r ? 0 : 2 * -u; n < 2 * u; n++)
                if (
                  !e ||
                  (1 != (1 & i) && 1 != (1 & n)) ||
                  (1 == (1 & i) && 1 == (1 & n))
                ) {
                  let e = n * l,
                    r = i * h;
                  t && ((e += (l - a) / 2), (r += (h - o) / 2)),
                    this._display.drawRect(e, r, a, o);
                }
            e
              ? ((n = n / 2 - 2 * i), (s = s / 2 - 2 * i))
              : ((n -= i), (s -= i));
            const d = this.get("color"),
              p = this.get("colorOpacity");
            (d || p) &&
              (this._display.beginFill(d, p), this._display.endFill());
          }
        }
        Object.defineProperty(ae, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RectanglePattern",
        }),
          Object.defineProperty(ae, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: te.c.classNames.concat([ae.className]),
          });
        class oe extends te.c {
          _beforeChanged() {
            super._beforeChanged(),
              this.isDirty("svgPath") && (this._clear = !0);
          }
          _draw() {
            super._draw();
            const e = this.get("svgPath");
            null != e && this._display.svgPath(e);
            const t = this.get("color"),
              i = this.get("colorOpacity");
            (t || i) &&
              (this._display.beginFill(t, i), this._display.endFill());
          }
        }
        Object.defineProperty(oe, "className", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PathPattern",
        }),
          Object.defineProperty(oe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: te.c.classNames.concat([oe.className]),
          });
        var le = i(2754),
          he = i(9582),
          ue = i(256);
        class ce {
          static parse(e, t) {
            t = this._applyDefaults(t);
            try {
              if (E.isString(e)) {
                let i = JSON.parse(e);
                return t.reverse && E.isArray(i) && i.reverse(), i;
              }
              if (E.isArray(e) || E.isObject(e)) return e;
              throw "Unable to parse JSON data";
            } catch (e) {
              return;
            }
          }
          static _applyDefaults(e) {
            const t = {};
            return (
              e || (e = {}),
              ue.each({ reverse: !1 }, (i, r) => {
                t[i] = e[i] || r;
              }),
              t
            );
          }
        }
        class de {
          static parse(e, t) {
            t = this._applyDefaults(t);
            let i,
              r,
              n,
              s = this.CSVToArray(e, t.delimiter),
              a = [],
              o = [];
            for (r = 0; r < t.skipRows; r++) s.shift();
            if (t.useColumnNames) {
              o = s.shift();
              for (let e = 0; e < o.length; e++)
                (i = null != o[e] ? o[e].replace(/^\s+|\s+$/gm, "") : ""),
                  "" === i && (i = "col" + e),
                  (o[e] = i);
            }
            for (; (n = t.reverse ? s.pop() : s.shift()), n; ) {
              if (t.skipEmpty && 1 === n.length && "" === n[0]) continue;
              let e = {};
              for (r = 0; r < n.length; r++)
                (i = void 0 === o[r] ? "col" + r : o[r]), (e[i] = n[r]);
              a.push(e);
            }
            return a;
          }
          static CSVToArray(e, t) {
            t = t || ",";
            let i = new RegExp(
                "(\\" +
                  t +
                  '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' +
                  t +
                  "\\r\\n]*))",
                "gi"
              ),
              r = [[]],
              n = null;
            for (; (n = i.exec(e)), n; ) {
              let e,
                i = n[1];
              i.length && i !== t && r.push([]),
                (e = n[2] ? n[2].replace(new RegExp('""', "g"), '"') : n[3]),
                r[r.length - 1].push(e);
            }
            return r;
          }
          static _applyDefaults(e) {
            const t = {};
            return (
              e || (e = {}),
              ue.each(
                {
                  delimiter: ",",
                  reverse: !1,
                  skipRows: 0,
                  skipEmpty: !0,
                  useColumnNames: !1,
                },
                (i, r) => {
                  t[i] = e[i] || r;
                }
              ),
              t
            );
          }
        }
        class pe extends h.JH {
          constructor() {
            super(...arguments),
              Object.defineProperty(this, "_checkDates", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_checkNumbers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_checkColors", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_checkEmpty", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(this, "_checkDeep", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1,
              });
          }
          _afterNew() {
            super._afterNew(),
              this._checkFeatures(),
              this.on("dateFields", () => this._checkFeatures()),
              this.on("dateFormat", () => this._checkFeatures()),
              this.on("numericFields", () => this._checkFeatures()),
              this.on("colorFields", () => this._checkFeatures()),
              this.on("emptyAs", () => this._checkFeatures());
          }
          _checkFeatures() {
            (this.isDirty("dateFields") || this.isDirty("dateFormat")) &&
              (this._checkDates =
                this.get("dateFields") && this.get("dateFields").length > 0),
              this.isDirty("numericFields") &&
                (this._checkNumbers =
                  this.get("numericFields") &&
                  this.get("numericFields").length > 0),
              this.isDirty("colorFields") &&
                (this._checkColors =
                  this.get("colorFields") &&
                  this.get("colorFields").length > 0),
              this.isDirty("emptyAs") &&
                (this._checkEmpty = null != this.get("emptyAs")),
              this._checkDeepFeatures();
          }
          _checkDeepFeatures() {
            const e = [];
            J.each(["dateFields", "numericFields", "colorFields"], (t) => {
              J.each(this.get(t, []), (t) => {
                const i = t.split(".");
                for (i.pop(); i.length > 0; ) e.push(i.join(".")), i.pop();
              });
            }),
              (this._checkDeep = e.length > 0),
              this.setPrivate("deepFields", e);
          }
          processMany(e) {
            E.isArray(e) &&
              (this._checkDates ||
                this._checkNumbers ||
                this._checkColors ||
                this._checkEmpty) &&
              J.each(e, (e) => {
                this.processRow(e);
              });
          }
          processRow(e, t = "") {
            ue.each(e, (i, r) => {
              const n = t + i;
              this._checkEmpty && (e[i] = this._maybeToEmpty(e[i])),
                this._checkNumbers && (e[i] = this._maybeToNumber(n, e[i])),
                this._checkDates && (e[i] = this._maybeToDate(n, e[i])),
                this._checkColors && (e[i] = this._maybeToColor(n, e[i])),
                this._checkDeep &&
                  -1 !== this.getPrivate("deepFields", []).indexOf(n) &&
                  E.isObject(e[i]) &&
                  this.processRow(e[i], n + ".");
            });
          }
          _maybeToNumber(e, t) {
            return -1 !== this.get("numericFields").indexOf(e)
              ? E.toNumber(t)
              : t;
          }
          _maybeToDate(e, t) {
            return -1 !== this.get("dateFields").indexOf(e)
              ? this._root.dateFormatter
                  .parse(t, this.get("dateFormat", ""))
                  .getTime()
              : t;
          }
          _maybeToEmpty(e) {
            return (null != e && "" != e) || null == this.get("emptyAs")
              ? e
              : this.get("emptyAs");
          }
          _maybeToColor(e, t) {
            return -1 !== this.get("colorFields").indexOf(e)
              ? k.Il.fromAny(t)
              : t;
          }
        }
        var fe = i(6460),
          ge = i(798),
          me = i(9821),
          be = i(780),
          _e = i(7255),
          ve = i(1195),
          ye = i(9395);
        function we(e, t, i) {
          return new Promise((r, n) => {
            let s = null != i && "blob" == i.responseType,
              a = new XMLHttpRequest();
            if (
              ((a.onload = () => {
                if (200 === a.status) {
                  let e, i;
                  if (s)
                    return (
                      (i = a.response),
                      void xe(i).then((e) => {
                        let n = {
                          xhr: a,
                          error: !1,
                          response: e,
                          blob: i,
                          type: a.getResponseHeader("Content-Type"),
                          target: t,
                        };
                        r(n);
                      })
                    );
                  e = a.responseText || a.response;
                  let n = {
                    xhr: a,
                    error: !1,
                    response: e,
                    blob: i,
                    type: a.getResponseHeader("Content-Type"),
                    target: t,
                  };
                  r(n);
                } else
                  n({
                    xhr: a,
                    error: !0,
                    type: a.getResponseHeader("Content-Type"),
                    target: t,
                  });
              }),
              (a.onerror = () => {
                n({
                  xhr: a,
                  error: !0,
                  type: a.getResponseHeader("Content-Type"),
                  target: t,
                });
              }),
              a.open("GET", e, !0),
              i && i.withCredentials && (a.withCredentials = !0),
              null != i)
            ) {
              if (null != i.requestHeaders)
                for (let e = 0; e < i.requestHeaders.length; e++) {
                  let t = i.requestHeaders[e];
                  a.setRequestHeader(t.key, t.value);
                }
              null != i.responseType && (a.responseType = i.responseType);
            }
            a.send();
          });
        }
        function xe(e) {
          return new Promise((t, i) => {
            const r = new FileReader();
            (r.onload = (e) => {
              t(r.result);
            }),
              (r.onerror = (e) => {
                i(e);
              }),
              r.readAsText(e);
          });
        }
        var Oe = i(1926);
      },
      3100: function (e, t) {
        "use strict";
        t.Z = {
          firstDayOfWeek: 1,
          _decimalSeparator: ".",
          _thousandSeparator: ",",
          _percentPrefix: null,
          _percentSuffix: "%",
          _big_number_suffix_3: "k",
          _big_number_suffix_6: "M",
          _big_number_suffix_9: "G",
          _big_number_suffix_12: "T",
          _big_number_suffix_15: "P",
          _big_number_suffix_18: "E",
          _big_number_suffix_21: "Z",
          _big_number_suffix_24: "Y",
          _small_number_suffix_3: "m",
          _small_number_suffix_6: "μ",
          _small_number_suffix_9: "n",
          _small_number_suffix_12: "p",
          _small_number_suffix_15: "f",
          _small_number_suffix_18: "a",
          _small_number_suffix_21: "z",
          _small_number_suffix_24: "y",
          _byte_suffix_B: "B",
          _byte_suffix_KB: "KB",
          _byte_suffix_MB: "MB",
          _byte_suffix_GB: "GB",
          _byte_suffix_TB: "TB",
          _byte_suffix_PB: "PB",
          _date: "yyyy-MM-dd",
          _date_millisecond: "mm:ss SSS",
          _date_millisecond_full: "HH:mm:ss SSS",
          _date_second: "HH:mm:ss",
          _date_second_full: "HH:mm:ss",
          _date_minute: "HH:mm",
          _date_minute_full: "HH:mm - MMM dd, yyyy",
          _date_hour: "HH:mm",
          _date_hour_full: "HH:mm - MMM dd, yyyy",
          _date_day: "MMM dd",
          _date_day_full: "MMM dd, yyyy",
          _date_week: "ww",
          _date_week_full: "MMM dd, yyyy",
          _date_month: "MMM",
          _date_month_full: "MMM, yyyy",
          _date_year: "yyyy",
          _duration_millisecond: "SSS",
          _duration_millisecond_second: "ss.SSS",
          _duration_millisecond_minute: "mm:ss SSS",
          _duration_millisecond_hour: "hh:mm:ss SSS",
          _duration_millisecond_day: "d'd' mm:ss SSS",
          _duration_millisecond_week: "d'd' mm:ss SSS",
          _duration_millisecond_month: "M'm' dd'd' mm:ss SSS",
          _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS",
          _duration_second: "ss",
          _duration_second_minute: "mm:ss",
          _duration_second_hour: "hh:mm:ss",
          _duration_second_day: "d'd' hh:mm:ss",
          _duration_second_week: "d'd' hh:mm:ss",
          _duration_second_month: "M'm' dd'd' hh:mm:ss",
          _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss",
          _duration_minute: "mm",
          _duration_minute_hour: "hh:mm",
          _duration_minute_day: "d'd' hh:mm",
          _duration_minute_week: "d'd' hh:mm",
          _duration_minute_month: "M'm' dd'd' hh:mm",
          _duration_minute_year: "y'y' MM'm' dd'd' hh:mm",
          _duration_hour: "hh'h'",
          _duration_hour_day: "d'd' hh'h'",
          _duration_hour_week: "d'd' hh'h'",
          _duration_hour_month: "M'm' dd'd' hh'h'",
          _duration_hour_year: "y'y' MM'm' dd'd' hh'h'",
          _duration_day: "d'd'",
          _duration_day_week: "d'd'",
          _duration_day_month: "M'm' dd'd'",
          _duration_day_year: "y'y' MM'm' dd'd'",
          _duration_week: "w'w'",
          _duration_week_month: "w'w'",
          _duration_week_year: "w'w'",
          _duration_month: "M'm'",
          _duration_month_year: "y'y' MM'm'",
          _duration_year: "y'y'",
          _era_ad: "AD",
          _era_bc: "BC",
          A: "",
          P: "",
          AM: "",
          PM: "",
          "A.M.": "",
          "P.M.": "",
          January: "",
          February: "",
          March: "",
          April: "",
          May: "",
          June: "",
          July: "",
          August: "",
          September: "",
          October: "",
          November: "",
          December: "",
          Jan: "",
          Feb: "",
          Mar: "",
          Apr: "",
          "May(short)": "May",
          Jun: "",
          Jul: "",
          Aug: "",
          Sep: "",
          Oct: "",
          Nov: "",
          Dec: "",
          Sunday: "",
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sun: "",
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
          Sat: "",
          _dateOrd: function (e) {
            let t = "th";
            if (e < 11 || e > 13)
              switch (e % 10) {
                case 1:
                  t = "st";
                  break;
                case 2:
                  t = "nd";
                  break;
                case 3:
                  t = "rd";
              }
            return t;
          },
          "Zoom Out": "",
          Play: "",
          Stop: "",
          Legend: "",
          "Press ENTER to toggle": "",
          Loading: "",
          Home: "",
          Chart: "",
          "Serial chart": "",
          "X/Y chart": "",
          "Pie chart": "",
          "Gauge chart": "",
          "Radar chart": "",
          "Sankey diagram": "",
          "Flow diagram": "",
          "Chord diagram": "",
          "TreeMap chart": "",
          "Force directed tree": "",
          "Sliced chart": "",
          Series: "",
          "Candlestick Series": "",
          "OHLC Series": "",
          "Column Series": "",
          "Line Series": "",
          "Pie Slice Series": "",
          "Funnel Series": "",
          "Pyramid Series": "",
          "X/Y Series": "",
          Map: "",
          "Press ENTER to zoom in": "",
          "Press ENTER to zoom out": "",
          "Use arrow keys to zoom in and out": "",
          "Use plus and minus keys on your keyboard to zoom in and out": "",
          Export: "",
          Image: "",
          Data: "",
          Print: "",
          "Press ENTER or use arrow keys to navigate": "",
          "Press ENTER to open": "",
          "Press ENTER to print.": "",
          "Press ENTER to export as %1.": "",
          "(Press ESC to close this message)": "",
          "Image Export Complete": "",
          "Export operation took longer than expected. Something might have gone wrong.":
            "",
          "Saved from": "",
          PNG: "",
          JPG: "",
          GIF: "",
          SVG: "",
          PDF: "",
          JSON: "",
          CSV: "",
          XLSX: "",
          HTML: "",
          "Use TAB to select grip buttons or left and right arrows to change selection":
            "",
          "Use left and right arrows to move selection": "",
          "Use left and right arrows to move left selection": "",
          "Use left and right arrows to move right selection": "",
          "Use TAB select grip buttons or up and down arrows to change selection":
            "",
          "Use up and down arrows to move selection": "",
          "Use up and down arrows to move lower selection": "",
          "Use up and down arrows to move upper selection": "",
          "From %1 to %2": "",
          "From %1": "",
          "To %1": "",
          "No parser available for file: %1": "",
          "Error parsing file: %1": "",
          "Unable to load file: %1": "",
          "Invalid date": "",
          Close: "",
          Minimize: "",
        };
      },
      9629: function (e) {
        var t = (function (e) {
          "use strict";
          var t,
            i = Object.prototype,
            r = i.hasOwnProperty,
            n =
              Object.defineProperty ||
              function (e, t, i) {
                e[t] = i.value;
              },
            s = "function" == typeof Symbol ? Symbol : {},
            a = s.iterator || "@@iterator",
            o = s.asyncIterator || "@@asyncIterator",
            l = s.toStringTag || "@@toStringTag";
          function h(e, t, i) {
            return (
              Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            h({}, "");
          } catch (e) {
            h = function (e, t, i) {
              return (e[t] = i);
            };
          }
          function u(e, t, i, r) {
            var s = t && t.prototype instanceof m ? t : m,
              a = Object.create(s.prototype),
              o = new E(r || []);
            return n(a, "_invoke", { value: D(e, i, o) }), a;
          }
          function c(e, t, i) {
            try {
              return { type: "normal", arg: e.call(t, i) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = u;
          var d = "suspendedStart",
            p = "executing",
            f = "completed",
            g = {};
          function m() {}
          function b() {}
          function _() {}
          var v = {};
          h(v, a, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            w = y && y(y(S([])));
          w && w !== i && r.call(w, a) && (v = w);
          var x = (_.prototype = m.prototype = Object.create(v));
          function O(e) {
            ["next", "throw", "return"].forEach(function (t) {
              h(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function P(e, t) {
            function i(n, s, a, o) {
              var l = c(e[n], e, s);
              if ("throw" !== l.type) {
                var h = l.arg,
                  u = h.value;
                return u && "object" == typeof u && r.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        i("next", e, a, o);
                      },
                      function (e) {
                        i("throw", e, a, o);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (h.value = e), a(h);
                      },
                      function (e) {
                        return i("throw", e, a, o);
                      }
                    );
              }
              o(l.arg);
            }
            var s;
            n(this, "_invoke", {
              value: function (e, r) {
                function n() {
                  return new t(function (t, n) {
                    i(e, r, t, n);
                  });
                }
                return (s = s ? s.then(n, n) : n());
              },
            });
          }
          function D(e, t, i) {
            var r = d;
            return function (n, s) {
              if (r === p) throw new Error("Generator is already running");
              if (r === f) {
                if ("throw" === n) throw s;
                return C();
              }
              for (i.method = n, i.arg = s; ; ) {
                var a = i.delegate;
                if (a) {
                  var o = k(a, i);
                  if (o) {
                    if (o === g) continue;
                    return o;
                  }
                }
                if ("next" === i.method) i.sent = i._sent = i.arg;
                else if ("throw" === i.method) {
                  if (r === d) throw ((r = f), i.arg);
                  i.dispatchException(i.arg);
                } else "return" === i.method && i.abrupt("return", i.arg);
                r = p;
                var l = c(e, t, i);
                if ("normal" === l.type) {
                  if (((r = i.done ? f : "suspendedYield"), l.arg === g))
                    continue;
                  return { value: l.arg, done: i.done };
                }
                "throw" === l.type &&
                  ((r = f), (i.method = "throw"), (i.arg = l.arg));
              }
            };
          }
          function k(e, i) {
            var r = i.method,
              n = e.iterator[r];
            if (n === t)
              return (
                (i.delegate = null),
                ("throw" === r &&
                  e.iterator.return &&
                  ((i.method = "return"),
                  (i.arg = t),
                  k(e, i),
                  "throw" === i.method)) ||
                  ("return" !== r &&
                    ((i.method = "throw"),
                    (i.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                g
              );
            var s = c(n, e.iterator, i.arg);
            if ("throw" === s.type)
              return (
                (i.method = "throw"), (i.arg = s.arg), (i.delegate = null), g
              );
            var a = s.arg;
            return a
              ? a.done
                ? ((i[e.resultName] = a.value),
                  (i.next = e.nextLoc),
                  "return" !== i.method && ((i.method = "next"), (i.arg = t)),
                  (i.delegate = null),
                  g)
                : a
              : ((i.method = "throw"),
                (i.arg = new TypeError("iterator result is not an object")),
                (i.delegate = null),
                g);
          }
          function T(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function M(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function E(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(T, this),
              this.reset(!0);
          }
          function S(e) {
            if (e) {
              var i = e[a];
              if (i) return i.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  s = function i() {
                    for (; ++n < e.length; )
                      if (r.call(e, n))
                        return (i.value = e[n]), (i.done = !1), i;
                    return (i.value = t), (i.done = !0), i;
                  };
                return (s.next = s);
              }
            }
            return { next: C };
          }
          function C() {
            return { value: t, done: !0 };
          }
          return (
            (b.prototype = _),
            n(x, "constructor", { value: _, configurable: !0 }),
            n(_, "constructor", { value: b, configurable: !0 }),
            (b.displayName = h(_, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === b || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, _)
                  : ((e.__proto__ = _), h(e, l, "GeneratorFunction")),
                (e.prototype = Object.create(x)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            O(P.prototype),
            h(P.prototype, o, function () {
              return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, i, r, n, s) {
              void 0 === s && (s = Promise);
              var a = new P(u(t, i, r, n), s);
              return e.isGeneratorFunction(i)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            O(x),
            h(x, l, "Generator"),
            h(x, a, function () {
              return this;
            }),
            h(x, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = Object(e),
                i = [];
              for (var r in t) i.push(r);
              return (
                i.reverse(),
                function e() {
                  for (; i.length; ) {
                    var r = i.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (e.values = S),
            (E.prototype = {
              constructor: E,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(M),
                  !e)
                )
                  for (var i in this)
                    "t" === i.charAt(0) &&
                      r.call(this, i) &&
                      !isNaN(+i.slice(1)) &&
                      (this[i] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var i = this;
                function n(r, n) {
                  return (
                    (o.type = "throw"),
                    (o.arg = e),
                    (i.next = r),
                    n && ((i.method = "next"), (i.arg = t)),
                    !!n
                  );
                }
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                  var a = this.tryEntries[s],
                    o = a.completion;
                  if ("root" === a.tryLoc) return n("end");
                  if (a.tryLoc <= this.prev) {
                    var l = r.call(a, "catchLoc"),
                      h = r.call(a, "finallyLoc");
                    if (l && h) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    } else if (l) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    } else {
                      if (!h)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var n = this.tryEntries[i];
                  if (
                    n.tryLoc <= this.prev &&
                    r.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var s = n;
                    break;
                  }
                }
                s &&
                  ("break" === e || "continue" === e) &&
                  s.tryLoc <= t &&
                  t <= s.finallyLoc &&
                  (s = null);
                var a = s ? s.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  s
                    ? ((this.method = "next"), (this.next = s.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  g
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var i = this.tryEntries[t];
                  if (i.finallyLoc === e)
                    return this.complete(i.completion, i.afterLoc), M(i), g;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var i = this.tryEntries[t];
                  if (i.tryLoc === e) {
                    var r = i.completion;
                    if ("throw" === r.type) {
                      var n = r.arg;
                      M(i);
                    }
                    return n;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, i, r) {
                return (
                  (this.delegate = {
                    iterator: S(e),
                    resultName: i,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      5125: function (e, t, i) {
        "use strict";
        function r(e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        i.d(t, {
          mG: function () {
            return r;
          },
        }),
          Object.create,
          Object.create;
      },
      8494: function (e, t, i) {
        "use strict";
        i.r(t),
          i.d(t, {
            am5: function () {
              return g;
            },
          });
        const r = window.Promise,
          n = r && r.prototype.then,
          s = r && r.prototype.catch,
          a = r && r.prototype.finally,
          o = r && r.reject,
          l = r && r.resolve,
          h = r && r.allSettled,
          u = r && r.all,
          c = r && r.race,
          d = window.fetch,
          p = String.prototype.startsWith,
          f = String.prototype.endsWith;
        i(9629);
        const g = i(9852);
        var m;
        (i.p =
          ((m = (function () {
            if (document.currentScript) return document.currentScript;
            var e = document.getElementsByTagName("script");
            return e[e.length - 1];
          })().src),
          /(.*\/)[^\/]*$/.exec(m)[1])),
          r &&
            ((window.Promise = r),
            n && (r.prototype.then = n),
            s && (r.prototype.catch = s),
            a && (r.prototype.finally = a),
            o && (r.reject = o),
            l && (r.resolve = l),
            h && (r.allSettled = h),
            u && (r.all = u),
            c && (r.race = c)),
          d && (window.fetch = d),
          p && (String.prototype.startsWith = p),
          f && (String.prototype.endsWith = f);
      },
      4138: function (e, t) {
        "use strict";
        var i = { value: () => {} };
        function r() {
          for (var e, t = 0, i = arguments.length, r = {}; t < i; ++t) {
            if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
              throw new Error("illegal type: " + e);
            r[e] = [];
          }
          return new n(r);
        }
        function n(e) {
          this._ = e;
        }
        function s(e, t) {
          return e
            .trim()
            .split(/^|\s+/)
            .map(function (e) {
              var i = "",
                r = e.indexOf(".");
              if (
                (r >= 0 && ((i = e.slice(r + 1)), (e = e.slice(0, r))),
                e && !t.hasOwnProperty(e))
              )
                throw new Error("unknown type: " + e);
              return { type: e, name: i };
            });
        }
        function a(e, t) {
          for (var i, r = 0, n = e.length; r < n; ++r)
            if ((i = e[r]).name === t) return i.value;
        }
        function o(e, t, r) {
          for (var n = 0, s = e.length; n < s; ++n)
            if (e[n].name === t) {
              (e[n] = i), (e = e.slice(0, n).concat(e.slice(n + 1)));
              break;
            }
          return null != r && e.push({ name: t, value: r }), e;
        }
        (n.prototype = r.prototype =
          {
            constructor: n,
            on: function (e, t) {
              var i,
                r = this._,
                n = s(e + "", r),
                l = -1,
                h = n.length;
              if (!(arguments.length < 2)) {
                if (null != t && "function" != typeof t)
                  throw new Error("invalid callback: " + t);
                for (; ++l < h; )
                  if ((i = (e = n[l]).type)) r[i] = o(r[i], e.name, t);
                  else if (null == t) for (i in r) r[i] = o(r[i], e.name, null);
                return this;
              }
              for (; ++l < h; )
                if ((i = (e = n[l]).type) && (i = a(r[i], e.name))) return i;
            },
            copy: function () {
              var e = {},
                t = this._;
              for (var i in t) e[i] = t[i].slice();
              return new n(e);
            },
            call: function (e, t) {
              if ((i = arguments.length - 2) > 0)
                for (var i, r, n = new Array(i), s = 0; s < i; ++s)
                  n[s] = arguments[s + 2];
              if (!this._.hasOwnProperty(e))
                throw new Error("unknown type: " + e);
              for (s = 0, i = (r = this._[e]).length; s < i; ++s)
                r[s].value.apply(t, n);
            },
            apply: function (e, t, i) {
              if (!this._.hasOwnProperty(e))
                throw new Error("unknown type: " + e);
              for (var r = this._[e], n = 0, s = r.length; n < s; ++n)
                r[n].value.apply(t, i);
            },
          }),
          (t.Z = r);
      },
      5493: function (e, t, i) {
        "use strict";
        i.d(t, {
          ET: function () {
            return h;
          },
          y$: function () {
            return l;
          },
        });
        const r = Math.PI,
          n = 2 * r,
          s = 1e-6,
          a = n - s;
        function o(e) {
          this._ += e[0];
          for (let t = 1, i = e.length; t < i; ++t)
            this._ += arguments[t] + e[t];
        }
        class l {
          constructor(e) {
            (this._x0 = this._y0 = this._x1 = this._y1 = null),
              (this._ = ""),
              (this._append =
                null == e
                  ? o
                  : (function (e) {
                      let t = Math.floor(e);
                      if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
                      if (t > 15) return o;
                      const i = 10 ** t;
                      return function (e) {
                        this._ += e[0];
                        for (let t = 1, r = e.length; t < r; ++t)
                          this._ += Math.round(arguments[t] * i) / i + e[t];
                      };
                    })(e));
          }
          moveTo(e, t) {
            this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 =
              +t)}`;
          }
          closePath() {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
          }
          lineTo(e, t) {
            this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
          }
          quadraticCurveTo(e, t, i, r) {
            this._append`Q${+e},${+t},${(this._x1 = +i)},${(this._y1 = +r)}`;
          }
          bezierCurveTo(e, t, i, r, n, s) {
            this._append`C${+e},${+t},${+i},${+r},${(this._x1 =
              +n)},${(this._y1 = +s)}`;
          }
          arcTo(e, t, i, n, a) {
            if (((e = +e), (t = +t), (i = +i), (n = +n), (a = +a) < 0))
              throw new Error(`negative radius: ${a}`);
            let o = this._x1,
              l = this._y1,
              h = i - e,
              u = n - t,
              c = o - e,
              d = l - t,
              p = c * c + d * d;
            if (null === this._x1)
              this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
            else if (p > s)
              if (Math.abs(d * h - u * c) > s && a) {
                let f = i - o,
                  g = n - l,
                  m = h * h + u * u,
                  b = f * f + g * g,
                  _ = Math.sqrt(m),
                  v = Math.sqrt(p),
                  y =
                    a *
                    Math.tan((r - Math.acos((m + p - b) / (2 * _ * v))) / 2),
                  w = y / v,
                  x = y / _;
                Math.abs(w - 1) > s && this._append`L${e + w * c},${t + w * d}`,
                  this._append`A${a},${a},0,0,${+(d * f > c * g)},${(this._x1 =
                    e + x * h)},${(this._y1 = t + x * u)}`;
              } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
          }
          arc(e, t, i, o, l, h) {
            if (((e = +e), (t = +t), (h = !!h), (i = +i) < 0))
              throw new Error(`negative radius: ${i}`);
            let u = i * Math.cos(o),
              c = i * Math.sin(o),
              d = e + u,
              p = t + c,
              f = 1 ^ h,
              g = h ? o - l : l - o;
            null === this._x1
              ? this._append`M${d},${p}`
              : (Math.abs(this._x1 - d) > s || Math.abs(this._y1 - p) > s) &&
                this._append`L${d},${p}`,
              i &&
                (g < 0 && (g = (g % n) + n),
                g > a
                  ? this._append`A${i},${i},0,1,${f},${e - u},${
                      t - c
                    }A${i},${i},0,1,${f},${(this._x1 = d)},${(this._y1 = p)}`
                  : g > s &&
                    this._append`A${i},${i},0,${+(g >= r)},${f},${(this._x1 =
                      e + i * Math.cos(l))},${(this._y1 =
                      t + i * Math.sin(l))}`);
          }
          rect(e, t, i, r) {
            this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 =
              +t)}h${(i = +i)}v${+r}h${-i}Z`;
          }
          toString() {
            return this._;
          }
        }
        function h() {
          return new l();
        }
        h.prototype = l.prototype;
      },
      832: function (e, t, i) {
        "use strict";
        i.d(t, {
          Z: function () {
            return D;
          },
        });
        var r = i(3141);
        const n = Math.abs,
          s = Math.atan2,
          a = Math.cos,
          o = Math.max,
          l = Math.min,
          h = Math.sin,
          u = Math.sqrt,
          c = 1e-12,
          d = Math.PI,
          p = d / 2,
          f = 2 * d;
        function g(e) {
          return e > 1 ? 0 : e < -1 ? d : Math.acos(e);
        }
        function m(e) {
          return e >= 1 ? p : e <= -1 ? -p : Math.asin(e);
        }
        var b = i(5987);
        function _(e) {
          return e.innerRadius;
        }
        function v(e) {
          return e.outerRadius;
        }
        function y(e) {
          return e.startAngle;
        }
        function w(e) {
          return e.endAngle;
        }
        function x(e) {
          return e && e.padAngle;
        }
        function O(e, t, i, r, n, s, a, o) {
          var l = i - e,
            h = r - t,
            u = a - n,
            d = o - s,
            p = d * l - u * h;
          if (!(p * p < c))
            return [e + (p = (u * (t - s) - d * (e - n)) / p) * l, t + p * h];
        }
        function P(e, t, i, r, n, s, a) {
          var l = e - i,
            h = t - r,
            c = (a ? s : -s) / u(l * l + h * h),
            d = c * h,
            p = -c * l,
            f = e + d,
            g = t + p,
            m = i + d,
            b = r + p,
            _ = (f + m) / 2,
            v = (g + b) / 2,
            y = m - f,
            w = b - g,
            x = y * y + w * w,
            O = n - s,
            P = f * b - m * g,
            D = (w < 0 ? -1 : 1) * u(o(0, O * O * x - P * P)),
            k = (P * w - y * D) / x,
            T = (-P * y - w * D) / x,
            M = (P * w + y * D) / x,
            E = (-P * y + w * D) / x,
            S = k - _,
            C = T - v,
            N = M - _,
            L = E - v;
          return (
            S * S + C * C > N * N + L * L && ((k = M), (T = E)),
            {
              cx: k,
              cy: T,
              x01: -d,
              y01: -p,
              x11: k * (n / O - 1),
              y11: T * (n / O - 1),
            }
          );
        }
        function D() {
          var e = _,
            t = v,
            i = (0, r.Z)(0),
            o = null,
            D = y,
            k = w,
            T = x,
            M = null,
            E = (0, b.d)(S);
          function S() {
            var r,
              b,
              _ = +e.apply(this, arguments),
              v = +t.apply(this, arguments),
              y = D.apply(this, arguments) - p,
              w = k.apply(this, arguments) - p,
              x = n(w - y),
              S = w > y;
            if (
              (M || (M = r = E()), v < _ && ((b = v), (v = _), (_ = b)), v > c)
            )
              if (x > f - c)
                M.moveTo(v * a(y), v * h(y)),
                  M.arc(0, 0, v, y, w, !S),
                  _ > c &&
                    (M.moveTo(_ * a(w), _ * h(w)), M.arc(0, 0, _, w, y, S));
              else {
                var C,
                  N,
                  L = y,
                  j = w,
                  A = y,
                  R = w,
                  B = x,
                  U = x,
                  F = T.apply(this, arguments) / 2,
                  I =
                    F > c && (o ? +o.apply(this, arguments) : u(_ * _ + v * v)),
                  H = l(n(v - _) / 2, +i.apply(this, arguments)),
                  z = H,
                  V = H;
                if (I > c) {
                  var G = m((I / _) * h(F)),
                    Y = m((I / v) * h(F));
                  (B -= 2 * G) > c
                    ? ((A += G *= S ? 1 : -1), (R -= G))
                    : ((B = 0), (A = R = (y + w) / 2)),
                    (U -= 2 * Y) > c
                      ? ((L += Y *= S ? 1 : -1), (j -= Y))
                      : ((U = 0), (L = j = (y + w) / 2));
                }
                var W = v * a(L),
                  X = v * h(L),
                  $ = _ * a(R),
                  Z = _ * h(R);
                if (H > c) {
                  var K,
                    q = v * a(j),
                    Q = v * h(j),
                    J = _ * a(A),
                    ee = _ * h(A);
                  if (x < d)
                    if ((K = O(W, X, J, ee, q, Q, $, Z))) {
                      var te = W - K[0],
                        ie = X - K[1],
                        re = q - K[0],
                        ne = Q - K[1],
                        se =
                          1 /
                          h(
                            g(
                              (te * re + ie * ne) /
                                (u(te * te + ie * ie) * u(re * re + ne * ne))
                            ) / 2
                          ),
                        ae = u(K[0] * K[0] + K[1] * K[1]);
                      (z = l(H, (_ - ae) / (se - 1))),
                        (V = l(H, (v - ae) / (se + 1)));
                    } else z = V = 0;
                }
                U > c
                  ? V > c
                    ? ((C = P(J, ee, W, X, v, V, S)),
                      (N = P(q, Q, $, Z, v, V, S)),
                      M.moveTo(C.cx + C.x01, C.cy + C.y01),
                      V < H
                        ? M.arc(
                            C.cx,
                            C.cy,
                            V,
                            s(C.y01, C.x01),
                            s(N.y01, N.x01),
                            !S
                          )
                        : (M.arc(
                            C.cx,
                            C.cy,
                            V,
                            s(C.y01, C.x01),
                            s(C.y11, C.x11),
                            !S
                          ),
                          M.arc(
                            0,
                            0,
                            v,
                            s(C.cy + C.y11, C.cx + C.x11),
                            s(N.cy + N.y11, N.cx + N.x11),
                            !S
                          ),
                          M.arc(
                            N.cx,
                            N.cy,
                            V,
                            s(N.y11, N.x11),
                            s(N.y01, N.x01),
                            !S
                          )))
                    : (M.moveTo(W, X), M.arc(0, 0, v, L, j, !S))
                  : M.moveTo(W, X),
                  _ > c && B > c
                    ? z > c
                      ? ((C = P($, Z, q, Q, _, -z, S)),
                        (N = P(W, X, J, ee, _, -z, S)),
                        M.lineTo(C.cx + C.x01, C.cy + C.y01),
                        z < H
                          ? M.arc(
                              C.cx,
                              C.cy,
                              z,
                              s(C.y01, C.x01),
                              s(N.y01, N.x01),
                              !S
                            )
                          : (M.arc(
                              C.cx,
                              C.cy,
                              z,
                              s(C.y01, C.x01),
                              s(C.y11, C.x11),
                              !S
                            ),
                            M.arc(
                              0,
                              0,
                              _,
                              s(C.cy + C.y11, C.cx + C.x11),
                              s(N.cy + N.y11, N.cx + N.x11),
                              S
                            ),
                            M.arc(
                              N.cx,
                              N.cy,
                              z,
                              s(N.y11, N.x11),
                              s(N.y01, N.x01),
                              !S
                            )))
                      : M.arc(0, 0, _, R, A, S)
                    : M.lineTo($, Z);
              }
            else M.moveTo(0, 0);
            if ((M.closePath(), r)) return (M = null), r + "" || null;
          }
          return (
            (S.centroid = function () {
              var i =
                  (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2,
                r =
                  (+D.apply(this, arguments) + +k.apply(this, arguments)) / 2 -
                  d / 2;
              return [a(r) * i, h(r) * i];
            }),
            (S.innerRadius = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : (0, r.Z)(+t)), S)
                : e;
            }),
            (S.outerRadius = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : (0, r.Z)(+e)), S)
                : t;
            }),
            (S.cornerRadius = function (e) {
              return arguments.length
                ? ((i = "function" == typeof e ? e : (0, r.Z)(+e)), S)
                : i;
            }),
            (S.padRadius = function (e) {
              return arguments.length
                ? ((o =
                    null == e
                      ? null
                      : "function" == typeof e
                      ? e
                      : (0, r.Z)(+e)),
                  S)
                : o;
            }),
            (S.startAngle = function (e) {
              return arguments.length
                ? ((D = "function" == typeof e ? e : (0, r.Z)(+e)), S)
                : D;
            }),
            (S.endAngle = function (e) {
              return arguments.length
                ? ((k = "function" == typeof e ? e : (0, r.Z)(+e)), S)
                : k;
            }),
            (S.padAngle = function (e) {
              return arguments.length
                ? ((T = "function" == typeof e ? e : (0, r.Z)(+e)), S)
                : T;
            }),
            (S.context = function (e) {
              return arguments.length ? ((M = null == e ? null : e), S) : M;
            }),
            S
          );
        }
      },
      3794: function (e, t, i) {
        "use strict";
        i.d(t, {
          Z: function () {
            return h;
          },
        });
        var r = i(8457),
          n = i(3141),
          s = i(964),
          a = i(774),
          o = i(5987),
          l = i(6758);
        function h(e, t, i) {
          var h = null,
            u = (0, n.Z)(!0),
            c = null,
            d = s.Z,
            p = null,
            f = (0, o.d)(g);
          function g(n) {
            var s,
              a,
              o,
              l,
              g,
              m = (n = (0, r.Z)(n)).length,
              b = !1,
              _ = new Array(m),
              v = new Array(m);
            for (null == c && (p = d((g = f()))), s = 0; s <= m; ++s) {
              if (!(s < m && u((l = n[s]), s, n)) === b)
                if ((b = !b)) (a = s), p.areaStart(), p.lineStart();
                else {
                  for (p.lineEnd(), p.lineStart(), o = s - 1; o >= a; --o)
                    p.point(_[o], v[o]);
                  p.lineEnd(), p.areaEnd();
                }
              b &&
                ((_[s] = +e(l, s, n)),
                (v[s] = +t(l, s, n)),
                p.point(h ? +h(l, s, n) : _[s], i ? +i(l, s, n) : v[s]));
            }
            if (g) return (p = null), g + "" || null;
          }
          function m() {
            return (0, a.Z)().defined(u).curve(d).context(c);
          }
          return (
            (e =
              "function" == typeof e ? e : void 0 === e ? l.x : (0, n.Z)(+e)),
            (t =
              "function" == typeof t
                ? t
                : void 0 === t
                ? (0, n.Z)(0)
                : (0, n.Z)(+t)),
            (i =
              "function" == typeof i ? i : void 0 === i ? l.y : (0, n.Z)(+i)),
            (g.x = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : (0, n.Z)(+t)),
                  (h = null),
                  g)
                : e;
            }),
            (g.x0 = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : (0, n.Z)(+t)), g)
                : e;
            }),
            (g.x1 = function (e) {
              return arguments.length
                ? ((h =
                    null == e
                      ? null
                      : "function" == typeof e
                      ? e
                      : (0, n.Z)(+e)),
                  g)
                : h;
            }),
            (g.y = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : (0, n.Z)(+e)),
                  (i = null),
                  g)
                : t;
            }),
            (g.y0 = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : (0, n.Z)(+e)), g)
                : t;
            }),
            (g.y1 = function (e) {
              return arguments.length
                ? ((i =
                    null == e
                      ? null
                      : "function" == typeof e
                      ? e
                      : (0, n.Z)(+e)),
                  g)
                : i;
            }),
            (g.lineX0 = g.lineY0 =
              function () {
                return m().x(e).y(t);
              }),
            (g.lineY1 = function () {
              return m().x(e).y(i);
            }),
            (g.lineX1 = function () {
              return m().x(h).y(t);
            }),
            (g.defined = function (e) {
              return arguments.length
                ? ((u = "function" == typeof e ? e : (0, n.Z)(!!e)), g)
                : u;
            }),
            (g.curve = function (e) {
              return arguments.length
                ? ((d = e), null != c && (p = d(c)), g)
                : d;
            }),
            (g.context = function (e) {
              return arguments.length
                ? (null == e ? (c = p = null) : (p = d((c = e))), g)
                : c;
            }),
            g
          );
        }
      },
      8457: function (e, t, i) {
        "use strict";
        function r(e) {
          return "object" == typeof e && "length" in e ? e : Array.from(e);
        }
        i.d(t, {
          Z: function () {
            return r;
          },
        }),
          Array.prototype.slice;
      },
      3141: function (e, t, i) {
        "use strict";
        function r(e) {
          return function () {
            return e;
          };
        }
        i.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      964: function (e, t, i) {
        "use strict";
        function r(e) {
          this._context = e;
        }
        function n(e) {
          return new r(e);
        }
        i.d(t, {
          Z: function () {
            return n;
          },
        }),
          (r.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              this._point = 0;
            },
            lineEnd: function () {
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (e, t) {
              switch (((e = +e), (t = +t), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(e, t)
                      : this._context.moveTo(e, t);
                  break;
                case 1:
                  this._point = 2;
                default:
                  this._context.lineTo(e, t);
              }
            },
          });
      },
      774: function (e, t, i) {
        "use strict";
        i.d(t, {
          Z: function () {
            return l;
          },
        });
        var r = i(8457),
          n = i(3141),
          s = i(964),
          a = i(5987),
          o = i(6758);
        function l(e, t) {
          var i = (0, n.Z)(!0),
            l = null,
            h = s.Z,
            u = null,
            c = (0, a.d)(d);
          function d(n) {
            var s,
              a,
              o,
              d = (n = (0, r.Z)(n)).length,
              p = !1;
            for (null == l && (u = h((o = c()))), s = 0; s <= d; ++s)
              !(s < d && i((a = n[s]), s, n)) === p &&
                ((p = !p) ? u.lineStart() : u.lineEnd()),
                p && u.point(+e(a, s, n), +t(a, s, n));
            if (o) return (u = null), o + "" || null;
          }
          return (
            (e = "function" == typeof e ? e : void 0 === e ? o.x : (0, n.Z)(e)),
            (t = "function" == typeof t ? t : void 0 === t ? o.y : (0, n.Z)(t)),
            (d.x = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : (0, n.Z)(+t)), d)
                : e;
            }),
            (d.y = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : (0, n.Z)(+e)), d)
                : t;
            }),
            (d.defined = function (e) {
              return arguments.length
                ? ((i = "function" == typeof e ? e : (0, n.Z)(!!e)), d)
                : i;
            }),
            (d.curve = function (e) {
              return arguments.length
                ? ((h = e), null != l && (u = h(l)), d)
                : h;
            }),
            (d.context = function (e) {
              return arguments.length
                ? (null == e ? (l = u = null) : (u = h((l = e))), d)
                : l;
            }),
            d
          );
        }
      },
      5987: function (e, t, i) {
        "use strict";
        i.d(t, {
          d: function () {
            return n;
          },
        });
        var r = i(5493);
        function n(e) {
          let t = 3;
          return (
            (e.digits = function (i) {
              if (!arguments.length) return t;
              if (null == i) t = null;
              else {
                const e = Math.floor(i);
                if (!(e >= 0)) throw new RangeError(`invalid digits: ${i}`);
                t = e;
              }
              return e;
            }),
            () => new r.y$(t)
          );
        }
      },
      6758: function (e, t, i) {
        "use strict";
        function r(e) {
          return e[0];
        }
        function n(e) {
          return e[1];
        }
        i.d(t, {
          x: function () {
            return r;
          },
          y: function () {
            return n;
          },
        });
      },
      7738: function (e, t, i) {
        "use strict";
        i.d(t, {
          B7: function () {
            return g;
          },
          HT: function () {
            return m;
          },
          zO: function () {
            return p;
          },
        });
        var r,
          n,
          s = 0,
          a = 0,
          o = 0,
          l = 0,
          h = 0,
          u = 0,
          c =
            "object" == typeof performance && performance.now
              ? performance
              : Date,
          d =
            "object" == typeof window && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function (e) {
                  setTimeout(e, 17);
                };
        function p() {
          return h || (d(f), (h = c.now() + u));
        }
        function f() {
          h = 0;
        }
        function g() {
          this._call = this._time = this._next = null;
        }
        function m(e, t, i) {
          var r = new g();
          return r.restart(e, t, i), r;
        }
        function b() {
          (h = (l = c.now()) + u), (s = a = 0);
          try {
            !(function () {
              p(), ++s;
              for (var e, t = r; t; )
                (e = h - t._time) >= 0 && t._call.call(void 0, e),
                  (t = t._next);
              --s;
            })();
          } finally {
            (s = 0),
              (function () {
                for (var e, t, i = r, s = 1 / 0; i; )
                  i._call
                    ? (s > i._time && (s = i._time), (e = i), (i = i._next))
                    : ((t = i._next),
                      (i._next = null),
                      (i = e ? (e._next = t) : (r = t)));
                (n = e), v(s);
              })(),
              (h = 0);
          }
        }
        function _() {
          var e = c.now(),
            t = e - l;
          t > 1e3 && ((u -= t), (l = e));
        }
        function v(e) {
          s ||
            (a && (a = clearTimeout(a)),
            e - h > 24
              ? (e < 1 / 0 && (a = setTimeout(b, e - c.now() - u)),
                o && (o = clearInterval(o)))
              : (o || ((l = c.now()), (o = setInterval(_, 1e3))),
                (s = 1),
                d(b)));
        }
        g.prototype = m.prototype = {
          constructor: g,
          restart: function (e, t, i) {
            if ("function" != typeof e)
              throw new TypeError("callback is not a function");
            (i = (null == i ? p() : +i) + (null == t ? 0 : +t)),
              this._next ||
                n === this ||
                (n ? (n._next = this) : (r = this), (n = this)),
              (this._call = e),
              (this._time = i),
              v();
          },
          stop: function () {
            this._call && ((this._call = null), (this._time = 1 / 0), v());
          },
        };
      },
      7896: function (e, t, i) {
        "use strict";
        function r() {}
        function n(e) {
          return null == e
            ? r
            : function () {
                return this.querySelector(e);
              };
        }
        function s(e) {
          return null == e ? [] : Array.isArray(e) ? e : Array.from(e);
        }
        function a() {
          return [];
        }
        function o(e) {
          return null == e
            ? a
            : function () {
                return this.querySelectorAll(e);
              };
        }
        function l(e) {
          return function () {
            return this.matches(e);
          };
        }
        function h(e) {
          return function (t) {
            return t.matches(e);
          };
        }
        var u = Array.prototype.find;
        function c() {
          return this.firstElementChild;
        }
        var d = Array.prototype.filter;
        function p() {
          return Array.from(this.children);
        }
        function f(e) {
          return new Array(e.length);
        }
        function g(e, t) {
          (this.ownerDocument = e.ownerDocument),
            (this.namespaceURI = e.namespaceURI),
            (this._next = null),
            (this._parent = e),
            (this.__data__ = t);
        }
        function m(e) {
          return function () {
            return e;
          };
        }
        function b(e, t, i, r, n, s) {
          for (var a, o = 0, l = t.length, h = s.length; o < h; ++o)
            (a = t[o])
              ? ((a.__data__ = s[o]), (r[o] = a))
              : (i[o] = new g(e, s[o]));
          for (; o < l; ++o) (a = t[o]) && (n[o] = a);
        }
        function _(e, t, i, r, n, s, a) {
          var o,
            l,
            h,
            u = new Map(),
            c = t.length,
            d = s.length,
            p = new Array(c);
          for (o = 0; o < c; ++o)
            (l = t[o]) &&
              ((p[o] = h = a.call(l, l.__data__, o, t) + ""),
              u.has(h) ? (n[o] = l) : u.set(h, l));
          for (o = 0; o < d; ++o)
            (h = a.call(e, s[o], o, s) + ""),
              (l = u.get(h))
                ? ((r[o] = l), (l.__data__ = s[o]), u.delete(h))
                : (i[o] = new g(e, s[o]));
          for (o = 0; o < c; ++o) (l = t[o]) && u.get(p[o]) === l && (n[o] = l);
        }
        function v(e) {
          return e.__data__;
        }
        function y(e) {
          return "object" == typeof e && "length" in e ? e : Array.from(e);
        }
        function w(e, t) {
          return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        }
        g.prototype = {
          constructor: g,
          appendChild: function (e) {
            return this._parent.insertBefore(e, this._next);
          },
          insertBefore: function (e, t) {
            return this._parent.insertBefore(e, t);
          },
          querySelector: function (e) {
            return this._parent.querySelector(e);
          },
          querySelectorAll: function (e) {
            return this._parent.querySelectorAll(e);
          },
        };
        var x = "http://www.w3.org/1999/xhtml",
          O = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: x,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/",
          };
        function P(e) {
          var t = (e += ""),
            i = t.indexOf(":");
          return (
            i >= 0 && "xmlns" !== (t = e.slice(0, i)) && (e = e.slice(i + 1)),
            O.hasOwnProperty(t) ? { space: O[t], local: e } : e
          );
        }
        function D(e) {
          return function () {
            this.removeAttribute(e);
          };
        }
        function k(e) {
          return function () {
            this.removeAttributeNS(e.space, e.local);
          };
        }
        function T(e, t) {
          return function () {
            this.setAttribute(e, t);
          };
        }
        function M(e, t) {
          return function () {
            this.setAttributeNS(e.space, e.local, t);
          };
        }
        function E(e, t) {
          return function () {
            var i = t.apply(this, arguments);
            null == i ? this.removeAttribute(e) : this.setAttribute(e, i);
          };
        }
        function S(e, t) {
          return function () {
            var i = t.apply(this, arguments);
            null == i
              ? this.removeAttributeNS(e.space, e.local)
              : this.setAttributeNS(e.space, e.local, i);
          };
        }
        function C(e) {
          return (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            (e.document && e) ||
            e.defaultView
          );
        }
        function N(e) {
          return function () {
            this.style.removeProperty(e);
          };
        }
        function L(e, t, i) {
          return function () {
            this.style.setProperty(e, t, i);
          };
        }
        function j(e, t, i) {
          return function () {
            var r = t.apply(this, arguments);
            null == r
              ? this.style.removeProperty(e)
              : this.style.setProperty(e, r, i);
          };
        }
        function A(e, t) {
          return (
            e.style.getPropertyValue(t) ||
            C(e).getComputedStyle(e, null).getPropertyValue(t)
          );
        }
        function R(e) {
          return function () {
            delete this[e];
          };
        }
        function B(e, t) {
          return function () {
            this[e] = t;
          };
        }
        function U(e, t) {
          return function () {
            var i = t.apply(this, arguments);
            null == i ? delete this[e] : (this[e] = i);
          };
        }
        function F(e) {
          return e.trim().split(/^|\s+/);
        }
        function I(e) {
          return e.classList || new H(e);
        }
        function H(e) {
          (this._node = e), (this._names = F(e.getAttribute("class") || ""));
        }
        function z(e, t) {
          for (var i = I(e), r = -1, n = t.length; ++r < n; ) i.add(t[r]);
        }
        function V(e, t) {
          for (var i = I(e), r = -1, n = t.length; ++r < n; ) i.remove(t[r]);
        }
        function G(e) {
          return function () {
            z(this, e);
          };
        }
        function Y(e) {
          return function () {
            V(this, e);
          };
        }
        function W(e, t) {
          return function () {
            (t.apply(this, arguments) ? z : V)(this, e);
          };
        }
        function X() {
          this.textContent = "";
        }
        function $(e) {
          return function () {
            this.textContent = e;
          };
        }
        function Z(e) {
          return function () {
            var t = e.apply(this, arguments);
            this.textContent = null == t ? "" : t;
          };
        }
        function K() {
          this.innerHTML = "";
        }
        function q(e) {
          return function () {
            this.innerHTML = e;
          };
        }
        function Q(e) {
          return function () {
            var t = e.apply(this, arguments);
            this.innerHTML = null == t ? "" : t;
          };
        }
        function J() {
          this.nextSibling && this.parentNode.appendChild(this);
        }
        function ee() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function te(e) {
          return function () {
            var t = this.ownerDocument,
              i = this.namespaceURI;
            return i === x && t.documentElement.namespaceURI === x
              ? t.createElement(e)
              : t.createElementNS(i, e);
          };
        }
        function ie(e) {
          return function () {
            return this.ownerDocument.createElementNS(e.space, e.local);
          };
        }
        function re(e) {
          var t = P(e);
          return (t.local ? ie : te)(t);
        }
        function ne() {
          return null;
        }
        function se() {
          var e = this.parentNode;
          e && e.removeChild(this);
        }
        function ae() {
          var e = this.cloneNode(!1),
            t = this.parentNode;
          return t ? t.insertBefore(e, this.nextSibling) : e;
        }
        function oe() {
          var e = this.cloneNode(!0),
            t = this.parentNode;
          return t ? t.insertBefore(e, this.nextSibling) : e;
        }
        function le(e) {
          return e
            .trim()
            .split(/^|\s+/)
            .map(function (e) {
              var t = "",
                i = e.indexOf(".");
              return (
                i >= 0 && ((t = e.slice(i + 1)), (e = e.slice(0, i))),
                { type: e, name: t }
              );
            });
        }
        function he(e) {
          return function () {
            var t = this.__on;
            if (t) {
              for (var i, r = 0, n = -1, s = t.length; r < s; ++r)
                (i = t[r]),
                  (e.type && i.type !== e.type) || i.name !== e.name
                    ? (t[++n] = i)
                    : this.removeEventListener(i.type, i.listener, i.options);
              ++n ? (t.length = n) : delete this.__on;
            }
          };
        }
        function ue(e, t, i) {
          return function () {
            var r,
              n = this.__on,
              s = (function (e) {
                return function (t) {
                  e.call(this, t, this.__data__);
                };
              })(t);
            if (n)
              for (var a = 0, o = n.length; a < o; ++a)
                if ((r = n[a]).type === e.type && r.name === e.name)
                  return (
                    this.removeEventListener(r.type, r.listener, r.options),
                    this.addEventListener(
                      r.type,
                      (r.listener = s),
                      (r.options = i)
                    ),
                    void (r.value = t)
                  );
            this.addEventListener(e.type, s, i),
              (r = {
                type: e.type,
                name: e.name,
                value: t,
                listener: s,
                options: i,
              }),
              n ? n.push(r) : (this.__on = [r]);
          };
        }
        function ce(e, t, i) {
          var r = C(e),
            n = r.CustomEvent;
          "function" == typeof n
            ? (n = new n(t, i))
            : ((n = r.document.createEvent("Event")),
              i
                ? (n.initEvent(t, i.bubbles, i.cancelable),
                  (n.detail = i.detail))
                : n.initEvent(t, !1, !1)),
            e.dispatchEvent(n);
        }
        function de(e, t) {
          return function () {
            return ce(this, e, t);
          };
        }
        function pe(e, t) {
          return function () {
            return ce(this, e, t.apply(this, arguments));
          };
        }
        H.prototype = {
          add: function (e) {
            this._names.indexOf(e) < 0 &&
              (this._names.push(e),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          remove: function (e) {
            var t = this._names.indexOf(e);
            t >= 0 &&
              (this._names.splice(t, 1),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          contains: function (e) {
            return this._names.indexOf(e) >= 0;
          },
        };
        var fe = [null];
        function ge(e, t) {
          (this._groups = e), (this._parents = t);
        }
        function me() {
          return new ge([[document.documentElement]], fe);
        }
        ge.prototype = me.prototype = {
          constructor: ge,
          select: function (e) {
            "function" != typeof e && (e = n(e));
            for (
              var t = this._groups, i = t.length, r = new Array(i), s = 0;
              s < i;
              ++s
            )
              for (
                var a,
                  o,
                  l = t[s],
                  h = l.length,
                  u = (r[s] = new Array(h)),
                  c = 0;
                c < h;
                ++c
              )
                (a = l[c]) &&
                  (o = e.call(a, a.__data__, c, l)) &&
                  ("__data__" in a && (o.__data__ = a.__data__), (u[c] = o));
            return new ge(r, this._parents);
          },
          selectAll: function (e) {
            e =
              "function" == typeof e
                ? (function (e) {
                    return function () {
                      return s(e.apply(this, arguments));
                    };
                  })(e)
                : o(e);
            for (
              var t = this._groups, i = t.length, r = [], n = [], a = 0;
              a < i;
              ++a
            )
              for (var l, h = t[a], u = h.length, c = 0; c < u; ++c)
                (l = h[c]) && (r.push(e.call(l, l.__data__, c, h)), n.push(l));
            return new ge(r, n);
          },
          selectChild: function (e) {
            return this.select(
              null == e
                ? c
                : (function (e) {
                    return function () {
                      return u.call(this.children, e);
                    };
                  })("function" == typeof e ? e : h(e))
            );
          },
          selectChildren: function (e) {
            return this.selectAll(
              null == e
                ? p
                : (function (e) {
                    return function () {
                      return d.call(this.children, e);
                    };
                  })("function" == typeof e ? e : h(e))
            );
          },
          filter: function (e) {
            "function" != typeof e && (e = l(e));
            for (
              var t = this._groups, i = t.length, r = new Array(i), n = 0;
              n < i;
              ++n
            )
              for (
                var s, a = t[n], o = a.length, h = (r[n] = []), u = 0;
                u < o;
                ++u
              )
                (s = a[u]) && e.call(s, s.__data__, u, a) && h.push(s);
            return new ge(r, this._parents);
          },
          data: function (e, t) {
            if (!arguments.length) return Array.from(this, v);
            var i = t ? _ : b,
              r = this._parents,
              n = this._groups;
            "function" != typeof e && (e = m(e));
            for (
              var s = n.length,
                a = new Array(s),
                o = new Array(s),
                l = new Array(s),
                h = 0;
              h < s;
              ++h
            ) {
              var u = r[h],
                c = n[h],
                d = c.length,
                p = y(e.call(u, u && u.__data__, h, r)),
                f = p.length,
                g = (o[h] = new Array(f)),
                w = (a[h] = new Array(f)),
                x = (l[h] = new Array(d));
              i(u, c, g, w, x, p, t);
              for (var O, P, D = 0, k = 0; D < f; ++D)
                if ((O = g[D])) {
                  for (D >= k && (k = D + 1); !(P = w[k]) && ++k < f; );
                  O._next = P || null;
                }
            }
            return ((a = new ge(a, r))._enter = o), (a._exit = l), a;
          },
          enter: function () {
            return new ge(this._enter || this._groups.map(f), this._parents);
          },
          exit: function () {
            return new ge(this._exit || this._groups.map(f), this._parents);
          },
          join: function (e, t, i) {
            var r = this.enter(),
              n = this,
              s = this.exit();
            return (
              "function" == typeof e
                ? (r = e(r)) && (r = r.selection())
                : (r = r.append(e + "")),
              null != t && (n = t(n)) && (n = n.selection()),
              null == i ? s.remove() : i(s),
              r && n ? r.merge(n).order() : n
            );
          },
          merge: function (e) {
            for (
              var t = e.selection ? e.selection() : e,
                i = this._groups,
                r = t._groups,
                n = i.length,
                s = r.length,
                a = Math.min(n, s),
                o = new Array(n),
                l = 0;
              l < a;
              ++l
            )
              for (
                var h,
                  u = i[l],
                  c = r[l],
                  d = u.length,
                  p = (o[l] = new Array(d)),
                  f = 0;
                f < d;
                ++f
              )
                (h = u[f] || c[f]) && (p[f] = h);
            for (; l < n; ++l) o[l] = i[l];
            return new ge(o, this._parents);
          },
          selection: function () {
            return this;
          },
          order: function () {
            for (var e = this._groups, t = -1, i = e.length; ++t < i; )
              for (var r, n = e[t], s = n.length - 1, a = n[s]; --s >= 0; )
                (r = n[s]) &&
                  (a &&
                    4 ^ r.compareDocumentPosition(a) &&
                    a.parentNode.insertBefore(r, a),
                  (a = r));
            return this;
          },
          sort: function (e) {
            function t(t, i) {
              return t && i ? e(t.__data__, i.__data__) : !t - !i;
            }
            e || (e = w);
            for (
              var i = this._groups, r = i.length, n = new Array(r), s = 0;
              s < r;
              ++s
            ) {
              for (
                var a, o = i[s], l = o.length, h = (n[s] = new Array(l)), u = 0;
                u < l;
                ++u
              )
                (a = o[u]) && (h[u] = a);
              h.sort(t);
            }
            return new ge(n, this._parents).order();
          },
          call: function () {
            var e = arguments[0];
            return (arguments[0] = this), e.apply(null, arguments), this;
          },
          nodes: function () {
            return Array.from(this);
          },
          node: function () {
            for (var e = this._groups, t = 0, i = e.length; t < i; ++t)
              for (var r = e[t], n = 0, s = r.length; n < s; ++n) {
                var a = r[n];
                if (a) return a;
              }
            return null;
          },
          size: function () {
            let e = 0;
            for (const t of this) ++e;
            return e;
          },
          empty: function () {
            return !this.node();
          },
          each: function (e) {
            for (var t = this._groups, i = 0, r = t.length; i < r; ++i)
              for (var n, s = t[i], a = 0, o = s.length; a < o; ++a)
                (n = s[a]) && e.call(n, n.__data__, a, s);
            return this;
          },
          attr: function (e, t) {
            var i = P(e);
            if (arguments.length < 2) {
              var r = this.node();
              return i.local
                ? r.getAttributeNS(i.space, i.local)
                : r.getAttribute(i);
            }
            return this.each(
              (null == t
                ? i.local
                  ? k
                  : D
                : "function" == typeof t
                ? i.local
                  ? S
                  : E
                : i.local
                ? M
                : T)(i, t)
            );
          },
          style: function (e, t, i) {
            return arguments.length > 1
              ? this.each(
                  (null == t ? N : "function" == typeof t ? j : L)(
                    e,
                    t,
                    null == i ? "" : i
                  )
                )
              : A(this.node(), e);
          },
          property: function (e, t) {
            return arguments.length > 1
              ? this.each(
                  (null == t ? R : "function" == typeof t ? U : B)(e, t)
                )
              : this.node()[e];
          },
          classed: function (e, t) {
            var i = F(e + "");
            if (arguments.length < 2) {
              for (var r = I(this.node()), n = -1, s = i.length; ++n < s; )
                if (!r.contains(i[n])) return !1;
              return !0;
            }
            return this.each(("function" == typeof t ? W : t ? G : Y)(i, t));
          },
          text: function (e) {
            return arguments.length
              ? this.each(null == e ? X : ("function" == typeof e ? Z : $)(e))
              : this.node().textContent;
          },
          html: function (e) {
            return arguments.length
              ? this.each(null == e ? K : ("function" == typeof e ? Q : q)(e))
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each(J);
          },
          lower: function () {
            return this.each(ee);
          },
          append: function (e) {
            var t = "function" == typeof e ? e : re(e);
            return this.select(function () {
              return this.appendChild(t.apply(this, arguments));
            });
          },
          insert: function (e, t) {
            var i = "function" == typeof e ? e : re(e),
              r = null == t ? ne : "function" == typeof t ? t : n(t);
            return this.select(function () {
              return this.insertBefore(
                i.apply(this, arguments),
                r.apply(this, arguments) || null
              );
            });
          },
          remove: function () {
            return this.each(se);
          },
          clone: function (e) {
            return this.select(e ? oe : ae);
          },
          datum: function (e) {
            return arguments.length
              ? this.property("__data__", e)
              : this.node().__data__;
          },
          on: function (e, t, i) {
            var r,
              n,
              s = le(e + ""),
              a = s.length;
            if (!(arguments.length < 2)) {
              for (o = t ? ue : he, r = 0; r < a; ++r) this.each(o(s[r], t, i));
              return this;
            }
            var o = this.node().__on;
            if (o)
              for (var l, h = 0, u = o.length; h < u; ++h)
                for (r = 0, l = o[h]; r < a; ++r)
                  if ((n = s[r]).type === l.type && n.name === l.name)
                    return l.value;
          },
          dispatch: function (e, t) {
            return this.each(("function" == typeof t ? pe : de)(e, t));
          },
          [Symbol.iterator]: function* () {
            for (var e = this._groups, t = 0, i = e.length; t < i; ++t)
              for (var r, n = e[t], s = 0, a = n.length; s < a; ++s)
                (r = n[s]) && (yield r);
          },
        };
        var be = me,
          _e = i(4138),
          ve = i(7738);
        function ye(e, t, i) {
          var r = new ve.B7();
          return (
            (t = null == t ? 0 : +t),
            r.restart(
              (i) => {
                r.stop(), e(i + t);
              },
              t,
              i
            ),
            r
          );
        }
        var we = (0, _e.Z)("start", "end", "cancel", "interrupt"),
          xe = [];
        function Oe(e, t, i, r, n, s) {
          var a = e.__transition;
          if (a) {
            if (i in a) return;
          } else e.__transition = {};
          !(function (e, t, i) {
            var r,
              n = e.__transition;
            function s(l) {
              var h, u, c, d;
              if (1 !== i.state) return o();
              for (h in n)
                if ((d = n[h]).name === i.name) {
                  if (3 === d.state) return ye(s);
                  4 === d.state
                    ? ((d.state = 6),
                      d.timer.stop(),
                      d.on.call("interrupt", e, e.__data__, d.index, d.group),
                      delete n[h])
                    : +h < t &&
                      ((d.state = 6),
                      d.timer.stop(),
                      d.on.call("cancel", e, e.__data__, d.index, d.group),
                      delete n[h]);
                }
              if (
                (ye(function () {
                  3 === i.state &&
                    ((i.state = 4), i.timer.restart(a, i.delay, i.time), a(l));
                }),
                (i.state = 2),
                i.on.call("start", e, e.__data__, i.index, i.group),
                2 === i.state)
              ) {
                for (
                  i.state = 3,
                    r = new Array((c = i.tween.length)),
                    h = 0,
                    u = -1;
                  h < c;
                  ++h
                )
                  (d = i.tween[h].value.call(
                    e,
                    e.__data__,
                    i.index,
                    i.group
                  )) && (r[++u] = d);
                r.length = u + 1;
              }
            }
            function a(t) {
              for (
                var n =
                    t < i.duration
                      ? i.ease.call(null, t / i.duration)
                      : (i.timer.restart(o), (i.state = 5), 1),
                  s = -1,
                  a = r.length;
                ++s < a;

              )
                r[s].call(e, n);
              5 === i.state &&
                (i.on.call("end", e, e.__data__, i.index, i.group), o());
            }
            function o() {
              for (var r in ((i.state = 6), i.timer.stop(), delete n[t], n))
                return;
              delete e.__transition;
            }
            (n[t] = i),
              (i.timer = (0, ve.HT)(
                function (e) {
                  (i.state = 1),
                    i.timer.restart(s, i.delay, i.time),
                    i.delay <= e && s(e - i.delay);
                },
                0,
                i.time
              ));
          })(e, i, {
            name: t,
            index: r,
            group: n,
            on: we,
            tween: xe,
            time: s.time,
            delay: s.delay,
            duration: s.duration,
            ease: s.ease,
            timer: null,
            state: 0,
          });
        }
        function Pe(e, t) {
          var i = ke(e, t);
          if (i.state > 0) throw new Error("too late; already scheduled");
          return i;
        }
        function De(e, t) {
          var i = ke(e, t);
          if (i.state > 3) throw new Error("too late; already running");
          return i;
        }
        function ke(e, t) {
          var i = e.__transition;
          if (!i || !(i = i[t])) throw new Error("transition not found");
          return i;
        }
        function Te(e, t) {
          return (
            (e = +e),
            (t = +t),
            function (i) {
              return e * (1 - i) + t * i;
            }
          );
        }
        var Me,
          Ee = 180 / Math.PI,
          Se = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          };
        function Ce(e, t, i, r, n, s) {
          var a, o, l;
          return (
            (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
            (l = e * i + t * r) && ((i -= e * l), (r -= t * l)),
            (o = Math.sqrt(i * i + r * r)) && ((i /= o), (r /= o), (l /= o)),
            e * r < t * i && ((e = -e), (t = -t), (l = -l), (a = -a)),
            {
              translateX: n,
              translateY: s,
              rotate: Math.atan2(t, e) * Ee,
              skewX: Math.atan(l) * Ee,
              scaleX: a,
              scaleY: o,
            }
          );
        }
        function Ne(e, t, i, r) {
          function n(e) {
            return e.length ? e.pop() + " " : "";
          }
          return function (s, a) {
            var o = [],
              l = [];
            return (
              (s = e(s)),
              (a = e(a)),
              (function (e, r, n, s, a, o) {
                if (e !== n || r !== s) {
                  var l = a.push("translate(", null, t, null, i);
                  o.push({ i: l - 4, x: Te(e, n) }, { i: l - 2, x: Te(r, s) });
                } else (n || s) && a.push("translate(" + n + t + s + i);
              })(s.translateX, s.translateY, a.translateX, a.translateY, o, l),
              (function (e, t, i, s) {
                e !== t
                  ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                    s.push({
                      i: i.push(n(i) + "rotate(", null, r) - 2,
                      x: Te(e, t),
                    }))
                  : t && i.push(n(i) + "rotate(" + t + r);
              })(s.rotate, a.rotate, o, l),
              (function (e, t, i, s) {
                e !== t
                  ? s.push({
                      i: i.push(n(i) + "skewX(", null, r) - 2,
                      x: Te(e, t),
                    })
                  : t && i.push(n(i) + "skewX(" + t + r);
              })(s.skewX, a.skewX, o, l),
              (function (e, t, i, r, s, a) {
                if (e !== i || t !== r) {
                  var o = s.push(n(s) + "scale(", null, ",", null, ")");
                  a.push({ i: o - 4, x: Te(e, i) }, { i: o - 2, x: Te(t, r) });
                } else
                  (1 === i && 1 === r) ||
                    s.push(n(s) + "scale(" + i + "," + r + ")");
              })(s.scaleX, s.scaleY, a.scaleX, a.scaleY, o, l),
              (s = a = null),
              function (e) {
                for (var t, i = -1, r = l.length; ++i < r; )
                  o[(t = l[i]).i] = t.x(e);
                return o.join("");
              }
            );
          };
        }
        var Le = Ne(
            function (e) {
              const t = new (
                "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
              )(e + "");
              return t.isIdentity ? Se : Ce(t.a, t.b, t.c, t.d, t.e, t.f);
            },
            "px, ",
            "px)",
            "deg)"
          ),
          je = Ne(
            function (e) {
              return null == e
                ? Se
                : (Me ||
                    (Me = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g"
                    )),
                  Me.setAttribute("transform", e),
                  (e = Me.transform.baseVal.consolidate())
                    ? Ce((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                    : Se);
            },
            ", ",
            ")",
            ")"
          );
        function Ae(e, t) {
          var i, r;
          return function () {
            var n = De(this, e),
              s = n.tween;
            if (s !== i)
              for (var a = 0, o = (r = i = s).length; a < o; ++a)
                if (r[a].name === t) {
                  (r = r.slice()).splice(a, 1);
                  break;
                }
            n.tween = r;
          };
        }
        function Re(e, t, i) {
          var r, n;
          if ("function" != typeof i) throw new Error();
          return function () {
            var s = De(this, e),
              a = s.tween;
            if (a !== r) {
              n = (r = a).slice();
              for (
                var o = { name: t, value: i }, l = 0, h = n.length;
                l < h;
                ++l
              )
                if (n[l].name === t) {
                  n[l] = o;
                  break;
                }
              l === h && n.push(o);
            }
            s.tween = n;
          };
        }
        function Be(e, t, i) {
          var r = e._id;
          return (
            e.each(function () {
              var e = De(this, r);
              (e.value || (e.value = {}))[t] = i.apply(this, arguments);
            }),
            function (e) {
              return ke(e, r).value[t];
            }
          );
        }
        function Ue(e, t, i) {
          (e.prototype = t.prototype = i), (i.constructor = e);
        }
        function Fe(e, t) {
          var i = Object.create(e.prototype);
          for (var r in t) i[r] = t[r];
          return i;
        }
        function Ie() {}
        var He = 0.7,
          ze = 1 / He,
          Ve = "\\s*([+-]?\\d+)\\s*",
          Ge = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          Ye = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          We = /^#([0-9a-f]{3,8})$/,
          Xe = new RegExp(`^rgb\\(${Ve},${Ve},${Ve}\\)$`),
          $e = new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`),
          Ze = new RegExp(`^rgba\\(${Ve},${Ve},${Ve},${Ge}\\)$`),
          Ke = new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${Ge}\\)$`),
          qe = new RegExp(`^hsl\\(${Ge},${Ye},${Ye}\\)$`),
          Qe = new RegExp(`^hsla\\(${Ge},${Ye},${Ye},${Ge}\\)$`),
          Je = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function et() {
          return this.rgb().formatHex();
        }
        function tt() {
          return this.rgb().formatRgb();
        }
        function it(e) {
          var t, i;
          return (
            (e = (e + "").trim().toLowerCase()),
            (t = We.exec(e))
              ? ((i = t[1].length),
                (t = parseInt(t[1], 16)),
                6 === i
                  ? rt(t)
                  : 3 === i
                  ? new ot(
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      ((15 & t) << 4) | (15 & t),
                      1
                    )
                  : 8 === i
                  ? nt(
                      (t >> 24) & 255,
                      (t >> 16) & 255,
                      (t >> 8) & 255,
                      (255 & t) / 255
                    )
                  : 4 === i
                  ? nt(
                      ((t >> 12) & 15) | ((t >> 8) & 240),
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      (((15 & t) << 4) | (15 & t)) / 255
                    )
                  : null)
              : (t = Xe.exec(e))
              ? new ot(t[1], t[2], t[3], 1)
              : (t = $e.exec(e))
              ? new ot(
                  (255 * t[1]) / 100,
                  (255 * t[2]) / 100,
                  (255 * t[3]) / 100,
                  1
                )
              : (t = Ze.exec(e))
              ? nt(t[1], t[2], t[3], t[4])
              : (t = Ke.exec(e))
              ? nt(
                  (255 * t[1]) / 100,
                  (255 * t[2]) / 100,
                  (255 * t[3]) / 100,
                  t[4]
                )
              : (t = qe.exec(e))
              ? pt(t[1], t[2] / 100, t[3] / 100, 1)
              : (t = Qe.exec(e))
              ? pt(t[1], t[2] / 100, t[3] / 100, t[4])
              : Je.hasOwnProperty(e)
              ? rt(Je[e])
              : "transparent" === e
              ? new ot(NaN, NaN, NaN, 0)
              : null
          );
        }
        function rt(e) {
          return new ot((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
        }
        function nt(e, t, i, r) {
          return r <= 0 && (e = t = i = NaN), new ot(e, t, i, r);
        }
        function st(e) {
          return (
            e instanceof Ie || (e = it(e)),
            e ? new ot((e = e.rgb()).r, e.g, e.b, e.opacity) : new ot()
          );
        }
        function at(e, t, i, r) {
          return 1 === arguments.length
            ? st(e)
            : new ot(e, t, i, null == r ? 1 : r);
        }
        function ot(e, t, i, r) {
          (this.r = +e), (this.g = +t), (this.b = +i), (this.opacity = +r);
        }
        function lt() {
          return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}`;
        }
        function ht() {
          const e = ut(this.opacity);
          return `${1 === e ? "rgb(" : "rgba("}${ct(this.r)}, ${ct(
            this.g
          )}, ${ct(this.b)}${1 === e ? ")" : `, ${e})`}`;
        }
        function ut(e) {
          return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
        }
        function ct(e) {
          return Math.max(0, Math.min(255, Math.round(e) || 0));
        }
        function dt(e) {
          return ((e = ct(e)) < 16 ? "0" : "") + e.toString(16);
        }
        function pt(e, t, i, r) {
          return (
            r <= 0
              ? (e = t = i = NaN)
              : i <= 0 || i >= 1
              ? (e = t = NaN)
              : t <= 0 && (e = NaN),
            new gt(e, t, i, r)
          );
        }
        function ft(e) {
          if (e instanceof gt) return new gt(e.h, e.s, e.l, e.opacity);
          if ((e instanceof Ie || (e = it(e)), !e)) return new gt();
          if (e instanceof gt) return e;
          var t = (e = e.rgb()).r / 255,
            i = e.g / 255,
            r = e.b / 255,
            n = Math.min(t, i, r),
            s = Math.max(t, i, r),
            a = NaN,
            o = s - n,
            l = (s + n) / 2;
          return (
            o
              ? ((a =
                  t === s
                    ? (i - r) / o + 6 * (i < r)
                    : i === s
                    ? (r - t) / o + 2
                    : (t - i) / o + 4),
                (o /= l < 0.5 ? s + n : 2 - s - n),
                (a *= 60))
              : (o = l > 0 && l < 1 ? 0 : a),
            new gt(a, o, l, e.opacity)
          );
        }
        function gt(e, t, i, r) {
          (this.h = +e), (this.s = +t), (this.l = +i), (this.opacity = +r);
        }
        function mt(e) {
          return (e = (e || 0) % 360) < 0 ? e + 360 : e;
        }
        function bt(e) {
          return Math.max(0, Math.min(1, e || 0));
        }
        function _t(e, t, i) {
          return (
            255 *
            (e < 60
              ? t + ((i - t) * e) / 60
              : e < 180
              ? i
              : e < 240
              ? t + ((i - t) * (240 - e)) / 60
              : t)
          );
        }
        function vt(e, t, i, r, n) {
          var s = e * e,
            a = s * e;
          return (
            ((1 - 3 * e + 3 * s - a) * t +
              (4 - 6 * s + 3 * a) * i +
              (1 + 3 * e + 3 * s - 3 * a) * r +
              a * n) /
            6
          );
        }
        Ue(Ie, it, {
          copy(e) {
            return Object.assign(new this.constructor(), this, e);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: et,
          formatHex: et,
          formatHex8: function () {
            return this.rgb().formatHex8();
          },
          formatHsl: function () {
            return ft(this).formatHsl();
          },
          formatRgb: tt,
          toString: tt,
        }),
          Ue(
            ot,
            at,
            Fe(Ie, {
              brighter(e) {
                return (
                  (e = null == e ? ze : Math.pow(ze, e)),
                  new ot(this.r * e, this.g * e, this.b * e, this.opacity)
                );
              },
              darker(e) {
                return (
                  (e = null == e ? He : Math.pow(He, e)),
                  new ot(this.r * e, this.g * e, this.b * e, this.opacity)
                );
              },
              rgb() {
                return this;
              },
              clamp() {
                return new ot(
                  ct(this.r),
                  ct(this.g),
                  ct(this.b),
                  ut(this.opacity)
                );
              },
              displayable() {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: lt,
              formatHex: lt,
              formatHex8: function () {
                return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}${dt(
                  255 * (isNaN(this.opacity) ? 1 : this.opacity)
                )}`;
              },
              formatRgb: ht,
              toString: ht,
            })
          ),
          Ue(
            gt,
            function (e, t, i, r) {
              return 1 === arguments.length
                ? ft(e)
                : new gt(e, t, i, null == r ? 1 : r);
            },
            Fe(Ie, {
              brighter(e) {
                return (
                  (e = null == e ? ze : Math.pow(ze, e)),
                  new gt(this.h, this.s, this.l * e, this.opacity)
                );
              },
              darker(e) {
                return (
                  (e = null == e ? He : Math.pow(He, e)),
                  new gt(this.h, this.s, this.l * e, this.opacity)
                );
              },
              rgb() {
                var e = (this.h % 360) + 360 * (this.h < 0),
                  t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                  i = this.l,
                  r = i + (i < 0.5 ? i : 1 - i) * t,
                  n = 2 * i - r;
                return new ot(
                  _t(e >= 240 ? e - 240 : e + 120, n, r),
                  _t(e, n, r),
                  _t(e < 120 ? e + 240 : e - 120, n, r),
                  this.opacity
                );
              },
              clamp() {
                return new gt(
                  mt(this.h),
                  bt(this.s),
                  bt(this.l),
                  ut(this.opacity)
                );
              },
              displayable() {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl() {
                const e = ut(this.opacity);
                return `${1 === e ? "hsl(" : "hsla("}${mt(this.h)}, ${
                  100 * bt(this.s)
                }%, ${100 * bt(this.l)}%${1 === e ? ")" : `, ${e})`}`;
              },
            })
          );
        var yt = (e) => () => e;
        function wt(e, t) {
          var i = t - e;
          return i
            ? (function (e, t) {
                return function (i) {
                  return e + i * t;
                };
              })(e, i)
            : yt(isNaN(e) ? t : e);
        }
        var xt = (function e(t) {
          var i = (function (e) {
            return 1 == (e = +e)
              ? wt
              : function (t, i) {
                  return i - t
                    ? (function (e, t, i) {
                        return (
                          (e = Math.pow(e, i)),
                          (t = Math.pow(t, i) - e),
                          (i = 1 / i),
                          function (r) {
                            return Math.pow(e + r * t, i);
                          }
                        );
                      })(t, i, e)
                    : yt(isNaN(t) ? i : t);
                };
          })(t);
          function r(e, t) {
            var r = i((e = at(e)).r, (t = at(t)).r),
              n = i(e.g, t.g),
              s = i(e.b, t.b),
              a = wt(e.opacity, t.opacity);
            return function (t) {
              return (
                (e.r = r(t)),
                (e.g = n(t)),
                (e.b = s(t)),
                (e.opacity = a(t)),
                e + ""
              );
            };
          }
          return (r.gamma = e), r;
        })(1);
        function Ot(e) {
          return function (t) {
            var i,
              r,
              n = t.length,
              s = new Array(n),
              a = new Array(n),
              o = new Array(n);
            for (i = 0; i < n; ++i)
              (r = at(t[i])),
                (s[i] = r.r || 0),
                (a[i] = r.g || 0),
                (o[i] = r.b || 0);
            return (
              (s = e(s)),
              (a = e(a)),
              (o = e(o)),
              (r.opacity = 1),
              function (e) {
                return (r.r = s(e)), (r.g = a(e)), (r.b = o(e)), r + "";
              }
            );
          };
        }
        Ot(function (e) {
          var t = e.length - 1;
          return function (i) {
            var r =
                i <= 0
                  ? (i = 0)
                  : i >= 1
                  ? ((i = 1), t - 1)
                  : Math.floor(i * t),
              n = e[r],
              s = e[r + 1],
              a = r > 0 ? e[r - 1] : 2 * n - s,
              o = r < t - 1 ? e[r + 2] : 2 * s - n;
            return vt((i - r / t) * t, a, n, s, o);
          };
        }),
          Ot(function (e) {
            var t = e.length;
            return function (i) {
              var r = Math.floor(((i %= 1) < 0 ? ++i : i) * t),
                n = e[(r + t - 1) % t],
                s = e[r % t],
                a = e[(r + 1) % t],
                o = e[(r + 2) % t];
              return vt((i - r / t) * t, n, s, a, o);
            };
          });
        var Pt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          Dt = new RegExp(Pt.source, "g");
        function kt(e, t) {
          var i,
            r,
            n,
            s = (Pt.lastIndex = Dt.lastIndex = 0),
            a = -1,
            o = [],
            l = [];
          for (e += "", t += ""; (i = Pt.exec(e)) && (r = Dt.exec(t)); )
            (n = r.index) > s &&
              ((n = t.slice(s, n)), o[a] ? (o[a] += n) : (o[++a] = n)),
              (i = i[0]) === (r = r[0])
                ? o[a]
                  ? (o[a] += r)
                  : (o[++a] = r)
                : ((o[++a] = null), l.push({ i: a, x: Te(i, r) })),
              (s = Dt.lastIndex);
          return (
            s < t.length &&
              ((n = t.slice(s)), o[a] ? (o[a] += n) : (o[++a] = n)),
            o.length < 2
              ? l[0]
                ? (function (e) {
                    return function (t) {
                      return e(t) + "";
                    };
                  })(l[0].x)
                : (function (e) {
                    return function () {
                      return e;
                    };
                  })(t)
              : ((t = l.length),
                function (e) {
                  for (var i, r = 0; r < t; ++r) o[(i = l[r]).i] = i.x(e);
                  return o.join("");
                })
          );
        }
        function Tt(e, t) {
          var i;
          return (
            "number" == typeof t
              ? Te
              : t instanceof it
              ? xt
              : (i = it(t))
              ? ((t = i), xt)
              : kt
          )(e, t);
        }
        function Mt(e) {
          return function () {
            this.removeAttribute(e);
          };
        }
        function Et(e) {
          return function () {
            this.removeAttributeNS(e.space, e.local);
          };
        }
        function St(e, t, i) {
          var r,
            n,
            s = i + "";
          return function () {
            var a = this.getAttribute(e);
            return a === s ? null : a === r ? n : (n = t((r = a), i));
          };
        }
        function Ct(e, t, i) {
          var r,
            n,
            s = i + "";
          return function () {
            var a = this.getAttributeNS(e.space, e.local);
            return a === s ? null : a === r ? n : (n = t((r = a), i));
          };
        }
        function Nt(e, t, i) {
          var r, n, s;
          return function () {
            var a,
              o,
              l = i(this);
            if (null != l)
              return (a = this.getAttribute(e)) === (o = l + "")
                ? null
                : a === r && o === n
                ? s
                : ((n = o), (s = t((r = a), l)));
            this.removeAttribute(e);
          };
        }
        function Lt(e, t, i) {
          var r, n, s;
          return function () {
            var a,
              o,
              l = i(this);
            if (null != l)
              return (a = this.getAttributeNS(e.space, e.local)) ===
                (o = l + "")
                ? null
                : a === r && o === n
                ? s
                : ((n = o), (s = t((r = a), l)));
            this.removeAttributeNS(e.space, e.local);
          };
        }
        function jt(e, t) {
          return function (i) {
            this.setAttribute(e, t.call(this, i));
          };
        }
        function At(e, t) {
          return function (i) {
            this.setAttributeNS(e.space, e.local, t.call(this, i));
          };
        }
        function Rt(e, t) {
          var i, r;
          function n() {
            var n = t.apply(this, arguments);
            return n !== r && (i = (r = n) && At(e, n)), i;
          }
          return (n._value = t), n;
        }
        function Bt(e, t) {
          var i, r;
          function n() {
            var n = t.apply(this, arguments);
            return n !== r && (i = (r = n) && jt(e, n)), i;
          }
          return (n._value = t), n;
        }
        function Ut(e, t) {
          return function () {
            Pe(this, e).delay = +t.apply(this, arguments);
          };
        }
        function Ft(e, t) {
          return (
            (t = +t),
            function () {
              Pe(this, e).delay = t;
            }
          );
        }
        function It(e, t) {
          return function () {
            De(this, e).duration = +t.apply(this, arguments);
          };
        }
        function Ht(e, t) {
          return (
            (t = +t),
            function () {
              De(this, e).duration = t;
            }
          );
        }
        function zt(e, t) {
          if ("function" != typeof t) throw new Error();
          return function () {
            De(this, e).ease = t;
          };
        }
        function Vt(e, t, i) {
          var r,
            n,
            s = (function (e) {
              return (e + "")
                .trim()
                .split(/^|\s+/)
                .every(function (e) {
                  var t = e.indexOf(".");
                  return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
                });
            })(t)
              ? Pe
              : De;
          return function () {
            var a = s(this, e),
              o = a.on;
            o !== r && (n = (r = o).copy()).on(t, i), (a.on = n);
          };
        }
        var Gt = be.prototype.constructor;
        function Yt(e) {
          return function () {
            this.style.removeProperty(e);
          };
        }
        function Wt(e, t, i) {
          return function (r) {
            this.style.setProperty(e, t.call(this, r), i);
          };
        }
        function Xt(e, t, i) {
          var r, n;
          function s() {
            var s = t.apply(this, arguments);
            return s !== n && (r = (n = s) && Wt(e, s, i)), r;
          }
          return (s._value = t), s;
        }
        function $t(e) {
          return function (t) {
            this.textContent = e.call(this, t);
          };
        }
        function Zt(e) {
          var t, i;
          function r() {
            var r = e.apply(this, arguments);
            return r !== i && (t = (i = r) && $t(r)), t;
          }
          return (r._value = e), r;
        }
        var Kt = 0;
        function qt(e, t, i, r) {
          (this._groups = e),
            (this._parents = t),
            (this._name = i),
            (this._id = r);
        }
        function Qt() {
          return ++Kt;
        }
        var Jt = be.prototype;
        qt.prototype = function (e) {
          return be().transition(e);
        }.prototype = {
          constructor: qt,
          select: function (e) {
            var t = this._name,
              i = this._id;
            "function" != typeof e && (e = n(e));
            for (
              var r = this._groups, s = r.length, a = new Array(s), o = 0;
              o < s;
              ++o
            )
              for (
                var l,
                  h,
                  u = r[o],
                  c = u.length,
                  d = (a[o] = new Array(c)),
                  p = 0;
                p < c;
                ++p
              )
                (l = u[p]) &&
                  (h = e.call(l, l.__data__, p, u)) &&
                  ("__data__" in l && (h.__data__ = l.__data__),
                  (d[p] = h),
                  Oe(d[p], t, i, p, d, ke(l, i)));
            return new qt(a, this._parents, t, i);
          },
          selectAll: function (e) {
            var t = this._name,
              i = this._id;
            "function" != typeof e && (e = o(e));
            for (
              var r = this._groups, n = r.length, s = [], a = [], l = 0;
              l < n;
              ++l
            )
              for (var h, u = r[l], c = u.length, d = 0; d < c; ++d)
                if ((h = u[d])) {
                  for (
                    var p,
                      f = e.call(h, h.__data__, d, u),
                      g = ke(h, i),
                      m = 0,
                      b = f.length;
                    m < b;
                    ++m
                  )
                    (p = f[m]) && Oe(p, t, i, m, f, g);
                  s.push(f), a.push(h);
                }
            return new qt(s, a, t, i);
          },
          selectChild: Jt.selectChild,
          selectChildren: Jt.selectChildren,
          filter: function (e) {
            "function" != typeof e && (e = l(e));
            for (
              var t = this._groups, i = t.length, r = new Array(i), n = 0;
              n < i;
              ++n
            )
              for (
                var s, a = t[n], o = a.length, h = (r[n] = []), u = 0;
                u < o;
                ++u
              )
                (s = a[u]) && e.call(s, s.__data__, u, a) && h.push(s);
            return new qt(r, this._parents, this._name, this._id);
          },
          merge: function (e) {
            if (e._id !== this._id) throw new Error();
            for (
              var t = this._groups,
                i = e._groups,
                r = t.length,
                n = i.length,
                s = Math.min(r, n),
                a = new Array(r),
                o = 0;
              o < s;
              ++o
            )
              for (
                var l,
                  h = t[o],
                  u = i[o],
                  c = h.length,
                  d = (a[o] = new Array(c)),
                  p = 0;
                p < c;
                ++p
              )
                (l = h[p] || u[p]) && (d[p] = l);
            for (; o < r; ++o) a[o] = t[o];
            return new qt(a, this._parents, this._name, this._id);
          },
          selection: function () {
            return new Gt(this._groups, this._parents);
          },
          transition: function () {
            for (
              var e = this._name,
                t = this._id,
                i = Qt(),
                r = this._groups,
                n = r.length,
                s = 0;
              s < n;
              ++s
            )
              for (var a, o = r[s], l = o.length, h = 0; h < l; ++h)
                if ((a = o[h])) {
                  var u = ke(a, t);
                  Oe(a, e, i, h, o, {
                    time: u.time + u.delay + u.duration,
                    delay: 0,
                    duration: u.duration,
                    ease: u.ease,
                  });
                }
            return new qt(r, this._parents, e, i);
          },
          call: Jt.call,
          nodes: Jt.nodes,
          node: Jt.node,
          size: Jt.size,
          empty: Jt.empty,
          each: Jt.each,
          on: function (e, t) {
            var i = this._id;
            return arguments.length < 2
              ? ke(this.node(), i).on.on(e)
              : this.each(Vt(i, e, t));
          },
          attr: function (e, t) {
            var i = P(e),
              r = "transform" === i ? je : Tt;
            return this.attrTween(
              e,
              "function" == typeof t
                ? (i.local ? Lt : Nt)(i, r, Be(this, "attr." + e, t))
                : null == t
                ? (i.local ? Et : Mt)(i)
                : (i.local ? Ct : St)(i, r, t)
            );
          },
          attrTween: function (e, t) {
            var i = "attr." + e;
            if (arguments.length < 2) return (i = this.tween(i)) && i._value;
            if (null == t) return this.tween(i, null);
            if ("function" != typeof t) throw new Error();
            var r = P(e);
            return this.tween(i, (r.local ? Rt : Bt)(r, t));
          },
          style: function (e, t, i) {
            var r = "transform" == (e += "") ? Le : Tt;
            return null == t
              ? this.styleTween(
                  e,
                  (function (e, t) {
                    var i, r, n;
                    return function () {
                      var s = A(this, e),
                        a = (this.style.removeProperty(e), A(this, e));
                      return s === a
                        ? null
                        : s === i && a === r
                        ? n
                        : (n = t((i = s), (r = a)));
                    };
                  })(e, r)
                ).on("end.style." + e, Yt(e))
              : "function" == typeof t
              ? this.styleTween(
                  e,
                  (function (e, t, i) {
                    var r, n, s;
                    return function () {
                      var a = A(this, e),
                        o = i(this),
                        l = o + "";
                      return (
                        null == o &&
                          (this.style.removeProperty(e), (l = o = A(this, e))),
                        a === l
                          ? null
                          : a === r && l === n
                          ? s
                          : ((n = l), (s = t((r = a), o)))
                      );
                    };
                  })(e, r, Be(this, "style." + e, t))
                ).each(
                  (function (e, t) {
                    var i,
                      r,
                      n,
                      s,
                      a = "style." + t,
                      o = "end." + a;
                    return function () {
                      var l = De(this, e),
                        h = l.on,
                        u = null == l.value[a] ? s || (s = Yt(t)) : void 0;
                      (h === i && n === u) ||
                        (r = (i = h).copy()).on(o, (n = u)),
                        (l.on = r);
                    };
                  })(this._id, e)
                )
              : this.styleTween(
                  e,
                  (function (e, t, i) {
                    var r,
                      n,
                      s = i + "";
                    return function () {
                      var a = A(this, e);
                      return a === s ? null : a === r ? n : (n = t((r = a), i));
                    };
                  })(e, r, t),
                  i
                ).on("end.style." + e, null);
          },
          styleTween: function (e, t, i) {
            var r = "style." + (e += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == t) return this.tween(r, null);
            if ("function" != typeof t) throw new Error();
            return this.tween(r, Xt(e, t, null == i ? "" : i));
          },
          text: function (e) {
            return this.tween(
              "text",
              "function" == typeof e
                ? (function (e) {
                    return function () {
                      var t = e(this);
                      this.textContent = null == t ? "" : t;
                    };
                  })(Be(this, "text", e))
                : (function (e) {
                    return function () {
                      this.textContent = e;
                    };
                  })(null == e ? "" : e + "")
            );
          },
          textTween: function (e) {
            var t = "text";
            if (arguments.length < 1) return (t = this.tween(t)) && t._value;
            if (null == e) return this.tween(t, null);
            if ("function" != typeof e) throw new Error();
            return this.tween(t, Zt(e));
          },
          remove: function () {
            return this.on(
              "end.remove",
              (function (e) {
                return function () {
                  var t = this.parentNode;
                  for (var i in this.__transition) if (+i !== e) return;
                  t && t.removeChild(this);
                };
              })(this._id)
            );
          },
          tween: function (e, t) {
            var i = this._id;
            if (((e += ""), arguments.length < 2)) {
              for (
                var r, n = ke(this.node(), i).tween, s = 0, a = n.length;
                s < a;
                ++s
              )
                if ((r = n[s]).name === e) return r.value;
              return null;
            }
            return this.each((null == t ? Ae : Re)(i, e, t));
          },
          delay: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(("function" == typeof e ? Ut : Ft)(t, e))
              : ke(this.node(), t).delay;
          },
          duration: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(("function" == typeof e ? It : Ht)(t, e))
              : ke(this.node(), t).duration;
          },
          ease: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(zt(t, e))
              : ke(this.node(), t).ease;
          },
          easeVarying: function (e) {
            if ("function" != typeof e) throw new Error();
            return this.each(
              (function (e, t) {
                return function () {
                  var i = t.apply(this, arguments);
                  if ("function" != typeof i) throw new Error();
                  De(this, e).ease = i;
                };
              })(this._id, e)
            );
          },
          end: function () {
            var e,
              t,
              i = this,
              r = i._id,
              n = i.size();
            return new Promise(function (s, a) {
              var o = { value: a },
                l = {
                  value: function () {
                    0 == --n && s();
                  },
                };
              i.each(function () {
                var i = De(this, r),
                  n = i.on;
                n !== e &&
                  ((t = (e = n).copy())._.cancel.push(o),
                  t._.interrupt.push(o),
                  t._.end.push(l)),
                  (i.on = t);
              }),
                0 === n && s();
            });
          },
          [Symbol.iterator]: Jt[Symbol.iterator],
        };
        var ei = {
          time: null,
          delay: 0,
          duration: 250,
          ease: function (e) {
            return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
          },
        };
        function ti(e, t) {
          for (var i; !(i = e.__transition) || !(i = i[t]); )
            if (!(e = e.parentNode))
              throw new Error(`transition ${t} not found`);
          return i;
        }
        (be.prototype.interrupt = function (e) {
          return this.each(function () {
            !(function (e, t) {
              var i,
                r,
                n,
                s = e.__transition,
                a = !0;
              if (s) {
                for (n in ((t = null == t ? null : t + ""), s))
                  (i = s[n]).name === t
                    ? ((r = i.state > 2 && i.state < 5),
                      (i.state = 6),
                      i.timer.stop(),
                      i.on.call(
                        r ? "interrupt" : "cancel",
                        e,
                        e.__data__,
                        i.index,
                        i.group
                      ),
                      delete s[n])
                    : (a = !1);
                a && delete e.__transition;
              }
            })(this, e);
          });
        }),
          (be.prototype.transition = function (e) {
            var t, i;
            e instanceof qt
              ? ((t = e._id), (e = e._name))
              : ((t = Qt()),
                ((i = ei).time = (0, ve.zO)()),
                (e = null == e ? null : e + ""));
            for (var r = this._groups, n = r.length, s = 0; s < n; ++s)
              for (var a, o = r[s], l = o.length, h = 0; h < l; ++h)
                (a = o[h]) && Oe(a, e, t, h, o, i || ti(a, t));
            return new qt(r, this._parents, e, t);
          });
      },
    },
    a = {};
  function o(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var i = (a[e] = { id: e, loaded: !1, exports: {} });
    return s[e].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports;
  }
  (o.m = s),
    (o.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (o.amdO = {}),
    (e = []),
    (o.O = function (t, i, r, n) {
      if (!i) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          (i = e[u][0]), (r = e[u][1]), (n = e[u][2]);
          for (var a = !0, l = 0; l < i.length; l++)
            (!1 & n || s >= n) &&
            Object.keys(o.O).every(function (e) {
              return o.O[e](i[l]);
            })
              ? i.splice(l--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(u--, 1);
            var h = r();
            void 0 !== h && (t = h);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [i, r, n];
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, { a: t }), t;
    }),
    (i = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (o.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var n = Object.create(null);
      o.r(n);
      var s = {};
      t = t || [null, i({}), i([]), i(i)];
      for (var a = 2 & r && e; "object" == typeof a && !~t.indexOf(a); a = i(a))
        Object.getOwnPropertyNames(a).forEach(function (t) {
          s[t] = function () {
            return e[t];
          };
        });
      return (
        (s.default = function () {
          return e;
        }),
        o.d(n, s),
        n
      );
    }),
    (o.d = function (e, t) {
      for (var i in t)
        o.o(t, i) &&
          !o.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, i) {
          return o.f[i](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return (
        "deps/" + { 643: "pdfmake", 4297: "xlsx", 4384: "markerjs2" }[e] + ".js"
      );
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r = {}),
    (n = "@amcharts/amcharts5:"),
    (o.l = function (e, t, i, s) {
      if (r[e]) r[e].push(t);
      else {
        var a, l;
        if (void 0 !== i)
          for (
            var h = document.getElementsByTagName("script"), u = 0;
            u < h.length;
            u++
          ) {
            var c = h[u];
            if (
              c.getAttribute("src") == e ||
              c.getAttribute("data-webpack") == n + i
            ) {
              a = c;
              break;
            }
          }
        a ||
          ((l = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          a.setAttribute("data-webpack", n + i),
          (a.src = e)),
          (r[e] = [t]);
        var d = function (t, i) {
            (a.onerror = a.onload = null), clearTimeout(p);
            var n = r[e];
            if (
              (delete r[e],
              a.parentNode && a.parentNode.removeChild(a),
              n &&
                n.forEach(function (e) {
                  return e(i);
                }),
              t)
            )
              return t(i);
          },
          p = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: a }),
            12e4
          );
        (a.onerror = d.bind(null, a.onerror)),
          (a.onload = d.bind(null, a.onload)),
          l && document.head.appendChild(a);
      }
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (o.p = ""),
    (function () {
      var e = { 4826: 0 };
      (o.f.j = function (t, i) {
        var r = o.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) i.push(r[2]);
          else {
            var n = new Promise(function (i, n) {
              r = e[t] = [i, n];
            });
            i.push((r[2] = n));
            var s = o.p + o.u(t),
              a = new Error();
            o.l(
              s,
              function (i) {
                if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var n = i && ("load" === i.type ? "missing" : i.type),
                    s = i && i.target && i.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + s + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = n),
                    (a.request = s),
                    r[1](a);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (o.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, i) {
          var r,
            n,
            s = i[0],
            a = i[1],
            l = i[2],
            h = 0;
          if (
            s.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in a) o.o(a, r) && (o.m[r] = a[r]);
            if (l) var u = l(o);
          }
          for (t && t(i); h < s.length; h++)
            (n = s[h]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return o.O(u);
        },
        i = (self.webpackChunk_am5 = self.webpackChunk_am5 || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })();
  var l = o(8494);
  l = o.O(l);
  var h = window;
  for (var u in l) h[u] = l[u];
  l.__esModule && Object.defineProperty(h, "__esModule", { value: !0 });
})();
