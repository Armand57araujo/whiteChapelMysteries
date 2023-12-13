import AutoSave from '../components/AutoSave';
import TypingWithSound from '/src/components/TypingWithSound.jsx'

const DutfieldDialogue = [
    {
        name: "...",
        dialogue: "*You arrive at {location} and make your way to {respective alley}, where you have sent word that you wish to speak with {woman#4} again regarding the murder nearby.*"
    },
    {
        name: "...",
        dialogue: "*No sooner had you arrived, did {woman#4} arrive to meet you*"
    },
    {
        name: "MC",
        dialogue: "Hello {woman#4}, I hope you’ve been well"
    },
    {
        name: "{woman#4}",
        dialogue: "Hello again Detective. Yes, as well as can be expected. And you?"
    },
    {
        name: "MC",
        dialogue: "…Determined to see this all come to a close, which is my reason for having come here"
    },
    {
        name: "{woman#4}",
        dialogue: "I’m sure… anything I can do to help I shall do my best"
    },
    {
        name: "MC",
        dialogue: "I am most grateful. On the night in question you said from your upper story on your shop that you had seen someone roaming the street in the darkness, is that correct?"
    },
    {
        name: "{woman#4}",
        dialogue: "Indeed. I had closed the shop as all deliveries for the recent Morton Family funeral had been completed..."
    },
    {
        name: "...",
        dialogue: "*She was a light-hearted person, and didn’t wear her emotions on her face.*"
    },
    {
        name: "...",
        dialogue: "*Even so… there were signs that the recollection did bother her*"
    },
    {
        name: "MC",
        dialogue: "I’m sorry you had to experience that. I know it had to be terrifying"
    },
    {
        name: "{woman#4}",
        dialogue: "That’s White Chapel for you these days… pray the good Lord brings all safely through this all…"
    },
    {
        name: "MC",
        dialogue: "Indeed Madam. Was there anything else you could remember?"
    },
    {
        name: "...",
        dialogue: "*She paused for a moment as she thought*"
    },
    {
        name: "...",
        dialogue: "*This was the first time her pleasant expression changed to one of guilt*"
    },
    {
        name: "{woman#4}",
        dialogue: "Well…"
    },
    {
        name: "MC",
        dialogue: "Don’t worry, I will hear you out no matter what"
    },
    {
        name: "{woman#4}",
        dialogue: "Thank you Detective, though that isn’t what vexes me from speaking..."
    },
    {
        name: "MC",
        dialogue: "Madam… I implore you… if there is any information you are withholding please be forthcoming here and now as it could mean the difference in saving people’s lives"
    },
    {
        name: "{woman#4}",
        dialogue: "I am aware of this Detective, however if I set you on this person to confront and question..."
    },
    {
        name: "...",
        dialogue: "*You pause and consider her reasoning*"
    },
    {
        name: "MC",
        dialogue: "Madam, if you tell me of this person, then you have my word that no official enquiry will be made..."
    },
    {
        name: "...",
        dialogue: "*She pauses and considering your words*"
    },
    {
        name: "{woman#4}",
        dialogue: "If it is as you say… that night, after I had mustered the courage to leave my shop..."
    },
    {
        name: "MC",
        dialogue: "You’re certain madam?"
    },
    {
        name: "{woman#4}",
        dialogue: "As I said sir, I know him quite well, I’m sure it was him"
    },
    {
        name: "MC",
        dialogue: "Very well then. Thank you Madam, your assistance is greatly appreciated"
    },
    {
        name: "{woman#4}",
        dialogue: "Pleased to be of help sir. Be safe sir… dark times these are"
    },
    {
        name: "MC",
        dialogue: "And to you madam"
    },
    {
        name: "...",
        dialogue: "*With that she took her leave*"
    },
    {
        name: "...",
        dialogue: "*Just how does {fisherman} fit into all this? Could it really be so easy, have we in fact found The Ripper? There’s only one way to determine if this is the case. I will have to pay {fisherman} a visit*"
    },
    {
        name: "...",
        dialogue: "*But first…*"
    },
    {
        name: "...",
        dialogue: "*We should return to our office and go over everything we’ve learned so far*"
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