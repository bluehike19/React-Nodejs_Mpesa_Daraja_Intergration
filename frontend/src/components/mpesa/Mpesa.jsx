import "./mpesa.scss";
import React, { useState } from "react";
import axios from "axios";

const Mpesa = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || amount <= 0 || !phoneNumber) {
      //display error message
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/initiatePayment",
        {
          amount,
          phoneNumber,
        }
      );
      alert("payment success");
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="payment-container">
      <button className="checkout" onClick={() => setShowModal(true)}>
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
            <button onClick={handlePayment}>Initialize Payment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mpesa;
