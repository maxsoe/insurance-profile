// Register `allRoutes` component, along with its associated controller and template
angular
  .module('yourDetails', [])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('communication', 'img/icon-set/communication-icons.svg', 24)
      .iconSet('maps', 'img/icon-set/maps-icons.svg', 24);
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
        offset: true
      }
    }
  ];

  this.emails = [{
      type: 'Business',
      address: 'taylor@taylorswift.com',
      options: {
        icon: 'communication:email'
      }
    },
    {
      type: 'Personal email',
      address: 'taytay@gmail.com',
      options: {
        offset: true
      }
    }
  ];

  this.addresses = [{
      type: 'Business',
      street: '123 Business Street',
      city: 'London',
      postcode: 'EC1R 4RB',
      country: 'United Kingdom',
      options: {
        icon: 'maps:place'
      }
    },
    {
      type: 'Home',
      street: '123 Fake Street',
      city: 'London',
      postcode: 'SW4E 7FA',
      country: 'United Kingdom',
      options: {
        offset: true
      }
    }
  ];
};
