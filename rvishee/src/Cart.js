import React from 'react';

const Cart = ({ cart, isDropdownOpen, toggleCartDropdown, goToCheckout }) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={toggleCartDropdown}>
                🛒 Cart ({cart.length})
            </button>
            {isDropdownOpen && (
                <div className="dropdown-content">
                    <ul>
                        {cart.length === 0 ? (
                            <li>Your cart is empty</li>
                        ) : (
                            cart.map((item, index) => (
                                <li key={index}>{item.name} - ${item.price}</li>
                            ))
                        )}
                    </ul>
                    {cart.length > 0 && (
                        <button className="btn btn-success" onClick={goToCheckout}>
                            Checkout
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
