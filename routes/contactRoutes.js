const e = require("express");
const express = require("express");

const router = express.Router();

// @desc    Get all contacts
router.route("/").get((req, res) => {
    res.status(200).json({ message: "All Contacts fetched successfully!" });
});

// @desc    get individual contact
router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Contact ${req.params.id} fetched successfully!` });
});

// @desc    Create a contact
router.route("/").post((req, res) => {
    res.status(200).json({ message: "Create contact" });
});

// @desc    Update a contact
router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `id ${req.params.id}  updated` });
});

// @desc    Delete a contact
router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `id ${req.params.id}  deleted` });
});

module.exports = router;