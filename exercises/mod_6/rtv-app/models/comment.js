const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    comment: String,
    issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdBy: {
        type: Schema.Types.String,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema); 
