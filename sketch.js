
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint;

var boy1,boy2
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8
//var gameState = "onSling";
var slingshot
var launchingForce=10
//var stone2  = []
function preload()
{
boy1 = loadImage("boy.png")
tree=loadImage("tree.png");
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy2 = createSprite(130,530,50,50)
boy2.addImage(boy1)
boy2.scale = 0.1
ground = new Ground(200,600,2600,20);	
stone1 = new Stone(90,460,30)
slingshot = new SlingShot(stone1.body,{x:90, y:460});

mango1=new mango(600,240,30);
mango2=new mango(700,260,30);
mango3=new mango(800,220,30);
mango4=new mango(850,270,30);
mango5=new mango(750,200,30);
mango6=new mango(750,140,30);
mango7=new mango(770,300,30);
mango8=new mango(680,170,30);
mango9=new mango(640,300,30);
// World.add(world,tree);
//c1 = Bodies.rectangle(750,500,20,300,{isStatic:true,restitution:0});
//World.add(world, c1);



Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  image(tree,550,100,400,500);

  

  mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
  ground.display()
 stone1.display() 
 slingshot.display()
 
 detectollision(stone1,mango1)
  detectollision(stone1,mango2)
  detectollision(stone1,mango3)
  detectollision(stone1,mango4)
  detectollision(stone1,mango5)
  detectollision(stone1,mango6)
  detectollision(stone1,mango7)
  detectollision(stone1,mango8)
  detectollision(stone1,mango9)

  drawSprites();

}
function mouseDragged(){
	
		 Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
		 
	 
 }
 
 
 function mouseReleased(){
	 slingshot.fly();
	//stone1.pop(); 
	
 }
 
 function keyPressed(){
	 if(keyCode === 32){
		
		slingshot.attach(stone1.body);
 Matter.Body.setPosition( stone1.body,{x:200,y:50})
		 
 }
}
 function detectollision(lstone1,lmango){
	mangoBodyPosition=lmango.body.position;
	stone1BodyPosition=lstone1.body.position;

	var distance=dist(stone1BodyPosition.x,stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<lmango.r+lstone1.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

 }

