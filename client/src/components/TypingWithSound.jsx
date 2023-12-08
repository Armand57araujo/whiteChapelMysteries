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