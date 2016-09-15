import angular from 'angular';
const MODULE_NAME = 'notFound.module';

angular.module(MODULE_NAME, [])
  .directive('notFound', function () {
    return {
      scope: {},
      restrict: 'AES',
      replace: true,
      template: require('./not-found.html')
    }
  });

export default MODULE_NAME;
