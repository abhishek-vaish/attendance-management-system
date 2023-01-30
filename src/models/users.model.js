const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Departments = require("./department.model");
const Positions = require("./position.model");

const Users = connection.sequelize.define("Users", {
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

Users.associate = (models) => {
  Departments.hasMany(models.Users, { foreignKey: "department" });
  Users.belongsTo(models.Departments, { foreignKey: "department" });

  Positions.hasMany(models.Users, { foreignKey: "position" });
  Users.belongsTo(models.Positions, { foreignKey: "position" });
};
module.exports = Users;
