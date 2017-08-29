// var APP = APP || {};

APP.wrayGal = (function ($) {
  'use strict';

  var init = function() {

    $('.wraygal').wrayGal({
      captions: true
    });

  };


  return { 
    init: init
  };

})(jQuery);