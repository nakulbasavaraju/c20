var fixedRect,movingRect;
var canvas;

function setup()
 {
  canvas=createCanvas(600,600);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;

 }

function draw() {
  background("gold");  
   movingRect.x=mouseX;
   movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2)
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else
  {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}