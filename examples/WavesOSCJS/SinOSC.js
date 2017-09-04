var colors = [];

var valSlider;
var valSlider2;

var stop;

var bgcol = color(20, 20, 20);

var osc;

function setup() 
{
  
  createCanvas(1500,500);
  noFill();
  addColors();
  smooth(8);
  background(20);
	//noLoop();

  valSlider = createSlider(80, 10000, 1000);
  valSlider.position(100, 20);
  valSlider2 = createSlider(0, 100, 0);
  valSlider2.position(100, 50);
  valSlider.mousePressed(sliderChanged);
  valSlider.mouseReleased(stopIt);

  valSlider2.mousePressed(sliderChanged);
  valSlider2.mouseReleased(stopIt);

  makeRibbons(1000, 0);

  valSlider.position(100, 20);
  valSlider2.position(100, 50);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(1000);
  osc.amp(0);
  osc.start();
}

function addColors() 
{
  var c;
  c = color(0, 138, 176);
  colors[0] = c;
  c = color(241,100,93);
  colors[1] = c;
  c = color(0,176,133);
  colors[2] = c;
  c = color(233,108,31);
  colors[3] = c;
  c = color(241,114,172);
  colors[4] = c;
  c = color(222,57,108);
  colors[5] = c;
  c = color(231,206,0);
  colors[6] = c;
  c = color(72,22,108);
  colors[7] = c;
  c = color(44,164,74);
  colors[8] = c;
}

function getRandomColor() 
{
  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;
}


function draw() 
{
  if (sliderChanged && !stop)
  	{
  		var val = valSlider.value();
      var val2 = valSlider2.value();

      osc.freq(val);
      osc.amp(val2/100);
  
      makeRibbons(val, val2);
	}
}

function sliderChanged(){
  stop = false;
		return true;
}

function stopIt(){
		    stop = true;
		return true;
}	




function makeRibbons(val, val2) 
{
  //for (var i=0; i < random(10)+2; i++) 
  {
  createCanvas(800,500);

  textSize(15);
  fill(255);
  text("Frequency", 500, 20);
  text("Amplitude", 500, 50);

  noFill();

  smooth(8);
  background('#202020');
    //var strokeW = random(5)+3;
    strokeWeight(2);
    stroke(255);
    
    line(40, (height/2), width, (height/2));

    strokeWeight(1);
    //line(313+40, (height/2)-125, 313+40, (height/2)+125);
    line(628+40, (height/2)-125, 628+40, (height/2)+125);
    //line(940+40, (height/2)-125, 940+40, (height/2)+125);
    
    var strokeW = 2;
    var amount = 800;
    //var frequency = random(1.0)/1500;
    var frequency = val/100;
    //var offset = random(200)+5;
    
    var offset = val2;
    
    //var col = getRandomColor();
    
    var col = color(0, 138, 176);
    
    strokeWeight(strokeW);
    stroke(col,180);
    var startY = height/2;



    beginShape();
    
    vertex(40, startY);
    
    for (var c=1; c < amount; c++) 
    {
      var sinoffset = sin((frequency/1000)*-c);
      var sinX = c*(width/amount);
      var sinY = startY + (sinoffset*offset);
      bezierVertex(sinX+40,sinY,sinX+40,sinY,sinX+40,sinY);
    }
    endShape();

    strokeWeight(2);
    stroke(255);
    line(38, (height/2)-150, 38, (height/2)+150);

    textSize(15);
    noStroke();
    fill(255);
    text("Frequency", 10, 35);
    text("Amplitude", 10, 65);
    text(val+" Hz", 270, 35);
    text(val2+ " dB", 270, 65);

    textSize(12);
    //text("0.5 Seconds", 313-40+20, (height/2)+170);
    text("1 Millisecond", 628-(40/2)+10, (height/2)+170);
    //text("1.5 Seconds", 900+20, (height/2)+170);

    text("0", 5, (height/2));
    text("100", 5, (height/2)+100);
    text("100", 5, (height/2)-100);
    text("50", 5, (height/2)+50);
    text("50", 5, (height/2)-50);

    text("Set the frequency of the Oscillator.", 400, 35);
    text("Set the volume of the Oscillator.", 400, 65);

    //text("click to play", width/2, 20);
  }
}