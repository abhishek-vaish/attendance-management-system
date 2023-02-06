import Token from "../models/token.model";
import Authentication from "../models/authentication.model";
import Users from "../models/users.model";

export const updateUser = async (req, res) => {
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

export const updateAuthentication = async (req, res) => {
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

export const deactivateUser = async (req, res) => {
  const user = req.user;

  try {
    await Users.update({ is_active: false }, { where: { id: user } });
    res.status(200).json({ success: "Ok" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const deactivateAuthentication = async (req, res) => {
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
    res.status(200).json({ success: "Ok" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
