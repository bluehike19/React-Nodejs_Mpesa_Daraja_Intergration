import "./mpesa.scss";
import React, { useState } from "react";
import axios from "axios";

const Mpesa = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleClick = () => {
    setShowModal(true);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || amount <= 0 || !phoneNumber) {
      setErrorMessage("Please provide both phone number and amount");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/initiatePayment",
        {
          amount,
          phoneNumber,
        }
      );
      setPhoneNumber("");
      setAmount("");
      setShowModal(false);
      setLoading(false);
      setSuccessMessage("Payment successfull");
    } catch (error) {
      setLoading(false);
      setErrorMessage("Payment failed. Please try again");
      console.error(error.response.data);
    }
  };
  return (
    <div className="payment-container">
      <button className="checkout" onClick={handleClick}>
        Check Out
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handlePayment} disabled={loading}>
              {loading ? "Processing..." : "Pay"}
            </button>
            {errorMessage && <p style={{ color: "red" }}>{successMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mpesa;
