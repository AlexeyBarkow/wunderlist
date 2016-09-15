
export default function ($stateProvider, $urlRouterProvider){

  $urlRouterProvider
    .otherwise('/otherwise');
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('index', {
      url: '/',
      template: '<default-menu></default-menu>'
    })
    .state('otherwise', {
      url: '/otherwise',
      template: '<not-found></not-found>'
    })
}
