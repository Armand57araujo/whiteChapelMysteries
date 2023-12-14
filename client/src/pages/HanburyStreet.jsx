import AutoSave from '../components/AutoSave';
import TypingWithSound from '../components/TypingWithSound'
const HanburyDialogue = [
    {
        name: "...",
        dialogue: "* You arrive at Hanbury Street and make your way to the crime scene, where you have sent word that you wish to speak with Patrisha again regarding the murder nearby. *"
    },
    {
        name: "...",
        dialogue: "* No sooner than you had arrived, Patrisha came to meet you *"
    },
    {
        name: "Mac",
        dialogue: "Good evening, Miss Patrisha."
    },
    {
        name: "Patrisha",
        dialogue: "G-Good evenin’ sir."
    },
    {
        name: "...",
        dialogue: "* She’s visibly uncomfortable, more than likely due to your appearance *"
    },
    {
        name: "...",
        dialogue: "* Understandable considering the horrific case we are associated *"
    },
    {
        name: "Mac",
        dialogue: "It’s been some time, I hope you’ve been well."
    },
    {
        name: "Patrisha",
        dialogue: "Doin’ my best sir… considerin’."
    },
    {
        name: "...",
        dialogue: "* You nod understandingly *"
    },
    {
        name: "Mac",
        dialogue: "Patrisha, I’ve come to ask you more questions about that night… the night when you found…"
    },
    {
        name: "Patrisha",
        dialogue: "Alice..."
    },
    {
        name: "Mac",
        dialogue: "Yes…"
    },
    {
        name: "Patrisha",
        dialogue: "…he’s come back…"
    },
    {
        name: "Mac",
        dialogue: "I don’t wish to frighten you madame, when I say I do not believe he ever truly left."
    },
    {
        name: "Mac",
        dialogue: "That is why I need to ask you everything I possibly can about that night again."
    },
    {
        name: "...",
        dialogue: "* She’s deeply troubled by what she remembers. But she musters her resolve and begins *"
    },
    {
        name: "Patrisha",
        dialogue: "Y-yes, sir."
    },
    {
        name: "Mac",
        dialogue: "Thank you, when you’re prepared madame."
    },
    {
        name: "...",
        dialogue: "* she takes a breath *"
    },
    {
        name: "Patrisha",
        dialogue: "That night… I heard heated voices. A man and a woman… Alice. She’d walked into that alley where they… where I… found her… and the gentleman followed her…"
    },
    {
        name: "Mac",
        dialogue: "Can you describe him again?"
    },
    {
        name: "Patrisha",
        dialogue: "Honestly sir he was a common enough lookin’ bloke… just one of those faces…"
    },
    {
        name: "Mac",
        dialogue: "I understand… but any information might help…"
    },
    {
        name: "Patrisha",
        dialogue: "…yes sir. He wasn’t very tall… about average height… light-hair… a slightly wider build."
    },
    {
        name: "Mac",
        dialogue: "Good good… every detail helps."
    },
    {
        name: "Patrisha",
        dialogue: "O-Ok."
    },
    {
        name: "...",
        dialogue: "* Visible fear takes hold of her features *"
    },
    {
        name: "...",
        dialogue: "* What came next was horrifying beyond measure *"
    },
    {
        name: "Mac",
        dialogue: "* You place your hand on her shoulder, and give her a reassuring smile *"
    },
    {
        name: "Mac",
        dialogue: "Take your time."
    },
    {
        name: "...",
        dialogue: "* She nods, then proceeds *"
    },
    {
        name: "Patrisha",
        dialogue: "That’s when… that’s when I heard it… that horrible, sickenin’ sound… like a butcher cleavin’ through game."
    },
    {
        name: "Patrisha",
        dialogue: "The man came runnin’ out… covered in blood, pale as a sheet… fleein’ quickly."
    },
    {
        name: "Patrisha",
        dialogue: "I don’t know what took hold of me… but I had to know what happened… what was the sound?… what was all that blood?… was she ok?… my nightmares curse me at night for my curiosity to this day sir."
    },
    {
        name: "Patrisha",
        dialogue: "There she was… bloodied from head to toe… torn open like… like… sir I’d never seen nothin' so horrible in all my life."
    },
    {
        name: "Mac",
        dialogue: "I know… believe me madame… I know."
    },
    {
        name: "...",
        dialogue: "* You pause as you see her trembling, you don’t know what to say… *"
    },
    {
        name: "Mac",
        dialogue: "My sincerest apologies for having to question you on such an unpleasant matter… I beg your forgiveness in all this… and will leave you in peace."
    },
    {
        name: "...",
        dialogue: "* You turn to leave. At that moment she grabs hold of your arm *"
    },
    {
        name: "Patrisha",
        dialogue: "I-I… I can’t tell what was real and what is solely of my nightmares invention… what if it was real sir? What if it wasn’t a terror of my mind…"
    },
    {
        name: "Mac",
        dialogue: "W-What… what are you— ?"
    },
    {
        name: "Patrisha",
        dialogue: "The figure sir, that night, tall and loomin’ in the darkness… starin’ into me soul. It seemed almost... malformed… like the shadows meldin' together in the dark, constantly shiftin'."
    },
    {
        name: "Mac",
        dialogue: "I… I understa—"
    },
    {
        name: "Patrisha",
        dialogue: "It’s in the shadows! It’S iN ThE shADOwS!! IT’S IN THE SHADOWS!!!"
    },
    {
        name: "Mac",
        dialogue: "I’m… I’m so sorry… so very sorry…"
    },
    {
        name: "Patrisha",
        dialogue: "Let it end… please make it end…"
    },
    {
        name: "...",
        dialogue: "* Her pleading words echo to your core, deepening your resolve and determination *"
    },
    {
        name: "Mac",
        dialogue: "I will end this… I *will* find him"
    },
    {
        name: "...",
        dialogue: "* She found a measure of calm in your words before she bid you farewell *"
    },
    {
        name: "...",
        dialogue: "* You should return to your office and go over everything you’ve learned thus far *"
    }
]

const HanburyStreet = () => {
    return(
        <div className="text-white">
            <AutoSave />
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