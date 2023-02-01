import Sequelize from "sequelize";
import sequelize from "../database";

const Positions = sequelize.define("Positions", {
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

export default Positions;
