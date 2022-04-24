const User = require("../model/users");
const Event = require("../model/events");
var { validationResult } = require("express-validator");


const registerEvent = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new Error("Dữ liệu nhập vào không hợp lệ");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    let user;
    const { nameEvent, firstName, lastName, email, workLocation, hobbies } =
      req.body;
    if (nameEvent === "Event A") {
      user = new User({ firstName, lastName, email, workLocation });
    } else if (nameEvent === "Event B") {
      user = new User({ firstName, lastName, email, hobbies });
    }
    const event = await Event.findOne({ nameEvent });
    await user.save();

    await event.updateOne({
      $push: {
        participants: user._id.toString(),
      },
    });

    res.status(201).json({ msg: "Subscribed successfully" });
  } catch (error) {
    next(error);
  }
};

const unsubscribingAccount = async (req, res, next) => {
  try {
    const { id } = req.params;
    user = await User.deleteOne({ _id: id });
    let events = await Event.find({});
    await Promise.all(
      events.map(async (evt) => {
        if (evt.participants.includes(id)) {
          await evt.updateOne({
            $pull: {
              participants: id,
            },
          });
          console.log(evt);
        }
      })
    );
    res.status(201).json({ msg: "Unsubscribed successfully", user });
  } catch (error) {
    next(error);
  }
};
const editInfoUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userEdit = await User.findById(id);
    if (!userEdit) {
      let error = new Error("the user is not found or the id is incorrect");
      error.statusCode = 404;
      throw error;
    }
    if (userEdit.password) {
      let error = new Error("unauthorized");
      error.statusCode = 403;
      throw error;
    }
    let keys = Object.keys(req.body);
    keys.forEach((key) => {
      userEdit[key] = req.body[key];
    });
    userEdit.save();
    res.status(200).json(userEdit);
  } catch (error) {
    next(error);
  }
};
const getEventRegisted = async (req, res, next) => {
  try {
    const { email } = req.body;
    let users = await User.find({ email });
    
    users= await
       Promise.all( users.map(async user=>{
            id = user._id.toString()
            events =  await Event.find({participants :id })
            newUser= {...user._doc, events}
            return newUser

        }))

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  registerEvent,
  unsubscribingAccount,
  editInfoUser,
  getEventRegisted,
};
