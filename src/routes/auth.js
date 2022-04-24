const router = require('express').Router();
;
const { login } = require('../controller/auth');



//register
router.post('/login',login )
//login
// router.post('/login' ,)

// get friends

module.exports=  router