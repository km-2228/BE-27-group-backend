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
    },

    deleteArtikelByID: async (req, res) => {
        const id  = req.params.id
        try {
            const hapus = await mtr.findByIdAndDelete(id)
            if(!hapus) return res.status(404).json({message: "Data tidak ada"})
            return res.json({message: "Data berhasil dihapus"})
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    updateArtikelByID: async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body

            const perbarui =  await mtr.findByIdAndUpdate(id, data, { new: true})
            if(!perbarui) return res.status(404).json({message: "Data tidak ada"})
            return res.json({
                message: "Data berhasil di update",
                data: perbarui
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        } 
    }
}