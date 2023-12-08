import React, { useState } from 'react';
import './DialogueBox.css';
import TypingWithSound from './TypingWithSound'; // Import TypingWithSound component

const DialogueBox = () => {
  const [dialogueIndex, setDialogueIndex] = useState(0);

  // Sample dialogue and character images array
  const dialogues = [
    { text: 'Dialogue 1', characterImage: 'path_to_image_1.png' },
    { text: 'Dialogue 2', characterImage: 'path_to_image_2.png' },
    // Add more dialogues with respective character images as needed
  ];

  const generateDialogue = () => {
    if (dialogueIndex < dialogues.length) {
      const currentDialogue = dialogues[dialogueIndex];
      setDialogueIndex(dialogueIndex + 1);

      // Update dialogue and character image
      setGeneratedDialogue(currentDialogue.text);
      setCharacterImage(currentDialogue.characterImage);
    }
  };

  const [generatedDialogue, setGeneratedDialogue] = useState('');
  const [characterImage, setCharacterImage] = useState('');

  return (
    <div className="dialogue-box">
      <div className="character-icon">
        {characterImage && <img src={characterImage} alt="Character" />}
      </div>
      <div className="dialogue-text">
        <p>Hello there! This is an 8-bit dialogue box.</p>
      </div>
      <TypingWithSound text={generatedDialogue} />
      <button onClick={generateDialogue}>Next Dialogue</button>
    </div>
  );
};

export default DialogueBox;
