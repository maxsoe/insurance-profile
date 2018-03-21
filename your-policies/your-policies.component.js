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
      icon: 'LC',
      iconColor: '#7e56c1',
      options: {
        claims: ['897645321', '579438675']
      }
    },
    {
      type: 'Professional indemnity insurance',
      expiry: '21 October 2018',
      icon: 'PI',
      iconColor: '#c1ba35'
    },
    {
      type: 'Unoccupied property insurance',
      expiry: '25 December 2018',
      icon: 'UP',
      iconColor: '#c1524a',
      options: {
        claims: ['486257952']
      }
    },
    {
      type: 'Public liability insurance',
      expiry: '8 February 2019',
      icon: 'PL',
      iconColor: '#37c128'
    }
  ];

  var originatorEv;

    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

    this.notificationsEnabled = true;
    this.toggleNotifications = function() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    this.redial = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );

      originatorEv = null;
    };

    this.checkVoicemail = function() {
      // This never happens.
    };
};
