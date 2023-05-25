const jwt = require('jsonwebtoken');
const userModel = require('../models/User')

const createUser = async (req, res) => {
    try {
        const {name, email, phoneNo} = req.body;

        const user =  userModel({
          name, email, phoneNo
        })
     
        const saveduser = await user.save();

        const token = jwt.sign({ id: saveduser._id }, process.env.SECRETKEY );

        res.status(200).send({
         success: true,
         message: "User created Successfully",
         saveduser,
         token
        }) 

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error
        }) 
    }
  
}

module.exports = createUser;