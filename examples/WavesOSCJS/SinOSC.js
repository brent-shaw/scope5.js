var valSlider;
var valSlider2;

var stop;

var osc;

function setup()
{

  createCanvas(1600,900);
  noFill();
  smooth(8);
  background('#202020')

  addControls();
  addOsc();
}

function addOsc()
{
  osc = new p5.Oscillator();

  osc.setType('sine');
  osc.freq(1000);
  osc.amp(0);

  osc.start();
}

function setOsc(freq, amp)
{
  osc.freq(freq);
  osc.amp(amp/1000);
}


function draw()
{
  if (sliderChanged && !stop)
  {
    var freq = freqSlider.value();
    var amp = ampSlider.value();

    setOsc(freq, amp);

    drawWave(freq, amp);
    drawControls(freq, amp);
	}
}

function sliderChanged()
{
  stop = false;
  return true;
}

function stopIt()
{
	stop = true;
	return true;
}

function addControls()
{
  freqSlider = createSlider(1, 20000, 1000);
  freqSlider.position(100, 20);

  ampSlider = createSlider(0, 100, 0);
  ampSlider.position(100, 50);

  freqSlider.mousePressed(sliderChanged);
  freqSlider.mouseReleased(stopIt);

  ampSlider.mousePressed(sliderChanged);
  ampSlider.mouseReleased(stopIt);

  freqSlider.position(100, 20);
  ampSlider.position(100, 50);

  noStroke();

  drawWave(1000, 0);
  drawControls(1000, 0);
}

function drawControls(freq, amp)
{
  textSize(15);
  noStroke();
  fill(255);
  text("Frequency", 10, 35);
  text("Amplitude", 10, 65);
  text(freq + " Hz", 270, 35);
  text(amp + " dB", 270, 65);

  var speed = 343;
  var wavelength = speed/freq;

  textSize(12);
  text("Speed of sound:", 400, 35);
  text("Wavelength:", 400, 65);
  text(speed+"m/s", 510, 35);
  text(round(wavelength*100)/100+ "m", 510, 65);
}

function drawWave(freq, amp)
{
  createCanvas(1280,600);

  strokeWeight(2);
  stroke(255);

  var myPlane;
  myPlane = new Plane(0, 50, 960, 480);
  myPlane.draw();

  new Wave(new Signal(freq, amp), myPlane, 1).draw();
}
