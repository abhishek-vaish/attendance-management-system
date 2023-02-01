import { Router } from "express";

import { isAuthenticated, getUser } from "../../middlewares/isAuthenticated";
import { punchStart, punchEnd } from "../../controllers/punchtime.controller";

const router = Router();

router.post("/punch-start-time", [isAuthenticated, getUser], punchStart);
router.patch("/punch-end-time", [isAuthenticated, getUser], punchEnd);

export default router;
