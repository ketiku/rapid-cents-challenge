import PaymentFormCreditCard from './PaymentFormCreditCard';
import PaymentFormPayPal from './PaymentFormPayPal';

const plugins = {
    creditCard: PaymentFormCreditCard,
    paypal: PaymentFormPayPal,
};

export default plugins;
