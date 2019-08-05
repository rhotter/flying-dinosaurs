
let emitters = [];
const dirs = ['N','S','E', 'W'];
let requester = new Requester(WIDTH/2 - ROAD_WIDTH/2, WIDTH/2 + ROAD_WIDTH/2, HEIGHT/2 - ROAD_WIDTH/2, HEIGHT/2 + ROAD_WIDTH/2);

function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < dirs.length; i++) {
    emitters.push(new Emitter(dirs[i], requester));
  }

}

function draw() {
  drawRoads();
  for (let i=0; i<dirs.length; i++) {
    emitters[i].randomEmit();
    emitters[i].driveAll();
    emitters[i].atIntersection();
    emitters[i].displayAll();
  }
  crashCheck(emitters);
}
