function Wave(_signal, _plane, _stroke)
{
	//Wave attributes
	this.signal = _signal;

	//Draw attributes
	this.stroke = _stroke;

	//Plane attributes
	this.plane = _plane;
	this.startX = this.plane.x_axis_min+this.plane.x_line_buffer;
	this.startY = this.plane.center_height;

	this.draw = function()
	{
		noFill();
		smooth(8);

		stroke(this.signal.colour, 180);

		strokeWeight(this.stroke);

		beginShape();

	    vertex(this.startX, this.startY);

	    var amount = 5000;

	    for (var c=1; c < amount; c++)
	    {
	    	var sinX = c*(width/amount)+this.startX;
	    	var sinY = this.startY + this.signal.samples[c];
	    	bezierVertex(sinX,sinY,sinX,sinY,sinX,sinY);
	    	if (sinX >= this.plane.x_axis_max)
	    	{
	    		break;
	    	}
	    }

	    endShape();
	}
}
