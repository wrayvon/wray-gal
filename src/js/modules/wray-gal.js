// var APP = APP || {};

APP.wraygal = (function ($) {

  var init = function() {

    $('.wraygal').wraygal({
      captions: true
    });

  };


  return { 
    init: init
  };

})(jQuery);