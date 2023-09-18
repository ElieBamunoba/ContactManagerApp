const asyncHandler = require('express-async-handler');
//@desc get all contacts
//@route GET /api/contacts
//@access Public
const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

module.exports = getAllContacts;