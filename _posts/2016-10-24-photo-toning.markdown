---
layout: post
title:  "Photo Toning with Gradients &amp; Blend Modes"
customCSS: blog-phototoning
---

Your browser now has ample ability to compose image effects on the fly, saving you a trip into an image editor. You can simulate toning effects and deliver the same image in many different ways by combining layered gradients over top of images and blending with the <code>background-blend-mode</code> property.

A need arose while building the <a href="http://palatedeck.com/">Palate Deck</a> website. After I'd placed the banner photos on various pages, I realized I'd need to go back into Photoshop to tint them and town down the contrast so I could overlay other text and images.

Or... did I?

After consulting <a href="http://caniuse.com/#feat=css-backgroundblendmode">caniuse</a> for <code>background-blend-mode</code> support, I realized that a) it's almost universally supported, and b) if used thoughtfully, it's an effect that will degrade fairly well when it's not.

And so I stumbled across a new image compositing trick.

<ul class="project-gallery project-gallery-2up">
	<li class="project-thumb">
		<figure>
			<div class="image"></div>
			<figcaption>The raw photo</figcaption>
		</figure>
	</li>
	<li class="project-thumb">
		<figure>
			<div class="image image-final"></div>
			<figcaption>The end result, all composed in-browser</figcaption>
		</figure>
	</li>
</ul>


<h2>Basic Setup</h2>

This effect is pretty familiar if you've ever digitally tinted a photo: take a photo, then add an adjustment layer over top to tint it, or adjust contrast, or add a gradient. 

Unlike an image editor, in this case the adjustment layers are browser-generated gradients. And we're doing this all with background image properties, and the multiple images they support.

But wait, isn't this what <code>filter</code> is supposed to do? I would have thought so too. However, the latest working draft doesn't have a mechanism for precise image toning. We're able to control contrast, and rotate the hue through the spectrum (an ability that's rarely useful in the real world), but it's unable to apply specific colour toning and subtle differences to various regions of the image.

So this is where we need to turn to layering and blending. To make this work, start by setting up your image as <code>background-image</code> instead of an <code>img</code> element. You'll need to set specific dimensions for your container (and media queries to resize where appropriate) and then use background properties to control it all.

<ul class="project-gallery project-gallery-2up-break">
	<li class="project-thumb">
		<div class="image"></div>
	</li>
	<li class="project-thumb">
		<code><textarea onclick="this.focus();this.select()" readonly="readonly">
.image {
  max-width: 100%;
  height: 200px;
  background-image: url(blog.jpg);
  background-size: cover;
  background-position: center;
}</textarea></code>
	</li>
</ul>

