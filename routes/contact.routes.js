const express = require("express");
const router = express.Router();
const { getAllContacts, getUniqueContact, createContact, updateContact, deleteContact } = require("../controllers/contact/contact.controllers");
const validateToken = require("../middlewares/validate.token.handler");



//protect all routes after this middleware
router.use(validateToken)
// @desc    Get all contacts + create a contact
router.route("/").get(getAllContacts).post(createContact);

// @desc    get individual contact by id + update + delete
router.route("/:id").get(getUniqueContact).put(updateContact).delete(deleteContact);

module.exports = router;