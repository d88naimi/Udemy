angular.module("tutorialCtrlModule", [])

.controller("tutorialCtrl", ["$scope", function($scope){
    // where our programming work goes

$scope.tutorialObject = {};
$scope.tutorialObject.title = "Main Page";


$scope.timeTwo = function(){
    $scope.tutorialObject.bindOutput *= 2;
}




}]);