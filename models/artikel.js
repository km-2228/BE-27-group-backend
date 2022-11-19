const mongoose = require("mongoose")
const { Schema } = mongoose

const motorSchema = new Schema({
    judul: String,
    isi: String
})

const artikel = mongoose.model("artikel", motorSchema)

module.exports = artikel