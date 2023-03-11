const router = require("express").Router();
const User = require("../models/UserSchema");
const Restaurant = require("../models/RestaurantSchema");
const DelivrBoy = require("../models/DelivrBoysSchema");


//register user
router.post("/register/user",async (req,res) => {

    const newUser = new User({
        username: req.body.username,
        userEmail: req.body.email,
        userPassword: req.body.password,
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//register Restaurant
router.post("/register/restaurant", async (req, res) => {

    const newRestaurant = new Restaurant({
        resName: req.body.username,
        resEmail: req.body.email,
        resPassword: req.body.password,
    });

    try {
        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch(err) {
        res.status(500).json(err);
    }
})

//register DelivrBoy
router.post("/register/deliveryboy", async (req, res) => {

    const newDeliverBoy = new DelivrBoy({
        delivryBoyNam: req.body.username,
        boyEmail: req.body.email,
        bpyPassword: req.body.password,
    });

    try {
        const savedDelivrBoy = await newDeliverBoy.save();
        res.status(201).json(savedDelivrBoy);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router