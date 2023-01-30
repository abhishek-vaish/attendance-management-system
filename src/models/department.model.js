const Sequelize = require("sequelize");
const { connection } = require("../database/connection");

const Departments = connection.sequelize.define("Departments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  is_active: Sequelize.BOOLEAN,
});

module.exports = Departments;
