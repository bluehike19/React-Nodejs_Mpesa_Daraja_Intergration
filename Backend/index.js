const express = require("express");
const app = express();
const payments = require("./routes/payment");
const cors = require("cors");

//Middleware
app.use(express.json());

app.use(cors());

app.use("/api", payments);

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(5000, () => {
  console.log("Backend is running!");
});
