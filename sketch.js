
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    roof = new Roof(350,100,300,30);
	world.add(world,roof);

	bob1 = new Bob(250,300);
	bob2 = new Bob(300,350);
	bob3 = new Bob(350,400);
	bob4 = new Bob(400,450);
	bob5 = new Bob (450,500);

	rope1 = new Rope(bob1.body,roof,body,-100,0);
	world.add(world, rope1);

	rope2 = new Rope(bob2.body,roof,body,-50,0);
	world.add(world, rope1);

	rope3 = new Rope(bob3.body,roof,body,0,0);
	world.add(world, rope1);

	rope4 = new Rope(bob4.body,roof,body,50,0);
	world.add(world, rope1);

	rope5 = new Rope(bob5.body,roof,body,100,0);
	world.add(world, rope1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(bob1.body,bob1.body.position,{x : -730,y:0});
	}
}


