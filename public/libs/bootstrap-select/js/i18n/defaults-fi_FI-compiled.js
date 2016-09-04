'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * Bootstrap-select v1.11.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return factory(a0);
    });
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(undefined, function (jQuery) {

  (function ($) {
    $.fn.selectpicker.defaults = {
      noneSelectedText: 'Ei valintoja',
      noneResultsText: 'Ei hakutuloksia {0}',
      countSelectedText: function countSelectedText(numSelected, numTotal) {
        return numSelected == 1 ? "{0} valittu" : "{0} valitut";
      },
      maxOptionsText: function maxOptionsText(numAll, numGroup) {
        return [numAll == 1 ? 'Valintojen maksimimäärä ({n} saavutettu)' : 'Valintojen maksimimäärä ({n} saavutettu)', numGroup == 1 ? 'Ryhmän maksimimäärä ({n} saavutettu)' : 'Ryhmän maksimimäärä ({n} saavutettu)'];
      },
      selectAllText: 'Valitse kaikki',
      deselectAllText: 'Poista kaikki',
      multipleSeparator: ', '
    };
  })(jQuery);
});

//# sourceMappingURL=defaults-fi_FI-compiled.js.map