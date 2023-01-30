const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
} = require("../controllers/authentication.controller");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.post("/register", signup);
router.post("/login", signin);
router.delete("/logout", isAuthenticated, signout);

module.exports = router;
