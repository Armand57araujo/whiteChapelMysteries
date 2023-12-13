import TypingWithSound from '/src/components/TypingWithSound.jsx'
import AutoSave from '../components/autoSave'
import { Link } from 'react-router-dom'


const DorsetDialogue = [
    {
        name: "...",
        dialogue: "We arrive at Dorset Street, following the evidence that has led us here",
    },
    {
        name: "...",
        dialogue: "*  *",
    }
]

const DorsetStreet = () => {

    return (
        <>
            <div className="text-white">
                <img id="dorsetBG" src="assets/images/locations/dorset-street.png"></img>
                <TypingWithSound
                    arr={DorsetDialogue}
                />
            </div>
            <Link to="/">
                <button id="backBtn">Back</button>
                <AutoSave />
            </Link>
        </>
    )
};

export default DorsetStreet;