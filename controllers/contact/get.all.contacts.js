const asyncHandler = require('express-async-handler');
const Contact = require('../../models/contact.model');
//@desc get all contacts
//@route GET /api/contacts
//@access Public
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({});
    res.status(200).json({
        message: "Get all contacts",
        data: contacts
    });
});

module.exports = getAllContacts;