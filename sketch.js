
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4,ball5,roof,r1,r2,r3,r4,r5;
var ground,d1,d2,d3;
var engine,world;



function setup() {
 createCanvas(1600, 700);
 engine = Engine.create();
  world = engine.world;
roof=new Roof(800,200,800,20);	
ball3=new Ball(800,600,80);
ball1=new Ball(640,600,80);
ball2=new Ball(720,600,80);
ball4=new Ball(880,600,80);
ball5=new Ball(960,600,80);
r1=new Rope(ball1.body,roof.body,-160,0);
r2=new Rope(ball2.body,roof.body,-80,0);
r3=new Rope(ball3.body,roof.body,0,0);
r4=new Rope(ball4.body,roof.body,+80,0);
r5=new Rope(ball5.body,roof.body,+160,0);
	Engine.run(engine);
  
}
function draw() {
  
background("white");
Engine.update(engine); 
roof.display();
ball3.display();
ball1.display(); 
ball2.display();
ball4.display();
ball5.display();
r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

}
function keyPressed() {
	 if (keyCode===UP_ARROW)
	 {
		  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:45,y:-45}) 
	} 
	}




