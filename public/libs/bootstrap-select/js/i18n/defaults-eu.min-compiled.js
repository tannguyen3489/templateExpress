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
    a.fn.selectpicker.defaults = { noneSelectedText: "Hautapenik ez", noneResultsText: "Emaitzarik ez {0}", countSelectedText: "{1}(e)tik {0} hautatuta", maxOptionsText: ["Mugara iritsita ({n} {var} gehienez)", "Taldearen mugara iritsita ({n} {var} gehienez)", ["elementu", "elementu"]], multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-eu.min-compiled.js.map