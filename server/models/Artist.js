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
const ArtistSchema = new Schema({
    artist_name:{
        type:String,
        required: true,
        trim: true
    },
    album_debut:{
        type:Date,
        required: true
    },
    artist_discography:{
        type:array, //NOT SURE
        required: true,
        trim: true
    },
    artist_genre:{
        type:String, //NOT SURE
        required: true,
        trim: true
    },
    artist_record_label:{
        type:String,
        required: true,
        trim: true
    },
    artist_listeners:{
        type: int64, //NOT SURE WHICH TYPE OF INT
        required: false
    },
    artist_rating:{
        type: float, //NOT SURE WHICH TYPE OF FLOAT
        required: false
    },
    artist_img:{
        type: media, //NOT SURE
        required: false
    },
    artist_tags:{
        type: array, //NOT SURE
        required: false
    },
    artist_similar_to_this:{
        type: array, //NOT SURE
        required: false
    },
    artist_top_user_img:{
        required: false
    },
    artist_top_user_username:{
        required: false
    },
    artist_top_user_rating:{
        required: false
    },
    artist_top_user_review_title:{
        required: false
    },
    artist_top_user_review_body:{
        required: false
    },
    artist_rating_danceability:{
        required: false
    },
    artist_rating_upbeat:{
        required: false
    },
    artist_rating_catchiness:{
        required: false
    },
    artist_rating_vocals:{
        required: false
    },

    artist_updatedAt:{
        type:Date,
        required: Date.now
    }
})

/*format is in (name, schemaName) */
module.exports = mongoose.model('Artist', ArtistSchema);