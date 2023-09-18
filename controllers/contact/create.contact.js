
//@desc create a contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    res.status(201).json({ message: `Contact created successfully` });
}

module.exports = createContact;