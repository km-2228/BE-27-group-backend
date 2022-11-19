const usr = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    login: async (req,res) => {
        try {
            const data = req.body

            const user = await usr.findOne({ nama: data.nama})
            
            if(!user)res.status(400).send("Akun tidak ditemukan")

            const checkPs = bcrypt.compareSync(data.password, user.password)
            console.log(checkPs)

            if (checkPs) {
                const token = jwt.sign({username: user.nama},
                    process.env.TOKEN_KEY, {expiresIn: "1h"})

                res.header("auth-token", token)
                res.json({
                    message: "anda berhasil login"
                })
            } else {
                res.status(400).send("Nama dan password tidak sama")
            }
        } catch (error) {
        }
    }
}