import template from './midur.html';
import controller from './midur.controller';
import './midur.styl';

let midurComponent = {
	restrict: 'E',
	bindings: {},
	template,
	controller,
	controllerAs: 'mid'
};

export default midurComponent;
