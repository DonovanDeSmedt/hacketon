

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
    self.roverIds;

    function getAllRovers() {
    	channelFactory.getAllRovers().then(function(data) {
    		self.roverIds = data;
    		console.log(self.roverIds);
    	});
    }
    self.getAllRovers();
  };
})();
