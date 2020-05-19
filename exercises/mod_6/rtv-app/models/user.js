const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const { Schema } = mongoose;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true, 
        lowercase : true
    },
    password : { 
        type : String, 
        required : true 
    },
    memberSince : { 
        type : Date, 
        default : Date.now()
    }
});

userSchema.pre('save', function(next) {
    const user = this;

    if (!user.isModified('password') || !user.isNew) {
        next();
    } else {
        bcrypt.hash(user.password, saltRounds, (err, hash) => {
            if (err) {
                console.log('Error hashing password for user', user.username);
                return next(err);
            } else {
                user.password = hash;
                next();
            } 
        });
    }
});

userSchema.methods.checkPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) 
            return callback(err);
            return callback(null, isMatch);
     });
};

userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model('User', userSchema);
