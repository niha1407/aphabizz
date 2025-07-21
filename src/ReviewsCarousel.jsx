import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewsCarousel.css";

const reviews = [
  {
    name: "Abhishekh Tomar",
    text: "Super interactive session! Even as a beginner, I could follow along. Loved the AI insights too.",
    rating: 5,
    image: "https://media.licdn.com/dms/image/v2/D5603AQEJFR6M6ScTKQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715438667117?e=1755734400&v=beta&t=cbUVUaZJi6oCEbOWXnSov3j9BRJbA2mtBiDcjZYf2ac",
  },
  {
    name: "rakshita Rawat",
    text: "This React course changed the way I approach development. The mentor was super clear!",
    rating: 5,
    image: "https://media.licdn.com/dms/image/v2/D5603AQEuRhexKiec5g/profile-displayphoto-shrink_100_100/B56ZUjCjCmGUAY-/0/1740049627563?e=1755734400&v=beta&t=RxefS7sMnSEJEBc-thPR7pH4SuhD_j5T79pETwbInl4",
  },
  {
    name: "Parth Saini",
    text: "I’ve done many online courses, but this one had the best structure and support.",
    rating: 4,
    image: "https://media.licdn.com/dms/image/v2/D5603AQE9IFkfYZ4ELg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723873450094?e=1755734400&v=beta&t=DlhRNykfUE7PiLq-NrjoHgrzAb78VfOyl1rRsadVlSA",
  },
];

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
    ))}
  </div>
);

const ReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <div className="custom-arrow right">›</div>,
    prevArrow: <div className="custom-arrow left">‹</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  

  return (
    <div className="reviews-carousel">
      <h2 className="section-title">What Students Say</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="testimonial-card">
              <img src={review.image} alt={review.name} className="avatar" />
              <p className="testimonial-text">“{review.text}”</p>
              <StarRating rating={review.rating} />
              <p className="testimonial-name">— {review.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;
