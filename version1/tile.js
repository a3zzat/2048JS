function tile(x,y,size,color) {
  this.value =0 ;
  this.initval = function () {
    var init_val = random(5);

    if (init_val >=4) {
      this.value = 4;
    } else {
      this.value = 2;
    }
  }
  this.doubleval = function(){
    this.value *=2;
  }

  this.resetval = function () {
    this.value = 0;
  }

  this.show = function () {
    fill(color);
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
