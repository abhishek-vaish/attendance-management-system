import { Sequelize } from "sequelize";

import { CONFIG } from "../settings";

const sequelize = new Sequelize({
  ...CONFIG.DATABASE,
  define: { freezeTableName: true },
});

export default sequelize;
