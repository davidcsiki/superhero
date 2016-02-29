// Factory létrehozása.
superhero.factory( "userFactory", [
    "$http",
    function( $http ) {
        return {
          getAll: function() {
                 // Felhasználók lekérése.
                $http.get( '/users' )
                    .then( function( data ) {
                        console.log( data );
                });
          }
        };
    }
])
