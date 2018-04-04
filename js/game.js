// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');
 
// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 640, // game width
  height: 800, // game height
  scene: gameScene // our newly created scene
};
 
// create the game, and pass it the configuration
let game = new Phaser.Game(config);

// load asset files for our game
gameScene.preload = function() {
 
  // load images
  this.load.image('onodera', 'assets/onodera.jpg');
};
 
// executed once, after assets were loaded
gameScene.create = function() {
 
   // background
   let bg = this.add.sprite(0, 0, 'onodera');

  // change origin to the top-left of the sprite
  bg.setOrigin(0,0);
  bg.height = config.height;
  bg.width = config.width;
  console.log(bg);
  console.log(game);
  console.log(config);
}