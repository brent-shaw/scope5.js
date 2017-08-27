//Functions for displaying signals

//Function returns a colurs based on the frequency provided
//Frequencies are distributed logarithmically over colour space
//
function frequencyColour(f)
{
  var lf = round(log(f)*log(f));
  var h = round(map(lf, 0, 100, 0, 255));
	var c = color('hsl('+h+',100%, 50%)');
  return c;
}
