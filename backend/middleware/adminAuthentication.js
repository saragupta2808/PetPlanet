const admin = require("firebase-admin");
const { UnauthenticatedError, ForbiddenError } = require("../errors");
const verifyAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Unauthorized user,invalid header");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken.admin === true) next();
    else throw new ForbiddenError("Access denied, user is not an admin");
  } catch (error) {
    if (error.code === "auth/id-token-expired") {
      throw new UnauthenticatedError("Unauthorized user, expired token!");
    }
    throw new UnauthenticatedError("Unauthorized user");
  }
};

module.exports = verifyAdmin;
