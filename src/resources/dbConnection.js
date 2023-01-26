const Sequelize = require("sequelize");

export class DBConnection {
  #dbURI;
  static dbServer;

  constructor(dbURI) {
    this.#dbURI = dbURI;
    DBConnection.dbServer = new Sequelize(this.#dbURI);
  }

  connect() {
    try {
      DBConnection.dbServer.authenticate();
      console.log("Database successfully connected!!");
    } catch (err) {
      console.log("Something went wrong while connection to database.");
    }
  }
}
