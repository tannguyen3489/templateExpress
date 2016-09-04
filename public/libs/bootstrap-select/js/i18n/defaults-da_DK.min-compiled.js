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
    a.fn.selectpicker.defaults = { noneSelectedText: "Intet valgt", noneResultsText: "Ingen resultater fundet {0}", countSelectedText: function countSelectedText(a, b) {
        return "{0} valgt";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [1 == a ? "Begrænsning nået (max {n} valgt)" : "Begrænsning nået (max {n} valgte)", 1 == b ? "Gruppe-begrænsning nået (max {n} valgt)" : "Gruppe-begrænsning nået (max {n} valgte)"];
      }, selectAllText: "Markér alle", deselectAllText: "Afmarkér alle", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-da_DK.min-compiled.js.map