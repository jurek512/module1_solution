(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message ="";
  $scope.messageclass ="";

  $scope.check = function () {
    $scope.menu = $scope.menu.trim();
    var strings = $scope.menu.split(",");
    if ($scope.menu === "") {
      $scope.message = "Please enter data first";
      $scope.messageclass ="message";
      return;
    }
    if (strings.length < 4) {
      $scope.message = "Enjoy!";
      $scope.messageclass ="messageenjoy";
    } else {
      $scope.message = "To much!";
      $scope.messageclass ="messagetomuch";
    }
  };
}

})();
