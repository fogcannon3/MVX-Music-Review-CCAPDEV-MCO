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
const LabelSchema = new Schema({
    label_name:{
        type:String,
        required: true,
        trim: true
    },
    label_founded:{
        type:Date,
        required: true
    },
    label_notable_artists:{
        type:array, //NOT SURE
        required: true,
        trim: true
    },
    label_listeners:{
        type: int64, //NOT SURE WHICH TYPE OF INT
        required: false
    },
    label_rating:{
        type: float, //NOT SURE WHICH TYPE OF FLOAT
        required: false
    },
    label_img:{
        type: media, //NOT SURE
        required: false
    },
    label_tags:{
        type: array, //NOT SURE
        required: false
    },
    label_similar_to_this:{
        type: array, //NOT SURE
        required: false
    },
    label_top_user_img:{
        required: false
    },
    label_top_user_username:{
        required: false
    },
    label_top_user_rating:{
        required: false
    },
    label_top_user_review_title:{
        required: false
    },
    label_top_user_review_body:{
        required: false
    },

    label_updatedAt:{
        type:Date,
        required: Date.now
    }
})

/*format is in (name, schemaName) */
module.exports = mongoose.model('Label', LabelSchema);