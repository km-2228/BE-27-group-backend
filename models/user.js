const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("user", userSchema)

module.exports = user