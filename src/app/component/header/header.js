import angular from 'angular';
import login from '../login/login.js';
import './header.less';
const MODULE_NAME = 'header.module';

angular.module(MODULE_NAME, [login])
  .directive('appHeader', ['authService', function (auth) {
    return {
      restrict: 'AES',
      replace: true,
      scope: {},
      template: require('./header.template.html'),
      link: function (scope) {
        console.log(scope)
        // scope.isLoggedIn = !!auth.user;
        scope.logout = auth.logout;
        scope.user = auth.user;
        scope.$watch(function () {
          return auth.user
        }, function (newVal){
          console.log(newVal)
        });
        // scope.user
      }
    }
  }]);

export default MODULE_NAME;
