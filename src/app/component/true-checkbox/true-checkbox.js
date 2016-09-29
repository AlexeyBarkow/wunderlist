import angular from 'angular';
import './true-checkbox.less';
const MODULE_NAME = 'trueCheckbox.directive'
angular.module(MODULE_NAME, [])
  .directive('trueCheckbox', [function () {
    return {
      restrict: 'E',
      scope: {
        checkboxState: '='
      },
      replace: true,
      transclude: true,
      template: require('./true-checkbox-template.html'),
      link: function (scope, elem) {
        console.log(elem)
      }
    }
  }]);

export default MODULE_NAME;
