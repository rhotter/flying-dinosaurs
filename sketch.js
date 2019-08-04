let myCar;
let arr = [];
dirs = ['N', 'E', 'S', 'W'];
function setup() {
  createCanvas(WIDTH, HEIGHT);
//  myCar = new Car(50, 397, [0,1], 4);
	eCar = new Car('E', 4);
	for (let i=0; i < 10; i++){
		var car = new Car(dirs[i % 4],4);
		arr.push(car);
	}
	// wCar = new Car('W', 4);
}

function draw() {
  drawRoads();
  for (let i=0; i < 10; i++){
		arr[i].drive();
		arr[i].display();
	}
  // wCar.drive();
  // wCar.display();
}