const mongoose = require("mongoose");

const DelivrBoysSchema = mongoose.Schema(
    {
        delivryBoyName: {
            type: String,
            require: true,
            max: 15,
            min: 5,
            unique: true
        },
        boyName: {
            type: String,
            require: true,
            max: 25,
            min: 5
        },
        boyEmail: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        boyPassword: {
            type: String,
            required: true,
            min: 6
        },
        isAvailability: {
            type: Boolean,
            require: true
        },
        ratings: {
            type: Array
        },
        location: {
            type: String,
            require: true
        }
    }
);

module.exports = mongoose.model("DelivrBoys",DelivrBoysSchema);
