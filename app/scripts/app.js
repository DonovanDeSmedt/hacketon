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
  $urlRouterProvider.otherwise("/rovers");
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
    controllerAs: 'roverCtrl',
    resolve: {
      rovers: getAllRovers,
      sensorData: getSensorData
    }
  })
  .state('about',{
    cache: false,
    url:'/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .state('rover',{
    cache: false,
    url:'/rover/:id',
    templateUrl: 'scripts/rover/rover.detail.html',
    controller: 'DetailCtrl',
    controllerAs: 'detailCtrl'
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
 const getAllRovers = function(channelFactory) {
  return channelFactory.getAllRovers().then(function(data) {
       return data;
      });
 }
 const getSensorData = function() {
    console.log("dsf");
 }
