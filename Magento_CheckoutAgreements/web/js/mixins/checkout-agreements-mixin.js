define([], function () {
  'use strict';

  return function (targetModule) {
    return targetModule.extend({
      htmlDecode: function (input) {
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
      },

      getCheckboxText: function (element) {
        return this.htmlDecode(element.checkboxText);
      }
    });
  };
});
