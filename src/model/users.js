const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    firstName:{
        type: String,
        max: 50,
        require: true
    },
    lastName:{
        type: String,
        require: true,
        max: 50
    },
    hobbies:{
        type: Array
    },
    workLocation : {
        type : String
        
    },
    role:{
        type: String,
        default:''
    }
    
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)