// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');

// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 448, // game width
  height: 704, // game height
  physics: {
    default: 'matter'
    // arcade: {
    //   gravity: {y: 300 },
    //   debug: false
    // }
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

  // // Enable Box2D physics
  // this.physics.startSystem(Phaser.Physics.BOX2D);
  //
  // this.physics.box2d.gravity.y = 500;
  // this.physics.box2d.setBoundsToWorld();
  // this.physics.box2d.restitution = 0.5;

  // background
  let bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'riko');
  bg.setScale(.5);
  console.log(bg);
  let boundaryLeft = this.add.staticGroup({
  	key: 'block',
  	repeat: 20,
    setXY: { x: 16, y: 16, stepY: 32 }
  });

  let boundaryRight = this.add.staticGroup({
  	key: 'block',
  	repeat: 20,
    setXY: { x: this.sys.game.config.width - 16, y: 16, stepY: 32 }
  });

  let boundaryBottom = this.add.staticGroup({
  	key: 'block',
  	repeat: 13,
    setXY: { x: 16, y: this.sys.game.config.height - 16, stepX: 32 }
  });

  let column1 = this.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x:80, y:80, stepY: 96}
  });

  let column2 = this.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x:128, y:128, stepY: 96}
  });

  let column3 = this.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 176, y: 80, stepY: 96}
  });

  let column4 = this.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 224, y: 128, stepY: 96}
  });

  let column5 = this.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 272, y: 80, stepY: 96}
  });

  let column6 = this.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 320, y: 128, stepY: 96}
  });

  let column7 = this.add.staticGroup({
      key: 'star',
      repeat: 5,
      setXY: {x: 368, y: 80, stepY: 96}
  });

  //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
  let stars = this.matter.add.group({
    key: 'star',
    repeat: 5,
    setXY: { x: 40, y: 0, stepX: 60 }
  });

  console.log(stars);

  stars.children.iterate(function (child) {
    //  Give each star a slightly different bounce
    // child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    child.setCircle(15.5);
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

  this.matter.add.collider(stars, boundaryLeft);
  this.matter.add.collider(stars, boundaryRight);
  this.matter.add.collider(stars, boundaryBottom);
  this.matter.add.collider(stars, column1);
  this.matter.add.collider(stars, column2);
  this.matter.add.collider(stars, column3);
  this.matter.add.collider(stars, column4);
  this.matter.add.collider(stars, column5);
  this.matter.add.collider(stars, column6);
  this.matter.add.collider(stars, column7);

}
