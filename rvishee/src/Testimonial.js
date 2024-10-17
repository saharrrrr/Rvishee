import React, { useState } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Mohamed Moe'
    },
    {
      quote: 'Breakfast was delicious. Like a good homestyle country savory breakfast. Enjoyed the whole experience and definitely recommend this place for a place to eat on the cape.',
      name: 'Sara J.s'
    },
    {
      quote: "The absolute best red sauce. Whether on Pizza or Pasta, it's honestly delicious. Portions are huge and the staff is extremely friendly and courteous.",
      name: 'Abbas Jr.'
    },
    {
      quote: 'Very good service, good menu … not overly extensive. Food was very good quality all around. Prices were reasonable.',
      name: 'Mo'
    },
    {
      quote: 'I had breakfast there this morning and dinner tonight. All were well beyond my expectations. Breakfast will knock your slippers off.',
      name: 'Khalid Bassem'
    }
  ];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section id="testimonial">
      <div className="wrapper testimonial-section">
        <div className="container text-center">
          <div className="text-center pb-4">
            <h2 className="text-white">Testimonial</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-10 offset-lg-1">
              <div id="carouselExampleControls" className="carousel slide">
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide-to={index}
                      className={index === activeIndex ? 'active' : ''}
                      aria-current={index === activeIndex ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => handleSelect(index)}
                    ></button>
                  ))}
                </div>

                {/* Carousel Content */}
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    >
                      <div className="carousel-caption">
                        <p>{testimonial.quote}</p>
                        <h5>{testimonial.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                  onClick={() => handleSelect((activeIndex - 1 + testimonials.length) % testimonials.length)}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                  onClick={() => handleSelect((activeIndex + 1) % testimonials.length)}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
