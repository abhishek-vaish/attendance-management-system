const { Router } = require("express");
const { isAuthenticated, getUser } = require("../middlewares/isAuthenticated");
const {
  updateUser,
  updateAuthentication,
  deleteUser,
  deleteAuthentication,
} = require("../controllers/users.controller");

const router = Router();

router.patch("/update-user", [isAuthenticated, getUser], updateUser);
router.patch("/update-authentication", isAuthenticated, updateAuthentication);
router.patch("/delete-user", [isAuthenticated, getUser], deleteUser);
router.patch("/delete-authentication", isAuthenticated, deleteAuthentication);

module.exports = router;
