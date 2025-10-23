import { Link } from 'react-router';
import { useState } from 'react';
import './Header.css';
import { useNavigate, useSearchParams } from 'react-router';

export function Header({ cart }) {
    let totalQuantity = 0;
    const searchNavigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search');
    const [search, setSearch] = useState(searchText || '');

    const inputText = (event) => {
        setSearch(event.target.value);
    }

    const eraseInput = () => {
        
            searchItem();
    }

    const searchItem = () => {
        searchNavigate(`/?search=${search}`);

    }
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    })

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <span className='logo-text'>React-Project</span>
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" value={search} type="text" placeholder="Search" onChange={inputText} onKeyDown={eraseInput} onClick={() => {
                        searchNavigate('/');
                    }}/>

                   
                </div>

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
        </>
    )
}