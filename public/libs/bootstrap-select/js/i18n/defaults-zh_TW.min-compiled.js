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
    a.fn.selectpicker.defaults = { noneSelectedText: "沒有選取任何項目", noneResultsText: "沒有找到符合的結果", countSelectedText: "已經選取{0}個項目", maxOptionsText: ["超過限制 (最多選擇{n}項)", "超過限制(最多選擇{n}組)"], selectAllText: "選取全部", deselectAllText: "全部取消", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-zh_TW.min-compiled.js.map