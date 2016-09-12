const angular = require('angular');

const MODULE_NAME = 'login.module';

angular.module(MODULE_NAME, [])
  // .controller('LoginController', function ($scope, authService, $state) {
  //   $scope.buttonText = 'logging in...';
  //   authService.login($scope.credentials.username, $scope.credentials.password)
  //     .then(function (data) {
  //       $state.go('/')
  //     }, function (err) {
  //       $scope.invalidLogin = true;
  //     }).finally(function () {
  //       $scope.buttonText = "login"
  //     });
  // })
  .factory('authService', function (AUTH_ENDPOINT, LOGOUT_ENDPOINT, $http) {
    var auth = {};
    auth.login = function (username, password) {
      return $http.post(AUTH_ENDPOINT, {
        username: username,
        password: password
      }).then(function (res, status) {
        auth.user = res.data;
        return auth.user;
      });
    }
    auth.logout = function () {
      return $http.post(LOGOUT_ENDPOINT).then(function (res) {
        auth.user = undefined;
      });
    }
    return auth;
  })
  .value('AUTH_ENDPOINT', '/login')
  .value('LOGOUT_ENDPOINT', '/logout')
  .directive('login', ['authService', function (authService) {
    return {
      scope: {},
      restrict: 'AEC',
      replace: true,
      template: require('./login.template.html'),
      link: function (scope, elem, attrs) {
        scope.login = authService.login;
        scope.buttonText = "login"

      }
    }
  }]);


export default MODULE_NAME;
