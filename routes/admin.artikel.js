const express = require("express")
const router = express.Router()

const {
    homeAdmin,
    getAllArtikel,
    getArtikelByID,
    deleteArtikelByID,
    updateArtikelByID
} = require("../controllers/artikel.controller")

router.get("/", homeAdmin)
router.get("/data/", getAllArtikel)
router.get("/data/:id", getArtikelByID)
router.delete("/data/:id", deleteArtikelByID)
router.put("/data/:id", updateArtikelByID)

module.exports = router