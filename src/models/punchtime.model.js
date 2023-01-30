const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Users = require("./users.model");

const PunchTime = connection.sequelize.define("PunchTime", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: { type: Sequelize.INTEGER },
  punch_start_time: { type: Sequelize.TIME },
  punch_end_time: { type: Sequelize.TIME },
  date: { type: Sequelize.DATE },
});

PunchTime.associate = (models) => {
  Users.hasMany(models.PunchTime, { foreignKey: "user" });
  PunchTime.belongsTo(models.Users, { foreignKey: "user" });
};

module.exports = PunchTime;
