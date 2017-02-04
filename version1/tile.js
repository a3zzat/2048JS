function tile(x,y,size,color) {
  this.value =0 ;
  this.colorval = 0;
  this.initflag = false;

  this.UpdateValue = function (val) {
    this.value = val;
    this.TileColors(val);
  }

  this.GetValue = function () {
    return this.value;
  }

  this.initval = function () {
    var init_val = random(7);
    this.initflag = true;
    if (init_val >=6) {
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
    var val;
    if (this.initflag == true) {
      val  = 96;
      this.initflag = false;
    } else {
      if (value > 0) {
        if (value > 255) {
          val = value % 255;
        } else {
          val = floor(255 /value);
        }
      }else {
        val  = 255;
      }
    }
    this.colorval = val;
  }

  this.show = function () {
    colorMode(HSB, 255);
    fill(this.colorval,this.colorval,this.colorval);
    rect(x,y,size,size);
    // need to be adapted to text length
    if(this.value > 0){
      textSize(64);
      // need to fix color
      fill(floor(256/(color+1)));
      text(str(this.value), x+(size/2)-(size/6), y+(size/2)+(size/6));
    }
  }
}
