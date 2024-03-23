import React, { useState } from 'react';

const PaymentFormPayPal = ({ onPaymentSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        onPaymentSuccess({
            method: "PayPal",
            email: email
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Payment Information</h4>
            <div>
                <label htmlFor="paypalEmail">Email:</label>
                <input
                    id="paypalEmail"
                    type="email"
                    placeholder="example@ex.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="paypalPassword">Password:</label>
                <input
                    id="paypalPassword"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Pay with PayPal</button>
        </form>
    );
};

export default PaymentFormPayPal;
