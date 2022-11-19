const express = require("express")
const router = express.Router()

const {
    halaman,
    addUser
} = require("../controllers/regis.controller")

router.get("/", halaman)
router.post("/", addUser)

module.exports = router