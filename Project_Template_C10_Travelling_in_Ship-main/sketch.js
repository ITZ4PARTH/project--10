var sea, seawaves;
var ship, shipmoving;


function preload(){
  seawaves = loadImage("sea.png");
  shipmoving= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png" )
}

function setup(){
  createCanvas(600,200);
 
  // creating trex
  ship = createSprite(50,160,20,50);
  ship.addAnimation(shipmoving);
  edges = createEdgeSprites();
  sea = createSprite (300,180,500,10)
  sea.addImage (seawaves )
 sea.velocityX=-5
 invgrd = createSprite (300,180,600,10)
  invgrd . visible = false
sea.scale = 0.3
  //adding scale and position to trex
  ship.scale = 1;
  ship.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
 // console.log(trex.y)
  
  //jump when space key is pressed
 
  
  

  if (sea.x<0) {
    sea.x=300
  }

  
 
  //stop trex from falling down
  ship.collide(sea)
  drawSprites();
}