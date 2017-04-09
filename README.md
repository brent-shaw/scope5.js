[p5js]: https://p5js.org/

scope5.js
=========

Scope5 is plotting library for p5.js. Plots sine waves onto plane to give similar look and feel to oscilloscope.

Features
--------

The scope5.js library can be used to produce graphs that represent various waveforms.

Usage
-----

```js
var myPlane;
myPlane = new Plane(0, 0, 1280, 600);
myPlane.draw();
```

```js
var myWave;
myWave = new Wave(3300, 100, myPlane, 4);
myWave.draw();
```


Based on p5.js
----------
The [p5.js Javascript library][p5js]  brings the Processing's features to the web.

plane.scope5.js
---------------
```js
function Plane(_x, _y, _width, _height)
```

wave.scope5.js
--------------
```js
function Wave(_freq, _amp, _plane, _stroke)
```


