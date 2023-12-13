import React, { useState, useEffect } from 'react';

const Cutscene = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'assets/images/cutscene/theMonster.gif',
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

  return (
    <div>
      <img id="finalCutscene" src={images[currentImage]} alt={`Scene ${currentImage + 1}`} />
    </div>
  );
};

export default Cutscene;