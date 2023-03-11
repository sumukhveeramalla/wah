const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
    {
        ratingId: {
            type: String,
            unique: true,
            require: true
        },
        rating: {
            type: Number,
            require: true,
            min: 1,
            max: 5,
        },
        review: {
            type: String,
            default: ""
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        },
        restaurant: {
            type: mongoose.Schema.Types.ObjectId, ref: "Restaurant"
        },
        delivrBoy: {
            type: mongoose.Schema.Types.ObjectId, ref: "DelivrBoys"
        }
    }
);

module.exports = mongoose.model("Rating", RatingSchema);