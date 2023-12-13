import AutoSave from '../components/AutoSave';
import TypingWithSound from '/src/components/TypingWithSound.jsx'

// pass in an array of dialogue for the typing with sound component
// const MitreSquareDialogue = ['another victim...','this scene is horrifying','its a god damn arms race']

const MitreSquareDialogue = [
    {
        name: "MC",
        dialogue: "Another victim... ",
    },
    {
        name: "MC",
        dialogue: "This is intolerable... he's still out here... he's still butchering them... killing them like some rabid animal...",
    },
    {
        name: "MC",
        dialogue: "One day soon we'll put him down for good... this JACK THE RIPPER..."
    },
    {
        name: "...",
        dialogue: "* A large crowd gathers. *"
    },
    {
        name: "...",
        dialogue: "* You can clearly hear them murmuring all manner of hysterical mutterings as the y wrestle with terrible reality that hs come to London *"
    },
    {
        name: "...",
        dialogue: "* Among them you see {woman#1 name} trying her best to remain calm amidst the chaos *"
    },
    {
        name: "...",
        dialogue: "* You make your way over to speak with her at the police perimeter *"
    },
    {
        name: "MC",
        dialogue: "{woman#1 name}... I'm at a loss, I can hardly bid you good evening under the circumstances"
    },
    {
        name: "{woman#1 name}",
        dialogue: "It's him again... isn't it...?"
    },
    {
        name: "MC",
        dialogue: "My intent is not to be deceptive... but I must tell you like I have told others, that it is too soon to tell"
    },

    {
        name: "{woman#1 name}",
        dialogue: "Your best guess then good sir"
    },

    {
        name: "...",
        dialogue: "* You look about yourself to determine if anyone is within earshot. *"
    },
    {
        name: "...",
        dialogue: "* You turn back to look at her, and with a heavy sigh, you speak again. *"
    },
    {
        name: "MC",
        dialogue: "My *guess* is that our brief reprieve from his tyranny is at an end."
    },
    {
        name: "MC",
        dialogue: "As I had told my superiors during these past weeks of silence on his part, I do not beleive this is someone who is simply mad, but on a cruel and evil mission."
    },
    {
        name: "MC",
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
        name: "MC",
        dialogue: "Keep your girls inside for the time being, and if you can, keep a watchful eye on them, I will do my best to keep you informed of any new developments, don't take on any unknown or suspicious clients."
    },
    {
        name: "MC",
        dialogue: "I will catch this monster, I swear it."
    },
    
    {
        name: "{woman#1 name}",
        dialogue: "Thank you Mac, thank you so much"
    },
    {
        name: "MC",
        dialogue: "Be safe Madame"
    },
    {
        name: "...",
        dialogue: "* She departs looking less concerned then she had prior. However, you turn back to the body with renewed indignation."
    },
    {
        name: "...",
        dialogue: "* One way or another this will end. At that moment, that is when you notice something on the ground. *"
    },
    {
        name: "...",
        dialogue: "* You make your way over, and discover {item 1}. *"
    },
    {
        name: "...",
        dialogue: "* It seemed out of place among the miscellanious items that littered the alley. *"
    },

    {
        name: "...",
        dialogue: "* If this was evidence from the crime, a question arises: *"
    },
    {
        name: "...",
        dialogue: "* Did it belong to the victim... or the suspect...? *"
    },
    {
        name: "MC",
        dialogue: "I should get back to my office, and take a look at everything we have so far."
    },
]

const MitreSquare = () => {

    const hide = (event) => {

        // console.log(event.view.parent.document.children[0].children[1].children[0].children[0].children[0].id)
        // console.log(event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].id)
        // console.log(event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].textContent)

        // unnecessary dom manipulation, coulda used useStates

        if (event.target.id === "text1" || event.target.id === "chapter1"){

            event.view.parent.document.children[0].children[1].children[0].children[0].children[0].id = "hideBG";

            event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].id = "hideText"

            // event.view.parent.document.children[0].children[1].children[0].children[0].children[0].children[0].textContent = null;
        }
    }

    return (
        <div className="text-white">
            <AutoSave />
            <p onClick={hide} className='text-center' id="chapter1"><span id='text1'>Chapter 1: The Mitre Square Massacre</span></p>
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