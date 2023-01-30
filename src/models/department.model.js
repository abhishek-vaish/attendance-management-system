const Sequelize = require("sequelize");
const { app } = require("./index");

module.exports = app.sequelize.define("Departments", {
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
