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
  let boundaries = this.add.group({
  	key: 'block',
  	repeat: 12
  });

    //  Align all of the sprites around the picture
    console.log(boundaries);
    boundaries.getChildren(1).Align.To(bg, Phaser.TOP_LEFT);
    boundaries.getChildren(2).Align.To(bg, Phaser.TOP_CENTER);
    boundaries.getChildren(3).Align.To(bg, Phaser.TOP_RIGHT);
    boundaries.getChildren(4).Align.To(bg, Phaser.LEFT_TOP);
    boundaries.getChildren(5).Align.To(bg, Phaser.LEFT_CENTER);
    boundaries.getChildren(6).Align.To(bg, Phaser.LEFT_BOTTOM);
    boundaries.getChildren(7).Align.To(bg, Phaser.RIGHT_TOP);
    boundaries.getChildren(8).Align.To(bg, Phaser.RIGHT_CENTER);
    boundaries.getChildren(9).Align.To(bg, Phaser.RIGHT_BOTTOM);
    boundaries.getChildren(10).Align.To(bg, Phaser.BOTTOM_LEFT);
    boundaries.getChildren(11).Align.To(bg, Phaser.BOTTOM_CENTER);
    boundaries.getChildren(12).Align.To(bg, Phaser.BOTTOM_RIGHT);}