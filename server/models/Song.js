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
const SongSchema = new Schema({
    song_title:{
        type:String,
        required: true,
        trim: true
    },
    song_artist:{
        type:String,
        required: true,
        trim: true
    },
    song_album:{
        type:String,
        required: true,
        trim: true
    },
    song_release:{
        type:Date,
        required: true
    },
    song_genre:{
        type:String,
        required: true,
        trim: true
    },
    song_writer:{
        type:String,
        required: true,
        trim: true
    },
    song_composers:{
        type:String,
        required: true,
        trim: true
    },
    song_record_label:{
        type:String,
        required: true,
        trim: true
    },
    // song_listeners:{
    //     type: Int8Array,
    //     required: false
    // },
    song_lyrics:{
        type:String,
        required: true,
        trim: true
    },
    // song_rating:{
    //     type: Float32Array,
    //     required: false
    // },
    song_img:{
        type: String,
        required: true
    },
    song_tags:{
        type: Array,
        required: true
    },
    song_similar_to_this:{
        type: Array,
        required: true
    },
    song_from_the_same_artist:{
        type: Array,
        required: true
    },
    // song_top_user_img:{
    //     type: Image,
    //     required: false
    // },
    song_top_user_username:{
        type: String,
        required: false
    },
    // song_top_user_rating:{
    //     type: Float32Array,
    //     required: false
    // },
    song_top_user_review_title:{
        type: String,
        required: false
    },
    song_top_user_review_body:{
        type: String,
        required: false
    },
    // song_rating_danceability:{
    //     type: Float32Array,
    //     required: false
    // },
    // song_rating_upbeat:{
    //     type: Float32Array,
    //     required: false
    // },
    // song_rating_catchiness:{
    //     type: Float32Array,
    //     required: false
    // },
    // song_rating_vocals:{
    //     type: Float32Array,
    //     required: false
    // },
    

    //NOTE: im not sure how to move forward with the reviews here
    //kasi we're gonna be showing the other top 5 aside from the highlighted top review
    //then the rest will be visible from the "see more" button nalang
    //so yea not sure how to implement
})

/*format is in (name, schemaName) */
module.exports = mongoose.model('Song', SongSchema);