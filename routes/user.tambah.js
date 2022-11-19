const express = require("express")
const router = express.Router()

const {
    halaman,
    addArtikel
} = require("../controllers/tambah.controller")

router.get("/", halaman)
router.post("/", addArtikel)

module.exports = router