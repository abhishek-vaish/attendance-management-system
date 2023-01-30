const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Users = require("./users.model");

const Leave = connection.sequelize.define("Leave", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: Sequelize.INTEGER,
  },
  leave_start_date: {
    type: Sequelize.DATE,
  },
  leave_end_date: {
    type: Sequelize.DATE,
  },
  leave_type: {
    type: Sequelize.ENUM(
      "Standard",
      "Earned",
      "Bereavement",
      "Leave Without Pay",
      "Optional Holiday",
      "Paternity",
      "Sabbatical"
    ),
  },
  leave_reason: {
    type: Sequelize.STRING,
  },
  approvals: {
    type: Sequelize.BOOLEAN,
  },
  approval_date: {
    type: Sequelize.DATE,
  },
});

Users.hasMany(Leave, { foreignKey: "user" });
Leave.belongsTo(Users, { foreignKey: "user" });

module.exports = Leave;
