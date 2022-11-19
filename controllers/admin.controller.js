const usr = require("../models/admin")
const jwt = require("jsonwebtoken");
const db = require("../config/koneksi");

module.exports = {
    halaman(req,res){
        res.render("admin",{
            url : db
        });
    },
    login: async (req,res) => {
        console.log(req.body);
        try {
            const data = req.body
            
            const user = await usr.findOne({ username: data.username, password: data.password})
            
            // if(!user)res.status(400).send("Akun tidak ditemukan")
            if(!user){
                return res.json({
                    status:400,
                    message: "Akun tidak ditemukan",
                })
            }

            if (user) {
                const token = jwt.sign({username: user.username},
                    process.env.TOKEN_KEY, {expiresIn: "1h"})

                // res.header("auth-token", token)
                res.cookie("access_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                  })
                  
                console.log(res.cookie);
                return res.json({
                    status:200,
                    message: "Login Berhasil",
                })
                // res.redirect("/admin")
                return res
            } else {
                return res.json({
                    status:400,
                    message: "Nama dan Password tidak Sama",
                })
                res.status(400).send("Nama dan password tidak sama")
            }
        } catch (error) {
        }
    }
}