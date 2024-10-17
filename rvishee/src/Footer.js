import React from 'react';

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="#" className="footer-link">Register</a>
                            <a href="#" className="footer-link">Forum</a>
                            <a href="#" className="footer-link">Affiliate</a>
                            <a href="#" className="footer-link">FAQ</a>
                            <div className="footer-social pt-4 text-center">
                                <a href="#"><img src="assets/images/facebook.png" alt="Facebook" /></a>
                                <a href="#"><img src="assets/images/twitter.png" alt="Twitter" /></a>
                                <a href="#"><img src="assets/images/youtube.png" alt="YouTube" /></a>
                                <a href="#"><img src="assets/images/linked.png" alt="LinkedIn" /></a>
                                <a href="#"><img src="assets/images/instagram.png" alt="Instagram" /></a>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="footer-copy">
                                <div className="copy-right text-center pt-5">
                                    <p className="text-light">
                                        Developed with ❤ by AS <br />&copy; Copyright 2024 | Developed
                                        by Abbas & Sahar | All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
