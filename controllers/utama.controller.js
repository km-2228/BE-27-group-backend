const atk = require("../models/artikel")
const db = require("../config/koneksi")

module.exports = {
    halaman(req,res){
        res.render("utama",{
            url : db
        })
    },

    getAllArtikel: async (req, res) => {
        try {
            const artikels = await atk.find()
            // res.json({
            //     data: artikels
            // })

            // console.log(artikels);
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
        
        res.render("utama",{
            url : db
        })
    },

    getArtikelByID: async (req, res) => {
        try {
            const id = req.params.id
            const artikels = await atk.findById(id)
            if(artikels){
                res.json({
                    data: artikels
                })
            } else {
                res.json({
                    message: "data tidak ada ni"
                })
            }
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    }
}