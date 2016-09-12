import app from './app';
import login from './component/login/login.js'

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });
});
// //just forget about it
// describe('login', function() {
//   var $httpBackend;
//   beforeEach(inject(($injector)=> {
//     $httpBackend = $injector.get('$httpBackend');
//     $httpBackend.whenPost('/login', '{"username":"admin","password":"admin"}').respond({
//       loggedUsername : 'admin'
//     });
//   }));
//   afterEach(() => {
//   })
//   it('loginService should exist', inject((authService) => {
//     expect(authService).to.exist;
//   }));
//   it('loginService', inject((authService, ) => {
//     var scope = {};
//     authService.login('admin', 'admin').success(function (data, status, headers, config) {
//       $scope.user = data;
//     })
//     $httpBackend.flush();
//     expect($scope.user).toEqual({ username: 'admin' })
//   }));
// });
