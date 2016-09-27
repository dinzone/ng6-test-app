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
			template: '<about></about>'
		})
		.state('about.list', {
			url: '/:num',
			template: require('./nested/list/list.html'),
			controller: function($stateParams, $location) {
				this.name = 'list';
				this.num = $stateParams.num;
				this.publish = function() {
					var tmp = $location.path().split('/');
					if (tmp.lenght < 3) {
						tmp.push('publish');
					} else {
						tmp[3] = 'publish';
					}
					$location.path(tmp.join('/'));
				}
			},
			controllerAs: 'vm'
		})
		.state('about.list.publish', {
			url: '/publish',
			template: '<h1>{{vmc.toPublish}}</h1>',
			controller: function($stateParams) {
				this.toPublish = $stateParams.num;
			},
			controllerAs: 'vmc'
		});
})

.component('about', aboutComponent)

.name;

export default aboutModule;
