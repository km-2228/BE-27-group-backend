const express = require("express")
const router = express.Router()

const loginRouter = require("./login.router")
const regisRouter = require("./regis.router")

//admin
const artikelRouter = require("./admin.artikel")
const ubahRouter = require("./admin.ubah")
const akunRouter = require("./admin.akun")

// user
const utamaRouter = require("./user.utama")
const tambahRouter = require("./user.tambah")

const verifytoken = require("../middleware/verifytoken")

router.use("/login", loginRouter)
router.use("/regis", regisRouter)
router.use("/admin", verifytoken, artikelRouter)
router.use("/ubah", verifytoken, ubahRouter)
router.use("/admin/akun", verifytoken, akunRouter)
router.use("/utama", verifytoken, utamaRouter)
router.use("/tambah", verifytoken, tambahRouter)

module.exports = router