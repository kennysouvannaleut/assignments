const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const saltRounds = 10;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 5 
    },
    image: { type: String }
}, { timestamps: true });

userSchema.pre('save', function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
});

userSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

userSchema.methods.withoutPassword = function(password, cb) {
    const user = this.toObject();
    delete user.password;
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
