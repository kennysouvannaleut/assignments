const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    createdBy: { 
        type: Schema.Types.String, 
        ref: 'User' 
    },
    postId:  { type: String },
    responseTo: { 
        type: Schema.Types.String, 
        ref: 'User' 
    },
    content: { type: String }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
