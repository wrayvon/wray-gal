window.APP = window.APP || {};

$(function() {
  APP.wraygal.init();
});
// var APP = APP || {};
APP.wraygal = (function ($) {
  'use strict';
  
  var init = function() {

    $('.wraygal').wraygal({
      captions: true
    });

  };


  return { 
    init: init
  };

})(jQuery);