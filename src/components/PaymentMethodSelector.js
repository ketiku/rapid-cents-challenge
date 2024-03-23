import React from 'react';

const PaymentMethodSelector = ({ methods, onSelect }) => (
    <div>
        <h2>Process Payment</h2>
        <ul>
            {methods.map(method => (
                <li key={method.id} onClick={() => onSelect(method.id)}>
                   <p> {method.name} </p>
                </li>
            ))}
        </ul>
    </div>
);

export default PaymentMethodSelector;
