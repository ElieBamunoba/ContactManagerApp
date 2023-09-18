

//@desc delete a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
    res.status(200).json({ message: "Contact has been deleted" + req.params.id });
}

module.exports = deleteContact;