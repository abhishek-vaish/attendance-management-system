import { v4 } from "uuid";

import Users from "../models/users.model";
import Authentication from "../models/authentication.model";
import Token from "../models/token.model";
import { hash, decrypt } from "../utilities";

export const signup = async (req, res) => {
  try {
    const authCheck = await Authentication.findOne({
      where: { username: req.body["username"] },
      attributes: ["id"],
    });
    if (authCheck !== null) {
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

export const signin = async (req, res) => {
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

export const signout = async (req, res) => {
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
