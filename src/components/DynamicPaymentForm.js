import React from 'react';
import plugins from '../plugins';

const DynamicPaymentForm = ({ selectedMethod, onPaymentSuccess }) => {
    const PaymentForm = plugins[selectedMethod] || (() => <p>Select a payment method.</p>);

    return <PaymentForm onPaymentSuccess={onPaymentSuccess} />;
};

export default DynamicPaymentForm;
