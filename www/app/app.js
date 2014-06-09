// GPStream App Module

angular.module('gpstream', ['ionic', 'starter.services', 'starter.controllers', 'firebase', 'google-maps'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "app/views/tabs.html"
    })
    .state('tab.chat', {
      url: '/chat',
      views: {
        'chat-tab': {
          templateUrl: 'app/views/chat.html',
          controller: 'ChatCtrl'
        }
      }
    })
    .state('tab.maps', {
      url: '/maps',
      views: {
        'maps-tab': {
          templateUrl: 'app/views/maps.html',
          controller: 'MapsCtrl'
        }
      }
    })
    .state('tab.pet-index', {
      url: '/pets',
      views: {
        'pets-tab': {
          templateUrl: 'app/views/pet-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })
    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'app/views/pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })
    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'app/views/adopt.html'
        }
      }
    })
    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'app/views/about.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/maps');

});