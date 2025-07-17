import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewsCarousel.css";

const reviews = [
  {
    name: "Aayush",
    text: "Super interactive session! Even as a beginner, I could follow along. Loved the AI insights too.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Priya Sharma",
    text: "This React course changed the way I approach development. The mentor was super clear!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Harshit Verma",
    text: "I’ve done many online courses, but this one had the best structure and support.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/56.jpg",
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
