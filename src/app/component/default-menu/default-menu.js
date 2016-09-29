import angular from 'angular';
import listView from '../list-view/list-view.js';
import './default-menu.less'
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
      link: function (scope, elem, attrs) {
        // console.log('reinit')
        // console.log(attrs)
        // scope.queryParams = {
        //   start : 0,
        //   size : 10
        // };
        scope.$watch(function () {
          return scope.showCompleted;
        }, function (newVal) {
          console.log(newVal);
        })
        scope.user = authService.getUser();
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
