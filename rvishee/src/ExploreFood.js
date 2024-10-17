import React, { useState } from 'react';
import Cart from './Cart';
import FoodItem from './FoodItem';
import { foodsData } from './FoodData';

const ExploreFood = () => {
    const [cart, setCart] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const addToCart = (itemName, price) => {
        setCart([...cart, { name: itemName, price }]);
    };

    const goToCheckout = () => {
        window.location.href = 'checkout.html';
    };

    const toggleCartDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <section id="explore-food">
            <div className="explore-food wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-content text-center">
                                <h2>Explore Our <span>Foods</span></h2>
                                <p className="drop-in-2">
                                    Food is often the reason why people travel! After all, there is no better way to appreciate a culture than by sampling local flavours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cart Button */}
                    <div className="row pt-5">
                        <div className="col-sm-12 text-right">
                            <Cart
                                cart={cart}
                                isDropdownOpen={isDropdownOpen}
                                toggleCartDropdown={toggleCartDropdown}
                                goToCheckout={goToCheckout}
                            />
                        </div>
                    </div>

                    {/* Food Cards */}
                    <div className="row pt-5">
                        {foodsData.map((food) => (
                            <FoodItem
                                key={food.id}
                                name={food.name}
                                price={food.price}
                                rating={food.rating}
                                image={food.image}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreFood;
