import { Server } from "http";

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import sequelize from "./database";
import routes from "./routes";
import { CONFIG } from "./settings";

async function main() {
  const application = express();
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());
  application.use(cors());
  application.use(cookieParser());
  routes.forEach((router, prefix) => {
    application.use(prefix, router);
  });
  const serverOptions = {};
  const server = new Server(serverOptions, application);

  await sequelize.authenticate();
  server.listen(CONFIG.PORT, "::", () => {
    console.log(server.address());
  });
}

main();
