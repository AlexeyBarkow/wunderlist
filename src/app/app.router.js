
export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
  // appState.state = {
  //   shouldShowFinishedTasks: false //i will place something else here later
  // };
  $urlRouterProvider
    .otherwise('/otherwise');
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('index', {
      url: '/list/:start/:size',
      template: '<default-menu></default-menu>'
    })
    .state('otherwise', {
      url: '/otherwise',
      template: '<not-found></not-found>'
    });
}];
