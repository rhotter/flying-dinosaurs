let myCar;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  myCar = new Car(50, 400, [0,1], 4);
}

function draw() {
  drawRoads();
  myCar.drive();
  myCar.display();
}