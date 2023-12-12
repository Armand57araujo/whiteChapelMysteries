
const HanburyDialogue = [
    {
        name: "MC",
        dialogue: "test",
    },
    {
        name: "...",
        dialogue: "*environmental text*",
    }
]

const HanburyStreet = () => {
    return(
        <div className="text-white">
            <img id="hanburyBG" src="assets/images/locations/hanbury-street.png"></img>
            <h1>
            <TypingWithSound
                    arr={HanburyDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default HanburyStreet;