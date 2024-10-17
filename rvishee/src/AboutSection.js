import React from 'react';
import aboutImage from './images/about.jpg';

const AboutSection = () => {
    return (
        <section id="about">
            <div className="about-section wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                            <div className="card border-0">
                                <img src={aboutImage} alt="About Us" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 text-sec">
                            <h2>We pride ourselves on making <span>real food</span> from the best ingredients.</h2>
                            <p className="drop-in-2">
                                Besides practical experience, a simple but effective business plan should
                                be in place which defines and describes the restaurant's concept, its targeted market and
                                location, menu and pricing, future earnings and expenditure forecasts, and staff
                                recruitment, training, and retention policies.
                                <br /><br />
                                It is important to invest wisely to save costs without compromising on quality. It is also
                                essential to invest in high-quality equipment for long-term and heavy-duty use.
                            </p>
                            <button className="main-btn mt-4">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
