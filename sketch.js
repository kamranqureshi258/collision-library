var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1=createSprite(100,200,30,40);
  ob2=createSprite(200,200,30,40);
  ob3=createSprite(300,200,30,40);
  ob4=createSprite(400,200,30,40);
  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(ob4,movingRect))
{
  movingRect.shapeColor = "red";
  ob4.shapeColor = "red";
}
else
{
  movingRect.shapeColor = "green";
  ob4.shapeColor = "green";
}
  
 
  drawSprites();
}

