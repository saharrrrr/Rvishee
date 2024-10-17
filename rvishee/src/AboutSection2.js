import React from 'react';
import aboutImage2 from './images/about2.png'; 

const AboutSection2 = () => {
    return (
        <section id="about2">
            <div className="food-type wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                            <h2>We make <span>everything by hand</span> with the best possible ingredients.</h2>
                            <p className="drop-in-2">
                                A restaurant is a business that prepares and serves food and drinks to
                                customers. Meals are generally served and eaten on the premises, but many restaurants also
                                offer take-out and food delivery services.
                                <br />
                                Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines
                                and service models ranging from inexpensive fast-food restaurants and cafeterias to
                                mid-priced family restaurants, to high-priced luxury establishments.
                            </p>
                            <ul className="list-unstyled py-3">
                                <li>Tasty Food</li>
                                <li>Good Service</li>
                                <li>Reasonable Cost</li>
                                <li>Hygiene and Cleanliness</li>
                            </ul>
                            <button className="main-btn mt-4">Learn More</button>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="card border-0">
                                <img src={aboutImage2} className="img-fluid" alt="About Our Food" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection2;
