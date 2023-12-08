import React, { useState } from 'react';
import './DialogueBox.css';
import TypingWithSound from './TypingWithSound'; // Import TypingWithSound component

const DialogueBox = () => {
  const [generatedDialogue, setGeneratedDialogue] = useState('');
  const [characterImage, setCharacterImage] = useState(''); // State for character image

  const generateDialogue = () => {
    // Replace with your dialogue generation logic
    const newDialogue = 'Your generated dialogue here';
    const newCharacterImage = 'path_to_character_image.png'; // Replace with your image path
    setGeneratedDialogue(newDialogue);
    setCharacterImage(newCharacterImage);
  };

  return (
    <div className="dialogue-box">
      <div className="character-icon">
        {characterImage && <img src={characterImage} alt="Character" />} {/* Display character image */}
      </div>
      <div className="dialogue-text">
        <p>Hello there! This is an 8-bit dialogue box.</p>
      </div>
      <TypingWithSound text={generatedDialogue} /> {/* Include TypingWithSound component */}
      <button onClick={generateDialogue}>Generate Dialogue</button>
    </div>
  );
};

export default DialogueBox;
