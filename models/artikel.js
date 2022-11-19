const mongoose = require("mongoose")
const { Schema } = mongoose

const artikelSchema = new Schema({
    judul: String,
    isi: String
})

const artikel = mongoose.model("artikel", artikelSchema)

module.exports = artikel