var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green";
  fixedrect=createSprite(200,200,50,50);
  fixedrect.shapeColor = "green";
}

function draw() {
  background("yellow");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x-fixedrect.x === fixedrect.width/2+movingrect.width/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }

  drawSprites();
}