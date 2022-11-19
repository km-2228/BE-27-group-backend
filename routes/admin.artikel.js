const express = require("express")
const router = express.Router()

const {
    getAllArtikel,
    getArtikelByID,
    deleteArtikelByID,
    updateArtikelByID
} = require("../controllers/artikel.controller")

router.get("/", getAllArtikel)
router.get("/:id", getArtikelByID)
router.delete("/:id", deleteArtikelByID)
router.put("/:id", updateArtikelByID)

module.exports = router