

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

        function listenToRoute(){
            let id = $stateParams.id;
            $interval(function(){
                channelFactory.getRoverById(id).then(function(data) {
                    self.rover = data;
                });
            },1000);
        }
        self.listenToRoute();

    };
})();
