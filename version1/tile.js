function tile(x,y,size) {
  this.value =0 ;
  this.colorval  ;
  // this.initflag = false;

  this.UpdateValue = function (val) {
    this.value = val;
    this.TileColors(val);
  }

  this.GetValue = function () {
    return this.value;
  }

  this.initval = function () {
    var RanVal = random(10);
    // this.initflag = true;
    if (RanVal >=9) {
      this.UpdateValue(4);
    } else {
      this.UpdateValue(2);
    }
  }

  this.doubleval = function(){
    if (!this.ValLock) {
      this.UpdateValue((this.GetValue ()*2));
    }
  }

  this.resetval = function () {
    this.UpdateValue(0);
  }

  this.TileColors = function (value){
    var val = value*166;
    var color = createVector(0,0,0);

    // if(val < 256)

    color.x = 256 - (floor(val / (2048)) % 256);
    color.y = 256 - (floor(val / (1)) % 256);
    color.z = 256 - (floor(val / (128)) % 256);

    this.colorval = color;
  }

  this.show = function () {
    var ValString = str(this.value);
    var ValStringSize = 72-9*ValString.length;
    colorMode(RGB, 255);
    strokeWeight(4);
    fill(this.colorval.x,this.colorval.y,this.colorval.z);
    rect(x,y,size,size);
    // need to be adapted to text length
    if(this.value > 0){
      // textAlign(RIGHT,BOTTOM);
      textSize(ValStringSize);
      var sWidth = textWidth(ValString);
      // need to fix color
      fill(0);
      text(str(this.value), x+((size-sWidth)/2), y+((size)-12*(size/ValStringSize)));
    }
  }
}
