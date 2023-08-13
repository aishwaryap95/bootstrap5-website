var jwt = require("jsonwebtoken");

const JWT_SECRET = "Aishwaryaisagoodgirl";

const fetchuser = (req, res, next) => {
  // GET the user from jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Pease authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Pease authenticate using valid token" });
  }
};

module.exports = fetchuser;
