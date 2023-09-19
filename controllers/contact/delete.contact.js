const asyncHandler = require('express-async-handler');
const Contact = require('../../models/contact.model');
//@desc delete a contact
//@route DELETE /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error(`Contact ${req.params.id} not found`);
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message: `Contact ${req.params.id} has been deleted`,
    });
});

module.exports = deleteContact;