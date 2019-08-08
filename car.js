const CAR_WIDTH = 25;
const CAR_LENGTH = 50;

class Car {
  constructor(source, speed) {
    this.POS_DICT = {
      'N': [ WIDTH/2 - DOT_WIDTH/2 - ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2 - CAR_WIDTH, get_y(HEIGHT)],
      'S': [ WIDTH/2 + DOT_WIDTH/2 +((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2, get_y(CAR_LENGTH)],
      'E': [-CAR_LENGTH, get_y(HEIGHT/2 - DOT_WIDTH/2 - ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH)/2)],
      'W': [WIDTH, get_y(HEIGHT/2 + DOT_WIDTH/2 + ((ROAD_WIDTH - DOT_WIDTH)/2 - CAR_WIDTH) + CAR_WIDTH/2)]
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
      'N': [0,1],
      'S': [0,-1]
    }
    this.xpos = this.POS_DICT[source][0];
    this.ypos = this.POS_DICT[source][1];
    this.direction = this.DIR_DICT[source];
    this.MAX_SPEED = speed;
    //this.ypos = random(height);
    this.speed = this.MAX_SPEED;
    this.color = color(255,180,0);
    this.height = this.SIZE_DICT[source][0];
    this.width = this.SIZE_DICT[source][1];

    this.hasRequestedReservation = false;

  }

  getDirection() {
    return this.direction;
  }
  
  stop() {
    this.speed = 0;
  }
  go() {
    this.speed = this.MAX_SPEED;
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

  isAtIntersection(requester) {
    return intersect(requester, this);
  }
  getPosition() {
    return {
      "left": this.xpos,
      "right": this.xpos + this.width,
      "top": this.ypos,
      "bottom": this.ypos + this.height
    }
  }
 
  display() {
    // body of the car
    fill(this.color);
    rectMode(CORNER);
    rect(this.xpos, this.ypos, this.width, this.height);
  }

  requestReservation(requester) {
    this.hasRequestedReservation = true;
    let futurePositions = this.calculateFuturePositions();
    let reservationResponse = requester.request(this, futurePositions);
    return reservationResponse;
  }

  calculateFuturePositions() {
    let positions = [];
    let numFrames = Math.floor((ROAD_WIDTH+CAR_LENGTH)/this.speed);
    
    let futureXPos = this.xpos;
    let futureYPos = this.ypos;
    for (let i=0; i<numFrames; i++) {
      futureXPos += this.direction[0]*this.speed;
      futureYPos += this.direction[1]*this.speed;
      positions.push([futureXPos, futureYPos]);
    }
    return positions;
  }

  setColor(color) {
    this.color = color
  }
}