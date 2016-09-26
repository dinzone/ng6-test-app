import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
	uiRouter
])

.config(($stateProvider) => {
	"ngInject";
	$stateProvider
		.state('about', {
			url: '/about',
			component: 'about'
		})
		.state('about.list', {
			url: '/:num',
			template: require('./nested/list/list.html'),
			controller: function($stateParams) {
				this.name = 'list';
				this.num = $stateParams.num;
			},
			controllerAs: 'vm'
		});
})

.component('about', aboutComponent)

.name;

export default aboutModule;
