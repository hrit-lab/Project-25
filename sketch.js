
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObject;
//var trashbin,trashbinImg;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//trashbin = createSprite(1200,530,200,213)
	//trashbin.addImage(trashbinImg);
	//trashbin.scale = 0.9;

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  // drawSprites();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}

}
