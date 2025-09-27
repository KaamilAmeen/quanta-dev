const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require("path");
const { decode } = require("punycode");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const generateToken = (user) => {
  try {
    return jwt.sign(
      { id: user.user_id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1" }
    );
  } catch (error) {
    console.error({ error: error.message });
    throw new Error("Error generating token");
  }
};

const authMiddleware = (roles = []) => {
  try {
    return (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader)
        return res.status(401).json({ message: "No token provided" });

      const token = authHeader.split(" ")[1];
      jwt.verify(
        token,
        process.env.JWT_SECRET || "supersecret",
        (err, decoded) => {
          if (err) return res.status(403).json({ message: "Invalid token" });

          req.user = decoded;

          if (
            roles.length &&
            !decoded.roles.some((r) => roles.includes(r.role_name))
          ) {
            return res.status(403).json({ message: "Forbidden" });
          }

          next();
        }
      );
    };
  } catch (error) {
    console.error({ message: error.message });
  }
};

module.exports = {
  generateToken,
  authMiddleware
};
