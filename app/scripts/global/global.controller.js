(function () {

  'use strict';

  angular .module('rogerApp')
          .controller('GlobalCtrl', ['$scope', '$location', globalCtrl]);

  function globalCtrl($scope, $location) {
    $scope.getClass = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
  }

})();
