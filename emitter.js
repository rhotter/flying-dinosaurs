class Emitter {
    constructor(dir) {
        this.direction = dir;
        this.cars = [];
        this.waitTime = this.randomWaitTime();
        this.carSpeed = 4;
        this.MIN_DIST_BETWEEN_CARS = 5;
        this.MIN_WAIT_TIME = CAR_LENGTH/this.carSpeed + 5;
    }
    randomEmit() {
        if (this.waitTime >= this.MIN_WAIT_TIME) {
            this.cars.push(new Car(this.direction, this.carSpeed));
            this.waitTime = this.randomWaitTime();
        }
        this.waitTime++;
    }

    driveAll() {
        for (let i=this.cars.length-1; i >= 0; i--) {
            this.cars[i].drive();
            if (this.cars[i].isOutOfRange()) {
                this.cars.splice(i,1);
            }
        }
    }

    displayAll() {
        for (let i=0; i<this.cars.length; i++) {
            this.cars[i].display();
        }
    }

    randomWaitTime() {
        return -int(random(0,50));
    }
}