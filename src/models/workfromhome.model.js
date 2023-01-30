const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Users = require("./users.model");

const WorkFromHome = connection.sequelize.define("WorkFromHome", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: Sequelize.INTEGER,
  },
  wfh_reason: {
    type: Sequelize.STRING,
  },
  punch_time: {
    type: Sequelize.TIME,
  },
});

Users.hasMany(WorkFromHome, { foreignKey: "user" });
WorkFromHome.belongsTo(Users, { foreignKey: "user" });

module.exports = WorkFromHome;
