
let emitters = [];
const dirs = ['N','S','E', 'W'];

let requester = new Requester();

function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < dirs.length; i++) {
    emitters.push(new Emitter(dirs[i]));
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
