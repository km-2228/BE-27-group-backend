const express = require("express")
const router = express.Router()

const {
    getAllArtikel,
    getArtikelByID
} = require("../controllers/utama.controller")

// router.get("/", halaman)
router.get("/", getAllArtikel)
router.get("/:id", getArtikelByID)

module.exports = router