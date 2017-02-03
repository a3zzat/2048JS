var playspace = 400;
var tilesnum = 4;
var size = playspace / tilesnum;

var mygrid = new grid(tilesnum,size);

function setup() {
  createCanvas(playspace, playspace);
  mygrid.init_grid();
}

function draw() {
  background(10);

  mygrid.show();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    mygrid.doaction(mygrid.ActionsEnum.up);
  } else if (keyCode === DOWN_ARROW) {
    mygrid.doaction(mygrid.ActionsEnum.down);
  } else if (keyCode === LEFT_ARROW) {
    mygrid.doaction(mygrid.ActionsEnum.left);
  } else if (keyCode === RIGHT_ARROW) {
    mygrid.doaction(mygrid.ActionsEnum.right);
  }
}
