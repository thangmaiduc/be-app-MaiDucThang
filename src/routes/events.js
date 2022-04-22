const router = require('express').Router();
const {createEvent,getListOfEvent} =require('../controller/events')



//register
router.post('/', createEvent)
router.get('/:id', getListOfEvent)
//login
// router.post('/login' ,)

// get friends

module.exports=  router