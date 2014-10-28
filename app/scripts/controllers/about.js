'use strict';

/**
 * @ngdoc function
 * @name leakyunitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the leakyunitApp
 */
angular.module('leakyunitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
