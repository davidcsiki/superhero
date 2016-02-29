superhero.controller( "userController", [
    "$scope",
    "userFactory",
    function( $scope, userFactory ) {

        userFactory.getAll()
            .then( function( userData ) {
                console.log( userData );
            }, function( err ) {
                console.error( "Error while getting user data: ", err );
        });

    }
]);
