import React from 'react';
import plugins from '../plugins';
//Plugins are automatically registered on the payment form once added to the plugins object
const DynamicPaymentForm = ({ selectedMethod, onPaymentSuccess }) => {
    const PaymentForm = plugins[selectedMethod] || (() => <p>Select a payment method.</p>);

    return <PaymentForm onPaymentSuccess={onPaymentSuccess} />;
};

export default DynamicPaymentForm;
