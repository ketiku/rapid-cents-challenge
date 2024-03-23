import React from 'react';

const ConfirmationPage = ({paymentDetails, processNewPayment}) => (
    <div>
        <h2>Payment Successful</h2>
        <p>Your payment was processed successfully. Thank you!</p>
        <p>Payment Method: {paymentDetails.method}</p>
        {/* Conditional rendering based on payment method */}
        {paymentDetails.cardNumber && <p>Card Number: {paymentDetails.cardNumber}</p>}
        {paymentDetails.expiryDate && <p>Expiry Date: {paymentDetails.expiryDate}</p>}
        {paymentDetails.cvv && <p>CVV: {paymentDetails.cvv}</p>}
        {paymentDetails.email && <p>Email: {paymentDetails.email}</p>}
        <button onClick={processNewPayment}>Process New Payment</button>
    </div>
);

export default ConfirmationPage;
