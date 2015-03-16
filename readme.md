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

The above animation, exists on a single line. If you want multiple levels, you can pass in a list of strings to the frame. Or include your own carriage returns `/n`'s

```js
<script>
	var domAnimatior = new DomAnimator();
	domAnimator.addFrame([[], [], []]);
	domAnimator.addFrame([[], [], []]);
	domAnimator.addFrame([[], [], []]);
	domAnimator.animate();
</script>

```
You can also pass through timing functions, if you want to have frames animate quicker or slower. All timeframes are in milliseconds. If timeframes aren't passed in, the animation will default to 500ms intervals

```js
<script>
	var domAnimatior = new DomAnimator();
	domAnimator.addFrame([[], [], []], 1000);
	domAnimator.addFrame([[], [], []], 500);
	domAnimator.addFrame([[], [], []], 1000);
	domAnimator.animate();
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
