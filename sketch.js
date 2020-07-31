var Trash,Ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

Ground = createSprite(10,500,1580,10);
Ground.shapeColor="Yellow";

Trash = createSprite(600,490,250,15);
Trash.shapeColor="Purple";

Trash1 = createSprite(480,445,15,90);
Trash1.shapeColor="Purple";

Trash2 = createSprite(720,445,15,90);
Trash2.shapeColor="Purple";

paperObject = createSprite(45,475,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  
  drawSprites();
 
}
function keyPressed(){
 if(keyCode === UP_ARROW){
	 matter.Bodies.isStatic = False;
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
 }

}



