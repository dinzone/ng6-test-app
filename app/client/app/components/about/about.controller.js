class AboutController {
	constructor($state) {
		"ngInject";
		this.name = 'about';
		this.currentNum = 5;
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
		$state.go('.', { num: this.currentNum }, { notify: false });
		conole.log(this.currentNum);
	}
}

export default AboutController;
