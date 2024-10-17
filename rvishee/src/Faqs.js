import React from 'react';

const FAQs = () => {
  const faqData = [
    {
      question: 'How do I Make a regular Table Booking?',
      answer: "It's a piece of cake - once you've found your preferred restaurant simply select your Date and Time required, and then so long as we have an email address and phone number your booking is instantly confirmed the minute you hit 'Book'."
    },
    {
      question: 'How do I book a Bookable-Special?',
      answer: "It's quick and easy - once you've found your preferred restaurant special, simply click 'Book Special' then select a date when it's available, then the time, and then so long as we have an email address and phone number your booking is instantly confirmed the minute you hit 'Book'."
    },
    {
      question: "How can I be certain my booking's been received?",
      answer: "We'll send an instant confirmation email to the address used in your booking. If you book more than a day ahead, we'll also send a reminder 24 hours before your booking is due. You can reconfirm your booking using a link in your reminder email."
    },
    {
      question: "What happens if I get to the restaurant and they don't have my booking?",
      answer: "R Vishee restaurants are committed to honour any confirmed bookings we have generated. For added peace of mind you should always reconfirm your booking using the link included in your reminder email, and it's also a good idea to take your confirmation email with you."
    }
  ];

  return (
    <section id="faq">
      <div className="faq wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center pb-4">
                <h2>Frequently Asked <span>Questions</span></h2>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            {faqData.map((faq, index) => (
              <div key={index} className="col-sm-6 mb-4">
                <h4><span>~</span>{faq.question}</h4>
                <p className="drop-in-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
