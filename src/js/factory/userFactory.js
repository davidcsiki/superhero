// Factory létrehozása.
superhero.factory( "userFactory", [
    "$http",
    "$q",
    function( $http, $q ) {
        return {
          getAll: function() {

                // Új defer példány.
                var deferred = $q.defer();

                 // Felhasználók lekérése.
                $http.get( '/users' )
                    .then( function( data ) {
                        deferred.resolve( data );
                }, function( err) {
                    deferred.reject( err );
                });

                //Visszatérés a promise objektummal.
                return deferred.promise;
          }
        };
    }
])
