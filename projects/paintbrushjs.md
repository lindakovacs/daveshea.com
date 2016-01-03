---
layout: project
title: Paintbrush JS
permalink: /projects/paintbrush/
makerbase: https://makerba.se/p/1v6525/paintbrushjs
slug: paintbrush
project: true
weight: 80
date: 2010
---

<section id="summary" class="project-section">

	<div class="wrap">

		<div class="project-summary">
			<p>A Javascript library to bring common image processing effects to the browser, realtime.</p>
			<p class="project-role">Contribution: Creator</p>
		</div>

		<ul class="project-gallery project-gallery-1">
			<li class="project-thumb">
				<div class="project-frame">

					<form action="#" method="post" id="interaction-form">
					<div id="interaction" class="pbjs-form">

						<img src="/projects/paintbrushjs/bb.jpg" id="filter-target" class="filter-blur" alt="" />

						<label class="selector">
							Filter:
							<select id="filter-selector"></select>
						</label>

						<div class="controls" id="controls-blur">
							<label>
								Amount:
								<input type="range" name="data-pb-blur-amount" min="0" max="10" step="0.05" value="0">
							</label>
						</div>

						<div class="controls" id="controls-edges">
							<label>
								Amount:
								<input type="range" name="data-pb-edges-amount" min="0" max="1" step="0.01" value="1">
							</label>
						</div>

						<div class="controls" id="controls-emboss">
							<label>
								Amount:
								<input type="range" name="data-pb-emboss-amount" min="0" max="1" step="0.01" value="0.2">
							</label>
						</div>

						<div class="controls" id="controls-greyscale">
							<label>
								Opacity:
								<input type="range" name="data-pb-greyscale-opacity" min="0" max="1" step="0.01" value="1">
							</label>
						</div>

						<div class="controls" id="controls-matrix">
							<label>
								Amount:
								<input type="range" name="data-pb-matrix-amount" min="0" max="1" step="0.01" value="0.2">
							</label>
						</div>

						<div class="controls" id="controls-mosaic">
							<label>
								Opacity:
								<input type="range" name="data-pb-mosaic-opacity" min="0" max="1" step="0.01" value="1">
							</label>
							<label>
								Size:
								<input type="range" name="data-pb-mosaic-size" min="1" max="40" step="1" value="5">
							</label>
						</div>

						<div class="controls" id="controls-noise">
							<label>
								Amount:
								<input type="range" name="data-pb-noise-amount" min="0" max="100" step="1" value="30">
							</label>
							<label>
								Type:
								<input type="radio" name="data-pb-noise-type" value="mono"> Mono
								<input type="radio" name="data-pb-noise-type" value="colour"> Colour
							</label>
						</div>

						<div class="controls" id="controls-posterize">
							<label>
								Amount:
								<input type="range" name="data-pb-posterize-amount" min="2" max="100" step="1" value="5">
							</label>
							<label>
								Opacity:
								<input type="range" name="data-pb-posterize-opacity" min="0" max="1" step="0.01" value="1">
							</label>
						</div>

						<div class="controls" id="controls-sepia">
							<label>
								Opacity:
								<input type="range" name="data-pb-sepia-opacity" min="0" max="1" step="0.01" value="0.5">
							</label>
						</div>

						<div class="controls" id="controls-sharpen">
							<label>
								Amount:
								<input type="range" name="data-pb-sharpen-amount" min="0" max="1" step="0.01" value="0.2">
							</label>
						</div>

						<div class="controls" id="controls-tint">
							<label>
								Colour:
								<input type="text" name="data-pb-tint-color" value="#FF0000">
							</label>
							<label>
								Opacity:
								<input type="range" name="data-pb-tint-opacity" min="0" max="1" step="0.01" value="0.5">
							</label>
						</div>
						
					</div>		
					</form>		

				</div>
				<p class="project-thumb-caption">A live PaintbrushJS demo</p>
			</li>
		</ul>


	</div>

</section>


<section id="story" class="project-section project-story">
	<div class="wrap">

	<h2>The Story</h2>

	<p>In late 2010 I gave a presentation on the then-new HTML5 <code>canvas</code> element. I briefly touched on the pixel manipulation capabilities it offered, which inspired me to play around further afterwards.</p>

	<p>I realized that the ability to run various functions on any pixel within a defined area meant that common image manipulation abilities were a real possibility, so I rolled up my sleeves and got to work sorting out how to turn this vague idea into something.</p>

	<p>Over a couple of months of evenings I went deep on image processing algorithms and performance optimization, learning how to implement things like convolution matrices and bit shifting to create a lightweight, browser-based image manipulation library. This was also the first true open source project I launched, which garnered a lot of attention and some useful contributions back upstream.</p>

	<p>Aside from the main image processing functions, another issue that needed to be solved was the interface to pull a document's images into the <code>canvas</code> element and get them back out into the document somehow without requiring much configuration on the author's part.</p>

	<p>The technique I hit upon involved having the script check for a defined list of filter classes that helped it decide where to apply a filter. For each defined class the script pulls in the image data, regardless of whether it found an <code>img</code> element or CSS background image, and renders it to an off-screen <code>canvas</code> element, applies the filter, then captures the canvas contents to a data-uri and replace the original source with this processed image data.</p>

	<p>The more recent <a href="http://www.w3.org/TR/filter-effects-1/">W3C filter effects</a> spec has made PaintbrushJS mostly redundant today, but in 2010 this was the only way to accomplish these effects on the fly without the assistance of a heavy server-side library.</p>


	</div>
</section>


<section id="elsewhere" class="project-section project-elsewhere">
	<div class="wrap">

	<h2>{{ page.title }} Elsewhere</h2>

	<ul class="link-list link-list-3up">

		<li class="link link-site">
			<a href="http://mezzoblue.github.io/PaintbrushJS/demo/index.html">PaintbrushJS Demo Site</a>
		</li>
		<li class="link link-github">
			<a href="https://github.com/mezzoblue/PaintbrushJS">Github</a>
		</li>
		<li class="link">
			<a href="https://makerba.se/p/1v6525/paintbrushjs">makerbase</a>
		</li>

	</ul>

	</div>
</section>


<section class="project-nav">
	<ul>
		<li class="project-prev">
			<a href="/projects/elevation/" class="link">
				Elevation
			</a>
		</li>
		<li class="project-top">
			<a href="#top" class="link">
				Back to Top
			</a>
		</li>
		<li class="project-next">
			<a href="/projects/chalkwork/" class="link">
				Chalkwork Icon Library
			</a>
		</li>
	</ul>
</section>


<script type="text/javascript" src="/projects/paintbrushjs/script/common.js"></script>
<script type="text/javascript" src="/projects/paintbrushjs/script/paintbrush.js"></script>
<script type="text/javascript" src="/projects/paintbrushjs/script/playground.js"></script>
