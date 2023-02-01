import { Op } from "sequelize";

import PunchTimes from "../models/punchtime.model";
import { currDate, currTime } from "../utilities/getDate";

export const punchStart = async (req, res) => {
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

export const punchEnd = async (req, res) => {
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
