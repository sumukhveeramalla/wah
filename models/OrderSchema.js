const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            unique: true,
            require: true
        },
        totalPrice: {
            type: Number,
        },
        items: {
            type: Array,
            require: true,
            default: []
        }
    }
)

module.exports = mongoose.model("Order", OrderSchema);