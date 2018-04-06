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
  this.load.image('star', 'assets/onodera-plinko.png');
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

  let column1 = this.physics.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x:80, y:80, stepY: 96}
  });

  let column2 = this.physics.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x:128, y:128, stepY: 96}
  });

  let column3 = this.physics.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 176, y: 80, stepY: 96}
  });

  let column4 = this.physics.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 224, y: 128, stepY: 96}
  });

  let column5 = this.physics.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 272, y: 80, stepY: 96}
  });

  let column6 = this.physics.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 320, y: 128, stepY: 96}
  });

  let column7 = this.physics.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 368, y: 80, stepY: 96}
  });

  //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
  let stars = this.physics.add.group({
    key: 'star',
    repeat: 5,
    setXY: { x: 40, y: 0, stepX: 60 }
  });

  console.log(stars);

  stars.children.iterate(function (child) {
    //  Give each star a slightly different bounce
    // child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    child.setCircle(15.5);
    child.setCollideWorldBounds(true);
    child.setBounce(Phaser.Math.FloatBetween(0.4, 0.8), Phaser.Math.FloatBetween(0.4, 0.8));
    child.setFriction(0.005);
  });
  column1.children.iterate(function (child) {
    child.setCircle(15.5);
  });
  column2.children.iterate(function (child) {
    child.setCircle(15.5);
  });
  column3.children.iterate(function (child) {
    child.setCircle(15.5);
  });
  column4.children.iterate(function (child) {
    child.setCircle(15.5);
  });
  column5.children.iterate(function (child) {
    child.setCircle(15.5);
  });

  column6.children.iterate(function (child) {
    child.setCircle(15.5);
  });
  column7.children.iterate(function (child) {
    child.setCircle(15.5);
  });

  this.physics.add.collider(stars, boundaryLeft);
  this.physics.add.collider(stars, boundaryRight);
  this.physics.add.collider(stars, boundaryBottom);
  this.physics.add.collider(stars, column1);
  this.physics.add.collider(stars, column2);
  this.physics.add.collider(stars, column3);
  this.physics.add.collider(stars, column4);
  this.physics.add.collider(stars, column5);
  this.physics.add.collider(stars, column6);
  this.physics.add.collider(stars, column7);

}
