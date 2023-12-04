const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

async function generateAccessToken() {
  try {
    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {},
      {
        auth: {
          username: process.env.blueHike_key,
          password: process.env.blueHike_key,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    throw new Error("Error generating access toeken");
  }
}

function validatePhoneNumber(phoneNumber) {
  const phoneNumberPattern = /^\+254\d{9}$/;

  return phoneNumberPattern.test(phoneNumber);
}

//Route to initailize payment
router.post("/initiatePayment", async (req, res) => {
  const { amount, phoneNumber } = req.body;

  if (!amount || isNaN(amount) || isNaN(amount)) {
    return res.status(400).json({ error: "Invalid Amount" });
  }

  if (!validatePhoneNumber(phoneNumber)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }
  try {
    const accessToken = await generateAccessToken();

    res.status(200).json({ message: "Payment initiated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
