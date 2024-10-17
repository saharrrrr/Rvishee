import React from 'react';

const FoodItem = ({ name, price, rating, image, addToCart }) => {
    return (
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
            <div className="card">
                <img src={image} className="img-fluid" alt={name} loading="lazy" />
                <div className="pt-5">
                    <h4>{name}</h4>
                    <p>Time: 15 - 20 Minutes <button className="btn btn-success">{rating} &#9733;</button></p>
                    <span>&#36;{price}</span>
                    <button className="mt-4 main-btn" onClick={() => addToCart(name, price)}>
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
