'use strict';

class Honda {
	constructor(modelName, color) {
		this._modelName = modelName;
		this.color = color;
		this.isDisabled = false;
	}


	get modelName() {
		return this._modelName;
	}

	set modelName(value) {
		this._modelName = value;
	}

	static checkColor(car) {
		if (car.color === 'blue') return true
		return false;
	}

	static checkEngineVolume(car) {
		if (car.engineVolume >= 2.2) return true
		return false;
	}

	start(){
		this.isDisabled = true;
	}
	finish(){
		this.isDisabled = false;
	}
	checkActive(){
		if(this.isDisabled) {
			console.log(`wrr`)
		} else {
			console.log(`car disabled`)
		}
	}

};

class Acura extends Honda {
	constructor(modelName, color, engineVolume) {
		super(modelName, color)
		this.engineVolume = engineVolume;
	}
	showModelCar(model){
		console.log(`Model name: ${model}`)
	}
	checkActive() {
		if (this.isDisabled) {
			super.checkActive()
			console.log(`engine volume car: ${this.engineVolume}`)
		} else {
			super.checkActive()
			console.log(`:(`)
		}
	}
};

class Audi extends Acura {
	constructor(modelName, color, engineVolume, bodyType) {
		super(modelName, color, engineVolume)
		this.bodyType = bodyType;
	}
	changeColorByCar(color){
		this.color = color;
	}
};

class Opel extends Audi {
	constructor(modelName, color, engineVolume, bodyType) {
		super(modelName, color, engineVolume, bodyType)
	}

};

let hondaCar = new Honda('Accord', 'blue');
let acuraCar = new Acura('TSX2', 'black', 2.4);
let audiCar = new Audi('A6', 'silver', 2.5, 'sedan');
let opelCar = new Opel('Zafira', 'gray', 2.2, 'minivan');

console.log(hondaCar)
console.log(acuraCar)
console.log(audiCar)
console.log(opelCar)
