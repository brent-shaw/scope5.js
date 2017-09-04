var osc = [];

var colors = [];

var sliders = [];

var valSlider;
var valSlider2;

var stop;

var bgcol = color(20, 20, 20);

function setup() 
{
  createCanvas(1500,500);

  background(20);
	//noLoop();

  valSlider = createSlider(110, 1760, 1000);
  valSlider.position(100, 20);

  valSlider2 = createSlider(0, 100, 0);
  valSlider2.position(100, 50);
  valSlider.mousePressed(sliderChanged);
  valSlider.mouseReleased(stopIt);

  for (var i = 0; i < 16; i++)
  {

	//text("Harmonic" + (i+1), 10, 440+(20*i));
  	var newSlider = createSlider(0, 100, 0);
	newSlider.position(110, 440+(20*i));
	newSlider.mousePressed(sliderChanged);
	newSlider.mouseReleased(stopIt);

	sliders[i] = newSlider;
  }
  noFill();
  addColors();
  smooth(8);
  
  //valSlider2 = createSlider(0, 100, 0);
  //valSlider2.position(100, 50);
  valSlider2.mousePressed(sliderChanged);
  valSlider2.mouseReleased(stopIt);

  //valSlider2.mousePressed(sliderChanged);
  //valSlider2.mouseReleased(stopIt);

  makeRibbons(1000, 0);

  valSlider.position(100, 20);
  //valSlider2.position(100, 50);

  for (var i = 0; i < 16; i++) 
  {
  	var tmp;
  	tmp =  new p5.Oscillator();
  	tmp.setType('sine');
  	tmp.freq(110*(i+1));
  	tmp.amp(0);
  	tmp.start();

  	osc[i] = tmp;
  }
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

      //osc.freq(val);
      //osc.amp(val2/100);

        for (var i = 0; i < 16; i++) 
		 {
		  	osc[i].freq(val*(i+1));
		  	//var a = map(val2, 0, 100, 0, 10)
		  	var volume = sliders[i].value()*val2;
		  	osc[i].amp(map(volume, 0, 10000, 0, 10)/10);
		 }
  
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
  createCanvas(800,800);

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
    
    line(40, (500/2), width, (500/2));

    strokeWeight(1);
    //line(313+40, (height/2)-125, 313+40, (height/2)+125);
    line(628+40, (500/2)-125, 628+40, (500/2)+125);
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
    for (var i = 0; i < 16; i++) 
    {
    	strokeWeight(strokeW/i);
    	stroke(col,180);
	    var startY = 500/2;



	    beginShape();
	    
	    vertex(40, startY);
	    for (var c=1; c < amount; c++) 
	    {
	      var sinoffset = sin(((frequency*(i+1))/1000)*-c);
	      var sinX = c*(width/amount);
	      var sinY = startY + (sinoffset*sliders[i].value());
	      bezierVertex(sinX+40,sinY,sinX+40,sinY,sinX+40,sinY);
	    }
	    endShape();
	}
    strokeWeight(2);
    stroke(255);
    line(38, (500/2)-150, 38, (500/2)+150);

    textSize(15);
    noStroke();
    fill(255);
    text("Frequency", 10, 35);
    text("Volume", 10, 65);
    text(val+" Hz", 270, 35);
    text(val2+ " dB", 270, 65);

    textSize(12);
    //text("0.5 Seconds", 313-40+20, (height/2)+170);
    text("1 Millisecond", 628-(40/2)+10, (500/2)+170);
    //text("1.5 Seconds", 900+20, (height/2)+170);

    text("0", 5, (500/2));
    text("100", 5, (500/2)+100);
    text("100", 5, (500/2)-100);
    text("50", 5, (500/2)+50);
    text("50", 5, (500/2)-50);

    //text("Set the frequency of the Oscillator.", 400, 35);
    //text("Set the volume of the Oscillator.", 400, 65);

    for (var i = 0; i < 16; i++)
  	{
		var freq = val*(i+1);
		if (freq > 20000)
		{
			fill('#FF0000');
		}
		else
		{
			fill(255);
		}
		text("Harmonic" + (i+1), 10, 450+(20*i));
		text(freq +" Hz", 270, 450+(20*i));
	}

    //text("click to play", width/2, 20);
  }
}