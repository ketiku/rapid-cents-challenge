import PaymentFormCreditCard from './PaymentFormCreditCard';
import PaymentFormPayPal from './PaymentFormPayPal';

//Plugins object, any new payment method needs to be added
const plugins = {
    creditCard: PaymentFormCreditCard,
    paypal: PaymentFormPayPal,
};

export default plugins;
