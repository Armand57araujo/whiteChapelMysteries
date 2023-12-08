import React, { useState } from 'react';
import './src/components/DialogueBox.css'; // Import CSS
import TypingWithSound from './TypingWithSound'; // Import TypingWithSound component

const DialogueBox = () => {
  const [generatedDialogue, setGeneratedDialogue] = useState('');

  const generateDialogue = () => {
    // Replace with your dialogue generation logic
    const newDialogue = 'Your generated dialogue here';
    setGeneratedDialogue(newDialogue);
  };

  return (
    <div className="dialogue-box">
      <div className="dialogue-text">
        <p>Hello there! This is an 8-bit dialogue box.</p>
      </div>
      <TypingWithSound text={generatedDialogue} /> {}
      <button onClick={generateDialogue}>Generate Dialogue</button>
    </div>
  );
};

export default DialogueBox;
