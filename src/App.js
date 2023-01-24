const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dot-env").config();
const { DBConnection } = require("./resources");

export class App {
  #dbURI;
  app;
  dbConnection;

  constructor() {
    this.#dbURI = `${process.env.DIALECT}://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOSTNAME}:${process.env.PORT}/${process.env.DBNAME}`;
    this.app = express();
    this.app.use(cors());
    this.app.use(cookieParser());
    this.dbConnection = new DBConnection(this.#dbURI);
    this.dbConnection.connect();
  }

  listen() {
    this.app.listen(process.env.SERVERPORT, () => {
      console.log(`Server is running on PORT: ${process.env.SERVERPORT}`);
    });
  }
}
