const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const adminSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }]
})

adminSchema.methods.generateAuthToken = async function(){
    const user = this

    const token = jwt.sign({
        _id : user._id
    }, process.env.SECURITY_KEY, {
        expiresIn : '12 hours'
    })

    user.tokens = user.tokens.concat(token)

    await user.save()
    return(token)
}

adminSchema.statics.authenticateAdmin = async function(username, password){
    const admin = await Admin.findOne({
        username
    })

    if(!admin){
        return 'Invalid user'
    }

    const validate = await bcrypt.compare(password,admin.password)

    if(!validate){
        return 'Invalid credentials'
    }

    return(admin)
}

const Admin = mongoose.model(adminSchema)

module.exports = Admin