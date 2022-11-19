const usr = require("../models/user")
const bcrypt = require("bcrypt")
const db = require("../config/koneksi")

module.exports = {
    halaman(req,res){
        res.render("register",{
            url : db
        });
    },

    addUser: (req, res) => {
        console.log(req.body);
        try {
            const data = req.body
            
            const saltRounds = 10
            const hash = bcrypt.hashSync(data.password, saltRounds)
            data.password = hash
        
            const user = new usr(data)
            user.save()

            res.redirect('/');
        } catch (error) {
            return res.status(400).send("Aduh eror registrasdefefi")
        }
    }
}