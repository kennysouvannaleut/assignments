const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: {
        type: String,
        enum: ['Sith', 'Jedi'],
    },
});

module.exports = mongoose.model('Bounty', bountySchema);