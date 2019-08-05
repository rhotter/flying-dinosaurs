class Emitter {
    constructor(dir, requester) {
        this.direction = dir;
        this.cars = [];
        this.carSpeed = 4;
        this.MIN_DIST_BETWEEN_CARS = 5;
        this.MIN_WAIT_TIME = (3/2*CAR_LENGTH)/this.carSpeed;
        this.waitTime = this.MIN_WAIT_TIME;
        this.requester = requester;
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
        return -int(random(0,150)/this.carSpeed);
    }

    atIntersection(){
        for (let i=0; i<this.cars.length; i++) {
            if (this.cars[i].isAtIntersection(this.requester) && !this.cars[i].hasRequestedReservation){
                console.log("HELLO");
                this.cars[i].color = color(0,0,0);
                reservationResponse = this.cars[i].requestReservation();
                if (!reservationResponse) {
                    this.cars[i].stop();
                }
            }
        }
    }
}



















