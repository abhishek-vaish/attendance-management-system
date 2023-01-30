const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Authentication = require("./authentication.model");

const Token = connection.sequelize.define("Token", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  authentication: {
    type: Sequelize.INTEGER,
  },
  token: {
    type: Sequelize.STRING,
  },
});

Token.associate = (models) => {
  Authentication.hasOne(models.Token, { foreignKey: "authentication" });
  Token.belongsTo(models.Authentication, { foreignKey: "authentication" });
};
module.exports = Token;
