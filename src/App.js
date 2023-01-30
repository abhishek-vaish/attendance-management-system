const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connection = require("./database/connection");
const authRouter = require("./routes/authentication.routes");
const userRouter = require("./routes/user.routes");

class App {
  expressApp;

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());
    this.expressApp.use(cors());
    this.expressApp.use(cookieParser());
    connection.connection.authenticate();
    this.expressApp.use("/api/v1", authRouter);
    this.expressApp.use("/api/v1", userRouter);
  }

  listen() {
    this.expressApp.listen(process.env.SERVERPORT, () => {
      console.log(`Server is running on PORT: ${process.env.SERVERPORT}`);
    });
  }
}

exports.app = new App();
