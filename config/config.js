require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  test: {
    username: process.env.USER,
    password: process.env.DBPASSWORD,
    database: "AttendanceManagement_Test",
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  production: {
    username: process.env.USER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
};
