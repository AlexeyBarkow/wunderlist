import angular from 'angular';
// import login from '../login/login.js';
// import './header.less';
const MODULE_NAME = 'default.module';

angular.module(MODULE_NAME, [])
  .directive('defaultMenu', ['authService', function (authService) {
    return {
      restrict: 'AES',
      replace: true,
      scope: {},
      template: require('./default-menu.template.html'),
      link: function (scope) {
        scope.user = authService.user;
        scope.$watch(function () {
          return authService.user;
        }, function (newVal) {
          scope.user = authService.user;
        })
        // scope.url = 'https://github.com/AlexeyBarkow/wunderlist';
      }
    }
  }]);

export default MODULE_NAME;
