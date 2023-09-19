const asyncHandler = require('express-async-handler');
const Contact = require('../../models/contact.model');
//@desc update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error(`Contact ${req.params.id} not found`);
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true
        });

    res.status(200).json({
        message: `Contact ${req.params.id} has been updated`,
        data: updateContact
    });
});

module.exports = updateContact;