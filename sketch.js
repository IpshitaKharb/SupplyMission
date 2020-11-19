var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bound1,bound3,bound2;
const MyEngine = Matter.Engine;
const MyWorld = Matter.World;
const MyBodies = Matter.Bodies;
const MyBody = Matter.Body;

var engine,world,body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);	
	rectMode(CENTER);

	engine = MyEngine.create();
	world = engine.world;

	//PACKAGE
	var package_options={
		restitution : 0.7 ,
		isStatic : true
	}
	packageSprite=createSprite(width/2, 80, 10,10);
	packageBody = MyBodies.rectangle(width/2 , 200 , 5 ,10,package_options);
	MyWorld.add(world, packageBody);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//HELOCOPTER
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//Create a Ground
	var ground_options={
		isStatic : true
	}
	groundSprite=createSprite(width/2, height-55, width,10);
	ground = MyBodies.rectangle(width/2, height-35, width, 10 ,ground_options);
	MyWorld.add(world, ground);
	groundSprite.shapeColor=color(255);
	 
	// Create Boundaries
	
	var Wall_options={
		isStatic : true
	}
	wallSprite1=createSprite(width/2,height-50,250,20);
	wall1=MyBodies.rectangle(width/2,height-50,250,50,Wall_options);
	MyWorld.add(world,wall1);
	wallSprite1.shapeColor="red";

	wallSprite2=createSprite((width/2)-115,height-100,20,100);
	wall2=MyBodies.rectangle((width/2)-115,height-100,20,100,Wall_options);
	MyWorld.add(world,wall2);
	wallSprite2.shapeColor="red";

	wallSprite3=createSprite((width/2)+115,height-100,20,100);
	wall3=MyBodies.rectangle((width/2)+115,height-100,20,100,Wall_options);
	MyWorld.add(world,wall3);
	wallSprite3.shapeColor="red";

}
function draw() {
  rectMode(CENTER);
  background(0);
  MyEngine.update(engine);

  groundSprite.x=ground.position.x;
  groundSprite.y=ground.position.y;

  wallSprite1.x=wall1.position.x;
  wallSprite2.x=wall2.position.x;
  wallSprite3.x=wall3.position.x;

  wallSprite1.y=wall1.position.y;
  wallSprite2.y=wall2.position.y;
  wallSprite3.y=wall3.position.y;

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
     Matter.Body.setStatic(packageBody,false);
  }
}



