const express = require("express");

const dotenv = require("dotenv").config();
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/db.connection");

const contactRoutes = require("./routes/contact.routes");
const userRoutes = require("./routes/user.routes");

// Connect to database
connectDB();
const app = express();

const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
// Middleware to handle errors
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
