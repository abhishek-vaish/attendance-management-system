import { Router } from "express";

const router = Router();

import {
  signup,
  signin,
  signout,
} from "../../controllers/authentication.controller";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

router.post("/register", signup);
router.post("/login", signin);
router.delete("/logout", isAuthenticated, signout);

export default router;
