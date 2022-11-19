const express = require("express")
const db = require("./config/koneksi")
const app = express()
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
dotenv.config()

const allRoutes = require("./routes")
const authTokens = {};

app.use(express.json())


const PORT = process.env.URL
app.use(bodyParser.json());

// in latest body-parser use like below.
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

// app.use((req, res, next) => {
//     // console.log(req.cookies['token']);
//     // Get auth token from the cookies
//     const authToken = req.cookies['token'];

//     // Inject the user to the request
//     req.user = authTokens[authToken];
//     res.setHeader('auth-token', authToken)
//     next();
// })

// app.use(express.multipart())

app.use(express.static("views"))

app.engine("html", require("hbs").__express)
app.set("view engine", "html")

// app.engine("css", require("hbs").__express)
// app.set("view engine", "css")

db.
    then(() => {
        console.log("terhubung ke database")
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log("Server berjalan di PORT " + PORT)
})
app.use(allRoutes)