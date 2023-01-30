const Sequelize = require("sequelize");
const { connection } = require("../database/connection");

const Positions = connection.sequelize.define("Positions", {
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

module.exports = Positions;
