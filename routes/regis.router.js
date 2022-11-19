const express = require("express")
const router = express.Router()

const {
    addUser
} = require("../controllers/regis.controller")

router.post("/", addUser)

module.exports = router