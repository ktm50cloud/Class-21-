var fixedRect, movingRect;
var fixed2rect,moving2rect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixed2rect = createSprite(100, 400, 50, 80);
  fixed2rect.shapeColor = "green";
  fixed2rect.debug = true;
  moving2rect = createSprite(800, 400,80,30);
  moving2rect.shapeColor = "green";
  moving2rect.debug = true;

  moving2rect.velocityX= -5;
  fixed2rect.velocityX=+5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

KTM(moving2rect,fixed2rect);
 
  drawSprites();
}
