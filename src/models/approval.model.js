const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Leave = require("./leave.models");
const Users = require("./users.model");

const Approvals = connection.sequelize.define("Approvals", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  leave: {
    type: Sequelize.INTEGER,
  },
  report_manager: {
    type: Sequelize.INTEGER,
  },
  project_manager: {
    type: Sequelize.INTEGER,
  },
});

Approvals.associate = (models) => {
  Approvals.hasOne(models.Leave, { foreignKey: "leave" });
  Leave.belongsTo(models.Approvals, { foreignKey: "leave" });

  Users.hasMany(models.Leave, { foreignKey: "report_manager" });
  Leave.belongsTo(models.Users, { foreignKey: "report_manager" });

  Users.hasMany(models.Leave, { foreignKey: "project_manager" });
  Leave.belongsTo(models.Users, { foreignKey: "project_manager" });
};

module.exports = Approvals;
