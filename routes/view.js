const router = require("express").Router();
const User = require("../models/UserSchema");
const Restaurant = require("../models/RestaurantSchema");
const Menu = require("../models/MenuSchema");
const DelivrBoys = require("../models/DelivrBoysSchema");
const Order = require("../models/OrderSchema");
const Rating = require("../models/RatingSchema");

//view orders
router.get("/orders", function (req, res) {
    Order.find({}, (error, users) => {
        if (error) {
            res.send(error).status(400)
        } else {
            res.send(users).status(200);
        }
    })
})

//view menu
router.get("/menu", function (req, res) {
    Menu.find({}, (error, users) => {
        if (error) {
            res.send(error).status(400)
        } else {
            res.send(users).status(200);
        }
    })
})

//view ratings
router.get("/ratings", function (req, res) {
    Rating.find({}, (error, users) => {
        if (error) {
            res.send(error).status(400)
        } else {
            res.send(users).status(200);
        }
    })
})

//view users
router.get("/users", function (req, res) {
    User.find({}, (error, users) => {
        if (error) {
            res.send(error).status(400)
        } else {
            res.send(users).status(200);
        }
    })
})
//view delivrBoys
router.get("/delivrBoys", function (req, res) {
    DelivrBoys.find({}, (error, users) => {
        if (error) {
            res.send(error).status(400)
        } else {
            res.send(users).status(200);
        }
    })
})

//view restaurants
router.get("/restaurants",function(req,res){
    Restaurant.find({},(error,users) => {
        if(error){
            res.send(error).status(400)
        }else{
            res.send(users).status(200);
        }
    })
})

module.exports = router
