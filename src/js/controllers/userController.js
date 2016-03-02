superhero.controller( "userController", [
    "$scope",
    "userService",
    "userFactory",
    function( $scope, userService, userFactory ) {

        // Felhasználók.
        $scope.users = [];
        $scope.ths = ['#', 'name', 'email', 'phone', 'actions'];
        $scope.newUser = {};
        $scope.formError = {};

        // Felhasználók lekérése.
        userService.getAll()
            .then( function( userData ) {
                $scope.users = userData;
            }, function( err ) {
                console.error( "Error while getting user data: ", err );
            });

        // Egy felhaszánló lekérése.
        userFactory.getOne( '56d712d38052bcec0b6c9ac9' )
            .then( function( user ) {
                console.info( 'Orsi: ', user );
            });

        // Adatok frissítése.
        $scope.updateRecord = function( row ) {
            userFactory.saveUser(row)
                .then( function() {
                    alert( "User saved!" );
                });
        };

        // Adatsor törlése.
        $scope.deleteUser = function( row ) {
            userFactory.deleteUser( row )
                .then( function( deleted ) {
                    if ( deleted.ok ) {
                        var index = $scope.users.indexOf(row);
                        $scope.users.splice( index, 1 );
                    } else {
                        alert( "Error, not deleted: " + row.name );
                    }
                });
        };

        // Adatok ellenőrzése.
        $scope.checkNewUser = function(row) {
            $scope.formError = {};
            var fields = ['name', 'email', 'phone'];
            var returnValue = true;
            for ( var k in fields ) {
                if ( row[fields[k]] == "" ||
                    angular.isUndefined(row[fields[k]]) ) {
                        $scope.formError[fields[k]] = true;
                        returnValue = false;
                }
            }
            return returnValue;
        };

        // Új record beszúrása.
        $scope.insertRecord = function( row ) {
            if ( !$scope.checkNewUser(row) )
                return;
            userFactory.insertUser( row )
                .then( function( newUser ) {
                    $scope.users.push( newUser );
                    $scope.newUser = {};
                });
        };

    }
]);
