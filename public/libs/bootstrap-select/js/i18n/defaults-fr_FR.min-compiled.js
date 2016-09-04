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
    a.fn.selectpicker.defaults = { noneSelectedText: "Aucune sélection", noneResultsText: "Aucun résultat pour {0}", countSelectedText: function countSelectedText(a, b) {
        return a > 1 ? "{0} éléments sélectionnés" : "{0} élément sélectionné";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [a > 1 ? "Limite atteinte ({n} éléments max)" : "Limite atteinte ({n} élément max)", b > 1 ? "Limite du groupe atteinte ({n} éléments max)" : "Limite du groupe atteinte ({n} élément max)"];
      }, multipleSeparator: ", ", selectAllText: "Tout Sélectionner", deselectAllText: "Tout Dé-selectionner" };
  }(a);
});

//# sourceMappingURL=defaults-fr_FR.min-compiled.js.map