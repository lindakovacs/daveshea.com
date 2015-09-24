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

	</div>

</section>


<section id="story" class="project-section project-story">
	<div class="wrap">

	<h2>The Story</h2>

	<p>In late 2010 I gave a presentation on the then-new HTML5 <code>canvas</code> element. I briefly touched on the pixel manipulation capabilities it offered, which inspired me to play around further afterwards.</p>

	<p>I realized that the ability to run various functions on any pixel within a defined area meant that common image manipulation abilities were a real possibility, so I rolled up my sleeves and got to work sorting out how to turn this vague idea into something.</p>

	<p>Over a couple of months of evenings I went deep on image processing algorithms and performance optimization, learning how to implement things like convolution matrices and bit shifting to create a lightweight, browser-based image manipulation library. This was also the first true open source project I launched, which garnered a lot of attention and some useful contributions back upstream.</p>

	<p>Aside from the main image processing functions, another issue to be solved was the interface to pull a document's images into the <code>canvas</code> element and get them back out into the document, without requiring much configuration on the author's part.</p>

	<p>The technique I hit on involved having the script check for a defined list of filter classes to decide where to apply the filters. When found it pulls in the image data, regardless of whether it found an <code>img</code> element or CSS background image, and renders it to an off-screen <code>canvas</code> element, applies the filter, then captures the canvas contents to a data-uri and replace the original source with this updated image data.</p>

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