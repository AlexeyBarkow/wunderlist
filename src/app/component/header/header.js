import angular from 'angular';
import login from '../login/login.js';
import './header.less';
const MODULE_NAME = 'header.module';

angular.module(MODULE_NAME, [login])
  .directive('appHeader', function () {
    return {
      restrict: 'AES',
      replace: true,
      scope: {},
      template: require('./header.template.html')
    }
  });

export default MODULE_NAME;
