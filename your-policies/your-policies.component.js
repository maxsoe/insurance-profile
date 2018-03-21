// Register `yourPolicies` component, along with its associated controller and template
angular
  .module('yourPolicies', [])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('navigation', 'img/icon-set/navigation-icons.svg', 24)
  })
  .component('yourPolicies', {
    templateUrl: 'your-policies/your-policies.template.html',
    css: 'your-policies/your-policies.css',
    controller: yourPoliciesController,
    controllerAs: 'yourPoliciesCtrl'
  });

function yourPoliciesController() {

};
