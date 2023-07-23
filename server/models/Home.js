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
const HomeSchema = new Schema({
    home_new_releases:{
        type: Array,
        required: true
    },
    home_following:{
        type: Array,
        required: true
    },
    home_personalized_recommendations:{
        type: Array,
        required: true
    },
    home_trending:{
        type: Array,
        required: false
    },
})

/*format is in (name, schemaName) */
module.exports = mongoose.model('Home', HomeSchema);