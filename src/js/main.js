// Userek lekérése.
jQuery.getJSON( 'users', function( users ) {
   console.log( 'users', users );

});


 // Check user
 funtcion checkUser(user) {
    if (user.role > 4){
        return true;
    } else
        return false;
 }
