

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
  .controller('MainCtrl',['$scope','$rootScope', 'channelFactory', mainCtrl]); 
  	function mainCtrl($scope, $rootScope, channelFactory) {

    let self = this;
    self.getAllRovers = getAllRovers;
    self.sortRovers = sortRovers;
    self.toggleFavorite = toggleFavorite;
    self.roverIds;
    self.rovers;

    function getAllRovers() {
    	channelFactory.getAllRovers().then(function(data) {
    		self.rovers = data;
    		sortRovers('d');
    		// toggleFavorite(self.rovers[0]);
    	});
    }
    function sortRovers(type) {
    	self.rovers = channelFactory.sortRovers(self.rovers, type);
    }
    function toggleFavorite(rover) {
    	channelFactory.toggleFavorite(rover);
    }
    self.getAllRovers();
  };
})();
