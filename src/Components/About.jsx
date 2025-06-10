import React from 'react';
import './About.css'; // נניח שיש לך קובץ CSS נפרד

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-header">About Us</h2>
      <p className="about-paragraph">
        Welcome to our website dedicated to high-quality electronics products.
      </p>
      <p className="about-paragraph">
        We offer a wide range of products, including smartphones, laptops, gaming accessories, and more.
      </p>
      <p className="about-paragraph">
        Our goal is to provide our customers with the best products at competitive prices, along with excellent customer service.
      </p>
      <p className="about-paragraph">
        Our team is available at all times to assist and provide further information about our products.
      </p>
    </div>
  );
};

export default About;
