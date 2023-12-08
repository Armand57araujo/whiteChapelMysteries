import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Howl } from 'howler';


const TypingWithSound = () => {
    useEffect(() => {
        const text = 'Welcome to White Chapel Mysteries';

        // Sound setup using Howler.js
        const typingSound = new Howl({
            src: ['path/to/typing-sound.mp3'], // Replace with your audio file path
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
    }, []);