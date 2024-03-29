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
    a.fn.selectpicker.defaults = { noneSelectedText: "Ingen valgt", noneResultsText: "Søket gir ingen treff {0}", countSelectedText: function countSelectedText(a, b) {
        return 1 == a ? "{0} alternativ valgt" : "{0} alternativer valgt";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return ["Grense nådd (maks {n} valg)", "Grense for grupper nådd (maks {n} grupper)"];
      }, selectAllText: "Merk alle", deselectAllText: "Fjern alle", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-nb_NO.min-compiled.js.map