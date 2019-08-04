const ROAD_WIDTH = 100;
const DOT_SPACING = 10;
const DOT_LENGTH = 10;
const DOT_WIDTH = 5;

function y(y_) {
    return HEIGHT - y_;
}

function drawRoads() {
    fill(256);
    strokeWeight(0)
    // horizontal road
    rect(WIDTH/2 - ROAD_WIDTH/2, 0, ROAD_WIDTH, HEIGHT);

    // vertical road
    rect(0, HEIGHT/2 - ROAD_WIDTH/2, WIDTH, ROAD_WIDTH);

    // draw dots
    let dotXPosition = 0;
    fill(255,180,0);
    while (dotXPosition < WIDTH) {
        rect(dotXPosition, HEIGHT/2 - DOT_WIDTH/2, DOT_LENGTH, DOT_WIDTH);
        dotXPosition += DOT_LENGTH + DOT_SPACING;
    }

    let dotYPosition = 0;
    while (dotYPosition < HEIGHT) {
        rect(WIDTH/2 - DOT_WIDTH/2, dotYPosition, DOT_WIDTH, DOT_LENGTH);
        dotYPosition += DOT_LENGTH + DOT_SPACING;
    }
}