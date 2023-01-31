const Token = require("../models/token.model");
const Authentication = require("../models/authentication.model");
const Users = require("../models/users.model");

exports.updateUser = async (req, res) => {
  const user = req.user;

  try {
    await Users.update(req.body, {
      where: { id: user },
    });
    res.status(200).json({ success: "Ok" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAuthentication = async (req, res) => {
  const token = req.token;

  const authenticatedUser = await Token.findOne({
    where: { token: token },
    attributes: ["authentication"],
  });

  try {
    await Authentication.update(req.body, {
      where: { id: authenticatedUser.toJSON()["authentication"] },
    });

    res.status(200).json({ success: "Ok" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const user = req.user;

  try {
    await Users.update({ is_active: false }, { where: { id: user } });
    res.status(201).json({ success: "Ok" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.deleteAuthentication = async (req, res) => {
  const token = req.token;

  const authenticatedUser = await Token.findOne({
    where: { token: token },
    attributes: ["authentication"],
  });

  try {
    await Authentication.update(
      { is_active: false },
      { where: { id: authenticatedUser.toJSON()["authentication"] } }
    );
    res.status(201).json({ success: "Ok" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
