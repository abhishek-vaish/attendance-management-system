import { Router } from "express";

import { isAuthenticated, getUser } from "../../middlewares/isAuthenticated";
import {
  updateUser,
  updateAuthentication,
  deactivateUser,
  deactivateAuthentication,
} from "../../controllers/users.controller";

const router = Router();

router.patch("/update-user", [isAuthenticated, getUser], updateUser);
router.patch("/update-authentication", isAuthenticated, updateAuthentication);
router.patch("/deactivate-user", [isAuthenticated, getUser], deactivateUser);
router.patch(
  "/deactivate-authentication",
  isAuthenticated,
  deactivateAuthentication
);

export default router;
