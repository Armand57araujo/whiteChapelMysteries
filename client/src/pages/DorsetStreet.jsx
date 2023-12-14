import TypingWithSound from '/src/components/TypingWithSound.jsx'
import AutoSave from '../components/AutoSave'
import { Link } from 'react-router-dom'


const DorsetDialogue = [
    {
        name: "...",
        dialogue: "* You arrive at Dorset Street, following the evidence that has led you there *",
    },
    {
        name: "...",
        dialogue: "* 'If you survive… come speak to me again… we will have much to discuss... ' the fisherman's words echo through your head. *",
    },
    {
        name: "...",
        dialogue: "* Just what had he meant by that?...*",
    },
    {
        name: "...",
        dialogue: "* How did this all connect, and just what was the fisherman so afraid of? *",
    },
    {
        name: "...",
        dialogue: "* There was an old factory here in Dorset, it was abandoned after it fell on hard times. *",
    },
    {
        name: "...",
        dialogue: "* All the evidence pointed there, so if you want answers, that's where you'll find them. *",
    },
    {
        name: "...",
        dialogue: "* You begin on your way... but no sooner than you had begun, are you brought to a halt by the all to familiar sound of a woman crying out in terror.... *",
    }
]

const DorsetStreet = () => {

    return (
            <div className="text-white">
                <AutoSave />
                <img id="dorsetBG" src="assets/images/locations/dorset-street.png"></img>
                <h1>
                <TypingWithSound
                    arr={DorsetDialogue}
                />
                </h1>
            </div>
    )
};

export default DorsetStreet;