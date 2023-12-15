import TypingWithSound from '/src/components/TypingWithSound.jsx'
import AutoSave from '../components/AutoSave';

const DruwardDialogue = [
    {
        name: "...",
        dialogue: "* You arrive at Druward Street and make your way to the alley where you have sent word that you wish to speak with Priya again regarding the nearby murder. *"
    },
    {
        name: "...",
        dialogue: "*Not long after you arrive, Priya seems to appear from nowhere *"
    },
    {
        name: "Mac",
        dialogue: "Thank you for meeting with me Miss—"
    },
    {
        name: "Priya",
        dialogue: "Got customers to see as well, so please kindly get on with it, would ya?"
    },
    {
        name: "...",
        dialogue: "* Despite her prickly demeanor, looking at her, it was clear as day that she was uncomfortable… no… terrified of being out at this time of night *"
    },
    {
        name: "...",
        dialogue: "* Best keep it brief then *"
    },
    {
        name: "Mac",
        dialogue: "Understood."
    },
    {
        name: "Priya",
        dialogue: "You want to know more about that night yeah? What more do you need?"
    },
    {
        name: "Mac",
        dialogue: "Anything more that you can remember would be beneficial Madam"
    },
    {
        name: "Priya",
        dialogue: "As I told you lot before, it was late at night, and I’d just finished for the night when I heard a scream..."
    },
    {
        name: "Mac",
        dialogue: "…Except of course… she was in fact murdered in that alley…"
    },
    {
        name: "...",
        dialogue: "*She froze for a moment*"
    },
    {
        name: "...",
        dialogue: "* Perhaps it was the first time she had considered that fact. Or more-likely she avoided the idea to assuage her guilt over the matter *"
    },
    {
        name: "Priya",
        dialogue: "Yes… well, them’s the cards as they say…"
    },
    {
        name: "...",
        dialogue: "* Her demeanor was a touch more somber now *"
    },
    {
        name: "Priya",
        dialogue: "Why…?"
    },
    {
        name: "Mac",
        dialogue: "I beg your pardon madam?"
    },
    {
        name: "Priya",
        dialogue: "Why is this happening? What kind of a sick, twisted world do we live in, where one deranged person can have you holding your breath from fear..."
    },
    {
        name: "Mac",
        dialogue: "Believe me madame… I understand"
    },
    {
        name: "Priya",
        dialogue: "If you understand, then find him… and if at all possible, fill him full of holes when you do"
    },
    {
        name: "...",
        dialogue: "* You smile warmly *"
    },
    {
        name: "Mac",
        dialogue: "I’ll do my best"
    },
    {
        name: "Priya",
        dialogue: "Right then, enough with all that… best be getting back. You take care of yourself detective"
    },
    {
        name: "...",
        dialogue: "* She begins to walk off, but then stops and turns back *"
    },
    {
        name: "Priya",
        dialogue: "One thing that’s bothered me about that night…"
    },
    {
        name: "Mac",
        dialogue: "What is that madame?"
    },
    {
        name: "Priya",
        dialogue: "She was running away from something, which may mean that at some point someone was chasing her..."
    },
    {
        name: "...",
        dialogue: "* With that last insight, she took her leave *"
    },
    {
        name: "...",
        dialogue: "* Chased? You mused as you thought through her words *"
    },
    {
        name: "...",
        dialogue: "* You should return to your office and go over everything you’ve learned so far *"
    }
]



const DruwardStreet = () => {
    return (
        <div className="text-white">
            <AutoSave />
            <img id="druwardBG" src="assets/images/locations/druward-street.png"></img>
            <h1>
                <TypingWithSound
                    arr={DruwardDialogue}
                />
            </h1>
        </div>
    )
};

export default DruwardStreet;