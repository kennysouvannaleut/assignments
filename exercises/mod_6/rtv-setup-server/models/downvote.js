const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const downvoteSchema = new Schema({
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

module.exports = mongoose.model('Downvote', downvoteSchema);