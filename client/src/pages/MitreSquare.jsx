
import { useState } from 'react';
import TypingWithSound from '/src/components/TypingWithSound.jsx'

const MitreSquareDialogue = ['another victim...','this scene is horrifying','its a god damn arms race']


const MitreSquare = () => {

    // const [dialogue, setDialogue] = useState(MitreSquareDialogue.dialogue1.dialogue);

    // const handleDialogueChange = (newDialogue) => {
    //     setDialogue(newDialogue)
    // }

    return(
        <div>
            <h1>
                <TypingWithSound 
                // dialogue = {dialogue} 
                arr = {MitreSquareDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default MitreSquare;