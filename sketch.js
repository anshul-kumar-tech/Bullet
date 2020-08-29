var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83)
  bullet.velocityX = speed;
  bullet.shapeColor = 'white';
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = 'brown';

}

function draw() {
  background(255,255,255);
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10){
      bullet.shapeColor = color(255,0,0);
    }
    if(deformation<10){
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function collided(object1,object2){
object1r = object1.x-object1.width;
object2l = object2.x;
if(object1r>=object2l){
  return true;
}
return false;
}