var hour;
var minute
var second


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr=hour();
  mn=minute();
  sc=second();
  angleMode(DEGREES);
  scAngle=map(0,60,0,360)

}

function draw() {
  background(255,255,255);
  storke(255,0,0);
  strokeweight(7);
  line(0,100,0,0);
  drawSprites();
}