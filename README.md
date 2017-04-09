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


plane.scope5.js
---------------


wave.scope5.js
--------------


