const mongoose = require("mongoose")

const URL = "mongodb+srv://rezieq_fadillah:SIb2020@cluster0.suaymph.mongodb.net/ayf"
const db = mongoose.connect(URL)

module.exports = db