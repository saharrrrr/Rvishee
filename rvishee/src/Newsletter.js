import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Email submitted:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <section id="newsletter">
      <div className="newsletter wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-content text-center pb-4">
                <h2>
                  Hurry Up! <span>Subscribe</span> to our newsletter and get 25% off
                </h2>
                <p className="drop-in-2">
                  Limited time offer for this month. No credit card required.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-8 col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address Here"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <button className="main-btn" type="submit">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
