const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world
var button1
var chain1, chain2, chain3, chain4, chain5

var ground,ball,ball2,ball3,ball4,ball5
// var angle=120


function setup() {
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;

  // we are using p5.dom.min.js
  // button1= createImg("up.png")
  // button1.size(50,50)
  // button1.position(20,30)
  // button1.mouseClicked(vforce)

  // Matter.Bodies.rectangle(x, y, width, height, [options])
  var ground_options={
    isStatic:true
  }
  ground= Bodies.rectangle(300,365,600,10,ground_options)
  toprect = Bodies.rectangle(300,100,5,10,ground_options)
  World.add(world,ground)
  World.add(world,toprect)


  var ball_options={
    restitution:0.95,
    // frictionAir:0.01
    density:0.2
  }
  ball= Bodies.circle(200,300,10,ball_options)
  ball2= Bodies.circle(250,300,10,ball_options)
  ball3= Bodies.circle(300,300,10,ball_options)
  ball4= Bodies.circle(350,300,10,ball_options)
  ball5= Bodies.circle(400,300,10,ball_options)

  World.add(world, ball)
  World.add(world, ball2)
  World.add(world, ball3)
  World.add(world, ball4)
  World.add(world, ball5)

  // // Chain1
  chain1 = Constraint.create({
    length:250,
    stiffness:0.2,
    pointA:{x:250,y:100},
    bodyB:ball
  })


  chain2 = Constraint.create({
    length:250,
    stiffness:0.2,
    pointB:{x:270,y:100},
    bodyA: ball2
  })

  chain3 = Constraint.create({
    length:250,
    stiffness:0.2,
    pointA:{x:290,y:100},
    bodyB: ball3
  })

  chain4 = Constraint.create({
    length:250,
    stiffness:0.2,
    pointB:{x:310,y:100},
    bodyA: ball4
  })
  chain5 = Constraint.create({
    length:250,
    stiffness:0.2,
    pointA:{x:330,y:100},
    bodyB: ball5
  })

  World.add(world, chain1)
  World.add(world, chain2)
  World.add(world, chain3)
  World.add(world, chain4)
  World.add(world, chain5)

  ellipseMode(RADIUS)
  rectMode(CENTER)
  
}


function draw() {
  background(51);
  Engine.update(engine);

  // using p5 library codes to display
  rect(ground.position.x, ground.position.y, 600,10)
  rect(toprect.position.x, toprect.position.y, 250,20)
  ellipse(ball.position.x, ball.position.y,10)
  ellipse(ball2.position.x, ball2.position.y,10)
  ellipse(ball3.position.x, ball3.position.y,10)
  ellipse(ball4.position.x, ball4.position.y,10)
  ellipse(ball5.position.x, ball5.position.y,10)



  // Displaying Chain1
  // line(x1,y1,x2,y2)
  push()
  stroke("red")
  strokeWeight(2)
  line(chain1.pointA.x, chain1.pointA.y, ball.position.x, ball.position.y)
  pop()

  push()
  stroke("blue")
  strokeWeight(2)
  line(chain2.pointB.x, chain2.pointB.y, ball2.position.x, ball2.position.y)
  pop()

  push()
  stroke("green")
  strokeWeight(2)
  line(chain3.pointA.x,chain3.pointA.y, ball3.position.x,ball3.position.y)
  pop()

  push()
  stroke("Yellow")
  strokeWeight(2)
  line(chain4.pointB.x,chain4.pointB.y, ball4.position.x,ball4.position.y)
  pop()

  push()
  stroke("Orange")
  strokeWeight(2)
  line(chain5.pointA.x,chain5.pointA.y, ball5.position.x, ball5.position.y)
  pop()

}

function keyPressed(){
  if(keyCode === 32){
    Body.applyForce(ball,{x:0,y:0},{x:0.-0.10,y:0})
  }
}
