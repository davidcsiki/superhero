// Fö modul definiálása.
var superhero = angular.module( "superhero", ['currencyModule'] );

superhero.controller( "nameController", [ "$scope", function( $scope ) {
    $scope.yourName = "Joe";
}]);

