import IconModule from './icon'
import IconController from './icon.controller';
import IconComponent from './icon.component';
import IconTemplate from './icon.html';

describe('Icon', () => {
  let $rootScope, makeController;

  beforeEach(window.module(IconModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new IconController();
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
      expect(IconTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = IconComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(IconTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(IconController);
      });
  });
});
