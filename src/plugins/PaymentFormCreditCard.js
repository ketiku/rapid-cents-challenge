import React, { useState } from 'react';

const PaymentFormCreditCard = ({ onPaymentSuccess }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    //simulate payment success
    const handleSubmit = (event) => {
        event.preventDefault();
        onPaymentSuccess({
            method: "Credit Card",
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv
        });
    };

    return (

        <form onSubmit={handleSubmit}>
            <h4>Payment Information</h4>
            <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                    id="cardNumber"
                    type="text"
                    placeholder="card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input
                    id="expiryDate"
                    type="text"
                    placeholder="mm/yy"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="cvv">CVV:</label>
                <input
                    id="cvv"
                    type="text"
                    placeholder="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Pay with Credit Card</button>
        </form>
    );
};

export default PaymentFormCreditCard;
