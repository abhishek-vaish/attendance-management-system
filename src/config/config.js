require("dot-env").config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    host: process.env.HOSTNAME,
    dialect: process.env.DIALECT,
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    host: process.env.HOSTNAME,
    dialect: process.env.DIALECT,
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    host: process.env.HOSTNAME,
    dialect: process.env.DIALECT,
  },
};
