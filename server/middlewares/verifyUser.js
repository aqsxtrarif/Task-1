const  jwt  = require("jsonwebtoken");

const verifyUser = (req, res, next ) => {
    try {
        const token = req.headers['auth-token'];
   
        if(!token) return res.status(401).send({
         success: false,
         message: "Unauthorized"
        });
     
        const userId = jwt.verify(token, process.env.SECRETKEY);
        console.log(userId);
        req.user = userId ;
        next();

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server error"
        })
    }
}

module.exports = verifyUser;