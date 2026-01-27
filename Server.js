const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./DataBase/Connection");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
connectDB();

// Routes
app.use("/api/auth", require("./Routes/authRoute"));
app.use("/api/products", require("./Routes/ProdouctRoute")); // spelling fix

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
