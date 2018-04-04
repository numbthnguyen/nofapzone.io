// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');
 
// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 450, // game width
  height: 700, // game height
  scene: gameScene // our newly created scene
};
 
// create the game, and pass it the configuration
let game = new Phaser.Game(config);

// load asset files for our game
gameScene.preload = function() {
 
  // load images
  this.load.image('onodera', 'assets/onodera.jpg');
  this.load.image('block', 'assets/32x32.png');
};
 
// executed once, after assets were loaded
gameScene.create = function() {
 
  // background
  let bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'onodera');
  let boundaries = this.add.group();
  boundaries.createMultiple(12, 'block', 0, true);

    //  Align all of the sprites around the picture
    boundaries.getChildAt(1).alignTo(pic, Phaser.TOP_LEFT);
    boundaries.getChildAt(2).alignTo(pic, Phaser.TOP_CENTER);
    boundaries.getChildAt(3).alignTo(pic, Phaser.TOP_RIGHT);
    boundaries.getChildAt(4).alignTo(pic, Phaser.LEFT_TOP);
    boundaries.getChildAt(5).alignTo(pic, Phaser.LEFT_CENTER);
    boundaries.getChildAt(6).alignTo(pic, Phaser.LEFT_BOTTOM);
    boundaries.getChildAt(7).alignTo(pic, Phaser.RIGHT_TOP);
    boundaries.getChildAt(8).alignTo(pic, Phaser.RIGHT_CENTER);
    boundaries.getChildAt(9).alignTo(pic, Phaser.RIGHT_BOTTOM);
    boundaries.getChildAt(10).alignTo(pic, Phaser.BOTTOM_LEFT);
    boundaries.getChildAt(11).alignTo(pic, Phaser.BOTTOM_CENTER);
    boundaries.getChildAt(12).alignTo(pic, Phaser.BOTTOM_RIGHT);
}