import Sequelize from "sequelize";

import Authentication from "../models/authentication.model";
import sequelize from "../database";

const Token = sequelize.define("Token", {
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

Authentication.hasOne(Token, { foreignKey: { name: "authentication" } });
Token.belongsTo(Authentication, { foreignKey: { name: "authentication" } });

export default Token;
