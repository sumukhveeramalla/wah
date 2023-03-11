const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true
        },
        userEmail: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        userPassword: {
            type: String,
            required: true,
            min: 6
        },
        profilePicture: {
            type: String,
            default: ""
        },
        coverPicture: {
            type: String,
            default: ""
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        desc: {
            type: String,
            max: 50
        },
        city: {
            type: String,
            max: 50
        },
        from: {
            type: String,
            max: 50
        },
        presentOrders: {
            type: Number,
            default: 0
        },
        previousOrders: {
            type: Number,
            default: 0
        },
        bucketList: {
            type: Array
        },
        phoneNumber: {
            type: Array
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
