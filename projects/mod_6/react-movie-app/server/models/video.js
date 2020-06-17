const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const videoSchema = new Schema({
    createdBy: { 
        type: Schema.Types.String, 
        ref: 'User' 
    },
    title: { 
        type: String, 
        maxLength: 20 
    },
    description: { type: String },
    privacy: { type: Number },
    filePath: { type: String }, 
    category: { type: String },
    views: { 
        type: Number, 
        default: 0 
    },
    duration: { type: String },
    thumbnail: { type: String }
}, { timestamps: true })

const Video = mongoose.model('Video', videoSchema);

module.exports = { Video };
