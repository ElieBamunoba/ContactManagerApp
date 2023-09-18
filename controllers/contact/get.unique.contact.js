const asyncHandler = require('express-async-handler');
//@desc get unique contact
//@route GET /api/contacts/:id
//@access Public
const getUniqueContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Contact ${req.params.id} fetched successfully!` });
});

module.exports = getUniqueContact;