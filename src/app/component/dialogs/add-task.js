import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMesssages from 'angular-messages';
import './add-task-form.less';

const MODULE_NAME = 'list.addTask';

angular.module(MODULE_NAME, [ngMaterial, ngMesssages])
  .directive('addTask', ['getListService', '$state', function (getListService, $state) {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      template: require('./add-task.html'),
      link: function (scope) {
        scope.addTask = function () {
          if (scope.newTaskForm.$valid) {
            // console.log(scope.taskDate)
            getListService.postListItem({
              title: scope.title,
              text: scope.text,
              date: scope.taskDate
            }).then(res => {
              console.log('redirecting')
              $state.go('index', { location: 'replace' });
            });
          }
        }
      }
    }
  }]);

export default MODULE_NAME;
