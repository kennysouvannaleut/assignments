const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upvoteSchema = new Schema({
    postID: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    votes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

module.exports = mongoose.model('Upvote', upvoteSchema);