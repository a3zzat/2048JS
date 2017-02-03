var ActionsEnum= {
  up:    0,
  down:  1,
  left:  2,
  right: 3,
};

var playspace = 400;
var tilesnum = 4;
var size = playspace / tilesnum;

var mygrid = new grid(tilesnum,size,ActionsEnum);

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
    mygrid.doaction(ActionsEnum.up);
  } else if (keyCode === DOWN_ARROW) {
    mygrid.doaction(ActionsEnum.down);
  } else if (keyCode === LEFT_ARROW) {
    mygrid.doaction(ActionsEnum.left);
  } else if (keyCode === RIGHT_ARROW) {
    mygrid.doaction(ActionsEnum.right);
  }
}
