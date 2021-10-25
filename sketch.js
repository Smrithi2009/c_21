
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftside,rightside ; 

function preload()
{
	
}

function setup() {
	createCanvas(1250,600);


	engine = Engine.create();
	world = engine.world;
    var ball_options = {
		isStatic:false,
		friction:0,
		restitution:0.3,
		density:1.2
	}
  
	//Create the Bodies Here.
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,470,width,20);
	leftside = new Ground(900,400,20,120);
	rightside = new Ground(1150,400,20,120);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);
  groundObj.display();
  leftside.display();
  rightside.display();  
 
}

function keyPressed(){

if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})																																		

}

}



