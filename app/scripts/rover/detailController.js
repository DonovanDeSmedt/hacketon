

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
 (function(){
    'use strict';

    angular.module('rogerApp')
    .controller('DetailCtrl',['$scope','$rootScope', 'channelFactory', '$stateParams','$interval', detailCtrl]);
    function detailCtrl($scope, $rootScope, channelFactory, $stateParams, $interval) {
        let self = this;
        self.listenToRoute = listenToRoute;
        self.rover;
        self.initMap = initMap;

        function listenToRoute(){
            let id = $stateParams.id;
            // $interval(function(){
                channelFactory.getRoverById(id).then(function(data) {
                    self.rover = data;
                });
            // },1000);
        }
        self.listenToRoute();

        function initMap(){
          var mapWidth = $('.map').width();
					$('.map').css('height', mapWidth);
          console.log(rover.position.x);
          var roverX = rover.position.x;
          var roverY = rover.position.y;
          roverX = Math.floor(roverX / 4);
          roverY = Math.floor(roverY / 4);
					$('.map-marker').css('top', 'calc(' + roverY + ' - 13px)').css('left', 'calc(' + roverX + '- 7px)');
        }
        self.initMap();
    };
})();
