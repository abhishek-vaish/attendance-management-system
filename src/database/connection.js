const { Sequelize } = require("sequelize");

class Connection {
  sequelize;

  constructor(dbURI) {
    this.sequelize = new Sequelize(dbURI);
  }

  authenticate() {
    try {
      this.sequelize.authenticate();
      console.log("Database Connected Successfully");
    } catch (err) {
      console.log(
        "Something went wrong while connecting to database: ",
        err.message
      );
    }
  }
}

module.exports = {
  Connection,
};
