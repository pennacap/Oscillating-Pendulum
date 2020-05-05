const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var mousecontrol;
var fixedbody, pendullum, constraint, options;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(400,400);
  mousecontrol = false;
  fixedbody = Bodies.rectangle(200, 100, 400, 50,{isStatic: true});
  pendullum = Bodies.circle(300, 200, 25);
  options = {
    bodyA: fixedbody,
    bodyB: pendullum,
    stiffness: 0.7,
    length:200
  }
  constraint = Constraint.create(options);
  World.add(world, fixedbody);
  World.add(world, pendullum);
  World.add(world, constraint);
}

function draw() {
  background(255,255,255);  
  if (keyWentDown("space")){
    mousecontrol = !mousecontrol;
  }
  if (mousecontrol == true) {
    pendullum.position.x = mouseX;
    pendullum.position.y = mouseY;
  }
  rectMode(CENTER);
  rect(fixedbody.position.x, fixedbody.position.y, 400, 50);
  circle(pendullum.position.x, pendullum.position.y,25)
  line(fixedbody.position.x, fixedbody.position.y, pendullum.position.x, pendullum.position.y);
  Engine.update(engine);
}