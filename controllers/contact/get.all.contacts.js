
//@desc get all contacts
//@route GET /api/contacts
//@access Public
const getAllContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
}

module.exports = getAllContacts;