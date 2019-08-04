class Car
{
  constructor(x, y, dir, speed) {
    this.xpos = x;
    this.ypos = get_y(y);
    //this.direction = dir;
    this.direction = [1,0];
    //this.ypos = random(height);
    this.speed = speed;
    this.c = color(153, 102, 51);
  }
  
 
  // // drive method
  drive()
  {
    if(this.xpos > WIDTH)
    {
      this.xpos = 0;
    }
    this.xpos = this.xpos + this.speed * this.direction[0];        
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
 
  // display method
  display()
  {
    // body of the car
    fill(this.c);
    rectMode(CORNER);
    rect(this.xpos, this.ypos, 100, 50);
  }
}