superhero.controller( "userController", [
    "$scope",
    "userFactory",
    function( $scope, userFactory ) {

        userFactory.getAll();

    }
]);
