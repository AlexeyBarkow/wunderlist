import angular from 'angular';
import listGetService from './list-get-service.js';
import listItem from '../list-item/list-item.js';
import './list-view.less';

const MODULE_NAME = 'list.view';

angular.module(MODULE_NAME, [listGetService, listItem])
  .directive('listView', ['getListService', '$stateParams', '$state', function (listGetService, $stateParams, $state) {
    return {
      restrict: 'AEC',
      scope: {
        queryParams: '@passedParams'
      },
      replace: true,
      template: require('./list-view.html'),
      link: function (scope, elem, attrs) {
        scope.taskList = [];
        listGetService.getListQuery(scope.queryParams.start, scope.queryParams.size)
          .then(res => {
            console.log(res)
            scope.taskList = res.data.list
            console.log(scope.taskList)
          });
      }
    }
  }]);

export default MODULE_NAME;
