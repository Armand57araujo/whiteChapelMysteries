import React, { useEffect, useState} from 'react';
import Typed from 'typed.js';
import { Howl } from 'howler';
import handleSpeakingSprite from '../utils/spriteHandling';

const TypingWithSound = (props) => {

  let [count, setCount] = useState(0);
  let [itemArr, setItemArr] = useState([]);
  let itemCount = 0;
  // pass in location dialogue info
  const [dialogue, setDialogue] = useState(props.arr[0].dialogue);
  const [speaker, setSpeaker] = useState(props.arr[0].name);
  
  // function handles all dialogue passed in for the current location\
  const handleTextbox = () => {
  
  // depending on the amount of dialogue passed in display correct character speaking
  const handleNameChange = () => {
    
    console.log("name set");
    if(count < props.arr.length){
      setSpeaker(props.arr[count].name)
    } else if(count = props.arr.length){
      // when we've reached the end of however long the passed in dialogue array is then we head back to the office space.
    
      // using state for item array is current replacement for passing item array from db
      let tempArr = itemArr;
      itemCount++;
      tempArr.push(`item ${itemCount}`)
      setItemArr(tempArr);
      
      console.log([...tempArr]);
      window.location.replace("/office");
    }
  }

  // depending on the amount of dialogue passed in display correct dialogue text for the character speaking
  const handleDialogueChange = () => {
    console.log("you clicked!")
    if(count < props.arr.length){
      setDialogue(props.arr[count].dialogue)
      setCount(count+1)
    }
  }

  // on click slide over to the next set of dialogue
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
            showCursor: false,
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
          <img id="speakingSprite" src={handleSpeakingSprite(speaker)}></img>
          <div id="speakingChar">{speaker}</div>
          <textarea readonly='readonly' id="typed" rows={4} onClick={handleTextbox}></textarea>
          </div>
        </div>
      );
    };
    
    export default TypingWithSound;