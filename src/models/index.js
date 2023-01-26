const App = require("../App");
const Approvals = require("./approval.model");
const Departments = require("./department.model");
const Leave = require("./leave.models");
const Positions = require("./position.model");
const Users = require("./user.model");

const app = new App();

module.exports = {
  app,
  Approvals,
  Departments,
  Leave,
  Positions,
  Users,
};
