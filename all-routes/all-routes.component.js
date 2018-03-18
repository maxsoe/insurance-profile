// Register `allRoutes` component, along with its associated controller and template
angular
  .module('allRoutes', [
  ])
  .component('allRoutes', {
    // template: 'test template'
    templateUrl: 'all-routes/all-routes.template.html',
    css: 'all-routes/all-routes.css',
    controller: AllRoutesController,
    controllerAs: 'allRoutesCtrl'
  });

function AllRoutesController() {

};
