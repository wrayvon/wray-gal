window.APP = window.APP || {};

$(function() {
  'use strict';
  APP.wrayGal.init();
});
// var APP = APP || {};

APP.wrayGal = (function ($) {
  'use strict';

  var init = function() {

    $('.wrayGal').wrayGal({
      captions: true
    });

 };


return { 
  init: init
};

})(jQuery);