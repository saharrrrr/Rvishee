import React, { useEffect } from "react";

const CounterSection = () => {
  useEffect(() => {
    const counter = (id, start, end, duration) => {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    };
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
  }, []);

  return (
    <section id="counter">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 mb-5">
            <h2>
              <span id="count1"></span> +
            </h2>
            <p>CUSTOMERS</p>
          </div>
          <div className="col-md-3 mb-5">
            <h2>
              <span id="count2"></span> +
            </h2>
            <p>REVIEWS</p>
          </div>
          <div className="col-md-3 mb-5">
            <h2>
              <span id="count3"></span> +
            </h2>
            <p>RATINGS</p>
          </div>
          <div className="col-md-3 mb-5">
            <h2>
              <span id="count4"></span> +
            </h2>
            <p>ORDERS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
