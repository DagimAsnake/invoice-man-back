const { getTokenFromHeader } =  require("../utils/getTokenFromHeader.js");
const { verifyToken } = require ("../utils/verifyToken.js");

module.exports.isLoggedIn = (req, res, next) => {
  //get token from header
  const token = getTokenFromHeader(req);
  console.log(token)
  //verify the token
  const decodedUser = verifyToken(token);
  if (!decodedUser) {
    throw new Error("Invalid/Expired token, please login again");
  } else {
    //save the user into req obj
    req.userAuthId = decodedUser?.id;
    next();
  }
};