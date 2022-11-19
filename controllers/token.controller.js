import Users from "../models/user.js";
import jwt from "jsonwebtoken";
 
export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.token;
        res.json({ refreshToken });
    } catch (error) {
        console.log(error);
    }
}