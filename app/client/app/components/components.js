import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Car from './car/car';
import Midur from './midur/midur';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Car,
  Midur
])

.name;

export default componentModule;
