class Requester {
	constructor(pos, carSpeed) {
		this.pos = pos;
		this.NUM_FRAMES = Math.floor((ROAD_WIDTH+CAR_LENGTH)/carSpeed);
		this.GRID_WIDTH = 16;
		this.futureArr = this.initZeros(this.NUM_FRAMES, this.GRID_WIDTH, this.GRID_WIDTH);
		this.futureRequests = [];
		this.CAR_BUFFER = 4;
	}
	getPosition() {
		return this.pos;
	}

	fillFutureArr(futurePositions, car){
		for (let i=0; i<futurePositions.length; i++) {
			let indeces = this.carPosToGridIndeces(futurePositions[i][0], futurePositions[i][1], car);
			for (let j=0; j<indeces.length; j++) {
				let index = indeces[j];
				if (index) {
					this.futureArr[i][index[0]][index[1]] = 1;
				}
			}
		}
	}

	request(car, futurePositions) {
		if (this.checkRoute(futurePositions, car)) {
			this.fillFutureArr(futurePositions, car);
			car.go();
			return true;
		} else {
			this.futureRequests.push({"car": car, "futurePositions": futurePositions});
			return false;
		}
	}

	checkRoute(futurePositions, car) {
		for (let i=0; i<futurePositions.length; i++) {
			let indeces = this.carPosToGridIndeces(futurePositions[i][0], futurePositions[i][1], car);
			for (let j=0; j<indeces.length; j++) {
				let index = indeces[j];
				if (index && this.futureArr[i][index[0]][index[1]]) {
					return false;
				}
			}
		}
		return true;
	}

	initZeros(xDim, yDim, zDim) {
		let arr = [];
		for (let i=0; i<xDim; i++) {
			let yArr = []
			for (let j=0; j<yDim; j++) {
				let zArr = [];
				for (let k=0; k<zDim; k++) {
					zArr.push(0)
				}
				yArr.push(zArr);
			}
			arr.push(yArr);
		}
		return arr;
	}

	smooth(a, b) {
		let indeces = []
		for (let i = a[0]; i <= b[0] && i < this.GRID_WIDTH; i++) {
			for (let j = a[1]; j <= b[1] && i < this.GRID_WIDTH; j++) {
				indeces.push([i, j])
			}
		}
		return indeces;
	}

	carPosToGridIndex(x, y) {
		let xIndex, yIndex;
		xIndex = min(Math.floor((x - this.pos.left)/(ROAD_WIDTH/this.GRID_WIDTH)), this.GRID_WIDTH-1);
		xIndex = max(xIndex, 0);
		yIndex = min(Math.floor((y - this.pos.top)/(ROAD_WIDTH/this.GRID_WIDTH)), this.GRID_WIDTH-1);
		yIndex = max(yIndex, 0);

		return [yIndex, xIndex];
	}

	carPosToGridIndeces(x, y, car) {
		let maxX, maxY;
		if (car.getDirection()[0]) {
			// car moving east/west
			maxX = x + CAR_LENGTH;
			maxY = y + CAR_WIDTH;
		} else {
			// north/south
			maxX = x + CAR_WIDTH;
			maxY = y + CAR_LENGTH ;
		}
		return this.smooth(this.carPosToGridIndex(x - this.CAR_BUFFER/2, y - this.CAR_BUFFER/2),
					  	   this.carPosToGridIndex(maxX + this.CAR_BUFFER/2, maxY + this.CAR_BUFFER/2))
	}

	shiftArr() {
		let yArr = [];
		for (let j=0; j<this.GRID_WIDTH; j++) {
			let zArr = [];
			for (let k=0; k<this.GRID_WIDTH; k++) {
				zArr.push(0)
			}
			yArr.push(zArr);
		}

		this.futureArr.push(yArr);
		this.futureArr.shift();
	}

	advanceFrame() {
		this.shiftArr();
		let i=0;
		while (i<this.futureRequests.length) {
			if (this.checkRoute(this.futureRequests[i]["futurePositions"], this.futureRequests[i]["car"])) {
				this.fillFutureArr(this.futureRequests[i]["futurePositions"], this.futureRequests[i]["car"]);
				this.futureRequests[i]["car"].go();
				this.futureRequests.splice(i,1);
			} else {
				i++;
			}
		}
		
	}
}

// coordinate system wrong