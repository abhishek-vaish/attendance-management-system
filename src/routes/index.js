import { Router } from "express";
import v1 from "./v1";

const routes = new Map([["/v1", v1]]);

const router = Router();
routes.forEach((route, prefix) => {
  router.use(prefix, route);
});

export default new Map([["/api", router]]);
