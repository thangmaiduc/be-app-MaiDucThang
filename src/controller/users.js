const User = require('../model/users')
const Event = require('../model/events')

const registerEvent=async(req, res, next)=>{
   try {
        let user;
       const {nameEvent,firstName,lastName,email,workLocation, hobbies } = req.body;
       if(nameEvent === 'Event A'){
           user = new User({firstName,lastName,email,workLocation});
       }else if(nameEvent === 'Event B'){
            user = new User({firstName,lastName,email, hobbies});
       }
       const event =await Event.findOne({nameEvent});
       await user.save();
       
       await event.updateOne({
            $push:{
                 participants: (user._id).toString()
            }
       })
       
       res.status(201).json({msg: 'Subscribed successfully'});
   } catch (error) {
       next(error)
   }
}

const unsubscribingAccount=async(req, res, next)=>{
    try {
        const {id} = req.params;
       user = await User.deleteOne({_id: id});
        let events =await Event.find({});
        await Promise.all( events.map(async evt=>{
            if(evt.participants.includes(id)){
               await evt.updateOne({
                    $pull:{
                        participants :  id
                    }
                })
                console.log(evt);
            }
        }))
       res.status(201).json({msg: 'Unsubscribed successfully',user});

   } catch (error) {
       next(error)
   }
}
module.exports ={
    registerEvent,
    unsubscribingAccount
}