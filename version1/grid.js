function grid(tilesnum,size,ActionsEnum){

  this.mytiles;

  this.init_grid = function () {
    this.mytiles = new Array(tilesnum);
    for (var i = 0; i < tilesnum; i++) {
      this.mytiles[i] = new Array(tilesnum);
      for (var j = 0; j < tilesnum; j++) {
        var mytile = new tile(i*size,j*size,size,255/(i+j+1));
        mytile.resetval();
        this.mytiles[i][j]= mytile;
      }
    }
    for (var l = 0; l < 2; l++) {
      this.init_tile();
    }
  }

  this.show =function () {
    for (var i = 0; i < tilesnum; i++) {
      for (var j = 0; j < tilesnum; j++) {
        this.mytiles[i][j].show();
      }
    }
  }

  this.getempty=  function () {
    var empty =[];
    for (var i = 0; i < tilesnum; i++) {
      for (var j = 0; j < tilesnum; j++) {
        if (this.mytiles[i][j].GetValue() === 0) {
          var cord = createVector(i,j);
          empty.push(cord);
        }
      }
    }
    return empty;
  }

  this.init_tile =  function () {
    var emptytiles = this.getempty();
    var rand = floor(random(emptytiles.length));
    this.mytiles[emptytiles[rand].x][emptytiles[rand].y].initval();
  }

  this.DoAction = function(action) {
    var flag = false;
    switch (action) {
      case ActionsEnum.up:
      flag = this.MoveUp();
      break;

      case ActionsEnum.down:
      flag = this.MoveDown();
      break;

      case ActionsEnum.left:
      flag = this.MoveLeft();
      break;

      case ActionsEnum.right:
      flag = this.MoveRight();
      break;

      default:
    }
    if (flag == true) {
      this.init_tile();
    }
  }

  this.MoveDown = function (){
    var flag = false;
    for (var cols = 0; cols <tilesnum; cols++){
      var DoubleLimit = tilesnum - 1 ;
      for (var rows = tilesnum-2; rows >=0; rows--){
        if (this.mytiles[cols][rows].GetValue() > 0){
          for (var rows2 = rows+1; rows2 < tilesnum; rows2++) {
            if (this.mytiles[cols][rows2].GetValue() == 0 ){
              this.mytiles[cols][rows2].UpdateValue(this.mytiles[cols][rows2-1].GetValue());
              this.mytiles[cols][rows2-1].resetval();
              flag = true;
            }else if (this.mytiles[cols][rows2].GetValue() ==  this.mytiles[cols][rows2-1].GetValue()) {
              if (rows2 <= DoubleLimit) {
                DoubleLimit = rows2 ;
                this.mytiles[cols][rows2].doubleval();
                this.mytiles[cols][rows2-1].resetval();
                flag = true;
              }
            }
          }
        }
      }
    }
    return flag;
  }

  this.MoveUp = function (){
    var flag = false;
    for (var cols = 0; cols <tilesnum; cols++){
      var DoubleLimit = 0 ;
      for (var rows = 1; rows <tilesnum; rows++){
        if (this.mytiles[cols][rows].GetValue() > 0){
          for (var rows2 = rows-1; rows2 >=0; rows2--) {
            if (this.mytiles[cols][rows2].GetValue() == 0 ){
              this.mytiles[cols][rows2].UpdateValue(this.mytiles[cols][rows2+1].GetValue());
              this.mytiles[cols][rows2+1].resetval();
              flag = true;
            }else if (this.mytiles[cols][rows2].GetValue() ==  this.mytiles[cols][rows2+1].GetValue()) {
              if (rows2 >= DoubleLimit) {
                DoubleLimit = rows2 ;
                this.mytiles[cols][rows2].doubleval();
                this.mytiles[cols][rows2+1].resetval();
                flag = true;
              }
            }
          }
        }
      }
    }
    return flag;
  }

  this.MoveRight = function (){
    var flag = false;
    for (var rows = 0; rows <tilesnum; rows++){
      var DoubleLimit = tilesnum - 1 ;
      for (var cols = tilesnum-2; cols >=0; cols--){
        if (this.mytiles[cols][rows].GetValue() > 0){
          for (var cols2 = cols+1; cols2 < tilesnum; cols2++) {
            if (this.mytiles[cols2][rows].GetValue() == 0 ){
              this.mytiles[cols2][rows].UpdateValue(this.mytiles[cols2-1][rows].GetValue());
              this.mytiles[cols2-1][rows].resetval();
              flag = true;
            }else if (this.mytiles[cols2][rows].GetValue() ==  this.mytiles[cols2-1][rows].GetValue()) {
              if (cols2 <= DoubleLimit) {
                DoubleLimit = cols2 ;
                this.mytiles[cols2][rows].doubleval();
                this.mytiles[cols2-1][rows].resetval();
                flag = true;
              }
            }
          }
        }
      }
    }
    return flag;
  }

  this.MoveLeft = function (){
    var flag = false;
    for (var rows = 0; rows <tilesnum; rows++){
      var DoubleLimit = 0 ;
      for (var cols = 1; cols <tilesnum; cols++){
        if (this.mytiles[cols][rows].GetValue() > 0){
          for (var cols2 = cols-1; cols2 >=0; cols2--) {
            if (this.mytiles[cols2][rows].GetValue() == 0 ){
              this.mytiles[cols2][rows].UpdateValue(this.mytiles[cols2+1][rows].GetValue());
              this.mytiles[cols2+1][rows].resetval();
              flag = true;
            }else if (this.mytiles[cols2][rows].GetValue() ==  this.mytiles[cols2+1][rows].GetValue()) {
              if (cols2 >= DoubleLimit) {
                DoubleLimit = cols2 ;
                this.mytiles[cols2][rows].doubleval();
                this.mytiles[cols2+1][rows].resetval();
                flag = true;
              }
            }
          }
        }
      }
    }
    return flag;
  }

  // end of file
}
