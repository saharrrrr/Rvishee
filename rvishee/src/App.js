import React from 'react';
import './App.css';
import images from './Images.json';

function App() {
    return (
        <div className="App">
            <section id="explore-food"> 
                <div className="explore-food wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-content text-center">
                                    <h2>Explore Our <span>Foods</span></h2>
                                    <p className="drop-in-2">Food is often the reason why people travel! After all, there is no
                                        better way to appreciate a culture than by sampling local flavours. It could be in fancy
                                        Michelin-starred restaurants, humble hole-in-the-wall eateries or cheap food carts on
                                        the street. </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row pt-5">
                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/img-3.jpg" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Vegetable Sandwich</h4>
                                        <p>Time: 15 - 20 Minutes <button className="btn btn-success">4.3 &#9733;</button></p>
                                        <span>&#36; 10<del></del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/img-4.jpg" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Burger</h4>
                                        <p>Time: 30 - 45 Minutes <button className="btn btn-success">4.5 &#9733;</button></p>
                                        <span>&#36;10<del>&#36;15</del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/idli.jpg" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Beef Steak</h4>
                                        <p>Time: 10 - 15 Minutes <button className="btn btn-success">5 &#9733;</button></p>
                                        <span>&#36;14<del>&#36;20</del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/img-5.jpg" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Raspberry Stuffed French Toast</h4>
                                        <p>Time: 10 - 15 Minutes <button className="btn btn-success">5 &#9733;</button></p>
                                        <span>&#36;10<del>&#36;15</del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-5">
                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/noodles.jpg" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Noodles</h4>
                                        <p>Time: 25 - 40 Minutes <button className="btn btn-success">3.5 &#9733;</button></p>
                                        <span>&#36;12<del></del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/pizza.jpg" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Pizza</h4>
                                        <p>Time: 30 - 45 Minutes <button className="btn btn-success">4.5 &#9733;</button></p>
                                        <span>&#36;10<del></del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/dosa.jpg" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Vishee Burger</h4>
                                        <p>Time: 50 - 60 Minutes <button className="btn btn-success">3.9 &#9733;</button></p>
                                        <span>&#36;9<del></del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                <div className="card">
                                    <img src="assets/images/veg thali.png" className="img-fluid" alt="" />
                                    <div className="pt-5">
                                        <h4>Fish</h4>
                                        <p>Time: 30 - 45 Minutes <button className="btn btn-success">4.4 &#9733;</button></p>
                                        <span>&#36;9<del></del></span>
                                        <button className="mt-4 main-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;