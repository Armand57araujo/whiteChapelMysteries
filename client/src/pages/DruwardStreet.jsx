import TypingWithSound from '/src/components/TypingWithSound.jsx'

const DruwardDialogue = [
    {
        name: "MC",
        dialogue: "test",
    },
    {
        name: "...",
        dialogue: "*environmental text*",
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