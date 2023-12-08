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
