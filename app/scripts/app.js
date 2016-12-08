'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
 angular
 .module('rogerApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
    // 'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'rogerApp.service'
    ])
 .config(function ($stateProvider,$httpProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
  .state('home',{
    cache: false,
    url:'/home',
    templateUrl: 'scripts/home/main2.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .state('rovers',{
    cache: false,
    url:'/rovers',
    templateUrl: 'scripts/home/main.html',
    controller: 'RoverCtrl',
    controllerAs: 'roverCtrl'
  })
  .state('about',{
    cache: false,
    url:'/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .state('details',{
    cache: false,
    url:'/details',
    templateUrl: 'views/details.html',
    controller: 'DetailsCtrl',
    controllerAs: 'details'
  })
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'about'
    //   })
    //   .when('/details', {
    //     templateUrl: 'views/details.html',
    //     controller: 'DetailsCtrl',
    //     controllerAs: 'details'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
