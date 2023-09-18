//@desc update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Contact ${req.params.id} has been updated` });
}

module.exports = updateContact;