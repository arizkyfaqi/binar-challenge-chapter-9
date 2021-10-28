import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>PLAY TRADITIONAL GAMES</h1>
      <p>Experience new traditional gameplay</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
