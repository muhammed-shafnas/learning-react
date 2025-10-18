import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import './OrdersPage.css';
import { OrderGrid } from './OrderGrid';

export function OrdersPage({ cart }) {
    const [order, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            })
    }, []);
    return (
        <>
            <title>Orders</title>
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {order.map((order) => {
                        return (
                            <div key={order.id} className="order-container">

                                <div className="order-header">
                                    <div className="order-header-left-section">
                                        <div className="order-date">
                                            <div className="order-header-label">Order Placed:</div>
                                            <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
                                        </div>
                                        <div className="order-total">
                                            <div className="order-header-label">Total:</div>
                                            <div>{formatMoney(order.totalCostCents)}</div>
                                        </div>
                                    </div>

                                    <div className="order-header-right-section">
                                        <div className="order-header-label">Order ID:</div>
                                        <div>{order.id}</div>
                                    </div>
                                </div>

                                <OrderGrid
                                    order={order}
                                />
                            </div>
                        )
                    })}



                </div>
            </div>
        </>
    )
}