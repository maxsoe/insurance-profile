angular
  .module('insuranceApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink')
      .warnPalette('orange')
      .backgroundPalette('grey');
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    var homeState = {
      name: 'home',
      url: '/',
      // template: '<proj-footer></proj-footer>'
      template: '<your-details></your-details><proj-footer></proj-footer>'
    };

    $stateProvider
      .state(homeState);
  });
