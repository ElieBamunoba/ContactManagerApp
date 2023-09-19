const mongoose = require('mongoose')

const constactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],

    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
    },
    phone: {
        type: String,
        required: [true, "Please enter a phone number"],
    },

},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Contact", constactSchema);