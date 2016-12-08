(function () {

  'use strict';

  angular .module('rogerApp')
          .controller('RoverCtrl', ['$scope', roverCtrl]);

  function roverCtrl($scope, $location) {
    let self = this;
    self.getDirectionArrow = getDirectionArrow;

    self.rovers = [
      {name: 'test1', position: {x: 10, y: 11}, direction: 1, speed: 2},
      {name: 'test2', position: {x: 10, y: 11}, direction: 1, speed: 2},
      {name: 'test3', position: {x: 10, y: 11}, direction: 1, speed: 2}
    ];

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

  };


})();
