var bullet, wall;
var thickness, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 50, 10);
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
}
function hasCollided(bullet1, wall1)
{
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
  }
    