let myCar;
function setup() {
  createCanvas(WIDTH, HEIGHT);
//  myCar = new Car(50, 397, [0,1], 4);
	eCar = new Car('E', [0,0], 4);
	wCar = new Car('W', [0,0], 4);
}

function draw() {
  drawRoads();
  eCar.drive();
  eCar.display();
  wCar.drive();
  wCar.display();
}