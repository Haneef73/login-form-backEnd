const express = require('express');
const router = express.Router();
const userRouter = require('./userSchema');

router.post("/", async (req, res) => {
    let findEmail = await userRouter.findOne({
        Email: req.body.Email
    });

    if (findEmail) {
        return res.sendStatus(404);
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
        Email: req.body.Email,
        Password: req.body.Password,
    });

    if (!findEmail || (!findEmail && !Password)) {
        return res.sendStatus(404);
    }else{
        return res.json(findEmail);
    }
})

router.get("/", async (req, res) => {
    var findData = await userRouter.find();
    res.json(findData);
})


module.exports = router;