// Fö modul definiálása.
var superhero = angular.module( "superhero", ['currencyModule'] );

// Létrehozunk egy kontrollert.
superhero.controller( "nameController", [ "$scope", function( $scope ) {
    $scope.yourPrice = 1200;
}]);

