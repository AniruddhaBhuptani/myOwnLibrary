var f,m; 





function setup() {


  createCanvas(1200,800);
   
  f=createSprite(400,100,80,100);
  f.shapeColor="red";
  m=createSprite(400,800,50,60);
  m.shapeColor="red";

  m.debug=true
  f.debug=true

  m.velocityY=-5;
  f.velocityY=5;
}

function draw() {
  background(255,255,255);  

 // m.x=World.mouseX;
  //m.y=World.mouseY;

console.log(m.x-f.x);
  if (m.x-f.x<m.width/2+f.width/2 && f.x-m.x<m.width/2+f.width/2 
    && m.y-f.y<m.width/2+f.width/2 && f.y-m.y<m.width/2+f.width/2 ){

    f.shapeColor="green";
    m.shapeColor="green";
  }
else
{

  f.shapeColor="red";
  m.shapeColor="red";

}


bounceoff(m,f);


  drawSprites();
}



