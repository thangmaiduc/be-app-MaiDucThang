const router = require("express").Router();
const {
  registerEvent,
  unsubscribingAccount,
  editInfoUser,
  getEventRegisted,
} = require("../controller/users");
const { authUser, authRole } = require("../middleware/auth");

//register
router.post("/register", registerEvent);
router.get("/list-event", authUser, authRole("admin"), getEventRegisted);
router.post("/unsubscribe/:id", unsubscribingAccount);
router.patch("/:id", authUser, authRole("admin"), editInfoUser);
//login
// router.post('/login' ,)

// get friends

module.exports = router;
