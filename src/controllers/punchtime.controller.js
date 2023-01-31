const { Op } = require("sequelize");
const PunchTimes = require("../models/punchtime.model");
const { currTime, currDate } = require("../resources/getDate");
const moment = require("moment/moment");

exports.punchStart = async (req, res) => {
  const user = req.user;

  const ptRecord = await PunchTimes.findOne({
    where: { [Op.and]: { user: user, date: currDate() } },
  });

  if (ptRecord !== null) {
    res.status(400).json({ message: "You already punch your timings" });
  } else {
    try {
      await PunchTimes.create({
        user: user,
        punch_start_time: currTime(),
        punch_end_time: null,
        date: currDate(),
      });
      res.status(201).json({ success: "Ok" });
    } catch (err) {
      res.status(400).status({ message: err.message });
    }
  }
};

exports.punchEnd = async (req, res) => {
  const user = req.user;

  const ptRecord = await PunchTimes.findOne({
    where: { [Op.and]: { user: user, date: currDate() } },
  });

  if (ptRecord === null) {
    res.status(400).json({ message: "You haven't punch your timings" });
  } else {
    try {
      await PunchTimes.update(
        { punch_end_time: currTime() },
        {
          where: { [Op.and]: { user: user, date: currDate() } },
        }
      );
      res.status(200).json({ success: "Ok" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
