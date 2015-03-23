/*!
 * DomAnimator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

/*********************************************
 * DomAnimator
 *********************************************/

var DomAnimator = (function() {

    'use strict';

    var currentFrame = 0;
    var frames = [];
    var nodes = [];

    // Chrome console shows new lines, others don't...
    // so multiple comments are used on others, to look good.
    var multiNode = !!!window.chrome;

    var interval = null;
    var defaultTime = 500; // ms
    var attached = false;
    var whiteSpaceString = '\u00A0';

    // Soft object augmentation
    function extend( target, source ) {
        for ( var key in source ) {
            if ( !( key in target ) ) {
                target[ key ] = source[ key ];
            }
        }
        return target;
    }

    // Frame passed through as a list []
    function parseMultilineFrame( frame ) {
        if(multiNode) {
            return swapWhitespace(frame);
        } else {
            return padString(frame.join('\n'));
        }
    }

    // Frame passed through as a string.
    function parseSingleLineFrame( frame ) {
        if (multiNode) {
            return swapWhitespace(frame.split('\n'));
        } else {
            return padString(frame);
        }
    }

    function swapWhitespace( array ) {
        var i = 0;

        for( i; i < array.length; i++ ) {
            array[i] = array[i].replace(/ /g, whiteSpaceString);
        }
        return array;
    }

    function animate( time ) {

        // No time set, just use default!
        if( !time ) {
            time = defaultTime;
        }

        // No frames
        if( frames.length === 0) {
            console.log( "I need frames to animate. You can add them with .addFrame( string )" );
            return;
        }

        if( attached === false ) {
            attachToDocument();
        }

        interval = setInterval( function() {
            renderFrame();
        }, time);
    }

    function renderFrame() {
        
        var frameData = frames[currentFrame];

        if( multiNode ) {

            var i = 0;
            for( i; i < nodes.length; i++ ) {
                nodes[i].nodeValue = frameData[i];
            }

        } else {
            nodes[0].nodeValue = frameData;
        }     

        currentFrame = currentFrame + 1;
        if ( currentFrame === frames.length ) {
            currentFrame = 0;
        }
    }

    function attachToDocument() {

        var head = document.head;
        var parent = head.parentNode;

        // This assumes you have the same amount of frames in each section.
        if ( multiNode ) {

            var i = 0;
            var totalNodes = frames[0].length;
            for( i; i < totalNodes; i++ ) {
                var node = document.createComment('');
                nodes.push(node);
                parent.insertBefore( node, head);
            }

        } else {
            var node = document.createComment('');
            nodes.push(node);
            parent.insertBefore(node, head);
        }
    }

    function stop() {
        clearInterval(interval);
    }

    function addFrame( frameData ) {

        if( !frameData ) {
            frameData = 'no frame data';
        }

        var frameType = typeof(frameData);

        // Multi line data.
        if( frameType === 'object' ) {

            frames.push( parseMultilineFrame(frameData) );

        // String data
        } else if ( frameType === 'string' ) {

            frames.push( parseSingleLineFrame(frameData) );
        }
    }

    function padString(string) {
        return "\n" + string + '\n';
    }

    function main() {
    }

    return extend( main, {
        addFrame: addFrame,
        animate: animate,
        stop: stop
    });

});