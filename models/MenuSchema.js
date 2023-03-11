const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
    {
        menuId: {
            type: String,
            require: true,
            min: 5,
            unique: true
        },
        menuItem: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            require: true
        },
        itemImg: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model("Menu",MenuSchema);