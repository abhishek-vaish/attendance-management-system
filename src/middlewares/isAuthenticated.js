import Authentication from "../models/authentication.model";
import Token from "../models/token.model";

export const isAuthenticated = async (req, res, next) => {
  const authHeader = await req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.status(401).json({ message: "Unauthorized" });
  }
  req.token = token;
  next();
};

export const getUser = async (req, res, next) => {
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
