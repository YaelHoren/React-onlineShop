import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (

    <div className="home-container">
      <h1 className="home-header">Welcome to Our Electronics Store</h1>
      <p className="home-intro">
        Discover the latest in electronics and technology.
      </p>
      <div className="product-list">
        <div className="product-item">
         
          <div className="product-info">
            <h2>Earphones</h2>
            <p>Experience high-quality sound with our premium earphones.</p>
          </div>
        </div>
        <div className="product-item">
         
          <div className="product-info">
            <h2>Phone Cases</h2>
            <p>Protect your phone with stylish and durable cases.</p>
          </div>
        </div>
        <div className="product-item">
         
          <div className="product-info">
            <h2>Camera Accessories</h2>
            <p>Enhance your photography with our range of accessories.</p>
          </div>
        </div>
        <div className="product-item">
         
          <div className="product-info">
            <h2>Smartwatches</h2>
            <p>Stay connected with our latest smartwatches.</p>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default HomePage;
