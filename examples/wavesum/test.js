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

  new Wave(new Signal(100, 100), myPlane, 1).draw();
  new Wave(new Signal(200, 100), myPlane, 1).draw();
}

function draw()
{

}
