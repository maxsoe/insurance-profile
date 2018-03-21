angular
  .module('insuranceApp')
  .config(function($mdThemingProvider) {

    var pinotNoirPrimaryMap = $mdThemingProvider.extendPalette('indigo', {
       '500': '#182848',
       'contrastDefaultColor': 'light'
     });
     var pinotNoirSecondaryMap = $mdThemingProvider.extendPalette('indigo', {
        '500': '#4b6cb7',
        'contrastDefaultColor': 'light'
      });

     // Register the new color palette map
     $mdThemingProvider.definePalette('pinotNoirPrimary', pinotNoirPrimaryMap);
     $mdThemingProvider.definePalette('pinotNoirSecondary', pinotNoirSecondaryMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('pinotNoirPrimary')
      .accentPalette('pinotNoirSecondary')
      .warnPalette('orange')
      .backgroundPalette('grey');
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    var homeState = {
      name: 'home',
      url: '/',
      // template: '<proj-footer></proj-footer>'
      // template: '<your-details></your-details><proj-footer></proj-footer>'
      // component: 'yourDetails'
      component: 'projProfile'
    };

    $stateProvider
      .state(homeState);
  });
