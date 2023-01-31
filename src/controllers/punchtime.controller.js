const { Op, where } = require("sequelize");
const PunchTimes = require("../models/punchtime.model");

const currentDate = new Date();
const currTime =
  (currentDate.getHours() < 10 ? "0" : "") +
  currentDate.getHours() +
  ":" +
  (currentDate.getMinutes() < 10 ? "0" : "") +
  currentDate.getMinutes() +
  ":" +
  (currentDate.getSeconds() < 10 ? "0" : "") +
  currentDate.getSeconds();

const currDate =
  (currentDate.getFullYear() < 10 ? "0" : "") +
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() < 9 ? "0" : "") +
  (currentDate.getMonth() + 1) +
  "-" +
  (currentDate.getDate() < 10 ? "0" : "") +
  currentDate.getDate();

exports.punchStart = async (req, res) => {
  const user = req.user;

  const ptRecord = await PunchTimes.findOne({
    where: { [Op.and]: { user: user, date: currDate } },
  });

  console.log(ptRecord.id);

  if (ptRecord !== null) {
    res.status(400).json({ message: "You already punch your timings" });
  } else {
    try {
      await PunchTimes.create({
        user: user,
        punch_start_time: currTime,
        punch_end_time: null,
        date: currDate,
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
    where: { [Op.and]: { user: user, date: currDate } },
  });

  if (ptRecord === null) {
    res.status(400).json({ message: "You haven't punch your timings" });
  } else {
    try {
      await PunchTimes.update(
        { punch_end_time: currTime },
        {
          where: { [Op.and]: { user: user, date: currDate } },
        }
      );
      res.status(200).json({ success: "Ok" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
