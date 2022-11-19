const atk = require("../models/artikel")
const db = require("../config/koneksi")

module.exports = {
    halaman(req,res){
        res.render("forum",{
            url : db
        })
    },

    addArtikel: (req, res) => {
        try {
            const data = req.body
            const motor = new atk(data)
            motor.save()

            res.redirect("/utama")
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }       
    }
}