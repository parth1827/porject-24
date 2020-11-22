
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	paper = new Paper(400,400)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  ellipseMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}



