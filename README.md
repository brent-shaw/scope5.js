[p5js]: https://p5js.org/

scope5.js
=========

Scope5 is plotting library for p5.js. Plots sine waves onto plane to give similar look and feel to oscilloscope.

![Sine Wave Render](/images/sine.png)

Features
--------

The scope5.js library can be used to produce graphs that represent various waveforms.

![Additive Synth](/images/synth.png)

When combined with the p5 Sounds library, scope5.js can be use to show the interations within additive synthesisers and how visualise how various waveforms are created.

Usage
-----

```js
var myPlane;
myPlane = new Plane(0, 0, 1280, 600);
myPlane.draw();
```

```js
var mySignal;
mySignal = new Signal(100, 100, 'sine');
```

```js
var myWave;
myWave = new Wave(mySignal, myPlane, 4);
myWave.draw();
```

Based on p5.js
----------
The [p5.js Javascript library][p5js]  brings the Processing's features to the web.

plane.scope5.js
---------------
Used to create a plane on which graphs can be plotted. The planes can be sized and possitioned as an atomic unit.
```js
function Plane(_x, _y, _width, _height)
```
Once sized and placed, the plane can be named. Axes can be named and scaled so that wave proporties can be placed in perspective.

wave.scope5.js
--------------
The wave library is used for plotting signals on a plane. The signal does not require a size or placement. Instead the signal is simply placed on a plane.
```js
function Wave(_signal, _plane, _stroke)
```

signal.scope5.js
----------------
Signals can be generated by specifing the shape and frequency. Multiple signals can be summed together to create a new signal.
```js
function Signal(_freq, _amp, _shape)
```

Examples
--------

### WavesJS

Simple example using scope5.js to plot a sine wave.

### WaveOSCJS

Simple example using scope5.js and p5.js. Extends the WavesJS example by adding an oscillator.

### WaveSumJS

### WavePhaseJS

### WavesHarmonicOSCJS
