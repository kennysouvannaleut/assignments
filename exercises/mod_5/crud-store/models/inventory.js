const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: [String],
    size: {
        type: String,
        enum: ['Small', 'Medium', 'Large'],
    },
    season: {
        type: String,
        enum: ['Fall', 'Summer', 'Winter'],
    },
    price: Number,
    date: { 
        type: Date, 
        default: Date.now,
    },
    hidden: Boolean,
});

module.exports = mongoose.model('Inventory', inventorySchema);
