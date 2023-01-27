const Sequelize = require("sequelize");
const { app, Users } = require(".");

module.exports = app.sequelize.define("Authentication", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: Sequelize.INTEGER,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
  },
});

Users.hasOne(Authentication, { foreignKey: "user" });
Authentication.belongsTo(Users, { foreignKey: "user" });
