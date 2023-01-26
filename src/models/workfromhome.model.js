const Sequelize = require("sequelize");
const { app, User } = require(".");

module.exports = app.sequelize.define("WorkFromHome", {
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

User.hasMany(WorkFromHome, { foreignKey: "user" });
WorkFromHome.belongsTo(User, { foreignKey: "user" });
