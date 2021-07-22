const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bgimg;
var snow=[];
var snow1img,snow2img;

function preload(){
  bgimg=loadImage("snow3.jpg");
  snow1img=loadImage("snow4.webp");
  snow2img=loadImage("snow5.webp");
}
function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(600,600);
  createSprite(400, 200, 50, 50);
  if(frameCount % 50 === 0){

    for(var i=0; i<200; i++){
      snow.push(new createSnow(random(0,600), random(0,600)));
      
    }

  }
 

}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  for(var i = 0; i<200; i++){
        snow[i].showDrop();
        snow[i].updateY()
  }
  
 
  drawSprites();
}