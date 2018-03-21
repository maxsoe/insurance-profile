// Register `profile` component, along with its associated controller and template
angular
  .module('projProfile', [])
  .component('projProfile', {
    templateUrl: 'proj-profile/proj-profile.template.html',
    css: 'proj-profile/proj-profile.css',
    controller: ProjProfileController,
    controllerAs: 'projProfileCtrl'
  });

function ProjProfileController() {
};
