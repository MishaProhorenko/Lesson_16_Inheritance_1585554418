'use strict';

class Honda {
	constructor(modelName, color) {
		this.modelName = modelName;
		this.color = color;
		this.isDisabled = false;
	}

	// static checkColor(car) {
	// 	if (car.color === 'blue') return true
	// 	return false;
	// }

	// static checkEngineVolume(car) {
	// 	if (car.engineVolume > 2.4) return true
	// 	return false;
	// }

	// checkActiveCar() {
	// 	if (this.isDisabled) {
	// 		console.log('wrrr');
	// 	} else {
	// 		console.log('----');
	// 	}
	// }

};

class Acura extends Honda {
	constructor(modelName, color, engineVolume) {
		super(modelName, color)
		this.engineVolume = engineVolume;
	}
};

class Audi extends Acura {
	constructor(modelName, color, engineVolume, bodyType) {
		super(modelName, color, engineVolume)
		this.bodyType = bodyType;
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
