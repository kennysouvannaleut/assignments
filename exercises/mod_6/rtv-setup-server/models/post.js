const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    votes: [{
        user: { type: Schema.Types.ObjectId }
    }],
    voteCount: {
        type: Number
    },
    views: [{
        user: { type: Schema.Types.ObjectId }
    }],
    comments: [{
        user: { type: Schema.Types.ObjectId },
        comment: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);

