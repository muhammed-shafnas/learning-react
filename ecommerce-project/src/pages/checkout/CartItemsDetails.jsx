import axios from 'axios';
import { useState } from 'react';
import { formatMoney } from '../../utils/money';
import { DeliveryOptions } from './DeliveryOptions';

export function CartItemsDetails({ cartItem, deliveryOption }) {

    const [isUpdated, setIsUpdated] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
    };

    const updateQuantity = (event) => {
        setQuantity(Number(event.target.value));
    }

    const submitQuantity =  (event) => {
        if(event.key === 'Enter') {
             sentQuantity()
             setIsUpdated(false);
        }

        else if(event.key === 'Escape') {
            setIsUpdated(false);
        }
    };

    const sentQuantity = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: quantity
        })
    }

    return (
        <div className="cart-item-details-grid">
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity:
                        {isUpdated
                            ?
                            <input type="text" style={{ width: '50px' }} value={quantity} onChange={updateQuantity} onKeyDown={submitQuantity}/>
                            :
                            <span className="quantity-label">{cartItem.quantity}</span>
                        }

                    </span>
                    <span className="update-quantity-link link-primary" onClick={() => {
                        setIsUpdated(!isUpdated)
                    }}>
                        {
                            isUpdated ? <span onClick={sentQuantity}>Done</span> : <span>Update</span>
                        }

                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>

            <DeliveryOptions
                cartItem={cartItem}
                deliveryOption={deliveryOption}
            />
        </div>
    )
}