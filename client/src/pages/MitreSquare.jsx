import TypingWithSound from '/src/components/TypingWithSound.jsx'

// pass in an array of dialogue for the typing with sound component
// const MitreSquareDialogue = ['another victim...','this scene is horrifying','its a god damn arms race']
const MitreSquareDialogue = [
    {
        name: "MC",
        dialogue: "another victim..."
    },
    {
        name: "char2",
        dialogue: "this scene is horrifying"
    },
    {
        name: "char3",
        dialogue: "its a god damn arms race"
    }
]

const MitreSquare = () => {

    return(
        <div>
            <img id="mitreBG" src="assets/images/locations/mitre-square.png"></img>
            <h1>
                <TypingWithSound 
                arr = {MitreSquareDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default MitreSquare;