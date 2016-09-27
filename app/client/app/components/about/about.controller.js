class AboutController {
	constructor($location, $stateParams) {
		"ngInject";
		this.name = 'about';
		if ($stateParams.num) {
			this.currentNum = $stateParams.num
		} else {
			this.currentNum = 0;
		}
		this.location = $location;
	}

	add() {
		this.currentNum++;
		this.init();
	}

	sub() {
		this.currentNum--;
		this.init();
	}

	init() {
		console.log(this.location.path());
		var tmp = this.location.path().split('/');
		if (tmp.lenght < 2) {
			tmp.push(this.currentNum);
		} else {
			tmp[2] = this.currentNum;
		}
		this.location.path(tmp.join('/'));
	}
}

export default AboutController;
