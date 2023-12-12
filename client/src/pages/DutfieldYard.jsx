import TypingWithSound from '/src/components/TypingWithSound.jsx'

const DutfieldDialogue = [
    {
        name: "MC",
        dialogue: "test",
    },
    {
        name: "...",
        dialogue: "*environmental text*",
    }
]

const DutfieldYard = () => {
    return(
        <div className="text-white">
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