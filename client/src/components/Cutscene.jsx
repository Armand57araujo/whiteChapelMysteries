import React, { useState, useEffect } from 'react';

const Cutscene = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/scene1.png',
    '/images/scene2.png',
    // Add more image paths for your cutscene
  ];
  useEffect(() => {
    // Implement logic to advance to the next image after a certain time interval
    const interval = setInterval(() => {
      if (currentImage < images.length - 1) {
        setCurrentImage(prev => prev + 1);
      } else {
      
      }
    }, 3000); // Change the duration as per your requirements

    return () => clearInterval(interval);
  }, [currentImage, images.length]);