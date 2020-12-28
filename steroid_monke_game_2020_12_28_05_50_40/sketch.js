
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, bananaGroup,rockGroup, gameState;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() { 
monkey = createSprite(80, 266, 20, 20);
monkey.addAnimation("moving", monkey_running);
  
  monkey.scale = 0.1;
  bananaGroup = createGroup();
  rockGroup = createGroup();
 
  score = 0;
  
  ground = createSprite(600, 300, 1900, 10);
  ground.velocityX = -4;
  console.log(ground.x);
}


function draw() {
createCanvas(600, 600);
  
  if (ground.x < 0) {
 ground.x = 300;   
  }
  if (monkey.isTouching(ground)) {
    monkey.velocityY = 0;
  }
  else {
    monkey.velocityY = monkey.velocityY + 0.3;
  }
  
  if (keyDown("space")&&monkey.isTouching(ground)) {
    monkey.velocityY = -7.5;
  }
  
  
  if (frameCount%160 == 0) {
    spawnBanana();
    spawnRock();
  }
  
  if (monkey.isTouching(bananaGroup)) {
    score = score + 1;
    bananaGroup.destroyEach();
  }
  
  if (monkey.isTouching(rockGroup)) {
    score = score + 1;
    monkey.destroy();
  }
  
  text(score, 400, 50);
  
 drawSprites(); 
}

function spawnBanana() {

  var banana = createSprite(500, Math.round(random(120, 200)));
    banana.velocityX = -4;
    bananaGroup.add(banana);
    banana.addImage("banana.png", bananaImage);
    banana.scale = 0.1; 
    banana.lifetime = 150;
  
}

function spawnRock() {

  var rock = createSprite(Math.round(random(300, 500)), 270, 10, 10);
    rock.velocityX = -4;
    rockGroup.add(rock);
    rock.addImage("obstacle.png", obstacleImage);
    rock.scale = 0.1; 
    rock.lifetime = 150;
  
}




