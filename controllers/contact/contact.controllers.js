
//import all contact controllers
const getAllContacts = require("./get.all.contacts");
const getUniqueContact = require("./get.unique.contact");
const createContact = require("./create.contact");
const updateContact = require("./update.contact");
const deleteContact = require("./delete.contact");

//export the contact controllers
module.exports = {
    getAllContacts,
    getUniqueContact,
    createContact,
    updateContact,
    deleteContact
}