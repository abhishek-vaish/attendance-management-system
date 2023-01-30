const Token = require("../models/Token.model");

exports.isAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.status(401).json({ message: "Unauthorized" });
  }
  req.token = token;
  next();
};

exports.getUser = async (req, res, next) => {
  const token = req.token;
  const authenticatedUser = await Token.findOne({
    where: { token: token },
    attributes: ["Authentication.user"],
    include: { model: "Authentication" },
  });

  if (authenticatedUser === null) {
    res.status(401).json({ message: "Unauthorized" });
  }

  req.user = authenticatedUser.toJSON()["Authentication"]["user"];
  next();
};
