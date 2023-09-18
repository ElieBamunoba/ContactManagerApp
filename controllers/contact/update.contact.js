const asyncHandler = require('express-async-handler');
//@desc update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Contact ${req.params.id} has been updated` });
});

module.exports = updateContact;