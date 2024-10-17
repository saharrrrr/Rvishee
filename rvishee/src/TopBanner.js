import React from "react";
import nextImage from "./images/next.png";

const TopBanner = () => {
  return (
    <section id="home">
      <div className="container-fluid px-0 top-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h1>
                Delicious Healthy Recipes <br /> From Family to Yours
              </h1>
              <p>
                At R Vishee, we believe that enjoying a gourmet meal shouldn't break the bank. We've crafted a menu full of delicious, high-quality dishes that offer exceptional value for your money. Join us for a dining experience where flavor meets affordability, and every meal feels like a treat without the splurge.
              </p>
              <div className="mt-4">
                <button className="main-btn">
                  Order Now <img src={nextImage} alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
