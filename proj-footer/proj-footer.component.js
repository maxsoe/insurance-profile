// Register `projFooter` component, along with its associated controller and template
angular
  .module('projFooter', [])
  .component('projFooter', {
    templateUrl: 'proj-footer/proj-footer.template.html',
    css: 'proj-footer/proj-footer.css',
    controller: ProjFooterController,
    controllerAs: 'projFooterCtrl'
  });

function ProjFooterController() {
};
