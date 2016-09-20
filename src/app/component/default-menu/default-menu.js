import angular from 'angular';
import listView from '../list-view/list-view.js';
// import login from '../login/login.js';
// import './header.less';
const MODULE_NAME = 'default.module';

angular.module(MODULE_NAME, [listView])
  .directive('defaultMenu', ['authService', function (authService) {
    return {
      restrict: 'AES',
      replace: true,
      scope: {},
      template: require('./default-menu.template.html'),
      link: function (scope) {
        scope.user = authService.getUser();
        scope.queryParams = {
          start : 0,
          size : 'full'
        }
        scope.$watch(function () {
          return authService.getUser();
        }, function (newVal) {
          scope.user = authService.getUser();
        })
        // scope.url = 'https://github.com/AlexeyBarkow/wunderlist';
      }
    }
  }]);

export default MODULE_NAME;
