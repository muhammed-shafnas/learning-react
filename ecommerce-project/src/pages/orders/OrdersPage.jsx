import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import './OrdersPage.css';
import { OrderGrid } from './OrderGrid';
import { OrderHeader } from './OrderHeader';

export function OrdersPage({ cart }) {
    const [order, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersData = async () => {
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        }
        fetchOrdersData();
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

                                <OrderHeader 
                                    order={order}
                                />

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