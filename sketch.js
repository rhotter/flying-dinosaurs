let emitters = [];
dirs = ['E', 'W'];
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
    emitters[i].displayAll();
  }
}
// queueing theory