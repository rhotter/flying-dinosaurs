class Requester {
	constructor(left, right, bottom, top) {
		this.pos = {
			"left": left,
			"right": right,
			"top": top,
			"bottom": bottom
		}
	}
	getPosition() {
		return this.pos;
	}
}