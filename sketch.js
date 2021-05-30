const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function preload(){

}
function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("lightgrey");

  textSize(18);
  text("Score : "+score,20,40);
  fill("white");

  textSize(25);
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 100 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  text(" 200 ", 800, 550);
  text(" 100 ", 880, 550);
  text(" 100 ", 960, 550);
  text(" 100 ", 1040, 550);
  text(" 100 ", 1120, 550);
  text(" 500 ", 1200, 550);
  text(" 500 ", 1280, 550);
  text(" 500 ", 1360, 550);
  text(" 500 ", 1440, 550);

  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    textSize(90);
    text("GameOver", 150, 300);
  }


  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  scoringSound.play();

                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;

                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 880 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;

                    if ( count>= 5)  gameState ="end";

              }      
              else if (particle.body.position.x < 960 && particle.body.position.x > 1200 )
              {
                    score = score + 100;
                    particle=null;

                    if ( count>= 5)  gameState ="end";

              }      
              else if (particle.body.position.x < 1200 && particle.body.position.x > 1440 )
              {
                    score = score + 500;
                    particle=null;

                    if ( count>= 5)  gameState ="end";

              }    
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}