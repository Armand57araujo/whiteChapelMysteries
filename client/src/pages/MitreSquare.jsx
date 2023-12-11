import TypingWithSound from '/src/components/TypingWithSound.jsx'

// pass in an array of dialogue for the typing with sound component
const MitreSquareDialogue = ['another victim...','this scene is horrifying','its a god damn arms race']


const MitreSquare = () => {

    return(
        <div>
            <h1>
                <TypingWithSound 
                arr = {MitreSquareDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default MitreSquare;