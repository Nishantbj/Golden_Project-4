const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState, PLAY, END
var bg, boyImg, boyStd, boy
var startingPointImg, floatingIsland1, floatingIsland2
var float1, float2, float3, float4, startingPoint, endingPoint
var i = 0
var j = 0

function preload() {
  bg = loadImage("./Assets/bg.png");
  boyImg = loadAnimation(
    "./Assets/boy1.png",
    "./Assets/boy2.png",
    "./Assets/boy3.png",
    "./Assets/boy4.png"
  );
  boyStd = loadAnimation("./Assets/boy4.png");
  startingPointImg = loadImage("./Assets/startingPoint.png");
  floatingIsland1 = loadImage("./Assets/floatingIsland1.png");
  floatingIsland2 = loadImage("./Assets/floatingIsland2.png");
  bgSound = loadSound("./Assets/sound1.mp3");
  sadSound = loadSound("./Assets/sad.wav");
  star

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  imageMode(CENTER); 1
  boy = new Boy(100, height - 450);
  console.log(boy.body);

  startingPoint = new Ground(100, height - 300, 100, 250, startingPointImg);
  float1 = new Ground(450, height - 300, 100, 250, floatingIsland1);
  float2 = new Ground(700, height - 250, 100, 250, floatingIsland2);
  float3 = new Ground(950, height - 350, 100, 250, floatingIsland1);
  float4 = new Ground(1150, height - 250, 100, 250, floatingIsland2);
  endingPoint = new Ground(1350, height - 300, 100, 250, startingPointImg);

  obstacle1 = new Obstacle(100, 50)
  obstacle2 = new Obstacle(450, 50)
  obstacle3 = new Obstacle(700, 50)
  obstacle4 = new Obstacle(950, 50)
  obstacle5 = new Obstacle(1150, 50)
  obstacle6 = new Obstacle(1350, 50)

  star1 = new Obstacle(200, 500, starImg);
  star2 = new Obstacle(450, 50, starImg);
  star3 = new Obstacle(700, 50, starImg);
  star4 = new Obstacle(950, 50, starImg);
  star5 = new Obstacle(1150, 50, starImg);
  PLAY = 1
  END = 0
  gameState = PLAY
  bgSound.loop()
}

function draw() {
  background(255);
  Engine.update(engine);
  // Game Background
  image(bg, width / 2, height / 2, width, height);
  if (gameState === PLAY) {
    //keyControls for the player
    playerControls()
    textSize(30);
    fill("black");
    text("Press Space To Jump", width / 2 - 100, height - 50);
    // Displaying all our game objects
    boy.show();
    startingPoint.show();
    float1.show();
    float2.show();
    float3.show();
    float4.show();
    endingPoint.show()
    obstacle1.display()
    obstacle2.display()
    obstacle3.display()
    obstacle4.display()
    obstacle5.display()
    obstacle6.display()
    // checking the collision
    collisionWithPoints()
    if (boy.body.position.y > height - 50) {
      gameState = END
    }
  }
  else if (gameState === END) {
    textSize(30);
    fill("black");
    text("GameOver", width / 2, height / 2)
    World.remove(world, boy)
  }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function collisionWithPoints() {
  var collision = Matter.SAT.collides(boy.body, startingPoint.body);
  console.log(collision)

  if (collision.collided) {
    text("Bomb is ready to drop, jump quickly", width / 2 - 100, 30)
    boy.body.velocity.x = 0
    if (keyDown("space")) {
      boy.shoot();
    }
    setInterval(function () { Matter.Body.setStatic(obstacle1.body, false) }, 2000)
    var bombcollision = Matter.SAT.collides(boy.body, obstacle1.body);
    if (bombcollision.collided) {
      gameState = END
    }
  }
  var collision = Matter.SAT.collides(boy.body, float1.body);
  console.log(collision)

  if (collision.collided) {
    text("Bomb is ready to drop, jump quickly", width / 2 - 100, 30)
    boy.body.velocity.x = 0
    if (keyDown("space")) {
      boy.shoot();
    }
    setInterval(function () { Matter.Body.setStatic(obstacle2.body, false) }, 2000)
    var bombcollision = Matter.SAT.collides(boy.body, obstacle2.body);
    if (bombcollision.collided) {
      gameState = END
    }
  }
  var collision = Matter.SAT.collides(boy.body, float2.body);
  console.log(collision)

  if (collision.collided) {
    text("Bomb is ready to drop, jump quickly", width / 2 - 100, 30)
    boy.body.velocity.x = 0
    if (keyDown("space")) {
      boy.shoot();
    }
    setInterval(function () { Matter.Body.setStatic(obstacle3.body, false) }, 2000)
    var bombcollision = Matter.SAT.collides(boy.body, obstacle3.body);
    if (bombcollision.collided) {
      gameState = END
    }
  }

  var collision = Matter.SAT.collides(boy.body, float3.body);
  console.log(collision)

  if (collision.collided) {
    text("Bomb is ready to drop, jump quickly", width / 2 - 100, 30)
    boy.body.velocity.x = 0
    if (keyDown("space")) {
      boy.shoot();
    }
    setInterval(function () { Matter.Body.setStatic(obstacle4.body, false) }, 2000)
    var bombcollision = Matter.SAT.collides(boy.body, obstacle4.body);
    if (bombcollision.collided) {
      gameState = END
    }
  }
  var collision = Matter.SAT.collides(boy.body, float4.body);
  console.log(collision)

  if (collision.collided) {
    text("Bomb is ready to drop, jump quickly", width / 2 - 100, 30)
    boy.body.velocity.x = 0
    if (keyDown("space")) {
      boy.shoot();
    }
    setInterval(function () { Matter.Body.setStatic(obstacle5.body, false) }, 2000)
    var bombcollision = Matter.SAT.collides(boy.body, obstacle5.body);
    if (bombcollision.collided) {
      gameState = END
    }
  }
  var collision = Matter.SAT.collides(boy.body, endingPoint.body);
  console.log(collision)

  if (collision.collided) {
    text("Bomb is ready to drop, jump quickly", width / 2 - 100, 30)
    boy.body.velocity.x = 0
    if (keyDown("space")) {
      boy.shoot();
    }
    setInterval(function () { Matter.Body.setStatic(obstacle6.body, false) }, 2000)
    var bombcollision = Matter.SAT.collides(boy.body, obstacle6.body);
    if (bombcollision.collided) {
      gameState = END
    }
  }
}
function playerControls() {
  var prev = boy.body.position.x


  if (keyDown(RIGHT_ARROW) && i <= 2) {
    boy.body.position.x += 1
    i++
    j = 0
  }
  if (keyDown(LEFT_ARROW) && j <= 2) {
    boy.body.position.x -= 1
    j++
    i = 0
  }
}