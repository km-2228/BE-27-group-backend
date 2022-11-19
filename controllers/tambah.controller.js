const atk = require("../models/artikel")

module.exports = {
    addArtikel: (req, res) => {
        try {
            const data = req.body
            const motor = new atk(data)
            motor.save()

            res.json({
                message: "data telah diinput"
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }       
    }
}