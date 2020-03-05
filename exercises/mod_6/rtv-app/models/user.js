const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    postsCreated: {
        type: Array,
        default: []
    },
    postsVoted: {
        type: Array,
        default: []
    },
    postsCommented: {
        type: Array,
        default: []
    }
});

userSchema.pre('save', function(next) {
    const user = this;
        if(!user.isModified('password')) 
            return next();
        bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) 
            return next(err);

        user.password = hash;
        next();
    });
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) {
            return callback(err);
        }
        return callback(null, isMatch);
    });
};

userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;