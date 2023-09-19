const asyncHandler = require('express-async-handler');
const Contact = require('../../models/contact.model');
//@desc get unique contact
//@route GET /api/contacts/:id
//@access Private
const getUniqueContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error(`Contact ${req.params.id} not found`);
    }
    res.status(200).json({
        message: `Contact ${req.params.id} fetched successfully!`,
        data: contact
    });
});

module.exports = getUniqueContact;