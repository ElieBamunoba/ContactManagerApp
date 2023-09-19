const asyncHandler = require('express-async-handler');
const Contact = require('../../models/contact.model');
//@desc create a contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json({
        message: `Contact created successfully`,
        contact: contact,
    });
});
module.exports = createContact;