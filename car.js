const CAR_WIDTH = 25;
const CAR_LENGTH = 50;

const POS_DICT = {
  'N': [ WIDTH/2 - DOT_WIDTH/2 - ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2 - CAR_WIDTH, get_y(HEIGHT)],
  'S': [ WIDTH/2 + DOT_WIDTH/2 +((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2, get_y(CAR_LENGTH)],
  'E': [0, get_y(HEIGHT/2 - DOT_WIDTH/2 - ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2)],
  'W': [WIDTH - CAR_LENGTH, get_y(HEIGHT/2 + DOT_WIDTH/2 + ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH) + CAR_WIDTH/2)]

}
const SIZE_DICT = {
  'E': [CAR_WIDTH, CAR_LENGTH],
  'W': [CAR_WIDTH, CAR_LENGTH],
  'N': [CAR_LENGTH, CAR_WIDTH],
  'S': [CAR_LENGTH, CAR_WIDTH],
}
class Car {
  constructor(pos, dir, speed) {
    this.xpos = POS_DICT[pos][0];
    this.ypos = POS_DICT[pos][1];
    this.direction = dir;
    //this.ypos = random(height);
    this.speed = speed;
    this.color = color(255,180,0);
    this.width = SIZE_DICT[pos][0];
    this.length = SIZE_DICT[pos][1];

  }
  
  drive() {
    this.xpos = this.xpos % WIDTH;
    this.xpos += this.speed * this.direction[0];
    this.ypos += this.speed * this.direction[1];
  }
 
  // // brake method
  // this.brake = function()
  // {
  //   if(this.speed > 0)
  //   {
  //     this.speed = this.speed - 0.3;
  //   } else {
  //     this.speed = 0;
  //   }        
  // }
 
  display() {
    // body of the car
    fill(this.color);
    rectMode(CORNER);
    rect(this.xpos, this.ypos, this.length, this.width);
  }
}