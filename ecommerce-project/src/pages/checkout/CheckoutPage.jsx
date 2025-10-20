import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderSummary } from './OrderSummary';
import './CheckoutPage.css';
import { CheckoutHeader } from './CheckoutHeader';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {
    window.axios = axios;

    const [deliveryOption, setDeliveryOption] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async () =>{ 
        const response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }

        fetchCheckoutData();
    }, [cart])

    useEffect(() => {
        const fetchDeliveryData = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOption(response.data);
        }

        fetchDeliveryData();
    }, []);

    return (
        <>
            <title>Checkout</title>

            <CheckoutHeader cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOption={deliveryOption} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}