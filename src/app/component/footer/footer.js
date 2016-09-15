import angular from 'angular';
// import login from '../login/login.js';
// import './header.less';
const MODULE_NAME = 'footer.module';

angular.module(MODULE_NAME, [])
  .directive('appFooter', function () {
    return {
      restrict: 'AES',
      replace: true,
      scope: {},
      template: require('./footer.template.html'),
      link: function (scope) {
        scope.url = 'https://github.com/AlexeyBarkow/wunderlist';
      }
    }
  });

export default MODULE_NAME;
