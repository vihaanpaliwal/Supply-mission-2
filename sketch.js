var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redBase,redSide1,redSide2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redBase=createSprite(400,645,200,20);
	redBase.shapeColor=color("red");

	redSide1=createSprite(310,600,20,100);
	redSide1.shapeColor=color("red");

	redSide2=createSprite(490,600,20,100);
	redSide2.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	keyPressed();	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 redBase = Bodies.rectangle(400,645,200,20,{isStatic:true});
	 World.add(world,redBase);

	 redSide1 = Bodies.rectangle(310,600,20,100,{isStatic:true});
	 World.add(world,redBase);

	 redSide2 = Bodies.rectangle(490,600,20,100,{isStatic:true});
	 World.add(world,redBase);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
Matter.Body.setStatic(packageBody,false);

    
  }
}



