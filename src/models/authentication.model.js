const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Users = require("./users.model");

const Authentication = connection.sequelize.define("Authentication", {
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

Authentication.associate = (models) => {
  Users.hasOne(models.Authentication, { foreignKey: "user" });
  Authentication.belongsTo(models.Users, { foreignKey: "user" });
};

module.exports = Authentication;
