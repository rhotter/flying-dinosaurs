const CAR_WIDTH = 25;
const CAR_LENGTH = 50;

class Car {
  constructor(pos, speed) {
    this.POS_DICT = {
      'N': [ WIDTH/2 - DOT_WIDTH/2 - ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2 - CAR_WIDTH, get_y(HEIGHT)],
      'S': [ WIDTH/2 + DOT_WIDTH/2 +((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2, get_y(CAR_LENGTH)],
      'E': [0, get_y(HEIGHT/2 - DOT_WIDTH/2 - ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2)],
      'W': [WIDTH - CAR_LENGTH, get_y(HEIGHT/2 + DOT_WIDTH/2 + ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH) + CAR_WIDTH/2)]
    }
    this.SIZE_DICT = {
      'E': [CAR_WIDTH, CAR_LENGTH],
      'W': [CAR_WIDTH, CAR_LENGTH],
      'N': [CAR_LENGTH, CAR_WIDTH],
      'S': [CAR_LENGTH, CAR_WIDTH],
    }
    this.DIR_DICT = {
      'E': [1,0],
      'W': [-1, 0],
      'S': [0,1],
      'N': [0,-1]
    }

    this.xpos = this.POS_DICT[pos][0];
    this.ypos = this.POS_DICT[pos][1];
    this.direction = this.DIR_DICT[pos];
    //this.ypos = random(height);
    this.speed = speed;
    this.color = color(255,180,0);
    this.width = this.SIZE_DICT[pos][0];
    this.length = this.SIZE_DICT[pos][1];

  }
  
  drive() {
    this.xpos += this.speed * this.direction[0];
    this.ypos += this.speed * this.direction[1];
  }

  isOutOfRange() {
    if (this.xpos > WIDTH + CAR_LENGTH || this.xpos < -CAR_LENGTH
      || this.ypos > HEIGHT + CAR_LENGTH || this.ypos < -CAR_LENGTH) {
        return true;
      }
    return false;
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