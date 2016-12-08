'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('testApp')
  .directive('testDirective', function () {
    return {
      template: '<div>HELLO</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testDirective directive');
      }
    };
  });
