const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/lostfound")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});