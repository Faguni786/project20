
var moving, fixed;

function setup() {
  createCanvas(800,400);
 moving = createSprite(400, 200, 50, 50);
 moving.shapeColor ="green";
 fixed = createSprite(200,200,50,60);
 fixed.shapeColor ="green";
}


function draw() {
  background(0); 
moving.x =mouseX;
moving.y = mouseY;

if(moving.x - fixed.x < moving.width/2 + fixed.width/2  )

  {
  moving.shapeColor ="red";
  fixed.shapeColor= "red";
}
else{
  moving.shapeColor ="green";
  fixed.shapeColor= "green";
}
  drawSprites();
}