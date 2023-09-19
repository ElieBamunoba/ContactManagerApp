const asyncHandler = require('express-async-handler');
const User = require('../../models/user.model');
//@des get current user info
//@route GET /api/user/current
//@access private

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  if (user) {
    res.json(
      {
        message: "Access granted",
        data: user
      }
    );
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = getCurrentUser;