const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;
const { SECRET } = process.env;
const saltRounds = 10;

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 5 },
    image: { type: String },
    token: { type: String },
    tokenExp: { type: Number }
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

userSchema.methods.generateJwt = function(cb) {
    const user = this;

    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    const token = jwt.sign(user._id.toString(), SECRET);
    const tokenExp = parseInt(exp.getTime() / 1000);

    user.token = token;
    user.tokenExp = tokenExp;

    user.save(function(err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
};

userSchema.statics.findByToken = function(token, cb) {
    const user = this;

    jwt.verify(token, SECRET, function(err, decoded) {
        if (err) return cb(err);

        user.findOne({ '_id': decoded, 'token': token }, 
        
        function(err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
