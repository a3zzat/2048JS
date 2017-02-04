function grid(tilesnum,size,ActionsEnum){

  this.tilesvals = new Array(tilesnum);
  var mytiles = new Array(tilesnum);

  this.init_grid = function () {
    for (var i = 0; i < tilesnum; i++) {
      mytiles[i] = new Array(tilesnum);
      this.tilesvals[i] = new Array(tilesnum);
      for (var j = 0; j < tilesnum; j++) {
        var mytile = new tile(i*size,j*size,size,255/(i+j+1));
        mytile.resetval();
        mytiles[i][j]= mytile;
        this.tilesvals[i][j] = mytiles[i][j].GetValue();
      }
    }
    for (var l = 0; l < 10; l++) {
      init_tile();
    }
  }

  this.show =function () {
    for (var i = 0; i < tilesnum; i++) {
      for (var j = 0; j < tilesnum; j++) {
        mytiles[i][j].show();
        this.tilesvals = mytiles[i][j].GetValue();
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

  this.doaction = function (action) {
    var flag1 = false;
    var flag2 = false;
    flag1 = RemoveGaps(action);
    // AddDoubles(action);
    flag2 = RemoveGaps(action);
    if ((flag1 == true) || (flag2 == true) ) {
      // removed for debug
      // init_tile();
    }
  }

  function RemoveGaps(direction) {
    var flag = false;
    switch (direction) {
      case ActionsEnum.up:
      flag = RemoveGapsUp();
      break;

      case ActionsEnum.down:
      flag = RemoveGapsDown();
      break;

      case ActionsEnum.left:
      flag = RemoveGapsLeft();
      break;

      case ActionsEnum.right:
      flag = RemoveGapsRight();
      break;

      default:
    }
    return flag;
  }

  function AddDoubles(direction) {
    switch (direction) {
      case ActionsEnum.up:
      AddDoublesUp();
      break;

      case ActionsEnum.down:
      AddDoublesDown();
      break;

      case ActionsEnum.left:
      AddDoublesLeft();
      break;

      case ActionsEnum.right:
      AddDoublesRight();
      break;

      default:
    }
  }

  function RemoveGapsLeft()
  {
    var flag = false;
    for (var rows = 0; rows < tilesnum; rows++)
    {
      for (var cols = tilesnum-1; cols >0; cols--)
      {
        if ((mytiles[cols][rows].GetValue() > 0)&&(mytiles[cols-1][rows].GetValue() == 0 ))
        {
          mytiles[cols-1][rows].UpdateValue(mytiles[cols][rows].GetValue());
          mytiles[cols][rows].resetval();
          flag = true;
        }
      }
    }
    return flag;
  }

  function RemoveGapsRight()
  {
    var flag = false;
    for (var rows = 0; rows < tilesnum; rows++)
    {
      for (var cols = 0; cols <tilesnum-1; cols++)
      {
        if ((mytiles[cols][rows].GetValue() > 0)&&(mytiles[cols+1][rows].GetValue() == 0 ))
        {
          mytiles[cols+1][rows].UpdateValue(mytiles[cols][rows].GetValue());
          mytiles[cols][rows].resetval();
          flag = true;
        }
      }
    }
    return flag;
  }

  function RemoveGapsUp()
  {
    var flag = false;
    for (var cols = 0; cols <tilesnum; cols++)
    {
      for (var rows = 1; rows < tilesnum; rows++)
      {
        if ((mytiles[cols][rows].GetValue() > 0)&&(mytiles[cols][rows-1].GetValue() == 0 ))
        {
          mytiles[cols][rows-1].UpdateValue(mytiles[cols][rows].GetValue());
          mytiles[cols][rows].resetval();
          flag = true;
        }
      }
    }
    return flag;
  }

  function RemoveGapsDown()
  {
    var flag = false;
    for (var cols = 0; cols <tilesnum; cols++)
    {
      for (var rows = tilesnum-2; rows >=0; rows--)
      {
        if ((mytiles[cols][rows].GetValue() > 0)&& (mytiles[cols][rows+1].GetValue() == 0 ))
        {
          mytiles[cols][rows+1].UpdateValue(mytiles[cols][rows].GetValue());
          mytiles[cols][rows].resetval();
          flag = true;
        }
      }
    }
    return flag;
  }


  function  AddDoublesLeft() {
    for (var rows = 0; rows < tilesnum; rows++)
    {
      for (var cols = 0; cols <tilesnum-1; cols++)
      {
        if ((mytiles[cols][rows].GetValue() > 0)&&(mytiles[cols+1][rows].GetValue() == mytiles[cols][rows].GetValue() ))
        {
          mytiles[cols][rows].doubleval();
          mytiles[cols+1][rows].resetval();
        }
      }
    }
  }



  // end of file
}

// function pushleft(action)
// {
//   var flag1 = false;
//   for (var rows = 0; rows < tilesnum; rows++)
//   {
//     for (var cols = tilesnum-1; cols >0; cols--)
//     {
//       if (mytiles[cols][rows].value > 0)
//       {
//
//         if (mytiles[cols-1][rows].value == mytiles[cols][rows].value )
//         {
//           mytiles[cols-1][rows].doubleval();
//           mytiles[cols][rows].resetval();
//           // remove gaps
//           cols = tilesnum-1;
//           flag1 = true;
//         }
//         else if (mytiles[cols-1][rows].value == 0 )
//         {
//           mytiles[cols-1][rows].value = mytiles[cols][rows].value;
//           mytiles[cols][rows].resetval();
//           flag1 = true;
//         }
//       }
//     }
//   }
//   if (flag1 == true) {
//     init_tile();
//   }
// }
//   function pushleft(action)
//   {
//     var flag = false;
//     RemoveGaps(action);
//     AddDoubles(action);
//     RemoveGaps(action);
//
//     for (var rows = 0; rows < tilesnum; rows++)
//     {
//       for (var cols = tilesnum-1; cols >0; cols--)
//       {
//         if (mytiles[cols][rows].value > 0)
//         {
//
//           if (mytiles[cols-1][rows].value == mytiles[cols][rows].value )
//           {
//             mytiles[cols-1][rows].doubleval();
//             mytiles[cols][rows].resetval();
//             // remove gaps
//             cols = tilesnum-1;
//             flag1 = true;
//           }
//           else if (mytiles[cols-1][rows].value == 0 )
//           {
//             mytiles[cols-1][rows].value = mytiles[cols][rows].value;
//             mytiles[cols][rows].resetval();
//             flag1 = true;
//           }
//         }
//       }
//     }
//     if (flag1 == true) {
//       init_tile();
//     }
//   }
//
//   function pushright(action)
//   {
//     var flag1 = false;
//     for (var rows = 0; rows < tilesnum; rows++)
//     {
//       for (var cols = 0; cols <tilesnum-1; cols++)
//       {
//         if (mytiles[cols][rows].value > 0)
//         {
//
//           if (mytiles[cols+1][rows].value == mytiles[cols][rows].value )
//           {
//             mytiles[cols+1][rows].doubleval();
//             mytiles[cols][rows].resetval();
//             cols = 0;
//             flag1 = true;
//           }
//           else if (mytiles[cols+1][rows].value == 0 )
//           {
//             mytiles[cols+1][rows].value = mytiles[cols][rows].value;
//             mytiles[cols][rows].resetval();
//             flag1 = true;
//           }
//         }
//       }
//     }
//     if (flag1 == true) {
//       init_tile();
//     }
//   }
//
//
//   function pushup(action)
//   {
//     var flag1 = false;
//     for (var rows = tilesnum-1; rows >0; rows--)
//     {
//       for (var cols = 0; cols <tilesnum; cols++)
//       {
//         if (mytiles[cols][rows].value > 0)
//         {
//
//           if (mytiles[cols][rows-1].value == mytiles[cols][rows].value )
//           {
//             mytiles[cols][rows-1].doubleval();
//             mytiles[cols][rows].resetval();
//             rows = tilesnum-1;
//             flag1 = true;
//           }
//           else if (mytiles[cols][rows-1].value == 0 )
//           {
//             mytiles[cols][rows-1].value = mytiles[cols][rows].value;
//             mytiles[cols][rows].resetval();
//             flag1 = true;
//           }
//         }
//       }
//     }
//     if (flag1 == true) {
//       init_tile();
//     }
//   }
//
//   function pushdown(action)
//   {
//     var flag1 = false;
//     for (var rows = 0; rows < tilesnum-1; rows++)
//     {
//       for (var cols = 0; cols <tilesnum; cols++)
//       {
//         if (mytiles[cols][rows].value > 0)
//         {
//
//           if (mytiles[cols][rows+1].value == mytiles[cols][rows].value )
//           {
//             mytiles[cols][rows+1].doubleval();
//             mytiles[cols][rows].resetval();
//             // remove gaps
//             rows=0;
//
//             flag1 = true;
//           }
//           else if (mytiles[cols][rows+1].value == 0 )
//           {
//             mytiles[cols][rows+1].value = mytiles[cols][rows].value;
//             mytiles[cols][rows].resetval();
//             flag1 = true;
//           }
//         }
//       }
//     }
//     if (flag1 == true) {
//       init_tile();
//     }
//   }
// }
