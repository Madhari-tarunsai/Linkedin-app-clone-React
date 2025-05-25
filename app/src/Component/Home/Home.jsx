import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome</h1>
          <h1>to your</h1>
          <h1>Professional Community</h1>
          <p>
            Connect with colleagues, discover new opportunities, and grow your career with our powerful professional network.
          </p>
        </div>
        <div className="home-image">
          <img
            src="https://brimbanklibraries.vic.gov.au/wp-content/uploads/2024/04/LinkedIn-Learning-2.png"
            alt="LinkedIn Learning"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
