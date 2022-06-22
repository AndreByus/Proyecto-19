var canvas;

var player;

var floorImage;

var floor;

function preload(){
floorImage = loadImage("ground.png");
}

function setup() {
 canvas = createCanvas(1800, 450);
 player = createSprite(900, 410);
 player.shapeColor = "lightGreen";

floor = createSprite(900, 430);
floor.addImage(floorImage);
floor.velocityX = -3;
}

function draw() {
 background("cyan");
 if(floor.x < 550){
floor.x = width/2;
 }
 drawSprites();
}