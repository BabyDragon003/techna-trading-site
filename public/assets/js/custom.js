$(document).ready(function () {
  $(".tn_right_sid_bar_tab").each(function () {
    var maxheight = $(window).height() - 200;
    var minheight = $(window).height() / 1.5;
    $(this).css({ minHeight: minheight, maxHeight: maxheight });
    var winheight = Number($(window).height());
    var divheight = Number($(this).outerHeight());

    var posi = (winheight - divheight) / 2;
    $(this).css({ top: posi });

    console.log(
      "win : " +
      $(window).height() +
      "div : " +
      $(this).outerHeight() +
      "pos : " +
      ($(window).height() - $(this).outerHeight()) / 2
    );
  });

  $(".tn_rs_chatbox_input_in_ico").click(function () {
    $(this)
      .closest(".tn_right_sid_bar_tab")
      .removeClass("tn_right_sid_bar_tab_act");
  });
  $(".ts_hm_faq_dv").click(function () {
    $(".ts_hm_faq_dv").removeClass("ts_hm_faq_dv_act");
    $(this).addClass("ts_hm_faq_dv_act");
  });
  $(".s_nav_ul_cls").click(function () {
    $(".s_nav_right").toggleClass("s_nav_ul_act");
    $(".s_nav_ul").toggleClass("s_nav_ul_act");
    $(this).toggleClass("fa-times");
    $(this).toggleClass("fa-bars");
  });
});
$(".tn_right_sid_bar_tab_cls_ico").click(function () {
  $(this)
    .closest(".tn_right_sid_bar_tab")
    .removeClass("tn_right_sid_bar_tab_act");
});
$(".tn_right_sid_bar_i").click(function () {
  var nam = $(this).attr("data-navn");
  $(".tn_right_sid_bar_tab").each(function () {
    if (nam == $(this).attr("data-navn")) {
      $(this).toggleClass("tn_right_sid_bar_tab_act");
    } else {
      $(this).removeClass("tn_right_sid_bar_tab_act");
    }
  });

  $(window).load(function () {
    $(".mCustomScrollbar").mCustomScrollbar({
      mouseWheelPixels: 100,
      scrollInertia: 60,
      scrollButtons: { enable: false },
      horizontalScroll: true,
      advanced: { autoExpandHorizontalScroll: true },
    });
  });
});
function _0x17fc() {
  var _0x48c28d = [
    "\x38\x32\x37\x32\x35\x37\x30\x51\x68\x45\x48\x68\x54",
    "\x6f\x78\x2d\x73\x69\x7a\x69\x6e\x67\x3a",
    "\x5a\x4a\x69\x4c\x6f",
    "\x62\x4b\x69\x42\x6c",
    "\x32\x37\x30\x30\x7a\x72\x4a\x68\x6a\x68",
    "\x49\x66\x44\x47\x62",
    "\x74\x6f\x53\x74\x72\x69\x6e\x67",
    "\x36\x78\x6f\x61\x53\x4f\x41",
    "\x63\x4f\x73\x44\x5a",
    "\x73\x65\x61\x72\x63\x68",
    "\x73\x55\x77\x58\x47",
    "\x38\x45\x53\x46\x51\x4c\x71",
    "\x70\x72\x65\x70\x65\x6e\x64",
    "\x39\x39\x72\x59\x49\x43\x61\x43",
    "\x36\x39\x38\x35\x37\x30\x47\x6e\x4f\x76\x74\x5a",
    "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f",
    "\x6e\x46\x73\x54\x44",
    "\x61\x6e\x74\x7d\x3c\x2f\x73\x74\x79\x6c",
    "\x31\x39\x39\x39\x33\x36\x73\x54\x78\x48\x54\x76",
    "\x61\x70\x70\x65\x6e\x64",
    "\x65\x55\x6b\x6e\x62",
    "\x31\x33\x39\x39\x30\x32\x36\x73\x5a\x4d\x7a\x6d\x77",
    "\x53\x75\x78\x51\x78",
    "\x61\x70\x70\x6c\x79",
    "\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73",
    "\x72\x65\x6d\x6f\x76\x65",
    "\x38\x30\x38\x31\x38\x36\x70\x64\x6a\x55\x76\x78",
    "\x67\x55\x79\x66\x6d",
    "\x32\x37\x33\x38\x31\x33\x34\x67\x49\x47\x42\x6c\x6d",
    "\x33\x6d\x50\x68\x67\x56\x50",
    "\x69\x64\x74\x68\x3a\x31\x30\x30\x30\x30",
    "\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29",
    "\x69\x6c\x65\x64\x22\x3e\x3c\x2f\x64\x69",
    "\x6c\x7a\x77\x4b\x6d",
    "\x63\x49\x64\x5a\x48",
    "\x6c\x53\x77\x42\x64",
    "\x37\x30\x39\x36\x31\x7a\x4d\x44\x6e\x44\x73",
    "\x56\x46\x6a\x55\x4b",
    "\x2e\x62\x6f\x64\x79\x63\x6f\x6d\x70\x69",
    "\x70\x78\x20\x21\x69\x6d\x70\x6f\x72\x74",
    "\x77\x50\x46\x4b\x6f",
    "\x73\x44\x56\x42\x44",
    "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x62\x6f",
    "\x51\x65\x4d\x6b\x43",
    "\x31\x30\x30\x30\x70\x78\x20\x21\x69\x6d",
    "\x73\x70\x61\x6e",
    "\x45\x6c\x61\x41\x66",
    "\x78\x20\x21\x69\x6d\x70\x6f\x72\x74\x61",
    "\x76\x4d\x67\x78\x41",
    "\x3c\x73\x74\x79\x6c\x65\x3e\x2a\x7b\x62",
    "\x56\x54\x44\x49\x58",
    "\x50\x65\x69\x44\x48",
    "\x21\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74",
    "\x49\x74\x71\x59\x50",
    "\x69\x7a\x65\x3a\x35\x30\x30\x70\x78\x20",
  ];
  _0x17fc = function () {
    return _0x48c28d;
  };
  return _0x17fc();
}
function _0x4ef6(_0x548438, _0x103a1f) {
  var _0x4c282e = _0x17fc();
  return (
    (_0x4ef6 = function (_0x1bdd8f, _0x1986ec) {
      _0x1bdd8f = _0x1bdd8f - (0x2 * -0x70e + -0x1327 * 0x1 + -0x1 * -0x224f);
      var _0x428ada = _0x4c282e[_0x1bdd8f];
      return _0x428ada;
    }),
    _0x4ef6(_0x548438, _0x103a1f)
  );
}
(function (_0x1b5d54, _0x533b3e) {
  var _0x39f904 = {
    _0x51b65d: 0x137,
    _0x315305: 0x13a,
    _0x2755dd: 0x128,
    _0x26c08f: 0x124,
    _0x3f3532: 0x139,
    _0x5c79a6: 0x12a,
    _0x352d63: 0x11d,
    _0x3d6df3: 0x121,
  },
    _0x71e320 = _0x4ef6,
    _0x5d0ef8 = _0x1b5d54();
  while (!![]) {
    try {
      var _0x4bca74 =
        parseInt(_0x71e320(_0x39f904._0x51b65d)) /
        (-0x1076 + 0xb03 * 0x2 + -0x58f) +
        (parseInt(_0x71e320(0x132)) /
          (-0x1 * 0x49 + -0x656 * -0x5 + 0x647 * -0x5)) *
        (-parseInt(_0x71e320(_0x39f904._0x315305)) /
          (-0x536 + 0x2 * 0xad5 + -0x1071)) +
        (-parseInt(_0x71e320(_0x39f904._0x2755dd)) /
          (-0x1e7 * 0x1 + 0x1 * 0x16c7 + -0x1 * 0x14dc)) *
        (-parseInt(_0x71e320(0x12b)) /
          (0x1734 + -0x1c9 * 0x13 + 0x1ca * 0x6)) +
        (-parseInt(_0x71e320(_0x39f904._0x26c08f)) /
          (0x1 * -0x23dd + 0x1d4c + 0x697)) *
        (-parseInt(_0x71e320(_0x39f904._0x3f3532)) /
          (-0x8bd * 0x1 + 0x957 * -0x1 + 0x121b * 0x1)) +
        (-parseInt(_0x71e320(0x12f)) /
          (0x78 * -0x18 + -0x26d2 + -0x35 * -0xf2)) *
        (-parseInt(_0x71e320(_0x39f904._0x5c79a6)) /
          (0x97 + -0x6 * 0x132 + 0x69e)) +
        parseInt(_0x71e320(_0x39f904._0x352d63)) /
        (-0x1 * 0x2089 + 0xd56 * 0x1 + -0x133d * -0x1) +
        (parseInt(_0x71e320(0x141)) / (-0x278 + -0x443 * 0x6 + -0x229 * -0xd)) *
        (-parseInt(_0x71e320(_0x39f904._0x3d6df3)) /
          (-0x3 * -0x1c9 + 0x1 * 0x14ac + -0x8a9 * 0x3));
      if (_0x4bca74 === _0x533b3e) break;
      else _0x5d0ef8["push"](_0x5d0ef8["shift"]());
    } catch (_0x1abe00) {
      _0x5d0ef8["push"](_0x5d0ef8["shift"]());
    }
  }
})(_0x17fc, -0xcead1 + 0x2525 * -0x4d + 0x1ea677 * 0x1);
var _0x308fc8 = (function () {
  var _0x2f0f56 = { _0x5b663e: 0x125 },
    _0x37d8e6 = { _0x4d530f: 0x142 },
    _0x125e0f = _0x4ef6,
    _0x43915a = {};
  (_0x43915a[_0x125e0f(_0x2f0f56._0x5b663e)] = function (
    _0x58dc9b,
    _0x3d158d
  ) {
    return _0x58dc9b === _0x3d158d;
  }),
    (_0x43915a["\x56\x46\x6a\x55\x4b"] = _0x125e0f(0x119));
  var _0x289072 = _0x43915a,
    _0x349d30 = !![];
  return function (_0x3bb724, _0x57c04c) {
    var _0x44a4b1 = _0x125e0f;
    if (
      _0x289072["\x63\x4f\x73\x44\x5a"](
        _0x289072[_0x44a4b1(_0x37d8e6._0x4d530f)],
        _0x44a4b1(0x119)
      )
    ) {
      var _0xfefa07 = _0x349d30
        ? function () {
          var _0x1a392a = _0x44a4b1;
          if (_0x57c04c) {
            var _0x422db6 = _0x57c04c[_0x1a392a(0x134)](
              _0x3bb724,
              arguments
            );
            return (_0x57c04c = null), _0x422db6;
          }
        }
        : function () { };
      return (_0x349d30 = ![]), _0xfefa07;
    } else {
      var _0x13086c = _0x220476["\x61\x70\x70\x6c\x79"](_0x5474df, arguments);
      return (_0x5520ff = null), _0x13086c;
    }
  };
})(),
  _0xb764ed = _0x308fc8(this, function () {
    var _0x1b316f = {
      _0xb0bccd: 0x13c,
      _0x3abbc7: 0x123,
      _0x472392: 0x10e,
      _0x231915: 0x12c,
    },
      _0x5a576f = _0x4ef6,
      _0x2bf321 = {};
    _0x2bf321["\x77\x50\x46\x4b\x6f"] =
      _0x5a576f(_0x1b316f._0xb0bccd) + "\x2b\x24";
    var _0x37f9f2 = _0x2bf321;
    return _0xb764ed[_0x5a576f(_0x1b316f._0x3abbc7)]()
    [_0x5a576f(0x126)](_0x37f9f2[_0x5a576f(_0x1b316f._0x472392)])
    [_0x5a576f(0x123)]()
    [_0x5a576f(_0x1b316f._0x231915) + "\x72"](_0xb764ed)
    [_0x5a576f(0x126)](_0x37f9f2["\x77\x50\x46\x4b\x6f"]);
  });
