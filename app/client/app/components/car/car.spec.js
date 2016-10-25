import CarModule from './car'
import CarController from './car.controller';
import CarComponent from './car.component';
import CarTemplate from './car.html';

describe('Car', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CarController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CarController);
      });
  });
});
