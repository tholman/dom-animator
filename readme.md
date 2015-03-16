# Overscroll.js

A tiny javascript library, to capture the moments when you've scrolled more than the screen allows (osx/ios)... so we can sneak in some little easter eggs. [Here's a live demo](http://tholman.com/overscroll), [and here's a video ](http://tholman.com/overscroll/video)!

### Instructions

`Overscroll.js` is a stand alone library (no jquery, or the likes) so usage is pretty straight forward. All styling of easter egg elements is up to the user, `Overscroll.js` only handles moving your elements onto/off the screen, when you are scrolling beyond the pages height.

#### HTML

There aren't any restrictions for the `html` overscroll can bind too, that said, you do need to position them (ideally off screen) yourself. Overscroll will handle their movement.

```html
<!-- Any element works, really -->
<img class="easter-egg" src="./img/awesome-source.jpg" />
```

#### CSS
You'll need to position the element you want to slide in/out of the screen initially. Since `overscroll` edits the transform of your element, you should try to avoid using transforms on it too.

That said, your positioning doesn't need to be anything too complex. For example:

```css
.easter-egg {
	/* Dimensions */
	width: 300px;
	height: 500px;
	
	/* Fixed position */
	position: fixed;
	left: 50%;
	top: 0px;

	/* Centered horizontally, and hidden above screen */
	margin-left: -150px;
	margin-top: -500px;
}
```

Above, the `margin-top: -500px` hides the element above the top of the screen, since overscroll will handle showing it when the there is overscroll in that direction.

#### JS

`Overscroll.js` is fairly straight forward when it comes to kicking it off, you'll need to create a new instance of overscroll (and include the script in the page), and then bind elements to it once they have been rendered. You can do this with `document.querySelector`.

```html
<img class="easter-egg-element" src="./img/awesome-source.png" />

<script>
var overscroll = new Overscroll();
window.onload = function() {
	overscroll.bindElement(document.querySelector('.easter-egg-element'));
}
</script>
```

There are options, for when the easter egg is at the top, or bottom.

```html
<img class="easter-egg-element top" src="./img/awesome-source.png" />
<img class="easter-egg-element bottom" src="./img/awesome-source.png" />

<script>
var overscroll = new Overscroll();
window.onload = function() {
	overscroll.bindElement(document.querySelector('.easter-egg-element.top'), 'top');
	overscroll.bindElement(document.querySelector('.easter-egg-element.bottom'), 'bottom');
}
</script>
```

And finally, a delta, to show how sensitive the scroll should be, when in the overscroll area... this makes it easier for people to find, but isn't really necessary.

```html
<img class="easter-egg-element" src="./img/awesome-source.png" />

<script>
var overscroll = new Overscroll();
window.onload = function() {
	overscroll.bindElement(document.querySelector('.easter-egg-element'), 'top', 2);
}
</script>
```

#### Image/Example

Here's a couple of screenshots of `Overscroll.js` in action. You should really look at the [demo](http://tholman.com/overscroll) though, to get a full feel for the interactions, or check out the [video](http://tholman.com/overscroll/video)!

Overscroll on the bottom:
![Overscroll.js doing its thing](http://i.imgur.com/PSvRl9Z.png "Overscroll Bottom")

Overscroll on the top:
![Overscroll.js doing its thing](http://i.imgur.com/sHmWDsR.png "Overscroll Top")

###Browser support

Overscroll has been tested in the latest stable builds of Safari, Chrome... IE & Firefox don't really have the "overscroll" zones, so they won't work. Its just for fun... so not the end of the world ;)

### License

The MIT License (MIT)

Copyright (C) 2015 ~ [Tim Holman](http://tholman.com) ~ timothy.w.holman@gmail.com
