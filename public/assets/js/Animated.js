"use strict";
(self.webpackChunk_am5 = self.webpackChunk_am5 || []).push([
  [4837],
  {
    9295: function (t, e, i) {
      i.r(e),
        i.d(e, {
          am5themes_Animated: function () {
            return r;
          },
        });
      var a = i(3409);
      class n extends a.Q {
        setupDefaultRules() {
          super.setupDefaultRules(),
            this.rule("Component").setAll({ interpolationDuration: 600 }),
            this.rule("Hierarchy").set("animationDuration", 600),
            this.rule("Scrollbar").set("animationDuration", 600),
            this.rule("Tooltip").set("animationDuration", 300),
            this.rule("MapChart").set("animationDuration", 1e3),
            this.rule("MapChart").set("wheelDuration", 300),
            this.rule("Entity").setAll({ stateAnimationDuration: 600 }),
            this.rule("Sprite").states.create("default", {
              stateAnimationDuration: 600,
            }),
            this.rule("Tooltip", ["axis"]).setAll({ animationDuration: 200 }),
            this.rule("WordCloud").set("animationDuration", 500),
            this.rule("Polygon").set("animationDuration", 600),
            this.rule("ArcDiagram").set("animationDuration", 600);
        }
      }
      const r = n;
    },
  },
  function (t) {
    var e = (9295, t((t.s = 9295))),
      i = window;
    for (var a in e) i[a] = e[a];
    e.__esModule && Object.defineProperty(i, "__esModule", { value: !0 });
  },
]);
