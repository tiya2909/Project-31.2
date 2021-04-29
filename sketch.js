const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;
var ground;
var score = 0;

function setup() {
  createCanvas(800, 800);

 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


  Engine.run(engine);

  for(var k = 0; k <width; k = k + 80 ){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));

  }

  for (var j = 75; j <=width; j=j+50) 
   {
   
      plinko.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinko.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinko.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinko.push(new Plinko(j,375));
   }

   


}

function draw() {
  background(0);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }
  for (var i = 0; i < plinko.length; i++) {
     
    plinko[i].display();
    
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  
   drawSprites();
}