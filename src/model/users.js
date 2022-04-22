const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email:{
        type: String,
        require: true,
        unique: true
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
        
    }
    
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)