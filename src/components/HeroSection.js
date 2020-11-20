import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-sub-container'>
        <h1>Hello my name is</h1>
        <h2>Alicia Gorton</h2>
        <p>I'm a full-stack MERN web developer based in Sacramento, CA that enjoys crafting websites, applications, and everything in between. I am looking for opportunities of growth in the fields of emerging technology and data science. </p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
