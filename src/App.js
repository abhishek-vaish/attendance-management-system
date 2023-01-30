const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connection = require("./database/connection");
const router = require("./routes/authentication.routes");

class App {
  expressApp;

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());
    this.expressApp.use(cors());
    this.expressApp.use(cookieParser());
    connection.connection.authenticate();
    this.expressApp.use("/api/v1", router);
  }

  listen() {
    this.expressApp.listen(process.env.SERVERPORT, () => {
      console.log(`Server is running on PORT: ${process.env.SERVERPORT}`);
    });
  }
}

exports.app = new App();
