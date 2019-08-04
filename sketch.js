let myCar;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  myCar = new Car(50, 400, [0,1], 4);
}

function draw() {
  ellipse(50, get_y(50), 80, 80);
  myCar.drive();
  myCar.display();
}