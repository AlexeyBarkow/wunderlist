import angular from 'angular';
import listGetService from './list-get-service.js';
import listItem from '../list-item/list-item.js';
import trueCheckbox from '../true-checkbox/true-checkbox.js';
import './list-view.less';

const MODULE_NAME = 'list.view';

angular.module(MODULE_NAME, [listGetService, listItem, trueCheckbox])
  .directive('listView', ['getListService', '$stateParams', '$state', 'appState', 'PAGE_LISTING_CHUNK_SIZE', function (listGetService, $stateParams, $state, appState, PLC) {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      template: require('./list-view.html'),
      link: function (scope, elem, attrs) {
        console.log('state', appState);
        scope.taskList = [];
        scope.prevStart = 0;
        scope.nextStart = 0;
        scope.totalSize = 0;
        scope.shouldShowFinishedTasks = appState.shouldShowFinishedTasks;

        scope.$watch(function () {
          return scope.shouldShowFinishedTasks;
        }, function (newVal) {
          console.log(newVal)
          appState.shouldShowFinishedTasks = newVal;
        })
        // scope.showCompleted = appState;
        scope.PLC = PLC;
        // console.log(scope[Object.keys(scope).indexOf('queryParams')], Object.keys(scope).indexOf('queryParams'), scope)
        listGetService.getListQuery($stateParams.start, $stateParams.size, scope.shouldShowFinishedTasks)
          .then(res => {
            // console.log(res)
            scope.prevStart = $stateParams.start - 10;
            scope.nextStart = +$stateParams.start + +$stateParams.size;
            scope.totalSize = res.data.totalSize;
            scope.taskList = res.data.list;
            // scope.totalSize = res.data.totalSize;
            console.log(scope.taskList)
          });
      }
    }
  }])
  .value('PAGE_LISTING_CHUNK_SIZE', 10);

export default MODULE_NAME;
