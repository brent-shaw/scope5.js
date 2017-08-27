//Signal library
//Create signals

//Choose from Sine, Square, Sawtooth, Triangle

//Push and commit new file
function Signal(p1, p2, p3)
{
  if(typeof p2 !== "undefined") //new signal
  {
    //Wave attributes
    this.freq = p1;
    this.amp = p2;

    this.colour = frequencyColour(this.freq);

    this.samples = [];

    var amount = 5000;
    var frequency = this.freq/510000;

    for (var c=1; c < amount; c++)
    {
      switch(p3)
      {
        case 'triangle':
          //temp
          break;
        case 'sawtooth':
          //temp
          break;
        case 'square':
          //temp
          break;
        case 'sine':
        default:
          var sinoffset = sin(frequency*-c);
          this.samples[c] = sinoffset*this.amp;
      }
    }
  }
  else //summed signal
  {
    // not yet
    // take in list of other signals
    //iterate through and sum
  }
}
