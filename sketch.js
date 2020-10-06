var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  

}



function setup() {

  createCanvas(600,600);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

 ground = createSprite(600, 350, 900, 10);
  ground.x = ground.width /2;
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
}


function draw() {

  background("white");
  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime,100,50);
  
  spawnBanana();
  
  
  
  drawSprites();

}
  
function spawnBanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 200, 40, 10);
    banana.y = Math.round(random(120,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;

    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
if(frameCount%100 === 0){
var obstacle = createSprite(300,350,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
obstacle.velocityX = -3;
  obstacle.lifetime = 200;

  obstacleGroup.add(obstacle);
}
}