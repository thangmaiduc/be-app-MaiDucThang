const mongoose = require('mongoose')
const Schema = mongoose.Schema({
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
    timestamps: true,
    toJSON: { virtuals: true},
    toObject: { virtuals: true}
})
Schema.virtual('members', {
    ref: 'User',
    localField: 'participants',
    foreignField: '_id'
})

module.exports = mongoose.model('Event', Schema)