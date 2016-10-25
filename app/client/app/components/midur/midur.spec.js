import MidurModule from './midur'
import MidurController from './midur.controller';
import MidurComponent from './midur.component';
import MidurTemplate from './midur.html';

describe('Midur', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MidurModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MidurController();
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
      expect(MidurTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MidurComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MidurTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MidurController);
      });
  });
});
