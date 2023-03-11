const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
    {
        
        resName: {
            type: String,
            require: true,
            min: 3,
            max: 50,
            unique: true
        },
        menu: {
            type: Array,
            require: true,
            default: []
        },
        presentOrders: {
            type: Array,
            default: []
        },
        isAvailability: {
            type: Boolean,
            require: true
        },
        location: {
            type: String,
        },
        description: {
            type: String,
        },
        phoneNumber: {
            type: Number,
            min: 10,
            max: 10
        },
        resEmail: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        resPassword: {
            type: String,
            required: true,
            min: 6
        },
        ratings: {
            type: Array,
            default: []
        }
    }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
