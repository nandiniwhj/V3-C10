var sea;
var seaIMG;
var ship1; 
var shipIMG;

function preload(){
seaIMG = loadImage("sea.png")
shipIMG = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
}

function setup(){
  createCanvas(400,400);
 sea = createSprite(400,200);
 sea.addImage(seaIMG)
 sea.velocityX= -5
 sea.scale= 0.3

ship1 = createSprite(150,200)
ship1.addAnimation("shiprunning",shipIMG)
ship1.scale = 0.3
}

function draw() {
  background("blue")
  sea.velocityX= -5
  if (sea.x < 0) {
    sea.x = sea.width/7;
  }
  drawSprites()
  
 
}