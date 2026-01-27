const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const tokenTAKE = req.header("Authorization");
  if (!tokenTAKE) return res.status(401).json({ msg: "No token" });


   const token = tokenTAKE.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
