exports.isAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.status(401).json({ message: "Unauthorized" });
  }
  req.token = token;
  next();
};
