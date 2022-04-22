const router = require("express").Router();
const { registerEvent, unsubscribingAccount } = require("../controller/users");

//register
router.post("/register", registerEvent);
router.post("/unsubscribe/:id", unsubscribingAccount);
//login
// router.post('/login' ,)

// get friends

module.exports = router;
