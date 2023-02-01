import Sequelize from "sequelize";

import Departments from "../models/department.model";
import Positions from "../models/position.model";
import sequelize from "../database";

const Users = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  department: {
    type: Sequelize.INTEGER,
  },
  position: {
    type: Sequelize.INTEGER,
  },
  start_time: {
    type: Sequelize.TIME,
  },
  end_time: {
    type: Sequelize.TIME,
  },
  report_manager: {
    type: Sequelize.INTEGER,
  },
  project_manager: {
    type: Sequelize.INTEGER,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
  },
});

Departments.hasMany(Users, { foreignKey: "department" });
Users.belongsTo(Departments, { foreignKey: "department" });

Positions.hasMany(Users, { foreignKey: "position" });
Users.belongsTo(Positions, { foreignKey: "position" });

export default Users;
