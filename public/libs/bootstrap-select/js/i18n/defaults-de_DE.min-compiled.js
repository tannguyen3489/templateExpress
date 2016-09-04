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
    a.fn.selectpicker.defaults = { noneSelectedText: "Bitte wählen...", noneResultsText: "Keine Ergebnisse für {0}", countSelectedText: function countSelectedText(a, b) {
        return 1 == a ? "{0} Element ausgewählt" : "{0} Elemente ausgewählt";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [1 == a ? "Limit erreicht ({n} Element max.)" : "Limit erreicht ({n} Elemente max.)", 1 == b ? "Gruppen-Limit erreicht ({n} Element max.)" : "Gruppen-Limit erreicht ({n} Elemente max.)"];
      }, selectAllText: "Alles auswählen", deselectAllText: "Nichts auswählen", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-de_DE.min-compiled.js.map