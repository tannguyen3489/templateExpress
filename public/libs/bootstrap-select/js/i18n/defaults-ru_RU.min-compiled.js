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
    a.fn.selectpicker.defaults = { noneSelectedText: "Ничего не выбрано", noneResultsText: "Совпадений не найдено {0}", countSelectedText: "Выбрано {0} из {1}", maxOptionsText: ["Достигнут предел ({n} {var} максимум)", "Достигнут предел в группе ({n} {var} максимум)", ["items", "item"]], doneButtonText: "Закрыть", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-ru_RU.min-compiled.js.map