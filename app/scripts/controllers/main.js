

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
  .controller('MainCtrl',['$scope','$rootScope', 'channelFactory', '$interval', mainCtrl]); 
  	function mainCtrl($scope, $rootScope, channelFactory, $interval) {

    let self = this;
    self.getAllRovers = getAllRovers;
    self.sortRovers = sortRovers;
    self.toggleFavorite = toggleFavorite;
    self.isRoverFavorite = isRoverFavorite;
    self.roverIds;
    self.rovers;

    function getAllRovers() {
    	$interval(function(){
                channelFactory.getAllRovers().then(function(data) {
    				self.rovers = data;
    				sortRovers('d');
    			});
            },5000);
    	// channelFactory.getAllRovers().then(function(data) {
    	// 	self.rovers = data;
    	// 	sortRovers('d');
    	// });
    }
    function sortRovers(type) {
    	self.rovers = channelFactory.sortRovers(self.rovers, type);
    }
    function toggleFavorite(rover) {
    	channelFactory.toggleFavorite(rover);
    }
    function isRoverFavorite(rover) {
    	return channelFactory.isFavorite(rover);
    }
    self.getAllRovers();
  };
})();
