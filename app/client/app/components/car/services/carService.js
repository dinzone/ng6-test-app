export default class CarService {
	constructor() {
		this.cars = [{
			id: 1,
			company: 'ford',
			model: 'focus RS',
			wheelDrive: 'AWD',
			hp: 350,
			tourqe: 350,
			engine: 2.3
		}, {
			id: 2,
			company: 'mitsubishi',
			model: 'lancer evo 10',
			wheelDrive: 'AWD',
			hp: 400,
			tourqe: 250,
		}, {
			id: 3,
			company: 'volkswagen',
			model: 'golf R',
			wheelDrive: 'AWD',
			hp: 290,
			tourqe: 290,
		}, {
			id: 4,
			company: 'honda',
			model: 'civic type R',
			wheelDrive: 'FF',
			hp: 300,
			tourqe: 300,
		}];
	}

	getCarById(id) {
		return filterArray(this.cars, 'id', id);
	}

	getCarByCompany(company) {
		return filterArray(this.cars, 'company', company);
	}

	getCarByModel(model) {
		return filterArray(this.cars, 'model', model);
	}

	getCarByHp(hp) {
		return filterArray(this.cars, 'hp', hp);
	}
}


function filterArray(array, property, value) {
	return array.find(function(item) {
		if (item[property] === value) {
			return true;
		}
		return false;
	});
}
