const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var world,ball1,ground,backgroundImg;

function preload(){
backgroundImg=loadImage("Images/background.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create();
  world=engine.world;
 createSprite(400, 200, 50, 50);
 ball1=new Ball(200,400,40);
 ground=new Ground(630,displayHeight,displayWidth,20);
 Engine.run(engine);
}

function draw() {
  background(backgroundImg);
 ground.display();
 ball1.display();
  drawSprites();
}