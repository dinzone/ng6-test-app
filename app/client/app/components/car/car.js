import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carComponent from './car.component';
import CarService from './services/carService';

let carModule = angular.module('car', [
	uiRouter
])

.service({ CarService })

.config(($stateProvider) => {
	"ngInject";
	$stateProvider
		.state('car', {
			url: '/car',
			template: '<car></car>'
		})
})

.component('car', carComponent)


.name;

export default carModule;
