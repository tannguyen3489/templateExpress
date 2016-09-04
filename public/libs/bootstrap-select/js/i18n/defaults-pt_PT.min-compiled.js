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
    a.fn.selectpicker.defaults = { noneSelectedText: "Nenhum seleccionado", noneResultsText: "Sem resultados contendo {0}", countSelectedText: "Selecionado {0} de {1}", maxOptionsText: ["Limite ultrapassado (máx. {n} {var})", "Limite de seleções ultrapassado (máx. {n} {var})", ["itens", "item"]], multipleSeparator: ", " };
  }(a);
});

//# sourceMappingURL=defaults-pt_PT.min-compiled.js.map