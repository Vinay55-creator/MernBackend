const userModel = require("../../models/userModel");

async function allUsers(req, res) {
  try {
    console.log("userID All users", req.userId);

    const AllUsers = await userModel.find();

    res.json({
      message: "All users",
      data: AllUsers,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allUsers;
