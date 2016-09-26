import template from './about.html';
import controller from './about.controller';
import './about.styl';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: controller
};

export default aboutComponent;
