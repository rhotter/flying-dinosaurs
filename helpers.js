const ROAD_WIDTH = 120;
const DOT_SPACING = 10;
const DOT_LENGTH = 10;
const DOT_WIDTH = 5;
const WIDTH = 1200;
const HEIGHT = 700;

function get_y(y_) {
    return HEIGHT - y_;
}

function drawRoads() {
    background(40);
    fill(100);
    strokeWeight(0)
    // horizontal road
    rect(WIDTH/2 - ROAD_WIDTH/2, 0, ROAD_WIDTH, HEIGHT);

    // vertical road
    rect(0, HEIGHT/2 - ROAD_WIDTH/2, WIDTH, ROAD_WIDTH);

    // draw dots
    let dotXPosition = 5;
    fill(255,180,0);
    while (dotXPosition < WIDTH) {
        rect(dotXPosition, HEIGHT/2 - DOT_WIDTH/2, DOT_LENGTH, DOT_WIDTH);
        dotXPosition += DOT_LENGTH + DOT_SPACING;
    }

    let dotYPosition = 5;
    while (dotYPosition < HEIGHT) {
        rect(WIDTH/2 - DOT_WIDTH/2, dotYPosition, DOT_WIDTH, DOT_LENGTH);
        dotYPosition += DOT_LENGTH + DOT_SPACING;
    }
}

function intersect(a, b) {
  aPos = a.getPosition();
  bPos = b.getPosition();
  return (aPos.left <= bPos.right &&
          bPos.left <= aPos.right &&
          aPos.top <= bPos.bottom &&
          bPos.top <= aPos.bottom)
}

function intersectArr(arr1, arr2) {
	for (let i=0; i<arr1.length; i++){
		for (let j=0; j<arr2.length; j++){
			if (intersect(arr1[i], arr2[j])) {
				arr1[i].color = color(255,0,0);
				arr2[j].color = color(255,0,0);
			}
		}
	}
}

function crashCheck(emitters) {
  intersectArr(emitters[0].cars.concat(emitters[1].cars), emitters[2].cars.concat(emitters[3].cars));
}





