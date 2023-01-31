const { Router } = require("express");

const { isAuthenticated, getUser } = require("../middlewares/isAuthenticated");
const { punchStart, punchEnd } = require("../controllers/punchtime.controller");

const router = Router();

router.post("/punch-start-time", [isAuthenticated, getUser], punchStart);
router.patch("/punch-end-time", [isAuthenticated, getUser], punchEnd);

module.exports = router;
