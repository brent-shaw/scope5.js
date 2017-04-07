function Plane(_x, _y, _width, _height)
{
  //Starting position for plane on canvas
  this.position_x = _x;
  this.position_y = _y;

  //Size of plane
  this.width = _width;
  this.height = _height;

  //Axis units
  this.x_axis_unit = "";
  this.y_axis_unit = "";

  //Axis labels
  this.x_axis_name = "";
  this.y_axis_name = "";

  //X Axis limits
  this.x_axis_max = this.position_x+this.width;
  this.x_axis_min = this.position_x;


  //Y Axis limits
  this.y_axis_max = this.position_y+this.height;
  this.y_axis_min = this.position_y;

  //Positions
  this.center_width = this.x_axis_min+(this.width/2);
  this.center_height = this.y_axis_min+(this.height/2);

  //Margins
  this.x_line_buffer = (this.width*0.1);
  this.x_numbering_buffer = (this.width*0.08);
  this.x_label_buffer = (this.width*0.05);

  this.y_line_buffer = (this.height*0.1);;
  this.y_numbering_buffer = (this.height*0.08);;
  this.y_label_buffer = (this.height*0.05);;

  this.y_overhang = (this.width*0.1);;

  this.def_X = function(l, u)
  {
    this.x_axis_name = l;
    this.x_axis_unit = u;
  }

  this.def_Y = function(l, u)
  {
    this.y_axis_name = l;
    this.y_axis_unit = u;
  }

  this.draw = function()
  {
    strokeWeight(2);
    //line(startX, startY, endX, endY);
    line(this.x_axis_min+this.x_line_buffer, this.center_height, this.x_axis_max, this.center_height);  //x axis
    line(this.x_axis_min+this.x_line_buffer, this.y_axis_min+this.y_line_buffer, this.x_axis_min+this.x_line_buffer, this.y_axis_max-this.y_line_buffer); //y axis (this.x_axis_min)

    strokeWeight(1);
    line(this.x_axis_max-this.y_overhang, this.y_axis_min+(2*this.y_line_buffer), this.x_axis_max-this.y_overhang, this.y_axis_max-(2*this.y_line_buffer)); //y axis (this.x_axis_max)
  }
}