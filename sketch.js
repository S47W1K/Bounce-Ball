const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    var ball_options={
        restitution: 0.7
    }
    ball = Bodies.circle(400,100,38,ball_options)
    World.add(world,ball)

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,38,38)
}