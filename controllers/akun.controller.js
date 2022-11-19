const usr = require("../models/user")

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const motors = await usr.find()
            res.json({
                data: motors
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    }
}