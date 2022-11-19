const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    
    const token = req.cookies.access_token
    
    try {
        if(token){
            const verifikasi = jwt.verify(token, process.env.TOKEN_KEY)
            req.user = verifikasi
            next()
        } else {
            return res.status(401).render("middleware")
        }
    } catch (error) {
        res.status(400).render("middleware")
    } 
}

module.exports = auth