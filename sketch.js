const WIDTH = 1200;
const HEIGHT = 700;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
}

function draw() {
  ellipse(50, y(50), 80, 80);
}