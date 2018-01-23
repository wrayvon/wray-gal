# wray-gal
An inline image/video gallery

Working example here:<br />
<a href="http://gallery.wray-designs.co.uk/">http://gallery.wray-designs.co.uk/</a><br /><br />

Code example:<br />
```
<div class="wraygal">
  <ul class="wraygal__thumbs clearfix">
    <li class="wraygal__thumb">
      <a href="/images/example1.jpg">
          <img src="/images/example1-thumb.jpg" data-source="/images/example1.jpg" alt="Alt tag" />
      </a>
    </li>
    <li class="wraygal__thumb">
      <a href="/images/example1.jpg">
          <img src="/images/example1-thumb.jpg" data-source="/images/example1.jpg" alt="Alt tag" />
      </a>
    </li>
  </ul>
</div>
```

<br /><br />


To run, simply use:<br />
$('.wraygal').wraygal();
<br />
<br />

Options (and default values):<br />
  captions: false,<br />
  steps: false,<br />
  video: false,<br />
  animateHeight: false,<br />
  fade: false
<br />
<br />
 

What the options do:<br />
Captions uses the alt tag of the image to display as a caption

Steps makes the images load in 1 by 1

Video is for when there is a video 

Animate height does exactly this, when going through the gallery the height will smoothly transition to the required height

Fade fades the images in
