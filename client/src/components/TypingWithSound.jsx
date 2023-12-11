import React, { useEffect, useState} from 'react';
import Typed from 'typed.js';
import { Howl } from 'howler';

const TypingWithSound = (props) => {

  const [count, setCount] = useState(0);
  const [dialogue, setDialogue] = useState(props.arr[0]);
  

  const handleDialogueChange = () => {
    console.log("you clicked!")
    if(count < props.arr.length){
      setDialogue(props.arr[count])
      setCount(count+1)
    }
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
    return (
        <div>
          <div id="typed" onClick={handleDialogueChange}></div>
        </div>
      );
    };
    
    export default TypingWithSound;