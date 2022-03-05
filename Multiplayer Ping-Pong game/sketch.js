var BG_1
var player_1IMG, player_2IMG
var player_1
var ball;
var edges;


function preload() {
  BG_1 = loadImage('BG_1.jpeg');
  player_1IMG = loadImage('Racket1.png');
  player_2IMG = loadImage('Racket2.png');
  ballIMG = loadImage('Ball.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player_1 = createSprite(windowWidth/2-150, windowHeight/2, 50, 50);
  player_1.addImage(player_1IMG);
  player_1.scale = 0.3;
player_1.debug = true;

  player_2 = createSprite(windowWidth/2+150, windowHeight/2, 50, 50);
  player_2.addImage(player_2IMG);
  player_2.scale = 0.2;
player_2.debug = true;

  ball = createSprite(windowWidth/2, windowHeight/2,);
  ball.addImage(ballIMG);
  ball.scale = 0.3
  ball.velocityX = 5
  ball.velocityY = 5
  ball.debug = true;

  edges = createEdgeSprites();

}

function draw(){
  background(BG_1);

if(keyDown(LEFT_ARROW)) {
  player_1.x -= 3
} 
if(keyDown(RIGHT_ARROW)) {
  player_1.x += 3
}
if(keyDown(UP_ARROW)) {
  player_1.y -= 3
}
if(keyDown(DOWN_ARROW)) {
  player_1.y += 3
}

if(keyDown('A')) {
  player_2.x -= 3
} 
if(keyDown('D')) {
  player_2.x += 3
}
if(keyDown('W')) {
  player_2.y -= 3
}
if(keyDown('S')) {
  player_2.y += 3
}

ball.bounceOff(player_1);
ball.bounceOff(player_2);
ball.bounceOff(edges);
ball.bounceOff(edges);

  drawSprites();
}
   
        
      
    

    
  

  
 
    
    
  
    
    

  
  
  
 





