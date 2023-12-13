import React, { useState, useEffect } from 'react';

const Cutscene = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'assets/images/cutscene/CutsceneImage 1.jpg',
    'assets/images/cutscene/CutsceneImage 2.jpg',
    'assets/images/cutscene/CutsceneImage 3.jpg',
    'assets/images/cutscene/CutsceneImage 4.jpg',
    'assets/images/cutscene/CutsceneImage 5.jpg',
    'assets/images/cutscene/CutsceneImage 6.jpg',
    'assets/images/cutscene/CutsceneImage 7.jpg',
    'assets/images/cutscene/CutsceneImage 8.jpg',
    'assets/images/cutscene/CutsceneImage 9.jpg',
    'assets/images/cutscene/CutsceneImage 10.jpg',
    'assets/images/cutscene/CutsceneImage 11.jpg',
    'assets/images/cutscene/CutsceneImage 12.jpg',
    'assets/images/cutscene/CutsceneImage 13.jpg',
    'assets/images/cutscene/CutsceneImage 14.jpg',
    'assets/images/cutscene/CutsceneImage 15.jpg',
    'assets/images/cutscene/CutsceneImage 16.jpg',
    'assets/images/cutscene/CutsceneImage 17.PNG',
    // Add more image paths for your cutscene
  ];
  useEffect(() => {
    // Implement logic to advance to the next image after a certain time interval
    const interval = setInterval(() => {
      if (currentImage < images.length - 1) {
        setCurrentImage(prev => prev + 1);
      } else {
        window.location.replace('/')
      }
    }, 4000); // Change the duration as per your requirements

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div>
      <div id="cutsceneBG"></div>
      <img id="finalCutscene" src={images[currentImage]} alt={`Scene ${currentImage + 1}`} />
      
    </div>
  );
};

export default Cutscene;