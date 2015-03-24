# Dom Animator

A nifty JavaScript library, used to show small ascii animations within comments in your dom. It's a little easter egg for anyone inspecting your code. Nothing more, nothing less.

### Instructions

`dom-animator.js` is a stand alone library (no jQuery, or the likes) so usage is pretty straight forward. You won't need any CSS, or HTML... just JavaScript. (since the animations live in comment nodes, in the dom, only)

#### JS

`DomAnimator.js` can be simple, or complex, depending on what you're trying to achieve with your animation. You'll need to create a new instance of domanimator (having already included the script in the page). Here is the most simple example, a winking face.

```js
<script>
	var domAnimator = new DomAnimator();
	domAnimator.addFrame('o_o');
	domAnimator.addFrame('-_o');
	domAnimator.animate();
</script>
```

The above animation, exists on a single line. If you want multiple levels, you can pass in a list of strings to the frame. Or include your own carriage returns (`\n`'s)

```js
<script>
	var domAnimator = new DomAnimator();
	domAnimator.addFrame(['0_0', ' | ', ' | ']);
	domAnimator.addFrame(['0_-', ' | ', ' | ']);
	domAnimator.animate();
</script>
```

If you like, you can set the one speed, for all of the frames. Otherwise they will default to 500ms intervals. (these are ascii animations, no need for 60fps)

```js
<script>
	var domAnimator = new DomAnimator();
	domAnimator.addFrame('o_o');
	domAnimator.addFrame('-_o');
	domAnimator.animate(1000); //ms
</script>
```

If you want to stop the animation, for any given reason, just call `stop`

```js
<script>
	// Setup
	var domAnimator = new DomAnimator();
	domAnimator.addFrame('o_o');
	domAnimator.addFrame('-_o');
	domAnimator.animate();

	// After 10 seconds.
	setTimeout(function() {
		domAnimator.stop(); // Stop the animation
	}, 10000);
</script>
```

#### Examples / In the wild!

You can see the animation in the console on the [demo page](http://tholman.com/dom-animator). There's also a [video](http://tholman.com/dom-animator/video), if you're really confused.


###Browser support

Dom Animator has been tested in the latest stable builds of Safari, Chrome & Firefox... Chrome displays the a little cleaner, since it supports newlines in the console. But all the browsers work.

### License

The MIT License (MIT)

Copyright (C) 2015 ~ [Tim Holman](http://tholman.com) ~ timothy.w.holman@gmail.com
