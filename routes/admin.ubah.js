const express = require("express")
const router = express.Router()

const {
    getAllArtikel,
    getArtikelByID,
    updateArtikelByID
} = require("../controllers/artikel.controller")

router.get("/", getAllArtikel)
router.get("/:id", getArtikelByID)
router.put("/:id", updateArtikelByID)

module.exports = router