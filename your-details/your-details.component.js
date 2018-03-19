// Register `allRoutes` component, along with its associated controller and template
angular
  .module('yourDetails', [])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('communication', 'img/icon-set/communication-icons.svg', 24);
  })
  .component('yourDetails', {
    // template: 'test template'
    templateUrl: 'your-details/your-details.template.html',
    css: 'your-details/your-details.css',
    controller: YourDetailsController,
    controllerAs: 'yourDetailsCtrl'
  });

function YourDetailsController() {

  var imagePath = 'logo.png';

  this.phones = [{
      type: 'Home',
      number: '(555) 251-1234',
      options: {
        icon: 'communication:phone'
      }
    },
    {
      type: 'Cell',
      number: '(555) 786-9841',
      options: {
        icon: 'communication:phone',
        avatarIcon: true
      }
    },
    {
      type: 'Office',
      number: '(555) 314-1592',
      options: {
        face: imagePath
      }
    },
    {
      type: 'Offset',
      number: '(555) 192-2010',
      options: {
        offset: true,
        actionIcon: 'communication:phone'
      }
    }
  ];

  this.addresses = [{
      type: 'Business',
      street: '123 Business Street',
      city: 'London',
      postcode: 'EC1R 4RB',
      country: 'United Kingdom'
    },
    {
      type: 'Home',
      street: '123 Fake Street',
      city: 'London',
      postcode: 'SW4E 7FA',
      country: 'United Kingdom'
    }
  ];
};
