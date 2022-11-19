const express = require("express")
const router = express.Router()

const {
    addArtikel
} = require("../controllers/tambah.controller")

router.post("/", addArtikel)

module.exports = router