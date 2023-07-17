import mongoose from 'mongoose';
import validator from 'validator'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        validate(val:string) {
            if (!validator.isEmail(val)) {
                throw new Error('Email invalid')
            }
        }
    },
    password: {
        type: String
    }

}, {
    timestamps: true
})


const User = mongoose.model('User', UserSchema)
export default User;


