const { v4 } = require("uuid");

const Users = require("../models/users.model");
const Authentication = require("../models/authentication.model");
const Token = require("../models/token.model");
const { hash, decrypt } = require("../resources");

exports.signup = async (req, res) => {
  try {
    const authCheck = Authentication.findOne({
      where: { username: req.body["username"] },
      attributes: ["id"],
    });
    if (authCheck === null) {
      res.status(406).json({ message: "Username already exist." });
    } else {
      var user = await Users.create({
        emp_id: req.body["emp_id"],
        name: req.body["name"],
        department: req.body["department"],
        position: req.body["position"],
        start_time: req.body["start_time"],
        end_time: req.body["end_time"],
        report_manager: req.body["report_manager"],
        project_manager: req.body["project_manager"],
        is_active: true,
      });
      await Authentication.create({
        user: user.id,
        username: req.body["username"],
        password: hash(req.body["password"]),
        is_active: true,
      });
    }

    res.status(201).json({ success: "Ok", user: user.id });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong while saving a record: " + err,
    });
  }
};

exports.signin = async (req, res) => {
  const loginUser = await Authentication.findOne({
    where: { username: req.body.username },
    attributes: ["id", "password"],
  });

  if (loginUser === null) {
    res.status(404).json({ message: "User not found!!" });
  } else {
    if (decrypt(req.body.password, loginUser.password)) {
      const token = await Token.create({
        authentication: loginUser.id,
        token: v4(),
      });
      res.setHeader("Authorization", "Bearer " + token.token);
      res.status(201).json({ success: "Ok", token: token.token });
    } else {
      res
        .status(404)
        .json({ message: "Something went wrong while validating a user." });
    }
  }
};

exports.signout = async (req, res) => {
  console.log(req.token);
  const token = req.token;

  if (token === null) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    const authenticatedUser = await Token.findOne({ where: { token: token } });
    if (authenticatedUser === null) {
      res.status(404).json({
        message: "Something went wrong while validating authentication",
      });
    }
    await authenticatedUser.destroy();

    res.status(204).json({ success: "Ok" });
  }
};
