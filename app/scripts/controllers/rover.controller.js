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
    self.currentSort = currentSort;
    self.sortType;
    self.roverIds;
    self.rovers = rovers;
    self.initMap = initMap;

    function getAllRovers() {
      // $interval(function(){
      //           channelFactory.getAllRovers().then(function(data) {
      //       self.rovers = data;
      //       sortRovers('d');
      //     });
      //       },5000);
      channelFactory.getAllRovers().then(function(data) {
            self.rovers = data;
            initMap();
            sortRovers('d');
          });
    }
    function sortRovers(type) {
      self.sortType = type;
      self.rovers = channelFactory.sortRovers(self.rovers, type);
    }
    function toggleFavorite(rover) {
      channelFactory.toggleFavorite(rover);
    }
    function isRoverFavorite(rover) {
      return channelFactory.isFavorite(rover);
    }
    function currentSort(type) {
      return type === self.sortType ? 'filter-active' : '';
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
    function initMap(){
      console.log("hond");
      var mapWidth = $('.map').width();
      $('.map').css('height', mapWidth);

      self.rovers.forEach((e) => {
        initMarker(e);
      });

    }

    function initMarker(rover){
      var roverX = rover.position.x;
      var roverY = rover.position.y;
      roverX = Math.floor(roverX / 4);
      roverY = Math.floor(roverY / 4);
      $('#' + rover.id).css('bottom', 'calc( 50% + ' + roverY + 'px - 13px)').css('left', 'calc( 50% + ' + roverX + 'px - 13px)');

    }
  };


})();
