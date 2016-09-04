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
    a.fn.selectpicker.defaults = { noneSelectedText: "Hiçbiri seçilmedi", noneResultsText: "Hiçbir sonuç bulunamadı {0}", countSelectedText: function countSelectedText(a, b) {
        return "{0} öğe seçildi";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [1 == a ? "Limit aşıldı (maksimum {n} sayıda öğe )" : "Limit aşıldı (maksimum {n} sayıda öğe)", "Grup limiti aşıldı (maksimum {n} sayıda öğe)"];
      }, selectAllText: "Tümünü Seç", deselectAllText: "Seçiniz", multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-tr_TR.min-compiled.js.map