import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

const Cutscene = () => {

  const song = '/assets/sounds/suspense.mp3';
    // Add more sound paths for your cutscene

  const sound = new Howl({
    src: [song],
    autoplay: true,
    loop: false,
  });

  let count = 74;
  const timer = setInterval(function() {
  count--;
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
    window.location.replace('/')
  }
}, 1000);

  useEffect(() => {
    sound.unload(); // Unload previous sound on image change
    const newSound = new Howl({
      src: [song],
      autoplay: true,
      loop: false,
    });
    sound.play(); // Play the new sound
    return () => newSound.unload(); // Unload the sound on next image change
  }, [sound]);

  return (
    <div>
      <div id="cutsceneBG"></div>
      <img id="finalCutscene" src='/assets/images/cutscene/WCM_Cutscene.gif' alt={`Final Cutscene`} />
    </div>
  );
};

export default Cutscene;
