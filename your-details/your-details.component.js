// Register `yourDetails` component, along with its associated controller and template
angular
  .module('yourDetails', [])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('action', 'img/icon-set/action-icons.svg', 24)
      .iconSet('communication', 'img/icon-set/communication-icons.svg', 24)
      .iconSet('editor', 'img/icon-set/editor-icons.svg', 24)
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

  this.details = [{
      type: 'Name',
      value: 'Taylor Swift',
      options: {
        icon: 'action:account-circle'
      }
    },
    {
      type: 'Date of birth',
      value: '25 November 1989',
      options: {
        icon: 'action:event'
      }
    }
  ];

  this.phones = [{
      type: 'Mobile',
      number: '(555) 786-9841',
      options: {
        default: true,
        icon: 'communication:phone'
      }
    },
    {

      type: 'Home',
      number: '(555) 251-1234',
      options: {
        offset: true
      }
    }
  ];

  this.emails = [{
      type: 'Business',
      address: 'taylor@taylorswift.com',
      options: {
        default: true,
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
        default: true,
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
