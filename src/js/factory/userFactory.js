// Factory létrehozása.
superhero.factory( "userFactory", [
    "$http",
    "$q",
    function( $http, $q ) {
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
