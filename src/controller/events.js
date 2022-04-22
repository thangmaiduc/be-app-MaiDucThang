const User = require("../model/users");
const Event = require("../model/events");

const createEvent = async (req, res, next) => {
  try {
    const { nameEvent } = req.body;
    let isEsxist = await Event.find({ nameEvent });
    if (isEsxist.length > 0) {
      const error = new Error("Tên event đã tồn tại");
      error.statusCode = 422;
      throw error;
    }
    let event = new Event({ nameEvent });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};
const getListOfEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    let event = await Event.findById(id);
    if (!event) {
      const error = new Error("Không tìm thấy event nào cả");
      error.statusCode = 404;
      throw error;
    }
    let users = await Promise.all(
      event.participants.map((userId) => {
        return User.findById(userId, {createdAt:0, updatedAt:0, password:0});
      })
    );

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const unsubscribingEvent = async (req, res, next) => {};

module.exports = { createEvent, getListOfEvent };
