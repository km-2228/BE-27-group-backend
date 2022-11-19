const usr = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    addUser: (req, res) => {
        try {
            const data = req.body
        
            const saltRounds = 10
            const hash = bcrypt.hashSync(data.password, saltRounds)
            data.password = hash
        
            const user = new usr(data)
            user.save()

            res.json({
                message: "Berhasil register"
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    }
}