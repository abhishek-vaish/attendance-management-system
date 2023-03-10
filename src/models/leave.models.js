import Sequelize from "sequelize";
import Users from "./users.model";
import sequelize from "../database";

const Leave = sequelize.define("Leave", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: Sequelize.INTEGER,
  },
  leave_start_date: {
    type: Sequelize.DATEONLY,
  },
  leave_end_date: {
    type: Sequelize.DATEONLY,
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
    type: Sequelize.DATEONLY,
  },
});

Users.hasMany(Leave, { foreignKey: "user" });
Leave.belongsTo(Users, { foreignKey: "user" });

export default Leave;
