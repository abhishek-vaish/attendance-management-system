const { Sequelize } = require("sequelize");

class Connection {
  sequelize;
  #dbURI;

  constructor() {
    this.#dbURI = `${process.env.DIALECT}://${process.env.USER}:${process.env.DBPASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DBNAME}`;
    this.sequelize = new Sequelize(this.#dbURI);
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

exports.connection = new Connection();
