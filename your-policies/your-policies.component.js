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
  this.policies = [{
      type: 'Landlord contents insurance',
      expiry: '24 July 2018',
      options: {
        claims: ['897645321', '579438675']
      }
    },
    {
      type: 'Professional indemnity insurance',
      value: '21 October 2018'
    },
    {
      type: 'Unoccupied property insurance',
      value: '25 December 2018',
      options: {
        claims: ['486257952']
      }
    },
    {
      type: 'Public liability insurance',
      value: '8 February 2019'
    }
  ];
};
