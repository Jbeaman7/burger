const express = require("express");
const Burger = require("../models/burger.js");

const router = express.Router();


router.get("/", (req, res,) => {
    Burger.all((err, data) => {
        res.render("index", {
            burgers: data
        });
        
    });
    console.log("asdfasdf");
   
});

router.get("/api/all", (req, res) => {
    Burger.all((err, data) => res.json(data));
});

router.post("/api/add", (req, res) => {
    Burger.add((err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(data);
        };
    });
});

router.put("/api/update", (req, res) => {
    Burger.edit(req.body, (err, data) => res.json(data));
})

module.exports = router;