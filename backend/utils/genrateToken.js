import jwt from 'jsonwebtoken';
const generateTokenAndCookie = (userId, res) => {
    const token = jwt.sign({ userId},process.env.JWT_SECRET,{
        expiresIn: '15 d'
    });
    res.cookie('jwt', token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true, //prevent xss attacks cross-site scripting attacks
        sameSite: "strict", //CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development", //cookie only works on https
    });
}

export default generateTokenAndCookie;