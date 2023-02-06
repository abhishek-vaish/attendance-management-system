import fs from "fs";
import path from "path";

require("dotenv").config();

export const BASE_DIR = path.dirname(__dirname);
export const ENVIRONMENT = process.env.AMS_ENV || "development";
export const CONFIG = JSON.parse(
  fs.readFileSync(
    path.join(BASE_DIR, "resources", `${ENVIRONMENT}.json`),
    "utf-8"
  )
);

export default { ENVIRONMENT: CONFIG.DATABASE };
