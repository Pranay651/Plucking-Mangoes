
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,tree,treeImg,mango1,mango2,mango3,mango4,boy,boyImg;
function preload()
{
	treeImg=loadImage("tree.png");
	boyImg=loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	mango1=new Mango(200,200,40,40);
	mango2=new Mango(200,200,40,40);
	mango3=new Mango(200,200,40,40);
	mango4=new Mango(200,200,40,40);
	stone=new Stone(200,300,20,20);
	boy=Bodies.rectangle(200,390,30,70,{isStatic:true});
	boy.addImage("boyImg");
	tree=Bodies.rectangle(200,390,40,100,{isStatic:true});
	tree.addImage("treeImg");
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  rectMode(CENTER);
  rect(boy.position.x,boy.position.y,30,70)
  rectMode(CENTER);
  rect(tree.position.x,tree.position.y,40,100)
  drawSprites();
 
}