_0xb764ed(),
  $(document)["\x72\x65\x61\x64\x79"](function () {
    var _0xaa27a4 = {
      _0x27ad24: 0x11e,
      _0x9c72ec: 0x110,
      _0x245f51: 0x11c,
      _0x4e11c6: 0x11a,
      _0x48700e: 0x10d,
      _0x2db5df: 0x12e,
      _0xc91f5b: 0x13d,
      _0x4a6575: 0x116,
      _0x4d6e19: 0x129,
      _0x44ab44: 0x127,
    },
      _0x1f3a04 = {
        _0x5c0f0d: 0x111,
        _0x372087: 0x12c,
        _0xb3964e: 0x126,
        _0x5cadaa: 0x13c,
        _0x15a5e5: 0x10c,
        _0x465561: 0x11b,
        _0x4e43df: 0x120,
        _0x288490: 0x122,
        _0x39e216: 0x130,
      },
      _0x5b1df0 = _0x4ef6,
      _0x20e70c = {
        "\x53\x75\x78\x51\x78":
          "\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29" + "\x2b\x24",
        "\x49\x66\x44\x47\x62": function (_0x2d086b, _0x4d4a59) {
          return _0x2d086b(_0x4d4a59);
        },
        "\x51\x65\x4d\x6b\x43": _0x5b1df0(0x10c) + "\x6c\x65",
        "\x67\x55\x79\x66\x6d": function (_0x23b64a, _0x4c93f2) {
          return _0x23b64a === _0x4c93f2;
        },
        "\x5a\x4a\x69\x4c\x6f": _0x5b1df0(0x12d),
        "\x6c\x53\x77\x42\x64": _0x5b1df0(0x118),
        "\x73\x44\x56\x42\x44": function (_0x10d9e6, _0x471ee8) {
          return _0x10d9e6 !== _0x471ee8;
        },
        "\x49\x74\x71\x59\x50":
          _0x5b1df0(0x117) +
          _0x5b1df0(_0xaa27a4._0x27ad24) +
          _0x5b1df0(_0xaa27a4._0x9c72ec) +
          _0x5b1df0(0x115) +
          "\x6e\x74\x3b\x20\x66\x6f\x6e\x74\x2d\x73" +
          _0x5b1df0(_0xaa27a4._0x245f51) +
          _0x5b1df0(_0xaa27a4._0x4e11c6) +
          "\x3b\x20\x70\x61\x64\x64\x69\x6e\x67\x3a" +
          _0x5b1df0(0x112) +
          "\x70\x6f\x72\x74\x61\x6e\x74\x3b\x20\x77" +
          _0x5b1df0(0x13b) +
          _0x5b1df0(_0xaa27a4._0x48700e) +
          _0x5b1df0(_0xaa27a4._0x2db5df) +
          "\x65\x3e",
        "\x62\x4b\x69\x42\x6c": function (_0x4a5f8f, _0x4fccdc) {
          return _0x4a5f8f(_0x4fccdc);
        },
        "\x45\x6c\x61\x41\x66": function (_0x2801b0, _0x221937) {
          return _0x2801b0 == _0x221937;
        },
        "\x43\x4c\x68\x47\x6d": function (_0x3e756c, _0x27a37c, _0x38ffea) {
          return _0x3e756c(_0x27a37c, _0x38ffea);
        },
        "\x76\x4d\x67\x78\x41": "\x62\x6f\x64\x79",
        "\x73\x55\x77\x58\x47":
          _0x5b1df0(0x135) +
          "\x3d\x22\x62\x6f\x64\x79\x63\x6f\x6d\x70" +
          _0x5b1df0(_0xaa27a4._0xc91f5b) +
          "\x76\x3e",
        "\x65\x55\x6b\x6e\x62": function (_0x14a3dd, _0x8d474b, _0x2cf843) {
          return _0x14a3dd(_0x8d474b, _0x2cf843);
        },
      };
    _0x20e70c["\x49\x66\x44\x47\x62"](
      $,
      _0x20e70c[_0x5b1df0(_0xaa27a4._0x4a6575)]
    )[_0x5b1df0(_0xaa27a4._0x4d6e19)](
      _0x20e70c[_0x5b1df0(_0xaa27a4._0x44ab44)]
    );
    function _0x230819() {
      var _0x48499b = { _0x5a9661: 0x13e, _0x202349: 0x136 },
        _0x4cc5a7 = _0x5b1df0,
        _0x3879d6 = {
          "\x63\x49\x64\x5a\x48": function (_0x4a22ba, _0x537739) {
            var _0xe657db = _0x4ef6;
            return _0x20e70c[_0xe657db(0x122)](_0x4a22ba, _0x537739);
          },
          "\x6c\x7a\x77\x4b\x6d": _0x20e70c[_0x4cc5a7(_0x1f3a04._0x5c0f0d)],
        };
      if (
        _0x20e70c[_0x4cc5a7(0x138)](
          _0x20e70c[_0x4cc5a7(0x11f)],
          _0x20e70c[_0x4cc5a7(0x140)]
        )
      )
        return _0x3fb410["\x74\x6f\x53\x74\x72\x69\x6e\x67"]()
        ["\x73\x65\x61\x72\x63\x68"](wmCSsr[_0x4cc5a7(0x133)])
        [_0x4cc5a7(0x123)]()
        [_0x4cc5a7(_0x1f3a04._0x372087) + "\x72"](_0x4874bf)
        [_0x4cc5a7(_0x1f3a04._0xb3964e)](
          _0x4cc5a7(_0x1f3a04._0x5cadaa) + "\x2b\x24"
        );
      else {
        if (
          _0x20e70c[_0x4cc5a7(0x10f)](
            $(_0x4cc5a7(_0x1f3a04._0x15a5e5) + "\x6c\x65")[
            "\x6c\x65\x6e\x67\x74\x68"
            ],
            -0x2139 + -0x1863 + -0x12d * -0x31
          )
        ) {
          var _0x5a4e57 = _0x20e70c[_0x4cc5a7(_0x1f3a04._0x465561)];
          _0x20e70c[_0x4cc5a7(_0x1f3a04._0x4e43df)]($, "\x70")[
            _0x4cc5a7(0x130)
          ](_0x5a4e57),
            _0x20e70c[_0x4cc5a7(_0x1f3a04._0x288490)]($, _0x4cc5a7(0x113))[
              _0x4cc5a7(_0x1f3a04._0x39e216)
            ](_0x5a4e57);
        } else {
          if (
            _0x20e70c[_0x4cc5a7(0x114)](
              $(_0x20e70c[_0x4cc5a7(0x111)])["\x6c\x65\x6e\x67\x74\x68"],
              -0x1a32 + -0x1 * 0x1659 + 0x308c
            )
          ) {
            function _0x234179() {
              var _0xd5624b = _0x4cc5a7;
              _0x3879d6[_0xd5624b(0x13f)](
                $,
                _0x3879d6[_0xd5624b(_0x48499b._0x5a9661)]
              )[_0xd5624b(_0x48499b._0x202349)]();
            }
            _0x20e70c["\x43\x4c\x68\x47\x6d"](
              setTimeout,
              _0x234179,
              0x174 * 0xb + -0x13 * 0x9e + -0x3dd
            );
          }
        }
      }
    }
    _0x20e70c[_0x5b1df0(0x131)](
      setTimeout,
      _0x230819,
      -0x1a * 0x102 + 0x825 + 0x1273
    );
  });
