const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    commentId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Comment' 
    },
    videoId: { type: String }
}, { timestamps: true });

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like };
