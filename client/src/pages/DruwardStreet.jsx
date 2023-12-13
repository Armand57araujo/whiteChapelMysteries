import TypingWithSound from '/src/components/TypingWithSound.jsx'

const DruwardDialogue = [
    {
        "name": "...",
        "dialogue": "*You arrive at {location} and make your way to {respective alley}, where you have sent word that you wish to speak with {woman#3} again regarding the murder nearby.*"
    },
    {
        "name": "...",
        "dialogue": "*No sooner had you arrived, did {woman#3} arrive to meet you*"
    },
    {
        "name": "MC",
        "dialogue": "Thank you for meeting with me Miss—"
    },
    {
        "name": "{woman#3}",
        "dialogue": "Got customers to see to, so please kindly get on with it, would ya?"
    },
    {
        "name": "...",
        "dialogue": "*Despite her prickly demeanor, looking at her, it was clear she was uncomfortable… no… terrified of being out at this time of night*"
    },
    {
        "name": "...",
        "dialogue": "*Best keep it brief then*"
    },
    {
        "name": "MC",
        "dialogue": "Understood."
    },
    {
        "name": "{woman#3}",
        "dialogue": "You want to know more about that night yeah? What more do you need?"
    },
    {
        "name": "MC",
        "dialogue": "Anything more that you can remember would be beneficial Madam"
    },
    {
        "name": "{woman#3}",
        "dialogue": "As I told you lot before, it was late at night I’d just finished for the night when I heard a scream..."
    },
    {
        "name": "MC",
        "dialogue": "…Except of course… she was in fact murdered in said alley…"
    },
    {
        "name": "...",
        "dialogue": "*She froze for a moment*"
    },
    {
        "name": "...",
        "dialogue": "*Perhaps it was the first she’d considered that fact. Or more-likely she avoided the idea to assuage her guilt over the matter*"
    },
    {
        "name": "{woman#3}",
        "dialogue": "Yes… well, them’s the cards as they say…"
    },
    {
        "name": "...",
        "dialogue": "*Her demeanor was a touch more somber now*"
    },
    {
        "name": "{woman#3}",
        "dialogue": "Why…?"
    },
    {
        "name": "MC",
        "dialogue": "I beg your pardon madam?"
    },
    {
        "name": "{woman#3}",
        "dialogue": "Why is this happening? What kind of a sick, twisted world do we live in, where one deranged person can have you holding your breath from fear..."
    },
    {
        "name": "MC",
        "dialogue": "Believe me madam… I understand"
    },
    {
        "name": "{woman#3}",
        "dialogue": "If you understand, find him… and if at all possible, fill him full of holes when you do"
    },
    {
        "name": "...",
        "dialogue": "*You smile warmly*"
    },
    {
        "name": "MC",
        "dialogue": "I’ll do my best"
    },
    {
        "name": "{woman#3}",
        "dialogue": "Right then, enough with all that… best be getting back. You take care of yourself detective"
    },
    {
        "name": "...",
        "dialogue": "*She begins to walk off, but then stops and turns back*"
    },
    {
        "name": "{woman#3}",
        "dialogue": "One thing that’s bothered me about that night…"
    },
    {
        "name": "MC",
        "dialogue": "What is that madam?"
    },
    {
        "name": "{woman#3}",
        "dialogue": "She was running away from someone, which means that at some point they were behind her if they were chasing her..."
    },
    {
        "name": "...",
        "dialogue": "*With that last insight, she took her leave*"
    },
    {
        "name": "...",
        "dialogue": "*How indeed? You mused as you thought through her words*"
    },
    {
        "name": "...",
        "dialogue": "*We should return to our office and go over everything we’ve learned so far*"
    }
]



const DruwardStreet = () => {
    return(
        <div className="text-white">
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