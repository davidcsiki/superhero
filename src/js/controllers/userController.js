superhero.controller( "userController", [
    "$scope",
    "userFactory",
    function( $scope, userFactory ) {

        // Felhasználók.
        $scope.users = [];

        // Felhasználók lekérése.
        userFactory.getAll()
            .then( function( userData ) {
                $scope.users = userData;
            }, function( err ) {
                console.error( "Error while getting user data: ", err );
        });

    }
]);
