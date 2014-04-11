'use strict';

angular.module('webTntApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'MyModal.controllers'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        authenticate: true
      })
      .when('/profile', {
        templateUrl: 'partials/profile',
        controller: 'ProfileCtrl'
      })
      .when('/mySites', {
        templateUrl: 'partials/mysites',
        controller: 'MysitesCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/about',
        controller: 'AboutCtrl'
      })
      .when('/site', {
        templateUrl: 'partials/site',
        controller: 'SiteCtrl',
        authenticate:true
        //service: 'Sites',
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });