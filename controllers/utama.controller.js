const atk = require("../models/artikel")

module.exports = {
    getAllArtikel: async (req, res) => {
        try {
            const artikels = await atk.find()
            res.json({
                data: artikels
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
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