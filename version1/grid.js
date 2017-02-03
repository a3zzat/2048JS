function grid(tilesnum,size){

 this.ActionsEnum= {
   up:0,
   down:1,
   left:2,
   right:3,
 };
  var mytiles = new Array(tilesnum);
  // var emptytiles;
  this.init_grid = function () {
    for (var i = 0; i < tilesnum; i++) {
      mytiles[i] = new Array(tilesnum);
      for (var j = 0; j < tilesnum; j++) {
        var mytile = new tile(i*size,j*size,size,255/(i+j+1));
        mytile.resetval();
        mytiles[i][j]=(mytile);
      }
    }
    init_tile();
    init_tile();
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
        if (mytiles[i][j].value === 0) {
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

  this.doaction = function (action) {
    switch (action) {
      case this.ActionsEnum.up:
      pushup();
      break;

      case this.ActionsEnum.down:
      pushdown();
      break;

      case this.ActionsEnum.left:
      pushleft();
      break;

      case this.ActionsEnum.right:
      pushright();
      break;

      default:
    }
  }
function RemoveGaps(direction) {
  
}
  function pushleft()
  {
    var flag1 = false;
    for (var rows = 0; rows < tilesnum; rows++)
    {
      for (var cols = tilesnum-1; cols >0; cols--)
      {
        if (mytiles[cols][rows].value > 0)
        {

          if (mytiles[cols-1][rows].value == mytiles[cols][rows].value )
          {
            mytiles[cols-1][rows].doubleval();
            mytiles[cols][rows].resetval();
            // remove gaps
            cols = tilesnum-1;
            flag1 = true;
          }
          else if (mytiles[cols-1][rows].value == 0 )
          {
            mytiles[cols-1][rows].value = mytiles[cols][rows].value;
            mytiles[cols][rows].resetval();
            flag1 = true;
          }
        }
      }
    }
    if (flag1 == true) {
      init_tile();
    }
  }

  function pushright()
  {
    var flag1 = false;
    for (var rows = 0; rows < tilesnum; rows++)
    {
      for (var cols = 0; cols <tilesnum-1; cols++)
      {
        if (mytiles[cols][rows].value > 0)
        {

          if (mytiles[cols+1][rows].value == mytiles[cols][rows].value )
          {
            mytiles[cols+1][rows].doubleval();
            mytiles[cols][rows].resetval();
            cols = 0;
            flag1 = true;
          }
          else if (mytiles[cols+1][rows].value == 0 )
          {
            mytiles[cols+1][rows].value = mytiles[cols][rows].value;
            mytiles[cols][rows].resetval();
            flag1 = true;
          }
        }
      }
    }
    if (flag1 == true) {
      init_tile();
    }
  }


  function pushup()
  {
    var flag1 = false;
    for (var rows = tilesnum-1; rows >0; rows--)
    {
      for (var cols = 0; cols <tilesnum; cols++)
      {
        if (mytiles[cols][rows].value > 0)
        {

          if (mytiles[cols][rows-1].value == mytiles[cols][rows].value )
          {
            mytiles[cols][rows-1].doubleval();
            mytiles[cols][rows].resetval();
            rows = tilesnum-1;
            flag1 = true;
          }
          else if (mytiles[cols][rows-1].value == 0 )
          {
            mytiles[cols][rows-1].value = mytiles[cols][rows].value;
            mytiles[cols][rows].resetval();
            flag1 = true;
          }
        }
      }
    }
    if (flag1 == true) {
      init_tile();
    }
  }

  function pushdown()
  {
    var flag1 = false;
    for (var rows = 0; rows < tilesnum-1; rows++)
    {
      for (var cols = 0; cols <tilesnum; cols++)
      {
        if (mytiles[cols][rows].value > 0)
        {

          if (mytiles[cols][rows+1].value == mytiles[cols][rows].value )
          {
            mytiles[cols][rows+1].doubleval();
            mytiles[cols][rows].resetval();
            // remove gaps
            rows=0;

            flag1 = true;
          }
          else if (mytiles[cols][rows+1].value == 0 )
          {
            mytiles[cols][rows+1].value = mytiles[cols][rows].value;
            mytiles[cols][rows].resetval();
            flag1 = true;
          }
        }
      }
    }
    if (flag1 == true) {
      init_tile();
    }
  }
}
