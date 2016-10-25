import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iconComponent from './icon.component';

let iconModule = angular.module('icon', [
  uiRouter
])

.component('icon', iconComponent)

.name;

export default iconModule;
