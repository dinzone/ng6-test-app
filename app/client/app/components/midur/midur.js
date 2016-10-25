import angular from 'angular';
import uiRouter from 'angular-ui-router';
import midurComponent from './midur.component';
import MidurService from './services/midurService.service';

let midurModule = angular.module('midur', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('home.midur', {
      url: '/midur',
      template: '<midur></midur>'
    });
})

.component('midur', midurComponent)

.service({MidurService})

.name;

export default midurModule;
