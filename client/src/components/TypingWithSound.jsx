import React, { useEffect, useState} from 'react';
import Typed from 'typed.js';
import { Howl } from 'howler';

const TypingWithSound = (props) => {

  let [count, setCount] = useState(0);
  const [dialogue, setDialogue] = useState(props.arr[0].dialogue);
  const [speaker, setSpeaker] = useState(props.arr[0].name);
  
  // function handles all dialogue passed in for the current location\
  const handleTextbox = () => {
  const handleNameChange = () => {
    console.log("name set");
    if(count < props.arr.length){
      setSpeaker(props.arr[count].name)
    } else if(count = props.arr.length){
      window.location.replace("/office");
    }
  }

  const handleDialogueChange = () => {
    console.log("you clicked!")
    if(count < props.arr.length){
      setDialogue(props.arr[count].dialogue)
      setCount(count+1)
    }else if(count = props.arr.length){
      window.location.replace("/office");
    }
  }
  handleNameChange();
  handleDialogueChange();
}
  

    useEffect(() => {
        const text = dialogue;

        // Sound setup using Howler.js
        const typingSound = new Howl({
          src: ['assets/sounds/typewriter.ogg'],  // Replace with your audio file path
        });

        // Create a new instance of Typed.js
        const typed = new Typed('#typed', {
            strings: [text],
            typeSpeed: 50, // Adjust speed as needed
            onStringTyped: function (arrayPos, self) { 
                  // Play sound on each character typed
        const currentChar = self.strings[arrayPos][self.charIndex];
        if (currentChar !== ' ') {
          // Exclude spaces from triggering sound
          typingSound.seek(0); // Reset sound to start
          typingSound.play();
        }
      },
    });
    return () => {
        // Clean up Typed instance and sound on unmount
        typed.destroy();
        typingSound.unload();
      };
    }, [dialogue]);

    // return dialogue box, switches through passed in dialogue array
    return (
        <div>
          <div className="dialogueBox">
          <div id="speakingChar">{speaker}</div>
          <div id="typed" onClick={handleTextbox}></div>
          </div>
        </div>
      );
    };
    
    export default TypingWithSound;