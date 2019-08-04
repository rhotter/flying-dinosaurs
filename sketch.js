let myCar;
function setup() {
  createCanvas(WIDTH, HEIGHT);
//  myCar = new Car(50, 397, [0,1], 4);
	myCar = new Car('N', [0,0], 4);
}

function draw() {
  drawRoads();
  myCar.drive();
  myCar.display();
}