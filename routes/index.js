const express = require("express")
const router = express.Router()

const loginRouter = require("./login.router")
const regisRouter = require("./regis.router")
const adminRouter = require("./admin.login")

//admin
const artikelRouter = require("./admin.artikel")
const akunRouter = require("./admin.akun")

// user
const utamaRouter = require("./user.utama")
const tambahRouter = require("./user.tambah")
const artikel2Router = require("./user.artikel")

const verifytoken = require("../middleware/verifytoken")

router.use("/login", loginRouter)
router.use("/regis", regisRouter)
router.use("/adminlogin", adminRouter)
router.use("/admin", verifytoken, artikelRouter)
router.use("/artikel", verifytoken, artikel2Router)
router.use("/admin/akun", verifytoken, akunRouter)
router.use("/utama", verifytoken, utamaRouter)
router.use("/tambah", verifytoken, tambahRouter)

module.exports = router