import Notepad from '../components/Notepad';
import TypingWithSound from '/src/components/TypingWithSound.jsx'

const DorsetDialogue = [
    {
        name: "MC",
        dialogue: "test",
    },
    {
        name: "...",
        dialogue: "*environmental text*",
    }
]

const DorsetStreet = () => {
    return(
        <div className="text-white">
            <img id="dorsetBG" src="assets/images/locations/dorset-street.png"></img>
            <Notepad />
            <TypingWithSound
                    arr={DorsetDialogue}
                />
        </div>
    )
    };
    
    export default DorsetStreet;