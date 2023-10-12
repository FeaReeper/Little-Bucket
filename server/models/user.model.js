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
        required: [true, "Password can not be blank"]
    }
}, {timestamps: true})

// UserSchema.virtual('confirmPassword')
// .get(() => this._confirmPassword)
// .set((value) => this._confirmPassword = value)

// UserSchema.pre('validate', function(next) {
//     if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password');
//     }
//     next();
// });

// // near the top is a good place to group our imports
// const bcrypt = require('bcrypt');
// // this should go after 
// UserSchema.pre('save', function(next) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         });
// });




const User = mongoose.model('User', UserSchema)

module.exports = User