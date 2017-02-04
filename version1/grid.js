function grid(tilesnum,size,ActionsEnum){

  var mytiles = new Array(tilesnum);

  this.init_grid = function () {
    for (var i = 0; i < tilesnum; i++) {
      mytiles[i] = new Array(tilesnum);
      for (var j = 0; j < tilesnum; j++) {
        var mytile = new tile(i*size,j*size,size,255/(i+j+1));
        mytile.resetval();
        mytiles[i][j]= mytile;
      }
    }
    for (var l = 0; l < 2; l++) {
      init_tile();
    }
  }

  this.show =function () {
    for (var i = 0; i < tilesnum; i++) {
      for (var j = 0; j < tilesnum; j++) {
        mytiles[i][j].show();
      }
    }
  }

  function getempty() {
    var empty =[];
    for (var i = 0; i < tilesnum; i++) {
      for (var j = 0; j < tilesnum; j++) {
        if (mytiles[i][j].GetValue() === 0) {
          var cord = createVector(i,j);
          empty.push(cord);
        }
      }
    }
    return empty;
  }

  function init_tile() {
    var emptytiles = getempty();
    var rand = floor(random(emptytiles.length));
    mytiles[emptytiles[rand].x][emptytiles[rand].y].initval();
  }

  this.DoAction = function(action) {
    var flag = false;
    switch (action) {
      case ActionsEnum.up:
      flag = MoveUp();
      break;

      case ActionsEnum.down:
      flag = MoveDown();
      break;

      case ActionsEnum.left:
      flag = MoveLeft();
      break;

      case ActionsEnum.right:
      flag = MoveRight();
      break;

      default:
    }
    if (flag == true) {
      init_tile();
      UnLockGrid();
    }
  }

  function UnLockGrid(){
    for (var i = 0; i < tilesnum; i++) {
      for (var j = 0; j < tilesnum; j++) {
        mytiles[i][j].UnLockVal();
      }
    }
  }

  function MoveDown(){
    var flag = false;
    for (var cols = 0; cols <tilesnum; cols++){
      for (var rows = tilesnum-2; rows >=0; rows--){
        if (mytiles[cols][rows].GetValue() > 0){
          for (var rows2 = rows+1; rows2 < tilesnum; rows2++) {
            if (mytiles[cols][rows2].GetValue() == 0 ){
              mytiles[cols][rows2].UpdateValue(mytiles[cols][rows2-1].GetValue());
              mytiles[cols][rows2-1].resetval();
              flag = true;
            }else if (mytiles[cols][rows2].GetValue() ==  mytiles[cols][rows2-1].GetValue()) {
              mytiles[cols][rows2].doubleval();
              mytiles[cols][rows2].LockVal();
              mytiles[cols][rows2-1].resetval();
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  }

  function MoveUp(){
    var flag = false;
    for (var cols = 0; cols <tilesnum; cols++){
      for (var rows = 1; rows <tilesnum; rows++){
        if (mytiles[cols][rows].GetValue() > 0){
          for (var rows2 = rows-1; rows2 >=0; rows2--) {
            if (mytiles[cols][rows2].GetValue() == 0 ){
              mytiles[cols][rows2].UpdateValue(mytiles[cols][rows2+1].GetValue());
              mytiles[cols][rows2+1].resetval();
              flag = true;
            }else if (mytiles[cols][rows2].GetValue() ==  mytiles[cols][rows2+1].GetValue()) {
              mytiles[cols][rows2].doubleval();
              mytiles[cols][rows2].LockVal();
              mytiles[cols][rows2+1].resetval();
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  }

  function MoveRight(){
    var flag = false;
    for (var rows = 0; rows <tilesnum; rows++){
      for (var cols = tilesnum-2; cols >=0; cols--){
        if (mytiles[cols][rows].GetValue() > 0){
          for (var cols2 = cols+1; cols2 < tilesnum; cols2++) {
            if (mytiles[cols2][rows].GetValue() == 0 ){
              mytiles[cols2][rows].UpdateValue(mytiles[cols2-1][rows].GetValue());
              mytiles[cols2-1][rows].resetval();
              flag = true;
            }else if (mytiles[cols2][rows].GetValue() ==  mytiles[cols2-1][rows].GetValue()) {
              mytiles[cols2][rows].doubleval();
              mytiles[cols2][rows].LockVal();
              mytiles[cols2-1][rows].resetval();
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  }

  function MoveLeft(){
    var flag = false;
    for (var rows = 0; rows <tilesnum; rows++){
      for (var cols = 1; cols <tilesnum; cols++){
        if (mytiles[cols][rows].GetValue() > 0){
          for (var cols2 = cols-1; cols2 >=0; cols2--) {
            if (mytiles[cols2][rows].GetValue() == 0 ){
              mytiles[cols2][rows].UpdateValue(mytiles[cols2+1][rows].GetValue());
              mytiles[cols2+1][rows].resetval();
              flag = true;
            }else if (mytiles[cols2][rows].GetValue() ==  mytiles[cols2+1][rows].GetValue()) {
              mytiles[cols2][rows].doubleval();
              mytiles[cols2][rows].LockVal();
              mytiles[cols2+1][rows].resetval();
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  }

  // end of file
}
