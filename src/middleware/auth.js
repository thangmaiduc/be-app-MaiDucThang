const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  try {
    const token =
      req.header("Authorization") &&
      req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      const error = new Error("Bạn chưa đăng nhập, vui lòng đăng nhập");
      error.statusCode = 417;
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    
    req.role = decode.role;

    next();
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 417;
      error.message = "Hết phiên đăng nhập, vui lòng đăng nhập lại";
    }
    next(error);
  }
};
function authRole(role) {
  return (req, res, next) => {
      if (req.role !== role) {
      return res.status(401).send("not allowed");
    }
    next();
  };
}
module.exports ={
    authRole,
    authUser
}