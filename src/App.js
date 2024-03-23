import React, { useState } from 'react';
import PaymentMethodSelector from './components/PaymentMethodSelector';
import DynamicPaymentForm from './components/DynamicPaymentForm';
import ConfirmationPage from './components/ConfirmationPage';

const paymentMethods = [
  { id: 'creditCard', name: 'Credit Card' },
  { id: 'paypal', name: 'PayPal' },
  // Add more methods here
];

function App() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});


  const handlePaymentSuccess = (details) => {
    setPaymentComplete(true);
    setPaymentDetails(details);
  }

  const handleNewPayment = () => {
    setPaymentComplete(false);
    setPaymentDetails({});
    setSelectedMethod('');
  };

  return (
      <div>
        {!paymentComplete ? (
            <>
              <PaymentMethodSelector methods={paymentMethods} onSelect={setSelectedMethod} />
              <DynamicPaymentForm selectedMethod={selectedMethod} onPaymentSuccess={handlePaymentSuccess} />
            </>
        ) : (
            <ConfirmationPage paymentDetails = {paymentDetails} processNewPayment={handleNewPayment}/>
        )}
      </div>
  );
}

export default App;
