import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.router.js';
import header from './component/header/header.js';
import defaultMenu from './component/default-menu/default-menu.js';
import notFound from './component/not-found/not-found.js'
import footer from './component/footer/footer.js';
import '../style/less-app.less';

import ngMockE2E from 'angular-mocks';
import ngMaterial from 'angular-material';


const MODULE_NAME = 'app';
// console.log('ng-m', ngMaterial, ngMockE2E)
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

  }])

//for development mode only

if (process.env.npm_lifecycle_event !== 'build') {
  let mockBackend = require('./mocks/app-mockbackend.js');
  app.run(mockBackend.default);
}
export default MODULE_NAME;
