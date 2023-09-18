const express = require("express");

const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Middleware to handle errors
app.use(errorHandler);

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
