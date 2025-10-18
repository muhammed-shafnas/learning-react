import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderSummary } from './OrderSummary';
import './CheckoutPage.css';
import { CheckoutHeader } from './CheckoutHeader';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {

    const [deliveryOption, setDeliveryOption] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOption(response.data);
            });

        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data);
            })
    }, [])

    return (
        <>
            <title>Checkout</title>

            <CheckoutHeader />

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