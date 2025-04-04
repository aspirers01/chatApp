const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const connectDB = require("./db");
dotenv.config();
connectDB();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/auth", require("./Router/UserRoutes"));
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
