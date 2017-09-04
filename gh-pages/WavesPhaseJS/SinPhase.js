var colors = [];

var valSlider;
var valSlider2;

var stop;

var bgcol = color(20, 20, 20);

var harmonics = 0;

function setup() 
{
  
  createCanvas(800,1000);
  noFill();
  addColors();
  smooth(8);
  background(20);
  //noLoop();

  valSlider = createSlider(0, 125, 0);
  valSlider.position(100, 20);
  //valSlider2 = createSlider(1, 5, 1);
  //valSlider2.position(100, 50);
  valSlider.mousePressed(sliderChanged);
  valSlider.mouseReleased(stopIt);

  //valSlider2.mousePressed(sliderChanged);
  //valSlider2.mouseReleased(stopIt);

  makeRibbons(5, 100, 0);

  valSlider.position(100, 20);
  //valSlider2.position(100, 50);
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
      //var val2 = valSlider2.value();

      makeRibbons(5, 100, val);
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




function makeRibbons(val, val2, h) 
{
  //for (var i=0; i < random(10)+2; i++) 
  {
  createCanvas(800,1000);

  var sumWave = [];

  for (var a=1; a < 1000; a++)
  { 
    sumWave[a] = 0;//height/2;
  }

  textSize(15);
  fill(255);
  text("Frequency", 500, 20);
  text("Amplitude", 500, 50);

  noFill();

  smooth(8);
  background('#202020');
    //var strokeW = random(5)+3;
    strokeWeight(5);
    stroke(255);
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
    
    var startY = 250;//height/2;

    line(40, startY, width, startY);
    line(40, startY-125, 40, startY+125);
        strokeWeight(1);
    //line(313+40, (height/2)-125, 313+40, (height/2)+125);
    line(628+40, startY-125, 628+40, startY+125);
    strokeWeight(strokeW);

    stroke(colors[1],180);  
    beginShape();
    
    vertex(40, startY);
    
    for (var c=1; c < amount; c++) 
    {
      var sinoffset = sin((frequency)*-c);
      var sinX = c*(width/amount);
      var sinY = startY + (sinoffset*offset);
      sumWave[c] = (sumWave[c] + (sinY));
      bezierVertex(sinX+40,sinY,sinX+40,sinY,sinX+40,sinY);
    }
    endShape();

    stroke(colors[2],180);  
    beginShape();
    
    vertex(40+h, startY);
    
    for (var c=1; c < amount; c++) 
    {
      var sinoffset = sin((frequency)*-c);
      var sinX = (c+h)*(width/amount);
      var sinY = startY + (sinoffset*offset);
      //sumWave[c] = (sumWave[c] + (sinY));
      bezierVertex(sinX+40,sinY,sinX+40,sinY,sinX+40,sinY);
    }
    endShape();

    stroke(255);
    strokeWeight(2);
    //line(313+40, (h
    line(40, startY+250+50, width, startY+250+50);
    line(40, startY+50+250-125, 40, startY+50+250+125);
    strokeWeight(1);
    //line(313+40, (height/2)-125, 313+40, (height/2)+125);
    line(628+40, startY+50+250-125, 628+40, startY+50+250+125);

    // strokeWeight(5);
    // stroke(255);
    // line(38, (height/2)-150, 38, (height/2)+150);
    strokeWeight(strokeW);
    stroke(colors[6],180); 
    beginShape();

    vertex(40, startY+50+250);
    for (var d=1; d < amount; d++) 
    {
      var sinoffset2 = sin((frequency)*-d);
      var sinX2 = d*(width/amount);
      //var sinY = startY+ 500 + (sinoffset*offset);
      //sumWave[c] += sinY;
      bezierVertex(sinX2+40,startY+50+(sumWave[d]),sinX2+40,startY+50+(sumWave[d]),sinX2+40,startY+50+(sumWave[d]));
    }
    endShape();

    textSize(15);
    noStroke();
    fill(255);
    text("Phase offset", 10, 35);
    //text("Harmonics", 10, 65);
    text(round((h/125)*180)+" degrees", 270, 35);
    //text(h-1, 270, 65);

    // textSize(12);
    // text("0.5 Seconds", 313-40+20, (height/2)+170);
    text("1 Second", 628-(40/2)+20, startY+160);
    // text("1.5 Seconds", 900+20, (height/2)+170);

    text("0", 5, startY);
    text("100", 5, startY+100);
    text("100", 5, startY-100);
    text("50", 5, startY+50);
    text("50", 5, startY-50);

    text("0", 5, startY+50+250);
    text("100", 5, startY+50+250+100);
    text("100", 5, startY+50+250-100);
    text("50", 5, startY+50+250+50);
    text("50", 5, startY+50+250-50);

      text("Waves out of phase", 290, 100);

    text("Resulting wave from interaction", 250, startY+160);
    //text("click to play", width/2, 20);
  }
}