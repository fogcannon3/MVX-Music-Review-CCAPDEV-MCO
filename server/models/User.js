/*12:59 vid 4, could be renamed to anything to store in db */
/* sample from vid*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema; /* Schema - database field/s */

/*Common properties include
  Type: int, float, string...
  default: value (self-explanatory)
  Required: true/false (field must be present in the document before saving in the db)
  Unique: true/false (values of a specific field must be unique across all documents in the collection.
                      It prevents multiple documents from having the same value for the specified field.)
  lowercase: true/false (converts to lowercase before saving to the db)
  trim: true/false (removese leading and trailing whitespace before saving to the db)
*/
const UserSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type:String,
        required: true,
    },
    joined:{
        type:Date,
        required: false,
    },
    img:{
        type: String,
        required: false
    },
    //Feels empty here sa user page, will definitely add stuff pag may time
})

/*format is in (name, schemaName) */
module.exports = mongoose.model('User', UserSchema);