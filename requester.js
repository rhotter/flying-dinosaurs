class Requester {
	constructor(left, right, bottom, top, carSpeed) {
		this.pos = {
			"left": left,
			"right": right,
			"top": top,
			"bottom": bottom
		}
		this.NUM_FRAMES = Math.floor((ROAD_WIDTH+CAR_LENGTH)/carSpeed);
		this.GRID_WIDTH = 4
		this.futureArr = math.zeros(this.NUM_FRAMES, this.GRID_WIDTH, this.GRID_WIDTH);
		this.futureRequests = [];
	}
	getPosition() {
		return this.pos;
	}

	fillFutureArr(futurePositions){
		for (let i=0; i<futurePositions.length; i++) {
			let index = this.carPosToGridIndex(futurePositions[i][0], futurePositions[i][1]);
			// math.subset(this.futureArr, [i, index[0], index[1]], 1);
		}
	}

	request(car, futurePositions) {
		let canGo = true;
		console.log(this.futureArr)
		for (let i=0; i<futurePositions.length; i++) {
			let index = this.carPosToGridIndex(futurePositions[i][0], futurePositions[i][1]);
			if (this.futureArr.get([i, index[0], index[1]])) {
				this.futureRequests.push({"car": car, "futurePositions": futurePositions});
				canGo = false;
				break;
			}
		}
		if (canGo) {
			this.fillFutureArr(futurePositions);
			car.go();
		}
	}
	carPosToGridIndex(x, y) {
		let a =  [Math.floor((x - this.pos.left)/(ROAD_WIDTH/this.GRID_WIDTH)), Math.floor((y-this.pos.top)/(ROAD_WIDTH/this.GRID_WIDTH))];
		console.log(a)
		return a;
	}
}