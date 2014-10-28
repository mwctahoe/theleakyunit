'use strict';

/**
 * @ngdoc function
 * @name leakyunitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leakyunitApp
 */
angular.module('leakyunitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
