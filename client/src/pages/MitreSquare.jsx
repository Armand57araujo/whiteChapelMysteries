import AutoSave from '../components/AutoSave';
import TypingWithSound from '/src/components/TypingWithSound.jsx'
import { useState } from 'react';

// pass in an array of dialogue for the typing with sound component
// const MitreSquareDialogue = ['another victim...','this scene is horrifying','its a god damn arms race']

const MitreSquareDialogue = [
    {
        name: "Mac",
        dialogue: "Another victim... ",
    },
    {
        name: "Mac",
        dialogue: "This is intolerable... he's still out there... he's still butchering them... killing them like some rabid animal...",
    },
    {
        name: "Mac",
        dialogue: "One day soon we'll put him down for good... this JACK THE RIPPER..."
    },
    {
        name: "...",
        dialogue: "* A large crowd gathers. *"
    },
    {
        name: "...",
        dialogue: "* You can clearly hear them murmuring all manner of hysterical mutterings as they wrestle with the terrible reality that has come to London *"
    },
    {
        name: "...",
        dialogue: "* Among them you see a familiar face trying her best to remain calm amidst the chaos *"
    },
    {
        name: "...",
        dialogue: "* You make your way over to speak with her at the police perimeter *"
    },
    {
        name: "Mac",
        dialogue: "Chloe... I'm at a loss, I can hardly bid you a good evening under these circumstances"
    },
    {
        name: "Chloe",
        dialogue: "It's him again... isn't it...?"
    },
    {
        name: "Mac",
        dialogue: "My intent is not to be deceptive... but I must let you know, like I have told others, it is too soon to tell"
    },

    {
        name: "Chloe",
        dialogue: "Your best guess then, good sir?"
    },

    {
        name: "...",
        dialogue: "* You look about yourself to determine if anyone is within earshot. *"
    },
    {
        name: "...",
        dialogue: "* You turn back to look at her, and let out a heavy sigh. *"
    },
    {
        name: "Mac",
        dialogue: "My 'guess' is that our brief reprieve from his tyranny is at an end."
    },
    {
        name: "Mac",
        dialogue: "As I had told my superiors during these past weeks of silence, I do not believe this is someone who is simply mad, but on a cruel and evil mission."
    },
    {
        name: "Mac",
        dialogue: "Someone of that inclination does not simply stop, not until they are sated"
    },

    {
        name: "...",
        dialogue: "* You can see she is clearly uneasy *"
    },

    {
        name: "...",
        dialogue: "* You place your hand on her shoulder to comfort her *"
    },
    {
        name: "Mac",
        dialogue: "Keep your girls inside for the time being, and if you can, keep a watchful eye on them, I will do my best to keep you informed of any new developments, don't take on any unknown or suspicious clients."
    },
    {
        name: "Mac",
        dialogue: "I will catch this monster, I swear it."
    },
    
    {
        name: "Chloe",
        dialogue: "Thank you Mac, thank you so much"
    },
    {
        name: "Mac",
        dialogue: "Be safe Madame"
    },
    {
        name: "...",
        dialogue: "* She departs looking less concerned than she had prior. However, you turn back to the body with renewed indignation. *"
    },
    {
        name: "...",
        dialogue: "* 'One way or another this will end' you think to yourself. At that moment, you notice something on the ground. *"
    },
    {
        name: "...",
        dialogue: "* You make your way over, and discover {item 1}. *"
    },
    {
        name: "...",
        dialogue: "* It seemed out of place amongst the miscellaneous items that littered the alleyway. *"
    },

    {
        name: "...",
        dialogue: "* If this was evidence from the crime, a question arises: *"
    },
    {
        name: "...",
        dialogue: "* Did it belong to the victim...? Or the suspect...? *"
    },
    {
        name: "Mac",
        dialogue: "I should get back to my office, and take notes on the situation."
    },
]

const MitreSquare = () => {

    const [hideOpenScene, setHideOpenScene] = useState(['chapter1', 'text1'])

    const hide = (event) => {

        // console.log(event.view.parent.document.children[0].children[1].children[0].children[0].children[0].id)
        // console.log(event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].id)
        // console.log(event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].textContent)

        // unnecessary dom manipulation, coulda used useStates

        if (hideOpenScene[1] === "text1" || hideOpenScene[0] === "chapter1"){

            // event.view.parent.document.children[0].children[1].children[0].children[0].children[0].id = "hideBG";

            // event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].id = "hideText"
            
            setHideOpenScene(['hideBG', 'hideText'])
            // event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].textContent = null;
        }

        
    }

    return (
        <div className="text-white">
            <AutoSave />
            <p onClick={hide} className='text-center' id={hideOpenScene[0]}><span id={hideOpenScene[1]}>Chapter 1: The Mitre Square Massacre</span></p>
            <img id="mitreBG" src="assets/images/locations/mitre-square.png"></img>
            <h1>
                <TypingWithSound
                    arr={MitreSquareDialogue}
                />
            </h1>
        </div>
    )
};

export default MitreSquare;