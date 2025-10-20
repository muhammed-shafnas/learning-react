import { Link } from 'react-router';
import './checkout-header.css';

export function CheckoutHeader({ cart }) {
    let cartQuantity = 0;

    cart.map((cartItem) => {
        cartQuantity += cartItem.quantity;
    })
    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src="images/logo.png" />
                        <img className="mobile-logo" src="images/mobile-logo.png" />
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<a className="return-to-home-link"
                        href="/">{cartQuantity} items</a>)
                </div>

                <div className="checkout-header-right-section">
                    <img src="images/icons/checkout-lock-icon.png" />
                </div>
            </div>
        </div>
    )
}