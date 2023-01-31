const Authentication = require("../models/authentication.model");
const Token = require("../models/token.model");

exports.isAuthenticated = async (req, res, next) => {
  const authHeader = await req.headers["authorization"];
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
    include: { model: Authentication },
  });

  if (authenticatedUser === null) {
    res.status(401).json({ message: "Unauthorized" });
  }

  req.user = authenticatedUser.toJSON()["Authentication"]["user"];
  next();
};
