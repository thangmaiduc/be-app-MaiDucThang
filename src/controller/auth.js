const jwt = require("jsonwebtoken");
const User = require("../model/users");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   const error = new Error("Dữ liệu nhập vào không hợp lệ");
    //   error.statusCode = 422;
    //   error.data = errors.array();
    //   throw error;
    // }
    const user = await User.findOne({ email, password });
    if (!user) {
      const error = new Error("Email hoặc mật khẩu không chính xác");
      error.statusCode = 422;
      throw error;
    }
    const token = jwt.sign(
      {  role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "3 days",
      }
    );
    res.setHeader("authToken", token);
    res.status(200).json({  token });
  } catch (error) {
   
    next(error);
  }
};
module.exports = {
  login,
};
