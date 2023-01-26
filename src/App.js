const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Connection } = require("./database/connection");
require("dotenv").config();

class App {
  #dbURI;
  app;
  dbConnection;

  constructor() {
    this.#dbURI = `${process.env.DIALECT}://${process.env.USER}:${process.env.DBPASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DBNAME}`;
    this.app = express();
    this.app.use(cors());
    this.app.use(cookieParser());
    this.dbConnection = new Connection(this.#dbURI);
    this.dbConnection.authenticate();
  }

  listen() {
    this.app.listen(process.env.SERVERPORT, () => {
      console.log(`Server is running on PORT: ${process.env.SERVERPORT}`);
    });
  }
}

module.exports = {
  App,
};
