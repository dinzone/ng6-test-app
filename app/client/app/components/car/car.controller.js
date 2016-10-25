class CarController {

	constructor(CarService) {
		"ngInject";

		this.name = 'car';
		this.Service = CarService;
		this.cars = CarService.cars;
	}

	alertCar() {
		alert(JSON.stringify(this.Service.getCarById(parseInt(this.carId, 10))));
	}

	changeName(name){
		this.name = name;
	}
}

export default CarController;
