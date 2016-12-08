(function () {

  'use strict';

  angular .module('rogerApp')
          .controller('RoverCtrl', ['$scope', '$location', 'channelFactory', '$interval','rovers', roverCtrl]);

  function roverCtrl($scope, $location, channelFactory, $interval, rovers) {
    let self = this;
    self.getAllRovers = getAllRovers;
    self.sortRovers = sortRovers;
    self.toggleFavorite = toggleFavorite;
    self.isRoverFavorite = isRoverFavorite;
    self.getDirectionArrow = getDirectionArrow;
    self.roverIds;
    self.rovers = rovers;

    function getAllRovers() {
      $interval(function(){
                channelFactory.getAllRovers().then(function(data) {
            self.rovers = data;
            sortRovers('d');
          });
            },5000);
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
    function getDirectionArrow(direction) {
      console.log(direction);
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
    self.getAllRovers();
  };


})();
