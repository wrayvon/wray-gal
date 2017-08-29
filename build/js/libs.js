
//Sam Wray 
//Wray Gallery - v2.1 - 24.08.17
 (function ( $ ) {
   $.fn.wrayGal = function(options) {
    var imgNumber = '';
    var settings = $.extend ({
      //These are the defaults
      captions: false,
      steps: false,
      video: false,
      animateHeight: false,
      fade: false
    }, options);

    return this.each(function() {
      var self = $(this);
      //if has captions, add caption div
      //if ($(self).hasClass('wrayGal__caption')) {
      if (settings.captions == true) {
        $(self).find('.wrayGal__overlay .wrayGal__overlay-inner img').after('<div class="wrayGal__caption"></div>');
      }

      //each thumbnail loads 1 after another
      // if ($(self).hasClass('wrayGal--steps')) {
        if (settings.steps == true) {
          var page1 = function () {
            var i = 0;

              //sets opacity on thumbs to 0
              var lis = $(self).find('.wrayGal__thumbs img').css('opacity', '0');

              //displays each thumbnail 1 by 1
              (function displayImages() {
                if (i < lis.length) {
                  lis.eq(i++).animate({
                    opacity: '1'
                  }, 500)

                  setTimeout(function () { displayImages(); }, 100)
                }
              })();
            }();
          }

      //set current item
      var currentItem = 0;

      var amountOfImg = $(self).find('.wrayGal__thumbs img').length - 1;

      var totalAmount = amountOfImg + 1;

      $(self).find('.wrayGal__total').append(totalAmount);

      var containerHeight = $(self).parent().height();

      $(self).find('.wrayGal__thumb').click(function () {
        containerHeight = $(self).height();

        var imgIndex = $(this).index();
        currentItem = imgIndex;

        imgNumber = currentItem + 1

        $(self).find('.wrayGal__current').html('').append(imgNumber);



        // if ($(this).hasClass('wrayGal__video')) {
          if (settings.video == true) {
            var videoUrl = $(this).children('img').attr('data-source');
            $('<div class="video-gallery"><div class="video-gallery__overlay-inner"><div class="videowrapper"><iframe class="video-iframe" src="' + videoUrl + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div><div class="video-gallery__nav"><span class="video-gallery__close"></span><div class="wrayGal__number"><span class="wrayGal__current"></span>/<span class="wrayGal__total"></span></div><span class="wrayGal__next"></span><span class="wrayGal__prev"></span></div></div></div>').insertBefore($('.wrayGal__thumbs'));
            $('.wrayGal__total').html('').append(totalAmount);
            $('.wrayGal__current').html('').append(imgNumber);

          }
          else {
          //gets image data source of clicked image
          var imgSrc = $(this).children('img').attr('data-source');


            //sets the image to the hidden overlay image
            $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('img').attr("src", imgSrc);

            //if has captions, the add the caption to the caption div
            // if ($(self).hasClass('wrayGal__caption')) {
            if (settings.captions == true) {
              $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').html('');

              var imgCaption = $(this).children('img').attr('alt');

              $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').append(imgCaption);
            }

            $(self).find('.wrayGal__overlay').fadeIn();
            $(self).find('.wrayGal__nav').fadeIn();
            $(self).find('.wrayGal__overlay img').fadeIn();


            // //fades out the thumbnails then fades in the overlay image and nav
            // $(self).find('.wrayGal__thumbs').fadeOut(400, function () {
            //     $(self).find('.wrayGal__overlay').fadeIn(400, function () {
            //         $(self).find('.wrayGal__nav').fadeIn(400);
            //     });

            // });
          }
        });

      $(self).find('.wrayGal__thumbs span').click(function () {
        containerHeight = $(self).parent().height();

        var imgIndex = $(this).parent().index();
        currentItem = imgIndex;

        imgNumber = currentItem + 1

        $(self).find('.wrayGal__current').html('').append(imgNumber);

          //gets image data source of clicked image
          var imgSrc = $(this).siblings('img').attr('data-source');

          //sets the image to the hidden overlay image
          $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('img').attr("src", imgSrc);

          //if has captions, the add the caption to the caption div
          // if ($(self).hasClass('wrayGal__caption')) {
            if (settings.captions == true) {
              $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').html('');

              var imgCaption = $(this).siblings('img').attr('alt');

              $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').append(imgCaption);
            }

            $(self).find('.wrayGal__overlay').fadeIn();
            $(self).find('.wrayGal__nav').fadeIn();

          // //fades out the thumbnails then fades in the overlay image and nav
          // $(self).find('.wrayGal__thumbs').fadeOut(400, function () {
          //     $(self).find('.wrayGal__overlay').fadeIn(400, function () {
          //         $(self).find('.wrayGal__nav').fadeIn(400);
          //     });

          // });

        });

      $('body').on('click', '.wrayGal__next', function () {
          //increments currentItem 1
          if (currentItem === amountOfImg) {
            currentItem = 0;
          }

          else {
            currentItem++;
          }

          imgNumber = currentItem + 1

          $(self).find('.wrayGal__current').html('').append(imgNumber);


          $(self).find('.wrayGal__overlay .wrayGal__overlay-inner img').fadeOut(300, function () {
            var imgSrc = $(self).find('.wrayGal__thumbs img').eq(currentItem).attr('data-source');

            if (/youtube/i.test(imgSrc)) {
              var videoUrl = $(this).children('img').attr('data-source');
                //if previous was a video just change the iframe
                if ($('.video-gallery').length) {
                  $('.video-iframe').remove();
                  $('.videowrapper').append('<iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
                }
            //otherwise add the video gallery HTML in again
            else {
              $('<div class="video-gallery"><div class="video-gallery__overlay-inner"><div class="videowrapper"><iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div><div class="video-gallery__nav"><span class="video-gallery__close"></span><div class="wrayGal__number"><span class="wrayGal__current"></span>/<span class="wrayGal__total"></span></div><span class="wrayGal__next"></span><span class="wrayGal__prev"></span></div></div></div>').insertBefore($('.wrayGal__thumbs'));
            }

            $(self).find('.wrayGal__total').html('').append(totalAmount);
            $(self).find('.wrayGal__current').html('').append(imgNumber);
          }
          else {
          //if previous was a video remove it and show the image gallery again
          // if ($('.video-gallery').length) {
            if (settings.video == true) {
              $(self).find('.video-gallery').remove();
              $(self).find('.wrayGal__overlay').show();
            }
              //sets it to the hidden overlay image
              $(self).find('.wrayGal__overlay .wrayGal__overlay-inner img').attr("src", imgSrc);
                //fades in new image
                $(self).find('.wrayGal__overlay .wrayGal__overlay-inner img').fadeIn(300);
              }

            })

          //change caption if it has one
          // if ($(self).hasClass('wrayGal__caption')) {
            if (settings.captions == true) {
              $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').html('');

              var imgCaption = $(self).find('.wrayGal__thumbs img').eq(currentItem).attr('alt');
              $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').append(imgCaption);
            }
          });

      $('body').on('click', '.wrayGal__prev', function () {
          //decreases currentItem by 1
          if (currentItem === 0) {
            currentItem = amountOfImg;
          }

          else {
            currentItem--;
          }

          imgNumber = currentItem + 1

          $(self).find('.wrayGal__current').html('').append(imgNumber);

          $(self).find('.wrayGal__overlay .wrayGal__overlay-inner img').fadeOut(400, function () {
            var imgSrc = $(self).find('.wrayGal__thumbs img').eq(currentItem).attr('data-source');

            if (/youtube/i.test(imgSrc)) {
              var videoUrl = $(this).children('img').attr('data-source');
                //if previous was a video just change the iframe
                if ($(self).find('.video-gallery').length) {
                  $('.video-iframe').remove();
                  $('.videowrapper').append('<iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
                }
            //otherwise add the video gallery HTML in again
            else {
              $('<div class="video-gallery"><div class="video-gallery__overlay-inner"><div class="videowrapper"><iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div><div class="video-gallery__nav"><span class="video-gallery__close"></span><div class="wrayGal__number"><span class="wrayGal__current"></span>/<span class="wrayGal__total"></span></div><span class="wrayGal__next"></span><span class="wrayGal__prev"></span></div></div></div>').insertBefore($('.wrayGal__thumbs'));
            }
            $(self).find('.wrayGal__total').html('').append(totalAmount);
            $(self).find('.wrayGal__current').html('').append(imgNumber);
          }
          else {

            //if previous was a video remove it and show the image gallery again
            if ($(self).find('.video-gallery').length) {
              $(self).find('.video-gallery').remove();
              $(self).find('.wrayGal__overlay').show();
            }
            //sets it to the hidden overlay image
            $(self).find('.wrayGal__overlay .wrayGal__overlay-inner img').attr("src", imgSrc);
            //fades in new image
            $(self).find('.wrayGal__overlay .wrayGal__overlay-inner img').fadeIn();
          }

        })

        //changes caption if it has one
        // if ($(self).hasClass('wrayGal__caption')) {
        if (settings.captions == true) {
          $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').html('');

          var imgCaption = $(self).find('.wrayGal__thumbs img').eq(currentItem).attr('alt');
          $(self).find('.wrayGal__overlay .wrayGal__overlay-inner').children('.wrayGal__caption').append(imgCaption);
        }
      });


        //closes the overlay and shows the thumbnails again
        $('body').on('click', '.wrayGal__close', function () {
          // if ($(self).hasClass('wrayGal--animate-height')) {
          if (settings.animateHeight == true) {
            $(self).parent().animate({ height: containerHeight }, 400, function () {
              setTimeout(function () { $(self).parent().removeAttr('style'); }, 1000);
            });
          }

            //fades out big image
            $(self).find('.wrayGal__overlay').fadeOut(400, function () {

                //shows thumbnails again
                $(self).find('.wrayGal__thumbs').show();

              if (settings.fade == true) {
                // if ($(self).hasClass('wrayGal--fade')) {
                    //sets opacity on thumbs to 0
                    var lis = $(self).find('.wrayGal__thumbs img').css('opacity', '0');

                    lis.animate({
                      opacity: '1'
                    }, 500);
                  }


                  // if ($(self).hasClass('wrayGal--steps')) {
                  if (settings.steps == true) {
                    var page1 = function () {
                      var i = 0;

                        //sets opacity on thumbs to 0
                        var lis = $(self).find('.wrayGal__thumbs img').css('opacity', '0');

                        //displays each thumbnail 1 by 1
                        (function displayImages() {
                          if (i < lis.length) {
                            lis.eq(i++).animate({
                              opacity: '1'
                            }, 500)

                            setTimeout(function () { displayImages(); }, 100)
                          }
                        })();
                      }();
                    }


                  });
            $('.video-gallery').remove();

          });
      });

};
}( jQuery ));