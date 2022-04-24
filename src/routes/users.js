const router = require("express").Router();
const {validate} = require('../middleware/validation')

const {
  registerEvent,
  unsubscribingAccount,
  editInfoUser,
  getEventRegisted,
} = require("../controller/users");
const { authUser, authRole } = require("../middleware/auth");

//register
router.post("/register",validate.validateRegister(), registerEvent);
router.get("/list-event", authUser, authRole("admin"), getEventRegisted);
router.post("/unsubscribe/:id", unsubscribingAccount);
router.patch("/:id", authUser, authRole("admin"), editInfoUser);
//login
// router.post('/login' ,)

// get friends

module.exports = router;
