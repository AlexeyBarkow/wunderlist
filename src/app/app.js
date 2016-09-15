import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.router.js';
import header from './component/header/header.js';
import defaultMenu from './component/default-menu/default-menu.js';
import notFound from './component/not-found/not-found.js'
import footer from './component/footer/footer.js';
import '../style/less-app.less';

import ngMockE2E from 'angular-mocks';

//for development mode only
// import mockBackend from './mocks/app-mockbackend.js';

// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppCtrl',
//     controllerAs: 'app'
//   }
// };

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

const MODULE_NAME = 'app';

let app = angular.module(MODULE_NAME, [uirouter, 'ngMockE2E', header, footer, defaultMenu, notFound])
  .config(routing)
  .directive('app', function () {
    return {
      replace: true,
      template: require('./app.html'),
      controller: 'AppCtrl',
      controllerAs: 'app'
    }
  })
  .controller('AppCtrl', ['$scope', '$http', 'authService', ($scope, $http, authService) => {
    // $scope.whoIsLogged = authService.user;
    // console.log(authService.user)
    // $scope.$watch(authService.user, function (newVal, old) {
    //   console.log(newVal, old)
    //   $scope.whoIsLogged = newVal;
    // }, true);
    // $scope.url = 'https://github.com/preboot/angular-webpack';
    // $scope.post = function () {
    //   $http.post('/login', {
    //     username: 'admin',
    //     password: '1243'
    //   })
    // }
  }])
//for development mode only

if (process.env.npm_lifecycle_event !== 'build') {
  let mockBackend = require('./mocks/app-mockbackend.js');
  app.run(mockBackend.default);
}
export default MODULE_NAME;
