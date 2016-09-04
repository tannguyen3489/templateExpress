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
    a.fn.selectpicker.defaults = { noneSelectedText: "Нищо избрано", noneResultsText: "Няма резултат за {0}", countSelectedText: function countSelectedText(a, b) {
        return 1 == a ? "{0} избран елемент" : "{0} избрани елемента";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [1 == a ? "Лимита е достигнат ({n} елемент максимум)" : "Лимита е достигнат ({n} елемента максимум)", 1 == b ? "Груповия лимит е достигнат ({n} елемент максимум)" : "Груповия лимит е достигнат ({n} елемента максимум)"];
      }, selectAllText: "Избери всички", deselectAllText: "Размаркирай всички", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-bg_BG.min-compiled.js.map