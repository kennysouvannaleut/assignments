const mongoose = require('mongoose');
const { Schema } = mongoose;

const discussionSchema = new Schema({
    by: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    postId:  { type: String },
    responseTo: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    content: { type: String }
}, { timestamps: true });

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = { Discussion };
