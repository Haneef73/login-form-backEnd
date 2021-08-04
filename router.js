const express = require('express');
const router = express.Router();
const userRouter = require('./userSchema');

router.post("/", async (req, res) => {
    let findEmail = await userRouter.findOne({
        Email: req.body.Email
    });

    if (findEmail) {
        return res.status(404).send("Email-ID Already ragistered, Pls goto Login");
    }

    if (!findEmail) {
        var data = new userRouter({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: req.body.Password
        })

        await data.save();
        res.json(data);
    }
})

router.post("/login", async (req, res) => {
    let findEmail = await userRouter.findOne({
        Email: req.body.Email
    });

    if (!findEmail) {
        return res.status(404).send("Invalid Email-ID");
    } else if (findEmail.Password != req.body.Password) {
        return res.status(404).send("Wrong password");
    } else {
        return res.json(findEmail);
    }
})

router.get("/", async (req, res) => {
    var findData = await userRouter.find();
    res.json(findData);
})


module.exports = router;