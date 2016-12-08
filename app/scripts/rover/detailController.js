

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
        self.getDirectionArrow = getDirectionArrow;


        function listenToRoute(){
            let id = $stateParams.id;
            $interval(function(){
                channelFactory.getRoverById(id).then(function(data) {
                    self.rover = data;
                    self.initMap();
                });
            },1000);
        }
        self.listenToRoute();

        function initMap(){

          var mapWidth = $('.map').width();
					$('.map').css('height', mapWidth);
          var roverX = self.rover.position.x;
          var roverY = self.rover.position.y;
          roverX = Math.floor(roverX / 4);
          roverY = Math.floor(roverY / 4);
					$('.map-marker').css('bottom', 'calc( 50% + ' + roverY + 'px - 13px)').css('left', 'calc( 50% + ' + roverX + 'px - 13px)');
        }

        function getDirectionArrow(direction) {
          switch (direction) {
            case 0:
              return 'fa fa-arrow-left';
              break;
            case 1:
              return 'fa fa-arrow-up';
              break;
            case 2:
              return 'fa fa-arrow-right';
              break;
            case 3:
              return 'fa fa-arrow-down';
              break;
          }
        };

    };
})();
