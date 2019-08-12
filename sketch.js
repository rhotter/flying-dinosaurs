
let emitters = [];
const dirs = ['N','S','E','W'];

let requester = new Requester({
    "left": WIDTH/2 - ROAD_WIDTH/2,
    "right": WIDTH/2 + ROAD_WIDTH/2,
    "top": HEIGHT/2 - ROAD_WIDTH/2,
    "bottom": HEIGHT/2 + ROAD_WIDTH/2
  }, MAX_SPEED);

function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < dirs.length; i++) {
    emitters.push(new Emitter(dirs[i], requester, MAX_SPEED));
  }
  frameRate(30)
}

function draw() {
  drawRoads();
  requester.advanceFrame();
  for (let i=0; i<dirs.length; i++) {
    emitters[i].randomEmit();
    emitters[i].driveAll();
    emitters[i].atIntersection();
    emitters[i].checkForSafetyDistance();
    emitters[i].displayAll();
  }
  crashCheck(emitters);
}
