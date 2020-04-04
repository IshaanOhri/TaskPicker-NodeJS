const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

const auth = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decodedToken = jwt.verify(token,process.env.SECURITY_KEY)

        const admin = Admin.findOne({
            _id : decodedToken._id,
            "tokens.token" : token
        })

        if(!admin){
            throw new Error()
        }

        req.admin = admin

        next()

    }catch(error){
        res.status(403).send('Unauthorized User')
    }
}

module.exports = auth