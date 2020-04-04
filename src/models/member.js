const mongoose = require('mongoose')
const validator = require('validator')

const memberSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        uppercase : true
    },
    email : {
        type : String,
        lowercase : true,
        required : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                return new Error('Enter valid email')
            }
        }
    },
    reg_no : {
        type : String,
        required : true,
        trim : true,
        uppercase : true
    },
    ph_no : {
        type : Number,
        required : true,
        trim : true
    },
    block : {
        type : String,
        required : true,
        trim : true,
        uppercase : true
    },
    room_no : {
        type : Number,
        required : true,
        trim : true
    },
    gender : {
        type : Number,
        required : true,
        trim : true,
    },
    year : {
        type : Number,
        required : true,
        trim : true
    },
    time_table : {
        type : String,
        required : true,
        trim : true
    },
    time_table_url : {
        type : String,
        required : true,
        trim : true
    }
})

const member = mongoose.model('Member',memberSchema)

module.exports = member