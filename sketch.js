var obstacle, still_obstacle;
var monkey , monkey_running;
var banana ,eating_banana;
var FoodGroup, obstacleGroup;
var ground, moving_ground;
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  eating_banana = loadAnimation("banana.png");
  still_obstacle = loadAnimation("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(50,380,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(300,425,600,5);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
 
  
}


function draw() {
  background(220);
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY = -8;
  }
  
  if(monkey.isTouching(obstacleGroup)){
      ground.velocityX = 0;
      monkey.velocityX = 0;  
      obstacleGroup.setVelocityXEach(0); 
      FoodGroup.setVelocityXEach(0); 
      obstacleGroup.setLifetimeEach(-1); 
      FoodGroup.setLifetimeEach(-1);
  }
  
  monkey.velocityY = monkey.velocityY + 0.2 ; 
  monkey.collide(ground);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :"+survivalTime,100,50);
  
  spawnFood();
  spawnObstacle();

  drawSprites();
  
}

function spawnFood(){
  if(frameCount % 80 === 0){
 
  var banana = createSprite(650,Math.round(random(200,300)),10,40);
  banana.addAnimation("eating",eating_banana);
  banana.velocityX = -3;
  banana.lifetime = 300;
  banana.scale = 0.1;
  FoodGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(600,403,10,40);
    obstacle.addAnimation("still",still_obstacle);
    obstacle.velocityX = -3
    obstacle.lifetime = 300;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
}







