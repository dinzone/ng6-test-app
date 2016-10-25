import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Footer from './footer/footer';
import Icon from './icon/icon';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Footer,
  Icon
])

.name;

export default commonModule;
