var freqSlider;
var ampSlider;

var stop;

function setup()
{
  createCanvas(1600,900);
  noFill();
  smooth(8);
  background('#202020')

  addControls();
}


function draw()
{
  if (sliderChanged && !stop)
  	{
  		var freq = freqSlider.value();
      var amp = ampSlider.value();

      drawWave(freq, amp);
      drawControls(freq, amp);
	}
}

function sliderChanged()
{
  stop = false;
  return true;
}

function stopIt(){
  stop = true;
  return true;
}

function addControls()
{
  freqSlider = createSlider(1, 20000, 10);
  freqSlider.position(100, 20);

  ampSlider = createSlider(0, 100, 50);
  ampSlider.position(100, 50);

  freqSlider.mousePressed(sliderChanged);
  freqSlider.mouseReleased(stopIt);

  ampSlider.mousePressed(sliderChanged);
  ampSlider.mouseReleased(stopIt);

  freqSlider.position(100, 20);
  ampSlider.position(100, 50);

  noStroke();

  drawWave(10, 50);
  drawControls(10, 50);
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

  new Wave(new Signal(freq, amp), myPlane, 3).draw();
}
