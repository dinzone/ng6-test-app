import template from './car.html';
import controller from './car.controller';
import './car.styl';

let carComponent = {
	restrict: 'E',
	bindings: {},
	template,
	controller,
	controllerAs: 'cr'
};

export default carComponent;
