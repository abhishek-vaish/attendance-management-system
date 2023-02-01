import Sequelize from "sequelize";

import Leave from "./leave.models";
import Users from "./users.model";
import sequelize from "../database";

const Approvals = sequelize.define("Approvals", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  leave: {
    type: Sequelize.INTEGER,
  },
  report_manager: {
    type: Sequelize.INTEGER,
  },
  project_manager: {
    type: Sequelize.INTEGER,
  },
});

Approvals.hasOne(Leave, { foreignKey: "leave" });
Leave.belongsTo(Approvals, { foreignKey: "leave" });

Users.hasMany(Leave, { foreignKey: "report_manager" });
Leave.belongsTo(Users, { foreignKey: "report_manager" });

Users.hasMany(Leave, { foreignKey: "project_manager" });
Leave.belongsTo(Users, { foreignKey: "project_manager" });

export default Approvals;
