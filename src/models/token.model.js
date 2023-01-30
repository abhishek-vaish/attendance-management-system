const Sequelize = require("sequelize");
const { app, Authentication } = require(".");

module.exports = app.sequelize.define("Token", {
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

Authentication.hasOne(Token, { foreignKey: "authentication" });
Token.belongsTo(Authentication, { foreignKey: "authentication" });
