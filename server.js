const express = require("express");

const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db.connection");

// Connect to database
connectDB();
const app = express();

const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
// Middleware to handle errors
app.use(errorHandler);



app.listen(port, () => console.log(`Server started on port ${port}`));
