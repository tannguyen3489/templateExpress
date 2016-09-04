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
      noneSelectedText: 'Nic nie zaznaczono',
      noneResultsText: 'Brak wyników wyszukiwania {0}',
      countSelectedText: 'Zaznaczono {0} z {1}',
      maxOptionsText: ['Osiągnięto limit ({n} {var} max)', 'Limit grupy osiągnięty ({n} {var} max)', ['elementy', 'element']],
      selectAll: 'Zaznacz wszystkie',
      deselectAll: 'Odznacz wszystkie',
      multipleSeparator: ', '
    };
  })(jQuery);
});

//# sourceMappingURL=defaults-pl_PL-compiled.js.map