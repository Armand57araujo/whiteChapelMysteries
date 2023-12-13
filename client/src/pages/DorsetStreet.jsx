import TypingWithSound from '/src/components/TypingWithSound.jsx'
import AutoSave from '../components/AutoSave'
import { Link } from 'react-router-dom'


const DorsetDialogue = [
    {
        name: "...",
        dialogue: "We arrive at Dorset Street, following the evidence that has led us here",
    },
    {
        name: "...",
        dialogue: "* 'If you survive… come speak to me again… we will have much to discuss... ' *",
    },
    {
        name: "...",
        dialogue: "* Just what had he meant by that?...*",
    },
    {
        name: "...",
        dialogue: "* How did this, all connect, and just what was the Fisherman so afraid of?*",
    },
    {
        name: "...",
        dialogue: "* There was an old factory here in Dorset, it was abandoned after it fell on hard times. *",
    },
    {
        name: "...",
        dialogue: "* All the evidence pointed there, so if we want answers, that's where we'll find them. *",
    },
    {
        name: "...",
        dialogue: "* We begin on our way... but no sooner had we begun, are we brought to a halt by the all to familiar sound of a woman crying out in terror.... *",
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