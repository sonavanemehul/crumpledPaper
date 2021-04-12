
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var Paperobj;

function preload() {

	//D_png = loadImage("dustbingreen.png")
    //paper_Img = loadImage("paper.png")
	}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,680,width,20);
	dustbinObj=new dustbin(1200,650);
	Paperobj=new Paper(300,450,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("pink");
  Engine.update(engine);
 
  Paperobj.display();
  groundObject.display();
  dustbinObj.display();
  
  //keyPressed();

  //drawSprites();

}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(Paperobj.body, Paperobj.body.position,{
	x:130,
	y:-160
});
}
}
