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
    let user = 'yourmom'
    let auth = {
      getUser: () => {
        return user
      }
    };
    auth.login = function (username, password) {
      return $http.post(AUTH_ENDPOINT, {
        username: username,
        password: password
      }).then(function (res, status) {
        console.log(res)
          user = res.data;
          return user;
      }).catch(e => {
        // console.log(e)
        return {
          message: 'status: ' + e.status
        };
      });
    }
    auth.logout = function () {
      return $http.post(LOGOUT_ENDPOINT).then(function (res) {
        user = undefined;
      });
    }
    return auth;
  })
  .value('AUTH_ENDPOINT', '/login')
  .value('LOGOUT_ENDPOINT', '/logout')
  .directive('login', ['authService', '$state', function (authService, $state) {
    return {
      scope: {},
      restrict: 'AEC',
      replace: true,
      template: require('./login.template.html'),
      link: function (scope, elem, attrs) {
        scope.invalidLogin = false;
        scope.login = function (username, password) {
          authService.login(username, password).then(res => {
            if (!res.message) {
              $state.go('index', { location: 'replace' });
              scope.invalidLogin = false;
            } else {
              scope.invalidLogin = true;
            }
          });
        }
        //I really don't know for what purpose I've added that
        scope.buttonText = "login";

      }
    }
  }]);


export default MODULE_NAME;
