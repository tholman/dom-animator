# Dom Animator

A nifty javascript library, 

### Instructions

`dom-animator.js` is a stand alone library (no jquery, or the likes) so usage is pretty straight forward. You won't need any CSS, or HTML... just javascript. (since the animations live in comment nodes, in the dom, only)

#### JS

`DomAnimator.js` can be simple, or complex, depending on what you're trying to achieve with your animation. You'll need to create a new instance of domanimator (having already included the script in the page). Here is the most simple example, a winking face.

```js
<script>
	var domAnimatior = new DomAnimator();
	domAnimator.addFrame('o_o');
	domAnimator.addFrame('-_o');
	domAnimator.animate();
</script>
```

The above animation, exists on a single line. If you want multiple levels, you can pass in a list of strings to the frame. Or include your own carriage returns (`\n`'s)

```js
<script>
	var domAnimatior = new DomAnimator();
	domAnimator.addFrame([['0_0'], [' | '], [' | ']]);
	domAnimator.addFrame([['0_-'], [' | '], [' | ']]);
	domAnimator.animate();
</script>
```

If you like, you can set the one speed, for all of the frames. Otherwise they will default to 500ms intervals. (these are ascii animations, no need for 60fps)

```js
<script>
	var domAnimatior = new DomAnimator();
	domAnimator.addFrame('o_o');
	domAnimator.addFrame('-_o');
	domAnimator.animate(1000); //ms
</script>
```

If you want to stop the animation, for any given reason, just call `stop`

```js
<script>
	// Setup
	var domAnimatior = new DomAnimator();
	domAnimator.addFrame('o_o');
	domAnimator.addFrame('-_o');
	domAnimator.animate();

	// After 10 seconds.
	setTimeout(function() {
		domAnimator.stop(); // Stop the animation
	}, 10000);
</script>
```

#### Examples/ In the wild!

Here's a small gif of `dom-animator.js` in action (below)... You should really look at the [demo](http://tholman.com/dom-animator) though... there's also a [video](http://tholman.com/dom-animator/video)!, if you're really confused.

![Overscroll.js doing its thing](http://i.imgur.com/PSvRl9Z.png "Overscroll Bottom")

###Browser support

Overscroll has been tested in the latest stable builds of Safari, Chrome... IE & Firefox don't really have the "overscroll" zones, so they won't work. Its just for fun... so not the end of the world ;)

### License

The MIT License (MIT)

Copyright (C) 2015 ~ [Tim Holman](http://tholman.com) ~ timothy.w.holman@gmail.com
