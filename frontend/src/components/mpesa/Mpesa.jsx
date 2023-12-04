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
    if (!amount || !phoneNumber) {
      setErrorMessage("Please provide both phone number and amount");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await axios.post(
        "http://localhost:5000/api/initiatePayment",
        {
          phoneNumber,
          amount,
        }
      );

      const responseData = response.data;

      setPhoneNumber("");
      setAmount("");
      setShowModal(false);
      setLoading(false);

      if (responseData.success) {
        setSuccessMessage("Payment successfull");
      } else {
        setErrorMessage("Payment failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("Payment failed. Please try again");
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
