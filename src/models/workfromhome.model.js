import Sequelize from "sequelize";

import Users from "../models/users.model";
import sequelize from "../database";

const WorkFromHome = sequelize.define("WorkFromHome", {
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

export default WorkFromHome;
