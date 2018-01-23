
//Sam Wray 
//Wray Gallery - v2.3 - 24.08.17
 (function ( $ ) {
   $.fn.wraygal = function(options) {
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
      //if ($(self).hasClass('wraygal__caption')) {
      if (settings.captions == true) {
        $(self).find('.wraygal__overlay .wraygal__overlay-inner img').after('<div class="wraygal__caption"></div>');
      }

      // if (settings.arrowBtn == true) {
      //   $(self).find('.wraygal__thumb a').prepend('<button type="button" class="wraygal__open-btn">Open overlay</button>');
      // }

      //each thumbnail loads 1 after another
      // if ($(self).hasClass('wraygal--steps')) {
        if (settings.steps == true) {
          var page1 = function () {
            var i = 0;

              //sets opacity on thumbs to 0
              var lis = $(self).find('.wraygal__thumbs img').css('opacity', '0');

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

      var amountOfImg = $(self).find('.wraygal__thumbs img').length - 1;

      var totalAmount = amountOfImg + 1;

      $(self).find('.wraygal__total').append(totalAmount);

      var containerHeight = $(self).parent().height();

      var $thumb = $(self).find('.wraygal__thumb a');

      $($thumb).click(function () {

        containerHeight = $(self).height();

        var imgIndex = $(this).parent().index();
        currentItem = imgIndex;

        imgNumber = currentItem + 1

        $(self).find('.wraygal__current').html('').append(imgNumber);

        $(this).parent().addClass('wraygal__thumb--active');

        // if ($(this).hasClass('wraygal__video')) {
          if (settings.video == true) {
            var videoUrl = $(this).children('img').attr('data-source');
            $('<div class="video-gallery"><div class="video-gallery__overlay-inner"><div class="videowrapper"><iframe class="video-iframe" src="' + videoUrl + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div><div class="video-gallery__nav"><span class="video-gallery__close"></span><div class="wraygal__number"><span class="wraygal__current"></span>/<span class="wraygal__total"></span></div><span class="wraygal__next"></span><span class="wraygal__prev"></span></div></div></div>').insertBefore($('.wraygal__thumbs'));
            $('.wraygal__total').html('').append(totalAmount);
            $('.wraygal__current').html('').append(imgNumber);

          }
          else {
          //gets image data source of clicked image
          var imgSrc = $(this).children('img').attr('data-source');


            //sets the image to the hidden overlay image
            $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('img').attr("src", imgSrc);

            //if has captions, the add the caption to the caption div
            // if ($(self).hasClass('wraygal__caption')) {
            if (settings.captions == true) {
              $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').html('');

              var imgCaption = $(this).children('img').attr('alt');

              $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').append(imgCaption);
            }

            $(self).find('.wraygal__overlay').fadeIn().attr('tabindex', '0').focus();
            $(self).find('.wraygal__nav').fadeIn();
            $(self).find('.wraygal__overlay img').fadeIn();



            // //fades out the thumbnails then fades in the overlay image and nav
            // $(self).find('.wraygal__thumbs').fadeOut(400, function () {
            //     $(self).find('.wraygal__overlay').fadeIn(400, function () {
            //         $(self).find('.wraygal__nav').fadeIn(400);
            //     });

            // });
          }

        return false;

        });

      $(document).keyup(function(e) {
          //Close overlay on press of escape key
          if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('.wraygal__close').click();
          }

          //go to previous item on press of left key
          if (e.keyCode == 37) { // left key
            $('.wraygal__prev').click();
          }

          //go to next item on press of left key
          if (e.keyCode == 39) { // right key
            $('.wraygal__next').click();
          }
      });



      $(self).find('.wraygal__thumbs .wraygal__open-btn').click(function () {
        containerHeight = $(self).parent().height();

        var imgIndex = $(this).parent().index();
        currentItem = imgIndex;

        imgNumber = currentItem + 1

        $(self).find('.wraygal__current').html('').append(imgNumber);

          //gets image data source of clicked image
          var imgSrc = $(this).parent().find('img').attr('data-source');

          //sets the image to the hidden overlay image
          $(self).find('.wraygal__overlay .wraygal__overlay-inner').parent().find('img').attr("src", imgSrc);

          //if has captions, the add the caption to the caption div
          // if ($(self).hasClass('wraygal__caption')) {
            if (settings.captions == true) {
              $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').html('');

              var imgCaption = $(this).parent().find('img').attr('alt');

              $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').append(imgCaption);
            }

            $(self).find('.wraygal__overlay').fadeIn();
            $(self).find('.wraygal__nav').fadeIn();

          // //fades out the thumbnails then fades in the overlay image and nav
          // $(self).find('.wraygal__thumbs').fadeOut(400, function () {
          //     $(self).find('.wraygal__overlay').fadeIn(400, function () {
          //         $(self).find('.wraygal__nav').fadeIn(400);
          //     });

          // });

        });

      $('body').on('click', '.wraygal__next', function () {
          //increments currentItem 1
          if (currentItem === amountOfImg) {
            currentItem = 0;
          }

          else {
            currentItem++;
          }

          imgNumber = currentItem + 1

          $(self).find('.wraygal__current').html('').append(imgNumber);

          var prevItem = $('.wraygal__thumb--active');
          prevItem.removeClass('wraygal__thumb--active').next('.wraygal__thumb').addClass('wraygal__thumb--active');


          $(self).find('.wraygal__overlay .wraygal__overlay-inner img').fadeOut(300, function () {
            var imgSrc = $(self).find('.wraygal__thumbs img').eq(currentItem).attr('data-source');

            //remove current active class then add it to the new one
            $('.wraygal__thumb--active').removeClass('wraygal__thumb--active');
            $(self).find('.wraygal__thumbs .wraygal__thumb').eq(currentItem).addClass('wraygal__thumb--active');

            if (/youtube/i.test(imgSrc)) {
              var videoUrl = $(this).children('img').attr('data-source');
                //if previous was a video just change the iframe
                if ($('.video-gallery').length) {
                  $('.video-iframe').remove();
                  $('.videowrapper').append('<iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
                }
            //otherwise add the video gallery HTML in again
            else {
              $('<div class="video-gallery"><div class="video-gallery__overlay-inner"><div class="videowrapper"><iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div><div class="video-gallery__nav"><button type="button" class="video-gallery__close"></button><div class="wraygal__number"><span class="wraygal__current"></span>/<span class="wraygal__total"></span></div><button type="button" class="wraygal__next"></button><button type="button" class="wraygal__prev"></button></div></div></div>').insertBefore($('.wraygal__thumbs'));
            }

            $(self).find('.wraygal__total').html('').append(totalAmount);
            $(self).find('.wraygal__current').html('').append(imgNumber);
          }
          else {
          //if previous was a video remove it and show the image gallery again
          // if ($('.video-gallery').length) {
            if (settings.video == true) {
              $(self).find('.video-gallery').remove();
              $(self).find('.wraygal__overlay').show();
            }
              //sets it to the hidden overlay image
              $(self).find('.wraygal__overlay .wraygal__overlay-inner img').attr("src", imgSrc);
                //fades in new image
                $(self).find('.wraygal__overlay .wraygal__overlay-inner img').fadeIn(300);
              }

            })

          //change caption if it has one
          // if ($(self).hasClass('wraygal__caption')) {
            if (settings.captions == true) {
              $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').html('');

              var imgCaption = $(self).find('.wraygal__thumbs img').eq(currentItem).attr('alt');
              $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').append(imgCaption);
            }
          });

      $('body').on('click', '.wraygal__prev', function () {
          //decreases currentItem by 1
          if (currentItem === 0) {
            currentItem = amountOfImg;
          }

          else {
            currentItem--;
          }

          imgNumber = currentItem + 1

          $(self).find('.wraygal__current').html('').append(imgNumber);

          $(self).find('.wraygal__overlay .wraygal__overlay-inner img').fadeOut(400, function () {
            var imgSrc = $(self).find('.wraygal__thumbs img').eq(currentItem).attr('data-source');

            //remove current active class then add it to the new one
            $('.wraygal__thumb--active').removeClass('wraygal__thumb--active');
            $(self).find('.wraygal__thumbs .wraygal__thumb').eq(currentItem).addClass('wraygal__thumb--active');

            if (/youtube/i.test(imgSrc)) {
              var videoUrl = $(this).children('img').attr('data-source');
                //if previous was a video just change the iframe
                if ($(self).find('.video-gallery').length) {
                  $('.video-iframe').remove();
                  $('.videowrapper').append('<iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
                }
            //otherwise add the video gallery HTML in again
            else {
              $('<div class="video-gallery"><div class="video-gallery__overlay-inner"><div class="videowrapper"><iframe class="video-iframe" src="' + imgSrc + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div><div class="video-gallery__nav"><button type="button" class="video-gallery__close"></button><div class="wraygal__number"><span class="wraygal__current"></span>/<span class="wraygal__total"></span></div><button type="button" class="wraygal__next"></button><button type="button" class="wraygal__prev"></button></div></div></div>').insertBefore($('.wraygal__thumbs'));
            }
            $(self).find('.wraygal__total').html('').append(totalAmount);
            $(self).find('.wraygal__current').html('').append(imgNumber);
          }
          else {

            //if previous was a video remove it and show the image gallery again
            if ($(self).find('.video-gallery').length) {
              $(self).find('.video-gallery').remove();
              $(self).find('.wraygal__overlay').show();
            }
            //sets it to the hidden overlay image
            $(self).find('.wraygal__overlay .wraygal__overlay-inner img').attr("src", imgSrc);
            //fades in new image
            $(self).find('.wraygal__overlay .wraygal__overlay-inner img').fadeIn();
          }

        })

        //changes caption if it has one
        // if ($(self).hasClass('wraygal__caption')) {
        if (settings.captions == true) {
          $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').html('');

          var imgCaption = $(self).find('.wraygal__thumbs img').eq(currentItem).attr('alt');
          $(self).find('.wraygal__overlay .wraygal__overlay-inner').children('.wraygal__caption').append(imgCaption);
        }
      });


        //closes the overlay and shows the thumbnails again
        $('body').on('click', '.wraygal__close', function () {
          // if ($(self).hasClass('wraygal--animate-height')) {
          if (settings.animateHeight == true) {
            $(self).parent().animate({ height: containerHeight }, 400, function () {
              setTimeout(function () { $(self).parent().removeAttr('style'); }, 1000);
            });
          }

            //fades out big image
            $(self).find('.wraygal__overlay').fadeOut(400, function () {



                //shows thumbnails again
                $(self).find('.wraygal__thumbs').show();

                //focus on current active thumb
                $('.wraygal__thumb--active a').focus();

                //remove active class
                $('.wraygal__thumb--active').removeClass('wraygal__thumb--active');

              if (settings.fade == true) {
                // if ($(self).hasClass('wraygal--fade')) {
                    //sets opacity on thumbs to 0
                    var lis = $(self).find('.wraygal__thumbs img').css('opacity', '0');

                    lis.animate({
                      opacity: '1'
                    }, 500);
                  }


                  // if ($(self).hasClass('wraygal--steps')) {
                  if (settings.steps == true) {
                    var page1 = function () {
                      var i = 0;

                        //sets opacity on thumbs to 0
                        var lis = $(self).find('.wraygal__thumbs img').css('opacity', '0');

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