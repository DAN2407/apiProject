const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);



const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;