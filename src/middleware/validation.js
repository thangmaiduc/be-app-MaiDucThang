const {check} = require('express-validator');

let validateRegister = () => {
  return [ 
    check('email', 'Email không chính xác').not().isEmpty(),
    check('lastName', 'Tên không chính xác').not().isEmpty(),
    check('firstName', 'Tên không chính xác').not().isEmpty(),
    check('email', 'Email không chính xác').isEmail(),
  ]; 
}

let validateLogin = () => {
  return [ 
    check('email', 'Email không chính xác').not().isEmpty(),
    check('password', 'Password không chính xác').not().isEmpty(),
    check('email', 'Email không chính xác').isEmail()
  ]; 
}

let validate = {
    validateRegister,
    validateLogin,
    
  };
  
  module.exports = {validate};