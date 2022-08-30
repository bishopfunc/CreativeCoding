function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  stroke(random(100, 180));
  ellipse(width / 2, height / 2, random(50, 300), random(100, 300));
}