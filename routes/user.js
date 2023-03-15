const router = require("express").Router();
const DelivrBoys = require("../models/DelivrBoysSchema");
const Restaurant = require("../models/RestaurantSchema")
const User = require("../models/UserSchema");


//update user info
router.put("/customer/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only your account");
    }
});

//delete user
router.delete("/customer/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account is deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account");
    }
});

//view user cart items
router.post("/customer/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findById(req.params.id);
            res.send(user.json())
            res.status(200)
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(400).json("Not permitted")
    }


});

//update deliveryboy info
router.put("/delivrBoys/:id", async (req, res) => {
    if (req.body.delivryBoyName === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await DelivrBoys.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only your account");
    }
});

//delete delivery boy 
router.delete("/delivrBoys/:id", async (req, res) => {
    if (req.body.delivryBoyName === req.params.id || req.body.isAdmin) {
        try {
            await DelivrBoys.findByIdAndDelete(req.params.id);
            res.status(200).json("Account is deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account");
    }
});


//view delivrBoys details
router.post("/delivrBoys/:id",async(req,res) => {
    if (req.body.delivryBoyName === req.params.id || req.body.isAdmin){
        try {
            const boy = await DelivrBoys.findById(req.params.id)
            res.send(boy.json())
            res.status(200)
        } catch (error) {
            return res.status(400).json(error)
        }
    }else{
        return res.status(403).json("Not permitted to see")
    }    

})

//restaurant update
router.put("/restaurant/:id", async (req, res) => {
    if (req.body.resName === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await Restaurant.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only your account");
    }
});

//delete restaurant
router.delete("/restaurant/:id", async (req, res) => {
    if (req.body.resName === req.params.id || req.body.isAdmin) {
        try {
            await Restaurant.findByIdAndDelete(req.params.id);
            res.status(200).json("Account is deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account");
    }
});

//view restaurant details
router.post("/restaurant/:id", async (req, res) => {
    if (req.body.resName === req.params.id || req.body.isAdmin) {
        try {
            const restaurant = await Restaurant.findById(req.params.id)
            res.send(restaurant.json())
            res.status(200)
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(403).json("Not permitted to see")
    }

})
module.exports = router
















