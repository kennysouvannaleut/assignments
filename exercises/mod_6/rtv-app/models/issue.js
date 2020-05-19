const mongoose = require('mongoose');

const { Schema } = mongoose;

const issueSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    createdBy: {
        type: Schema.Types.String,
        ref: 'User',
        required: true
    },
    title: { 
        type: String,
        required: true 
    },
    description: String,
    votes: { 
        type: Number,
        default: 0
    },
    usersWhoVoted: {
        type : [Schema.Types.ObjectId],
        ref : 'User',
        default : []
    },
    createdAt: { 
        type: Date, 
        default : Date.now()
    }
});

module.exports = mongoose.model('Issue', issueSchema);
