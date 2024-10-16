import React from 'react';

// مصفوفة الطعام
const foodItems = [
    { id: 1, name: "Vegetable Sandwich", img: "/assets/images/img-3.jpg", time: "15 - 20 Minutes", rating: 4.3, price: 10 },
    { id: 2, name: "Burger", img: "/assets/images/img-4.jpg", time: "30 - 45 Minutes", rating: 4.5, price: 10 },
    { id: 3, name: "Beef Steak", img: "/assets/images/idli.jpg", time: "10 - 15 Minutes", rating: 5, price: 14 },
    { id: 4, name: "Raspberry Stuffed French Toast", img: "/assets/images/img-5.jpg", time: "10 - 15 Minutes", rating: 5, price: 10 },
    // يمكنك إضافة المزيد من العناصر هنا
];

const OrderSection = () => {
    return (
        <section id="explore-food">
            <div className="explore-food wrapper">
                <div className="text-content text-center">
                    <h2>Explore Our <span>Foods</span></h2>
                    <p className="drop-in-2">Food is often the reason why people travel!...</p>
                </div>

                <div className="row pt-5">
                    {foodItems.map((item) => (
                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5" key={item.id}>
                            <div className="card">
                                <img src={item.img} className="img-fluid" alt={item.name} />
                                <div className="pt-5">
                                    <h4>{item.name}</h4>
                                    <p>Time: {item.time} <button className="btn btn-success">{item.rating} &#9733;</button></p>
                                    <span>&#36;{item.price}</span>
                                    <button className="mt-4 main-btn">Order Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrderSection;