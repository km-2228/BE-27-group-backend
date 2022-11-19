const express = require("express")
const router = express.Router()

const {
    halaman,
    login
} = require("../controllers/admin.controller")

router.get("/", halaman)
router.post("/", login)

module.exports = router