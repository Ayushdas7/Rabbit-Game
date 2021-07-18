var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeleaf.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  createLeaf();
    drawSprites();
}

function createApples(){
  // write your code here 
  var rand = Math.round(random(10,60))
  if(frameCount%80===0){
 var  apple=createSprite(Math.round(random(50,350)),40,10,10);
   apple.velocityY=4;
   apple.scale =0.1;
   apple.addImage(appleImg);
  }
  
 }

 function createLeaf(){
  // write your code here 
  var rand = Math.round(random(10,60))
  if(frameCount%80===0){
 var  leaf=createSprite(Math.round(random(30,550)),-20,10,10);
   leaf.velocityY=7;
   leaf.scale =0.1;
   leaf.addImage(leafImg);
  }
  
 } 