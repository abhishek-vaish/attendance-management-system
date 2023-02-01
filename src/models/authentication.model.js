import Sequelize from "sequelize";
import Users from "./users.model";
import sequelize from "../database";

const Authentication = sequelize.define("Authentication", {
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

Users.hasOne(Authentication, { foreignKey: { name: "user" } });
Authentication.belongsTo(Users, { foreignKey: { name: "user" } });

export default Authentication;
