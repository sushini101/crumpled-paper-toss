
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,665,800,15);
	paper = new paper(100,650,8,8);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(231,252,188);
  
  zone = createSprite(400,650,120,10);
  zone.shapeColor="red";
 
  zone1 = createSprite(340,625,10,60);
  zone1.shapeColor="red";
 
  zone2 = createSprite(460,625,10,60);
  zone2.shapeColor="red";

	up();

  ground.display();
  paper.display();
  drawSprites();
 
}

function up(){
	if(keyCode===UP_ARROW){
		matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}

}


