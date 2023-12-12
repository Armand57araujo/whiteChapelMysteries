import TypingWithSound from '/src/components/TypingWithSound.jsx'

const WharfDialogue = [
    {
        name: "MC",
        dialogue: "test",
    },
    {
        name: "...",
        dialogue: "*environmental text*",
    }
]

const Wharf = () => {
    return(
        <div className="text-white">
            <img id="wharfBG" src="assets/images/locations/wharf.png"></img>
            <h1>
            <TypingWithSound
                    arr={WharfDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default Wharf;