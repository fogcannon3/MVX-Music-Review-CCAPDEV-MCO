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
    artist_debut:{
        type: Date,
        required: true
    },
    artist_discography:{
        type:Array,
        required: true,
        trim: true
    },
    artist_genre:{
        type:String,
        required: true,
        trim: true
    },
    artist_record_label:{
        type:String,
        required: true,
        trim: true
    },
    artist_listeners:{
        type: Number,
    },
    artist_rating:{
        type: Number,
    },
    artist_img:{
        type: String,
    },
    artist_tags:{
        type: Array,
    },
    artist_similar_to_this:{
        type: Array,
        required: true
    },
    // artist_top_user_img:{
    //     required: false
    // },
    // artist_top_user_username:{
    //     required: false
    // },
    // artist_top_user_rating:{
    //     required: false
    // },
    // artist_top_user_review_title:{
    //     required: false
    // },
    // artist_top_user_review_body:{
    //     required: false
    // },
    // artist_rating_danceability:{
    //     required: false
    // },
    // artist_rating_upbeat:{
    //     required: false
    // },
    // artist_rating_catchiness:{
    //     required: false
    // },
    // artist_rating_vocals:{
    //     required: false
    // },
})

/*format is in (name, schemaName) */
module.exports = mongoose.model('Artist', ArtistSchema);