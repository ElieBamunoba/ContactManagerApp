const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user.model');

//@des Login User
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const user = await User.findOne({ email });
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    //compare the password with the hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        //if the password is correct, we need to generate a token
        const accessToken = jwt.sign(
            //payload
            {
                id: user._id,
                name: user.name,
                email: user.email
            },
            //secret key
            process.env.JWT_SECRET,
            //options
            {
                //expiring time
                expiresIn: '5m',
            }
        );
        res.json({
            message: 'User logged in successfully',
            access_token: accessToken,
        });
    }
    else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

module.exports = loginUser;