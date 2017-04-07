function Wave(_freq, _amp, _plane, _stroke)
{
	//Wave attributes
	this.freq = _freq;
	this.amp = _amp;

	//Draw attributes
	this.stroke = _stroke;

	//Plane attributes
	this.plane = _plane;
	this.startX = this.plane.x_axis_min+this.plane.x_line_buffer;
	this.startY = this.plane.center_height;
	//this.startX = 64*2;
	//this.startY = (600/2);

	//this.limitX = 1280-(1280*0.1);

	this.draw = function()
	{
		noFill();
		smooth(8);

		var lf = round(log(this.freq)*log(this.freq));
		var h = round(map(lf, 0, 100, 0, 255));
		
		stroke(color('hsl('+h+',100%, 50%)'),180);

		strokeWeight(this.stroke);

    	//stroke(255);

    	//stroke(this.colour,180);
    	
		beginShape();
    
	    vertex(this.startX, this.startY);

	    var amount = 5000;

	    var frequency = this.freq/510000;
	    
	    for (var c=1; c < amount; c++) 
	    {
	    	var sinoffset = sin(frequency*-c);
	    	var sinX = c*(width/amount)+this.startX;
	    	var sinY = this.startY + (sinoffset*this.amp);
	    	bezierVertex(sinX,sinY,sinX,sinY,sinX,sinY);
	    	if (sinX >= this.plane.x_axis_max)
	    	{
	    		break;
	    	}
	    
	    }

	    endShape();
	}
}