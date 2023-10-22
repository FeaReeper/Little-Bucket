const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name can not be blank"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name can not be blank"]
    },
    email: {
        type: String,
        required: [true, "Email can not be blank"]
    },
    password: {
        type: String,
        required: [true, "Password can not be blank"],
        minlength: [7, "Password must be at least 7 characters"]
    }
}, {timestamps: true})


// This is how we validate that the password matches the confirmPassword
UserSchema.virtual('confirmPassword')
.get(() => this.confirmPassword)
.set((value) => this.confirmPassword = value)

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});



// this should go after, this is how we hash the password
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});




const User = mongoose.model('User', UserSchema)

module.exports = User