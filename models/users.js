// Mongodb adatmodell.
// Kezeli a megadott táblát.
var db,
    Users;
function setConnection( mongodb ) {
    db = mongodb;
    setModel();
}

// Kollekció modell.
function setModel() {

    Users = db.model( 'Users', {
        name: String,
        email: String,
        phone: String,
        address: String,
        role: Number,
        meta: {
            birthsday: Date,
            hobby: String
        }
    }, 'Users' );

}

// Adatok olvasása a kollekcióból.
function read( where, callBack ) {
    // Paraméter vizsgálata.
    if (!where) {
      where = {};
    }

    // Adatbázis olvasása
    Users.find( where, function( err, data ) {
        if ( err ) {
            console.error( 'Error in query: ', where );
            data = {};
        }
        if ( callBack) {
              callBack( data );
        }
    });
}


// Egy dokumentum lekérése.
function first(where, callBack){
    read( where, function( data ){
      if ( data.length > 0 ){
          callBack( data[0] );
      } else {
          callBack( null );
      }
    });
}


// Új dokumentum beszúrása az adatbázisba.
function create( document, callBack ) {

    var user = new Users( document );
    user.save( function( err ) {
        if ( err ) {
            console.error( "Save error: ", err );
            callBack( {} );
        } else {
            callBack( user );
        }
    });

}

// Publikus elemek.
module.exports = {
    setConnection: setConnection,
    read: read,
    create: create,
    first: first
};
