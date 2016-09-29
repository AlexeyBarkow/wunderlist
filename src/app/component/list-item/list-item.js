import angular from 'angular';
import trueCheckbox from '../true-checkbox/true-checkbox.js';
import './list-item.less';
const MODULE_NAME = 'listItem';

angular.module(MODULE_NAME, [trueCheckbox])
  .directive('listItem', [function () {
    return {
      restrict: 'E',
      scope: {
        listItem: '=itemAttr'
      },
      // replace: true,
      template: require('./list-item.html'),
      link: function (scope) {
        // console.log(scope);
      }
    }
  }]);

export default MODULE_NAME;
