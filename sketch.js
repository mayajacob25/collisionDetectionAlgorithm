
var movingRect, fixedRect


function setup() {
  createCanvas(800,400);

  movingRect = createSprite(100,100,80,50);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "yellow";
 
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    ){
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor = "cyan";
  }else{
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "yellow";
  }
  drawSprites();
}