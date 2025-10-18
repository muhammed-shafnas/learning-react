import { CartItemsDetails } from './CartItemsDetails';
import { DeliveryDate } from './DeliveryDate';

export function OrderSummary({ cart, deliveryOption }) {
    return (
        <div className="order-summary">
            {deliveryOption.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOption.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                })
                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate
                            selectedDeliveryOption={selectedDeliveryOption}
                        />

                        <CartItemsDetails
                            deliveryOption={deliveryOption}
                            cartItem={cartItem}
                        />

                    </div>
                )
            })}



        </div>
    )
}