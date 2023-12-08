import React from "react";
import './src/DialogueBox.css';
import TypingWithSound from './TypingWithSound';


const DialogueBox = () => {
  return (
    <div className="dialogue-box">
      <div className="dialogue-text">
        <p>Sup Alonso !.</p>
      </div>
      <TypingWithSound /> {/* Include TypingWithSound component */}
    </div>
  );
};

export default DialogueBox;