import React, { useState } from 'react';

const ExploreFood = () => {
    const [cart, setCart] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const addToCart = (itemName, price) => {
        setCart([...cart, { name: itemName, price: price }]);
    };

    const goToCheckout = () => {
        window.location.href = 'checkout.html';
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
                                    Food is often the reason why people travel! After all, there is no better way to
                                    appreciate a culture than by sampling local flavours. It could be in fancy
                                    Michelin-starred restaurants, humble hole-in-the-wall eateries or cheap food carts on
                                    the street.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cart Button */}
                    <div className="row pt-5">
                        <div className="col-sm-12 text-right">
                            <button className="btn btn-primary" id="cart-btn" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                🛒 Cart (<span id="cart-count">{cart.length}</span>)
                            </button>
                            {isDropdownOpen && (
                                <div id="cart-dropdown" className="dropdown-content">
                                    <ul id="cart-items">
                                        {cart.map((item, index) => (
                                            <li key={index}>
                                                {item.name} - ${item.price}
                                            </li>
                                        ))}
                                    </ul>
                                    <button id="checkout-btn" className="btn btn-success" onClick={goToCheckout}>
                                        Checkout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Food Cards */}
                    <div className="row pt-5">
                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                            <div className="card">
                                <img src="assets/images/img-3.jpg" className="img-fluid" alt="Vegetable Sandwich" loading="lazy" />
                                <div className="pt-5">
                                    <h4>Vegetable Sandwich</h4>
                                    <p>Time: 15 - 20 Minutes <button className="btn btn-success">4.3 &#9733;</button></p>
                                    <span>&#36;10</span>
                                    <button className="mt-4 main-btn" onClick={() => addToCart('Vegetable Sandwich', 10)}>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                            <div className="card">
                                <img src="assets/images/dosa.jpg" className="img-fluid" alt="Vishee Burger" loading="lazy" />
                                <div className="pt-5">
                                    <h4>Vishee Burger</h4>
                                    <p>Time: 50 - 60 Minutes <button className="btn btn-success">3.9 &#9733;</button></p>
                                    <span>&#36;9</span>
                                    <button className="mt-4 main-btn" onClick={() => addToCart('Vishee Burger', 9)}>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                            <div className="card">
                                <img src="assets/images/idli.jpg" className="img-fluid" alt="Beef Steak" loading="lazy" />
                                <div className="pt-5">
                                    <h4>Beef Steak</h4>
                                    <p>Time: 10 - 15 Minutes <button className="btn btn-success">5 &#9733;</button></p>
                                    <span>&#36;14 <del>&#36;20</del></span>
                                    <button className="mt-4 main-btn" onClick={() => addToCart('Beef Steak', 14)}>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                            <div className="card">
                                <img src="assets/images/img-5.jpg" className="img-fluid" alt="Raspberry Stuffed French Toast" loading="lazy" />
                                <div className="pt-5">
                                    <h4>Raspberry Stuffed French Toast</h4>
                                    <p>Time: 10 - 15 Minutes <button className="btn btn-success">5 &#9733;</button></p>
                                    <span>&#36;10 <del>&#36;15</del></span>
                                    <button className="mt-4 main-btn" onClick={() => addToCart('Raspberry Stuffed French Toast', 10)}>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreFood;
