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

  /*!
   * Translated default messages for bootstrap-select.
   * Locale: AR (Arabic)
   * Author: Yasser Lotfy <y_l@alive.com>
   */
  (function ($) {
    $.fn.selectpicker.defaults = {
      noneSelectedText: 'لم يتم إختيار شئ',
      noneResultsText: 'لا توجد نتائج مطابقة لـ {0}',
      countSelectedText: function countSelectedText(numSelected, numTotal) {
        return numSelected == 1 ? "{0} خيار تم إختياره" : "{0} خيارات تمت إختيارها";
      },
      maxOptionsText: function maxOptionsText(numAll, numGroup) {
        return [numAll == 1 ? 'تخطى الحد المسموح ({n} خيار بحد أقصى)' : 'تخطى الحد المسموح ({n} خيارات بحد أقصى)', numGroup == 1 ? 'تخطى الحد المسموح للمجموعة ({n} خيار بحد أقصى)' : 'تخطى الحد المسموح للمجموعة ({n} خيارات بحد أقصى)'];
      },
      selectAllText: 'إختيار الجميع',
      deselectAllText: 'إلغاء إختيار الجميع',
      multipleSeparator: '، '
    };
  })(jQuery);
});

//# sourceMappingURL=defaults-ar_AR-compiled.js.map