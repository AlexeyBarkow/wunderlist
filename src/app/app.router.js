
export default function ($stateProvider, $urlRouterProvider){
  $stateProvider.
    state('login', {
      url: '/login',
      template: '<login></login>'
    });

}
