import AutoSave from '../components/AutoSave';
import TypingWithSound from '/src/components/TypingWithSound.jsx'

const DutfieldDialogue = [
    {
        name: "...",
        dialogue: "* You arrive at Dutfield Yard and make your way to the scene of the crime, where you have sent word that you wish to speak with Sofia again regarding the murder nearby. *"
    },
    {
        name: "...",
        dialogue: "* No sooner than had you arrived, did Sofia come to meet you *"
    },
    {
        name: "Mac",
        dialogue: "Hello Sofia, I hope you’ve been well."
    },
    {
        name: "Sofia",
        dialogue: "Hello again Detective. Yes, as well as can be expected. You?"
    },
    {
        name: "Mac",
        dialogue: "…Determined to see this all come to a close, which is my reason for having come here."
    },
    {
        name: "Sofia",
        dialogue: "I’m sure… anything I can do to help, I shall do my best"
    },
    {
        name: "Mac",
        dialogue: "I am most grateful. On the night in question; you said that from your upper story window in your shop that you had seen someone roaming the street in the darkness, is that correct?"
    },
    {
        name: "Sofia",
        dialogue: "Indeed. I had closed the shop as all deliveries for the recent Morton Family funeral had been completed..."
    },
    {
        name: "...",
        dialogue: "* She was a light-hearted person, and didn’t wear her emotions on her face. *"
    },
    {
        name: "...",
        dialogue: "* Even so… there were signs that the recollection did bother her *"
    },
    {
        name: "Mac",
        dialogue: "I’m sorry you had to experience that. I know it had to be terrifying."
    },
    {
        name: "Sofia",
        dialogue: "That’s White Chapel for you these days… pray the good lord brings safely through this all…"
    },
    {
        name: "Mac",
        dialogue: "Indeed Madame. Was there anything else you could remember?"
    },
    {
        name: "...",
        dialogue: "*She paused for a moment as she thought*"
    },
    {
        name: "...",
        dialogue: "* This was the first time her pleasant expression changed to that of guilt *"
    },
    {
        name: "Sofia",
        dialogue: "Well…"
    },
    {
        name: "Mac",
        dialogue: "Don’t worry, I will hear you out no matter what."
    },
    {
        name: "Sofia",
        dialogue: "Thank you Detective, though that isn’t what vexes me from speaking..."
    },
    {
        name: "Mac",
        dialogue: "Madame… I implore you… if there is any information you are withholding please be forthcoming, as it could mean the difference in saving many people’s lives."
    },
    {
        name: "Sofia",
        dialogue: "I am aware of this Detective, however if I set you on this person to confront and question... then..."
    },
    {
        name: "...",
        dialogue: "* You pause and notice her visibly uncomfortable. *"
    },
    {
        name: "Mac",
        dialogue: "Madame, if you tell me of this person, then you have my word that no official inquiry will be made..."
    },
    {
        name: "...",
        dialogue: "* She pauses and considering your words *"
    },
    {
        name: "Sofia",
        dialogue: "If it is as you say… that night, after I had mustered the courage to leave my shop... I noticed sir Edmonten, the fisherman in the same alleyway that the murder had taken place."
    },
    {
        name: "Mac",
        dialogue: "You’re certain madam?"
    },
    {
        name: "Sofia",
        dialogue: "As I said sir, I know him quite well, I’m sure it was him"
    },
    {
        name: "Mac",
        dialogue: "Very well then. Thank you Madame, your assistance is greatly appreciated."
    },
    {
        name: "Sofia",
        dialogue: "Pleased to be of help sir. Be safe sir… dark times these are."
    },
    {
        name: "Mac",
        dialogue: "And to you madame."
    },
    {
        name: "...",
        dialogue: "* With that she took her leave *"
    },
    {
        name: "...",
        dialogue: "* Just how does Edmonten Xaviar fit into all of this? Could it really be so easy, have you in fact found The Ripper? There’s only one way to determine if that is the case. You will have to pay this fisherman a visit *"
    },
    {
        name: "...",
        dialogue: "* But first… *"
    },
    {
        name: "...",
        dialogue: "* You should return to our office and go over everything you’ve learned thus far *"
    }
]


const DutfieldYard = () => {
    return(
        <div className="text-white">
            <AutoSave />
            <img id="dutfieldBG" src="assets/images/locations/dutfield-yard.png"></img>
            <h1>
            <TypingWithSound
                    arr={DutfieldDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default DutfieldYard;