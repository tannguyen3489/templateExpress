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
    a.fn.selectpicker.defaults = { noneSelectedText: "Niekas nepasirinkta", noneResultsText: "Niekas nesutapo su {0}", countSelectedText: function countSelectedText(a, b) {
        return 1 == a ? "{0} elementas pasirinktas" : "{0} elementai(-ų) pasirinkta";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [1 == a ? "Pasiekta riba ({n} elementas daugiausiai)" : "Riba pasiekta ({n} elementai(-ų) daugiausiai)", 1 == b ? "Grupės riba pasiekta ({n} elementas daugiausiai)" : "Grupės riba pasiekta ({n} elementai(-ų) daugiausiai)"];
      }, selectAllText: "Pasirinkti visus", deselectAllText: "Atmesti visus", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-lt_LT.min-compiled.js.map