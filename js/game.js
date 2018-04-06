// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');

// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 448, // game width
  height: 704, // game height
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 300 },
      debug: false
    }
  },
  scene: gameScene // our newly created scene
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);

// load asset files for our game
gameScene.preload = function() {

  // load images
  this.load.image('onodera', 'assets/onodera.jpg');
  this.load.image('riko', 'assets/riko.png');
  this.load.image('block', 'assets/32x32.png');
};

// executed once, after assets were loaded
gameScene.create = function() {

  // background
  let bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'riko');
  bg.setScale(.5);
  console.log(bg);
  let boundaryLeft = this.physics.add.staticGroup({
  	key: 'block',
  	repeat: 20,
    setXY: { x: 16, y: 16, stepY: 32 }
  });

  let boundaryRight = this.physics.add.staticGroup({
  	key: 'block',
  	repeat: 20,
    setXY: { x: this.sys.game.config.width - 16, y: 16, stepY: 32 }
  });

  let boundaryBottom = this.physics.add.staticGroup({
  	key: 'block',
  	repeat: 13,
    setXY: { x: 16, y: this.sys.game.config.height - 16, stepX: 32 }
  });

}
