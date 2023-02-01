import { Router } from "express";

const router = Router();

const {
  signup,
  signin,
  signout,
} = require("../../controllers/authentication.controller");
const { isAuthenticated } = require("../../middlewares/isAuthenticated");

router.post("/register", signup);
router.post("/login", signin);
router.delete("/logout", isAuthenticated, signout);

export default router;