(The above properties are omitted from the following code examples for clarity's sake, but make sure to re-add them for the proper effect.)

To give you an idea of the adjustment control you have, I'll walk through the steps to create the comparison blend at the beginning of this article. 

<h2>Tinting</h2>

To start, I wanted to tint the image. This is easily accomplished by laying a solid-colour "gradient" over top with the same colour at both start and end points, then using the <code>color</code> blend mode to mix. By adjusting the alpha value of the end points you can control whether the image is fully tinted with the overlaying colour, or whether it allows natural colour to poke through.


<ul class="project-gallery project-gallery-2up-break">
	<li class="project-thumb">
		<div class="image image-tint"></div>
	</li>
	<li class="project-thumb">
		<code><textarea onclick="this.focus();this.select()" readonly="readonly">
.image {
  /* setup properties omitted */
  background-image: 
    linear-gradient(
      to bottom,
      rgba(#33767e, 0.9) 0%,
      rgba(#33767e, 0.9) 100%
    ),
    url(beer.jpg);

  background-blend-mode: 
    color,
    normal
  ;
}</textarea></code>
	</li>
</ul>


<h2>Contrast</h2>

The next step was dropping back contrast to let me add text over top. I'm not going to show the text here, but let's talk about the contrast.

Unlike tinting, we <em>can</em> control brightness and contrast with <code>filter</code> here. But it's not ideal since it only applies to the final rendered stack, which means it takes all previous effects with it. In this case I'd like the contrast adjustment to occur on the image before the tint and the red gradient is overlaid, so it won't work for me.

So we'll have to fake it with more gradients. I've chosen to use two; one a white layer set to 50% opacity and the lighten blend mode, the second a 50% opacity black layer set to darken. Combining those two together lightens the shadows and darkens the highlights. It results in a much greyer image, but that doesn't matter since I'm applying the tint over top.

<ul class="project-gallery project-gallery-2up-break">
	<li class="project-thumb">
		<div class="image image-contrast"></div>
	</li>
	<li class="project-thumb">
		<code><textarea onclick="this.focus();this.select()" readonly="readonly">
.image {
  /* setup properties omitted */
  background-image: 
    linear-gradient(
      to bottom,
      rgba(#33767e, 0.9) 0%,
      rgba(#33767e, 0.9) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(#fff, 0.5) 0%,
      rgba(#fff, 0.5) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(#000, 0.5) 0%,
      rgba(#000, 0.5) 100%
    ),
    url(beer.jpg);

  background-blend-mode: 
	color,
	lighten,
	darken,
	normal;
  ;
}</textarea></code>
	</li>
</ul>


<h2>Gradients</h2>

The basic image is where I need it now, so the last thing to do is add a red gradient at top of the stack to get the final tone I was shooting for. This last layer has some opaqueness and is blended normally to drop the finished contrast further.

<ul class="project-gallery project-gallery-2up-break">
	<li class="project-thumb">
		<div class="image image-final"></div>
	</li>
	<li class="project-thumb">
		<code><textarea onclick="this.focus();this.select()" readonly="readonly">
.image {
  /* setup properties omitted */
  background-image: 
    linear-gradient(
      to bottom,
      rgba(#d43f2d, 0.9) 0%,
      rgba(#d43f2d, 0.1) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(#33767e, 0.9) 0%,
      rgba(#33767e, 0.9) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(#fff, 0.5) 0%,
      rgba(#fff, 0.5) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(#000, 0.5) 0%,
      rgba(#000, 0.5) 100%
    ),
    url(beer.jpg);

  background-blend-mode: 
	normal
	color,
	lighten,
	darken,
	normal;
  ;
}</textarea></code>
	</li>
</ul>


<h2>Browser Support</h2>

The big caveats for this technique are that support for <code>background-blend-mode</code> in IE/Edge is non-existent right now, and Safari doesn't support the necessary <code>color</code> blend mode yet, so all examples thus far appear broken in those two browsers.

As I said at the beginning, it <strong>can</strong> degrade well, but you need to plan ahead. 

The multiple layers I'm using here are problematic because without blend modes, the rendered result is a muddied mess. It may not always be that bad, but clearly I need to back up a bit with this example.

<ul class="project-gallery project-gallery-2up-break">
	<li class="project-thumb">
		<figure>
			<div class="image image-final-noblend"></div>
			<figcaption>When blend modes aren't supported</figcaption>
		</figure>
	</li>
	<li class="project-thumb">
		<figure>
			<div class="image image-precomposed"></div>
			<figcaption>Much better, with a pre-toned photo</figcaption>
		</figure>
	</li>
</ul>


The compromise I found in the end was pre-toning and contrast-adjusting the photo in my image editor, and then applying the finishing gradients in the browser. I lose out on some of the benefits listed below by doing it this way, but since I know it's only a matter of time before Safari and Edge are on board, I'm looking forward to adding the full version to the arsenal in the not so distant future.

<h2>Use Cases</h2>

So how useful is this, really? Why build up your image toning in-browser instead of simply pre-composing in an image editor? 

<ul class="project-gallery project-gallery-4up">
	<li class="project-thumb">
		<div class="image"></div>
	</li>
	<li class="project-thumb">
		<div class="image image-variation-1"></div>
	</li>
	<li class="project-thumb">
		<div class="image image-variation-2"></div>
	</li>
	<li class="project-thumb">
		<div class="image image-variation-3"></div>
	</li>
</ul>

The answer is flexibility. You may not always be in control of the original image. It might be user-generated or coming in from a CDN. Or you may want to re-purpose it in different sections of your site. Being able to manipulate any source image in the browser is just one more trick for controlling the uncontrollable.

<p class="comments">
	Have comments on this? <a href="http://twitter.com/home?status=%40mezzoblue%20my%20thoughts%20on%20your%20photo%20toning%20post%20...">Tweet at me</a>.
</p>