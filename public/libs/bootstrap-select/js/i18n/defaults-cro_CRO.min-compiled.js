"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * Bootstrap-select v1.11.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function (a) {
    return b(a);
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : b(jQuery);
}(undefined, function (a) {
  !function (a) {
    a.fn.selectpicker.defaults = { noneSelectedText: "Odaberite stavku", noneResultsText: "Nema rezultata pretrage {0}", countSelectedText: function countSelectedText(a, b) {
        return 1 == a ? "{0} stavka selektirana" : "{0} stavke selektirane";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [1 == a ? "Limit je postignut ({n} stvar maximalno)" : "Limit je postignut ({n} stavke maksimalno)", 1 == b ? "Grupni limit je postignut ({n} stvar maksimalno)" : "Grupni limit je postignut ({n} stavke maksimalno)"];
      }, selectAllText: "Selektiraj sve", deselectAllText: "Deselektiraj sve", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-cro_CRO.min-compiled.js.map