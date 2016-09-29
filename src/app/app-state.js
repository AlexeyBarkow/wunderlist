import angular from 'angular';
const MODULE_NAME = 'app.state.provider'
angular.module(MODULE_NAME, [])
  .provider('appState', [function () {
    return {
      state: {
        shouldShowFinishedTasks: false
      },
      $get: function () {
        return this.state
      }
    }
  }]);

export default MODULE_NAME;
