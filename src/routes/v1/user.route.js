import { Router } from "express";

import { isAuthenticated, getUser } from "../../middlewares/isAuthenticated";
import {
  updateUser,
  updateAuthentication,
  deleteUser,
  deleteAuthentication,
} from "../../controllers/users.controller";

const router = Router();

router.patch("/update-user", [isAuthenticated, getUser], updateUser);
router.patch("/update-authentication", isAuthenticated, updateAuthentication);
router.patch("/delete-user", [isAuthenticated, getUser], deleteUser);
router.patch("/delete-authentication", isAuthenticated, deleteAuthentication);

export default router;
