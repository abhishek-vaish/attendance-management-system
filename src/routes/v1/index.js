import { Router } from "express";
import authentication from "./authentication.route";
import user from "./user.route";
import punchtime from "./punchtime.route";

const routes = new Map([
  ["/authentication", authentication],
  ["/user", user],
  ["/punchtime", punchtime],
]);

const router = Router();
routes.forEach((route, prefix) => {
  router.use(prefix, route);
});

export default router;
