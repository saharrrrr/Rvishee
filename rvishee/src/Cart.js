import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <button className="btn btn-primary">
                🛒 Cart ({cart.length})
            </button>
            <div className="dropdown-content">
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
                <button className="btn btn-success">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;