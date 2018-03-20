angular
  .module('insuranceApp')
  .config(function($mdThemingProvider) {

    var pinotNoirMap = $mdThemingProvider.extendPalette('indigo', {
       '500': '#182848',
       'contrastDefaultColor': 'light'
     });

     // Register the new color palette map with the name <code>neonRed</code>
     $mdThemingProvider.definePalette('pinotNoir', pinotNoirMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('pinotNoir')
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
