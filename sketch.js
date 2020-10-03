var monkey , monkey_running;
var banana ,bananaImage, obstacles, obstaclesImage;
var bananaGroup, obstaclesGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(720,450);  
  
  bananaGroup = new Group();
  monkey = createSprite(150,350);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;

  ground = createSprite(360,400,720,20);
  
}
function draw() {
  background("lightgrey");
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 1;
  if(keyWentDown("space") && monkey.y>340) {
    monkey.velocityY = -15;
  }

  survivalTime = Math.round(frameCount / Math.round(frameRate()));

  fill("grey");textSize(20);
  text("Survival time: " + survivalTime, 550, 20);

  createBanana();
  spawnObstacles();
  drawSprites();
}

function createBanana() {

  if(frameCount % 80 === 0) {
    banana = createSprite(750,Math.round(random(200,330)));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -10;
    banana.depth = monkey.depth - 1;
    banana.lifetime = 80;
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {

  if(frameCount % 300 === 0) {

    obstacles = createSprite(720,370);
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -10;
    obstacles.lifetime = 80;
    obstacles.depth = ground.depth - 1;
  }
}

