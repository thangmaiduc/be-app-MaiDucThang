const router = require('express').Router();
const { validate } = require("../middleware/validation");

  

const { login } = require('../controller/auth');



//register
router.post('/login',validate.validateLogin(),login )
//login
// router.post('/login' ,)

// get friends

module.exports=  router