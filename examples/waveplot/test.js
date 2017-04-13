var waves = [];

function setup() 
{
  
  createCanvas(1600,900);
  noFill();
  smooth(8);
  background('#202020');

  fill(255);
  stroke(255);

  var myPlane;
  myPlane = new Plane(0, 0, 1280, 600);
  myPlane.draw();

  waves.push(new Wave(400, 100, myPlane, 4));
  waves.push(new Wave(800, 100, myPlane, 4));
  waves.push(new Wave(1200, 100, myPlane, 4));


  for (x in waves) 
  {
    waves[x].draw();
  }
}

function draw()
{

}
