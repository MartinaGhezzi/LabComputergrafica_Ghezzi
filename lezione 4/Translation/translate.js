function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  strokeWeight(1);
  fill("orange");
  translate(mouseX, mouseY);
  rect(50, 50, 100, 50);
  //--> 50+100, 50+100
  fill("purple");
  strokeWeight(5);
  rect(0, 0, 200, 30);
  point(0,0);
  point(50,50);
}
