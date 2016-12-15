import angular from 'angular';
const MODULE_NAME = 'list.state.service'
angular.module(MODULE_NAME, [])
  .factory('listState', [function () {
    return {
      state: {
        shouldShowFinishedTasks: false
      }
    }
  }]);

export default MODULE_NAME;
