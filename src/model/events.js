const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    nameEvent:{
        type: String,
        require: true,
        unique: true
    },
    
    
    participants:{
        type: Array,
        default : []
    },
   
    
},{
    timestamps: true
})

module.exports = mongoose.model('Event', userSchema)