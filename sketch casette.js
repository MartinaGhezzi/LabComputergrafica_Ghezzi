function setup() {
  //creates a canvas 600 pixels wide
  //and 400 pixels high
  createCanvas(600, 400);
}
function draw() {
  background("darkblue");
  fill("white")
  stroke("yellow")
  strokeWeight(10); //large outline
circle(550, 50, 100)
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 200;
  rect(0, y, 600, 200);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness

  //fagli prima senza for loop e poi col loop
  let x_casa =0;
  for(let numero_case=0; numero_case<5; numero_case++){
    fill("white");
    let house_height = 100
    rect(x_casa, y-house_height , 100, house_height);
    fill("red");
    triangle(x_casa,y-house_height, 50+x_casa, 15, 100+x_casa, 102);
    x_casa += 150
  }

  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(`${mouseX}, ${mouseY}`, 50, 50);
}
