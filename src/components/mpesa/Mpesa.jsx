import "./mpesa.scss";
import React, { useState } from "react";

const Mpesa = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="payment-container">
      <button onClick={() => setShowModal(true)}>Initialize payment</button>
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
