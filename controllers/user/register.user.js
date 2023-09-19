const asyncHandler = require('express-async-handler');
const User = require('../../models/user.model');
const bcrypt = require('bcrypt');

//@des Register a user
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    //check if user already exists
    const userAvaible = await User.findOne({ email });
    if (userAvaible) {
        res.status(400);
        throw new Error("User already exists");
    }
    //before creating the user, we need to hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashedPassword', hashedPassword);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    res.status(201).json({
        message: 'User successfully registered',
        //we don't want to send the password back to the client
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
    });
});

module.exports = registerUser;