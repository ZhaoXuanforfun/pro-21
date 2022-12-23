
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftSide,rightSide;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(200, 50, 10, ball_options);
    World.add(world, ball);

	groundObj = new Ground(width / 2, 670, width, 20);

	leftSide = new Ground(500, 600, 20, 120);
    rightSide = new Ground(650,600,20,120);

}


function draw() {
	rectMode(CENTER);
	background(0);

	Engine.run(engine);

	groundObj.show();
    leftSide.show();   
	rightSide.show(); 

	ellipse(ball.position.x,ball.position.y,30);


	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 10, y: 8 });
	}
}
