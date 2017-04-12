//Functions for displaying signals

function frequencyColour(f) 
{
  var lf = round(log(f)*log(f));
  var h = round(map(lf, 0, 100, 0, 255));
  return color('hsl('+h+',100%, 50%)';
}
