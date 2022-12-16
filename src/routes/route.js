const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")
const bookController = require('../controllers/bookController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", bookController.createBook)

router.get("/allBooks", bookController.allBooks)

// router.get('/createBook', )

module.exports = router;