const Sequelize = require("sequelize");

const { connection } = require("../database/connection");
const Users = require("./users.model");

const PunchTimes = connection.sequelize.define("PunchTimes", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: { type: Sequelize.INTEGER },
  punch_start_time: { type: Sequelize.TIME },
  punch_end_time: { type: Sequelize.TIME },
  date: { type: Sequelize.DATEONLY },
});

Users.hasMany(PunchTimes, { foreignKey: "user" });
PunchTimes.belongsTo(Users, { foreignKey: "user" });

module.exports = PunchTimes;
