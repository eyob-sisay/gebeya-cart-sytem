const express = require("express");
const cors = require("cors");
//const mongoose = require("mongoose");

const stripe = require("./stripe");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());


app.use("/api/stripe", stripe);


app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});



const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

/*mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));*/